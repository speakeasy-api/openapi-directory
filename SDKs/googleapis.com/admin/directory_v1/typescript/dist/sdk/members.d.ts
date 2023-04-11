import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Members {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Removes a member from a group.
     */
    directoryMembersDelete(req: operations.DirectoryMembersDeleteRequest, security: operations.DirectoryMembersDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.DirectoryMembersDeleteResponse>;
    /**
     * Retrieves a group member's properties.
     */
    directoryMembersGet(req: operations.DirectoryMembersGetRequest, security: operations.DirectoryMembersGetSecurity, config?: AxiosRequestConfig): Promise<operations.DirectoryMembersGetResponse>;
    /**
     * Checks whether the given user is a member of the group. Membership can be direct or nested, but if nested, the `memberKey` and `groupKey` must be entities in the same domain or an `Invalid input` error is returned. To check for nested memberships that include entities outside of the group's domain, use the [`checkTransitiveMembership()`](https://cloud.google.com/identity/docs/reference/rest/v1/groups.memberships/checkTransitiveMembership) method in the Cloud Identity Groups API.
     */
    directoryMembersHasMember(req: operations.DirectoryMembersHasMemberRequest, security: operations.DirectoryMembersHasMemberSecurity, config?: AxiosRequestConfig): Promise<operations.DirectoryMembersHasMemberResponse>;
    /**
     * Adds a user to the specified group.
     */
    directoryMembersInsert(req: operations.DirectoryMembersInsertRequest, security: operations.DirectoryMembersInsertSecurity, config?: AxiosRequestConfig): Promise<operations.DirectoryMembersInsertResponse>;
    /**
     * Retrieves a paginated list of all members in a group. This method times out after 60 minutes. For more information, see [Troubleshoot error codes](https://developers.google.com/admin-sdk/directory/v1/guides/troubleshoot-error-codes).
     */
    directoryMembersList(req: operations.DirectoryMembersListRequest, security: operations.DirectoryMembersListSecurity, config?: AxiosRequestConfig): Promise<operations.DirectoryMembersListResponse>;
    /**
     * Updates the membership properties of a user in the specified group. This method supports [patch semantics](/admin-sdk/directory/v1/guides/performance#patch).
     */
    directoryMembersPatch(req: operations.DirectoryMembersPatchRequest, security: operations.DirectoryMembersPatchSecurity, config?: AxiosRequestConfig): Promise<operations.DirectoryMembersPatchResponse>;
    /**
     * Updates the membership of a user in the specified group.
     */
    directoryMembersUpdate(req: operations.DirectoryMembersUpdateRequest, security: operations.DirectoryMembersUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.DirectoryMembersUpdateResponse>;
}
