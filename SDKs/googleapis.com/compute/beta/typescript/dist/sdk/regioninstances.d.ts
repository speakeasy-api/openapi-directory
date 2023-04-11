import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class RegionInstances {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Creates multiple instances in a given region. Count specifies the number of instances to create.
     */
    computeRegionInstancesBulkInsert(req: operations.ComputeRegionInstancesBulkInsertRequest, security: operations.ComputeRegionInstancesBulkInsertSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeRegionInstancesBulkInsertResponse>;
}
