import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class ValuesInPastMultiple {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Gets multiple values of a device. This call needs a smart-me professional licence.
     */
    valuesInPastMultipleGet(req: operations.ValuesInPastMultipleGetRequest, config?: AxiosRequestConfig): Promise<operations.ValuesInPastMultipleGetResponse>;
}
