import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Events {
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
     * Postpone by 1 week all pending staged upgrade stages for a network
     *
     * @remarks
     * Postpone by 1 week all pending staged upgrade stages for a network
     */
    deferNetworkFirmwareUpgradesStagedEvents(req: operations.DeferNetworkFirmwareUpgradesStagedEventsRequest, config?: AxiosRequestConfig): Promise<operations.DeferNetworkFirmwareUpgradesStagedEventsResponse>;
    /**
     * List the security events for a client
     *
     * @remarks
     * List the security events for a client. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.
     */
    getNetworkApplianceClientSecurityEvents(req: operations.GetNetworkApplianceClientSecurityEventsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkApplianceClientSecurityEventsResponse>;
    /**
     * List the security events for a network
     *
     * @remarks
     * List the security events for a network
     */
    getNetworkApplianceSecurityEvents(req: operations.GetNetworkApplianceSecurityEventsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkApplianceSecurityEventsResponse>;
    /**
     * List the events for the network
     *
     * @remarks
     * List the events for the network
     */
    getNetworkEvents(req: operations.GetNetworkEventsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkEventsResponse>;
    /**
     * List the event type to human-readable description
     *
     * @remarks
     * List the event type to human-readable description
     */
    getNetworkEventsEventTypes(req: operations.GetNetworkEventsEventTypesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkEventsEventTypesResponse>;
    /**
     * Get the Staged Upgrade Event from a network
     *
     * @remarks
     * Get the Staged Upgrade Event from a network
     */
    getNetworkFirmwareUpgradesStagedEvents(req: operations.GetNetworkFirmwareUpgradesStagedEventsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkFirmwareUpgradesStagedEventsResponse>;
    /**
     * List the security events for an organization
     *
     * @remarks
     * List the security events for an organization
     */
    getOrganizationApplianceSecurityEvents(req: operations.GetOrganizationApplianceSecurityEventsRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationApplianceSecurityEventsResponse>;
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
}
