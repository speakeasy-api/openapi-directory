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
     * Get information about one of the ad clients in the specified publisher's AdSense account.
     */
    adsensehostAccountsAdclientsGet(req: operations.AdsensehostAccountsAdclientsGetRequest, security: operations.AdsensehostAccountsAdclientsGetSecurity, config?: AxiosRequestConfig): Promise<operations.AdsensehostAccountsAdclientsGetResponse>;
    /**
     * List all hosted ad clients in the specified hosted account.
     */
    adsensehostAccountsAdclientsList(req: operations.AdsensehostAccountsAdclientsListRequest, security: operations.AdsensehostAccountsAdclientsListSecurity, config?: AxiosRequestConfig): Promise<operations.AdsensehostAccountsAdclientsListResponse>;
    /**
     * Delete the specified ad unit from the specified publisher AdSense account.
     */
    adsensehostAccountsAdunitsDelete(req: operations.AdsensehostAccountsAdunitsDeleteRequest, security: operations.AdsensehostAccountsAdunitsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.AdsensehostAccountsAdunitsDeleteResponse>;
    /**
     * Get the specified host ad unit in this AdSense account.
     */
    adsensehostAccountsAdunitsGet(req: operations.AdsensehostAccountsAdunitsGetRequest, security: operations.AdsensehostAccountsAdunitsGetSecurity, config?: AxiosRequestConfig): Promise<operations.AdsensehostAccountsAdunitsGetResponse>;
    /**
     * Get ad code for the specified ad unit, attaching the specified host custom channels.
     */
    adsensehostAccountsAdunitsGetAdCode(req: operations.AdsensehostAccountsAdunitsGetAdCodeRequest, security: operations.AdsensehostAccountsAdunitsGetAdCodeSecurity, config?: AxiosRequestConfig): Promise<operations.AdsensehostAccountsAdunitsGetAdCodeResponse>;
    /**
     * Insert the supplied ad unit into the specified publisher AdSense account.
     */
    adsensehostAccountsAdunitsInsert(req: operations.AdsensehostAccountsAdunitsInsertRequest, security: operations.AdsensehostAccountsAdunitsInsertSecurity, config?: AxiosRequestConfig): Promise<operations.AdsensehostAccountsAdunitsInsertResponse>;
    /**
     * List all ad units in the specified publisher's AdSense account.
     */
    adsensehostAccountsAdunitsList(req: operations.AdsensehostAccountsAdunitsListRequest, security: operations.AdsensehostAccountsAdunitsListSecurity, config?: AxiosRequestConfig): Promise<operations.AdsensehostAccountsAdunitsListResponse>;
    /**
     * Update the supplied ad unit in the specified publisher AdSense account. This method supports patch semantics.
     */
    adsensehostAccountsAdunitsPatch(req: operations.AdsensehostAccountsAdunitsPatchRequest, security: operations.AdsensehostAccountsAdunitsPatchSecurity, config?: AxiosRequestConfig): Promise<operations.AdsensehostAccountsAdunitsPatchResponse>;
    /**
     * Update the supplied ad unit in the specified publisher AdSense account.
     */
    adsensehostAccountsAdunitsUpdate(req: operations.AdsensehostAccountsAdunitsUpdateRequest, security: operations.AdsensehostAccountsAdunitsUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.AdsensehostAccountsAdunitsUpdateResponse>;
    /**
     * Get information about the selected associated AdSense account.
     */
    adsensehostAccountsGet(req: operations.AdsensehostAccountsGetRequest, security: operations.AdsensehostAccountsGetSecurity, config?: AxiosRequestConfig): Promise<operations.AdsensehostAccountsGetResponse>;
    /**
     * List hosted accounts associated with this AdSense account by ad client id.
     */
    adsensehostAccountsList(req: operations.AdsensehostAccountsListRequest, security: operations.AdsensehostAccountsListSecurity, config?: AxiosRequestConfig): Promise<operations.AdsensehostAccountsListResponse>;
    /**
     * Generate an AdSense report based on the report request sent in the query parameters. Returns the result as JSON; to retrieve output in CSV format specify "alt=csv" as a query parameter.
     */
    adsensehostAccountsReportsGenerate(req: operations.AdsensehostAccountsReportsGenerateRequest, security: operations.AdsensehostAccountsReportsGenerateSecurity, config?: AxiosRequestConfig): Promise<operations.AdsensehostAccountsReportsGenerateResponse>;
}
