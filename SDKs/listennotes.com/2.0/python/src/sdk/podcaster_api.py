import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class PodcasterAPI:
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

    
    def delete_podcast_by_id(self, request: operations.DeletePodcastByIDRequest) -> operations.DeletePodcastByIDResponse:
        r"""Request to delete a podcast
        Podcast hosting services can use this endpoint to streamline the process of podcast deletion on behave of their users (podcasters). We will review the deletion request within 12 hours. If the podcast is already deleted, the \"status\" field in the response will be \"deleted\". Otherwise, the status field will be \"in review\". If you want to get a notification once the podcast is deleted, you can configure a webhook url in the dashboard: listennotes.com/api/dashboard/#webhooks
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/podcasts/{id}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("DELETE", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DeletePodcastByIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DeletePodcastResponse])
                res.delete_podcast_response = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 429:
            pass
        elif r.status_code >= 500 and r.status_code < 600:
            pass

        return res

    
    def submit_podcast(self, request: operations.SubmitPodcastRequest) -> operations.SubmitPodcastResponse:
        r"""Submit a podcast to Listen Notes database
        Podcast hosting services can use this endpoint to help your users directly submit a new podcast to Listen Notes database. If the podcast doesn't exist in the database, \"status\" in the response will be \"in review\", and we'll review it within 12 hours. If the podcast exists, \"status\" in the response will be \"found\". You can use `POST /podcasts` to check if multiple podcasts exist in the database. If you want to get a notification once the podcast is accepted, you can either specify the \"email\" parameter or configure a webhook url in the dashboard: listennotes.com/api/dashboard/#webhooks
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/podcasts/submit"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SubmitPodcastResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SubmitPodcastResponse])
                res.submit_podcast_response = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 429:
            pass
        elif r.status_code >= 500 and r.status_code < 600:
            pass

        return res

    