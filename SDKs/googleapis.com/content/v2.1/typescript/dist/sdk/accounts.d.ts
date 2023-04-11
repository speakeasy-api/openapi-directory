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
     * Returns information about the authenticated user.
     */
    contentAccountsAuthinfo(req: operations.ContentAccountsAuthinfoRequest, security: operations.ContentAccountsAuthinfoSecurity, config?: AxiosRequestConfig): Promise<operations.ContentAccountsAuthinfoResponse>;
    /**
     * Claims the website of a Merchant Center sub-account. Merchant accounts with approved third-party CSSs aren't required to claim a website.
     */
    contentAccountsClaimwebsite(req: operations.ContentAccountsClaimwebsiteRequest, security: operations.ContentAccountsClaimwebsiteSecurity, config?: AxiosRequestConfig): Promise<operations.ContentAccountsClaimwebsiteResponse>;
    /**
     * Uploads credentials for the Merchant Center account. If credentials already exist for this Merchant Center account and purpose, this method updates them.
     */
    contentAccountsCredentialsCreate(req: operations.ContentAccountsCredentialsCreateRequest, security: operations.ContentAccountsCredentialsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.ContentAccountsCredentialsCreateResponse>;
    /**
     * Retrieves, inserts, updates, and deletes multiple Merchant Center (sub-)accounts in a single request.
     */
    contentAccountsCustombatch(req: operations.ContentAccountsCustombatchRequest, security: operations.ContentAccountsCustombatchSecurity, config?: AxiosRequestConfig): Promise<operations.ContentAccountsCustombatchResponse>;
    /**
     * Deletes a Merchant Center sub-account.
     */
    contentAccountsDelete(req: operations.ContentAccountsDeleteRequest, security: operations.ContentAccountsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.ContentAccountsDeleteResponse>;
    /**
     * Retrieves a Merchant Center account.
     */
    contentAccountsGet(req: operations.ContentAccountsGetRequest, security: operations.ContentAccountsGetSecurity, config?: AxiosRequestConfig): Promise<operations.ContentAccountsGetResponse>;
    /**
     * Creates a Merchant Center sub-account.
     */
    contentAccountsInsert(req: operations.ContentAccountsInsertRequest, security: operations.ContentAccountsInsertSecurity, config?: AxiosRequestConfig): Promise<operations.ContentAccountsInsertResponse>;
    /**
     * Creates a new label, not assigned to any account.
     */
    contentAccountsLabelsCreate(req: operations.ContentAccountsLabelsCreateRequest, security: operations.ContentAccountsLabelsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.ContentAccountsLabelsCreateResponse>;
    /**
     * Deletes a label and removes it from all accounts to which it was assigned.
     */
    contentAccountsLabelsDelete(req: operations.ContentAccountsLabelsDeleteRequest, security: operations.ContentAccountsLabelsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.ContentAccountsLabelsDeleteResponse>;
    /**
     * Lists the labels assigned to an account.
     */
    contentAccountsLabelsList(req: operations.ContentAccountsLabelsListRequest, security: operations.ContentAccountsLabelsListSecurity, config?: AxiosRequestConfig): Promise<operations.ContentAccountsLabelsListResponse>;
    /**
     * Updates a label.
     */
    contentAccountsLabelsPatch(req: operations.ContentAccountsLabelsPatchRequest, security: operations.ContentAccountsLabelsPatchSecurity, config?: AxiosRequestConfig): Promise<operations.ContentAccountsLabelsPatchResponse>;
    /**
     * Performs an action on a link between two Merchant Center accounts, namely accountId and linkedAccountId.
     */
    contentAccountsLink(req: operations.ContentAccountsLinkRequest, security: operations.ContentAccountsLinkSecurity, config?: AxiosRequestConfig): Promise<operations.ContentAccountsLinkResponse>;
    /**
     * Lists the sub-accounts in your Merchant Center account.
     */
    contentAccountsList(req: operations.ContentAccountsListRequest, security: operations.ContentAccountsListSecurity, config?: AxiosRequestConfig): Promise<operations.ContentAccountsListResponse>;
    /**
     * Returns the list of accounts linked to your Merchant Center account.
     */
    contentAccountsListlinks(req: operations.ContentAccountsListlinksRequest, security: operations.ContentAccountsListlinksSecurity, config?: AxiosRequestConfig): Promise<operations.ContentAccountsListlinksResponse>;
    /**
     * Request verification code to start phone verification.
     */
    contentAccountsRequestphoneverification(req: operations.ContentAccountsRequestphoneverificationRequest, security: operations.ContentAccountsRequestphoneverificationSecurity, config?: AxiosRequestConfig): Promise<operations.ContentAccountsRequestphoneverificationResponse>;
    /**
     * Links return carrier to a merchant account.
     */
    contentAccountsReturncarrierCreate(req: operations.ContentAccountsReturncarrierCreateRequest, security: operations.ContentAccountsReturncarrierCreateSecurity, config?: AxiosRequestConfig): Promise<operations.ContentAccountsReturncarrierCreateResponse>;
    /**
     * Delete a return carrier in the merchant account.
     */
    contentAccountsReturncarrierDelete(req: operations.ContentAccountsReturncarrierDeleteRequest, security: operations.ContentAccountsReturncarrierDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.ContentAccountsReturncarrierDeleteResponse>;
    /**
     * Lists available return carriers in the merchant account.
     */
    contentAccountsReturncarrierList(req: operations.ContentAccountsReturncarrierListRequest, security: operations.ContentAccountsReturncarrierListSecurity, config?: AxiosRequestConfig): Promise<operations.ContentAccountsReturncarrierListResponse>;
    /**
     * Updates a return carrier in the merchant account.
     */
    contentAccountsReturncarrierPatch(req: operations.ContentAccountsReturncarrierPatchRequest, security: operations.ContentAccountsReturncarrierPatchSecurity, config?: AxiosRequestConfig): Promise<operations.ContentAccountsReturncarrierPatchResponse>;
    /**
     * Updates a Merchant Center account. Any fields that are not provided are deleted from the resource.
     */
    contentAccountsUpdate(req: operations.ContentAccountsUpdateRequest, security: operations.ContentAccountsUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.ContentAccountsUpdateResponse>;
    /**
     * Updates labels that are assigned to the Merchant Center account by CSS user.
     */
    contentAccountsUpdatelabels(req: operations.ContentAccountsUpdatelabelsRequest, security: operations.ContentAccountsUpdatelabelsSecurity, config?: AxiosRequestConfig): Promise<operations.ContentAccountsUpdatelabelsResponse>;
    /**
     * Validates verification code to verify phone number for the account. If successful this will overwrite the value of `accounts.businessinformation.phoneNumber`. Only verified phone number will replace an existing verified phone number.
     */
    contentAccountsVerifyphonenumber(req: operations.ContentAccountsVerifyphonenumberRequest, security: operations.ContentAccountsVerifyphonenumberSecurity, config?: AxiosRequestConfig): Promise<operations.ContentAccountsVerifyphonenumberResponse>;
}
