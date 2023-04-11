import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class DnsKeys {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Fetches the representation of an existing DnsKey.
     */
    dnsDnsKeysGet(req: operations.DnsDnsKeysGetRequest, security: operations.DnsDnsKeysGetSecurity, config?: AxiosRequestConfig): Promise<operations.DnsDnsKeysGetResponse>;
    /**
     * Enumerates DnsKeys to a ResourceRecordSet collection.
     */
    dnsDnsKeysList(req: operations.DnsDnsKeysListRequest, security: operations.DnsDnsKeysListSecurity, config?: AxiosRequestConfig): Promise<operations.DnsDnsKeysListResponse>;
}
