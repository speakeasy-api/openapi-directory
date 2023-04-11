import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class VirtualBillingMeters {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Beta: Gets all Meters available to activate as a Virtual Meter.
     *
     * @remarks
     * Beta: Gets all Meters available to activate as a Virtual Meter.
     */
    virtualBillingMetersGet(config?: AxiosRequestConfig): Promise<operations.VirtualBillingMetersGetResponse>;
}
