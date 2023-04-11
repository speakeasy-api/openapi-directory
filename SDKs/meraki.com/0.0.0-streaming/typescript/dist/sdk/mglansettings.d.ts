import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class MGLANSettings {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Show the LAN Settings of a MG
     *
     * @remarks
     * Show the LAN Settings of a MG
     */
    getDeviceCellularGatewaySettings(req: operations.GetDeviceCellularGatewaySettingsRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceCellularGatewaySettingsResponse>;
    /**
     * Update the LAN Settings for a single MG.
     *
     * @remarks
     * Update the LAN Settings for a single MG.
     */
    updateDeviceCellularGatewaySettings(req: operations.UpdateDeviceCellularGatewaySettingsRequest, config?: AxiosRequestConfig): Promise<operations.UpdateDeviceCellularGatewaySettingsResponse>;
}
