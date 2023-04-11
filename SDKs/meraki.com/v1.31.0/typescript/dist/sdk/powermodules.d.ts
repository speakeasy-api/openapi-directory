import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class PowerModules {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * List the power status information for devices in an organization
     *
     * @remarks
     * List the power status information for devices in an organization. The data returned by this endpoint is updated every 5 minutes.
     */
    getOrganizationDevicesPowerModulesStatusesByDevice(req: operations.GetOrganizationDevicesPowerModulesStatusesByDeviceRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationDevicesPowerModulesStatusesByDeviceResponse>;
}
