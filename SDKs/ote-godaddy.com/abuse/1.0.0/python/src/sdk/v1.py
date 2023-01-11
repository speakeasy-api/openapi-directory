import requests
from sdk.models import operations
from . import utils

class V1:
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

    
    def create_ticket(self, request: operations.CreateTicketRequest) -> operations.CreateTicketResponse:
        r"""Create a new abuse ticket
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/abuse/tickets"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateTicketResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 201:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def get_ticket_info(self, request: operations.GetTicketInfoRequest) -> operations.GetTicketInfoResponse:
        r"""Return the abuse ticket data for a given ticket id
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/abuse/tickets/{ticketId}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTicketInfoResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def get_tickets(self, request: operations.GetTicketsRequest) -> operations.GetTicketsResponse:
        r"""List all abuse tickets ids that match user provided filters
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/abuse/tickets"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTicketsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    