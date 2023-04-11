import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Grants {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Grant access for a user to the given package.
     */
    androidpublisherGrantsCreate(req: operations.AndroidpublisherGrantsCreateRequest, security: operations.AndroidpublisherGrantsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherGrantsCreateResponse>;
}
