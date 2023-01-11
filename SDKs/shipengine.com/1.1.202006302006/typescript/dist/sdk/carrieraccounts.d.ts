import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class CarrierAccounts {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * connectCarrier - Connect a carrier account
     *
     * Connect a carrier account
    **/
    connectCarrier(req: operations.ConnectCarrierRequest, config?: AxiosRequestConfig): Promise<operations.ConnectCarrierResponse>;
    /**
     * disconnectCarrier - Disconnect a carrier
     *
     * Disconnect a carrier
    **/
    disconnectCarrier(req: operations.DisconnectCarrierRequest, config?: AxiosRequestConfig): Promise<operations.DisconnectCarrierResponse>;
    /**
     * getCarrierSettings - Get carrier settings
     *
     * Get carrier settings
    **/
    getCarrierSettings(req: operations.GetCarrierSettingsRequest, config?: AxiosRequestConfig): Promise<operations.GetCarrierSettingsResponse>;
    /**
     * updateCarrierSettings - Update carrier settings
     *
     * Update carrier settings
    **/
    updateCarrierSettings(req: operations.UpdateCarrierSettingsRequest, config?: AxiosRequestConfig): Promise<operations.UpdateCarrierSettingsResponse>;
}
