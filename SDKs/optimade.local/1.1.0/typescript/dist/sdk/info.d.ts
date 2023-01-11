import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Info {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getEntryInfoInfoEntryGet - Get Entry Info
    **/
    getEntryInfoInfoEntryGet(req: operations.GetEntryInfoInfoEntryGetRequest, config?: AxiosRequestConfig): Promise<operations.GetEntryInfoInfoEntryGetResponse>;
    /**
     * getInfoInfoGet - Get Info
    **/
    getInfoInfoGet(config?: AxiosRequestConfig): Promise<operations.GetInfoInfoGetResponse>;
}
