import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class FetchAccountInfo {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getAccount - Fetch credit balance and free API calls.
     *
     * Get the current credit balance and number of free API calls.
     *
     * Notes:
     *
     * * Balance changes may be delayed by several seconds. To locally keep track of your credit balance, you should therefore only call this endpoint initially (or e.g. when the user manually triggers a refresh), then use the `X-Credits-Charged` response header returned with each image processing response to adjust the local balance.
     *
     * * The "*sizes*" field is always "all", is deprecated and will soon be removed.
     *
    **/
    getAccount(config?: AxiosRequestConfig): Promise<operations.GetAccountResponse>;
}
