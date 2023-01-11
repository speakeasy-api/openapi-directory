import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Account {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * createAccountCredential - Create a new credential
    **/
    createAccountCredential(req: operations.CreateAccountCredentialRequest, config?: AxiosRequestConfig): Promise<operations.CreateAccountCredentialResponse>;
    /**
     * createAccountKey - Create a new key
    **/
    createAccountKey(req: operations.CreateAccountKeyRequest, config?: AxiosRequestConfig): Promise<operations.CreateAccountKeyResponse>;
    /**
     * createAccountOrganization - Create a new organization
    **/
    createAccountOrganization(req: operations.CreateAccountOrganizationRequest, config?: AxiosRequestConfig): Promise<operations.CreateAccountOrganizationResponse>;
    /**
     * createAccountUser - Create a new user account
    **/
    createAccountUser(req: operations.CreateAccountUserRequest, config?: AxiosRequestConfig): Promise<operations.CreateAccountUserResponse>;
    /**
     * createAccountUserInvite - Create a new user account and send an email invite
    **/
    createAccountUserInvite(req: operations.CreateAccountUserInviteRequest, config?: AxiosRequestConfig): Promise<operations.CreateAccountUserInviteResponse>;
    /**
     * deleteAccountOrganizationExportToken - Removes the export token from the specified organization
    **/
    deleteAccountOrganizationExportToken(req: operations.DeleteAccountOrganizationExportTokenRequest, config?: AxiosRequestConfig): Promise<operations.DeleteAccountOrganizationExportTokenResponse>;
    /**
     * exportEventsJson - System event log as JSON
    **/
    exportEventsJson(req: operations.ExportEventsJsonRequest, config?: AxiosRequestConfig): Promise<operations.ExportEventsJsonResponse>;
    /**
     * exportEventsJsonl - System event log as JSON line-delimited
    **/
    exportEventsJsonl(req: operations.ExportEventsJsonlRequest, config?: AxiosRequestConfig): Promise<operations.ExportEventsJsonlResponse>;
    /**
     * getAccountAgents - Get all agents across all organizations
    **/
    getAccountAgents(req: operations.GetAccountAgentsRequest, config?: AxiosRequestConfig): Promise<operations.GetAccountAgentsResponse>;
    /**
     * getAccountCredential - Get credential details
    **/
    getAccountCredential(req: operations.GetAccountCredentialRequest, config?: AxiosRequestConfig): Promise<operations.GetAccountCredentialResponse>;
    /**
     * getAccountCredentials - Get all account credentials
    **/
    getAccountCredentials(req: operations.GetAccountCredentialsRequest, config?: AxiosRequestConfig): Promise<operations.GetAccountCredentialsResponse>;
    /**
     * getAccountKey - Get key details
    **/
    getAccountKey(req: operations.GetAccountKeyRequest, config?: AxiosRequestConfig): Promise<operations.GetAccountKeyResponse>;
    /**
     * getAccountKeys - Get all active API keys
    **/
    getAccountKeys(req: operations.GetAccountKeysRequest, config?: AxiosRequestConfig): Promise<operations.GetAccountKeysResponse>;
    /**
     * getAccountLicense - Get license details
    **/
    getAccountLicense(req: operations.GetAccountLicenseRequest, config?: AxiosRequestConfig): Promise<operations.GetAccountLicenseResponse>;
    /**
     * getAccountOrganization - Get organization details
    **/
    getAccountOrganization(req: operations.GetAccountOrganizationRequest, config?: AxiosRequestConfig): Promise<operations.GetAccountOrganizationResponse>;
    /**
     * getAccountOrganizations - Get all organization details
    **/
    getAccountOrganizations(req: operations.GetAccountOrganizationsRequest, config?: AxiosRequestConfig): Promise<operations.GetAccountOrganizationsResponse>;
    /**
     * getAccountSites - Get all sites details across all organizations
    **/
    getAccountSites(req: operations.GetAccountSitesRequest, config?: AxiosRequestConfig): Promise<operations.GetAccountSitesResponse>;
    /**
     * getAccountTasks - Get all task details across all organizations (up to 1000)
    **/
    getAccountTasks(req: operations.GetAccountTasksRequest, config?: AxiosRequestConfig): Promise<operations.GetAccountTasksResponse>;
    /**
     * getAccountUser - Get user details
    **/
    getAccountUser(req: operations.GetAccountUserRequest, config?: AxiosRequestConfig): Promise<operations.GetAccountUserResponse>;
    /**
     * getAccountUsers - Get all users
    **/
    getAccountUsers(req: operations.GetAccountUsersRequest, config?: AxiosRequestConfig): Promise<operations.GetAccountUsersResponse>;
    /**
     * removeAccountCredential - Remove this credential
    **/
    removeAccountCredential(req: operations.RemoveAccountCredentialRequest, config?: AxiosRequestConfig): Promise<operations.RemoveAccountCredentialResponse>;
    /**
     * removeAccountKey - Remove this key
    **/
    removeAccountKey(req: operations.RemoveAccountKeyRequest, config?: AxiosRequestConfig): Promise<operations.RemoveAccountKeyResponse>;
    /**
     * removeAccountOrganization - Remove this organization
    **/
    removeAccountOrganization(req: operations.RemoveAccountOrganizationRequest, config?: AxiosRequestConfig): Promise<operations.RemoveAccountOrganizationResponse>;
    /**
     * removeAccountUser - Remove this user
    **/
    removeAccountUser(req: operations.RemoveAccountUserRequest, config?: AxiosRequestConfig): Promise<operations.RemoveAccountUserResponse>;
    /**
     * resetAccountUserLockout - Resets the user's lockout status
    **/
    resetAccountUserLockout(req: operations.ResetAccountUserLockoutRequest, config?: AxiosRequestConfig): Promise<operations.ResetAccountUserLockoutResponse>;
    /**
     * resetAccountUserMfa - Resets the user's MFA tokens
    **/
    resetAccountUserMfa(req: operations.ResetAccountUserMfaRequest, config?: AxiosRequestConfig): Promise<operations.ResetAccountUserMfaResponse>;
    /**
     * resetAccountUserPassword - Sends the user a password reset email
    **/
    resetAccountUserPassword(req: operations.ResetAccountUserPasswordRequest, config?: AxiosRequestConfig): Promise<operations.ResetAccountUserPasswordResponse>;
    /**
     * rotateAccountKey - Rotates the key secret
    **/
    rotateAccountKey(req: operations.RotateAccountKeyRequest, config?: AxiosRequestConfig): Promise<operations.RotateAccountKeyResponse>;
    /**
     * rotateAccountOrganizationExportToken - Rotates the organization export token and returns the updated organization
    **/
    rotateAccountOrganizationExportToken(req: operations.RotateAccountOrganizationExportTokenRequest, config?: AxiosRequestConfig): Promise<operations.RotateAccountOrganizationExportTokenResponse>;
    /**
     * updateAccountOrganization - Update organization details
    **/
    updateAccountOrganization(req: operations.UpdateAccountOrganizationRequest, config?: AxiosRequestConfig): Promise<operations.UpdateAccountOrganizationResponse>;
    /**
     * updateAccountUser - Update a user's details
    **/
    updateAccountUser(req: operations.UpdateAccountUserRequest, config?: AxiosRequestConfig): Promise<operations.UpdateAccountUserResponse>;
}
