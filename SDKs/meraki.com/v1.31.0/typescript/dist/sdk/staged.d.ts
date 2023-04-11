import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Staged {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create a Staged Upgrade Event for a network
     *
     * @remarks
     * Create a Staged Upgrade Event for a network
     */
    createNetworkFirmwareUpgradesStagedEvent(req: operations.CreateNetworkFirmwareUpgradesStagedEventRequest, config?: AxiosRequestConfig): Promise<operations.CreateNetworkFirmwareUpgradesStagedEventResponse>;
    /**
     * Create a Staged Upgrade Group for a network
     *
     * @remarks
     * Create a Staged Upgrade Group for a network
     */
    createNetworkFirmwareUpgradesStagedGroup(req: operations.CreateNetworkFirmwareUpgradesStagedGroupRequest, config?: AxiosRequestConfig): Promise<operations.CreateNetworkFirmwareUpgradesStagedGroupResponse>;
    /**
     * Postpone by 1 week all pending staged upgrade stages for a network
     *
     * @remarks
     * Postpone by 1 week all pending staged upgrade stages for a network
     */
    deferNetworkFirmwareUpgradesStagedEvents(req: operations.DeferNetworkFirmwareUpgradesStagedEventsRequest, config?: AxiosRequestConfig): Promise<operations.DeferNetworkFirmwareUpgradesStagedEventsResponse>;
    /**
     * Delete a Staged Upgrade Group
     *
     * @remarks
     * Delete a Staged Upgrade Group
     */
    deleteNetworkFirmwareUpgradesStagedGroup(req: operations.DeleteNetworkFirmwareUpgradesStagedGroupRequest, config?: AxiosRequestConfig): Promise<operations.DeleteNetworkFirmwareUpgradesStagedGroupResponse>;
    /**
     * Get the Staged Upgrade Event from a network
     *
     * @remarks
     * Get the Staged Upgrade Event from a network
     */
    getNetworkFirmwareUpgradesStagedEvents(req: operations.GetNetworkFirmwareUpgradesStagedEventsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkFirmwareUpgradesStagedEventsResponse>;
    /**
     * Get a Staged Upgrade Group from a network
     *
     * @remarks
     * Get a Staged Upgrade Group from a network
     */
    getNetworkFirmwareUpgradesStagedGroup(req: operations.GetNetworkFirmwareUpgradesStagedGroupRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkFirmwareUpgradesStagedGroupResponse>;
    /**
     * List of Staged Upgrade Groups in a network
     *
     * @remarks
     * List of Staged Upgrade Groups in a network
     */
    getNetworkFirmwareUpgradesStagedGroups(req: operations.GetNetworkFirmwareUpgradesStagedGroupsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkFirmwareUpgradesStagedGroupsResponse>;
    /**
     * Order of Staged Upgrade Groups in a network
     *
     * @remarks
     * Order of Staged Upgrade Groups in a network
     */
    getNetworkFirmwareUpgradesStagedStages(req: operations.GetNetworkFirmwareUpgradesStagedStagesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkFirmwareUpgradesStagedStagesResponse>;
    /**
     * Rollback a Staged Upgrade Event for a network
     *
     * @remarks
     * Rollback a Staged Upgrade Event for a network
     */
    rollbacksNetworkFirmwareUpgradesStagedEvents(req: operations.RollbacksNetworkFirmwareUpgradesStagedEventsRequest, config?: AxiosRequestConfig): Promise<operations.RollbacksNetworkFirmwareUpgradesStagedEventsResponse>;
    /**
     * Update the Staged Upgrade Event for a network
     *
     * @remarks
     * Update the Staged Upgrade Event for a network
     */
    updateNetworkFirmwareUpgradesStagedEvents(req: operations.UpdateNetworkFirmwareUpgradesStagedEventsRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkFirmwareUpgradesStagedEventsResponse>;
    /**
     * Update a Staged Upgrade Group for a network
     *
     * @remarks
     * Update a Staged Upgrade Group for a network
     */
    updateNetworkFirmwareUpgradesStagedGroup(req: operations.UpdateNetworkFirmwareUpgradesStagedGroupRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkFirmwareUpgradesStagedGroupResponse>;
    /**
     * Assign Staged Upgrade Group order in the sequence.
     *
     * @remarks
     * Assign Staged Upgrade Group order in the sequence.
     */
    updateNetworkFirmwareUpgradesStagedStages(req: operations.UpdateNetworkFirmwareUpgradesStagedStagesRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkFirmwareUpgradesStagedStagesResponse>;
}
