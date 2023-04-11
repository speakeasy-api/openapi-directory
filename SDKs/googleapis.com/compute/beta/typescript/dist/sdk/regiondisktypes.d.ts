import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class RegionDiskTypes {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Returns the specified regional disk type.
     */
    computeRegionDiskTypesGet(req: operations.ComputeRegionDiskTypesGetRequest, security: operations.ComputeRegionDiskTypesGetSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeRegionDiskTypesGetResponse>;
    /**
     * Retrieves a list of regional disk types available to the specified project.
     */
    computeRegionDiskTypesList(req: operations.ComputeRegionDiskTypesListRequest, security: operations.ComputeRegionDiskTypesListSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeRegionDiskTypesListResponse>;
}
