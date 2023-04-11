import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Account {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create a new credential
     */
    createAccountCredential(req: shared.CredentialOptions, security: operations.CreateAccountCredentialSecurity, config?: AxiosRequestConfig): Promise<operations.CreateAccountCredentialResponse>;
    /**
     * Create a new group
     */
    createAccountGroup(req: shared.GroupPost, security: operations.CreateAccountGroupSecurity, config?: AxiosRequestConfig): Promise<operations.CreateAccountGroupResponse>;
    /**
     * Create a new SSO group mapping
     */
    createAccountGroupMapping(req: shared.GroupMapping, security: operations.CreateAccountGroupMappingSecurity, config?: AxiosRequestConfig): Promise<operations.CreateAccountGroupMappingResponse>;
    /**
     * Create a new key
     */
    createAccountKey(req: shared.APIKeyOptions, security: operations.CreateAccountKeySecurity, config?: AxiosRequestConfig): Promise<operations.CreateAccountKeyResponse>;
    /**
     * Create a new organization
     */
    createAccountOrganization(req: shared.OrgOptions, security: operations.CreateAccountOrganizationSecurity, config?: AxiosRequestConfig): Promise<operations.CreateAccountOrganizationResponse>;
    /**
     * Create a new scan template
     */
    createAccountScanTemplate(req: shared.ScanTemplateOptions, security: operations.CreateAccountScanTemplateSecurity, config?: AxiosRequestConfig): Promise<operations.CreateAccountScanTemplateResponse>;
    /**
     * Create a new user account
     */
    createAccountUser(req: shared.UserOptions, security: operations.CreateAccountUserSecurity, config?: AxiosRequestConfig): Promise<operations.CreateAccountUserResponse>;
    /**
     * Create a new user account and send an email invite
     */
    createAccountUserInvite(req: shared.UserInviteOptions, security: operations.CreateAccountUserInviteSecurity, config?: AxiosRequestConfig): Promise<operations.CreateAccountUserInviteResponse>;
    /**
     * Removes the export token from the specified organization
     */
    deleteAccountOrganizationExportToken(req: operations.DeleteAccountOrganizationExportTokenRequest, security: operations.DeleteAccountOrganizationExportTokenSecurity, config?: AxiosRequestConfig): Promise<operations.DeleteAccountOrganizationExportTokenResponse>;
    /**
     * System event log as JSON
     */
    exportEventsJSON(req: operations.ExportEventsJSONRequest, security: operations.ExportEventsJSONSecurity, config?: AxiosRequestConfig): Promise<operations.ExportEventsJSONResponse>;
    /**
     * System event log as JSON line-delimited
     */
    exportEventsJSONL(req: operations.ExportEventsJSONLRequest, security: operations.ExportEventsJSONLSecurity, config?: AxiosRequestConfig): Promise<operations.ExportEventsJSONLResponse>;
    /**
     * Get all agents across all organizations
     */
    getAccountAgents(req: operations.GetAccountAgentsRequest, security: operations.GetAccountAgentsSecurity, config?: AxiosRequestConfig): Promise<operations.GetAccountAgentsResponse>;
    /**
     * Get credential details
     */
    getAccountCredential(req: operations.GetAccountCredentialRequest, security: operations.GetAccountCredentialSecurity, config?: AxiosRequestConfig): Promise<operations.GetAccountCredentialResponse>;
    /**
     * Get all account credentials
     */
    getAccountCredentials(req: operations.GetAccountCredentialsRequest, security: operations.GetAccountCredentialsSecurity, config?: AxiosRequestConfig): Promise<operations.GetAccountCredentialsResponse>;
    /**
     * Get group details
     */
    getAccountGroup(req: operations.GetAccountGroupRequest, security: operations.GetAccountGroupSecurity, config?: AxiosRequestConfig): Promise<operations.GetAccountGroupResponse>;
    /**
     * Get SSO group mapping details
     */
    getAccountGroupMapping(req: operations.GetAccountGroupMappingRequest, security: operations.GetAccountGroupMappingSecurity, config?: AxiosRequestConfig): Promise<operations.GetAccountGroupMappingResponse>;
    /**
     * Get all SSO group mappings
     */
    getAccountGroupMappings(config?: AxiosRequestConfig): Promise<operations.GetAccountGroupMappingsResponse>;
    /**
     * Get all groups
     */
    getAccountGroups(config?: AxiosRequestConfig): Promise<operations.GetAccountGroupsResponse>;
    /**
     * Get key details
     */
    getAccountKey(req: operations.GetAccountKeyRequest, security: operations.GetAccountKeySecurity, config?: AxiosRequestConfig): Promise<operations.GetAccountKeyResponse>;
    /**
     * Get all active API keys
     */
    getAccountKeys(config?: AxiosRequestConfig): Promise<operations.GetAccountKeysResponse>;
    /**
     * Get license details
     */
    getAccountLicense(config?: AxiosRequestConfig): Promise<operations.GetAccountLicenseResponse>;
    /**
     * Get organization details
     */
    getAccountOrganization(req: operations.GetAccountOrganizationRequest, security: operations.GetAccountOrganizationSecurity, config?: AxiosRequestConfig): Promise<operations.GetAccountOrganizationResponse>;
    /**
     * Get all organization details
     */
    getAccountOrganizations(req: operations.GetAccountOrganizationsRequest, security: operations.GetAccountOrganizationsSecurity, config?: AxiosRequestConfig): Promise<operations.GetAccountOrganizationsResponse>;
    /**
     * Get scan template details
     */
    getAccountScanTemplate(req: operations.GetAccountScanTemplateRequest, security: operations.GetAccountScanTemplateSecurity, config?: AxiosRequestConfig): Promise<operations.GetAccountScanTemplateResponse>;
    /**
     * Get all scan templates across all organizations (up to 1000)
     */
    getAccountScanTemplates(req: operations.GetAccountScanTemplatesRequest, security: operations.GetAccountScanTemplatesSecurity, config?: AxiosRequestConfig): Promise<operations.GetAccountScanTemplatesResponse>;
    /**
     * Get all sites details across all organizations
     */
    getAccountSites(req: operations.GetAccountSitesRequest, security: operations.GetAccountSitesSecurity, config?: AxiosRequestConfig): Promise<operations.GetAccountSitesResponse>;
    /**
     * Get all task details across all organizations (up to 1000)
     */
    getAccountTasks(req: operations.GetAccountTasksRequest, security: operations.GetAccountTasksSecurity, config?: AxiosRequestConfig): Promise<operations.GetAccountTasksResponse>;
    /**
     * Get user details
     */
    getAccountUser(req: operations.GetAccountUserRequest, security: operations.GetAccountUserSecurity, config?: AxiosRequestConfig): Promise<operations.GetAccountUserResponse>;
    /**
     * Get all users
     */
    getAccountUsers(config?: AxiosRequestConfig): Promise<operations.GetAccountUsersResponse>;
    /**
     * Remove this credential
     */
    removeAccountCredential(req: operations.RemoveAccountCredentialRequest, security: operations.RemoveAccountCredentialSecurity, config?: AxiosRequestConfig): Promise<operations.RemoveAccountCredentialResponse>;
    /**
     * Remove this group
     */
    removeAccountGroup(req: operations.RemoveAccountGroupRequest, security: operations.RemoveAccountGroupSecurity, config?: AxiosRequestConfig): Promise<operations.RemoveAccountGroupResponse>;
    /**
     * Remove this SSO group mapping
     */
    removeAccountGroupMapping(req: operations.RemoveAccountGroupMappingRequest, security: operations.RemoveAccountGroupMappingSecurity, config?: AxiosRequestConfig): Promise<operations.RemoveAccountGroupMappingResponse>;
    /**
     * Remove this key
     */
    removeAccountKey(req: operations.RemoveAccountKeyRequest, security: operations.RemoveAccountKeySecurity, config?: AxiosRequestConfig): Promise<operations.RemoveAccountKeyResponse>;
    /**
     * Remove this organization
     */
    removeAccountOrganization(req: operations.RemoveAccountOrganizationRequest, security: operations.RemoveAccountOrganizationSecurity, config?: AxiosRequestConfig): Promise<operations.RemoveAccountOrganizationResponse>;
    /**
     * Remove scan template
     */
    removeAccountScanTemplate(req: operations.RemoveAccountScanTemplateRequest, security: operations.RemoveAccountScanTemplateSecurity, config?: AxiosRequestConfig): Promise<operations.RemoveAccountScanTemplateResponse>;
    /**
     * Remove this user
     */
    removeAccountUser(req: operations.RemoveAccountUserRequest, security: operations.RemoveAccountUserSecurity, config?: AxiosRequestConfig): Promise<operations.RemoveAccountUserResponse>;
    /**
     * Resets the user's lockout status
     */
    resetAccountUserLockout(req: operations.ResetAccountUserLockoutRequest, security: operations.ResetAccountUserLockoutSecurity, config?: AxiosRequestConfig): Promise<operations.ResetAccountUserLockoutResponse>;
    /**
     * Resets the user's MFA tokens
     */
    resetAccountUserMFA(req: operations.ResetAccountUserMFARequest, security: operations.ResetAccountUserMFASecurity, config?: AxiosRequestConfig): Promise<operations.ResetAccountUserMFAResponse>;
    /**
     * Sends the user a password reset email
     */
    resetAccountUserPassword(req: operations.ResetAccountUserPasswordRequest, security: operations.ResetAccountUserPasswordSecurity, config?: AxiosRequestConfig): Promise<operations.ResetAccountUserPasswordResponse>;
    /**
     * Rotates the key secret
     */
    rotateAccountKey(req: operations.RotateAccountKeyRequest, security: operations.RotateAccountKeySecurity, config?: AxiosRequestConfig): Promise<operations.RotateAccountKeyResponse>;
    /**
     * Rotates the organization export token and returns the updated organization
     */
    rotateAccountOrganizationExportToken(req: operations.RotateAccountOrganizationExportTokenRequest, security: operations.RotateAccountOrganizationExportTokenSecurity, config?: AxiosRequestConfig): Promise<operations.RotateAccountOrganizationExportTokenResponse>;
    /**
     * Update an existing group
     */
    updateAccountGroup(req: shared.GroupPut, security: operations.UpdateAccountGroupSecurity, config?: AxiosRequestConfig): Promise<operations.UpdateAccountGroupResponse>;
    /**
     * Update an existing SSO group mapping
     */
    updateAccountGroupMapping(req: shared.GroupMapping, security: operations.UpdateAccountGroupMappingSecurity, config?: AxiosRequestConfig): Promise<operations.UpdateAccountGroupMappingResponse>;
    /**
     * Update organization details
     */
    updateAccountOrganization(req: operations.UpdateAccountOrganizationRequest, security: operations.UpdateAccountOrganizationSecurity, config?: AxiosRequestConfig): Promise<operations.UpdateAccountOrganizationResponse>;
    /**
     * Update scan template
     */
    updateAccountScanTemplate(req: shared.ScanTemplate, security: operations.UpdateAccountScanTemplateSecurity, config?: AxiosRequestConfig): Promise<operations.UpdateAccountScanTemplateResponse>;
    /**
     * Update a user's details
     */
    updateAccountUser(req: operations.UpdateAccountUserRequest, security: operations.UpdateAccountUserSecurity, config?: AxiosRequestConfig): Promise<operations.UpdateAccountUserResponse>;
}
