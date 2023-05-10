# openapi/openapi

<!-- Start SDK Installation -->
## SDK Installation

### Composer

To install the SDK first add the below to your `composer.json` file:

```json
{
    "repositories": [
        {
            "type": "github",
            "url": "<UNSET>.git"
        }
    ],
    "require": {
        "openapi/openapi": "*"
    }
}
```

Then run the following command:

```bash
composer update
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationApiRequestsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationApiRequestsRequest();
    $request->adminId = 'corrupti';
    $request->endingBefore = 'provident';
    $request->method = 'distinctio';
    $request->organizationId = 'quibusdam';
    $request->path = 'unde';
    $request->perPage = 857946;
    $request->responseCode = 544883;
    $request->sourceIp = 'illum';
    $request->startingAfter = 'vel';
    $request->t0 = 'error';
    $request->t1 = 'deserunt';
    $request->timespan = 3843.82;

    $response = $sdk->apiUsage->getOrganizationApiRequests($request);

    if ($response->getOrganizationApiRequests200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [apiUsage](docs/apiusage/README.md)

* [getOrganizationApiRequests](docs/apiusage/README.md#getorganizationapirequests) - List the API requests made by an organization
* [getOrganizationApiRequestsOverview](docs/apiusage/README.md#getorganizationapirequestsoverview) - Return an aggregated overview of API requests data

### [actionBatches](docs/actionbatches/README.md)

* [createOrganizationActionBatch](docs/actionbatches/README.md#createorganizationactionbatch) - Create an action batch
* [deleteOrganizationActionBatch](docs/actionbatches/README.md#deleteorganizationactionbatch) - Delete an action batch
* [getOrganizationActionBatches](docs/actionbatches/README.md#getorganizationactionbatches) - Return the list of action batches in the organization
* [updateOrganizationActionBatch](docs/actionbatches/README.md#updateorganizationactionbatch) - Update an action batch

### [admins](docs/admins/README.md)

* [createOrganizationAdmin](docs/admins/README.md#createorganizationadmin) - Create a new dashboard administrator
* [deleteOrganizationAdmin](docs/admins/README.md#deleteorganizationadmin) - Revoke all access for a dashboard administrator within this organization
* [getOrganizationAdmins](docs/admins/README.md#getorganizationadmins) - List the dashboard administrators in this organization
* [updateOrganizationAdmin](docs/admins/README.md#updateorganizationadmin) - Update an administrator

### [alertSettings](docs/alertsettings/README.md)

* [getNetworkAlertSettings](docs/alertsettings/README.md#getnetworkalertsettings) - Return the alert configuration for this network
* [updateNetworkAlertSettings](docs/alertsettings/README.md#updatenetworkalertsettings) - Update the alert configuration for this network

### [bluetoothClients](docs/bluetoothclients/README.md)

* [getNetworkBluetoothClient](docs/bluetoothclients/README.md#getnetworkbluetoothclient) - Return a Bluetooth client
* [getNetworkBluetoothClients](docs/bluetoothclients/README.md#getnetworkbluetoothclients) - List the Bluetooth clients seen by APs in this network

### [bluetoothSettings](docs/bluetoothsettings/README.md)

* [getNetworkBluetoothSettings](docs/bluetoothsettings/README.md#getnetworkbluetoothsettings) - Return the Bluetooth settings for a network. <a href="https://documentation.meraki.com/MR/Bluetooth/Bluetooth_Low_Energy_(BLE)">Bluetooth settings</a> must be enabled on the network.
* [updateDeviceWirelessBluetoothSettings](docs/bluetoothsettings/README.md#updatedevicewirelessbluetoothsettings) - Update the bluetooth settings for a wireless device
* [updateNetworkBluetoothSettings](docs/bluetoothsettings/README.md#updatenetworkbluetoothsettings) - Update the Bluetooth settings for a network

### [cameraQualityRetentionProfiles](docs/cameraqualityretentionprofiles/README.md)

* [createNetworkCameraQualityRetentionProfile](docs/cameraqualityretentionprofiles/README.md#createnetworkcameraqualityretentionprofile) - Creates new quality retention profile for this network.
* [deleteNetworkCameraQualityRetentionProfile](docs/cameraqualityretentionprofiles/README.md#deletenetworkcameraqualityretentionprofile) - Delete an existing quality retention profile for this network.
* [getNetworkCameraQualityRetentionProfile](docs/cameraqualityretentionprofiles/README.md#getnetworkcameraqualityretentionprofile) - Retrieve a single quality retention profile
* [getNetworkCameraQualityRetentionProfiles](docs/cameraqualityretentionprofiles/README.md#getnetworkcameraqualityretentionprofiles) - List the quality retention profiles for this network
* [updateNetworkCameraQualityRetentionProfile](docs/cameraqualityretentionprofiles/README.md#updatenetworkcameraqualityretentionprofile) - Update an existing quality retention profile for this network.

### [cameras](docs/cameras/README.md)

* [generateNetworkCameraSnapshot](docs/cameras/README.md#generatenetworkcamerasnapshot) - Generate a snapshot of what the camera sees at the specified time and return a link to that image.
* [getDeviceCameraVideoSettings](docs/cameras/README.md#getdevicecameravideosettings) - Returns video settings for the given camera
* [getNetworkCameraSchedules](docs/cameras/README.md#getnetworkcameraschedules) - Returns a list of all camera recording schedules.
* [getNetworkCameraVideoLink](docs/cameras/README.md#getnetworkcameravideolink) - Returns video link to the specified camera
* [updateDeviceCameraVideoSettings](docs/cameras/README.md#updatedevicecameravideosettings) - Update video settings for the given camera

### [changeLog](docs/changelog/README.md)

* [getOrganizationConfigurationChanges](docs/changelog/README.md#getorganizationconfigurationchanges) - View the Change Log for your organization

### [clients](docs/clients/README.md)

* [getDeviceClients](docs/clients/README.md#getdeviceclients) - List the clients of a device, up to a maximum of a month ago
* [getNetworkClient](docs/clients/README.md#getnetworkclient) - Return the client associated with the given identifier
* [getNetworkClientEvents](docs/clients/README.md#getnetworkclientevents) - Return the events associated with this client
* [getNetworkClientLatencyHistory](docs/clients/README.md#getnetworkclientlatencyhistory) - Return the latency history for a client
* [getNetworkClientPolicy](docs/clients/README.md#getnetworkclientpolicy) - Return the policy assigned to a client on the network
* [getNetworkClientSplashAuthorizationStatus](docs/clients/README.md#getnetworkclientsplashauthorizationstatus) - Return the splash authorization for a client, for each SSID they've associated with through splash
* [getNetworkClientUsageHistory](docs/clients/README.md#getnetworkclientusagehistory) - Return the client's daily usage history
* [getNetworkClients](docs/clients/README.md#getnetworkclients) - List the clients that have used this network in the timespan
* [provisionNetworkClients](docs/clients/README.md#provisionnetworkclients) - Provisions a client with a name and policy
* [updateNetworkClientPolicy](docs/clients/README.md#updatenetworkclientpolicy) - Update the policy assigned to a client on the network
* [updateNetworkClientSplashAuthorizationStatus](docs/clients/README.md#updatenetworkclientsplashauthorizationstatus) - Update a client's splash authorization

### [configTemplates](docs/configtemplates/README.md)

* [deleteOrganizationConfigTemplate](docs/configtemplates/README.md#deleteorganizationconfigtemplate) - Remove a configuration template
* [getOrganizationConfigTemplates](docs/configtemplates/README.md#getorganizationconfigtemplates) - List the configuration templates for this organization

### [contentFilteringCategories](docs/contentfilteringcategories/README.md)

* [getNetworkContentFilteringCategories](docs/contentfilteringcategories/README.md#getnetworkcontentfilteringcategories) - List all available content filtering categories for an MX network

### [contentFilteringRules](docs/contentfilteringrules/README.md)

* [getNetworkContentFiltering](docs/contentfilteringrules/README.md#getnetworkcontentfiltering) - Return the content filtering settings for an MX network
* [updateNetworkContentFiltering](docs/contentfilteringrules/README.md#updatenetworkcontentfiltering) - Update the content filtering settings for an MX network

### [devices](docs/devices/README.md)

* [claimNetworkDevices](docs/devices/README.md#claimnetworkdevices) - Claim devices into a network. (Note: for recently claimed devices, it may take a few minutes for API requests against that device to succeed)
* [cycleDeviceSwitchPorts](docs/devices/README.md#cycledeviceswitchports) - Cycle a set of switch ports
* [getNetworkDevice](docs/devices/README.md#getnetworkdevice) - Return a single device
* [getNetworkDeviceLossAndLatencyHistory](docs/devices/README.md#getnetworkdevicelossandlatencyhistory) - Get the uplink loss percentage and latency in milliseconds for a wired network device.
* [getNetworkDevicePerformance](docs/devices/README.md#getnetworkdeviceperformance) - Return the performance score for a single MX
* [getNetworkDeviceUplink](docs/devices/README.md#getnetworkdeviceuplink) - Return the uplink information for a device.
* [getNetworkDevices](docs/devices/README.md#getnetworkdevices) - List the devices in a network
* [getOrganizationDevices](docs/devices/README.md#getorganizationdevices) - List the devices in an organization
* [rebootNetworkDevice](docs/devices/README.md#rebootnetworkdevice) - Reboot a device
* [removeNetworkDevice](docs/devices/README.md#removenetworkdevice) - Remove a single device
* [updateNetworkDevice](docs/devices/README.md#updatenetworkdevice) - Update the attributes of a device

### [events](docs/events/README.md)

* [getNetworkEvents](docs/events/README.md#getnetworkevents) - List the events for the network
* [getNetworkEventsEventTypes](docs/events/README.md#getnetworkeventseventtypes) - List the event type to human-readable description

### [firewalledServices](docs/firewalledservices/README.md)

* [getNetworkFirewalledService](docs/firewalledservices/README.md#getnetworkfirewalledservice) - Return the accessibility settings of the given service ('ICMP', 'web', or 'SNMP')
* [getNetworkFirewalledServices](docs/firewalledservices/README.md#getnetworkfirewalledservices) - List the appliance services and their accessibility rules

### [floorPlans](docs/floorplans/README.md)

* [createNetworkFloorPlan](docs/floorplans/README.md#createnetworkfloorplan) - Upload a floor plan
* [deleteNetworkFloorPlan](docs/floorplans/README.md#deletenetworkfloorplan) - Destroy a floor plan
* [getNetworkFloorPlan](docs/floorplans/README.md#getnetworkfloorplan) - Find a floor plan by ID
* [getNetworkFloorPlans](docs/floorplans/README.md#getnetworkfloorplans) - List the floor plans that belong to your network
* [updateNetworkFloorPlan](docs/floorplans/README.md#updatenetworkfloorplan) - Update a floor plan's geolocation and other meta data

### [intrusionSettings](docs/intrusionsettings/README.md)

* [getNetworkSecurityIntrusionSettings](docs/intrusionsettings/README.md#getnetworksecurityintrusionsettings) - Returns all supported intrusion settings for an MX network
* [getOrganizationSecurityIntrusionSettings](docs/intrusionsettings/README.md#getorganizationsecurityintrusionsettings) - Returns all supported intrusion settings for an organization
* [updateNetworkSecurityIntrusionSettings](docs/intrusionsettings/README.md#updatenetworksecurityintrusionsettings) - Set the supported intrusion settings for an MX network
* [updateOrganizationSecurityIntrusionSettings](docs/intrusionsettings/README.md#updateorganizationsecurityintrusionsettings) - Sets supported intrusion settings for an organization

### [licenses](docs/licenses/README.md)

* [assignOrganizationLicensesSeats](docs/licenses/README.md#assignorganizationlicensesseats) - Assign SM seats to a network
* [getOrganizationLicense](docs/licenses/README.md#getorganizationlicense) - Display a license
* [getOrganizationLicenseState](docs/licenses/README.md#getorganizationlicensestate) - Return an overview of the license state for an organization
* [getOrganizationLicenses](docs/licenses/README.md#getorganizationlicenses) - List the licenses for an organization
* [moveOrganizationLicensesSeats](docs/licenses/README.md#moveorganizationlicensesseats) - Move SM seats to another organization
* [renewOrganizationLicensesSeats](docs/licenses/README.md#reneworganizationlicensesseats) - Renew SM seats of a license

### [linkAggregations](docs/linkaggregations/README.md)

* [createNetworkSwitchLinkAggregation](docs/linkaggregations/README.md#createnetworkswitchlinkaggregation) - Create a link aggregation group
* [deleteNetworkSwitchLinkAggregation](docs/linkaggregations/README.md#deletenetworkswitchlinkaggregation) - Split a link aggregation group into separate ports
* [getNetworkSwitchLinkAggregations](docs/linkaggregations/README.md#getnetworkswitchlinkaggregations) - List link aggregation groups
* [updateNetworkSwitchLinkAggregation](docs/linkaggregations/README.md#updatenetworkswitchlinkaggregation) - Update a link aggregation group

### [mgLANSettings](docs/mglansettings/README.md)

* [getDeviceCellularGatewaySettings](docs/mglansettings/README.md#getdevicecellulargatewaysettings) - Show the LAN Settings of a MG
* [updateDeviceCellularGatewaySettings](docs/mglansettings/README.md#updatedevicecellulargatewaysettings) - Update the LAN Settings for a single MG.

### [mgPortForwardingRules](docs/mgportforwardingrules/README.md)

* [getDeviceCellularGatewaySettingsPortForwardingRules](docs/mgportforwardingrules/README.md#getdevicecellulargatewaysettingsportforwardingrules) - Returns the port forwarding rules for a single MG.
* [updateDeviceCellularGatewaySettingsPortForwardingRules](docs/mgportforwardingrules/README.md#updatedevicecellulargatewaysettingsportforwardingrules) - Updates the port forwarding rules for a single MG.

### [mrL3Firewall](docs/mrl3firewall/README.md)

* [getNetworkSsidL3FirewallRules](docs/mrl3firewall/README.md#getnetworkssidl3firewallrules) - Return the L3 firewall rules for an SSID on an MR network
* [updateNetworkSsidL3FirewallRules](docs/mrl3firewall/README.md#updatenetworkssidl3firewallrules) - Update the L3 firewall rules of an SSID on an MR network

### [mvSense](docs/mvsense/README.md)

* [getDeviceCameraAnalyticsLive](docs/mvsense/README.md#getdevicecameraanalyticslive) - Returns live state from camera of analytics zones
* [getDeviceCameraAnalyticsOverview](docs/mvsense/README.md#getdevicecameraanalyticsoverview) - Returns an overview of aggregate analytics data for a timespan
* [getDeviceCameraAnalyticsRecent](docs/mvsense/README.md#getdevicecameraanalyticsrecent) - Returns most recent record for analytics zones
* [getDeviceCameraAnalyticsZoneHistory](docs/mvsense/README.md#getdevicecameraanalyticszonehistory) - Return historical records for analytic zones
* [getDeviceCameraAnalyticsZones](docs/mvsense/README.md#getdevicecameraanalyticszones) - Returns all configured analytic zones for this camera

### [mx11NATRules](docs/mx11natrules/README.md)

* [getNetworkOneToOneNatRules](docs/mx11natrules/README.md#getnetworkonetoonenatrules) - Return the 1:1 NAT mapping rules for an MX network
* [updateNetworkOneToOneNatRules](docs/mx11natrules/README.md#updatenetworkonetoonenatrules) - Set the 1:1 NAT mapping rules for an MX network

### [mx1ManyNATRules](docs/mx1manynatrules/README.md)

* [getNetworkOneToManyNatRules](docs/mx1manynatrules/README.md#getnetworkonetomanynatrules) - Return the 1:Many NAT mapping rules for an MX network
* [updateNetworkOneToManyNatRules](docs/mx1manynatrules/README.md#updatenetworkonetomanynatrules) - Set the 1:Many NAT mapping rules for an MX network

### [mxL3InboundFirewall](docs/mxl3inboundfirewall/README.md)

* [getNetworkApplianceFirewallInboundFirewallRules](docs/mxl3inboundfirewall/README.md#getnetworkappliancefirewallinboundfirewallrules) - Return the inbound firewall rules for an MX network
* [updateNetworkApplianceFirewallInboundFirewallRules](docs/mxl3inboundfirewall/README.md#updatenetworkappliancefirewallinboundfirewallrules) - Update the inbound firewall rules of an MX network

### [mxL3OutboundFirewall](docs/mxl3outboundfirewall/README.md)

* [getNetworkL3FirewallRules](docs/mxl3outboundfirewall/README.md#getnetworkl3firewallrules) - Return the L3 firewall rules for an MX network
* [updateNetworkL3FirewallRules](docs/mxl3outboundfirewall/README.md#updatenetworkl3firewallrules) - Update the L3 firewall rules of an MX network

### [mxL7ApplicationCategories](docs/mxl7applicationcategories/README.md)

* [getNetworkL7FirewallRulesApplicationCategories](docs/mxl7applicationcategories/README.md#getnetworkl7firewallrulesapplicationcategories) - Return the L7 firewall application categories and their associated applications for an MX network

### [mxL7Firewall](docs/mxl7firewall/README.md)

* [getNetworkL7FirewallRules](docs/mxl7firewall/README.md#getnetworkl7firewallrules) - List the MX L7 firewall rules for an MX network
* [updateNetworkL7FirewallRules](docs/mxl7firewall/README.md#updatenetworkl7firewallrules) - Update the MX L7 firewall rules for an MX network

### [mxVLANPorts](docs/mxvlanports/README.md)

* [getNetworkAppliancePort](docs/mxvlanports/README.md#getnetworkapplianceport) - Return per-port VLAN settings for a single MX port.
* [getNetworkAppliancePorts](docs/mxvlanports/README.md#getnetworkapplianceports) - List per-port VLAN settings for all ports of a MX.
* [updateNetworkAppliancePort](docs/mxvlanports/README.md#updatenetworkapplianceport) - Update the per-port VLAN settings for a single MX port.

### [mxVPNFirewall](docs/mxvpnfirewall/README.md)

* [getOrganizationVpnFirewallRules](docs/mxvpnfirewall/README.md#getorganizationvpnfirewallrules) - Return the firewall rules for an organization's site-to-site VPN
* [updateOrganizationVpnFirewallRules](docs/mxvpnfirewall/README.md#updateorganizationvpnfirewallrules) - Update the firewall rules of an organization's site-to-site VPN

### [mxCellularFirewall](docs/mxcellularfirewall/README.md)

* [getNetworkCellularFirewallRules](docs/mxcellularfirewall/README.md#getnetworkcellularfirewallrules) - Return the cellular firewall rules for an MX network
* [updateNetworkCellularFirewallRules](docs/mxcellularfirewall/README.md#updatenetworkcellularfirewallrules) - Update the cellular firewall rules of an MX network

### [mxPortForwardingRules](docs/mxportforwardingrules/README.md)

* [getNetworkPortForwardingRules](docs/mxportforwardingrules/README.md#getnetworkportforwardingrules) - Return the port forwarding rules for an MX network
* [updateNetworkPortForwardingRules](docs/mxportforwardingrules/README.md#updatenetworkportforwardingrules) - Update the port forwarding rules for an MX network

### [mxStaticRoutes](docs/mxstaticroutes/README.md)

* [createNetworkStaticRoute](docs/mxstaticroutes/README.md#createnetworkstaticroute) - Add a static route for an MX or teleworker network
* [deleteNetworkStaticRoute](docs/mxstaticroutes/README.md#deletenetworkstaticroute) - Delete a static route from an MX or teleworker network
* [getNetworkStaticRoute](docs/mxstaticroutes/README.md#getnetworkstaticroute) - Return a static route for an MX or teleworker network
* [getNetworkStaticRoutes](docs/mxstaticroutes/README.md#getnetworkstaticroutes) - List the static routes for an MX or teleworker network
* [updateNetworkStaticRoute](docs/mxstaticroutes/README.md#updatenetworkstaticroute) - Update a static route for an MX or teleworker network

### [mxWarmSpareSettings](docs/mxwarmsparesettings/README.md)

* [getNetworkWarmSpareSettings](docs/mxwarmsparesettings/README.md#getnetworkwarmsparesettings) - Return MX warm spare settings
* [swapNetworkWarmSpare](docs/mxwarmsparesettings/README.md#swapnetworkwarmspare) - Swap MX primary and warm spare appliances
* [updateNetworkWarmSpareSettings](docs/mxwarmsparesettings/README.md#updatenetworkwarmsparesettings) - Update MX warm spare settings

### [malwareSettings](docs/malwaresettings/README.md)

* [getNetworkSecurityMalwareSettings](docs/malwaresettings/README.md#getnetworksecuritymalwaresettings) - Returns all supported malware settings for an MX network
* [updateNetworkSecurityMalwareSettings](docs/malwaresettings/README.md#updatenetworksecuritymalwaresettings) - Set the supported malware settings for an MX network

### [merakiAuthUsers](docs/merakiauthusers/README.md)

* [getNetworkMerakiAuthUser](docs/merakiauthusers/README.md#getnetworkmerakiauthuser) - Return the Meraki Auth splash or RADIUS user
* [getNetworkMerakiAuthUsers](docs/merakiauthusers/README.md#getnetworkmerakiauthusers) - List the splash or RADIUS users configured under Meraki Authentication for a network

### [namedTagScope](docs/namedtagscope/README.md)

* [createNetworkSmTargetGroup](docs/namedtagscope/README.md#createnetworksmtargetgroup) - Add a target group
* [deleteNetworkSmTargetGroup](docs/namedtagscope/README.md#deletenetworksmtargetgroup) - Delete a target group from a network
* [getNetworkSmTargetGroup](docs/namedtagscope/README.md#getnetworksmtargetgroup) - Return a target group
* [getNetworkSmTargetGroups](docs/namedtagscope/README.md#getnetworksmtargetgroups) - List the target groups in this network
* [updateNetworkSmTargetGroup](docs/namedtagscope/README.md#updatenetworksmtargetgroup) - Update a target group

### [networks](docs/networks/README.md)

* [bindNetwork](docs/networks/README.md#bindnetwork) - Bind a network to a template.
* [combineOrganizationNetworks](docs/networks/README.md#combineorganizationnetworks) - Combine multiple networks into a single network
* [createOrganizationNetwork](docs/networks/README.md#createorganizationnetwork) - Create a network
* [deleteNetwork](docs/networks/README.md#deletenetwork) - Delete a network
* [getNetwork](docs/networks/README.md#getnetwork) - Return a network
* [getNetworkAirMarshal](docs/networks/README.md#getnetworkairmarshal) - List Air Marshal scan results from a network
* [getNetworkSiteToSiteVpn](docs/networks/README.md#getnetworksitetositevpn) - Return the site-to-site VPN settings of a network
* [getNetworkTraffic](docs/networks/README.md#getnetworktraffic) - Return the traffic analysis data for this network
* [getOrganizationNetworks](docs/networks/README.md#getorganizationnetworks) - List the networks in an organization
* [splitNetwork](docs/networks/README.md#splitnetwork) - Split a combined network into individual networks for each type of device
* [unbindNetwork](docs/networks/README.md#unbindnetwork) - Unbind a network from a template.
* [updateNetwork](docs/networks/README.md#updatenetwork) - Update a network
* [updateNetworkSiteToSiteVpn](docs/networks/README.md#updatenetworksitetositevpn) - Update the site-to-site VPN settings of a network

### [openAPISpec](docs/openapispec/README.md)

* [getOrganizationOpenapiSpec](docs/openapispec/README.md#getorganizationopenapispec) - Return the OpenAPI 2.0 Specification of the organization's API documentation in JSON

### [organizations](docs/organizations/README.md)

* [claimIntoOrganization](docs/organizations/README.md#claimintoorganization) - Claim a list of devices, licenses, and/or orders into an organization
* [cloneOrganization](docs/organizations/README.md#cloneorganization) - Create a new organization by cloning the addressed organization
* [getOrganization](docs/organizations/README.md#getorganization) - Return an organization
* [getOrganizationDeviceStatuses](docs/organizations/README.md#getorganizationdevicestatuses) - List the status of every Meraki device in the organization
* [getOrganizationInventory](docs/organizations/README.md#getorganizationinventory) - Return the inventory for an organization
* [getOrganizationThirdPartyVPNPeers](docs/organizations/README.md#getorganizationthirdpartyvpnpeers) - Return the third party VPN peers for an organization
* [getOrganizationUplinksLossAndLatency](docs/organizations/README.md#getorganizationuplinkslossandlatency) - Return the uplink loss and latency for every MX in the organization from at latest 2 minutes ago
* [getOrganizations](docs/organizations/README.md#getorganizations) - List the organizations that the user has privileges on
* [updateOrganizationThirdPartyVPNPeers](docs/organizations/README.md#updateorganizationthirdpartyvpnpeers) - Update the third party VPN peers for an organization

### [pii](docs/pii/README.md)

* [createNetworkPiiRequest](docs/pii/README.md#createnetworkpiirequest) - Submit a new delete or restrict processing PII request
* [deleteNetworkPiiRequest](docs/pii/README.md#deletenetworkpiirequest) - Delete a restrict processing PII request
* [getNetworkPiiPiiKeys](docs/pii/README.md#getnetworkpiipiikeys) - List the keys required to access Personally Identifiable Information (PII) for a given identifier
* [getNetworkPiiRequest](docs/pii/README.md#getnetworkpiirequest) - Return a PII request
* [getNetworkPiiRequests](docs/pii/README.md#getnetworkpiirequests) - List the PII requests for this network or organization
* [getNetworkPiiSmDevicesForKey](docs/pii/README.md#getnetworkpiismdevicesforkey) - Given a piece of Personally Identifiable Information (PII), return the Systems Manager device ID(s) associated with that identifier
* [getNetworkPiiSmOwnersForKey](docs/pii/README.md#getnetworkpiismownersforkey) - Given a piece of Personally Identifiable Information (PII), return the Systems Manager owner ID(s) associated with that identifier

### [radioSettings](docs/radiosettings/README.md)

* [createNetworkWirelessRfProfile](docs/radiosettings/README.md#createnetworkwirelessrfprofile) - Creates new RF profile for this network
* [deleteNetworkWirelessRfProfile](docs/radiosettings/README.md#deletenetworkwirelessrfprofile) - Delete a RF Profile
* [getNetworkWirelessRfProfile](docs/radiosettings/README.md#getnetworkwirelessrfprofile) - Return a RF profile
* [getNetworkWirelessRfProfiles](docs/radiosettings/README.md#getnetworkwirelessrfprofiles) - List the non-basic RF profiles for this network
* [updateNetworkWirelessRfProfile](docs/radiosettings/README.md#updatenetworkwirelessrfprofile) - Updates specified RF profile for this network

### [samlRoles](docs/samlroles/README.md)

* [createOrganizationSamlRole](docs/samlroles/README.md#createorganizationsamlrole) - Create a SAML role
* [getOrganizationSamlRole](docs/samlroles/README.md#getorganizationsamlrole) - Return a SAML role
* [getOrganizationSamlRoles](docs/samlroles/README.md#getorganizationsamlroles) - List the SAML roles for this organization
* [updateOrganizationSamlRole](docs/samlroles/README.md#updateorganizationsamlrole) - Update a SAML role

### [sm](docs/sm/README.md)

* [createNetworkSmBypassActivationLockAttempt](docs/sm/README.md#createnetworksmbypassactivationlockattempt) - Bypass activation lock attempt
* [getNetworkSmBypassActivationLockAttempt](docs/sm/README.md#getnetworksmbypassactivationlockattempt) - Bypass activation lock attempt status
* [getNetworkSmCellularUsageHistory](docs/sm/README.md#getnetworksmcellularusagehistory) - Return the client's daily cellular data usage history
* [getNetworkSmCerts](docs/sm/README.md#getnetworksmcerts) - List the certs on a device
* [getNetworkSmConnectivity](docs/sm/README.md#getnetworksmconnectivity) - Returns historical connectivity data (whether a device is regularly checking in to Dashboard).
* [getNetworkSmDesktopLogs](docs/sm/README.md#getnetworksmdesktoplogs) - Return historical records of various Systems Manager network connection details for desktop devices.
* [getNetworkSmDeviceCommandLogs](docs/sm/README.md#getnetworksmdevicecommandlogs) - Return historical records of commands sent to Systems Manager devices
* [getNetworkSmDeviceProfiles](docs/sm/README.md#getnetworksmdeviceprofiles) - Get the profiles associated with a device
* [getNetworkSmDevices](docs/sm/README.md#getnetworksmdevices) - List the devices enrolled in an SM network with various specified fields and filters
* [getNetworkSmNetworkAdapters](docs/sm/README.md#getnetworksmnetworkadapters) - List the network adapters of a device
* [getNetworkSmPerformanceHistory](docs/sm/README.md#getnetworksmperformancehistory) - Return historical records of various Systems Manager client metrics for desktop devices.
* [getNetworkSmProfiles](docs/sm/README.md#getnetworksmprofiles) - List all the profiles in the network
* [getNetworkSmRestrictions](docs/sm/README.md#getnetworksmrestrictions) - List the restrictions on a device
* [getNetworkSmSecurityCenters](docs/sm/README.md#getnetworksmsecuritycenters) - List the security centers on a device
* [getNetworkSmSoftwares](docs/sm/README.md#getnetworksmsoftwares) - Get a list of softwares associated with a device
* [getNetworkSmUserDeviceProfiles](docs/sm/README.md#getnetworksmuserdeviceprofiles) - Get the profiles associated with a user
* [getNetworkSmUserSoftwares](docs/sm/README.md#getnetworksmusersoftwares) - Get a list of softwares associated with a user
* [getNetworkSmUsers](docs/sm/README.md#getnetworksmusers) - List the owners in an SM network with various specified fields and filters
* [getNetworkSmWlanLists](docs/sm/README.md#getnetworksmwlanlists) - List the saved SSID names on a device
* [lockNetworkSmDevices](docs/sm/README.md#locknetworksmdevices) - Lock a set of devices
* [refreshNetworkSmDeviceDetails](docs/sm/README.md#refreshnetworksmdevicedetails) - Refresh the details of a device
* [unenrollNetworkSmDevice](docs/sm/README.md#unenrollnetworksmdevice) - Unenroll a device
* [updateNetworkSmDeviceFields](docs/sm/README.md#updatenetworksmdevicefields) - Modify the fields of a device
* [updateNetworkSmDevicesTags](docs/sm/README.md#updatenetworksmdevicestags) - Add, delete, or update the tags of a set of devices
* [wipeNetworkSmDevice](docs/sm/README.md#wipenetworksmdevice) - Wipe a device

### [snmpSettings](docs/snmpsettings/README.md)

* [getNetworkSnmpSettings](docs/snmpsettings/README.md#getnetworksnmpsettings) - Return the SNMP settings for a network
* [getOrganizationSnmp](docs/snmpsettings/README.md#getorganizationsnmp) - Return the SNMP settings for an organization

### [ssiDs](docs/ssids/README.md)

* [getNetworkDeviceWirelessStatus](docs/ssids/README.md#getnetworkdevicewirelessstatus) - Return the SSID statuses of an access point
* [getNetworkSsid](docs/ssids/README.md#getnetworkssid) - Return a single SSID
* [getNetworkSsids](docs/ssids/README.md#getnetworkssids) - List the SSIDs in a network
* [updateNetworkSsid](docs/ssids/README.md#updatenetworkssid) - Update the attributes of an SSID

### [securityEvents](docs/securityevents/README.md)

* [getNetworkSecurityEvents](docs/securityevents/README.md#getnetworksecurityevents) - List the security events (intrusion detection only) for a network
* [getOrganizationSecurityEvents](docs/securityevents/README.md#getorganizationsecurityevents) - List the security events (intrusion detection only) for an organization

### [splashLoginAttempts](docs/splashloginattempts/README.md)

* [getNetworkSplashLoginAttempts](docs/splashloginattempts/README.md#getnetworksplashloginattempts) - List the splash login attempts for a network

### [splashSettings](docs/splashsettings/README.md)

* [getNetworkSsidSplashSettings](docs/splashsettings/README.md#getnetworkssidsplashsettings) - Display the splash page settings for the given SSID
* [updateNetworkSsidSplashSettings](docs/splashsettings/README.md#updatenetworkssidsplashsettings) - Modify the splash page settings for the given SSID

### [switchAccessPolicies](docs/switchaccesspolicies/README.md)

* [getNetworkAccessPolicies](docs/switchaccesspolicies/README.md#getnetworkaccesspolicies) - List the access policies for this network

### [switchPortSchedules](docs/switchportschedules/README.md)

* [createNetworkSwitchPortSchedule](docs/switchportschedules/README.md#createnetworkswitchportschedule) - Add a switch port schedule
* [deleteNetworkSwitchPortSchedule](docs/switchportschedules/README.md#deletenetworkswitchportschedule) - Delete a switch port schedule
* [getNetworkSwitchPortSchedules](docs/switchportschedules/README.md#getnetworkswitchportschedules) - List switch port schedules
* [updateNetworkSwitchPortSchedule](docs/switchportschedules/README.md#updatenetworkswitchportschedule) - Update a switch port schedule

### [switchPorts](docs/switchports/README.md)

* [getDeviceSwitchPortStatuses](docs/switchports/README.md#getdeviceswitchportstatuses) - Return the status for all the ports of a switch
* [getDeviceSwitchPortStatusesPackets](docs/switchports/README.md#getdeviceswitchportstatusespackets) - Return the packet counters for all the ports of a switch

### [switchProfiles](docs/switchprofiles/README.md)

* [getOrganizationConfigTemplateSwitchProfiles](docs/switchprofiles/README.md#getorganizationconfigtemplateswitchprofiles) - List the switch profiles for your switch template configuration

### [switchSettings](docs/switchsettings/README.md)

* [createNetworkSwitchSettingsQosRule](docs/switchsettings/README.md#createnetworkswitchsettingsqosrule) - Add a quality of service rule
* [deleteNetworkSwitchSettingsQosRule](docs/switchsettings/README.md#deletenetworkswitchsettingsqosrule) - Delete a quality of service rule
* [getNetworkSwitchSettings](docs/switchsettings/README.md#getnetworkswitchsettings) - Returns the switch network settings
* [getNetworkSwitchSettingsMtu](docs/switchsettings/README.md#getnetworkswitchsettingsmtu) - Return the MTU configuration
* [getNetworkSwitchSettingsMulticast](docs/switchsettings/README.md#getnetworkswitchsettingsmulticast) - Return multicast settings for a network
* [getNetworkSwitchSettingsQosRule](docs/switchsettings/README.md#getnetworkswitchsettingsqosrule) - Return a quality of service rule
* [getNetworkSwitchSettingsQosRules](docs/switchsettings/README.md#getnetworkswitchsettingsqosrules) - List quality of service rules
* [getNetworkSwitchSettingsQosRulesOrder](docs/switchsettings/README.md#getnetworkswitchsettingsqosrulesorder) - Return the quality of service rule IDs by order in which they will be processed by the switch
* [getNetworkSwitchSettingsStormControl](docs/switchsettings/README.md#getnetworkswitchsettingsstormcontrol) - Return the storm control configuration for a switch network
* [updateNetworkSwitchSettings](docs/switchsettings/README.md#updatenetworkswitchsettings) - Update switch network settings
* [updateNetworkSwitchSettingsMulticast](docs/switchsettings/README.md#updatenetworkswitchsettingsmulticast) - Update multicast settings for a network
* [updateNetworkSwitchSettingsQosRule](docs/switchsettings/README.md#updatenetworkswitchsettingsqosrule) - Update a quality of service rule
* [updateNetworkSwitchSettingsQosRulesOrder](docs/switchsettings/README.md#updatenetworkswitchsettingsqosrulesorder) - Update the order in which the rules should be processed by the switch
* [updateNetworkSwitchSettingsStormControl](docs/switchsettings/README.md#updatenetworkswitchsettingsstormcontrol) - Update the storm control configuration for a switch network

### [switchStacks](docs/switchstacks/README.md)

* [getNetworkSwitchStacks](docs/switchstacks/README.md#getnetworkswitchstacks) - List the switch stacks in a network

### [syslogServers](docs/syslogservers/README.md)

* [getNetworkSyslogServers](docs/syslogservers/README.md#getnetworksyslogservers) - List the syslog servers for a network
* [updateNetworkSyslogServers](docs/syslogservers/README.md#updatenetworksyslogservers) - Update the syslog servers for a network

### [trafficShapingUplinkSettings](docs/trafficshapinguplinksettings/README.md)

* [getNetworkUplinkSettings](docs/trafficshapinguplinksettings/README.md#getnetworkuplinksettings) - Returns the uplink settings for your MX network.
* [updateNetworkUplinkSettings](docs/trafficshapinguplinksettings/README.md#updatenetworkuplinksettings) - Updates the uplink settings for your MX network.

### [vlaNs](docs/vlans/README.md)

* [createNetworkVlan](docs/vlans/README.md#createnetworkvlan) - Add a VLAN
* [deleteNetworkVlan](docs/vlans/README.md#deletenetworkvlan) - Delete a VLAN from a network
* [getNetworkVlan](docs/vlans/README.md#getnetworkvlan) - Return a VLAN
* [getNetworkVlans](docs/vlans/README.md#getnetworkvlans) - List the VLANs for an MX network
* [getNetworkVlansEnabledState](docs/vlans/README.md#getnetworkvlansenabledstate) - Returns the enabled status of VLANs for the network
* [updateNetworkVlan](docs/vlans/README.md#updatenetworkvlan) - Update a VLAN
* [updateNetworkVlansEnabledState](docs/vlans/README.md#updatenetworkvlansenabledstate) - Enable/Disable VLANs for the given network

### [wirelessHealth](docs/wirelesshealth/README.md)

* [getNetworkClientConnectionStats](docs/wirelesshealth/README.md#getnetworkclientconnectionstats) - Aggregated connectivity info for a given client on this network
* [getNetworkClientLatencyStats](docs/wirelesshealth/README.md#getnetworkclientlatencystats) - Aggregated latency info for a given client on this network
* [getNetworkClientsConnectionStats](docs/wirelesshealth/README.md#getnetworkclientsconnectionstats) - Aggregated connectivity info for this network, grouped by clients
* [getNetworkClientsLatencyStats](docs/wirelesshealth/README.md#getnetworkclientslatencystats) - Aggregated latency info for this network, grouped by clients
* [getNetworkConnectionStats](docs/wirelesshealth/README.md#getnetworkconnectionstats) - Aggregated connectivity info for this network
* [getNetworkDeviceConnectionStats](docs/wirelesshealth/README.md#getnetworkdeviceconnectionstats) - Aggregated connectivity info for a given AP on this network
* [getNetworkDeviceLatencyStats](docs/wirelesshealth/README.md#getnetworkdevicelatencystats) - Aggregated latency info for a given AP on this network
* [getNetworkDevicesConnectionStats](docs/wirelesshealth/README.md#getnetworkdevicesconnectionstats) - Aggregated connectivity info for this network, grouped by node
* [getNetworkDevicesLatencyStats](docs/wirelesshealth/README.md#getnetworkdeviceslatencystats) - Aggregated latency info for this network, grouped by node
* [getNetworkFailedConnections](docs/wirelesshealth/README.md#getnetworkfailedconnections) - List of all failed client connection events on this network in a given time range
* [getNetworkLatencyStats](docs/wirelesshealth/README.md#getnetworklatencystats) - Aggregated latency info for this network

### [wirelessSettings](docs/wirelesssettings/README.md)

* [getNetworkWirelessSettings](docs/wirelesssettings/README.md#getnetworkwirelesssettings) - Return the wireless settings for a network
* [updateNetworkWirelessSettings](docs/wirelesssettings/README.md#updatenetworkwirelesssettings) - Update the wireless settings for a network
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
