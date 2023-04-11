import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Customers {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Generate summary of app installation requests.
     */
    chromemanagementCustomersAppsCountChromeAppRequests(req: operations.ChromemanagementCustomersAppsCountChromeAppRequestsRequest, security: operations.ChromemanagementCustomersAppsCountChromeAppRequestsSecurity, config?: AxiosRequestConfig): Promise<operations.ChromemanagementCustomersAppsCountChromeAppRequestsResponse>;
    /**
     * Count of Chrome Browsers that have been recently enrolled, have new policy to be synced, or have no recent activity.
     */
    chromemanagementCustomersReportsCountChromeBrowsersNeedingAttention(req: operations.ChromemanagementCustomersReportsCountChromeBrowsersNeedingAttentionRequest, security: operations.ChromemanagementCustomersReportsCountChromeBrowsersNeedingAttentionSecurity, config?: AxiosRequestConfig): Promise<operations.ChromemanagementCustomersReportsCountChromeBrowsersNeedingAttentionResponse>;
    /**
     * Generate report of the number of devices expiring in each month of the selected time frame. Devices are grouped by auto update expiration date and model. Further information can be found [here](https://support.google.com/chrome/a/answer/10564947).
     */
    chromemanagementCustomersReportsCountChromeDevicesReachingAutoExpirationDate(req: operations.ChromemanagementCustomersReportsCountChromeDevicesReachingAutoExpirationDateRequest, security: operations.ChromemanagementCustomersReportsCountChromeDevicesReachingAutoExpirationDateSecurity, config?: AxiosRequestConfig): Promise<operations.ChromemanagementCustomersReportsCountChromeDevicesReachingAutoExpirationDateResponse>;
    /**
     * Counts of ChromeOS devices that have not synced policies or have lacked user activity in the past 28 days, are out of date, or are not complaint. Further information can be found here https://support.google.com/chrome/a/answer/10564947
     */
    chromemanagementCustomersReportsCountChromeDevicesThatNeedAttention(req: operations.ChromemanagementCustomersReportsCountChromeDevicesThatNeedAttentionRequest, security: operations.ChromemanagementCustomersReportsCountChromeDevicesThatNeedAttentionSecurity, config?: AxiosRequestConfig): Promise<operations.ChromemanagementCustomersReportsCountChromeDevicesThatNeedAttentionResponse>;
    /**
     * Counts of devices with a specific hardware specification from the requested hardware type (for example model name, processor type). Further information can be found here https://support.google.com/chrome/a/answer/10564947
     */
    chromemanagementCustomersReportsCountChromeHardwareFleetDevices(req: operations.ChromemanagementCustomersReportsCountChromeHardwareFleetDevicesRequest, security: operations.ChromemanagementCustomersReportsCountChromeHardwareFleetDevicesSecurity, config?: AxiosRequestConfig): Promise<operations.ChromemanagementCustomersReportsCountChromeHardwareFleetDevicesResponse>;
    /**
     * Generate report of installed Chrome versions.
     */
    chromemanagementCustomersReportsCountChromeVersions(req: operations.ChromemanagementCustomersReportsCountChromeVersionsRequest, security: operations.ChromemanagementCustomersReportsCountChromeVersionsSecurity, config?: AxiosRequestConfig): Promise<operations.ChromemanagementCustomersReportsCountChromeVersionsResponse>;
    /**
     * Generate report of app installations.
     */
    chromemanagementCustomersReportsCountInstalledApps(req: operations.ChromemanagementCustomersReportsCountInstalledAppsRequest, security: operations.ChromemanagementCustomersReportsCountInstalledAppsSecurity, config?: AxiosRequestConfig): Promise<operations.ChromemanagementCustomersReportsCountInstalledAppsResponse>;
    /**
     * Get a summary of printing done by each printer.
     */
    chromemanagementCustomersReportsCountPrintJobsByPrinter(req: operations.ChromemanagementCustomersReportsCountPrintJobsByPrinterRequest, security: operations.ChromemanagementCustomersReportsCountPrintJobsByPrinterSecurity, config?: AxiosRequestConfig): Promise<operations.ChromemanagementCustomersReportsCountPrintJobsByPrinterResponse>;
    /**
     * Get a summary of printing done by each user.
     */
    chromemanagementCustomersReportsCountPrintJobsByUser(req: operations.ChromemanagementCustomersReportsCountPrintJobsByUserRequest, security: operations.ChromemanagementCustomersReportsCountPrintJobsByUserSecurity, config?: AxiosRequestConfig): Promise<operations.ChromemanagementCustomersReportsCountPrintJobsByUserResponse>;
    /**
     * Generate report of managed Chrome browser devices that have a specified app installed.
     */
    chromemanagementCustomersReportsFindInstalledAppDevices(req: operations.ChromemanagementCustomersReportsFindInstalledAppDevicesRequest, security: operations.ChromemanagementCustomersReportsFindInstalledAppDevicesSecurity, config?: AxiosRequestConfig): Promise<operations.ChromemanagementCustomersReportsFindInstalledAppDevicesResponse>;
    /**
     * List all telemetry devices.
     */
    chromemanagementCustomersTelemetryDevicesList(req: operations.ChromemanagementCustomersTelemetryDevicesListRequest, security: operations.ChromemanagementCustomersTelemetryDevicesListSecurity, config?: AxiosRequestConfig): Promise<operations.ChromemanagementCustomersTelemetryDevicesListResponse>;
    /**
     * List telemetry events.
     */
    chromemanagementCustomersTelemetryEventsList(req: operations.ChromemanagementCustomersTelemetryEventsListRequest, security: operations.ChromemanagementCustomersTelemetryEventsListSecurity, config?: AxiosRequestConfig): Promise<operations.ChromemanagementCustomersTelemetryEventsListResponse>;
    /**
     * Get telemetry user.
     */
    chromemanagementCustomersTelemetryUsersGet(req: operations.ChromemanagementCustomersTelemetryUsersGetRequest, security: operations.ChromemanagementCustomersTelemetryUsersGetSecurity, config?: AxiosRequestConfig): Promise<operations.ChromemanagementCustomersTelemetryUsersGetResponse>;
    /**
     * List all telemetry users.
     */
    chromemanagementCustomersTelemetryUsersList(req: operations.ChromemanagementCustomersTelemetryUsersListRequest, security: operations.ChromemanagementCustomersTelemetryUsersListSecurity, config?: AxiosRequestConfig): Promise<operations.ChromemanagementCustomersTelemetryUsersListResponse>;
}
