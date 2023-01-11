import requests
from typing import Any,Optional
from sdk.models import operations
from . import utils

class Schedule:
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

    
    def list_schedule(self, request: operations.ListScheduleRequest) -> operations.ListScheduleResponse:
        r"""Schedule Collection
        The schedule endpoint produces a linear TV schedule for a given channel and date range.
        
         - The date range supplied must be no larger than 21 days.
         - If no end data is passed the API will default to start date + 24 hours.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/schedule"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListScheduleResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.list_schedule_200_application_json_object = out

        return res

    