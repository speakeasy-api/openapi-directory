import * as operations from "./models/operations";
import * as shared from "./models/shared";
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
     * Create new Group
     *
     * @remarks
     * In this step you’ll pass basic information about the group, such as their name, SIC code, and EIN. You can then move on to further configure the group, associate this group with one or more applications, and add employees and dependents to that group.
     */
    createGroup(req: shared.GroupCreateRequest, config?: AxiosRequestConfig): Promise<operations.CreateGroupResponse>;
    /**
     * Edit a Group
     *
     * @remarks
     * Edit a group based on the ID provided. The version parameter must match the latest group version.
     */
    editGroup(req: operations.EditGroupRequest, config?: AxiosRequestConfig): Promise<operations.EditGroupResponse>;
    /**
     * Get Group
     *
     * @remarks
     * Returns the latest version of a single group based on the ID provided.
     */
    getGroup(req: operations.GetGroupRequest, config?: AxiosRequestConfig): Promise<operations.GetGroupResponse>;
    /**
     * Get Groups
     *
     * @remarks
     * Returns a list of all groups
     */
    getGroups(req: operations.GetGroupsRequest, config?: AxiosRequestConfig): Promise<operations.GetGroupsResponse>;
}
