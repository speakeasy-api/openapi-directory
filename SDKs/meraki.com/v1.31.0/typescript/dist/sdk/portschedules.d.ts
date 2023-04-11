import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class PortSchedules {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Add a switch port schedule
     *
     * @remarks
     * Add a switch port schedule
     */
    createNetworkSwitchPortSchedule(req: operations.CreateNetworkSwitchPortScheduleRequest, config?: AxiosRequestConfig): Promise<operations.CreateNetworkSwitchPortScheduleResponse>;
    /**
     * Delete a switch port schedule
     *
     * @remarks
     * Delete a switch port schedule
     */
    deleteNetworkSwitchPortSchedule(req: operations.DeleteNetworkSwitchPortScheduleRequest, config?: AxiosRequestConfig): Promise<operations.DeleteNetworkSwitchPortScheduleResponse>;
    /**
     * List switch port schedules
     *
     * @remarks
     * List switch port schedules
     */
    getNetworkSwitchPortSchedules(req: operations.GetNetworkSwitchPortSchedulesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSwitchPortSchedulesResponse>;
    /**
     * Update a switch port schedule
     *
     * @remarks
     * Update a switch port schedule
     */
    updateNetworkSwitchPortSchedule(req: operations.UpdateNetworkSwitchPortScheduleRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkSwitchPortScheduleResponse>;
}
