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
     * Gets the metadata info for the requested client
     */
    integrationsProjectsGetClientmetadata(req: operations.IntegrationsProjectsGetClientmetadataRequest, security: operations.IntegrationsProjectsGetClientmetadataSecurity, config?: AxiosRequestConfig): Promise<operations.IntegrationsProjectsGetClientmetadataResponse>;
    /**
     * Creates an Apps Script project.
     */
    integrationsProjectsLocationsAppsScriptProjectsCreate(req: operations.IntegrationsProjectsLocationsAppsScriptProjectsCreateRequest, security: operations.IntegrationsProjectsLocationsAppsScriptProjectsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.IntegrationsProjectsLocationsAppsScriptProjectsCreateResponse>;
    /**
     * Links a existing Apps Script project.
     */
    integrationsProjectsLocationsAppsScriptProjectsLink(req: operations.IntegrationsProjectsLocationsAppsScriptProjectsLinkRequest, security: operations.IntegrationsProjectsLocationsAppsScriptProjectsLinkSecurity, config?: AxiosRequestConfig): Promise<operations.IntegrationsProjectsLocationsAppsScriptProjectsLinkResponse>;
    /**
     * Perform the deprovisioning steps to disable a user GCP project to use IP and purge all related data in a wipeout-compliant way.
     */
    integrationsProjectsLocationsClientsDeprovision(req: operations.IntegrationsProjectsLocationsClientsDeprovisionRequest, security: operations.IntegrationsProjectsLocationsClientsDeprovisionSecurity, config?: AxiosRequestConfig): Promise<operations.IntegrationsProjectsLocationsClientsDeprovisionResponse>;
    /**
     * Perform the provisioning steps to enable a user GCP project to use IP. If GCP project already registered on IP end via Apigee Integration, provisioning will fail.
     */
    integrationsProjectsLocationsClientsProvision(req: operations.IntegrationsProjectsLocationsClientsProvisionRequest, security: operations.IntegrationsProjectsLocationsClientsProvisionSecurity, config?: AxiosRequestConfig): Promise<operations.IntegrationsProjectsLocationsClientsProvisionResponse>;
    /**
     * Update client from GMEK to CMEK
     */
    integrationsProjectsLocationsClientsSwitch(req: operations.IntegrationsProjectsLocationsClientsSwitchRequest, security: operations.IntegrationsProjectsLocationsClientsSwitchSecurity, config?: AxiosRequestConfig): Promise<operations.IntegrationsProjectsLocationsClientsSwitchResponse>;
    /**
     * Lists Connections in a given project and location.
     */
    integrationsProjectsLocationsConnectionsList(req: operations.IntegrationsProjectsLocationsConnectionsListRequest, security: operations.IntegrationsProjectsLocationsConnectionsListSecurity, config?: AxiosRequestConfig): Promise<operations.IntegrationsProjectsLocationsConnectionsListResponse>;
    /**
     * Lists the JSON schemas for the inputs and outputs of actions, filtered by action name.
     */
    integrationsProjectsLocationsConnectionsRuntimeActionSchemasList(req: operations.IntegrationsProjectsLocationsConnectionsRuntimeActionSchemasListRequest, security: operations.IntegrationsProjectsLocationsConnectionsRuntimeActionSchemasListSecurity, config?: AxiosRequestConfig): Promise<operations.IntegrationsProjectsLocationsConnectionsRuntimeActionSchemasListResponse>;
    /**
     * Lists the JSON schemas for the properties of runtime entities, filtered by entity name.
     */
    integrationsProjectsLocationsConnectionsRuntimeEntitySchemasList(req: operations.IntegrationsProjectsLocationsConnectionsRuntimeEntitySchemasListRequest, security: operations.IntegrationsProjectsLocationsConnectionsRuntimeEntitySchemasListSecurity, config?: AxiosRequestConfig): Promise<operations.IntegrationsProjectsLocationsConnectionsRuntimeEntitySchemasListResponse>;
    /**
     * Gets the client configuration for the given project and location resource name
     */
    integrationsProjectsLocationsGetClients(req: operations.IntegrationsProjectsLocationsGetClientsRequest, security: operations.IntegrationsProjectsLocationsGetClientsSecurity, config?: AxiosRequestConfig): Promise<operations.IntegrationsProjectsLocationsGetClientsResponse>;
    /**
     * Creates an auth config record. Fetch corresponding credentials for specific auth types, e.g. access token for OAuth 2.0, JWT token for JWT. Encrypt the auth config with Cloud KMS and store the encrypted credentials in Spanner. Returns the encrypted auth config.
     */
    integrationsProjectsLocationsProductsAuthConfigsCreate(req: operations.IntegrationsProjectsLocationsProductsAuthConfigsCreateRequest, security: operations.IntegrationsProjectsLocationsProductsAuthConfigsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.IntegrationsProjectsLocationsProductsAuthConfigsCreateResponse>;
    /**
     * Lists all auth configs that match the filter. Restrict to auth configs belong to the current client only.
     */
    integrationsProjectsLocationsProductsAuthConfigsList(req: operations.IntegrationsProjectsLocationsProductsAuthConfigsListRequest, security: operations.IntegrationsProjectsLocationsProductsAuthConfigsListSecurity, config?: AxiosRequestConfig): Promise<operations.IntegrationsProjectsLocationsProductsAuthConfigsListResponse>;
    /**
     * Creates a new certificate. The certificate will be registered to the trawler service and will be encrypted using cloud KMS and stored in Spanner Returns the certificate.
     */
    integrationsProjectsLocationsProductsCertificatesCreate(req: operations.IntegrationsProjectsLocationsProductsCertificatesCreateRequest, security: operations.IntegrationsProjectsLocationsProductsCertificatesCreateSecurity, config?: AxiosRequestConfig): Promise<operations.IntegrationsProjectsLocationsProductsCertificatesCreateResponse>;
    /**
     * List all the certificates that match the filter. Restrict to certificate of current client only.
     */
    integrationsProjectsLocationsProductsCertificatesList(req: operations.IntegrationsProjectsLocationsProductsCertificatesListRequest, security: operations.IntegrationsProjectsLocationsProductsCertificatesListSecurity, config?: AxiosRequestConfig): Promise<operations.IntegrationsProjectsLocationsProductsCertificatesListResponse>;
    /**
     * Creates an cloud function project.
     */
    integrationsProjectsLocationsProductsCloudFunctionsCreate(req: operations.IntegrationsProjectsLocationsProductsCloudFunctionsCreateRequest, security: operations.IntegrationsProjectsLocationsProductsCloudFunctionsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.IntegrationsProjectsLocationsProductsCloudFunctionsCreateResponse>;
    /**
     * Executes integrations synchronously by passing the trigger id in the request body. The request is not returned until the requested executions are either fulfilled or experienced an error. If the integration name is not specified (passing `-`), all of the associated integration under the given trigger_id will be executed. Otherwise only the specified integration for the given `trigger_id` is executed. This is helpful for execution the integration from UI.
     */
    integrationsProjectsLocationsProductsIntegrationsExecute(req: operations.IntegrationsProjectsLocationsProductsIntegrationsExecuteRequest, security: operations.IntegrationsProjectsLocationsProductsIntegrationsExecuteSecurity, config?: AxiosRequestConfig): Promise<operations.IntegrationsProjectsLocationsProductsIntegrationsExecuteResponse>;
    /**
     * Cancellation of an execution
     */
    integrationsProjectsLocationsProductsIntegrationsExecutionsCancel(req: operations.IntegrationsProjectsLocationsProductsIntegrationsExecutionsCancelRequest, security: operations.IntegrationsProjectsLocationsProductsIntegrationsExecutionsCancelSecurity, config?: AxiosRequestConfig): Promise<operations.IntegrationsProjectsLocationsProductsIntegrationsExecutionsCancelResponse>;
    /**
     * Lists the results of all the integration executions. The response includes the same information as the [execution log](https://cloud.google.com/application-integration/docs/viewing-logs) in the Integration UI.
     */
    integrationsProjectsLocationsProductsIntegrationsExecutionsList(req: operations.IntegrationsProjectsLocationsProductsIntegrationsExecutionsListRequest, security: operations.IntegrationsProjectsLocationsProductsIntegrationsExecutionsListSecurity, config?: AxiosRequestConfig): Promise<operations.IntegrationsProjectsLocationsProductsIntegrationsExecutionsListResponse>;
    /**
     * * Lifts suspension for advanced suspension task. Fetch corresponding suspension with provided suspension Id, resolve suspension, and set up suspension result for the Suspension Task.
     */
    integrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsLift(req: operations.IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsLiftRequest, security: operations.IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsLiftSecurity, config?: AxiosRequestConfig): Promise<operations.IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsLiftResponse>;
    /**
     * * Lists suspensions associated with a specific execution. Only those with permissions to resolve the relevant suspensions will be able to view them.
     */
    integrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsList(req: operations.IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsListRequest, security: operations.IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsListSecurity, config?: AxiosRequestConfig): Promise<operations.IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsListResponse>;
    /**
     * * Resolves (lifts/rejects) any number of suspensions. If the integration is already running, only the status of the suspension is updated. Otherwise, the suspended integration will begin execution again.
     */
    integrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsResolve(req: operations.IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsResolveRequest, security: operations.IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsResolveSecurity, config?: AxiosRequestConfig): Promise<operations.IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsResolveResponse>;
    /**
     * Returns the list of all integrations in the specified project.
     */
    integrationsProjectsLocationsProductsIntegrationsList(req: operations.IntegrationsProjectsLocationsProductsIntegrationsListRequest, security: operations.IntegrationsProjectsLocationsProductsIntegrationsListSecurity, config?: AxiosRequestConfig): Promise<operations.IntegrationsProjectsLocationsProductsIntegrationsListResponse>;
    /**
     * Schedules an integration for execution by passing the trigger id and the scheduled time in the request body.
     */
    integrationsProjectsLocationsProductsIntegrationsSchedule(req: operations.IntegrationsProjectsLocationsProductsIntegrationsScheduleRequest, security: operations.IntegrationsProjectsLocationsProductsIntegrationsScheduleSecurity, config?: AxiosRequestConfig): Promise<operations.IntegrationsProjectsLocationsProductsIntegrationsScheduleResponse>;
    /**
     * Execute the integration in draft state
     */
    integrationsProjectsLocationsProductsIntegrationsTest(req: operations.IntegrationsProjectsLocationsProductsIntegrationsTestRequest, security: operations.IntegrationsProjectsLocationsProductsIntegrationsTestSecurity, config?: AxiosRequestConfig): Promise<operations.IntegrationsProjectsLocationsProductsIntegrationsTestResponse>;
    /**
     * Create a integration with a draft version in the specified project.
     */
    integrationsProjectsLocationsProductsIntegrationsVersionsCreate(req: operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsCreateRequest, security: operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsCreateResponse>;
    /**
     * Downloads an integration. Retrieves the `IntegrationVersion` for a given `integration_id` and returns the response as a string.
     */
    integrationsProjectsLocationsProductsIntegrationsVersionsDownload(req: operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsDownloadRequest, security: operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsDownloadSecurity, config?: AxiosRequestConfig): Promise<operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsDownloadResponse>;
    /**
     * Returns the list of all integration versions in the specified project.
     */
    integrationsProjectsLocationsProductsIntegrationsVersionsList(req: operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsListRequest, security: operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsListSecurity, config?: AxiosRequestConfig): Promise<operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsListResponse>;
    /**
     * This RPC throws an exception if the integration is in ARCHIVED or ACTIVE state. This RPC throws an exception if the version being published is DRAFT, and if the `locked_by` user is not the same as the user performing the Publish. Audit fields updated include last_published_timestamp, last_published_by, last_modified_timestamp, last_modified_by. Any existing lock is on this integration is released.
     */
    integrationsProjectsLocationsProductsIntegrationsVersionsPublish(req: operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsPublishRequest, security: operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsPublishSecurity, config?: AxiosRequestConfig): Promise<operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsPublishResponse>;
    /**
     * Clears the `locked_by` and `locked_at_timestamp`in the DRAFT version of this integration. It then performs the same action as the CreateDraftIntegrationVersion (i.e., copies the DRAFT version of the integration as a SNAPSHOT and then creates a new DRAFT version with the `locked_by` set to the `user_taking_over` and the `locked_at_timestamp` set to the current timestamp). Both the `locked_by` and `user_taking_over` are notified via email about the takeover. This RPC throws an exception if the integration is not in DRAFT status or if the `locked_by` and `locked_at_timestamp` fields are not set.The TakeoverEdit lock is treated the same as an edit of the integration, and hence shares ACLs with edit. Audit fields updated include last_modified_timestamp, last_modified_by.
     */
    integrationsProjectsLocationsProductsIntegrationsVersionsTakeoverEditLock(req: operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsTakeoverEditLockRequest, security: operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsTakeoverEditLockSecurity, config?: AxiosRequestConfig): Promise<operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsTakeoverEditLockResponse>;
    /**
     * Sets the status of the ACTIVE integration to SNAPSHOT with a new tag "PREVIOUSLY_PUBLISHED" after validating it. The "HEAD" and "PUBLISH_REQUESTED" tags do not change. This RPC throws an exception if the version being snapshot is not ACTIVE. Audit fields added include action, action_by, action_timestamp.
     */
    integrationsProjectsLocationsProductsIntegrationsVersionsUnpublish(req: operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsUnpublishRequest, security: operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsUnpublishSecurity, config?: AxiosRequestConfig): Promise<operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsUnpublishResponse>;
    /**
     * Uploads an integration. The content can be a previously downloaded integration. Performs the same function as CreateDraftIntegrationVersion, but accepts input in a string format, which holds the complete representation of the IntegrationVersion content.
     */
    integrationsProjectsLocationsProductsIntegrationsVersionsUpload(req: operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsUploadRequest, security: operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsUploadSecurity, config?: AxiosRequestConfig): Promise<operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsUploadResponse>;
    /**
     * Creates an sfdc instance record. Store the sfdc instance in Spanner. Returns the sfdc instance.
     */
    integrationsProjectsLocationsSfdcInstancesCreate(req: operations.IntegrationsProjectsLocationsSfdcInstancesCreateRequest, security: operations.IntegrationsProjectsLocationsSfdcInstancesCreateSecurity, config?: AxiosRequestConfig): Promise<operations.IntegrationsProjectsLocationsSfdcInstancesCreateResponse>;
    /**
     * Lists all sfdc instances that match the filter. Restrict to sfdc instances belonging to the current client only.
     */
    integrationsProjectsLocationsSfdcInstancesList(req: operations.IntegrationsProjectsLocationsSfdcInstancesListRequest, security: operations.IntegrationsProjectsLocationsSfdcInstancesListSecurity, config?: AxiosRequestConfig): Promise<operations.IntegrationsProjectsLocationsSfdcInstancesListResponse>;
    /**
     * Creates an sfdc channel record. Store the sfdc channel in Spanner. Returns the sfdc channel.
     */
    integrationsProjectsLocationsSfdcInstancesSfdcChannelsCreate(req: operations.IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsCreateRequest, security: operations.IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsCreateResponse>;
    /**
     * Deletes an sfdc channel.
     */
    integrationsProjectsLocationsSfdcInstancesSfdcChannelsDelete(req: operations.IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsDeleteRequest, security: operations.IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsDeleteResponse>;
    /**
     * Gets an sfdc channel. If the channel doesn't exist, Code.NOT_FOUND exception will be thrown.
     */
    integrationsProjectsLocationsSfdcInstancesSfdcChannelsGet(req: operations.IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsGetRequest, security: operations.IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsGetSecurity, config?: AxiosRequestConfig): Promise<operations.IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsGetResponse>;
    /**
     * Lists all sfdc channels that match the filter. Restrict to sfdc channels belonging to the current client only.
     */
    integrationsProjectsLocationsSfdcInstancesSfdcChannelsList(req: operations.IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsListRequest, security: operations.IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsListSecurity, config?: AxiosRequestConfig): Promise<operations.IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsListResponse>;
    /**
     * Updates an sfdc channel. Updates the sfdc channel in spanner. Returns the sfdc channel.
     */
    integrationsProjectsLocationsSfdcInstancesSfdcChannelsPatch(req: operations.IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsPatchRequest, security: operations.IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsPatchSecurity, config?: AxiosRequestConfig): Promise<operations.IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsPatchResponse>;
}
