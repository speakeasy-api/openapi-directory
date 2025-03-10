import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Entity {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * The RDAP API recognizes this command from the RDAP specification but does not support it. The response is a formatted 501 error.
     */
    domainsrdapEntityGet(req: operations.DomainsrdapEntityGetRequest, config?: AxiosRequestConfig): Promise<operations.DomainsrdapEntityGetResponse>;
}
