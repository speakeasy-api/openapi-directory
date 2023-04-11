import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class CityNameSimilarityKey {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Gets a similarity key for matching purposes for city name data
     *
     * @remarks
     * Gets a similarity key for matching purposes for city name data.
     */
    getcitymatch(req: operations.GetcitymatchRequest, config?: AxiosRequestConfig): Promise<operations.GetcitymatchResponse>;
}
