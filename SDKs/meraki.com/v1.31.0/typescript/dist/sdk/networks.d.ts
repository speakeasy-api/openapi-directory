import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Networks {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Bind a network to a template.
     *
     * @remarks
     * Bind a network to a template.
     */
    bindNetwork(req: operations.BindNetworkRequest, config?: AxiosRequestConfig): Promise<operations.BindNetworkResponse>;
    /**
     * Claim devices into a network. (Note: for recently claimed devices, it may take a few minutes for API requsts against that device to succeed)
     *
     * @remarks
     * Claim devices into a network. (Note: for recently claimed devices, it may take a few minutes for API requsts against that device to succeed)
     */
    claimNetworkDevices(req: operations.ClaimNetworkDevicesRequest, config?: AxiosRequestConfig): Promise<operations.ClaimNetworkDevicesResponse>;
    /**
     * Combine multiple networks into a single network
     *
     * @remarks
     * Combine multiple networks into a single network
     */
    combineOrganizationNetworks(req: operations.CombineOrganizationNetworksRequest, config?: AxiosRequestConfig): Promise<operations.CombineOrganizationNetworksResponse>;
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
     * Create a network
     *
     * @remarks
     * Create a network
     */
    createOrganizationNetwork(req: operations.CreateOrganizationNetworkRequest, config?: AxiosRequestConfig): Promise<operations.CreateOrganizationNetworkResponse>;
    /**
     * Postpone by 1 week all pending staged upgrade stages for a network
     *
     * @remarks
     * Postpone by 1 week all pending staged upgrade stages for a network
     */
    deferNetworkFirmwareUpgradesStagedEvents(req: operations.DeferNetworkFirmwareUpgradesStagedEventsRequest, config?: AxiosRequestConfig): Promise<operations.DeferNetworkFirmwareUpgradesStagedEventsResponse>;
    /**
     * Delete a network
     *
     * @remarks
     * Delete a network
     */
    deleteNetwork(req: operations.DeleteNetworkRequest, config?: AxiosRequestConfig): Promise<operations.DeleteNetworkResponse>;
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
     * Return a network
     *
     * @remarks
     * Return a network
     */
    getNetwork(req: operations.GetNetworkRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkResponse>;
    /**
     * Return the alert history for this network
     *
     * @remarks
     * Return the alert history for this network
     */
    getNetworkAlertsHistory(req: operations.GetNetworkAlertsHistoryRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkAlertsHistoryResponse>;
    /**
     * Return the alert configuration for this network
     *
     * @remarks
     * Return the alert configuration for this network
     */
    getNetworkAlertsSettings(req: operations.GetNetworkAlertsSettingsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkAlertsSettingsResponse>;
    /**
     * Return a Bluetooth client
     *
     * @remarks
     * Return a Bluetooth client. Bluetooth clients can be identified by their ID or their MAC.
     */
    getNetworkBluetoothClient(req: operations.GetNetworkBluetoothClientRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkBluetoothClientResponse>;
    /**
     * List the Bluetooth clients seen by APs in this network
     *
     * @remarks
     * List the Bluetooth clients seen by APs in this network
     */
    getNetworkBluetoothClients(req: operations.GetNetworkBluetoothClientsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkBluetoothClientsResponse>;
    /**
     * Return the client associated with the given identifier
     *
     * @remarks
     * Return the client associated with the given identifier. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.
     */
    getNetworkClient(req: operations.GetNetworkClientRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkClientResponse>;
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
     * Return the client's network traffic data over time
     *
     * @remarks
     * Return the client's network traffic data over time. Usage data is in kilobytes. This endpoint requires detailed traffic analysis to be enabled on the Network-wide > General page. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.
     */
    getNetworkClientTrafficHistory(req: operations.GetNetworkClientTrafficHistoryRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkClientTrafficHistoryResponse>;
    /**
     * Return the client's daily usage history
     *
     * @remarks
     * Return the client's daily usage history. Usage data is in kilobytes. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.
     */
    getNetworkClientUsageHistory(req: operations.GetNetworkClientUsageHistoryRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkClientUsageHistoryResponse>;
    /**
     * List the clients that have used this network in the timespan
     *
     * @remarks
     * List the clients that have used this network in the timespan
     */
    getNetworkClients(req: operations.GetNetworkClientsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkClientsResponse>;
    /**
     * Return the application usage data for clients
     *
     * @remarks
     * Return the application usage data for clients. Usage data is in kilobytes. Clients can be identified by client keys or either the MACs or IPs depending on whether the network uses Track-by-IP.
     */
    getNetworkClientsApplicationUsage(req: operations.GetNetworkClientsApplicationUsageRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkClientsApplicationUsageResponse>;
    /**
     * Returns a timeseries of total traffic consumption rates for all clients on a network within a given timespan, in megabits per second.
     *
     * @remarks
     * Returns a timeseries of total traffic consumption rates for all clients on a network within a given timespan, in megabits per second.
     */
    getNetworkClientsBandwidthUsageHistory(req: operations.GetNetworkClientsBandwidthUsageHistoryRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkClientsBandwidthUsageHistoryResponse>;
    /**
     * Return overview statistics for network clients
     *
     * @remarks
     * Return overview statistics for network clients
     */
    getNetworkClientsOverview(req: operations.GetNetworkClientsOverviewRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkClientsOverviewResponse>;
    /**
     * Return the usage histories for clients
     *
     * @remarks
     * Return the usage histories for clients. Usage data is in kilobytes. Clients can be identified by client keys or either the MACs or IPs depending on whether the network uses Track-by-IP.
     */
    getNetworkClientsUsageHistories(req: operations.GetNetworkClientsUsageHistoriesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkClientsUsageHistoriesResponse>;
    /**
     * List the devices in a network
     *
     * @remarks
     * List the devices in a network
     */
    getNetworkDevices(req: operations.GetNetworkDevicesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkDevicesResponse>;
    /**
     * List the events for the network
     *
     * @remarks
     * List the events for the network
     */
    getNetworkEvents(req: operations.GetNetworkEventsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkEventsResponse>;
    /**
     * List the event type to human-readable description
     *
     * @remarks
     * List the event type to human-readable description
     */
    getNetworkEventsEventTypes(req: operations.GetNetworkEventsEventTypesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkEventsEventTypesResponse>;
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
     * Get the channel utilization over each radio for all APs in a network.
     *
     * @remarks
     * Get the channel utilization over each radio for all APs in a network.
     */
    getNetworkNetworkHealthChannelUtilization(req: operations.GetNetworkNetworkHealthChannelUtilizationRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkNetworkHealthChannelUtilizationResponse>;
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
     * Return the settings for a network
     *
     * @remarks
     * Return the settings for a network
     */
    getNetworkSettings(req: operations.GetNetworkSettingsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSettingsResponse>;
    /**
     * Return the SNMP settings for a network
     *
     * @remarks
     * Return the SNMP settings for a network
     */
    getNetworkSnmp(req: operations.GetNetworkSnmpRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSnmpResponse>;
    /**
     * List the splash login attempts for a network
     *
     * @remarks
     * List the splash login attempts for a network
     */
    getNetworkSplashLoginAttempts(req: operations.GetNetworkSplashLoginAttemptsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSplashLoginAttemptsResponse>;
    /**
     * List the syslog servers for a network
     *
     * @remarks
     * List the syslog servers for a network
     */
    getNetworkSyslogServers(req: operations.GetNetworkSyslogServersRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSyslogServersResponse>;
    /**
     * List the LLDP and CDP information for all discovered devices and connections in a network.
     *
     * @remarks
     * List the LLDP and CDP information for all discovered devices and connections in a network.
     */
    getNetworkTopologyLinkLayer(req: operations.GetNetworkTopologyLinkLayerRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkTopologyLinkLayerResponse>;
    /**
     * Return the traffic analysis data for this network
     *
     * @remarks
     * Return the traffic analysis data for this network. Traffic analysis with hostname visibility must be enabled on the network.
     */
    getNetworkTraffic(req: operations.GetNetworkTrafficRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkTrafficResponse>;
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
     * Returns list of networks eligible for adding cloud monitored device
     *
     * @remarks
     * Returns list of networks eligible for adding cloud monitored device
     */
    getOrganizationInventoryOnboardingCloudMonitoringNetworks(req: operations.GetOrganizationInventoryOnboardingCloudMonitoringNetworksRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationInventoryOnboardingCloudMonitoringNetworksResponse>;
    /**
     * List the networks that the user has privileges on in an organization
     *
     * @remarks
     * List the networks that the user has privileges on in an organization
     */
    getOrganizationNetworks(req: operations.GetOrganizationNetworksRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationNetworksResponse>;
    /**
     * Provisions a client with a name and policy
     *
     * @remarks
     * Provisions a client with a name and policy. Clients can be provisioned before they associate to the network.
     */
    provisionNetworkClients(req: operations.ProvisionNetworkClientsRequest, config?: AxiosRequestConfig): Promise<operations.ProvisionNetworkClientsResponse>;
    /**
     * Remove a single device
     *
     * @remarks
     * Remove a single device
     */
    removeNetworkDevices(req: operations.RemoveNetworkDevicesRequest, config?: AxiosRequestConfig): Promise<operations.RemoveNetworkDevicesResponse>;
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
     * Unbind a network from a template.
     *
     * @remarks
     * Unbind a network from a template.
     */
    unbindNetwork(req: operations.UnbindNetworkRequest, config?: AxiosRequestConfig): Promise<operations.UnbindNetworkResponse>;
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
     * Update the settings for a network
     *
     * @remarks
     * Update the settings for a network
     */
    updateNetworkSettings(req: operations.UpdateNetworkSettingsRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkSettingsResponse>;
    /**
     * Update the SNMP settings for a network
     *
     * @remarks
     * Update the SNMP settings for a network
     */
    updateNetworkSnmp(req: operations.UpdateNetworkSnmpRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkSnmpResponse>;
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
     * Claim a vMX into a network
     *
     * @remarks
     * Claim a vMX into a network
     */
    vmxNetworkDevicesClaim(req: operations.VmxNetworkDevicesClaimRequest, config?: AxiosRequestConfig): Promise<operations.VmxNetworkDevicesClaimResponse>;
}
