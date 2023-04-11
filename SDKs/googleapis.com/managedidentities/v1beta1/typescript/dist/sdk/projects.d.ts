import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Projects {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Adds an AD trust to a domain.
     */
    managedidentitiesProjectsLocationsGlobalDomainsAttachTrust(req: operations.ManagedidentitiesProjectsLocationsGlobalDomainsAttachTrustRequest, security: operations.ManagedidentitiesProjectsLocationsGlobalDomainsAttachTrustSecurity, config?: AxiosRequestConfig): Promise<operations.ManagedidentitiesProjectsLocationsGlobalDomainsAttachTrustResponse>;
    /**
     * Creates a Backup for a domain.
     */
    managedidentitiesProjectsLocationsGlobalDomainsBackupsCreate(req: operations.ManagedidentitiesProjectsLocationsGlobalDomainsBackupsCreateRequest, security: operations.ManagedidentitiesProjectsLocationsGlobalDomainsBackupsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.ManagedidentitiesProjectsLocationsGlobalDomainsBackupsCreateResponse>;
    /**
     * Lists Backup in a given project.
     */
    managedidentitiesProjectsLocationsGlobalDomainsBackupsList(req: operations.ManagedidentitiesProjectsLocationsGlobalDomainsBackupsListRequest, security: operations.ManagedidentitiesProjectsLocationsGlobalDomainsBackupsListSecurity, config?: AxiosRequestConfig): Promise<operations.ManagedidentitiesProjectsLocationsGlobalDomainsBackupsListResponse>;
    /**
     * CheckMigrationPermission API gets the current state of DomainMigration
     */
    managedidentitiesProjectsLocationsGlobalDomainsCheckMigrationPermission(req: operations.ManagedidentitiesProjectsLocationsGlobalDomainsCheckMigrationPermissionRequest, security: operations.ManagedidentitiesProjectsLocationsGlobalDomainsCheckMigrationPermissionSecurity, config?: AxiosRequestConfig): Promise<operations.ManagedidentitiesProjectsLocationsGlobalDomainsCheckMigrationPermissionResponse>;
    /**
     * Creates a Microsoft AD domain.
     */
    managedidentitiesProjectsLocationsGlobalDomainsCreate(req: operations.ManagedidentitiesProjectsLocationsGlobalDomainsCreateRequest, security: operations.ManagedidentitiesProjectsLocationsGlobalDomainsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.ManagedidentitiesProjectsLocationsGlobalDomainsCreateResponse>;
    /**
     * Removes an AD trust.
     */
    managedidentitiesProjectsLocationsGlobalDomainsDetachTrust(req: operations.ManagedidentitiesProjectsLocationsGlobalDomainsDetachTrustRequest, security: operations.ManagedidentitiesProjectsLocationsGlobalDomainsDetachTrustSecurity, config?: AxiosRequestConfig): Promise<operations.ManagedidentitiesProjectsLocationsGlobalDomainsDetachTrustResponse>;
    /**
     * Disable Domain Migration
     */
    managedidentitiesProjectsLocationsGlobalDomainsDisableMigration(req: operations.ManagedidentitiesProjectsLocationsGlobalDomainsDisableMigrationRequest, security: operations.ManagedidentitiesProjectsLocationsGlobalDomainsDisableMigrationSecurity, config?: AxiosRequestConfig): Promise<operations.ManagedidentitiesProjectsLocationsGlobalDomainsDisableMigrationResponse>;
    /**
     * DomainJoinMachine API joins a Compute Engine VM to the domain
     */
    managedidentitiesProjectsLocationsGlobalDomainsDomainJoinMachine(req: operations.ManagedidentitiesProjectsLocationsGlobalDomainsDomainJoinMachineRequest, security: operations.ManagedidentitiesProjectsLocationsGlobalDomainsDomainJoinMachineSecurity, config?: AxiosRequestConfig): Promise<operations.ManagedidentitiesProjectsLocationsGlobalDomainsDomainJoinMachineResponse>;
    /**
     * Enable Domain Migration
     */
    managedidentitiesProjectsLocationsGlobalDomainsEnableMigration(req: operations.ManagedidentitiesProjectsLocationsGlobalDomainsEnableMigrationRequest, security: operations.ManagedidentitiesProjectsLocationsGlobalDomainsEnableMigrationSecurity, config?: AxiosRequestConfig): Promise<operations.ManagedidentitiesProjectsLocationsGlobalDomainsEnableMigrationResponse>;
    /**
     * Extend Schema for Domain
     */
    managedidentitiesProjectsLocationsGlobalDomainsExtendSchema(req: operations.ManagedidentitiesProjectsLocationsGlobalDomainsExtendSchemaRequest, security: operations.ManagedidentitiesProjectsLocationsGlobalDomainsExtendSchemaSecurity, config?: AxiosRequestConfig): Promise<operations.ManagedidentitiesProjectsLocationsGlobalDomainsExtendSchemaResponse>;
    /**
     * Gets the domain ldaps settings.
     */
    managedidentitiesProjectsLocationsGlobalDomainsGetLdapssettings(req: operations.ManagedidentitiesProjectsLocationsGlobalDomainsGetLdapssettingsRequest, security: operations.ManagedidentitiesProjectsLocationsGlobalDomainsGetLdapssettingsSecurity, config?: AxiosRequestConfig): Promise<operations.ManagedidentitiesProjectsLocationsGlobalDomainsGetLdapssettingsResponse>;
    /**
     * Lists domains in a project.
     */
    managedidentitiesProjectsLocationsGlobalDomainsList(req: operations.ManagedidentitiesProjectsLocationsGlobalDomainsListRequest, security: operations.ManagedidentitiesProjectsLocationsGlobalDomainsListSecurity, config?: AxiosRequestConfig): Promise<operations.ManagedidentitiesProjectsLocationsGlobalDomainsListResponse>;
    /**
     * Updates the DNS conditional forwarder.
     */
    managedidentitiesProjectsLocationsGlobalDomainsReconfigureTrust(req: operations.ManagedidentitiesProjectsLocationsGlobalDomainsReconfigureTrustRequest, security: operations.ManagedidentitiesProjectsLocationsGlobalDomainsReconfigureTrustSecurity, config?: AxiosRequestConfig): Promise<operations.ManagedidentitiesProjectsLocationsGlobalDomainsReconfigureTrustResponse>;
    /**
     * Resets a domain's administrator password.
     */
    managedidentitiesProjectsLocationsGlobalDomainsResetAdminPassword(req: operations.ManagedidentitiesProjectsLocationsGlobalDomainsResetAdminPasswordRequest, security: operations.ManagedidentitiesProjectsLocationsGlobalDomainsResetAdminPasswordSecurity, config?: AxiosRequestConfig): Promise<operations.ManagedidentitiesProjectsLocationsGlobalDomainsResetAdminPasswordResponse>;
    /**
     * RestoreBackup restores domain mentioned in the RestoreBackupRequest
     */
    managedidentitiesProjectsLocationsGlobalDomainsRestore(req: operations.ManagedidentitiesProjectsLocationsGlobalDomainsRestoreRequest, security: operations.ManagedidentitiesProjectsLocationsGlobalDomainsRestoreSecurity, config?: AxiosRequestConfig): Promise<operations.ManagedidentitiesProjectsLocationsGlobalDomainsRestoreResponse>;
    /**
     * Lists SqlIntegrations in a given domain.
     */
    managedidentitiesProjectsLocationsGlobalDomainsSqlIntegrationsList(req: operations.ManagedidentitiesProjectsLocationsGlobalDomainsSqlIntegrationsListRequest, security: operations.ManagedidentitiesProjectsLocationsGlobalDomainsSqlIntegrationsListSecurity, config?: AxiosRequestConfig): Promise<operations.ManagedidentitiesProjectsLocationsGlobalDomainsSqlIntegrationsListResponse>;
    /**
     * Patches a single ldaps settings.
     */
    managedidentitiesProjectsLocationsGlobalDomainsUpdateLdapssettings(req: operations.ManagedidentitiesProjectsLocationsGlobalDomainsUpdateLdapssettingsRequest, security: operations.ManagedidentitiesProjectsLocationsGlobalDomainsUpdateLdapssettingsSecurity, config?: AxiosRequestConfig): Promise<operations.ManagedidentitiesProjectsLocationsGlobalDomainsUpdateLdapssettingsResponse>;
    /**
     * Validates a trust state, that the target domain is reachable, and that the target domain is able to accept incoming trust requests.
     */
    managedidentitiesProjectsLocationsGlobalDomainsValidateTrust(req: operations.ManagedidentitiesProjectsLocationsGlobalDomainsValidateTrustRequest, security: operations.ManagedidentitiesProjectsLocationsGlobalDomainsValidateTrustSecurity, config?: AxiosRequestConfig): Promise<operations.ManagedidentitiesProjectsLocationsGlobalDomainsValidateTrustResponse>;
    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
     */
    managedidentitiesProjectsLocationsGlobalOperationsCancel(req: operations.ManagedidentitiesProjectsLocationsGlobalOperationsCancelRequest, security: operations.ManagedidentitiesProjectsLocationsGlobalOperationsCancelSecurity, config?: AxiosRequestConfig): Promise<operations.ManagedidentitiesProjectsLocationsGlobalOperationsCancelResponse>;
    /**
     * Creates a Peering for Managed AD instance.
     */
    managedidentitiesProjectsLocationsGlobalPeeringsCreate(req: operations.ManagedidentitiesProjectsLocationsGlobalPeeringsCreateRequest, security: operations.ManagedidentitiesProjectsLocationsGlobalPeeringsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.ManagedidentitiesProjectsLocationsGlobalPeeringsCreateResponse>;
    /**
     * Deletes identified Peering.
     */
    managedidentitiesProjectsLocationsGlobalPeeringsDelete(req: operations.ManagedidentitiesProjectsLocationsGlobalPeeringsDeleteRequest, security: operations.ManagedidentitiesProjectsLocationsGlobalPeeringsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.ManagedidentitiesProjectsLocationsGlobalPeeringsDeleteResponse>;
    /**
     * Gets details of a single Peering.
     */
    managedidentitiesProjectsLocationsGlobalPeeringsGet(req: operations.ManagedidentitiesProjectsLocationsGlobalPeeringsGetRequest, security: operations.ManagedidentitiesProjectsLocationsGlobalPeeringsGetSecurity, config?: AxiosRequestConfig): Promise<operations.ManagedidentitiesProjectsLocationsGlobalPeeringsGetResponse>;
    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     */
    managedidentitiesProjectsLocationsGlobalPeeringsGetIamPolicy(req: operations.ManagedidentitiesProjectsLocationsGlobalPeeringsGetIamPolicyRequest, security: operations.ManagedidentitiesProjectsLocationsGlobalPeeringsGetIamPolicySecurity, config?: AxiosRequestConfig): Promise<operations.ManagedidentitiesProjectsLocationsGlobalPeeringsGetIamPolicyResponse>;
    /**
     * Lists Peerings in a given project.
     */
    managedidentitiesProjectsLocationsGlobalPeeringsList(req: operations.ManagedidentitiesProjectsLocationsGlobalPeeringsListRequest, security: operations.ManagedidentitiesProjectsLocationsGlobalPeeringsListSecurity, config?: AxiosRequestConfig): Promise<operations.ManagedidentitiesProjectsLocationsGlobalPeeringsListResponse>;
    /**
     * Updates the labels for specified Peering.
     */
    managedidentitiesProjectsLocationsGlobalPeeringsPatch(req: operations.ManagedidentitiesProjectsLocationsGlobalPeeringsPatchRequest, security: operations.ManagedidentitiesProjectsLocationsGlobalPeeringsPatchSecurity, config?: AxiosRequestConfig): Promise<operations.ManagedidentitiesProjectsLocationsGlobalPeeringsPatchResponse>;
    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
     */
    managedidentitiesProjectsLocationsGlobalPeeringsSetIamPolicy(req: operations.ManagedidentitiesProjectsLocationsGlobalPeeringsSetIamPolicyRequest, security: operations.ManagedidentitiesProjectsLocationsGlobalPeeringsSetIamPolicySecurity, config?: AxiosRequestConfig): Promise<operations.ManagedidentitiesProjectsLocationsGlobalPeeringsSetIamPolicyResponse>;
    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     */
    managedidentitiesProjectsLocationsGlobalPeeringsTestIamPermissions(req: operations.ManagedidentitiesProjectsLocationsGlobalPeeringsTestIamPermissionsRequest, security: operations.ManagedidentitiesProjectsLocationsGlobalPeeringsTestIamPermissionsSecurity, config?: AxiosRequestConfig): Promise<operations.ManagedidentitiesProjectsLocationsGlobalPeeringsTestIamPermissionsResponse>;
    /**
     * Lists information about the supported locations for this service.
     */
    managedidentitiesProjectsLocationsList(req: operations.ManagedidentitiesProjectsLocationsListRequest, security: operations.ManagedidentitiesProjectsLocationsListSecurity, config?: AxiosRequestConfig): Promise<operations.ManagedidentitiesProjectsLocationsListResponse>;
}
