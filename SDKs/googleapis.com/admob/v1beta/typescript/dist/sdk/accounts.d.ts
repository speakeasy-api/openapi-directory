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
     * List the ad sources.
     */
    admobAccountsAdSourcesList(req: operations.AdmobAccountsAdSourcesListRequest, config?: AxiosRequestConfig): Promise<operations.AdmobAccountsAdSourcesListResponse>;
    /**
     * List the ad units under the specified AdMob account.
     */
    admobAccountsAdUnitsList(req: operations.AdmobAccountsAdUnitsListRequest, security: operations.AdmobAccountsAdUnitsListSecurity, config?: AxiosRequestConfig): Promise<operations.AdmobAccountsAdUnitsListResponse>;
    /**
     * List the apps under the specified AdMob account.
     */
    admobAccountsAppsList(req: operations.AdmobAccountsAppsListRequest, security: operations.AdmobAccountsAppsListSecurity, config?: AxiosRequestConfig): Promise<operations.AdmobAccountsAppsListResponse>;
    /**
     * Gets information about the specified AdMob publisher account.
     */
    admobAccountsGet(req: operations.AdmobAccountsGetRequest, security: operations.AdmobAccountsGetSecurity, config?: AxiosRequestConfig): Promise<operations.AdmobAccountsGetResponse>;
    /**
     * Lists the AdMob publisher account that was most recently signed in to from the AdMob UI. For more information, see https://support.google.com/admob/answer/10243672.
     */
    admobAccountsList(req: operations.AdmobAccountsListRequest, security: operations.AdmobAccountsListSecurity, config?: AxiosRequestConfig): Promise<operations.AdmobAccountsListResponse>;
    /**
     * Generates an AdMob mediation report based on the provided report specification. Returns result of a server-side streaming RPC. The result is returned in a sequence of responses.
     */
    admobAccountsMediationReportGenerate(req: operations.AdmobAccountsMediationReportGenerateRequest, security: operations.AdmobAccountsMediationReportGenerateSecurity, config?: AxiosRequestConfig): Promise<operations.AdmobAccountsMediationReportGenerateResponse>;
    /**
     * Generates an AdMob Network report based on the provided report specification. Returns result of a server-side streaming RPC. The result is returned in a sequence of responses.
     */
    admobAccountsNetworkReportGenerate(req: operations.AdmobAccountsNetworkReportGenerateRequest, security: operations.AdmobAccountsNetworkReportGenerateSecurity, config?: AxiosRequestConfig): Promise<operations.AdmobAccountsNetworkReportGenerateResponse>;
}
