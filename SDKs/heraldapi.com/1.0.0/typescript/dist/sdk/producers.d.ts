import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Producers {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * /producers
     *
     * @remarks
     * ### Get producers
     *
     * Get a list of [producers](https://www.heraldapi.com/docs/producers).
     */
    getProducers(req: operations.GetProducersRequest, config?: AxiosRequestConfig): Promise<operations.GetProducersResponse>;
}
