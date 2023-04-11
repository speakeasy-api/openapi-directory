import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Retrieve secret scanning alerts from a repository.
 */
export declare class SecretScanning {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get a secret scanning alert
     *
     * @remarks
     * Gets a single secret scanning alert detected in an eligible repository.
     * To use this endpoint, you must be an administrator for the repository or for the organization that owns the repository, and you must use a personal access token with the `repo` scope or `security_events` scope.
     * For public repositories, you may instead use the `public_repo` scope.
     *
     * GitHub Apps must have the `secret_scanning_alerts` read permission to use this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.6/rest/reference/secret-scanning#get-a-secret-scanning-alert} - API method documentation
     */
    secretScanningGetAlert(req: operations.SecretScanningGetAlertRequest, config?: AxiosRequestConfig): Promise<operations.SecretScanningGetAlertResponse>;
    /**
     * List secret scanning alerts for an enterprise
     *
     * @remarks
     * Lists secret scanning alerts for eligible repositories in an enterprise, from newest to oldest.
     * To use this endpoint, you must be a member of the enterprise, and you must use an access token with the `repo` scope or `security_events` scope. Alerts are only returned for organizations in the enterprise for which you are an organization owner or a [security manager](https://docs.github.com/enterprise-server@3.6/organizations/managing-peoples-access-to-your-organization-with-roles/managing-security-managers-in-your-organization).
     *
     * @see {@link https://docs.github.com/enterprise-server@3.6/rest/reference/secret-scanning#list-secret-scanning-alerts-for-an-enterprise} - API method documentation
     */
    secretScanningListAlertsForEnterprise(req: operations.SecretScanningListAlertsForEnterpriseRequest, config?: AxiosRequestConfig): Promise<operations.SecretScanningListAlertsForEnterpriseResponse>;
    /**
     * List secret scanning alerts for an organization
     *
     * @remarks
     * Lists secret scanning alerts for eligible repositories in an organization, from newest to oldest.
     * To use this endpoint, you must be an administrator or security manager for the organization, and you must use an access token with the `repo` scope or `security_events` scope.
     * For public repositories, you may instead use the `public_repo` scope.
     *
     * GitHub Apps must have the `secret_scanning_alerts` read permission to use this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.6/rest/reference/secret-scanning#list-secret-scanning-alerts-for-an-organization} - API method documentation
     */
    secretScanningListAlertsForOrg(req: operations.SecretScanningListAlertsForOrgRequest, config?: AxiosRequestConfig): Promise<operations.SecretScanningListAlertsForOrgResponse>;
    /**
     * List secret scanning alerts for a repository
     *
     * @remarks
     * Lists secret scanning alerts for an eligible repository, from newest to oldest.
     * To use this endpoint, you must be an administrator for the repository or for the organization that owns the repository, and you must use a personal access token with the `repo` scope or `security_events` scope.
     * For public repositories, you may instead use the `public_repo` scope.
     *
     * GitHub Apps must have the `secret_scanning_alerts` read permission to use this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.6/rest/reference/secret-scanning#list-secret-scanning-alerts-for-a-repository} - API method documentation
     */
    secretScanningListAlertsForRepo(req: operations.SecretScanningListAlertsForRepoRequest, config?: AxiosRequestConfig): Promise<operations.SecretScanningListAlertsForRepoResponse>;
    /**
     * List locations for a secret scanning alert
     *
     * @remarks
     * Lists all locations for a given secret scanning alert for an eligible repository.
     * To use this endpoint, you must be an administrator for the repository or for the organization that owns the repository, and you must use a personal access token with the `repo` scope or `security_events` scope.
     * For public repositories, you may instead use the `public_repo` scope.
     *
     * GitHub Apps must have the `secret_scanning_alerts` read permission to use this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.6/rest/reference/secret-scanning#list-locations-for-a-secret-scanning-alert} - API method documentation
     */
    secretScanningListLocationsForAlert(req: operations.SecretScanningListLocationsForAlertRequest, config?: AxiosRequestConfig): Promise<operations.SecretScanningListLocationsForAlertResponse>;
    /**
     * Update a secret scanning alert
     *
     * @remarks
     * Updates the status of a secret scanning alert in an eligible repository.
     * To use this endpoint, you must be an administrator for the repository or for the organization that owns the repository, and you must use a personal access token with the `repo` scope or `security_events` scope.
     * For public repositories, you may instead use the `public_repo` scope.
     *
     * GitHub Apps must have the `secret_scanning_alerts` write permission to use this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.6/rest/reference/secret-scanning#update-a-secret-scanning-alert} - API method documentation
     */
    secretScanningUpdateAlert(req: operations.SecretScanningUpdateAlertRequest, config?: AxiosRequestConfig): Promise<operations.SecretScanningUpdateAlertResponse>;
}
