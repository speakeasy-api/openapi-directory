import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Announcements:
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

    
    def delete_customers_account_announcements_announcement_id_(self, request: operations.DeleteCustomersAccountAnnouncementsAnnouncementIDRequest) -> operations.DeleteCustomersAccountAnnouncementsAnnouncementIDResponse:
        r"""Delete an announcement audio file
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/customers/{account}/announcements/{announcement_id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteCustomersAccountAnnouncementsAnnouncementIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.OneannouncementsPostResponses403ContentApplication1jsonSchema])
                res.oneannouncements_post_responses_403_content_application_1json_schema = out
        elif r.status_code == 410:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.OneannouncementsPostResponses403ContentApplication1jsonSchema])
                res.oneannouncements_post_responses_403_content_application_1json_schema = out

        return res

    
    def get_announcements(self) -> operations.GetAnnouncementsResponse:
        r"""List global announcements
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/announcements"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAnnouncementsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.OneGetResponses200ContentApplication1jsonSchema])
                res.one_get_responses_200_content_application_1json_schema = out
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_customers_account_announcements(self, request: operations.GetCustomersAccountAnnouncementsRequest) -> operations.GetCustomersAccountAnnouncementsResponse:
        r"""List of announcement audio files
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/customers/{account}/announcements", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCustomersAccountAnnouncementsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetCustomersAccountAnnouncements200ApplicationJSON])
                res.get_customers_account_announcements_200_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.OneannouncementsPostResponses403ContentApplication1jsonSchema])
                res.oneannouncements_post_responses_403_content_application_1json_schema = out

        return res

    
    def get_customers_account_announcements_announcement_id_(self, request: operations.GetCustomersAccountAnnouncementsAnnouncementIDRequest) -> operations.GetCustomersAccountAnnouncementsAnnouncementIDResponse:
        r"""Represents an announcement audio file
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/customers/{account}/announcements/{announcement_id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCustomersAccountAnnouncementsAnnouncementIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.OneannouncementsPostResponses201ContentApplication1jsonSchema])
                res.oneannouncements_post_responses_201_content_application_1json_schema = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetCustomersAccountAnnouncementsAnnouncementID404ApplicationJSON])
                res.get_customers_account_announcements_announcement_id_404_application_json_object = out

        return res

    
    def post_announcements(self, request: operations.PostAnnouncementsRequest) -> operations.PostAnnouncementsResponse:
        r"""Add a new announcement audio file
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/announcements"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostAnnouncementsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostAnnouncements201ApplicationJSON])
                res.post_announcements_201_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostAnnouncements400ApplicationJSON])
                res.post_announcements_400_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostAnnouncements403ApplicationJSON])
                res.post_announcements_403_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.OneannouncementsPostResponses403ContentApplication1jsonSchema])
                res.oneannouncements_post_responses_403_content_application_1json_schema = out

        return res

    