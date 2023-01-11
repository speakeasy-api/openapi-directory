import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Webhooks:
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

    
    def create_webhook(self, request: operations.CreateWebhookRequest) -> operations.CreateWebhookResponse:
        r"""Create a Webhook
        Create a webook for specific events in the environment.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/environment/webhooks"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateWebhookResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CreateWebhookResponseBody])
                res.create_webhook_response_body = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseBody])
                res.error_response_body = out
        elif r.status_code == 409:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseBody])
                res.error_response_body = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseBody])
                res.error_response_body = out

        return res

    
    def delete_webhook(self, request: operations.DeleteWebhookRequest) -> operations.DeleteWebhookResponse:
        r"""Delete Webhook By ID
        Delete a webhook
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/environment/webhooks/{webhook_id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteWebhookResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            if utils.match_content_type(content_type, "application/json"):
                res.empty_response_body = r.content
            if utils.match_content_type(content_type, "text/plain"):
                res.empty_response_body = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseBody])
                res.error_response_body = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseBody])
                res.error_response_body = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseBody])
                res.error_response_body = out

        return res

    
    def get_webhook_by_id(self, request: operations.GetWebhookByIDRequest) -> operations.GetWebhookByIDResponse:
        r"""Get Webhook By ID
        Retrieve individual webhook by an ID
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/environment/webhooks/{webhook_id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetWebhookByIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetWebhookByIDResponseBody])
                res.get_webhook_by_id_response_body = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseBody])
                res.error_response_body = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseBody])
                res.error_response_body = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseBody])
                res.error_response_body = out

        return res

    
    def list_webhooks(self) -> operations.ListWebhooksResponse:
        r"""List Webhooks
        List all webhooks currently enabled for the account.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/environment/webhooks"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ListWebhooksResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.Webhook]])
                res.list_webhooks_response_body = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseBody])
                res.error_response_body = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseBody])
                res.error_response_body = out

        return res

    
    def update_webhook(self, request: operations.UpdateWebhookRequest) -> operations.UpdateWebhookResponse:
        r"""Update a Webhook
        Update the webhook url property
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/environment/webhooks/{webhook_id}", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateWebhookResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            if utils.match_content_type(content_type, "application/json"):
                res.empty_response_body = r.content
            if utils.match_content_type(content_type, "text/plain"):
                res.empty_response_body = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseBody])
                res.error_response_body = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseBody])
                res.error_response_body = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseBody])
                res.error_response_body = out

        return res

    