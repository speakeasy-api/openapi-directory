import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class ResourceRecordSets {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Creates a new ResourceRecordSet.
     */
    dnsResourceRecordSetsCreate(req: operations.DnsResourceRecordSetsCreateRequest, security: operations.DnsResourceRecordSetsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.DnsResourceRecordSetsCreateResponse>;
    /**
     * Deletes a previously created ResourceRecordSet.
     */
    dnsResourceRecordSetsDelete(req: operations.DnsResourceRecordSetsDeleteRequest, security: operations.DnsResourceRecordSetsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.DnsResourceRecordSetsDeleteResponse>;
    /**
     * Fetches the representation of an existing ResourceRecordSet.
     */
    dnsResourceRecordSetsGet(req: operations.DnsResourceRecordSetsGetRequest, security: operations.DnsResourceRecordSetsGetSecurity, config?: AxiosRequestConfig): Promise<operations.DnsResourceRecordSetsGetResponse>;
    /**
     * Enumerates ResourceRecordSets that you have created but not yet deleted.
     */
    dnsResourceRecordSetsList(req: operations.DnsResourceRecordSetsListRequest, security: operations.DnsResourceRecordSetsListSecurity, config?: AxiosRequestConfig): Promise<operations.DnsResourceRecordSetsListResponse>;
    /**
     * Applies a partial update to an existing ResourceRecordSet.
     */
    dnsResourceRecordSetsPatch(req: operations.DnsResourceRecordSetsPatchRequest, security: operations.DnsResourceRecordSetsPatchSecurity, config?: AxiosRequestConfig): Promise<operations.DnsResourceRecordSetsPatchResponse>;
}
