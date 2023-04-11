import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://preview.twilio.com"];
/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;
    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
};
/**
 * This is the public Twilio REST API.
 */
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
    /**
     * Enroll a new Certificate credential to the Fleet, optionally giving it a friendly name and assigning to a Device.
     */
    createDeployedDevicesCertificate(req: operations.CreateDeployedDevicesCertificateRequest, security: operations.CreateDeployedDevicesCertificateSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreateDeployedDevicesCertificateResponse>;
    /**
     * Create a new Deployment in the Fleet, optionally giving it a friendly name and linking to a specific Twilio Sync service instance.
     */
    createDeployedDevicesDeployment(req: operations.CreateDeployedDevicesDeploymentRequest, security: operations.CreateDeployedDevicesDeploymentSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreateDeployedDevicesDeploymentResponse>;
    /**
     * Create a new Device in the Fleet, optionally giving it a unique name, friendly name, and assigning to a Deployment and/or human identity.
     */
    createDeployedDevicesDevice(req: operations.CreateDeployedDevicesDeviceRequest, security: operations.CreateDeployedDevicesDeviceSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreateDeployedDevicesDeviceResponse>;
    /**
     * Create a new Fleet for scoping of deployed devices within your account.
     */
    createDeployedDevicesFleet(req: operations.CreateDeployedDevicesFleetCreateDeployedDevicesFleetRequest, security: operations.CreateDeployedDevicesFleetSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreateDeployedDevicesFleetResponse>;
    /**
     * Create a new Key credential in the Fleet, optionally giving it a friendly name and assigning to a Device.
     */
    createDeployedDevicesKey(req: operations.CreateDeployedDevicesKeyRequest, security: operations.CreateDeployedDevicesKeySecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreateDeployedDevicesKeyResponse>;
    /**
     * Create an AuthorizationDocument for authorizing the hosting of phone number capabilities on Twilio's platform.
     */
    createHostedNumbersAuthorizationDocument(req: operations.CreateHostedNumbersAuthorizationDocumentCreateHostedNumbersAuthorizationDocumentRequest, security: operations.CreateHostedNumbersAuthorizationDocumentSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreateHostedNumbersAuthorizationDocumentResponse>;
    /**
     * Host a phone number's capability on Twilio's platform.
     */
    createHostedNumbersHostedNumberOrder(req: operations.CreateHostedNumbersHostedNumberOrderCreateHostedNumbersHostedNumberOrderRequest, security: operations.CreateHostedNumbersHostedNumberOrderSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreateHostedNumbersHostedNumberOrderResponse>;
    /**
     * Install an Add-on for the Account specified.
     */
    createMarketplaceInstalledAddOn(req: operations.CreateMarketplaceInstalledAddOnCreateMarketplaceInstalledAddOnRequest, security: operations.CreateMarketplaceInstalledAddOnSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreateMarketplaceInstalledAddOnResponse>;
    createSyncDocument(req: operations.CreateSyncDocumentRequest, security: operations.CreateSyncDocumentSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreateSyncDocumentResponse>;
    createSyncService(req: operations.CreateSyncServiceCreateSyncServiceRequest, security: operations.CreateSyncServiceSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreateSyncServiceResponse>;
    createSyncSyncList(req: operations.CreateSyncSyncListRequest, security: operations.CreateSyncSyncListSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreateSyncSyncListResponse>;
    createSyncSyncListItem(req: operations.CreateSyncSyncListItemRequest, security: operations.CreateSyncSyncListItemSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreateSyncSyncListItemResponse>;
    createSyncSyncMap(req: operations.CreateSyncSyncMapRequest, security: operations.CreateSyncSyncMapSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreateSyncSyncMapResponse>;
    createSyncSyncMapItem(req: operations.CreateSyncSyncMapItemRequest, security: operations.CreateSyncSyncMapItemSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreateSyncSyncMapItemResponse>;
    createUnderstandAssistant(req: operations.CreateUnderstandAssistantCreateUnderstandAssistantRequest, security: operations.CreateUnderstandAssistantSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreateUnderstandAssistantResponse>;
    createUnderstandField(req: operations.CreateUnderstandFieldRequest, security: operations.CreateUnderstandFieldSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreateUnderstandFieldResponse>;
    createUnderstandFieldType(req: operations.CreateUnderstandFieldTypeRequest, security: operations.CreateUnderstandFieldTypeSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreateUnderstandFieldTypeResponse>;
    createUnderstandFieldValue(req: operations.CreateUnderstandFieldValueRequest, security: operations.CreateUnderstandFieldValueSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreateUnderstandFieldValueResponse>;
    createUnderstandModelBuild(req: operations.CreateUnderstandModelBuildRequest, security: operations.CreateUnderstandModelBuildSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreateUnderstandModelBuildResponse>;
    createUnderstandQuery(req: operations.CreateUnderstandQueryRequest, security: operations.CreateUnderstandQuerySecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreateUnderstandQueryResponse>;
    createUnderstandSample(req: operations.CreateUnderstandSampleRequest, security: operations.CreateUnderstandSampleSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreateUnderstandSampleResponse>;
    createUnderstandTask(req: operations.CreateUnderstandTaskRequest, security: operations.CreateUnderstandTaskSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreateUnderstandTaskResponse>;
    createWirelessCommand(req: operations.CreateWirelessCommandCreateWirelessCommandRequest, security: operations.CreateWirelessCommandSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreateWirelessCommandResponse>;
    createWirelessRatePlan(req: operations.CreateWirelessRatePlanCreateWirelessRatePlanRequest, security: operations.CreateWirelessRatePlanSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreateWirelessRatePlanResponse>;
    /**
     * Unregister a specific Certificate credential from the Fleet, effectively disallowing any inbound client connections that are presenting it.
     */
    deleteDeployedDevicesCertificate(req: operations.DeleteDeployedDevicesCertificateRequest, security: operations.DeleteDeployedDevicesCertificateSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.DeleteDeployedDevicesCertificateResponse>;
    /**
     * Delete a specific Deployment from the Fleet, leaving associated devices effectively undeployed.
     */
    deleteDeployedDevicesDeployment(req: operations.DeleteDeployedDevicesDeploymentRequest, security: operations.DeleteDeployedDevicesDeploymentSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.DeleteDeployedDevicesDeploymentResponse>;
    /**
     * Delete a specific Device from the Fleet, also removing it from associated Deployments.
     */
    deleteDeployedDevicesDevice(req: operations.DeleteDeployedDevicesDeviceRequest, security: operations.DeleteDeployedDevicesDeviceSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.DeleteDeployedDevicesDeviceResponse>;
    /**
     * Delete a specific Fleet from your account, also destroys all nested resources: Devices, Deployments, Certificates, Keys.
     */
    deleteDeployedDevicesFleet(req: operations.DeleteDeployedDevicesFleetRequest, security: operations.DeleteDeployedDevicesFleetSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.DeleteDeployedDevicesFleetResponse>;
    /**
     * Delete a specific Key credential from the Fleet, effectively disallowing any inbound client connections that are presenting it.
     */
    deleteDeployedDevicesKey(req: operations.DeleteDeployedDevicesKeyRequest, security: operations.DeleteDeployedDevicesKeySecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.DeleteDeployedDevicesKeyResponse>;
    /**
     * Cancel the HostedNumberOrder (only available when the status is in `received`).
     */
    deleteHostedNumbersHostedNumberOrder(req: operations.DeleteHostedNumbersHostedNumberOrderRequest, security: operations.DeleteHostedNumbersHostedNumberOrderSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.DeleteHostedNumbersHostedNumberOrderResponse>;
    /**
     * Remove an Add-on installation from your account
     */
    deleteMarketplaceInstalledAddOn(req: operations.DeleteMarketplaceInstalledAddOnRequest, security: operations.DeleteMarketplaceInstalledAddOnSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.DeleteMarketplaceInstalledAddOnResponse>;
    deleteSyncDocument(req: operations.DeleteSyncDocumentRequest, security: operations.DeleteSyncDocumentSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.DeleteSyncDocumentResponse>;
    /**
     * Delete a specific Sync Document Permission.
     */
    deleteSyncDocumentPermission(req: operations.DeleteSyncDocumentPermissionRequest, security: operations.DeleteSyncDocumentPermissionSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.DeleteSyncDocumentPermissionResponse>;
    deleteSyncService(req: operations.DeleteSyncServiceRequest, security: operations.DeleteSyncServiceSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.DeleteSyncServiceResponse>;
    deleteSyncSyncList(req: operations.DeleteSyncSyncListRequest, security: operations.DeleteSyncSyncListSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.DeleteSyncSyncListResponse>;
    deleteSyncSyncListItem(req: operations.DeleteSyncSyncListItemRequest, security: operations.DeleteSyncSyncListItemSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.DeleteSyncSyncListItemResponse>;
    /**
     * Delete a specific Sync List Permission.
     */
    deleteSyncSyncListPermission(req: operations.DeleteSyncSyncListPermissionRequest, security: operations.DeleteSyncSyncListPermissionSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.DeleteSyncSyncListPermissionResponse>;
    deleteSyncSyncMap(req: operations.DeleteSyncSyncMapRequest, security: operations.DeleteSyncSyncMapSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.DeleteSyncSyncMapResponse>;
    deleteSyncSyncMapItem(req: operations.DeleteSyncSyncMapItemRequest, security: operations.DeleteSyncSyncMapItemSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.DeleteSyncSyncMapItemResponse>;
    /**
     * Delete a specific Sync Map Permission.
     */
    deleteSyncSyncMapPermission(req: operations.DeleteSyncSyncMapPermissionRequest, security: operations.DeleteSyncSyncMapPermissionSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.DeleteSyncSyncMapPermissionResponse>;
    deleteUnderstandAssistant(req: operations.DeleteUnderstandAssistantRequest, security: operations.DeleteUnderstandAssistantSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.DeleteUnderstandAssistantResponse>;
    deleteUnderstandField(req: operations.DeleteUnderstandFieldRequest, security: operations.DeleteUnderstandFieldSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.DeleteUnderstandFieldResponse>;
    deleteUnderstandFieldType(req: operations.DeleteUnderstandFieldTypeRequest, security: operations.DeleteUnderstandFieldTypeSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.DeleteUnderstandFieldTypeResponse>;
    deleteUnderstandFieldValue(req: operations.DeleteUnderstandFieldValueRequest, security: operations.DeleteUnderstandFieldValueSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.DeleteUnderstandFieldValueResponse>;
    deleteUnderstandModelBuild(req: operations.DeleteUnderstandModelBuildRequest, security: operations.DeleteUnderstandModelBuildSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.DeleteUnderstandModelBuildResponse>;
    deleteUnderstandQuery(req: operations.DeleteUnderstandQueryRequest, security: operations.DeleteUnderstandQuerySecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.DeleteUnderstandQueryResponse>;
    deleteUnderstandSample(req: operations.DeleteUnderstandSampleRequest, security: operations.DeleteUnderstandSampleSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.DeleteUnderstandSampleResponse>;
    deleteUnderstandTask(req: operations.DeleteUnderstandTaskRequest, security: operations.DeleteUnderstandTaskSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.DeleteUnderstandTaskResponse>;
    deleteWirelessRatePlan(req: operations.DeleteWirelessRatePlanRequest, security: operations.DeleteWirelessRatePlanSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.DeleteWirelessRatePlanResponse>;
    /**
     * Fetch information about a specific Certificate credential in the Fleet.
     */
    fetchDeployedDevicesCertificate(req: operations.FetchDeployedDevicesCertificateRequest, security: operations.FetchDeployedDevicesCertificateSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchDeployedDevicesCertificateResponse>;
    /**
     * Fetch information about a specific Deployment in the Fleet.
     */
    fetchDeployedDevicesDeployment(req: operations.FetchDeployedDevicesDeploymentRequest, security: operations.FetchDeployedDevicesDeploymentSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchDeployedDevicesDeploymentResponse>;
    /**
     * Fetch information about a specific Device in the Fleet.
     */
    fetchDeployedDevicesDevice(req: operations.FetchDeployedDevicesDeviceRequest, security: operations.FetchDeployedDevicesDeviceSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchDeployedDevicesDeviceResponse>;
    /**
     * Fetch information about a specific Fleet in your account.
     */
    fetchDeployedDevicesFleet(req: operations.FetchDeployedDevicesFleetRequest, security: operations.FetchDeployedDevicesFleetSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchDeployedDevicesFleetResponse>;
    /**
     * Fetch information about a specific Key credential in the Fleet.
     */
    fetchDeployedDevicesKey(req: operations.FetchDeployedDevicesKeyRequest, security: operations.FetchDeployedDevicesKeySecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchDeployedDevicesKeyResponse>;
    /**
     * Fetch a specific AuthorizationDocument.
     */
    fetchHostedNumbersAuthorizationDocument(req: operations.FetchHostedNumbersAuthorizationDocumentRequest, security: operations.FetchHostedNumbersAuthorizationDocumentSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchHostedNumbersAuthorizationDocumentResponse>;
    /**
     * Fetch a specific HostedNumberOrder.
     */
    fetchHostedNumbersHostedNumberOrder(req: operations.FetchHostedNumbersHostedNumberOrderRequest, security: operations.FetchHostedNumbersHostedNumberOrderSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchHostedNumbersHostedNumberOrderResponse>;
    /**
     * Fetch an instance of an Add-on currently available to be installed.
     */
    fetchMarketplaceAvailableAddOn(req: operations.FetchMarketplaceAvailableAddOnRequest, security: operations.FetchMarketplaceAvailableAddOnSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchMarketplaceAvailableAddOnResponse>;
    /**
     * Fetch an instance of an Extension for the Available Add-on.
     */
    fetchMarketplaceAvailableAddOnExtension(req: operations.FetchMarketplaceAvailableAddOnExtensionRequest, security: operations.FetchMarketplaceAvailableAddOnExtensionSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchMarketplaceAvailableAddOnExtensionResponse>;
    /**
     * Fetch an instance of an Add-on currently installed on this Account.
     */
    fetchMarketplaceInstalledAddOn(req: operations.FetchMarketplaceInstalledAddOnRequest, security: operations.FetchMarketplaceInstalledAddOnSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchMarketplaceInstalledAddOnResponse>;
    /**
     * Fetch an instance of an Extension for the Installed Add-on.
     */
    fetchMarketplaceInstalledAddOnExtension(req: operations.FetchMarketplaceInstalledAddOnExtensionRequest, security: operations.FetchMarketplaceInstalledAddOnExtensionSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchMarketplaceInstalledAddOnExtensionResponse>;
    fetchSyncDocument(req: operations.FetchSyncDocumentRequest, security: operations.FetchSyncDocumentSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchSyncDocumentResponse>;
    /**
     * Fetch a specific Sync Document Permission.
     */
    fetchSyncDocumentPermission(req: operations.FetchSyncDocumentPermissionRequest, security: operations.FetchSyncDocumentPermissionSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchSyncDocumentPermissionResponse>;
    fetchSyncService(req: operations.FetchSyncServiceRequest, security: operations.FetchSyncServiceSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchSyncServiceResponse>;
    fetchSyncSyncList(req: operations.FetchSyncSyncListRequest, security: operations.FetchSyncSyncListSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchSyncSyncListResponse>;
    fetchSyncSyncListItem(req: operations.FetchSyncSyncListItemRequest, security: operations.FetchSyncSyncListItemSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchSyncSyncListItemResponse>;
    /**
     * Fetch a specific Sync List Permission.
     */
    fetchSyncSyncListPermission(req: operations.FetchSyncSyncListPermissionRequest, security: operations.FetchSyncSyncListPermissionSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchSyncSyncListPermissionResponse>;
    fetchSyncSyncMap(req: operations.FetchSyncSyncMapRequest, security: operations.FetchSyncSyncMapSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchSyncSyncMapResponse>;
    fetchSyncSyncMapItem(req: operations.FetchSyncSyncMapItemRequest, security: operations.FetchSyncSyncMapItemSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchSyncSyncMapItemResponse>;
    /**
     * Fetch a specific Sync Map Permission.
     */
    fetchSyncSyncMapPermission(req: operations.FetchSyncSyncMapPermissionRequest, security: operations.FetchSyncSyncMapPermissionSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchSyncSyncMapPermissionResponse>;
    fetchUnderstandAssistant(req: operations.FetchUnderstandAssistantRequest, security: operations.FetchUnderstandAssistantSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchUnderstandAssistantResponse>;
    fetchUnderstandAssistantFallbackActions(req: operations.FetchUnderstandAssistantFallbackActionsRequest, security: operations.FetchUnderstandAssistantFallbackActionsSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchUnderstandAssistantFallbackActionsResponse>;
    fetchUnderstandAssistantInitiationActions(req: operations.FetchUnderstandAssistantInitiationActionsRequest, security: operations.FetchUnderstandAssistantInitiationActionsSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchUnderstandAssistantInitiationActionsResponse>;
    fetchUnderstandDialogue(req: operations.FetchUnderstandDialogueRequest, security: operations.FetchUnderstandDialogueSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchUnderstandDialogueResponse>;
    fetchUnderstandField(req: operations.FetchUnderstandFieldRequest, security: operations.FetchUnderstandFieldSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchUnderstandFieldResponse>;
    fetchUnderstandFieldType(req: operations.FetchUnderstandFieldTypeRequest, security: operations.FetchUnderstandFieldTypeSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchUnderstandFieldTypeResponse>;
    fetchUnderstandFieldValue(req: operations.FetchUnderstandFieldValueRequest, security: operations.FetchUnderstandFieldValueSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchUnderstandFieldValueResponse>;
    fetchUnderstandModelBuild(req: operations.FetchUnderstandModelBuildRequest, security: operations.FetchUnderstandModelBuildSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchUnderstandModelBuildResponse>;
    fetchUnderstandQuery(req: operations.FetchUnderstandQueryRequest, security: operations.FetchUnderstandQuerySecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchUnderstandQueryResponse>;
    fetchUnderstandSample(req: operations.FetchUnderstandSampleRequest, security: operations.FetchUnderstandSampleSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchUnderstandSampleResponse>;
    /**
     * Returns Style sheet JSON object for this Assistant
     */
    fetchUnderstandStyleSheet(req: operations.FetchUnderstandStyleSheetRequest, security: operations.FetchUnderstandStyleSheetSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchUnderstandStyleSheetResponse>;
    fetchUnderstandTask(req: operations.FetchUnderstandTaskRequest, security: operations.FetchUnderstandTaskSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchUnderstandTaskResponse>;
    /**
     * Returns JSON actions for this Task.
     */
    fetchUnderstandTaskActions(req: operations.FetchUnderstandTaskActionsRequest, security: operations.FetchUnderstandTaskActionsSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchUnderstandTaskActionsResponse>;
    fetchUnderstandTaskStatistics(req: operations.FetchUnderstandTaskStatisticsRequest, security: operations.FetchUnderstandTaskStatisticsSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchUnderstandTaskStatisticsResponse>;
    fetchWirelessCommand(req: operations.FetchWirelessCommandRequest, security: operations.FetchWirelessCommandSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchWirelessCommandResponse>;
    fetchWirelessRatePlan(req: operations.FetchWirelessRatePlanRequest, security: operations.FetchWirelessRatePlanSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchWirelessRatePlanResponse>;
    fetchWirelessSim(req: operations.FetchWirelessSimRequest, security: operations.FetchWirelessSimSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchWirelessSimResponse>;
    fetchWirelessUsage(req: operations.FetchWirelessUsageRequest, security: operations.FetchWirelessUsageSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchWirelessUsageResponse>;
    /**
     * Retrieve a list of all Certificate credentials belonging to the Fleet.
     */
    listDeployedDevicesCertificate(req: operations.ListDeployedDevicesCertificateRequest, security: operations.ListDeployedDevicesCertificateSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListDeployedDevicesCertificateResponse>;
    /**
     * Retrieve a list of all Deployments belonging to the Fleet.
     */
    listDeployedDevicesDeployment(req: operations.ListDeployedDevicesDeploymentRequest, security: operations.ListDeployedDevicesDeploymentSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListDeployedDevicesDeploymentResponse>;
    /**
     * Retrieve a list of all Devices belonging to the Fleet.
     */
    listDeployedDevicesDevice(req: operations.ListDeployedDevicesDeviceRequest, security: operations.ListDeployedDevicesDeviceSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListDeployedDevicesDeviceResponse>;
    /**
     * Retrieve a list of all Fleets belonging to your account.
     */
    listDeployedDevicesFleet(req: operations.ListDeployedDevicesFleetRequest, security: operations.ListDeployedDevicesFleetSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListDeployedDevicesFleetResponse>;
    /**
     * Retrieve a list of all Keys credentials belonging to the Fleet.
     */
    listDeployedDevicesKey(req: operations.ListDeployedDevicesKeyRequest, security: operations.ListDeployedDevicesKeySecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListDeployedDevicesKeyResponse>;
    /**
     * Retrieve a list of AuthorizationDocuments belonging to the account initiating the request.
     */
    listHostedNumbersAuthorizationDocument(req: operations.ListHostedNumbersAuthorizationDocumentRequest, security: operations.ListHostedNumbersAuthorizationDocumentSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListHostedNumbersAuthorizationDocumentResponse>;
    /**
     * Retrieve a list of dependent HostedNumberOrders belonging to the AuthorizationDocument.
     */
    listHostedNumbersDependentHostedNumberOrder(req: operations.ListHostedNumbersDependentHostedNumberOrderRequest, security: operations.ListHostedNumbersDependentHostedNumberOrderSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListHostedNumbersDependentHostedNumberOrderResponse>;
    /**
     * Retrieve a list of HostedNumberOrders belonging to the account initiating the request.
     */
    listHostedNumbersHostedNumberOrder(req: operations.ListHostedNumbersHostedNumberOrderRequest, security: operations.ListHostedNumbersHostedNumberOrderSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListHostedNumbersHostedNumberOrderResponse>;
    /**
     * Retrieve a list of Add-ons currently available to be installed.
     */
    listMarketplaceAvailableAddOn(req: operations.ListMarketplaceAvailableAddOnRequest, security: operations.ListMarketplaceAvailableAddOnSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListMarketplaceAvailableAddOnResponse>;
    /**
     * Retrieve a list of Extensions for the Available Add-on.
     */
    listMarketplaceAvailableAddOnExtension(req: operations.ListMarketplaceAvailableAddOnExtensionRequest, security: operations.ListMarketplaceAvailableAddOnExtensionSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListMarketplaceAvailableAddOnExtensionResponse>;
    /**
     * Retrieve a list of Add-ons currently installed on this Account.
     */
    listMarketplaceInstalledAddOn(req: operations.ListMarketplaceInstalledAddOnRequest, security: operations.ListMarketplaceInstalledAddOnSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListMarketplaceInstalledAddOnResponse>;
    /**
     * Retrieve a list of Extensions for the Installed Add-on.
     */
    listMarketplaceInstalledAddOnExtension(req: operations.ListMarketplaceInstalledAddOnExtensionRequest, security: operations.ListMarketplaceInstalledAddOnExtensionSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListMarketplaceInstalledAddOnExtensionResponse>;
    listSyncDocument(req: operations.ListSyncDocumentRequest, security: operations.ListSyncDocumentSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListSyncDocumentResponse>;
    /**
     * Retrieve a list of all Permissions applying to a Sync Document.
     */
    listSyncDocumentPermission(req: operations.ListSyncDocumentPermissionRequest, security: operations.ListSyncDocumentPermissionSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListSyncDocumentPermissionResponse>;
    listSyncService(req: operations.ListSyncServiceRequest, security: operations.ListSyncServiceSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListSyncServiceResponse>;
    listSyncSyncList(req: operations.ListSyncSyncListRequest, security: operations.ListSyncSyncListSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListSyncSyncListResponse>;
    listSyncSyncListItem(req: operations.ListSyncSyncListItemRequest, security: operations.ListSyncSyncListItemSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListSyncSyncListItemResponse>;
    /**
     * Retrieve a list of all Permissions applying to a Sync List.
     */
    listSyncSyncListPermission(req: operations.ListSyncSyncListPermissionRequest, security: operations.ListSyncSyncListPermissionSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListSyncSyncListPermissionResponse>;
    listSyncSyncMap(req: operations.ListSyncSyncMapRequest, security: operations.ListSyncSyncMapSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListSyncSyncMapResponse>;
    listSyncSyncMapItem(req: operations.ListSyncSyncMapItemRequest, security: operations.ListSyncSyncMapItemSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListSyncSyncMapItemResponse>;
    /**
     * Retrieve a list of all Permissions applying to a Sync Map.
     */
    listSyncSyncMapPermission(req: operations.ListSyncSyncMapPermissionRequest, security: operations.ListSyncSyncMapPermissionSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListSyncSyncMapPermissionResponse>;
    listUnderstandAssistant(req: operations.ListUnderstandAssistantRequest, security: operations.ListUnderstandAssistantSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListUnderstandAssistantResponse>;
    listUnderstandField(req: operations.ListUnderstandFieldRequest, security: operations.ListUnderstandFieldSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListUnderstandFieldResponse>;
    listUnderstandFieldType(req: operations.ListUnderstandFieldTypeRequest, security: operations.ListUnderstandFieldTypeSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListUnderstandFieldTypeResponse>;
    listUnderstandFieldValue(req: operations.ListUnderstandFieldValueRequest, security: operations.ListUnderstandFieldValueSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListUnderstandFieldValueResponse>;
    listUnderstandModelBuild(req: operations.ListUnderstandModelBuildRequest, security: operations.ListUnderstandModelBuildSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListUnderstandModelBuildResponse>;
    listUnderstandQuery(req: operations.ListUnderstandQueryRequest, security: operations.ListUnderstandQuerySecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListUnderstandQueryResponse>;
    listUnderstandSample(req: operations.ListUnderstandSampleRequest, security: operations.ListUnderstandSampleSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListUnderstandSampleResponse>;
    listUnderstandTask(req: operations.ListUnderstandTaskRequest, security: operations.ListUnderstandTaskSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListUnderstandTaskResponse>;
    listWirelessCommand(req: operations.ListWirelessCommandRequest, security: operations.ListWirelessCommandSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListWirelessCommandResponse>;
    listWirelessRatePlan(req: operations.ListWirelessRatePlanRequest, security: operations.ListWirelessRatePlanSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListWirelessRatePlanResponse>;
    listWirelessSim(req: operations.ListWirelessSimRequest, security: operations.ListWirelessSimSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListWirelessSimResponse>;
    /**
     * Update the given properties of a specific Certificate credential in the Fleet, giving it a friendly name or assigning to a Device.
     */
    updateDeployedDevicesCertificate(req: operations.UpdateDeployedDevicesCertificateRequest, security: operations.UpdateDeployedDevicesCertificateSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.UpdateDeployedDevicesCertificateResponse>;
    /**
     * Update the given properties of a specific Deployment credential in the Fleet, giving it a friendly name or linking to a specific Twilio Sync service instance.
     */
    updateDeployedDevicesDeployment(req: operations.UpdateDeployedDevicesDeploymentRequest, security: operations.UpdateDeployedDevicesDeploymentSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.UpdateDeployedDevicesDeploymentResponse>;
    /**
     * Update the given properties of a specific Device in the Fleet, giving it a friendly name, assigning to a Deployment, or a human identity.
     */
    updateDeployedDevicesDevice(req: operations.UpdateDeployedDevicesDeviceRequest, security: operations.UpdateDeployedDevicesDeviceSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.UpdateDeployedDevicesDeviceResponse>;
    /**
     * Update the friendly name property of a specific Fleet in your account.
     */
    updateDeployedDevicesFleet(req: operations.UpdateDeployedDevicesFleetRequest, security: operations.UpdateDeployedDevicesFleetSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.UpdateDeployedDevicesFleetResponse>;
    /**
     * Update the given properties of a specific Key credential in the Fleet, giving it a friendly name or assigning to a Device.
     */
    updateDeployedDevicesKey(req: operations.UpdateDeployedDevicesKeyRequest, security: operations.UpdateDeployedDevicesKeySecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.UpdateDeployedDevicesKeyResponse>;
    /**
     * Updates a specific AuthorizationDocument.
     */
    updateHostedNumbersAuthorizationDocument(req: operations.UpdateHostedNumbersAuthorizationDocumentRequest, security: operations.UpdateHostedNumbersAuthorizationDocumentSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.UpdateHostedNumbersAuthorizationDocumentResponse>;
    /**
     * Updates a specific HostedNumberOrder.
     */
    updateHostedNumbersHostedNumberOrder(req: operations.UpdateHostedNumbersHostedNumberOrderRequest, security: operations.UpdateHostedNumbersHostedNumberOrderSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.UpdateHostedNumbersHostedNumberOrderResponse>;
    /**
     * Update an Add-on installation for the Account specified.
     */
    updateMarketplaceInstalledAddOn(req: operations.UpdateMarketplaceInstalledAddOnRequest, security: operations.UpdateMarketplaceInstalledAddOnSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.UpdateMarketplaceInstalledAddOnResponse>;
    /**
     * Update an Extension for an Add-on installation.
     */
    updateMarketplaceInstalledAddOnExtension(req: operations.UpdateMarketplaceInstalledAddOnExtensionRequest, security: operations.UpdateMarketplaceInstalledAddOnExtensionSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.UpdateMarketplaceInstalledAddOnExtensionResponse>;
    updateSyncDocument(req: operations.UpdateSyncDocumentRequest, security: operations.UpdateSyncDocumentSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.UpdateSyncDocumentResponse>;
    /**
     * Update an identity's access to a specific Sync Document.
     */
    updateSyncDocumentPermission(req: operations.UpdateSyncDocumentPermissionRequest, security: operations.UpdateSyncDocumentPermissionSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.UpdateSyncDocumentPermissionResponse>;
    updateSyncService(req: operations.UpdateSyncServiceRequest, security: operations.UpdateSyncServiceSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.UpdateSyncServiceResponse>;
    updateSyncSyncListItem(req: operations.UpdateSyncSyncListItemRequest, security: operations.UpdateSyncSyncListItemSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.UpdateSyncSyncListItemResponse>;
    /**
     * Update an identity's access to a specific Sync List.
     */
    updateSyncSyncListPermission(req: operations.UpdateSyncSyncListPermissionRequest, security: operations.UpdateSyncSyncListPermissionSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.UpdateSyncSyncListPermissionResponse>;
    updateSyncSyncMapItem(req: operations.UpdateSyncSyncMapItemRequest, security: operations.UpdateSyncSyncMapItemSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.UpdateSyncSyncMapItemResponse>;
    /**
     * Update an identity's access to a specific Sync Map.
     */
    updateSyncSyncMapPermission(req: operations.UpdateSyncSyncMapPermissionRequest, security: operations.UpdateSyncSyncMapPermissionSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.UpdateSyncSyncMapPermissionResponse>;
    updateUnderstandAssistant(req: operations.UpdateUnderstandAssistantRequest, security: operations.UpdateUnderstandAssistantSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.UpdateUnderstandAssistantResponse>;
    updateUnderstandAssistantFallbackActions(req: operations.UpdateUnderstandAssistantFallbackActionsRequest, security: operations.UpdateUnderstandAssistantFallbackActionsSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.UpdateUnderstandAssistantFallbackActionsResponse>;
    updateUnderstandAssistantInitiationActions(req: operations.UpdateUnderstandAssistantInitiationActionsRequest, security: operations.UpdateUnderstandAssistantInitiationActionsSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.UpdateUnderstandAssistantInitiationActionsResponse>;
    updateUnderstandFieldType(req: operations.UpdateUnderstandFieldTypeRequest, security: operations.UpdateUnderstandFieldTypeSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.UpdateUnderstandFieldTypeResponse>;
    updateUnderstandModelBuild(req: operations.UpdateUnderstandModelBuildRequest, security: operations.UpdateUnderstandModelBuildSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.UpdateUnderstandModelBuildResponse>;
    updateUnderstandQuery(req: operations.UpdateUnderstandQueryRequest, security: operations.UpdateUnderstandQuerySecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.UpdateUnderstandQueryResponse>;
    updateUnderstandSample(req: operations.UpdateUnderstandSampleRequest, security: operations.UpdateUnderstandSampleSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.UpdateUnderstandSampleResponse>;
    /**
     * Updates the style sheet for an assistant identified by {AssistantSid} or {AssistantUniqueName}.
     */
    updateUnderstandStyleSheet(req: operations.UpdateUnderstandStyleSheetRequest, security: operations.UpdateUnderstandStyleSheetSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.UpdateUnderstandStyleSheetResponse>;
    updateUnderstandTask(req: operations.UpdateUnderstandTaskRequest, security: operations.UpdateUnderstandTaskSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.UpdateUnderstandTaskResponse>;
    /**
     * Updates the actions of an Task identified by {TaskSid} or {TaskUniqueName}.
     */
    updateUnderstandTaskActions(req: operations.UpdateUnderstandTaskActionsRequest, security: operations.UpdateUnderstandTaskActionsSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.UpdateUnderstandTaskActionsResponse>;
    updateWirelessRatePlan(req: operations.UpdateWirelessRatePlanRequest, security: operations.UpdateWirelessRatePlanSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.UpdateWirelessRatePlanResponse>;
    updateWirelessSim(req: operations.UpdateWirelessSimRequest, security: operations.UpdateWirelessSimSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.UpdateWirelessSimResponse>;
}
