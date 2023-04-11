import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class VirtualTariffsStatusForProperty {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Gets the calculation status for a virtual tariff property
     */
    virtualTariffsStatusForPropertyGet(req: operations.VirtualTariffsStatusForPropertyGetRequest, config?: AxiosRequestConfig): Promise<operations.VirtualTariffsStatusForPropertyGetResponse>;
}
