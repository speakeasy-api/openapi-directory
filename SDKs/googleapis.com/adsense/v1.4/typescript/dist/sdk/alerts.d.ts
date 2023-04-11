import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Alerts {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Dismiss (delete) the specified alert from the publisher's AdSense account.
     */
    adsenseAlertsDelete(req: operations.AdsenseAlertsDeleteRequest, security: operations.AdsenseAlertsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.AdsenseAlertsDeleteResponse>;
    /**
     * List the alerts for this AdSense account.
     */
    adsenseAlertsList(req: operations.AdsenseAlertsListRequest, security: operations.AdsenseAlertsListSecurity, config?: AxiosRequestConfig): Promise<operations.AdsenseAlertsListResponse>;
}
