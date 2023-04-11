import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Changes {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Atomically updates the ResourceRecordSet collection.
     */
    dnsChangesCreate(req: operations.DnsChangesCreateRequest, security: operations.DnsChangesCreateSecurity, config?: AxiosRequestConfig): Promise<operations.DnsChangesCreateResponse>;
    /**
     * Fetches the representation of an existing Change.
     */
    dnsChangesGet(req: operations.DnsChangesGetRequest, security: operations.DnsChangesGetSecurity, config?: AxiosRequestConfig): Promise<operations.DnsChangesGetResponse>;
    /**
     * Enumerates Changes to a ResourceRecordSet collection.
     */
    dnsChangesList(req: operations.DnsChangesListRequest, security: operations.DnsChangesListSecurity, config?: AxiosRequestConfig): Promise<operations.DnsChangesListResponse>;
}
