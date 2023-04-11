import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class People {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create a batch of new contacts and return the PersonResponses for the newly Mutate requests for the same user should be sent sequentially to avoid increased latency and failures.
     */
    peoplePeopleBatchCreateContacts(req: operations.PeoplePeopleBatchCreateContactsRequest, security: operations.PeoplePeopleBatchCreateContactsSecurity, config?: AxiosRequestConfig): Promise<operations.PeoplePeopleBatchCreateContactsResponse>;
    /**
     * Delete a batch of contacts. Any non-contact data will not be deleted. Mutate requests for the same user should be sent sequentially to avoid increased latency and failures.
     */
    peoplePeopleBatchDeleteContacts(req: operations.PeoplePeopleBatchDeleteContactsRequest, security: operations.PeoplePeopleBatchDeleteContactsSecurity, config?: AxiosRequestConfig): Promise<operations.PeoplePeopleBatchDeleteContactsResponse>;
    /**
     * Update a batch of contacts and return a map of resource names to PersonResponses for the updated contacts. Mutate requests for the same user should be sent sequentially to avoid increased latency and failures.
     */
    peoplePeopleBatchUpdateContacts(req: operations.PeoplePeopleBatchUpdateContactsRequest, security: operations.PeoplePeopleBatchUpdateContactsSecurity, config?: AxiosRequestConfig): Promise<operations.PeoplePeopleBatchUpdateContactsResponse>;
    /**
     * Provides a list of the authenticated user's contacts. Sync tokens expire 7 days after the full sync. A request with an expired sync token will get an error with an [google.rpc.ErrorInfo](https://cloud.google.com/apis/design/errors#error_info) with reason "EXPIRED_SYNC_TOKEN". In the case of such an error clients should make a full sync request without a `sync_token`. The first page of a full sync request has an additional quota. If the quota is exceeded, a 429 error will be returned. This quota is fixed and can not be increased. When the `sync_token` is specified, resources deleted since the last sync will be returned as a person with `PersonMetadata.deleted` set to true. When the `page_token` or `sync_token` is specified, all other request parameters must match the first call. Writes may have a propagation delay of several minutes for sync requests. Incremental syncs are not intended for read-after-write use cases. See example usage at [List the user's contacts that have changed](/people/v1/contacts#list_the_users_contacts_that_have_changed).
     */
    peoplePeopleConnectionsList(req: operations.PeoplePeopleConnectionsListRequest, security: operations.PeoplePeopleConnectionsListSecurity, config?: AxiosRequestConfig): Promise<operations.PeoplePeopleConnectionsListResponse>;
    /**
     * Create a new contact and return the person resource for that contact. The request returns a 400 error if more than one field is specified on a field that is a singleton for contact sources: * biographies * birthdays * genders * names Mutate requests for the same user should be sent sequentially to avoid increased latency and failures.
     */
    peoplePeopleCreateContact(req: operations.PeoplePeopleCreateContactRequest, security: operations.PeoplePeopleCreateContactSecurity, config?: AxiosRequestConfig): Promise<operations.PeoplePeopleCreateContactResponse>;
    /**
     * Delete a contact person. Any non-contact data will not be deleted. Mutate requests for the same user should be sent sequentially to avoid increased latency and failures.
     */
    peoplePeopleDeleteContact(req: operations.PeoplePeopleDeleteContactRequest, security: operations.PeoplePeopleDeleteContactSecurity, config?: AxiosRequestConfig): Promise<operations.PeoplePeopleDeleteContactResponse>;
    /**
     * Delete a contact's photo. Mutate requests for the same user should be done sequentially to avoid // lock contention.
     */
    peoplePeopleDeleteContactPhoto(req: operations.PeoplePeopleDeleteContactPhotoRequest, security: operations.PeoplePeopleDeleteContactPhotoSecurity, config?: AxiosRequestConfig): Promise<operations.PeoplePeopleDeleteContactPhotoResponse>;
    /**
     * Provides information about a person by specifying a resource name. Use `people/me` to indicate the authenticated user. The request returns a 400 error if 'personFields' is not specified.
     */
    peoplePeopleGet(req: operations.PeoplePeopleGetRequest, security: operations.PeoplePeopleGetSecurity, config?: AxiosRequestConfig): Promise<operations.PeoplePeopleGetResponse>;
    /**
     * Provides information about a list of specific people by specifying a list of requested resource names. Use `people/me` to indicate the authenticated user. The request returns a 400 error if 'personFields' is not specified.
     */
    peoplePeopleGetBatchGet(req: operations.PeoplePeopleGetBatchGetRequest, security: operations.PeoplePeopleGetBatchGetSecurity, config?: AxiosRequestConfig): Promise<operations.PeoplePeopleGetBatchGetResponse>;
    /**
     * Provides a list of domain profiles and domain contacts in the authenticated user's domain directory. When the `sync_token` is specified, resources deleted since the last sync will be returned as a person with `PersonMetadata.deleted` set to true. When the `page_token` or `sync_token` is specified, all other request parameters must match the first call. Writes may have a propagation delay of several minutes for sync requests. Incremental syncs are not intended for read-after-write use cases. See example usage at [List the directory people that have changed](/people/v1/directory#list_the_directory_people_that_have_changed).
     */
    peoplePeopleListDirectoryPeople(req: operations.PeoplePeopleListDirectoryPeopleRequest, security: operations.PeoplePeopleListDirectoryPeopleSecurity, config?: AxiosRequestConfig): Promise<operations.PeoplePeopleListDirectoryPeopleResponse>;
    /**
     * Provides a list of contacts in the authenticated user's grouped contacts that matches the search query. The query matches on a contact's `names`, `nickNames`, `emailAddresses`, `phoneNumbers`, and `organizations` fields that are from the CONTACT source. **IMPORTANT**: Before searching, clients should send a warmup request with an empty query to update the cache. See https://developers.google.com/people/v1/contacts#search_the_users_contacts
     */
    peoplePeopleSearchContacts(req: operations.PeoplePeopleSearchContactsRequest, security: operations.PeoplePeopleSearchContactsSecurity, config?: AxiosRequestConfig): Promise<operations.PeoplePeopleSearchContactsResponse>;
    /**
     * Provides a list of domain profiles and domain contacts in the authenticated user's domain directory that match the search query.
     */
    peoplePeopleSearchDirectoryPeople(req: operations.PeoplePeopleSearchDirectoryPeopleRequest, security: operations.PeoplePeopleSearchDirectoryPeopleSecurity, config?: AxiosRequestConfig): Promise<operations.PeoplePeopleSearchDirectoryPeopleResponse>;
    /**
     * Update contact data for an existing contact person. Any non-contact data will not be modified. Any non-contact data in the person to update will be ignored. All fields specified in the `update_mask` will be replaced. The server returns a 400 error if `person.metadata.sources` is not specified for the contact to be updated or if there is no contact source. The server returns a 400 error with reason `"failedPrecondition"` if `person.metadata.sources.etag` is different than the contact's etag, which indicates the contact has changed since its data was read. Clients should get the latest person and merge their updates into the latest person. The server returns a 400 error if `memberships` are being updated and there are no contact group memberships specified on the person. The server returns a 400 error if more than one field is specified on a field that is a singleton for contact sources: * biographies * birthdays * genders * names Mutate requests for the same user should be sent sequentially to avoid increased latency and failures.
     */
    peoplePeopleUpdateContact(req: operations.PeoplePeopleUpdateContactRequest, security: operations.PeoplePeopleUpdateContactSecurity, config?: AxiosRequestConfig): Promise<operations.PeoplePeopleUpdateContactResponse>;
    /**
     * Update a contact's photo. Mutate requests for the same user should be sent sequentially to avoid increased latency and failures.
     */
    peoplePeopleUpdateContactPhoto(req: operations.PeoplePeopleUpdateContactPhotoRequest, security: operations.PeoplePeopleUpdateContactPhotoSecurity, config?: AxiosRequestConfig): Promise<operations.PeoplePeopleUpdateContactPhotoResponse>;
}
