import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Stages {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Order of Staged Upgrade Groups in a network
     *
     * @remarks
     * Order of Staged Upgrade Groups in a network
     */
    getNetworkFirmwareUpgradesStagedStages(req: operations.GetNetworkFirmwareUpgradesStagedStagesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkFirmwareUpgradesStagedStagesResponse>;
    /**
     * Assign Staged Upgrade Group order in the sequence.
     *
     * @remarks
     * Assign Staged Upgrade Group order in the sequence.
     */
    updateNetworkFirmwareUpgradesStagedStages(req: operations.UpdateNetworkFirmwareUpgradesStagedStagesRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkFirmwareUpgradesStagedStagesResponse>;
}
