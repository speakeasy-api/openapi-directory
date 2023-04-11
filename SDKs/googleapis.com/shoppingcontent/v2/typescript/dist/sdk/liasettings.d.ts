import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Liasettings {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Retrieves and/or updates the LIA settings of multiple accounts in a single request.
     */
    contentLiasettingsCustombatch(req: operations.ContentLiasettingsCustombatchRequest, security: operations.ContentLiasettingsCustombatchSecurity, config?: AxiosRequestConfig): Promise<operations.ContentLiasettingsCustombatchResponse>;
    /**
     * Retrieves the LIA settings of the account.
     */
    contentLiasettingsGet(req: operations.ContentLiasettingsGetRequest, security: operations.ContentLiasettingsGetSecurity, config?: AxiosRequestConfig): Promise<operations.ContentLiasettingsGetResponse>;
    /**
     * Retrieves the list of accessible Google My Business accounts.
     */
    contentLiasettingsGetaccessiblegmbaccounts(req: operations.ContentLiasettingsGetaccessiblegmbaccountsRequest, security: operations.ContentLiasettingsGetaccessiblegmbaccountsSecurity, config?: AxiosRequestConfig): Promise<operations.ContentLiasettingsGetaccessiblegmbaccountsResponse>;
    /**
     * Lists the LIA settings of the sub-accounts in your Merchant Center account.
     */
    contentLiasettingsList(req: operations.ContentLiasettingsListRequest, security: operations.ContentLiasettingsListSecurity, config?: AxiosRequestConfig): Promise<operations.ContentLiasettingsListResponse>;
    /**
     * Retrieves the list of POS data providers that have active settings for the all eiligible countries.
     */
    contentLiasettingsListposdataproviders(req: operations.ContentLiasettingsListposdataprovidersRequest, security: operations.ContentLiasettingsListposdataprovidersSecurity, config?: AxiosRequestConfig): Promise<operations.ContentLiasettingsListposdataprovidersResponse>;
    /**
     * Requests access to a specified Google My Business account.
     */
    contentLiasettingsRequestgmbaccess(req: operations.ContentLiasettingsRequestgmbaccessRequest, security: operations.ContentLiasettingsRequestgmbaccessSecurity, config?: AxiosRequestConfig): Promise<operations.ContentLiasettingsRequestgmbaccessResponse>;
    /**
     * Requests inventory validation for the specified country.
     */
    contentLiasettingsRequestinventoryverification(req: operations.ContentLiasettingsRequestinventoryverificationRequest, security: operations.ContentLiasettingsRequestinventoryverificationSecurity, config?: AxiosRequestConfig): Promise<operations.ContentLiasettingsRequestinventoryverificationResponse>;
    /**
     * Sets the inventory verification contract for the specified country.
     */
    contentLiasettingsSetinventoryverificationcontact(req: operations.ContentLiasettingsSetinventoryverificationcontactRequest, security: operations.ContentLiasettingsSetinventoryverificationcontactSecurity, config?: AxiosRequestConfig): Promise<operations.ContentLiasettingsSetinventoryverificationcontactResponse>;
    /**
     * Sets the POS data provider for the specified country.
     */
    contentLiasettingsSetposdataprovider(req: operations.ContentLiasettingsSetposdataproviderRequest, security: operations.ContentLiasettingsSetposdataproviderSecurity, config?: AxiosRequestConfig): Promise<operations.ContentLiasettingsSetposdataproviderResponse>;
    /**
     * Updates the LIA settings of the account. Any fields that are not provided are deleted from the resource.
     */
    contentLiasettingsUpdate(req: operations.ContentLiasettingsUpdateRequest, security: operations.ContentLiasettingsUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.ContentLiasettingsUpdateResponse>;
}
