import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class DiskTypes {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Retrieves an aggregated list of disk types.
     */
    computeDiskTypesAggregatedList(req: operations.ComputeDiskTypesAggregatedListRequest, security: operations.ComputeDiskTypesAggregatedListSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeDiskTypesAggregatedListResponse>;
    /**
     * Returns the specified disk type.
     */
    computeDiskTypesGet(req: operations.ComputeDiskTypesGetRequest, security: operations.ComputeDiskTypesGetSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeDiskTypesGetResponse>;
    /**
     * Retrieves a list of disk types available to the specified project.
     */
    computeDiskTypesList(req: operations.ComputeDiskTypesListRequest, security: operations.ComputeDiskTypesListSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeDiskTypesListResponse>;
}
