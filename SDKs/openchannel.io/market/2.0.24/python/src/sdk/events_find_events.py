import requests
from sdk.models import operations
from . import utils

class EventsFindEvents:
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

    
    def get_events_event_id_(self, request: operations.GetEventsEventIDRequest) -> operations.GetEventsEventIDResponse:
        r"""Returns an event
        - Results are returned for the market provided within the basic authentication credentials
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/events/{eventId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetEventsEventIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    