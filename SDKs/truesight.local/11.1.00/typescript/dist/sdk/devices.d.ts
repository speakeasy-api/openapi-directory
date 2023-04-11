import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * API operations to interact with the monitored Devices.
 */
export declare class Devices {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Gets a list of all the devices monitored by an Agent.
     *
     * @remarks
     * You need to provide the <b>Device ID</b> of a device to retrieve any other devices monitored by the same Agent:<br>-use the <b>hardware/devices</b> service to get all available device IDs.
     */
    getAgentDevices(req: operations.GetAgentDevicesRequest, config?: AxiosRequestConfig): Promise<operations.GetAgentDevicesResponse>;
    /**
     * Gets detailed information about a specific device.
     *
     * @remarks
     * You need to provide a <b>Device ID</b>:<br>-use the <b>hardware/devices</b> service to get all available device IDs.
     */
    getDevice(req: operations.GetDeviceRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceResponse>;
    /**
     * Gets detailed information about an Agent.
     *
     * @remarks
     * You need to provide a <b>Device ID</b> to retrieve detailed information about the Agent that Monitors the device:<br>-use the <b>hardware/devices</b> service to get all available device IDs.
     */
    getDeviceAgent(req: operations.GetDeviceAgentRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceAgentResponse>;
    /**
     * Gets the energy usage for a specific device and a given period.
     *
     * @remarks
     * You need to provide the device ID:<br>- use the <b>hardware/devices</b> service to get all available device IDs.
     */
    getDeviceEnergyUsage(req: operations.GetDeviceEnergyUsageRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceEnergyUsageResponse>;
    /**
     * Gets the Monitors for a specific device.
     *
     * @remarks
     * You need to provide a <b>Device ID</b>:<br>- use the <b>hardware/devices</b> service to get all available device IDs.
     */
    getDeviceMonitors(req: operations.GetDeviceMonitorsRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceMonitorsResponse>;
    /**
     * Gets data history for a parameter of a specific device over a given period.
     *
     * @remarks
     * You need to provide the <b>Device ID</b>, <b>Parameter Name</b>, <b>Monitor Type</b> and <b>Monitor SID</b>:<br>- use the <b>hardware/devices</b> service to get all available device IDs<br>- use the <b>/hardware/device-monitors/{deviceId}</b> to get the parameter name, the Monitor type and the Monitor SID.<br><br>Finally, define the period for which you wish to retrieve data history.
     */
    getDeviceParameterHistory(req: operations.GetDeviceParameterHistoryRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceParameterHistoryResponse>;
    /**
     * Gets summarized information about all monitored devices.
     *
     * @remarks
     * Lists the available DeviceSummary instances.<br><br>If a parent ID (group ID, application ID, or service ID) is provided, the function narrows down the devices list to those attached to the specified parent:<br>- use the <b>hardware/groups</b> service in the <b>Groups</b> section to get all available group IDs.<br>- use the <b>hardware/applications</b> service in the <b>Applications</b> section to get all available application IDs.<br>- use the <b>hardware/services</b> service in the <b>Services</b> section to get all available service IDs.<br><br><b>Note</b>: At most, one parent ID is taken into account according to this order of precedence:<ol><li>group ID</li><li>application ID</li><li>service ID</li></ol>
     */
    getDevices(req: operations.GetDevicesRequest, config?: AxiosRequestConfig): Promise<operations.GetDevicesResponse>;
    /**
     * Gets overall information for all devices.
     *
     * @remarks
     * Lists the GlobalSummary instance for all the monitored devices.
     */
    getDevicesSummary(config?: AxiosRequestConfig): Promise<operations.GetDevicesSummaryResponse>;
    /**
     * Gets the heating margin values for each monitored device, when available.
     *
     * @remarks
     * If a parent ID (group ID, application ID, or service ID) is provided, the function narrows down the devices list to those attached to the specified parent:<br>- use the <b>hardware/groups</b> service in the <b>Groups</b> section to get all available group IDs.<br>- use the <b>hardware/applications</b> service in the <b>Applications</b> section to get all available application IDs.<br>- use the <b>hardware/services</b> service in the <b>Services</b> section to get all available service IDs.<br><br><b>Note</b>: At most, one parent ID is taken into account according to this order of precedence:<ol><li>group ID</li><li>application ID</li><li>service ID</li></ol>
     */
    getHeatingMarginCoverage(req: operations.GetHeatingMarginCoverageRequest, config?: AxiosRequestConfig): Promise<operations.GetHeatingMarginCoverageResponse>;
    /**
     * Searches devices by name, model, manufacturer or serial number.
     *
     * @remarks
     * Gets the DeviceSummary instances whose name, model, manufacturer or serial number match the specified criteria.<br><br>If a parent ID (group ID, application ID, or service ID) is provided, the function narrows down the devices list to those attached to the specified parent:<br>- use the <b>hardware/groups</b> service in the <b>Groups</b> section to get all available group IDs.<br>- use the <b>hardware/applications</b> service in the <b>Applications</b> section to get all available application IDs.<br>- use the <b>hardware/services</b> service in the <b>Services</b> section to get all available service IDs.<br><br><b>Note</b>: At most, one parent ID is taken into account according to this order of precedence:<ol><li>group ID</li><li>application ID</li><li>service ID</li></ol>
     */
    searchDevices(req: operations.SearchDevicesRequest, config?: AxiosRequestConfig): Promise<operations.SearchDevicesResponse>;
}
