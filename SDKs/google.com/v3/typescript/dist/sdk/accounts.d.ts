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
     * Creates a new account link between a Hotel Center account and a Google Ads account.
     */
    travelpartnerAccountsAccountLinksCreate(req: operations.TravelpartnerAccountsAccountLinksCreateRequest, config?: AxiosRequestConfig): Promise<operations.TravelpartnerAccountsAccountLinksCreateResponse>;
    /**
     * Deletes an account link.
     */
    travelpartnerAccountsAccountLinksDelete(req: operations.TravelpartnerAccountsAccountLinksDeleteRequest, config?: AxiosRequestConfig): Promise<operations.TravelpartnerAccountsAccountLinksDeleteResponse>;
    /**
     * Returns the account links for a Hotel Center account.
     */
    travelpartnerAccountsAccountLinksList(req: operations.TravelpartnerAccountsAccountLinksListRequest, config?: AxiosRequestConfig): Promise<operations.TravelpartnerAccountsAccountLinksListResponse>;
    /**
     * Creates a new brand. Because Google detects brands from your existing properties, you only need this operation when you want to configure a brand before you send its properties to Google. Note that it might take a couple of days after your listing feed first provides a brand for the brand to appear.
     */
    travelpartnerAccountsBrandsCreate(req: operations.TravelpartnerAccountsBrandsCreateRequest, config?: AxiosRequestConfig): Promise<operations.TravelpartnerAccountsBrandsCreateResponse>;
    /**
     * Returns the brands for a partner account.
     */
    travelpartnerAccountsBrandsList(req: operations.TravelpartnerAccountsBrandsListRequest, config?: AxiosRequestConfig): Promise<operations.TravelpartnerAccountsBrandsListResponse>;
    /**
     * Updates a brand.
     */
    travelpartnerAccountsBrandsPatch(req: operations.TravelpartnerAccountsBrandsPatchRequest, config?: AxiosRequestConfig): Promise<operations.TravelpartnerAccountsBrandsPatchResponse>;
    /**
     * **DEPRECATED:** Use PropertyPerformanceReportService.QueryPropertyPerformanceReport, which also has impression reporting, instead. Provides the ability to query (get, filter, and segment) a free booking links report for a specific account.
     */
    travelpartnerAccountsFreeBookingLinksReportViewsQuery(req: operations.TravelpartnerAccountsFreeBookingLinksReportViewsQueryRequest, config?: AxiosRequestConfig): Promise<operations.TravelpartnerAccountsFreeBookingLinksReportViewsQueryResponse>;
    /**
     * Returns the list of hotel views.
     */
    travelpartnerAccountsHotelViewsList(req: operations.TravelpartnerAccountsHotelViewsListRequest, config?: AxiosRequestConfig): Promise<operations.TravelpartnerAccountsHotelViewsListResponse>;
    /**
     * Returns summarized information about hotels.
     */
    travelpartnerAccountsHotelViewsSummarize(req: operations.TravelpartnerAccountsHotelViewsSummarizeRequest, config?: AxiosRequestConfig): Promise<operations.TravelpartnerAccountsHotelViewsSummarizeResponse>;
    /**
     * Collection-level custom method to update the Live on Google status for multiple properties. Each call can turn on or off multiple hotels. To turn some hotels on and turn some hotels off, you will have to make multiple calls.
     */
    travelpartnerAccountsHotelsSetLiveOnGoogle(req: operations.TravelpartnerAccountsHotelsSetLiveOnGoogleRequest, config?: AxiosRequestConfig): Promise<operations.TravelpartnerAccountsHotelsSetLiveOnGoogleResponse>;
    /**
     * Uploads a new icon and starts its review process. Generates an `icon_id` and includes it in the icon's resource name, which is the format `accounts/{account_id}/icons/{icon_id}` Returns HTTP status 400 and doesn't trigger the review process if the icon has any of these conditions: * Image is not in PNG format, or not convertible to PNG format. * Size less than 72 pixels * Size greater than 1200 pixels * Aspect ratio other than 1:1
     */
    travelpartnerAccountsIconsCreate(req: operations.TravelpartnerAccountsIconsCreateRequest, config?: AxiosRequestConfig): Promise<operations.TravelpartnerAccountsIconsCreateResponse>;
    /**
     * Returns the `Icon`s for a partner account.
     */
    travelpartnerAccountsIconsList(req: operations.TravelpartnerAccountsIconsListRequest, config?: AxiosRequestConfig): Promise<operations.TravelpartnerAccountsIconsListResponse>;
    /**
     * returns verified listings with data issues and serving eligibilities
     */
    travelpartnerAccountsListingsVerify(req: operations.TravelpartnerAccountsListingsVerifyRequest, config?: AxiosRequestConfig): Promise<operations.TravelpartnerAccountsListingsVerifyResponse>;
    /**
     * Provides the ability to query (get, filter, and segment) a participation report for a particular account.
     */
    travelpartnerAccountsParticipationReportViewsQuery(req: operations.TravelpartnerAccountsParticipationReportViewsQueryRequest, config?: AxiosRequestConfig): Promise<operations.TravelpartnerAccountsParticipationReportViewsQueryResponse>;
    /**
     * Lists the available price accuracy views.
     */
    travelpartnerAccountsPriceAccuracyViewsList(req: operations.TravelpartnerAccountsPriceAccuracyViewsListRequest, config?: AxiosRequestConfig): Promise<operations.TravelpartnerAccountsPriceAccuracyViewsListResponse>;
    /**
     * Returns the price accuracy summary.
     */
    travelpartnerAccountsPriceAccuracyViewsSummarize(req: operations.TravelpartnerAccountsPriceAccuracyViewsSummarizeRequest, config?: AxiosRequestConfig): Promise<operations.TravelpartnerAccountsPriceAccuracyViewsSummarizeResponse>;
    /**
     * Returns the latest price coverage view in full detail.
     */
    travelpartnerAccountsPriceCoverageViewsGetLatest(req: operations.TravelpartnerAccountsPriceCoverageViewsGetLatestRequest, config?: AxiosRequestConfig): Promise<operations.TravelpartnerAccountsPriceCoverageViewsGetLatestResponse>;
    /**
     * Returns the entire price coverage history.
     */
    travelpartnerAccountsPriceCoverageViewsList(req: operations.TravelpartnerAccountsPriceCoverageViewsListRequest, config?: AxiosRequestConfig): Promise<operations.TravelpartnerAccountsPriceCoverageViewsListResponse>;
    /**
     * Provides the ability to query (get, filter, and segment) a property performance links report for a specific account.
     */
    travelpartnerAccountsPropertyPerformanceReportViewsQuery(req: operations.TravelpartnerAccountsPropertyPerformanceReportViewsQueryRequest, config?: AxiosRequestConfig): Promise<operations.TravelpartnerAccountsPropertyPerformanceReportViewsQueryResponse>;
    /**
     * Creates a reconciliation report and uploads it to Google.
     */
    travelpartnerAccountsReconciliationReportsCreate(req: operations.TravelpartnerAccountsReconciliationReportsCreateRequest, config?: AxiosRequestConfig): Promise<operations.TravelpartnerAccountsReconciliationReportsCreateResponse>;
    /**
     * Returns a reconciliation report.
     */
    travelpartnerAccountsReconciliationReportsGet(req: operations.TravelpartnerAccountsReconciliationReportsGetRequest, config?: AxiosRequestConfig): Promise<operations.TravelpartnerAccountsReconciliationReportsGetResponse>;
    /**
     * Returns a list of the names of created reconciliation reports.
     */
    travelpartnerAccountsReconciliationReportsList(req: operations.TravelpartnerAccountsReconciliationReportsListRequest, config?: AxiosRequestConfig): Promise<operations.TravelpartnerAccountsReconciliationReportsListResponse>;
    /**
     * Validates a reconciliation report.
     */
    travelpartnerAccountsReconciliationReportsValidate(req: operations.TravelpartnerAccountsReconciliationReportsValidateRequest, config?: AxiosRequestConfig): Promise<operations.TravelpartnerAccountsReconciliationReportsValidateResponse>;
}
