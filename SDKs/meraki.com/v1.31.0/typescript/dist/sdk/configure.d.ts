import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Configure {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Add a switch to a stack
     *
     * @remarks
     * Add a switch to a stack
     */
    addNetworkSwitchStack(req: operations.AddNetworkSwitchStackRequest, config?: AxiosRequestConfig): Promise<operations.AddNetworkSwitchStackResponse>;
    /**
     * Assign SM seats to a network
     *
     * @remarks
     * Assign SM seats to a network. This will increase the managed SM device limit of the network
     */
    assignOrganizationLicensesSeats(req: operations.AssignOrganizationLicensesSeatsRequest, config?: AxiosRequestConfig): Promise<operations.AssignOrganizationLicensesSeatsResponse>;
    /**
     * Bind a network to a template.
     *
     * @remarks
     * Bind a network to a template.
     */
    bindNetwork(req: operations.BindNetworkRequest, config?: AxiosRequestConfig): Promise<operations.BindNetworkResponse>;
    /**
     * Force check-in a set of devices
     *
     * @remarks
     * Force check-in a set of devices
     */
    checkinNetworkSmDevices(req: operations.CheckinNetworkSmDevicesRequest, config?: AxiosRequestConfig): Promise<operations.CheckinNetworkSmDevicesResponse>;
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
     * Claim devices into a network. (Note: for recently claimed devices, it may take a few minutes for API requsts against that device to succeed)
     *
     * @remarks
     * Claim devices into a network. (Note: for recently claimed devices, it may take a few minutes for API requsts against that device to succeed)
     */
    claimNetworkDevices(req: operations.ClaimNetworkDevicesRequest, config?: AxiosRequestConfig): Promise<operations.ClaimNetworkDevicesResponse>;
    /**
     * Create a new organization by cloning the addressed organization
     *
     * @remarks
     * Create a new organization by cloning the addressed organization
     */
    cloneOrganization(req: operations.CloneOrganizationRequest, config?: AxiosRequestConfig): Promise<operations.CloneOrganizationResponse>;
    /**
     * Clone port-level and some switch-level configuration settings from a source switch to one or more target switches
     *
     * @remarks
     * Clone port-level and some switch-level configuration settings from a source switch to one or more target switches. Cloned settings include: Aggregation Groups, Power Settings, Multicast Settings, MTU Configuration, STP Bridge priority, Port Mirroring
     */
    cloneOrganizationSwitchDevices(req: operations.CloneOrganizationSwitchDevicesRequest, config?: AxiosRequestConfig): Promise<operations.CloneOrganizationSwitchDevicesResponse>;
    /**
     * Combine multiple networks into a single network
     *
     * @remarks
     * Combine multiple networks into a single network
     */
    combineOrganizationNetworks(req: operations.CombineOrganizationNetworksRequest, config?: AxiosRequestConfig): Promise<operations.CombineOrganizationNetworksResponse>;
    /**
     * Generate a new vMX authentication token
     *
     * @remarks
     * Generate a new vMX authentication token
     */
    createDeviceApplianceVmxAuthenticationToken(req: operations.CreateDeviceApplianceVmxAuthenticationTokenRequest, config?: AxiosRequestConfig): Promise<operations.CreateDeviceApplianceVmxAuthenticationTokenResponse>;
    /**
     * Create a layer 3 interface for a switch
     *
     * @remarks
     * Create a layer 3 interface for a switch
     */
    createDeviceSwitchRoutingInterface(req: operations.CreateDeviceSwitchRoutingInterfaceRequest, config?: AxiosRequestConfig): Promise<operations.CreateDeviceSwitchRoutingInterfaceResponse>;
    /**
     * Create a layer 3 static route for a switch
     *
     * @remarks
     * Create a layer 3 static route for a switch
     */
    createDeviceSwitchRoutingStaticRoute(req: operations.CreateDeviceSwitchRoutingStaticRouteRequest, config?: AxiosRequestConfig): Promise<operations.CreateDeviceSwitchRoutingStaticRouteResponse>;
    /**
     * Add a static delegated prefix from a network
     *
     * @remarks
     * Add a static delegated prefix from a network
     */
    createNetworkAppliancePrefixesDelegatedStatic(req: operations.CreateNetworkAppliancePrefixesDelegatedStaticRequest, config?: AxiosRequestConfig): Promise<operations.CreateNetworkAppliancePrefixesDelegatedStaticResponse>;
    /**
     * Add a static route for an MX or teleworker network
     *
     * @remarks
     * Add a static route for an MX or teleworker network
     */
    createNetworkApplianceStaticRoute(req: operations.CreateNetworkApplianceStaticRouteRequest, config?: AxiosRequestConfig): Promise<operations.CreateNetworkApplianceStaticRouteResponse>;
    /**
     * Add a custom performance class for an MX network
     *
     * @remarks
     * Add a custom performance class for an MX network
     */
    createNetworkApplianceTrafficShapingCustomPerformanceClass(req: operations.CreateNetworkApplianceTrafficShapingCustomPerformanceClassRequest, config?: AxiosRequestConfig): Promise<operations.CreateNetworkApplianceTrafficShapingCustomPerformanceClassResponse>;
    /**
     * Add a VLAN
     *
     * @remarks
     * Add a VLAN
     */
    createNetworkApplianceVlan(req: operations.CreateNetworkApplianceVlanRequest, config?: AxiosRequestConfig): Promise<operations.CreateNetworkApplianceVlanResponse>;
    /**
     * Creates new quality retention profile for this network.
     *
     * @remarks
     * Creates new quality retention profile for this network.
     */
    createNetworkCameraQualityRetentionProfile(req: operations.CreateNetworkCameraQualityRetentionProfileRequest, config?: AxiosRequestConfig): Promise<operations.CreateNetworkCameraQualityRetentionProfileResponse>;
    /**
     * Creates a new camera wireless profile for this network.
     *
     * @remarks
     * Creates a new camera wireless profile for this network.
     */
    createNetworkCameraWirelessProfile(req: operations.CreateNetworkCameraWirelessProfileRequest, config?: AxiosRequestConfig): Promise<operations.CreateNetworkCameraWirelessProfileResponse>;
    /**
     * Rollback a Firmware Upgrade For A Network
     *
     * @remarks
     * Rollback a Firmware Upgrade For A Network
     */
    createNetworkFirmwareUpgradesRollback(req: operations.CreateNetworkFirmwareUpgradesRollbackRequest, config?: AxiosRequestConfig): Promise<operations.CreateNetworkFirmwareUpgradesRollbackResponse>;
    /**
     * Create a Staged Upgrade Event for a network
     *
     * @remarks
     * Create a Staged Upgrade Event for a network
     */
    createNetworkFirmwareUpgradesStagedEvent(req: operations.CreateNetworkFirmwareUpgradesStagedEventRequest, config?: AxiosRequestConfig): Promise<operations.CreateNetworkFirmwareUpgradesStagedEventResponse>;
    /**
     * Create a Staged Upgrade Group for a network
     *
     * @remarks
     * Create a Staged Upgrade Group for a network
     */
    createNetworkFirmwareUpgradesStagedGroup(req: operations.CreateNetworkFirmwareUpgradesStagedGroupRequest, config?: AxiosRequestConfig): Promise<operations.CreateNetworkFirmwareUpgradesStagedGroupResponse>;
    /**
     * Upload a floor plan
     *
     * @remarks
     * Upload a floor plan
     */
    createNetworkFloorPlan(req: operations.CreateNetworkFloorPlanRequest, config?: AxiosRequestConfig): Promise<operations.CreateNetworkFloorPlanResponse>;
    /**
     * Create a group policy
     *
     * @remarks
     * Create a group policy
     */
    createNetworkGroupPolicy(req: operations.CreateNetworkGroupPolicyRequest, config?: AxiosRequestConfig): Promise<operations.CreateNetworkGroupPolicyResponse>;
    /**
     * Authorize a user configured with Meraki Authentication for a network (currently supports 802.1X, splash guest, and client VPN users, and currently, organizations have a 50,000 user cap)
     *
     * @remarks
     * Authorize a user configured with Meraki Authentication for a network (currently supports 802.1X, splash guest, and client VPN users, and currently, organizations have a 50,000 user cap)
     */
    createNetworkMerakiAuthUser(req: operations.CreateNetworkMerakiAuthUserRequest, config?: AxiosRequestConfig): Promise<operations.CreateNetworkMerakiAuthUserResponse>;
    /**
     * Add an MQTT broker
     *
     * @remarks
     * Add an MQTT broker
     */
    createNetworkMqttBroker(req: operations.CreateNetworkMqttBrokerRequest, config?: AxiosRequestConfig): Promise<operations.CreateNetworkMqttBrokerResponse>;
    /**
     * Submit a new delete or restrict processing PII request
     *
     * @remarks
     * Submit a new delete or restrict processing PII request
     *
     * ## ALTERNATE PATH
     *
     * ```
     * /organizations/{organizationId}/pii/requests
     * ```
     */
    createNetworkPiiRequest(req: operations.CreateNetworkPiiRequestRequest, config?: AxiosRequestConfig): Promise<operations.CreateNetworkPiiRequestResponse>;
    /**
     * Creates a sensor alert profile for a network.
     *
     * @remarks
     * Creates a sensor alert profile for a network.
     */
    createNetworkSensorAlertsProfile(req: operations.CreateNetworkSensorAlertsProfileRequest, config?: AxiosRequestConfig): Promise<operations.CreateNetworkSensorAlertsProfileResponse>;
    /**
     * Bypass activation lock attempt
     *
     * @remarks
     * Bypass activation lock attempt
     */
    createNetworkSmBypassActivationLockAttempt(req: operations.CreateNetworkSmBypassActivationLockAttemptRequest, config?: AxiosRequestConfig): Promise<operations.CreateNetworkSmBypassActivationLockAttemptResponse>;
    /**
     * Add a target group
     *
     * @remarks
     * Add a target group
     */
    createNetworkSmTargetGroup(req: operations.CreateNetworkSmTargetGroupRequest, config?: AxiosRequestConfig): Promise<operations.CreateNetworkSmTargetGroupResponse>;
    /**
     * Create an access policy for a switch network
     *
     * @remarks
     * Create an access policy for a switch network. If you would like to enable Meraki Authentication, set radiusServers to empty array.
     */
    createNetworkSwitchAccessPolicy(req: operations.CreateNetworkSwitchAccessPolicyRequest, config?: AxiosRequestConfig): Promise<operations.CreateNetworkSwitchAccessPolicyResponse>;
    /**
     * Add a server to be trusted by Dynamic ARP Inspection on this network
     *
     * @remarks
     * Add a server to be trusted by Dynamic ARP Inspection on this network
     */
    createNetworkSwitchDhcpServerPolicyArpInspectionTrustedServer(req: operations.CreateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerRequest, config?: AxiosRequestConfig): Promise<operations.CreateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerResponse>;
    /**
     * Create a link aggregation group
     *
     * @remarks
     * Create a link aggregation group
     */
    createNetworkSwitchLinkAggregation(req: operations.CreateNetworkSwitchLinkAggregationRequest, config?: AxiosRequestConfig): Promise<operations.CreateNetworkSwitchLinkAggregationResponse>;
    /**
     * Add a switch port schedule
     *
     * @remarks
     * Add a switch port schedule
     */
    createNetworkSwitchPortSchedule(req: operations.CreateNetworkSwitchPortScheduleRequest, config?: AxiosRequestConfig): Promise<operations.CreateNetworkSwitchPortScheduleResponse>;
    /**
     * Add a quality of service rule
     *
     * @remarks
     * Add a quality of service rule
     */
    createNetworkSwitchQosRule(req: operations.CreateNetworkSwitchQosRuleRequest, config?: AxiosRequestConfig): Promise<operations.CreateNetworkSwitchQosRuleResponse>;
    /**
     * Create a multicast rendezvous point
     *
     * @remarks
     * Create a multicast rendezvous point
     */
    createNetworkSwitchRoutingMulticastRendezvousPoint(req: operations.CreateNetworkSwitchRoutingMulticastRendezvousPointRequest, config?: AxiosRequestConfig): Promise<operations.CreateNetworkSwitchRoutingMulticastRendezvousPointResponse>;
    /**
     * Create a stack
     *
     * @remarks
     * Create a stack
     */
    createNetworkSwitchStack(req: operations.CreateNetworkSwitchStackRequest, config?: AxiosRequestConfig): Promise<operations.CreateNetworkSwitchStackResponse>;
    /**
     * Create a layer 3 interface for a switch stack
     *
     * @remarks
     * Create a layer 3 interface for a switch stack
     */
    createNetworkSwitchStackRoutingInterface(req: operations.CreateNetworkSwitchStackRoutingInterfaceRequest, config?: AxiosRequestConfig): Promise<operations.CreateNetworkSwitchStackRoutingInterfaceResponse>;
    /**
     * Create a layer 3 static route for a switch stack
     *
     * @remarks
     * Create a layer 3 static route for a switch stack
     */
    createNetworkSwitchStackRoutingStaticRoute(req: operations.CreateNetworkSwitchStackRoutingStaticRouteRequest, config?: AxiosRequestConfig): Promise<operations.CreateNetworkSwitchStackRoutingStaticRouteResponse>;
    /**
     * Add an HTTP server to a network
     *
     * @remarks
     * Add an HTTP server to a network
     */
    createNetworkWebhooksHttpServer(req: operations.CreateNetworkWebhooksHttpServerRequest, config?: AxiosRequestConfig): Promise<operations.CreateNetworkWebhooksHttpServerResponse>;
    /**
     * Create a webhook payload template for a network
     *
     * @remarks
     * Create a webhook payload template for a network
     */
    createNetworkWebhooksPayloadTemplate(req: operations.CreateNetworkWebhooksPayloadTemplateRequest, config?: AxiosRequestConfig): Promise<operations.CreateNetworkWebhooksPayloadTemplateResponse>;
    /**
     * Send a test webhook for a network
     *
     * @remarks
     * Send a test webhook for a network
     */
    createNetworkWebhooksWebhookTest(req: operations.CreateNetworkWebhooksWebhookTestRequest, config?: AxiosRequestConfig): Promise<operations.CreateNetworkWebhooksWebhookTestResponse>;
    /**
     * Creates new RF profile for this network
     *
     * @remarks
     * Creates new RF profile for this network
     */
    createNetworkWirelessRfProfile(req: operations.CreateNetworkWirelessRfProfileRequest, config?: AxiosRequestConfig): Promise<operations.CreateNetworkWirelessRfProfileResponse>;
    /**
     * Create an Identity PSK
     *
     * @remarks
     * Create an Identity PSK
     */
    createNetworkWirelessSsidIdentityPsk(req: operations.CreateNetworkWirelessSsidIdentityPskRequest, config?: AxiosRequestConfig): Promise<operations.CreateNetworkWirelessSsidIdentityPskResponse>;
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
     * Create custom analytics artifact
     *
     * @remarks
     * Create custom analytics artifact. Returns an artifact upload URL with expiry time. Upload the artifact file with a put request to the returned upload URL before its expiry.
     */
    createOrganizationCameraCustomAnalyticsArtifact(req: operations.CreateOrganizationCameraCustomAnalyticsArtifactRequest, config?: AxiosRequestConfig): Promise<operations.CreateOrganizationCameraCustomAnalyticsArtifactResponse>;
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
     * Add a media server to be monitored for this organization
     *
     * @remarks
     * Add a media server to be monitored for this organization. Only valid for organizations with Meraki Insight.
     */
    createOrganizationInsightMonitoredMediaServer(req: operations.CreateOrganizationInsightMonitoredMediaServerRequest, config?: AxiosRequestConfig): Promise<operations.CreateOrganizationInsightMonitoredMediaServerResponse>;
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
     * Postpone by 1 week all pending staged upgrade stages for a network
     *
     * @remarks
     * Postpone by 1 week all pending staged upgrade stages for a network
     */
    deferNetworkFirmwareUpgradesStagedEvents(req: operations.DeferNetworkFirmwareUpgradesStagedEventsRequest, config?: AxiosRequestConfig): Promise<operations.DeferNetworkFirmwareUpgradesStagedEventsResponse>;
    /**
     * Delete a layer 3 interface from the switch
     *
     * @remarks
     * Delete a layer 3 interface from the switch
     */
    deleteDeviceSwitchRoutingInterface(req: operations.DeleteDeviceSwitchRoutingInterfaceRequest, config?: AxiosRequestConfig): Promise<operations.DeleteDeviceSwitchRoutingInterfaceResponse>;
    /**
     * Delete a layer 3 static route for a switch
     *
     * @remarks
     * Delete a layer 3 static route for a switch
     */
    deleteDeviceSwitchRoutingStaticRoute(req: operations.DeleteDeviceSwitchRoutingStaticRouteRequest, config?: AxiosRequestConfig): Promise<operations.DeleteDeviceSwitchRoutingStaticRouteResponse>;
    /**
     * Delete a network
     *
     * @remarks
     * Delete a network
     */
    deleteNetwork(req: operations.DeleteNetworkRequest, config?: AxiosRequestConfig): Promise<operations.DeleteNetworkResponse>;
    /**
     * Delete a static delegated prefix from a network
     *
     * @remarks
     * Delete a static delegated prefix from a network
     */
    deleteNetworkAppliancePrefixesDelegatedStatic(req: operations.DeleteNetworkAppliancePrefixesDelegatedStaticRequest, config?: AxiosRequestConfig): Promise<operations.DeleteNetworkAppliancePrefixesDelegatedStaticResponse>;
    /**
     * Delete a static route from an MX or teleworker network
     *
     * @remarks
     * Delete a static route from an MX or teleworker network
     */
    deleteNetworkApplianceStaticRoute(req: operations.DeleteNetworkApplianceStaticRouteRequest, config?: AxiosRequestConfig): Promise<operations.DeleteNetworkApplianceStaticRouteResponse>;
    /**
     * Delete a custom performance class from an MX network
     *
     * @remarks
     * Delete a custom performance class from an MX network
     */
    deleteNetworkApplianceTrafficShapingCustomPerformanceClass(req: operations.DeleteNetworkApplianceTrafficShapingCustomPerformanceClassRequest, config?: AxiosRequestConfig): Promise<operations.DeleteNetworkApplianceTrafficShapingCustomPerformanceClassResponse>;
    /**
     * Delete a VLAN from a network
     *
     * @remarks
     * Delete a VLAN from a network
     */
    deleteNetworkApplianceVlan(req: operations.DeleteNetworkApplianceVlanRequest, config?: AxiosRequestConfig): Promise<operations.DeleteNetworkApplianceVlanResponse>;
    /**
     * Delete an existing quality retention profile for this network.
     *
     * @remarks
     * Delete an existing quality retention profile for this network.
     */
    deleteNetworkCameraQualityRetentionProfile(req: operations.DeleteNetworkCameraQualityRetentionProfileRequest, config?: AxiosRequestConfig): Promise<operations.DeleteNetworkCameraQualityRetentionProfileResponse>;
    /**
     * Delete an existing camera wireless profile for this network.
     *
     * @remarks
     * Delete an existing camera wireless profile for this network.
     */
    deleteNetworkCameraWirelessProfile(req: operations.DeleteNetworkCameraWirelessProfileRequest, config?: AxiosRequestConfig): Promise<operations.DeleteNetworkCameraWirelessProfileResponse>;
    /**
     * Delete a Staged Upgrade Group
     *
     * @remarks
     * Delete a Staged Upgrade Group
     */
    deleteNetworkFirmwareUpgradesStagedGroup(req: operations.DeleteNetworkFirmwareUpgradesStagedGroupRequest, config?: AxiosRequestConfig): Promise<operations.DeleteNetworkFirmwareUpgradesStagedGroupResponse>;
    /**
     * Destroy a floor plan
     *
     * @remarks
     * Destroy a floor plan
     */
    deleteNetworkFloorPlan(req: operations.DeleteNetworkFloorPlanRequest, config?: AxiosRequestConfig): Promise<operations.DeleteNetworkFloorPlanResponse>;
    /**
     * Delete a group policy
     *
     * @remarks
     * Delete a group policy
     */
    deleteNetworkGroupPolicy(req: operations.DeleteNetworkGroupPolicyRequest, config?: AxiosRequestConfig): Promise<operations.DeleteNetworkGroupPolicyResponse>;
    /**
     * Deauthorize a user
     *
     * @remarks
     * Deauthorize a user. To reauthorize a user after deauthorizing them, POST to this endpoint. (Currently, 802.1X RADIUS, splash guest, and client VPN users can be deauthorized.)
     */
    deleteNetworkMerakiAuthUser(req: operations.DeleteNetworkMerakiAuthUserRequest, config?: AxiosRequestConfig): Promise<operations.DeleteNetworkMerakiAuthUserResponse>;
    /**
     * Delete an MQTT broker
     *
     * @remarks
     * Delete an MQTT broker
     */
    deleteNetworkMqttBroker(req: operations.DeleteNetworkMqttBrokerRequest, config?: AxiosRequestConfig): Promise<operations.DeleteNetworkMqttBrokerResponse>;
    /**
     * Delete a restrict processing PII request
     *
     * @remarks
     * Delete a restrict processing PII request
     *
     * ## ALTERNATE PATH
     *
     * ```
     * /organizations/{organizationId}/pii/requests/{requestId}
     * ```
     */
    deleteNetworkPiiRequest(req: operations.DeleteNetworkPiiRequestRequest, config?: AxiosRequestConfig): Promise<operations.DeleteNetworkPiiRequestResponse>;
    /**
     * Deletes a sensor alert profile from a network.
     *
     * @remarks
     * Deletes a sensor alert profile from a network.
     */
    deleteNetworkSensorAlertsProfile(req: operations.DeleteNetworkSensorAlertsProfileRequest, config?: AxiosRequestConfig): Promise<operations.DeleteNetworkSensorAlertsProfileResponse>;
    /**
     * Delete a target group from a network
     *
     * @remarks
     * Delete a target group from a network
     */
    deleteNetworkSmTargetGroup(req: operations.DeleteNetworkSmTargetGroupRequest, config?: AxiosRequestConfig): Promise<operations.DeleteNetworkSmTargetGroupResponse>;
    /**
     * Delete a User Access Device
     *
     * @remarks
     * Delete a User Access Device
     */
    deleteNetworkSmUserAccessDevice(req: operations.DeleteNetworkSmUserAccessDeviceRequest, config?: AxiosRequestConfig): Promise<operations.DeleteNetworkSmUserAccessDeviceResponse>;
    /**
     * Delete an access policy for a switch network
     *
     * @remarks
     * Delete an access policy for a switch network
     */
    deleteNetworkSwitchAccessPolicy(req: operations.DeleteNetworkSwitchAccessPolicyRequest, config?: AxiosRequestConfig): Promise<operations.DeleteNetworkSwitchAccessPolicyResponse>;
    /**
     * Remove a server from being trusted by Dynamic ARP Inspection on this network
     *
     * @remarks
     * Remove a server from being trusted by Dynamic ARP Inspection on this network
     */
    deleteNetworkSwitchDhcpServerPolicyArpInspectionTrustedServer(req: operations.DeleteNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerRequest, config?: AxiosRequestConfig): Promise<operations.DeleteNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerResponse>;
    /**
     * Split a link aggregation group into separate ports
     *
     * @remarks
     * Split a link aggregation group into separate ports
     */
    deleteNetworkSwitchLinkAggregation(req: operations.DeleteNetworkSwitchLinkAggregationRequest, config?: AxiosRequestConfig): Promise<operations.DeleteNetworkSwitchLinkAggregationResponse>;
    /**
     * Delete a switch port schedule
     *
     * @remarks
     * Delete a switch port schedule
     */
    deleteNetworkSwitchPortSchedule(req: operations.DeleteNetworkSwitchPortScheduleRequest, config?: AxiosRequestConfig): Promise<operations.DeleteNetworkSwitchPortScheduleResponse>;
    /**
     * Delete a quality of service rule
     *
     * @remarks
     * Delete a quality of service rule
     */
    deleteNetworkSwitchQosRule(req: operations.DeleteNetworkSwitchQosRuleRequest, config?: AxiosRequestConfig): Promise<operations.DeleteNetworkSwitchQosRuleResponse>;
    /**
     * Delete a multicast rendezvous point
     *
     * @remarks
     * Delete a multicast rendezvous point
     */
    deleteNetworkSwitchRoutingMulticastRendezvousPoint(req: operations.DeleteNetworkSwitchRoutingMulticastRendezvousPointRequest, config?: AxiosRequestConfig): Promise<operations.DeleteNetworkSwitchRoutingMulticastRendezvousPointResponse>;
    /**
     * Delete a stack
     *
     * @remarks
     * Delete a stack
     */
    deleteNetworkSwitchStack(req: operations.DeleteNetworkSwitchStackRequest, config?: AxiosRequestConfig): Promise<operations.DeleteNetworkSwitchStackResponse>;
    /**
     * Delete a layer 3 interface from a switch stack
     *
     * @remarks
     * Delete a layer 3 interface from a switch stack
     */
    deleteNetworkSwitchStackRoutingInterface(req: operations.DeleteNetworkSwitchStackRoutingInterfaceRequest, config?: AxiosRequestConfig): Promise<operations.DeleteNetworkSwitchStackRoutingInterfaceResponse>;
    /**
     * Delete a layer 3 static route for a switch stack
     *
     * @remarks
     * Delete a layer 3 static route for a switch stack
     */
    deleteNetworkSwitchStackRoutingStaticRoute(req: operations.DeleteNetworkSwitchStackRoutingStaticRouteRequest, config?: AxiosRequestConfig): Promise<operations.DeleteNetworkSwitchStackRoutingStaticRouteResponse>;
    /**
     * Delete an HTTP server from a network
     *
     * @remarks
     * Delete an HTTP server from a network
     */
    deleteNetworkWebhooksHttpServer(req: operations.DeleteNetworkWebhooksHttpServerRequest, config?: AxiosRequestConfig): Promise<operations.DeleteNetworkWebhooksHttpServerResponse>;
    /**
     * Destroy a webhook payload template for a network
     *
     * @remarks
     * Destroy a webhook payload template for a network. Does not work for included templates ('wpt_00001', 'wpt_00002', 'wpt_00003', 'wpt_00004', 'wpt_00005' or 'wpt_00006')
     */
    deleteNetworkWebhooksPayloadTemplate(req: operations.DeleteNetworkWebhooksPayloadTemplateRequest, config?: AxiosRequestConfig): Promise<operations.DeleteNetworkWebhooksPayloadTemplateResponse>;
    /**
     * Delete a RF Profile
     *
     * @remarks
     * Delete a RF Profile
     */
    deleteNetworkWirelessRfProfile(req: operations.DeleteNetworkWirelessRfProfileRequest, config?: AxiosRequestConfig): Promise<operations.DeleteNetworkWirelessRfProfileResponse>;
    /**
     * Delete an Identity PSK
     *
     * @remarks
     * Delete an Identity PSK
     */
    deleteNetworkWirelessSsidIdentityPsk(req: operations.DeleteNetworkWirelessSsidIdentityPskRequest, config?: AxiosRequestConfig): Promise<operations.DeleteNetworkWirelessSsidIdentityPskResponse>;
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
     * Delete Custom Analytics Artifact
     *
     * @remarks
     * Delete Custom Analytics Artifact
     */
    deleteOrganizationCameraCustomAnalyticsArtifact(req: operations.DeleteOrganizationCameraCustomAnalyticsArtifactRequest, config?: AxiosRequestConfig): Promise<operations.DeleteOrganizationCameraCustomAnalyticsArtifactResponse>;
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
     * Delete a monitored media server from this organization
     *
     * @remarks
     * Delete a monitored media server from this organization. Only valid for organizations with Meraki Insight.
     */
    deleteOrganizationInsightMonitoredMediaServer(req: operations.DeleteOrganizationInsightMonitoredMediaServerRequest, config?: AxiosRequestConfig): Promise<operations.DeleteOrganizationInsightMonitoredMediaServerResponse>;
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
     * Return a single device
     *
     * @remarks
     * Return a single device
     */
    getDevice(req: operations.GetDeviceRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceResponse>;
    /**
     * Return the uplink settings for an MX appliance
     *
     * @remarks
     * Return the uplink settings for an MX appliance
     */
    getDeviceApplianceUplinksSettings(req: operations.GetDeviceApplianceUplinksSettingsRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceApplianceUplinksSettingsResponse>;
    /**
     * Return custom analytics settings for a camera
     *
     * @remarks
     * Return custom analytics settings for a camera
     */
    getDeviceCameraCustomAnalytics(req: operations.GetDeviceCameraCustomAnalyticsRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceCameraCustomAnalyticsResponse>;
    /**
     * Returns quality and retention settings for the given camera
     *
     * @remarks
     * Returns quality and retention settings for the given camera
     */
    getDeviceCameraQualityAndRetention(req: operations.GetDeviceCameraQualityAndRetentionRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceCameraQualityAndRetentionResponse>;
    /**
     * Returns sense settings for a given camera
     *
     * @remarks
     * Returns sense settings for a given camera
     */
    getDeviceCameraSense(req: operations.GetDeviceCameraSenseRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceCameraSenseResponse>;
    /**
     * Returns the MV Sense object detection model list for the given camera
     *
     * @remarks
     * Returns the MV Sense object detection model list for the given camera
     */
    getDeviceCameraSenseObjectDetectionModels(req: operations.GetDeviceCameraSenseObjectDetectionModelsRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceCameraSenseObjectDetectionModelsResponse>;
    /**
     * Returns video link to the specified camera
     *
     * @remarks
     * Returns video link to the specified camera. If a timestamp is supplied, it links to that timestamp.
     */
    getDeviceCameraVideoLink(req: operations.GetDeviceCameraVideoLinkRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceCameraVideoLinkResponse>;
    /**
     * Returns video settings for the given camera
     *
     * @remarks
     * Returns video settings for the given camera
     */
    getDeviceCameraVideoSettings(req: operations.GetDeviceCameraVideoSettingsRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceCameraVideoSettingsResponse>;
    /**
     * Returns wireless profile assigned to the given camera
     *
     * @remarks
     * Returns wireless profile assigned to the given camera
     */
    getDeviceCameraWirelessProfiles(req: operations.GetDeviceCameraWirelessProfilesRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceCameraWirelessProfilesResponse>;
    /**
     * Show the LAN Settings of a MG
     *
     * @remarks
     * Show the LAN Settings of a MG
     */
    getDeviceCellularGatewayLan(req: operations.GetDeviceCellularGatewayLanRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceCellularGatewayLanResponse>;
    /**
     * Returns the port forwarding rules for a single MG.
     *
     * @remarks
     * Returns the port forwarding rules for a single MG.
     */
    getDeviceCellularGatewayPortForwardingRules(req: operations.GetDeviceCellularGatewayPortForwardingRulesRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceCellularGatewayPortForwardingRulesResponse>;
    /**
     * Return the SIM and APN configurations for a cellular device.
     *
     * @remarks
     * Return the SIM and APN configurations for a cellular device.
     */
    getDeviceCellularSims(req: operations.GetDeviceCellularSimsRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceCellularSimsResponse>;
    /**
     * Return the management interface settings for a device
     *
     * @remarks
     * Return the management interface settings for a device
     */
    getDeviceManagementInterface(req: operations.GetDeviceManagementInterfaceRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceManagementInterfaceResponse>;
    /**
     * List the sensor roles for a given sensor or camera device.
     *
     * @remarks
     * List the sensor roles for a given sensor or camera device.
     */
    getDeviceSensorRelationships(req: operations.GetDeviceSensorRelationshipsRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceSensorRelationshipsResponse>;
    /**
     * Return a switch port
     *
     * @remarks
     * Return a switch port
     */
    getDeviceSwitchPort(req: operations.GetDeviceSwitchPortRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceSwitchPortResponse>;
    /**
     * List the switch ports for a switch
     *
     * @remarks
     * List the switch ports for a switch
     */
    getDeviceSwitchPorts(req: operations.GetDeviceSwitchPortsRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceSwitchPortsResponse>;
    /**
     * Return a layer 3 interface for a switch
     *
     * @remarks
     * Return a layer 3 interface for a switch
     */
    getDeviceSwitchRoutingInterface(req: operations.GetDeviceSwitchRoutingInterfaceRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceSwitchRoutingInterfaceResponse>;
    /**
     * Return a layer 3 interface DHCP configuration for a switch
     *
     * @remarks
     * Return a layer 3 interface DHCP configuration for a switch
     */
    getDeviceSwitchRoutingInterfaceDhcp(req: operations.GetDeviceSwitchRoutingInterfaceDhcpRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceSwitchRoutingInterfaceDhcpResponse>;
    /**
     * List layer 3 interfaces for a switch
     *
     * @remarks
     * List layer 3 interfaces for a switch. Those for a stack may be found under switch stack routing.
     */
    getDeviceSwitchRoutingInterfaces(req: operations.GetDeviceSwitchRoutingInterfacesRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceSwitchRoutingInterfacesResponse>;
    /**
     * Return a layer 3 static route for a switch
     *
     * @remarks
     * Return a layer 3 static route for a switch
     */
    getDeviceSwitchRoutingStaticRoute(req: operations.GetDeviceSwitchRoutingStaticRouteRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceSwitchRoutingStaticRouteResponse>;
    /**
     * List layer 3 static routes for a switch
     *
     * @remarks
     * List layer 3 static routes for a switch
     */
    getDeviceSwitchRoutingStaticRoutes(req: operations.GetDeviceSwitchRoutingStaticRoutesRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceSwitchRoutingStaticRoutesResponse>;
    /**
     * Return warm spare configuration for a switch
     *
     * @remarks
     * Return warm spare configuration for a switch
     */
    getDeviceSwitchWarmSpare(req: operations.GetDeviceSwitchWarmSpareRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceSwitchWarmSpareResponse>;
    /**
     * Return the bluetooth settings for a wireless device
     *
     * @remarks
     * Return the bluetooth settings for a wireless device
     */
    getDeviceWirelessBluetoothSettings(req: operations.GetDeviceWirelessBluetoothSettingsRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceWirelessBluetoothSettingsResponse>;
    /**
     * Return the radio settings of a device
     *
     * @remarks
     * Return the radio settings of a device
     */
    getDeviceWirelessRadioSettings(req: operations.GetDeviceWirelessRadioSettingsRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceWirelessRadioSettingsResponse>;
    /**
     * Return a network
     *
     * @remarks
     * Return a network
     */
    getNetwork(req: operations.GetNetworkRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkResponse>;
    /**
     * Return the alert configuration for this network
     *
     * @remarks
     * Return the alert configuration for this network
     */
    getNetworkAlertsSettings(req: operations.GetNetworkAlertsSettingsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkAlertsSettingsResponse>;
    /**
     * Return the connectivity testing destinations for an MX network
     *
     * @remarks
     * Return the connectivity testing destinations for an MX network
     */
    getNetworkApplianceConnectivityMonitoringDestinations(req: operations.GetNetworkApplianceConnectivityMonitoringDestinationsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkApplianceConnectivityMonitoringDestinationsResponse>;
    /**
     * Return the content filtering settings for an MX network
     *
     * @remarks
     * Return the content filtering settings for an MX network
     */
    getNetworkApplianceContentFiltering(req: operations.GetNetworkApplianceContentFilteringRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkApplianceContentFilteringResponse>;
    /**
     * List all available content filtering categories for an MX network
     *
     * @remarks
     * List all available content filtering categories for an MX network
     */
    getNetworkApplianceContentFilteringCategories(req: operations.GetNetworkApplianceContentFilteringCategoriesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkApplianceContentFilteringCategoriesResponse>;
    /**
     * Return the cellular firewall rules for an MX network
     *
     * @remarks
     * Return the cellular firewall rules for an MX network
     */
    getNetworkApplianceFirewallCellularFirewallRules(req: operations.GetNetworkApplianceFirewallCellularFirewallRulesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkApplianceFirewallCellularFirewallRulesResponse>;
    /**
     * Return the accessibility settings of the given service ('ICMP', 'web', or 'SNMP')
     *
     * @remarks
     * Return the accessibility settings of the given service ('ICMP', 'web', or 'SNMP')
     */
    getNetworkApplianceFirewallFirewalledService(req: operations.GetNetworkApplianceFirewallFirewalledServiceRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkApplianceFirewallFirewalledServiceResponse>;
    /**
     * List the appliance services and their accessibility rules
     *
     * @remarks
     * List the appliance services and their accessibility rules
     */
    getNetworkApplianceFirewallFirewalledServices(req: operations.GetNetworkApplianceFirewallFirewalledServicesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkApplianceFirewallFirewalledServicesResponse>;
    /**
     * Return the inbound cellular firewall rules for an MX network
     *
     * @remarks
     * Return the inbound cellular firewall rules for an MX network
     */
    getNetworkApplianceFirewallInboundCellularFirewallRules(req: operations.GetNetworkApplianceFirewallInboundCellularFirewallRulesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkApplianceFirewallInboundCellularFirewallRulesResponse>;
    /**
     * Return the inbound firewall rules for an MX network
     *
     * @remarks
     * Return the inbound firewall rules for an MX network
     */
    getNetworkApplianceFirewallInboundFirewallRules(req: operations.GetNetworkApplianceFirewallInboundFirewallRulesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkApplianceFirewallInboundFirewallRulesResponse>;
    /**
     * Return the L3 firewall rules for an MX network
     *
     * @remarks
     * Return the L3 firewall rules for an MX network
     */
    getNetworkApplianceFirewallL3FirewallRules(req: operations.GetNetworkApplianceFirewallL3FirewallRulesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkApplianceFirewallL3FirewallRulesResponse>;
    /**
     * List the MX L7 firewall rules for an MX network
     *
     * @remarks
     * List the MX L7 firewall rules for an MX network
     */
    getNetworkApplianceFirewallL7FirewallRules(req: operations.GetNetworkApplianceFirewallL7FirewallRulesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkApplianceFirewallL7FirewallRulesResponse>;
    /**
     * Return the L7 firewall application categories and their associated applications for an MX network
     *
     * @remarks
     * Return the L7 firewall application categories and their associated applications for an MX network
     */
    getNetworkApplianceFirewallL7FirewallRulesApplicationCategories(req: operations.GetNetworkApplianceFirewallL7FirewallRulesApplicationCategoriesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkApplianceFirewallL7FirewallRulesApplicationCategoriesResponse>;
    /**
     * Return the 1:Many NAT mapping rules for an MX network
     *
     * @remarks
     * Return the 1:Many NAT mapping rules for an MX network
     */
    getNetworkApplianceFirewallOneToManyNatRules(req: operations.GetNetworkApplianceFirewallOneToManyNatRulesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkApplianceFirewallOneToManyNatRulesResponse>;
    /**
     * Return the 1:1 NAT mapping rules for an MX network
     *
     * @remarks
     * Return the 1:1 NAT mapping rules for an MX network
     */
    getNetworkApplianceFirewallOneToOneNatRules(req: operations.GetNetworkApplianceFirewallOneToOneNatRulesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkApplianceFirewallOneToOneNatRulesResponse>;
    /**
     * Return the port forwarding rules for an MX network
     *
     * @remarks
     * Return the port forwarding rules for an MX network
     */
    getNetworkApplianceFirewallPortForwardingRules(req: operations.GetNetworkApplianceFirewallPortForwardingRulesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkApplianceFirewallPortForwardingRulesResponse>;
    /**
     * Return the firewall settings for this network
     *
     * @remarks
     * Return the firewall settings for this network
     */
    getNetworkApplianceFirewallSettings(req: operations.GetNetworkApplianceFirewallSettingsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkApplianceFirewallSettingsResponse>;
    /**
     * Return per-port VLAN settings for a single MX port.
     *
     * @remarks
     * Return per-port VLAN settings for a single MX port.
     */
    getNetworkAppliancePort(req: operations.GetNetworkAppliancePortRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkAppliancePortResponse>;
    /**
     * List per-port VLAN settings for all ports of a MX.
     *
     * @remarks
     * List per-port VLAN settings for all ports of a MX.
     */
    getNetworkAppliancePorts(req: operations.GetNetworkAppliancePortsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkAppliancePortsResponse>;
    /**
     * Return a static delegated prefix from a network
     *
     * @remarks
     * Return a static delegated prefix from a network
     */
    getNetworkAppliancePrefixesDelegatedStatic(req: operations.GetNetworkAppliancePrefixesDelegatedStaticRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkAppliancePrefixesDelegatedStaticResponse>;
    /**
     * List static delegated prefixes for a network
     *
     * @remarks
     * List static delegated prefixes for a network
     */
    getNetworkAppliancePrefixesDelegatedStatics(req: operations.GetNetworkAppliancePrefixesDelegatedStaticsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkAppliancePrefixesDelegatedStaticsResponse>;
    /**
     * Returns all supported intrusion settings for an MX network
     *
     * @remarks
     * Returns all supported intrusion settings for an MX network
     */
    getNetworkApplianceSecurityIntrusion(req: operations.GetNetworkApplianceSecurityIntrusionRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkApplianceSecurityIntrusionResponse>;
    /**
     * Returns all supported malware settings for an MX network
     *
     * @remarks
     * Returns all supported malware settings for an MX network
     */
    getNetworkApplianceSecurityMalware(req: operations.GetNetworkApplianceSecurityMalwareRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkApplianceSecurityMalwareResponse>;
    /**
     * Return the appliance settings for a network
     *
     * @remarks
     * Return the appliance settings for a network
     */
    getNetworkApplianceSettings(req: operations.GetNetworkApplianceSettingsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkApplianceSettingsResponse>;
    /**
     * Return single LAN configuration
     *
     * @remarks
     * Return single LAN configuration
     */
    getNetworkApplianceSingleLan(req: operations.GetNetworkApplianceSingleLanRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkApplianceSingleLanResponse>;
    /**
     * Return a single MX SSID
     *
     * @remarks
     * Return a single MX SSID
     */
    getNetworkApplianceSsid(req: operations.GetNetworkApplianceSsidRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkApplianceSsidResponse>;
    /**
     * List the MX SSIDs in a network
     *
     * @remarks
     * List the MX SSIDs in a network
     */
    getNetworkApplianceSsids(req: operations.GetNetworkApplianceSsidsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkApplianceSsidsResponse>;
    /**
     * Return a static route for an MX or teleworker network
     *
     * @remarks
     * Return a static route for an MX or teleworker network
     */
    getNetworkApplianceStaticRoute(req: operations.GetNetworkApplianceStaticRouteRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkApplianceStaticRouteResponse>;
    /**
     * List the static routes for an MX or teleworker network
     *
     * @remarks
     * List the static routes for an MX or teleworker network
     */
    getNetworkApplianceStaticRoutes(req: operations.GetNetworkApplianceStaticRoutesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkApplianceStaticRoutesResponse>;
    /**
     * Display the traffic shaping settings for an MX network
     *
     * @remarks
     * Display the traffic shaping settings for an MX network
     */
    getNetworkApplianceTrafficShaping(req: operations.GetNetworkApplianceTrafficShapingRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkApplianceTrafficShapingResponse>;
    /**
     * Return a custom performance class for an MX network
     *
     * @remarks
     * Return a custom performance class for an MX network
     */
    getNetworkApplianceTrafficShapingCustomPerformanceClass(req: operations.GetNetworkApplianceTrafficShapingCustomPerformanceClassRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkApplianceTrafficShapingCustomPerformanceClassResponse>;
    /**
     * List all custom performance classes for an MX network
     *
     * @remarks
     * List all custom performance classes for an MX network
     */
    getNetworkApplianceTrafficShapingCustomPerformanceClasses(req: operations.GetNetworkApplianceTrafficShapingCustomPerformanceClassesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkApplianceTrafficShapingCustomPerformanceClassesResponse>;
    /**
     * Display the traffic shaping settings rules for an MX network
     *
     * @remarks
     * Display the traffic shaping settings rules for an MX network
     */
    getNetworkApplianceTrafficShapingRules(req: operations.GetNetworkApplianceTrafficShapingRulesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkApplianceTrafficShapingRulesResponse>;
    /**
     * Returns the uplink bandwidth settings for your MX network.
     *
     * @remarks
     * Returns the uplink bandwidth settings for your MX network.
     */
    getNetworkApplianceTrafficShapingUplinkBandwidth(req: operations.GetNetworkApplianceTrafficShapingUplinkBandwidthRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkApplianceTrafficShapingUplinkBandwidthResponse>;
    /**
     * Show uplink selection settings for an MX network
     *
     * @remarks
     * Show uplink selection settings for an MX network
     */
    getNetworkApplianceTrafficShapingUplinkSelection(req: operations.GetNetworkApplianceTrafficShapingUplinkSelectionRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkApplianceTrafficShapingUplinkSelectionResponse>;
    /**
     * Return a VLAN
     *
     * @remarks
     * Return a VLAN
     */
    getNetworkApplianceVlan(req: operations.GetNetworkApplianceVlanRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkApplianceVlanResponse>;
    /**
     * List the VLANs for an MX network
     *
     * @remarks
     * List the VLANs for an MX network
     */
    getNetworkApplianceVlans(req: operations.GetNetworkApplianceVlansRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkApplianceVlansResponse>;
    /**
     * Returns the enabled status of VLANs for the network
     *
     * @remarks
     * Returns the enabled status of VLANs for the network
     */
    getNetworkApplianceVlansSettings(req: operations.GetNetworkApplianceVlansSettingsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkApplianceVlansSettingsResponse>;
    /**
     * Return a Hub BGP Configuration
     *
     * @remarks
     * Return a Hub BGP Configuration
     */
    getNetworkApplianceVpnBgp(req: operations.GetNetworkApplianceVpnBgpRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkApplianceVpnBgpResponse>;
    /**
     * Return the site-to-site VPN settings of a network
     *
     * @remarks
     * Return the site-to-site VPN settings of a network. Only valid for MX networks.
     */
    getNetworkApplianceVpnSiteToSiteVpn(req: operations.GetNetworkApplianceVpnSiteToSiteVpnRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkApplianceVpnSiteToSiteVpnResponse>;
    /**
     * Return MX warm spare settings
     *
     * @remarks
     * Return MX warm spare settings
     */
    getNetworkApplianceWarmSpare(req: operations.GetNetworkApplianceWarmSpareRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkApplianceWarmSpareResponse>;
    /**
     * Retrieve a single quality retention profile
     *
     * @remarks
     * Retrieve a single quality retention profile
     */
    getNetworkCameraQualityRetentionProfile(req: operations.GetNetworkCameraQualityRetentionProfileRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkCameraQualityRetentionProfileResponse>;
    /**
     * List the quality retention profiles for this network
     *
     * @remarks
     * List the quality retention profiles for this network
     */
    getNetworkCameraQualityRetentionProfiles(req: operations.GetNetworkCameraQualityRetentionProfilesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkCameraQualityRetentionProfilesResponse>;
    /**
     * Returns a list of all camera recording schedules.
     *
     * @remarks
     * Returns a list of all camera recording schedules.
     */
    getNetworkCameraSchedules(req: operations.GetNetworkCameraSchedulesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkCameraSchedulesResponse>;
    /**
     * Retrieve a single camera wireless profile.
     *
     * @remarks
     * Retrieve a single camera wireless profile.
     */
    getNetworkCameraWirelessProfile(req: operations.GetNetworkCameraWirelessProfileRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkCameraWirelessProfileResponse>;
    /**
     * List the camera wireless profiles for this network.
     *
     * @remarks
     * List the camera wireless profiles for this network.
     */
    getNetworkCameraWirelessProfiles(req: operations.GetNetworkCameraWirelessProfilesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkCameraWirelessProfilesResponse>;
    /**
     * Return the connectivity testing destinations for an MG network
     *
     * @remarks
     * Return the connectivity testing destinations for an MG network
     */
    getNetworkCellularGatewayConnectivityMonitoringDestinations(req: operations.GetNetworkCellularGatewayConnectivityMonitoringDestinationsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkCellularGatewayConnectivityMonitoringDestinationsResponse>;
    /**
     * List common DHCP settings of MGs
     *
     * @remarks
     * List common DHCP settings of MGs
     */
    getNetworkCellularGatewayDhcp(req: operations.GetNetworkCellularGatewayDhcpRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkCellularGatewayDhcpResponse>;
    /**
     * Return the subnet pool and mask configured for MGs in the network.
     *
     * @remarks
     * Return the subnet pool and mask configured for MGs in the network.
     */
    getNetworkCellularGatewaySubnetPool(req: operations.GetNetworkCellularGatewaySubnetPoolRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkCellularGatewaySubnetPoolResponse>;
    /**
     * Returns the uplink settings for your MG network.
     *
     * @remarks
     * Returns the uplink settings for your MG network.
     */
    getNetworkCellularGatewayUplink(req: operations.GetNetworkCellularGatewayUplinkRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkCellularGatewayUplinkResponse>;
    /**
     * Return the policy assigned to a client on the network
     *
     * @remarks
     * Return the policy assigned to a client on the network. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.
     */
    getNetworkClientPolicy(req: operations.GetNetworkClientPolicyRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkClientPolicyResponse>;
    /**
     * Return the splash authorization for a client, for each SSID they've associated with through splash
     *
     * @remarks
     * Return the splash authorization for a client, for each SSID they've associated with through splash. Only enabled SSIDs with Click-through splash enabled will be included. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.
     */
    getNetworkClientSplashAuthorizationStatus(req: operations.GetNetworkClientSplashAuthorizationStatusRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkClientSplashAuthorizationStatusResponse>;
    /**
     * List the devices in a network
     *
     * @remarks
     * List the devices in a network
     */
    getNetworkDevices(req: operations.GetNetworkDevicesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkDevicesResponse>;
    /**
     * Get firmware upgrade information for a network
     *
     * @remarks
     * Get firmware upgrade information for a network
     */
    getNetworkFirmwareUpgrades(req: operations.GetNetworkFirmwareUpgradesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkFirmwareUpgradesResponse>;
    /**
     * Get the Staged Upgrade Event from a network
     *
     * @remarks
     * Get the Staged Upgrade Event from a network
     */
    getNetworkFirmwareUpgradesStagedEvents(req: operations.GetNetworkFirmwareUpgradesStagedEventsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkFirmwareUpgradesStagedEventsResponse>;
    /**
     * Get a Staged Upgrade Group from a network
     *
     * @remarks
     * Get a Staged Upgrade Group from a network
     */
    getNetworkFirmwareUpgradesStagedGroup(req: operations.GetNetworkFirmwareUpgradesStagedGroupRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkFirmwareUpgradesStagedGroupResponse>;
    /**
     * List of Staged Upgrade Groups in a network
     *
     * @remarks
     * List of Staged Upgrade Groups in a network
     */
    getNetworkFirmwareUpgradesStagedGroups(req: operations.GetNetworkFirmwareUpgradesStagedGroupsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkFirmwareUpgradesStagedGroupsResponse>;
    /**
     * Order of Staged Upgrade Groups in a network
     *
     * @remarks
     * Order of Staged Upgrade Groups in a network
     */
    getNetworkFirmwareUpgradesStagedStages(req: operations.GetNetworkFirmwareUpgradesStagedStagesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkFirmwareUpgradesStagedStagesResponse>;
    /**
     * Find a floor plan by ID
     *
     * @remarks
     * Find a floor plan by ID
     */
    getNetworkFloorPlan(req: operations.GetNetworkFloorPlanRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkFloorPlanResponse>;
    /**
     * List the floor plans that belong to your network
     *
     * @remarks
     * List the floor plans that belong to your network
     */
    getNetworkFloorPlans(req: operations.GetNetworkFloorPlansRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkFloorPlansResponse>;
    /**
     * List the group policies in a network
     *
     * @remarks
     * List the group policies in a network
     */
    getNetworkGroupPolicies(req: operations.GetNetworkGroupPoliciesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkGroupPoliciesResponse>;
    /**
     * Display a group policy
     *
     * @remarks
     * Display a group policy
     */
    getNetworkGroupPolicy(req: operations.GetNetworkGroupPolicyRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkGroupPolicyResponse>;
    /**
     * Return all global alerts on this network
     *
     * @remarks
     * Return all global alerts on this network
     */
    getNetworkHealthAlerts(req: operations.GetNetworkHealthAlertsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkHealthAlertsResponse>;
    /**
     * Return the Meraki Auth splash guest, RADIUS, or client VPN user
     *
     * @remarks
     * Return the Meraki Auth splash guest, RADIUS, or client VPN user
     */
    getNetworkMerakiAuthUser(req: operations.GetNetworkMerakiAuthUserRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkMerakiAuthUserResponse>;
    /**
     * List the users configured under Meraki Authentication for a network (splash guest or RADIUS users for a wireless network, or client VPN users for a wired network)
     *
     * @remarks
     * List the users configured under Meraki Authentication for a network (splash guest or RADIUS users for a wireless network, or client VPN users for a wired network)
     */
    getNetworkMerakiAuthUsers(req: operations.GetNetworkMerakiAuthUsersRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkMerakiAuthUsersResponse>;
    /**
     * Return an MQTT broker
     *
     * @remarks
     * Return an MQTT broker
     */
    getNetworkMqttBroker(req: operations.GetNetworkMqttBrokerRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkMqttBrokerResponse>;
    /**
     * List the MQTT brokers for this network
     *
     * @remarks
     * List the MQTT brokers for this network
     */
    getNetworkMqttBrokers(req: operations.GetNetworkMqttBrokersRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkMqttBrokersResponse>;
    /**
     * Return the NetFlow traffic reporting settings for a network
     *
     * @remarks
     * Return the NetFlow traffic reporting settings for a network
     */
    getNetworkNetflow(req: operations.GetNetworkNetflowRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkNetflowResponse>;
    /**
     * List the keys required to access Personally Identifiable Information (PII) for a given identifier
     *
     * @remarks
     * List the keys required to access Personally Identifiable Information (PII) for a given identifier. Exactly one identifier will be accepted. If the organization contains org-wide Systems Manager users matching the key provided then there will be an entry with the key "0" containing the applicable keys.
     *
     * ## ALTERNATE PATH
     *
     * ```
     * /organizations/{organizationId}/pii/piiKeys
     * ```
     */
    getNetworkPiiPiiKeys(req: operations.GetNetworkPiiPiiKeysRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkPiiPiiKeysResponse>;
    /**
     * Return a PII request
     *
     * @remarks
     * Return a PII request
     *
     * ## ALTERNATE PATH
     *
     * ```
     * /organizations/{organizationId}/pii/requests/{requestId}
     * ```
     */
    getNetworkPiiRequest(req: operations.GetNetworkPiiRequestRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkPiiRequestResponse>;
    /**
     * List the PII requests for this network or organization
     *
     * @remarks
     * List the PII requests for this network or organization
     *
     * ## ALTERNATE PATH
     *
     * ```
     * /organizations/{organizationId}/pii/requests
     * ```
     */
    getNetworkPiiRequests(req: operations.GetNetworkPiiRequestsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkPiiRequestsResponse>;
    /**
     * Given a piece of Personally Identifiable Information (PII), return the Systems Manager device ID(s) associated with that identifier
     *
     * @remarks
     * Given a piece of Personally Identifiable Information (PII), return the Systems Manager device ID(s) associated with that identifier. These device IDs can be used with the Systems Manager API endpoints to retrieve device details. Exactly one identifier will be accepted.
     *
     * ## ALTERNATE PATH
     *
     * ```
     * /organizations/{organizationId}/pii/smDevicesForKey
     * ```
     */
    getNetworkPiiSmDevicesForKey(req: operations.GetNetworkPiiSmDevicesForKeyRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkPiiSmDevicesForKeyResponse>;
    /**
     * Given a piece of Personally Identifiable Information (PII), return the Systems Manager owner ID(s) associated with that identifier
     *
     * @remarks
     * Given a piece of Personally Identifiable Information (PII), return the Systems Manager owner ID(s) associated with that identifier. These owner IDs can be used with the Systems Manager API endpoints to retrieve owner details. Exactly one identifier will be accepted.
     *
     * ## ALTERNATE PATH
     *
     * ```
     * /organizations/{organizationId}/pii/smOwnersForKey
     * ```
     */
    getNetworkPiiSmOwnersForKey(req: operations.GetNetworkPiiSmOwnersForKeyRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkPiiSmOwnersForKeyResponse>;
    /**
     * Get policies for all clients with policies
     *
     * @remarks
     * Get policies for all clients with policies
     */
    getNetworkPoliciesByClient(req: operations.GetNetworkPoliciesByClientRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkPoliciesByClientResponse>;
    /**
     * Show details of a sensor alert profile for a network.
     *
     * @remarks
     * Show details of a sensor alert profile for a network.
     */
    getNetworkSensorAlertsProfile(req: operations.GetNetworkSensorAlertsProfileRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSensorAlertsProfileResponse>;
    /**
     * Lists all sensor alert profiles for a network.
     *
     * @remarks
     * Lists all sensor alert profiles for a network.
     */
    getNetworkSensorAlertsProfiles(req: operations.GetNetworkSensorAlertsProfilesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSensorAlertsProfilesResponse>;
    /**
     * List the sensor roles for devices in a given network
     *
     * @remarks
     * List the sensor roles for devices in a given network
     */
    getNetworkSensorRelationships(req: operations.GetNetworkSensorRelationshipsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSensorRelationshipsResponse>;
    /**
     * Return the settings for a network
     *
     * @remarks
     * Return the settings for a network
     */
    getNetworkSettings(req: operations.GetNetworkSettingsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSettingsResponse>;
    /**
     * Bypass activation lock attempt status
     *
     * @remarks
     * Bypass activation lock attempt status
     */
    getNetworkSmBypassActivationLockAttempt(req: operations.GetNetworkSmBypassActivationLockAttemptRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSmBypassActivationLockAttemptResponse>;
    /**
     * List the certs on a device
     *
     * @remarks
     * List the certs on a device
     */
    getNetworkSmDeviceCerts(req: operations.GetNetworkSmDeviceCertsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSmDeviceCertsResponse>;
    /**
     * Get the installed profiles associated with a device
     *
     * @remarks
     * Get the installed profiles associated with a device
     */
    getNetworkSmDeviceDeviceProfiles(req: operations.GetNetworkSmDeviceDeviceProfilesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSmDeviceDeviceProfilesResponse>;
    /**
     * List the network adapters of a device
     *
     * @remarks
     * List the network adapters of a device
     */
    getNetworkSmDeviceNetworkAdapters(req: operations.GetNetworkSmDeviceNetworkAdaptersRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSmDeviceNetworkAdaptersResponse>;
    /**
     * List the restrictions on a device
     *
     * @remarks
     * List the restrictions on a device
     */
    getNetworkSmDeviceRestrictions(req: operations.GetNetworkSmDeviceRestrictionsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSmDeviceRestrictionsResponse>;
    /**
     * List the security centers on a device
     *
     * @remarks
     * List the security centers on a device
     */
    getNetworkSmDeviceSecurityCenters(req: operations.GetNetworkSmDeviceSecurityCentersRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSmDeviceSecurityCentersResponse>;
    /**
     * Get a list of softwares associated with a device
     *
     * @remarks
     * Get a list of softwares associated with a device
     */
    getNetworkSmDeviceSoftwares(req: operations.GetNetworkSmDeviceSoftwaresRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSmDeviceSoftwaresResponse>;
    /**
     * List the saved SSID names on a device
     *
     * @remarks
     * List the saved SSID names on a device
     */
    getNetworkSmDeviceWlanLists(req: operations.GetNetworkSmDeviceWlanListsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSmDeviceWlanListsResponse>;
    /**
     * List the devices enrolled in an SM network with various specified fields and filters
     *
     * @remarks
     * List the devices enrolled in an SM network with various specified fields and filters
     */
    getNetworkSmDevices(req: operations.GetNetworkSmDevicesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSmDevicesResponse>;
    /**
     * List all profiles in a network
     *
     * @remarks
     * List all profiles in a network
     */
    getNetworkSmProfiles(req: operations.GetNetworkSmProfilesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSmProfilesResponse>;
    /**
     * Return a target group
     *
     * @remarks
     * Return a target group
     */
    getNetworkSmTargetGroup(req: operations.GetNetworkSmTargetGroupRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSmTargetGroupResponse>;
    /**
     * List the target groups in this network
     *
     * @remarks
     * List the target groups in this network
     */
    getNetworkSmTargetGroups(req: operations.GetNetworkSmTargetGroupsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSmTargetGroupsResponse>;
    /**
     * List Trusted Access Configs
     *
     * @remarks
     * List Trusted Access Configs
     */
    getNetworkSmTrustedAccessConfigs(req: operations.GetNetworkSmTrustedAccessConfigsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSmTrustedAccessConfigsResponse>;
    /**
     * List User Access Devices and its Trusted Access Connections
     *
     * @remarks
     * List User Access Devices and its Trusted Access Connections
     */
    getNetworkSmUserAccessDevices(req: operations.GetNetworkSmUserAccessDevicesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSmUserAccessDevicesResponse>;
    /**
     * Get the profiles associated with a user
     *
     * @remarks
     * Get the profiles associated with a user
     */
    getNetworkSmUserDeviceProfiles(req: operations.GetNetworkSmUserDeviceProfilesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSmUserDeviceProfilesResponse>;
    /**
     * Get a list of softwares associated with a user
     *
     * @remarks
     * Get a list of softwares associated with a user
     */
    getNetworkSmUserSoftwares(req: operations.GetNetworkSmUserSoftwaresRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSmUserSoftwaresResponse>;
    /**
     * List the owners in an SM network with various specified fields and filters
     *
     * @remarks
     * List the owners in an SM network with various specified fields and filters
     */
    getNetworkSmUsers(req: operations.GetNetworkSmUsersRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSmUsersResponse>;
    /**
     * Return the SNMP settings for a network
     *
     * @remarks
     * Return the SNMP settings for a network
     */
    getNetworkSnmp(req: operations.GetNetworkSnmpRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSnmpResponse>;
    /**
     * Return the access control lists for a MS network
     *
     * @remarks
     * Return the access control lists for a MS network
     */
    getNetworkSwitchAccessControlLists(req: operations.GetNetworkSwitchAccessControlListsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSwitchAccessControlListsResponse>;
    /**
     * List the access policies for a switch network
     *
     * @remarks
     * List the access policies for a switch network. Only returns access policies with 'my RADIUS server' as authentication method
     */
    getNetworkSwitchAccessPolicies(req: operations.GetNetworkSwitchAccessPoliciesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSwitchAccessPoliciesResponse>;
    /**
     * Return a specific access policy for a switch network
     *
     * @remarks
     * Return a specific access policy for a switch network
     */
    getNetworkSwitchAccessPolicy(req: operations.GetNetworkSwitchAccessPolicyRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSwitchAccessPolicyResponse>;
    /**
     * Return the switch alternate management interface for the network
     *
     * @remarks
     * Return the switch alternate management interface for the network
     */
    getNetworkSwitchAlternateManagementInterface(req: operations.GetNetworkSwitchAlternateManagementInterfaceRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSwitchAlternateManagementInterfaceResponse>;
    /**
     * Return the DHCP server settings
     *
     * @remarks
     * Return the DHCP server settings. Blocked/allowed servers are only applied when default policy is allow/block, respectively
     */
    getNetworkSwitchDhcpServerPolicy(req: operations.GetNetworkSwitchDhcpServerPolicyRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSwitchDhcpServerPolicyResponse>;
    /**
     * Return the list of servers trusted by Dynamic ARP Inspection on this network
     *
     * @remarks
     * Return the list of servers trusted by Dynamic ARP Inspection on this network. These are also known as whitelisted snoop entries
     */
    getNetworkSwitchDhcpServerPolicyArpInspectionTrustedServers(req: operations.GetNetworkSwitchDhcpServerPolicyArpInspectionTrustedServersRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSwitchDhcpServerPolicyArpInspectionTrustedServersResponse>;
    /**
     * Return the devices that have a Dynamic ARP Inspection warning and their warnings
     *
     * @remarks
     * Return the devices that have a Dynamic ARP Inspection warning and their warnings
     */
    getNetworkSwitchDhcpServerPolicyArpInspectionWarningsByDevice(req: operations.GetNetworkSwitchDhcpServerPolicyArpInspectionWarningsByDeviceRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSwitchDhcpServerPolicyArpInspectionWarningsByDeviceResponse>;
    /**
     * Return the network's DHCPv4 servers seen within the selected timeframe (default 1 day)
     *
     * @remarks
     * Return the network's DHCPv4 servers seen within the selected timeframe (default 1 day)
     */
    getNetworkSwitchDhcpV4ServersSeen(req: operations.GetNetworkSwitchDhcpV4ServersSeenRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSwitchDhcpV4ServersSeenResponse>;
    /**
     * Return the DSCP to CoS mappings
     *
     * @remarks
     * Return the DSCP to CoS mappings
     */
    getNetworkSwitchDscpToCosMappings(req: operations.GetNetworkSwitchDscpToCosMappingsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSwitchDscpToCosMappingsResponse>;
    /**
     * List link aggregation groups
     *
     * @remarks
     * List link aggregation groups
     */
    getNetworkSwitchLinkAggregations(req: operations.GetNetworkSwitchLinkAggregationsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSwitchLinkAggregationsResponse>;
    /**
     * Return the MTU configuration
     *
     * @remarks
     * Return the MTU configuration
     */
    getNetworkSwitchMtu(req: operations.GetNetworkSwitchMtuRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSwitchMtuResponse>;
    /**
     * List switch port schedules
     *
     * @remarks
     * List switch port schedules
     */
    getNetworkSwitchPortSchedules(req: operations.GetNetworkSwitchPortSchedulesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSwitchPortSchedulesResponse>;
    /**
     * Return a quality of service rule
     *
     * @remarks
     * Return a quality of service rule
     */
    getNetworkSwitchQosRule(req: operations.GetNetworkSwitchQosRuleRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSwitchQosRuleResponse>;
    /**
     * List quality of service rules
     *
     * @remarks
     * List quality of service rules
     */
    getNetworkSwitchQosRules(req: operations.GetNetworkSwitchQosRulesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSwitchQosRulesResponse>;
    /**
     * Return the quality of service rule IDs by order in which they will be processed by the switch
     *
     * @remarks
     * Return the quality of service rule IDs by order in which they will be processed by the switch
     */
    getNetworkSwitchQosRulesOrder(req: operations.GetNetworkSwitchQosRulesOrderRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSwitchQosRulesOrderResponse>;
    /**
     * Return multicast settings for a network
     *
     * @remarks
     * Return multicast settings for a network
     */
    getNetworkSwitchRoutingMulticast(req: operations.GetNetworkSwitchRoutingMulticastRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSwitchRoutingMulticastResponse>;
    /**
     * Return a multicast rendezvous point
     *
     * @remarks
     * Return a multicast rendezvous point
     */
    getNetworkSwitchRoutingMulticastRendezvousPoint(req: operations.GetNetworkSwitchRoutingMulticastRendezvousPointRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSwitchRoutingMulticastRendezvousPointResponse>;
    /**
     * List multicast rendezvous points
     *
     * @remarks
     * List multicast rendezvous points
     */
    getNetworkSwitchRoutingMulticastRendezvousPoints(req: operations.GetNetworkSwitchRoutingMulticastRendezvousPointsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSwitchRoutingMulticastRendezvousPointsResponse>;
    /**
     * Return layer 3 OSPF routing configuration
     *
     * @remarks
     * Return layer 3 OSPF routing configuration
     */
    getNetworkSwitchRoutingOspf(req: operations.GetNetworkSwitchRoutingOspfRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSwitchRoutingOspfResponse>;
    /**
     * Returns the switch network settings
     *
     * @remarks
     * Returns the switch network settings
     */
    getNetworkSwitchSettings(req: operations.GetNetworkSwitchSettingsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSwitchSettingsResponse>;
    /**
     * Show a switch stack
     *
     * @remarks
     * Show a switch stack
     */
    getNetworkSwitchStack(req: operations.GetNetworkSwitchStackRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSwitchStackResponse>;
    /**
     * Return a layer 3 interface from a switch stack
     *
     * @remarks
     * Return a layer 3 interface from a switch stack
     */
    getNetworkSwitchStackRoutingInterface(req: operations.GetNetworkSwitchStackRoutingInterfaceRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSwitchStackRoutingInterfaceResponse>;
    /**
     * Return a layer 3 interface DHCP configuration for a switch stack
     *
     * @remarks
     * Return a layer 3 interface DHCP configuration for a switch stack
     */
    getNetworkSwitchStackRoutingInterfaceDhcp(req: operations.GetNetworkSwitchStackRoutingInterfaceDhcpRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSwitchStackRoutingInterfaceDhcpResponse>;
    /**
     * List layer 3 interfaces for a switch stack
     *
     * @remarks
     * List layer 3 interfaces for a switch stack
     */
    getNetworkSwitchStackRoutingInterfaces(req: operations.GetNetworkSwitchStackRoutingInterfacesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSwitchStackRoutingInterfacesResponse>;
    /**
     * Return a layer 3 static route for a switch stack
     *
     * @remarks
     * Return a layer 3 static route for a switch stack
     */
    getNetworkSwitchStackRoutingStaticRoute(req: operations.GetNetworkSwitchStackRoutingStaticRouteRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSwitchStackRoutingStaticRouteResponse>;
    /**
     * List layer 3 static routes for a switch stack
     *
     * @remarks
     * List layer 3 static routes for a switch stack
     */
    getNetworkSwitchStackRoutingStaticRoutes(req: operations.GetNetworkSwitchStackRoutingStaticRoutesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSwitchStackRoutingStaticRoutesResponse>;
    /**
     * List the switch stacks in a network
     *
     * @remarks
     * List the switch stacks in a network
     */
    getNetworkSwitchStacks(req: operations.GetNetworkSwitchStacksRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSwitchStacksResponse>;
    /**
     * Return the storm control configuration for a switch network
     *
     * @remarks
     * Return the storm control configuration for a switch network
     */
    getNetworkSwitchStormControl(req: operations.GetNetworkSwitchStormControlRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSwitchStormControlResponse>;
    /**
     * Returns STP settings
     *
     * @remarks
     * Returns STP settings
     */
    getNetworkSwitchStp(req: operations.GetNetworkSwitchStpRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSwitchStpResponse>;
    /**
     * List the syslog servers for a network
     *
     * @remarks
     * List the syslog servers for a network
     */
    getNetworkSyslogServers(req: operations.GetNetworkSyslogServersRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSyslogServersResponse>;
    /**
     * Return the traffic analysis settings for a network
     *
     * @remarks
     * Return the traffic analysis settings for a network
     */
    getNetworkTrafficAnalysis(req: operations.GetNetworkTrafficAnalysisRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkTrafficAnalysisResponse>;
    /**
     * Returns the application categories for traffic shaping rules.
     *
     * @remarks
     * Returns the application categories for traffic shaping rules.
     */
    getNetworkTrafficShapingApplicationCategories(req: operations.GetNetworkTrafficShapingApplicationCategoriesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkTrafficShapingApplicationCategoriesResponse>;
    /**
     * Returns the available DSCP tagging options for your traffic shaping rules.
     *
     * @remarks
     * Returns the available DSCP tagging options for your traffic shaping rules.
     */
    getNetworkTrafficShapingDscpTaggingOptions(req: operations.GetNetworkTrafficShapingDscpTaggingOptionsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkTrafficShapingDscpTaggingOptionsResponse>;
    /**
     * Return an HTTP server for a network
     *
     * @remarks
     * Return an HTTP server for a network
     */
    getNetworkWebhooksHttpServer(req: operations.GetNetworkWebhooksHttpServerRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkWebhooksHttpServerResponse>;
    /**
     * List the HTTP servers for a network
     *
     * @remarks
     * List the HTTP servers for a network
     */
    getNetworkWebhooksHttpServers(req: operations.GetNetworkWebhooksHttpServersRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkWebhooksHttpServersResponse>;
    /**
     * Get the webhook payload template for a network
     *
     * @remarks
     * Get the webhook payload template for a network
     */
    getNetworkWebhooksPayloadTemplate(req: operations.GetNetworkWebhooksPayloadTemplateRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkWebhooksPayloadTemplateResponse>;
    /**
     * List the webhook payload templates for a network
     *
     * @remarks
     * List the webhook payload templates for a network
     */
    getNetworkWebhooksPayloadTemplates(req: operations.GetNetworkWebhooksPayloadTemplatesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkWebhooksPayloadTemplatesResponse>;
    /**
     * Return the status of a webhook test for a network
     *
     * @remarks
     * Return the status of a webhook test for a network
     */
    getNetworkWebhooksWebhookTest(req: operations.GetNetworkWebhooksWebhookTestRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkWebhooksWebhookTestResponse>;
    /**
     * Return alternate management interface and devices with IP assigned
     *
     * @remarks
     * Return alternate management interface and devices with IP assigned
     */
    getNetworkWirelessAlternateManagementInterface(req: operations.GetNetworkWirelessAlternateManagementInterfaceRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkWirelessAlternateManagementInterfaceResponse>;
    /**
     * Return the billing settings of this network
     *
     * @remarks
     * Return the billing settings of this network
     */
    getNetworkWirelessBilling(req: operations.GetNetworkWirelessBillingRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkWirelessBillingResponse>;
    /**
     * Return the Bluetooth settings for a network. <a href="https://documentation.meraki.com/MR/Bluetooth/Bluetooth_Low_Energy_(BLE)">Bluetooth settings</a> must be enabled on the network.
     *
     * @remarks
     * Return the Bluetooth settings for a network. <a href="https://documentation.meraki.com/MR/Bluetooth/Bluetooth_Low_Energy_(BLE)">Bluetooth settings</a> must be enabled on the network.
     */
    getNetworkWirelessBluetoothSettings(req: operations.GetNetworkWirelessBluetoothSettingsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkWirelessBluetoothSettingsResponse>;
    /**
     * Return a RF profile
     *
     * @remarks
     * Return a RF profile
     */
    getNetworkWirelessRfProfile(req: operations.GetNetworkWirelessRfProfileRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkWirelessRfProfileResponse>;
    /**
     * List the non-basic RF profiles for this network
     *
     * @remarks
     * List the non-basic RF profiles for this network
     */
    getNetworkWirelessRfProfiles(req: operations.GetNetworkWirelessRfProfilesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkWirelessRfProfilesResponse>;
    /**
     * Return the wireless settings for a network
     *
     * @remarks
     * Return the wireless settings for a network
     */
    getNetworkWirelessSettings(req: operations.GetNetworkWirelessSettingsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkWirelessSettingsResponse>;
    /**
     * Return a single MR SSID
     *
     * @remarks
     * Return a single MR SSID
     */
    getNetworkWirelessSsid(req: operations.GetNetworkWirelessSsidRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkWirelessSsidResponse>;
    /**
     * List the Bonjour forwarding setting and rules for the SSID
     *
     * @remarks
     * List the Bonjour forwarding setting and rules for the SSID
     */
    getNetworkWirelessSsidBonjourForwarding(req: operations.GetNetworkWirelessSsidBonjourForwardingRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkWirelessSsidBonjourForwardingResponse>;
    /**
     * List the device type group policies for the SSID
     *
     * @remarks
     * List the device type group policies for the SSID
     */
    getNetworkWirelessSsidDeviceTypeGroupPolicies(req: operations.GetNetworkWirelessSsidDeviceTypeGroupPoliciesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkWirelessSsidDeviceTypeGroupPoliciesResponse>;
    /**
     * Return the EAP overridden parameters for an SSID
     *
     * @remarks
     * Return the EAP overridden parameters for an SSID
     */
    getNetworkWirelessSsidEapOverride(req: operations.GetNetworkWirelessSsidEapOverrideRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkWirelessSsidEapOverrideResponse>;
    /**
     * Return the L3 firewall rules for an SSID on an MR network
     *
     * @remarks
     * Return the L3 firewall rules for an SSID on an MR network
     */
    getNetworkWirelessSsidFirewallL3FirewallRules(req: operations.GetNetworkWirelessSsidFirewallL3FirewallRulesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkWirelessSsidFirewallL3FirewallRulesResponse>;
    /**
     * Return the L7 firewall rules for an SSID on an MR network
     *
     * @remarks
     * Return the L7 firewall rules for an SSID on an MR network
     */
    getNetworkWirelessSsidFirewallL7FirewallRules(req: operations.GetNetworkWirelessSsidFirewallL7FirewallRulesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkWirelessSsidFirewallL7FirewallRulesResponse>;
    /**
     * Return the Hotspot 2.0 settings for an SSID
     *
     * @remarks
     * Return the Hotspot 2.0 settings for an SSID
     */
    getNetworkWirelessSsidHotspot20(req: operations.GetNetworkWirelessSsidHotspot20Request, config?: AxiosRequestConfig): Promise<operations.GetNetworkWirelessSsidHotspot20Response>;
    /**
     * Return an Identity PSK
     *
     * @remarks
     * Return an Identity PSK
     */
    getNetworkWirelessSsidIdentityPsk(req: operations.GetNetworkWirelessSsidIdentityPskRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkWirelessSsidIdentityPskResponse>;
    /**
     * List all Identity PSKs in a wireless network
     *
     * @remarks
     * List all Identity PSKs in a wireless network
     */
    getNetworkWirelessSsidIdentityPsks(req: operations.GetNetworkWirelessSsidIdentityPsksRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkWirelessSsidIdentityPsksResponse>;
    /**
     * List the outage schedule for the SSID
     *
     * @remarks
     * List the outage schedule for the SSID
     */
    getNetworkWirelessSsidSchedules(req: operations.GetNetworkWirelessSsidSchedulesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkWirelessSsidSchedulesResponse>;
    /**
     * Display the splash page settings for the given SSID
     *
     * @remarks
     * Display the splash page settings for the given SSID
     */
    getNetworkWirelessSsidSplashSettings(req: operations.GetNetworkWirelessSsidSplashSettingsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkWirelessSsidSplashSettingsResponse>;
    /**
     * Display the traffic shaping settings for a SSID on an MR network
     *
     * @remarks
     * Display the traffic shaping settings for a SSID on an MR network
     */
    getNetworkWirelessSsidTrafficShapingRules(req: operations.GetNetworkWirelessSsidTrafficShapingRulesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkWirelessSsidTrafficShapingRulesResponse>;
    /**
     * List the VPN settings for the SSID.
     *
     * @remarks
     * List the VPN settings for the SSID.
     */
    getNetworkWirelessSsidVpn(req: operations.GetNetworkWirelessSsidVpnRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkWirelessSsidVpnResponse>;
    /**
     * List the MR SSIDs in a network
     *
     * @remarks
     * List the MR SSIDs in a network
     */
    getNetworkWirelessSsids(req: operations.GetNetworkWirelessSsidsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkWirelessSsidsResponse>;
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
     * Returns all supported intrusion settings for an organization
     *
     * @remarks
     * Returns all supported intrusion settings for an organization
     */
    getOrganizationApplianceSecurityIntrusion(req: operations.GetOrganizationApplianceSecurityIntrusionRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationApplianceSecurityIntrusionResponse>;
    /**
     * Return the third party VPN peers for an organization
     *
     * @remarks
     * Return the third party VPN peers for an organization
     */
    getOrganizationApplianceVPNThirdPartyVPNPeers(req: operations.GetOrganizationApplianceVPNThirdPartyVPNPeersRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationApplianceVPNThirdPartyVPNPeersResponse>;
    /**
     * Return the firewall rules for an organization's site-to-site VPN
     *
     * @remarks
     * Return the firewall rules for an organization's site-to-site VPN
     */
    getOrganizationApplianceVpnVpnFirewallRules(req: operations.GetOrganizationApplianceVpnVpnFirewallRulesRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationApplianceVpnVpnFirewallRulesResponse>;
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
     * Get Custom Analytics Artifact
     *
     * @remarks
     * Get Custom Analytics Artifact
     */
    getOrganizationCameraCustomAnalyticsArtifact(req: operations.GetOrganizationCameraCustomAnalyticsArtifactRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationCameraCustomAnalyticsArtifactResponse>;
    /**
     * List Custom Analytics Artifacts
     *
     * @remarks
     * List Custom Analytics Artifacts
     */
    getOrganizationCameraCustomAnalyticsArtifacts(req: operations.GetOrganizationCameraCustomAnalyticsArtifactsRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationCameraCustomAnalyticsArtifactsResponse>;
    /**
     * Fetch onboarding status of cameras
     *
     * @remarks
     * Fetch onboarding status of cameras
     */
    getOrganizationCameraOnboardingStatuses(req: operations.GetOrganizationCameraOnboardingStatusesRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationCameraOnboardingStatusesResponse>;
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
     * Return a switch profile port
     *
     * @remarks
     * Return a switch profile port
     */
    getOrganizationConfigTemplateSwitchProfilePort(req: operations.GetOrganizationConfigTemplateSwitchProfilePortRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationConfigTemplateSwitchProfilePortResponse>;
    /**
     * Return all the ports of a switch profile
     *
     * @remarks
     * Return all the ports of a switch profile
     */
    getOrganizationConfigTemplateSwitchProfilePorts(req: operations.GetOrganizationConfigTemplateSwitchProfilePortsRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationConfigTemplateSwitchProfilePortsResponse>;
    /**
     * List the switch profiles for your switch template configuration
     *
     * @remarks
     * List the switch profiles for your switch template configuration
     */
    getOrganizationConfigTemplateSwitchProfiles(req: operations.GetOrganizationConfigTemplateSwitchProfilesRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationConfigTemplateSwitchProfilesResponse>;
    /**
     * List the configuration templates for this organization
     *
     * @remarks
     * List the configuration templates for this organization
     */
    getOrganizationConfigTemplates(req: operations.GetOrganizationConfigTemplatesRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationConfigTemplatesResponse>;
    /**
     * List the devices in an organization
     *
     * @remarks
     * List the devices in an organization
     */
    getOrganizationDevices(req: operations.GetOrganizationDevicesRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationDevicesResponse>;
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
     * List all Insight tracked applications
     *
     * @remarks
     * List all Insight tracked applications
     */
    getOrganizationInsightApplications(req: operations.GetOrganizationInsightApplicationsRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationInsightApplicationsResponse>;
    /**
     * Return a monitored media server for this organization
     *
     * @remarks
     * Return a monitored media server for this organization. Only valid for organizations with Meraki Insight.
     */
    getOrganizationInsightMonitoredMediaServer(req: operations.GetOrganizationInsightMonitoredMediaServerRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationInsightMonitoredMediaServerResponse>;
    /**
     * List the monitored media servers for this organization
     *
     * @remarks
     * List the monitored media servers for this organization. Only valid for organizations with Meraki Insight.
     */
    getOrganizationInsightMonitoredMediaServers(req: operations.GetOrganizationInsightMonitoredMediaServersRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationInsightMonitoredMediaServersResponse>;
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
     * Get the organization's APNS certificate
     *
     * @remarks
     * Get the organization's APNS certificate
     */
    getOrganizationSmApnsCert(req: operations.GetOrganizationSmApnsCertRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationSmApnsCertResponse>;
    /**
     * Get a hash containing the unparsed token of the VPP account with the given ID
     *
     * @remarks
     * Get a hash containing the unparsed token of the VPP account with the given ID
     */
    getOrganizationSmVppAccount(req: operations.GetOrganizationSmVppAccountRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationSmVppAccountResponse>;
    /**
     * List the VPP accounts in the organization
     *
     * @remarks
     * List the VPP accounts in the organization
     */
    getOrganizationSmVppAccounts(req: operations.GetOrganizationSmVppAccountsRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationSmVppAccountsResponse>;
    /**
     * Return the SNMP settings for an organization
     *
     * @remarks
     * Return the SNMP settings for an organization
     */
    getOrganizationSnmp(req: operations.GetOrganizationSnmpRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationSnmpResponse>;
    /**
     * List the switchports in an organization by switch
     *
     * @remarks
     * List the switchports in an organization by switch
     */
    getOrganizationSwitchPortsBySwitch(req: operations.GetOrganizationSwitchPortsBySwitchRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationSwitchPortsBySwitchResponse>;
    /**
     * Endpoint to see power status for wireless devices
     *
     * @remarks
     * Endpoint to see power status for wireless devices
     */
    getOrganizationWirelessDevicesEthernetStatuses(req: operations.GetOrganizationWirelessDevicesEthernetStatusesRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationWirelessDevicesEthernetStatusesResponse>;
    /**
     * List the organizations that the user has privileges on
     *
     * @remarks
     * List the organizations that the user has privileges on
     */
    getOrganizations(config?: AxiosRequestConfig): Promise<operations.GetOrganizationsResponse>;
    /**
     * Lock a set of devices
     *
     * @remarks
     * Lock a set of devices
     */
    lockNetworkSmDevices(req: operations.LockNetworkSmDevicesRequest, config?: AxiosRequestConfig): Promise<operations.LockNetworkSmDevicesResponse>;
    /**
     * Add, delete, or update the tags of a set of devices
     *
     * @remarks
     * Add, delete, or update the tags of a set of devices
     */
    modifyNetworkSmDevicesTags(req: operations.ModifyNetworkSmDevicesTagsRequest, config?: AxiosRequestConfig): Promise<operations.ModifyNetworkSmDevicesTagsResponse>;
    /**
     * Move a set of devices to a new network
     *
     * @remarks
     * Move a set of devices to a new network
     */
    moveNetworkSmDevices(req: operations.MoveNetworkSmDevicesRequest, config?: AxiosRequestConfig): Promise<operations.MoveNetworkSmDevicesResponse>;
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
     * Provisions a client with a name and policy
     *
     * @remarks
     * Provisions a client with a name and policy. Clients can be provisioned before they associate to the network.
     */
    provisionNetworkClients(req: operations.ProvisionNetworkClientsRequest, config?: AxiosRequestConfig): Promise<operations.ProvisionNetworkClientsResponse>;
    /**
     * Refresh the details of a device
     *
     * @remarks
     * Refresh the details of a device
     */
    refreshNetworkSmDeviceDetails(req: operations.RefreshNetworkSmDeviceDetailsRequest, config?: AxiosRequestConfig): Promise<operations.RefreshNetworkSmDeviceDetailsResponse>;
    /**
     * Release a list of claimed devices from an organization.
     *
     * @remarks
     * Release a list of claimed devices from an organization.
     */
    releaseFromOrganizationInventory(req: operations.ReleaseFromOrganizationInventoryRequest, config?: AxiosRequestConfig): Promise<operations.ReleaseFromOrganizationInventoryResponse>;
    /**
     * Remove a single device
     *
     * @remarks
     * Remove a single device
     */
    removeNetworkDevices(req: operations.RemoveNetworkDevicesRequest, config?: AxiosRequestConfig): Promise<operations.RemoveNetworkDevicesResponse>;
    /**
     * Remove a switch from a stack
     *
     * @remarks
     * Remove a switch from a stack
     */
    removeNetworkSwitchStack(req: operations.RemoveNetworkSwitchStackRequest, config?: AxiosRequestConfig): Promise<operations.RemoveNetworkSwitchStackResponse>;
    /**
     * Renew SM seats of a license
     *
     * @remarks
     * Renew SM seats of a license. This will extend the license expiration date of managed SM devices covered by this license
     */
    renewOrganizationLicensesSeats(req: operations.RenewOrganizationLicensesSeatsRequest, config?: AxiosRequestConfig): Promise<operations.RenewOrganizationLicensesSeatsResponse>;
    /**
     * Rollback a Staged Upgrade Event for a network
     *
     * @remarks
     * Rollback a Staged Upgrade Event for a network
     */
    rollbacksNetworkFirmwareUpgradesStagedEvents(req: operations.RollbacksNetworkFirmwareUpgradesStagedEventsRequest, config?: AxiosRequestConfig): Promise<operations.RollbacksNetworkFirmwareUpgradesStagedEventsResponse>;
    /**
     * Split a combined network into individual networks for each type of device
     *
     * @remarks
     * Split a combined network into individual networks for each type of device
     */
    splitNetwork(req: operations.SplitNetworkRequest, config?: AxiosRequestConfig): Promise<operations.SplitNetworkResponse>;
    /**
     * Swap MX primary and warm spare appliances
     *
     * @remarks
     * Swap MX primary and warm spare appliances
     */
    swapNetworkApplianceWarmSpare(req: operations.SwapNetworkApplianceWarmSpareRequest, config?: AxiosRequestConfig): Promise<operations.SwapNetworkApplianceWarmSpareResponse>;
    /**
     * Unbind a network from a template.
     *
     * @remarks
     * Unbind a network from a template.
     */
    unbindNetwork(req: operations.UnbindNetworkRequest, config?: AxiosRequestConfig): Promise<operations.UnbindNetworkResponse>;
    /**
     * Unenroll a device
     *
     * @remarks
     * Unenroll a device
     */
    unenrollNetworkSmDevice(req: operations.UnenrollNetworkSmDeviceRequest, config?: AxiosRequestConfig): Promise<operations.UnenrollNetworkSmDeviceResponse>;
    /**
     * Update the attributes of a device
     *
     * @remarks
     * Update the attributes of a device
     */
    updateDevice(req: operations.UpdateDeviceRequest, config?: AxiosRequestConfig): Promise<operations.UpdateDeviceResponse>;
    /**
     * Update the uplink settings for an MX appliance
     *
     * @remarks
     * Update the uplink settings for an MX appliance
     */
    updateDeviceApplianceUplinksSettings(req: operations.UpdateDeviceApplianceUplinksSettingsRequest, config?: AxiosRequestConfig): Promise<operations.UpdateDeviceApplianceUplinksSettingsResponse>;
    /**
     * Update custom analytics settings for a camera
     *
     * @remarks
     * Update custom analytics settings for a camera
     */
    updateDeviceCameraCustomAnalytics(req: operations.UpdateDeviceCameraCustomAnalyticsRequest, config?: AxiosRequestConfig): Promise<operations.UpdateDeviceCameraCustomAnalyticsResponse>;
    /**
     * Update quality and retention settings for the given camera
     *
     * @remarks
     * Update quality and retention settings for the given camera
     */
    updateDeviceCameraQualityAndRetention(req: operations.UpdateDeviceCameraQualityAndRetentionRequest, config?: AxiosRequestConfig): Promise<operations.UpdateDeviceCameraQualityAndRetentionResponse>;
    /**
     * Update sense settings for the given camera
     *
     * @remarks
     * Update sense settings for the given camera
     */
    updateDeviceCameraSense(req: operations.UpdateDeviceCameraSenseRequest, config?: AxiosRequestConfig): Promise<operations.UpdateDeviceCameraSenseResponse>;
    /**
     * Update video settings for the given camera
     *
     * @remarks
     * Update video settings for the given camera
     */
    updateDeviceCameraVideoSettings(req: operations.UpdateDeviceCameraVideoSettingsRequest, config?: AxiosRequestConfig): Promise<operations.UpdateDeviceCameraVideoSettingsResponse>;
    /**
     * Assign wireless profiles to the given camera
     *
     * @remarks
     * Assign wireless profiles to the given camera. Incremental updates are not supported, all profile assignment need to be supplied at once.
     */
    updateDeviceCameraWirelessProfiles(req: operations.UpdateDeviceCameraWirelessProfilesRequest, config?: AxiosRequestConfig): Promise<operations.UpdateDeviceCameraWirelessProfilesResponse>;
    /**
     * Update the LAN Settings for a single MG.
     *
     * @remarks
     * Update the LAN Settings for a single MG.
     */
    updateDeviceCellularGatewayLan(req: operations.UpdateDeviceCellularGatewayLanRequest, config?: AxiosRequestConfig): Promise<operations.UpdateDeviceCellularGatewayLanResponse>;
    /**
     * Updates the port forwarding rules for a single MG.
     *
     * @remarks
     * Updates the port forwarding rules for a single MG.
     */
    updateDeviceCellularGatewayPortForwardingRules(req: operations.UpdateDeviceCellularGatewayPortForwardingRulesRequest, config?: AxiosRequestConfig): Promise<operations.UpdateDeviceCellularGatewayPortForwardingRulesResponse>;
    /**
     * Updates the SIM and APN configurations for a cellular device.
     *
     * @remarks
     * Updates the SIM and APN configurations for a cellular device.
     */
    updateDeviceCellularSims(req: operations.UpdateDeviceCellularSimsRequest, config?: AxiosRequestConfig): Promise<operations.UpdateDeviceCellularSimsResponse>;
    /**
     * Update the management interface settings for a device
     *
     * @remarks
     * Update the management interface settings for a device
     */
    updateDeviceManagementInterface(req: operations.UpdateDeviceManagementInterfaceRequest, config?: AxiosRequestConfig): Promise<operations.UpdateDeviceManagementInterfaceResponse>;
    /**
     * Assign one or more sensor roles to a given sensor or camera device.
     *
     * @remarks
     * Assign one or more sensor roles to a given sensor or camera device.
     */
    updateDeviceSensorRelationships(req: operations.UpdateDeviceSensorRelationshipsRequest, config?: AxiosRequestConfig): Promise<operations.UpdateDeviceSensorRelationshipsResponse>;
    /**
     * Update a switch port
     *
     * @remarks
     * Update a switch port
     */
    updateDeviceSwitchPort(req: operations.UpdateDeviceSwitchPortRequest, config?: AxiosRequestConfig): Promise<operations.UpdateDeviceSwitchPortResponse>;
    /**
     * Update a layer 3 interface for a switch
     *
     * @remarks
     * Update a layer 3 interface for a switch
     */
    updateDeviceSwitchRoutingInterface(req: operations.UpdateDeviceSwitchRoutingInterfaceRequest, config?: AxiosRequestConfig): Promise<operations.UpdateDeviceSwitchRoutingInterfaceResponse>;
    /**
     * Update a layer 3 interface DHCP configuration for a switch
     *
     * @remarks
     * Update a layer 3 interface DHCP configuration for a switch
     */
    updateDeviceSwitchRoutingInterfaceDhcp(req: operations.UpdateDeviceSwitchRoutingInterfaceDhcpRequest, config?: AxiosRequestConfig): Promise<operations.UpdateDeviceSwitchRoutingInterfaceDhcpResponse>;
    /**
     * Update a layer 3 static route for a switch
     *
     * @remarks
     * Update a layer 3 static route for a switch
     */
    updateDeviceSwitchRoutingStaticRoute(req: operations.UpdateDeviceSwitchRoutingStaticRouteRequest, config?: AxiosRequestConfig): Promise<operations.UpdateDeviceSwitchRoutingStaticRouteResponse>;
    /**
     * Update warm spare configuration for a switch
     *
     * @remarks
     * Update warm spare configuration for a switch. The spare will use the same L3 configuration as the primary. Note that this will irreversibly destroy any existing L3 configuration on the spare.
     */
    updateDeviceSwitchWarmSpare(req: operations.UpdateDeviceSwitchWarmSpareRequest, config?: AxiosRequestConfig): Promise<operations.UpdateDeviceSwitchWarmSpareResponse>;
    /**
     * Update the bluetooth settings for a wireless device
     *
     * @remarks
     * Update the bluetooth settings for a wireless device
     */
    updateDeviceWirelessBluetoothSettings(req: operations.UpdateDeviceWirelessBluetoothSettingsRequest, config?: AxiosRequestConfig): Promise<operations.UpdateDeviceWirelessBluetoothSettingsResponse>;
    /**
     * Update the radio settings of a device
     *
     * @remarks
     * Update the radio settings of a device
     */
    updateDeviceWirelessRadioSettings(req: operations.UpdateDeviceWirelessRadioSettingsRequest, config?: AxiosRequestConfig): Promise<operations.UpdateDeviceWirelessRadioSettingsResponse>;
    /**
     * Update a network
     *
     * @remarks
     * Update a network
     */
    updateNetwork(req: operations.UpdateNetworkRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkResponse>;
    /**
     * Update the alert configuration for this network
     *
     * @remarks
     * Update the alert configuration for this network
     */
    updateNetworkAlertsSettings(req: operations.UpdateNetworkAlertsSettingsRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkAlertsSettingsResponse>;
    /**
     * Update the connectivity testing destinations for an MX network
     *
     * @remarks
     * Update the connectivity testing destinations for an MX network
     */
    updateNetworkApplianceConnectivityMonitoringDestinations(req: operations.UpdateNetworkApplianceConnectivityMonitoringDestinationsRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkApplianceConnectivityMonitoringDestinationsResponse>;
    /**
     * Update the content filtering settings for an MX network
     *
     * @remarks
     * Update the content filtering settings for an MX network
     */
    updateNetworkApplianceContentFiltering(req: operations.UpdateNetworkApplianceContentFilteringRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkApplianceContentFilteringResponse>;
    /**
     * Update the cellular firewall rules of an MX network
     *
     * @remarks
     * Update the cellular firewall rules of an MX network
     */
    updateNetworkApplianceFirewallCellularFirewallRules(req: operations.UpdateNetworkApplianceFirewallCellularFirewallRulesRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkApplianceFirewallCellularFirewallRulesResponse>;
    /**
     * Updates the accessibility settings for the given service ('ICMP', 'web', or 'SNMP')
     *
     * @remarks
     * Updates the accessibility settings for the given service ('ICMP', 'web', or 'SNMP')
     */
    updateNetworkApplianceFirewallFirewalledService(req: operations.UpdateNetworkApplianceFirewallFirewalledServiceRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkApplianceFirewallFirewalledServiceResponse>;
    /**
     * Update the inbound cellular firewall rules of an MX network
     *
     * @remarks
     * Update the inbound cellular firewall rules of an MX network
     */
    updateNetworkApplianceFirewallInboundCellularFirewallRules(req: operations.UpdateNetworkApplianceFirewallInboundCellularFirewallRulesRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkApplianceFirewallInboundCellularFirewallRulesResponse>;
    /**
     * Update the inbound firewall rules of an MX network
     *
     * @remarks
     * Update the inbound firewall rules of an MX network
     */
    updateNetworkApplianceFirewallInboundFirewallRules(req: operations.UpdateNetworkApplianceFirewallInboundFirewallRulesRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkApplianceFirewallInboundFirewallRulesResponse>;
    /**
     * Update the L3 firewall rules of an MX network
     *
     * @remarks
     * Update the L3 firewall rules of an MX network
     */
    updateNetworkApplianceFirewallL3FirewallRules(req: operations.UpdateNetworkApplianceFirewallL3FirewallRulesRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkApplianceFirewallL3FirewallRulesResponse>;
    /**
     * Update the MX L7 firewall rules for an MX network
     *
     * @remarks
     * Update the MX L7 firewall rules for an MX network
     */
    updateNetworkApplianceFirewallL7FirewallRules(req: operations.UpdateNetworkApplianceFirewallL7FirewallRulesRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkApplianceFirewallL7FirewallRulesResponse>;
    /**
     * Set the 1:Many NAT mapping rules for an MX network
     *
     * @remarks
     * Set the 1:Many NAT mapping rules for an MX network
     */
    updateNetworkApplianceFirewallOneToManyNatRules(req: operations.UpdateNetworkApplianceFirewallOneToManyNatRulesRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkApplianceFirewallOneToManyNatRulesResponse>;
    /**
     * Set the 1:1 NAT mapping rules for an MX network
     *
     * @remarks
     * Set the 1:1 NAT mapping rules for an MX network
     */
    updateNetworkApplianceFirewallOneToOneNatRules(req: operations.UpdateNetworkApplianceFirewallOneToOneNatRulesRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkApplianceFirewallOneToOneNatRulesResponse>;
    /**
     * Update the port forwarding rules for an MX network
     *
     * @remarks
     * Update the port forwarding rules for an MX network
     */
    updateNetworkApplianceFirewallPortForwardingRules(req: operations.UpdateNetworkApplianceFirewallPortForwardingRulesRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkApplianceFirewallPortForwardingRulesResponse>;
    /**
     * Update the firewall settings for this network
     *
     * @remarks
     * Update the firewall settings for this network
     */
    updateNetworkApplianceFirewallSettings(req: operations.UpdateNetworkApplianceFirewallSettingsRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkApplianceFirewallSettingsResponse>;
    /**
     * Update the per-port VLAN settings for a single MX port.
     *
     * @remarks
     * Update the per-port VLAN settings for a single MX port.
     */
    updateNetworkAppliancePort(req: operations.UpdateNetworkAppliancePortRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkAppliancePortResponse>;
    /**
     * Update a static delegated prefix from a network
     *
     * @remarks
     * Update a static delegated prefix from a network
     */
    updateNetworkAppliancePrefixesDelegatedStatic(req: operations.UpdateNetworkAppliancePrefixesDelegatedStaticRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkAppliancePrefixesDelegatedStaticResponse>;
    /**
     * Set the supported intrusion settings for an MX network
     *
     * @remarks
     * Set the supported intrusion settings for an MX network
     */
    updateNetworkApplianceSecurityIntrusion(req: operations.UpdateNetworkApplianceSecurityIntrusionRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkApplianceSecurityIntrusionResponse>;
    /**
     * Set the supported malware settings for an MX network
     *
     * @remarks
     * Set the supported malware settings for an MX network
     */
    updateNetworkApplianceSecurityMalware(req: operations.UpdateNetworkApplianceSecurityMalwareRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkApplianceSecurityMalwareResponse>;
    /**
     * Update the appliance settings for a network
     *
     * @remarks
     * Update the appliance settings for a network
     */
    updateNetworkApplianceSettings(req: operations.UpdateNetworkApplianceSettingsRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkApplianceSettingsResponse>;
    /**
     * Update single LAN configuration
     *
     * @remarks
     * Update single LAN configuration
     */
    updateNetworkApplianceSingleLan(req: operations.UpdateNetworkApplianceSingleLanRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkApplianceSingleLanResponse>;
    /**
     * Update the attributes of an MX SSID
     *
     * @remarks
     * Update the attributes of an MX SSID
     */
    updateNetworkApplianceSsid(req: operations.UpdateNetworkApplianceSsidRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkApplianceSsidResponse>;
    /**
     * Update a static route for an MX or teleworker network
     *
     * @remarks
     * Update a static route for an MX or teleworker network
     */
    updateNetworkApplianceStaticRoute(req: operations.UpdateNetworkApplianceStaticRouteRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkApplianceStaticRouteResponse>;
    /**
     * Update the traffic shaping settings for an MX network
     *
     * @remarks
     * Update the traffic shaping settings for an MX network
     */
    updateNetworkApplianceTrafficShaping(req: operations.UpdateNetworkApplianceTrafficShapingRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkApplianceTrafficShapingResponse>;
    /**
     * Update a custom performance class for an MX network
     *
     * @remarks
     * Update a custom performance class for an MX network
     */
    updateNetworkApplianceTrafficShapingCustomPerformanceClass(req: operations.UpdateNetworkApplianceTrafficShapingCustomPerformanceClassRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkApplianceTrafficShapingCustomPerformanceClassResponse>;
    /**
     * Update the traffic shaping settings rules for an MX network
     *
     * @remarks
     * Update the traffic shaping settings rules for an MX network
     */
    updateNetworkApplianceTrafficShapingRules(req: operations.UpdateNetworkApplianceTrafficShapingRulesRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkApplianceTrafficShapingRulesResponse>;
    /**
     * Updates the uplink bandwidth settings for your MX network.
     *
     * @remarks
     * Updates the uplink bandwidth settings for your MX network.
     */
    updateNetworkApplianceTrafficShapingUplinkBandwidth(req: operations.UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkApplianceTrafficShapingUplinkBandwidthResponse>;
    /**
     * Update uplink selection settings for an MX network
     *
     * @remarks
     * Update uplink selection settings for an MX network
     */
    updateNetworkApplianceTrafficShapingUplinkSelection(req: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionResponse>;
    /**
     * Update a VLAN
     *
     * @remarks
     * Update a VLAN
     */
    updateNetworkApplianceVlan(req: operations.UpdateNetworkApplianceVlanRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkApplianceVlanResponse>;
    /**
     * Enable/Disable VLANs for the given network
     *
     * @remarks
     * Enable/Disable VLANs for the given network
     */
    updateNetworkApplianceVlansSettings(req: operations.UpdateNetworkApplianceVlansSettingsRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkApplianceVlansSettingsResponse>;
    /**
     * Update a Hub BGP Configuration
     *
     * @remarks
     * Update a Hub BGP Configuration
     */
    updateNetworkApplianceVpnBgp(req: operations.UpdateNetworkApplianceVpnBgpRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkApplianceVpnBgpResponse>;
    /**
     * Update the site-to-site VPN settings of a network
     *
     * @remarks
     * Update the site-to-site VPN settings of a network. Only valid for MX networks in NAT mode.
     */
    updateNetworkApplianceVpnSiteToSiteVpn(req: operations.UpdateNetworkApplianceVpnSiteToSiteVpnRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkApplianceVpnSiteToSiteVpnResponse>;
    /**
     * Update MX warm spare settings
     *
     * @remarks
     * Update MX warm spare settings
     */
    updateNetworkApplianceWarmSpare(req: operations.UpdateNetworkApplianceWarmSpareRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkApplianceWarmSpareResponse>;
    /**
     * Update an existing quality retention profile for this network.
     *
     * @remarks
     * Update an existing quality retention profile for this network.
     */
    updateNetworkCameraQualityRetentionProfile(req: operations.UpdateNetworkCameraQualityRetentionProfileRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkCameraQualityRetentionProfileResponse>;
    /**
     * Update an existing camera wireless profile in this network.
     *
     * @remarks
     * Update an existing camera wireless profile in this network.
     */
    updateNetworkCameraWirelessProfile(req: operations.UpdateNetworkCameraWirelessProfileRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkCameraWirelessProfileResponse>;
    /**
     * Update the connectivity testing destinations for an MG network
     *
     * @remarks
     * Update the connectivity testing destinations for an MG network
     */
    updateNetworkCellularGatewayConnectivityMonitoringDestinations(req: operations.UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsResponse>;
    /**
     * Update common DHCP settings of MGs
     *
     * @remarks
     * Update common DHCP settings of MGs
     */
    updateNetworkCellularGatewayDhcp(req: operations.UpdateNetworkCellularGatewayDhcpRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkCellularGatewayDhcpResponse>;
    /**
     * Update the subnet pool and mask configuration for MGs in the network.
     *
     * @remarks
     * Update the subnet pool and mask configuration for MGs in the network.
     */
    updateNetworkCellularGatewaySubnetPool(req: operations.UpdateNetworkCellularGatewaySubnetPoolRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkCellularGatewaySubnetPoolResponse>;
    /**
     * Updates the uplink settings for your MG network.
     *
     * @remarks
     * Updates the uplink settings for your MG network.
     */
    updateNetworkCellularGatewayUplink(req: operations.UpdateNetworkCellularGatewayUplinkRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkCellularGatewayUplinkResponse>;
    /**
     * Update the policy assigned to a client on the network
     *
     * @remarks
     * Update the policy assigned to a client on the network. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.
     */
    updateNetworkClientPolicy(req: operations.UpdateNetworkClientPolicyRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkClientPolicyResponse>;
    /**
     * Update a client's splash authorization
     *
     * @remarks
     * Update a client's splash authorization. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.
     */
    updateNetworkClientSplashAuthorizationStatus(req: operations.UpdateNetworkClientSplashAuthorizationStatusRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkClientSplashAuthorizationStatusResponse>;
    /**
     * Update firmware upgrade information for a network
     *
     * @remarks
     * Update firmware upgrade information for a network
     */
    updateNetworkFirmwareUpgrades(req: operations.UpdateNetworkFirmwareUpgradesRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkFirmwareUpgradesResponse>;
    /**
     * Update the Staged Upgrade Event for a network
     *
     * @remarks
     * Update the Staged Upgrade Event for a network
     */
    updateNetworkFirmwareUpgradesStagedEvents(req: operations.UpdateNetworkFirmwareUpgradesStagedEventsRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkFirmwareUpgradesStagedEventsResponse>;
    /**
     * Update a Staged Upgrade Group for a network
     *
     * @remarks
     * Update a Staged Upgrade Group for a network
     */
    updateNetworkFirmwareUpgradesStagedGroup(req: operations.UpdateNetworkFirmwareUpgradesStagedGroupRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkFirmwareUpgradesStagedGroupResponse>;
    /**
     * Assign Staged Upgrade Group order in the sequence.
     *
     * @remarks
     * Assign Staged Upgrade Group order in the sequence.
     */
    updateNetworkFirmwareUpgradesStagedStages(req: operations.UpdateNetworkFirmwareUpgradesStagedStagesRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkFirmwareUpgradesStagedStagesResponse>;
    /**
     * Update a floor plan's geolocation and other meta data
     *
     * @remarks
     * Update a floor plan's geolocation and other meta data
     */
    updateNetworkFloorPlan(req: operations.UpdateNetworkFloorPlanRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkFloorPlanResponse>;
    /**
     * Update a group policy
     *
     * @remarks
     * Update a group policy
     */
    updateNetworkGroupPolicy(req: operations.UpdateNetworkGroupPolicyRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkGroupPolicyResponse>;
    /**
     * Update a user configured with Meraki Authentication (currently, 802.1X RADIUS, splash guest, and client VPN users can be updated)
     *
     * @remarks
     * Update a user configured with Meraki Authentication (currently, 802.1X RADIUS, splash guest, and client VPN users can be updated)
     */
    updateNetworkMerakiAuthUser(req: operations.UpdateNetworkMerakiAuthUserRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkMerakiAuthUserResponse>;
    /**
     * Update an MQTT broker
     *
     * @remarks
     * Update an MQTT broker
     */
    updateNetworkMqttBroker(req: operations.UpdateNetworkMqttBrokerRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkMqttBrokerResponse>;
    /**
     * Update the NetFlow traffic reporting settings for a network
     *
     * @remarks
     * Update the NetFlow traffic reporting settings for a network
     */
    updateNetworkNetflow(req: operations.UpdateNetworkNetflowRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkNetflowResponse>;
    /**
     * Updates a sensor alert profile for a network.
     *
     * @remarks
     * Updates a sensor alert profile for a network.
     */
    updateNetworkSensorAlertsProfile(req: operations.UpdateNetworkSensorAlertsProfileRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkSensorAlertsProfileResponse>;
    /**
     * Update the settings for a network
     *
     * @remarks
     * Update the settings for a network
     */
    updateNetworkSettings(req: operations.UpdateNetworkSettingsRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkSettingsResponse>;
    /**
     * Modify the fields of a device
     *
     * @remarks
     * Modify the fields of a device
     */
    updateNetworkSmDevicesFields(req: operations.UpdateNetworkSmDevicesFieldsRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkSmDevicesFieldsResponse>;
    /**
     * Update a target group
     *
     * @remarks
     * Update a target group
     */
    updateNetworkSmTargetGroup(req: operations.UpdateNetworkSmTargetGroupRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkSmTargetGroupResponse>;
    /**
     * Update the SNMP settings for a network
     *
     * @remarks
     * Update the SNMP settings for a network
     */
    updateNetworkSnmp(req: operations.UpdateNetworkSnmpRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkSnmpResponse>;
    /**
     * Update the access control lists for a MS network
     *
     * @remarks
     * Update the access control lists for a MS network
     */
    updateNetworkSwitchAccessControlLists(req: operations.UpdateNetworkSwitchAccessControlListsRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkSwitchAccessControlListsResponse>;
    /**
     * Update an access policy for a switch network
     *
     * @remarks
     * Update an access policy for a switch network. If you would like to enable Meraki Authentication, set radiusServers to empty array.
     */
    updateNetworkSwitchAccessPolicy(req: operations.UpdateNetworkSwitchAccessPolicyRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkSwitchAccessPolicyResponse>;
    /**
     * Update the switch alternate management interface for the network
     *
     * @remarks
     * Update the switch alternate management interface for the network
     */
    updateNetworkSwitchAlternateManagementInterface(req: operations.UpdateNetworkSwitchAlternateManagementInterfaceRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkSwitchAlternateManagementInterfaceResponse>;
    /**
     * Update the DHCP server settings
     *
     * @remarks
     * Update the DHCP server settings. Blocked/allowed servers are only applied when default policy is allow/block, respectively
     */
    updateNetworkSwitchDhcpServerPolicy(req: operations.UpdateNetworkSwitchDhcpServerPolicyRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkSwitchDhcpServerPolicyResponse>;
    /**
     * Update a server that is trusted by Dynamic ARP Inspection on this network
     *
     * @remarks
     * Update a server that is trusted by Dynamic ARP Inspection on this network
     */
    updateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServer(req: operations.UpdateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerResponse>;
    /**
     * Update the DSCP to CoS mappings
     *
     * @remarks
     * Update the DSCP to CoS mappings
     */
    updateNetworkSwitchDscpToCosMappings(req: operations.UpdateNetworkSwitchDscpToCosMappingsRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkSwitchDscpToCosMappingsResponse>;
    /**
     * Update a link aggregation group
     *
     * @remarks
     * Update a link aggregation group
     */
    updateNetworkSwitchLinkAggregation(req: operations.UpdateNetworkSwitchLinkAggregationRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkSwitchLinkAggregationResponse>;
    /**
     * Update the MTU configuration
     *
     * @remarks
     * Update the MTU configuration
     */
    updateNetworkSwitchMtu(req: operations.UpdateNetworkSwitchMtuRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkSwitchMtuResponse>;
    /**
     * Update a switch port schedule
     *
     * @remarks
     * Update a switch port schedule
     */
    updateNetworkSwitchPortSchedule(req: operations.UpdateNetworkSwitchPortScheduleRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkSwitchPortScheduleResponse>;
    /**
     * Update a quality of service rule
     *
     * @remarks
     * Update a quality of service rule
     */
    updateNetworkSwitchQosRule(req: operations.UpdateNetworkSwitchQosRuleRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkSwitchQosRuleResponse>;
    /**
     * Update the order in which the rules should be processed by the switch
     *
     * @remarks
     * Update the order in which the rules should be processed by the switch
     */
    updateNetworkSwitchQosRulesOrder(req: operations.UpdateNetworkSwitchQosRulesOrderRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkSwitchQosRulesOrderResponse>;
    /**
     * Update multicast settings for a network
     *
     * @remarks
     * Update multicast settings for a network
     */
    updateNetworkSwitchRoutingMulticast(req: operations.UpdateNetworkSwitchRoutingMulticastRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkSwitchRoutingMulticastResponse>;
    /**
     * Update a multicast rendezvous point
     *
     * @remarks
     * Update a multicast rendezvous point
     */
    updateNetworkSwitchRoutingMulticastRendezvousPoint(req: operations.UpdateNetworkSwitchRoutingMulticastRendezvousPointRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkSwitchRoutingMulticastRendezvousPointResponse>;
    /**
     * Update layer 3 OSPF routing configuration
     *
     * @remarks
     * Update layer 3 OSPF routing configuration
     */
    updateNetworkSwitchRoutingOspf(req: operations.UpdateNetworkSwitchRoutingOspfRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkSwitchRoutingOspfResponse>;
    /**
     * Update switch network settings
     *
     * @remarks
     * Update switch network settings
     */
    updateNetworkSwitchSettings(req: operations.UpdateNetworkSwitchSettingsRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkSwitchSettingsResponse>;
    /**
     * Update a layer 3 interface for a switch stack
     *
     * @remarks
     * Update a layer 3 interface for a switch stack
     */
    updateNetworkSwitchStackRoutingInterface(req: operations.UpdateNetworkSwitchStackRoutingInterfaceRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkSwitchStackRoutingInterfaceResponse>;
    /**
     * Update a layer 3 interface DHCP configuration for a switch stack
     *
     * @remarks
     * Update a layer 3 interface DHCP configuration for a switch stack
     */
    updateNetworkSwitchStackRoutingInterfaceDhcp(req: operations.UpdateNetworkSwitchStackRoutingInterfaceDhcpRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkSwitchStackRoutingInterfaceDhcpResponse>;
    /**
     * Update a layer 3 static route for a switch stack
     *
     * @remarks
     * Update a layer 3 static route for a switch stack
     */
    updateNetworkSwitchStackRoutingStaticRoute(req: operations.UpdateNetworkSwitchStackRoutingStaticRouteRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkSwitchStackRoutingStaticRouteResponse>;
    /**
     * Update the storm control configuration for a switch network
     *
     * @remarks
     * Update the storm control configuration for a switch network
     */
    updateNetworkSwitchStormControl(req: operations.UpdateNetworkSwitchStormControlRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkSwitchStormControlResponse>;
    /**
     * Updates STP settings
     *
     * @remarks
     * Updates STP settings
     */
    updateNetworkSwitchStp(req: operations.UpdateNetworkSwitchStpRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkSwitchStpResponse>;
    /**
     * Update the syslog servers for a network
     *
     * @remarks
     * Update the syslog servers for a network
     */
    updateNetworkSyslogServers(req: operations.UpdateNetworkSyslogServersRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkSyslogServersResponse>;
    /**
     * Update the traffic analysis settings for a network
     *
     * @remarks
     * Update the traffic analysis settings for a network
     */
    updateNetworkTrafficAnalysis(req: operations.UpdateNetworkTrafficAnalysisRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkTrafficAnalysisResponse>;
    /**
     * Update an HTTP server
     *
     * @remarks
     * Update an HTTP server. To change a URL, create a new HTTP server.
     */
    updateNetworkWebhooksHttpServer(req: operations.UpdateNetworkWebhooksHttpServerRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkWebhooksHttpServerResponse>;
    /**
     * Update a webhook payload template for a network
     *
     * @remarks
     * Update a webhook payload template for a network
     */
    updateNetworkWebhooksPayloadTemplate(req: operations.UpdateNetworkWebhooksPayloadTemplateRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkWebhooksPayloadTemplateResponse>;
    /**
     * Update alternate management interface and device static IP
     *
     * @remarks
     * Update alternate management interface and device static IP
     */
    updateNetworkWirelessAlternateManagementInterface(req: operations.UpdateNetworkWirelessAlternateManagementInterfaceRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkWirelessAlternateManagementInterfaceResponse>;
    /**
     * Update the billing settings
     *
     * @remarks
     * Update the billing settings
     */
    updateNetworkWirelessBilling(req: operations.UpdateNetworkWirelessBillingRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkWirelessBillingResponse>;
    /**
     * Update the Bluetooth settings for a network
     *
     * @remarks
     * Update the Bluetooth settings for a network. See the docs page for <a href="https://documentation.meraki.com/MR/Bluetooth/Bluetooth_Low_Energy_(BLE)">Bluetooth settings</a>.
     */
    updateNetworkWirelessBluetoothSettings(req: operations.UpdateNetworkWirelessBluetoothSettingsRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkWirelessBluetoothSettingsResponse>;
    /**
     * Updates specified RF profile for this network
     *
     * @remarks
     * Updates specified RF profile for this network
     */
    updateNetworkWirelessRfProfile(req: operations.UpdateNetworkWirelessRfProfileRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkWirelessRfProfileResponse>;
    /**
     * Update the wireless settings for a network
     *
     * @remarks
     * Update the wireless settings for a network
     */
    updateNetworkWirelessSettings(req: operations.UpdateNetworkWirelessSettingsRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkWirelessSettingsResponse>;
    /**
     * Update the attributes of an MR SSID
     *
     * @remarks
     * Update the attributes of an MR SSID
     */
    updateNetworkWirelessSsid(req: operations.UpdateNetworkWirelessSsidRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkWirelessSsidResponse>;
    /**
     * Update the bonjour forwarding setting and rules for the SSID
     *
     * @remarks
     * Update the bonjour forwarding setting and rules for the SSID
     */
    updateNetworkWirelessSsidBonjourForwarding(req: operations.UpdateNetworkWirelessSsidBonjourForwardingRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkWirelessSsidBonjourForwardingResponse>;
    /**
     * Update the device type group policies for the SSID
     *
     * @remarks
     * Update the device type group policies for the SSID
     */
    updateNetworkWirelessSsidDeviceTypeGroupPolicies(req: operations.UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesResponse>;
    /**
     * Update the EAP overridden parameters for an SSID.
     *
     * @remarks
     * Update the EAP overridden parameters for an SSID.
     */
    updateNetworkWirelessSsidEapOverride(req: operations.UpdateNetworkWirelessSsidEapOverrideRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkWirelessSsidEapOverrideResponse>;
    /**
     * Update the L3 firewall rules of an SSID on an MR network
     *
     * @remarks
     * Update the L3 firewall rules of an SSID on an MR network
     */
    updateNetworkWirelessSsidFirewallL3FirewallRules(req: operations.UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkWirelessSsidFirewallL3FirewallRulesResponse>;
    /**
     * Update the L7 firewall rules of an SSID on an MR network
     *
     * @remarks
     * Update the L7 firewall rules of an SSID on an MR network
     */
    updateNetworkWirelessSsidFirewallL7FirewallRules(req: operations.UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkWirelessSsidFirewallL7FirewallRulesResponse>;
    /**
     * Update the Hotspot 2.0 settings of an SSID
     *
     * @remarks
     * Update the Hotspot 2.0 settings of an SSID
     */
    updateNetworkWirelessSsidHotspot20(req: operations.UpdateNetworkWirelessSsidHotspot20Request, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkWirelessSsidHotspot20Response>;
    /**
     * Update an Identity PSK
     *
     * @remarks
     * Update an Identity PSK
     */
    updateNetworkWirelessSsidIdentityPsk(req: operations.UpdateNetworkWirelessSsidIdentityPskRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkWirelessSsidIdentityPskResponse>;
    /**
     * Update the outage schedule for the SSID
     *
     * @remarks
     * Update the outage schedule for the SSID
     */
    updateNetworkWirelessSsidSchedules(req: operations.UpdateNetworkWirelessSsidSchedulesRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkWirelessSsidSchedulesResponse>;
    /**
     * Modify the splash page settings for the given SSID
     *
     * @remarks
     * Modify the splash page settings for the given SSID
     */
    updateNetworkWirelessSsidSplashSettings(req: operations.UpdateNetworkWirelessSsidSplashSettingsRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkWirelessSsidSplashSettingsResponse>;
    /**
     * Update the traffic shaping settings for an SSID on an MR network
     *
     * @remarks
     * Update the traffic shaping settings for an SSID on an MR network
     */
    updateNetworkWirelessSsidTrafficShapingRules(req: operations.UpdateNetworkWirelessSsidTrafficShapingRulesRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkWirelessSsidTrafficShapingRulesResponse>;
    /**
     * Update the VPN settings for the SSID
     *
     * @remarks
     * Update the VPN settings for the SSID
     */
    updateNetworkWirelessSsidVpn(req: operations.UpdateNetworkWirelessSsidVpnRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkWirelessSsidVpnResponse>;
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
     * Sets supported intrusion settings for an organization
     *
     * @remarks
     * Sets supported intrusion settings for an organization
     */
    updateOrganizationApplianceSecurityIntrusion(req: operations.UpdateOrganizationApplianceSecurityIntrusionRequest, config?: AxiosRequestConfig): Promise<operations.UpdateOrganizationApplianceSecurityIntrusionResponse>;
    /**
     * Update the third party VPN peers for an organization
     *
     * @remarks
     * Update the third party VPN peers for an organization
     */
    updateOrganizationApplianceVPNThirdPartyVPNPeers(req: operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequest, config?: AxiosRequestConfig): Promise<operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersResponse>;
    /**
     * Update the firewall rules of an organization's site-to-site VPN
     *
     * @remarks
     * Update the firewall rules of an organization's site-to-site VPN
     */
    updateOrganizationApplianceVpnVpnFirewallRules(req: operations.UpdateOrganizationApplianceVpnVpnFirewallRulesRequest, config?: AxiosRequestConfig): Promise<operations.UpdateOrganizationApplianceVpnVpnFirewallRulesResponse>;
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
     * Notify that credential handoff to camera has completed
     *
     * @remarks
     * Notify that credential handoff to camera has completed
     */
    updateOrganizationCameraOnboardingStatuses(req: operations.UpdateOrganizationCameraOnboardingStatusesRequest, config?: AxiosRequestConfig): Promise<operations.UpdateOrganizationCameraOnboardingStatusesResponse>;
    /**
     * Update a configuration template
     *
     * @remarks
     * Update a configuration template
     */
    updateOrganizationConfigTemplate(req: operations.UpdateOrganizationConfigTemplateRequest, config?: AxiosRequestConfig): Promise<operations.UpdateOrganizationConfigTemplateResponse>;
    /**
     * Update a switch profile port
     *
     * @remarks
     * Update a switch profile port
     */
    updateOrganizationConfigTemplateSwitchProfilePort(req: operations.UpdateOrganizationConfigTemplateSwitchProfilePortRequest, config?: AxiosRequestConfig): Promise<operations.UpdateOrganizationConfigTemplateSwitchProfilePortResponse>;
    /**
     * Update an early access feature opt-in for an organization
     *
     * @remarks
     * Update an early access feature opt-in for an organization
     */
    updateOrganizationEarlyAccessFeaturesOptIn(req: operations.UpdateOrganizationEarlyAccessFeaturesOptInRequest, config?: AxiosRequestConfig): Promise<operations.UpdateOrganizationEarlyAccessFeaturesOptInResponse>;
    /**
     * Update a monitored media server for this organization
     *
     * @remarks
     * Update a monitored media server for this organization. Only valid for organizations with Meraki Insight.
     */
    updateOrganizationInsightMonitoredMediaServer(req: operations.UpdateOrganizationInsightMonitoredMediaServerRequest, config?: AxiosRequestConfig): Promise<operations.UpdateOrganizationInsightMonitoredMediaServerResponse>;
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
    /**
     * Claim a vMX into a network
     *
     * @remarks
     * Claim a vMX into a network
     */
    vmxNetworkDevicesClaim(req: operations.VmxNetworkDevicesClaimRequest, config?: AxiosRequestConfig): Promise<operations.VmxNetworkDevicesClaimResponse>;
    /**
     * Wipe a device
     *
     * @remarks
     * Wipe a device
     */
    wipeNetworkSmDevices(req: operations.WipeNetworkSmDevicesRequest, config?: AxiosRequestConfig): Promise<operations.WipeNetworkSmDevicesResponse>;
}
