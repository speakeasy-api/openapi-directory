import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * These methods are no longer maintained nor supported
 */
export declare class Deprecated {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * The method devicelist returns the list of devices owned by the user, and their modules.
     * A device is identified by its _id (which is its mac address) and each device may have one, several or no modules, also identified by an _id.
     *
     */
    devicelist(req: operations.DevicelistRequest, security: operations.DevicelistSecurity, config?: AxiosRequestConfig): Promise<operations.DevicelistResponse>;
    /**
     * The method getthermstate returns the last Thermostat measurements, its current weekly schedule, and, if present, its current manual temperature setpoint.
     */
    getthermstate(req: operations.GetthermstateRequest, security: operations.GetthermstateSecurity, config?: AxiosRequestConfig): Promise<operations.GetthermstateResponse>;
    /**
     * The method getuser returns information about a user such as prefered language, prefered units, and list of devices.
     *
     */
    getuser(config?: AxiosRequestConfig): Promise<operations.GetuserResponse>;
}
