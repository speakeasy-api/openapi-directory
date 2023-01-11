import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Collections {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
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
    collectionsAddMetadata(req: operations.CollectionsAddMetadataRequest, config?: AxiosRequestConfig): Promise<operations.CollectionsAddMetadataResponse>;
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
    collectionsCollectedMetadata(req: operations.CollectionsCollectedMetadataRequest, config?: AxiosRequestConfig): Promise<operations.CollectionsCollectedMetadataResponse>;
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
    collectionsCreate(req: operations.CollectionsCreateRequest, config?: AxiosRequestConfig): Promise<operations.CollectionsCreateResponse>;
    /**
     * collectionsDelete - Delete a Collection
     *
     * Deletes a collection, if the user has appropriate permissions.
     * #### Permissions
     * Users must have write permissions on a collection in order to delete it
     * #### Returns
     * Nothing is returned in the body
    **/
    collectionsDelete(req: operations.CollectionsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.CollectionsDeleteResponse>;
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
    collectionsDetail(req: operations.CollectionsDetailRequest, config?: AxiosRequestConfig): Promise<operations.CollectionsDetailResponse>;
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
    collectionsLinkedNodesList(req: operations.CollectionsLinkedNodesListRequest, config?: AxiosRequestConfig): Promise<operations.CollectionsLinkedNodesListResponse>;
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
    collectionsLinkedNodesRelationships(req: operations.CollectionsLinkedNodesRelationshipsRequest, config?: AxiosRequestConfig): Promise<operations.CollectionsLinkedNodesRelationshipsResponse>;
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
    collectionsLinkedNodesRelationshipsCreate(req: operations.CollectionsLinkedNodesRelationshipsCreateRequest, config?: AxiosRequestConfig): Promise<operations.CollectionsLinkedNodesRelationshipsCreateResponse>;
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
    collectionsLinkedNodesRelationshipsDelete(req: operations.CollectionsLinkedNodesRelationshipsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.CollectionsLinkedNodesRelationshipsDeleteResponse>;
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
    collectionsLinkedPreprintsList(req: operations.CollectionsLinkedPreprintsListRequest, config?: AxiosRequestConfig): Promise<operations.CollectionsLinkedPreprintsListResponse>;
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
    collectionsLinkedRegistrationsList(req: operations.CollectionsLinkedRegistrationsListRequest, config?: AxiosRequestConfig): Promise<operations.CollectionsLinkedRegistrationsListResponse>;
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
    collectionsLinkedRegistrationsRelationships(req: operations.CollectionsLinkedRegistrationsRelationshipsRequest, config?: AxiosRequestConfig): Promise<operations.CollectionsLinkedRegistrationsRelationshipsResponse>;
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
    collectionsLinkedRegistrationsRelationshipsCreate(req: operations.CollectionsLinkedRegistrationsRelationshipsCreateRequest, config?: AxiosRequestConfig): Promise<operations.CollectionsLinkedRegistrationsRelationshipsCreateResponse>;
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
    collectionsLinkedRegistrationsRelationshipsDelete(req: operations.CollectionsLinkedRegistrationsRelationshipsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.CollectionsLinkedRegistrationsRelationshipsDeleteResponse>;
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
    collectionsList(config?: AxiosRequestConfig): Promise<operations.CollectionsListResponse>;
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
    collectionsMetadataDelete(req: operations.CollectionsMetadataDeleteRequest, config?: AxiosRequestConfig): Promise<operations.CollectionsMetadataDeleteResponse>;
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
    collectionsMetadataDetail(req: operations.CollectionsMetadataDetailRequest, config?: AxiosRequestConfig): Promise<operations.CollectionsMetadataDetailResponse>;
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
    collectionsMetadataRegistrationsDetail(req: operations.CollectionsMetadataRegistrationsDetailRequest, config?: AxiosRequestConfig): Promise<operations.CollectionsMetadataRegistrationsDetailResponse>;
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
    collectionsMetadataRegistrationsList(req: operations.CollectionsMetadataRegistrationsListRequest, config?: AxiosRequestConfig): Promise<operations.CollectionsMetadataRegistrationsListResponse>;
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
    collectionsMetadataSubjectsRelationships(req: operations.CollectionsMetadataSubjectsRelationshipsRequest, config?: AxiosRequestConfig): Promise<operations.CollectionsMetadataSubjectsRelationshipsResponse>;
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
    collectionsMetadataSubjectsRelationshipsUpdate(req: operations.CollectionsMetadataSubjectsRelationshipsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.CollectionsMetadataSubjectsRelationshipsUpdateResponse>;
}
