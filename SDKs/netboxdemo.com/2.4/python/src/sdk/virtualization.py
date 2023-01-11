import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Virtualization:
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

    
    def virtualization_choices_list(self) -> operations.VirtualizationChoicesListResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/virtualization/_choices/"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.VirtualizationChoicesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def virtualization_choices_read(self, request: operations.VirtualizationChoicesReadRequest) -> operations.VirtualizationChoicesReadResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/virtualization/_choices/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.VirtualizationChoicesReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def virtualization_cluster_groups_create(self, request: operations.VirtualizationClusterGroupsCreateRequest) -> operations.VirtualizationClusterGroupsCreateResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/virtualization/cluster-groups/"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.VirtualizationClusterGroupsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ClusterGroup])
                res.cluster_group = out

        return res

    
    def virtualization_cluster_groups_delete(self, request: operations.VirtualizationClusterGroupsDeleteRequest) -> operations.VirtualizationClusterGroupsDeleteResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/virtualization/cluster-groups/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.VirtualizationClusterGroupsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def virtualization_cluster_groups_list(self, request: operations.VirtualizationClusterGroupsListRequest) -> operations.VirtualizationClusterGroupsListResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/virtualization/cluster-groups/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.VirtualizationClusterGroupsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.VirtualizationClusterGroupsList200ApplicationJSON])
                res.virtualization_cluster_groups_list_200_application_json_object = out

        return res

    
    def virtualization_cluster_groups_partial_update(self, request: operations.VirtualizationClusterGroupsPartialUpdateRequest) -> operations.VirtualizationClusterGroupsPartialUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/virtualization/cluster-groups/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PATCH", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.VirtualizationClusterGroupsPartialUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ClusterGroup])
                res.cluster_group = out

        return res

    
    def virtualization_cluster_groups_read(self, request: operations.VirtualizationClusterGroupsReadRequest) -> operations.VirtualizationClusterGroupsReadResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/virtualization/cluster-groups/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.VirtualizationClusterGroupsReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ClusterGroup])
                res.cluster_group = out

        return res

    
    def virtualization_cluster_groups_update(self, request: operations.VirtualizationClusterGroupsUpdateRequest) -> operations.VirtualizationClusterGroupsUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/virtualization/cluster-groups/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.VirtualizationClusterGroupsUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ClusterGroup])
                res.cluster_group = out

        return res

    
    def virtualization_cluster_types_create(self, request: operations.VirtualizationClusterTypesCreateRequest) -> operations.VirtualizationClusterTypesCreateResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/virtualization/cluster-types/"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.VirtualizationClusterTypesCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ClusterType])
                res.cluster_type = out

        return res

    
    def virtualization_cluster_types_delete(self, request: operations.VirtualizationClusterTypesDeleteRequest) -> operations.VirtualizationClusterTypesDeleteResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/virtualization/cluster-types/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.VirtualizationClusterTypesDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def virtualization_cluster_types_list(self, request: operations.VirtualizationClusterTypesListRequest) -> operations.VirtualizationClusterTypesListResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/virtualization/cluster-types/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.VirtualizationClusterTypesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.VirtualizationClusterTypesList200ApplicationJSON])
                res.virtualization_cluster_types_list_200_application_json_object = out

        return res

    
    def virtualization_cluster_types_partial_update(self, request: operations.VirtualizationClusterTypesPartialUpdateRequest) -> operations.VirtualizationClusterTypesPartialUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/virtualization/cluster-types/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PATCH", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.VirtualizationClusterTypesPartialUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ClusterType])
                res.cluster_type = out

        return res

    
    def virtualization_cluster_types_read(self, request: operations.VirtualizationClusterTypesReadRequest) -> operations.VirtualizationClusterTypesReadResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/virtualization/cluster-types/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.VirtualizationClusterTypesReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ClusterType])
                res.cluster_type = out

        return res

    
    def virtualization_cluster_types_update(self, request: operations.VirtualizationClusterTypesUpdateRequest) -> operations.VirtualizationClusterTypesUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/virtualization/cluster-types/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.VirtualizationClusterTypesUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ClusterType])
                res.cluster_type = out

        return res

    
    def virtualization_clusters_create(self, request: operations.VirtualizationClustersCreateRequest) -> operations.VirtualizationClustersCreateResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/virtualization/clusters/"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.VirtualizationClustersCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Cluster])
                res.cluster = out

        return res

    
    def virtualization_clusters_delete(self, request: operations.VirtualizationClustersDeleteRequest) -> operations.VirtualizationClustersDeleteResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/virtualization/clusters/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.VirtualizationClustersDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def virtualization_clusters_list(self, request: operations.VirtualizationClustersListRequest) -> operations.VirtualizationClustersListResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/virtualization/clusters/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.VirtualizationClustersListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.VirtualizationClustersList200ApplicationJSON])
                res.virtualization_clusters_list_200_application_json_object = out

        return res

    
    def virtualization_clusters_partial_update(self, request: operations.VirtualizationClustersPartialUpdateRequest) -> operations.VirtualizationClustersPartialUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/virtualization/clusters/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PATCH", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.VirtualizationClustersPartialUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Cluster])
                res.cluster = out

        return res

    
    def virtualization_clusters_read(self, request: operations.VirtualizationClustersReadRequest) -> operations.VirtualizationClustersReadResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/virtualization/clusters/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.VirtualizationClustersReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Cluster])
                res.cluster = out

        return res

    
    def virtualization_clusters_update(self, request: operations.VirtualizationClustersUpdateRequest) -> operations.VirtualizationClustersUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/virtualization/clusters/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.VirtualizationClustersUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Cluster])
                res.cluster = out

        return res

    
    def virtualization_interfaces_create(self, request: operations.VirtualizationInterfacesCreateRequest) -> operations.VirtualizationInterfacesCreateResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/virtualization/interfaces/"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.VirtualizationInterfacesCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Interface])
                res.interface = out

        return res

    
    def virtualization_interfaces_delete(self, request: operations.VirtualizationInterfacesDeleteRequest) -> operations.VirtualizationInterfacesDeleteResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/virtualization/interfaces/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.VirtualizationInterfacesDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def virtualization_interfaces_list(self, request: operations.VirtualizationInterfacesListRequest) -> operations.VirtualizationInterfacesListResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/virtualization/interfaces/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.VirtualizationInterfacesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.VirtualizationInterfacesList200ApplicationJSON])
                res.virtualization_interfaces_list_200_application_json_object = out

        return res

    
    def virtualization_interfaces_partial_update(self, request: operations.VirtualizationInterfacesPartialUpdateRequest) -> operations.VirtualizationInterfacesPartialUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/virtualization/interfaces/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PATCH", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.VirtualizationInterfacesPartialUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Interface])
                res.interface = out

        return res

    
    def virtualization_interfaces_read(self, request: operations.VirtualizationInterfacesReadRequest) -> operations.VirtualizationInterfacesReadResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/virtualization/interfaces/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.VirtualizationInterfacesReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Interface])
                res.interface = out

        return res

    
    def virtualization_interfaces_update(self, request: operations.VirtualizationInterfacesUpdateRequest) -> operations.VirtualizationInterfacesUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/virtualization/interfaces/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.VirtualizationInterfacesUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Interface])
                res.interface = out

        return res

    
    def virtualization_virtual_machines_create(self, request: operations.VirtualizationVirtualMachinesCreateRequest) -> operations.VirtualizationVirtualMachinesCreateResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/virtualization/virtual-machines/"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.VirtualizationVirtualMachinesCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VirtualMachine])
                res.virtual_machine = out

        return res

    
    def virtualization_virtual_machines_delete(self, request: operations.VirtualizationVirtualMachinesDeleteRequest) -> operations.VirtualizationVirtualMachinesDeleteResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/virtualization/virtual-machines/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.VirtualizationVirtualMachinesDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def virtualization_virtual_machines_list(self, request: operations.VirtualizationVirtualMachinesListRequest) -> operations.VirtualizationVirtualMachinesListResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/virtualization/virtual-machines/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.VirtualizationVirtualMachinesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.VirtualizationVirtualMachinesList200ApplicationJSON])
                res.virtualization_virtual_machines_list_200_application_json_object = out

        return res

    
    def virtualization_virtual_machines_partial_update(self, request: operations.VirtualizationVirtualMachinesPartialUpdateRequest) -> operations.VirtualizationVirtualMachinesPartialUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/virtualization/virtual-machines/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PATCH", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.VirtualizationVirtualMachinesPartialUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VirtualMachine])
                res.virtual_machine = out

        return res

    
    def virtualization_virtual_machines_read(self, request: operations.VirtualizationVirtualMachinesReadRequest) -> operations.VirtualizationVirtualMachinesReadResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/virtualization/virtual-machines/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.VirtualizationVirtualMachinesReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VirtualMachineWithConfigContext])
                res.virtual_machine_with_config_context = out

        return res

    
    def virtualization_virtual_machines_update(self, request: operations.VirtualizationVirtualMachinesUpdateRequest) -> operations.VirtualizationVirtualMachinesUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/virtualization/virtual-machines/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.VirtualizationVirtualMachinesUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VirtualMachine])
                res.virtual_machine = out

        return res

    