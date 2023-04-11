import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Organizations {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Assign SM seats to a network
     *
     * @remarks
     * Assign SM seats to a network. This will increase the managed SM device limit of the network
     */
    assignOrganizationLicensesSeats(req: operations.AssignOrganizationLicensesSeatsRequest, config?: AxiosRequestConfig): Promise<operations.AssignOrganizationLicensesSeatsResponse>;
    /**
     * Claim a list of devices, licenses, and/or orders into an organization
     *
     * @remarks
     * Claim a list of devices, licenses, and/or orders into an organization. When claiming by order, all devices and licenses in the order will be claimed; licenses will be added to the organization and devices will be placed in the organization's inventory.
     */
    claimIntoOrganization(req: operations.ClaimIntoOrganizationRequest, config?: AxiosRequestConfig): Promise<operations.ClaimIntoOrganizationResponse>;
    /**
     * Claim a list of devices, licenses, and/or orders into an organization inventory
     *
     * @remarks
     * Claim a list of devices, licenses, and/or orders into an organization inventory. When claiming by order, all devices and licenses in the order will be claimed; licenses will be added to the organization and devices will be placed in the organization's inventory. Use /organizations/{organizationId}/inventory/release to release devices from an organization.
     */
    claimIntoOrganizationInventory(req: operations.ClaimIntoOrganizationInventoryRequest, config?: AxiosRequestConfig): Promise<operations.ClaimIntoOrganizationInventoryResponse>;
    /**
     * Create a new organization by cloning the addressed organization
     *
     * @remarks
     * Create a new organization by cloning the addressed organization
     */
    cloneOrganization(req: operations.CloneOrganizationRequest, config?: AxiosRequestConfig): Promise<operations.CloneOrganizationResponse>;
    /**
     * Combine multiple networks into a single network
     *
     * @remarks
     * Combine multiple networks into a single network
     */
    combineOrganizationNetworks(req: operations.CombineOrganizationNetworksRequest, config?: AxiosRequestConfig): Promise<operations.CombineOrganizationNetworksResponse>;
    /**
     * Create a new organization
     *
     * @remarks
     * Create a new organization
     */
    createOrganization(req: operations.CreateOrganizationRequestBody, config?: AxiosRequestConfig): Promise<operations.CreateOrganizationResponse>;
    /**
     * Create an action batch
     *
     * @remarks
     * Create an action batch
     */
    createOrganizationActionBatch(req: operations.CreateOrganizationActionBatchRequest, config?: AxiosRequestConfig): Promise<operations.CreateOrganizationActionBatchResponse>;
    /**
     * Creates new adaptive policy ACL
     *
     * @remarks
     * Creates new adaptive policy ACL
     */
    createOrganizationAdaptivePolicyAcl(req: operations.CreateOrganizationAdaptivePolicyAclRequest, config?: AxiosRequestConfig): Promise<operations.CreateOrganizationAdaptivePolicyAclResponse>;
    /**
     * Creates a new adaptive policy group
     *
     * @remarks
     * Creates a new adaptive policy group
     */
    createOrganizationAdaptivePolicyGroup(req: operations.CreateOrganizationAdaptivePolicyGroupRequest, config?: AxiosRequestConfig): Promise<operations.CreateOrganizationAdaptivePolicyGroupResponse>;
    /**
     * Add an Adaptive Policy
     *
     * @remarks
     * Add an Adaptive Policy
     */
    createOrganizationAdaptivePolicyPolicy(req: operations.CreateOrganizationAdaptivePolicyPolicyRequest, config?: AxiosRequestConfig): Promise<operations.CreateOrganizationAdaptivePolicyPolicyResponse>;
    /**
     * Create a new dashboard administrator
     *
     * @remarks
     * Create a new dashboard administrator
     */
    createOrganizationAdmin(req: operations.CreateOrganizationAdminRequest, config?: AxiosRequestConfig): Promise<operations.CreateOrganizationAdminResponse>;
    /**
     * Create an organization-wide alert configuration
     *
     * @remarks
     * Create an organization-wide alert configuration
     */
    createOrganizationAlertsProfile(req: operations.CreateOrganizationAlertsProfileRequest, config?: AxiosRequestConfig): Promise<operations.CreateOrganizationAlertsProfileResponse>;
    /**
     * Add a new branding policy to an organization
     *
     * @remarks
     * Add a new branding policy to an organization
     */
    createOrganizationBrandingPolicy(req: operations.CreateOrganizationBrandingPolicyRequest, config?: AxiosRequestConfig): Promise<operations.CreateOrganizationBrandingPolicyResponse>;
    /**
     * Create a new configuration template
     *
     * @remarks
     * Create a new configuration template
     */
    createOrganizationConfigTemplate(req: operations.CreateOrganizationConfigTemplateRequest, config?: AxiosRequestConfig): Promise<operations.CreateOrganizationConfigTemplateResponse>;
    /**
     * Create a new early access feature opt-in for an organization
     *
     * @remarks
     * Create a new early access feature opt-in for an organization
     */
    createOrganizationEarlyAccessFeaturesOptIn(req: operations.CreateOrganizationEarlyAccessFeaturesOptInRequest, config?: AxiosRequestConfig): Promise<operations.CreateOrganizationEarlyAccessFeaturesOptInResponse>;
    /**
     * Imports event logs related to the onboarding app into elastisearch
     *
     * @remarks
     * Imports event logs related to the onboarding app into elastisearch
     */
    createOrganizationInventoryOnboardingCloudMonitoringExportEvent(req: operations.CreateOrganizationInventoryOnboardingCloudMonitoringExportEventRequest, config?: AxiosRequestConfig): Promise<operations.CreateOrganizationInventoryOnboardingCloudMonitoringExportEventResponse>;
    /**
     * Commits the import operation to complete the onboarding of a device into Dashboard for monitoring.
     *
     * @remarks
     * Commits the import operation to complete the onboarding of a device into Dashboard for monitoring.
     */
    createOrganizationInventoryOnboardingCloudMonitoringImport(req: operations.CreateOrganizationInventoryOnboardingCloudMonitoringImportRequest, config?: AxiosRequestConfig): Promise<operations.CreateOrganizationInventoryOnboardingCloudMonitoringImportResponse>;
    /**
     * Create a network
     *
     * @remarks
     * Create a network
     */
    createOrganizationNetwork(req: operations.CreateOrganizationNetworkRequest, config?: AxiosRequestConfig): Promise<operations.CreateOrganizationNetworkResponse>;
    /**
     * Creates a new Policy Object.
     *
     * @remarks
     * Creates a new Policy Object.
     */
    createOrganizationPolicyObject(req: operations.CreateOrganizationPolicyObjectRequest, config?: AxiosRequestConfig): Promise<operations.CreateOrganizationPolicyObjectResponse>;
    /**
     * Creates a new Policy Object Group.
     *
     * @remarks
     * Creates a new Policy Object Group.
     */
    createOrganizationPolicyObjectsGroup(req: operations.CreateOrganizationPolicyObjectsGroupRequest, config?: AxiosRequestConfig): Promise<operations.CreateOrganizationPolicyObjectsGroupResponse>;
    /**
     * Create a SAML IdP for your organization.
     *
     * @remarks
     * Create a SAML IdP for your organization.
     */
    createOrganizationSamlIdp(req: operations.CreateOrganizationSamlIdpRequest, config?: AxiosRequestConfig): Promise<operations.CreateOrganizationSamlIdpResponse>;
    /**
     * Create a SAML role
     *
     * @remarks
     * Create a SAML role
     */
    createOrganizationSamlRole(req: operations.CreateOrganizationSamlRoleRequest, config?: AxiosRequestConfig): Promise<operations.CreateOrganizationSamlRoleResponse>;
    /**
     * Delete an organization
     *
     * @remarks
     * Delete an organization
     */
    deleteOrganization(req: operations.DeleteOrganizationRequest, config?: AxiosRequestConfig): Promise<operations.DeleteOrganizationResponse>;
    /**
     * Delete an action batch
     *
     * @remarks
     * Delete an action batch
     */
    deleteOrganizationActionBatch(req: operations.DeleteOrganizationActionBatchRequest, config?: AxiosRequestConfig): Promise<operations.DeleteOrganizationActionBatchResponse>;
    /**
     * Deletes the specified adaptive policy ACL
     *
     * @remarks
     * Deletes the specified adaptive policy ACL. Note this adaptive policy ACL will also be removed from policies using it.
     */
    deleteOrganizationAdaptivePolicyAcl(req: operations.DeleteOrganizationAdaptivePolicyAclRequest, config?: AxiosRequestConfig): Promise<operations.DeleteOrganizationAdaptivePolicyAclResponse>;
    /**
     * Deletes the specified adaptive policy group and any associated policies and references
     *
     * @remarks
     * Deletes the specified adaptive policy group and any associated policies and references
     */
    deleteOrganizationAdaptivePolicyGroup(req: operations.DeleteOrganizationAdaptivePolicyGroupRequest, config?: AxiosRequestConfig): Promise<operations.DeleteOrganizationAdaptivePolicyGroupResponse>;
    /**
     * Delete an Adaptive Policy
     *
     * @remarks
     * Delete an Adaptive Policy
     */
    deleteOrganizationAdaptivePolicyPolicy(req: operations.DeleteOrganizationAdaptivePolicyPolicyRequest, config?: AxiosRequestConfig): Promise<operations.DeleteOrganizationAdaptivePolicyPolicyResponse>;
    /**
     * Revoke all access for a dashboard administrator within this organization
     *
     * @remarks
     * Revoke all access for a dashboard administrator within this organization
     */
    deleteOrganizationAdmin(req: operations.DeleteOrganizationAdminRequest, config?: AxiosRequestConfig): Promise<operations.DeleteOrganizationAdminResponse>;
    /**
     * Removes an organization-wide alert config
     *
     * @remarks
     * Removes an organization-wide alert config
     */
    deleteOrganizationAlertsProfile(req: operations.DeleteOrganizationAlertsProfileRequest, config?: AxiosRequestConfig): Promise<operations.DeleteOrganizationAlertsProfileResponse>;
    /**
     * Delete a branding policy
     *
     * @remarks
     * Delete a branding policy
     */
    deleteOrganizationBrandingPolicy(req: operations.DeleteOrganizationBrandingPolicyRequest, config?: AxiosRequestConfig): Promise<operations.DeleteOrganizationBrandingPolicyResponse>;
    /**
     * Remove a configuration template
     *
     * @remarks
     * Remove a configuration template
     */
    deleteOrganizationConfigTemplate(req: operations.DeleteOrganizationConfigTemplateRequest, config?: AxiosRequestConfig): Promise<operations.DeleteOrganizationConfigTemplateResponse>;
    /**
     * Delete an early access feature opt-in
     *
     * @remarks
     * Delete an early access feature opt-in
     */
    deleteOrganizationEarlyAccessFeaturesOptIn(req: operations.DeleteOrganizationEarlyAccessFeaturesOptInRequest, config?: AxiosRequestConfig): Promise<operations.DeleteOrganizationEarlyAccessFeaturesOptInResponse>;
    /**
     * Deletes a Policy Object.
     *
     * @remarks
     * Deletes a Policy Object.
     */
    deleteOrganizationPolicyObject(req: operations.DeleteOrganizationPolicyObjectRequest, config?: AxiosRequestConfig): Promise<operations.DeleteOrganizationPolicyObjectResponse>;
    /**
     * Deletes a Policy Object Group.
     *
     * @remarks
     * Deletes a Policy Object Group.
     */
    deleteOrganizationPolicyObjectsGroup(req: operations.DeleteOrganizationPolicyObjectsGroupRequest, config?: AxiosRequestConfig): Promise<operations.DeleteOrganizationPolicyObjectsGroupResponse>;
    /**
     * Remove a SAML IdP in your organization.
     *
     * @remarks
     * Remove a SAML IdP in your organization.
     */
    deleteOrganizationSamlIdp(req: operations.DeleteOrganizationSamlIdpRequest, config?: AxiosRequestConfig): Promise<operations.DeleteOrganizationSamlIdpResponse>;
    /**
     * Remove a SAML role
     *
     * @remarks
     * Remove a SAML role
     */
    deleteOrganizationSamlRole(req: operations.DeleteOrganizationSamlRoleRequest, config?: AxiosRequestConfig): Promise<operations.DeleteOrganizationSamlRoleResponse>;
    /**
     * Delete a user and all of its authentication methods.
     *
     * @remarks
     * Delete a user and all of its authentication methods.
     */
    deleteOrganizationUser(req: operations.DeleteOrganizationUserRequest, config?: AxiosRequestConfig): Promise<operations.DeleteOrganizationUserResponse>;
    /**
     * Return an organization
     *
     * @remarks
     * Return an organization
     */
    getOrganization(req: operations.GetOrganizationRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationResponse>;
    /**
     * Return an action batch
     *
     * @remarks
     * Return an action batch
     */
    getOrganizationActionBatch(req: operations.GetOrganizationActionBatchRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationActionBatchResponse>;
    /**
     * Return the list of action batches in the organization
     *
     * @remarks
     * Return the list of action batches in the organization
     */
    getOrganizationActionBatches(req: operations.GetOrganizationActionBatchesRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationActionBatchesResponse>;
    /**
     * Returns the adaptive policy ACL information
     *
     * @remarks
     * Returns the adaptive policy ACL information
     */
    getOrganizationAdaptivePolicyAcl(req: operations.GetOrganizationAdaptivePolicyAclRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationAdaptivePolicyAclResponse>;
    /**
     * List adaptive policy ACLs in a organization
     *
     * @remarks
     * List adaptive policy ACLs in a organization
     */
    getOrganizationAdaptivePolicyAcls(req: operations.GetOrganizationAdaptivePolicyAclsRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationAdaptivePolicyAclsResponse>;
    /**
     * Returns an adaptive policy group
     *
     * @remarks
     * Returns an adaptive policy group
     */
    getOrganizationAdaptivePolicyGroup(req: operations.GetOrganizationAdaptivePolicyGroupRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationAdaptivePolicyGroupResponse>;
    /**
     * List adaptive policy groups in a organization
     *
     * @remarks
     * List adaptive policy groups in a organization
     */
    getOrganizationAdaptivePolicyGroups(req: operations.GetOrganizationAdaptivePolicyGroupsRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationAdaptivePolicyGroupsResponse>;
    /**
     * Returns adaptive policy aggregate statistics for an organization
     *
     * @remarks
     * Returns adaptive policy aggregate statistics for an organization
     */
    getOrganizationAdaptivePolicyOverview(req: operations.GetOrganizationAdaptivePolicyOverviewRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationAdaptivePolicyOverviewResponse>;
    /**
     * List adaptive policies in an organization
     *
     * @remarks
     * List adaptive policies in an organization
     */
    getOrganizationAdaptivePolicyPolicies(req: operations.GetOrganizationAdaptivePolicyPoliciesRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationAdaptivePolicyPoliciesResponse>;
    /**
     * Return an adaptive policy
     *
     * @remarks
     * Return an adaptive policy
     */
    getOrganizationAdaptivePolicyPolicy(req: operations.GetOrganizationAdaptivePolicyPolicyRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationAdaptivePolicyPolicyResponse>;
    /**
     * Returns global adaptive policy settings in an organization
     *
     * @remarks
     * Returns global adaptive policy settings in an organization
     */
    getOrganizationAdaptivePolicySettings(req: operations.GetOrganizationAdaptivePolicySettingsRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationAdaptivePolicySettingsResponse>;
    /**
     * List the dashboard administrators in this organization
     *
     * @remarks
     * List the dashboard administrators in this organization
     */
    getOrganizationAdmins(req: operations.GetOrganizationAdminsRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationAdminsResponse>;
    /**
     * List all organization-wide alert configurations
     *
     * @remarks
     * List all organization-wide alert configurations
     */
    getOrganizationAlertsProfiles(req: operations.GetOrganizationAlertsProfilesRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationAlertsProfilesResponse>;
    /**
     * List the API requests made by an organization
     *
     * @remarks
     * List the API requests made by an organization
     */
    getOrganizationApiRequests(req: operations.GetOrganizationApiRequestsRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationApiRequestsResponse>;
    /**
     * Return an aggregated overview of API requests data
     *
     * @remarks
     * Return an aggregated overview of API requests data
     */
    getOrganizationApiRequestsOverview(req: operations.GetOrganizationApiRequestsOverviewRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationApiRequestsOverviewResponse>;
    /**
     * Tracks organizations' API requests by response code across a given time period
     *
     * @remarks
     * Tracks organizations' API requests by response code across a given time period
     */
    getOrganizationApiRequestsOverviewResponseCodesByInterval(req: operations.GetOrganizationApiRequestsOverviewResponseCodesByIntervalRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationApiRequestsOverviewResponseCodesByIntervalResponse>;
    /**
     * List the branding policies of an organization
     *
     * @remarks
     * List the branding policies of an organization
     */
    getOrganizationBrandingPolicies(req: operations.GetOrganizationBrandingPoliciesRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationBrandingPoliciesResponse>;
    /**
     * Return the branding policy IDs of an organization in priority order
     *
     * @remarks
     * Return the branding policy IDs of an organization in priority order. IDs are ordered in ascending order of priority (IDs later in the array have higher priority).
     */
    getOrganizationBrandingPoliciesPriorities(req: operations.GetOrganizationBrandingPoliciesPrioritiesRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationBrandingPoliciesPrioritiesResponse>;
    /**
     * Return a branding policy
     *
     * @remarks
     * Return a branding policy
     */
    getOrganizationBrandingPolicy(req: operations.GetOrganizationBrandingPolicyRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationBrandingPolicyResponse>;
    /**
     * Return data usage (in megabits per second) over time for all clients in the given organization within a given time range.
     *
     * @remarks
     * Return data usage (in megabits per second) over time for all clients in the given organization within a given time range.
     */
    getOrganizationClientsBandwidthUsageHistory(req: operations.GetOrganizationClientsBandwidthUsageHistoryRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationClientsBandwidthUsageHistoryResponse>;
    /**
     * Return summary information around client data usage (in mb) across the given organization.
     *
     * @remarks
     * Return summary information around client data usage (in mb) across the given organization.
     */
    getOrganizationClientsOverview(req: operations.GetOrganizationClientsOverviewRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationClientsOverviewResponse>;
    /**
     * Return the client details in an organization
     *
     * @remarks
     * Return the client details in an organization
     */
    getOrganizationClientsSearch(req: operations.GetOrganizationClientsSearchRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationClientsSearchResponse>;
    /**
     * Return a single configuration template
     *
     * @remarks
     * Return a single configuration template
     */
    getOrganizationConfigTemplate(req: operations.GetOrganizationConfigTemplateRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationConfigTemplateResponse>;
    /**
     * List the configuration templates for this organization
     *
     * @remarks
     * List the configuration templates for this organization
     */
    getOrganizationConfigTemplates(req: operations.GetOrganizationConfigTemplatesRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationConfigTemplatesResponse>;
    /**
     * View the Change Log for your organization
     *
     * @remarks
     * View the Change Log for your organization
     */
    getOrganizationConfigurationChanges(req: operations.GetOrganizationConfigurationChangesRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationConfigurationChangesResponse>;
    /**
     * List the devices in an organization
     *
     * @remarks
     * List the devices in an organization
     */
    getOrganizationDevices(req: operations.GetOrganizationDevicesRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationDevicesResponse>;
    /**
     * List the availability information for devices in an organization
     *
     * @remarks
     * List the availability information for devices in an organization. The data returned by this endpoint is updated every 5 minutes.
     */
    getOrganizationDevicesAvailabilities(req: operations.GetOrganizationDevicesAvailabilitiesRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationDevicesAvailabilitiesResponse>;
    /**
     * List the power status information for devices in an organization
     *
     * @remarks
     * List the power status information for devices in an organization. The data returned by this endpoint is updated every 5 minutes.
     */
    getOrganizationDevicesPowerModulesStatusesByDevice(req: operations.GetOrganizationDevicesPowerModulesStatusesByDeviceRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationDevicesPowerModulesStatusesByDeviceResponse>;
    /**
     * List the status of every Meraki device in the organization
     *
     * @remarks
     * List the status of every Meraki device in the organization
     */
    getOrganizationDevicesStatuses(req: operations.GetOrganizationDevicesStatusesRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationDevicesStatusesResponse>;
    /**
     * Return an overview of current device statuses
     *
     * @remarks
     * Return an overview of current device statuses
     */
    getOrganizationDevicesStatusesOverview(req: operations.GetOrganizationDevicesStatusesOverviewRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationDevicesStatusesOverviewResponse>;
    /**
     * List the current uplink addresses for devices in an organization.
     *
     * @remarks
     * List the current uplink addresses for devices in an organization.
     */
    getOrganizationDevicesUplinksAddressesByDevice(req: operations.GetOrganizationDevicesUplinksAddressesByDeviceRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationDevicesUplinksAddressesByDeviceResponse>;
    /**
     * Return the uplink loss and latency for every MX in the organization from at latest 2 minutes ago
     *
     * @remarks
     * Return the uplink loss and latency for every MX in the organization from at latest 2 minutes ago
     */
    getOrganizationDevicesUplinksLossAndLatency(req: operations.GetOrganizationDevicesUplinksLossAndLatencyRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationDevicesUplinksLossAndLatencyResponse>;
    /**
     * List the available early access features for organization
     *
     * @remarks
     * List the available early access features for organization
     */
    getOrganizationEarlyAccessFeatures(req: operations.GetOrganizationEarlyAccessFeaturesRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationEarlyAccessFeaturesResponse>;
    /**
     * Show an early access feature opt-in for an organization
     *
     * @remarks
     * Show an early access feature opt-in for an organization
     */
    getOrganizationEarlyAccessFeaturesOptIn(req: operations.GetOrganizationEarlyAccessFeaturesOptInRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationEarlyAccessFeaturesOptInResponse>;
    /**
     * List the early access feature opt-ins for an organization
     *
     * @remarks
     * List the early access feature opt-ins for an organization
     */
    getOrganizationEarlyAccessFeaturesOptIns(req: operations.GetOrganizationEarlyAccessFeaturesOptInsRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationEarlyAccessFeaturesOptInsResponse>;
    /**
     * Get firmware upgrade information for an organization
     *
     * @remarks
     * Get firmware upgrade information for an organization
     */
    getOrganizationFirmwareUpgrades(req: operations.GetOrganizationFirmwareUpgradesRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationFirmwareUpgradesResponse>;
    /**
     * Get firmware upgrade status for the filtered devices
     *
     * @remarks
     * Get firmware upgrade status for the filtered devices
     */
    getOrganizationFirmwareUpgradesByDevice(req: operations.GetOrganizationFirmwareUpgradesByDeviceRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationFirmwareUpgradesByDeviceResponse>;
    /**
     * Return a single device from the inventory of an organization
     *
     * @remarks
     * Return a single device from the inventory of an organization
     */
    getOrganizationInventoryDevice(req: operations.GetOrganizationInventoryDeviceRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationInventoryDeviceResponse>;
    /**
     * Return the device inventory for an organization
     *
     * @remarks
     * Return the device inventory for an organization
     */
    getOrganizationInventoryDevices(req: operations.GetOrganizationInventoryDevicesRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationInventoryDevicesResponse>;
    /**
     * Check the status of a committed Import operation
     *
     * @remarks
     * Check the status of a committed Import operation
     */
    getOrganizationInventoryOnboardingCloudMonitoringImports(req: operations.GetOrganizationInventoryOnboardingCloudMonitoringImportsRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationInventoryOnboardingCloudMonitoringImportsResponse>;
    /**
     * Returns list of networks eligible for adding cloud monitored device
     *
     * @remarks
     * Returns list of networks eligible for adding cloud monitored device
     */
    getOrganizationInventoryOnboardingCloudMonitoringNetworks(req: operations.GetOrganizationInventoryOnboardingCloudMonitoringNetworksRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationInventoryOnboardingCloudMonitoringNetworksResponse>;
    /**
     * Display a license
     *
     * @remarks
     * Display a license
     */
    getOrganizationLicense(req: operations.GetOrganizationLicenseRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationLicenseResponse>;
    /**
     * List the licenses for an organization
     *
     * @remarks
     * List the licenses for an organization
     */
    getOrganizationLicenses(req: operations.GetOrganizationLicensesRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationLicensesResponse>;
    /**
     * Return an overview of the license state for an organization
     *
     * @remarks
     * Return an overview of the license state for an organization
     */
    getOrganizationLicensesOverview(req: operations.GetOrganizationLicensesOverviewRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationLicensesOverviewResponse>;
    /**
     * List the licenses in a coterm organization
     *
     * @remarks
     * List the licenses in a coterm organization
     */
    getOrganizationLicensingCotermLicenses(req: operations.GetOrganizationLicensingCotermLicensesRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationLicensingCotermLicensesResponse>;
    /**
     * Returns the login security settings for an organization.
     *
     * @remarks
     * Returns the login security settings for an organization.
     */
    getOrganizationLoginSecurity(req: operations.GetOrganizationLoginSecurityRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationLoginSecurityResponse>;
    /**
     * List the networks that the user has privileges on in an organization
     *
     * @remarks
     * List the networks that the user has privileges on in an organization
     */
    getOrganizationNetworks(req: operations.GetOrganizationNetworksRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationNetworksResponse>;
    /**
     * Return the OpenAPI 2.0 Specification of the organization's API documentation in JSON
     *
     * @remarks
     * Return the OpenAPI 2.0 Specification of the organization's API documentation in JSON
     */
    getOrganizationOpenapiSpec(req: operations.GetOrganizationOpenapiSpecRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationOpenapiSpecResponse>;
    /**
     * Shows details of a Policy Object.
     *
     * @remarks
     * Shows details of a Policy Object.
     */
    getOrganizationPolicyObject(req: operations.GetOrganizationPolicyObjectRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationPolicyObjectResponse>;
    /**
     * Lists Policy Objects belonging to the organization.
     *
     * @remarks
     * Lists Policy Objects belonging to the organization.
     */
    getOrganizationPolicyObjects(req: operations.GetOrganizationPolicyObjectsRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationPolicyObjectsResponse>;
    /**
     * Shows details of a Policy Object Group.
     *
     * @remarks
     * Shows details of a Policy Object Group.
     */
    getOrganizationPolicyObjectsGroup(req: operations.GetOrganizationPolicyObjectsGroupRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationPolicyObjectsGroupResponse>;
    /**
     * Lists Policy Object Groups belonging to the organization.
     *
     * @remarks
     * Lists Policy Object Groups belonging to the organization.
     */
    getOrganizationPolicyObjectsGroups(req: operations.GetOrganizationPolicyObjectsGroupsRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationPolicyObjectsGroupsResponse>;
    /**
     * Returns the SAML SSO enabled settings for an organization.
     *
     * @remarks
     * Returns the SAML SSO enabled settings for an organization.
     */
    getOrganizationSaml(req: operations.GetOrganizationSamlRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationSamlResponse>;
    /**
     * Get a SAML IdP from your organization.
     *
     * @remarks
     * Get a SAML IdP from your organization.
     */
    getOrganizationSamlIdp(req: operations.GetOrganizationSamlIdpRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationSamlIdpResponse>;
    /**
     * List the SAML IdPs in your organization.
     *
     * @remarks
     * List the SAML IdPs in your organization.
     */
    getOrganizationSamlIdps(req: operations.GetOrganizationSamlIdpsRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationSamlIdpsResponse>;
    /**
     * Return a SAML role
     *
     * @remarks
     * Return a SAML role
     */
    getOrganizationSamlRole(req: operations.GetOrganizationSamlRoleRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationSamlRoleResponse>;
    /**
     * List the SAML roles for this organization
     *
     * @remarks
     * List the SAML roles for this organization
     */
    getOrganizationSamlRoles(req: operations.GetOrganizationSamlRolesRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationSamlRolesResponse>;
    /**
     * Return the SNMP settings for an organization
     *
     * @remarks
     * Return the SNMP settings for an organization
     */
    getOrganizationSnmp(req: operations.GetOrganizationSnmpRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationSnmpResponse>;
    /**
     * Return the top 10 appliances sorted by utilization over given time range.
     *
     * @remarks
     * Return the top 10 appliances sorted by utilization over given time range.
     */
    getOrganizationSummaryTopAppliancesByUtilization(req: operations.GetOrganizationSummaryTopAppliancesByUtilizationRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationSummaryTopAppliancesByUtilizationResponse>;
    /**
     * Return metrics for organization's top 10 clients by data usage (in mb) over given time range.
     *
     * @remarks
     * Return metrics for organization's top 10 clients by data usage (in mb) over given time range.
     */
    getOrganizationSummaryTopClientsByUsage(req: operations.GetOrganizationSummaryTopClientsByUsageRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationSummaryTopClientsByUsageResponse>;
    /**
     * Return metrics for organization's top clients by data usage (in mb) over given time range, grouped by manufacturer.
     *
     * @remarks
     * Return metrics for organization's top clients by data usage (in mb) over given time range, grouped by manufacturer.
     */
    getOrganizationSummaryTopClientsManufacturersByUsage(req: operations.GetOrganizationSummaryTopClientsManufacturersByUsageRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationSummaryTopClientsManufacturersByUsageResponse>;
    /**
     * Return metrics for organization's top 10 devices sorted by data usage over given time range
     *
     * @remarks
     * Return metrics for organization's top 10 devices sorted by data usage over given time range. Default unit is megabytes.
     */
    getOrganizationSummaryTopDevicesByUsage(req: operations.GetOrganizationSummaryTopDevicesByUsageRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationSummaryTopDevicesByUsageResponse>;
    /**
     * Return metrics for organization's top 10 device models sorted by data usage over given time range
     *
     * @remarks
     * Return metrics for organization's top 10 device models sorted by data usage over given time range. Default unit is megabytes.
     */
    getOrganizationSummaryTopDevicesModelsByUsage(req: operations.GetOrganizationSummaryTopDevicesModelsByUsageRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationSummaryTopDevicesModelsByUsageResponse>;
    /**
     * Return metrics for organization's top 10 ssids by data usage over given time range
     *
     * @remarks
     * Return metrics for organization's top 10 ssids by data usage over given time range. Default unit is megabytes.
     */
    getOrganizationSummaryTopSsidsByUsage(req: operations.GetOrganizationSummaryTopSsidsByUsageRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationSummaryTopSsidsByUsageResponse>;
    /**
     * Return metrics for organization's top 10 switches by energy usage over given time range
     *
     * @remarks
     * Return metrics for organization's top 10 switches by energy usage over given time range. Default unit is joules.
     */
    getOrganizationSummaryTopSwitchesByEnergyUsage(req: operations.GetOrganizationSummaryTopSwitchesByEnergyUsageRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationSummaryTopSwitchesByEnergyUsageResponse>;
    /**
     * List the uplink status of every Meraki MX, MG and Z series devices in the organization
     *
     * @remarks
     * List the uplink status of every Meraki MX, MG and Z series devices in the organization
     */
    getOrganizationUplinksStatuses(req: operations.GetOrganizationUplinksStatusesRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationUplinksStatusesResponse>;
    /**
     * Return a list of alert types to be used with managing webhook alerts
     *
     * @remarks
     * Return a list of alert types to be used with managing webhook alerts
     */
    getOrganizationWebhooksAlertTypes(req: operations.GetOrganizationWebhooksAlertTypesRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationWebhooksAlertTypesResponse>;
    /**
     * Return the log of webhook POSTs sent
     *
     * @remarks
     * Return the log of webhook POSTs sent
     */
    getOrganizationWebhooksLogs(req: operations.GetOrganizationWebhooksLogsRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationWebhooksLogsResponse>;
    /**
     * List the organizations that the user has privileges on
     *
     * @remarks
     * List the organizations that the user has privileges on
     */
    getOrganizations(config?: AxiosRequestConfig): Promise<operations.GetOrganizationsResponse>;
    /**
     * Move licenses to another organization
     *
     * @remarks
     * Move licenses to another organization. This will also move any devices that the licenses are assigned to
     */
    moveOrganizationLicenses(req: operations.MoveOrganizationLicensesRequest, config?: AxiosRequestConfig): Promise<operations.MoveOrganizationLicensesResponse>;
    /**
     * Move SM seats to another organization
     *
     * @remarks
     * Move SM seats to another organization
     */
    moveOrganizationLicensesSeats(req: operations.MoveOrganizationLicensesSeatsRequest, config?: AxiosRequestConfig): Promise<operations.MoveOrganizationLicensesSeatsResponse>;
    /**
     * Moves a license to a different organization (coterm only)
     *
     * @remarks
     * Moves a license to a different organization (coterm only)
     */
    moveOrganizationLicensingCotermLicenses(req: operations.MoveOrganizationLicensingCotermLicensesRequest, config?: AxiosRequestConfig): Promise<operations.MoveOrganizationLicensingCotermLicensesResponse>;
    /**
     * Release a list of claimed devices from an organization.
     *
     * @remarks
     * Release a list of claimed devices from an organization.
     */
    releaseFromOrganizationInventory(req: operations.ReleaseFromOrganizationInventoryRequest, config?: AxiosRequestConfig): Promise<operations.ReleaseFromOrganizationInventoryResponse>;
    /**
     * Renew SM seats of a license
     *
     * @remarks
     * Renew SM seats of a license. This will extend the license expiration date of managed SM devices covered by this license
     */
    renewOrganizationLicensesSeats(req: operations.RenewOrganizationLicensesSeatsRequest, config?: AxiosRequestConfig): Promise<operations.RenewOrganizationLicensesSeatsResponse>;
    /**
     * Update an organization
     *
     * @remarks
     * Update an organization
     */
    updateOrganization(req: operations.UpdateOrganizationRequest, config?: AxiosRequestConfig): Promise<operations.UpdateOrganizationResponse>;
    /**
     * Update an action batch
     *
     * @remarks
     * Update an action batch
     */
    updateOrganizationActionBatch(req: operations.UpdateOrganizationActionBatchRequest, config?: AxiosRequestConfig): Promise<operations.UpdateOrganizationActionBatchResponse>;
    /**
     * Updates an adaptive policy ACL
     *
     * @remarks
     * Updates an adaptive policy ACL
     */
    updateOrganizationAdaptivePolicyAcl(req: operations.UpdateOrganizationAdaptivePolicyAclRequest, config?: AxiosRequestConfig): Promise<operations.UpdateOrganizationAdaptivePolicyAclResponse>;
    /**
     * Updates an adaptive policy group
     *
     * @remarks
     * Updates an adaptive policy group. If updating "Infrastructure", only the SGT is allowed. Cannot update "Unknown".
     */
    updateOrganizationAdaptivePolicyGroup(req: operations.UpdateOrganizationAdaptivePolicyGroupRequest, config?: AxiosRequestConfig): Promise<operations.UpdateOrganizationAdaptivePolicyGroupResponse>;
    /**
     * Update an Adaptive Policy
     *
     * @remarks
     * Update an Adaptive Policy
     */
    updateOrganizationAdaptivePolicyPolicy(req: operations.UpdateOrganizationAdaptivePolicyPolicyRequest, config?: AxiosRequestConfig): Promise<operations.UpdateOrganizationAdaptivePolicyPolicyResponse>;
    /**
     * Update global adaptive policy settings
     *
     * @remarks
     * Update global adaptive policy settings
     */
    updateOrganizationAdaptivePolicySettings(req: operations.UpdateOrganizationAdaptivePolicySettingsRequest, config?: AxiosRequestConfig): Promise<operations.UpdateOrganizationAdaptivePolicySettingsResponse>;
    /**
     * Update an administrator
     *
     * @remarks
     * Update an administrator
     */
    updateOrganizationAdmin(req: operations.UpdateOrganizationAdminRequest, config?: AxiosRequestConfig): Promise<operations.UpdateOrganizationAdminResponse>;
    /**
     * Update an organization-wide alert config
     *
     * @remarks
     * Update an organization-wide alert config
     */
    updateOrganizationAlertsProfile(req: operations.UpdateOrganizationAlertsProfileRequest, config?: AxiosRequestConfig): Promise<operations.UpdateOrganizationAlertsProfileResponse>;
    /**
     * Update the priority ordering of an organization's branding policies.
     *
     * @remarks
     * Update the priority ordering of an organization's branding policies.
     */
    updateOrganizationBrandingPoliciesPriorities(req: operations.UpdateOrganizationBrandingPoliciesPrioritiesRequest, config?: AxiosRequestConfig): Promise<operations.UpdateOrganizationBrandingPoliciesPrioritiesResponse>;
    /**
     * Update a branding policy
     *
     * @remarks
     * Update a branding policy
     */
    updateOrganizationBrandingPolicy(req: operations.UpdateOrganizationBrandingPolicyRequest, config?: AxiosRequestConfig): Promise<operations.UpdateOrganizationBrandingPolicyResponse>;
    /**
     * Update a configuration template
     *
     * @remarks
     * Update a configuration template
     */
    updateOrganizationConfigTemplate(req: operations.UpdateOrganizationConfigTemplateRequest, config?: AxiosRequestConfig): Promise<operations.UpdateOrganizationConfigTemplateResponse>;
    /**
     * Update an early access feature opt-in for an organization
     *
     * @remarks
     * Update an early access feature opt-in for an organization
     */
    updateOrganizationEarlyAccessFeaturesOptIn(req: operations.UpdateOrganizationEarlyAccessFeaturesOptInRequest, config?: AxiosRequestConfig): Promise<operations.UpdateOrganizationEarlyAccessFeaturesOptInResponse>;
    /**
     * Update a license
     *
     * @remarks
     * Update a license
     */
    updateOrganizationLicense(req: operations.UpdateOrganizationLicenseRequest, config?: AxiosRequestConfig): Promise<operations.UpdateOrganizationLicenseResponse>;
    /**
     * Update the login security settings for an organization
     *
     * @remarks
     * Update the login security settings for an organization
     */
    updateOrganizationLoginSecurity(req: operations.UpdateOrganizationLoginSecurityRequest, config?: AxiosRequestConfig): Promise<operations.UpdateOrganizationLoginSecurityResponse>;
    /**
     * Updates a Policy Object.
     *
     * @remarks
     * Updates a Policy Object.
     */
    updateOrganizationPolicyObject(req: operations.UpdateOrganizationPolicyObjectRequest, config?: AxiosRequestConfig): Promise<operations.UpdateOrganizationPolicyObjectResponse>;
    /**
     * Updates a Policy Object Group.
     *
     * @remarks
     * Updates a Policy Object Group.
     */
    updateOrganizationPolicyObjectsGroup(req: operations.UpdateOrganizationPolicyObjectsGroupRequest, config?: AxiosRequestConfig): Promise<operations.UpdateOrganizationPolicyObjectsGroupResponse>;
    /**
     * Updates the SAML SSO enabled settings for an organization.
     *
     * @remarks
     * Updates the SAML SSO enabled settings for an organization.
     */
    updateOrganizationSaml(req: operations.UpdateOrganizationSamlRequest, config?: AxiosRequestConfig): Promise<operations.UpdateOrganizationSamlResponse>;
    /**
     * Update a SAML IdP in your organization
     *
     * @remarks
     * Update a SAML IdP in your organization
     */
    updateOrganizationSamlIdp(req: operations.UpdateOrganizationSamlIdpRequest, config?: AxiosRequestConfig): Promise<operations.UpdateOrganizationSamlIdpResponse>;
    /**
     * Update a SAML role
     *
     * @remarks
     * Update a SAML role
     */
    updateOrganizationSamlRole(req: operations.UpdateOrganizationSamlRoleRequest, config?: AxiosRequestConfig): Promise<operations.UpdateOrganizationSamlRoleResponse>;
    /**
     * Update the SNMP settings for an organization
     *
     * @remarks
     * Update the SNMP settings for an organization
     */
    updateOrganizationSnmp(req: operations.UpdateOrganizationSnmpRequest, config?: AxiosRequestConfig): Promise<operations.UpdateOrganizationSnmpResponse>;
}
