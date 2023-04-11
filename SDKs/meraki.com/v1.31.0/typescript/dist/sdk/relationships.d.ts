import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Relationships {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * List the sensor roles for a given sensor or camera device.
     *
     * @remarks
     * List the sensor roles for a given sensor or camera device.
     */
    getDeviceSensorRelationships(req: operations.GetDeviceSensorRelationshipsRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceSensorRelationshipsResponse>;
    /**
     * List the sensor roles for devices in a given network
     *
     * @remarks
     * List the sensor roles for devices in a given network
     */
    getNetworkSensorRelationships(req: operations.GetNetworkSensorRelationshipsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSensorRelationshipsResponse>;
    /**
     * Assign one or more sensor roles to a given sensor or camera device.
     *
     * @remarks
     * Assign one or more sensor roles to a given sensor or camera device.
     */
    updateDeviceSensorRelationships(req: operations.UpdateDeviceSensorRelationshipsRequest, config?: AxiosRequestConfig): Promise<operations.UpdateDeviceSensorRelationshipsResponse>;
}
