# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/meraki.com/0.0.0-streaming/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: shared.SchemeMerakiAPIKey{
                APIKey: "YOUR_API_KEY_HERE",
            },
        }),
    )

    req := operations.GetOrganizationAPIRequestsRequest{
        PathParams: operations.GetOrganizationAPIRequestsPathParams{
            OrganizationID: "unde",
        },
        QueryParams: operations.GetOrganizationAPIRequestsQueryParams{
            AdminID: "deserunt",
            EndingBefore: "porro",
            Method: "nulla",
            Path: "id",
            PerPage: 857946,
            ResponseCode: 544883,
            SourceIP: "nulla",
            StartingAfter: "nihil",
            T0: "fuga",
            T1: "facilis",
            Timespan: 3843.82,
        },
    }

    ctx := context.Background()
    res, err := s.APIUsage.GetOrganizationAPIRequests(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationAPIRequests200ApplicationJSONObjects != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### APIUsage

* `GetOrganizationAPIRequests` - List the API requests made by an organization
* `GetOrganizationAPIRequestsOverview` - Return an aggregated overview of API requests data

### ActionBatches

* `CreateOrganizationActionBatch` - Create an action batch
* `DeleteOrganizationActionBatch` - Delete an action batch
* `GetOrganizationActionBatches` - Return the list of action batches in the organization
* `UpdateOrganizationActionBatch` - Update an action batch

### Admins

* `CreateOrganizationAdmin` - Create a new dashboard administrator
* `DeleteOrganizationAdmin` - Revoke all access for a dashboard administrator within this organization
* `GetOrganizationAdmins` - List the dashboard administrators in this organization
* `UpdateOrganizationAdmin` - Update an administrator

### AlertSettings

* `GetNetworkAlertSettings` - Return the alert configuration for this network
* `UpdateNetworkAlertSettings` - Update the alert configuration for this network

### BluetoothClients

* `GetNetworkBluetoothClient` - Return a Bluetooth client
* `GetNetworkBluetoothClients` - List the Bluetooth clients seen by APs in this network

### BluetoothSettings

* `GetNetworkBluetoothSettings` - Return the Bluetooth settings for a network. <a href="https://documentation.meraki.com/MR/Bluetooth/Bluetooth_Low_Energy_(BLE)">Bluetooth settings</a> must be enabled on the network.
* `UpdateDeviceWirelessBluetoothSettings` - Update the bluetooth settings for a wireless device
* `UpdateNetworkBluetoothSettings` - Update the Bluetooth settings for a network

### CameraQualityRetentionProfiles

* `CreateNetworkCameraQualityRetentionProfile` - Creates new quality retention profile for this network.
* `DeleteNetworkCameraQualityRetentionProfile` - Delete an existing quality retention profile for this network.
* `GetNetworkCameraQualityRetentionProfile` - Retrieve a single quality retention profile
* `GetNetworkCameraQualityRetentionProfiles` - List the quality retention profiles for this network
* `UpdateNetworkCameraQualityRetentionProfile` - Update an existing quality retention profile for this network.

### Cameras

* `GenerateNetworkCameraSnapshot` - Generate a snapshot of what the camera sees at the specified time and return a link to that image.
* `GetDeviceCameraQualityAndRetentionSettings` - Returns quality and retention settings for the given camera
* `GetDeviceCameraVideoSettings` - Returns video settings for the given camera
* `GetNetworkCameraSchedules` - Returns a list of all camera recording schedules.
* `GetNetworkCameraVideoLink` - Returns video link to the specified camera
* `UpdateDeviceCameraQualityAndRetentionSettings` - Update quality and retention settings for the given camera
* `UpdateDeviceCameraVideoSettings` - Update video settings for the given camera

### ChangeLog

* `GetOrganizationConfigurationChanges` - View the Change Log for your organization

### Clients

* `GetDeviceClients` - List the clients of a device, up to a maximum of a month ago
* `GetNetworkClient` - Return the client associated with the given identifier
* `GetNetworkClientEvents` - Return the events associated with this client
* `GetNetworkClientLatencyHistory` - Return the latency history for a client
* `GetNetworkClientPolicy` - Return the policy assigned to a client on the network
* `GetNetworkClientSplashAuthorizationStatus` - Return the splash authorization for a client, for each SSID they've associated with through splash
* `GetNetworkClientUsageHistory` - Return the client's daily usage history
* `GetNetworkClients` - List the clients that have used this network in the timespan
* `ProvisionNetworkClients` - Provisions a client with a name and policy
* `UpdateNetworkClientPolicy` - Update the policy assigned to a client on the network
* `UpdateNetworkClientSplashAuthorizationStatus` - Update a client's splash authorization

### ConfigTemplates

* `DeleteOrganizationConfigTemplate` - Remove a configuration template
* `GetOrganizationConfigTemplates` - List the configuration templates for this organization

### ContentFilteringCategories

* `GetNetworkContentFilteringCategories` - List all available content filtering categories for an MX network

### ContentFilteringRules

* `GetNetworkContentFiltering` - Return the content filtering settings for an MX network
* `UpdateNetworkContentFiltering` - Update the content filtering settings for an MX network

### Devices

* `ClaimNetworkDevices` - Claim devices into a network. (Note: for recently claimed devices, it may take a few minutes for API requests against that device to succeed)
* `CycleDeviceSwitchPorts` - Cycle a set of switch ports
* `GetNetworkDevice` - Return a single device
* `GetNetworkDeviceLossAndLatencyHistory` - Get the uplink loss percentage and latency in milliseconds for a wired network device.
* `GetNetworkDevicePerformance` - Return the performance score for a single MX
* `GetNetworkDeviceUplink` - Return the uplink information for a device.
* `GetNetworkDevices` - List the devices in a network
* `GetOrganizationDevices` - List the devices in an organization
* `RebootNetworkDevice` - Reboot a device
* `RemoveNetworkDevice` - Remove a single device
* `UpdateNetworkDevice` - Update the attributes of a device

### Events

* `GetNetworkEvents` - List the events for the network
* `GetNetworkEventsEventTypes` - List the event type to human-readable description

### FirewalledServices

* `GetNetworkFirewalledService` - Return the accessibility settings of the given service ('ICMP', 'web', or 'SNMP')
* `GetNetworkFirewalledServices` - List the appliance services and their accessibility rules
* `UpdateNetworkFirewalledService` - Updates the accessibility settings for the given service ('ICMP', 'web', or 'SNMP')

### FloorPlans

* `CreateNetworkFloorPlan` - Upload a floor plan
* `DeleteNetworkFloorPlan` - Destroy a floor plan
* `GetNetworkFloorPlan` - Find a floor plan by ID
* `GetNetworkFloorPlans` - List the floor plans that belong to your network
* `UpdateNetworkFloorPlan` - Update a floor plan's geolocation and other meta data

### IntrusionSettings

* `GetNetworkSecurityIntrusionSettings` - Returns all supported intrusion settings for an MX network
* `GetOrganizationSecurityIntrusionSettings` - Returns all supported intrusion settings for an organization
* `UpdateNetworkSecurityIntrusionSettings` - Set the supported intrusion settings for an MX network
* `UpdateOrganizationSecurityIntrusionSettings` - Sets supported intrusion settings for an organization

### Licenses

* `AssignOrganizationLicensesSeats` - Assign SM seats to a network
* `GetOrganizationLicense` - Display a license
* `GetOrganizationLicenseState` - Return an overview of the license state for an organization
* `GetOrganizationLicenses` - List the licenses for an organization
* `MoveOrganizationLicensesSeats` - Move SM seats to another organization
* `RenewOrganizationLicensesSeats` - Renew SM seats of a license

### LinkAggregations

* `CreateNetworkSwitchLinkAggregation` - Create a link aggregation group
* `DeleteNetworkSwitchLinkAggregation` - Split a link aggregation group into separate ports
* `GetNetworkSwitchLinkAggregations` - List link aggregation groups
* `UpdateNetworkSwitchLinkAggregation` - Update a link aggregation group

### MGLANSettings

* `GetDeviceCellularGatewaySettings` - Show the LAN Settings of a MG
* `UpdateDeviceCellularGatewaySettings` - Update the LAN Settings for a single MG.

### MGPortForwardingRules

* `GetDeviceCellularGatewaySettingsPortForwardingRules` - Returns the port forwarding rules for a single MG.
* `UpdateDeviceCellularGatewaySettingsPortForwardingRules` - Updates the port forwarding rules for a single MG.

### MGSubnetPoolSettings

* `GetNetworkCellularGatewaySettingsSubnetPool` - Return the subnet pool and mask configured for MGs in the network.
* `UpdateNetworkCellularGatewaySettingsSubnetPool` - Update the subnet pool and mask configuration for MGs in the network.

### MRL3Firewall

* `GetNetworkSsidL3FirewallRules` - Return the L3 firewall rules for an SSID on an MR network
* `UpdateNetworkSsidL3FirewallRules` - Update the L3 firewall rules of an SSID on an MR network

### MVSense

* `GetDeviceCameraAnalyticsLive` - Returns live state from camera of analytics zones
* `GetDeviceCameraAnalyticsOverview` - Returns an overview of aggregate analytics data for a timespan
* `GetDeviceCameraAnalyticsRecent` - Returns most recent record for analytics zones
* `GetDeviceCameraAnalyticsZoneHistory` - Return historical records for analytic zones
* `GetDeviceCameraAnalyticsZones` - Returns all configured analytic zones for this camera

### MX11NATRules

* `GetNetworkOneToOneNatRules` - Return the 1:1 NAT mapping rules for an MX network
* `UpdateNetworkOneToOneNatRules` - Set the 1:1 NAT mapping rules for an MX network

### MX1ManyNATRules

* `GetNetworkOneToManyNatRules` - Return the 1:Many NAT mapping rules for an MX network
* `UpdateNetworkOneToManyNatRules` - Set the 1:Many NAT mapping rules for an MX network

### MXL3InboundFirewall

* `GetNetworkApplianceFirewallInboundFirewallRules` - Return the inbound firewall rules for an MX network
* `UpdateNetworkApplianceFirewallInboundFirewallRules` - Update the inbound firewall rules of an MX network

### MXL3OutboundFirewall

* `GetNetworkL3FirewallRules` - Return the L3 firewall rules for an MX network
* `UpdateNetworkL3FirewallRules` - Update the L3 firewall rules of an MX network

### MXL7ApplicationCategories

* `GetNetworkL7FirewallRulesApplicationCategories` - Return the L7 firewall application categories and their associated applications for an MX network

### MXL7Firewall

* `GetNetworkL7FirewallRules` - List the MX L7 firewall rules for an MX network
* `UpdateNetworkL7FirewallRules` - Update the MX L7 firewall rules for an MX network

### MXVLANPorts

* `GetNetworkAppliancePort` - Return per-port VLAN settings for a single MX port.
* `GetNetworkAppliancePorts` - List per-port VLAN settings for all ports of a MX.
* `UpdateNetworkAppliancePort` - Update the per-port VLAN settings for a single MX port.

### MXVPNFirewall

* `GetOrganizationVpnFirewallRules` - Return the firewall rules for an organization's site-to-site VPN
* `UpdateOrganizationVpnFirewallRules` - Update the firewall rules of an organization's site-to-site VPN

### MXCellularFirewall

* `GetNetworkCellularFirewallRules` - Return the cellular firewall rules for an MX network
* `UpdateNetworkCellularFirewallRules` - Update the cellular firewall rules of an MX network

### MXPortForwardingRules

* `GetNetworkPortForwardingRules` - Return the port forwarding rules for an MX network
* `UpdateNetworkPortForwardingRules` - Update the port forwarding rules for an MX network

### MXStaticRoutes

* `CreateNetworkStaticRoute` - Add a static route for an MX or teleworker network
* `DeleteNetworkStaticRoute` - Delete a static route from an MX or teleworker network
* `GetNetworkStaticRoute` - Return a static route for an MX or teleworker network
* `GetNetworkStaticRoutes` - List the static routes for an MX or teleworker network
* `UpdateNetworkStaticRoute` - Update a static route for an MX or teleworker network

### MXWarmSpareSettings

* `GetNetworkWarmSpareSettings` - Return MX warm spare settings
* `SwapNetworkWarmSpare` - Swap MX primary and warm spare appliances
* `UpdateNetworkWarmSpareSettings` - Update MX warm spare settings

### MalwareSettings

* `GetNetworkSecurityMalwareSettings` - Returns all supported malware settings for an MX network
* `UpdateNetworkSecurityMalwareSettings` - Set the supported malware settings for an MX network

### MerakiAuthUsers

* `GetNetworkMerakiAuthUser` - Return the Meraki Auth splash or RADIUS user
* `GetNetworkMerakiAuthUsers` - List the splash or RADIUS users configured under Meraki Authentication for a network

### MonitoredMediaServers

* `CreateOrganizationInsightMonitoredMediaServer` - Add a media server to be monitored for this organization
* `DeleteOrganizationInsightMonitoredMediaServer` - Delete a monitored media server from this organization
* `GetOrganizationInsightMonitoredMediaServer` - Return a monitored media server for this organization
* `GetOrganizationInsightMonitoredMediaServers` - List the monitored media servers for this organization
* `UpdateOrganizationInsightMonitoredMediaServer` - Update a monitored media server for this organization

### NamedTagScope

* `CreateNetworkSmTargetGroup` - Add a target group
* `DeleteNetworkSmTargetGroup` - Delete a target group from a network
* `GetNetworkSmTargetGroup` - Return a target group
* `GetNetworkSmTargetGroups` - List the target groups in this network
* `UpdateNetworkSmTargetGroup` - Update a target group

### Networks

* `BindNetwork` - Bind a network to a template.
* `CombineOrganizationNetworks` - Combine multiple networks into a single network
* `CreateOrganizationNetwork` - Create a network
* `DeleteNetwork` - Delete a network
* `GetNetwork` - Return a network
* `GetNetworkAirMarshal` - List Air Marshal scan results from a network
* `GetNetworkSiteToSiteVpn` - Return the site-to-site VPN settings of a network
* `GetNetworkTraffic` - Return the traffic analysis data for this network
* `GetOrganizationNetworks` - List the networks in an organization
* `SplitNetwork` - Split a combined network into individual networks for each type of device
* `UnbindNetwork` - Unbind a network from a template.
* `UpdateNetwork` - Update a network
* `UpdateNetworkSiteToSiteVpn` - Update the site-to-site VPN settings of a network

### OpenAPISpec

* `GetOrganizationOpenapiSpec` - Return the OpenAPI 2.0 Specification of the organization's API documentation in JSON

### Organizations

* `ClaimIntoOrganization` - Claim a list of devices, licenses, and/or orders into an organization
* `CloneOrganization` - Create a new organization by cloning the addressed organization
* `GetOrganization` - Return an organization
* `GetOrganizationDeviceStatuses` - List the status of every Meraki device in the organization
* `GetOrganizationInventory` - Return the inventory for an organization
* `GetOrganizationThirdPartyVPNPeers` - Return the third party VPN peers for an organization
* `GetOrganizationUplinksLossAndLatency` - Return the uplink loss and latency for every MX in the organization from at latest 2 minutes ago
* `GetOrganizations` - List the organizations that the user has privileges on
* `UpdateOrganizationThirdPartyVPNPeers` - Update the third party VPN peers for an organization

### Pii

* `CreateNetworkPiiRequest` - Submit a new delete or restrict processing PII request
* `DeleteNetworkPiiRequest` - Delete a restrict processing PII request
* `GetNetworkPiiPiiKeys` - List the keys required to access Personally Identifiable Information (PII) for a given identifier
* `GetNetworkPiiRequest` - Return a PII request
* `GetNetworkPiiRequests` - List the PII requests for this network or organization
* `GetNetworkPiiSmDevicesForKey` - Given a piece of Personally Identifiable Information (PII), return the Systems Manager device ID(s) associated with that identifier
* `GetNetworkPiiSmOwnersForKey` - Given a piece of Personally Identifiable Information (PII), return the Systems Manager owner ID(s) associated with that identifier

### RadioSettings

* `CreateNetworkWirelessRfProfile` - Creates new RF profile for this network
* `DeleteNetworkWirelessRfProfile` - Delete a RF Profile
* `GetNetworkDeviceWirelessRadioSettings` - Return the radio settings of a device
* `GetNetworkWirelessRfProfile` - Return a RF profile
* `GetNetworkWirelessRfProfiles` - List the non-basic RF profiles for this network
* `UpdateNetworkWirelessRfProfile` - Updates specified RF profile for this network

### SAMLRoles

* `CreateOrganizationSamlRole` - Create a SAML role
* `GetOrganizationSamlRole` - Return a SAML role
* `GetOrganizationSamlRoles` - List the SAML roles for this organization
* `UpdateOrganizationSamlRole` - Update a SAML role

### Sm

* `CheckinNetworkSmDevices` - Force check-in a set of devices
* `CreateNetworkSmBypassActivationLockAttempt` - Bypass activation lock attempt
* `GetNetworkSmBypassActivationLockAttempt` - Bypass activation lock attempt status
* `GetNetworkSmCellularUsageHistory` - Return the client's daily cellular data usage history
* `GetNetworkSmCerts` - List the certs on a device
* `GetNetworkSmConnectivity` - Returns historical connectivity data (whether a device is regularly checking in to Dashboard).
* `GetNetworkSmDesktopLogs` - Return historical records of various Systems Manager network connection details for desktop devices.
* `GetNetworkSmDeviceCommandLogs` - Return historical records of commands sent to Systems Manager devices
* `GetNetworkSmDeviceProfiles` - Get the profiles associated with a device
* `GetNetworkSmDevices` - List the devices enrolled in an SM network with various specified fields and filters
* `GetNetworkSmNetworkAdapters` - List the network adapters of a device
* `GetNetworkSmPerformanceHistory` - Return historical records of various Systems Manager client metrics for desktop devices.
* `GetNetworkSmProfiles` - List all the profiles in the network
* `GetNetworkSmRestrictions` - List the restrictions on a device
* `GetNetworkSmSecurityCenters` - List the security centers on a device
* `GetNetworkSmSoftwares` - Get a list of softwares associated with a device
* `GetNetworkSmUserDeviceProfiles` - Get the profiles associated with a user
* `GetNetworkSmUserSoftwares` - Get a list of softwares associated with a user
* `GetNetworkSmUsers` - List the owners in an SM network with various specified fields and filters
* `GetNetworkSmWlanLists` - List the saved SSID names on a device
* `LockNetworkSmDevices` - Lock a set of devices
* `RefreshNetworkSmDeviceDetails` - Refresh the details of a device
* `UnenrollNetworkSmDevice` - Unenroll a device
* `UpdateNetworkSmDeviceFields` - Modify the fields of a device
* `UpdateNetworkSmDevicesTags` - Add, delete, or update the tags of a set of devices
* `WipeNetworkSmDevice` - Wipe a device

### SNMPSettings

* `GetNetworkSnmpSettings` - Return the SNMP settings for a network
* `GetOrganizationSnmp` - Return the SNMP settings for an organization

### SSIDs

* `GetNetworkDeviceWirelessStatus` - Return the SSID statuses of an access point
* `GetNetworkSsid` - Return a single SSID
* `GetNetworkSsids` - List the SSIDs in a network
* `UpdateNetworkSsid` - Update the attributes of an SSID

### SecurityEvents

* `GetNetworkSecurityEvents` - List the security events (intrusion detection only) for a network
* `GetOrganizationSecurityEvents` - List the security events (intrusion detection only) for an organization

### SplashLoginAttempts

* `GetNetworkSplashLoginAttempts` - List the splash login attempts for a network

### SplashSettings

* `GetNetworkSsidSplashSettings` - Display the splash page settings for the given SSID
* `UpdateNetworkSsidSplashSettings` - Modify the splash page settings for the given SSID

### SwitchAccessPolicies

* `GetNetworkAccessPolicies` - List the access policies for this network

### SwitchPortSchedules

* `CreateNetworkSwitchPortSchedule` - Add a switch port schedule
* `DeleteNetworkSwitchPortSchedule` - Delete a switch port schedule
* `GetNetworkSwitchPortSchedules` - List switch port schedules
* `UpdateNetworkSwitchPortSchedule` - Update a switch port schedule

### SwitchPorts

* `GetDeviceSwitchPortStatuses` - Return the status for all the ports of a switch
* `GetDeviceSwitchPortStatusesPackets` - Return the packet counters for all the ports of a switch

### SwitchProfiles

* `GetOrganizationConfigTemplateSwitchProfiles` - List the switch profiles for your switch template configuration

### SwitchSettings

* `CreateNetworkSwitchSettingsQosRule` - Add a quality of service rule
* `DeleteNetworkSwitchSettingsQosRule` - Delete a quality of service rule
* `GetNetworkSwitchSettings` - Returns the switch network settings
* `GetNetworkSwitchSettingsDhcpServerPolicy` - Return the DHCP server policy
* `GetNetworkSwitchSettingsDscpToCosMappings` - Return the DSCP to CoS mappings
* `GetNetworkSwitchSettingsMtu` - Return the MTU configuration
* `GetNetworkSwitchSettingsMulticast` - Return multicast settings for a network
* `GetNetworkSwitchSettingsQosRule` - Return a quality of service rule
* `GetNetworkSwitchSettingsQosRules` - List quality of service rules
* `GetNetworkSwitchSettingsQosRulesOrder` - Return the quality of service rule IDs by order in which they will be processed by the switch
* `GetNetworkSwitchSettingsStormControl` - Return the storm control configuration for a switch network
* `UpdateNetworkSwitchSettings` - Update switch network settings
* `UpdateNetworkSwitchSettingsDhcpServerPolicy` - Update the DHCP server policy
* `UpdateNetworkSwitchSettingsDscpToCosMappings` - Update the DSCP to CoS mappings
* `UpdateNetworkSwitchSettingsMtu` - Update the MTU configuration
* `UpdateNetworkSwitchSettingsMulticast` - Update multicast settings for a network
* `UpdateNetworkSwitchSettingsQosRule` - Update a quality of service rule
* `UpdateNetworkSwitchSettingsQosRulesOrder` - Update the order in which the rules should be processed by the switch
* `UpdateNetworkSwitchSettingsStormControl` - Update the storm control configuration for a switch network

### SwitchStacks

* `AddNetworkSwitchStack` - Add a switch to a stack
* `CreateNetworkSwitchStack` - Create a stack
* `DeleteNetworkSwitchStack` - Delete a stack
* `GetNetworkSwitchStack` - Show a switch stack
* `GetNetworkSwitchStacks` - List the switch stacks in a network
* `RemoveNetworkSwitchStack` - Remove a switch from a stack

### SyslogServers

* `GetNetworkSyslogServers` - List the syslog servers for a network
* `UpdateNetworkSyslogServers` - Update the syslog servers for a network

### TrafficShapingUplinkSettings

* `GetNetworkUplinkSettings` - Returns the uplink settings for your MX network.
* `UpdateNetworkUplinkSettings` - Updates the uplink settings for your MX network.

### VLANs

* `CreateNetworkVlan` - Add a VLAN
* `DeleteNetworkVlan` - Delete a VLAN from a network
* `GetNetworkVlan` - Return a VLAN
* `GetNetworkVlans` - List the VLANs for an MX network
* `GetNetworkVlansEnabledState` - Returns the enabled status of VLANs for the network
* `UpdateNetworkVlan` - Update a VLAN
* `UpdateNetworkVlansEnabledState` - Enable/Disable VLANs for the given network

### WirelessHealth

* `GetNetworkClientConnectionStats` - Aggregated connectivity info for a given client on this network
* `GetNetworkClientLatencyStats` - Aggregated latency info for a given client on this network
* `GetNetworkClientsConnectionStats` - Aggregated connectivity info for this network, grouped by clients
* `GetNetworkClientsLatencyStats` - Aggregated latency info for this network, grouped by clients
* `GetNetworkConnectionStats` - Aggregated connectivity info for this network
* `GetNetworkDeviceConnectionStats` - Aggregated connectivity info for a given AP on this network
* `GetNetworkDeviceLatencyStats` - Aggregated latency info for a given AP on this network
* `GetNetworkDevicesConnectionStats` - Aggregated connectivity info for this network, grouped by node
* `GetNetworkDevicesLatencyStats` - Aggregated latency info for this network, grouped by node
* `GetNetworkFailedConnections` - List of all failed client connection events on this network in a given time range
* `GetNetworkLatencyStats` - Aggregated latency info for this network

### WirelessSettings

* `GetNetworkWirelessSettings` - Return the wireless settings for a network
* `UpdateNetworkWirelessSettings` - Update the wireless settings for a network
<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
