import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class VirtualTariffConsumption {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Gets the consumption of a folder with a virtuall tariffs.
     *
     * @remarks
     * Gets the consumption of a folder with a virtuall tariffs.
     */
    virtualTariffConsumptionGet(req: operations.VirtualTariffConsumptionGetRequest, config?: AxiosRequestConfig): Promise<operations.VirtualTariffConsumptionGetResponse>;
}
