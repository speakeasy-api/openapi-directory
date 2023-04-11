import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Entries {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Gets an entry by its target resource name. The resource name comes from the source Google Cloud Platform service.
     */
    datacatalogEntriesLookup(req: operations.DatacatalogEntriesLookupRequest, security: operations.DatacatalogEntriesLookupSecurity, config?: AxiosRequestConfig): Promise<operations.DatacatalogEntriesLookupResponse>;
}
