import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Matters {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Adds an account as a matter collaborator.
     */
    vaultMattersAddPermissions(req: operations.VaultMattersAddPermissionsRequest, security: operations.VaultMattersAddPermissionsSecurity, config?: AxiosRequestConfig): Promise<operations.VaultMattersAddPermissionsResponse>;
    /**
     * Closes the specified matter. Returns the matter with updated state.
     */
    vaultMattersClose(req: operations.VaultMattersCloseRequest, security: operations.VaultMattersCloseSecurity, config?: AxiosRequestConfig): Promise<operations.VaultMattersCloseResponse>;
    /**
     * Counts the accounts processed by the specified query.
     */
    vaultMattersCount(req: operations.VaultMattersCountRequest, security: operations.VaultMattersCountSecurity, config?: AxiosRequestConfig): Promise<operations.VaultMattersCountResponse>;
    /**
     * Creates a matter with the given name and description. The initial state is open, and the owner is the method caller. Returns the created matter with default view.
     */
    vaultMattersCreate(req: operations.VaultMattersCreateRequest, security: operations.VaultMattersCreateSecurity, config?: AxiosRequestConfig): Promise<operations.VaultMattersCreateResponse>;
    /**
     * Deletes the specified matter. Returns the matter with updated state.
     */
    vaultMattersDelete(req: operations.VaultMattersDeleteRequest, security: operations.VaultMattersDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.VaultMattersDeleteResponse>;
    /**
     * Creates an export.
     */
    vaultMattersExportsCreate(req: operations.VaultMattersExportsCreateRequest, security: operations.VaultMattersExportsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.VaultMattersExportsCreateResponse>;
    /**
     * Deletes an export.
     */
    vaultMattersExportsDelete(req: operations.VaultMattersExportsDeleteRequest, security: operations.VaultMattersExportsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.VaultMattersExportsDeleteResponse>;
    /**
     * Gets an export.
     */
    vaultMattersExportsGet(req: operations.VaultMattersExportsGetRequest, security: operations.VaultMattersExportsGetSecurity, config?: AxiosRequestConfig): Promise<operations.VaultMattersExportsGetResponse>;
    /**
     * Lists details about the exports in the specified matter.
     */
    vaultMattersExportsList(req: operations.VaultMattersExportsListRequest, security: operations.VaultMattersExportsListSecurity, config?: AxiosRequestConfig): Promise<operations.VaultMattersExportsListResponse>;
    /**
     * Gets the specified matter.
     */
    vaultMattersGet(req: operations.VaultMattersGetRequest, security: operations.VaultMattersGetSecurity, config?: AxiosRequestConfig): Promise<operations.VaultMattersGetResponse>;
    /**
     * Adds an account to a hold. Accounts can be added only to a hold that does not have an organizational unit set. If you try to add an account to an organizational unit-based hold, an error is returned.
     */
    vaultMattersHoldsAccountsCreate(req: operations.VaultMattersHoldsAccountsCreateRequest, security: operations.VaultMattersHoldsAccountsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.VaultMattersHoldsAccountsCreateResponse>;
    /**
     * Removes an account from a hold.
     */
    vaultMattersHoldsAccountsDelete(req: operations.VaultMattersHoldsAccountsDeleteRequest, security: operations.VaultMattersHoldsAccountsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.VaultMattersHoldsAccountsDeleteResponse>;
    /**
     * Lists the accounts covered by a hold. This can list only individually-specified accounts covered by the hold. If the hold covers an organizational unit, use the [Admin SDK](https://developers.google.com/admin-sdk/). to list the members of the organizational unit on hold.
     */
    vaultMattersHoldsAccountsList(req: operations.VaultMattersHoldsAccountsListRequest, security: operations.VaultMattersHoldsAccountsListSecurity, config?: AxiosRequestConfig): Promise<operations.VaultMattersHoldsAccountsListResponse>;
    /**
     * Adds accounts to a hold. Returns a list of accounts that have been successfully added. Accounts can be added only to an existing account-based hold.
     */
    vaultMattersHoldsAddHeldAccounts(req: operations.VaultMattersHoldsAddHeldAccountsRequest, security: operations.VaultMattersHoldsAddHeldAccountsSecurity, config?: AxiosRequestConfig): Promise<operations.VaultMattersHoldsAddHeldAccountsResponse>;
    /**
     * Creates a hold in the specified matter.
     */
    vaultMattersHoldsCreate(req: operations.VaultMattersHoldsCreateRequest, security: operations.VaultMattersHoldsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.VaultMattersHoldsCreateResponse>;
    /**
     * Removes the specified hold and releases the accounts or organizational unit covered by the hold. If the data is not preserved by another hold or retention rule, it might be purged.
     */
    vaultMattersHoldsDelete(req: operations.VaultMattersHoldsDeleteRequest, security: operations.VaultMattersHoldsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.VaultMattersHoldsDeleteResponse>;
    /**
     * Gets the specified hold.
     */
    vaultMattersHoldsGet(req: operations.VaultMattersHoldsGetRequest, security: operations.VaultMattersHoldsGetSecurity, config?: AxiosRequestConfig): Promise<operations.VaultMattersHoldsGetResponse>;
    /**
     * Lists the holds in a matter.
     */
    vaultMattersHoldsList(req: operations.VaultMattersHoldsListRequest, security: operations.VaultMattersHoldsListSecurity, config?: AxiosRequestConfig): Promise<operations.VaultMattersHoldsListResponse>;
    /**
     * Removes the specified accounts from a hold. Returns a list of statuses in the same order as the request.
     */
    vaultMattersHoldsRemoveHeldAccounts(req: operations.VaultMattersHoldsRemoveHeldAccountsRequest, security: operations.VaultMattersHoldsRemoveHeldAccountsSecurity, config?: AxiosRequestConfig): Promise<operations.VaultMattersHoldsRemoveHeldAccountsResponse>;
    /**
     * Updates the scope (organizational unit or accounts) and query parameters of a hold. You cannot add accounts to a hold that covers an organizational unit, nor can you add organizational units to a hold that covers individual accounts. If you try, the unsupported values are ignored.
     */
    vaultMattersHoldsUpdate(req: operations.VaultMattersHoldsUpdateRequest, security: operations.VaultMattersHoldsUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.VaultMattersHoldsUpdateResponse>;
    /**
     * Lists matters the requestor has access to.
     */
    vaultMattersList(req: operations.VaultMattersListRequest, security: operations.VaultMattersListSecurity, config?: AxiosRequestConfig): Promise<operations.VaultMattersListResponse>;
    /**
     * Removes an account as a matter collaborator.
     */
    vaultMattersRemovePermissions(req: operations.VaultMattersRemovePermissionsRequest, security: operations.VaultMattersRemovePermissionsSecurity, config?: AxiosRequestConfig): Promise<operations.VaultMattersRemovePermissionsResponse>;
    /**
     * Reopens the specified matter. Returns the matter with updated state.
     */
    vaultMattersReopen(req: operations.VaultMattersReopenRequest, security: operations.VaultMattersReopenSecurity, config?: AxiosRequestConfig): Promise<operations.VaultMattersReopenResponse>;
    /**
     * Creates a saved query.
     */
    vaultMattersSavedQueriesCreate(req: operations.VaultMattersSavedQueriesCreateRequest, security: operations.VaultMattersSavedQueriesCreateSecurity, config?: AxiosRequestConfig): Promise<operations.VaultMattersSavedQueriesCreateResponse>;
    /**
     * Deletes the specified saved query.
     */
    vaultMattersSavedQueriesDelete(req: operations.VaultMattersSavedQueriesDeleteRequest, security: operations.VaultMattersSavedQueriesDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.VaultMattersSavedQueriesDeleteResponse>;
    /**
     * Retrieves the specified saved query.
     */
    vaultMattersSavedQueriesGet(req: operations.VaultMattersSavedQueriesGetRequest, security: operations.VaultMattersSavedQueriesGetSecurity, config?: AxiosRequestConfig): Promise<operations.VaultMattersSavedQueriesGetResponse>;
    /**
     * Lists the saved queries in a matter.
     */
    vaultMattersSavedQueriesList(req: operations.VaultMattersSavedQueriesListRequest, security: operations.VaultMattersSavedQueriesListSecurity, config?: AxiosRequestConfig): Promise<operations.VaultMattersSavedQueriesListResponse>;
    /**
     * Undeletes the specified matter. Returns the matter with updated state.
     */
    vaultMattersUndelete(req: operations.VaultMattersUndeleteRequest, security: operations.VaultMattersUndeleteSecurity, config?: AxiosRequestConfig): Promise<operations.VaultMattersUndeleteResponse>;
    /**
     * Updates the specified matter. This updates only the name and description of the matter, identified by matter ID. Changes to any other fields are ignored. Returns the default view of the matter.
     */
    vaultMattersUpdate(req: operations.VaultMattersUpdateRequest, security: operations.VaultMattersUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.VaultMattersUpdateResponse>;
}
