import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * A group is a cohort of patients within an organization. The creation of groups allows for the segmentation of dashboards and analytics. For example, a group might correspond to the patients in a particular practice or the employees of a particular employer.
 */
export declare class Group {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create a group
     *
     * @remarks
     * Create a group record.
     */
    createGroup(req: shared.CreateGroupRequestInput, config?: AxiosRequestConfig): Promise<operations.CreateGroupResponse>;
    /**
     * Get a group
     *
     * @remarks
     * Get a group record by id.
     */
    fetchGroup(req: operations.FetchGroupRequest, config?: AxiosRequestConfig): Promise<operations.FetchGroupResponse>;
    /**
     * List groups
     *
     * @remarks
     * Get a list of groups matching the specified filters.
     */
    fetchGroups(req: operations.FetchGroupsRequest, config?: AxiosRequestConfig): Promise<operations.FetchGroupsResponse>;
}
