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
     * Gets a single secret scanning alert detected in a private repository. To use this endpoint, you must be an administrator for the repository or organization, and you must use an access token with the `repo` scope or `security_events` scope.
     *
     * GitHub Apps must have the `secret_scanning_alerts` read permission to use this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.3/rest/reference/secret-scanning#get-a-secret-scanning-alert} - API method documentation
     */
    secretScanningGetAlert(req: operations.SecretScanningGetAlertRequest, config?: AxiosRequestConfig): Promise<operations.SecretScanningGetAlertResponse>;
    /**
     * List secret scanning alerts for an organization
     *
     * @remarks
     * Lists secret scanning alerts for eligible repositories in an organization, from newest to oldest.
     * To use this endpoint, you must be an administrator or security manager for the organization, and you must use an access token with the `repo` scope or `security_events` scope.
     *
     * GitHub Apps must have the `secret_scanning_alerts` read permission to use this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.3/rest/reference/secret-scanning#list-secret-scanning-alerts-for-an-organization} - API method documentation
     */
    secretScanningListAlertsForOrg(req: operations.SecretScanningListAlertsForOrgRequest, config?: AxiosRequestConfig): Promise<operations.SecretScanningListAlertsForOrgResponse>;
    /**
     * List secret scanning alerts for a repository
     *
     * @remarks
     * Lists secret scanning alerts for a private repository, from newest to oldest. To use this endpoint, you must be an administrator for the repository or organization, and you must use an access token with the `repo` scope or `security_events` scope.
     *
     * GitHub Apps must have the `secret_scanning_alerts` read permission to use this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.3/rest/reference/secret-scanning#list-secret-scanning-alerts-for-a-repository} - API method documentation
     */
    secretScanningListAlertsForRepo(req: operations.SecretScanningListAlertsForRepoRequest, config?: AxiosRequestConfig): Promise<operations.SecretScanningListAlertsForRepoResponse>;
    /**
     * List locations for a secret scanning alert
     *
     * @remarks
     * Lists all locations for a given secret scanning alert for a private repository. To use this endpoint, you must be an administrator for the repository or organization, and you must use an access token with the `repo` scope or `security_events` scope.
     *
     * GitHub Apps must have the `secret_scanning_alerts` read permission to use this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.3/rest/reference/secret-scanning#list-locations-for-a-secret-scanning-alert} - API method documentation
     */
    secretScanningListLocationsForAlert(req: operations.SecretScanningListLocationsForAlertRequest, config?: AxiosRequestConfig): Promise<operations.SecretScanningListLocationsForAlertResponse>;
    /**
     * Update a secret scanning alert
     *
     * @remarks
     * Updates the status of a secret scanning alert in a private repository. To use this endpoint, you must be an administrator for the repository or organization, and you must use an access token with the `repo` scope or `security_events` scope.
     *
     * GitHub Apps must have the `secret_scanning_alerts` write permission to use this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.3/rest/reference/secret-scanning#update-a-secret-scanning-alert} - API method documentation
     */
    secretScanningUpdateAlert(req: operations.SecretScanningUpdateAlertRequest, config?: AxiosRequestConfig): Promise<operations.SecretScanningUpdateAlertResponse>;
}
