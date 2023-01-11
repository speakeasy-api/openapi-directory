import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Extras:
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

    
    def extras_choices_list(self) -> operations.ExtrasChoicesListResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/extras/_choices/"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ExtrasChoicesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def extras_choices_read(self, request: operations.ExtrasChoicesReadRequest) -> operations.ExtrasChoicesReadResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/extras/_choices/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ExtrasChoicesReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def extras_config_contexts_create(self, request: operations.ExtrasConfigContextsCreateRequest) -> operations.ExtrasConfigContextsCreateResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/extras/config-contexts/"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ExtrasConfigContextsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConfigContext])
                res.config_context = out

        return res

    
    def extras_config_contexts_delete(self, request: operations.ExtrasConfigContextsDeleteRequest) -> operations.ExtrasConfigContextsDeleteResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/extras/config-contexts/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ExtrasConfigContextsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def extras_config_contexts_list(self, request: operations.ExtrasConfigContextsListRequest) -> operations.ExtrasConfigContextsListResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/extras/config-contexts/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ExtrasConfigContextsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ExtrasConfigContextsList200ApplicationJSON])
                res.extras_config_contexts_list_200_application_json_object = out

        return res

    
    def extras_config_contexts_partial_update(self, request: operations.ExtrasConfigContextsPartialUpdateRequest) -> operations.ExtrasConfigContextsPartialUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/extras/config-contexts/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PATCH", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ExtrasConfigContextsPartialUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConfigContext])
                res.config_context = out

        return res

    
    def extras_config_contexts_read(self, request: operations.ExtrasConfigContextsReadRequest) -> operations.ExtrasConfigContextsReadResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/extras/config-contexts/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ExtrasConfigContextsReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConfigContext])
                res.config_context = out

        return res

    
    def extras_config_contexts_update(self, request: operations.ExtrasConfigContextsUpdateRequest) -> operations.ExtrasConfigContextsUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/extras/config-contexts/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ExtrasConfigContextsUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConfigContext])
                res.config_context = out

        return res

    
    def extras_export_templates_create(self, request: operations.ExtrasExportTemplatesCreateRequest) -> operations.ExtrasExportTemplatesCreateResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/extras/export-templates/"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ExtrasExportTemplatesCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ExportTemplate])
                res.export_template = out

        return res

    
    def extras_export_templates_delete(self, request: operations.ExtrasExportTemplatesDeleteRequest) -> operations.ExtrasExportTemplatesDeleteResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/extras/export-templates/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ExtrasExportTemplatesDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def extras_export_templates_list(self, request: operations.ExtrasExportTemplatesListRequest) -> operations.ExtrasExportTemplatesListResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/extras/export-templates/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ExtrasExportTemplatesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ExtrasExportTemplatesList200ApplicationJSON])
                res.extras_export_templates_list_200_application_json_object = out

        return res

    
    def extras_export_templates_partial_update(self, request: operations.ExtrasExportTemplatesPartialUpdateRequest) -> operations.ExtrasExportTemplatesPartialUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/extras/export-templates/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PATCH", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ExtrasExportTemplatesPartialUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ExportTemplate])
                res.export_template = out

        return res

    
    def extras_export_templates_read(self, request: operations.ExtrasExportTemplatesReadRequest) -> operations.ExtrasExportTemplatesReadResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/extras/export-templates/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ExtrasExportTemplatesReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ExportTemplate])
                res.export_template = out

        return res

    
    def extras_export_templates_update(self, request: operations.ExtrasExportTemplatesUpdateRequest) -> operations.ExtrasExportTemplatesUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/extras/export-templates/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ExtrasExportTemplatesUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ExportTemplate])
                res.export_template = out

        return res

    
    def extras_graphs_create(self, request: operations.ExtrasGraphsCreateRequest) -> operations.ExtrasGraphsCreateResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/extras/graphs/"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ExtrasGraphsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Graph])
                res.graph = out

        return res

    
    def extras_graphs_delete(self, request: operations.ExtrasGraphsDeleteRequest) -> operations.ExtrasGraphsDeleteResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/extras/graphs/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ExtrasGraphsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def extras_graphs_list(self, request: operations.ExtrasGraphsListRequest) -> operations.ExtrasGraphsListResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/extras/graphs/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ExtrasGraphsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ExtrasGraphsList200ApplicationJSON])
                res.extras_graphs_list_200_application_json_object = out

        return res

    
    def extras_graphs_partial_update(self, request: operations.ExtrasGraphsPartialUpdateRequest) -> operations.ExtrasGraphsPartialUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/extras/graphs/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PATCH", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ExtrasGraphsPartialUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Graph])
                res.graph = out

        return res

    
    def extras_graphs_read(self, request: operations.ExtrasGraphsReadRequest) -> operations.ExtrasGraphsReadResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/extras/graphs/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ExtrasGraphsReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Graph])
                res.graph = out

        return res

    
    def extras_graphs_update(self, request: operations.ExtrasGraphsUpdateRequest) -> operations.ExtrasGraphsUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/extras/graphs/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ExtrasGraphsUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Graph])
                res.graph = out

        return res

    
    def extras_image_attachments_create(self, request: operations.ExtrasImageAttachmentsCreateRequest) -> operations.ExtrasImageAttachmentsCreateResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/extras/image-attachments/"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ExtrasImageAttachmentsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ImageAttachment])
                res.image_attachment = out

        return res

    
    def extras_image_attachments_delete(self, request: operations.ExtrasImageAttachmentsDeleteRequest) -> operations.ExtrasImageAttachmentsDeleteResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/extras/image-attachments/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ExtrasImageAttachmentsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def extras_image_attachments_list(self, request: operations.ExtrasImageAttachmentsListRequest) -> operations.ExtrasImageAttachmentsListResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/extras/image-attachments/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ExtrasImageAttachmentsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ExtrasImageAttachmentsList200ApplicationJSON])
                res.extras_image_attachments_list_200_application_json_object = out

        return res

    
    def extras_image_attachments_partial_update(self, request: operations.ExtrasImageAttachmentsPartialUpdateRequest) -> operations.ExtrasImageAttachmentsPartialUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/extras/image-attachments/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PATCH", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ExtrasImageAttachmentsPartialUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ImageAttachment])
                res.image_attachment = out

        return res

    
    def extras_image_attachments_read(self, request: operations.ExtrasImageAttachmentsReadRequest) -> operations.ExtrasImageAttachmentsReadResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/extras/image-attachments/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ExtrasImageAttachmentsReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ImageAttachment])
                res.image_attachment = out

        return res

    
    def extras_image_attachments_update(self, request: operations.ExtrasImageAttachmentsUpdateRequest) -> operations.ExtrasImageAttachmentsUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/extras/image-attachments/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ExtrasImageAttachmentsUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ImageAttachment])
                res.image_attachment = out

        return res

    
    def extras_object_changes_list(self, request: operations.ExtrasObjectChangesListRequest) -> operations.ExtrasObjectChangesListResponse:
        r"""Retrieve a list of recent changes.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/extras/object-changes/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ExtrasObjectChangesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ExtrasObjectChangesList200ApplicationJSON])
                res.extras_object_changes_list_200_application_json_object = out

        return res

    
    def extras_object_changes_read(self, request: operations.ExtrasObjectChangesReadRequest) -> operations.ExtrasObjectChangesReadResponse:
        r"""Retrieve a list of recent changes.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/extras/object-changes/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ExtrasObjectChangesReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObjectChange])
                res.object_change = out

        return res

    
    def extras_recent_activity_list(self, request: operations.ExtrasRecentActivityListRequest) -> operations.ExtrasRecentActivityListResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/extras/recent-activity/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ExtrasRecentActivityListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ExtrasRecentActivityList200ApplicationJSON])
                res.extras_recent_activity_list_200_application_json_object = out

        return res

    
    def extras_recent_activity_read(self, request: operations.ExtrasRecentActivityReadRequest) -> operations.ExtrasRecentActivityReadResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/extras/recent-activity/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ExtrasRecentActivityReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UserAction])
                res.user_action = out

        return res

    
    def extras_tags_create(self, request: operations.ExtrasTagsCreateRequest) -> operations.ExtrasTagsCreateResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/extras/tags/"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ExtrasTagsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Tag])
                res.tag = out

        return res

    
    def extras_tags_delete(self, request: operations.ExtrasTagsDeleteRequest) -> operations.ExtrasTagsDeleteResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/extras/tags/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ExtrasTagsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def extras_tags_list(self, request: operations.ExtrasTagsListRequest) -> operations.ExtrasTagsListResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/extras/tags/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ExtrasTagsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ExtrasTagsList200ApplicationJSON])
                res.extras_tags_list_200_application_json_object = out

        return res

    
    def extras_tags_partial_update(self, request: operations.ExtrasTagsPartialUpdateRequest) -> operations.ExtrasTagsPartialUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/extras/tags/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PATCH", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ExtrasTagsPartialUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Tag])
                res.tag = out

        return res

    
    def extras_tags_read(self, request: operations.ExtrasTagsReadRequest) -> operations.ExtrasTagsReadResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/extras/tags/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ExtrasTagsReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Tag])
                res.tag = out

        return res

    
    def extras_tags_update(self, request: operations.ExtrasTagsUpdateRequest) -> operations.ExtrasTagsUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/extras/tags/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ExtrasTagsUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Tag])
                res.tag = out

        return res

    
    def extras_topology_maps_create(self, request: operations.ExtrasTopologyMapsCreateRequest) -> operations.ExtrasTopologyMapsCreateResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/extras/topology-maps/"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ExtrasTopologyMapsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TopologyMap])
                res.topology_map = out

        return res

    
    def extras_topology_maps_delete(self, request: operations.ExtrasTopologyMapsDeleteRequest) -> operations.ExtrasTopologyMapsDeleteResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/extras/topology-maps/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ExtrasTopologyMapsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def extras_topology_maps_list(self, request: operations.ExtrasTopologyMapsListRequest) -> operations.ExtrasTopologyMapsListResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/extras/topology-maps/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ExtrasTopologyMapsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ExtrasTopologyMapsList200ApplicationJSON])
                res.extras_topology_maps_list_200_application_json_object = out

        return res

    
    def extras_topology_maps_partial_update(self, request: operations.ExtrasTopologyMapsPartialUpdateRequest) -> operations.ExtrasTopologyMapsPartialUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/extras/topology-maps/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PATCH", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ExtrasTopologyMapsPartialUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TopologyMap])
                res.topology_map = out

        return res

    
    def extras_topology_maps_read(self, request: operations.ExtrasTopologyMapsReadRequest) -> operations.ExtrasTopologyMapsReadResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/extras/topology-maps/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ExtrasTopologyMapsReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TopologyMap])
                res.topology_map = out

        return res

    
    def extras_topology_maps_render(self, request: operations.ExtrasTopologyMapsRenderRequest) -> operations.ExtrasTopologyMapsRenderResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/extras/topology-maps/{id}/render/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ExtrasTopologyMapsRenderResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TopologyMap])
                res.topology_map = out

        return res

    
    def extras_topology_maps_update(self, request: operations.ExtrasTopologyMapsUpdateRequest) -> operations.ExtrasTopologyMapsUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/extras/topology-maps/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ExtrasTopologyMapsUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TopologyMap])
                res.topology_map = out

        return res

    