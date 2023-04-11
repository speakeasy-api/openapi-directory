import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class TokenBurnController {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    getBurningTransaction(req: operations.GetBurningTransactionRequest, config?: AxiosRequestConfig): Promise<operations.GetBurningTransactionResponse>;
    mainApp(config?: AxiosRequestConfig): Promise<operations.MainAppResponse>;
    prepareTransaction(req: Record<string, Record<string, any>>, config?: AxiosRequestConfig): Promise<operations.PrepareTransactionResponse>;
}
