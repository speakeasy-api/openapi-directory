import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * [Track packages](https://www.shipengine.com/docs/tracking/) across any of our 20+ supported carrier accounts and create tracking events to keep your customers up-to-date. Easily integrate real-time tracking information for shipments into your app, email, or SMS.
 *
 * @remarks
 *
 *
 * @see {@link https://www.shipengine.com/docs/tracking/} - Learn how to use ShipEngine to track any package with a carrier and a tracking number
 */
export declare class Tracking {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get Tracking Information
     *
     * @remarks
     * Retrieve package tracking information
     */
    getTrackingLog(req: operations.GetTrackingLogRequest, config?: AxiosRequestConfig): Promise<operations.GetTrackingLogResponse>;
    /**
     * Start Tracking a Package
     *
     * @remarks
     * Allows you to subscribe to tracking updates for a package. You specify the carrier_code and tracking_number of the package,
     * and receive notifications via webhooks whenever the shipping status changes.
     *
     */
    startTracking(req: operations.StartTrackingRequest, config?: AxiosRequestConfig): Promise<operations.StartTrackingResponse>;
    /**
     * Stop Tracking a Package
     *
     * @remarks
     * Unsubscribe from tracking updates for a package.
     */
    stopTracking(req: operations.StopTrackingRequest, config?: AxiosRequestConfig): Promise<operations.StopTrackingResponse>;
}
