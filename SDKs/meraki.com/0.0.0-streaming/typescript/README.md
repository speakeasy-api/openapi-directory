# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/meraki.com/0.0.0-streaming/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/meraki.com/0.0.0-streaming/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  GetOrganizationApiRequestsRequest,
  GetOrganizationApiRequestsResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    merakiApiKey: "YOUR_API_KEY_HERE",
  },
});

const req: GetOrganizationApiRequestsRequest = {
  adminId: "corrupti",
  endingBefore: "provident",
  method: "distinctio",
  organizationId: "quibusdam",
  path: "unde",
  perPage: 857946,
  responseCode: 544883,
  sourceIp: "illum",
  startingAfter: "vel",
  t0: "error",
  t1: "deserunt",
  timespan: 3843.82,
};

sdk.apiUsage.getOrganizationApiRequests(req).then((res: GetOrganizationApiRequestsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### apiUsage

* `getOrganizationApiRequests` - List the API requests made by an organization
* `getOrganizationApiRequestsOverview` - Return an aggregated overview of API requests data

### actionBatches

* `createOrganizationActionBatch` - Create an action batch
* `deleteOrganizationActionBatch` - Delete an action batch
* `getOrganizationActionBatches` - Return the list of action batches in the organization
* `updateOrganizationActionBatch` - Update an action batch

### admins

* `createOrganizationAdmin` - Create a new dashboard administrator
* `deleteOrganizationAdmin` - Revoke all access for a dashboard administrator within this organization
* `getOrganizationAdmins` - List the dashboard administrators in this organization
* `updateOrganizationAdmin` - Update an administrator

### alertSettings

* `getNetworkAlertSettings` - Return the alert configuration for this network
* `updateNetworkAlertSettings` - Update the alert configuration for this network

### bluetoothClients

* `getNetworkBluetoothClient` - Return a Bluetooth client
* `getNetworkBluetoothClients` - List the Bluetooth clients seen by APs in this network

### bluetoothSettings

* `getNetworkBluetoothSettings` - Return the Bluetooth settings for a network. <a href="https://documentation.meraki.com/MR/Bluetooth/Bluetooth_Low_Energy_(BLE)">Bluetooth settings</a> must be enabled on the network.
* `updateDeviceWirelessBluetoothSettings` - Update the bluetooth settings for a wireless device
* `updateNetworkBluetoothSettings` - Update the Bluetooth settings for a network

### cameraQualityRetentionProfiles

* `createNetworkCameraQualityRetentionProfile` - Creates new quality retention profile for this network.
* `deleteNetworkCameraQualityRetentionProfile` - Delete an existing quality retention profile for this network.
* `getNetworkCameraQualityRetentionProfile` - Retrieve a single quality retention profile
* `getNetworkCameraQualityRetentionProfiles` - List the quality retention profiles for this network
* `updateNetworkCameraQualityRetentionProfile` - Update an existing quality retention profile for this network.

### cameras

* `generateNetworkCameraSnapshot` - Generate a snapshot of what the camera sees at the specified time and return a link to that image.
* `getDeviceCameraQualityAndRetentionSettings` - Returns quality and retention settings for the given camera
* `getDeviceCameraVideoSettings` - Returns video settings for the given camera
* `getNetworkCameraSchedules` - Returns a list of all camera recording schedules.
* `getNetworkCameraVideoLink` - Returns video link to the specified camera
* `updateDeviceCameraQualityAndRetentionSettings` - Update quality and retention settings for the given camera
* `updateDeviceCameraVideoSettings` - Update video settings for the given camera

### changeLog

* `getOrganizationConfigurationChanges` - View the Change Log for your organization

### clients

* `getDeviceClients` - List the clients of a device, up to a maximum of a month ago
* `getNetworkClient` - Return the client associated with the given identifier
* `getNetworkClientEvents` - Return the events associated with this client
* `getNetworkClientLatencyHistory` - Return the latency history for a client
* `getNetworkClientPolicy` - Return the policy assigned to a client on the network
* `getNetworkClientSplashAuthorizationStatus` - Return the splash authorization for a client, for each SSID they've associated with through splash
* `getNetworkClientUsageHistory` - Return the client's daily usage history
* `getNetworkClients` - List the clients that have used this network in the timespan
* `provisionNetworkClients` - Provisions a client with a name and policy
* `updateNetworkClientPolicy` - Update the policy assigned to a client on the network
* `updateNetworkClientSplashAuthorizationStatus` - Update a client's splash authorization

### configTemplates

* `deleteOrganizationConfigTemplate` - Remove a configuration template
* `getOrganizationConfigTemplates` - List the configuration templates for this organization

### contentFilteringCategories

* `getNetworkContentFilteringCategories` - List all available content filtering categories for an MX network

### contentFilteringRules

* `getNetworkContentFiltering` - Return the content filtering settings for an MX network
* `updateNetworkContentFiltering` - Update the content filtering settings for an MX network

### devices

* `claimNetworkDevices` - Claim devices into a network. (Note: for recently claimed devices, it may take a few minutes for API requests against that device to succeed)
* `cycleDeviceSwitchPorts` - Cycle a set of switch ports
* `getNetworkDevice` - Return a single device
* `getNetworkDeviceLossAndLatencyHistory` - Get the uplink loss percentage and latency in milliseconds for a wired network device.
* `getNetworkDevicePerformance` - Return the performance score for a single MX
* `getNetworkDeviceUplink` - Return the uplink information for a device.
* `getNetworkDevices` - List the devices in a network
* `getOrganizationDevices` - List the devices in an organization
* `rebootNetworkDevice` - Reboot a device
* `removeNetworkDevice` - Remove a single device
* `updateNetworkDevice` - Update the attributes of a device

### events

* `getNetworkEvents` - List the events for the network
* `getNetworkEventsEventTypes` - List the event type to human-readable description

### firewalledServices

* `getNetworkFirewalledService` - Return the accessibility settings of the given service ('ICMP', 'web', or 'SNMP')
* `getNetworkFirewalledServices` - List the appliance services and their accessibility rules
* `updateNetworkFirewalledService` - Updates the accessibility settings for the given service ('ICMP', 'web', or 'SNMP')

### floorPlans

* `createNetworkFloorPlan` - Upload a floor plan
* `deleteNetworkFloorPlan` - Destroy a floor plan
* `getNetworkFloorPlan` - Find a floor plan by ID
* `getNetworkFloorPlans` - List the floor plans that belong to your network
* `updateNetworkFloorPlan` - Update a floor plan's geolocation and other meta data

### intrusionSettings

* `getNetworkSecurityIntrusionSettings` - Returns all supported intrusion settings for an MX network
* `getOrganizationSecurityIntrusionSettings` - Returns all supported intrusion settings for an organization
* `updateNetworkSecurityIntrusionSettings` - Set the supported intrusion settings for an MX network
* `updateOrganizationSecurityIntrusionSettings` - Sets supported intrusion settings for an organization

### licenses

* `assignOrganizationLicensesSeats` - Assign SM seats to a network
* `getOrganizationLicense` - Display a license
* `getOrganizationLicenseState` - Return an overview of the license state for an organization
* `getOrganizationLicenses` - List the licenses for an organization
* `moveOrganizationLicensesSeats` - Move SM seats to another organization
* `renewOrganizationLicensesSeats` - Renew SM seats of a license

### linkAggregations

* `createNetworkSwitchLinkAggregation` - Create a link aggregation group
* `deleteNetworkSwitchLinkAggregation` - Split a link aggregation group into separate ports
* `getNetworkSwitchLinkAggregations` - List link aggregation groups
* `updateNetworkSwitchLinkAggregation` - Update a link aggregation group

### mgLANSettings

* `getDeviceCellularGatewaySettings` - Show the LAN Settings of a MG
* `updateDeviceCellularGatewaySettings` - Update the LAN Settings for a single MG.

### mgPortForwardingRules

* `getDeviceCellularGatewaySettingsPortForwardingRules` - Returns the port forwarding rules for a single MG.
* `updateDeviceCellularGatewaySettingsPortForwardingRules` - Updates the port forwarding rules for a single MG.

### mrL3Firewall

* `getNetworkSsidL3FirewallRules` - Return the L3 firewall rules for an SSID on an MR network
* `updateNetworkSsidL3FirewallRules` - Update the L3 firewall rules of an SSID on an MR network

### mvSense

* `getDeviceCameraAnalyticsLive` - Returns live state from camera of analytics zones
* `getDeviceCameraAnalyticsOverview` - Returns an overview of aggregate analytics data for a timespan
* `getDeviceCameraAnalyticsRecent` - Returns most recent record for analytics zones
* `getDeviceCameraAnalyticsZoneHistory` - Return historical records for analytic zones
* `getDeviceCameraAnalyticsZones` - Returns all configured analytic zones for this camera

### mx11NATRules

* `getNetworkOneToOneNatRules` - Return the 1:1 NAT mapping rules for an MX network
* `updateNetworkOneToOneNatRules` - Set the 1:1 NAT mapping rules for an MX network

### mx1ManyNATRules

* `getNetworkOneToManyNatRules` - Return the 1:Many NAT mapping rules for an MX network
* `updateNetworkOneToManyNatRules` - Set the 1:Many NAT mapping rules for an MX network

### mxL3InboundFirewall

* `getNetworkApplianceFirewallInboundFirewallRules` - Return the inbound firewall rules for an MX network
* `updateNetworkApplianceFirewallInboundFirewallRules` - Update the inbound firewall rules of an MX network

### mxL3OutboundFirewall

* `getNetworkL3FirewallRules` - Return the L3 firewall rules for an MX network
* `updateNetworkL3FirewallRules` - Update the L3 firewall rules of an MX network

### mxL7ApplicationCategories

* `getNetworkL7FirewallRulesApplicationCategories` - Return the L7 firewall application categories and their associated applications for an MX network

### mxL7Firewall

* `getNetworkL7FirewallRules` - List the MX L7 firewall rules for an MX network
* `updateNetworkL7FirewallRules` - Update the MX L7 firewall rules for an MX network

### mxVLANPorts

* `getNetworkAppliancePort` - Return per-port VLAN settings for a single MX port.
* `getNetworkAppliancePorts` - List per-port VLAN settings for all ports of a MX.
* `updateNetworkAppliancePort` - Update the per-port VLAN settings for a single MX port.

### mxVPNFirewall

* `getOrganizationVpnFirewallRules` - Return the firewall rules for an organization's site-to-site VPN
* `updateOrganizationVpnFirewallRules` - Update the firewall rules of an organization's site-to-site VPN

### mxCellularFirewall

* `getNetworkCellularFirewallRules` - Return the cellular firewall rules for an MX network
* `updateNetworkCellularFirewallRules` - Update the cellular firewall rules of an MX network

### mxPortForwardingRules

* `getNetworkPortForwardingRules` - Return the port forwarding rules for an MX network
* `updateNetworkPortForwardingRules` - Update the port forwarding rules for an MX network

### mxStaticRoutes

* `createNetworkStaticRoute` - Add a static route for an MX or teleworker network
* `deleteNetworkStaticRoute` - Delete a static route from an MX or teleworker network
* `getNetworkStaticRoute` - Return a static route for an MX or teleworker network
* `getNetworkStaticRoutes` - List the static routes for an MX or teleworker network
* `updateNetworkStaticRoute` - Update a static route for an MX or teleworker network

### mxWarmSpareSettings

* `getNetworkWarmSpareSettings` - Return MX warm spare settings
* `swapNetworkWarmSpare` - Swap MX primary and warm spare appliances
* `updateNetworkWarmSpareSettings` - Update MX warm spare settings

### malwareSettings

* `getNetworkSecurityMalwareSettings` - Returns all supported malware settings for an MX network
* `updateNetworkSecurityMalwareSettings` - Set the supported malware settings for an MX network

### merakiAuthUsers

* `getNetworkMerakiAuthUser` - Return the Meraki Auth splash or RADIUS user
* `getNetworkMerakiAuthUsers` - List the splash or RADIUS users configured under Meraki Authentication for a network

### monitoredMediaServers

* `createOrganizationInsightMonitoredMediaServer` - Add a media server to be monitored for this organization
* `deleteOrganizationInsightMonitoredMediaServer` - Delete a monitored media server from this organization
* `getOrganizationInsightMonitoredMediaServer` - Return a monitored media server for this organization
* `getOrganizationInsightMonitoredMediaServers` - List the monitored media servers for this organization
* `updateOrganizationInsightMonitoredMediaServer` - Update a monitored media server for this organization

### namedTagScope

* `createNetworkSmTargetGroup` - Add a target group
* `deleteNetworkSmTargetGroup` - Delete a target group from a network
* `getNetworkSmTargetGroup` - Return a target group
* `getNetworkSmTargetGroups` - List the target groups in this network
* `updateNetworkSmTargetGroup` - Update a target group

### networks

* `bindNetwork` - Bind a network to a template.
* `combineOrganizationNetworks` - Combine multiple networks into a single network
* `createOrganizationNetwork` - Create a network
* `deleteNetwork` - Delete a network
* `getNetwork` - Return a network
* `getNetworkAirMarshal` - List Air Marshal scan results from a network
* `getNetworkSiteToSiteVpn` - Return the site-to-site VPN settings of a network
* `getNetworkTraffic` - Return the traffic analysis data for this network
* `getOrganizationNetworks` - List the networks in an organization
* `splitNetwork` - Split a combined network into individual networks for each type of device
* `unbindNetwork` - Unbind a network from a template.
* `updateNetwork` - Update a network
* `updateNetworkSiteToSiteVpn` - Update the site-to-site VPN settings of a network

### openAPISpec

* `getOrganizationOpenapiSpec` - Return the OpenAPI 2.0 Specification of the organization's API documentation in JSON

### organizations

* `claimIntoOrganization` - Claim a list of devices, licenses, and/or orders into an organization
* `cloneOrganization` - Create a new organization by cloning the addressed organization
* `getOrganization` - Return an organization
* `getOrganizationDeviceStatuses` - List the status of every Meraki device in the organization
* `getOrganizationInventory` - Return the inventory for an organization
* `getOrganizationThirdPartyVPNPeers` - Return the third party VPN peers for an organization
* `getOrganizationUplinksLossAndLatency` - Return the uplink loss and latency for every MX in the organization from at latest 2 minutes ago
* `getOrganizations` - List the organizations that the user has privileges on
* `updateOrganizationThirdPartyVPNPeers` - Update the third party VPN peers for an organization

### pii

* `createNetworkPiiRequest` - Submit a new delete or restrict processing PII request
* `deleteNetworkPiiRequest` - Delete a restrict processing PII request
* `getNetworkPiiPiiKeys` - List the keys required to access Personally Identifiable Information (PII) for a given identifier
* `getNetworkPiiRequest` - Return a PII request
* `getNetworkPiiRequests` - List the PII requests for this network or organization
* `getNetworkPiiSmDevicesForKey` - Given a piece of Personally Identifiable Information (PII), return the Systems Manager device ID(s) associated with that identifier
* `getNetworkPiiSmOwnersForKey` - Given a piece of Personally Identifiable Information (PII), return the Systems Manager owner ID(s) associated with that identifier

### radioSettings

* `createNetworkWirelessRfProfile` - Creates new RF profile for this network
* `deleteNetworkWirelessRfProfile` - Delete a RF Profile
* `getNetworkWirelessRfProfile` - Return a RF profile
* `getNetworkWirelessRfProfiles` - List the non-basic RF profiles for this network
* `updateNetworkWirelessRfProfile` - Updates specified RF profile for this network

### samlRoles

* `createOrganizationSamlRole` - Create a SAML role
* `getOrganizationSamlRole` - Return a SAML role
* `getOrganizationSamlRoles` - List the SAML roles for this organization
* `updateOrganizationSamlRole` - Update a SAML role

### sm

* `checkinNetworkSmDevices` - Force check-in a set of devices
* `createNetworkSmBypassActivationLockAttempt` - Bypass activation lock attempt
* `getNetworkSmBypassActivationLockAttempt` - Bypass activation lock attempt status
* `getNetworkSmCellularUsageHistory` - Return the client's daily cellular data usage history
* `getNetworkSmCerts` - List the certs on a device
* `getNetworkSmConnectivity` - Returns historical connectivity data (whether a device is regularly checking in to Dashboard).
* `getNetworkSmDesktopLogs` - Return historical records of various Systems Manager network connection details for desktop devices.
* `getNetworkSmDeviceCommandLogs` - Return historical records of commands sent to Systems Manager devices
* `getNetworkSmDeviceProfiles` - Get the profiles associated with a device
* `getNetworkSmDevices` - List the devices enrolled in an SM network with various specified fields and filters
* `getNetworkSmNetworkAdapters` - List the network adapters of a device
* `getNetworkSmPerformanceHistory` - Return historical records of various Systems Manager client metrics for desktop devices.
* `getNetworkSmProfiles` - List all the profiles in the network
* `getNetworkSmRestrictions` - List the restrictions on a device
* `getNetworkSmSecurityCenters` - List the security centers on a device
* `getNetworkSmSoftwares` - Get a list of softwares associated with a device
* `getNetworkSmUserDeviceProfiles` - Get the profiles associated with a user
* `getNetworkSmUserSoftwares` - Get a list of softwares associated with a user
* `getNetworkSmUsers` - List the owners in an SM network with various specified fields and filters
* `getNetworkSmWlanLists` - List the saved SSID names on a device
* `lockNetworkSmDevices` - Lock a set of devices
* `refreshNetworkSmDeviceDetails` - Refresh the details of a device
* `unenrollNetworkSmDevice` - Unenroll a device
* `updateNetworkSmDeviceFields` - Modify the fields of a device
* `updateNetworkSmDevicesTags` - Add, delete, or update the tags of a set of devices
* `wipeNetworkSmDevice` - Wipe a device

### snmpSettings

* `getNetworkSnmpSettings` - Return the SNMP settings for a network
* `getOrganizationSnmp` - Return the SNMP settings for an organization

### ssiDs

* `getNetworkDeviceWirelessStatus` - Return the SSID statuses of an access point
* `getNetworkSsid` - Return a single SSID
* `getNetworkSsids` - List the SSIDs in a network
* `updateNetworkSsid` - Update the attributes of an SSID

### securityEvents

* `getNetworkSecurityEvents` - List the security events (intrusion detection only) for a network
* `getOrganizationSecurityEvents` - List the security events (intrusion detection only) for an organization

### splashLoginAttempts

* `getNetworkSplashLoginAttempts` - List the splash login attempts for a network

### splashSettings

* `getNetworkSsidSplashSettings` - Display the splash page settings for the given SSID
* `updateNetworkSsidSplashSettings` - Modify the splash page settings for the given SSID

### switchAccessPolicies

* `getNetworkAccessPolicies` - List the access policies for this network

### switchPortSchedules

* `createNetworkSwitchPortSchedule` - Add a switch port schedule
* `deleteNetworkSwitchPortSchedule` - Delete a switch port schedule
* `getNetworkSwitchPortSchedules` - List switch port schedules
* `updateNetworkSwitchPortSchedule` - Update a switch port schedule

### switchPorts

* `getDeviceSwitchPortStatuses` - Return the status for all the ports of a switch
* `getDeviceSwitchPortStatusesPackets` - Return the packet counters for all the ports of a switch

### switchProfiles

* `getOrganizationConfigTemplateSwitchProfiles` - List the switch profiles for your switch template configuration

### switchSettings

* `createNetworkSwitchSettingsQosRule` - Add a quality of service rule
* `deleteNetworkSwitchSettingsQosRule` - Delete a quality of service rule
* `getNetworkSwitchSettings` - Returns the switch network settings
* `getNetworkSwitchSettingsMtu` - Return the MTU configuration
* `getNetworkSwitchSettingsMulticast` - Return multicast settings for a network
* `getNetworkSwitchSettingsQosRule` - Return a quality of service rule
* `getNetworkSwitchSettingsQosRules` - List quality of service rules
* `getNetworkSwitchSettingsQosRulesOrder` - Return the quality of service rule IDs by order in which they will be processed by the switch
* `getNetworkSwitchSettingsStormControl` - Return the storm control configuration for a switch network
* `updateNetworkSwitchSettings` - Update switch network settings
* `updateNetworkSwitchSettingsMtu` - Update the MTU configuration
* `updateNetworkSwitchSettingsMulticast` - Update multicast settings for a network
* `updateNetworkSwitchSettingsQosRule` - Update a quality of service rule
* `updateNetworkSwitchSettingsQosRulesOrder` - Update the order in which the rules should be processed by the switch
* `updateNetworkSwitchSettingsStormControl` - Update the storm control configuration for a switch network

### switchStacks

* `addNetworkSwitchStack` - Add a switch to a stack
* `createNetworkSwitchStack` - Create a stack
* `deleteNetworkSwitchStack` - Delete a stack
* `getNetworkSwitchStack` - Show a switch stack
* `getNetworkSwitchStacks` - List the switch stacks in a network
* `removeNetworkSwitchStack` - Remove a switch from a stack

### syslogServers

* `getNetworkSyslogServers` - List the syslog servers for a network
* `updateNetworkSyslogServers` - Update the syslog servers for a network

### trafficShapingUplinkSettings

* `getNetworkUplinkSettings` - Returns the uplink settings for your MX network.
* `updateNetworkUplinkSettings` - Updates the uplink settings for your MX network.

### vlaNs

* `createNetworkVlan` - Add a VLAN
* `deleteNetworkVlan` - Delete a VLAN from a network
* `getNetworkVlan` - Return a VLAN
* `getNetworkVlans` - List the VLANs for an MX network
* `getNetworkVlansEnabledState` - Returns the enabled status of VLANs for the network
* `updateNetworkVlan` - Update a VLAN
* `updateNetworkVlansEnabledState` - Enable/Disable VLANs for the given network

### wirelessHealth

* `getNetworkClientConnectionStats` - Aggregated connectivity info for a given client on this network
* `getNetworkClientLatencyStats` - Aggregated latency info for a given client on this network
* `getNetworkClientsConnectionStats` - Aggregated connectivity info for this network, grouped by clients
* `getNetworkClientsLatencyStats` - Aggregated latency info for this network, grouped by clients
* `getNetworkConnectionStats` - Aggregated connectivity info for this network
* `getNetworkDeviceConnectionStats` - Aggregated connectivity info for a given AP on this network
* `getNetworkDeviceLatencyStats` - Aggregated latency info for a given AP on this network
* `getNetworkDevicesConnectionStats` - Aggregated connectivity info for this network, grouped by node
* `getNetworkDevicesLatencyStats` - Aggregated latency info for this network, grouped by node
* `getNetworkFailedConnections` - List of all failed client connection events on this network in a given time range
* `getNetworkLatencyStats` - Aggregated latency info for this network

### wirelessSettings

* `getNetworkWirelessSettings` - Return the wireless settings for a network
* `updateNetworkWirelessSettings` - Update the wireless settings for a network
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

