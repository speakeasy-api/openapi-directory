import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Test {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * echo - Echo text
    **/
    echo(req: operations.EchoRequest, config?: AxiosRequestConfig): Promise<operations.EchoResponse>;
    /**
     * validate - Validate input
    **/
    validate(req: operations.ValidateRequest, config?: AxiosRequestConfig): Promise<operations.ValidateResponse>;
}
