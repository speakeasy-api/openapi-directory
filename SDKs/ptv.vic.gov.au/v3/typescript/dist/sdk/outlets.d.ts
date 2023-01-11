import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Outlets {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * outletsGetAllOutlets - List all ticket outlets
    **/
    outletsGetAllOutlets(req: operations.OutletsGetAllOutletsRequest, config?: AxiosRequestConfig): Promise<operations.OutletsGetAllOutletsResponse>;
    /**
     * outletsGetOutletsByGeolocation - List ticket outlets near a specific location
    **/
    outletsGetOutletsByGeolocation(req: operations.OutletsGetOutletsByGeolocationRequest, config?: AxiosRequestConfig): Promise<operations.OutletsGetOutletsByGeolocationResponse>;
}
