import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * API operations to interact with the monitored Groups.
 */
export declare class Groups {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Gets all group summaries.
     *
     * @remarks
     * Lists the available GroupSummary instances.
     */
    getGroups(req: operations.GetGroupsRequest, config?: AxiosRequestConfig): Promise<operations.GetGroupsResponse>;
    /**
     * Gets detailed information about a specific group.
     *
     * @remarks
     * You need to provide a <b>Device ID</b>:<br>- use the <b>hardware/groups</b> service to get all available group ID.
     */
    getOneGroup(req: operations.GetOneGroupRequest, config?: AxiosRequestConfig): Promise<operations.GetOneGroupResponse>;
    /**
     * Updates the values of the energy footprint parameter for a specific group.
     *
     * @remarks
     * You need to provide a <b>Device ID</b>:<br>- use the <b>hardware/groups</b> service to get all available group ID.<br><br>If the ID is <em>"global"</em>, then the group being updated is the GlobalSummary.
     */
    updateEnergyCost(req: operations.UpdateEnergyCostRequest, config?: AxiosRequestConfig): Promise<operations.UpdateEnergyCostResponse>;
}
