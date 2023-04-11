import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Firmware {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get firmware upgrade information for an organization
     *
     * @remarks
     * Get firmware upgrade information for an organization
     */
    getOrganizationFirmwareUpgrades(req: operations.GetOrganizationFirmwareUpgradesRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationFirmwareUpgradesResponse>;
    /**
     * Get firmware upgrade status for the filtered devices
     *
     * @remarks
     * Get firmware upgrade status for the filtered devices
     */
    getOrganizationFirmwareUpgradesByDevice(req: operations.GetOrganizationFirmwareUpgradesByDeviceRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationFirmwareUpgradesByDeviceResponse>;
}
