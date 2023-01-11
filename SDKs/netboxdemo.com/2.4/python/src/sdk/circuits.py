import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Circuits:
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

    
    def circuits_choices_list(self) -> operations.CircuitsChoicesListResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/circuits/_choices/"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.CircuitsChoicesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def circuits_choices_read(self, request: operations.CircuitsChoicesReadRequest) -> operations.CircuitsChoicesReadResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/circuits/_choices/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.CircuitsChoicesReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def circuits_circuit_terminations_create(self, request: operations.CircuitsCircuitTerminationsCreateRequest) -> operations.CircuitsCircuitTerminationsCreateResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/circuits/circuit-terminations/"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CircuitsCircuitTerminationsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CircuitTermination])
                res.circuit_termination = out

        return res

    
    def circuits_circuit_terminations_delete(self, request: operations.CircuitsCircuitTerminationsDeleteRequest) -> operations.CircuitsCircuitTerminationsDeleteResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/circuits/circuit-terminations/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.CircuitsCircuitTerminationsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def circuits_circuit_terminations_list(self, request: operations.CircuitsCircuitTerminationsListRequest) -> operations.CircuitsCircuitTerminationsListResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/circuits/circuit-terminations/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CircuitsCircuitTerminationsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CircuitsCircuitTerminationsList200ApplicationJSON])
                res.circuits_circuit_terminations_list_200_application_json_object = out

        return res

    
    def circuits_circuit_terminations_partial_update(self, request: operations.CircuitsCircuitTerminationsPartialUpdateRequest) -> operations.CircuitsCircuitTerminationsPartialUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/circuits/circuit-terminations/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PATCH", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CircuitsCircuitTerminationsPartialUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CircuitTermination])
                res.circuit_termination = out

        return res

    
    def circuits_circuit_terminations_read(self, request: operations.CircuitsCircuitTerminationsReadRequest) -> operations.CircuitsCircuitTerminationsReadResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/circuits/circuit-terminations/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.CircuitsCircuitTerminationsReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CircuitTermination])
                res.circuit_termination = out

        return res

    
    def circuits_circuit_terminations_update(self, request: operations.CircuitsCircuitTerminationsUpdateRequest) -> operations.CircuitsCircuitTerminationsUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/circuits/circuit-terminations/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CircuitsCircuitTerminationsUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CircuitTermination])
                res.circuit_termination = out

        return res

    
    def circuits_circuit_types_create(self, request: operations.CircuitsCircuitTypesCreateRequest) -> operations.CircuitsCircuitTypesCreateResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/circuits/circuit-types/"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CircuitsCircuitTypesCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CircuitType])
                res.circuit_type = out

        return res

    
    def circuits_circuit_types_delete(self, request: operations.CircuitsCircuitTypesDeleteRequest) -> operations.CircuitsCircuitTypesDeleteResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/circuits/circuit-types/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.CircuitsCircuitTypesDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def circuits_circuit_types_list(self, request: operations.CircuitsCircuitTypesListRequest) -> operations.CircuitsCircuitTypesListResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/circuits/circuit-types/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CircuitsCircuitTypesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CircuitsCircuitTypesList200ApplicationJSON])
                res.circuits_circuit_types_list_200_application_json_object = out

        return res

    
    def circuits_circuit_types_partial_update(self, request: operations.CircuitsCircuitTypesPartialUpdateRequest) -> operations.CircuitsCircuitTypesPartialUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/circuits/circuit-types/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PATCH", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CircuitsCircuitTypesPartialUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CircuitType])
                res.circuit_type = out

        return res

    
    def circuits_circuit_types_read(self, request: operations.CircuitsCircuitTypesReadRequest) -> operations.CircuitsCircuitTypesReadResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/circuits/circuit-types/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.CircuitsCircuitTypesReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CircuitType])
                res.circuit_type = out

        return res

    
    def circuits_circuit_types_update(self, request: operations.CircuitsCircuitTypesUpdateRequest) -> operations.CircuitsCircuitTypesUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/circuits/circuit-types/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CircuitsCircuitTypesUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CircuitType])
                res.circuit_type = out

        return res

    
    def circuits_circuits_create(self, request: operations.CircuitsCircuitsCreateRequest) -> operations.CircuitsCircuitsCreateResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/circuits/circuits/"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CircuitsCircuitsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Circuit])
                res.circuit = out

        return res

    
    def circuits_circuits_delete(self, request: operations.CircuitsCircuitsDeleteRequest) -> operations.CircuitsCircuitsDeleteResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/circuits/circuits/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.CircuitsCircuitsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def circuits_circuits_list(self, request: operations.CircuitsCircuitsListRequest) -> operations.CircuitsCircuitsListResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/circuits/circuits/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CircuitsCircuitsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CircuitsCircuitsList200ApplicationJSON])
                res.circuits_circuits_list_200_application_json_object = out

        return res

    
    def circuits_circuits_partial_update(self, request: operations.CircuitsCircuitsPartialUpdateRequest) -> operations.CircuitsCircuitsPartialUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/circuits/circuits/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PATCH", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CircuitsCircuitsPartialUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Circuit])
                res.circuit = out

        return res

    
    def circuits_circuits_read(self, request: operations.CircuitsCircuitsReadRequest) -> operations.CircuitsCircuitsReadResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/circuits/circuits/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.CircuitsCircuitsReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Circuit])
                res.circuit = out

        return res

    
    def circuits_circuits_update(self, request: operations.CircuitsCircuitsUpdateRequest) -> operations.CircuitsCircuitsUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/circuits/circuits/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CircuitsCircuitsUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Circuit])
                res.circuit = out

        return res

    
    def circuits_providers_create(self, request: operations.CircuitsProvidersCreateRequest) -> operations.CircuitsProvidersCreateResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/circuits/providers/"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CircuitsProvidersCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Provider])
                res.provider = out

        return res

    
    def circuits_providers_delete(self, request: operations.CircuitsProvidersDeleteRequest) -> operations.CircuitsProvidersDeleteResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/circuits/providers/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.CircuitsProvidersDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def circuits_providers_graphs(self, request: operations.CircuitsProvidersGraphsRequest) -> operations.CircuitsProvidersGraphsResponse:
        r"""A convenience method for rendering graphs for a particular provider.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/circuits/providers/{id}/graphs/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.CircuitsProvidersGraphsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Provider])
                res.provider = out

        return res

    
    def circuits_providers_list(self, request: operations.CircuitsProvidersListRequest) -> operations.CircuitsProvidersListResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/circuits/providers/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CircuitsProvidersListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CircuitsProvidersList200ApplicationJSON])
                res.circuits_providers_list_200_application_json_object = out

        return res

    
    def circuits_providers_partial_update(self, request: operations.CircuitsProvidersPartialUpdateRequest) -> operations.CircuitsProvidersPartialUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/circuits/providers/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PATCH", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CircuitsProvidersPartialUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Provider])
                res.provider = out

        return res

    
    def circuits_providers_read(self, request: operations.CircuitsProvidersReadRequest) -> operations.CircuitsProvidersReadResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/circuits/providers/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.CircuitsProvidersReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Provider])
                res.provider = out

        return res

    
    def circuits_providers_update(self, request: operations.CircuitsProvidersUpdateRequest) -> operations.CircuitsProvidersUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/circuits/providers/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CircuitsProvidersUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Provider])
                res.provider = out

        return res

    