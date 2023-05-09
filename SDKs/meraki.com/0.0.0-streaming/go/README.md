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

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.APIUsage.GetOrganizationAPIRequests(ctx, operations.GetOrganizationAPIRequestsRequest{
        AdminID: sdk.String("corrupti"),
        EndingBefore: sdk.String("provident"),
        Method: sdk.String("distinctio"),
        OrganizationID: "quibusdam",
        Path: sdk.String("unde"),
        PerPage: sdk.Int64(857946),
        ResponseCode: sdk.Int64(544883),
        SourceIP: sdk.String("illum"),
        StartingAfter: sdk.String("vel"),
        T0: sdk.String("error"),
        T1: sdk.String("deserunt"),
        Timespan: sdk.Float32(3843.82),
    })
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
## Available Resources and Operations


### [APIUsage](docs/apiusage/README.md)

* [GetOrganizationAPIRequests](docs/apiusage/README.md#getorganizationapirequests) - List the API requests made by an organization
* [GetOrganizationAPIRequestsOverview](docs/apiusage/README.md#getorganizationapirequestsoverview) - Return an aggregated overview of API requests data

### [ActionBatches](docs/actionbatches/README.md)

* [CreateOrganizationActionBatch](docs/actionbatches/README.md#createorganizationactionbatch) - Create an action batch
* [DeleteOrganizationActionBatch](docs/actionbatches/README.md#deleteorganizationactionbatch) - Delete an action batch
* [GetOrganizationActionBatches](docs/actionbatches/README.md#getorganizationactionbatches) - Return the list of action batches in the organization
* [UpdateOrganizationActionBatch](docs/actionbatches/README.md#updateorganizationactionbatch) - Update an action batch

### [Admins](docs/admins/README.md)

* [CreateOrganizationAdmin](docs/admins/README.md#createorganizationadmin) - Create a new dashboard administrator
* [DeleteOrganizationAdmin](docs/admins/README.md#deleteorganizationadmin) - Revoke all access for a dashboard administrator within this organization
* [GetOrganizationAdmins](docs/admins/README.md#getorganizationadmins) - List the dashboard administrators in this organization
* [UpdateOrganizationAdmin](docs/admins/README.md#updateorganizationadmin) - Update an administrator

### [AlertSettings](docs/alertsettings/README.md)

* [GetNetworkAlertSettings](docs/alertsettings/README.md#getnetworkalertsettings) - Return the alert configuration for this network
* [UpdateNetworkAlertSettings](docs/alertsettings/README.md#updatenetworkalertsettings) - Update the alert configuration for this network

### [BluetoothClients](docs/bluetoothclients/README.md)

* [GetNetworkBluetoothClient](docs/bluetoothclients/README.md#getnetworkbluetoothclient) - Return a Bluetooth client
* [GetNetworkBluetoothClients](docs/bluetoothclients/README.md#getnetworkbluetoothclients) - List the Bluetooth clients seen by APs in this network

### [BluetoothSettings](docs/bluetoothsettings/README.md)

* [GetNetworkBluetoothSettings](docs/bluetoothsettings/README.md#getnetworkbluetoothsettings) - Return the Bluetooth settings for a network. <a href="https://documentation.meraki.com/MR/Bluetooth/Bluetooth_Low_Energy_(BLE)">Bluetooth settings</a> must be enabled on the network.
* [UpdateDeviceWirelessBluetoothSettings](docs/bluetoothsettings/README.md#updatedevicewirelessbluetoothsettings) - Update the bluetooth settings for a wireless device
* [UpdateNetworkBluetoothSettings](docs/bluetoothsettings/README.md#updatenetworkbluetoothsettings) - Update the Bluetooth settings for a network

### [CameraQualityRetentionProfiles](docs/cameraqualityretentionprofiles/README.md)

* [CreateNetworkCameraQualityRetentionProfile](docs/cameraqualityretentionprofiles/README.md#createnetworkcameraqualityretentionprofile) - Creates new quality retention profile for this network.
* [DeleteNetworkCameraQualityRetentionProfile](docs/cameraqualityretentionprofiles/README.md#deletenetworkcameraqualityretentionprofile) - Delete an existing quality retention profile for this network.
* [GetNetworkCameraQualityRetentionProfile](docs/cameraqualityretentionprofiles/README.md#getnetworkcameraqualityretentionprofile) - Retrieve a single quality retention profile
* [GetNetworkCameraQualityRetentionProfiles](docs/cameraqualityretentionprofiles/README.md#getnetworkcameraqualityretentionprofiles) - List the quality retention profiles for this network
* [UpdateNetworkCameraQualityRetentionProfile](docs/cameraqualityretentionprofiles/README.md#updatenetworkcameraqualityretentionprofile) - Update an existing quality retention profile for this network.

### [Cameras](docs/cameras/README.md)

* [GenerateNetworkCameraSnapshot](docs/cameras/README.md#generatenetworkcamerasnapshot) - Generate a snapshot of what the camera sees at the specified time and return a link to that image.
* [GetDeviceCameraVideoSettings](docs/cameras/README.md#getdevicecameravideosettings) - Returns video settings for the given camera
* [GetNetworkCameraSchedules](docs/cameras/README.md#getnetworkcameraschedules) - Returns a list of all camera recording schedules.
* [GetNetworkCameraVideoLink](docs/cameras/README.md#getnetworkcameravideolink) - Returns video link to the specified camera
* [UpdateDeviceCameraVideoSettings](docs/cameras/README.md#updatedevicecameravideosettings) - Update video settings for the given camera

### [ChangeLog](docs/changelog/README.md)

* [GetOrganizationConfigurationChanges](docs/changelog/README.md#getorganizationconfigurationchanges) - View the Change Log for your organization

### [Clients](docs/clients/README.md)

* [GetDeviceClients](docs/clients/README.md#getdeviceclients) - List the clients of a device, up to a maximum of a month ago
* [GetNetworkClient](docs/clients/README.md#getnetworkclient) - Return the client associated with the given identifier
* [GetNetworkClientEvents](docs/clients/README.md#getnetworkclientevents) - Return the events associated with this client
* [GetNetworkClientLatencyHistory](docs/clients/README.md#getnetworkclientlatencyhistory) - Return the latency history for a client
* [GetNetworkClientPolicy](docs/clients/README.md#getnetworkclientpolicy) - Return the policy assigned to a client on the network
* [GetNetworkClientSplashAuthorizationStatus](docs/clients/README.md#getnetworkclientsplashauthorizationstatus) - Return the splash authorization for a client, for each SSID they've associated with through splash
* [GetNetworkClientUsageHistory](docs/clients/README.md#getnetworkclientusagehistory) - Return the client's daily usage history
* [GetNetworkClients](docs/clients/README.md#getnetworkclients) - List the clients that have used this network in the timespan
* [ProvisionNetworkClients](docs/clients/README.md#provisionnetworkclients) - Provisions a client with a name and policy
* [UpdateNetworkClientPolicy](docs/clients/README.md#updatenetworkclientpolicy) - Update the policy assigned to a client on the network
* [UpdateNetworkClientSplashAuthorizationStatus](docs/clients/README.md#updatenetworkclientsplashauthorizationstatus) - Update a client's splash authorization

### [ConfigTemplates](docs/configtemplates/README.md)

* [DeleteOrganizationConfigTemplate](docs/configtemplates/README.md#deleteorganizationconfigtemplate) - Remove a configuration template
* [GetOrganizationConfigTemplates](docs/configtemplates/README.md#getorganizationconfigtemplates) - List the configuration templates for this organization

### [ContentFilteringCategories](docs/contentfilteringcategories/README.md)

* [GetNetworkContentFilteringCategories](docs/contentfilteringcategories/README.md#getnetworkcontentfilteringcategories) - List all available content filtering categories for an MX network

### [ContentFilteringRules](docs/contentfilteringrules/README.md)

* [GetNetworkContentFiltering](docs/contentfilteringrules/README.md#getnetworkcontentfiltering) - Return the content filtering settings for an MX network
* [UpdateNetworkContentFiltering](docs/contentfilteringrules/README.md#updatenetworkcontentfiltering) - Update the content filtering settings for an MX network

### [Devices](docs/devices/README.md)

* [ClaimNetworkDevices](docs/devices/README.md#claimnetworkdevices) - Claim devices into a network. (Note: for recently claimed devices, it may take a few minutes for API requests against that device to succeed)
* [CycleDeviceSwitchPorts](docs/devices/README.md#cycledeviceswitchports) - Cycle a set of switch ports
* [GetNetworkDevice](docs/devices/README.md#getnetworkdevice) - Return a single device
* [GetNetworkDeviceLossAndLatencyHistory](docs/devices/README.md#getnetworkdevicelossandlatencyhistory) - Get the uplink loss percentage and latency in milliseconds for a wired network device.
* [GetNetworkDevicePerformance](docs/devices/README.md#getnetworkdeviceperformance) - Return the performance score for a single MX
* [GetNetworkDeviceUplink](docs/devices/README.md#getnetworkdeviceuplink) - Return the uplink information for a device.
* [GetNetworkDevices](docs/devices/README.md#getnetworkdevices) - List the devices in a network
* [GetOrganizationDevices](docs/devices/README.md#getorganizationdevices) - List the devices in an organization
* [RebootNetworkDevice](docs/devices/README.md#rebootnetworkdevice) - Reboot a device
* [RemoveNetworkDevice](docs/devices/README.md#removenetworkdevice) - Remove a single device
* [UpdateNetworkDevice](docs/devices/README.md#updatenetworkdevice) - Update the attributes of a device

### [Events](docs/events/README.md)

* [GetNetworkEvents](docs/events/README.md#getnetworkevents) - List the events for the network
* [GetNetworkEventsEventTypes](docs/events/README.md#getnetworkeventseventtypes) - List the event type to human-readable description

### [FirewalledServices](docs/firewalledservices/README.md)

* [GetNetworkFirewalledService](docs/firewalledservices/README.md#getnetworkfirewalledservice) - Return the accessibility settings of the given service ('ICMP', 'web', or 'SNMP')
* [GetNetworkFirewalledServices](docs/firewalledservices/README.md#getnetworkfirewalledservices) - List the appliance services and their accessibility rules

### [FloorPlans](docs/floorplans/README.md)

* [CreateNetworkFloorPlan](docs/floorplans/README.md#createnetworkfloorplan) - Upload a floor plan
* [DeleteNetworkFloorPlan](docs/floorplans/README.md#deletenetworkfloorplan) - Destroy a floor plan
* [GetNetworkFloorPlan](docs/floorplans/README.md#getnetworkfloorplan) - Find a floor plan by ID
* [GetNetworkFloorPlans](docs/floorplans/README.md#getnetworkfloorplans) - List the floor plans that belong to your network
* [UpdateNetworkFloorPlan](docs/floorplans/README.md#updatenetworkfloorplan) - Update a floor plan's geolocation and other meta data

### [IntrusionSettings](docs/intrusionsettings/README.md)

* [GetNetworkSecurityIntrusionSettings](docs/intrusionsettings/README.md#getnetworksecurityintrusionsettings) - Returns all supported intrusion settings for an MX network
* [GetOrganizationSecurityIntrusionSettings](docs/intrusionsettings/README.md#getorganizationsecurityintrusionsettings) - Returns all supported intrusion settings for an organization
* [UpdateNetworkSecurityIntrusionSettings](docs/intrusionsettings/README.md#updatenetworksecurityintrusionsettings) - Set the supported intrusion settings for an MX network
* [UpdateOrganizationSecurityIntrusionSettings](docs/intrusionsettings/README.md#updateorganizationsecurityintrusionsettings) - Sets supported intrusion settings for an organization

### [Licenses](docs/licenses/README.md)

* [AssignOrganizationLicensesSeats](docs/licenses/README.md#assignorganizationlicensesseats) - Assign SM seats to a network
* [GetOrganizationLicense](docs/licenses/README.md#getorganizationlicense) - Display a license
* [GetOrganizationLicenseState](docs/licenses/README.md#getorganizationlicensestate) - Return an overview of the license state for an organization
* [GetOrganizationLicenses](docs/licenses/README.md#getorganizationlicenses) - List the licenses for an organization
* [MoveOrganizationLicensesSeats](docs/licenses/README.md#moveorganizationlicensesseats) - Move SM seats to another organization
* [RenewOrganizationLicensesSeats](docs/licenses/README.md#reneworganizationlicensesseats) - Renew SM seats of a license

### [LinkAggregations](docs/linkaggregations/README.md)

* [CreateNetworkSwitchLinkAggregation](docs/linkaggregations/README.md#createnetworkswitchlinkaggregation) - Create a link aggregation group
* [DeleteNetworkSwitchLinkAggregation](docs/linkaggregations/README.md#deletenetworkswitchlinkaggregation) - Split a link aggregation group into separate ports
* [GetNetworkSwitchLinkAggregations](docs/linkaggregations/README.md#getnetworkswitchlinkaggregations) - List link aggregation groups
* [UpdateNetworkSwitchLinkAggregation](docs/linkaggregations/README.md#updatenetworkswitchlinkaggregation) - Update a link aggregation group

### [MGLANSettings](docs/mglansettings/README.md)

* [GetDeviceCellularGatewaySettings](docs/mglansettings/README.md#getdevicecellulargatewaysettings) - Show the LAN Settings of a MG
* [UpdateDeviceCellularGatewaySettings](docs/mglansettings/README.md#updatedevicecellulargatewaysettings) - Update the LAN Settings for a single MG.

### [MGPortForwardingRules](docs/mgportforwardingrules/README.md)

* [GetDeviceCellularGatewaySettingsPortForwardingRules](docs/mgportforwardingrules/README.md#getdevicecellulargatewaysettingsportforwardingrules) - Returns the port forwarding rules for a single MG.
* [UpdateDeviceCellularGatewaySettingsPortForwardingRules](docs/mgportforwardingrules/README.md#updatedevicecellulargatewaysettingsportforwardingrules) - Updates the port forwarding rules for a single MG.

### [MRL3Firewall](docs/mrl3firewall/README.md)

* [GetNetworkSsidL3FirewallRules](docs/mrl3firewall/README.md#getnetworkssidl3firewallrules) - Return the L3 firewall rules for an SSID on an MR network
* [UpdateNetworkSsidL3FirewallRules](docs/mrl3firewall/README.md#updatenetworkssidl3firewallrules) - Update the L3 firewall rules of an SSID on an MR network

### [MVSense](docs/mvsense/README.md)

* [GetDeviceCameraAnalyticsLive](docs/mvsense/README.md#getdevicecameraanalyticslive) - Returns live state from camera of analytics zones
* [GetDeviceCameraAnalyticsOverview](docs/mvsense/README.md#getdevicecameraanalyticsoverview) - Returns an overview of aggregate analytics data for a timespan
* [GetDeviceCameraAnalyticsRecent](docs/mvsense/README.md#getdevicecameraanalyticsrecent) - Returns most recent record for analytics zones
* [GetDeviceCameraAnalyticsZoneHistory](docs/mvsense/README.md#getdevicecameraanalyticszonehistory) - Return historical records for analytic zones
* [GetDeviceCameraAnalyticsZones](docs/mvsense/README.md#getdevicecameraanalyticszones) - Returns all configured analytic zones for this camera

### [MX11NATRules](docs/mx11natrules/README.md)

* [GetNetworkOneToOneNatRules](docs/mx11natrules/README.md#getnetworkonetoonenatrules) - Return the 1:1 NAT mapping rules for an MX network
* [UpdateNetworkOneToOneNatRules](docs/mx11natrules/README.md#updatenetworkonetoonenatrules) - Set the 1:1 NAT mapping rules for an MX network

### [MX1ManyNATRules](docs/mx1manynatrules/README.md)

* [GetNetworkOneToManyNatRules](docs/mx1manynatrules/README.md#getnetworkonetomanynatrules) - Return the 1:Many NAT mapping rules for an MX network
* [UpdateNetworkOneToManyNatRules](docs/mx1manynatrules/README.md#updatenetworkonetomanynatrules) - Set the 1:Many NAT mapping rules for an MX network

### [MXL3InboundFirewall](docs/mxl3inboundfirewall/README.md)

* [GetNetworkApplianceFirewallInboundFirewallRules](docs/mxl3inboundfirewall/README.md#getnetworkappliancefirewallinboundfirewallrules) - Return the inbound firewall rules for an MX network
* [UpdateNetworkApplianceFirewallInboundFirewallRules](docs/mxl3inboundfirewall/README.md#updatenetworkappliancefirewallinboundfirewallrules) - Update the inbound firewall rules of an MX network

### [MXL3OutboundFirewall](docs/mxl3outboundfirewall/README.md)

* [GetNetworkL3FirewallRules](docs/mxl3outboundfirewall/README.md#getnetworkl3firewallrules) - Return the L3 firewall rules for an MX network
* [UpdateNetworkL3FirewallRules](docs/mxl3outboundfirewall/README.md#updatenetworkl3firewallrules) - Update the L3 firewall rules of an MX network

### [MXL7ApplicationCategories](docs/mxl7applicationcategories/README.md)

* [GetNetworkL7FirewallRulesApplicationCategories](docs/mxl7applicationcategories/README.md#getnetworkl7firewallrulesapplicationcategories) - Return the L7 firewall application categories and their associated applications for an MX network

### [MXL7Firewall](docs/mxl7firewall/README.md)

* [GetNetworkL7FirewallRules](docs/mxl7firewall/README.md#getnetworkl7firewallrules) - List the MX L7 firewall rules for an MX network
* [UpdateNetworkL7FirewallRules](docs/mxl7firewall/README.md#updatenetworkl7firewallrules) - Update the MX L7 firewall rules for an MX network

### [MXVLANPorts](docs/mxvlanports/README.md)

* [GetNetworkAppliancePort](docs/mxvlanports/README.md#getnetworkapplianceport) - Return per-port VLAN settings for a single MX port.
* [GetNetworkAppliancePorts](docs/mxvlanports/README.md#getnetworkapplianceports) - List per-port VLAN settings for all ports of a MX.
* [UpdateNetworkAppliancePort](docs/mxvlanports/README.md#updatenetworkapplianceport) - Update the per-port VLAN settings for a single MX port.

### [MXVPNFirewall](docs/mxvpnfirewall/README.md)

* [GetOrganizationVpnFirewallRules](docs/mxvpnfirewall/README.md#getorganizationvpnfirewallrules) - Return the firewall rules for an organization's site-to-site VPN
* [UpdateOrganizationVpnFirewallRules](docs/mxvpnfirewall/README.md#updateorganizationvpnfirewallrules) - Update the firewall rules of an organization's site-to-site VPN

### [MXCellularFirewall](docs/mxcellularfirewall/README.md)

* [GetNetworkCellularFirewallRules](docs/mxcellularfirewall/README.md#getnetworkcellularfirewallrules) - Return the cellular firewall rules for an MX network
* [UpdateNetworkCellularFirewallRules](docs/mxcellularfirewall/README.md#updatenetworkcellularfirewallrules) - Update the cellular firewall rules of an MX network

### [MXPortForwardingRules](docs/mxportforwardingrules/README.md)

* [GetNetworkPortForwardingRules](docs/mxportforwardingrules/README.md#getnetworkportforwardingrules) - Return the port forwarding rules for an MX network
* [UpdateNetworkPortForwardingRules](docs/mxportforwardingrules/README.md#updatenetworkportforwardingrules) - Update the port forwarding rules for an MX network

### [MXStaticRoutes](docs/mxstaticroutes/README.md)

* [CreateNetworkStaticRoute](docs/mxstaticroutes/README.md#createnetworkstaticroute) - Add a static route for an MX or teleworker network
* [DeleteNetworkStaticRoute](docs/mxstaticroutes/README.md#deletenetworkstaticroute) - Delete a static route from an MX or teleworker network
* [GetNetworkStaticRoute](docs/mxstaticroutes/README.md#getnetworkstaticroute) - Return a static route for an MX or teleworker network
* [GetNetworkStaticRoutes](docs/mxstaticroutes/README.md#getnetworkstaticroutes) - List the static routes for an MX or teleworker network
* [UpdateNetworkStaticRoute](docs/mxstaticroutes/README.md#updatenetworkstaticroute) - Update a static route for an MX or teleworker network

### [MXWarmSpareSettings](docs/mxwarmsparesettings/README.md)

* [GetNetworkWarmSpareSettings](docs/mxwarmsparesettings/README.md#getnetworkwarmsparesettings) - Return MX warm spare settings
* [SwapNetworkWarmSpare](docs/mxwarmsparesettings/README.md#swapnetworkwarmspare) - Swap MX primary and warm spare appliances
* [UpdateNetworkWarmSpareSettings](docs/mxwarmsparesettings/README.md#updatenetworkwarmsparesettings) - Update MX warm spare settings

### [MalwareSettings](docs/malwaresettings/README.md)

* [GetNetworkSecurityMalwareSettings](docs/malwaresettings/README.md#getnetworksecuritymalwaresettings) - Returns all supported malware settings for an MX network
* [UpdateNetworkSecurityMalwareSettings](docs/malwaresettings/README.md#updatenetworksecuritymalwaresettings) - Set the supported malware settings for an MX network

### [MerakiAuthUsers](docs/merakiauthusers/README.md)

* [GetNetworkMerakiAuthUser](docs/merakiauthusers/README.md#getnetworkmerakiauthuser) - Return the Meraki Auth splash or RADIUS user
* [GetNetworkMerakiAuthUsers](docs/merakiauthusers/README.md#getnetworkmerakiauthusers) - List the splash or RADIUS users configured under Meraki Authentication for a network

### [NamedTagScope](docs/namedtagscope/README.md)

* [CreateNetworkSmTargetGroup](docs/namedtagscope/README.md#createnetworksmtargetgroup) - Add a target group
* [DeleteNetworkSmTargetGroup](docs/namedtagscope/README.md#deletenetworksmtargetgroup) - Delete a target group from a network
* [GetNetworkSmTargetGroup](docs/namedtagscope/README.md#getnetworksmtargetgroup) - Return a target group
* [GetNetworkSmTargetGroups](docs/namedtagscope/README.md#getnetworksmtargetgroups) - List the target groups in this network
* [UpdateNetworkSmTargetGroup](docs/namedtagscope/README.md#updatenetworksmtargetgroup) - Update a target group

### [Networks](docs/networks/README.md)

* [BindNetwork](docs/networks/README.md#bindnetwork) - Bind a network to a template.
* [CombineOrganizationNetworks](docs/networks/README.md#combineorganizationnetworks) - Combine multiple networks into a single network
* [CreateOrganizationNetwork](docs/networks/README.md#createorganizationnetwork) - Create a network
* [DeleteNetwork](docs/networks/README.md#deletenetwork) - Delete a network
* [GetNetwork](docs/networks/README.md#getnetwork) - Return a network
* [GetNetworkAirMarshal](docs/networks/README.md#getnetworkairmarshal) - List Air Marshal scan results from a network
* [GetNetworkSiteToSiteVpn](docs/networks/README.md#getnetworksitetositevpn) - Return the site-to-site VPN settings of a network
* [GetNetworkTraffic](docs/networks/README.md#getnetworktraffic) - Return the traffic analysis data for this network
* [GetOrganizationNetworks](docs/networks/README.md#getorganizationnetworks) - List the networks in an organization
* [SplitNetwork](docs/networks/README.md#splitnetwork) - Split a combined network into individual networks for each type of device
* [UnbindNetwork](docs/networks/README.md#unbindnetwork) - Unbind a network from a template.
* [UpdateNetwork](docs/networks/README.md#updatenetwork) - Update a network
* [UpdateNetworkSiteToSiteVpn](docs/networks/README.md#updatenetworksitetositevpn) - Update the site-to-site VPN settings of a network

### [OpenAPISpec](docs/openapispec/README.md)

* [GetOrganizationOpenapiSpec](docs/openapispec/README.md#getorganizationopenapispec) - Return the OpenAPI 2.0 Specification of the organization's API documentation in JSON

### [Organizations](docs/organizations/README.md)

* [ClaimIntoOrganization](docs/organizations/README.md#claimintoorganization) - Claim a list of devices, licenses, and/or orders into an organization
* [CloneOrganization](docs/organizations/README.md#cloneorganization) - Create a new organization by cloning the addressed organization
* [GetOrganization](docs/organizations/README.md#getorganization) - Return an organization
* [GetOrganizationDeviceStatuses](docs/organizations/README.md#getorganizationdevicestatuses) - List the status of every Meraki device in the organization
* [GetOrganizationInventory](docs/organizations/README.md#getorganizationinventory) - Return the inventory for an organization
* [GetOrganizationThirdPartyVPNPeers](docs/organizations/README.md#getorganizationthirdpartyvpnpeers) - Return the third party VPN peers for an organization
* [GetOrganizationUplinksLossAndLatency](docs/organizations/README.md#getorganizationuplinkslossandlatency) - Return the uplink loss and latency for every MX in the organization from at latest 2 minutes ago
* [GetOrganizations](docs/organizations/README.md#getorganizations) - List the organizations that the user has privileges on
* [UpdateOrganizationThirdPartyVPNPeers](docs/organizations/README.md#updateorganizationthirdpartyvpnpeers) - Update the third party VPN peers for an organization

### [Pii](docs/pii/README.md)

* [CreateNetworkPiiRequest](docs/pii/README.md#createnetworkpiirequest) - Submit a new delete or restrict processing PII request
* [DeleteNetworkPiiRequest](docs/pii/README.md#deletenetworkpiirequest) - Delete a restrict processing PII request
* [GetNetworkPiiPiiKeys](docs/pii/README.md#getnetworkpiipiikeys) - List the keys required to access Personally Identifiable Information (PII) for a given identifier
* [GetNetworkPiiRequest](docs/pii/README.md#getnetworkpiirequest) - Return a PII request
* [GetNetworkPiiRequests](docs/pii/README.md#getnetworkpiirequests) - List the PII requests for this network or organization
* [GetNetworkPiiSmDevicesForKey](docs/pii/README.md#getnetworkpiismdevicesforkey) - Given a piece of Personally Identifiable Information (PII), return the Systems Manager device ID(s) associated with that identifier
* [GetNetworkPiiSmOwnersForKey](docs/pii/README.md#getnetworkpiismownersforkey) - Given a piece of Personally Identifiable Information (PII), return the Systems Manager owner ID(s) associated with that identifier

### [RadioSettings](docs/radiosettings/README.md)

* [CreateNetworkWirelessRfProfile](docs/radiosettings/README.md#createnetworkwirelessrfprofile) - Creates new RF profile for this network
* [DeleteNetworkWirelessRfProfile](docs/radiosettings/README.md#deletenetworkwirelessrfprofile) - Delete a RF Profile
* [GetNetworkWirelessRfProfile](docs/radiosettings/README.md#getnetworkwirelessrfprofile) - Return a RF profile
* [GetNetworkWirelessRfProfiles](docs/radiosettings/README.md#getnetworkwirelessrfprofiles) - List the non-basic RF profiles for this network
* [UpdateNetworkWirelessRfProfile](docs/radiosettings/README.md#updatenetworkwirelessrfprofile) - Updates specified RF profile for this network

### [SAMLRoles](docs/samlroles/README.md)

* [CreateOrganizationSamlRole](docs/samlroles/README.md#createorganizationsamlrole) - Create a SAML role
* [GetOrganizationSamlRole](docs/samlroles/README.md#getorganizationsamlrole) - Return a SAML role
* [GetOrganizationSamlRoles](docs/samlroles/README.md#getorganizationsamlroles) - List the SAML roles for this organization
* [UpdateOrganizationSamlRole](docs/samlroles/README.md#updateorganizationsamlrole) - Update a SAML role

### [Sm](docs/sm/README.md)

* [CreateNetworkSmBypassActivationLockAttempt](docs/sm/README.md#createnetworksmbypassactivationlockattempt) - Bypass activation lock attempt
* [GetNetworkSmBypassActivationLockAttempt](docs/sm/README.md#getnetworksmbypassactivationlockattempt) - Bypass activation lock attempt status
* [GetNetworkSmCellularUsageHistory](docs/sm/README.md#getnetworksmcellularusagehistory) - Return the client's daily cellular data usage history
* [GetNetworkSmCerts](docs/sm/README.md#getnetworksmcerts) - List the certs on a device
* [GetNetworkSmConnectivity](docs/sm/README.md#getnetworksmconnectivity) - Returns historical connectivity data (whether a device is regularly checking in to Dashboard).
* [GetNetworkSmDesktopLogs](docs/sm/README.md#getnetworksmdesktoplogs) - Return historical records of various Systems Manager network connection details for desktop devices.
* [GetNetworkSmDeviceCommandLogs](docs/sm/README.md#getnetworksmdevicecommandlogs) - Return historical records of commands sent to Systems Manager devices
* [GetNetworkSmDeviceProfiles](docs/sm/README.md#getnetworksmdeviceprofiles) - Get the profiles associated with a device
* [GetNetworkSmDevices](docs/sm/README.md#getnetworksmdevices) - List the devices enrolled in an SM network with various specified fields and filters
* [GetNetworkSmNetworkAdapters](docs/sm/README.md#getnetworksmnetworkadapters) - List the network adapters of a device
* [GetNetworkSmPerformanceHistory](docs/sm/README.md#getnetworksmperformancehistory) - Return historical records of various Systems Manager client metrics for desktop devices.
* [GetNetworkSmProfiles](docs/sm/README.md#getnetworksmprofiles) - List all the profiles in the network
* [GetNetworkSmRestrictions](docs/sm/README.md#getnetworksmrestrictions) - List the restrictions on a device
* [GetNetworkSmSecurityCenters](docs/sm/README.md#getnetworksmsecuritycenters) - List the security centers on a device
* [GetNetworkSmSoftwares](docs/sm/README.md#getnetworksmsoftwares) - Get a list of softwares associated with a device
* [GetNetworkSmUserDeviceProfiles](docs/sm/README.md#getnetworksmuserdeviceprofiles) - Get the profiles associated with a user
* [GetNetworkSmUserSoftwares](docs/sm/README.md#getnetworksmusersoftwares) - Get a list of softwares associated with a user
* [GetNetworkSmUsers](docs/sm/README.md#getnetworksmusers) - List the owners in an SM network with various specified fields and filters
* [GetNetworkSmWlanLists](docs/sm/README.md#getnetworksmwlanlists) - List the saved SSID names on a device
* [LockNetworkSmDevices](docs/sm/README.md#locknetworksmdevices) - Lock a set of devices
* [RefreshNetworkSmDeviceDetails](docs/sm/README.md#refreshnetworksmdevicedetails) - Refresh the details of a device
* [UnenrollNetworkSmDevice](docs/sm/README.md#unenrollnetworksmdevice) - Unenroll a device
* [UpdateNetworkSmDeviceFields](docs/sm/README.md#updatenetworksmdevicefields) - Modify the fields of a device
* [UpdateNetworkSmDevicesTags](docs/sm/README.md#updatenetworksmdevicestags) - Add, delete, or update the tags of a set of devices
* [WipeNetworkSmDevice](docs/sm/README.md#wipenetworksmdevice) - Wipe a device

### [SNMPSettings](docs/snmpsettings/README.md)

* [GetNetworkSnmpSettings](docs/snmpsettings/README.md#getnetworksnmpsettings) - Return the SNMP settings for a network
* [GetOrganizationSnmp](docs/snmpsettings/README.md#getorganizationsnmp) - Return the SNMP settings for an organization

### [SSIDs](docs/ssids/README.md)

* [GetNetworkDeviceWirelessStatus](docs/ssids/README.md#getnetworkdevicewirelessstatus) - Return the SSID statuses of an access point
* [GetNetworkSsid](docs/ssids/README.md#getnetworkssid) - Return a single SSID
* [GetNetworkSsids](docs/ssids/README.md#getnetworkssids) - List the SSIDs in a network
* [UpdateNetworkSsid](docs/ssids/README.md#updatenetworkssid) - Update the attributes of an SSID

### [SecurityEvents](docs/securityevents/README.md)

* [GetNetworkSecurityEvents](docs/securityevents/README.md#getnetworksecurityevents) - List the security events (intrusion detection only) for a network
* [GetOrganizationSecurityEvents](docs/securityevents/README.md#getorganizationsecurityevents) - List the security events (intrusion detection only) for an organization

### [SplashLoginAttempts](docs/splashloginattempts/README.md)

* [GetNetworkSplashLoginAttempts](docs/splashloginattempts/README.md#getnetworksplashloginattempts) - List the splash login attempts for a network

### [SplashSettings](docs/splashsettings/README.md)

* [GetNetworkSsidSplashSettings](docs/splashsettings/README.md#getnetworkssidsplashsettings) - Display the splash page settings for the given SSID
* [UpdateNetworkSsidSplashSettings](docs/splashsettings/README.md#updatenetworkssidsplashsettings) - Modify the splash page settings for the given SSID

### [SwitchAccessPolicies](docs/switchaccesspolicies/README.md)

* [GetNetworkAccessPolicies](docs/switchaccesspolicies/README.md#getnetworkaccesspolicies) - List the access policies for this network

### [SwitchPortSchedules](docs/switchportschedules/README.md)

* [CreateNetworkSwitchPortSchedule](docs/switchportschedules/README.md#createnetworkswitchportschedule) - Add a switch port schedule
* [DeleteNetworkSwitchPortSchedule](docs/switchportschedules/README.md#deletenetworkswitchportschedule) - Delete a switch port schedule
* [GetNetworkSwitchPortSchedules](docs/switchportschedules/README.md#getnetworkswitchportschedules) - List switch port schedules
* [UpdateNetworkSwitchPortSchedule](docs/switchportschedules/README.md#updatenetworkswitchportschedule) - Update a switch port schedule

### [SwitchPorts](docs/switchports/README.md)

* [GetDeviceSwitchPortStatuses](docs/switchports/README.md#getdeviceswitchportstatuses) - Return the status for all the ports of a switch
* [GetDeviceSwitchPortStatusesPackets](docs/switchports/README.md#getdeviceswitchportstatusespackets) - Return the packet counters for all the ports of a switch

### [SwitchProfiles](docs/switchprofiles/README.md)

* [GetOrganizationConfigTemplateSwitchProfiles](docs/switchprofiles/README.md#getorganizationconfigtemplateswitchprofiles) - List the switch profiles for your switch template configuration

### [SwitchSettings](docs/switchsettings/README.md)

* [CreateNetworkSwitchSettingsQosRule](docs/switchsettings/README.md#createnetworkswitchsettingsqosrule) - Add a quality of service rule
* [DeleteNetworkSwitchSettingsQosRule](docs/switchsettings/README.md#deletenetworkswitchsettingsqosrule) - Delete a quality of service rule
* [GetNetworkSwitchSettings](docs/switchsettings/README.md#getnetworkswitchsettings) - Returns the switch network settings
* [GetNetworkSwitchSettingsMtu](docs/switchsettings/README.md#getnetworkswitchsettingsmtu) - Return the MTU configuration
* [GetNetworkSwitchSettingsMulticast](docs/switchsettings/README.md#getnetworkswitchsettingsmulticast) - Return multicast settings for a network
* [GetNetworkSwitchSettingsQosRule](docs/switchsettings/README.md#getnetworkswitchsettingsqosrule) - Return a quality of service rule
* [GetNetworkSwitchSettingsQosRules](docs/switchsettings/README.md#getnetworkswitchsettingsqosrules) - List quality of service rules
* [GetNetworkSwitchSettingsQosRulesOrder](docs/switchsettings/README.md#getnetworkswitchsettingsqosrulesorder) - Return the quality of service rule IDs by order in which they will be processed by the switch
* [GetNetworkSwitchSettingsStormControl](docs/switchsettings/README.md#getnetworkswitchsettingsstormcontrol) - Return the storm control configuration for a switch network
* [UpdateNetworkSwitchSettings](docs/switchsettings/README.md#updatenetworkswitchsettings) - Update switch network settings
* [UpdateNetworkSwitchSettingsMulticast](docs/switchsettings/README.md#updatenetworkswitchsettingsmulticast) - Update multicast settings for a network
* [UpdateNetworkSwitchSettingsQosRule](docs/switchsettings/README.md#updatenetworkswitchsettingsqosrule) - Update a quality of service rule
* [UpdateNetworkSwitchSettingsQosRulesOrder](docs/switchsettings/README.md#updatenetworkswitchsettingsqosrulesorder) - Update the order in which the rules should be processed by the switch
* [UpdateNetworkSwitchSettingsStormControl](docs/switchsettings/README.md#updatenetworkswitchsettingsstormcontrol) - Update the storm control configuration for a switch network

### [SwitchStacks](docs/switchstacks/README.md)

* [GetNetworkSwitchStacks](docs/switchstacks/README.md#getnetworkswitchstacks) - List the switch stacks in a network

### [SyslogServers](docs/syslogservers/README.md)

* [GetNetworkSyslogServers](docs/syslogservers/README.md#getnetworksyslogservers) - List the syslog servers for a network
* [UpdateNetworkSyslogServers](docs/syslogservers/README.md#updatenetworksyslogservers) - Update the syslog servers for a network

### [TrafficShapingUplinkSettings](docs/trafficshapinguplinksettings/README.md)

* [GetNetworkUplinkSettings](docs/trafficshapinguplinksettings/README.md#getnetworkuplinksettings) - Returns the uplink settings for your MX network.
* [UpdateNetworkUplinkSettings](docs/trafficshapinguplinksettings/README.md#updatenetworkuplinksettings) - Updates the uplink settings for your MX network.

### [VLANs](docs/vlans/README.md)

* [CreateNetworkVlan](docs/vlans/README.md#createnetworkvlan) - Add a VLAN
* [DeleteNetworkVlan](docs/vlans/README.md#deletenetworkvlan) - Delete a VLAN from a network
* [GetNetworkVlan](docs/vlans/README.md#getnetworkvlan) - Return a VLAN
* [GetNetworkVlans](docs/vlans/README.md#getnetworkvlans) - List the VLANs for an MX network
* [GetNetworkVlansEnabledState](docs/vlans/README.md#getnetworkvlansenabledstate) - Returns the enabled status of VLANs for the network
* [UpdateNetworkVlan](docs/vlans/README.md#updatenetworkvlan) - Update a VLAN
* [UpdateNetworkVlansEnabledState](docs/vlans/README.md#updatenetworkvlansenabledstate) - Enable/Disable VLANs for the given network

### [WirelessHealth](docs/wirelesshealth/README.md)

* [GetNetworkClientConnectionStats](docs/wirelesshealth/README.md#getnetworkclientconnectionstats) - Aggregated connectivity info for a given client on this network
* [GetNetworkClientLatencyStats](docs/wirelesshealth/README.md#getnetworkclientlatencystats) - Aggregated latency info for a given client on this network
* [GetNetworkClientsConnectionStats](docs/wirelesshealth/README.md#getnetworkclientsconnectionstats) - Aggregated connectivity info for this network, grouped by clients
* [GetNetworkClientsLatencyStats](docs/wirelesshealth/README.md#getnetworkclientslatencystats) - Aggregated latency info for this network, grouped by clients
* [GetNetworkConnectionStats](docs/wirelesshealth/README.md#getnetworkconnectionstats) - Aggregated connectivity info for this network
* [GetNetworkDeviceConnectionStats](docs/wirelesshealth/README.md#getnetworkdeviceconnectionstats) - Aggregated connectivity info for a given AP on this network
* [GetNetworkDeviceLatencyStats](docs/wirelesshealth/README.md#getnetworkdevicelatencystats) - Aggregated latency info for a given AP on this network
* [GetNetworkDevicesConnectionStats](docs/wirelesshealth/README.md#getnetworkdevicesconnectionstats) - Aggregated connectivity info for this network, grouped by node
* [GetNetworkDevicesLatencyStats](docs/wirelesshealth/README.md#getnetworkdeviceslatencystats) - Aggregated latency info for this network, grouped by node
* [GetNetworkFailedConnections](docs/wirelesshealth/README.md#getnetworkfailedconnections) - List of all failed client connection events on this network in a given time range
* [GetNetworkLatencyStats](docs/wirelesshealth/README.md#getnetworklatencystats) - Aggregated latency info for this network

### [WirelessSettings](docs/wirelesssettings/README.md)

* [GetNetworkWirelessSettings](docs/wirelesssettings/README.md#getnetworkwirelesssettings) - Return the wireless settings for a network
* [UpdateNetworkWirelessSettings](docs/wirelesssettings/README.md#updatenetworkwirelesssettings) - Update the wireless settings for a network
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
