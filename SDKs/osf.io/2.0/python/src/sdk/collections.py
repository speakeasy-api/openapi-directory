import requests
from typing import Any
from sdk.models import operations
from . import utils

class Collections:
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

    
    def collections_add_metadata(self, request: operations.CollectionsAddMetadataRequest) -> operations.CollectionsAddMetadataResponse:
        r"""Add Metadata or Subjects to a Entitiy in a Collection
        List of user created metadata for entities within a collection.
        #### Permissions
        To edit this collection a user must have collections write permissions
        #### Returns
        Returns a JSON object containing `data` and `links` keys.
        
        The `data` key contains an array of nodes ids.
        The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/collections/{collection_id}/collected_metadata/", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CollectionsAddMetadataResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            pass

        return res

    
    def collections_collected_metadata(self, request: operations.CollectionsCollectedMetadataRequest) -> operations.CollectionsCollectedMetadataResponse:
        r"""Retrieve subject data for a specific piece of metadata info for a collection
        
        #### Permissions
        In order to view these subject it must be a public collection or a user must have read permissions for collection.
        
        #### Returns
        Returns a JSON object containing `data` and `links` keys.
        
        The `data` key contains an array of nodes ids.
        The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/collections/{collection_id}/collected_metadata/{cgm_id}/subjects/", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.CollectionsCollectedMetadataResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def collections_create(self, request: operations.CollectionsCreateRequest) -> operations.CollectionsCreateResponse:
        r"""Create a Collection
        Retrieves a list collections, either public or related to the user
        #### Permissions
        Anonymous users are able to see all public collections at this endpoint. Logged in users will only be able to see their own content.
        
        Comments on private nodes are only visible to contributors and administrators on the parent node.
        #### Returns
        Returns a JSON object containing `data` and `links` keys.
        
        The `data` key contains an array of comment objects. Each resource in the array is a separate comment object.
        
        The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/collections/"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CollectionsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            pass

        return res

    
    def collections_delete(self, request: operations.CollectionsDeleteRequest) -> operations.CollectionsDeleteResponse:
        r"""Delete a Collection
        Deletes a collection, if the user has appropriate permissions.
        #### Permissions
        Users must have write permissions on a collection in order to delete it
        #### Returns
        Nothing is returned in the body
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/collections/{collection_id}/", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.CollectionsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def collections_detail(self, request: operations.CollectionsDetailRequest) -> operations.CollectionsDetailResponse:
        r"""Retrieve a Collection
        Retrieves a collection, if the user has appropriate permissions.
        
        #### Permissions
        Anonymous users are able to see all public collections at this endpoint. Logged in users will only be able to see their own content.
        #### Returns
        Returns a JSON object containing `data` and `links` keys.
        
        The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/collections/{collection_id}/", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.CollectionsDetailResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def collections_linked_nodes_list(self, request: operations.CollectionsLinkedNodesListRequest) -> operations.CollectionsLinkedNodesListResponse:
        r"""List All Linked Nodes for a Collection
        List of all nodes linked to the given collection.
        #### Permissions
        This returns all public nodes associated with this collection.
        #### Returns
        Returns a JSON object containing `data` and `links` keys.
        
        The `data` key contains an array of up to 10 nodes. Each resource in the array is a separate node object.
        
        The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/collections/{collection_id}/linked_nodes", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.CollectionsLinkedNodesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def collections_linked_nodes_relationships(self, request: operations.CollectionsLinkedNodesRelationshipsRequest) -> operations.CollectionsLinkedNodesRelationshipsResponse:
        r"""Link Nodes to Collection
        This endpoint allow users to a add a node to a collection by issuing a POST request.
        #### Permissions
        This returns all public nodes associated with this collection.
        #### Returns
        Returns a JSON object containing `data` and `links` keys.
        
        The `data` key contains an array of comment objects. Each resource in the array is a separate comment object.
        
        The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/collections/{collection_id}/linked_nodes/relationships/", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CollectionsLinkedNodesRelationshipsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            pass

        return res

    
    def collections_linked_nodes_relationships_create(self, request: operations.CollectionsLinkedNodesRelationshipsCreateRequest) -> operations.CollectionsLinkedNodesRelationshipsCreateResponse:
        r"""Give a Sparse List of Node Ids
        List of all the node ids linked to the given collection.
        #### Permissions
        This returns all public nodes associated with this collection.
        #### Returns
        Returns a JSON object containing `data` and `links` keys.
        
        The `data` key contains an array of nodes ids.
        The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/collections/{collection_id}/linked_nodes/relationships/", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.CollectionsLinkedNodesRelationshipsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def collections_linked_nodes_relationships_delete(self, request: operations.CollectionsLinkedNodesRelationshipsDeleteRequest) -> operations.CollectionsLinkedNodesRelationshipsDeleteResponse:
        r"""Remove Nodes From Collection
        
        This removes associated nodes from a collection
        #### Permissions
        Any user with write permissions on this collection should be to remove nodes from this collection.
        #### Returns
        Nothing in the response body.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/collections/{collection_id}/linked_nodes/relationships/", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("DELETE", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CollectionsLinkedNodesRelationshipsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def collections_linked_preprints_list(self, request: operations.CollectionsLinkedPreprintsListRequest) -> operations.CollectionsLinkedPreprintsListResponse:
        r"""List All Linked Preprints for a Collection
        List of all preprints linked to the given collection.
        #### Permissions
        This returns all public preprints associated with this collection.
        #### Returns
        Returns a JSON object containing `data` and `links` keys.
        
        The `data` key contains an array of up to 10 nodes. Each resource in the array is a separate node object.
        
        The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/collections/{collection_id}/linked_preprints/", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.CollectionsLinkedPreprintsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def collections_linked_registrations_list(self, request: operations.CollectionsLinkedRegistrationsListRequest) -> operations.CollectionsLinkedRegistrationsListResponse:
        r"""List All Linked Registrations for a Collection
        List of all registrations linked to the given collection.
        #### Permissions
        This returns all public registrations associated with this collection.
        #### Returns
        Returns a JSON object containing `data` and `links` keys.
        
        The `data` key contains an array of up to 10 nodes. Each resource in the array is a separate node object.
        
        The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/collections/{collection_id}/linked_registrations/", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.CollectionsLinkedRegistrationsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def collections_linked_registrations_relationships(self, request: operations.CollectionsLinkedRegistrationsRelationshipsRequest) -> operations.CollectionsLinkedRegistrationsRelationshipsResponse:
        r"""Link Registrations to Collection
        This endpoint allow users to a add a registration to a collection by issuing a POST request.
        #### Permissions
        This returns all public registrations associated with this collection.
        #### Returns
        Returns a JSON object containing `data` and `links` keys.
        
        The `data` key contains an array of comment objects. Each resource in the array is a separate comment object.
        
        The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/collections/{collection_id}/linked_registrations/relationships/", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CollectionsLinkedRegistrationsRelationshipsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            pass

        return res

    
    def collections_linked_registrations_relationships_create(self, request: operations.CollectionsLinkedRegistrationsRelationshipsCreateRequest) -> operations.CollectionsLinkedRegistrationsRelationshipsCreateResponse:
        r"""Give a Sparse List of Registrations Ids
        List of all the registration ids linked to the given collection.
        #### Permissions
        This returns all public registrations associated with this collection.
        #### Returns
        Returns a JSON object containing `data` and `links` keys.
        
        The `data` key contains an array of nodes ids.
        The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/collections/{collection_id}/linked_registrations/relationships/", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.CollectionsLinkedRegistrationsRelationshipsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def collections_linked_registrations_relationships_delete(self, request: operations.CollectionsLinkedRegistrationsRelationshipsDeleteRequest) -> operations.CollectionsLinkedRegistrationsRelationshipsDeleteResponse:
        r"""Remove Registrations From Collection
        
        This removes associated registrations from a collection
        #### Permissions
        Any user with write permissions on this collection should be to remove registrations from this collection.
        #### Returns
        Nothing in the response body.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/collections/{collection_id}/linked_registrations/relationships/", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("DELETE", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CollectionsLinkedRegistrationsRelationshipsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def collections_list(self) -> operations.CollectionsListResponse:
        r"""List all Collections
        Retrieves a list collections, either public or related to the user
        #### Permissions
        Anonymous users are able to see all public collections at this endpoint. Logged in users will only be able to see their own content.
        
        Comments on private nodes are only visible to contributors and administrators on the parent node.
        #### Returns
        Returns a JSON object containing `data` and `links` keys.
        The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/collections/"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.CollectionsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def collections_metadata_delete(self, request: operations.CollectionsMetadataDeleteRequest) -> operations.CollectionsMetadataDeleteResponse:
        r"""Delete Collection Metadata from entitiy
        
        #### Permissions
        Only a user with collection admin permissions can delete collected metadata
        #### Returns
        Returns a JSON object containing `data` and `links` keys.
        
        The `data` key contains an array of nodes ids.
        The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/collections/{collection_id}/collected_metadata/{cgm_id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.CollectionsMetadataDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def collections_metadata_detail(self, request: operations.CollectionsMetadataDetailRequest) -> operations.CollectionsMetadataDetailResponse:
        r"""Add Metadata or Subjects to an Entity in a Collection
        List of user created metadata for entities within a collection.
        #### Permissions
        To edit this collection a user must have collections write permissions
        #### Returns
        Returns a JSON object containing `data` and `links` keys.
        
        The `data` key contains an array of nodes ids.
        The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/collections/{collection_id}/collected_metadata/{cgm_id}", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CollectionsMetadataDetailResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            pass

        return res

    
    def collections_metadata_registrations_detail(self, request: operations.CollectionsMetadataRegistrationsDetailRequest) -> operations.CollectionsMetadataRegistrationsDetailResponse:
        r"""Retrieve Specific Metadata for a Collection
        
        #### Permissions
        In order to view this metadata it must be public or a user must have read permissions for collection.
        #### Returns
        Returns a JSON object containing `data` and `links` keys.
        
        The `data` key contains an array of nodes ids.
        The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/collections/{collection_id}/collected_metadata/{cgm_id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.CollectionsMetadataRegistrationsDetailResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def collections_metadata_registrations_list(self, request: operations.CollectionsMetadataRegistrationsListRequest) -> operations.CollectionsMetadataRegistrationsListResponse:
        r"""Retrieve a list of collected metadata for a collection
        List of user created metadata for entities within a collection.
        #### Permissions
        In order to view this metadata it must be public or a user must have read permissions for collection.
        #### Returns
        Returns a JSON object containing `data` and `links` keys.
        
        The `data` key contains an array of nodes ids.
        The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/collections/{collection_id}/collected_metadata/", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.CollectionsMetadataRegistrationsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def collections_metadata_subjects_relationships(self, request: operations.CollectionsMetadataSubjectsRelationshipsRequest) -> operations.CollectionsMetadataSubjectsRelationshipsResponse:
        r"""Retrieve subject metadata for a specific piece of metadata in a collection
        
        #### Permissions
        This is public for a logged out user when an entity is public.
        #### Returns
        Returns a JSON object containing `data` and `links` keys.
        
        The `data` key contains an array of nodes ids.
        The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/collections/{collection_id}/collected_metadata/{cgm_id}/relationships/subjects/", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.CollectionsMetadataSubjectsRelationshipsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def collections_metadata_subjects_relationships_update(self, request: operations.CollectionsMetadataSubjectsRelationshipsUpdateRequest) -> operations.CollectionsMetadataSubjectsRelationshipsUpdateResponse:
        r"""Update subjects for a specific piece of metadata in a collection
        
        #### Permissions
        This is editable for a user with a write permission for this collection.
        
        #### Returns
        Returns a JSON object containing `data` and `links` keys.
        
        The `data` key contains an array of nodes ids.
        The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/collections/{collection_id}/collected_metadata/{cgm_id}/relationships/subjects/", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CollectionsMetadataSubjectsRelationshipsUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            pass

        return res

    