import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Shippingsettings {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Retrieves and updates the shipping settings of multiple accounts in a single request.
     */
    contentShippingsettingsCustombatch(req: operations.ContentShippingsettingsCustombatchRequest, security: operations.ContentShippingsettingsCustombatchSecurity, config?: AxiosRequestConfig): Promise<operations.ContentShippingsettingsCustombatchResponse>;
    /**
     * Retrieves the shipping settings of the account.
     */
    contentShippingsettingsGet(req: operations.ContentShippingsettingsGetRequest, security: operations.ContentShippingsettingsGetSecurity, config?: AxiosRequestConfig): Promise<operations.ContentShippingsettingsGetResponse>;
    /**
     * Retrieves supported carriers and carrier services for an account.
     */
    contentShippingsettingsGetsupportedcarriers(req: operations.ContentShippingsettingsGetsupportedcarriersRequest, security: operations.ContentShippingsettingsGetsupportedcarriersSecurity, config?: AxiosRequestConfig): Promise<operations.ContentShippingsettingsGetsupportedcarriersResponse>;
    /**
     * Retrieves supported holidays for an account.
     */
    contentShippingsettingsGetsupportedholidays(req: operations.ContentShippingsettingsGetsupportedholidaysRequest, security: operations.ContentShippingsettingsGetsupportedholidaysSecurity, config?: AxiosRequestConfig): Promise<operations.ContentShippingsettingsGetsupportedholidaysResponse>;
    /**
     * Retrieves supported pickup services for an account.
     */
    contentShippingsettingsGetsupportedpickupservices(req: operations.ContentShippingsettingsGetsupportedpickupservicesRequest, security: operations.ContentShippingsettingsGetsupportedpickupservicesSecurity, config?: AxiosRequestConfig): Promise<operations.ContentShippingsettingsGetsupportedpickupservicesResponse>;
    /**
     * Lists the shipping settings of the sub-accounts in your Merchant Center account.
     */
    contentShippingsettingsList(req: operations.ContentShippingsettingsListRequest, security: operations.ContentShippingsettingsListSecurity, config?: AxiosRequestConfig): Promise<operations.ContentShippingsettingsListResponse>;
    /**
     * Updates the shipping settings of the account. Any fields that are not provided are deleted from the resource.
     */
    contentShippingsettingsUpdate(req: operations.ContentShippingsettingsUpdateRequest, security: operations.ContentShippingsettingsUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.ContentShippingsettingsUpdateResponse>;
}
