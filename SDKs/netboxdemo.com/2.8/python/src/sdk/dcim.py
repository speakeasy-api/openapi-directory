import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Dcim:
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

    
    def dcim_cables_create(self, request: operations.DcimCablesCreateRequest) -> operations.DcimCablesCreateResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/dcim/cables/"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimCablesCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Cable])
                res.cable = out

        return res

    
    def dcim_cables_delete(self, request: operations.DcimCablesDeleteRequest) -> operations.DcimCablesDeleteResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/cables/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimCablesDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def dcim_cables_list(self, request: operations.DcimCablesListRequest) -> operations.DcimCablesListResponse:
        r"""Call to super to allow for caching
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/dcim/cables/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimCablesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DcimCablesList200ApplicationJSON])
                res.dcim_cables_list_200_application_json_object = out

        return res

    
    def dcim_cables_partial_update(self, request: operations.DcimCablesPartialUpdateRequest) -> operations.DcimCablesPartialUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/cables/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PATCH", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimCablesPartialUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Cable])
                res.cable = out

        return res

    
    def dcim_cables_read(self, request: operations.DcimCablesReadRequest) -> operations.DcimCablesReadResponse:
        r"""Call to super to allow for caching
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/cables/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimCablesReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Cable])
                res.cable = out

        return res

    
    def dcim_cables_update(self, request: operations.DcimCablesUpdateRequest) -> operations.DcimCablesUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/cables/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimCablesUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Cable])
                res.cable = out

        return res

    
    def dcim_connected_device_list(self, request: operations.DcimConnectedDeviceListRequest) -> operations.DcimConnectedDeviceListResponse:
        r"""This endpoint allows a user to determine what device (if any) is connected to a given peer device and peer
        interface. This is useful in a situation where a device boots with no configuration, but can detect its neighbors
        via a protocol such as LLDP. Two query parameters must be included in the request:
        
        * `peer_device`: The name of the peer device
        * `peer_interface`: The name of the peer interface
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/dcim/connected-device/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimConnectedDeviceListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Device])
                res.device = out

        return res

    
    def dcim_console_connections_list(self, request: operations.DcimConsoleConnectionsListRequest) -> operations.DcimConsoleConnectionsListResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/dcim/console-connections/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimConsoleConnectionsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DcimConsoleConnectionsList200ApplicationJSON])
                res.dcim_console_connections_list_200_application_json_object = out

        return res

    
    def dcim_console_port_templates_create(self, request: operations.DcimConsolePortTemplatesCreateRequest) -> operations.DcimConsolePortTemplatesCreateResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/dcim/console-port-templates/"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimConsolePortTemplatesCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConsolePortTemplate])
                res.console_port_template = out

        return res

    
    def dcim_console_port_templates_delete(self, request: operations.DcimConsolePortTemplatesDeleteRequest) -> operations.DcimConsolePortTemplatesDeleteResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/console-port-templates/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimConsolePortTemplatesDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def dcim_console_port_templates_list(self, request: operations.DcimConsolePortTemplatesListRequest) -> operations.DcimConsolePortTemplatesListResponse:
        r"""Call to super to allow for caching
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/dcim/console-port-templates/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimConsolePortTemplatesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DcimConsolePortTemplatesList200ApplicationJSON])
                res.dcim_console_port_templates_list_200_application_json_object = out

        return res

    
    def dcim_console_port_templates_partial_update(self, request: operations.DcimConsolePortTemplatesPartialUpdateRequest) -> operations.DcimConsolePortTemplatesPartialUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/console-port-templates/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PATCH", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimConsolePortTemplatesPartialUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConsolePortTemplate])
                res.console_port_template = out

        return res

    
    def dcim_console_port_templates_read(self, request: operations.DcimConsolePortTemplatesReadRequest) -> operations.DcimConsolePortTemplatesReadResponse:
        r"""Call to super to allow for caching
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/console-port-templates/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimConsolePortTemplatesReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConsolePortTemplate])
                res.console_port_template = out

        return res

    
    def dcim_console_port_templates_update(self, request: operations.DcimConsolePortTemplatesUpdateRequest) -> operations.DcimConsolePortTemplatesUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/console-port-templates/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimConsolePortTemplatesUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConsolePortTemplate])
                res.console_port_template = out

        return res

    
    def dcim_console_ports_create(self, request: operations.DcimConsolePortsCreateRequest) -> operations.DcimConsolePortsCreateResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/dcim/console-ports/"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimConsolePortsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConsolePort])
                res.console_port = out

        return res

    
    def dcim_console_ports_delete(self, request: operations.DcimConsolePortsDeleteRequest) -> operations.DcimConsolePortsDeleteResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/console-ports/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimConsolePortsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def dcim_console_ports_list(self, request: operations.DcimConsolePortsListRequest) -> operations.DcimConsolePortsListResponse:
        r"""Call to super to allow for caching
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/dcim/console-ports/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimConsolePortsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DcimConsolePortsList200ApplicationJSON])
                res.dcim_console_ports_list_200_application_json_object = out

        return res

    
    def dcim_console_ports_partial_update(self, request: operations.DcimConsolePortsPartialUpdateRequest) -> operations.DcimConsolePortsPartialUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/console-ports/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PATCH", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimConsolePortsPartialUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConsolePort])
                res.console_port = out

        return res

    
    def dcim_console_ports_read(self, request: operations.DcimConsolePortsReadRequest) -> operations.DcimConsolePortsReadResponse:
        r"""Call to super to allow for caching
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/console-ports/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimConsolePortsReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConsolePort])
                res.console_port = out

        return res

    
    def dcim_console_ports_trace(self, request: operations.DcimConsolePortsTraceRequest) -> operations.DcimConsolePortsTraceResponse:
        r"""Trace a complete cable path and return each segment as a three-tuple of (termination, cable, termination).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/console-ports/{id}/trace/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimConsolePortsTraceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConsolePort])
                res.console_port = out

        return res

    
    def dcim_console_ports_update(self, request: operations.DcimConsolePortsUpdateRequest) -> operations.DcimConsolePortsUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/console-ports/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimConsolePortsUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConsolePort])
                res.console_port = out

        return res

    
    def dcim_console_server_port_templates_create(self, request: operations.DcimConsoleServerPortTemplatesCreateRequest) -> operations.DcimConsoleServerPortTemplatesCreateResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/dcim/console-server-port-templates/"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimConsoleServerPortTemplatesCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConsoleServerPortTemplate])
                res.console_server_port_template = out

        return res

    
    def dcim_console_server_port_templates_delete(self, request: operations.DcimConsoleServerPortTemplatesDeleteRequest) -> operations.DcimConsoleServerPortTemplatesDeleteResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/console-server-port-templates/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimConsoleServerPortTemplatesDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def dcim_console_server_port_templates_list(self, request: operations.DcimConsoleServerPortTemplatesListRequest) -> operations.DcimConsoleServerPortTemplatesListResponse:
        r"""Call to super to allow for caching
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/dcim/console-server-port-templates/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimConsoleServerPortTemplatesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DcimConsoleServerPortTemplatesList200ApplicationJSON])
                res.dcim_console_server_port_templates_list_200_application_json_object = out

        return res

    
    def dcim_console_server_port_templates_partial_update(self, request: operations.DcimConsoleServerPortTemplatesPartialUpdateRequest) -> operations.DcimConsoleServerPortTemplatesPartialUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/console-server-port-templates/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PATCH", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimConsoleServerPortTemplatesPartialUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConsoleServerPortTemplate])
                res.console_server_port_template = out

        return res

    
    def dcim_console_server_port_templates_read(self, request: operations.DcimConsoleServerPortTemplatesReadRequest) -> operations.DcimConsoleServerPortTemplatesReadResponse:
        r"""Call to super to allow for caching
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/console-server-port-templates/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimConsoleServerPortTemplatesReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConsoleServerPortTemplate])
                res.console_server_port_template = out

        return res

    
    def dcim_console_server_port_templates_update(self, request: operations.DcimConsoleServerPortTemplatesUpdateRequest) -> operations.DcimConsoleServerPortTemplatesUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/console-server-port-templates/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimConsoleServerPortTemplatesUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConsoleServerPortTemplate])
                res.console_server_port_template = out

        return res

    
    def dcim_console_server_ports_create(self, request: operations.DcimConsoleServerPortsCreateRequest) -> operations.DcimConsoleServerPortsCreateResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/dcim/console-server-ports/"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimConsoleServerPortsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConsoleServerPort])
                res.console_server_port = out

        return res

    
    def dcim_console_server_ports_delete(self, request: operations.DcimConsoleServerPortsDeleteRequest) -> operations.DcimConsoleServerPortsDeleteResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/console-server-ports/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimConsoleServerPortsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def dcim_console_server_ports_list(self, request: operations.DcimConsoleServerPortsListRequest) -> operations.DcimConsoleServerPortsListResponse:
        r"""Call to super to allow for caching
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/dcim/console-server-ports/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimConsoleServerPortsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DcimConsoleServerPortsList200ApplicationJSON])
                res.dcim_console_server_ports_list_200_application_json_object = out

        return res

    
    def dcim_console_server_ports_partial_update(self, request: operations.DcimConsoleServerPortsPartialUpdateRequest) -> operations.DcimConsoleServerPortsPartialUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/console-server-ports/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PATCH", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimConsoleServerPortsPartialUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConsoleServerPort])
                res.console_server_port = out

        return res

    
    def dcim_console_server_ports_read(self, request: operations.DcimConsoleServerPortsReadRequest) -> operations.DcimConsoleServerPortsReadResponse:
        r"""Call to super to allow for caching
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/console-server-ports/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimConsoleServerPortsReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConsoleServerPort])
                res.console_server_port = out

        return res

    
    def dcim_console_server_ports_trace(self, request: operations.DcimConsoleServerPortsTraceRequest) -> operations.DcimConsoleServerPortsTraceResponse:
        r"""Trace a complete cable path and return each segment as a three-tuple of (termination, cable, termination).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/console-server-ports/{id}/trace/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimConsoleServerPortsTraceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConsoleServerPort])
                res.console_server_port = out

        return res

    
    def dcim_console_server_ports_update(self, request: operations.DcimConsoleServerPortsUpdateRequest) -> operations.DcimConsoleServerPortsUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/console-server-ports/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimConsoleServerPortsUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConsoleServerPort])
                res.console_server_port = out

        return res

    
    def dcim_device_bay_templates_create(self, request: operations.DcimDeviceBayTemplatesCreateRequest) -> operations.DcimDeviceBayTemplatesCreateResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/dcim/device-bay-templates/"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimDeviceBayTemplatesCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DeviceBayTemplate])
                res.device_bay_template = out

        return res

    
    def dcim_device_bay_templates_delete(self, request: operations.DcimDeviceBayTemplatesDeleteRequest) -> operations.DcimDeviceBayTemplatesDeleteResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/device-bay-templates/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimDeviceBayTemplatesDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def dcim_device_bay_templates_list(self, request: operations.DcimDeviceBayTemplatesListRequest) -> operations.DcimDeviceBayTemplatesListResponse:
        r"""Call to super to allow for caching
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/dcim/device-bay-templates/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimDeviceBayTemplatesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DcimDeviceBayTemplatesList200ApplicationJSON])
                res.dcim_device_bay_templates_list_200_application_json_object = out

        return res

    
    def dcim_device_bay_templates_partial_update(self, request: operations.DcimDeviceBayTemplatesPartialUpdateRequest) -> operations.DcimDeviceBayTemplatesPartialUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/device-bay-templates/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PATCH", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimDeviceBayTemplatesPartialUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DeviceBayTemplate])
                res.device_bay_template = out

        return res

    
    def dcim_device_bay_templates_read(self, request: operations.DcimDeviceBayTemplatesReadRequest) -> operations.DcimDeviceBayTemplatesReadResponse:
        r"""Call to super to allow for caching
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/device-bay-templates/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimDeviceBayTemplatesReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DeviceBayTemplate])
                res.device_bay_template = out

        return res

    
    def dcim_device_bay_templates_update(self, request: operations.DcimDeviceBayTemplatesUpdateRequest) -> operations.DcimDeviceBayTemplatesUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/device-bay-templates/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimDeviceBayTemplatesUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DeviceBayTemplate])
                res.device_bay_template = out

        return res

    
    def dcim_device_bays_create(self, request: operations.DcimDeviceBaysCreateRequest) -> operations.DcimDeviceBaysCreateResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/dcim/device-bays/"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimDeviceBaysCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DeviceBay])
                res.device_bay = out

        return res

    
    def dcim_device_bays_delete(self, request: operations.DcimDeviceBaysDeleteRequest) -> operations.DcimDeviceBaysDeleteResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/device-bays/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimDeviceBaysDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def dcim_device_bays_list(self, request: operations.DcimDeviceBaysListRequest) -> operations.DcimDeviceBaysListResponse:
        r"""Call to super to allow for caching
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/dcim/device-bays/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimDeviceBaysListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DcimDeviceBaysList200ApplicationJSON])
                res.dcim_device_bays_list_200_application_json_object = out

        return res

    
    def dcim_device_bays_partial_update(self, request: operations.DcimDeviceBaysPartialUpdateRequest) -> operations.DcimDeviceBaysPartialUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/device-bays/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PATCH", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimDeviceBaysPartialUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DeviceBay])
                res.device_bay = out

        return res

    
    def dcim_device_bays_read(self, request: operations.DcimDeviceBaysReadRequest) -> operations.DcimDeviceBaysReadResponse:
        r"""Call to super to allow for caching
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/device-bays/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimDeviceBaysReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DeviceBay])
                res.device_bay = out

        return res

    
    def dcim_device_bays_update(self, request: operations.DcimDeviceBaysUpdateRequest) -> operations.DcimDeviceBaysUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/device-bays/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimDeviceBaysUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DeviceBay])
                res.device_bay = out

        return res

    
    def dcim_device_roles_create(self, request: operations.DcimDeviceRolesCreateRequest) -> operations.DcimDeviceRolesCreateResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/dcim/device-roles/"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimDeviceRolesCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DeviceRole])
                res.device_role = out

        return res

    
    def dcim_device_roles_delete(self, request: operations.DcimDeviceRolesDeleteRequest) -> operations.DcimDeviceRolesDeleteResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/device-roles/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimDeviceRolesDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def dcim_device_roles_list(self, request: operations.DcimDeviceRolesListRequest) -> operations.DcimDeviceRolesListResponse:
        r"""Call to super to allow for caching
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/dcim/device-roles/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimDeviceRolesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DcimDeviceRolesList200ApplicationJSON])
                res.dcim_device_roles_list_200_application_json_object = out

        return res

    
    def dcim_device_roles_partial_update(self, request: operations.DcimDeviceRolesPartialUpdateRequest) -> operations.DcimDeviceRolesPartialUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/device-roles/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PATCH", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimDeviceRolesPartialUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DeviceRole])
                res.device_role = out

        return res

    
    def dcim_device_roles_read(self, request: operations.DcimDeviceRolesReadRequest) -> operations.DcimDeviceRolesReadResponse:
        r"""Call to super to allow for caching
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/device-roles/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimDeviceRolesReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DeviceRole])
                res.device_role = out

        return res

    
    def dcim_device_roles_update(self, request: operations.DcimDeviceRolesUpdateRequest) -> operations.DcimDeviceRolesUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/device-roles/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimDeviceRolesUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DeviceRole])
                res.device_role = out

        return res

    
    def dcim_device_types_create(self, request: operations.DcimDeviceTypesCreateRequest) -> operations.DcimDeviceTypesCreateResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/dcim/device-types/"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimDeviceTypesCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DeviceType])
                res.device_type = out

        return res

    
    def dcim_device_types_delete(self, request: operations.DcimDeviceTypesDeleteRequest) -> operations.DcimDeviceTypesDeleteResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/device-types/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimDeviceTypesDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def dcim_device_types_list(self, request: operations.DcimDeviceTypesListRequest) -> operations.DcimDeviceTypesListResponse:
        r"""Call to super to allow for caching
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/dcim/device-types/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimDeviceTypesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DcimDeviceTypesList200ApplicationJSON])
                res.dcim_device_types_list_200_application_json_object = out

        return res

    
    def dcim_device_types_partial_update(self, request: operations.DcimDeviceTypesPartialUpdateRequest) -> operations.DcimDeviceTypesPartialUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/device-types/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PATCH", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimDeviceTypesPartialUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DeviceType])
                res.device_type = out

        return res

    
    def dcim_device_types_read(self, request: operations.DcimDeviceTypesReadRequest) -> operations.DcimDeviceTypesReadResponse:
        r"""Call to super to allow for caching
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/device-types/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimDeviceTypesReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DeviceType])
                res.device_type = out

        return res

    
    def dcim_device_types_update(self, request: operations.DcimDeviceTypesUpdateRequest) -> operations.DcimDeviceTypesUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/device-types/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimDeviceTypesUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DeviceType])
                res.device_type = out

        return res

    
    def dcim_devices_create(self, request: operations.DcimDevicesCreateRequest) -> operations.DcimDevicesCreateResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/dcim/devices/"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimDevicesCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DeviceWithConfigContext])
                res.device_with_config_context = out

        return res

    
    def dcim_devices_delete(self, request: operations.DcimDevicesDeleteRequest) -> operations.DcimDevicesDeleteResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/devices/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimDevicesDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def dcim_devices_graphs(self, request: operations.DcimDevicesGraphsRequest) -> operations.DcimDevicesGraphsResponse:
        r"""A convenience method for rendering graphs for a particular Device.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/devices/{id}/graphs/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimDevicesGraphsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DeviceWithConfigContext])
                res.device_with_config_context = out

        return res

    
    def dcim_devices_list(self, request: operations.DcimDevicesListRequest) -> operations.DcimDevicesListResponse:
        r"""Call to super to allow for caching
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/dcim/devices/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimDevicesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DcimDevicesList200ApplicationJSON])
                res.dcim_devices_list_200_application_json_object = out

        return res

    
    def dcim_devices_napalm(self, request: operations.DcimDevicesNapalmRequest) -> operations.DcimDevicesNapalmResponse:
        r"""Execute a NAPALM method on a Device
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/devices/{id}/napalm/", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimDevicesNapalmResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DeviceNapalm])
                res.device_napalm = out

        return res

    
    def dcim_devices_partial_update(self, request: operations.DcimDevicesPartialUpdateRequest) -> operations.DcimDevicesPartialUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/devices/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PATCH", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimDevicesPartialUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DeviceWithConfigContext])
                res.device_with_config_context = out

        return res

    
    def dcim_devices_read(self, request: operations.DcimDevicesReadRequest) -> operations.DcimDevicesReadResponse:
        r"""Call to super to allow for caching
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/devices/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimDevicesReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DeviceWithConfigContext])
                res.device_with_config_context = out

        return res

    
    def dcim_devices_update(self, request: operations.DcimDevicesUpdateRequest) -> operations.DcimDevicesUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/devices/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimDevicesUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DeviceWithConfigContext])
                res.device_with_config_context = out

        return res

    
    def dcim_front_port_templates_create(self, request: operations.DcimFrontPortTemplatesCreateRequest) -> operations.DcimFrontPortTemplatesCreateResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/dcim/front-port-templates/"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimFrontPortTemplatesCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FrontPortTemplate])
                res.front_port_template = out

        return res

    
    def dcim_front_port_templates_delete(self, request: operations.DcimFrontPortTemplatesDeleteRequest) -> operations.DcimFrontPortTemplatesDeleteResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/front-port-templates/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimFrontPortTemplatesDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def dcim_front_port_templates_list(self, request: operations.DcimFrontPortTemplatesListRequest) -> operations.DcimFrontPortTemplatesListResponse:
        r"""Call to super to allow for caching
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/dcim/front-port-templates/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimFrontPortTemplatesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DcimFrontPortTemplatesList200ApplicationJSON])
                res.dcim_front_port_templates_list_200_application_json_object = out

        return res

    
    def dcim_front_port_templates_partial_update(self, request: operations.DcimFrontPortTemplatesPartialUpdateRequest) -> operations.DcimFrontPortTemplatesPartialUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/front-port-templates/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PATCH", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimFrontPortTemplatesPartialUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FrontPortTemplate])
                res.front_port_template = out

        return res

    
    def dcim_front_port_templates_read(self, request: operations.DcimFrontPortTemplatesReadRequest) -> operations.DcimFrontPortTemplatesReadResponse:
        r"""Call to super to allow for caching
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/front-port-templates/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimFrontPortTemplatesReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FrontPortTemplate])
                res.front_port_template = out

        return res

    
    def dcim_front_port_templates_update(self, request: operations.DcimFrontPortTemplatesUpdateRequest) -> operations.DcimFrontPortTemplatesUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/front-port-templates/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimFrontPortTemplatesUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FrontPortTemplate])
                res.front_port_template = out

        return res

    
    def dcim_front_ports_create(self, request: operations.DcimFrontPortsCreateRequest) -> operations.DcimFrontPortsCreateResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/dcim/front-ports/"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimFrontPortsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FrontPort])
                res.front_port = out

        return res

    
    def dcim_front_ports_delete(self, request: operations.DcimFrontPortsDeleteRequest) -> operations.DcimFrontPortsDeleteResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/front-ports/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimFrontPortsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def dcim_front_ports_list(self, request: operations.DcimFrontPortsListRequest) -> operations.DcimFrontPortsListResponse:
        r"""Call to super to allow for caching
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/dcim/front-ports/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimFrontPortsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DcimFrontPortsList200ApplicationJSON])
                res.dcim_front_ports_list_200_application_json_object = out

        return res

    
    def dcim_front_ports_partial_update(self, request: operations.DcimFrontPortsPartialUpdateRequest) -> operations.DcimFrontPortsPartialUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/front-ports/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PATCH", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimFrontPortsPartialUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FrontPort])
                res.front_port = out

        return res

    
    def dcim_front_ports_read(self, request: operations.DcimFrontPortsReadRequest) -> operations.DcimFrontPortsReadResponse:
        r"""Call to super to allow for caching
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/front-ports/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimFrontPortsReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FrontPort])
                res.front_port = out

        return res

    
    def dcim_front_ports_trace(self, request: operations.DcimFrontPortsTraceRequest) -> operations.DcimFrontPortsTraceResponse:
        r"""Trace a complete cable path and return each segment as a three-tuple of (termination, cable, termination).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/front-ports/{id}/trace/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimFrontPortsTraceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FrontPort])
                res.front_port = out

        return res

    
    def dcim_front_ports_update(self, request: operations.DcimFrontPortsUpdateRequest) -> operations.DcimFrontPortsUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/front-ports/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimFrontPortsUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FrontPort])
                res.front_port = out

        return res

    
    def dcim_interface_connections_list(self, request: operations.DcimInterfaceConnectionsListRequest) -> operations.DcimInterfaceConnectionsListResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/dcim/interface-connections/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimInterfaceConnectionsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DcimInterfaceConnectionsList200ApplicationJSON])
                res.dcim_interface_connections_list_200_application_json_object = out

        return res

    
    def dcim_interface_templates_create(self, request: operations.DcimInterfaceTemplatesCreateRequest) -> operations.DcimInterfaceTemplatesCreateResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/dcim/interface-templates/"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimInterfaceTemplatesCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.InterfaceTemplate])
                res.interface_template = out

        return res

    
    def dcim_interface_templates_delete(self, request: operations.DcimInterfaceTemplatesDeleteRequest) -> operations.DcimInterfaceTemplatesDeleteResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/interface-templates/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimInterfaceTemplatesDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def dcim_interface_templates_list(self, request: operations.DcimInterfaceTemplatesListRequest) -> operations.DcimInterfaceTemplatesListResponse:
        r"""Call to super to allow for caching
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/dcim/interface-templates/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimInterfaceTemplatesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DcimInterfaceTemplatesList200ApplicationJSON])
                res.dcim_interface_templates_list_200_application_json_object = out

        return res

    
    def dcim_interface_templates_partial_update(self, request: operations.DcimInterfaceTemplatesPartialUpdateRequest) -> operations.DcimInterfaceTemplatesPartialUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/interface-templates/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PATCH", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimInterfaceTemplatesPartialUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.InterfaceTemplate])
                res.interface_template = out

        return res

    
    def dcim_interface_templates_read(self, request: operations.DcimInterfaceTemplatesReadRequest) -> operations.DcimInterfaceTemplatesReadResponse:
        r"""Call to super to allow for caching
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/interface-templates/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimInterfaceTemplatesReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.InterfaceTemplate])
                res.interface_template = out

        return res

    
    def dcim_interface_templates_update(self, request: operations.DcimInterfaceTemplatesUpdateRequest) -> operations.DcimInterfaceTemplatesUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/interface-templates/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimInterfaceTemplatesUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.InterfaceTemplate])
                res.interface_template = out

        return res

    
    def dcim_interfaces_create(self, request: operations.DcimInterfacesCreateRequest) -> operations.DcimInterfacesCreateResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/dcim/interfaces/"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimInterfacesCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DeviceInterface])
                res.device_interface = out

        return res

    
    def dcim_interfaces_delete(self, request: operations.DcimInterfacesDeleteRequest) -> operations.DcimInterfacesDeleteResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/interfaces/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimInterfacesDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def dcim_interfaces_graphs(self, request: operations.DcimInterfacesGraphsRequest) -> operations.DcimInterfacesGraphsResponse:
        r"""A convenience method for rendering graphs for a particular interface.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/interfaces/{id}/graphs/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimInterfacesGraphsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DeviceInterface])
                res.device_interface = out

        return res

    
    def dcim_interfaces_list(self, request: operations.DcimInterfacesListRequest) -> operations.DcimInterfacesListResponse:
        r"""Call to super to allow for caching
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/dcim/interfaces/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimInterfacesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DcimInterfacesList200ApplicationJSON])
                res.dcim_interfaces_list_200_application_json_object = out

        return res

    
    def dcim_interfaces_partial_update(self, request: operations.DcimInterfacesPartialUpdateRequest) -> operations.DcimInterfacesPartialUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/interfaces/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PATCH", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimInterfacesPartialUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DeviceInterface])
                res.device_interface = out

        return res

    
    def dcim_interfaces_read(self, request: operations.DcimInterfacesReadRequest) -> operations.DcimInterfacesReadResponse:
        r"""Call to super to allow for caching
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/interfaces/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimInterfacesReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DeviceInterface])
                res.device_interface = out

        return res

    
    def dcim_interfaces_trace(self, request: operations.DcimInterfacesTraceRequest) -> operations.DcimInterfacesTraceResponse:
        r"""Trace a complete cable path and return each segment as a three-tuple of (termination, cable, termination).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/interfaces/{id}/trace/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimInterfacesTraceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DeviceInterface])
                res.device_interface = out

        return res

    
    def dcim_interfaces_update(self, request: operations.DcimInterfacesUpdateRequest) -> operations.DcimInterfacesUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/interfaces/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimInterfacesUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DeviceInterface])
                res.device_interface = out

        return res

    
    def dcim_inventory_items_create(self, request: operations.DcimInventoryItemsCreateRequest) -> operations.DcimInventoryItemsCreateResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/dcim/inventory-items/"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimInventoryItemsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.InventoryItem])
                res.inventory_item = out

        return res

    
    def dcim_inventory_items_delete(self, request: operations.DcimInventoryItemsDeleteRequest) -> operations.DcimInventoryItemsDeleteResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/inventory-items/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimInventoryItemsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def dcim_inventory_items_list(self, request: operations.DcimInventoryItemsListRequest) -> operations.DcimInventoryItemsListResponse:
        r"""Call to super to allow for caching
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/dcim/inventory-items/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimInventoryItemsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DcimInventoryItemsList200ApplicationJSON])
                res.dcim_inventory_items_list_200_application_json_object = out

        return res

    
    def dcim_inventory_items_partial_update(self, request: operations.DcimInventoryItemsPartialUpdateRequest) -> operations.DcimInventoryItemsPartialUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/inventory-items/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PATCH", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimInventoryItemsPartialUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.InventoryItem])
                res.inventory_item = out

        return res

    
    def dcim_inventory_items_read(self, request: operations.DcimInventoryItemsReadRequest) -> operations.DcimInventoryItemsReadResponse:
        r"""Call to super to allow for caching
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/inventory-items/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimInventoryItemsReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.InventoryItem])
                res.inventory_item = out

        return res

    
    def dcim_inventory_items_update(self, request: operations.DcimInventoryItemsUpdateRequest) -> operations.DcimInventoryItemsUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/inventory-items/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimInventoryItemsUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.InventoryItem])
                res.inventory_item = out

        return res

    
    def dcim_manufacturers_create(self, request: operations.DcimManufacturersCreateRequest) -> operations.DcimManufacturersCreateResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/dcim/manufacturers/"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimManufacturersCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Manufacturer])
                res.manufacturer = out

        return res

    
    def dcim_manufacturers_delete(self, request: operations.DcimManufacturersDeleteRequest) -> operations.DcimManufacturersDeleteResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/manufacturers/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimManufacturersDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def dcim_manufacturers_list(self, request: operations.DcimManufacturersListRequest) -> operations.DcimManufacturersListResponse:
        r"""Call to super to allow for caching
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/dcim/manufacturers/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimManufacturersListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DcimManufacturersList200ApplicationJSON])
                res.dcim_manufacturers_list_200_application_json_object = out

        return res

    
    def dcim_manufacturers_partial_update(self, request: operations.DcimManufacturersPartialUpdateRequest) -> operations.DcimManufacturersPartialUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/manufacturers/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PATCH", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimManufacturersPartialUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Manufacturer])
                res.manufacturer = out

        return res

    
    def dcim_manufacturers_read(self, request: operations.DcimManufacturersReadRequest) -> operations.DcimManufacturersReadResponse:
        r"""Call to super to allow for caching
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/manufacturers/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimManufacturersReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Manufacturer])
                res.manufacturer = out

        return res

    
    def dcim_manufacturers_update(self, request: operations.DcimManufacturersUpdateRequest) -> operations.DcimManufacturersUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/manufacturers/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimManufacturersUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Manufacturer])
                res.manufacturer = out

        return res

    
    def dcim_platforms_create(self, request: operations.DcimPlatformsCreateRequest) -> operations.DcimPlatformsCreateResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/dcim/platforms/"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimPlatformsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Platform])
                res.platform = out

        return res

    
    def dcim_platforms_delete(self, request: operations.DcimPlatformsDeleteRequest) -> operations.DcimPlatformsDeleteResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/platforms/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimPlatformsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def dcim_platforms_list(self, request: operations.DcimPlatformsListRequest) -> operations.DcimPlatformsListResponse:
        r"""Call to super to allow for caching
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/dcim/platforms/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimPlatformsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DcimPlatformsList200ApplicationJSON])
                res.dcim_platforms_list_200_application_json_object = out

        return res

    
    def dcim_platforms_partial_update(self, request: operations.DcimPlatformsPartialUpdateRequest) -> operations.DcimPlatformsPartialUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/platforms/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PATCH", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimPlatformsPartialUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Platform])
                res.platform = out

        return res

    
    def dcim_platforms_read(self, request: operations.DcimPlatformsReadRequest) -> operations.DcimPlatformsReadResponse:
        r"""Call to super to allow for caching
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/platforms/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimPlatformsReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Platform])
                res.platform = out

        return res

    
    def dcim_platforms_update(self, request: operations.DcimPlatformsUpdateRequest) -> operations.DcimPlatformsUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/platforms/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimPlatformsUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Platform])
                res.platform = out

        return res

    
    def dcim_power_connections_list(self, request: operations.DcimPowerConnectionsListRequest) -> operations.DcimPowerConnectionsListResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/dcim/power-connections/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimPowerConnectionsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DcimPowerConnectionsList200ApplicationJSON])
                res.dcim_power_connections_list_200_application_json_object = out

        return res

    
    def dcim_power_feeds_create(self, request: operations.DcimPowerFeedsCreateRequest) -> operations.DcimPowerFeedsCreateResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/dcim/power-feeds/"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimPowerFeedsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PowerFeed])
                res.power_feed = out

        return res

    
    def dcim_power_feeds_delete(self, request: operations.DcimPowerFeedsDeleteRequest) -> operations.DcimPowerFeedsDeleteResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/power-feeds/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimPowerFeedsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def dcim_power_feeds_list(self, request: operations.DcimPowerFeedsListRequest) -> operations.DcimPowerFeedsListResponse:
        r"""Call to super to allow for caching
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/dcim/power-feeds/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimPowerFeedsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DcimPowerFeedsList200ApplicationJSON])
                res.dcim_power_feeds_list_200_application_json_object = out

        return res

    
    def dcim_power_feeds_partial_update(self, request: operations.DcimPowerFeedsPartialUpdateRequest) -> operations.DcimPowerFeedsPartialUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/power-feeds/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PATCH", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimPowerFeedsPartialUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PowerFeed])
                res.power_feed = out

        return res

    
    def dcim_power_feeds_read(self, request: operations.DcimPowerFeedsReadRequest) -> operations.DcimPowerFeedsReadResponse:
        r"""Call to super to allow for caching
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/power-feeds/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimPowerFeedsReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PowerFeed])
                res.power_feed = out

        return res

    
    def dcim_power_feeds_update(self, request: operations.DcimPowerFeedsUpdateRequest) -> operations.DcimPowerFeedsUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/power-feeds/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimPowerFeedsUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PowerFeed])
                res.power_feed = out

        return res

    
    def dcim_power_outlet_templates_create(self, request: operations.DcimPowerOutletTemplatesCreateRequest) -> operations.DcimPowerOutletTemplatesCreateResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/dcim/power-outlet-templates/"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimPowerOutletTemplatesCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PowerOutletTemplate])
                res.power_outlet_template = out

        return res

    
    def dcim_power_outlet_templates_delete(self, request: operations.DcimPowerOutletTemplatesDeleteRequest) -> operations.DcimPowerOutletTemplatesDeleteResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/power-outlet-templates/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimPowerOutletTemplatesDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def dcim_power_outlet_templates_list(self, request: operations.DcimPowerOutletTemplatesListRequest) -> operations.DcimPowerOutletTemplatesListResponse:
        r"""Call to super to allow for caching
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/dcim/power-outlet-templates/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimPowerOutletTemplatesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DcimPowerOutletTemplatesList200ApplicationJSON])
                res.dcim_power_outlet_templates_list_200_application_json_object = out

        return res

    
    def dcim_power_outlet_templates_partial_update(self, request: operations.DcimPowerOutletTemplatesPartialUpdateRequest) -> operations.DcimPowerOutletTemplatesPartialUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/power-outlet-templates/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PATCH", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimPowerOutletTemplatesPartialUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PowerOutletTemplate])
                res.power_outlet_template = out

        return res

    
    def dcim_power_outlet_templates_read(self, request: operations.DcimPowerOutletTemplatesReadRequest) -> operations.DcimPowerOutletTemplatesReadResponse:
        r"""Call to super to allow for caching
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/power-outlet-templates/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimPowerOutletTemplatesReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PowerOutletTemplate])
                res.power_outlet_template = out

        return res

    
    def dcim_power_outlet_templates_update(self, request: operations.DcimPowerOutletTemplatesUpdateRequest) -> operations.DcimPowerOutletTemplatesUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/power-outlet-templates/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimPowerOutletTemplatesUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PowerOutletTemplate])
                res.power_outlet_template = out

        return res

    
    def dcim_power_outlets_create(self, request: operations.DcimPowerOutletsCreateRequest) -> operations.DcimPowerOutletsCreateResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/dcim/power-outlets/"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimPowerOutletsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PowerOutlet])
                res.power_outlet = out

        return res

    
    def dcim_power_outlets_delete(self, request: operations.DcimPowerOutletsDeleteRequest) -> operations.DcimPowerOutletsDeleteResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/power-outlets/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimPowerOutletsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def dcim_power_outlets_list(self, request: operations.DcimPowerOutletsListRequest) -> operations.DcimPowerOutletsListResponse:
        r"""Call to super to allow for caching
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/dcim/power-outlets/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimPowerOutletsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DcimPowerOutletsList200ApplicationJSON])
                res.dcim_power_outlets_list_200_application_json_object = out

        return res

    
    def dcim_power_outlets_partial_update(self, request: operations.DcimPowerOutletsPartialUpdateRequest) -> operations.DcimPowerOutletsPartialUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/power-outlets/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PATCH", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimPowerOutletsPartialUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PowerOutlet])
                res.power_outlet = out

        return res

    
    def dcim_power_outlets_read(self, request: operations.DcimPowerOutletsReadRequest) -> operations.DcimPowerOutletsReadResponse:
        r"""Call to super to allow for caching
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/power-outlets/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimPowerOutletsReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PowerOutlet])
                res.power_outlet = out

        return res

    
    def dcim_power_outlets_trace(self, request: operations.DcimPowerOutletsTraceRequest) -> operations.DcimPowerOutletsTraceResponse:
        r"""Trace a complete cable path and return each segment as a three-tuple of (termination, cable, termination).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/power-outlets/{id}/trace/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimPowerOutletsTraceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PowerOutlet])
                res.power_outlet = out

        return res

    
    def dcim_power_outlets_update(self, request: operations.DcimPowerOutletsUpdateRequest) -> operations.DcimPowerOutletsUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/power-outlets/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimPowerOutletsUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PowerOutlet])
                res.power_outlet = out

        return res

    
    def dcim_power_panels_create(self, request: operations.DcimPowerPanelsCreateRequest) -> operations.DcimPowerPanelsCreateResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/dcim/power-panels/"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimPowerPanelsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PowerPanel])
                res.power_panel = out

        return res

    
    def dcim_power_panels_delete(self, request: operations.DcimPowerPanelsDeleteRequest) -> operations.DcimPowerPanelsDeleteResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/power-panels/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimPowerPanelsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def dcim_power_panels_list(self, request: operations.DcimPowerPanelsListRequest) -> operations.DcimPowerPanelsListResponse:
        r"""Call to super to allow for caching
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/dcim/power-panels/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimPowerPanelsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DcimPowerPanelsList200ApplicationJSON])
                res.dcim_power_panels_list_200_application_json_object = out

        return res

    
    def dcim_power_panels_partial_update(self, request: operations.DcimPowerPanelsPartialUpdateRequest) -> operations.DcimPowerPanelsPartialUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/power-panels/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PATCH", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimPowerPanelsPartialUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PowerPanel])
                res.power_panel = out

        return res

    
    def dcim_power_panels_read(self, request: operations.DcimPowerPanelsReadRequest) -> operations.DcimPowerPanelsReadResponse:
        r"""Call to super to allow for caching
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/power-panels/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimPowerPanelsReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PowerPanel])
                res.power_panel = out

        return res

    
    def dcim_power_panels_update(self, request: operations.DcimPowerPanelsUpdateRequest) -> operations.DcimPowerPanelsUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/power-panels/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimPowerPanelsUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PowerPanel])
                res.power_panel = out

        return res

    
    def dcim_power_port_templates_create(self, request: operations.DcimPowerPortTemplatesCreateRequest) -> operations.DcimPowerPortTemplatesCreateResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/dcim/power-port-templates/"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimPowerPortTemplatesCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PowerPortTemplate])
                res.power_port_template = out

        return res

    
    def dcim_power_port_templates_delete(self, request: operations.DcimPowerPortTemplatesDeleteRequest) -> operations.DcimPowerPortTemplatesDeleteResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/power-port-templates/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimPowerPortTemplatesDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def dcim_power_port_templates_list(self, request: operations.DcimPowerPortTemplatesListRequest) -> operations.DcimPowerPortTemplatesListResponse:
        r"""Call to super to allow for caching
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/dcim/power-port-templates/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimPowerPortTemplatesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DcimPowerPortTemplatesList200ApplicationJSON])
                res.dcim_power_port_templates_list_200_application_json_object = out

        return res

    
    def dcim_power_port_templates_partial_update(self, request: operations.DcimPowerPortTemplatesPartialUpdateRequest) -> operations.DcimPowerPortTemplatesPartialUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/power-port-templates/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PATCH", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimPowerPortTemplatesPartialUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PowerPortTemplate])
                res.power_port_template = out

        return res

    
    def dcim_power_port_templates_read(self, request: operations.DcimPowerPortTemplatesReadRequest) -> operations.DcimPowerPortTemplatesReadResponse:
        r"""Call to super to allow for caching
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/power-port-templates/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimPowerPortTemplatesReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PowerPortTemplate])
                res.power_port_template = out

        return res

    
    def dcim_power_port_templates_update(self, request: operations.DcimPowerPortTemplatesUpdateRequest) -> operations.DcimPowerPortTemplatesUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/power-port-templates/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimPowerPortTemplatesUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PowerPortTemplate])
                res.power_port_template = out

        return res

    
    def dcim_power_ports_create(self, request: operations.DcimPowerPortsCreateRequest) -> operations.DcimPowerPortsCreateResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/dcim/power-ports/"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimPowerPortsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PowerPort])
                res.power_port = out

        return res

    
    def dcim_power_ports_delete(self, request: operations.DcimPowerPortsDeleteRequest) -> operations.DcimPowerPortsDeleteResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/power-ports/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimPowerPortsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def dcim_power_ports_list(self, request: operations.DcimPowerPortsListRequest) -> operations.DcimPowerPortsListResponse:
        r"""Call to super to allow for caching
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/dcim/power-ports/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimPowerPortsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DcimPowerPortsList200ApplicationJSON])
                res.dcim_power_ports_list_200_application_json_object = out

        return res

    
    def dcim_power_ports_partial_update(self, request: operations.DcimPowerPortsPartialUpdateRequest) -> operations.DcimPowerPortsPartialUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/power-ports/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PATCH", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimPowerPortsPartialUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PowerPort])
                res.power_port = out

        return res

    
    def dcim_power_ports_read(self, request: operations.DcimPowerPortsReadRequest) -> operations.DcimPowerPortsReadResponse:
        r"""Call to super to allow for caching
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/power-ports/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimPowerPortsReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PowerPort])
                res.power_port = out

        return res

    
    def dcim_power_ports_trace(self, request: operations.DcimPowerPortsTraceRequest) -> operations.DcimPowerPortsTraceResponse:
        r"""Trace a complete cable path and return each segment as a three-tuple of (termination, cable, termination).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/power-ports/{id}/trace/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimPowerPortsTraceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PowerPort])
                res.power_port = out

        return res

    
    def dcim_power_ports_update(self, request: operations.DcimPowerPortsUpdateRequest) -> operations.DcimPowerPortsUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/power-ports/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimPowerPortsUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PowerPort])
                res.power_port = out

        return res

    
    def dcim_rack_groups_create(self, request: operations.DcimRackGroupsCreateRequest) -> operations.DcimRackGroupsCreateResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/dcim/rack-groups/"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimRackGroupsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.RackGroup])
                res.rack_group = out

        return res

    
    def dcim_rack_groups_delete(self, request: operations.DcimRackGroupsDeleteRequest) -> operations.DcimRackGroupsDeleteResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/rack-groups/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimRackGroupsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def dcim_rack_groups_list(self, request: operations.DcimRackGroupsListRequest) -> operations.DcimRackGroupsListResponse:
        r"""Call to super to allow for caching
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/dcim/rack-groups/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimRackGroupsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DcimRackGroupsList200ApplicationJSON])
                res.dcim_rack_groups_list_200_application_json_object = out

        return res

    
    def dcim_rack_groups_partial_update(self, request: operations.DcimRackGroupsPartialUpdateRequest) -> operations.DcimRackGroupsPartialUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/rack-groups/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PATCH", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimRackGroupsPartialUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.RackGroup])
                res.rack_group = out

        return res

    
    def dcim_rack_groups_read(self, request: operations.DcimRackGroupsReadRequest) -> operations.DcimRackGroupsReadResponse:
        r"""Call to super to allow for caching
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/rack-groups/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimRackGroupsReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.RackGroup])
                res.rack_group = out

        return res

    
    def dcim_rack_groups_update(self, request: operations.DcimRackGroupsUpdateRequest) -> operations.DcimRackGroupsUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/rack-groups/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimRackGroupsUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.RackGroup])
                res.rack_group = out

        return res

    
    def dcim_rack_reservations_create(self, request: operations.DcimRackReservationsCreateRequest) -> operations.DcimRackReservationsCreateResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/dcim/rack-reservations/"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimRackReservationsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.RackReservation])
                res.rack_reservation = out

        return res

    
    def dcim_rack_reservations_delete(self, request: operations.DcimRackReservationsDeleteRequest) -> operations.DcimRackReservationsDeleteResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/rack-reservations/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimRackReservationsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def dcim_rack_reservations_list(self, request: operations.DcimRackReservationsListRequest) -> operations.DcimRackReservationsListResponse:
        r"""Call to super to allow for caching
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/dcim/rack-reservations/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimRackReservationsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DcimRackReservationsList200ApplicationJSON])
                res.dcim_rack_reservations_list_200_application_json_object = out

        return res

    
    def dcim_rack_reservations_partial_update(self, request: operations.DcimRackReservationsPartialUpdateRequest) -> operations.DcimRackReservationsPartialUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/rack-reservations/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PATCH", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimRackReservationsPartialUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.RackReservation])
                res.rack_reservation = out

        return res

    
    def dcim_rack_reservations_read(self, request: operations.DcimRackReservationsReadRequest) -> operations.DcimRackReservationsReadResponse:
        r"""Call to super to allow for caching
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/rack-reservations/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimRackReservationsReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.RackReservation])
                res.rack_reservation = out

        return res

    
    def dcim_rack_reservations_update(self, request: operations.DcimRackReservationsUpdateRequest) -> operations.DcimRackReservationsUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/rack-reservations/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimRackReservationsUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.RackReservation])
                res.rack_reservation = out

        return res

    
    def dcim_rack_roles_create(self, request: operations.DcimRackRolesCreateRequest) -> operations.DcimRackRolesCreateResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/dcim/rack-roles/"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimRackRolesCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.RackRole])
                res.rack_role = out

        return res

    
    def dcim_rack_roles_delete(self, request: operations.DcimRackRolesDeleteRequest) -> operations.DcimRackRolesDeleteResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/rack-roles/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimRackRolesDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def dcim_rack_roles_list(self, request: operations.DcimRackRolesListRequest) -> operations.DcimRackRolesListResponse:
        r"""Call to super to allow for caching
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/dcim/rack-roles/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimRackRolesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DcimRackRolesList200ApplicationJSON])
                res.dcim_rack_roles_list_200_application_json_object = out

        return res

    
    def dcim_rack_roles_partial_update(self, request: operations.DcimRackRolesPartialUpdateRequest) -> operations.DcimRackRolesPartialUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/rack-roles/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PATCH", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimRackRolesPartialUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.RackRole])
                res.rack_role = out

        return res

    
    def dcim_rack_roles_read(self, request: operations.DcimRackRolesReadRequest) -> operations.DcimRackRolesReadResponse:
        r"""Call to super to allow for caching
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/rack-roles/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimRackRolesReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.RackRole])
                res.rack_role = out

        return res

    
    def dcim_rack_roles_update(self, request: operations.DcimRackRolesUpdateRequest) -> operations.DcimRackRolesUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/rack-roles/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimRackRolesUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.RackRole])
                res.rack_role = out

        return res

    
    def dcim_racks_create(self, request: operations.DcimRacksCreateRequest) -> operations.DcimRacksCreateResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/dcim/racks/"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimRacksCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Rack])
                res.rack = out

        return res

    
    def dcim_racks_delete(self, request: operations.DcimRacksDeleteRequest) -> operations.DcimRacksDeleteResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/racks/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimRacksDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def dcim_racks_elevation(self, request: operations.DcimRacksElevationRequest) -> operations.DcimRacksElevationResponse:
        r"""Rack elevation representing the list of rack units. Also supports rendering the elevation as an SVG.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/racks/{id}/elevation/", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimRacksElevationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.RackUnit]])
                res.rack_units = out

        return res

    
    def dcim_racks_list(self, request: operations.DcimRacksListRequest) -> operations.DcimRacksListResponse:
        r"""Call to super to allow for caching
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/dcim/racks/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimRacksListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DcimRacksList200ApplicationJSON])
                res.dcim_racks_list_200_application_json_object = out

        return res

    
    def dcim_racks_partial_update(self, request: operations.DcimRacksPartialUpdateRequest) -> operations.DcimRacksPartialUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/racks/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PATCH", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimRacksPartialUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Rack])
                res.rack = out

        return res

    
    def dcim_racks_read(self, request: operations.DcimRacksReadRequest) -> operations.DcimRacksReadResponse:
        r"""Call to super to allow for caching
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/racks/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimRacksReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Rack])
                res.rack = out

        return res

    
    def dcim_racks_update(self, request: operations.DcimRacksUpdateRequest) -> operations.DcimRacksUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/racks/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimRacksUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Rack])
                res.rack = out

        return res

    
    def dcim_rear_port_templates_create(self, request: operations.DcimRearPortTemplatesCreateRequest) -> operations.DcimRearPortTemplatesCreateResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/dcim/rear-port-templates/"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimRearPortTemplatesCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.RearPortTemplate])
                res.rear_port_template = out

        return res

    
    def dcim_rear_port_templates_delete(self, request: operations.DcimRearPortTemplatesDeleteRequest) -> operations.DcimRearPortTemplatesDeleteResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/rear-port-templates/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimRearPortTemplatesDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def dcim_rear_port_templates_list(self, request: operations.DcimRearPortTemplatesListRequest) -> operations.DcimRearPortTemplatesListResponse:
        r"""Call to super to allow for caching
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/dcim/rear-port-templates/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimRearPortTemplatesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DcimRearPortTemplatesList200ApplicationJSON])
                res.dcim_rear_port_templates_list_200_application_json_object = out

        return res

    
    def dcim_rear_port_templates_partial_update(self, request: operations.DcimRearPortTemplatesPartialUpdateRequest) -> operations.DcimRearPortTemplatesPartialUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/rear-port-templates/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PATCH", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimRearPortTemplatesPartialUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.RearPortTemplate])
                res.rear_port_template = out

        return res

    
    def dcim_rear_port_templates_read(self, request: operations.DcimRearPortTemplatesReadRequest) -> operations.DcimRearPortTemplatesReadResponse:
        r"""Call to super to allow for caching
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/rear-port-templates/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimRearPortTemplatesReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.RearPortTemplate])
                res.rear_port_template = out

        return res

    
    def dcim_rear_port_templates_update(self, request: operations.DcimRearPortTemplatesUpdateRequest) -> operations.DcimRearPortTemplatesUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/rear-port-templates/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimRearPortTemplatesUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.RearPortTemplate])
                res.rear_port_template = out

        return res

    
    def dcim_rear_ports_create(self, request: operations.DcimRearPortsCreateRequest) -> operations.DcimRearPortsCreateResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/dcim/rear-ports/"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimRearPortsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.RearPort])
                res.rear_port = out

        return res

    
    def dcim_rear_ports_delete(self, request: operations.DcimRearPortsDeleteRequest) -> operations.DcimRearPortsDeleteResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/rear-ports/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimRearPortsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def dcim_rear_ports_list(self, request: operations.DcimRearPortsListRequest) -> operations.DcimRearPortsListResponse:
        r"""Call to super to allow for caching
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/dcim/rear-ports/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimRearPortsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DcimRearPortsList200ApplicationJSON])
                res.dcim_rear_ports_list_200_application_json_object = out

        return res

    
    def dcim_rear_ports_partial_update(self, request: operations.DcimRearPortsPartialUpdateRequest) -> operations.DcimRearPortsPartialUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/rear-ports/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PATCH", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimRearPortsPartialUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.RearPort])
                res.rear_port = out

        return res

    
    def dcim_rear_ports_read(self, request: operations.DcimRearPortsReadRequest) -> operations.DcimRearPortsReadResponse:
        r"""Call to super to allow for caching
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/rear-ports/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimRearPortsReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.RearPort])
                res.rear_port = out

        return res

    
    def dcim_rear_ports_trace(self, request: operations.DcimRearPortsTraceRequest) -> operations.DcimRearPortsTraceResponse:
        r"""Trace a complete cable path and return each segment as a three-tuple of (termination, cable, termination).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/rear-ports/{id}/trace/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimRearPortsTraceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.RearPort])
                res.rear_port = out

        return res

    
    def dcim_rear_ports_update(self, request: operations.DcimRearPortsUpdateRequest) -> operations.DcimRearPortsUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/rear-ports/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimRearPortsUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.RearPort])
                res.rear_port = out

        return res

    
    def dcim_regions_create(self, request: operations.DcimRegionsCreateRequest) -> operations.DcimRegionsCreateResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/dcim/regions/"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimRegionsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Region])
                res.region = out

        return res

    
    def dcim_regions_delete(self, request: operations.DcimRegionsDeleteRequest) -> operations.DcimRegionsDeleteResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/regions/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimRegionsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def dcim_regions_list(self, request: operations.DcimRegionsListRequest) -> operations.DcimRegionsListResponse:
        r"""Call to super to allow for caching
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/dcim/regions/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimRegionsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DcimRegionsList200ApplicationJSON])
                res.dcim_regions_list_200_application_json_object = out

        return res

    
    def dcim_regions_partial_update(self, request: operations.DcimRegionsPartialUpdateRequest) -> operations.DcimRegionsPartialUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/regions/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PATCH", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimRegionsPartialUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Region])
                res.region = out

        return res

    
    def dcim_regions_read(self, request: operations.DcimRegionsReadRequest) -> operations.DcimRegionsReadResponse:
        r"""Call to super to allow for caching
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/regions/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimRegionsReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Region])
                res.region = out

        return res

    
    def dcim_regions_update(self, request: operations.DcimRegionsUpdateRequest) -> operations.DcimRegionsUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/regions/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimRegionsUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Region])
                res.region = out

        return res

    
    def dcim_sites_create(self, request: operations.DcimSitesCreateRequest) -> operations.DcimSitesCreateResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/dcim/sites/"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimSitesCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Site])
                res.site = out

        return res

    
    def dcim_sites_delete(self, request: operations.DcimSitesDeleteRequest) -> operations.DcimSitesDeleteResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/sites/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimSitesDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def dcim_sites_graphs(self, request: operations.DcimSitesGraphsRequest) -> operations.DcimSitesGraphsResponse:
        r"""A convenience method for rendering graphs for a particular site.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/sites/{id}/graphs/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimSitesGraphsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Site])
                res.site = out

        return res

    
    def dcim_sites_list(self, request: operations.DcimSitesListRequest) -> operations.DcimSitesListResponse:
        r"""Call to super to allow for caching
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/dcim/sites/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimSitesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DcimSitesList200ApplicationJSON])
                res.dcim_sites_list_200_application_json_object = out

        return res

    
    def dcim_sites_partial_update(self, request: operations.DcimSitesPartialUpdateRequest) -> operations.DcimSitesPartialUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/sites/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PATCH", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimSitesPartialUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Site])
                res.site = out

        return res

    
    def dcim_sites_read(self, request: operations.DcimSitesReadRequest) -> operations.DcimSitesReadResponse:
        r"""Call to super to allow for caching
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/sites/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimSitesReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Site])
                res.site = out

        return res

    
    def dcim_sites_update(self, request: operations.DcimSitesUpdateRequest) -> operations.DcimSitesUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/sites/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimSitesUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Site])
                res.site = out

        return res

    
    def dcim_virtual_chassis_create(self, request: operations.DcimVirtualChassisCreateRequest) -> operations.DcimVirtualChassisCreateResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/dcim/virtual-chassis/"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimVirtualChassisCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VirtualChassis])
                res.virtual_chassis = out

        return res

    
    def dcim_virtual_chassis_delete(self, request: operations.DcimVirtualChassisDeleteRequest) -> operations.DcimVirtualChassisDeleteResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/virtual-chassis/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimVirtualChassisDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def dcim_virtual_chassis_list(self, request: operations.DcimVirtualChassisListRequest) -> operations.DcimVirtualChassisListResponse:
        r"""Call to super to allow for caching
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/dcim/virtual-chassis/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimVirtualChassisListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DcimVirtualChassisList200ApplicationJSON])
                res.dcim_virtual_chassis_list_200_application_json_object = out

        return res

    
    def dcim_virtual_chassis_partial_update(self, request: operations.DcimVirtualChassisPartialUpdateRequest) -> operations.DcimVirtualChassisPartialUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/virtual-chassis/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PATCH", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimVirtualChassisPartialUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VirtualChassis])
                res.virtual_chassis = out

        return res

    
    def dcim_virtual_chassis_read(self, request: operations.DcimVirtualChassisReadRequest) -> operations.DcimVirtualChassisReadResponse:
        r"""Call to super to allow for caching
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/virtual-chassis/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimVirtualChassisReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VirtualChassis])
                res.virtual_chassis = out

        return res

    
    def dcim_virtual_chassis_update(self, request: operations.DcimVirtualChassisUpdateRequest) -> operations.DcimVirtualChassisUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/virtual-chassis/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimVirtualChassisUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VirtualChassis])
                res.virtual_chassis = out

        return res

    