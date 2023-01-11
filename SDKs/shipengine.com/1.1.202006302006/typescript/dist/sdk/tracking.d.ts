import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Tracking {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getTrackingLog - Get Tracking Information
     *
     * Retrieve package tracking information
    **/
    getTrackingLog(req: operations.GetTrackingLogRequest, config?: AxiosRequestConfig): Promise<operations.GetTrackingLogResponse>;
    /**
     * startTracking - Start Tracking a Package
     *
     * Allows you to subscribe to tracking updates for a package. You specify the carrier_code and tracking_number of the package,
     * and receive notifications via webhooks whenever the shipping status changes.
     *
    **/
    startTracking(req: operations.StartTrackingRequest, config?: AxiosRequestConfig): Promise<operations.StartTrackingResponse>;
    /**
     * stopTracking - Stop Tracking a Package
     *
     * Unsubscribe from tracking updates for a package.
    **/
    stopTracking(req: operations.StopTrackingRequest, config?: AxiosRequestConfig): Promise<operations.StopTrackingResponse>;
}
