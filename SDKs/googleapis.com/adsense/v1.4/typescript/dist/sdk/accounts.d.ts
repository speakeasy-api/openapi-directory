import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Accounts {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get Auto ad code for a given ad client.
     */
    adsenseAccountsAdclientsGetAdCode(req: operations.AdsenseAccountsAdclientsGetAdCodeRequest, security: operations.AdsenseAccountsAdclientsGetAdCodeSecurity, config?: AxiosRequestConfig): Promise<operations.AdsenseAccountsAdclientsGetAdCodeResponse>;
    /**
     * List all ad clients in the specified account.
     */
    adsenseAccountsAdclientsList(req: operations.AdsenseAccountsAdclientsListRequest, security: operations.AdsenseAccountsAdclientsListSecurity, config?: AxiosRequestConfig): Promise<operations.AdsenseAccountsAdclientsListResponse>;
    /**
     * List all custom channels which the specified ad unit belongs to.
     */
    adsenseAccountsAdunitsCustomchannelsList(req: operations.AdsenseAccountsAdunitsCustomchannelsListRequest, security: operations.AdsenseAccountsAdunitsCustomchannelsListSecurity, config?: AxiosRequestConfig): Promise<operations.AdsenseAccountsAdunitsCustomchannelsListResponse>;
    /**
     * Gets the specified ad unit in the specified ad client for the specified account.
     */
    adsenseAccountsAdunitsGet(req: operations.AdsenseAccountsAdunitsGetRequest, security: operations.AdsenseAccountsAdunitsGetSecurity, config?: AxiosRequestConfig): Promise<operations.AdsenseAccountsAdunitsGetResponse>;
    /**
     * Get ad code for the specified ad unit.
     */
    adsenseAccountsAdunitsGetAdCode(req: operations.AdsenseAccountsAdunitsGetAdCodeRequest, security: operations.AdsenseAccountsAdunitsGetAdCodeSecurity, config?: AxiosRequestConfig): Promise<operations.AdsenseAccountsAdunitsGetAdCodeResponse>;
    /**
     * List all ad units in the specified ad client for the specified account.
     */
    adsenseAccountsAdunitsList(req: operations.AdsenseAccountsAdunitsListRequest, security: operations.AdsenseAccountsAdunitsListSecurity, config?: AxiosRequestConfig): Promise<operations.AdsenseAccountsAdunitsListResponse>;
    /**
     * Dismiss (delete) the specified alert from the specified publisher AdSense account.
     */
    adsenseAccountsAlertsDelete(req: operations.AdsenseAccountsAlertsDeleteRequest, security: operations.AdsenseAccountsAlertsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.AdsenseAccountsAlertsDeleteResponse>;
    /**
     * List the alerts for the specified AdSense account.
     */
    adsenseAccountsAlertsList(req: operations.AdsenseAccountsAlertsListRequest, security: operations.AdsenseAccountsAlertsListSecurity, config?: AxiosRequestConfig): Promise<operations.AdsenseAccountsAlertsListResponse>;
    /**
     * List all ad units in the specified custom channel.
     */
    adsenseAccountsCustomchannelsAdunitsList(req: operations.AdsenseAccountsCustomchannelsAdunitsListRequest, security: operations.AdsenseAccountsCustomchannelsAdunitsListSecurity, config?: AxiosRequestConfig): Promise<operations.AdsenseAccountsCustomchannelsAdunitsListResponse>;
    /**
     * Get the specified custom channel from the specified ad client for the specified account.
     */
    adsenseAccountsCustomchannelsGet(req: operations.AdsenseAccountsCustomchannelsGetRequest, security: operations.AdsenseAccountsCustomchannelsGetSecurity, config?: AxiosRequestConfig): Promise<operations.AdsenseAccountsCustomchannelsGetResponse>;
    /**
     * List all custom channels in the specified ad client for the specified account.
     */
    adsenseAccountsCustomchannelsList(req: operations.AdsenseAccountsCustomchannelsListRequest, security: operations.AdsenseAccountsCustomchannelsListSecurity, config?: AxiosRequestConfig): Promise<operations.AdsenseAccountsCustomchannelsListResponse>;
    /**
     * Get information about the selected AdSense account.
     */
    adsenseAccountsGet(req: operations.AdsenseAccountsGetRequest, security: operations.AdsenseAccountsGetSecurity, config?: AxiosRequestConfig): Promise<operations.AdsenseAccountsGetResponse>;
    /**
     * List all accounts available to this AdSense account.
     */
    adsenseAccountsList(req: operations.AdsenseAccountsListRequest, security: operations.AdsenseAccountsListSecurity, config?: AxiosRequestConfig): Promise<operations.AdsenseAccountsListResponse>;
    /**
     * List the payments for the specified AdSense account.
     */
    adsenseAccountsPaymentsList(req: operations.AdsenseAccountsPaymentsListRequest, security: operations.AdsenseAccountsPaymentsListSecurity, config?: AxiosRequestConfig): Promise<operations.AdsenseAccountsPaymentsListResponse>;
    /**
     * Generate an AdSense report based on the report request sent in the query parameters. Returns the result as JSON; to retrieve output in CSV format specify "alt=csv" as a query parameter.
     */
    adsenseAccountsReportsGenerate(req: operations.AdsenseAccountsReportsGenerateRequest, security: operations.AdsenseAccountsReportsGenerateSecurity, config?: AxiosRequestConfig): Promise<operations.AdsenseAccountsReportsGenerateResponse>;
    /**
     * Generate an AdSense report based on the saved report ID sent in the query parameters.
     */
    adsenseAccountsReportsSavedGenerate(req: operations.AdsenseAccountsReportsSavedGenerateRequest, security: operations.AdsenseAccountsReportsSavedGenerateSecurity, config?: AxiosRequestConfig): Promise<operations.AdsenseAccountsReportsSavedGenerateResponse>;
    /**
     * List all saved reports in the specified AdSense account.
     */
    adsenseAccountsReportsSavedList(req: operations.AdsenseAccountsReportsSavedListRequest, security: operations.AdsenseAccountsReportsSavedListSecurity, config?: AxiosRequestConfig): Promise<operations.AdsenseAccountsReportsSavedListResponse>;
    /**
     * List a specific saved ad style for the specified account.
     */
    adsenseAccountsSavedadstylesGet(req: operations.AdsenseAccountsSavedadstylesGetRequest, security: operations.AdsenseAccountsSavedadstylesGetSecurity, config?: AxiosRequestConfig): Promise<operations.AdsenseAccountsSavedadstylesGetResponse>;
    /**
     * List all saved ad styles in the specified account.
     */
    adsenseAccountsSavedadstylesList(req: operations.AdsenseAccountsSavedadstylesListRequest, security: operations.AdsenseAccountsSavedadstylesListSecurity, config?: AxiosRequestConfig): Promise<operations.AdsenseAccountsSavedadstylesListResponse>;
    /**
     * List all URL channels in the specified ad client for the specified account.
     */
    adsenseAccountsUrlchannelsList(req: operations.AdsenseAccountsUrlchannelsListRequest, security: operations.AdsenseAccountsUrlchannelsListSecurity, config?: AxiosRequestConfig): Promise<operations.AdsenseAccountsUrlchannelsListResponse>;
}
