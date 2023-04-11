import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * carrier accounts
 *
 * @remarks
 *
 */
export declare class CarrierAccounts {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Connect a carrier account
     *
     * @remarks
     * Connect a carrier account
     */
    connectCarrier(req: operations.ConnectCarrierRequest, config?: AxiosRequestConfig): Promise<operations.ConnectCarrierResponse>;
    /**
     * Disconnect a carrier
     *
     * @remarks
     * Disconnect a carrier
     */
    disconnectCarrier(req: operations.DisconnectCarrierRequest, config?: AxiosRequestConfig): Promise<operations.DisconnectCarrierResponse>;
    /**
     * Get carrier settings
     *
     * @remarks
     * Get carrier settings
     */
    getCarrierSettings(req: operations.GetCarrierSettingsRequest, config?: AxiosRequestConfig): Promise<operations.GetCarrierSettingsResponse>;
    /**
     * Update carrier settings
     *
     * @remarks
     * Update carrier settings
     */
    updateCarrierSettings(req: operations.UpdateCarrierSettingsRequest, config?: AxiosRequestConfig): Promise<operations.UpdateCarrierSettingsResponse>;
}
