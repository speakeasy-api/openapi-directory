import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class ContactGroups {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get a list of contact groups owned by the authenticated user by specifying a list of contact group resource names.
     */
    peopleContactGroupsBatchGet(req: operations.PeopleContactGroupsBatchGetRequest, security: operations.PeopleContactGroupsBatchGetSecurity, config?: AxiosRequestConfig): Promise<operations.PeopleContactGroupsBatchGetResponse>;
    /**
     * Create a new contact group owned by the authenticated user. Created contact group names must be unique to the users contact groups. Attempting to create a group with a duplicate name will return a HTTP 409 error. Mutate requests for the same user should be sent sequentially to avoid increased latency and failures.
     */
    peopleContactGroupsCreate(req: operations.PeopleContactGroupsCreateRequest, security: operations.PeopleContactGroupsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.PeopleContactGroupsCreateResponse>;
    /**
     * Delete an existing contact group owned by the authenticated user by specifying a contact group resource name. Mutate requests for the same user should be sent sequentially to avoid increased latency and failures.
     */
    peopleContactGroupsDelete(req: operations.PeopleContactGroupsDeleteRequest, security: operations.PeopleContactGroupsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.PeopleContactGroupsDeleteResponse>;
    /**
     * List all contact groups owned by the authenticated user. Members of the contact groups are not populated.
     */
    peopleContactGroupsList(req: operations.PeopleContactGroupsListRequest, security: operations.PeopleContactGroupsListSecurity, config?: AxiosRequestConfig): Promise<operations.PeopleContactGroupsListResponse>;
    /**
     * Modify the members of a contact group owned by the authenticated user. The only system contact groups that can have members added are `contactGroups/myContacts` and `contactGroups/starred`. Other system contact groups are deprecated and can only have contacts removed.
     */
    peopleContactGroupsMembersModify(req: operations.PeopleContactGroupsMembersModifyRequest, security: operations.PeopleContactGroupsMembersModifySecurity, config?: AxiosRequestConfig): Promise<operations.PeopleContactGroupsMembersModifyResponse>;
    /**
     * Update the name of an existing contact group owned by the authenticated user. Updated contact group names must be unique to the users contact groups. Attempting to create a group with a duplicate name will return a HTTP 409 error. Mutate requests for the same user should be sent sequentially to avoid increased latency and failures.
     */
    peopleContactGroupsUpdate(req: operations.PeopleContactGroupsUpdateRequest, security: operations.PeopleContactGroupsUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.PeopleContactGroupsUpdateResponse>;
}
