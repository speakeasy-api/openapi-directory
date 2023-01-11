package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import openapisdk.utils.SerializedBody;

public class Collections {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public Collections(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * collectionsAddMetadata - Add Metadata or Subjects to a Entitiy in a Collection
     *
     * List of user created metadata for entities within a collection.
     * #### Permissions
     * To edit this collection a user must have collections write permissions
     * #### Returns
     * Returns a JSON object containing `data` and `links` keys.
     * 
     * The `data` key contains an array of nodes ids.
     * The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
    **/
    public openapisdk.models.operations.CollectionsAddMetadataResponse collectionsAddMetadata(openapisdk.models.operations.CollectionsAddMetadataRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/collections/{collection_id}/collected_metadata/", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        if (serializedRequestBody == null) {
            throw new Exception("Request body is required");
        }
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CollectionsAddMetadataResponse res = new openapisdk.models.operations.CollectionsAddMetadataResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
        }

        return res;
    }
	
	
    /**
     * collectionsCollectedMetadata - Retrieve subject data for a specific piece of metadata info for a collection
     *
     * 
     * #### Permissions
     * In order to view these subject it must be a public collection or a user must have read permissions for collection.
     * 
     * #### Returns
     * Returns a JSON object containing `data` and `links` keys.
     * 
     * The `data` key contains an array of nodes ids.
     * The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
    **/
    public openapisdk.models.operations.CollectionsCollectedMetadataResponse collectionsCollectedMetadata(openapisdk.models.operations.CollectionsCollectedMetadataRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/collections/{collection_id}/collected_metadata/{cgm_id}/subjects/", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CollectionsCollectedMetadataResponse res = new openapisdk.models.operations.CollectionsCollectedMetadataResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
        }

        return res;
    }
	
	
    /**
     * collectionsCreate - Create a Collection
     *
     * Retrieves a list collections, either public or related to the user
     * #### Permissions
     * Anonymous users are able to see all public collections at this endpoint. Logged in users will only be able to see their own content.
     * 
     * Comments on private nodes are only visible to contributors and administrators on the parent node.
     * #### Returns
     * Returns a JSON object containing `data` and `links` keys.
     * 
     * The `data` key contains an array of comment objects. Each resource in the array is a separate comment object.
     * 
     * The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
    **/
    public openapisdk.models.operations.CollectionsCreateResponse collectionsCreate(openapisdk.models.operations.CollectionsCreateRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/collections/");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        if (serializedRequestBody == null) {
            throw new Exception("Request body is required");
        }
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CollectionsCreateResponse res = new openapisdk.models.operations.CollectionsCreateResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
        }

        return res;
    }
	
	
    /**
     * collectionsDelete - Delete a Collection
     *
     * Deletes a collection, if the user has appropriate permissions.
     * #### Permissions
     * Users must have write permissions on a collection in order to delete it
     * #### Returns
     * Nothing is returned in the body
    **/
    public openapisdk.models.operations.CollectionsDeleteResponse collectionsDelete(openapisdk.models.operations.CollectionsDeleteRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/collections/{collection_id}/", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CollectionsDeleteResponse res = new openapisdk.models.operations.CollectionsDeleteResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    /**
     * collectionsDetail - Retrieve a Collection
     *
     * Retrieves a collection, if the user has appropriate permissions.
     * 
     * #### Permissions
     * Anonymous users are able to see all public collections at this endpoint. Logged in users will only be able to see their own content.
     * #### Returns
     * Returns a JSON object containing `data` and `links` keys.
     * 
     * The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
    **/
    public openapisdk.models.operations.CollectionsDetailResponse collectionsDetail(openapisdk.models.operations.CollectionsDetailRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/collections/{collection_id}/", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CollectionsDetailResponse res = new openapisdk.models.operations.CollectionsDetailResponse() {{
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "*/*")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }

        return res;
    }
	
	
    /**
     * collectionsLinkedNodesList - List All Linked Nodes for a Collection
     *
     * List of all nodes linked to the given collection.
     * #### Permissions
     * This returns all public nodes associated with this collection.
     * #### Returns
     * Returns a JSON object containing `data` and `links` keys.
     * 
     * The `data` key contains an array of up to 10 nodes. Each resource in the array is a separate node object.
     * 
     * The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
    **/
    public openapisdk.models.operations.CollectionsLinkedNodesListResponse collectionsLinkedNodesList(openapisdk.models.operations.CollectionsLinkedNodesListRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/collections/{collection_id}/linked_nodes", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CollectionsLinkedNodesListResponse res = new openapisdk.models.operations.CollectionsLinkedNodesListResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
        }

        return res;
    }
	
	
    /**
     * collectionsLinkedNodesRelationships - Link Nodes to Collection
     *
     * This endpoint allow users to a add a node to a collection by issuing a POST request.
     * #### Permissions
     * This returns all public nodes associated with this collection.
     * #### Returns
     * Returns a JSON object containing `data` and `links` keys.
     * 
     * The `data` key contains an array of comment objects. Each resource in the array is a separate comment object.
     * 
     * The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
    **/
    public openapisdk.models.operations.CollectionsLinkedNodesRelationshipsResponse collectionsLinkedNodesRelationships(openapisdk.models.operations.CollectionsLinkedNodesRelationshipsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/collections/{collection_id}/linked_nodes/relationships/", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        if (serializedRequestBody == null) {
            throw new Exception("Request body is required");
        }
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CollectionsLinkedNodesRelationshipsResponse res = new openapisdk.models.operations.CollectionsLinkedNodesRelationshipsResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
        }

        return res;
    }
	
	
    /**
     * collectionsLinkedNodesRelationshipsCreate - Give a Sparse List of Node Ids
     *
     * List of all the node ids linked to the given collection.
     * #### Permissions
     * This returns all public nodes associated with this collection.
     * #### Returns
     * Returns a JSON object containing `data` and `links` keys.
     * 
     * The `data` key contains an array of nodes ids.
     * The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
    **/
    public openapisdk.models.operations.CollectionsLinkedNodesRelationshipsCreateResponse collectionsLinkedNodesRelationshipsCreate(openapisdk.models.operations.CollectionsLinkedNodesRelationshipsCreateRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/collections/{collection_id}/linked_nodes/relationships/", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CollectionsLinkedNodesRelationshipsCreateResponse res = new openapisdk.models.operations.CollectionsLinkedNodesRelationshipsCreateResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
        }

        return res;
    }
	
	
    /**
     * collectionsLinkedNodesRelationshipsDelete - Remove Nodes From Collection
     *
     * 
     * This removes associated nodes from a collection
     * #### Permissions
     * Any user with write permissions on this collection should be to remove nodes from this collection.
     * #### Returns
     * Nothing in the response body.
    **/
    public openapisdk.models.operations.CollectionsLinkedNodesRelationshipsDeleteResponse collectionsLinkedNodesRelationshipsDelete(openapisdk.models.operations.CollectionsLinkedNodesRelationshipsDeleteRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/collections/{collection_id}/linked_nodes/relationships/", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        if (serializedRequestBody == null) {
            throw new Exception("Request body is required");
        }
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CollectionsLinkedNodesRelationshipsDeleteResponse res = new openapisdk.models.operations.CollectionsLinkedNodesRelationshipsDeleteResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
        }

        return res;
    }
	
	
    /**
     * collectionsLinkedPreprintsList - List All Linked Preprints for a Collection
     *
     * List of all preprints linked to the given collection.
     * #### Permissions
     * This returns all public preprints associated with this collection.
     * #### Returns
     * Returns a JSON object containing `data` and `links` keys.
     * 
     * The `data` key contains an array of up to 10 nodes. Each resource in the array is a separate node object.
     * 
     * The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
    **/
    public openapisdk.models.operations.CollectionsLinkedPreprintsListResponse collectionsLinkedPreprintsList(openapisdk.models.operations.CollectionsLinkedPreprintsListRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/collections/{collection_id}/linked_preprints/", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CollectionsLinkedPreprintsListResponse res = new openapisdk.models.operations.CollectionsLinkedPreprintsListResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
        }

        return res;
    }
	
	
    /**
     * collectionsLinkedRegistrationsList - List All Linked Registrations for a Collection
     *
     * List of all registrations linked to the given collection.
     * #### Permissions
     * This returns all public registrations associated with this collection.
     * #### Returns
     * Returns a JSON object containing `data` and `links` keys.
     * 
     * The `data` key contains an array of up to 10 nodes. Each resource in the array is a separate node object.
     * 
     * The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
    **/
    public openapisdk.models.operations.CollectionsLinkedRegistrationsListResponse collectionsLinkedRegistrationsList(openapisdk.models.operations.CollectionsLinkedRegistrationsListRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/collections/{collection_id}/linked_registrations/", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CollectionsLinkedRegistrationsListResponse res = new openapisdk.models.operations.CollectionsLinkedRegistrationsListResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
        }

        return res;
    }
	
	
    /**
     * collectionsLinkedRegistrationsRelationships - Link Registrations to Collection
     *
     * This endpoint allow users to a add a registration to a collection by issuing a POST request.
     * #### Permissions
     * This returns all public registrations associated with this collection.
     * #### Returns
     * Returns a JSON object containing `data` and `links` keys.
     * 
     * The `data` key contains an array of comment objects. Each resource in the array is a separate comment object.
     * 
     * The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
    **/
    public openapisdk.models.operations.CollectionsLinkedRegistrationsRelationshipsResponse collectionsLinkedRegistrationsRelationships(openapisdk.models.operations.CollectionsLinkedRegistrationsRelationshipsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/collections/{collection_id}/linked_registrations/relationships/", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        if (serializedRequestBody == null) {
            throw new Exception("Request body is required");
        }
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CollectionsLinkedRegistrationsRelationshipsResponse res = new openapisdk.models.operations.CollectionsLinkedRegistrationsRelationshipsResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
        }

        return res;
    }
	
	
    /**
     * collectionsLinkedRegistrationsRelationshipsCreate - Give a Sparse List of Registrations Ids
     *
     * List of all the registration ids linked to the given collection.
     * #### Permissions
     * This returns all public registrations associated with this collection.
     * #### Returns
     * Returns a JSON object containing `data` and `links` keys.
     * 
     * The `data` key contains an array of nodes ids.
     * The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
    **/
    public openapisdk.models.operations.CollectionsLinkedRegistrationsRelationshipsCreateResponse collectionsLinkedRegistrationsRelationshipsCreate(openapisdk.models.operations.CollectionsLinkedRegistrationsRelationshipsCreateRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/collections/{collection_id}/linked_registrations/relationships/", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CollectionsLinkedRegistrationsRelationshipsCreateResponse res = new openapisdk.models.operations.CollectionsLinkedRegistrationsRelationshipsCreateResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
        }

        return res;
    }
	
	
    /**
     * collectionsLinkedRegistrationsRelationshipsDelete - Remove Registrations From Collection
     *
     * 
     * This removes associated registrations from a collection
     * #### Permissions
     * Any user with write permissions on this collection should be to remove registrations from this collection.
     * #### Returns
     * Nothing in the response body.
    **/
    public openapisdk.models.operations.CollectionsLinkedRegistrationsRelationshipsDeleteResponse collectionsLinkedRegistrationsRelationshipsDelete(openapisdk.models.operations.CollectionsLinkedRegistrationsRelationshipsDeleteRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/collections/{collection_id}/linked_registrations/relationships/", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        if (serializedRequestBody == null) {
            throw new Exception("Request body is required");
        }
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CollectionsLinkedRegistrationsRelationshipsDeleteResponse res = new openapisdk.models.operations.CollectionsLinkedRegistrationsRelationshipsDeleteResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
        }

        return res;
    }
	
	
    /**
     * collectionsList - List all Collections
     *
     * Retrieves a list collections, either public or related to the user
     * #### Permissions
     * Anonymous users are able to see all public collections at this endpoint. Logged in users will only be able to see their own content.
     * 
     * Comments on private nodes are only visible to contributors and administrators on the parent node.
     * #### Returns
     * Returns a JSON object containing `data` and `links` keys.
     * The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
    **/
    public openapisdk.models.operations.CollectionsListResponse collectionsList() throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/collections/");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CollectionsListResponse res = new openapisdk.models.operations.CollectionsListResponse() {{
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "*/*")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }

        return res;
    }
	
	
    /**
     * collectionsMetadataDelete - Delete Collection Metadata from entitiy
     *
     * 
     * #### Permissions
     * Only a user with collection admin permissions can delete collected metadata
     * #### Returns
     * Returns a JSON object containing `data` and `links` keys.
     * 
     * The `data` key contains an array of nodes ids.
     * The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
    **/
    public openapisdk.models.operations.CollectionsMetadataDeleteResponse collectionsMetadataDelete(openapisdk.models.operations.CollectionsMetadataDeleteRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/collections/{collection_id}/collected_metadata/{cgm_id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CollectionsMetadataDeleteResponse res = new openapisdk.models.operations.CollectionsMetadataDeleteResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    /**
     * collectionsMetadataDetail - Add Metadata or Subjects to an Entity in a Collection
     *
     * List of user created metadata for entities within a collection.
     * #### Permissions
     * To edit this collection a user must have collections write permissions
     * #### Returns
     * Returns a JSON object containing `data` and `links` keys.
     * 
     * The `data` key contains an array of nodes ids.
     * The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
    **/
    public openapisdk.models.operations.CollectionsMetadataDetailResponse collectionsMetadataDetail(openapisdk.models.operations.CollectionsMetadataDetailRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/collections/{collection_id}/collected_metadata/{cgm_id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        if (serializedRequestBody == null) {
            throw new Exception("Request body is required");
        }
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CollectionsMetadataDetailResponse res = new openapisdk.models.operations.CollectionsMetadataDetailResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
        }

        return res;
    }
	
	
    /**
     * collectionsMetadataRegistrationsDetail - Retrieve Specific Metadata for a Collection
     *
     * 
     * #### Permissions
     * In order to view this metadata it must be public or a user must have read permissions for collection.
     * #### Returns
     * Returns a JSON object containing `data` and `links` keys.
     * 
     * The `data` key contains an array of nodes ids.
     * The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
    **/
    public openapisdk.models.operations.CollectionsMetadataRegistrationsDetailResponse collectionsMetadataRegistrationsDetail(openapisdk.models.operations.CollectionsMetadataRegistrationsDetailRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/collections/{collection_id}/collected_metadata/{cgm_id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CollectionsMetadataRegistrationsDetailResponse res = new openapisdk.models.operations.CollectionsMetadataRegistrationsDetailResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
        }

        return res;
    }
	
	
    /**
     * collectionsMetadataRegistrationsList - Retrieve a list of collected metadata for a collection
     *
     * List of user created metadata for entities within a collection.
     * #### Permissions
     * In order to view this metadata it must be public or a user must have read permissions for collection.
     * #### Returns
     * Returns a JSON object containing `data` and `links` keys.
     * 
     * The `data` key contains an array of nodes ids.
     * The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
    **/
    public openapisdk.models.operations.CollectionsMetadataRegistrationsListResponse collectionsMetadataRegistrationsList(openapisdk.models.operations.CollectionsMetadataRegistrationsListRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/collections/{collection_id}/collected_metadata/", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CollectionsMetadataRegistrationsListResponse res = new openapisdk.models.operations.CollectionsMetadataRegistrationsListResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
        }

        return res;
    }
	
	
    /**
     * collectionsMetadataSubjectsRelationships - Retrieve subject metadata for a specific piece of metadata in a collection
     *
     * 
     * #### Permissions
     * This is public for a logged out user when an entity is public.
     * #### Returns
     * Returns a JSON object containing `data` and `links` keys.
     * 
     * The `data` key contains an array of nodes ids.
     * The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
    **/
    public openapisdk.models.operations.CollectionsMetadataSubjectsRelationshipsResponse collectionsMetadataSubjectsRelationships(openapisdk.models.operations.CollectionsMetadataSubjectsRelationshipsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/collections/{collection_id}/collected_metadata/{cgm_id}/relationships/subjects/", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CollectionsMetadataSubjectsRelationshipsResponse res = new openapisdk.models.operations.CollectionsMetadataSubjectsRelationshipsResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
        }

        return res;
    }
	
	
    /**
     * collectionsMetadataSubjectsRelationshipsUpdate - Update subjects for a specific piece of metadata in a collection
     *
     * 
     * #### Permissions
     * This is editable for a user with a write permission for this collection.
     * 
     * #### Returns
     * Returns a JSON object containing `data` and `links` keys.
     * 
     * The `data` key contains an array of nodes ids.
     * The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
    **/
    public openapisdk.models.operations.CollectionsMetadataSubjectsRelationshipsUpdateResponse collectionsMetadataSubjectsRelationshipsUpdate(openapisdk.models.operations.CollectionsMetadataSubjectsRelationshipsUpdateRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/collections/{collection_id}/collected_metadata/{cgm_id}/relationships/subjects/", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        if (serializedRequestBody == null) {
            throw new Exception("Request body is required");
        }
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CollectionsMetadataSubjectsRelationshipsUpdateResponse res = new openapisdk.models.operations.CollectionsMetadataSubjectsRelationshipsUpdateResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
        }

        return res;
    }
	
}