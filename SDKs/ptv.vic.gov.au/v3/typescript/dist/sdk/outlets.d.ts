import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Outlets {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * List all ticket outlets
     */
    outletsGetAllOutlets(req: operations.OutletsGetAllOutletsRequest, config?: AxiosRequestConfig): Promise<operations.OutletsGetAllOutletsResponse>;
    /**
     * List ticket outlets near a specific location
     */
    outletsGetOutletsByGeolocation(req: operations.OutletsGetOutletsByGeolocationRequest, config?: AxiosRequestConfig): Promise<operations.OutletsGetOutletsByGeolocationResponse>;
}
