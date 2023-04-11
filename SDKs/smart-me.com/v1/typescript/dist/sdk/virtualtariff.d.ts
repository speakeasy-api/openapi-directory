import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class VirtualTariff {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Gets all Virtual Tariffs of a user
     *
     * @remarks
     * Gets all Virtual Tariffs of a user
     */
    virtualTariffGet(config?: AxiosRequestConfig): Promise<operations.VirtualTariffGetResponse>;
    /**
     * Gets all virtual tariffs of a folder
     *
     * @remarks
     * Gets all virtual tariffs of a folder
     */
    getApiVirtualTariffId(req: operations.GetApiVirtualTariffIdRequest, config?: AxiosRequestConfig): Promise<operations.GetApiVirtualTariffIdResponse>;
}
