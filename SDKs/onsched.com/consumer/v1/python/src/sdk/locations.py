import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils

class Locations:
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

    
    def get_consumer_v1_locations(self, request: operations.GetConsumerV1LocationsRequest) -> operations.GetConsumerV1LocationsResponse:
        r"""Returns a list of business locations.
        Use this api end point if you have multiple business locations in your company.
        The results are returned in pages. Use the offset and limit parameters to control the page start and size. Default offset is 0, and limit is 20.
        Use the other query parameters to optionally filter the results list.
        
        To leverage the search by serviceId, setup locationService's see endpoints in this controller.
        Location services allow you to exclude company scoped services for locations that do not offer them.
        You can explicitly define which services are offered or if none are defined then all services are offererd
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/consumer/v1/locations"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetConsumerV1LocationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.location_list_view_model = out

        return res

    
    def get_consumer_v1_locations_id_(self, request: operations.GetConsumerV1LocationsIDRequest) -> operations.GetConsumerV1LocationsIDResponse:
        r"""Returns a business location object.
        The result returned is a single location object. An id is required to find the location. Find location id's using the GET consumer/v1/locations end point,
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/consumer/v1/locations/{id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetConsumerV1LocationsIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LocationViewModel])
                res.location_view_model = out

        return res

    