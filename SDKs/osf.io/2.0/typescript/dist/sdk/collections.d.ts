import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Collections {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Add Metadata or Subjects to a Entity in a Collection
     *
     * @remarks
     * List of user created metadata for entities within a collection.
     * #### Permissions
     * To edit this collection a user must have collections write permissions
     * #### Returns
     * Returns a JSON object containing `data` and `links` keys.
     *
     * The `data` key contains an array of nodes ids.
     * The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
     */
    collectionsAddMetadata(req: operations.CollectionsAddMetadataRequest, config?: AxiosRequestConfig): Promise<operations.CollectionsAddMetadataResponse>;
    /**
     * Retrieve subject data for a specific piece of metadata info for a collection
     *
     * @remarks
     *
     * #### Permissions
     * In order to view these subject it must be a public collection or a user must have read permissions for collection.
     *
     * #### Returns
     * Returns a JSON object containing `data` and `links` keys.
     *
     * The `data` key contains an array of nodes ids.
     * The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
     * #### Errors
     * This request should never return an error, other then permissions errors.
     */
    collectionsCollectedMetadata(req: operations.CollectionsCollectedMetadataRequest, config?: AxiosRequestConfig): Promise<operations.CollectionsCollectedMetadataResponse>;
    /**
     * Create a Collection
     *
     * @remarks
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
     */
    collectionsCreate(req: Record<string, any>, config?: AxiosRequestConfig): Promise<operations.CollectionsCreateResponse>;
    /**
     * Delete a Collection
     *
     * @remarks
     * Deletes a collection, if the user has appropriate permissions.
     * #### Permissions
     * Users must have write permissions on a collection in order to delete it
     * #### Returns
     * Nothing is returned in the body
     */
    collectionsDelete(req: operations.CollectionsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.CollectionsDeleteResponse>;
    /**
     * Retrieve a Collection
     *
     * @remarks
     * Retrieves a collection, if the user has appropriate permissions.
     *
     * #### Permissions
     * Anonymous users are able to see all public collections at this endpoint. Logged in users will only be able to see their own content.
     * #### Returns
     * Returns a JSON object containing `data` and `links` keys.
     *
     * The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
     */
    collectionsDetail(req: operations.CollectionsDetailRequest, config?: AxiosRequestConfig): Promise<operations.CollectionsDetailResponse>;
    /**
     * List All Linked Nodes for a Collection
     *
     * @remarks
     * List of all nodes linked to the given collection.
     * #### Permissions
     * This returns all public nodes associated with this collection.
     * #### Returns
     * Returns a JSON object containing `data` and `links` keys.
     *
     * The `data` key contains an array of up to 10 nodes. Each resource in the array is a separate node object.
     *
     * The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
     */
    collectionsLinkedNodesList(req: operations.CollectionsLinkedNodesListRequest, config?: AxiosRequestConfig): Promise<operations.CollectionsLinkedNodesListResponse>;
    /**
     * Link Nodes to Collection
     *
     * @remarks
     * This endpoint allow users to a add a node to a collection by issuing a POST request.
     * #### Permissions
     * This returns all public nodes associated with this collection.
     * #### Returns
     * Returns a JSON object containing `data` and `links` keys.
     *
     * The `data` key contains an array of comment objects. Each resource in the array is a separate comment object.
     *
     * The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
     */
    collectionsLinkedNodesRelationships(req: operations.CollectionsLinkedNodesRelationshipsRequest, config?: AxiosRequestConfig): Promise<operations.CollectionsLinkedNodesRelationshipsResponse>;
    /**
     * Give a Sparse List of Node Ids
     *
     * @remarks
     * List of all the node ids linked to the given collection.
     * #### Permissions
     * This returns all public nodes associated with this collection.
     * #### Returns
     * Returns a JSON object containing `data` and `links` keys.
     *
     * The `data` key contains an array of nodes ids.
     * The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
     */
    collectionsLinkedNodesRelationshipsCreate(req: operations.CollectionsLinkedNodesRelationshipsCreateRequest, config?: AxiosRequestConfig): Promise<operations.CollectionsLinkedNodesRelationshipsCreateResponse>;
    /**
     * Remove Nodes From Collection
     *
     * @remarks
     *
     * This removes associated nodes from a collection
     * #### Permissions
     * Any user with write permissions on this collection should be to remove nodes from this collection.
     * #### Returns
     * Nothing in the response body.
     */
    collectionsLinkedNodesRelationshipsDelete(req: operations.CollectionsLinkedNodesRelationshipsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.CollectionsLinkedNodesRelationshipsDeleteResponse>;
    /**
     * List All Linked Preprints for a Collection
     *
     * @remarks
     * List of all preprints linked to the given collection.
     * #### Permissions
     * This returns all public preprints associated with this collection.
     * #### Returns
     * Returns a JSON object containing `data` and `links` keys.
     *
     * The `data` key contains an array of up to 10 nodes. Each resource in the array is a separate node object.
     *
     * The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
     */
    collectionsLinkedPreprintsList(req: operations.CollectionsLinkedPreprintsListRequest, config?: AxiosRequestConfig): Promise<operations.CollectionsLinkedPreprintsListResponse>;
    /**
     * List All Linked Registrations for a Collection
     *
     * @remarks
     * List of all registrations linked to the given collection.
     * #### Permissions
     * This returns all public registrations associated with this collection.
     * #### Returns
     * Returns a JSON object containing `data` and `links` keys.
     *
     * The `data` key contains an array of up to 10 nodes. Each resource in the array is a separate node object.
     *
     * The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
     */
    collectionsLinkedRegistrationsList(req: operations.CollectionsLinkedRegistrationsListRequest, config?: AxiosRequestConfig): Promise<operations.CollectionsLinkedRegistrationsListResponse>;
    /**
     * Link Registrations to Collection
     *
     * @remarks
     * This endpoint allow users to a add a registration to a collection by issuing a POST request.
     * #### Permissions
     * This returns all public registrations associated with this collection.
     * #### Returns
     * Returns a JSON object containing `data` and `links` keys.
     *
     * The `data` key contains an array of comment objects. Each resource in the array is a separate comment object.
     *
     * The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
     */
    collectionsLinkedRegistrationsRelationships(req: operations.CollectionsLinkedRegistrationsRelationshipsRequest, config?: AxiosRequestConfig): Promise<operations.CollectionsLinkedRegistrationsRelationshipsResponse>;
    /**
     * Give a Sparse List of Registrations Ids
     *
     * @remarks
     * List of all the registration ids linked to the given collection.
     * #### Permissions
     * This returns all public registrations associated with this collection.
     * #### Returns
     * Returns a JSON object containing `data` and `links` keys.
     *
     * The `data` key contains an array of nodes ids.
     * The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
     */
    collectionsLinkedRegistrationsRelationshipsCreate(req: operations.CollectionsLinkedRegistrationsRelationshipsCreateRequest, config?: AxiosRequestConfig): Promise<operations.CollectionsLinkedRegistrationsRelationshipsCreateResponse>;
    /**
     * Remove Registrations From Collection
     *
     * @remarks
     *
     * This removes associated registrations from a collection
     * #### Permissions
     * Any user with write permissions on this collection should be to remove registrations from this collection.
     * #### Returns
     * Nothing in the response body.
     */
    collectionsLinkedRegistrationsRelationshipsDelete(req: operations.CollectionsLinkedRegistrationsRelationshipsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.CollectionsLinkedRegistrationsRelationshipsDeleteResponse>;
    /**
     * List all Collections
     *
     * @remarks
     * Retrieves a list collections, either public or related to the user
     * #### Permissions
     * Anonymous users are able to see all public collections at this endpoint. Logged in users will only be able to see their own content.
     *
     * Comments on private nodes are only visible to contributors and administrators on the parent node.
     * #### Returns
     * Returns a JSON object containing `data` and `links` keys.
     * The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
     */
    collectionsList(config?: AxiosRequestConfig): Promise<operations.CollectionsListResponse>;
    /**
     * Delete Collection Metadata from entitiy
     *
     * @remarks
     *
     * #### Permissions
     * Only a user with collection admin permissions can delete collected metadata
     * #### Returns
     * Returns a JSON object containing `data` and `links` keys.
     *
     * The `data` key contains an array of nodes ids.
     * The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
     */
    collectionsMetadataDelete(req: operations.CollectionsMetadataDeleteRequest, config?: AxiosRequestConfig): Promise<operations.CollectionsMetadataDeleteResponse>;
    /**
     * Add Metadata or Subjects to an Entity in a Collection
     *
     * @remarks
     * List of user created metadata for entities within a collection.
     * #### Permissions
     * To edit this collection a user must have collections write permissions
     * #### Returns
     * Returns a JSON object containing `data` and `links` keys.
     *
     * The `data` key contains an array of nodes ids.
     * The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
     */
    collectionsMetadataDetail(req: operations.CollectionsMetadataDetailRequest, config?: AxiosRequestConfig): Promise<operations.CollectionsMetadataDetailResponse>;
    /**
     * Retrieve Specific Metadata for a Collection
     *
     * @remarks
     *
     * #### Permissions
     * In order to view this metadata it must be public or a user must have read permissions for collection.
     * #### Returns
     * Returns a JSON object containing `data` and `links` keys.
     *
     * The `data` key contains an array of nodes ids.
     * The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
     * #### Errors
     * This request should never return an error.
     */
    collectionsMetadataRegistrationsDetail(req: operations.CollectionsMetadataRegistrationsDetailRequest, config?: AxiosRequestConfig): Promise<operations.CollectionsMetadataRegistrationsDetailResponse>;
    /**
     * Retrieve a list of collected metadata for a collection
     *
     * @remarks
     * List of user created metadata for entities within a collection.
     * #### Permissions
     * In order to view this metadata it must be public or a user must have read permissions for collection.
     * #### Returns
     * Returns a JSON object containing `data` and `links` keys.
     *
     * The `data` key contains an array of nodes ids.
     * The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
     * #### Errors
     * This request should never return an error.
     */
    collectionsMetadataRegistrationsList(req: operations.CollectionsMetadataRegistrationsListRequest, config?: AxiosRequestConfig): Promise<operations.CollectionsMetadataRegistrationsListResponse>;
    /**
     * Retrieve subject metadata for a specific piece of metadata in a collection
     *
     * @remarks
     *
     * #### Permissions
     * This is public for a logged out user when an entity is public.
     * #### Returns
     * Returns a JSON object containing `data` and `links` keys.
     *
     * The `data` key contains an array of nodes ids.
     * The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
     */
    collectionsMetadataSubjectsRelationships(req: operations.CollectionsMetadataSubjectsRelationshipsRequest, config?: AxiosRequestConfig): Promise<operations.CollectionsMetadataSubjectsRelationshipsResponse>;
    /**
     * Update subjects for a specific piece of metadata in a collection
     *
     * @remarks
     *
     * #### Permissions
     * This is editable for a user with a write permission for this collection.
     *
     * #### Returns
     * Returns a JSON object containing `data` and `links` keys.
     *
     * The `data` key contains an array of nodes ids.
     * The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
     */
    collectionsMetadataSubjectsRelationshipsUpdate(req: operations.CollectionsMetadataSubjectsRelationshipsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.CollectionsMetadataSubjectsRelationshipsUpdateResponse>;
}
