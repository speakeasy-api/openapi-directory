import requests
from typing import Any,Optional
from sdk.models import operations
from . import utils

class Channel:
    _client: requests.Session
    _security_client: requests.Session
    _server_url: str
    _language: str
    _sdk_version: str
    _gen_version: str

    def __init__(self, client: requests.Session, security_client: requests.Session, server_url: str, language: str, sdk_version: str, gen_version: str) -> None:
        self._client = client
        self._security_client = security_client
        self._server_url = server_url
        self._language = language
        self._sdk_version = sdk_version
        self._gen_version = gen_version

    
    def get_channel(self, request: operations.GetChannelRequest) -> operations.GetChannelResponse:
        r"""Channel Detail
        Return the content of the selected channel.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/channel/{channelId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetChannelResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_channel_200_application_json_object = out

        return res

    
    def list_channels(self, request: operations.ListChannelsRequest) -> operations.ListChannelsResponse:
        r"""Channel Collection
        If you are interested in a list of channels that have had there schedule updated you can filter by the following query params.
         - scheduleStart
         - scheduleEnd
         - scheduleUpdatedSince
        
        adding these query params will filter the channel collection to only return channels that have been updated within the given range, updatedSince stores the state of your previous call.
        
        Example Usage: Every 10 minutes get me the channels that have updated schedules for the next 2 weeks.
        
        /channel?platform={uuid}&scheduleStart={today}&scheduleEnd={today + 2 weeks}&updatedSince={10 minutes ago}
        
        Also please note epg numbers are only exposed when a platform and region are passed to the query.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/channel"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListChannelsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.list_channels_200_application_json_object = out

        return res

    