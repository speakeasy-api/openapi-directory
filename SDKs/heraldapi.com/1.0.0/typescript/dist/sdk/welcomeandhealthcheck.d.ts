import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class WelcomeAndHealthCheck {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * /
     *
     * @remarks
     * ### Welcome & Health Check
     *
     * Welcome to Herald! You can use the root endpoint to confirm HeraldAPI is available and you are able to successfully connect.
     *
     * This endpoint does not require authentication.
     */
    get(config?: AxiosRequestConfig): Promise<operations.GetResponse>;
}
