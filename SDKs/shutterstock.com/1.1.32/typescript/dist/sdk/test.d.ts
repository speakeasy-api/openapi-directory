import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Test {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Echo text
     */
    echo(req: operations.EchoRequest, config?: AxiosRequestConfig): Promise<operations.EchoResponse>;
    /**
     * Validate input
     */
    validate(req: operations.ValidateRequest, config?: AxiosRequestConfig): Promise<operations.ValidateResponse>;
}
