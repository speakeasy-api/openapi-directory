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
    deleteRealmGroupsId(req: operations.DeleteRealmGroupsIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRealmGroupsIdResponse>;
    /**
     * Get group hierarchy.
     */
    getRealmGroups(req: operations.GetRealmGroupsRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmGroupsResponse>;
    /**
     * Returns the groups counts.
     */
    getRealmGroupsCount(req: operations.GetRealmGroupsCountRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmGroupsCountResponse>;
    getRealmGroupsId(req: operations.GetRealmGroupsIdRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmGroupsIdResponse>;
    /**
     * Return object stating whether client Authorization permissions have been initialized or not and a reference
     */
    getRealmGroupsIdManagementPermissions(req: operations.GetRealmGroupsIdManagementPermissionsRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmGroupsIdManagementPermissionsResponse>;
    /**
     * Get users   Returns a list of users, filtered according to query parameters
     */
    getRealmGroupsIdMembers(req: operations.GetRealmGroupsIdMembersRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmGroupsIdMembersResponse>;
    /**
     * create or add a top level realm groupSet or create child.
     */
    postRealmGroups(req: operations.PostRealmGroupsRequest, config?: AxiosRequestConfig): Promise<operations.PostRealmGroupsResponse>;
    /**
     * Set or create child.
     */
    postRealmGroupsIdChildren(req: operations.PostRealmGroupsIdChildrenRequest, config?: AxiosRequestConfig): Promise<operations.PostRealmGroupsIdChildrenResponse>;
    /**
     * Update group, ignores subgroups.
     */
    putRealmGroupsId(req: operations.PutRealmGroupsIdRequest, config?: AxiosRequestConfig): Promise<operations.PutRealmGroupsIdResponse>;
    /**
     * Return object stating whether client Authorization permissions have been initialized or not and a reference
     */
    putRealmGroupsIdManagementPermissions(req: operations.PutRealmGroupsIdManagementPermissionsRequest, config?: AxiosRequestConfig): Promise<operations.PutRealmGroupsIdManagementPermissionsResponse>;
}
