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
     * Returns cryptographic keys managed by Cloud KMS in a given Cloud project. Note that this data is sourced from snapshots, meaning it may not completely reflect the actual state of key metadata at call time.
     */
    kmsinventoryProjectsCryptoKeysList(req: operations.KmsinventoryProjectsCryptoKeysListRequest, security: operations.KmsinventoryProjectsCryptoKeysListSecurity, config?: AxiosRequestConfig): Promise<operations.KmsinventoryProjectsCryptoKeysListResponse>;
    /**
     * Returns aggregate information about the resources protected by the given Cloud KMS CryptoKey. Only resources within the same Cloud organization as the key will be returned. The project that holds the key must be part of an organization in order for this call to succeed.
     */
    kmsinventoryProjectsLocationsKeyRingsCryptoKeysGetProtectedResourcesSummary(req: operations.KmsinventoryProjectsLocationsKeyRingsCryptoKeysGetProtectedResourcesSummaryRequest, security: operations.KmsinventoryProjectsLocationsKeyRingsCryptoKeysGetProtectedResourcesSummarySecurity, config?: AxiosRequestConfig): Promise<operations.KmsinventoryProjectsLocationsKeyRingsCryptoKeysGetProtectedResourcesSummaryResponse>;
}
