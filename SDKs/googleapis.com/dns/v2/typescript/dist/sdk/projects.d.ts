import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Projects {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Fetches the representation of an existing Project.
     */
    dnsProjectsGet(req: operations.DnsProjectsGetRequest, security: operations.DnsProjectsGetSecurity, config?: AxiosRequestConfig): Promise<operations.DnsProjectsGetResponse>;
}
