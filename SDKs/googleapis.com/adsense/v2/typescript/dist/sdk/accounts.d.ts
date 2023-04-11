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
     * Creates an ad unit. This method can only be used by projects enabled for the [AdSense for Platforms](https://developers.google.com/adsense/platforms/) product. Note that ad units can only be created for ad clients with an "AFC" product code. For more info see the [AdClient resource](/adsense/management/reference/rest/v2/accounts.adclients). For now, this method can only be used to create `DISPLAY` ad units. See: https://support.google.com/adsense/answer/9183566
     */
    adsenseAccountsAdclientsAdunitsCreate(req: operations.AdsenseAccountsAdclientsAdunitsCreateRequest, security: operations.AdsenseAccountsAdclientsAdunitsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.AdsenseAccountsAdclientsAdunitsCreateResponse>;
    /**
     * Gets the ad unit code for a given ad unit. For more information, see [About the AdSense code](https://support.google.com/adsense/answer/9274634) and [Where to place the ad code in your HTML](https://support.google.com/adsense/answer/9190028).
     */
    adsenseAccountsAdclientsAdunitsGetAdcode(req: operations.AdsenseAccountsAdclientsAdunitsGetAdcodeRequest, security: operations.AdsenseAccountsAdclientsAdunitsGetAdcodeSecurity, config?: AxiosRequestConfig): Promise<operations.AdsenseAccountsAdclientsAdunitsGetAdcodeResponse>;
    /**
     * Lists all ad units under a specified account and ad client.
     */
    adsenseAccountsAdclientsAdunitsList(req: operations.AdsenseAccountsAdclientsAdunitsListRequest, security: operations.AdsenseAccountsAdclientsAdunitsListSecurity, config?: AxiosRequestConfig): Promise<operations.AdsenseAccountsAdclientsAdunitsListResponse>;
    /**
     * Lists all the custom channels available for an ad unit.
     */
    adsenseAccountsAdclientsAdunitsListLinkedCustomChannels(req: operations.AdsenseAccountsAdclientsAdunitsListLinkedCustomChannelsRequest, security: operations.AdsenseAccountsAdclientsAdunitsListLinkedCustomChannelsSecurity, config?: AxiosRequestConfig): Promise<operations.AdsenseAccountsAdclientsAdunitsListLinkedCustomChannelsResponse>;
    /**
     * Creates a custom channel. This method can only be used by projects enabled for the [AdSense for Platforms](https://developers.google.com/adsense/platforms/) product.
     */
    adsenseAccountsAdclientsCustomchannelsCreate(req: operations.AdsenseAccountsAdclientsCustomchannelsCreateRequest, security: operations.AdsenseAccountsAdclientsCustomchannelsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.AdsenseAccountsAdclientsCustomchannelsCreateResponse>;
    /**
     * Deletes a custom channel. This method can only be used by projects enabled for the [AdSense for Platforms](https://developers.google.com/adsense/platforms/) product.
     */
    adsenseAccountsAdclientsCustomchannelsDelete(req: operations.AdsenseAccountsAdclientsCustomchannelsDeleteRequest, security: operations.AdsenseAccountsAdclientsCustomchannelsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.AdsenseAccountsAdclientsCustomchannelsDeleteResponse>;
    /**
     * Lists all the custom channels available in an ad client.
     */
    adsenseAccountsAdclientsCustomchannelsList(req: operations.AdsenseAccountsAdclientsCustomchannelsListRequest, security: operations.AdsenseAccountsAdclientsCustomchannelsListSecurity, config?: AxiosRequestConfig): Promise<operations.AdsenseAccountsAdclientsCustomchannelsListResponse>;
    /**
     * Lists all the ad units available for a custom channel.
     */
    adsenseAccountsAdclientsCustomchannelsListLinkedAdUnits(req: operations.AdsenseAccountsAdclientsCustomchannelsListLinkedAdUnitsRequest, security: operations.AdsenseAccountsAdclientsCustomchannelsListLinkedAdUnitsSecurity, config?: AxiosRequestConfig): Promise<operations.AdsenseAccountsAdclientsCustomchannelsListLinkedAdUnitsResponse>;
    /**
     * Updates a custom channel. This method can only be used by projects enabled for the [AdSense for Platforms](https://developers.google.com/adsense/platforms/) product.
     */
    adsenseAccountsAdclientsCustomchannelsPatch(req: operations.AdsenseAccountsAdclientsCustomchannelsPatchRequest, security: operations.AdsenseAccountsAdclientsCustomchannelsPatchSecurity, config?: AxiosRequestConfig): Promise<operations.AdsenseAccountsAdclientsCustomchannelsPatchResponse>;
    /**
     * Lists all the ad clients available in an account.
     */
    adsenseAccountsAdclientsList(req: operations.AdsenseAccountsAdclientsListRequest, security: operations.AdsenseAccountsAdclientsListSecurity, config?: AxiosRequestConfig): Promise<operations.AdsenseAccountsAdclientsListResponse>;
    /**
     * Lists active url channels.
     */
    adsenseAccountsAdclientsUrlchannelsList(req: operations.AdsenseAccountsAdclientsUrlchannelsListRequest, security: operations.AdsenseAccountsAdclientsUrlchannelsListSecurity, config?: AxiosRequestConfig): Promise<operations.AdsenseAccountsAdclientsUrlchannelsListResponse>;
    /**
     * Lists all the alerts available in an account.
     */
    adsenseAccountsAlertsList(req: operations.AdsenseAccountsAlertsListRequest, security: operations.AdsenseAccountsAlertsListSecurity, config?: AxiosRequestConfig): Promise<operations.AdsenseAccountsAlertsListResponse>;
    /**
     * Gets the ad blocking recovery tag of an account.
     */
    adsenseAccountsGetAdBlockingRecoveryTag(req: operations.AdsenseAccountsGetAdBlockingRecoveryTagRequest, security: operations.AdsenseAccountsGetAdBlockingRecoveryTagSecurity, config?: AxiosRequestConfig): Promise<operations.AdsenseAccountsGetAdBlockingRecoveryTagResponse>;
    /**
     * Lists all accounts available to this user.
     */
    adsenseAccountsList(req: operations.AdsenseAccountsListRequest, security: operations.AdsenseAccountsListSecurity, config?: AxiosRequestConfig): Promise<operations.AdsenseAccountsListResponse>;
    /**
     * Lists all accounts directly managed by the given AdSense account.
     */
    adsenseAccountsListChildAccounts(req: operations.AdsenseAccountsListChildAccountsRequest, security: operations.AdsenseAccountsListChildAccountsSecurity, config?: AxiosRequestConfig): Promise<operations.AdsenseAccountsListChildAccountsResponse>;
    /**
     * Lists all the payments available for an account.
     */
    adsenseAccountsPaymentsList(req: operations.AdsenseAccountsPaymentsListRequest, security: operations.AdsenseAccountsPaymentsListSecurity, config?: AxiosRequestConfig): Promise<operations.AdsenseAccountsPaymentsListResponse>;
    /**
     * Generates an ad hoc report.
     */
    adsenseAccountsReportsGenerate(req: operations.AdsenseAccountsReportsGenerateRequest, security: operations.AdsenseAccountsReportsGenerateSecurity, config?: AxiosRequestConfig): Promise<operations.AdsenseAccountsReportsGenerateResponse>;
    /**
     * Generates a csv formatted ad hoc report.
     */
    adsenseAccountsReportsGenerateCsv(req: operations.AdsenseAccountsReportsGenerateCsvRequest, security: operations.AdsenseAccountsReportsGenerateCsvSecurity, config?: AxiosRequestConfig): Promise<operations.AdsenseAccountsReportsGenerateCsvResponse>;
    /**
     * Gets the saved report from the given resource name.
     */
    adsenseAccountsReportsGetSaved(req: operations.AdsenseAccountsReportsGetSavedRequest, security: operations.AdsenseAccountsReportsGetSavedSecurity, config?: AxiosRequestConfig): Promise<operations.AdsenseAccountsReportsGetSavedResponse>;
    /**
     * Generates a saved report.
     */
    adsenseAccountsReportsSavedGenerate(req: operations.AdsenseAccountsReportsSavedGenerateRequest, security: operations.AdsenseAccountsReportsSavedGenerateSecurity, config?: AxiosRequestConfig): Promise<operations.AdsenseAccountsReportsSavedGenerateResponse>;
    /**
     * Generates a csv formatted saved report.
     */
    adsenseAccountsReportsSavedGenerateCsv(req: operations.AdsenseAccountsReportsSavedGenerateCsvRequest, security: operations.AdsenseAccountsReportsSavedGenerateCsvSecurity, config?: AxiosRequestConfig): Promise<operations.AdsenseAccountsReportsSavedGenerateCsvResponse>;
    /**
     * Lists saved reports.
     */
    adsenseAccountsReportsSavedList(req: operations.AdsenseAccountsReportsSavedListRequest, security: operations.AdsenseAccountsReportsSavedListSecurity, config?: AxiosRequestConfig): Promise<operations.AdsenseAccountsReportsSavedListResponse>;
    /**
     * Gets information about the selected site.
     */
    adsenseAccountsSitesGet(req: operations.AdsenseAccountsSitesGetRequest, security: operations.AdsenseAccountsSitesGetSecurity, config?: AxiosRequestConfig): Promise<operations.AdsenseAccountsSitesGetResponse>;
    /**
     * Lists all the sites available in an account.
     */
    adsenseAccountsSitesList(req: operations.AdsenseAccountsSitesListRequest, security: operations.AdsenseAccountsSitesListSecurity, config?: AxiosRequestConfig): Promise<operations.AdsenseAccountsSitesListResponse>;
}
