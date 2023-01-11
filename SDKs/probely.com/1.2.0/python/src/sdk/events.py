import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Events:
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

    
    def delete_targets_target_id_webhooks_id_(self, request: operations.DeleteTargetsTargetIDWebhooksIDRequest) -> operations.DeleteTargetsTargetIDWebhooksIDResponse:
        r"""Delete target webhook
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/targets/{target_id}/webhooks/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteTargetsTargetIDWebhooksIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteTargetsTargetIDWebhooksID401ApplicationJSON])
                res.delete_targets_target_id_webhooks_id_401_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteTargetsTargetIDWebhooksID403ApplicationJSON])
                res.delete_targets_target_id_webhooks_id_403_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteTargetsTargetIDWebhooksID404ApplicationJSON])
                res.delete_targets_target_id_webhooks_id_404_application_json_object = out

        return res

    
    def delete_webhooks_id_(self, request: operations.DeleteWebhooksIDRequest) -> operations.DeleteWebhooksIDResponse:
        r"""Delete account webhook
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/webhooks/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteWebhooksIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteWebhooksID401ApplicationJSON])
                res.delete_webhooks_id_401_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteWebhooksID403ApplicationJSON])
                res.delete_webhooks_id_403_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteWebhooksID404ApplicationJSON])
                res.delete_webhooks_id_404_application_json_object = out

        return res

    
    def get_events_(self) -> operations.GetEventsResponse:
        r"""List account events
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/events/"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetEventsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetEvents200ApplicationJSON])
                res.get_events_200_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetEvents401ApplicationJSON])
                res.get_events_401_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetEvents403ApplicationJSON])
                res.get_events_403_application_json_object = out

        return res

    
    def get_events_id_(self, request: operations.GetEventsIDRequest) -> operations.GetEventsIDResponse:
        r"""Retrieve account event
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/events/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetEventsIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Event])
                res.event = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetEventsID401ApplicationJSON])
                res.get_events_id_401_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetEventsID403ApplicationJSON])
                res.get_events_id_403_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetEventsID404ApplicationJSON])
                res.get_events_id_404_application_json_object = out

        return res

    
    def get_targets_target_id_events_(self, request: operations.GetTargetsTargetIDEventsRequest) -> operations.GetTargetsTargetIDEventsResponse:
        r"""List target events
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/targets/{target_id}/events/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTargetsTargetIDEventsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetTargetsTargetIDEvents200ApplicationJSON])
                res.get_targets_target_id_events_200_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetTargetsTargetIDEvents401ApplicationJSON])
                res.get_targets_target_id_events_401_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetTargetsTargetIDEvents403ApplicationJSON])
                res.get_targets_target_id_events_403_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetTargetsTargetIDEvents404ApplicationJSON])
                res.get_targets_target_id_events_404_application_json_object = out

        return res

    
    def get_targets_target_id_events_id_(self, request: operations.GetTargetsTargetIDEventsIDRequest) -> operations.GetTargetsTargetIDEventsIDResponse:
        r"""Retrieve target event
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/targets/{target_id}/events/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTargetsTargetIDEventsIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Event])
                res.event = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetTargetsTargetIDEventsID401ApplicationJSON])
                res.get_targets_target_id_events_id_401_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetTargetsTargetIDEventsID403ApplicationJSON])
                res.get_targets_target_id_events_id_403_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetTargetsTargetIDEventsID404ApplicationJSON])
                res.get_targets_target_id_events_id_404_application_json_object = out

        return res

    
    def get_targets_target_id_webhooks_(self, request: operations.GetTargetsTargetIDWebhooksRequest) -> operations.GetTargetsTargetIDWebhooksResponse:
        r"""List target webhooks
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/targets/{target_id}/webhooks/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTargetsTargetIDWebhooksResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetTargetsTargetIDWebhooks200ApplicationJSON])
                res.get_targets_target_id_webhooks_200_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetTargetsTargetIDWebhooks401ApplicationJSON])
                res.get_targets_target_id_webhooks_401_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetTargetsTargetIDWebhooks403ApplicationJSON])
                res.get_targets_target_id_webhooks_403_application_json_object = out

        return res

    
    def get_targets_target_id_webhooks_id_(self, request: operations.GetTargetsTargetIDWebhooksIDRequest) -> operations.GetTargetsTargetIDWebhooksIDResponse:
        r"""Retrieve target webhook
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/targets/{target_id}/webhooks/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTargetsTargetIDWebhooksIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Webhook])
                res.webhook = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetTargetsTargetIDWebhooksID401ApplicationJSON])
                res.get_targets_target_id_webhooks_id_401_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetTargetsTargetIDWebhooksID403ApplicationJSON])
                res.get_targets_target_id_webhooks_id_403_application_json_object = out

        return res

    
    def get_webhooks_(self) -> operations.GetWebhooksResponse:
        r"""List account webhooks
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/webhooks/"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetWebhooksResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetWebhooks200ApplicationJSON])
                res.get_webhooks_200_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetWebhooks401ApplicationJSON])
                res.get_webhooks_401_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetWebhooks403ApplicationJSON])
                res.get_webhooks_403_application_json_object = out

        return res

    
    def get_webhooks_id_(self, request: operations.GetWebhooksIDRequest) -> operations.GetWebhooksIDResponse:
        r"""Retrieve account webhook
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/webhooks/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetWebhooksIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Webhook])
                res.webhook = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetWebhooksID401ApplicationJSON])
                res.get_webhooks_id_401_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetWebhooksID403ApplicationJSON])
                res.get_webhooks_id_403_application_json_object = out

        return res

    
    def patch_targets_target_id_webhooks_id_(self, request: operations.PatchTargetsTargetIDWebhooksIDRequest) -> operations.PatchTargetsTargetIDWebhooksIDResponse:
        r"""Partial update target webhook
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/targets/{target_id}/webhooks/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PATCH", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PatchTargetsTargetIDWebhooksIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Webhook])
                res.webhook = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PatchTargetsTargetIDWebhooksID400ApplicationJSON])
                res.patch_targets_target_id_webhooks_id_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PatchTargetsTargetIDWebhooksID401ApplicationJSON])
                res.patch_targets_target_id_webhooks_id_401_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PatchTargetsTargetIDWebhooksID403ApplicationJSON])
                res.patch_targets_target_id_webhooks_id_403_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PatchTargetsTargetIDWebhooksID404ApplicationJSON])
                res.patch_targets_target_id_webhooks_id_404_application_json_object = out

        return res

    
    def patch_webhooks_id_(self, request: operations.PatchWebhooksIDRequest) -> operations.PatchWebhooksIDResponse:
        r"""Partial update account webhook
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/webhooks/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PATCH", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PatchWebhooksIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Webhook])
                res.webhook = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PatchWebhooksID400ApplicationJSON])
                res.patch_webhooks_id_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PatchWebhooksID401ApplicationJSON])
                res.patch_webhooks_id_401_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PatchWebhooksID403ApplicationJSON])
                res.patch_webhooks_id_403_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PatchWebhooksID404ApplicationJSON])
                res.patch_webhooks_id_404_application_json_object = out

        return res

    
    def post_targets_target_id_webhooks_(self, request: operations.PostTargetsTargetIDWebhooksRequest) -> operations.PostTargetsTargetIDWebhooksResponse:
        r"""Create new target webhook
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/targets/{target_id}/webhooks/", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostTargetsTargetIDWebhooksResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Webhook])
                res.webhook = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostTargetsTargetIDWebhooks400ApplicationJSON])
                res.post_targets_target_id_webhooks_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostTargetsTargetIDWebhooks401ApplicationJSON])
                res.post_targets_target_id_webhooks_401_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostTargetsTargetIDWebhooks403ApplicationJSON])
                res.post_targets_target_id_webhooks_403_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostTargetsTargetIDWebhooks404ApplicationJSON])
                res.post_targets_target_id_webhooks_404_application_json_object = out

        return res

    
    def post_webhooks_(self, request: operations.PostWebhooksRequest) -> operations.PostWebhooksResponse:
        r"""Create new account webhook
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/webhooks/"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostWebhooksResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Webhook])
                res.webhook = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostWebhooks400ApplicationJSON])
                res.post_webhooks_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostWebhooks401ApplicationJSON])
                res.post_webhooks_401_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostWebhooks403ApplicationJSON])
                res.post_webhooks_403_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostWebhooks404ApplicationJSON])
                res.post_webhooks_404_application_json_object = out

        return res

    
    def put_targets_target_id_webhooks_id_(self, request: operations.PutTargetsTargetIDWebhooksIDRequest) -> operations.PutTargetsTargetIDWebhooksIDResponse:
        r"""Update target webhook
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/targets/{target_id}/webhooks/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutTargetsTargetIDWebhooksIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Webhook])
                res.webhook = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutTargetsTargetIDWebhooksID400ApplicationJSON])
                res.put_targets_target_id_webhooks_id_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutTargetsTargetIDWebhooksID401ApplicationJSON])
                res.put_targets_target_id_webhooks_id_401_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutTargetsTargetIDWebhooksID403ApplicationJSON])
                res.put_targets_target_id_webhooks_id_403_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutTargetsTargetIDWebhooksID404ApplicationJSON])
                res.put_targets_target_id_webhooks_id_404_application_json_object = out

        return res

    
    def put_webhooks_id_(self, request: operations.PutWebhooksIDRequest) -> operations.PutWebhooksIDResponse:
        r"""Update account webhook
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/webhooks/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutWebhooksIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Webhook])
                res.webhook = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutWebhooksID400ApplicationJSON])
                res.put_webhooks_id_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutWebhooksID401ApplicationJSON])
                res.put_webhooks_id_401_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutWebhooksID403ApplicationJSON])
                res.put_webhooks_id_403_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutWebhooksID404ApplicationJSON])
                res.put_webhooks_id_404_application_json_object = out

        return res

    