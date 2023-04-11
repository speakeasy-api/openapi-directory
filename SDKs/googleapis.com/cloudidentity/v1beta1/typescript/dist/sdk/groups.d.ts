import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Groups {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Creates a `Group`.
     */
    cloudidentityGroupsCreate(req: operations.CloudidentityGroupsCreateRequest, security: operations.CloudidentityGroupsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.CloudidentityGroupsCreateResponse>;
    /**
     * Lists the `Group` resources under a customer or namespace.
     */
    cloudidentityGroupsList(req: operations.CloudidentityGroupsListRequest, security: operations.CloudidentityGroupsListSecurity, config?: AxiosRequestConfig): Promise<operations.CloudidentityGroupsListResponse>;
    /**
     * Looks up the [resource name](https://cloud.google.com/apis/design/resource_names) of a `Group` by its `EntityKey`.
     */
    cloudidentityGroupsLookup(req: operations.CloudidentityGroupsLookupRequest, security: operations.CloudidentityGroupsLookupSecurity, config?: AxiosRequestConfig): Promise<operations.CloudidentityGroupsLookupResponse>;
    /**
     * Check a potential member for membership in a group. **Note:** This feature is only available to Google Workspace Enterprise Standard, Enterprise Plus, and Enterprise for Education; and Cloud Identity Premium accounts. A member has membership to a group as long as there is a single viewable transitive membership between the group and the member. The actor must have view permissions to at least one transitive membership between the member and group.
     */
    cloudidentityGroupsMembershipsCheckTransitiveMembership(req: operations.CloudidentityGroupsMembershipsCheckTransitiveMembershipRequest, security: operations.CloudidentityGroupsMembershipsCheckTransitiveMembershipSecurity, config?: AxiosRequestConfig): Promise<operations.CloudidentityGroupsMembershipsCheckTransitiveMembershipResponse>;
    /**
     * Creates a `Membership`.
     */
    cloudidentityGroupsMembershipsCreate(req: operations.CloudidentityGroupsMembershipsCreateRequest, security: operations.CloudidentityGroupsMembershipsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.CloudidentityGroupsMembershipsCreateResponse>;
    /**
     * Get a membership graph of just a member or both a member and a group. **Note:** This feature is only available to Google Workspace Enterprise Standard, Enterprise Plus, and Enterprise for Education; and Cloud Identity Premium accounts. Given a member, the response will contain all membership paths from the member. Given both a group and a member, the response will contain all membership paths between the group and the member.
     */
    cloudidentityGroupsMembershipsGetMembershipGraph(req: operations.CloudidentityGroupsMembershipsGetMembershipGraphRequest, security: operations.CloudidentityGroupsMembershipsGetMembershipGraphSecurity, config?: AxiosRequestConfig): Promise<operations.CloudidentityGroupsMembershipsGetMembershipGraphResponse>;
    /**
     * Looks up the [resource name](https://cloud.google.com/apis/design/resource_names) of a `Membership` by its `EntityKey`.
     */
    cloudidentityGroupsMembershipsLookup(req: operations.CloudidentityGroupsMembershipsLookupRequest, security: operations.CloudidentityGroupsMembershipsLookupSecurity, config?: AxiosRequestConfig): Promise<operations.CloudidentityGroupsMembershipsLookupResponse>;
    /**
     * Modifies the `MembershipRole`s of a `Membership`.
     */
    cloudidentityGroupsMembershipsModifyMembershipRoles(req: operations.CloudidentityGroupsMembershipsModifyMembershipRolesRequest, security: operations.CloudidentityGroupsMembershipsModifyMembershipRolesSecurity, config?: AxiosRequestConfig): Promise<operations.CloudidentityGroupsMembershipsModifyMembershipRolesResponse>;
    /**
     * Searches direct groups of a member.
     */
    cloudidentityGroupsMembershipsSearchDirectGroups(req: operations.CloudidentityGroupsMembershipsSearchDirectGroupsRequest, config?: AxiosRequestConfig): Promise<operations.CloudidentityGroupsMembershipsSearchDirectGroupsResponse>;
    /**
     * Search transitive groups of a member. **Note:** This feature is only available to Google Workspace Enterprise Standard, Enterprise Plus, and Enterprise for Education; and Cloud Identity Premium accounts. A transitive group is any group that has a direct or indirect membership to the member. Actor must have view permissions all transitive groups.
     */
    cloudidentityGroupsMembershipsSearchTransitiveGroups(req: operations.CloudidentityGroupsMembershipsSearchTransitiveGroupsRequest, security: operations.CloudidentityGroupsMembershipsSearchTransitiveGroupsSecurity, config?: AxiosRequestConfig): Promise<operations.CloudidentityGroupsMembershipsSearchTransitiveGroupsResponse>;
    /**
     * Search transitive memberships of a group. **Note:** This feature is only available to Google Workspace Enterprise Standard, Enterprise Plus, and Enterprise for Education; and Cloud Identity Premium accounts. A transitive membership is any direct or indirect membership of a group. Actor must have view permissions to all transitive memberships.
     */
    cloudidentityGroupsMembershipsSearchTransitiveMemberships(req: operations.CloudidentityGroupsMembershipsSearchTransitiveMembershipsRequest, security: operations.CloudidentityGroupsMembershipsSearchTransitiveMembershipsSecurity, config?: AxiosRequestConfig): Promise<operations.CloudidentityGroupsMembershipsSearchTransitiveMembershipsResponse>;
    /**
     * Searches for `Group` resources matching a specified query.
     */
    cloudidentityGroupsSearch(req: operations.CloudidentityGroupsSearchRequest, security: operations.CloudidentityGroupsSearchSecurity, config?: AxiosRequestConfig): Promise<operations.CloudidentityGroupsSearchResponse>;
}
