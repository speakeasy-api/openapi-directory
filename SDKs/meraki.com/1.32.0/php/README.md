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
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkSwitchAccessControlListsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkSwitchAccessControlListsRequest();
    $request->networkId = 'corrupti';

    $response = $sdk->accessControlLists->getNetworkSwitchAccessControlLists($request);

    if ($response->getNetworkSwitchAccessControlLists200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [accessControlLists](docs/accesscontrollists/README.md)

* [getNetworkSwitchAccessControlLists](docs/accesscontrollists/README.md#getnetworkswitchaccesscontrollists) - Return the access control lists for a MS network
* [updateNetworkSwitchAccessControlLists](docs/accesscontrollists/README.md#updatenetworkswitchaccesscontrollists) - Update the access control lists for a MS network

### [accessPolicies](docs/accesspolicies/README.md)

* [createNetworkSwitchAccessPolicy](docs/accesspolicies/README.md#createnetworkswitchaccesspolicy) - Create an access policy for a switch network
* [deleteNetworkSwitchAccessPolicy](docs/accesspolicies/README.md#deletenetworkswitchaccesspolicy) - Delete an access policy for a switch network
* [getNetworkSwitchAccessPolicies](docs/accesspolicies/README.md#getnetworkswitchaccesspolicies) - List the access policies for a switch network
* [getNetworkSwitchAccessPolicy](docs/accesspolicies/README.md#getnetworkswitchaccesspolicy) - Return a specific access policy for a switch network
* [updateNetworkSwitchAccessPolicy](docs/accesspolicies/README.md#updatenetworkswitchaccesspolicy) - Update an access policy for a switch network

### [acls](docs/acls/README.md)

* [createOrganizationAdaptivePolicyAcl](docs/acls/README.md#createorganizationadaptivepolicyacl) - Creates new adaptive policy ACL
* [deleteOrganizationAdaptivePolicyAcl](docs/acls/README.md#deleteorganizationadaptivepolicyacl) - Deletes the specified adaptive policy ACL
* [getOrganizationAdaptivePolicyAcl](docs/acls/README.md#getorganizationadaptivepolicyacl) - Returns the adaptive policy ACL information
* [getOrganizationAdaptivePolicyAcls](docs/acls/README.md#getorganizationadaptivepolicyacls) - List adaptive policy ACLs in a organization
* [updateOrganizationAdaptivePolicyAcl](docs/acls/README.md#updateorganizationadaptivepolicyacl) - Updates an adaptive policy ACL

### [actionBatches](docs/actionbatches/README.md)

* [createOrganizationActionBatch](docs/actionbatches/README.md#createorganizationactionbatch) - Create an action batch
* [deleteOrganizationActionBatch](docs/actionbatches/README.md#deleteorganizationactionbatch) - Delete an action batch
* [getOrganizationActionBatch](docs/actionbatches/README.md#getorganizationactionbatch) - Return an action batch
* [getOrganizationActionBatches](docs/actionbatches/README.md#getorganizationactionbatches) - Return the list of action batches in the organization
* [updateOrganizationActionBatch](docs/actionbatches/README.md#updateorganizationactionbatch) - Update an action batch

### [adaptivePolicy](docs/adaptivepolicy/README.md)

* [createOrganizationAdaptivePolicyAcl](docs/adaptivepolicy/README.md#createorganizationadaptivepolicyacl) - Creates new adaptive policy ACL
* [createOrganizationAdaptivePolicyGroup](docs/adaptivepolicy/README.md#createorganizationadaptivepolicygroup) - Creates a new adaptive policy group
* [createOrganizationAdaptivePolicyPolicy](docs/adaptivepolicy/README.md#createorganizationadaptivepolicypolicy) - Add an Adaptive Policy
* [deleteOrganizationAdaptivePolicyAcl](docs/adaptivepolicy/README.md#deleteorganizationadaptivepolicyacl) - Deletes the specified adaptive policy ACL
* [deleteOrganizationAdaptivePolicyGroup](docs/adaptivepolicy/README.md#deleteorganizationadaptivepolicygroup) - Deletes the specified adaptive policy group and any associated policies and references
* [deleteOrganizationAdaptivePolicyPolicy](docs/adaptivepolicy/README.md#deleteorganizationadaptivepolicypolicy) - Delete an Adaptive Policy
* [getOrganizationAdaptivePolicyAcl](docs/adaptivepolicy/README.md#getorganizationadaptivepolicyacl) - Returns the adaptive policy ACL information
* [getOrganizationAdaptivePolicyAcls](docs/adaptivepolicy/README.md#getorganizationadaptivepolicyacls) - List adaptive policy ACLs in a organization
* [getOrganizationAdaptivePolicyGroup](docs/adaptivepolicy/README.md#getorganizationadaptivepolicygroup) - Returns an adaptive policy group
* [getOrganizationAdaptivePolicyGroups](docs/adaptivepolicy/README.md#getorganizationadaptivepolicygroups) - List adaptive policy groups in a organization
* [getOrganizationAdaptivePolicyOverview](docs/adaptivepolicy/README.md#getorganizationadaptivepolicyoverview) - Returns adaptive policy aggregate statistics for an organization
* [getOrganizationAdaptivePolicyPolicies](docs/adaptivepolicy/README.md#getorganizationadaptivepolicypolicies) - List adaptive policies in an organization
* [getOrganizationAdaptivePolicyPolicy](docs/adaptivepolicy/README.md#getorganizationadaptivepolicypolicy) - Return an adaptive policy
* [getOrganizationAdaptivePolicySettings](docs/adaptivepolicy/README.md#getorganizationadaptivepolicysettings) - Returns global adaptive policy settings in an organization
* [updateOrganizationAdaptivePolicyAcl](docs/adaptivepolicy/README.md#updateorganizationadaptivepolicyacl) - Updates an adaptive policy ACL
* [updateOrganizationAdaptivePolicyGroup](docs/adaptivepolicy/README.md#updateorganizationadaptivepolicygroup) - Updates an adaptive policy group
* [updateOrganizationAdaptivePolicyPolicy](docs/adaptivepolicy/README.md#updateorganizationadaptivepolicypolicy) - Update an Adaptive Policy
* [updateOrganizationAdaptivePolicySettings](docs/adaptivepolicy/README.md#updateorganizationadaptivepolicysettings) - Update global adaptive policy settings

### [addresses](docs/addresses/README.md)

* [getOrganizationDevicesUplinksAddressesByDevice](docs/addresses/README.md#getorganizationdevicesuplinksaddressesbydevice) - List the current uplink addresses for devices in an organization.

### [administered](docs/administered/README.md)

* [getAdministeredIdentitiesMe](docs/administered/README.md#getadministeredidentitiesme) - Returns the identity of the current user.

### [admins](docs/admins/README.md)

* [createOrganizationAdmin](docs/admins/README.md#createorganizationadmin) - Create a new dashboard administrator
* [deleteOrganizationAdmin](docs/admins/README.md#deleteorganizationadmin) - Revoke all access for a dashboard administrator within this organization
* [getOrganizationAdmins](docs/admins/README.md#getorganizationadmins) - List the dashboard administrators in this organization
* [updateOrganizationAdmin](docs/admins/README.md#updateorganizationadmin) - Update an administrator

### [airMarshal](docs/airmarshal/README.md)

* [getNetworkWirelessAirMarshal](docs/airmarshal/README.md#getnetworkwirelessairmarshal) - List Air Marshal scan results from a network

### [alertTypes](docs/alerttypes/README.md)

* [getOrganizationWebhooksAlertTypes](docs/alerttypes/README.md#getorganizationwebhooksalerttypes) - Return a list of alert types to be used with managing webhook alerts

### [alerts](docs/alerts/README.md)

* [createNetworkSensorAlertsProfile](docs/alerts/README.md#createnetworksensoralertsprofile) - Creates a sensor alert profile for a network.
* [createOrganizationAlertsProfile](docs/alerts/README.md#createorganizationalertsprofile) - Create an organization-wide alert configuration
* [deleteNetworkSensorAlertsProfile](docs/alerts/README.md#deletenetworksensoralertsprofile) - Deletes a sensor alert profile from a network.
* [deleteOrganizationAlertsProfile](docs/alerts/README.md#deleteorganizationalertsprofile) - Removes an organization-wide alert config
* [getNetworkAlertsHistory](docs/alerts/README.md#getnetworkalertshistory) - Return the alert history for this network
* [getNetworkAlertsSettings](docs/alerts/README.md#getnetworkalertssettings) - Return the alert configuration for this network
* [getNetworkHealthAlerts](docs/alerts/README.md#getnetworkhealthalerts) - Return all global alerts on this network
* [getNetworkSensorAlertsCurrentOverviewByMetric](docs/alerts/README.md#getnetworksensoralertscurrentoverviewbymetric) - Return an overview of currently alerting sensors by metric
* [getNetworkSensorAlertsOverviewByMetric](docs/alerts/README.md#getnetworksensoralertsoverviewbymetric) - Return an overview of alert occurrences over a timespan, by metric
* [getNetworkSensorAlertsProfile](docs/alerts/README.md#getnetworksensoralertsprofile) - Show details of a sensor alert profile for a network.
* [getNetworkSensorAlertsProfiles](docs/alerts/README.md#getnetworksensoralertsprofiles) - Lists all sensor alert profiles for a network.
* [getOrganizationAlertsProfiles](docs/alerts/README.md#getorganizationalertsprofiles) - List all organization-wide alert configurations
* [updateNetworkAlertsSettings](docs/alerts/README.md#updatenetworkalertssettings) - Update the alert configuration for this network
* [updateNetworkSensorAlertsProfile](docs/alerts/README.md#updatenetworksensoralertsprofile) - Updates a sensor alert profile for a network.
* [updateOrganizationAlertsProfile](docs/alerts/README.md#updateorganizationalertsprofile) - Update an organization-wide alert config

### [alternateManagementInterface](docs/alternatemanagementinterface/README.md)

* [getNetworkSwitchAlternateManagementInterface](docs/alternatemanagementinterface/README.md#getnetworkswitchalternatemanagementinterface) - Return the switch alternate management interface for the network
* [getNetworkWirelessAlternateManagementInterface](docs/alternatemanagementinterface/README.md#getnetworkwirelessalternatemanagementinterface) - Return alternate management interface and devices with IP assigned
* [updateNetworkSwitchAlternateManagementInterface](docs/alternatemanagementinterface/README.md#updatenetworkswitchalternatemanagementinterface) - Update the switch alternate management interface for the network
* [updateNetworkWirelessAlternateManagementInterface](docs/alternatemanagementinterface/README.md#updatenetworkwirelessalternatemanagementinterface) - Update alternate management interface and device static IP

### [analytics](docs/analytics/README.md)

* [getDeviceCameraAnalyticsLive](docs/analytics/README.md#getdevicecameraanalyticslive) - Returns live state from camera of analytics zones
* [getDeviceCameraAnalyticsOverview](docs/analytics/README.md#getdevicecameraanalyticsoverview) - Returns an overview of aggregate analytics data for a timespan
* [getDeviceCameraAnalyticsRecent](docs/analytics/README.md#getdevicecameraanalyticsrecent) - Returns most recent record for analytics zones
* [getDeviceCameraAnalyticsZoneHistory](docs/analytics/README.md#getdevicecameraanalyticszonehistory) - Return historical records for analytic zones
* [getDeviceCameraAnalyticsZones](docs/analytics/README.md#getdevicecameraanalyticszones) - Returns all configured analytic zones for this camera

### [apiRequests](docs/apirequests/README.md)

* [getOrganizationApiRequests](docs/apirequests/README.md#getorganizationapirequests) - List the API requests made by an organization
* [getOrganizationApiRequestsOverview](docs/apirequests/README.md#getorganizationapirequestsoverview) - Return an aggregated overview of API requests data
* [getOrganizationApiRequestsOverviewResponseCodesByInterval](docs/apirequests/README.md#getorganizationapirequestsoverviewresponsecodesbyinterval) - Tracks organizations' API requests by response code across a given time period

### [apnsCert](docs/apnscert/README.md)

* [getOrganizationSmApnsCert](docs/apnscert/README.md#getorganizationsmapnscert) - Get the organization's APNS certificate

### [appliance](docs/appliance/README.md)

* [createDeviceApplianceVmxAuthenticationToken](docs/appliance/README.md#createdeviceappliancevmxauthenticationtoken) - Generate a new vMX authentication token
* [createNetworkAppliancePrefixesDelegatedStatic](docs/appliance/README.md#createnetworkapplianceprefixesdelegatedstatic) - Add a static delegated prefix from a network
* [createNetworkApplianceStaticRoute](docs/appliance/README.md#createnetworkappliancestaticroute) - Add a static route for an MX or teleworker network
* [createNetworkApplianceTrafficShapingCustomPerformanceClass](docs/appliance/README.md#createnetworkappliancetrafficshapingcustomperformanceclass) - Add a custom performance class for an MX network
* [createNetworkApplianceVlan](docs/appliance/README.md#createnetworkappliancevlan) - Add a VLAN
* [deleteNetworkAppliancePrefixesDelegatedStatic](docs/appliance/README.md#deletenetworkapplianceprefixesdelegatedstatic) - Delete a static delegated prefix from a network
* [deleteNetworkApplianceStaticRoute](docs/appliance/README.md#deletenetworkappliancestaticroute) - Delete a static route from an MX or teleworker network
* [deleteNetworkApplianceTrafficShapingCustomPerformanceClass](docs/appliance/README.md#deletenetworkappliancetrafficshapingcustomperformanceclass) - Delete a custom performance class from an MX network
* [deleteNetworkApplianceVlan](docs/appliance/README.md#deletenetworkappliancevlan) - Delete a VLAN from a network
* [getDeviceApplianceDhcpSubnets](docs/appliance/README.md#getdeviceappliancedhcpsubnets) - Return the DHCP subnet information for an appliance
* [getDeviceAppliancePerformance](docs/appliance/README.md#getdeviceapplianceperformance) - Return the performance score for a single MX
* [getDeviceAppliancePrefixesDelegated](docs/appliance/README.md#getdeviceapplianceprefixesdelegated) - Return current delegated IPv6 prefixes on an appliance.
* [getDeviceAppliancePrefixesDelegatedVlanAssignments](docs/appliance/README.md#getdeviceapplianceprefixesdelegatedvlanassignments) - Return prefixes assigned to all IPv6 enabled VLANs on an appliance.
* [getDeviceApplianceUplinksSettings](docs/appliance/README.md#getdeviceapplianceuplinkssettings) - Return the uplink settings for an MX appliance
* [getNetworkApplianceClientSecurityEvents](docs/appliance/README.md#getnetworkapplianceclientsecurityevents) - List the security events for a client
* [getNetworkApplianceConnectivityMonitoringDestinations](docs/appliance/README.md#getnetworkapplianceconnectivitymonitoringdestinations) - Return the connectivity testing destinations for an MX network
* [getNetworkApplianceContentFiltering](docs/appliance/README.md#getnetworkappliancecontentfiltering) - Return the content filtering settings for an MX network
* [getNetworkApplianceContentFilteringCategories](docs/appliance/README.md#getnetworkappliancecontentfilteringcategories) - List all available content filtering categories for an MX network
* [getNetworkApplianceFirewallCellularFirewallRules](docs/appliance/README.md#getnetworkappliancefirewallcellularfirewallrules) - Return the cellular firewall rules for an MX network
* [getNetworkApplianceFirewallFirewalledService](docs/appliance/README.md#getnetworkappliancefirewallfirewalledservice) - Return the accessibility settings of the given service ('ICMP', 'web', or 'SNMP')
* [getNetworkApplianceFirewallFirewalledServices](docs/appliance/README.md#getnetworkappliancefirewallfirewalledservices) - List the appliance services and their accessibility rules
* [getNetworkApplianceFirewallInboundCellularFirewallRules](docs/appliance/README.md#getnetworkappliancefirewallinboundcellularfirewallrules) - Return the inbound cellular firewall rules for an MX network
* [getNetworkApplianceFirewallInboundFirewallRules](docs/appliance/README.md#getnetworkappliancefirewallinboundfirewallrules) - Return the inbound firewall rules for an MX network
* [getNetworkApplianceFirewallL3FirewallRules](docs/appliance/README.md#getnetworkappliancefirewalll3firewallrules) - Return the L3 firewall rules for an MX network
* [getNetworkApplianceFirewallL7FirewallRules](docs/appliance/README.md#getnetworkappliancefirewalll7firewallrules) - List the MX L7 firewall rules for an MX network
* [getNetworkApplianceFirewallL7FirewallRulesApplicationCategories](docs/appliance/README.md#getnetworkappliancefirewalll7firewallrulesapplicationcategories) - Return the L7 firewall application categories and their associated applications for an MX network
* [getNetworkApplianceFirewallOneToManyNatRules](docs/appliance/README.md#getnetworkappliancefirewallonetomanynatrules) - Return the 1:Many NAT mapping rules for an MX network
* [getNetworkApplianceFirewallOneToOneNatRules](docs/appliance/README.md#getnetworkappliancefirewallonetoonenatrules) - Return the 1:1 NAT mapping rules for an MX network
* [getNetworkApplianceFirewallPortForwardingRules](docs/appliance/README.md#getnetworkappliancefirewallportforwardingrules) - Return the port forwarding rules for an MX network
* [getNetworkApplianceFirewallSettings](docs/appliance/README.md#getnetworkappliancefirewallsettings) - Return the firewall settings for this network
* [getNetworkAppliancePort](docs/appliance/README.md#getnetworkapplianceport) - Return per-port VLAN settings for a single MX port.
* [getNetworkAppliancePorts](docs/appliance/README.md#getnetworkapplianceports) - List per-port VLAN settings for all ports of a MX.
* [getNetworkAppliancePrefixesDelegatedStatic](docs/appliance/README.md#getnetworkapplianceprefixesdelegatedstatic) - Return a static delegated prefix from a network
* [getNetworkAppliancePrefixesDelegatedStatics](docs/appliance/README.md#getnetworkapplianceprefixesdelegatedstatics) - List static delegated prefixes for a network
* [getNetworkApplianceSecurityEvents](docs/appliance/README.md#getnetworkappliancesecurityevents) - List the security events for a network
* [getNetworkApplianceSecurityIntrusion](docs/appliance/README.md#getnetworkappliancesecurityintrusion) - Returns all supported intrusion settings for an MX network
* [getNetworkApplianceSecurityMalware](docs/appliance/README.md#getnetworkappliancesecuritymalware) - Returns all supported malware settings for an MX network
* [getNetworkApplianceSettings](docs/appliance/README.md#getnetworkappliancesettings) - Return the appliance settings for a network
* [getNetworkApplianceSingleLan](docs/appliance/README.md#getnetworkappliancesinglelan) - Return single LAN configuration
* [getNetworkApplianceSsid](docs/appliance/README.md#getnetworkappliancessid) - Return a single MX SSID
* [getNetworkApplianceSsids](docs/appliance/README.md#getnetworkappliancessids) - List the MX SSIDs in a network
* [getNetworkApplianceStaticRoute](docs/appliance/README.md#getnetworkappliancestaticroute) - Return a static route for an MX or teleworker network
* [getNetworkApplianceStaticRoutes](docs/appliance/README.md#getnetworkappliancestaticroutes) - List the static routes for an MX or teleworker network
* [getNetworkApplianceTrafficShaping](docs/appliance/README.md#getnetworkappliancetrafficshaping) - Display the traffic shaping settings for an MX network
* [getNetworkApplianceTrafficShapingCustomPerformanceClass](docs/appliance/README.md#getnetworkappliancetrafficshapingcustomperformanceclass) - Return a custom performance class for an MX network
* [getNetworkApplianceTrafficShapingCustomPerformanceClasses](docs/appliance/README.md#getnetworkappliancetrafficshapingcustomperformanceclasses) - List all custom performance classes for an MX network
* [getNetworkApplianceTrafficShapingRules](docs/appliance/README.md#getnetworkappliancetrafficshapingrules) - Display the traffic shaping settings rules for an MX network
* [getNetworkApplianceTrafficShapingUplinkBandwidth](docs/appliance/README.md#getnetworkappliancetrafficshapinguplinkbandwidth) - Returns the uplink bandwidth limits for your MX network
* [getNetworkApplianceTrafficShapingUplinkSelection](docs/appliance/README.md#getnetworkappliancetrafficshapinguplinkselection) - Show uplink selection settings for an MX network
* [getNetworkApplianceUplinksUsageHistory](docs/appliance/README.md#getnetworkapplianceuplinksusagehistory) - Get the sent and received bytes for each uplink of a network.
* [getNetworkApplianceVlan](docs/appliance/README.md#getnetworkappliancevlan) - Return a VLAN
* [getNetworkApplianceVlans](docs/appliance/README.md#getnetworkappliancevlans) - List the VLANs for an MX network
* [getNetworkApplianceVlansSettings](docs/appliance/README.md#getnetworkappliancevlanssettings) - Returns the enabled status of VLANs for the network
* [getNetworkApplianceVpnBgp](docs/appliance/README.md#getnetworkappliancevpnbgp) - Return a Hub BGP Configuration
* [getNetworkApplianceVpnSiteToSiteVpn](docs/appliance/README.md#getnetworkappliancevpnsitetositevpn) - Return the site-to-site VPN settings of a network
* [getNetworkApplianceWarmSpare](docs/appliance/README.md#getnetworkappliancewarmspare) - Return MX warm spare settings
* [getOrganizationApplianceSecurityEvents](docs/appliance/README.md#getorganizationappliancesecurityevents) - List the security events for an organization
* [getOrganizationApplianceSecurityIntrusion](docs/appliance/README.md#getorganizationappliancesecurityintrusion) - Returns all supported intrusion settings for an organization
* [getOrganizationApplianceUplinkStatuses](docs/appliance/README.md#getorganizationapplianceuplinkstatuses) - List the uplink status of every Meraki MX and Z series appliances in the organization
* [getOrganizationApplianceVpnStats](docs/appliance/README.md#getorganizationappliancevpnstats) - Show VPN history stat for networks in an organization
* [getOrganizationApplianceVpnStatuses](docs/appliance/README.md#getorganizationappliancevpnstatuses) - Show VPN status for networks in an organization
* [getOrganizationApplianceVPNThirdPartyVPNPeers](docs/appliance/README.md#getorganizationappliancevpnthirdpartyvpnpeers) - Return the third party VPN peers for an organization
* [getOrganizationApplianceVpnVpnFirewallRules](docs/appliance/README.md#getorganizationappliancevpnvpnfirewallrules) - Return the firewall rules for an organization's site-to-site VPN
* [swapNetworkApplianceWarmSpare](docs/appliance/README.md#swapnetworkappliancewarmspare) - Swap MX primary and warm spare appliances
* [updateDeviceApplianceUplinksSettings](docs/appliance/README.md#updatedeviceapplianceuplinkssettings) - Update the uplink settings for an MX appliance
* [updateNetworkApplianceConnectivityMonitoringDestinations](docs/appliance/README.md#updatenetworkapplianceconnectivitymonitoringdestinations) - Update the connectivity testing destinations for an MX network
* [updateNetworkApplianceContentFiltering](docs/appliance/README.md#updatenetworkappliancecontentfiltering) - Update the content filtering settings for an MX network
* [updateNetworkApplianceFirewallCellularFirewallRules](docs/appliance/README.md#updatenetworkappliancefirewallcellularfirewallrules) - Update the cellular firewall rules of an MX network
* [updateNetworkApplianceFirewallFirewalledService](docs/appliance/README.md#updatenetworkappliancefirewallfirewalledservice) - Updates the accessibility settings for the given service ('ICMP', 'web', or 'SNMP')
* [updateNetworkApplianceFirewallInboundCellularFirewallRules](docs/appliance/README.md#updatenetworkappliancefirewallinboundcellularfirewallrules) - Update the inbound cellular firewall rules of an MX network
* [updateNetworkApplianceFirewallInboundFirewallRules](docs/appliance/README.md#updatenetworkappliancefirewallinboundfirewallrules) - Update the inbound firewall rules of an MX network
* [updateNetworkApplianceFirewallL3FirewallRules](docs/appliance/README.md#updatenetworkappliancefirewalll3firewallrules) - Update the L3 firewall rules of an MX network
* [updateNetworkApplianceFirewallL7FirewallRules](docs/appliance/README.md#updatenetworkappliancefirewalll7firewallrules) - Update the MX L7 firewall rules for an MX network
* [updateNetworkApplianceFirewallOneToManyNatRules](docs/appliance/README.md#updatenetworkappliancefirewallonetomanynatrules) - Set the 1:Many NAT mapping rules for an MX network
* [updateNetworkApplianceFirewallOneToOneNatRules](docs/appliance/README.md#updatenetworkappliancefirewallonetoonenatrules) - Set the 1:1 NAT mapping rules for an MX network
* [updateNetworkApplianceFirewallPortForwardingRules](docs/appliance/README.md#updatenetworkappliancefirewallportforwardingrules) - Update the port forwarding rules for an MX network
* [updateNetworkApplianceFirewallSettings](docs/appliance/README.md#updatenetworkappliancefirewallsettings) - Update the firewall settings for this network
* [updateNetworkAppliancePort](docs/appliance/README.md#updatenetworkapplianceport) - Update the per-port VLAN settings for a single MX port.
* [updateNetworkAppliancePrefixesDelegatedStatic](docs/appliance/README.md#updatenetworkapplianceprefixesdelegatedstatic) - Update a static delegated prefix from a network
* [updateNetworkApplianceSecurityIntrusion](docs/appliance/README.md#updatenetworkappliancesecurityintrusion) - Set the supported intrusion settings for an MX network
* [updateNetworkApplianceSecurityMalware](docs/appliance/README.md#updatenetworkappliancesecuritymalware) - Set the supported malware settings for an MX network
* [updateNetworkApplianceSettings](docs/appliance/README.md#updatenetworkappliancesettings) - Update the appliance settings for a network
* [updateNetworkApplianceSingleLan](docs/appliance/README.md#updatenetworkappliancesinglelan) - Update single LAN configuration
* [updateNetworkApplianceSsid](docs/appliance/README.md#updatenetworkappliancessid) - Update the attributes of an MX SSID
* [updateNetworkApplianceStaticRoute](docs/appliance/README.md#updatenetworkappliancestaticroute) - Update a static route for an MX or teleworker network
* [updateNetworkApplianceTrafficShaping](docs/appliance/README.md#updatenetworkappliancetrafficshaping) - Update the traffic shaping settings for an MX network
* [updateNetworkApplianceTrafficShapingCustomPerformanceClass](docs/appliance/README.md#updatenetworkappliancetrafficshapingcustomperformanceclass) - Update a custom performance class for an MX network
* [updateNetworkApplianceTrafficShapingRules](docs/appliance/README.md#updatenetworkappliancetrafficshapingrules) - Update the traffic shaping settings rules for an MX network
* [updateNetworkApplianceTrafficShapingUplinkBandwidth](docs/appliance/README.md#updatenetworkappliancetrafficshapinguplinkbandwidth) - Updates the uplink bandwidth settings for your MX network.
* [updateNetworkApplianceTrafficShapingUplinkSelection](docs/appliance/README.md#updatenetworkappliancetrafficshapinguplinkselection) - Update uplink selection settings for an MX network
* [updateNetworkApplianceVlan](docs/appliance/README.md#updatenetworkappliancevlan) - Update a VLAN
* [updateNetworkApplianceVlansSettings](docs/appliance/README.md#updatenetworkappliancevlanssettings) - Enable/Disable VLANs for the given network
* [updateNetworkApplianceVpnBgp](docs/appliance/README.md#updatenetworkappliancevpnbgp) - Update a Hub BGP Configuration
* [updateNetworkApplianceVpnSiteToSiteVpn](docs/appliance/README.md#updatenetworkappliancevpnsitetositevpn) - Update the site-to-site VPN settings of a network
* [updateNetworkApplianceWarmSpare](docs/appliance/README.md#updatenetworkappliancewarmspare) - Update MX warm spare settings
* [updateOrganizationApplianceSecurityIntrusion](docs/appliance/README.md#updateorganizationappliancesecurityintrusion) - Sets supported intrusion settings for an organization
* [updateOrganizationApplianceVPNThirdPartyVPNPeers](docs/appliance/README.md#updateorganizationappliancevpnthirdpartyvpnpeers) - Update the third party VPN peers for an organization
* [updateOrganizationApplianceVpnVpnFirewallRules](docs/appliance/README.md#updateorganizationappliancevpnvpnfirewallrules) - Update the firewall rules of an organization's site-to-site VPN

### [appliances](docs/appliances/README.md)

* [getOrganizationSummaryTopAppliancesByUtilization](docs/appliances/README.md#getorganizationsummarytopappliancesbyutilization) - Return the top 10 appliances sorted by utilization over given time range.

### [applicationCategories](docs/applicationcategories/README.md)

* [getNetworkApplianceFirewallL7FirewallRulesApplicationCategories](docs/applicationcategories/README.md#getnetworkappliancefirewalll7firewallrulesapplicationcategories) - Return the L7 firewall application categories and their associated applications for an MX network
* [getNetworkTrafficShapingApplicationCategories](docs/applicationcategories/README.md#getnetworktrafficshapingapplicationcategories) - Returns the application categories for traffic shaping rules.

### [applicationUsage](docs/applicationusage/README.md)

* [getNetworkClientsApplicationUsage](docs/applicationusage/README.md#getnetworkclientsapplicationusage) - Return the application usage data for clients

### [applications](docs/applications/README.md)

* [getNetworkInsightApplicationHealthByTime](docs/applications/README.md#getnetworkinsightapplicationhealthbytime) - Get application health by time
* [getOrganizationInsightApplications](docs/applications/README.md#getorganizationinsightapplications) - List all Insight tracked applications

### [arpInspection](docs/arpinspection/README.md)

* [createNetworkSwitchDhcpServerPolicyArpInspectionTrustedServer](docs/arpinspection/README.md#createnetworkswitchdhcpserverpolicyarpinspectiontrustedserver) - Add a server to be trusted by Dynamic ARP Inspection on this network
* [deleteNetworkSwitchDhcpServerPolicyArpInspectionTrustedServer](docs/arpinspection/README.md#deletenetworkswitchdhcpserverpolicyarpinspectiontrustedserver) - Remove a server from being trusted by Dynamic ARP Inspection on this network
* [getNetworkSwitchDhcpServerPolicyArpInspectionTrustedServers](docs/arpinspection/README.md#getnetworkswitchdhcpserverpolicyarpinspectiontrustedservers) - Return the list of servers trusted by Dynamic ARP Inspection on this network
* [getNetworkSwitchDhcpServerPolicyArpInspectionWarningsByDevice](docs/arpinspection/README.md#getnetworkswitchdhcpserverpolicyarpinspectionwarningsbydevice) - Return the devices that have a Dynamic ARP Inspection warning and their warnings
* [updateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServer](docs/arpinspection/README.md#updatenetworkswitchdhcpserverpolicyarpinspectiontrustedserver) - Update a server that is trusted by Dynamic ARP Inspection on this network

### [artifacts](docs/artifacts/README.md)

* [createOrganizationCameraCustomAnalyticsArtifact](docs/artifacts/README.md#createorganizationcameracustomanalyticsartifact) - Create custom analytics artifact
* [deleteOrganizationCameraCustomAnalyticsArtifact](docs/artifacts/README.md#deleteorganizationcameracustomanalyticsartifact) - Delete Custom Analytics Artifact
* [getOrganizationCameraCustomAnalyticsArtifact](docs/artifacts/README.md#getorganizationcameracustomanalyticsartifact) - Get Custom Analytics Artifact
* [getOrganizationCameraCustomAnalyticsArtifacts](docs/artifacts/README.md#getorganizationcameracustomanalyticsartifacts) - List Custom Analytics Artifacts

### [authenticationToken](docs/authenticationtoken/README.md)

* [createDeviceApplianceVmxAuthenticationToken](docs/authenticationtoken/README.md#createdeviceappliancevmxauthenticationtoken) - Generate a new vMX authentication token

### [availabilities](docs/availabilities/README.md)

* [getOrganizationDevicesAvailabilities](docs/availabilities/README.md#getorganizationdevicesavailabilities) - List the availability information for devices in an organization

### [bandwidthUsageHistory](docs/bandwidthusagehistory/README.md)

* [getNetworkClientsBandwidthUsageHistory](docs/bandwidthusagehistory/README.md#getnetworkclientsbandwidthusagehistory) - Returns a timeseries of total traffic consumption rates for all clients on a network within a given timespan, in megabits per second.
* [getOrganizationClientsBandwidthUsageHistory](docs/bandwidthusagehistory/README.md#getorganizationclientsbandwidthusagehistory) - Return data usage (in megabits per second) over time for all clients in the given organization within a given time range.

### [bgp](docs/bgp/README.md)

* [getNetworkApplianceVpnBgp](docs/bgp/README.md#getnetworkappliancevpnbgp) - Return a Hub BGP Configuration
* [updateNetworkApplianceVpnBgp](docs/bgp/README.md#updatenetworkappliancevpnbgp) - Update a Hub BGP Configuration

### [billing](docs/billing/README.md)

* [getNetworkWirelessBilling](docs/billing/README.md#getnetworkwirelessbilling) - Return the billing settings of this network
* [updateNetworkWirelessBilling](docs/billing/README.md#updatenetworkwirelessbilling) - Update the billing settings

### [bluetooth](docs/bluetooth/README.md)

* [getDeviceWirelessBluetoothSettings](docs/bluetooth/README.md#getdevicewirelessbluetoothsettings) - Return the bluetooth settings for a wireless device
* [getNetworkWirelessBluetoothSettings](docs/bluetooth/README.md#getnetworkwirelessbluetoothsettings) - Return the Bluetooth settings for a network. <a href="https://documentation.meraki.com/MR/Bluetooth/Bluetooth_Low_Energy_(BLE)">Bluetooth settings</a> must be enabled on the network.
* [updateDeviceWirelessBluetoothSettings](docs/bluetooth/README.md#updatedevicewirelessbluetoothsettings) - Update the bluetooth settings for a wireless device
* [updateNetworkWirelessBluetoothSettings](docs/bluetooth/README.md#updatenetworkwirelessbluetoothsettings) - Update the Bluetooth settings for a network

### [bluetoothClients](docs/bluetoothclients/README.md)

* [getNetworkBluetoothClient](docs/bluetoothclients/README.md#getnetworkbluetoothclient) - Return a Bluetooth client
* [getNetworkBluetoothClients](docs/bluetoothclients/README.md#getnetworkbluetoothclients) - List the Bluetooth clients seen by APs in this network

### [bonjourForwarding](docs/bonjourforwarding/README.md)

* [getNetworkWirelessSsidBonjourForwarding](docs/bonjourforwarding/README.md#getnetworkwirelessssidbonjourforwarding) - List the Bonjour forwarding setting and rules for the SSID
* [updateNetworkWirelessSsidBonjourForwarding](docs/bonjourforwarding/README.md#updatenetworkwirelessssidbonjourforwarding) - Update the bonjour forwarding setting and rules for the SSID

### [brandingPolicies](docs/brandingpolicies/README.md)

* [createOrganizationBrandingPolicy](docs/brandingpolicies/README.md#createorganizationbrandingpolicy) - Add a new branding policy to an organization
* [deleteOrganizationBrandingPolicy](docs/brandingpolicies/README.md#deleteorganizationbrandingpolicy) - Delete a branding policy
* [getOrganizationBrandingPolicies](docs/brandingpolicies/README.md#getorganizationbrandingpolicies) - List the branding policies of an organization
* [getOrganizationBrandingPoliciesPriorities](docs/brandingpolicies/README.md#getorganizationbrandingpoliciespriorities) - Return the branding policy IDs of an organization in priority order
* [getOrganizationBrandingPolicy](docs/brandingpolicies/README.md#getorganizationbrandingpolicy) - Return a branding policy
* [updateOrganizationBrandingPoliciesPriorities](docs/brandingpolicies/README.md#updateorganizationbrandingpoliciespriorities) - Update the priority ordering of an organization's branding policies.
* [updateOrganizationBrandingPolicy](docs/brandingpolicies/README.md#updateorganizationbrandingpolicy) - Update a branding policy

### [byClient](docs/byclient/README.md)

* [getNetworkPoliciesByClient](docs/byclient/README.md#getnetworkpoliciesbyclient) - Get policies for all clients with policies

### [byDevice](docs/bydevice/README.md)

* [getNetworkSwitchDhcpServerPolicyArpInspectionWarningsByDevice](docs/bydevice/README.md#getnetworkswitchdhcpserverpolicyarpinspectionwarningsbydevice) - Return the devices that have a Dynamic ARP Inspection warning and their warnings
* [getOrganizationDevicesPowerModulesStatusesByDevice](docs/bydevice/README.md#getorganizationdevicespowermodulesstatusesbydevice) - List the power status information for devices in an organization
* [getOrganizationDevicesUplinksAddressesByDevice](docs/bydevice/README.md#getorganizationdevicesuplinksaddressesbydevice) - List the current uplink addresses for devices in an organization.
* [getOrganizationFirmwareUpgradesByDevice](docs/bydevice/README.md#getorganizationfirmwareupgradesbydevice) - Get firmware upgrade status for the filtered devices

### [byEnergyUsage](docs/byenergyusage/README.md)

* [getOrganizationSummaryTopSwitchesByEnergyUsage](docs/byenergyusage/README.md#getorganizationsummarytopswitchesbyenergyusage) - Return metrics for organization's top 10 switches by energy usage over given time range

### [byInterval](docs/byinterval/README.md)

* [getOrganizationApiRequestsOverviewResponseCodesByInterval](docs/byinterval/README.md#getorganizationapirequestsoverviewresponsecodesbyinterval) - Tracks organizations' API requests by response code across a given time period

### [byMetric](docs/bymetric/README.md)

* [getNetworkSensorAlertsCurrentOverviewByMetric](docs/bymetric/README.md#getnetworksensoralertscurrentoverviewbymetric) - Return an overview of currently alerting sensors by metric
* [getNetworkSensorAlertsOverviewByMetric](docs/bymetric/README.md#getnetworksensoralertsoverviewbymetric) - Return an overview of alert occurrences over a timespan, by metric

### [bySwitch](docs/byswitch/README.md)

* [getOrganizationSwitchPortsBySwitch](docs/byswitch/README.md#getorganizationswitchportsbyswitch) - List the switchports in an organization by switch

### [byUsage](docs/byusage/README.md)

* [getOrganizationSummaryTopClientsByUsage](docs/byusage/README.md#getorganizationsummarytopclientsbyusage) - Return metrics for organization's top 10 clients by data usage (in mb) over given time range.
* [getOrganizationSummaryTopClientsManufacturersByUsage](docs/byusage/README.md#getorganizationsummarytopclientsmanufacturersbyusage) - Return metrics for organization's top clients by data usage (in mb) over given time range, grouped by manufacturer.
* [getOrganizationSummaryTopDevicesByUsage](docs/byusage/README.md#getorganizationsummarytopdevicesbyusage) - Return metrics for organization's top 10 devices sorted by data usage over given time range
* [getOrganizationSummaryTopDevicesModelsByUsage](docs/byusage/README.md#getorganizationsummarytopdevicesmodelsbyusage) - Return metrics for organization's top 10 device models sorted by data usage over given time range
* [getOrganizationSummaryTopSsidsByUsage](docs/byusage/README.md#getorganizationsummarytopssidsbyusage) - Return metrics for organization's top 10 ssids by data usage over given time range

### [byUtilization](docs/byutilization/README.md)

* [getOrganizationSummaryTopAppliancesByUtilization](docs/byutilization/README.md#getorganizationsummarytopappliancesbyutilization) - Return the top 10 appliances sorted by utilization over given time range.

### [bypassActivationLockAttempts](docs/bypassactivationlockattempts/README.md)

* [createNetworkSmBypassActivationLockAttempt](docs/bypassactivationlockattempts/README.md#createnetworksmbypassactivationlockattempt) - Bypass activation lock attempt
* [getNetworkSmBypassActivationLockAttempt](docs/bypassactivationlockattempts/README.md#getnetworksmbypassactivationlockattempt) - Bypass activation lock attempt status

### [camera](docs/camera/README.md)

* [createNetworkCameraQualityRetentionProfile](docs/camera/README.md#createnetworkcameraqualityretentionprofile) - Creates new quality retention profile for this network.
* [createNetworkCameraWirelessProfile](docs/camera/README.md#createnetworkcamerawirelessprofile) - Creates a new camera wireless profile for this network.
* [createOrganizationCameraCustomAnalyticsArtifact](docs/camera/README.md#createorganizationcameracustomanalyticsartifact) - Create custom analytics artifact
* [deleteNetworkCameraQualityRetentionProfile](docs/camera/README.md#deletenetworkcameraqualityretentionprofile) - Delete an existing quality retention profile for this network.
* [deleteNetworkCameraWirelessProfile](docs/camera/README.md#deletenetworkcamerawirelessprofile) - Delete an existing camera wireless profile for this network.
* [deleteOrganizationCameraCustomAnalyticsArtifact](docs/camera/README.md#deleteorganizationcameracustomanalyticsartifact) - Delete Custom Analytics Artifact
* [generateDeviceCameraSnapshot](docs/camera/README.md#generatedevicecamerasnapshot) - Generate a snapshot of what the camera sees at the specified time and return a link to that image.
* [getDeviceCameraAnalyticsLive](docs/camera/README.md#getdevicecameraanalyticslive) - Returns live state from camera of analytics zones
* [getDeviceCameraAnalyticsOverview](docs/camera/README.md#getdevicecameraanalyticsoverview) - Returns an overview of aggregate analytics data for a timespan
* [getDeviceCameraAnalyticsRecent](docs/camera/README.md#getdevicecameraanalyticsrecent) - Returns most recent record for analytics zones
* [getDeviceCameraAnalyticsZoneHistory](docs/camera/README.md#getdevicecameraanalyticszonehistory) - Return historical records for analytic zones
* [getDeviceCameraAnalyticsZones](docs/camera/README.md#getdevicecameraanalyticszones) - Returns all configured analytic zones for this camera
* [getDeviceCameraCustomAnalytics](docs/camera/README.md#getdevicecameracustomanalytics) - Return custom analytics settings for a camera
* [getDeviceCameraQualityAndRetention](docs/camera/README.md#getdevicecameraqualityandretention) - Returns quality and retention settings for the given camera
* [getDeviceCameraSense](docs/camera/README.md#getdevicecamerasense) - Returns sense settings for a given camera
* [getDeviceCameraSenseObjectDetectionModels](docs/camera/README.md#getdevicecamerasenseobjectdetectionmodels) - Returns the MV Sense object detection model list for the given camera
* [getDeviceCameraVideoLink](docs/camera/README.md#getdevicecameravideolink) - Returns video link to the specified camera
* [getDeviceCameraVideoSettings](docs/camera/README.md#getdevicecameravideosettings) - Returns video settings for the given camera
* [getDeviceCameraWirelessProfiles](docs/camera/README.md#getdevicecamerawirelessprofiles) - Returns wireless profile assigned to the given camera
* [getNetworkCameraQualityRetentionProfile](docs/camera/README.md#getnetworkcameraqualityretentionprofile) - Retrieve a single quality retention profile
* [getNetworkCameraQualityRetentionProfiles](docs/camera/README.md#getnetworkcameraqualityretentionprofiles) - List the quality retention profiles for this network
* [getNetworkCameraSchedules](docs/camera/README.md#getnetworkcameraschedules) - Returns a list of all camera recording schedules.
* [getNetworkCameraWirelessProfile](docs/camera/README.md#getnetworkcamerawirelessprofile) - Retrieve a single camera wireless profile.
* [getNetworkCameraWirelessProfiles](docs/camera/README.md#getnetworkcamerawirelessprofiles) - List the camera wireless profiles for this network.
* [getOrganizationCameraCustomAnalyticsArtifact](docs/camera/README.md#getorganizationcameracustomanalyticsartifact) - Get Custom Analytics Artifact
* [getOrganizationCameraCustomAnalyticsArtifacts](docs/camera/README.md#getorganizationcameracustomanalyticsartifacts) - List Custom Analytics Artifacts
* [getOrganizationCameraOnboardingStatuses](docs/camera/README.md#getorganizationcameraonboardingstatuses) - Fetch onboarding status of cameras
* [updateDeviceCameraCustomAnalytics](docs/camera/README.md#updatedevicecameracustomanalytics) - Update custom analytics settings for a camera
* [updateDeviceCameraQualityAndRetention](docs/camera/README.md#updatedevicecameraqualityandretention) - Update quality and retention settings for the given camera
* [updateDeviceCameraSense](docs/camera/README.md#updatedevicecamerasense) - Update sense settings for the given camera
* [updateDeviceCameraVideoSettings](docs/camera/README.md#updatedevicecameravideosettings) - Update video settings for the given camera
* [updateDeviceCameraWirelessProfiles](docs/camera/README.md#updatedevicecamerawirelessprofiles) - Assign wireless profiles to the given camera
* [updateNetworkCameraQualityRetentionProfile](docs/camera/README.md#updatenetworkcameraqualityretentionprofile) - Update an existing quality retention profile for this network.
* [updateNetworkCameraWirelessProfile](docs/camera/README.md#updatenetworkcamerawirelessprofile) - Update an existing camera wireless profile in this network.
* [updateOrganizationCameraOnboardingStatuses](docs/camera/README.md#updateorganizationcameraonboardingstatuses) - Notify that credential handoff to camera has completed

### [categories](docs/categories/README.md)

* [getNetworkApplianceContentFilteringCategories](docs/categories/README.md#getnetworkappliancecontentfilteringcategories) - List all available content filtering categories for an MX network

### [cellular](docs/cellular/README.md)

* [getDeviceCellularSims](docs/cellular/README.md#getdevicecellularsims) - Return the SIM and APN configurations for a cellular device.
* [updateDeviceCellularSims](docs/cellular/README.md#updatedevicecellularsims) - Updates the SIM and APN configurations for a cellular device.

### [cellularFirewallRules](docs/cellularfirewallrules/README.md)

* [getNetworkApplianceFirewallCellularFirewallRules](docs/cellularfirewallrules/README.md#getnetworkappliancefirewallcellularfirewallrules) - Return the cellular firewall rules for an MX network
* [updateNetworkApplianceFirewallCellularFirewallRules](docs/cellularfirewallrules/README.md#updatenetworkappliancefirewallcellularfirewallrules) - Update the cellular firewall rules of an MX network

### [cellularGateway](docs/cellulargateway/README.md)

* [getDeviceCellularGatewayLan](docs/cellulargateway/README.md#getdevicecellulargatewaylan) - Show the LAN Settings of a MG
* [getDeviceCellularGatewayPortForwardingRules](docs/cellulargateway/README.md#getdevicecellulargatewayportforwardingrules) - Returns the port forwarding rules for a single MG.
* [getNetworkCellularGatewayConnectivityMonitoringDestinations](docs/cellulargateway/README.md#getnetworkcellulargatewayconnectivitymonitoringdestinations) - Return the connectivity testing destinations for an MG network
* [getNetworkCellularGatewayDhcp](docs/cellulargateway/README.md#getnetworkcellulargatewaydhcp) - List common DHCP settings of MGs
* [getNetworkCellularGatewaySubnetPool](docs/cellulargateway/README.md#getnetworkcellulargatewaysubnetpool) - Return the subnet pool and mask configured for MGs in the network.
* [getNetworkCellularGatewayUplink](docs/cellulargateway/README.md#getnetworkcellulargatewayuplink) - Returns the uplink settings for your MG network.
* [getOrganizationCellularGatewayUplinkStatuses](docs/cellulargateway/README.md#getorganizationcellulargatewayuplinkstatuses) - List the uplink status of every Meraki MG cellular gateway in the organization
* [updateDeviceCellularGatewayLan](docs/cellulargateway/README.md#updatedevicecellulargatewaylan) - Update the LAN Settings for a single MG.
* [updateDeviceCellularGatewayPortForwardingRules](docs/cellulargateway/README.md#updatedevicecellulargatewayportforwardingrules) - Updates the port forwarding rules for a single MG.
* [updateNetworkCellularGatewayConnectivityMonitoringDestinations](docs/cellulargateway/README.md#updatenetworkcellulargatewayconnectivitymonitoringdestinations) - Update the connectivity testing destinations for an MG network
* [updateNetworkCellularGatewayDhcp](docs/cellulargateway/README.md#updatenetworkcellulargatewaydhcp) - Update common DHCP settings of MGs
* [updateNetworkCellularGatewaySubnetPool](docs/cellulargateway/README.md#updatenetworkcellulargatewaysubnetpool) - Update the subnet pool and mask configuration for MGs in the network.
* [updateNetworkCellularGatewayUplink](docs/cellulargateway/README.md#updatenetworkcellulargatewayuplink) - Updates the uplink settings for your MG network.

### [cellularUsageHistory](docs/cellularusagehistory/README.md)

* [getNetworkSmDeviceCellularUsageHistory](docs/cellularusagehistory/README.md#getnetworksmdevicecellularusagehistory) - Return the client's daily cellular data usage history

### [certs](docs/certs/README.md)

* [getNetworkSmDeviceCerts](docs/certs/README.md#getnetworksmdevicecerts) - List the certs on a device

### [channelUtilization](docs/channelutilization/README.md)

* [getNetworkNetworkHealthChannelUtilization](docs/channelutilization/README.md#getnetworknetworkhealthchannelutilization) - Get the channel utilization over each radio for all APs in a network.

### [channelUtilizationHistory](docs/channelutilizationhistory/README.md)

* [getNetworkWirelessChannelUtilizationHistory](docs/channelutilizationhistory/README.md#getnetworkwirelesschannelutilizationhistory) - Return AP channel utilization over time for a device or network client

### [claim](docs/claim/README.md)

* [vmxNetworkDevicesClaim](docs/claim/README.md#vmxnetworkdevicesclaim) - Claim a vMX into a network

### [clientCountHistory](docs/clientcounthistory/README.md)

* [getNetworkWirelessClientCountHistory](docs/clientcounthistory/README.md#getnetworkwirelessclientcounthistory) - Return wireless client counts over time for a network, device, or network client

### [clients](docs/clients/README.md)

* [getDeviceClients](docs/clients/README.md#getdeviceclients) - List the clients of a device, up to a maximum of a month ago
* [getNetworkApplianceClientSecurityEvents](docs/clients/README.md#getnetworkapplianceclientsecurityevents) - List the security events for a client
* [getNetworkClient](docs/clients/README.md#getnetworkclient) - Return the client associated with the given identifier
* [getNetworkClientPolicy](docs/clients/README.md#getnetworkclientpolicy) - Return the policy assigned to a client on the network
* [getNetworkClientSplashAuthorizationStatus](docs/clients/README.md#getnetworkclientsplashauthorizationstatus) - Return the splash authorization for a client, for each SSID they've associated with through splash
* [getNetworkClientTrafficHistory](docs/clients/README.md#getnetworkclienttraffichistory) - Return the client's network traffic data over time
* [getNetworkClientUsageHistory](docs/clients/README.md#getnetworkclientusagehistory) - Return the client's daily usage history
* [getNetworkClients](docs/clients/README.md#getnetworkclients) - List the clients that have used this network in the timespan
* [getNetworkClientsApplicationUsage](docs/clients/README.md#getnetworkclientsapplicationusage) - Return the application usage data for clients
* [getNetworkClientsBandwidthUsageHistory](docs/clients/README.md#getnetworkclientsbandwidthusagehistory) - Returns a timeseries of total traffic consumption rates for all clients on a network within a given timespan, in megabits per second.
* [getNetworkClientsOverview](docs/clients/README.md#getnetworkclientsoverview) - Return overview statistics for network clients
* [getNetworkClientsUsageHistories](docs/clients/README.md#getnetworkclientsusagehistories) - Return the usage histories for clients
* [getNetworkWirelessClientConnectionStats](docs/clients/README.md#getnetworkwirelessclientconnectionstats) - Aggregated connectivity info for a given client on this network
* [getNetworkWirelessClientConnectivityEvents](docs/clients/README.md#getnetworkwirelessclientconnectivityevents) - List the wireless connectivity events for a client within a network in the timespan.
* [getNetworkWirelessClientLatencyHistory](docs/clients/README.md#getnetworkwirelessclientlatencyhistory) - Return the latency history for a client
* [getNetworkWirelessClientLatencyStats](docs/clients/README.md#getnetworkwirelessclientlatencystats) - Aggregated latency info for a given client on this network
* [getNetworkWirelessClientsConnectionStats](docs/clients/README.md#getnetworkwirelessclientsconnectionstats) - Aggregated connectivity info for this network, grouped by clients
* [getNetworkWirelessClientsLatencyStats](docs/clients/README.md#getnetworkwirelessclientslatencystats) - Aggregated latency info for this network, grouped by clients
* [getOrganizationClientsBandwidthUsageHistory](docs/clients/README.md#getorganizationclientsbandwidthusagehistory) - Return data usage (in megabits per second) over time for all clients in the given organization within a given time range.
* [getOrganizationClientsOverview](docs/clients/README.md#getorganizationclientsoverview) - Return summary information around client data usage (in mb) across the given organization.
* [getOrganizationClientsSearch](docs/clients/README.md#getorganizationclientssearch) - Return the client details in an organization
* [getOrganizationSummaryTopClientsByUsage](docs/clients/README.md#getorganizationsummarytopclientsbyusage) - Return metrics for organization's top 10 clients by data usage (in mb) over given time range.
* [getOrganizationSummaryTopClientsManufacturersByUsage](docs/clients/README.md#getorganizationsummarytopclientsmanufacturersbyusage) - Return metrics for organization's top clients by data usage (in mb) over given time range, grouped by manufacturer.
* [provisionNetworkClients](docs/clients/README.md#provisionnetworkclients) - Provisions a client with a name and policy
* [updateNetworkClientPolicy](docs/clients/README.md#updatenetworkclientpolicy) - Update the policy assigned to a client on the network
* [updateNetworkClientSplashAuthorizationStatus](docs/clients/README.md#updatenetworkclientsplashauthorizationstatus) - Update a client's splash authorization

### [cloudMonitoring](docs/cloudmonitoring/README.md)

* [createOrganizationInventoryOnboardingCloudMonitoringExportEvent](docs/cloudmonitoring/README.md#createorganizationinventoryonboardingcloudmonitoringexportevent) - Imports event logs related to the onboarding app into elastisearch
* [createOrganizationInventoryOnboardingCloudMonitoringImport](docs/cloudmonitoring/README.md#createorganizationinventoryonboardingcloudmonitoringimport) - Commits the import operation to complete the onboarding of a device into Dashboard for monitoring.
* [createOrganizationInventoryOnboardingCloudMonitoringPrepare](docs/cloudmonitoring/README.md#createorganizationinventoryonboardingcloudmonitoringprepare) - Initiates or updates an import session
* [getOrganizationInventoryOnboardingCloudMonitoringImports](docs/cloudmonitoring/README.md#getorganizationinventoryonboardingcloudmonitoringimports) - Check the status of a committed Import operation
* [getOrganizationInventoryOnboardingCloudMonitoringNetworks](docs/cloudmonitoring/README.md#getorganizationinventoryonboardingcloudmonitoringnetworks) - Returns list of networks eligible for adding cloud monitored device

### [configTemplates](docs/configtemplates/README.md)

* [createOrganizationConfigTemplate](docs/configtemplates/README.md#createorganizationconfigtemplate) - Create a new configuration template
* [deleteOrganizationConfigTemplate](docs/configtemplates/README.md#deleteorganizationconfigtemplate) - Remove a configuration template
* [getOrganizationConfigTemplate](docs/configtemplates/README.md#getorganizationconfigtemplate) - Return a single configuration template
* [getOrganizationConfigTemplateSwitchProfilePort](docs/configtemplates/README.md#getorganizationconfigtemplateswitchprofileport) - Return a switch profile port
* [getOrganizationConfigTemplateSwitchProfilePorts](docs/configtemplates/README.md#getorganizationconfigtemplateswitchprofileports) - Return all the ports of a switch profile
* [getOrganizationConfigTemplateSwitchProfiles](docs/configtemplates/README.md#getorganizationconfigtemplateswitchprofiles) - List the switch profiles for your switch template configuration
* [getOrganizationConfigTemplates](docs/configtemplates/README.md#getorganizationconfigtemplates) - List the configuration templates for this organization
* [updateOrganizationConfigTemplate](docs/configtemplates/README.md#updateorganizationconfigtemplate) - Update a configuration template
* [updateOrganizationConfigTemplateSwitchProfilePort](docs/configtemplates/README.md#updateorganizationconfigtemplateswitchprofileport) - Update a switch profile port

### [configurationChanges](docs/configurationchanges/README.md)

* [getOrganizationConfigurationChanges](docs/configurationchanges/README.md#getorganizationconfigurationchanges) - View the Change Log for your organization

### [configure](docs/configure/README.md)

* [addNetworkSwitchStack](docs/configure/README.md#addnetworkswitchstack) - Add a switch to a stack
* [assignOrganizationLicensesSeats](docs/configure/README.md#assignorganizationlicensesseats) - Assign SM seats to a network
* [bindNetwork](docs/configure/README.md#bindnetwork) - Bind a network to a template.
* [checkinNetworkSmDevices](docs/configure/README.md#checkinnetworksmdevices) - Force check-in a set of devices
* [claimIntoOrganization](docs/configure/README.md#claimintoorganization) - Claim a list of devices, licenses, and/or orders into an organization
* [claimIntoOrganizationInventory](docs/configure/README.md#claimintoorganizationinventory) - Claim a list of devices, licenses, and/or orders into an organization inventory
* [claimNetworkDevices](docs/configure/README.md#claimnetworkdevices) - Claim devices into a network. (Note: for recently claimed devices, it may take a few minutes for API requsts against that device to succeed)
* [cloneOrganization](docs/configure/README.md#cloneorganization) - Create a new organization by cloning the addressed organization
* [cloneOrganizationSwitchDevices](docs/configure/README.md#cloneorganizationswitchdevices) - Clone port-level and some switch-level configuration settings from a source switch to one or more target switches
* [combineOrganizationNetworks](docs/configure/README.md#combineorganizationnetworks) - Combine multiple networks into a single network
* [createDeviceApplianceVmxAuthenticationToken](docs/configure/README.md#createdeviceappliancevmxauthenticationtoken) - Generate a new vMX authentication token
* [createDeviceSwitchRoutingInterface](docs/configure/README.md#createdeviceswitchroutinginterface) - Create a layer 3 interface for a switch
* [createDeviceSwitchRoutingStaticRoute](docs/configure/README.md#createdeviceswitchroutingstaticroute) - Create a layer 3 static route for a switch
* [createNetworkAppliancePrefixesDelegatedStatic](docs/configure/README.md#createnetworkapplianceprefixesdelegatedstatic) - Add a static delegated prefix from a network
* [createNetworkApplianceStaticRoute](docs/configure/README.md#createnetworkappliancestaticroute) - Add a static route for an MX or teleworker network
* [createNetworkApplianceTrafficShapingCustomPerformanceClass](docs/configure/README.md#createnetworkappliancetrafficshapingcustomperformanceclass) - Add a custom performance class for an MX network
* [createNetworkApplianceVlan](docs/configure/README.md#createnetworkappliancevlan) - Add a VLAN
* [createNetworkCameraQualityRetentionProfile](docs/configure/README.md#createnetworkcameraqualityretentionprofile) - Creates new quality retention profile for this network.
* [createNetworkCameraWirelessProfile](docs/configure/README.md#createnetworkcamerawirelessprofile) - Creates a new camera wireless profile for this network.
* [createNetworkFirmwareUpgradesRollback](docs/configure/README.md#createnetworkfirmwareupgradesrollback) - Rollback a Firmware Upgrade For A Network
* [createNetworkFirmwareUpgradesStagedEvent](docs/configure/README.md#createnetworkfirmwareupgradesstagedevent) - Create a Staged Upgrade Event for a network
* [createNetworkFirmwareUpgradesStagedGroup](docs/configure/README.md#createnetworkfirmwareupgradesstagedgroup) - Create a Staged Upgrade Group for a network
* [createNetworkFloorPlan](docs/configure/README.md#createnetworkfloorplan) - Upload a floor plan
* [createNetworkGroupPolicy](docs/configure/README.md#createnetworkgrouppolicy) - Create a group policy
* [createNetworkMerakiAuthUser](docs/configure/README.md#createnetworkmerakiauthuser) - Authorize a user configured with Meraki Authentication for a network (currently supports 802.1X, splash guest, and client VPN users, and currently, organizations have a 50,000 user cap)
* [createNetworkMqttBroker](docs/configure/README.md#createnetworkmqttbroker) - Add an MQTT broker
* [createNetworkPiiRequest](docs/configure/README.md#createnetworkpiirequest) - Submit a new delete or restrict processing PII request
* [createNetworkSensorAlertsProfile](docs/configure/README.md#createnetworksensoralertsprofile) - Creates a sensor alert profile for a network.
* [createNetworkSmBypassActivationLockAttempt](docs/configure/README.md#createnetworksmbypassactivationlockattempt) - Bypass activation lock attempt
* [createNetworkSmTargetGroup](docs/configure/README.md#createnetworksmtargetgroup) - Add a target group
* [createNetworkSwitchAccessPolicy](docs/configure/README.md#createnetworkswitchaccesspolicy) - Create an access policy for a switch network
* [createNetworkSwitchDhcpServerPolicyArpInspectionTrustedServer](docs/configure/README.md#createnetworkswitchdhcpserverpolicyarpinspectiontrustedserver) - Add a server to be trusted by Dynamic ARP Inspection on this network
* [createNetworkSwitchLinkAggregation](docs/configure/README.md#createnetworkswitchlinkaggregation) - Create a link aggregation group
* [createNetworkSwitchPortSchedule](docs/configure/README.md#createnetworkswitchportschedule) - Add a switch port schedule
* [createNetworkSwitchQosRule](docs/configure/README.md#createnetworkswitchqosrule) - Add a quality of service rule
* [createNetworkSwitchRoutingMulticastRendezvousPoint](docs/configure/README.md#createnetworkswitchroutingmulticastrendezvouspoint) - Create a multicast rendezvous point
* [createNetworkSwitchStack](docs/configure/README.md#createnetworkswitchstack) - Create a stack
* [createNetworkSwitchStackRoutingInterface](docs/configure/README.md#createnetworkswitchstackroutinginterface) - Create a layer 3 interface for a switch stack
* [createNetworkSwitchStackRoutingStaticRoute](docs/configure/README.md#createnetworkswitchstackroutingstaticroute) - Create a layer 3 static route for a switch stack
* [createNetworkWebhooksHttpServer](docs/configure/README.md#createnetworkwebhookshttpserver) - Add an HTTP server to a network
* [createNetworkWebhooksPayloadTemplate](docs/configure/README.md#createnetworkwebhookspayloadtemplate) - Create a webhook payload template for a network
* [createNetworkWebhooksWebhookTest](docs/configure/README.md#createnetworkwebhookswebhooktest) - Send a test webhook for a network
* [createNetworkWirelessRfProfile](docs/configure/README.md#createnetworkwirelessrfprofile) - Creates new RF profile for this network
* [createNetworkWirelessSsidIdentityPsk](docs/configure/README.md#createnetworkwirelessssididentitypsk) - Create an Identity PSK
* [createOrganization](docs/configure/README.md#createorganization) - Create a new organization
* [createOrganizationActionBatch](docs/configure/README.md#createorganizationactionbatch) - Create an action batch
* [createOrganizationAdaptivePolicyAcl](docs/configure/README.md#createorganizationadaptivepolicyacl) - Creates new adaptive policy ACL
* [createOrganizationAdaptivePolicyGroup](docs/configure/README.md#createorganizationadaptivepolicygroup) - Creates a new adaptive policy group
* [createOrganizationAdaptivePolicyPolicy](docs/configure/README.md#createorganizationadaptivepolicypolicy) - Add an Adaptive Policy
* [createOrganizationAdmin](docs/configure/README.md#createorganizationadmin) - Create a new dashboard administrator
* [createOrganizationAlertsProfile](docs/configure/README.md#createorganizationalertsprofile) - Create an organization-wide alert configuration
* [createOrganizationBrandingPolicy](docs/configure/README.md#createorganizationbrandingpolicy) - Add a new branding policy to an organization
* [createOrganizationCameraCustomAnalyticsArtifact](docs/configure/README.md#createorganizationcameracustomanalyticsartifact) - Create custom analytics artifact
* [createOrganizationConfigTemplate](docs/configure/README.md#createorganizationconfigtemplate) - Create a new configuration template
* [createOrganizationEarlyAccessFeaturesOptIn](docs/configure/README.md#createorganizationearlyaccessfeaturesoptin) - Create a new early access feature opt-in for an organization
* [createOrganizationInsightMonitoredMediaServer](docs/configure/README.md#createorganizationinsightmonitoredmediaserver) - Add a media server to be monitored for this organization
* [createOrganizationInventoryOnboardingCloudMonitoringExportEvent](docs/configure/README.md#createorganizationinventoryonboardingcloudmonitoringexportevent) - Imports event logs related to the onboarding app into elastisearch
* [createOrganizationInventoryOnboardingCloudMonitoringImport](docs/configure/README.md#createorganizationinventoryonboardingcloudmonitoringimport) - Commits the import operation to complete the onboarding of a device into Dashboard for monitoring.
* [createOrganizationInventoryOnboardingCloudMonitoringPrepare](docs/configure/README.md#createorganizationinventoryonboardingcloudmonitoringprepare) - Initiates or updates an import session
* [createOrganizationNetwork](docs/configure/README.md#createorganizationnetwork) - Create a network
* [createOrganizationPolicyObject](docs/configure/README.md#createorganizationpolicyobject) - Creates a new Policy Object.
* [createOrganizationPolicyObjectsGroup](docs/configure/README.md#createorganizationpolicyobjectsgroup) - Creates a new Policy Object Group.
* [createOrganizationSamlIdp](docs/configure/README.md#createorganizationsamlidp) - Create a SAML IdP for your organization.
* [createOrganizationSamlRole](docs/configure/README.md#createorganizationsamlrole) - Create a SAML role
* [deferNetworkFirmwareUpgradesStagedEvents](docs/configure/README.md#defernetworkfirmwareupgradesstagedevents) - Postpone by 1 week all pending staged upgrade stages for a network
* [deleteDeviceSwitchRoutingInterface](docs/configure/README.md#deletedeviceswitchroutinginterface) - Delete a layer 3 interface from the switch
* [deleteDeviceSwitchRoutingStaticRoute](docs/configure/README.md#deletedeviceswitchroutingstaticroute) - Delete a layer 3 static route for a switch
* [deleteNetwork](docs/configure/README.md#deletenetwork) - Delete a network
* [deleteNetworkAppliancePrefixesDelegatedStatic](docs/configure/README.md#deletenetworkapplianceprefixesdelegatedstatic) - Delete a static delegated prefix from a network
* [deleteNetworkApplianceStaticRoute](docs/configure/README.md#deletenetworkappliancestaticroute) - Delete a static route from an MX or teleworker network
* [deleteNetworkApplianceTrafficShapingCustomPerformanceClass](docs/configure/README.md#deletenetworkappliancetrafficshapingcustomperformanceclass) - Delete a custom performance class from an MX network
* [deleteNetworkApplianceVlan](docs/configure/README.md#deletenetworkappliancevlan) - Delete a VLAN from a network
* [deleteNetworkCameraQualityRetentionProfile](docs/configure/README.md#deletenetworkcameraqualityretentionprofile) - Delete an existing quality retention profile for this network.
* [deleteNetworkCameraWirelessProfile](docs/configure/README.md#deletenetworkcamerawirelessprofile) - Delete an existing camera wireless profile for this network.
* [deleteNetworkFirmwareUpgradesStagedGroup](docs/configure/README.md#deletenetworkfirmwareupgradesstagedgroup) - Delete a Staged Upgrade Group
* [deleteNetworkFloorPlan](docs/configure/README.md#deletenetworkfloorplan) - Destroy a floor plan
* [deleteNetworkGroupPolicy](docs/configure/README.md#deletenetworkgrouppolicy) - Delete a group policy
* [deleteNetworkMerakiAuthUser](docs/configure/README.md#deletenetworkmerakiauthuser) - Deauthorize a user
* [deleteNetworkMqttBroker](docs/configure/README.md#deletenetworkmqttbroker) - Delete an MQTT broker
* [deleteNetworkPiiRequest](docs/configure/README.md#deletenetworkpiirequest) - Delete a restrict processing PII request
* [deleteNetworkSensorAlertsProfile](docs/configure/README.md#deletenetworksensoralertsprofile) - Deletes a sensor alert profile from a network.
* [deleteNetworkSmTargetGroup](docs/configure/README.md#deletenetworksmtargetgroup) - Delete a target group from a network
* [deleteNetworkSmUserAccessDevice](docs/configure/README.md#deletenetworksmuseraccessdevice) - Delete a User Access Device
* [deleteNetworkSwitchAccessPolicy](docs/configure/README.md#deletenetworkswitchaccesspolicy) - Delete an access policy for a switch network
* [deleteNetworkSwitchDhcpServerPolicyArpInspectionTrustedServer](docs/configure/README.md#deletenetworkswitchdhcpserverpolicyarpinspectiontrustedserver) - Remove a server from being trusted by Dynamic ARP Inspection on this network
* [deleteNetworkSwitchLinkAggregation](docs/configure/README.md#deletenetworkswitchlinkaggregation) - Split a link aggregation group into separate ports
* [deleteNetworkSwitchPortSchedule](docs/configure/README.md#deletenetworkswitchportschedule) - Delete a switch port schedule
* [deleteNetworkSwitchQosRule](docs/configure/README.md#deletenetworkswitchqosrule) - Delete a quality of service rule
* [deleteNetworkSwitchRoutingMulticastRendezvousPoint](docs/configure/README.md#deletenetworkswitchroutingmulticastrendezvouspoint) - Delete a multicast rendezvous point
* [deleteNetworkSwitchStack](docs/configure/README.md#deletenetworkswitchstack) - Delete a stack
* [deleteNetworkSwitchStackRoutingInterface](docs/configure/README.md#deletenetworkswitchstackroutinginterface) - Delete a layer 3 interface from a switch stack
* [deleteNetworkSwitchStackRoutingStaticRoute](docs/configure/README.md#deletenetworkswitchstackroutingstaticroute) - Delete a layer 3 static route for a switch stack
* [deleteNetworkWebhooksHttpServer](docs/configure/README.md#deletenetworkwebhookshttpserver) - Delete an HTTP server from a network
* [deleteNetworkWebhooksPayloadTemplate](docs/configure/README.md#deletenetworkwebhookspayloadtemplate) - Destroy a webhook payload template for a network
* [deleteNetworkWirelessRfProfile](docs/configure/README.md#deletenetworkwirelessrfprofile) - Delete a RF Profile
* [deleteNetworkWirelessSsidIdentityPsk](docs/configure/README.md#deletenetworkwirelessssididentitypsk) - Delete an Identity PSK
* [deleteOrganization](docs/configure/README.md#deleteorganization) - Delete an organization
* [deleteOrganizationActionBatch](docs/configure/README.md#deleteorganizationactionbatch) - Delete an action batch
* [deleteOrganizationAdaptivePolicyAcl](docs/configure/README.md#deleteorganizationadaptivepolicyacl) - Deletes the specified adaptive policy ACL
* [deleteOrganizationAdaptivePolicyGroup](docs/configure/README.md#deleteorganizationadaptivepolicygroup) - Deletes the specified adaptive policy group and any associated policies and references
* [deleteOrganizationAdaptivePolicyPolicy](docs/configure/README.md#deleteorganizationadaptivepolicypolicy) - Delete an Adaptive Policy
* [deleteOrganizationAdmin](docs/configure/README.md#deleteorganizationadmin) - Revoke all access for a dashboard administrator within this organization
* [deleteOrganizationAlertsProfile](docs/configure/README.md#deleteorganizationalertsprofile) - Removes an organization-wide alert config
* [deleteOrganizationBrandingPolicy](docs/configure/README.md#deleteorganizationbrandingpolicy) - Delete a branding policy
* [deleteOrganizationCameraCustomAnalyticsArtifact](docs/configure/README.md#deleteorganizationcameracustomanalyticsartifact) - Delete Custom Analytics Artifact
* [deleteOrganizationConfigTemplate](docs/configure/README.md#deleteorganizationconfigtemplate) - Remove a configuration template
* [deleteOrganizationEarlyAccessFeaturesOptIn](docs/configure/README.md#deleteorganizationearlyaccessfeaturesoptin) - Delete an early access feature opt-in
* [deleteOrganizationInsightMonitoredMediaServer](docs/configure/README.md#deleteorganizationinsightmonitoredmediaserver) - Delete a monitored media server from this organization
* [deleteOrganizationPolicyObject](docs/configure/README.md#deleteorganizationpolicyobject) - Deletes a Policy Object.
* [deleteOrganizationPolicyObjectsGroup](docs/configure/README.md#deleteorganizationpolicyobjectsgroup) - Deletes a Policy Object Group.
* [deleteOrganizationSamlIdp](docs/configure/README.md#deleteorganizationsamlidp) - Remove a SAML IdP in your organization.
* [deleteOrganizationSamlRole](docs/configure/README.md#deleteorganizationsamlrole) - Remove a SAML role
* [deleteOrganizationUser](docs/configure/README.md#deleteorganizationuser) - Delete a user and all of its authentication methods.
* [getDevice](docs/configure/README.md#getdevice) - Return a single device
* [getDeviceApplianceUplinksSettings](docs/configure/README.md#getdeviceapplianceuplinkssettings) - Return the uplink settings for an MX appliance
* [getDeviceCameraCustomAnalytics](docs/configure/README.md#getdevicecameracustomanalytics) - Return custom analytics settings for a camera
* [getDeviceCameraQualityAndRetention](docs/configure/README.md#getdevicecameraqualityandretention) - Returns quality and retention settings for the given camera
* [getDeviceCameraSense](docs/configure/README.md#getdevicecamerasense) - Returns sense settings for a given camera
* [getDeviceCameraSenseObjectDetectionModels](docs/configure/README.md#getdevicecamerasenseobjectdetectionmodels) - Returns the MV Sense object detection model list for the given camera
* [getDeviceCameraVideoLink](docs/configure/README.md#getdevicecameravideolink) - Returns video link to the specified camera
* [getDeviceCameraVideoSettings](docs/configure/README.md#getdevicecameravideosettings) - Returns video settings for the given camera
* [getDeviceCameraWirelessProfiles](docs/configure/README.md#getdevicecamerawirelessprofiles) - Returns wireless profile assigned to the given camera
* [getDeviceCellularGatewayLan](docs/configure/README.md#getdevicecellulargatewaylan) - Show the LAN Settings of a MG
* [getDeviceCellularGatewayPortForwardingRules](docs/configure/README.md#getdevicecellulargatewayportforwardingrules) - Returns the port forwarding rules for a single MG.
* [getDeviceCellularSims](docs/configure/README.md#getdevicecellularsims) - Return the SIM and APN configurations for a cellular device.
* [getDeviceManagementInterface](docs/configure/README.md#getdevicemanagementinterface) - Return the management interface settings for a device
* [getDeviceSensorRelationships](docs/configure/README.md#getdevicesensorrelationships) - List the sensor roles for a given sensor or camera device.
* [getDeviceSwitchPort](docs/configure/README.md#getdeviceswitchport) - Return a switch port
* [getDeviceSwitchPorts](docs/configure/README.md#getdeviceswitchports) - List the switch ports for a switch
* [getDeviceSwitchRoutingInterface](docs/configure/README.md#getdeviceswitchroutinginterface) - Return a layer 3 interface for a switch
* [getDeviceSwitchRoutingInterfaceDhcp](docs/configure/README.md#getdeviceswitchroutinginterfacedhcp) - Return a layer 3 interface DHCP configuration for a switch
* [getDeviceSwitchRoutingInterfaces](docs/configure/README.md#getdeviceswitchroutinginterfaces) - List layer 3 interfaces for a switch
* [getDeviceSwitchRoutingStaticRoute](docs/configure/README.md#getdeviceswitchroutingstaticroute) - Return a layer 3 static route for a switch
* [getDeviceSwitchRoutingStaticRoutes](docs/configure/README.md#getdeviceswitchroutingstaticroutes) - List layer 3 static routes for a switch
* [getDeviceSwitchWarmSpare](docs/configure/README.md#getdeviceswitchwarmspare) - Return warm spare configuration for a switch
* [getDeviceWirelessBluetoothSettings](docs/configure/README.md#getdevicewirelessbluetoothsettings) - Return the bluetooth settings for a wireless device
* [getDeviceWirelessRadioSettings](docs/configure/README.md#getdevicewirelessradiosettings) - Return the radio settings of a device
* [getNetwork](docs/configure/README.md#getnetwork) - Return a network
* [getNetworkAlertsSettings](docs/configure/README.md#getnetworkalertssettings) - Return the alert configuration for this network
* [getNetworkApplianceConnectivityMonitoringDestinations](docs/configure/README.md#getnetworkapplianceconnectivitymonitoringdestinations) - Return the connectivity testing destinations for an MX network
* [getNetworkApplianceContentFiltering](docs/configure/README.md#getnetworkappliancecontentfiltering) - Return the content filtering settings for an MX network
* [getNetworkApplianceContentFilteringCategories](docs/configure/README.md#getnetworkappliancecontentfilteringcategories) - List all available content filtering categories for an MX network
* [getNetworkApplianceFirewallCellularFirewallRules](docs/configure/README.md#getnetworkappliancefirewallcellularfirewallrules) - Return the cellular firewall rules for an MX network
* [getNetworkApplianceFirewallFirewalledService](docs/configure/README.md#getnetworkappliancefirewallfirewalledservice) - Return the accessibility settings of the given service ('ICMP', 'web', or 'SNMP')
* [getNetworkApplianceFirewallFirewalledServices](docs/configure/README.md#getnetworkappliancefirewallfirewalledservices) - List the appliance services and their accessibility rules
* [getNetworkApplianceFirewallInboundCellularFirewallRules](docs/configure/README.md#getnetworkappliancefirewallinboundcellularfirewallrules) - Return the inbound cellular firewall rules for an MX network
* [getNetworkApplianceFirewallInboundFirewallRules](docs/configure/README.md#getnetworkappliancefirewallinboundfirewallrules) - Return the inbound firewall rules for an MX network
* [getNetworkApplianceFirewallL3FirewallRules](docs/configure/README.md#getnetworkappliancefirewalll3firewallrules) - Return the L3 firewall rules for an MX network
* [getNetworkApplianceFirewallL7FirewallRules](docs/configure/README.md#getnetworkappliancefirewalll7firewallrules) - List the MX L7 firewall rules for an MX network
* [getNetworkApplianceFirewallL7FirewallRulesApplicationCategories](docs/configure/README.md#getnetworkappliancefirewalll7firewallrulesapplicationcategories) - Return the L7 firewall application categories and their associated applications for an MX network
* [getNetworkApplianceFirewallOneToManyNatRules](docs/configure/README.md#getnetworkappliancefirewallonetomanynatrules) - Return the 1:Many NAT mapping rules for an MX network
* [getNetworkApplianceFirewallOneToOneNatRules](docs/configure/README.md#getnetworkappliancefirewallonetoonenatrules) - Return the 1:1 NAT mapping rules for an MX network
* [getNetworkApplianceFirewallPortForwardingRules](docs/configure/README.md#getnetworkappliancefirewallportforwardingrules) - Return the port forwarding rules for an MX network
* [getNetworkApplianceFirewallSettings](docs/configure/README.md#getnetworkappliancefirewallsettings) - Return the firewall settings for this network
* [getNetworkAppliancePort](docs/configure/README.md#getnetworkapplianceport) - Return per-port VLAN settings for a single MX port.
* [getNetworkAppliancePorts](docs/configure/README.md#getnetworkapplianceports) - List per-port VLAN settings for all ports of a MX.
* [getNetworkAppliancePrefixesDelegatedStatic](docs/configure/README.md#getnetworkapplianceprefixesdelegatedstatic) - Return a static delegated prefix from a network
* [getNetworkAppliancePrefixesDelegatedStatics](docs/configure/README.md#getnetworkapplianceprefixesdelegatedstatics) - List static delegated prefixes for a network
* [getNetworkApplianceSecurityIntrusion](docs/configure/README.md#getnetworkappliancesecurityintrusion) - Returns all supported intrusion settings for an MX network
* [getNetworkApplianceSecurityMalware](docs/configure/README.md#getnetworkappliancesecuritymalware) - Returns all supported malware settings for an MX network
* [getNetworkApplianceSettings](docs/configure/README.md#getnetworkappliancesettings) - Return the appliance settings for a network
* [getNetworkApplianceSingleLan](docs/configure/README.md#getnetworkappliancesinglelan) - Return single LAN configuration
* [getNetworkApplianceSsid](docs/configure/README.md#getnetworkappliancessid) - Return a single MX SSID
* [getNetworkApplianceSsids](docs/configure/README.md#getnetworkappliancessids) - List the MX SSIDs in a network
* [getNetworkApplianceStaticRoute](docs/configure/README.md#getnetworkappliancestaticroute) - Return a static route for an MX or teleworker network
* [getNetworkApplianceStaticRoutes](docs/configure/README.md#getnetworkappliancestaticroutes) - List the static routes for an MX or teleworker network
* [getNetworkApplianceTrafficShaping](docs/configure/README.md#getnetworkappliancetrafficshaping) - Display the traffic shaping settings for an MX network
* [getNetworkApplianceTrafficShapingCustomPerformanceClass](docs/configure/README.md#getnetworkappliancetrafficshapingcustomperformanceclass) - Return a custom performance class for an MX network
* [getNetworkApplianceTrafficShapingCustomPerformanceClasses](docs/configure/README.md#getnetworkappliancetrafficshapingcustomperformanceclasses) - List all custom performance classes for an MX network
* [getNetworkApplianceTrafficShapingRules](docs/configure/README.md#getnetworkappliancetrafficshapingrules) - Display the traffic shaping settings rules for an MX network
* [getNetworkApplianceTrafficShapingUplinkBandwidth](docs/configure/README.md#getnetworkappliancetrafficshapinguplinkbandwidth) - Returns the uplink bandwidth limits for your MX network
* [getNetworkApplianceTrafficShapingUplinkSelection](docs/configure/README.md#getnetworkappliancetrafficshapinguplinkselection) - Show uplink selection settings for an MX network
* [getNetworkApplianceVlan](docs/configure/README.md#getnetworkappliancevlan) - Return a VLAN
* [getNetworkApplianceVlans](docs/configure/README.md#getnetworkappliancevlans) - List the VLANs for an MX network
* [getNetworkApplianceVlansSettings](docs/configure/README.md#getnetworkappliancevlanssettings) - Returns the enabled status of VLANs for the network
* [getNetworkApplianceVpnBgp](docs/configure/README.md#getnetworkappliancevpnbgp) - Return a Hub BGP Configuration
* [getNetworkApplianceVpnSiteToSiteVpn](docs/configure/README.md#getnetworkappliancevpnsitetositevpn) - Return the site-to-site VPN settings of a network
* [getNetworkApplianceWarmSpare](docs/configure/README.md#getnetworkappliancewarmspare) - Return MX warm spare settings
* [getNetworkCameraQualityRetentionProfile](docs/configure/README.md#getnetworkcameraqualityretentionprofile) - Retrieve a single quality retention profile
* [getNetworkCameraQualityRetentionProfiles](docs/configure/README.md#getnetworkcameraqualityretentionprofiles) - List the quality retention profiles for this network
* [getNetworkCameraSchedules](docs/configure/README.md#getnetworkcameraschedules) - Returns a list of all camera recording schedules.
* [getNetworkCameraWirelessProfile](docs/configure/README.md#getnetworkcamerawirelessprofile) - Retrieve a single camera wireless profile.
* [getNetworkCameraWirelessProfiles](docs/configure/README.md#getnetworkcamerawirelessprofiles) - List the camera wireless profiles for this network.
* [getNetworkCellularGatewayConnectivityMonitoringDestinations](docs/configure/README.md#getnetworkcellulargatewayconnectivitymonitoringdestinations) - Return the connectivity testing destinations for an MG network
* [getNetworkCellularGatewayDhcp](docs/configure/README.md#getnetworkcellulargatewaydhcp) - List common DHCP settings of MGs
* [getNetworkCellularGatewaySubnetPool](docs/configure/README.md#getnetworkcellulargatewaysubnetpool) - Return the subnet pool and mask configured for MGs in the network.
* [getNetworkCellularGatewayUplink](docs/configure/README.md#getnetworkcellulargatewayuplink) - Returns the uplink settings for your MG network.
* [getNetworkClientPolicy](docs/configure/README.md#getnetworkclientpolicy) - Return the policy assigned to a client on the network
* [getNetworkClientSplashAuthorizationStatus](docs/configure/README.md#getnetworkclientsplashauthorizationstatus) - Return the splash authorization for a client, for each SSID they've associated with through splash
* [getNetworkDevices](docs/configure/README.md#getnetworkdevices) - List the devices in a network
* [getNetworkFirmwareUpgrades](docs/configure/README.md#getnetworkfirmwareupgrades) - Get firmware upgrade information for a network
* [getNetworkFirmwareUpgradesStagedEvents](docs/configure/README.md#getnetworkfirmwareupgradesstagedevents) - Get the Staged Upgrade Event from a network
* [getNetworkFirmwareUpgradesStagedGroup](docs/configure/README.md#getnetworkfirmwareupgradesstagedgroup) - Get a Staged Upgrade Group from a network
* [getNetworkFirmwareUpgradesStagedGroups](docs/configure/README.md#getnetworkfirmwareupgradesstagedgroups) - List of Staged Upgrade Groups in a network
* [getNetworkFirmwareUpgradesStagedStages](docs/configure/README.md#getnetworkfirmwareupgradesstagedstages) - Order of Staged Upgrade Groups in a network
* [getNetworkFloorPlan](docs/configure/README.md#getnetworkfloorplan) - Find a floor plan by ID
* [getNetworkFloorPlans](docs/configure/README.md#getnetworkfloorplans) - List the floor plans that belong to your network
* [getNetworkGroupPolicies](docs/configure/README.md#getnetworkgrouppolicies) - List the group policies in a network
* [getNetworkGroupPolicy](docs/configure/README.md#getnetworkgrouppolicy) - Display a group policy
* [getNetworkHealthAlerts](docs/configure/README.md#getnetworkhealthalerts) - Return all global alerts on this network
* [getNetworkMerakiAuthUser](docs/configure/README.md#getnetworkmerakiauthuser) - Return the Meraki Auth splash guest, RADIUS, or client VPN user
* [getNetworkMerakiAuthUsers](docs/configure/README.md#getnetworkmerakiauthusers) - List the users configured under Meraki Authentication for a network (splash guest or RADIUS users for a wireless network, or client VPN users for a wired network)
* [getNetworkMqttBroker](docs/configure/README.md#getnetworkmqttbroker) - Return an MQTT broker
* [getNetworkMqttBrokers](docs/configure/README.md#getnetworkmqttbrokers) - List the MQTT brokers for this network
* [getNetworkNetflow](docs/configure/README.md#getnetworknetflow) - Return the NetFlow traffic reporting settings for a network
* [getNetworkPiiPiiKeys](docs/configure/README.md#getnetworkpiipiikeys) - List the keys required to access Personally Identifiable Information (PII) for a given identifier
* [getNetworkPiiRequest](docs/configure/README.md#getnetworkpiirequest) - Return a PII request
* [getNetworkPiiRequests](docs/configure/README.md#getnetworkpiirequests) - List the PII requests for this network or organization
* [getNetworkPiiSmDevicesForKey](docs/configure/README.md#getnetworkpiismdevicesforkey) - Given a piece of Personally Identifiable Information (PII), return the Systems Manager device ID(s) associated with that identifier
* [getNetworkPiiSmOwnersForKey](docs/configure/README.md#getnetworkpiismownersforkey) - Given a piece of Personally Identifiable Information (PII), return the Systems Manager owner ID(s) associated with that identifier
* [getNetworkPoliciesByClient](docs/configure/README.md#getnetworkpoliciesbyclient) - Get policies for all clients with policies
* [getNetworkSensorAlertsProfile](docs/configure/README.md#getnetworksensoralertsprofile) - Show details of a sensor alert profile for a network.
* [getNetworkSensorAlertsProfiles](docs/configure/README.md#getnetworksensoralertsprofiles) - Lists all sensor alert profiles for a network.
* [getNetworkSensorRelationships](docs/configure/README.md#getnetworksensorrelationships) - List the sensor roles for devices in a given network
* [getNetworkSettings](docs/configure/README.md#getnetworksettings) - Return the settings for a network
* [getNetworkSmBypassActivationLockAttempt](docs/configure/README.md#getnetworksmbypassactivationlockattempt) - Bypass activation lock attempt status
* [getNetworkSmDeviceCerts](docs/configure/README.md#getnetworksmdevicecerts) - List the certs on a device
* [getNetworkSmDeviceDeviceProfiles](docs/configure/README.md#getnetworksmdevicedeviceprofiles) - Get the installed profiles associated with a device
* [getNetworkSmDeviceNetworkAdapters](docs/configure/README.md#getnetworksmdevicenetworkadapters) - List the network adapters of a device
* [getNetworkSmDeviceRestrictions](docs/configure/README.md#getnetworksmdevicerestrictions) - List the restrictions on a device
* [getNetworkSmDeviceSecurityCenters](docs/configure/README.md#getnetworksmdevicesecuritycenters) - List the security centers on a device
* [getNetworkSmDeviceSoftwares](docs/configure/README.md#getnetworksmdevicesoftwares) - Get a list of softwares associated with a device
* [getNetworkSmDeviceWlanLists](docs/configure/README.md#getnetworksmdevicewlanlists) - List the saved SSID names on a device
* [getNetworkSmDevices](docs/configure/README.md#getnetworksmdevices) - List the devices enrolled in an SM network with various specified fields and filters
* [getNetworkSmProfiles](docs/configure/README.md#getnetworksmprofiles) - List all profiles in a network
* [getNetworkSmTargetGroup](docs/configure/README.md#getnetworksmtargetgroup) - Return a target group
* [getNetworkSmTargetGroups](docs/configure/README.md#getnetworksmtargetgroups) - List the target groups in this network
* [getNetworkSmTrustedAccessConfigs](docs/configure/README.md#getnetworksmtrustedaccessconfigs) - List Trusted Access Configs
* [getNetworkSmUserAccessDevices](docs/configure/README.md#getnetworksmuseraccessdevices) - List User Access Devices and its Trusted Access Connections
* [getNetworkSmUserDeviceProfiles](docs/configure/README.md#getnetworksmuserdeviceprofiles) - Get the profiles associated with a user
* [getNetworkSmUserSoftwares](docs/configure/README.md#getnetworksmusersoftwares) - Get a list of softwares associated with a user
* [getNetworkSmUsers](docs/configure/README.md#getnetworksmusers) - List the owners in an SM network with various specified fields and filters
* [getNetworkSnmp](docs/configure/README.md#getnetworksnmp) - Return the SNMP settings for a network
* [getNetworkSwitchAccessControlLists](docs/configure/README.md#getnetworkswitchaccesscontrollists) - Return the access control lists for a MS network
* [getNetworkSwitchAccessPolicies](docs/configure/README.md#getnetworkswitchaccesspolicies) - List the access policies for a switch network
* [getNetworkSwitchAccessPolicy](docs/configure/README.md#getnetworkswitchaccesspolicy) - Return a specific access policy for a switch network
* [getNetworkSwitchAlternateManagementInterface](docs/configure/README.md#getnetworkswitchalternatemanagementinterface) - Return the switch alternate management interface for the network
* [getNetworkSwitchDhcpServerPolicy](docs/configure/README.md#getnetworkswitchdhcpserverpolicy) - Return the DHCP server settings
* [getNetworkSwitchDhcpServerPolicyArpInspectionTrustedServers](docs/configure/README.md#getnetworkswitchdhcpserverpolicyarpinspectiontrustedservers) - Return the list of servers trusted by Dynamic ARP Inspection on this network
* [getNetworkSwitchDhcpServerPolicyArpInspectionWarningsByDevice](docs/configure/README.md#getnetworkswitchdhcpserverpolicyarpinspectionwarningsbydevice) - Return the devices that have a Dynamic ARP Inspection warning and their warnings
* [getNetworkSwitchDhcpV4ServersSeen](docs/configure/README.md#getnetworkswitchdhcpv4serversseen) - Return the network's DHCPv4 servers seen within the selected timeframe (default 1 day)
* [getNetworkSwitchDscpToCosMappings](docs/configure/README.md#getnetworkswitchdscptocosmappings) - Return the DSCP to CoS mappings
* [getNetworkSwitchLinkAggregations](docs/configure/README.md#getnetworkswitchlinkaggregations) - List link aggregation groups
* [getNetworkSwitchMtu](docs/configure/README.md#getnetworkswitchmtu) - Return the MTU configuration
* [getNetworkSwitchPortSchedules](docs/configure/README.md#getnetworkswitchportschedules) - List switch port schedules
* [getNetworkSwitchQosRule](docs/configure/README.md#getnetworkswitchqosrule) - Return a quality of service rule
* [getNetworkSwitchQosRules](docs/configure/README.md#getnetworkswitchqosrules) - List quality of service rules
* [getNetworkSwitchQosRulesOrder](docs/configure/README.md#getnetworkswitchqosrulesorder) - Return the quality of service rule IDs by order in which they will be processed by the switch
* [getNetworkSwitchRoutingMulticast](docs/configure/README.md#getnetworkswitchroutingmulticast) - Return multicast settings for a network
* [getNetworkSwitchRoutingMulticastRendezvousPoint](docs/configure/README.md#getnetworkswitchroutingmulticastrendezvouspoint) - Return a multicast rendezvous point
* [getNetworkSwitchRoutingMulticastRendezvousPoints](docs/configure/README.md#getnetworkswitchroutingmulticastrendezvouspoints) - List multicast rendezvous points
* [getNetworkSwitchRoutingOspf](docs/configure/README.md#getnetworkswitchroutingospf) - Return layer 3 OSPF routing configuration
* [getNetworkSwitchSettings](docs/configure/README.md#getnetworkswitchsettings) - Returns the switch network settings
* [getNetworkSwitchStack](docs/configure/README.md#getnetworkswitchstack) - Show a switch stack
* [getNetworkSwitchStackRoutingInterface](docs/configure/README.md#getnetworkswitchstackroutinginterface) - Return a layer 3 interface from a switch stack
* [getNetworkSwitchStackRoutingInterfaceDhcp](docs/configure/README.md#getnetworkswitchstackroutinginterfacedhcp) - Return a layer 3 interface DHCP configuration for a switch stack
* [getNetworkSwitchStackRoutingInterfaces](docs/configure/README.md#getnetworkswitchstackroutinginterfaces) - List layer 3 interfaces for a switch stack
* [getNetworkSwitchStackRoutingStaticRoute](docs/configure/README.md#getnetworkswitchstackroutingstaticroute) - Return a layer 3 static route for a switch stack
* [getNetworkSwitchStackRoutingStaticRoutes](docs/configure/README.md#getnetworkswitchstackroutingstaticroutes) - List layer 3 static routes for a switch stack
* [getNetworkSwitchStacks](docs/configure/README.md#getnetworkswitchstacks) - List the switch stacks in a network
* [getNetworkSwitchStormControl](docs/configure/README.md#getnetworkswitchstormcontrol) - Return the storm control configuration for a switch network
* [getNetworkSwitchStp](docs/configure/README.md#getnetworkswitchstp) - Returns STP settings
* [getNetworkSyslogServers](docs/configure/README.md#getnetworksyslogservers) - List the syslog servers for a network
* [getNetworkTrafficAnalysis](docs/configure/README.md#getnetworktrafficanalysis) - Return the traffic analysis settings for a network
* [getNetworkTrafficShapingApplicationCategories](docs/configure/README.md#getnetworktrafficshapingapplicationcategories) - Returns the application categories for traffic shaping rules.
* [getNetworkTrafficShapingDscpTaggingOptions](docs/configure/README.md#getnetworktrafficshapingdscptaggingoptions) - Returns the available DSCP tagging options for your traffic shaping rules.
* [getNetworkWebhooksHttpServer](docs/configure/README.md#getnetworkwebhookshttpserver) - Return an HTTP server for a network
* [getNetworkWebhooksHttpServers](docs/configure/README.md#getnetworkwebhookshttpservers) - List the HTTP servers for a network
* [getNetworkWebhooksPayloadTemplate](docs/configure/README.md#getnetworkwebhookspayloadtemplate) - Get the webhook payload template for a network
* [getNetworkWebhooksPayloadTemplates](docs/configure/README.md#getnetworkwebhookspayloadtemplates) - List the webhook payload templates for a network
* [getNetworkWebhooksWebhookTest](docs/configure/README.md#getnetworkwebhookswebhooktest) - Return the status of a webhook test for a network
* [getNetworkWirelessAlternateManagementInterface](docs/configure/README.md#getnetworkwirelessalternatemanagementinterface) - Return alternate management interface and devices with IP assigned
* [getNetworkWirelessBilling](docs/configure/README.md#getnetworkwirelessbilling) - Return the billing settings of this network
* [getNetworkWirelessBluetoothSettings](docs/configure/README.md#getnetworkwirelessbluetoothsettings) - Return the Bluetooth settings for a network. <a href="https://documentation.meraki.com/MR/Bluetooth/Bluetooth_Low_Energy_(BLE)">Bluetooth settings</a> must be enabled on the network.
* [getNetworkWirelessRfProfile](docs/configure/README.md#getnetworkwirelessrfprofile) - Return a RF profile
* [getNetworkWirelessRfProfiles](docs/configure/README.md#getnetworkwirelessrfprofiles) - List the non-basic RF profiles for this network
* [getNetworkWirelessSettings](docs/configure/README.md#getnetworkwirelesssettings) - Return the wireless settings for a network
* [getNetworkWirelessSsid](docs/configure/README.md#getnetworkwirelessssid) - Return a single MR SSID
* [getNetworkWirelessSsidBonjourForwarding](docs/configure/README.md#getnetworkwirelessssidbonjourforwarding) - List the Bonjour forwarding setting and rules for the SSID
* [getNetworkWirelessSsidDeviceTypeGroupPolicies](docs/configure/README.md#getnetworkwirelessssiddevicetypegrouppolicies) - List the device type group policies for the SSID
* [getNetworkWirelessSsidEapOverride](docs/configure/README.md#getnetworkwirelessssideapoverride) - Return the EAP overridden parameters for an SSID
* [getNetworkWirelessSsidFirewallL3FirewallRules](docs/configure/README.md#getnetworkwirelessssidfirewalll3firewallrules) - Return the L3 firewall rules for an SSID on an MR network
* [getNetworkWirelessSsidFirewallL7FirewallRules](docs/configure/README.md#getnetworkwirelessssidfirewalll7firewallrules) - Return the L7 firewall rules for an SSID on an MR network
* [getNetworkWirelessSsidHotspot20](docs/configure/README.md#getnetworkwirelessssidhotspot20) - Return the Hotspot 2.0 settings for an SSID
* [getNetworkWirelessSsidIdentityPsk](docs/configure/README.md#getnetworkwirelessssididentitypsk) - Return an Identity PSK
* [getNetworkWirelessSsidIdentityPsks](docs/configure/README.md#getnetworkwirelessssididentitypsks) - List all Identity PSKs in a wireless network
* [getNetworkWirelessSsidSchedules](docs/configure/README.md#getnetworkwirelessssidschedules) - List the outage schedule for the SSID
* [getNetworkWirelessSsidSplashSettings](docs/configure/README.md#getnetworkwirelessssidsplashsettings) - Display the splash page settings for the given SSID
* [getNetworkWirelessSsidTrafficShapingRules](docs/configure/README.md#getnetworkwirelessssidtrafficshapingrules) - Display the traffic shaping settings for a SSID on an MR network
* [getNetworkWirelessSsidVpn](docs/configure/README.md#getnetworkwirelessssidvpn) - List the VPN settings for the SSID.
* [getNetworkWirelessSsids](docs/configure/README.md#getnetworkwirelessssids) - List the MR SSIDs in a network
* [getOrganization](docs/configure/README.md#getorganization) - Return an organization
* [getOrganizationActionBatch](docs/configure/README.md#getorganizationactionbatch) - Return an action batch
* [getOrganizationActionBatches](docs/configure/README.md#getorganizationactionbatches) - Return the list of action batches in the organization
* [getOrganizationAdaptivePolicyAcl](docs/configure/README.md#getorganizationadaptivepolicyacl) - Returns the adaptive policy ACL information
* [getOrganizationAdaptivePolicyAcls](docs/configure/README.md#getorganizationadaptivepolicyacls) - List adaptive policy ACLs in a organization
* [getOrganizationAdaptivePolicyGroup](docs/configure/README.md#getorganizationadaptivepolicygroup) - Returns an adaptive policy group
* [getOrganizationAdaptivePolicyGroups](docs/configure/README.md#getorganizationadaptivepolicygroups) - List adaptive policy groups in a organization
* [getOrganizationAdaptivePolicyPolicies](docs/configure/README.md#getorganizationadaptivepolicypolicies) - List adaptive policies in an organization
* [getOrganizationAdaptivePolicyPolicy](docs/configure/README.md#getorganizationadaptivepolicypolicy) - Return an adaptive policy
* [getOrganizationAdaptivePolicySettings](docs/configure/README.md#getorganizationadaptivepolicysettings) - Returns global adaptive policy settings in an organization
* [getOrganizationAdmins](docs/configure/README.md#getorganizationadmins) - List the dashboard administrators in this organization
* [getOrganizationAlertsProfiles](docs/configure/README.md#getorganizationalertsprofiles) - List all organization-wide alert configurations
* [getOrganizationApplianceSecurityIntrusion](docs/configure/README.md#getorganizationappliancesecurityintrusion) - Returns all supported intrusion settings for an organization
* [getOrganizationApplianceVPNThirdPartyVPNPeers](docs/configure/README.md#getorganizationappliancevpnthirdpartyvpnpeers) - Return the third party VPN peers for an organization
* [getOrganizationApplianceVpnVpnFirewallRules](docs/configure/README.md#getorganizationappliancevpnvpnfirewallrules) - Return the firewall rules for an organization's site-to-site VPN
* [getOrganizationBrandingPolicies](docs/configure/README.md#getorganizationbrandingpolicies) - List the branding policies of an organization
* [getOrganizationBrandingPoliciesPriorities](docs/configure/README.md#getorganizationbrandingpoliciespriorities) - Return the branding policy IDs of an organization in priority order
* [getOrganizationBrandingPolicy](docs/configure/README.md#getorganizationbrandingpolicy) - Return a branding policy
* [getOrganizationCameraCustomAnalyticsArtifact](docs/configure/README.md#getorganizationcameracustomanalyticsartifact) - Get Custom Analytics Artifact
* [getOrganizationCameraCustomAnalyticsArtifacts](docs/configure/README.md#getorganizationcameracustomanalyticsartifacts) - List Custom Analytics Artifacts
* [getOrganizationCameraOnboardingStatuses](docs/configure/README.md#getorganizationcameraonboardingstatuses) - Fetch onboarding status of cameras
* [getOrganizationClientsSearch](docs/configure/README.md#getorganizationclientssearch) - Return the client details in an organization
* [getOrganizationConfigTemplate](docs/configure/README.md#getorganizationconfigtemplate) - Return a single configuration template
* [getOrganizationConfigTemplateSwitchProfilePort](docs/configure/README.md#getorganizationconfigtemplateswitchprofileport) - Return a switch profile port
* [getOrganizationConfigTemplateSwitchProfilePorts](docs/configure/README.md#getorganizationconfigtemplateswitchprofileports) - Return all the ports of a switch profile
* [getOrganizationConfigTemplateSwitchProfiles](docs/configure/README.md#getorganizationconfigtemplateswitchprofiles) - List the switch profiles for your switch template configuration
* [getOrganizationConfigTemplates](docs/configure/README.md#getorganizationconfigtemplates) - List the configuration templates for this organization
* [getOrganizationDevices](docs/configure/README.md#getorganizationdevices) - List the devices in an organization
* [getOrganizationEarlyAccessFeatures](docs/configure/README.md#getorganizationearlyaccessfeatures) - List the available early access features for organization
* [getOrganizationEarlyAccessFeaturesOptIn](docs/configure/README.md#getorganizationearlyaccessfeaturesoptin) - Show an early access feature opt-in for an organization
* [getOrganizationEarlyAccessFeaturesOptIns](docs/configure/README.md#getorganizationearlyaccessfeaturesoptins) - List the early access feature opt-ins for an organization
* [getOrganizationFirmwareUpgrades](docs/configure/README.md#getorganizationfirmwareupgrades) - Get firmware upgrade information for an organization
* [getOrganizationFirmwareUpgradesByDevice](docs/configure/README.md#getorganizationfirmwareupgradesbydevice) - Get firmware upgrade status for the filtered devices
* [getOrganizationInsightApplications](docs/configure/README.md#getorganizationinsightapplications) - List all Insight tracked applications
* [getOrganizationInsightMonitoredMediaServer](docs/configure/README.md#getorganizationinsightmonitoredmediaserver) - Return a monitored media server for this organization
* [getOrganizationInsightMonitoredMediaServers](docs/configure/README.md#getorganizationinsightmonitoredmediaservers) - List the monitored media servers for this organization
* [getOrganizationInventoryDevice](docs/configure/README.md#getorganizationinventorydevice) - Return a single device from the inventory of an organization
* [getOrganizationInventoryDevices](docs/configure/README.md#getorganizationinventorydevices) - Return the device inventory for an organization
* [getOrganizationInventoryOnboardingCloudMonitoringImports](docs/configure/README.md#getorganizationinventoryonboardingcloudmonitoringimports) - Check the status of a committed Import operation
* [getOrganizationInventoryOnboardingCloudMonitoringNetworks](docs/configure/README.md#getorganizationinventoryonboardingcloudmonitoringnetworks) - Returns list of networks eligible for adding cloud monitored device
* [getOrganizationLicense](docs/configure/README.md#getorganizationlicense) - Display a license
* [getOrganizationLicenses](docs/configure/README.md#getorganizationlicenses) - List the licenses for an organization
* [getOrganizationLicensingCotermLicenses](docs/configure/README.md#getorganizationlicensingcotermlicenses) - List the licenses in a coterm organization
* [getOrganizationLoginSecurity](docs/configure/README.md#getorganizationloginsecurity) - Returns the login security settings for an organization.
* [getOrganizationNetworks](docs/configure/README.md#getorganizationnetworks) - List the networks that the user has privileges on in an organization
* [getOrganizationPolicyObject](docs/configure/README.md#getorganizationpolicyobject) - Shows details of a Policy Object.
* [getOrganizationPolicyObjects](docs/configure/README.md#getorganizationpolicyobjects) - Lists Policy Objects belonging to the organization.
* [getOrganizationPolicyObjectsGroup](docs/configure/README.md#getorganizationpolicyobjectsgroup) - Shows details of a Policy Object Group.
* [getOrganizationPolicyObjectsGroups](docs/configure/README.md#getorganizationpolicyobjectsgroups) - Lists Policy Object Groups belonging to the organization.
* [getOrganizationSaml](docs/configure/README.md#getorganizationsaml) - Returns the SAML SSO enabled settings for an organization.
* [getOrganizationSamlIdp](docs/configure/README.md#getorganizationsamlidp) - Get a SAML IdP from your organization.
* [getOrganizationSamlIdps](docs/configure/README.md#getorganizationsamlidps) - List the SAML IdPs in your organization.
* [getOrganizationSamlRole](docs/configure/README.md#getorganizationsamlrole) - Return a SAML role
* [getOrganizationSamlRoles](docs/configure/README.md#getorganizationsamlroles) - List the SAML roles for this organization
* [getOrganizationSmApnsCert](docs/configure/README.md#getorganizationsmapnscert) - Get the organization's APNS certificate
* [getOrganizationSmVppAccount](docs/configure/README.md#getorganizationsmvppaccount) - Get a hash containing the unparsed token of the VPP account with the given ID
* [getOrganizationSmVppAccounts](docs/configure/README.md#getorganizationsmvppaccounts) - List the VPP accounts in the organization
* [getOrganizationSnmp](docs/configure/README.md#getorganizationsnmp) - Return the SNMP settings for an organization
* [getOrganizationSwitchPortsBySwitch](docs/configure/README.md#getorganizationswitchportsbyswitch) - List the switchports in an organization by switch
* [getOrganizationWirelessDevicesEthernetStatuses](docs/configure/README.md#getorganizationwirelessdevicesethernetstatuses) - Endpoint to see power status for wireless devices
* [getOrganizations](docs/configure/README.md#getorganizations) - List the organizations that the user has privileges on
* [lockNetworkSmDevices](docs/configure/README.md#locknetworksmdevices) - Lock a set of devices
* [modifyNetworkSmDevicesTags](docs/configure/README.md#modifynetworksmdevicestags) - Add, delete, or update the tags of a set of devices
* [moveNetworkSmDevices](docs/configure/README.md#movenetworksmdevices) - Move a set of devices to a new network
* [moveOrganizationLicenses](docs/configure/README.md#moveorganizationlicenses) - Move licenses to another organization
* [moveOrganizationLicensesSeats](docs/configure/README.md#moveorganizationlicensesseats) - Move SM seats to another organization
* [moveOrganizationLicensingCotermLicenses](docs/configure/README.md#moveorganizationlicensingcotermlicenses) - Moves a license to a different organization (coterm only)
* [provisionNetworkClients](docs/configure/README.md#provisionnetworkclients) - Provisions a client with a name and policy
* [refreshNetworkSmDeviceDetails](docs/configure/README.md#refreshnetworksmdevicedetails) - Refresh the details of a device
* [releaseFromOrganizationInventory](docs/configure/README.md#releasefromorganizationinventory) - Release a list of claimed devices from an organization.
* [removeNetworkDevices](docs/configure/README.md#removenetworkdevices) - Remove a single device
* [removeNetworkSwitchStack](docs/configure/README.md#removenetworkswitchstack) - Remove a switch from a stack
* [renewOrganizationLicensesSeats](docs/configure/README.md#reneworganizationlicensesseats) - Renew SM seats of a license
* [rollbacksNetworkFirmwareUpgradesStagedEvents](docs/configure/README.md#rollbacksnetworkfirmwareupgradesstagedevents) - Rollback a Staged Upgrade Event for a network
* [splitNetwork](docs/configure/README.md#splitnetwork) - Split a combined network into individual networks for each type of device
* [swapNetworkApplianceWarmSpare](docs/configure/README.md#swapnetworkappliancewarmspare) - Swap MX primary and warm spare appliances
* [unbindNetwork](docs/configure/README.md#unbindnetwork) - Unbind a network from a template.
* [unenrollNetworkSmDevice](docs/configure/README.md#unenrollnetworksmdevice) - Unenroll a device
* [updateDevice](docs/configure/README.md#updatedevice) - Update the attributes of a device
* [updateDeviceApplianceUplinksSettings](docs/configure/README.md#updatedeviceapplianceuplinkssettings) - Update the uplink settings for an MX appliance
* [updateDeviceCameraCustomAnalytics](docs/configure/README.md#updatedevicecameracustomanalytics) - Update custom analytics settings for a camera
* [updateDeviceCameraQualityAndRetention](docs/configure/README.md#updatedevicecameraqualityandretention) - Update quality and retention settings for the given camera
* [updateDeviceCameraSense](docs/configure/README.md#updatedevicecamerasense) - Update sense settings for the given camera
* [updateDeviceCameraVideoSettings](docs/configure/README.md#updatedevicecameravideosettings) - Update video settings for the given camera
* [updateDeviceCameraWirelessProfiles](docs/configure/README.md#updatedevicecamerawirelessprofiles) - Assign wireless profiles to the given camera
* [updateDeviceCellularGatewayLan](docs/configure/README.md#updatedevicecellulargatewaylan) - Update the LAN Settings for a single MG.
* [updateDeviceCellularGatewayPortForwardingRules](docs/configure/README.md#updatedevicecellulargatewayportforwardingrules) - Updates the port forwarding rules for a single MG.
* [updateDeviceCellularSims](docs/configure/README.md#updatedevicecellularsims) - Updates the SIM and APN configurations for a cellular device.
* [updateDeviceManagementInterface](docs/configure/README.md#updatedevicemanagementinterface) - Update the management interface settings for a device
* [updateDeviceSensorRelationships](docs/configure/README.md#updatedevicesensorrelationships) - Assign one or more sensor roles to a given sensor or camera device.
* [updateDeviceSwitchPort](docs/configure/README.md#updatedeviceswitchport) - Update a switch port
* [updateDeviceSwitchRoutingInterface](docs/configure/README.md#updatedeviceswitchroutinginterface) - Update a layer 3 interface for a switch
* [updateDeviceSwitchRoutingInterfaceDhcp](docs/configure/README.md#updatedeviceswitchroutinginterfacedhcp) - Update a layer 3 interface DHCP configuration for a switch
* [updateDeviceSwitchRoutingStaticRoute](docs/configure/README.md#updatedeviceswitchroutingstaticroute) - Update a layer 3 static route for a switch
* [updateDeviceSwitchWarmSpare](docs/configure/README.md#updatedeviceswitchwarmspare) - Update warm spare configuration for a switch
* [updateDeviceWirelessBluetoothSettings](docs/configure/README.md#updatedevicewirelessbluetoothsettings) - Update the bluetooth settings for a wireless device
* [updateDeviceWirelessRadioSettings](docs/configure/README.md#updatedevicewirelessradiosettings) - Update the radio settings of a device
* [updateNetwork](docs/configure/README.md#updatenetwork) - Update a network
* [updateNetworkAlertsSettings](docs/configure/README.md#updatenetworkalertssettings) - Update the alert configuration for this network
* [updateNetworkApplianceConnectivityMonitoringDestinations](docs/configure/README.md#updatenetworkapplianceconnectivitymonitoringdestinations) - Update the connectivity testing destinations for an MX network
* [updateNetworkApplianceContentFiltering](docs/configure/README.md#updatenetworkappliancecontentfiltering) - Update the content filtering settings for an MX network
* [updateNetworkApplianceFirewallCellularFirewallRules](docs/configure/README.md#updatenetworkappliancefirewallcellularfirewallrules) - Update the cellular firewall rules of an MX network
* [updateNetworkApplianceFirewallFirewalledService](docs/configure/README.md#updatenetworkappliancefirewallfirewalledservice) - Updates the accessibility settings for the given service ('ICMP', 'web', or 'SNMP')
* [updateNetworkApplianceFirewallInboundCellularFirewallRules](docs/configure/README.md#updatenetworkappliancefirewallinboundcellularfirewallrules) - Update the inbound cellular firewall rules of an MX network
* [updateNetworkApplianceFirewallInboundFirewallRules](docs/configure/README.md#updatenetworkappliancefirewallinboundfirewallrules) - Update the inbound firewall rules of an MX network
* [updateNetworkApplianceFirewallL3FirewallRules](docs/configure/README.md#updatenetworkappliancefirewalll3firewallrules) - Update the L3 firewall rules of an MX network
* [updateNetworkApplianceFirewallL7FirewallRules](docs/configure/README.md#updatenetworkappliancefirewalll7firewallrules) - Update the MX L7 firewall rules for an MX network
* [updateNetworkApplianceFirewallOneToManyNatRules](docs/configure/README.md#updatenetworkappliancefirewallonetomanynatrules) - Set the 1:Many NAT mapping rules for an MX network
* [updateNetworkApplianceFirewallOneToOneNatRules](docs/configure/README.md#updatenetworkappliancefirewallonetoonenatrules) - Set the 1:1 NAT mapping rules for an MX network
* [updateNetworkApplianceFirewallPortForwardingRules](docs/configure/README.md#updatenetworkappliancefirewallportforwardingrules) - Update the port forwarding rules for an MX network
* [updateNetworkApplianceFirewallSettings](docs/configure/README.md#updatenetworkappliancefirewallsettings) - Update the firewall settings for this network
* [updateNetworkAppliancePort](docs/configure/README.md#updatenetworkapplianceport) - Update the per-port VLAN settings for a single MX port.
* [updateNetworkAppliancePrefixesDelegatedStatic](docs/configure/README.md#updatenetworkapplianceprefixesdelegatedstatic) - Update a static delegated prefix from a network
* [updateNetworkApplianceSecurityIntrusion](docs/configure/README.md#updatenetworkappliancesecurityintrusion) - Set the supported intrusion settings for an MX network
* [updateNetworkApplianceSecurityMalware](docs/configure/README.md#updatenetworkappliancesecuritymalware) - Set the supported malware settings for an MX network
* [updateNetworkApplianceSettings](docs/configure/README.md#updatenetworkappliancesettings) - Update the appliance settings for a network
* [updateNetworkApplianceSingleLan](docs/configure/README.md#updatenetworkappliancesinglelan) - Update single LAN configuration
* [updateNetworkApplianceSsid](docs/configure/README.md#updatenetworkappliancessid) - Update the attributes of an MX SSID
* [updateNetworkApplianceStaticRoute](docs/configure/README.md#updatenetworkappliancestaticroute) - Update a static route for an MX or teleworker network
* [updateNetworkApplianceTrafficShaping](docs/configure/README.md#updatenetworkappliancetrafficshaping) - Update the traffic shaping settings for an MX network
* [updateNetworkApplianceTrafficShapingCustomPerformanceClass](docs/configure/README.md#updatenetworkappliancetrafficshapingcustomperformanceclass) - Update a custom performance class for an MX network
* [updateNetworkApplianceTrafficShapingRules](docs/configure/README.md#updatenetworkappliancetrafficshapingrules) - Update the traffic shaping settings rules for an MX network
* [updateNetworkApplianceTrafficShapingUplinkBandwidth](docs/configure/README.md#updatenetworkappliancetrafficshapinguplinkbandwidth) - Updates the uplink bandwidth settings for your MX network.
* [updateNetworkApplianceTrafficShapingUplinkSelection](docs/configure/README.md#updatenetworkappliancetrafficshapinguplinkselection) - Update uplink selection settings for an MX network
* [updateNetworkApplianceVlan](docs/configure/README.md#updatenetworkappliancevlan) - Update a VLAN
* [updateNetworkApplianceVlansSettings](docs/configure/README.md#updatenetworkappliancevlanssettings) - Enable/Disable VLANs for the given network
* [updateNetworkApplianceVpnBgp](docs/configure/README.md#updatenetworkappliancevpnbgp) - Update a Hub BGP Configuration
* [updateNetworkApplianceVpnSiteToSiteVpn](docs/configure/README.md#updatenetworkappliancevpnsitetositevpn) - Update the site-to-site VPN settings of a network
* [updateNetworkApplianceWarmSpare](docs/configure/README.md#updatenetworkappliancewarmspare) - Update MX warm spare settings
* [updateNetworkCameraQualityRetentionProfile](docs/configure/README.md#updatenetworkcameraqualityretentionprofile) - Update an existing quality retention profile for this network.
* [updateNetworkCameraWirelessProfile](docs/configure/README.md#updatenetworkcamerawirelessprofile) - Update an existing camera wireless profile in this network.
* [updateNetworkCellularGatewayConnectivityMonitoringDestinations](docs/configure/README.md#updatenetworkcellulargatewayconnectivitymonitoringdestinations) - Update the connectivity testing destinations for an MG network
* [updateNetworkCellularGatewayDhcp](docs/configure/README.md#updatenetworkcellulargatewaydhcp) - Update common DHCP settings of MGs
* [updateNetworkCellularGatewaySubnetPool](docs/configure/README.md#updatenetworkcellulargatewaysubnetpool) - Update the subnet pool and mask configuration for MGs in the network.
* [updateNetworkCellularGatewayUplink](docs/configure/README.md#updatenetworkcellulargatewayuplink) - Updates the uplink settings for your MG network.
* [updateNetworkClientPolicy](docs/configure/README.md#updatenetworkclientpolicy) - Update the policy assigned to a client on the network
* [updateNetworkClientSplashAuthorizationStatus](docs/configure/README.md#updatenetworkclientsplashauthorizationstatus) - Update a client's splash authorization
* [updateNetworkFirmwareUpgrades](docs/configure/README.md#updatenetworkfirmwareupgrades) - Update firmware upgrade information for a network
* [updateNetworkFirmwareUpgradesStagedEvents](docs/configure/README.md#updatenetworkfirmwareupgradesstagedevents) - Update the Staged Upgrade Event for a network
* [updateNetworkFirmwareUpgradesStagedGroup](docs/configure/README.md#updatenetworkfirmwareupgradesstagedgroup) - Update a Staged Upgrade Group for a network
* [updateNetworkFirmwareUpgradesStagedStages](docs/configure/README.md#updatenetworkfirmwareupgradesstagedstages) - Assign Staged Upgrade Group order in the sequence.
* [updateNetworkFloorPlan](docs/configure/README.md#updatenetworkfloorplan) - Update a floor plan's geolocation and other meta data
* [updateNetworkGroupPolicy](docs/configure/README.md#updatenetworkgrouppolicy) - Update a group policy
* [updateNetworkMerakiAuthUser](docs/configure/README.md#updatenetworkmerakiauthuser) - Update a user configured with Meraki Authentication (currently, 802.1X RADIUS, splash guest, and client VPN users can be updated)
* [updateNetworkMqttBroker](docs/configure/README.md#updatenetworkmqttbroker) - Update an MQTT broker
* [updateNetworkNetflow](docs/configure/README.md#updatenetworknetflow) - Update the NetFlow traffic reporting settings for a network
* [updateNetworkSensorAlertsProfile](docs/configure/README.md#updatenetworksensoralertsprofile) - Updates a sensor alert profile for a network.
* [updateNetworkSettings](docs/configure/README.md#updatenetworksettings) - Update the settings for a network
* [updateNetworkSmDevicesFields](docs/configure/README.md#updatenetworksmdevicesfields) - Modify the fields of a device
* [updateNetworkSmTargetGroup](docs/configure/README.md#updatenetworksmtargetgroup) - Update a target group
* [updateNetworkSnmp](docs/configure/README.md#updatenetworksnmp) - Update the SNMP settings for a network
* [updateNetworkSwitchAccessControlLists](docs/configure/README.md#updatenetworkswitchaccesscontrollists) - Update the access control lists for a MS network
* [updateNetworkSwitchAccessPolicy](docs/configure/README.md#updatenetworkswitchaccesspolicy) - Update an access policy for a switch network
* [updateNetworkSwitchAlternateManagementInterface](docs/configure/README.md#updatenetworkswitchalternatemanagementinterface) - Update the switch alternate management interface for the network
* [updateNetworkSwitchDhcpServerPolicy](docs/configure/README.md#updatenetworkswitchdhcpserverpolicy) - Update the DHCP server settings
* [updateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServer](docs/configure/README.md#updatenetworkswitchdhcpserverpolicyarpinspectiontrustedserver) - Update a server that is trusted by Dynamic ARP Inspection on this network
* [updateNetworkSwitchDscpToCosMappings](docs/configure/README.md#updatenetworkswitchdscptocosmappings) - Update the DSCP to CoS mappings
* [updateNetworkSwitchLinkAggregation](docs/configure/README.md#updatenetworkswitchlinkaggregation) - Update a link aggregation group
* [updateNetworkSwitchMtu](docs/configure/README.md#updatenetworkswitchmtu) - Update the MTU configuration
* [updateNetworkSwitchPortSchedule](docs/configure/README.md#updatenetworkswitchportschedule) - Update a switch port schedule
* [updateNetworkSwitchQosRule](docs/configure/README.md#updatenetworkswitchqosrule) - Update a quality of service rule
* [updateNetworkSwitchQosRulesOrder](docs/configure/README.md#updatenetworkswitchqosrulesorder) - Update the order in which the rules should be processed by the switch
* [updateNetworkSwitchRoutingMulticast](docs/configure/README.md#updatenetworkswitchroutingmulticast) - Update multicast settings for a network
* [updateNetworkSwitchRoutingMulticastRendezvousPoint](docs/configure/README.md#updatenetworkswitchroutingmulticastrendezvouspoint) - Update a multicast rendezvous point
* [updateNetworkSwitchRoutingOspf](docs/configure/README.md#updatenetworkswitchroutingospf) - Update layer 3 OSPF routing configuration
* [updateNetworkSwitchSettings](docs/configure/README.md#updatenetworkswitchsettings) - Update switch network settings
* [updateNetworkSwitchStackRoutingInterface](docs/configure/README.md#updatenetworkswitchstackroutinginterface) - Update a layer 3 interface for a switch stack
* [updateNetworkSwitchStackRoutingInterfaceDhcp](docs/configure/README.md#updatenetworkswitchstackroutinginterfacedhcp) - Update a layer 3 interface DHCP configuration for a switch stack
* [updateNetworkSwitchStackRoutingStaticRoute](docs/configure/README.md#updatenetworkswitchstackroutingstaticroute) - Update a layer 3 static route for a switch stack
* [updateNetworkSwitchStormControl](docs/configure/README.md#updatenetworkswitchstormcontrol) - Update the storm control configuration for a switch network
* [updateNetworkSwitchStp](docs/configure/README.md#updatenetworkswitchstp) - Updates STP settings
* [updateNetworkSyslogServers](docs/configure/README.md#updatenetworksyslogservers) - Update the syslog servers for a network
* [updateNetworkTrafficAnalysis](docs/configure/README.md#updatenetworktrafficanalysis) - Update the traffic analysis settings for a network
* [updateNetworkWebhooksHttpServer](docs/configure/README.md#updatenetworkwebhookshttpserver) - Update an HTTP server
* [updateNetworkWebhooksPayloadTemplate](docs/configure/README.md#updatenetworkwebhookspayloadtemplate) - Update a webhook payload template for a network
* [updateNetworkWirelessAlternateManagementInterface](docs/configure/README.md#updatenetworkwirelessalternatemanagementinterface) - Update alternate management interface and device static IP
* [updateNetworkWirelessBilling](docs/configure/README.md#updatenetworkwirelessbilling) - Update the billing settings
* [updateNetworkWirelessBluetoothSettings](docs/configure/README.md#updatenetworkwirelessbluetoothsettings) - Update the Bluetooth settings for a network
* [updateNetworkWirelessRfProfile](docs/configure/README.md#updatenetworkwirelessrfprofile) - Updates specified RF profile for this network
* [updateNetworkWirelessSettings](docs/configure/README.md#updatenetworkwirelesssettings) - Update the wireless settings for a network
* [updateNetworkWirelessSsid](docs/configure/README.md#updatenetworkwirelessssid) - Update the attributes of an MR SSID
* [updateNetworkWirelessSsidBonjourForwarding](docs/configure/README.md#updatenetworkwirelessssidbonjourforwarding) - Update the bonjour forwarding setting and rules for the SSID
* [updateNetworkWirelessSsidDeviceTypeGroupPolicies](docs/configure/README.md#updatenetworkwirelessssiddevicetypegrouppolicies) - Update the device type group policies for the SSID
* [updateNetworkWirelessSsidEapOverride](docs/configure/README.md#updatenetworkwirelessssideapoverride) - Update the EAP overridden parameters for an SSID.
* [updateNetworkWirelessSsidFirewallL3FirewallRules](docs/configure/README.md#updatenetworkwirelessssidfirewalll3firewallrules) - Update the L3 firewall rules of an SSID on an MR network
* [updateNetworkWirelessSsidFirewallL7FirewallRules](docs/configure/README.md#updatenetworkwirelessssidfirewalll7firewallrules) - Update the L7 firewall rules of an SSID on an MR network
* [updateNetworkWirelessSsidHotspot20](docs/configure/README.md#updatenetworkwirelessssidhotspot20) - Update the Hotspot 2.0 settings of an SSID
* [updateNetworkWirelessSsidIdentityPsk](docs/configure/README.md#updatenetworkwirelessssididentitypsk) - Update an Identity PSK
* [updateNetworkWirelessSsidSchedules](docs/configure/README.md#updatenetworkwirelessssidschedules) - Update the outage schedule for the SSID
* [updateNetworkWirelessSsidSplashSettings](docs/configure/README.md#updatenetworkwirelessssidsplashsettings) - Modify the splash page settings for the given SSID
* [updateNetworkWirelessSsidTrafficShapingRules](docs/configure/README.md#updatenetworkwirelessssidtrafficshapingrules) - Update the traffic shaping settings for an SSID on an MR network
* [updateNetworkWirelessSsidVpn](docs/configure/README.md#updatenetworkwirelessssidvpn) - Update the VPN settings for the SSID
* [updateOrganization](docs/configure/README.md#updateorganization) - Update an organization
* [updateOrganizationActionBatch](docs/configure/README.md#updateorganizationactionbatch) - Update an action batch
* [updateOrganizationAdaptivePolicyAcl](docs/configure/README.md#updateorganizationadaptivepolicyacl) - Updates an adaptive policy ACL
* [updateOrganizationAdaptivePolicyGroup](docs/configure/README.md#updateorganizationadaptivepolicygroup) - Updates an adaptive policy group
* [updateOrganizationAdaptivePolicyPolicy](docs/configure/README.md#updateorganizationadaptivepolicypolicy) - Update an Adaptive Policy
* [updateOrganizationAdaptivePolicySettings](docs/configure/README.md#updateorganizationadaptivepolicysettings) - Update global adaptive policy settings
* [updateOrganizationAdmin](docs/configure/README.md#updateorganizationadmin) - Update an administrator
* [updateOrganizationAlertsProfile](docs/configure/README.md#updateorganizationalertsprofile) - Update an organization-wide alert config
* [updateOrganizationApplianceSecurityIntrusion](docs/configure/README.md#updateorganizationappliancesecurityintrusion) - Sets supported intrusion settings for an organization
* [updateOrganizationApplianceVPNThirdPartyVPNPeers](docs/configure/README.md#updateorganizationappliancevpnthirdpartyvpnpeers) - Update the third party VPN peers for an organization
* [updateOrganizationApplianceVpnVpnFirewallRules](docs/configure/README.md#updateorganizationappliancevpnvpnfirewallrules) - Update the firewall rules of an organization's site-to-site VPN
* [updateOrganizationBrandingPoliciesPriorities](docs/configure/README.md#updateorganizationbrandingpoliciespriorities) - Update the priority ordering of an organization's branding policies.
* [updateOrganizationBrandingPolicy](docs/configure/README.md#updateorganizationbrandingpolicy) - Update a branding policy
* [updateOrganizationCameraOnboardingStatuses](docs/configure/README.md#updateorganizationcameraonboardingstatuses) - Notify that credential handoff to camera has completed
* [updateOrganizationConfigTemplate](docs/configure/README.md#updateorganizationconfigtemplate) - Update a configuration template
* [updateOrganizationConfigTemplateSwitchProfilePort](docs/configure/README.md#updateorganizationconfigtemplateswitchprofileport) - Update a switch profile port
* [updateOrganizationEarlyAccessFeaturesOptIn](docs/configure/README.md#updateorganizationearlyaccessfeaturesoptin) - Update an early access feature opt-in for an organization
* [updateOrganizationInsightMonitoredMediaServer](docs/configure/README.md#updateorganizationinsightmonitoredmediaserver) - Update a monitored media server for this organization
* [updateOrganizationLicense](docs/configure/README.md#updateorganizationlicense) - Update a license
* [updateOrganizationLoginSecurity](docs/configure/README.md#updateorganizationloginsecurity) - Update the login security settings for an organization
* [updateOrganizationPolicyObject](docs/configure/README.md#updateorganizationpolicyobject) - Updates a Policy Object.
* [updateOrganizationPolicyObjectsGroup](docs/configure/README.md#updateorganizationpolicyobjectsgroup) - Updates a Policy Object Group.
* [updateOrganizationSaml](docs/configure/README.md#updateorganizationsaml) - Updates the SAML SSO enabled settings for an organization.
* [updateOrganizationSamlIdp](docs/configure/README.md#updateorganizationsamlidp) - Update a SAML IdP in your organization
* [updateOrganizationSamlRole](docs/configure/README.md#updateorganizationsamlrole) - Update a SAML role
* [updateOrganizationSnmp](docs/configure/README.md#updateorganizationsnmp) - Update the SNMP settings for an organization
* [vmxNetworkDevicesClaim](docs/configure/README.md#vmxnetworkdevicesclaim) - Claim a vMX into a network
* [wipeNetworkSmDevices](docs/configure/README.md#wipenetworksmdevices) - Wipe a device

### [connectionStats](docs/connectionstats/README.md)

* [getDeviceWirelessConnectionStats](docs/connectionstats/README.md#getdevicewirelessconnectionstats) - Aggregated connectivity info for a given AP on this network
* [getNetworkWirelessClientConnectionStats](docs/connectionstats/README.md#getnetworkwirelessclientconnectionstats) - Aggregated connectivity info for a given client on this network
* [getNetworkWirelessClientsConnectionStats](docs/connectionstats/README.md#getnetworkwirelessclientsconnectionstats) - Aggregated connectivity info for this network, grouped by clients
* [getNetworkWirelessConnectionStats](docs/connectionstats/README.md#getnetworkwirelessconnectionstats) - Aggregated connectivity info for this network
* [getNetworkWirelessDevicesConnectionStats](docs/connectionstats/README.md#getnetworkwirelessdevicesconnectionstats) - Aggregated connectivity info for this network, grouped by node

### [connectivity](docs/connectivity/README.md)

* [getNetworkSmDeviceConnectivity](docs/connectivity/README.md#getnetworksmdeviceconnectivity) - Returns historical connectivity data (whether a device is regularly checking in to Dashboard).

### [connectivityEvents](docs/connectivityevents/README.md)

* [getNetworkWirelessClientConnectivityEvents](docs/connectivityevents/README.md#getnetworkwirelessclientconnectivityevents) - List the wireless connectivity events for a client within a network in the timespan.

### [connectivityMonitoringDestinations](docs/connectivitymonitoringdestinations/README.md)

* [getNetworkApplianceConnectivityMonitoringDestinations](docs/connectivitymonitoringdestinations/README.md#getnetworkapplianceconnectivitymonitoringdestinations) - Return the connectivity testing destinations for an MX network
* [getNetworkCellularGatewayConnectivityMonitoringDestinations](docs/connectivitymonitoringdestinations/README.md#getnetworkcellulargatewayconnectivitymonitoringdestinations) - Return the connectivity testing destinations for an MG network
* [updateNetworkApplianceConnectivityMonitoringDestinations](docs/connectivitymonitoringdestinations/README.md#updatenetworkapplianceconnectivitymonitoringdestinations) - Update the connectivity testing destinations for an MX network
* [updateNetworkCellularGatewayConnectivityMonitoringDestinations](docs/connectivitymonitoringdestinations/README.md#updatenetworkcellulargatewayconnectivitymonitoringdestinations) - Update the connectivity testing destinations for an MG network

### [contentFiltering](docs/contentfiltering/README.md)

* [getNetworkApplianceContentFiltering](docs/contentfiltering/README.md#getnetworkappliancecontentfiltering) - Return the content filtering settings for an MX network
* [getNetworkApplianceContentFilteringCategories](docs/contentfiltering/README.md#getnetworkappliancecontentfilteringcategories) - List all available content filtering categories for an MX network
* [updateNetworkApplianceContentFiltering](docs/contentfiltering/README.md#updatenetworkappliancecontentfiltering) - Update the content filtering settings for an MX network

### [coterm](docs/coterm/README.md)

* [getOrganizationLicensingCotermLicenses](docs/coterm/README.md#getorganizationlicensingcotermlicenses) - List the licenses in a coterm organization
* [moveOrganizationLicensingCotermLicenses](docs/coterm/README.md#moveorganizationlicensingcotermlicenses) - Moves a license to a different organization (coterm only)

### [current](docs/current/README.md)

* [getNetworkSensorAlertsCurrentOverviewByMetric](docs/current/README.md#getnetworksensoralertscurrentoverviewbymetric) - Return an overview of currently alerting sensors by metric

### [customAnalytics](docs/customanalytics/README.md)

* [createOrganizationCameraCustomAnalyticsArtifact](docs/customanalytics/README.md#createorganizationcameracustomanalyticsartifact) - Create custom analytics artifact
* [deleteOrganizationCameraCustomAnalyticsArtifact](docs/customanalytics/README.md#deleteorganizationcameracustomanalyticsartifact) - Delete Custom Analytics Artifact
* [getDeviceCameraCustomAnalytics](docs/customanalytics/README.md#getdevicecameracustomanalytics) - Return custom analytics settings for a camera
* [getOrganizationCameraCustomAnalyticsArtifact](docs/customanalytics/README.md#getorganizationcameracustomanalyticsartifact) - Get Custom Analytics Artifact
* [getOrganizationCameraCustomAnalyticsArtifacts](docs/customanalytics/README.md#getorganizationcameracustomanalyticsartifacts) - List Custom Analytics Artifacts
* [updateDeviceCameraCustomAnalytics](docs/customanalytics/README.md#updatedevicecameracustomanalytics) - Update custom analytics settings for a camera

### [customPerformanceClasses](docs/customperformanceclasses/README.md)

* [createNetworkApplianceTrafficShapingCustomPerformanceClass](docs/customperformanceclasses/README.md#createnetworkappliancetrafficshapingcustomperformanceclass) - Add a custom performance class for an MX network
* [deleteNetworkApplianceTrafficShapingCustomPerformanceClass](docs/customperformanceclasses/README.md#deletenetworkappliancetrafficshapingcustomperformanceclass) - Delete a custom performance class from an MX network
* [getNetworkApplianceTrafficShapingCustomPerformanceClass](docs/customperformanceclasses/README.md#getnetworkappliancetrafficshapingcustomperformanceclass) - Return a custom performance class for an MX network
* [getNetworkApplianceTrafficShapingCustomPerformanceClasses](docs/customperformanceclasses/README.md#getnetworkappliancetrafficshapingcustomperformanceclasses) - List all custom performance classes for an MX network
* [updateNetworkApplianceTrafficShapingCustomPerformanceClass](docs/customperformanceclasses/README.md#updatenetworkappliancetrafficshapingcustomperformanceclass) - Update a custom performance class for an MX network

### [dataRateHistory](docs/dataratehistory/README.md)

* [getNetworkWirelessDataRateHistory](docs/dataratehistory/README.md#getnetworkwirelessdataratehistory) - Return PHY data rates over time for a network, device, or network client

### [delegated](docs/delegated/README.md)

* [createNetworkAppliancePrefixesDelegatedStatic](docs/delegated/README.md#createnetworkapplianceprefixesdelegatedstatic) - Add a static delegated prefix from a network
* [deleteNetworkAppliancePrefixesDelegatedStatic](docs/delegated/README.md#deletenetworkapplianceprefixesdelegatedstatic) - Delete a static delegated prefix from a network
* [getDeviceAppliancePrefixesDelegated](docs/delegated/README.md#getdeviceapplianceprefixesdelegated) - Return current delegated IPv6 prefixes on an appliance.
* [getDeviceAppliancePrefixesDelegatedVlanAssignments](docs/delegated/README.md#getdeviceapplianceprefixesdelegatedvlanassignments) - Return prefixes assigned to all IPv6 enabled VLANs on an appliance.
* [getNetworkAppliancePrefixesDelegatedStatic](docs/delegated/README.md#getnetworkapplianceprefixesdelegatedstatic) - Return a static delegated prefix from a network
* [getNetworkAppliancePrefixesDelegatedStatics](docs/delegated/README.md#getnetworkapplianceprefixesdelegatedstatics) - List static delegated prefixes for a network
* [updateNetworkAppliancePrefixesDelegatedStatic](docs/delegated/README.md#updatenetworkapplianceprefixesdelegatedstatic) - Update a static delegated prefix from a network

### [desktopLogs](docs/desktoplogs/README.md)

* [getNetworkSmDeviceDesktopLogs](docs/desktoplogs/README.md#getnetworksmdevicedesktoplogs) - Return historical records of various Systems Manager network connection details for desktop devices.

### [deviceCommandLogs](docs/devicecommandlogs/README.md)

* [getNetworkSmDeviceDeviceCommandLogs](docs/devicecommandlogs/README.md#getnetworksmdevicedevicecommandlogs) - Return historical records of commands sent to Systems Manager devices

### [deviceProfiles](docs/deviceprofiles/README.md)

* [getNetworkSmDeviceDeviceProfiles](docs/deviceprofiles/README.md#getnetworksmdevicedeviceprofiles) - Get the installed profiles associated with a device
* [getNetworkSmUserDeviceProfiles](docs/deviceprofiles/README.md#getnetworksmuserdeviceprofiles) - Get the profiles associated with a user

### [deviceTypeGroupPolicies](docs/devicetypegrouppolicies/README.md)

* [getNetworkWirelessSsidDeviceTypeGroupPolicies](docs/devicetypegrouppolicies/README.md#getnetworkwirelessssiddevicetypegrouppolicies) - List the device type group policies for the SSID
* [updateNetworkWirelessSsidDeviceTypeGroupPolicies](docs/devicetypegrouppolicies/README.md#updatenetworkwirelessssiddevicetypegrouppolicies) - Update the device type group policies for the SSID

### [devices](docs/devices/README.md)

* [blinkDeviceLeds](docs/devices/README.md#blinkdeviceleds) - Blink the LEDs on a device
* [checkinNetworkSmDevices](docs/devices/README.md#checkinnetworksmdevices) - Force check-in a set of devices
* [claimNetworkDevices](docs/devices/README.md#claimnetworkdevices) - Claim devices into a network. (Note: for recently claimed devices, it may take a few minutes for API requsts against that device to succeed)
* [cloneOrganizationSwitchDevices](docs/devices/README.md#cloneorganizationswitchdevices) - Clone port-level and some switch-level configuration settings from a source switch to one or more target switches
* [createDeviceLiveToolsPing](docs/devices/README.md#createdevicelivetoolsping) - Enqueue a job to ping a target host from the device
* [createDeviceLiveToolsPingDevice](docs/devices/README.md#createdevicelivetoolspingdevice) - Enqueue a job to check connectivity status to the device
* [getDevice](docs/devices/README.md#getdevice) - Return a single device
* [getDeviceCellularSims](docs/devices/README.md#getdevicecellularsims) - Return the SIM and APN configurations for a cellular device.
* [getDeviceClients](docs/devices/README.md#getdeviceclients) - List the clients of a device, up to a maximum of a month ago
* [getDeviceLiveToolsPing](docs/devices/README.md#getdevicelivetoolsping) - Return a ping job
* [getDeviceLiveToolsPingDevice](docs/devices/README.md#getdevicelivetoolspingdevice) - Return a ping device job
* [getDeviceLldpCdp](docs/devices/README.md#getdevicelldpcdp) - List LLDP and CDP information for a device
* [getDeviceLossAndLatencyHistory](docs/devices/README.md#getdevicelossandlatencyhistory) - Get the uplink loss percentage and latency in milliseconds, and goodput in kilobits per second for a wired network device.
* [getDeviceManagementInterface](docs/devices/README.md#getdevicemanagementinterface) - Return the management interface settings for a device
* [getNetworkDevices](docs/devices/README.md#getnetworkdevices) - List the devices in a network
* [getNetworkSmDeviceCellularUsageHistory](docs/devices/README.md#getnetworksmdevicecellularusagehistory) - Return the client's daily cellular data usage history
* [getNetworkSmDeviceCerts](docs/devices/README.md#getnetworksmdevicecerts) - List the certs on a device
* [getNetworkSmDeviceConnectivity](docs/devices/README.md#getnetworksmdeviceconnectivity) - Returns historical connectivity data (whether a device is regularly checking in to Dashboard).
* [getNetworkSmDeviceDesktopLogs](docs/devices/README.md#getnetworksmdevicedesktoplogs) - Return historical records of various Systems Manager network connection details for desktop devices.
* [getNetworkSmDeviceDeviceCommandLogs](docs/devices/README.md#getnetworksmdevicedevicecommandlogs) - Return historical records of commands sent to Systems Manager devices
* [getNetworkSmDeviceDeviceProfiles](docs/devices/README.md#getnetworksmdevicedeviceprofiles) - Get the installed profiles associated with a device
* [getNetworkSmDeviceNetworkAdapters](docs/devices/README.md#getnetworksmdevicenetworkadapters) - List the network adapters of a device
* [getNetworkSmDevicePerformanceHistory](docs/devices/README.md#getnetworksmdeviceperformancehistory) - Return historical records of various Systems Manager client metrics for desktop devices.
* [getNetworkSmDeviceRestrictions](docs/devices/README.md#getnetworksmdevicerestrictions) - List the restrictions on a device
* [getNetworkSmDeviceSecurityCenters](docs/devices/README.md#getnetworksmdevicesecuritycenters) - List the security centers on a device
* [getNetworkSmDeviceSoftwares](docs/devices/README.md#getnetworksmdevicesoftwares) - Get a list of softwares associated with a device
* [getNetworkSmDeviceWlanLists](docs/devices/README.md#getnetworksmdevicewlanlists) - List the saved SSID names on a device
* [getNetworkSmDevices](docs/devices/README.md#getnetworksmdevices) - List the devices enrolled in an SM network with various specified fields and filters
* [getNetworkWirelessDevicesConnectionStats](docs/devices/README.md#getnetworkwirelessdevicesconnectionstats) - Aggregated connectivity info for this network, grouped by node
* [getNetworkWirelessDevicesLatencyStats](docs/devices/README.md#getnetworkwirelessdeviceslatencystats) - Aggregated latency info for this network, grouped by node
* [getOrganizationDevices](docs/devices/README.md#getorganizationdevices) - List the devices in an organization
* [getOrganizationDevicesAvailabilities](docs/devices/README.md#getorganizationdevicesavailabilities) - List the availability information for devices in an organization
* [getOrganizationDevicesPowerModulesStatusesByDevice](docs/devices/README.md#getorganizationdevicespowermodulesstatusesbydevice) - List the power status information for devices in an organization
* [getOrganizationDevicesStatuses](docs/devices/README.md#getorganizationdevicesstatuses) - List the status of every Meraki device in the organization
* [getOrganizationDevicesStatusesOverview](docs/devices/README.md#getorganizationdevicesstatusesoverview) - Return an overview of current device statuses
* [getOrganizationDevicesUplinksAddressesByDevice](docs/devices/README.md#getorganizationdevicesuplinksaddressesbydevice) - List the current uplink addresses for devices in an organization.
* [getOrganizationDevicesUplinksLossAndLatency](docs/devices/README.md#getorganizationdevicesuplinkslossandlatency) - Return the uplink loss and latency for every MX in the organization from at latest 2 minutes ago
* [getOrganizationInventoryDevice](docs/devices/README.md#getorganizationinventorydevice) - Return a single device from the inventory of an organization
* [getOrganizationInventoryDevices](docs/devices/README.md#getorganizationinventorydevices) - Return the device inventory for an organization
* [getOrganizationSummaryTopDevicesByUsage](docs/devices/README.md#getorganizationsummarytopdevicesbyusage) - Return metrics for organization's top 10 devices sorted by data usage over given time range
* [getOrganizationSummaryTopDevicesModelsByUsage](docs/devices/README.md#getorganizationsummarytopdevicesmodelsbyusage) - Return metrics for organization's top 10 device models sorted by data usage over given time range
* [getOrganizationWirelessDevicesEthernetStatuses](docs/devices/README.md#getorganizationwirelessdevicesethernetstatuses) - Endpoint to see power status for wireless devices
* [lockNetworkSmDevices](docs/devices/README.md#locknetworksmdevices) - Lock a set of devices
* [modifyNetworkSmDevicesTags](docs/devices/README.md#modifynetworksmdevicestags) - Add, delete, or update the tags of a set of devices
* [moveNetworkSmDevices](docs/devices/README.md#movenetworksmdevices) - Move a set of devices to a new network
* [rebootDevice](docs/devices/README.md#rebootdevice) - Reboot a device
* [refreshNetworkSmDeviceDetails](docs/devices/README.md#refreshnetworksmdevicedetails) - Refresh the details of a device
* [removeNetworkDevices](docs/devices/README.md#removenetworkdevices) - Remove a single device
* [unenrollNetworkSmDevice](docs/devices/README.md#unenrollnetworksmdevice) - Unenroll a device
* [updateDevice](docs/devices/README.md#updatedevice) - Update the attributes of a device
* [updateDeviceCellularSims](docs/devices/README.md#updatedevicecellularsims) - Updates the SIM and APN configurations for a cellular device.
* [updateDeviceManagementInterface](docs/devices/README.md#updatedevicemanagementinterface) - Update the management interface settings for a device
* [updateNetworkSmDevicesFields](docs/devices/README.md#updatenetworksmdevicesfields) - Modify the fields of a device
* [vmxNetworkDevicesClaim](docs/devices/README.md#vmxnetworkdevicesclaim) - Claim a vMX into a network
* [wipeNetworkSmDevices](docs/devices/README.md#wipenetworksmdevices) - Wipe a device

### [dhcp](docs/dhcp/README.md)

* [getDeviceApplianceDhcpSubnets](docs/dhcp/README.md#getdeviceappliancedhcpsubnets) - Return the DHCP subnet information for an appliance
* [getDeviceSwitchRoutingInterfaceDhcp](docs/dhcp/README.md#getdeviceswitchroutinginterfacedhcp) - Return a layer 3 interface DHCP configuration for a switch
* [getNetworkCellularGatewayDhcp](docs/dhcp/README.md#getnetworkcellulargatewaydhcp) - List common DHCP settings of MGs
* [getNetworkSwitchDhcpV4ServersSeen](docs/dhcp/README.md#getnetworkswitchdhcpv4serversseen) - Return the network's DHCPv4 servers seen within the selected timeframe (default 1 day)
* [getNetworkSwitchStackRoutingInterfaceDhcp](docs/dhcp/README.md#getnetworkswitchstackroutinginterfacedhcp) - Return a layer 3 interface DHCP configuration for a switch stack
* [updateDeviceSwitchRoutingInterfaceDhcp](docs/dhcp/README.md#updatedeviceswitchroutinginterfacedhcp) - Update a layer 3 interface DHCP configuration for a switch
* [updateNetworkCellularGatewayDhcp](docs/dhcp/README.md#updatenetworkcellulargatewaydhcp) - Update common DHCP settings of MGs
* [updateNetworkSwitchStackRoutingInterfaceDhcp](docs/dhcp/README.md#updatenetworkswitchstackroutinginterfacedhcp) - Update a layer 3 interface DHCP configuration for a switch stack

### [dhcpServerPolicy](docs/dhcpserverpolicy/README.md)

* [createNetworkSwitchDhcpServerPolicyArpInspectionTrustedServer](docs/dhcpserverpolicy/README.md#createnetworkswitchdhcpserverpolicyarpinspectiontrustedserver) - Add a server to be trusted by Dynamic ARP Inspection on this network
* [deleteNetworkSwitchDhcpServerPolicyArpInspectionTrustedServer](docs/dhcpserverpolicy/README.md#deletenetworkswitchdhcpserverpolicyarpinspectiontrustedserver) - Remove a server from being trusted by Dynamic ARP Inspection on this network
* [getNetworkSwitchDhcpServerPolicy](docs/dhcpserverpolicy/README.md#getnetworkswitchdhcpserverpolicy) - Return the DHCP server settings
* [getNetworkSwitchDhcpServerPolicyArpInspectionTrustedServers](docs/dhcpserverpolicy/README.md#getnetworkswitchdhcpserverpolicyarpinspectiontrustedservers) - Return the list of servers trusted by Dynamic ARP Inspection on this network
* [getNetworkSwitchDhcpServerPolicyArpInspectionWarningsByDevice](docs/dhcpserverpolicy/README.md#getnetworkswitchdhcpserverpolicyarpinspectionwarningsbydevice) - Return the devices that have a Dynamic ARP Inspection warning and their warnings
* [updateNetworkSwitchDhcpServerPolicy](docs/dhcpserverpolicy/README.md#updatenetworkswitchdhcpserverpolicy) - Update the DHCP server settings
* [updateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServer](docs/dhcpserverpolicy/README.md#updatenetworkswitchdhcpserverpolicyarpinspectiontrustedserver) - Update a server that is trusted by Dynamic ARP Inspection on this network

### [dscpTaggingOptions](docs/dscptaggingoptions/README.md)

* [getNetworkTrafficShapingDscpTaggingOptions](docs/dscptaggingoptions/README.md#getnetworktrafficshapingdscptaggingoptions) - Returns the available DSCP tagging options for your traffic shaping rules.

### [dscpToCosMappings](docs/dscptocosmappings/README.md)

* [getNetworkSwitchDscpToCosMappings](docs/dscptocosmappings/README.md#getnetworkswitchdscptocosmappings) - Return the DSCP to CoS mappings
* [updateNetworkSwitchDscpToCosMappings](docs/dscptocosmappings/README.md#updatenetworkswitchdscptocosmappings) - Update the DSCP to CoS mappings

### [eapOverride](docs/eapoverride/README.md)

* [getNetworkWirelessSsidEapOverride](docs/eapoverride/README.md#getnetworkwirelessssideapoverride) - Return the EAP overridden parameters for an SSID
* [updateNetworkWirelessSsidEapOverride](docs/eapoverride/README.md#updatenetworkwirelessssideapoverride) - Update the EAP overridden parameters for an SSID.

### [earlyAccess](docs/earlyaccess/README.md)

* [createOrganizationEarlyAccessFeaturesOptIn](docs/earlyaccess/README.md#createorganizationearlyaccessfeaturesoptin) - Create a new early access feature opt-in for an organization
* [deleteOrganizationEarlyAccessFeaturesOptIn](docs/earlyaccess/README.md#deleteorganizationearlyaccessfeaturesoptin) - Delete an early access feature opt-in
* [getOrganizationEarlyAccessFeatures](docs/earlyaccess/README.md#getorganizationearlyaccessfeatures) - List the available early access features for organization
* [getOrganizationEarlyAccessFeaturesOptIn](docs/earlyaccess/README.md#getorganizationearlyaccessfeaturesoptin) - Show an early access feature opt-in for an organization
* [getOrganizationEarlyAccessFeaturesOptIns](docs/earlyaccess/README.md#getorganizationearlyaccessfeaturesoptins) - List the early access feature opt-ins for an organization
* [updateOrganizationEarlyAccessFeaturesOptIn](docs/earlyaccess/README.md#updateorganizationearlyaccessfeaturesoptin) - Update an early access feature opt-in for an organization

### [ethernet](docs/ethernet/README.md)

* [getOrganizationWirelessDevicesEthernetStatuses](docs/ethernet/README.md#getorganizationwirelessdevicesethernetstatuses) - Endpoint to see power status for wireless devices

### [eventTypes](docs/eventtypes/README.md)

* [getNetworkEventsEventTypes](docs/eventtypes/README.md#getnetworkeventseventtypes) - List the event type to human-readable description

### [events](docs/events/README.md)

* [createNetworkFirmwareUpgradesStagedEvent](docs/events/README.md#createnetworkfirmwareupgradesstagedevent) - Create a Staged Upgrade Event for a network
* [deferNetworkFirmwareUpgradesStagedEvents](docs/events/README.md#defernetworkfirmwareupgradesstagedevents) - Postpone by 1 week all pending staged upgrade stages for a network
* [getNetworkApplianceClientSecurityEvents](docs/events/README.md#getnetworkapplianceclientsecurityevents) - List the security events for a client
* [getNetworkApplianceSecurityEvents](docs/events/README.md#getnetworkappliancesecurityevents) - List the security events for a network
* [getNetworkEvents](docs/events/README.md#getnetworkevents) - List the events for the network
* [getNetworkEventsEventTypes](docs/events/README.md#getnetworkeventseventtypes) - List the event type to human-readable description
* [getNetworkFirmwareUpgradesStagedEvents](docs/events/README.md#getnetworkfirmwareupgradesstagedevents) - Get the Staged Upgrade Event from a network
* [getOrganizationApplianceSecurityEvents](docs/events/README.md#getorganizationappliancesecurityevents) - List the security events for an organization
* [rollbacksNetworkFirmwareUpgradesStagedEvents](docs/events/README.md#rollbacksnetworkfirmwareupgradesstagedevents) - Rollback a Staged Upgrade Event for a network
* [updateNetworkFirmwareUpgradesStagedEvents](docs/events/README.md#updatenetworkfirmwareupgradesstagedevents) - Update the Staged Upgrade Event for a network

### [exportEvents](docs/exportevents/README.md)

* [createOrganizationInventoryOnboardingCloudMonitoringExportEvent](docs/exportevents/README.md#createorganizationinventoryonboardingcloudmonitoringexportevent) - Imports event logs related to the onboarding app into elastisearch

### [failedConnections](docs/failedconnections/README.md)

* [getNetworkWirelessFailedConnections](docs/failedconnections/README.md#getnetworkwirelessfailedconnections) - List of all failed client connection events on this network in a given time range

### [features](docs/features/README.md)

* [createOrganizationEarlyAccessFeaturesOptIn](docs/features/README.md#createorganizationearlyaccessfeaturesoptin) - Create a new early access feature opt-in for an organization
* [deleteOrganizationEarlyAccessFeaturesOptIn](docs/features/README.md#deleteorganizationearlyaccessfeaturesoptin) - Delete an early access feature opt-in
* [getOrganizationEarlyAccessFeatures](docs/features/README.md#getorganizationearlyaccessfeatures) - List the available early access features for organization
* [getOrganizationEarlyAccessFeaturesOptIn](docs/features/README.md#getorganizationearlyaccessfeaturesoptin) - Show an early access feature opt-in for an organization
* [getOrganizationEarlyAccessFeaturesOptIns](docs/features/README.md#getorganizationearlyaccessfeaturesoptins) - List the early access feature opt-ins for an organization
* [updateOrganizationEarlyAccessFeaturesOptIn](docs/features/README.md#updateorganizationearlyaccessfeaturesoptin) - Update an early access feature opt-in for an organization

### [fields](docs/fields/README.md)

* [updateNetworkSmDevicesFields](docs/fields/README.md#updatenetworksmdevicesfields) - Modify the fields of a device

### [firewall](docs/firewall/README.md)

* [getNetworkApplianceFirewallCellularFirewallRules](docs/firewall/README.md#getnetworkappliancefirewallcellularfirewallrules) - Return the cellular firewall rules for an MX network
* [getNetworkApplianceFirewallFirewalledService](docs/firewall/README.md#getnetworkappliancefirewallfirewalledservice) - Return the accessibility settings of the given service ('ICMP', 'web', or 'SNMP')
* [getNetworkApplianceFirewallFirewalledServices](docs/firewall/README.md#getnetworkappliancefirewallfirewalledservices) - List the appliance services and their accessibility rules
* [getNetworkApplianceFirewallInboundCellularFirewallRules](docs/firewall/README.md#getnetworkappliancefirewallinboundcellularfirewallrules) - Return the inbound cellular firewall rules for an MX network
* [getNetworkApplianceFirewallInboundFirewallRules](docs/firewall/README.md#getnetworkappliancefirewallinboundfirewallrules) - Return the inbound firewall rules for an MX network
* [getNetworkApplianceFirewallL3FirewallRules](docs/firewall/README.md#getnetworkappliancefirewalll3firewallrules) - Return the L3 firewall rules for an MX network
* [getNetworkApplianceFirewallL7FirewallRules](docs/firewall/README.md#getnetworkappliancefirewalll7firewallrules) - List the MX L7 firewall rules for an MX network
* [getNetworkApplianceFirewallL7FirewallRulesApplicationCategories](docs/firewall/README.md#getnetworkappliancefirewalll7firewallrulesapplicationcategories) - Return the L7 firewall application categories and their associated applications for an MX network
* [getNetworkApplianceFirewallOneToManyNatRules](docs/firewall/README.md#getnetworkappliancefirewallonetomanynatrules) - Return the 1:Many NAT mapping rules for an MX network
* [getNetworkApplianceFirewallOneToOneNatRules](docs/firewall/README.md#getnetworkappliancefirewallonetoonenatrules) - Return the 1:1 NAT mapping rules for an MX network
* [getNetworkApplianceFirewallPortForwardingRules](docs/firewall/README.md#getnetworkappliancefirewallportforwardingrules) - Return the port forwarding rules for an MX network
* [getNetworkApplianceFirewallSettings](docs/firewall/README.md#getnetworkappliancefirewallsettings) - Return the firewall settings for this network
* [getNetworkWirelessSsidFirewallL3FirewallRules](docs/firewall/README.md#getnetworkwirelessssidfirewalll3firewallrules) - Return the L3 firewall rules for an SSID on an MR network
* [getNetworkWirelessSsidFirewallL7FirewallRules](docs/firewall/README.md#getnetworkwirelessssidfirewalll7firewallrules) - Return the L7 firewall rules for an SSID on an MR network
* [updateNetworkApplianceFirewallCellularFirewallRules](docs/firewall/README.md#updatenetworkappliancefirewallcellularfirewallrules) - Update the cellular firewall rules of an MX network
* [updateNetworkApplianceFirewallFirewalledService](docs/firewall/README.md#updatenetworkappliancefirewallfirewalledservice) - Updates the accessibility settings for the given service ('ICMP', 'web', or 'SNMP')
* [updateNetworkApplianceFirewallInboundCellularFirewallRules](docs/firewall/README.md#updatenetworkappliancefirewallinboundcellularfirewallrules) - Update the inbound cellular firewall rules of an MX network
* [updateNetworkApplianceFirewallInboundFirewallRules](docs/firewall/README.md#updatenetworkappliancefirewallinboundfirewallrules) - Update the inbound firewall rules of an MX network
* [updateNetworkApplianceFirewallL3FirewallRules](docs/firewall/README.md#updatenetworkappliancefirewalll3firewallrules) - Update the L3 firewall rules of an MX network
* [updateNetworkApplianceFirewallL7FirewallRules](docs/firewall/README.md#updatenetworkappliancefirewalll7firewallrules) - Update the MX L7 firewall rules for an MX network
* [updateNetworkApplianceFirewallOneToManyNatRules](docs/firewall/README.md#updatenetworkappliancefirewallonetomanynatrules) - Set the 1:Many NAT mapping rules for an MX network
* [updateNetworkApplianceFirewallOneToOneNatRules](docs/firewall/README.md#updatenetworkappliancefirewallonetoonenatrules) - Set the 1:1 NAT mapping rules for an MX network
* [updateNetworkApplianceFirewallPortForwardingRules](docs/firewall/README.md#updatenetworkappliancefirewallportforwardingrules) - Update the port forwarding rules for an MX network
* [updateNetworkApplianceFirewallSettings](docs/firewall/README.md#updatenetworkappliancefirewallsettings) - Update the firewall settings for this network
* [updateNetworkWirelessSsidFirewallL3FirewallRules](docs/firewall/README.md#updatenetworkwirelessssidfirewalll3firewallrules) - Update the L3 firewall rules of an SSID on an MR network
* [updateNetworkWirelessSsidFirewallL7FirewallRules](docs/firewall/README.md#updatenetworkwirelessssidfirewalll7firewallrules) - Update the L7 firewall rules of an SSID on an MR network

### [firewalledServices](docs/firewalledservices/README.md)

* [getNetworkApplianceFirewallFirewalledService](docs/firewalledservices/README.md#getnetworkappliancefirewallfirewalledservice) - Return the accessibility settings of the given service ('ICMP', 'web', or 'SNMP')
* [getNetworkApplianceFirewallFirewalledServices](docs/firewalledservices/README.md#getnetworkappliancefirewallfirewalledservices) - List the appliance services and their accessibility rules
* [updateNetworkApplianceFirewallFirewalledService](docs/firewalledservices/README.md#updatenetworkappliancefirewallfirewalledservice) - Updates the accessibility settings for the given service ('ICMP', 'web', or 'SNMP')

### [firmware](docs/firmware/README.md)

* [getOrganizationFirmwareUpgrades](docs/firmware/README.md#getorganizationfirmwareupgrades) - Get firmware upgrade information for an organization
* [getOrganizationFirmwareUpgradesByDevice](docs/firmware/README.md#getorganizationfirmwareupgradesbydevice) - Get firmware upgrade status for the filtered devices

### [firmwareUpgrades](docs/firmwareupgrades/README.md)

* [createNetworkFirmwareUpgradesRollback](docs/firmwareupgrades/README.md#createnetworkfirmwareupgradesrollback) - Rollback a Firmware Upgrade For A Network
* [createNetworkFirmwareUpgradesStagedEvent](docs/firmwareupgrades/README.md#createnetworkfirmwareupgradesstagedevent) - Create a Staged Upgrade Event for a network
* [createNetworkFirmwareUpgradesStagedGroup](docs/firmwareupgrades/README.md#createnetworkfirmwareupgradesstagedgroup) - Create a Staged Upgrade Group for a network
* [deferNetworkFirmwareUpgradesStagedEvents](docs/firmwareupgrades/README.md#defernetworkfirmwareupgradesstagedevents) - Postpone by 1 week all pending staged upgrade stages for a network
* [deleteNetworkFirmwareUpgradesStagedGroup](docs/firmwareupgrades/README.md#deletenetworkfirmwareupgradesstagedgroup) - Delete a Staged Upgrade Group
* [getNetworkFirmwareUpgrades](docs/firmwareupgrades/README.md#getnetworkfirmwareupgrades) - Get firmware upgrade information for a network
* [getNetworkFirmwareUpgradesStagedEvents](docs/firmwareupgrades/README.md#getnetworkfirmwareupgradesstagedevents) - Get the Staged Upgrade Event from a network
* [getNetworkFirmwareUpgradesStagedGroup](docs/firmwareupgrades/README.md#getnetworkfirmwareupgradesstagedgroup) - Get a Staged Upgrade Group from a network
* [getNetworkFirmwareUpgradesStagedGroups](docs/firmwareupgrades/README.md#getnetworkfirmwareupgradesstagedgroups) - List of Staged Upgrade Groups in a network
* [getNetworkFirmwareUpgradesStagedStages](docs/firmwareupgrades/README.md#getnetworkfirmwareupgradesstagedstages) - Order of Staged Upgrade Groups in a network
* [rollbacksNetworkFirmwareUpgradesStagedEvents](docs/firmwareupgrades/README.md#rollbacksnetworkfirmwareupgradesstagedevents) - Rollback a Staged Upgrade Event for a network
* [updateNetworkFirmwareUpgrades](docs/firmwareupgrades/README.md#updatenetworkfirmwareupgrades) - Update firmware upgrade information for a network
* [updateNetworkFirmwareUpgradesStagedEvents](docs/firmwareupgrades/README.md#updatenetworkfirmwareupgradesstagedevents) - Update the Staged Upgrade Event for a network
* [updateNetworkFirmwareUpgradesStagedGroup](docs/firmwareupgrades/README.md#updatenetworkfirmwareupgradesstagedgroup) - Update a Staged Upgrade Group for a network
* [updateNetworkFirmwareUpgradesStagedStages](docs/firmwareupgrades/README.md#updatenetworkfirmwareupgradesstagedstages) - Assign Staged Upgrade Group order in the sequence.

### [floorPlans](docs/floorplans/README.md)

* [createNetworkFloorPlan](docs/floorplans/README.md#createnetworkfloorplan) - Upload a floor plan
* [deleteNetworkFloorPlan](docs/floorplans/README.md#deletenetworkfloorplan) - Destroy a floor plan
* [getNetworkFloorPlan](docs/floorplans/README.md#getnetworkfloorplan) - Find a floor plan by ID
* [getNetworkFloorPlans](docs/floorplans/README.md#getnetworkfloorplans) - List the floor plans that belong to your network
* [updateNetworkFloorPlan](docs/floorplans/README.md#updatenetworkfloorplan) - Update a floor plan's geolocation and other meta data

### [groupPolicies](docs/grouppolicies/README.md)

* [createNetworkGroupPolicy](docs/grouppolicies/README.md#createnetworkgrouppolicy) - Create a group policy
* [deleteNetworkGroupPolicy](docs/grouppolicies/README.md#deletenetworkgrouppolicy) - Delete a group policy
* [getNetworkGroupPolicies](docs/grouppolicies/README.md#getnetworkgrouppolicies) - List the group policies in a network
* [getNetworkGroupPolicy](docs/grouppolicies/README.md#getnetworkgrouppolicy) - Display a group policy
* [updateNetworkGroupPolicy](docs/grouppolicies/README.md#updatenetworkgrouppolicy) - Update a group policy

### [groups](docs/groups/README.md)

* [createNetworkFirmwareUpgradesStagedGroup](docs/groups/README.md#createnetworkfirmwareupgradesstagedgroup) - Create a Staged Upgrade Group for a network
* [createOrganizationAdaptivePolicyGroup](docs/groups/README.md#createorganizationadaptivepolicygroup) - Creates a new adaptive policy group
* [createOrganizationPolicyObjectsGroup](docs/groups/README.md#createorganizationpolicyobjectsgroup) - Creates a new Policy Object Group.
* [deleteNetworkFirmwareUpgradesStagedGroup](docs/groups/README.md#deletenetworkfirmwareupgradesstagedgroup) - Delete a Staged Upgrade Group
* [deleteOrganizationAdaptivePolicyGroup](docs/groups/README.md#deleteorganizationadaptivepolicygroup) - Deletes the specified adaptive policy group and any associated policies and references
* [deleteOrganizationPolicyObjectsGroup](docs/groups/README.md#deleteorganizationpolicyobjectsgroup) - Deletes a Policy Object Group.
* [getNetworkFirmwareUpgradesStagedGroup](docs/groups/README.md#getnetworkfirmwareupgradesstagedgroup) - Get a Staged Upgrade Group from a network
* [getNetworkFirmwareUpgradesStagedGroups](docs/groups/README.md#getnetworkfirmwareupgradesstagedgroups) - List of Staged Upgrade Groups in a network
* [getOrganizationAdaptivePolicyGroup](docs/groups/README.md#getorganizationadaptivepolicygroup) - Returns an adaptive policy group
* [getOrganizationAdaptivePolicyGroups](docs/groups/README.md#getorganizationadaptivepolicygroups) - List adaptive policy groups in a organization
* [getOrganizationPolicyObjectsGroup](docs/groups/README.md#getorganizationpolicyobjectsgroup) - Shows details of a Policy Object Group.
* [getOrganizationPolicyObjectsGroups](docs/groups/README.md#getorganizationpolicyobjectsgroups) - Lists Policy Object Groups belonging to the organization.
* [updateNetworkFirmwareUpgradesStagedGroup](docs/groups/README.md#updatenetworkfirmwareupgradesstagedgroup) - Update a Staged Upgrade Group for a network
* [updateOrganizationAdaptivePolicyGroup](docs/groups/README.md#updateorganizationadaptivepolicygroup) - Updates an adaptive policy group
* [updateOrganizationPolicyObjectsGroup](docs/groups/README.md#updateorganizationpolicyobjectsgroup) - Updates a Policy Object Group.

### [health](docs/health/README.md)

* [getNetworkHealthAlerts](docs/health/README.md#getnetworkhealthalerts) - Return all global alerts on this network

### [healthByTime](docs/healthbytime/README.md)

* [getNetworkInsightApplicationHealthByTime](docs/healthbytime/README.md#getnetworkinsightapplicationhealthbytime) - Get application health by time

### [history](docs/history/README.md)

* [getDeviceCameraAnalyticsZoneHistory](docs/history/README.md#getdevicecameraanalyticszonehistory) - Return historical records for analytic zones
* [getNetworkAlertsHistory](docs/history/README.md#getnetworkalertshistory) - Return the alert history for this network
* [getOrganizationSensorReadingsHistory](docs/history/README.md#getorganizationsensorreadingshistory) - Return all reported readings from sensors in a given timespan, sorted by timestamp

### [hotspot20](docs/hotspot20/README.md)

* [getNetworkWirelessSsidHotspot20](docs/hotspot20/README.md#getnetworkwirelessssidhotspot20) - Return the Hotspot 2.0 settings for an SSID
* [updateNetworkWirelessSsidHotspot20](docs/hotspot20/README.md#updatenetworkwirelessssidhotspot20) - Update the Hotspot 2.0 settings of an SSID

### [httpServers](docs/httpservers/README.md)

* [createNetworkWebhooksHttpServer](docs/httpservers/README.md#createnetworkwebhookshttpserver) - Add an HTTP server to a network
* [deleteNetworkWebhooksHttpServer](docs/httpservers/README.md#deletenetworkwebhookshttpserver) - Delete an HTTP server from a network
* [getNetworkWebhooksHttpServer](docs/httpservers/README.md#getnetworkwebhookshttpserver) - Return an HTTP server for a network
* [getNetworkWebhooksHttpServers](docs/httpservers/README.md#getnetworkwebhookshttpservers) - List the HTTP servers for a network
* [updateNetworkWebhooksHttpServer](docs/httpservers/README.md#updatenetworkwebhookshttpserver) - Update an HTTP server

### [identities](docs/identities/README.md)

* [getAdministeredIdentitiesMe](docs/identities/README.md#getadministeredidentitiesme) - Returns the identity of the current user.

### [identityPsks](docs/identitypsks/README.md)

* [createNetworkWirelessSsidIdentityPsk](docs/identitypsks/README.md#createnetworkwirelessssididentitypsk) - Create an Identity PSK
* [deleteNetworkWirelessSsidIdentityPsk](docs/identitypsks/README.md#deletenetworkwirelessssididentitypsk) - Delete an Identity PSK
* [getNetworkWirelessSsidIdentityPsk](docs/identitypsks/README.md#getnetworkwirelessssididentitypsk) - Return an Identity PSK
* [getNetworkWirelessSsidIdentityPsks](docs/identitypsks/README.md#getnetworkwirelessssididentitypsks) - List all Identity PSKs in a wireless network
* [updateNetworkWirelessSsidIdentityPsk](docs/identitypsks/README.md#updatenetworkwirelessssididentitypsk) - Update an Identity PSK

### [idps](docs/idps/README.md)

* [createOrganizationSamlIdp](docs/idps/README.md#createorganizationsamlidp) - Create a SAML IdP for your organization.
* [deleteOrganizationSamlIdp](docs/idps/README.md#deleteorganizationsamlidp) - Remove a SAML IdP in your organization.
* [getOrganizationSamlIdp](docs/idps/README.md#getorganizationsamlidp) - Get a SAML IdP from your organization.
* [getOrganizationSamlIdps](docs/idps/README.md#getorganizationsamlidps) - List the SAML IdPs in your organization.
* [updateOrganizationSamlIdp](docs/idps/README.md#updateorganizationsamlidp) - Update a SAML IdP in your organization

### [imports](docs/imports/README.md)

* [createOrganizationInventoryOnboardingCloudMonitoringImport](docs/imports/README.md#createorganizationinventoryonboardingcloudmonitoringimport) - Commits the import operation to complete the onboarding of a device into Dashboard for monitoring.
* [getOrganizationInventoryOnboardingCloudMonitoringImports](docs/imports/README.md#getorganizationinventoryonboardingcloudmonitoringimports) - Check the status of a committed Import operation

### [inboundCellularFirewallRules](docs/inboundcellularfirewallrules/README.md)

* [getNetworkApplianceFirewallInboundCellularFirewallRules](docs/inboundcellularfirewallrules/README.md#getnetworkappliancefirewallinboundcellularfirewallrules) - Return the inbound cellular firewall rules for an MX network
* [updateNetworkApplianceFirewallInboundCellularFirewallRules](docs/inboundcellularfirewallrules/README.md#updatenetworkappliancefirewallinboundcellularfirewallrules) - Update the inbound cellular firewall rules of an MX network

### [inboundFirewallRules](docs/inboundfirewallrules/README.md)

* [getNetworkApplianceFirewallInboundFirewallRules](docs/inboundfirewallrules/README.md#getnetworkappliancefirewallinboundfirewallrules) - Return the inbound firewall rules for an MX network
* [updateNetworkApplianceFirewallInboundFirewallRules](docs/inboundfirewallrules/README.md#updatenetworkappliancefirewallinboundfirewallrules) - Update the inbound firewall rules of an MX network

### [insight](docs/insight/README.md)

* [createOrganizationInsightMonitoredMediaServer](docs/insight/README.md#createorganizationinsightmonitoredmediaserver) - Add a media server to be monitored for this organization
* [deleteOrganizationInsightMonitoredMediaServer](docs/insight/README.md#deleteorganizationinsightmonitoredmediaserver) - Delete a monitored media server from this organization
* [getNetworkInsightApplicationHealthByTime](docs/insight/README.md#getnetworkinsightapplicationhealthbytime) - Get application health by time
* [getOrganizationInsightApplications](docs/insight/README.md#getorganizationinsightapplications) - List all Insight tracked applications
* [getOrganizationInsightMonitoredMediaServer](docs/insight/README.md#getorganizationinsightmonitoredmediaserver) - Return a monitored media server for this organization
* [getOrganizationInsightMonitoredMediaServers](docs/insight/README.md#getorganizationinsightmonitoredmediaservers) - List the monitored media servers for this organization
* [updateOrganizationInsightMonitoredMediaServer](docs/insight/README.md#updateorganizationinsightmonitoredmediaserver) - Update a monitored media server for this organization

### [interfaces](docs/interfaces/README.md)

* [createDeviceSwitchRoutingInterface](docs/interfaces/README.md#createdeviceswitchroutinginterface) - Create a layer 3 interface for a switch
* [createNetworkSwitchStackRoutingInterface](docs/interfaces/README.md#createnetworkswitchstackroutinginterface) - Create a layer 3 interface for a switch stack
* [deleteDeviceSwitchRoutingInterface](docs/interfaces/README.md#deletedeviceswitchroutinginterface) - Delete a layer 3 interface from the switch
* [deleteNetworkSwitchStackRoutingInterface](docs/interfaces/README.md#deletenetworkswitchstackroutinginterface) - Delete a layer 3 interface from a switch stack
* [getDeviceSwitchRoutingInterface](docs/interfaces/README.md#getdeviceswitchroutinginterface) - Return a layer 3 interface for a switch
* [getDeviceSwitchRoutingInterfaceDhcp](docs/interfaces/README.md#getdeviceswitchroutinginterfacedhcp) - Return a layer 3 interface DHCP configuration for a switch
* [getDeviceSwitchRoutingInterfaces](docs/interfaces/README.md#getdeviceswitchroutinginterfaces) - List layer 3 interfaces for a switch
* [getNetworkSwitchStackRoutingInterface](docs/interfaces/README.md#getnetworkswitchstackroutinginterface) - Return a layer 3 interface from a switch stack
* [getNetworkSwitchStackRoutingInterfaceDhcp](docs/interfaces/README.md#getnetworkswitchstackroutinginterfacedhcp) - Return a layer 3 interface DHCP configuration for a switch stack
* [getNetworkSwitchStackRoutingInterfaces](docs/interfaces/README.md#getnetworkswitchstackroutinginterfaces) - List layer 3 interfaces for a switch stack
* [updateDeviceSwitchRoutingInterface](docs/interfaces/README.md#updatedeviceswitchroutinginterface) - Update a layer 3 interface for a switch
* [updateDeviceSwitchRoutingInterfaceDhcp](docs/interfaces/README.md#updatedeviceswitchroutinginterfacedhcp) - Update a layer 3 interface DHCP configuration for a switch
* [updateNetworkSwitchStackRoutingInterface](docs/interfaces/README.md#updatenetworkswitchstackroutinginterface) - Update a layer 3 interface for a switch stack
* [updateNetworkSwitchStackRoutingInterfaceDhcp](docs/interfaces/README.md#updatenetworkswitchstackroutinginterfacedhcp) - Update a layer 3 interface DHCP configuration for a switch stack

### [intrusion](docs/intrusion/README.md)

* [getNetworkApplianceSecurityIntrusion](docs/intrusion/README.md#getnetworkappliancesecurityintrusion) - Returns all supported intrusion settings for an MX network
* [getOrganizationApplianceSecurityIntrusion](docs/intrusion/README.md#getorganizationappliancesecurityintrusion) - Returns all supported intrusion settings for an organization
* [updateNetworkApplianceSecurityIntrusion](docs/intrusion/README.md#updatenetworkappliancesecurityintrusion) - Set the supported intrusion settings for an MX network
* [updateOrganizationApplianceSecurityIntrusion](docs/intrusion/README.md#updateorganizationappliancesecurityintrusion) - Sets supported intrusion settings for an organization

### [inventory](docs/inventory/README.md)

* [claimIntoOrganizationInventory](docs/inventory/README.md#claimintoorganizationinventory) - Claim a list of devices, licenses, and/or orders into an organization inventory
* [createOrganizationInventoryOnboardingCloudMonitoringExportEvent](docs/inventory/README.md#createorganizationinventoryonboardingcloudmonitoringexportevent) - Imports event logs related to the onboarding app into elastisearch
* [createOrganizationInventoryOnboardingCloudMonitoringImport](docs/inventory/README.md#createorganizationinventoryonboardingcloudmonitoringimport) - Commits the import operation to complete the onboarding of a device into Dashboard for monitoring.
* [createOrganizationInventoryOnboardingCloudMonitoringPrepare](docs/inventory/README.md#createorganizationinventoryonboardingcloudmonitoringprepare) - Initiates or updates an import session
* [getOrganizationInventoryDevice](docs/inventory/README.md#getorganizationinventorydevice) - Return a single device from the inventory of an organization
* [getOrganizationInventoryDevices](docs/inventory/README.md#getorganizationinventorydevices) - Return the device inventory for an organization
* [getOrganizationInventoryOnboardingCloudMonitoringImports](docs/inventory/README.md#getorganizationinventoryonboardingcloudmonitoringimports) - Check the status of a committed Import operation
* [getOrganizationInventoryOnboardingCloudMonitoringNetworks](docs/inventory/README.md#getorganizationinventoryonboardingcloudmonitoringnetworks) - Returns list of networks eligible for adding cloud monitored device
* [releaseFromOrganizationInventory](docs/inventory/README.md#releasefromorganizationinventory) - Release a list of claimed devices from an organization.

### [l3FirewallRules](docs/l3firewallrules/README.md)

* [getNetworkApplianceFirewallL3FirewallRules](docs/l3firewallrules/README.md#getnetworkappliancefirewalll3firewallrules) - Return the L3 firewall rules for an MX network
* [getNetworkWirelessSsidFirewallL3FirewallRules](docs/l3firewallrules/README.md#getnetworkwirelessssidfirewalll3firewallrules) - Return the L3 firewall rules for an SSID on an MR network
* [updateNetworkApplianceFirewallL3FirewallRules](docs/l3firewallrules/README.md#updatenetworkappliancefirewalll3firewallrules) - Update the L3 firewall rules of an MX network
* [updateNetworkWirelessSsidFirewallL3FirewallRules](docs/l3firewallrules/README.md#updatenetworkwirelessssidfirewalll3firewallrules) - Update the L3 firewall rules of an SSID on an MR network

### [l7FirewallRules](docs/l7firewallrules/README.md)

* [getNetworkApplianceFirewallL7FirewallRules](docs/l7firewallrules/README.md#getnetworkappliancefirewalll7firewallrules) - List the MX L7 firewall rules for an MX network
* [getNetworkApplianceFirewallL7FirewallRulesApplicationCategories](docs/l7firewallrules/README.md#getnetworkappliancefirewalll7firewallrulesapplicationcategories) - Return the L7 firewall application categories and their associated applications for an MX network
* [getNetworkWirelessSsidFirewallL7FirewallRules](docs/l7firewallrules/README.md#getnetworkwirelessssidfirewalll7firewallrules) - Return the L7 firewall rules for an SSID on an MR network
* [updateNetworkApplianceFirewallL7FirewallRules](docs/l7firewallrules/README.md#updatenetworkappliancefirewalll7firewallrules) - Update the MX L7 firewall rules for an MX network
* [updateNetworkWirelessSsidFirewallL7FirewallRules](docs/l7firewallrules/README.md#updatenetworkwirelessssidfirewalll7firewallrules) - Update the L7 firewall rules of an SSID on an MR network

### [lan](docs/lan/README.md)

* [getDeviceCellularGatewayLan](docs/lan/README.md#getdevicecellulargatewaylan) - Show the LAN Settings of a MG
* [updateDeviceCellularGatewayLan](docs/lan/README.md#updatedevicecellulargatewaylan) - Update the LAN Settings for a single MG.

### [latencyHistory](docs/latencyhistory/README.md)

* [getNetworkWirelessClientLatencyHistory](docs/latencyhistory/README.md#getnetworkwirelessclientlatencyhistory) - Return the latency history for a client
* [getNetworkWirelessLatencyHistory](docs/latencyhistory/README.md#getnetworkwirelesslatencyhistory) - Return average wireless latency over time for a network, device, or network client

### [latencyStats](docs/latencystats/README.md)

* [getDeviceWirelessLatencyStats](docs/latencystats/README.md#getdevicewirelesslatencystats) - Aggregated latency info for a given AP on this network
* [getNetworkWirelessClientLatencyStats](docs/latencystats/README.md#getnetworkwirelessclientlatencystats) - Aggregated latency info for a given client on this network
* [getNetworkWirelessClientsLatencyStats](docs/latencystats/README.md#getnetworkwirelessclientslatencystats) - Aggregated latency info for this network, grouped by clients
* [getNetworkWirelessDevicesLatencyStats](docs/latencystats/README.md#getnetworkwirelessdeviceslatencystats) - Aggregated latency info for this network, grouped by node
* [getNetworkWirelessLatencyStats](docs/latencystats/README.md#getnetworkwirelesslatencystats) - Aggregated latency info for this network

### [latest](docs/latest/README.md)

* [getOrganizationSensorReadingsLatest](docs/latest/README.md#getorganizationsensorreadingslatest) - Return the latest available reading for each metric from each sensor, sorted by sensor serial

### [licenses](docs/licenses/README.md)

* [assignOrganizationLicensesSeats](docs/licenses/README.md#assignorganizationlicensesseats) - Assign SM seats to a network
* [getOrganizationLicense](docs/licenses/README.md#getorganizationlicense) - Display a license
* [getOrganizationLicenses](docs/licenses/README.md#getorganizationlicenses) - List the licenses for an organization
* [getOrganizationLicensesOverview](docs/licenses/README.md#getorganizationlicensesoverview) - Return an overview of the license state for an organization
* [getOrganizationLicensingCotermLicenses](docs/licenses/README.md#getorganizationlicensingcotermlicenses) - List the licenses in a coterm organization
* [moveOrganizationLicenses](docs/licenses/README.md#moveorganizationlicenses) - Move licenses to another organization
* [moveOrganizationLicensesSeats](docs/licenses/README.md#moveorganizationlicensesseats) - Move SM seats to another organization
* [moveOrganizationLicensingCotermLicenses](docs/licenses/README.md#moveorganizationlicensingcotermlicenses) - Moves a license to a different organization (coterm only)
* [renewOrganizationLicensesSeats](docs/licenses/README.md#reneworganizationlicensesseats) - Renew SM seats of a license
* [updateOrganizationLicense](docs/licenses/README.md#updateorganizationlicense) - Update a license

### [licensing](docs/licensing/README.md)

* [getOrganizationLicensingCotermLicenses](docs/licensing/README.md#getorganizationlicensingcotermlicenses) - List the licenses in a coterm organization
* [moveOrganizationLicensingCotermLicenses](docs/licensing/README.md#moveorganizationlicensingcotermlicenses) - Moves a license to a different organization (coterm only)

### [linkAggregations](docs/linkaggregations/README.md)

* [createNetworkSwitchLinkAggregation](docs/linkaggregations/README.md#createnetworkswitchlinkaggregation) - Create a link aggregation group
* [deleteNetworkSwitchLinkAggregation](docs/linkaggregations/README.md#deletenetworkswitchlinkaggregation) - Split a link aggregation group into separate ports
* [getNetworkSwitchLinkAggregations](docs/linkaggregations/README.md#getnetworkswitchlinkaggregations) - List link aggregation groups
* [updateNetworkSwitchLinkAggregation](docs/linkaggregations/README.md#updatenetworkswitchlinkaggregation) - Update a link aggregation group

### [linkLayer](docs/linklayer/README.md)

* [getNetworkTopologyLinkLayer](docs/linklayer/README.md#getnetworktopologylinklayer) - List the LLDP and CDP information for all discovered devices and connections in a network.

### [live](docs/live/README.md)

* [getDeviceCameraAnalyticsLive](docs/live/README.md#getdevicecameraanalyticslive) - Returns live state from camera of analytics zones

### [liveTools](docs/livetools/README.md)

* [blinkDeviceLeds](docs/livetools/README.md#blinkdeviceleds) - Blink the LEDs on a device
* [createDeviceLiveToolsPing](docs/livetools/README.md#createdevicelivetoolsping) - Enqueue a job to ping a target host from the device
* [createDeviceLiveToolsPingDevice](docs/livetools/README.md#createdevicelivetoolspingdevice) - Enqueue a job to check connectivity status to the device
* [cycleDeviceSwitchPorts](docs/livetools/README.md#cycledeviceswitchports) - Cycle a set of switch ports
* [getDeviceLiveToolsPing](docs/livetools/README.md#getdevicelivetoolsping) - Return a ping job
* [getDeviceLiveToolsPingDevice](docs/livetools/README.md#getdevicelivetoolspingdevice) - Return a ping device job
* [rebootDevice](docs/livetools/README.md#rebootdevice) - Reboot a device

### [lldpCdp](docs/lldpcdp/README.md)

* [getDeviceLldpCdp](docs/lldpcdp/README.md#getdevicelldpcdp) - List LLDP and CDP information for a device

### [loginSecurity](docs/loginsecurity/README.md)

* [getOrganizationLoginSecurity](docs/loginsecurity/README.md#getorganizationloginsecurity) - Returns the login security settings for an organization.
* [updateOrganizationLoginSecurity](docs/loginsecurity/README.md#updateorganizationloginsecurity) - Update the login security settings for an organization

### [logs](docs/logs/README.md)

* [getOrganizationWebhooksLogs](docs/logs/README.md#getorganizationwebhookslogs) - Return the log of webhook POSTs sent

### [lossAndLatencyHistory](docs/lossandlatencyhistory/README.md)

* [getDeviceLossAndLatencyHistory](docs/lossandlatencyhistory/README.md#getdevicelossandlatencyhistory) - Get the uplink loss percentage and latency in milliseconds, and goodput in kilobits per second for a wired network device.

### [malware](docs/malware/README.md)

* [getNetworkApplianceSecurityMalware](docs/malware/README.md#getnetworkappliancesecuritymalware) - Returns all supported malware settings for an MX network
* [updateNetworkApplianceSecurityMalware](docs/malware/README.md#updatenetworkappliancesecuritymalware) - Set the supported malware settings for an MX network

### [managementInterface](docs/managementinterface/README.md)

* [getDeviceManagementInterface](docs/managementinterface/README.md#getdevicemanagementinterface) - Return the management interface settings for a device
* [updateDeviceManagementInterface](docs/managementinterface/README.md#updatedevicemanagementinterface) - Update the management interface settings for a device

### [manufacturers](docs/manufacturers/README.md)

* [getOrganizationSummaryTopClientsManufacturersByUsage](docs/manufacturers/README.md#getorganizationsummarytopclientsmanufacturersbyusage) - Return metrics for organization's top clients by data usage (in mb) over given time range, grouped by manufacturer.

### [me](docs/me/README.md)

* [getAdministeredIdentitiesMe](docs/me/README.md#getadministeredidentitiesme) - Returns the identity of the current user.

### [merakiAuthUsers](docs/merakiauthusers/README.md)

* [createNetworkMerakiAuthUser](docs/merakiauthusers/README.md#createnetworkmerakiauthuser) - Authorize a user configured with Meraki Authentication for a network (currently supports 802.1X, splash guest, and client VPN users, and currently, organizations have a 50,000 user cap)
* [deleteNetworkMerakiAuthUser](docs/merakiauthusers/README.md#deletenetworkmerakiauthuser) - Deauthorize a user
* [getNetworkMerakiAuthUser](docs/merakiauthusers/README.md#getnetworkmerakiauthuser) - Return the Meraki Auth splash guest, RADIUS, or client VPN user
* [getNetworkMerakiAuthUsers](docs/merakiauthusers/README.md#getnetworkmerakiauthusers) - List the users configured under Meraki Authentication for a network (splash guest or RADIUS users for a wireless network, or client VPN users for a wired network)
* [updateNetworkMerakiAuthUser](docs/merakiauthusers/README.md#updatenetworkmerakiauthuser) - Update a user configured with Meraki Authentication (currently, 802.1X RADIUS, splash guest, and client VPN users can be updated)

### [meshStatuses](docs/meshstatuses/README.md)

* [getNetworkWirelessMeshStatuses](docs/meshstatuses/README.md#getnetworkwirelessmeshstatuses) - List wireless mesh statuses for repeaters

### [models](docs/models/README.md)

* [getOrganizationSummaryTopDevicesModelsByUsage](docs/models/README.md#getorganizationsummarytopdevicesmodelsbyusage) - Return metrics for organization's top 10 device models sorted by data usage over given time range

### [monitor](docs/monitor/README.md)

* [generateDeviceCameraSnapshot](docs/monitor/README.md#generatedevicecamerasnapshot) - Generate a snapshot of what the camera sees at the specified time and return a link to that image.
* [getAdministeredIdentitiesMe](docs/monitor/README.md#getadministeredidentitiesme) - Returns the identity of the current user.
* [getDeviceApplianceDhcpSubnets](docs/monitor/README.md#getdeviceappliancedhcpsubnets) - Return the DHCP subnet information for an appliance
* [getDeviceAppliancePerformance](docs/monitor/README.md#getdeviceapplianceperformance) - Return the performance score for a single MX
* [getDeviceAppliancePrefixesDelegated](docs/monitor/README.md#getdeviceapplianceprefixesdelegated) - Return current delegated IPv6 prefixes on an appliance.
* [getDeviceAppliancePrefixesDelegatedVlanAssignments](docs/monitor/README.md#getdeviceapplianceprefixesdelegatedvlanassignments) - Return prefixes assigned to all IPv6 enabled VLANs on an appliance.
* [getDeviceCameraAnalyticsLive](docs/monitor/README.md#getdevicecameraanalyticslive) - Returns live state from camera of analytics zones
* [getDeviceCameraAnalyticsOverview](docs/monitor/README.md#getdevicecameraanalyticsoverview) - Returns an overview of aggregate analytics data for a timespan
* [getDeviceCameraAnalyticsRecent](docs/monitor/README.md#getdevicecameraanalyticsrecent) - Returns most recent record for analytics zones
* [getDeviceCameraAnalyticsZoneHistory](docs/monitor/README.md#getdevicecameraanalyticszonehistory) - Return historical records for analytic zones
* [getDeviceCameraAnalyticsZones](docs/monitor/README.md#getdevicecameraanalyticszones) - Returns all configured analytic zones for this camera
* [getDeviceClients](docs/monitor/README.md#getdeviceclients) - List the clients of a device, up to a maximum of a month ago
* [getDeviceLldpCdp](docs/monitor/README.md#getdevicelldpcdp) - List LLDP and CDP information for a device
* [getDeviceLossAndLatencyHistory](docs/monitor/README.md#getdevicelossandlatencyhistory) - Get the uplink loss percentage and latency in milliseconds, and goodput in kilobits per second for a wired network device.
* [getDeviceSwitchPortsStatuses](docs/monitor/README.md#getdeviceswitchportsstatuses) - Return the status for all the ports of a switch
* [getDeviceSwitchPortsStatusesPackets](docs/monitor/README.md#getdeviceswitchportsstatusespackets) - Return the packet counters for all the ports of a switch
* [getDeviceWirelessConnectionStats](docs/monitor/README.md#getdevicewirelessconnectionstats) - Aggregated connectivity info for a given AP on this network
* [getDeviceWirelessLatencyStats](docs/monitor/README.md#getdevicewirelesslatencystats) - Aggregated latency info for a given AP on this network
* [getDeviceWirelessStatus](docs/monitor/README.md#getdevicewirelessstatus) - Return the SSID statuses of an access point
* [getNetworkAlertsHistory](docs/monitor/README.md#getnetworkalertshistory) - Return the alert history for this network
* [getNetworkApplianceClientSecurityEvents](docs/monitor/README.md#getnetworkapplianceclientsecurityevents) - List the security events for a client
* [getNetworkApplianceSecurityEvents](docs/monitor/README.md#getnetworkappliancesecurityevents) - List the security events for a network
* [getNetworkApplianceUplinksUsageHistory](docs/monitor/README.md#getnetworkapplianceuplinksusagehistory) - Get the sent and received bytes for each uplink of a network.
* [getNetworkBluetoothClient](docs/monitor/README.md#getnetworkbluetoothclient) - Return a Bluetooth client
* [getNetworkBluetoothClients](docs/monitor/README.md#getnetworkbluetoothclients) - List the Bluetooth clients seen by APs in this network
* [getNetworkClient](docs/monitor/README.md#getnetworkclient) - Return the client associated with the given identifier
* [getNetworkClientTrafficHistory](docs/monitor/README.md#getnetworkclienttraffichistory) - Return the client's network traffic data over time
* [getNetworkClientUsageHistory](docs/monitor/README.md#getnetworkclientusagehistory) - Return the client's daily usage history
* [getNetworkClients](docs/monitor/README.md#getnetworkclients) - List the clients that have used this network in the timespan
* [getNetworkClientsApplicationUsage](docs/monitor/README.md#getnetworkclientsapplicationusage) - Return the application usage data for clients
* [getNetworkClientsBandwidthUsageHistory](docs/monitor/README.md#getnetworkclientsbandwidthusagehistory) - Returns a timeseries of total traffic consumption rates for all clients on a network within a given timespan, in megabits per second.
* [getNetworkClientsOverview](docs/monitor/README.md#getnetworkclientsoverview) - Return overview statistics for network clients
* [getNetworkClientsUsageHistories](docs/monitor/README.md#getnetworkclientsusagehistories) - Return the usage histories for clients
* [getNetworkEvents](docs/monitor/README.md#getnetworkevents) - List the events for the network
* [getNetworkEventsEventTypes](docs/monitor/README.md#getnetworkeventseventtypes) - List the event type to human-readable description
* [getNetworkInsightApplicationHealthByTime](docs/monitor/README.md#getnetworkinsightapplicationhealthbytime) - Get application health by time
* [getNetworkNetworkHealthChannelUtilization](docs/monitor/README.md#getnetworknetworkhealthchannelutilization) - Get the channel utilization over each radio for all APs in a network.
* [getNetworkSensorAlertsCurrentOverviewByMetric](docs/monitor/README.md#getnetworksensoralertscurrentoverviewbymetric) - Return an overview of currently alerting sensors by metric
* [getNetworkSensorAlertsOverviewByMetric](docs/monitor/README.md#getnetworksensoralertsoverviewbymetric) - Return an overview of alert occurrences over a timespan, by metric
* [getNetworkSmDeviceCellularUsageHistory](docs/monitor/README.md#getnetworksmdevicecellularusagehistory) - Return the client's daily cellular data usage history
* [getNetworkSmDeviceConnectivity](docs/monitor/README.md#getnetworksmdeviceconnectivity) - Returns historical connectivity data (whether a device is regularly checking in to Dashboard).
* [getNetworkSmDeviceDesktopLogs](docs/monitor/README.md#getnetworksmdevicedesktoplogs) - Return historical records of various Systems Manager network connection details for desktop devices.
* [getNetworkSmDeviceDeviceCommandLogs](docs/monitor/README.md#getnetworksmdevicedevicecommandlogs) - Return historical records of commands sent to Systems Manager devices
* [getNetworkSmDevicePerformanceHistory](docs/monitor/README.md#getnetworksmdeviceperformancehistory) - Return historical records of various Systems Manager client metrics for desktop devices.
* [getNetworkSplashLoginAttempts](docs/monitor/README.md#getnetworksplashloginattempts) - List the splash login attempts for a network
* [getNetworkTopologyLinkLayer](docs/monitor/README.md#getnetworktopologylinklayer) - List the LLDP and CDP information for all discovered devices and connections in a network.
* [getNetworkTraffic](docs/monitor/README.md#getnetworktraffic) - Return the traffic analysis data for this network
* [getNetworkWirelessAirMarshal](docs/monitor/README.md#getnetworkwirelessairmarshal) - List Air Marshal scan results from a network
* [getNetworkWirelessChannelUtilizationHistory](docs/monitor/README.md#getnetworkwirelesschannelutilizationhistory) - Return AP channel utilization over time for a device or network client
* [getNetworkWirelessClientConnectionStats](docs/monitor/README.md#getnetworkwirelessclientconnectionstats) - Aggregated connectivity info for a given client on this network
* [getNetworkWirelessClientConnectivityEvents](docs/monitor/README.md#getnetworkwirelessclientconnectivityevents) - List the wireless connectivity events for a client within a network in the timespan.
* [getNetworkWirelessClientCountHistory](docs/monitor/README.md#getnetworkwirelessclientcounthistory) - Return wireless client counts over time for a network, device, or network client
* [getNetworkWirelessClientLatencyHistory](docs/monitor/README.md#getnetworkwirelessclientlatencyhistory) - Return the latency history for a client
* [getNetworkWirelessClientLatencyStats](docs/monitor/README.md#getnetworkwirelessclientlatencystats) - Aggregated latency info for a given client on this network
* [getNetworkWirelessClientsConnectionStats](docs/monitor/README.md#getnetworkwirelessclientsconnectionstats) - Aggregated connectivity info for this network, grouped by clients
* [getNetworkWirelessClientsLatencyStats](docs/monitor/README.md#getnetworkwirelessclientslatencystats) - Aggregated latency info for this network, grouped by clients
* [getNetworkWirelessConnectionStats](docs/monitor/README.md#getnetworkwirelessconnectionstats) - Aggregated connectivity info for this network
* [getNetworkWirelessDataRateHistory](docs/monitor/README.md#getnetworkwirelessdataratehistory) - Return PHY data rates over time for a network, device, or network client
* [getNetworkWirelessDevicesConnectionStats](docs/monitor/README.md#getnetworkwirelessdevicesconnectionstats) - Aggregated connectivity info for this network, grouped by node
* [getNetworkWirelessDevicesLatencyStats](docs/monitor/README.md#getnetworkwirelessdeviceslatencystats) - Aggregated latency info for this network, grouped by node
* [getNetworkWirelessFailedConnections](docs/monitor/README.md#getnetworkwirelessfailedconnections) - List of all failed client connection events on this network in a given time range
* [getNetworkWirelessLatencyHistory](docs/monitor/README.md#getnetworkwirelesslatencyhistory) - Return average wireless latency over time for a network, device, or network client
* [getNetworkWirelessLatencyStats](docs/monitor/README.md#getnetworkwirelesslatencystats) - Aggregated latency info for this network
* [getNetworkWirelessMeshStatuses](docs/monitor/README.md#getnetworkwirelessmeshstatuses) - List wireless mesh statuses for repeaters
* [getNetworkWirelessSignalQualityHistory](docs/monitor/README.md#getnetworkwirelesssignalqualityhistory) - Return signal quality (SNR/RSSI) over time for a device or network client
* [getNetworkWirelessUsageHistory](docs/monitor/README.md#getnetworkwirelessusagehistory) - Return AP usage over time for a device or network client
* [getOrganizationAdaptivePolicyOverview](docs/monitor/README.md#getorganizationadaptivepolicyoverview) - Returns adaptive policy aggregate statistics for an organization
* [getOrganizationApiRequests](docs/monitor/README.md#getorganizationapirequests) - List the API requests made by an organization
* [getOrganizationApiRequestsOverview](docs/monitor/README.md#getorganizationapirequestsoverview) - Return an aggregated overview of API requests data
* [getOrganizationApiRequestsOverviewResponseCodesByInterval](docs/monitor/README.md#getorganizationapirequestsoverviewresponsecodesbyinterval) - Tracks organizations' API requests by response code across a given time period
* [getOrganizationApplianceSecurityEvents](docs/monitor/README.md#getorganizationappliancesecurityevents) - List the security events for an organization
* [getOrganizationApplianceUplinkStatuses](docs/monitor/README.md#getorganizationapplianceuplinkstatuses) - List the uplink status of every Meraki MX and Z series appliances in the organization
* [getOrganizationApplianceVpnStats](docs/monitor/README.md#getorganizationappliancevpnstats) - Show VPN history stat for networks in an organization
* [getOrganizationApplianceVpnStatuses](docs/monitor/README.md#getorganizationappliancevpnstatuses) - Show VPN status for networks in an organization
* [getOrganizationCellularGatewayUplinkStatuses](docs/monitor/README.md#getorganizationcellulargatewayuplinkstatuses) - List the uplink status of every Meraki MG cellular gateway in the organization
* [getOrganizationClientsBandwidthUsageHistory](docs/monitor/README.md#getorganizationclientsbandwidthusagehistory) - Return data usage (in megabits per second) over time for all clients in the given organization within a given time range.
* [getOrganizationClientsOverview](docs/monitor/README.md#getorganizationclientsoverview) - Return summary information around client data usage (in mb) across the given organization.
* [getOrganizationConfigurationChanges](docs/monitor/README.md#getorganizationconfigurationchanges) - View the Change Log for your organization
* [getOrganizationDevicesAvailabilities](docs/monitor/README.md#getorganizationdevicesavailabilities) - List the availability information for devices in an organization
* [getOrganizationDevicesPowerModulesStatusesByDevice](docs/monitor/README.md#getorganizationdevicespowermodulesstatusesbydevice) - List the power status information for devices in an organization
* [getOrganizationDevicesStatuses](docs/monitor/README.md#getorganizationdevicesstatuses) - List the status of every Meraki device in the organization
* [getOrganizationDevicesStatusesOverview](docs/monitor/README.md#getorganizationdevicesstatusesoverview) - Return an overview of current device statuses
* [getOrganizationDevicesUplinksAddressesByDevice](docs/monitor/README.md#getorganizationdevicesuplinksaddressesbydevice) - List the current uplink addresses for devices in an organization.
* [getOrganizationDevicesUplinksLossAndLatency](docs/monitor/README.md#getorganizationdevicesuplinkslossandlatency) - Return the uplink loss and latency for every MX in the organization from at latest 2 minutes ago
* [getOrganizationLicensesOverview](docs/monitor/README.md#getorganizationlicensesoverview) - Return an overview of the license state for an organization
* [getOrganizationOpenapiSpec](docs/monitor/README.md#getorganizationopenapispec) - Return the OpenAPI 2.0 Specification of the organization's API documentation in JSON
* [getOrganizationSensorReadingsHistory](docs/monitor/README.md#getorganizationsensorreadingshistory) - Return all reported readings from sensors in a given timespan, sorted by timestamp
* [getOrganizationSensorReadingsLatest](docs/monitor/README.md#getorganizationsensorreadingslatest) - Return the latest available reading for each metric from each sensor, sorted by sensor serial
* [getOrganizationSummaryTopAppliancesByUtilization](docs/monitor/README.md#getorganizationsummarytopappliancesbyutilization) - Return the top 10 appliances sorted by utilization over given time range.
* [getOrganizationSummaryTopClientsByUsage](docs/monitor/README.md#getorganizationsummarytopclientsbyusage) - Return metrics for organization's top 10 clients by data usage (in mb) over given time range.
* [getOrganizationSummaryTopClientsManufacturersByUsage](docs/monitor/README.md#getorganizationsummarytopclientsmanufacturersbyusage) - Return metrics for organization's top clients by data usage (in mb) over given time range, grouped by manufacturer.
* [getOrganizationSummaryTopDevicesByUsage](docs/monitor/README.md#getorganizationsummarytopdevicesbyusage) - Return metrics for organization's top 10 devices sorted by data usage over given time range
* [getOrganizationSummaryTopDevicesModelsByUsage](docs/monitor/README.md#getorganizationsummarytopdevicesmodelsbyusage) - Return metrics for organization's top 10 device models sorted by data usage over given time range
* [getOrganizationSummaryTopSsidsByUsage](docs/monitor/README.md#getorganizationsummarytopssidsbyusage) - Return metrics for organization's top 10 ssids by data usage over given time range
* [getOrganizationSummaryTopSwitchesByEnergyUsage](docs/monitor/README.md#getorganizationsummarytopswitchesbyenergyusage) - Return metrics for organization's top 10 switches by energy usage over given time range
* [getOrganizationUplinksStatuses](docs/monitor/README.md#getorganizationuplinksstatuses) - List the uplink status of every Meraki MX, MG and Z series devices in the organization
* [getOrganizationWebhooksAlertTypes](docs/monitor/README.md#getorganizationwebhooksalerttypes) - Return a list of alert types to be used with managing webhook alerts
* [getOrganizationWebhooksLogs](docs/monitor/README.md#getorganizationwebhookslogs) - Return the log of webhook POSTs sent

### [monitoredMediaServers](docs/monitoredmediaservers/README.md)

* [createOrganizationInsightMonitoredMediaServer](docs/monitoredmediaservers/README.md#createorganizationinsightmonitoredmediaserver) - Add a media server to be monitored for this organization
* [deleteOrganizationInsightMonitoredMediaServer](docs/monitoredmediaservers/README.md#deleteorganizationinsightmonitoredmediaserver) - Delete a monitored media server from this organization
* [getOrganizationInsightMonitoredMediaServer](docs/monitoredmediaservers/README.md#getorganizationinsightmonitoredmediaserver) - Return a monitored media server for this organization
* [getOrganizationInsightMonitoredMediaServers](docs/monitoredmediaservers/README.md#getorganizationinsightmonitoredmediaservers) - List the monitored media servers for this organization
* [updateOrganizationInsightMonitoredMediaServer](docs/monitoredmediaservers/README.md#updateorganizationinsightmonitoredmediaserver) - Update a monitored media server for this organization

### [mqttBrokers](docs/mqttbrokers/README.md)

* [createNetworkMqttBroker](docs/mqttbrokers/README.md#createnetworkmqttbroker) - Add an MQTT broker
* [deleteNetworkMqttBroker](docs/mqttbrokers/README.md#deletenetworkmqttbroker) - Delete an MQTT broker
* [getNetworkMqttBroker](docs/mqttbrokers/README.md#getnetworkmqttbroker) - Return an MQTT broker
* [getNetworkMqttBrokers](docs/mqttbrokers/README.md#getnetworkmqttbrokers) - List the MQTT brokers for this network
* [updateNetworkMqttBroker](docs/mqttbrokers/README.md#updatenetworkmqttbroker) - Update an MQTT broker

### [mtu](docs/mtu/README.md)

* [getNetworkSwitchMtu](docs/mtu/README.md#getnetworkswitchmtu) - Return the MTU configuration
* [updateNetworkSwitchMtu](docs/mtu/README.md#updatenetworkswitchmtu) - Update the MTU configuration

### [multicast](docs/multicast/README.md)

* [createNetworkSwitchRoutingMulticastRendezvousPoint](docs/multicast/README.md#createnetworkswitchroutingmulticastrendezvouspoint) - Create a multicast rendezvous point
* [deleteNetworkSwitchRoutingMulticastRendezvousPoint](docs/multicast/README.md#deletenetworkswitchroutingmulticastrendezvouspoint) - Delete a multicast rendezvous point
* [getNetworkSwitchRoutingMulticast](docs/multicast/README.md#getnetworkswitchroutingmulticast) - Return multicast settings for a network
* [getNetworkSwitchRoutingMulticastRendezvousPoint](docs/multicast/README.md#getnetworkswitchroutingmulticastrendezvouspoint) - Return a multicast rendezvous point
* [getNetworkSwitchRoutingMulticastRendezvousPoints](docs/multicast/README.md#getnetworkswitchroutingmulticastrendezvouspoints) - List multicast rendezvous points
* [updateNetworkSwitchRoutingMulticast](docs/multicast/README.md#updatenetworkswitchroutingmulticast) - Update multicast settings for a network
* [updateNetworkSwitchRoutingMulticastRendezvousPoint](docs/multicast/README.md#updatenetworkswitchroutingmulticastrendezvouspoint) - Update a multicast rendezvous point

### [netflow](docs/netflow/README.md)

* [getNetworkNetflow](docs/netflow/README.md#getnetworknetflow) - Return the NetFlow traffic reporting settings for a network
* [updateNetworkNetflow](docs/netflow/README.md#updatenetworknetflow) - Update the NetFlow traffic reporting settings for a network

### [networkAdapters](docs/networkadapters/README.md)

* [getNetworkSmDeviceNetworkAdapters](docs/networkadapters/README.md#getnetworksmdevicenetworkadapters) - List the network adapters of a device

### [networkHealth](docs/networkhealth/README.md)

* [getNetworkNetworkHealthChannelUtilization](docs/networkhealth/README.md#getnetworknetworkhealthchannelutilization) - Get the channel utilization over each radio for all APs in a network.

### [networks](docs/networks/README.md)

* [bindNetwork](docs/networks/README.md#bindnetwork) - Bind a network to a template.
* [claimNetworkDevices](docs/networks/README.md#claimnetworkdevices) - Claim devices into a network. (Note: for recently claimed devices, it may take a few minutes for API requsts against that device to succeed)
* [combineOrganizationNetworks](docs/networks/README.md#combineorganizationnetworks) - Combine multiple networks into a single network
* [createNetworkFirmwareUpgradesRollback](docs/networks/README.md#createnetworkfirmwareupgradesrollback) - Rollback a Firmware Upgrade For A Network
* [createNetworkFirmwareUpgradesStagedEvent](docs/networks/README.md#createnetworkfirmwareupgradesstagedevent) - Create a Staged Upgrade Event for a network
* [createNetworkFirmwareUpgradesStagedGroup](docs/networks/README.md#createnetworkfirmwareupgradesstagedgroup) - Create a Staged Upgrade Group for a network
* [createNetworkFloorPlan](docs/networks/README.md#createnetworkfloorplan) - Upload a floor plan
* [createNetworkGroupPolicy](docs/networks/README.md#createnetworkgrouppolicy) - Create a group policy
* [createNetworkMerakiAuthUser](docs/networks/README.md#createnetworkmerakiauthuser) - Authorize a user configured with Meraki Authentication for a network (currently supports 802.1X, splash guest, and client VPN users, and currently, organizations have a 50,000 user cap)
* [createNetworkMqttBroker](docs/networks/README.md#createnetworkmqttbroker) - Add an MQTT broker
* [createNetworkPiiRequest](docs/networks/README.md#createnetworkpiirequest) - Submit a new delete or restrict processing PII request
* [createNetworkWebhooksHttpServer](docs/networks/README.md#createnetworkwebhookshttpserver) - Add an HTTP server to a network
* [createNetworkWebhooksPayloadTemplate](docs/networks/README.md#createnetworkwebhookspayloadtemplate) - Create a webhook payload template for a network
* [createNetworkWebhooksWebhookTest](docs/networks/README.md#createnetworkwebhookswebhooktest) - Send a test webhook for a network
* [createOrganizationNetwork](docs/networks/README.md#createorganizationnetwork) - Create a network
* [deferNetworkFirmwareUpgradesStagedEvents](docs/networks/README.md#defernetworkfirmwareupgradesstagedevents) - Postpone by 1 week all pending staged upgrade stages for a network
* [deleteNetwork](docs/networks/README.md#deletenetwork) - Delete a network
* [deleteNetworkFirmwareUpgradesStagedGroup](docs/networks/README.md#deletenetworkfirmwareupgradesstagedgroup) - Delete a Staged Upgrade Group
* [deleteNetworkFloorPlan](docs/networks/README.md#deletenetworkfloorplan) - Destroy a floor plan
* [deleteNetworkGroupPolicy](docs/networks/README.md#deletenetworkgrouppolicy) - Delete a group policy
* [deleteNetworkMerakiAuthUser](docs/networks/README.md#deletenetworkmerakiauthuser) - Deauthorize a user
* [deleteNetworkMqttBroker](docs/networks/README.md#deletenetworkmqttbroker) - Delete an MQTT broker
* [deleteNetworkPiiRequest](docs/networks/README.md#deletenetworkpiirequest) - Delete a restrict processing PII request
* [deleteNetworkWebhooksHttpServer](docs/networks/README.md#deletenetworkwebhookshttpserver) - Delete an HTTP server from a network
* [deleteNetworkWebhooksPayloadTemplate](docs/networks/README.md#deletenetworkwebhookspayloadtemplate) - Destroy a webhook payload template for a network
* [getNetwork](docs/networks/README.md#getnetwork) - Return a network
* [getNetworkAlertsHistory](docs/networks/README.md#getnetworkalertshistory) - Return the alert history for this network
* [getNetworkAlertsSettings](docs/networks/README.md#getnetworkalertssettings) - Return the alert configuration for this network
* [getNetworkBluetoothClient](docs/networks/README.md#getnetworkbluetoothclient) - Return a Bluetooth client
* [getNetworkBluetoothClients](docs/networks/README.md#getnetworkbluetoothclients) - List the Bluetooth clients seen by APs in this network
* [getNetworkClient](docs/networks/README.md#getnetworkclient) - Return the client associated with the given identifier
* [getNetworkClientPolicy](docs/networks/README.md#getnetworkclientpolicy) - Return the policy assigned to a client on the network
* [getNetworkClientSplashAuthorizationStatus](docs/networks/README.md#getnetworkclientsplashauthorizationstatus) - Return the splash authorization for a client, for each SSID they've associated with through splash
* [getNetworkClientTrafficHistory](docs/networks/README.md#getnetworkclienttraffichistory) - Return the client's network traffic data over time
* [getNetworkClientUsageHistory](docs/networks/README.md#getnetworkclientusagehistory) - Return the client's daily usage history
* [getNetworkClients](docs/networks/README.md#getnetworkclients) - List the clients that have used this network in the timespan
* [getNetworkClientsApplicationUsage](docs/networks/README.md#getnetworkclientsapplicationusage) - Return the application usage data for clients
* [getNetworkClientsBandwidthUsageHistory](docs/networks/README.md#getnetworkclientsbandwidthusagehistory) - Returns a timeseries of total traffic consumption rates for all clients on a network within a given timespan, in megabits per second.
* [getNetworkClientsOverview](docs/networks/README.md#getnetworkclientsoverview) - Return overview statistics for network clients
* [getNetworkClientsUsageHistories](docs/networks/README.md#getnetworkclientsusagehistories) - Return the usage histories for clients
* [getNetworkDevices](docs/networks/README.md#getnetworkdevices) - List the devices in a network
* [getNetworkEvents](docs/networks/README.md#getnetworkevents) - List the events for the network
* [getNetworkEventsEventTypes](docs/networks/README.md#getnetworkeventseventtypes) - List the event type to human-readable description
* [getNetworkFirmwareUpgrades](docs/networks/README.md#getnetworkfirmwareupgrades) - Get firmware upgrade information for a network
* [getNetworkFirmwareUpgradesStagedEvents](docs/networks/README.md#getnetworkfirmwareupgradesstagedevents) - Get the Staged Upgrade Event from a network
* [getNetworkFirmwareUpgradesStagedGroup](docs/networks/README.md#getnetworkfirmwareupgradesstagedgroup) - Get a Staged Upgrade Group from a network
* [getNetworkFirmwareUpgradesStagedGroups](docs/networks/README.md#getnetworkfirmwareupgradesstagedgroups) - List of Staged Upgrade Groups in a network
* [getNetworkFirmwareUpgradesStagedStages](docs/networks/README.md#getnetworkfirmwareupgradesstagedstages) - Order of Staged Upgrade Groups in a network
* [getNetworkFloorPlan](docs/networks/README.md#getnetworkfloorplan) - Find a floor plan by ID
* [getNetworkFloorPlans](docs/networks/README.md#getnetworkfloorplans) - List the floor plans that belong to your network
* [getNetworkGroupPolicies](docs/networks/README.md#getnetworkgrouppolicies) - List the group policies in a network
* [getNetworkGroupPolicy](docs/networks/README.md#getnetworkgrouppolicy) - Display a group policy
* [getNetworkHealthAlerts](docs/networks/README.md#getnetworkhealthalerts) - Return all global alerts on this network
* [getNetworkMerakiAuthUser](docs/networks/README.md#getnetworkmerakiauthuser) - Return the Meraki Auth splash guest, RADIUS, or client VPN user
* [getNetworkMerakiAuthUsers](docs/networks/README.md#getnetworkmerakiauthusers) - List the users configured under Meraki Authentication for a network (splash guest or RADIUS users for a wireless network, or client VPN users for a wired network)
* [getNetworkMqttBroker](docs/networks/README.md#getnetworkmqttbroker) - Return an MQTT broker
* [getNetworkMqttBrokers](docs/networks/README.md#getnetworkmqttbrokers) - List the MQTT brokers for this network
* [getNetworkNetflow](docs/networks/README.md#getnetworknetflow) - Return the NetFlow traffic reporting settings for a network
* [getNetworkNetworkHealthChannelUtilization](docs/networks/README.md#getnetworknetworkhealthchannelutilization) - Get the channel utilization over each radio for all APs in a network.
* [getNetworkPiiPiiKeys](docs/networks/README.md#getnetworkpiipiikeys) - List the keys required to access Personally Identifiable Information (PII) for a given identifier
* [getNetworkPiiRequest](docs/networks/README.md#getnetworkpiirequest) - Return a PII request
* [getNetworkPiiRequests](docs/networks/README.md#getnetworkpiirequests) - List the PII requests for this network or organization
* [getNetworkPiiSmDevicesForKey](docs/networks/README.md#getnetworkpiismdevicesforkey) - Given a piece of Personally Identifiable Information (PII), return the Systems Manager device ID(s) associated with that identifier
* [getNetworkPiiSmOwnersForKey](docs/networks/README.md#getnetworkpiismownersforkey) - Given a piece of Personally Identifiable Information (PII), return the Systems Manager owner ID(s) associated with that identifier
* [getNetworkPoliciesByClient](docs/networks/README.md#getnetworkpoliciesbyclient) - Get policies for all clients with policies
* [getNetworkSettings](docs/networks/README.md#getnetworksettings) - Return the settings for a network
* [getNetworkSnmp](docs/networks/README.md#getnetworksnmp) - Return the SNMP settings for a network
* [getNetworkSplashLoginAttempts](docs/networks/README.md#getnetworksplashloginattempts) - List the splash login attempts for a network
* [getNetworkSyslogServers](docs/networks/README.md#getnetworksyslogservers) - List the syslog servers for a network
* [getNetworkTopologyLinkLayer](docs/networks/README.md#getnetworktopologylinklayer) - List the LLDP and CDP information for all discovered devices and connections in a network.
* [getNetworkTraffic](docs/networks/README.md#getnetworktraffic) - Return the traffic analysis data for this network
* [getNetworkTrafficAnalysis](docs/networks/README.md#getnetworktrafficanalysis) - Return the traffic analysis settings for a network
* [getNetworkTrafficShapingApplicationCategories](docs/networks/README.md#getnetworktrafficshapingapplicationcategories) - Returns the application categories for traffic shaping rules.
* [getNetworkTrafficShapingDscpTaggingOptions](docs/networks/README.md#getnetworktrafficshapingdscptaggingoptions) - Returns the available DSCP tagging options for your traffic shaping rules.
* [getNetworkWebhooksHttpServer](docs/networks/README.md#getnetworkwebhookshttpserver) - Return an HTTP server for a network
* [getNetworkWebhooksHttpServers](docs/networks/README.md#getnetworkwebhookshttpservers) - List the HTTP servers for a network
* [getNetworkWebhooksPayloadTemplate](docs/networks/README.md#getnetworkwebhookspayloadtemplate) - Get the webhook payload template for a network
* [getNetworkWebhooksPayloadTemplates](docs/networks/README.md#getnetworkwebhookspayloadtemplates) - List the webhook payload templates for a network
* [getNetworkWebhooksWebhookTest](docs/networks/README.md#getnetworkwebhookswebhooktest) - Return the status of a webhook test for a network
* [getOrganizationInventoryOnboardingCloudMonitoringNetworks](docs/networks/README.md#getorganizationinventoryonboardingcloudmonitoringnetworks) - Returns list of networks eligible for adding cloud monitored device
* [getOrganizationNetworks](docs/networks/README.md#getorganizationnetworks) - List the networks that the user has privileges on in an organization
* [provisionNetworkClients](docs/networks/README.md#provisionnetworkclients) - Provisions a client with a name and policy
* [removeNetworkDevices](docs/networks/README.md#removenetworkdevices) - Remove a single device
* [rollbacksNetworkFirmwareUpgradesStagedEvents](docs/networks/README.md#rollbacksnetworkfirmwareupgradesstagedevents) - Rollback a Staged Upgrade Event for a network
* [splitNetwork](docs/networks/README.md#splitnetwork) - Split a combined network into individual networks for each type of device
* [unbindNetwork](docs/networks/README.md#unbindnetwork) - Unbind a network from a template.
* [updateNetwork](docs/networks/README.md#updatenetwork) - Update a network
* [updateNetworkAlertsSettings](docs/networks/README.md#updatenetworkalertssettings) - Update the alert configuration for this network
* [updateNetworkClientPolicy](docs/networks/README.md#updatenetworkclientpolicy) - Update the policy assigned to a client on the network
* [updateNetworkClientSplashAuthorizationStatus](docs/networks/README.md#updatenetworkclientsplashauthorizationstatus) - Update a client's splash authorization
* [updateNetworkFirmwareUpgrades](docs/networks/README.md#updatenetworkfirmwareupgrades) - Update firmware upgrade information for a network
* [updateNetworkFirmwareUpgradesStagedEvents](docs/networks/README.md#updatenetworkfirmwareupgradesstagedevents) - Update the Staged Upgrade Event for a network
* [updateNetworkFirmwareUpgradesStagedGroup](docs/networks/README.md#updatenetworkfirmwareupgradesstagedgroup) - Update a Staged Upgrade Group for a network
* [updateNetworkFirmwareUpgradesStagedStages](docs/networks/README.md#updatenetworkfirmwareupgradesstagedstages) - Assign Staged Upgrade Group order in the sequence.
* [updateNetworkFloorPlan](docs/networks/README.md#updatenetworkfloorplan) - Update a floor plan's geolocation and other meta data
* [updateNetworkGroupPolicy](docs/networks/README.md#updatenetworkgrouppolicy) - Update a group policy
* [updateNetworkMerakiAuthUser](docs/networks/README.md#updatenetworkmerakiauthuser) - Update a user configured with Meraki Authentication (currently, 802.1X RADIUS, splash guest, and client VPN users can be updated)
* [updateNetworkMqttBroker](docs/networks/README.md#updatenetworkmqttbroker) - Update an MQTT broker
* [updateNetworkNetflow](docs/networks/README.md#updatenetworknetflow) - Update the NetFlow traffic reporting settings for a network
* [updateNetworkSettings](docs/networks/README.md#updatenetworksettings) - Update the settings for a network
* [updateNetworkSnmp](docs/networks/README.md#updatenetworksnmp) - Update the SNMP settings for a network
* [updateNetworkSyslogServers](docs/networks/README.md#updatenetworksyslogservers) - Update the syslog servers for a network
* [updateNetworkTrafficAnalysis](docs/networks/README.md#updatenetworktrafficanalysis) - Update the traffic analysis settings for a network
* [updateNetworkWebhooksHttpServer](docs/networks/README.md#updatenetworkwebhookshttpserver) - Update an HTTP server
* [updateNetworkWebhooksPayloadTemplate](docs/networks/README.md#updatenetworkwebhookspayloadtemplate) - Update a webhook payload template for a network
* [vmxNetworkDevicesClaim](docs/networks/README.md#vmxnetworkdevicesclaim) - Claim a vMX into a network

### [objectDetectionModels](docs/objectdetectionmodels/README.md)

* [getDeviceCameraSenseObjectDetectionModels](docs/objectdetectionmodels/README.md#getdevicecamerasenseobjectdetectionmodels) - Returns the MV Sense object detection model list for the given camera

### [onboarding](docs/onboarding/README.md)

* [createOrganizationInventoryOnboardingCloudMonitoringExportEvent](docs/onboarding/README.md#createorganizationinventoryonboardingcloudmonitoringexportevent) - Imports event logs related to the onboarding app into elastisearch
* [createOrganizationInventoryOnboardingCloudMonitoringImport](docs/onboarding/README.md#createorganizationinventoryonboardingcloudmonitoringimport) - Commits the import operation to complete the onboarding of a device into Dashboard for monitoring.
* [createOrganizationInventoryOnboardingCloudMonitoringPrepare](docs/onboarding/README.md#createorganizationinventoryonboardingcloudmonitoringprepare) - Initiates or updates an import session
* [getOrganizationCameraOnboardingStatuses](docs/onboarding/README.md#getorganizationcameraonboardingstatuses) - Fetch onboarding status of cameras
* [getOrganizationInventoryOnboardingCloudMonitoringImports](docs/onboarding/README.md#getorganizationinventoryonboardingcloudmonitoringimports) - Check the status of a committed Import operation
* [getOrganizationInventoryOnboardingCloudMonitoringNetworks](docs/onboarding/README.md#getorganizationinventoryonboardingcloudmonitoringnetworks) - Returns list of networks eligible for adding cloud monitored device
* [updateOrganizationCameraOnboardingStatuses](docs/onboarding/README.md#updateorganizationcameraonboardingstatuses) - Notify that credential handoff to camera has completed

### [oneToManyNatRules](docs/onetomanynatrules/README.md)

* [getNetworkApplianceFirewallOneToManyNatRules](docs/onetomanynatrules/README.md#getnetworkappliancefirewallonetomanynatrules) - Return the 1:Many NAT mapping rules for an MX network
* [updateNetworkApplianceFirewallOneToManyNatRules](docs/onetomanynatrules/README.md#updatenetworkappliancefirewallonetomanynatrules) - Set the 1:Many NAT mapping rules for an MX network

### [oneToOneNatRules](docs/onetoonenatrules/README.md)

* [getNetworkApplianceFirewallOneToOneNatRules](docs/onetoonenatrules/README.md#getnetworkappliancefirewallonetoonenatrules) - Return the 1:1 NAT mapping rules for an MX network
* [updateNetworkApplianceFirewallOneToOneNatRules](docs/onetoonenatrules/README.md#updatenetworkappliancefirewallonetoonenatrules) - Set the 1:1 NAT mapping rules for an MX network

### [openapiSpec](docs/openapispec/README.md)

* [getOrganizationOpenapiSpec](docs/openapispec/README.md#getorganizationopenapispec) - Return the OpenAPI 2.0 Specification of the organization's API documentation in JSON

### [optIns](docs/optins/README.md)

* [createOrganizationEarlyAccessFeaturesOptIn](docs/optins/README.md#createorganizationearlyaccessfeaturesoptin) - Create a new early access feature opt-in for an organization
* [deleteOrganizationEarlyAccessFeaturesOptIn](docs/optins/README.md#deleteorganizationearlyaccessfeaturesoptin) - Delete an early access feature opt-in
* [getOrganizationEarlyAccessFeaturesOptIn](docs/optins/README.md#getorganizationearlyaccessfeaturesoptin) - Show an early access feature opt-in for an organization
* [getOrganizationEarlyAccessFeaturesOptIns](docs/optins/README.md#getorganizationearlyaccessfeaturesoptins) - List the early access feature opt-ins for an organization
* [updateOrganizationEarlyAccessFeaturesOptIn](docs/optins/README.md#updateorganizationearlyaccessfeaturesoptin) - Update an early access feature opt-in for an organization

### [order](docs/order/README.md)

* [getNetworkSwitchQosRulesOrder](docs/order/README.md#getnetworkswitchqosrulesorder) - Return the quality of service rule IDs by order in which they will be processed by the switch
* [updateNetworkSwitchQosRulesOrder](docs/order/README.md#updatenetworkswitchqosrulesorder) - Update the order in which the rules should be processed by the switch

### [organizations](docs/organizations/README.md)

* [assignOrganizationLicensesSeats](docs/organizations/README.md#assignorganizationlicensesseats) - Assign SM seats to a network
* [claimIntoOrganization](docs/organizations/README.md#claimintoorganization) - Claim a list of devices, licenses, and/or orders into an organization
* [claimIntoOrganizationInventory](docs/organizations/README.md#claimintoorganizationinventory) - Claim a list of devices, licenses, and/or orders into an organization inventory
* [cloneOrganization](docs/organizations/README.md#cloneorganization) - Create a new organization by cloning the addressed organization
* [combineOrganizationNetworks](docs/organizations/README.md#combineorganizationnetworks) - Combine multiple networks into a single network
* [createOrganization](docs/organizations/README.md#createorganization) - Create a new organization
* [createOrganizationActionBatch](docs/organizations/README.md#createorganizationactionbatch) - Create an action batch
* [createOrganizationAdaptivePolicyAcl](docs/organizations/README.md#createorganizationadaptivepolicyacl) - Creates new adaptive policy ACL
* [createOrganizationAdaptivePolicyGroup](docs/organizations/README.md#createorganizationadaptivepolicygroup) - Creates a new adaptive policy group
* [createOrganizationAdaptivePolicyPolicy](docs/organizations/README.md#createorganizationadaptivepolicypolicy) - Add an Adaptive Policy
* [createOrganizationAdmin](docs/organizations/README.md#createorganizationadmin) - Create a new dashboard administrator
* [createOrganizationAlertsProfile](docs/organizations/README.md#createorganizationalertsprofile) - Create an organization-wide alert configuration
* [createOrganizationBrandingPolicy](docs/organizations/README.md#createorganizationbrandingpolicy) - Add a new branding policy to an organization
* [createOrganizationConfigTemplate](docs/organizations/README.md#createorganizationconfigtemplate) - Create a new configuration template
* [createOrganizationEarlyAccessFeaturesOptIn](docs/organizations/README.md#createorganizationearlyaccessfeaturesoptin) - Create a new early access feature opt-in for an organization
* [createOrganizationInventoryOnboardingCloudMonitoringExportEvent](docs/organizations/README.md#createorganizationinventoryonboardingcloudmonitoringexportevent) - Imports event logs related to the onboarding app into elastisearch
* [createOrganizationInventoryOnboardingCloudMonitoringImport](docs/organizations/README.md#createorganizationinventoryonboardingcloudmonitoringimport) - Commits the import operation to complete the onboarding of a device into Dashboard for monitoring.
* [createOrganizationInventoryOnboardingCloudMonitoringPrepare](docs/organizations/README.md#createorganizationinventoryonboardingcloudmonitoringprepare) - Initiates or updates an import session
* [createOrganizationNetwork](docs/organizations/README.md#createorganizationnetwork) - Create a network
* [createOrganizationPolicyObject](docs/organizations/README.md#createorganizationpolicyobject) - Creates a new Policy Object.
* [createOrganizationPolicyObjectsGroup](docs/organizations/README.md#createorganizationpolicyobjectsgroup) - Creates a new Policy Object Group.
* [createOrganizationSamlIdp](docs/organizations/README.md#createorganizationsamlidp) - Create a SAML IdP for your organization.
* [createOrganizationSamlRole](docs/organizations/README.md#createorganizationsamlrole) - Create a SAML role
* [deleteOrganization](docs/organizations/README.md#deleteorganization) - Delete an organization
* [deleteOrganizationActionBatch](docs/organizations/README.md#deleteorganizationactionbatch) - Delete an action batch
* [deleteOrganizationAdaptivePolicyAcl](docs/organizations/README.md#deleteorganizationadaptivepolicyacl) - Deletes the specified adaptive policy ACL
* [deleteOrganizationAdaptivePolicyGroup](docs/organizations/README.md#deleteorganizationadaptivepolicygroup) - Deletes the specified adaptive policy group and any associated policies and references
* [deleteOrganizationAdaptivePolicyPolicy](docs/organizations/README.md#deleteorganizationadaptivepolicypolicy) - Delete an Adaptive Policy
* [deleteOrganizationAdmin](docs/organizations/README.md#deleteorganizationadmin) - Revoke all access for a dashboard administrator within this organization
* [deleteOrganizationAlertsProfile](docs/organizations/README.md#deleteorganizationalertsprofile) - Removes an organization-wide alert config
* [deleteOrganizationBrandingPolicy](docs/organizations/README.md#deleteorganizationbrandingpolicy) - Delete a branding policy
* [deleteOrganizationConfigTemplate](docs/organizations/README.md#deleteorganizationconfigtemplate) - Remove a configuration template
* [deleteOrganizationEarlyAccessFeaturesOptIn](docs/organizations/README.md#deleteorganizationearlyaccessfeaturesoptin) - Delete an early access feature opt-in
* [deleteOrganizationPolicyObject](docs/organizations/README.md#deleteorganizationpolicyobject) - Deletes a Policy Object.
* [deleteOrganizationPolicyObjectsGroup](docs/organizations/README.md#deleteorganizationpolicyobjectsgroup) - Deletes a Policy Object Group.
* [deleteOrganizationSamlIdp](docs/organizations/README.md#deleteorganizationsamlidp) - Remove a SAML IdP in your organization.
* [deleteOrganizationSamlRole](docs/organizations/README.md#deleteorganizationsamlrole) - Remove a SAML role
* [deleteOrganizationUser](docs/organizations/README.md#deleteorganizationuser) - Delete a user and all of its authentication methods.
* [getOrganization](docs/organizations/README.md#getorganization) - Return an organization
* [getOrganizationActionBatch](docs/organizations/README.md#getorganizationactionbatch) - Return an action batch
* [getOrganizationActionBatches](docs/organizations/README.md#getorganizationactionbatches) - Return the list of action batches in the organization
* [getOrganizationAdaptivePolicyAcl](docs/organizations/README.md#getorganizationadaptivepolicyacl) - Returns the adaptive policy ACL information
* [getOrganizationAdaptivePolicyAcls](docs/organizations/README.md#getorganizationadaptivepolicyacls) - List adaptive policy ACLs in a organization
* [getOrganizationAdaptivePolicyGroup](docs/organizations/README.md#getorganizationadaptivepolicygroup) - Returns an adaptive policy group
* [getOrganizationAdaptivePolicyGroups](docs/organizations/README.md#getorganizationadaptivepolicygroups) - List adaptive policy groups in a organization
* [getOrganizationAdaptivePolicyOverview](docs/organizations/README.md#getorganizationadaptivepolicyoverview) - Returns adaptive policy aggregate statistics for an organization
* [getOrganizationAdaptivePolicyPolicies](docs/organizations/README.md#getorganizationadaptivepolicypolicies) - List adaptive policies in an organization
* [getOrganizationAdaptivePolicyPolicy](docs/organizations/README.md#getorganizationadaptivepolicypolicy) - Return an adaptive policy
* [getOrganizationAdaptivePolicySettings](docs/organizations/README.md#getorganizationadaptivepolicysettings) - Returns global adaptive policy settings in an organization
* [getOrganizationAdmins](docs/organizations/README.md#getorganizationadmins) - List the dashboard administrators in this organization
* [getOrganizationAlertsProfiles](docs/organizations/README.md#getorganizationalertsprofiles) - List all organization-wide alert configurations
* [getOrganizationApiRequests](docs/organizations/README.md#getorganizationapirequests) - List the API requests made by an organization
* [getOrganizationApiRequestsOverview](docs/organizations/README.md#getorganizationapirequestsoverview) - Return an aggregated overview of API requests data
* [getOrganizationApiRequestsOverviewResponseCodesByInterval](docs/organizations/README.md#getorganizationapirequestsoverviewresponsecodesbyinterval) - Tracks organizations' API requests by response code across a given time period
* [getOrganizationBrandingPolicies](docs/organizations/README.md#getorganizationbrandingpolicies) - List the branding policies of an organization
* [getOrganizationBrandingPoliciesPriorities](docs/organizations/README.md#getorganizationbrandingpoliciespriorities) - Return the branding policy IDs of an organization in priority order
* [getOrganizationBrandingPolicy](docs/organizations/README.md#getorganizationbrandingpolicy) - Return a branding policy
* [getOrganizationClientsBandwidthUsageHistory](docs/organizations/README.md#getorganizationclientsbandwidthusagehistory) - Return data usage (in megabits per second) over time for all clients in the given organization within a given time range.
* [getOrganizationClientsOverview](docs/organizations/README.md#getorganizationclientsoverview) - Return summary information around client data usage (in mb) across the given organization.
* [getOrganizationClientsSearch](docs/organizations/README.md#getorganizationclientssearch) - Return the client details in an organization
* [getOrganizationConfigTemplate](docs/organizations/README.md#getorganizationconfigtemplate) - Return a single configuration template
* [getOrganizationConfigTemplates](docs/organizations/README.md#getorganizationconfigtemplates) - List the configuration templates for this organization
* [getOrganizationConfigurationChanges](docs/organizations/README.md#getorganizationconfigurationchanges) - View the Change Log for your organization
* [getOrganizationDevices](docs/organizations/README.md#getorganizationdevices) - List the devices in an organization
* [getOrganizationDevicesAvailabilities](docs/organizations/README.md#getorganizationdevicesavailabilities) - List the availability information for devices in an organization
* [getOrganizationDevicesPowerModulesStatusesByDevice](docs/organizations/README.md#getorganizationdevicespowermodulesstatusesbydevice) - List the power status information for devices in an organization
* [getOrganizationDevicesStatuses](docs/organizations/README.md#getorganizationdevicesstatuses) - List the status of every Meraki device in the organization
* [getOrganizationDevicesStatusesOverview](docs/organizations/README.md#getorganizationdevicesstatusesoverview) - Return an overview of current device statuses
* [getOrganizationDevicesUplinksAddressesByDevice](docs/organizations/README.md#getorganizationdevicesuplinksaddressesbydevice) - List the current uplink addresses for devices in an organization.
* [getOrganizationDevicesUplinksLossAndLatency](docs/organizations/README.md#getorganizationdevicesuplinkslossandlatency) - Return the uplink loss and latency for every MX in the organization from at latest 2 minutes ago
* [getOrganizationEarlyAccessFeatures](docs/organizations/README.md#getorganizationearlyaccessfeatures) - List the available early access features for organization
* [getOrganizationEarlyAccessFeaturesOptIn](docs/organizations/README.md#getorganizationearlyaccessfeaturesoptin) - Show an early access feature opt-in for an organization
* [getOrganizationEarlyAccessFeaturesOptIns](docs/organizations/README.md#getorganizationearlyaccessfeaturesoptins) - List the early access feature opt-ins for an organization
* [getOrganizationFirmwareUpgrades](docs/organizations/README.md#getorganizationfirmwareupgrades) - Get firmware upgrade information for an organization
* [getOrganizationFirmwareUpgradesByDevice](docs/organizations/README.md#getorganizationfirmwareupgradesbydevice) - Get firmware upgrade status for the filtered devices
* [getOrganizationInventoryDevice](docs/organizations/README.md#getorganizationinventorydevice) - Return a single device from the inventory of an organization
* [getOrganizationInventoryDevices](docs/organizations/README.md#getorganizationinventorydevices) - Return the device inventory for an organization
* [getOrganizationInventoryOnboardingCloudMonitoringImports](docs/organizations/README.md#getorganizationinventoryonboardingcloudmonitoringimports) - Check the status of a committed Import operation
* [getOrganizationInventoryOnboardingCloudMonitoringNetworks](docs/organizations/README.md#getorganizationinventoryonboardingcloudmonitoringnetworks) - Returns list of networks eligible for adding cloud monitored device
* [getOrganizationLicense](docs/organizations/README.md#getorganizationlicense) - Display a license
* [getOrganizationLicenses](docs/organizations/README.md#getorganizationlicenses) - List the licenses for an organization
* [getOrganizationLicensesOverview](docs/organizations/README.md#getorganizationlicensesoverview) - Return an overview of the license state for an organization
* [getOrganizationLoginSecurity](docs/organizations/README.md#getorganizationloginsecurity) - Returns the login security settings for an organization.
* [getOrganizationNetworks](docs/organizations/README.md#getorganizationnetworks) - List the networks that the user has privileges on in an organization
* [getOrganizationOpenapiSpec](docs/organizations/README.md#getorganizationopenapispec) - Return the OpenAPI 2.0 Specification of the organization's API documentation in JSON
* [getOrganizationPolicyObject](docs/organizations/README.md#getorganizationpolicyobject) - Shows details of a Policy Object.
* [getOrganizationPolicyObjects](docs/organizations/README.md#getorganizationpolicyobjects) - Lists Policy Objects belonging to the organization.
* [getOrganizationPolicyObjectsGroup](docs/organizations/README.md#getorganizationpolicyobjectsgroup) - Shows details of a Policy Object Group.
* [getOrganizationPolicyObjectsGroups](docs/organizations/README.md#getorganizationpolicyobjectsgroups) - Lists Policy Object Groups belonging to the organization.
* [getOrganizationSaml](docs/organizations/README.md#getorganizationsaml) - Returns the SAML SSO enabled settings for an organization.
* [getOrganizationSamlIdp](docs/organizations/README.md#getorganizationsamlidp) - Get a SAML IdP from your organization.
* [getOrganizationSamlIdps](docs/organizations/README.md#getorganizationsamlidps) - List the SAML IdPs in your organization.
* [getOrganizationSamlRole](docs/organizations/README.md#getorganizationsamlrole) - Return a SAML role
* [getOrganizationSamlRoles](docs/organizations/README.md#getorganizationsamlroles) - List the SAML roles for this organization
* [getOrganizationSnmp](docs/organizations/README.md#getorganizationsnmp) - Return the SNMP settings for an organization
* [getOrganizationSummaryTopAppliancesByUtilization](docs/organizations/README.md#getorganizationsummarytopappliancesbyutilization) - Return the top 10 appliances sorted by utilization over given time range.
* [getOrganizationSummaryTopClientsByUsage](docs/organizations/README.md#getorganizationsummarytopclientsbyusage) - Return metrics for organization's top 10 clients by data usage (in mb) over given time range.
* [getOrganizationSummaryTopClientsManufacturersByUsage](docs/organizations/README.md#getorganizationsummarytopclientsmanufacturersbyusage) - Return metrics for organization's top clients by data usage (in mb) over given time range, grouped by manufacturer.
* [getOrganizationSummaryTopDevicesByUsage](docs/organizations/README.md#getorganizationsummarytopdevicesbyusage) - Return metrics for organization's top 10 devices sorted by data usage over given time range
* [getOrganizationSummaryTopDevicesModelsByUsage](docs/organizations/README.md#getorganizationsummarytopdevicesmodelsbyusage) - Return metrics for organization's top 10 device models sorted by data usage over given time range
* [getOrganizationSummaryTopSsidsByUsage](docs/organizations/README.md#getorganizationsummarytopssidsbyusage) - Return metrics for organization's top 10 ssids by data usage over given time range
* [getOrganizationSummaryTopSwitchesByEnergyUsage](docs/organizations/README.md#getorganizationsummarytopswitchesbyenergyusage) - Return metrics for organization's top 10 switches by energy usage over given time range
* [getOrganizationUplinksStatuses](docs/organizations/README.md#getorganizationuplinksstatuses) - List the uplink status of every Meraki MX, MG and Z series devices in the organization
* [getOrganizationWebhooksAlertTypes](docs/organizations/README.md#getorganizationwebhooksalerttypes) - Return a list of alert types to be used with managing webhook alerts
* [getOrganizationWebhooksLogs](docs/organizations/README.md#getorganizationwebhookslogs) - Return the log of webhook POSTs sent
* [getOrganizations](docs/organizations/README.md#getorganizations) - List the organizations that the user has privileges on
* [moveOrganizationLicenses](docs/organizations/README.md#moveorganizationlicenses) - Move licenses to another organization
* [moveOrganizationLicensesSeats](docs/organizations/README.md#moveorganizationlicensesseats) - Move SM seats to another organization
* [releaseFromOrganizationInventory](docs/organizations/README.md#releasefromorganizationinventory) - Release a list of claimed devices from an organization.
* [renewOrganizationLicensesSeats](docs/organizations/README.md#reneworganizationlicensesseats) - Renew SM seats of a license
* [updateOrganization](docs/organizations/README.md#updateorganization) - Update an organization
* [updateOrganizationActionBatch](docs/organizations/README.md#updateorganizationactionbatch) - Update an action batch
* [updateOrganizationAdaptivePolicyAcl](docs/organizations/README.md#updateorganizationadaptivepolicyacl) - Updates an adaptive policy ACL
* [updateOrganizationAdaptivePolicyGroup](docs/organizations/README.md#updateorganizationadaptivepolicygroup) - Updates an adaptive policy group
* [updateOrganizationAdaptivePolicyPolicy](docs/organizations/README.md#updateorganizationadaptivepolicypolicy) - Update an Adaptive Policy
* [updateOrganizationAdaptivePolicySettings](docs/organizations/README.md#updateorganizationadaptivepolicysettings) - Update global adaptive policy settings
* [updateOrganizationAdmin](docs/organizations/README.md#updateorganizationadmin) - Update an administrator
* [updateOrganizationAlertsProfile](docs/organizations/README.md#updateorganizationalertsprofile) - Update an organization-wide alert config
* [updateOrganizationBrandingPoliciesPriorities](docs/organizations/README.md#updateorganizationbrandingpoliciespriorities) - Update the priority ordering of an organization's branding policies.
* [updateOrganizationBrandingPolicy](docs/organizations/README.md#updateorganizationbrandingpolicy) - Update a branding policy
* [updateOrganizationConfigTemplate](docs/organizations/README.md#updateorganizationconfigtemplate) - Update a configuration template
* [updateOrganizationEarlyAccessFeaturesOptIn](docs/organizations/README.md#updateorganizationearlyaccessfeaturesoptin) - Update an early access feature opt-in for an organization
* [updateOrganizationLicense](docs/organizations/README.md#updateorganizationlicense) - Update a license
* [updateOrganizationLoginSecurity](docs/organizations/README.md#updateorganizationloginsecurity) - Update the login security settings for an organization
* [updateOrganizationPolicyObject](docs/organizations/README.md#updateorganizationpolicyobject) - Updates a Policy Object.
* [updateOrganizationPolicyObjectsGroup](docs/organizations/README.md#updateorganizationpolicyobjectsgroup) - Updates a Policy Object Group.
* [updateOrganizationSaml](docs/organizations/README.md#updateorganizationsaml) - Updates the SAML SSO enabled settings for an organization.
* [updateOrganizationSamlIdp](docs/organizations/README.md#updateorganizationsamlidp) - Update a SAML IdP in your organization
* [updateOrganizationSamlRole](docs/organizations/README.md#updateorganizationsamlrole) - Update a SAML role
* [updateOrganizationSnmp](docs/organizations/README.md#updateorganizationsnmp) - Update the SNMP settings for an organization

### [ospf](docs/ospf/README.md)

* [getNetworkSwitchRoutingOspf](docs/ospf/README.md#getnetworkswitchroutingospf) - Return layer 3 OSPF routing configuration
* [updateNetworkSwitchRoutingOspf](docs/ospf/README.md#updatenetworkswitchroutingospf) - Update layer 3 OSPF routing configuration

### [overview](docs/overview/README.md)

* [getDeviceCameraAnalyticsOverview](docs/overview/README.md#getdevicecameraanalyticsoverview) - Returns an overview of aggregate analytics data for a timespan
* [getNetworkClientsOverview](docs/overview/README.md#getnetworkclientsoverview) - Return overview statistics for network clients
* [getNetworkSensorAlertsCurrentOverviewByMetric](docs/overview/README.md#getnetworksensoralertscurrentoverviewbymetric) - Return an overview of currently alerting sensors by metric
* [getNetworkSensorAlertsOverviewByMetric](docs/overview/README.md#getnetworksensoralertsoverviewbymetric) - Return an overview of alert occurrences over a timespan, by metric
* [getOrganizationAdaptivePolicyOverview](docs/overview/README.md#getorganizationadaptivepolicyoverview) - Returns adaptive policy aggregate statistics for an organization
* [getOrganizationApiRequestsOverview](docs/overview/README.md#getorganizationapirequestsoverview) - Return an aggregated overview of API requests data
* [getOrganizationApiRequestsOverviewResponseCodesByInterval](docs/overview/README.md#getorganizationapirequestsoverviewresponsecodesbyinterval) - Tracks organizations' API requests by response code across a given time period
* [getOrganizationClientsOverview](docs/overview/README.md#getorganizationclientsoverview) - Return summary information around client data usage (in mb) across the given organization.
* [getOrganizationDevicesStatusesOverview](docs/overview/README.md#getorganizationdevicesstatusesoverview) - Return an overview of current device statuses
* [getOrganizationLicensesOverview](docs/overview/README.md#getorganizationlicensesoverview) - Return an overview of the license state for an organization

### [packets](docs/packets/README.md)

* [getDeviceSwitchPortsStatusesPackets](docs/packets/README.md#getdeviceswitchportsstatusespackets) - Return the packet counters for all the ports of a switch

### [payloadTemplates](docs/payloadtemplates/README.md)

* [createNetworkWebhooksPayloadTemplate](docs/payloadtemplates/README.md#createnetworkwebhookspayloadtemplate) - Create a webhook payload template for a network
* [deleteNetworkWebhooksPayloadTemplate](docs/payloadtemplates/README.md#deletenetworkwebhookspayloadtemplate) - Destroy a webhook payload template for a network
* [getNetworkWebhooksPayloadTemplate](docs/payloadtemplates/README.md#getnetworkwebhookspayloadtemplate) - Get the webhook payload template for a network
* [getNetworkWebhooksPayloadTemplates](docs/payloadtemplates/README.md#getnetworkwebhookspayloadtemplates) - List the webhook payload templates for a network
* [updateNetworkWebhooksPayloadTemplate](docs/payloadtemplates/README.md#updatenetworkwebhookspayloadtemplate) - Update a webhook payload template for a network

### [performance](docs/performance/README.md)

* [getDeviceAppliancePerformance](docs/performance/README.md#getdeviceapplianceperformance) - Return the performance score for a single MX

### [performanceHistory](docs/performancehistory/README.md)

* [getNetworkSmDevicePerformanceHistory](docs/performancehistory/README.md#getnetworksmdeviceperformancehistory) - Return historical records of various Systems Manager client metrics for desktop devices.

### [pii](docs/pii/README.md)

* [createNetworkPiiRequest](docs/pii/README.md#createnetworkpiirequest) - Submit a new delete or restrict processing PII request
* [deleteNetworkPiiRequest](docs/pii/README.md#deletenetworkpiirequest) - Delete a restrict processing PII request
* [getNetworkPiiPiiKeys](docs/pii/README.md#getnetworkpiipiikeys) - List the keys required to access Personally Identifiable Information (PII) for a given identifier
* [getNetworkPiiRequest](docs/pii/README.md#getnetworkpiirequest) - Return a PII request
* [getNetworkPiiRequests](docs/pii/README.md#getnetworkpiirequests) - List the PII requests for this network or organization
* [getNetworkPiiSmDevicesForKey](docs/pii/README.md#getnetworkpiismdevicesforkey) - Given a piece of Personally Identifiable Information (PII), return the Systems Manager device ID(s) associated with that identifier
* [getNetworkPiiSmOwnersForKey](docs/pii/README.md#getnetworkpiismownersforkey) - Given a piece of Personally Identifiable Information (PII), return the Systems Manager owner ID(s) associated with that identifier

### [piiKeys](docs/piikeys/README.md)

* [getNetworkPiiPiiKeys](docs/piikeys/README.md#getnetworkpiipiikeys) - List the keys required to access Personally Identifiable Information (PII) for a given identifier

### [ping](docs/ping/README.md)

* [createDeviceLiveToolsPing](docs/ping/README.md#createdevicelivetoolsping) - Enqueue a job to ping a target host from the device
* [getDeviceLiveToolsPing](docs/ping/README.md#getdevicelivetoolsping) - Return a ping job

### [pingDevice](docs/pingdevice/README.md)

* [createDeviceLiveToolsPingDevice](docs/pingdevice/README.md#createdevicelivetoolspingdevice) - Enqueue a job to check connectivity status to the device
* [getDeviceLiveToolsPingDevice](docs/pingdevice/README.md#getdevicelivetoolspingdevice) - Return a ping device job

### [policies](docs/policies/README.md)

* [createOrganizationAdaptivePolicyPolicy](docs/policies/README.md#createorganizationadaptivepolicypolicy) - Add an Adaptive Policy
* [deleteOrganizationAdaptivePolicyPolicy](docs/policies/README.md#deleteorganizationadaptivepolicypolicy) - Delete an Adaptive Policy
* [getNetworkPoliciesByClient](docs/policies/README.md#getnetworkpoliciesbyclient) - Get policies for all clients with policies
* [getOrganizationAdaptivePolicyPolicies](docs/policies/README.md#getorganizationadaptivepolicypolicies) - List adaptive policies in an organization
* [getOrganizationAdaptivePolicyPolicy](docs/policies/README.md#getorganizationadaptivepolicypolicy) - Return an adaptive policy
* [updateOrganizationAdaptivePolicyPolicy](docs/policies/README.md#updateorganizationadaptivepolicypolicy) - Update an Adaptive Policy

### [policy](docs/policy/README.md)

* [getNetworkClientPolicy](docs/policy/README.md#getnetworkclientpolicy) - Return the policy assigned to a client on the network
* [updateNetworkClientPolicy](docs/policy/README.md#updatenetworkclientpolicy) - Update the policy assigned to a client on the network

### [policyObjects](docs/policyobjects/README.md)

* [createOrganizationPolicyObject](docs/policyobjects/README.md#createorganizationpolicyobject) - Creates a new Policy Object.
* [createOrganizationPolicyObjectsGroup](docs/policyobjects/README.md#createorganizationpolicyobjectsgroup) - Creates a new Policy Object Group.
* [deleteOrganizationPolicyObject](docs/policyobjects/README.md#deleteorganizationpolicyobject) - Deletes a Policy Object.
* [deleteOrganizationPolicyObjectsGroup](docs/policyobjects/README.md#deleteorganizationpolicyobjectsgroup) - Deletes a Policy Object Group.
* [getOrganizationPolicyObject](docs/policyobjects/README.md#getorganizationpolicyobject) - Shows details of a Policy Object.
* [getOrganizationPolicyObjects](docs/policyobjects/README.md#getorganizationpolicyobjects) - Lists Policy Objects belonging to the organization.
* [getOrganizationPolicyObjectsGroup](docs/policyobjects/README.md#getorganizationpolicyobjectsgroup) - Shows details of a Policy Object Group.
* [getOrganizationPolicyObjectsGroups](docs/policyobjects/README.md#getorganizationpolicyobjectsgroups) - Lists Policy Object Groups belonging to the organization.
* [updateOrganizationPolicyObject](docs/policyobjects/README.md#updateorganizationpolicyobject) - Updates a Policy Object.
* [updateOrganizationPolicyObjectsGroup](docs/policyobjects/README.md#updateorganizationpolicyobjectsgroup) - Updates a Policy Object Group.

### [portForwardingRules](docs/portforwardingrules/README.md)

* [getDeviceCellularGatewayPortForwardingRules](docs/portforwardingrules/README.md#getdevicecellulargatewayportforwardingrules) - Returns the port forwarding rules for a single MG.
* [getNetworkApplianceFirewallPortForwardingRules](docs/portforwardingrules/README.md#getnetworkappliancefirewallportforwardingrules) - Return the port forwarding rules for an MX network
* [updateDeviceCellularGatewayPortForwardingRules](docs/portforwardingrules/README.md#updatedevicecellulargatewayportforwardingrules) - Updates the port forwarding rules for a single MG.
* [updateNetworkApplianceFirewallPortForwardingRules](docs/portforwardingrules/README.md#updatenetworkappliancefirewallportforwardingrules) - Update the port forwarding rules for an MX network

### [portSchedules](docs/portschedules/README.md)

* [createNetworkSwitchPortSchedule](docs/portschedules/README.md#createnetworkswitchportschedule) - Add a switch port schedule
* [deleteNetworkSwitchPortSchedule](docs/portschedules/README.md#deletenetworkswitchportschedule) - Delete a switch port schedule
* [getNetworkSwitchPortSchedules](docs/portschedules/README.md#getnetworkswitchportschedules) - List switch port schedules
* [updateNetworkSwitchPortSchedule](docs/portschedules/README.md#updatenetworkswitchportschedule) - Update a switch port schedule

### [ports](docs/ports/README.md)

* [cycleDeviceSwitchPorts](docs/ports/README.md#cycledeviceswitchports) - Cycle a set of switch ports
* [getDeviceSwitchPort](docs/ports/README.md#getdeviceswitchport) - Return a switch port
* [getDeviceSwitchPorts](docs/ports/README.md#getdeviceswitchports) - List the switch ports for a switch
* [getDeviceSwitchPortsStatuses](docs/ports/README.md#getdeviceswitchportsstatuses) - Return the status for all the ports of a switch
* [getDeviceSwitchPortsStatusesPackets](docs/ports/README.md#getdeviceswitchportsstatusespackets) - Return the packet counters for all the ports of a switch
* [getNetworkAppliancePort](docs/ports/README.md#getnetworkapplianceport) - Return per-port VLAN settings for a single MX port.
* [getNetworkAppliancePorts](docs/ports/README.md#getnetworkapplianceports) - List per-port VLAN settings for all ports of a MX.
* [getOrganizationConfigTemplateSwitchProfilePort](docs/ports/README.md#getorganizationconfigtemplateswitchprofileport) - Return a switch profile port
* [getOrganizationConfigTemplateSwitchProfilePorts](docs/ports/README.md#getorganizationconfigtemplateswitchprofileports) - Return all the ports of a switch profile
* [getOrganizationSwitchPortsBySwitch](docs/ports/README.md#getorganizationswitchportsbyswitch) - List the switchports in an organization by switch
* [updateDeviceSwitchPort](docs/ports/README.md#updatedeviceswitchport) - Update a switch port
* [updateNetworkAppliancePort](docs/ports/README.md#updatenetworkapplianceport) - Update the per-port VLAN settings for a single MX port.
* [updateOrganizationConfigTemplateSwitchProfilePort](docs/ports/README.md#updateorganizationconfigtemplateswitchprofileport) - Update a switch profile port

### [powerModules](docs/powermodules/README.md)

* [getOrganizationDevicesPowerModulesStatusesByDevice](docs/powermodules/README.md#getorganizationdevicespowermodulesstatusesbydevice) - List the power status information for devices in an organization

### [prefixes](docs/prefixes/README.md)

* [createNetworkAppliancePrefixesDelegatedStatic](docs/prefixes/README.md#createnetworkapplianceprefixesdelegatedstatic) - Add a static delegated prefix from a network
* [deleteNetworkAppliancePrefixesDelegatedStatic](docs/prefixes/README.md#deletenetworkapplianceprefixesdelegatedstatic) - Delete a static delegated prefix from a network
* [getDeviceAppliancePrefixesDelegated](docs/prefixes/README.md#getdeviceapplianceprefixesdelegated) - Return current delegated IPv6 prefixes on an appliance.
* [getDeviceAppliancePrefixesDelegatedVlanAssignments](docs/prefixes/README.md#getdeviceapplianceprefixesdelegatedvlanassignments) - Return prefixes assigned to all IPv6 enabled VLANs on an appliance.
* [getNetworkAppliancePrefixesDelegatedStatic](docs/prefixes/README.md#getnetworkapplianceprefixesdelegatedstatic) - Return a static delegated prefix from a network
* [getNetworkAppliancePrefixesDelegatedStatics](docs/prefixes/README.md#getnetworkapplianceprefixesdelegatedstatics) - List static delegated prefixes for a network
* [updateNetworkAppliancePrefixesDelegatedStatic](docs/prefixes/README.md#updatenetworkapplianceprefixesdelegatedstatic) - Update a static delegated prefix from a network

### [prepare](docs/prepare/README.md)

* [createOrganizationInventoryOnboardingCloudMonitoringPrepare](docs/prepare/README.md#createorganizationinventoryonboardingcloudmonitoringprepare) - Initiates or updates an import session

### [priorities](docs/priorities/README.md)

* [getOrganizationBrandingPoliciesPriorities](docs/priorities/README.md#getorganizationbrandingpoliciespriorities) - Return the branding policy IDs of an organization in priority order
* [updateOrganizationBrandingPoliciesPriorities](docs/priorities/README.md#updateorganizationbrandingpoliciespriorities) - Update the priority ordering of an organization's branding policies.

### [profiles](docs/profiles/README.md)

* [createNetworkSensorAlertsProfile](docs/profiles/README.md#createnetworksensoralertsprofile) - Creates a sensor alert profile for a network.
* [createOrganizationAlertsProfile](docs/profiles/README.md#createorganizationalertsprofile) - Create an organization-wide alert configuration
* [deleteNetworkSensorAlertsProfile](docs/profiles/README.md#deletenetworksensoralertsprofile) - Deletes a sensor alert profile from a network.
* [deleteOrganizationAlertsProfile](docs/profiles/README.md#deleteorganizationalertsprofile) - Removes an organization-wide alert config
* [getNetworkSensorAlertsProfile](docs/profiles/README.md#getnetworksensoralertsprofile) - Show details of a sensor alert profile for a network.
* [getNetworkSensorAlertsProfiles](docs/profiles/README.md#getnetworksensoralertsprofiles) - Lists all sensor alert profiles for a network.
* [getNetworkSmProfiles](docs/profiles/README.md#getnetworksmprofiles) - List all profiles in a network
* [getOrganizationAlertsProfiles](docs/profiles/README.md#getorganizationalertsprofiles) - List all organization-wide alert configurations
* [getOrganizationConfigTemplateSwitchProfilePort](docs/profiles/README.md#getorganizationconfigtemplateswitchprofileport) - Return a switch profile port
* [getOrganizationConfigTemplateSwitchProfilePorts](docs/profiles/README.md#getorganizationconfigtemplateswitchprofileports) - Return all the ports of a switch profile
* [getOrganizationConfigTemplateSwitchProfiles](docs/profiles/README.md#getorganizationconfigtemplateswitchprofiles) - List the switch profiles for your switch template configuration
* [updateNetworkSensorAlertsProfile](docs/profiles/README.md#updatenetworksensoralertsprofile) - Updates a sensor alert profile for a network.
* [updateOrganizationAlertsProfile](docs/profiles/README.md#updateorganizationalertsprofile) - Update an organization-wide alert config
* [updateOrganizationConfigTemplateSwitchProfilePort](docs/profiles/README.md#updateorganizationconfigtemplateswitchprofileport) - Update a switch profile port

### [qosRules](docs/qosrules/README.md)

* [createNetworkSwitchQosRule](docs/qosrules/README.md#createnetworkswitchqosrule) - Add a quality of service rule
* [deleteNetworkSwitchQosRule](docs/qosrules/README.md#deletenetworkswitchqosrule) - Delete a quality of service rule
* [getNetworkSwitchQosRule](docs/qosrules/README.md#getnetworkswitchqosrule) - Return a quality of service rule
* [getNetworkSwitchQosRules](docs/qosrules/README.md#getnetworkswitchqosrules) - List quality of service rules
* [getNetworkSwitchQosRulesOrder](docs/qosrules/README.md#getnetworkswitchqosrulesorder) - Return the quality of service rule IDs by order in which they will be processed by the switch
* [updateNetworkSwitchQosRule](docs/qosrules/README.md#updatenetworkswitchqosrule) - Update a quality of service rule
* [updateNetworkSwitchQosRulesOrder](docs/qosrules/README.md#updatenetworkswitchqosrulesorder) - Update the order in which the rules should be processed by the switch

### [qualityAndRetention](docs/qualityandretention/README.md)

* [getDeviceCameraQualityAndRetention](docs/qualityandretention/README.md#getdevicecameraqualityandretention) - Returns quality and retention settings for the given camera
* [updateDeviceCameraQualityAndRetention](docs/qualityandretention/README.md#updatedevicecameraqualityandretention) - Update quality and retention settings for the given camera

### [qualityRetentionProfiles](docs/qualityretentionprofiles/README.md)

* [createNetworkCameraQualityRetentionProfile](docs/qualityretentionprofiles/README.md#createnetworkcameraqualityretentionprofile) - Creates new quality retention profile for this network.
* [deleteNetworkCameraQualityRetentionProfile](docs/qualityretentionprofiles/README.md#deletenetworkcameraqualityretentionprofile) - Delete an existing quality retention profile for this network.
* [getNetworkCameraQualityRetentionProfile](docs/qualityretentionprofiles/README.md#getnetworkcameraqualityretentionprofile) - Retrieve a single quality retention profile
* [getNetworkCameraQualityRetentionProfiles](docs/qualityretentionprofiles/README.md#getnetworkcameraqualityretentionprofiles) - List the quality retention profiles for this network
* [updateNetworkCameraQualityRetentionProfile](docs/qualityretentionprofiles/README.md#updatenetworkcameraqualityretentionprofile) - Update an existing quality retention profile for this network.

### [radio](docs/radio/README.md)

* [getDeviceWirelessRadioSettings](docs/radio/README.md#getdevicewirelessradiosettings) - Return the radio settings of a device
* [updateDeviceWirelessRadioSettings](docs/radio/README.md#updatedevicewirelessradiosettings) - Update the radio settings of a device

### [readings](docs/readings/README.md)

* [getOrganizationSensorReadingsHistory](docs/readings/README.md#getorganizationsensorreadingshistory) - Return all reported readings from sensors in a given timespan, sorted by timestamp
* [getOrganizationSensorReadingsLatest](docs/readings/README.md#getorganizationsensorreadingslatest) - Return the latest available reading for each metric from each sensor, sorted by sensor serial

### [recent](docs/recent/README.md)

* [getDeviceCameraAnalyticsRecent](docs/recent/README.md#getdevicecameraanalyticsrecent) - Returns most recent record for analytics zones

### [relationships](docs/relationships/README.md)

* [getDeviceSensorRelationships](docs/relationships/README.md#getdevicesensorrelationships) - List the sensor roles for a given sensor or camera device.
* [getNetworkSensorRelationships](docs/relationships/README.md#getnetworksensorrelationships) - List the sensor roles for devices in a given network
* [updateDeviceSensorRelationships](docs/relationships/README.md#updatedevicesensorrelationships) - Assign one or more sensor roles to a given sensor or camera device.

### [rendezvousPoints](docs/rendezvouspoints/README.md)

* [createNetworkSwitchRoutingMulticastRendezvousPoint](docs/rendezvouspoints/README.md#createnetworkswitchroutingmulticastrendezvouspoint) - Create a multicast rendezvous point
* [deleteNetworkSwitchRoutingMulticastRendezvousPoint](docs/rendezvouspoints/README.md#deletenetworkswitchroutingmulticastrendezvouspoint) - Delete a multicast rendezvous point
* [getNetworkSwitchRoutingMulticastRendezvousPoint](docs/rendezvouspoints/README.md#getnetworkswitchroutingmulticastrendezvouspoint) - Return a multicast rendezvous point
* [getNetworkSwitchRoutingMulticastRendezvousPoints](docs/rendezvouspoints/README.md#getnetworkswitchroutingmulticastrendezvouspoints) - List multicast rendezvous points
* [updateNetworkSwitchRoutingMulticastRendezvousPoint](docs/rendezvouspoints/README.md#updatenetworkswitchroutingmulticastrendezvouspoint) - Update a multicast rendezvous point

### [requests](docs/requests/README.md)

* [createNetworkPiiRequest](docs/requests/README.md#createnetworkpiirequest) - Submit a new delete or restrict processing PII request
* [deleteNetworkPiiRequest](docs/requests/README.md#deletenetworkpiirequest) - Delete a restrict processing PII request
* [getNetworkPiiRequest](docs/requests/README.md#getnetworkpiirequest) - Return a PII request
* [getNetworkPiiRequests](docs/requests/README.md#getnetworkpiirequests) - List the PII requests for this network or organization

### [responseCodes](docs/responsecodes/README.md)

* [getOrganizationApiRequestsOverviewResponseCodesByInterval](docs/responsecodes/README.md#getorganizationapirequestsoverviewresponsecodesbyinterval) - Tracks organizations' API requests by response code across a given time period

### [restrictions](docs/restrictions/README.md)

* [getNetworkSmDeviceRestrictions](docs/restrictions/README.md#getnetworksmdevicerestrictions) - List the restrictions on a device

### [rfProfiles](docs/rfprofiles/README.md)

* [createNetworkWirelessRfProfile](docs/rfprofiles/README.md#createnetworkwirelessrfprofile) - Creates new RF profile for this network
* [deleteNetworkWirelessRfProfile](docs/rfprofiles/README.md#deletenetworkwirelessrfprofile) - Delete a RF Profile
* [getNetworkWirelessRfProfile](docs/rfprofiles/README.md#getnetworkwirelessrfprofile) - Return a RF profile
* [getNetworkWirelessRfProfiles](docs/rfprofiles/README.md#getnetworkwirelessrfprofiles) - List the non-basic RF profiles for this network
* [updateNetworkWirelessRfProfile](docs/rfprofiles/README.md#updatenetworkwirelessrfprofile) - Updates specified RF profile for this network

### [rollbacks](docs/rollbacks/README.md)

* [createNetworkFirmwareUpgradesRollback](docs/rollbacks/README.md#createnetworkfirmwareupgradesrollback) - Rollback a Firmware Upgrade For A Network

### [routing](docs/routing/README.md)

* [createDeviceSwitchRoutingInterface](docs/routing/README.md#createdeviceswitchroutinginterface) - Create a layer 3 interface for a switch
* [createDeviceSwitchRoutingStaticRoute](docs/routing/README.md#createdeviceswitchroutingstaticroute) - Create a layer 3 static route for a switch
* [createNetworkSwitchRoutingMulticastRendezvousPoint](docs/routing/README.md#createnetworkswitchroutingmulticastrendezvouspoint) - Create a multicast rendezvous point
* [createNetworkSwitchStackRoutingInterface](docs/routing/README.md#createnetworkswitchstackroutinginterface) - Create a layer 3 interface for a switch stack
* [createNetworkSwitchStackRoutingStaticRoute](docs/routing/README.md#createnetworkswitchstackroutingstaticroute) - Create a layer 3 static route for a switch stack
* [deleteDeviceSwitchRoutingInterface](docs/routing/README.md#deletedeviceswitchroutinginterface) - Delete a layer 3 interface from the switch
* [deleteDeviceSwitchRoutingStaticRoute](docs/routing/README.md#deletedeviceswitchroutingstaticroute) - Delete a layer 3 static route for a switch
* [deleteNetworkSwitchRoutingMulticastRendezvousPoint](docs/routing/README.md#deletenetworkswitchroutingmulticastrendezvouspoint) - Delete a multicast rendezvous point
* [deleteNetworkSwitchStackRoutingInterface](docs/routing/README.md#deletenetworkswitchstackroutinginterface) - Delete a layer 3 interface from a switch stack
* [deleteNetworkSwitchStackRoutingStaticRoute](docs/routing/README.md#deletenetworkswitchstackroutingstaticroute) - Delete a layer 3 static route for a switch stack
* [getDeviceSwitchRoutingInterface](docs/routing/README.md#getdeviceswitchroutinginterface) - Return a layer 3 interface for a switch
* [getDeviceSwitchRoutingInterfaceDhcp](docs/routing/README.md#getdeviceswitchroutinginterfacedhcp) - Return a layer 3 interface DHCP configuration for a switch
* [getDeviceSwitchRoutingInterfaces](docs/routing/README.md#getdeviceswitchroutinginterfaces) - List layer 3 interfaces for a switch
* [getDeviceSwitchRoutingStaticRoute](docs/routing/README.md#getdeviceswitchroutingstaticroute) - Return a layer 3 static route for a switch
* [getDeviceSwitchRoutingStaticRoutes](docs/routing/README.md#getdeviceswitchroutingstaticroutes) - List layer 3 static routes for a switch
* [getNetworkSwitchRoutingMulticast](docs/routing/README.md#getnetworkswitchroutingmulticast) - Return multicast settings for a network
* [getNetworkSwitchRoutingMulticastRendezvousPoint](docs/routing/README.md#getnetworkswitchroutingmulticastrendezvouspoint) - Return a multicast rendezvous point
* [getNetworkSwitchRoutingMulticastRendezvousPoints](docs/routing/README.md#getnetworkswitchroutingmulticastrendezvouspoints) - List multicast rendezvous points
* [getNetworkSwitchRoutingOspf](docs/routing/README.md#getnetworkswitchroutingospf) - Return layer 3 OSPF routing configuration
* [getNetworkSwitchStackRoutingInterface](docs/routing/README.md#getnetworkswitchstackroutinginterface) - Return a layer 3 interface from a switch stack
* [getNetworkSwitchStackRoutingInterfaceDhcp](docs/routing/README.md#getnetworkswitchstackroutinginterfacedhcp) - Return a layer 3 interface DHCP configuration for a switch stack
* [getNetworkSwitchStackRoutingInterfaces](docs/routing/README.md#getnetworkswitchstackroutinginterfaces) - List layer 3 interfaces for a switch stack
* [getNetworkSwitchStackRoutingStaticRoute](docs/routing/README.md#getnetworkswitchstackroutingstaticroute) - Return a layer 3 static route for a switch stack
* [getNetworkSwitchStackRoutingStaticRoutes](docs/routing/README.md#getnetworkswitchstackroutingstaticroutes) - List layer 3 static routes for a switch stack
* [updateDeviceSwitchRoutingInterface](docs/routing/README.md#updatedeviceswitchroutinginterface) - Update a layer 3 interface for a switch
* [updateDeviceSwitchRoutingInterfaceDhcp](docs/routing/README.md#updatedeviceswitchroutinginterfacedhcp) - Update a layer 3 interface DHCP configuration for a switch
* [updateDeviceSwitchRoutingStaticRoute](docs/routing/README.md#updatedeviceswitchroutingstaticroute) - Update a layer 3 static route for a switch
* [updateNetworkSwitchRoutingMulticast](docs/routing/README.md#updatenetworkswitchroutingmulticast) - Update multicast settings for a network
* [updateNetworkSwitchRoutingMulticastRendezvousPoint](docs/routing/README.md#updatenetworkswitchroutingmulticastrendezvouspoint) - Update a multicast rendezvous point
* [updateNetworkSwitchRoutingOspf](docs/routing/README.md#updatenetworkswitchroutingospf) - Update layer 3 OSPF routing configuration
* [updateNetworkSwitchStackRoutingInterface](docs/routing/README.md#updatenetworkswitchstackroutinginterface) - Update a layer 3 interface for a switch stack
* [updateNetworkSwitchStackRoutingInterfaceDhcp](docs/routing/README.md#updatenetworkswitchstackroutinginterfacedhcp) - Update a layer 3 interface DHCP configuration for a switch stack
* [updateNetworkSwitchStackRoutingStaticRoute](docs/routing/README.md#updatenetworkswitchstackroutingstaticroute) - Update a layer 3 static route for a switch stack

### [rules](docs/rules/README.md)

* [getNetworkApplianceTrafficShapingRules](docs/rules/README.md#getnetworkappliancetrafficshapingrules) - Display the traffic shaping settings rules for an MX network
* [getNetworkWirelessSsidTrafficShapingRules](docs/rules/README.md#getnetworkwirelessssidtrafficshapingrules) - Display the traffic shaping settings for a SSID on an MR network
* [updateNetworkApplianceTrafficShapingRules](docs/rules/README.md#updatenetworkappliancetrafficshapingrules) - Update the traffic shaping settings rules for an MX network
* [updateNetworkWirelessSsidTrafficShapingRules](docs/rules/README.md#updatenetworkwirelessssidtrafficshapingrules) - Update the traffic shaping settings for an SSID on an MR network

### [saml](docs/saml/README.md)

* [createOrganizationSamlIdp](docs/saml/README.md#createorganizationsamlidp) - Create a SAML IdP for your organization.
* [deleteOrganizationSamlIdp](docs/saml/README.md#deleteorganizationsamlidp) - Remove a SAML IdP in your organization.
* [getOrganizationSaml](docs/saml/README.md#getorganizationsaml) - Returns the SAML SSO enabled settings for an organization.
* [getOrganizationSamlIdp](docs/saml/README.md#getorganizationsamlidp) - Get a SAML IdP from your organization.
* [getOrganizationSamlIdps](docs/saml/README.md#getorganizationsamlidps) - List the SAML IdPs in your organization.
* [updateOrganizationSaml](docs/saml/README.md#updateorganizationsaml) - Updates the SAML SSO enabled settings for an organization.
* [updateOrganizationSamlIdp](docs/saml/README.md#updateorganizationsamlidp) - Update a SAML IdP in your organization

### [samlRoles](docs/samlroles/README.md)

* [createOrganizationSamlRole](docs/samlroles/README.md#createorganizationsamlrole) - Create a SAML role
* [deleteOrganizationSamlRole](docs/samlroles/README.md#deleteorganizationsamlrole) - Remove a SAML role
* [getOrganizationSamlRole](docs/samlroles/README.md#getorganizationsamlrole) - Return a SAML role
* [getOrganizationSamlRoles](docs/samlroles/README.md#getorganizationsamlroles) - List the SAML roles for this organization
* [updateOrganizationSamlRole](docs/samlroles/README.md#updateorganizationsamlrole) - Update a SAML role

### [schedules](docs/schedules/README.md)

* [getNetworkCameraSchedules](docs/schedules/README.md#getnetworkcameraschedules) - Returns a list of all camera recording schedules.
* [getNetworkWirelessSsidSchedules](docs/schedules/README.md#getnetworkwirelessssidschedules) - List the outage schedule for the SSID
* [updateNetworkWirelessSsidSchedules](docs/schedules/README.md#updatenetworkwirelessssidschedules) - Update the outage schedule for the SSID

### [search](docs/search/README.md)

* [getOrganizationClientsSearch](docs/search/README.md#getorganizationclientssearch) - Return the client details in an organization

### [security](docs/security/README.md)

* [getNetworkApplianceClientSecurityEvents](docs/security/README.md#getnetworkapplianceclientsecurityevents) - List the security events for a client
* [getNetworkApplianceSecurityEvents](docs/security/README.md#getnetworkappliancesecurityevents) - List the security events for a network
* [getNetworkApplianceSecurityIntrusion](docs/security/README.md#getnetworkappliancesecurityintrusion) - Returns all supported intrusion settings for an MX network
* [getNetworkApplianceSecurityMalware](docs/security/README.md#getnetworkappliancesecuritymalware) - Returns all supported malware settings for an MX network
* [getOrganizationApplianceSecurityEvents](docs/security/README.md#getorganizationappliancesecurityevents) - List the security events for an organization
* [getOrganizationApplianceSecurityIntrusion](docs/security/README.md#getorganizationappliancesecurityintrusion) - Returns all supported intrusion settings for an organization
* [updateNetworkApplianceSecurityIntrusion](docs/security/README.md#updatenetworkappliancesecurityintrusion) - Set the supported intrusion settings for an MX network
* [updateNetworkApplianceSecurityMalware](docs/security/README.md#updatenetworkappliancesecuritymalware) - Set the supported malware settings for an MX network
* [updateOrganizationApplianceSecurityIntrusion](docs/security/README.md#updateorganizationappliancesecurityintrusion) - Sets supported intrusion settings for an organization

### [securityCenters](docs/securitycenters/README.md)

* [getNetworkSmDeviceSecurityCenters](docs/securitycenters/README.md#getnetworksmdevicesecuritycenters) - List the security centers on a device

### [seen](docs/seen/README.md)

* [getNetworkSwitchDhcpV4ServersSeen](docs/seen/README.md#getnetworkswitchdhcpv4serversseen) - Return the network's DHCPv4 servers seen within the selected timeframe (default 1 day)

### [sense](docs/sense/README.md)

* [getDeviceCameraSense](docs/sense/README.md#getdevicecamerasense) - Returns sense settings for a given camera
* [getDeviceCameraSenseObjectDetectionModels](docs/sense/README.md#getdevicecamerasenseobjectdetectionmodels) - Returns the MV Sense object detection model list for the given camera
* [updateDeviceCameraSense](docs/sense/README.md#updatedevicecamerasense) - Update sense settings for the given camera

### [sensor](docs/sensor/README.md)

* [createNetworkSensorAlertsProfile](docs/sensor/README.md#createnetworksensoralertsprofile) - Creates a sensor alert profile for a network.
* [deleteNetworkSensorAlertsProfile](docs/sensor/README.md#deletenetworksensoralertsprofile) - Deletes a sensor alert profile from a network.
* [getDeviceSensorRelationships](docs/sensor/README.md#getdevicesensorrelationships) - List the sensor roles for a given sensor or camera device.
* [getNetworkSensorAlertsCurrentOverviewByMetric](docs/sensor/README.md#getnetworksensoralertscurrentoverviewbymetric) - Return an overview of currently alerting sensors by metric
* [getNetworkSensorAlertsOverviewByMetric](docs/sensor/README.md#getnetworksensoralertsoverviewbymetric) - Return an overview of alert occurrences over a timespan, by metric
* [getNetworkSensorAlertsProfile](docs/sensor/README.md#getnetworksensoralertsprofile) - Show details of a sensor alert profile for a network.
* [getNetworkSensorAlertsProfiles](docs/sensor/README.md#getnetworksensoralertsprofiles) - Lists all sensor alert profiles for a network.
* [getNetworkSensorRelationships](docs/sensor/README.md#getnetworksensorrelationships) - List the sensor roles for devices in a given network
* [getOrganizationSensorReadingsHistory](docs/sensor/README.md#getorganizationsensorreadingshistory) - Return all reported readings from sensors in a given timespan, sorted by timestamp
* [getOrganizationSensorReadingsLatest](docs/sensor/README.md#getorganizationsensorreadingslatest) - Return the latest available reading for each metric from each sensor, sorted by sensor serial
* [updateDeviceSensorRelationships](docs/sensor/README.md#updatedevicesensorrelationships) - Assign one or more sensor roles to a given sensor or camera device.
* [updateNetworkSensorAlertsProfile](docs/sensor/README.md#updatenetworksensoralertsprofile) - Updates a sensor alert profile for a network.

### [servers](docs/servers/README.md)

* [getNetworkSwitchDhcpV4ServersSeen](docs/servers/README.md#getnetworkswitchdhcpv4serversseen) - Return the network's DHCPv4 servers seen within the selected timeframe (default 1 day)

### [settings](docs/settings/README.md)

* [getDeviceApplianceUplinksSettings](docs/settings/README.md#getdeviceapplianceuplinkssettings) - Return the uplink settings for an MX appliance
* [getDeviceCameraVideoSettings](docs/settings/README.md#getdevicecameravideosettings) - Returns video settings for the given camera
* [getDeviceWirelessBluetoothSettings](docs/settings/README.md#getdevicewirelessbluetoothsettings) - Return the bluetooth settings for a wireless device
* [getDeviceWirelessRadioSettings](docs/settings/README.md#getdevicewirelessradiosettings) - Return the radio settings of a device
* [getNetworkAlertsSettings](docs/settings/README.md#getnetworkalertssettings) - Return the alert configuration for this network
* [getNetworkApplianceFirewallSettings](docs/settings/README.md#getnetworkappliancefirewallsettings) - Return the firewall settings for this network
* [getNetworkApplianceSettings](docs/settings/README.md#getnetworkappliancesettings) - Return the appliance settings for a network
* [getNetworkApplianceVlansSettings](docs/settings/README.md#getnetworkappliancevlanssettings) - Returns the enabled status of VLANs for the network
* [getNetworkSettings](docs/settings/README.md#getnetworksettings) - Return the settings for a network
* [getNetworkSwitchSettings](docs/settings/README.md#getnetworkswitchsettings) - Returns the switch network settings
* [getNetworkWirelessBluetoothSettings](docs/settings/README.md#getnetworkwirelessbluetoothsettings) - Return the Bluetooth settings for a network. <a href="https://documentation.meraki.com/MR/Bluetooth/Bluetooth_Low_Energy_(BLE)">Bluetooth settings</a> must be enabled on the network.
* [getNetworkWirelessSettings](docs/settings/README.md#getnetworkwirelesssettings) - Return the wireless settings for a network
* [getNetworkWirelessSsidSplashSettings](docs/settings/README.md#getnetworkwirelessssidsplashsettings) - Display the splash page settings for the given SSID
* [getOrganizationAdaptivePolicySettings](docs/settings/README.md#getorganizationadaptivepolicysettings) - Returns global adaptive policy settings in an organization
* [updateDeviceApplianceUplinksSettings](docs/settings/README.md#updatedeviceapplianceuplinkssettings) - Update the uplink settings for an MX appliance
* [updateDeviceCameraVideoSettings](docs/settings/README.md#updatedevicecameravideosettings) - Update video settings for the given camera
* [updateDeviceWirelessBluetoothSettings](docs/settings/README.md#updatedevicewirelessbluetoothsettings) - Update the bluetooth settings for a wireless device
* [updateDeviceWirelessRadioSettings](docs/settings/README.md#updatedevicewirelessradiosettings) - Update the radio settings of a device
* [updateNetworkAlertsSettings](docs/settings/README.md#updatenetworkalertssettings) - Update the alert configuration for this network
* [updateNetworkApplianceFirewallSettings](docs/settings/README.md#updatenetworkappliancefirewallsettings) - Update the firewall settings for this network
* [updateNetworkApplianceSettings](docs/settings/README.md#updatenetworkappliancesettings) - Update the appliance settings for a network
* [updateNetworkApplianceVlansSettings](docs/settings/README.md#updatenetworkappliancevlanssettings) - Enable/Disable VLANs for the given network
* [updateNetworkSettings](docs/settings/README.md#updatenetworksettings) - Update the settings for a network
* [updateNetworkSwitchSettings](docs/settings/README.md#updatenetworkswitchsettings) - Update switch network settings
* [updateNetworkWirelessBluetoothSettings](docs/settings/README.md#updatenetworkwirelessbluetoothsettings) - Update the Bluetooth settings for a network
* [updateNetworkWirelessSettings](docs/settings/README.md#updatenetworkwirelesssettings) - Update the wireless settings for a network
* [updateNetworkWirelessSsidSplashSettings](docs/settings/README.md#updatenetworkwirelessssidsplashsettings) - Modify the splash page settings for the given SSID
* [updateOrganizationAdaptivePolicySettings](docs/settings/README.md#updateorganizationadaptivepolicysettings) - Update global adaptive policy settings

### [signalQualityHistory](docs/signalqualityhistory/README.md)

* [getNetworkWirelessSignalQualityHistory](docs/signalqualityhistory/README.md#getnetworkwirelesssignalqualityhistory) - Return signal quality (SNR/RSSI) over time for a device or network client

### [sims](docs/sims/README.md)

* [getDeviceCellularSims](docs/sims/README.md#getdevicecellularsims) - Return the SIM and APN configurations for a cellular device.
* [updateDeviceCellularSims](docs/sims/README.md#updatedevicecellularsims) - Updates the SIM and APN configurations for a cellular device.

### [singleLan](docs/singlelan/README.md)

* [getNetworkApplianceSingleLan](docs/singlelan/README.md#getnetworkappliancesinglelan) - Return single LAN configuration
* [updateNetworkApplianceSingleLan](docs/singlelan/README.md#updatenetworkappliancesinglelan) - Update single LAN configuration

### [siteToSiteVpn](docs/sitetositevpn/README.md)

* [getNetworkApplianceVpnSiteToSiteVpn](docs/sitetositevpn/README.md#getnetworkappliancevpnsitetositevpn) - Return the site-to-site VPN settings of a network
* [updateNetworkApplianceVpnSiteToSiteVpn](docs/sitetositevpn/README.md#updatenetworkappliancevpnsitetositevpn) - Update the site-to-site VPN settings of a network

### [sm](docs/sm/README.md)

* [checkinNetworkSmDevices](docs/sm/README.md#checkinnetworksmdevices) - Force check-in a set of devices
* [createNetworkSmBypassActivationLockAttempt](docs/sm/README.md#createnetworksmbypassactivationlockattempt) - Bypass activation lock attempt
* [createNetworkSmTargetGroup](docs/sm/README.md#createnetworksmtargetgroup) - Add a target group
* [deleteNetworkSmTargetGroup](docs/sm/README.md#deletenetworksmtargetgroup) - Delete a target group from a network
* [deleteNetworkSmUserAccessDevice](docs/sm/README.md#deletenetworksmuseraccessdevice) - Delete a User Access Device
* [getNetworkSmBypassActivationLockAttempt](docs/sm/README.md#getnetworksmbypassactivationlockattempt) - Bypass activation lock attempt status
* [getNetworkSmDeviceCellularUsageHistory](docs/sm/README.md#getnetworksmdevicecellularusagehistory) - Return the client's daily cellular data usage history
* [getNetworkSmDeviceCerts](docs/sm/README.md#getnetworksmdevicecerts) - List the certs on a device
* [getNetworkSmDeviceConnectivity](docs/sm/README.md#getnetworksmdeviceconnectivity) - Returns historical connectivity data (whether a device is regularly checking in to Dashboard).
* [getNetworkSmDeviceDesktopLogs](docs/sm/README.md#getnetworksmdevicedesktoplogs) - Return historical records of various Systems Manager network connection details for desktop devices.
* [getNetworkSmDeviceDeviceCommandLogs](docs/sm/README.md#getnetworksmdevicedevicecommandlogs) - Return historical records of commands sent to Systems Manager devices
* [getNetworkSmDeviceDeviceProfiles](docs/sm/README.md#getnetworksmdevicedeviceprofiles) - Get the installed profiles associated with a device
* [getNetworkSmDeviceNetworkAdapters](docs/sm/README.md#getnetworksmdevicenetworkadapters) - List the network adapters of a device
* [getNetworkSmDevicePerformanceHistory](docs/sm/README.md#getnetworksmdeviceperformancehistory) - Return historical records of various Systems Manager client metrics for desktop devices.
* [getNetworkSmDeviceRestrictions](docs/sm/README.md#getnetworksmdevicerestrictions) - List the restrictions on a device
* [getNetworkSmDeviceSecurityCenters](docs/sm/README.md#getnetworksmdevicesecuritycenters) - List the security centers on a device
* [getNetworkSmDeviceSoftwares](docs/sm/README.md#getnetworksmdevicesoftwares) - Get a list of softwares associated with a device
* [getNetworkSmDeviceWlanLists](docs/sm/README.md#getnetworksmdevicewlanlists) - List the saved SSID names on a device
* [getNetworkSmDevices](docs/sm/README.md#getnetworksmdevices) - List the devices enrolled in an SM network with various specified fields and filters
* [getNetworkSmProfiles](docs/sm/README.md#getnetworksmprofiles) - List all profiles in a network
* [getNetworkSmTargetGroup](docs/sm/README.md#getnetworksmtargetgroup) - Return a target group
* [getNetworkSmTargetGroups](docs/sm/README.md#getnetworksmtargetgroups) - List the target groups in this network
* [getNetworkSmTrustedAccessConfigs](docs/sm/README.md#getnetworksmtrustedaccessconfigs) - List Trusted Access Configs
* [getNetworkSmUserAccessDevices](docs/sm/README.md#getnetworksmuseraccessdevices) - List User Access Devices and its Trusted Access Connections
* [getNetworkSmUserDeviceProfiles](docs/sm/README.md#getnetworksmuserdeviceprofiles) - Get the profiles associated with a user
* [getNetworkSmUserSoftwares](docs/sm/README.md#getnetworksmusersoftwares) - Get a list of softwares associated with a user
* [getNetworkSmUsers](docs/sm/README.md#getnetworksmusers) - List the owners in an SM network with various specified fields and filters
* [getOrganizationSmApnsCert](docs/sm/README.md#getorganizationsmapnscert) - Get the organization's APNS certificate
* [getOrganizationSmVppAccount](docs/sm/README.md#getorganizationsmvppaccount) - Get a hash containing the unparsed token of the VPP account with the given ID
* [getOrganizationSmVppAccounts](docs/sm/README.md#getorganizationsmvppaccounts) - List the VPP accounts in the organization
* [lockNetworkSmDevices](docs/sm/README.md#locknetworksmdevices) - Lock a set of devices
* [modifyNetworkSmDevicesTags](docs/sm/README.md#modifynetworksmdevicestags) - Add, delete, or update the tags of a set of devices
* [moveNetworkSmDevices](docs/sm/README.md#movenetworksmdevices) - Move a set of devices to a new network
* [refreshNetworkSmDeviceDetails](docs/sm/README.md#refreshnetworksmdevicedetails) - Refresh the details of a device
* [unenrollNetworkSmDevice](docs/sm/README.md#unenrollnetworksmdevice) - Unenroll a device
* [updateNetworkSmDevicesFields](docs/sm/README.md#updatenetworksmdevicesfields) - Modify the fields of a device
* [updateNetworkSmTargetGroup](docs/sm/README.md#updatenetworksmtargetgroup) - Update a target group
* [wipeNetworkSmDevices](docs/sm/README.md#wipenetworksmdevices) - Wipe a device

### [smDevicesForKey](docs/smdevicesforkey/README.md)

* [getNetworkPiiSmDevicesForKey](docs/smdevicesforkey/README.md#getnetworkpiismdevicesforkey) - Given a piece of Personally Identifiable Information (PII), return the Systems Manager device ID(s) associated with that identifier

### [smOwnersForKey](docs/smownersforkey/README.md)

* [getNetworkPiiSmOwnersForKey](docs/smownersforkey/README.md#getnetworkpiismownersforkey) - Given a piece of Personally Identifiable Information (PII), return the Systems Manager owner ID(s) associated with that identifier

### [snmp](docs/snmp/README.md)

* [getNetworkSnmp](docs/snmp/README.md#getnetworksnmp) - Return the SNMP settings for a network
* [getOrganizationSnmp](docs/snmp/README.md#getorganizationsnmp) - Return the SNMP settings for an organization
* [updateNetworkSnmp](docs/snmp/README.md#updatenetworksnmp) - Update the SNMP settings for a network
* [updateOrganizationSnmp](docs/snmp/README.md#updateorganizationsnmp) - Update the SNMP settings for an organization

### [softwares](docs/softwares/README.md)

* [getNetworkSmDeviceSoftwares](docs/softwares/README.md#getnetworksmdevicesoftwares) - Get a list of softwares associated with a device
* [getNetworkSmUserSoftwares](docs/softwares/README.md#getnetworksmusersoftwares) - Get a list of softwares associated with a user

### [splash](docs/splash/README.md)

* [getNetworkWirelessSsidSplashSettings](docs/splash/README.md#getnetworkwirelessssidsplashsettings) - Display the splash page settings for the given SSID
* [updateNetworkWirelessSsidSplashSettings](docs/splash/README.md#updatenetworkwirelessssidsplashsettings) - Modify the splash page settings for the given SSID

### [splashAuthorizationStatus](docs/splashauthorizationstatus/README.md)

* [getNetworkClientSplashAuthorizationStatus](docs/splashauthorizationstatus/README.md#getnetworkclientsplashauthorizationstatus) - Return the splash authorization for a client, for each SSID they've associated with through splash
* [updateNetworkClientSplashAuthorizationStatus](docs/splashauthorizationstatus/README.md#updatenetworkclientsplashauthorizationstatus) - Update a client's splash authorization

### [splashLoginAttempts](docs/splashloginattempts/README.md)

* [getNetworkSplashLoginAttempts](docs/splashloginattempts/README.md#getnetworksplashloginattempts) - List the splash login attempts for a network

### [ssids](docs/ssids/README.md)

* [createNetworkWirelessSsidIdentityPsk](docs/ssids/README.md#createnetworkwirelessssididentitypsk) - Create an Identity PSK
* [deleteNetworkWirelessSsidIdentityPsk](docs/ssids/README.md#deletenetworkwirelessssididentitypsk) - Delete an Identity PSK
* [getNetworkApplianceSsid](docs/ssids/README.md#getnetworkappliancessid) - Return a single MX SSID
* [getNetworkApplianceSsids](docs/ssids/README.md#getnetworkappliancessids) - List the MX SSIDs in a network
* [getNetworkWirelessSsid](docs/ssids/README.md#getnetworkwirelessssid) - Return a single MR SSID
* [getNetworkWirelessSsidBonjourForwarding](docs/ssids/README.md#getnetworkwirelessssidbonjourforwarding) - List the Bonjour forwarding setting and rules for the SSID
* [getNetworkWirelessSsidDeviceTypeGroupPolicies](docs/ssids/README.md#getnetworkwirelessssiddevicetypegrouppolicies) - List the device type group policies for the SSID
* [getNetworkWirelessSsidEapOverride](docs/ssids/README.md#getnetworkwirelessssideapoverride) - Return the EAP overridden parameters for an SSID
* [getNetworkWirelessSsidFirewallL3FirewallRules](docs/ssids/README.md#getnetworkwirelessssidfirewalll3firewallrules) - Return the L3 firewall rules for an SSID on an MR network
* [getNetworkWirelessSsidFirewallL7FirewallRules](docs/ssids/README.md#getnetworkwirelessssidfirewalll7firewallrules) - Return the L7 firewall rules for an SSID on an MR network
* [getNetworkWirelessSsidHotspot20](docs/ssids/README.md#getnetworkwirelessssidhotspot20) - Return the Hotspot 2.0 settings for an SSID
* [getNetworkWirelessSsidIdentityPsk](docs/ssids/README.md#getnetworkwirelessssididentitypsk) - Return an Identity PSK
* [getNetworkWirelessSsidIdentityPsks](docs/ssids/README.md#getnetworkwirelessssididentitypsks) - List all Identity PSKs in a wireless network
* [getNetworkWirelessSsidSchedules](docs/ssids/README.md#getnetworkwirelessssidschedules) - List the outage schedule for the SSID
* [getNetworkWirelessSsidSplashSettings](docs/ssids/README.md#getnetworkwirelessssidsplashsettings) - Display the splash page settings for the given SSID
* [getNetworkWirelessSsidTrafficShapingRules](docs/ssids/README.md#getnetworkwirelessssidtrafficshapingrules) - Display the traffic shaping settings for a SSID on an MR network
* [getNetworkWirelessSsidVpn](docs/ssids/README.md#getnetworkwirelessssidvpn) - List the VPN settings for the SSID.
* [getNetworkWirelessSsids](docs/ssids/README.md#getnetworkwirelessssids) - List the MR SSIDs in a network
* [getOrganizationSummaryTopSsidsByUsage](docs/ssids/README.md#getorganizationsummarytopssidsbyusage) - Return metrics for organization's top 10 ssids by data usage over given time range
* [updateNetworkApplianceSsid](docs/ssids/README.md#updatenetworkappliancessid) - Update the attributes of an MX SSID
* [updateNetworkWirelessSsid](docs/ssids/README.md#updatenetworkwirelessssid) - Update the attributes of an MR SSID
* [updateNetworkWirelessSsidBonjourForwarding](docs/ssids/README.md#updatenetworkwirelessssidbonjourforwarding) - Update the bonjour forwarding setting and rules for the SSID
* [updateNetworkWirelessSsidDeviceTypeGroupPolicies](docs/ssids/README.md#updatenetworkwirelessssiddevicetypegrouppolicies) - Update the device type group policies for the SSID
* [updateNetworkWirelessSsidEapOverride](docs/ssids/README.md#updatenetworkwirelessssideapoverride) - Update the EAP overridden parameters for an SSID.
* [updateNetworkWirelessSsidFirewallL3FirewallRules](docs/ssids/README.md#updatenetworkwirelessssidfirewalll3firewallrules) - Update the L3 firewall rules of an SSID on an MR network
* [updateNetworkWirelessSsidFirewallL7FirewallRules](docs/ssids/README.md#updatenetworkwirelessssidfirewalll7firewallrules) - Update the L7 firewall rules of an SSID on an MR network
* [updateNetworkWirelessSsidHotspot20](docs/ssids/README.md#updatenetworkwirelessssidhotspot20) - Update the Hotspot 2.0 settings of an SSID
* [updateNetworkWirelessSsidIdentityPsk](docs/ssids/README.md#updatenetworkwirelessssididentitypsk) - Update an Identity PSK
* [updateNetworkWirelessSsidSchedules](docs/ssids/README.md#updatenetworkwirelessssidschedules) - Update the outage schedule for the SSID
* [updateNetworkWirelessSsidSplashSettings](docs/ssids/README.md#updatenetworkwirelessssidsplashsettings) - Modify the splash page settings for the given SSID
* [updateNetworkWirelessSsidTrafficShapingRules](docs/ssids/README.md#updatenetworkwirelessssidtrafficshapingrules) - Update the traffic shaping settings for an SSID on an MR network
* [updateNetworkWirelessSsidVpn](docs/ssids/README.md#updatenetworkwirelessssidvpn) - Update the VPN settings for the SSID

### [stacks](docs/stacks/README.md)

* [addNetworkSwitchStack](docs/stacks/README.md#addnetworkswitchstack) - Add a switch to a stack
* [createNetworkSwitchStack](docs/stacks/README.md#createnetworkswitchstack) - Create a stack
* [createNetworkSwitchStackRoutingInterface](docs/stacks/README.md#createnetworkswitchstackroutinginterface) - Create a layer 3 interface for a switch stack
* [createNetworkSwitchStackRoutingStaticRoute](docs/stacks/README.md#createnetworkswitchstackroutingstaticroute) - Create a layer 3 static route for a switch stack
* [deleteNetworkSwitchStack](docs/stacks/README.md#deletenetworkswitchstack) - Delete a stack
* [deleteNetworkSwitchStackRoutingInterface](docs/stacks/README.md#deletenetworkswitchstackroutinginterface) - Delete a layer 3 interface from a switch stack
* [deleteNetworkSwitchStackRoutingStaticRoute](docs/stacks/README.md#deletenetworkswitchstackroutingstaticroute) - Delete a layer 3 static route for a switch stack
* [getNetworkSwitchStack](docs/stacks/README.md#getnetworkswitchstack) - Show a switch stack
* [getNetworkSwitchStackRoutingInterface](docs/stacks/README.md#getnetworkswitchstackroutinginterface) - Return a layer 3 interface from a switch stack
* [getNetworkSwitchStackRoutingInterfaceDhcp](docs/stacks/README.md#getnetworkswitchstackroutinginterfacedhcp) - Return a layer 3 interface DHCP configuration for a switch stack
* [getNetworkSwitchStackRoutingInterfaces](docs/stacks/README.md#getnetworkswitchstackroutinginterfaces) - List layer 3 interfaces for a switch stack
* [getNetworkSwitchStackRoutingStaticRoute](docs/stacks/README.md#getnetworkswitchstackroutingstaticroute) - Return a layer 3 static route for a switch stack
* [getNetworkSwitchStackRoutingStaticRoutes](docs/stacks/README.md#getnetworkswitchstackroutingstaticroutes) - List layer 3 static routes for a switch stack
* [getNetworkSwitchStacks](docs/stacks/README.md#getnetworkswitchstacks) - List the switch stacks in a network
* [removeNetworkSwitchStack](docs/stacks/README.md#removenetworkswitchstack) - Remove a switch from a stack
* [updateNetworkSwitchStackRoutingInterface](docs/stacks/README.md#updatenetworkswitchstackroutinginterface) - Update a layer 3 interface for a switch stack
* [updateNetworkSwitchStackRoutingInterfaceDhcp](docs/stacks/README.md#updatenetworkswitchstackroutinginterfacedhcp) - Update a layer 3 interface DHCP configuration for a switch stack
* [updateNetworkSwitchStackRoutingStaticRoute](docs/stacks/README.md#updatenetworkswitchstackroutingstaticroute) - Update a layer 3 static route for a switch stack

### [staged](docs/staged/README.md)

* [createNetworkFirmwareUpgradesStagedEvent](docs/staged/README.md#createnetworkfirmwareupgradesstagedevent) - Create a Staged Upgrade Event for a network
* [createNetworkFirmwareUpgradesStagedGroup](docs/staged/README.md#createnetworkfirmwareupgradesstagedgroup) - Create a Staged Upgrade Group for a network
* [deferNetworkFirmwareUpgradesStagedEvents](docs/staged/README.md#defernetworkfirmwareupgradesstagedevents) - Postpone by 1 week all pending staged upgrade stages for a network
* [deleteNetworkFirmwareUpgradesStagedGroup](docs/staged/README.md#deletenetworkfirmwareupgradesstagedgroup) - Delete a Staged Upgrade Group
* [getNetworkFirmwareUpgradesStagedEvents](docs/staged/README.md#getnetworkfirmwareupgradesstagedevents) - Get the Staged Upgrade Event from a network
* [getNetworkFirmwareUpgradesStagedGroup](docs/staged/README.md#getnetworkfirmwareupgradesstagedgroup) - Get a Staged Upgrade Group from a network
* [getNetworkFirmwareUpgradesStagedGroups](docs/staged/README.md#getnetworkfirmwareupgradesstagedgroups) - List of Staged Upgrade Groups in a network
* [getNetworkFirmwareUpgradesStagedStages](docs/staged/README.md#getnetworkfirmwareupgradesstagedstages) - Order of Staged Upgrade Groups in a network
* [rollbacksNetworkFirmwareUpgradesStagedEvents](docs/staged/README.md#rollbacksnetworkfirmwareupgradesstagedevents) - Rollback a Staged Upgrade Event for a network
* [updateNetworkFirmwareUpgradesStagedEvents](docs/staged/README.md#updatenetworkfirmwareupgradesstagedevents) - Update the Staged Upgrade Event for a network
* [updateNetworkFirmwareUpgradesStagedGroup](docs/staged/README.md#updatenetworkfirmwareupgradesstagedgroup) - Update a Staged Upgrade Group for a network
* [updateNetworkFirmwareUpgradesStagedStages](docs/staged/README.md#updatenetworkfirmwareupgradesstagedstages) - Assign Staged Upgrade Group order in the sequence.

### [stages](docs/stages/README.md)

* [getNetworkFirmwareUpgradesStagedStages](docs/stages/README.md#getnetworkfirmwareupgradesstagedstages) - Order of Staged Upgrade Groups in a network
* [updateNetworkFirmwareUpgradesStagedStages](docs/stages/README.md#updatenetworkfirmwareupgradesstagedstages) - Assign Staged Upgrade Group order in the sequence.

### [staticRoutes](docs/staticroutes/README.md)

* [createDeviceSwitchRoutingStaticRoute](docs/staticroutes/README.md#createdeviceswitchroutingstaticroute) - Create a layer 3 static route for a switch
* [createNetworkApplianceStaticRoute](docs/staticroutes/README.md#createnetworkappliancestaticroute) - Add a static route for an MX or teleworker network
* [createNetworkSwitchStackRoutingStaticRoute](docs/staticroutes/README.md#createnetworkswitchstackroutingstaticroute) - Create a layer 3 static route for a switch stack
* [deleteDeviceSwitchRoutingStaticRoute](docs/staticroutes/README.md#deletedeviceswitchroutingstaticroute) - Delete a layer 3 static route for a switch
* [deleteNetworkApplianceStaticRoute](docs/staticroutes/README.md#deletenetworkappliancestaticroute) - Delete a static route from an MX or teleworker network
* [deleteNetworkSwitchStackRoutingStaticRoute](docs/staticroutes/README.md#deletenetworkswitchstackroutingstaticroute) - Delete a layer 3 static route for a switch stack
* [getDeviceSwitchRoutingStaticRoute](docs/staticroutes/README.md#getdeviceswitchroutingstaticroute) - Return a layer 3 static route for a switch
* [getDeviceSwitchRoutingStaticRoutes](docs/staticroutes/README.md#getdeviceswitchroutingstaticroutes) - List layer 3 static routes for a switch
* [getNetworkApplianceStaticRoute](docs/staticroutes/README.md#getnetworkappliancestaticroute) - Return a static route for an MX or teleworker network
* [getNetworkApplianceStaticRoutes](docs/staticroutes/README.md#getnetworkappliancestaticroutes) - List the static routes for an MX or teleworker network
* [getNetworkSwitchStackRoutingStaticRoute](docs/staticroutes/README.md#getnetworkswitchstackroutingstaticroute) - Return a layer 3 static route for a switch stack
* [getNetworkSwitchStackRoutingStaticRoutes](docs/staticroutes/README.md#getnetworkswitchstackroutingstaticroutes) - List layer 3 static routes for a switch stack
* [updateDeviceSwitchRoutingStaticRoute](docs/staticroutes/README.md#updatedeviceswitchroutingstaticroute) - Update a layer 3 static route for a switch
* [updateNetworkApplianceStaticRoute](docs/staticroutes/README.md#updatenetworkappliancestaticroute) - Update a static route for an MX or teleworker network
* [updateNetworkSwitchStackRoutingStaticRoute](docs/staticroutes/README.md#updatenetworkswitchstackroutingstaticroute) - Update a layer 3 static route for a switch stack

### [statics](docs/statics/README.md)

* [createNetworkAppliancePrefixesDelegatedStatic](docs/statics/README.md#createnetworkapplianceprefixesdelegatedstatic) - Add a static delegated prefix from a network
* [deleteNetworkAppliancePrefixesDelegatedStatic](docs/statics/README.md#deletenetworkapplianceprefixesdelegatedstatic) - Delete a static delegated prefix from a network
* [getNetworkAppliancePrefixesDelegatedStatic](docs/statics/README.md#getnetworkapplianceprefixesdelegatedstatic) - Return a static delegated prefix from a network
* [getNetworkAppliancePrefixesDelegatedStatics](docs/statics/README.md#getnetworkapplianceprefixesdelegatedstatics) - List static delegated prefixes for a network
* [updateNetworkAppliancePrefixesDelegatedStatic](docs/statics/README.md#updatenetworkapplianceprefixesdelegatedstatic) - Update a static delegated prefix from a network

### [stats](docs/stats/README.md)

* [getOrganizationApplianceVpnStats](docs/stats/README.md#getorganizationappliancevpnstats) - Show VPN history stat for networks in an organization

### [status](docs/status/README.md)

* [getDeviceWirelessStatus](docs/status/README.md#getdevicewirelessstatus) - Return the SSID statuses of an access point

### [statuses](docs/statuses/README.md)

* [getDeviceSwitchPortsStatuses](docs/statuses/README.md#getdeviceswitchportsstatuses) - Return the status for all the ports of a switch
* [getDeviceSwitchPortsStatusesPackets](docs/statuses/README.md#getdeviceswitchportsstatusespackets) - Return the packet counters for all the ports of a switch
* [getOrganizationApplianceUplinkStatuses](docs/statuses/README.md#getorganizationapplianceuplinkstatuses) - List the uplink status of every Meraki MX and Z series appliances in the organization
* [getOrganizationApplianceVpnStatuses](docs/statuses/README.md#getorganizationappliancevpnstatuses) - Show VPN status for networks in an organization
* [getOrganizationCameraOnboardingStatuses](docs/statuses/README.md#getorganizationcameraonboardingstatuses) - Fetch onboarding status of cameras
* [getOrganizationCellularGatewayUplinkStatuses](docs/statuses/README.md#getorganizationcellulargatewayuplinkstatuses) - List the uplink status of every Meraki MG cellular gateway in the organization
* [getOrganizationDevicesPowerModulesStatusesByDevice](docs/statuses/README.md#getorganizationdevicespowermodulesstatusesbydevice) - List the power status information for devices in an organization
* [getOrganizationDevicesStatuses](docs/statuses/README.md#getorganizationdevicesstatuses) - List the status of every Meraki device in the organization
* [getOrganizationDevicesStatusesOverview](docs/statuses/README.md#getorganizationdevicesstatusesoverview) - Return an overview of current device statuses
* [getOrganizationUplinksStatuses](docs/statuses/README.md#getorganizationuplinksstatuses) - List the uplink status of every Meraki MX, MG and Z series devices in the organization
* [getOrganizationWirelessDevicesEthernetStatuses](docs/statuses/README.md#getorganizationwirelessdevicesethernetstatuses) - Endpoint to see power status for wireless devices
* [updateOrganizationCameraOnboardingStatuses](docs/statuses/README.md#updateorganizationcameraonboardingstatuses) - Notify that credential handoff to camera has completed

### [stormControl](docs/stormcontrol/README.md)

* [getNetworkSwitchStormControl](docs/stormcontrol/README.md#getnetworkswitchstormcontrol) - Return the storm control configuration for a switch network
* [updateNetworkSwitchStormControl](docs/stormcontrol/README.md#updatenetworkswitchstormcontrol) - Update the storm control configuration for a switch network

### [stp](docs/stp/README.md)

* [getNetworkSwitchStp](docs/stp/README.md#getnetworkswitchstp) - Returns STP settings
* [updateNetworkSwitchStp](docs/stp/README.md#updatenetworkswitchstp) - Updates STP settings

### [subnetPool](docs/subnetpool/README.md)

* [getNetworkCellularGatewaySubnetPool](docs/subnetpool/README.md#getnetworkcellulargatewaysubnetpool) - Return the subnet pool and mask configured for MGs in the network.
* [updateNetworkCellularGatewaySubnetPool](docs/subnetpool/README.md#updatenetworkcellulargatewaysubnetpool) - Update the subnet pool and mask configuration for MGs in the network.

### [subnets](docs/subnets/README.md)

* [getDeviceApplianceDhcpSubnets](docs/subnets/README.md#getdeviceappliancedhcpsubnets) - Return the DHCP subnet information for an appliance

### [summary](docs/summary/README.md)

* [getOrganizationSummaryTopAppliancesByUtilization](docs/summary/README.md#getorganizationsummarytopappliancesbyutilization) - Return the top 10 appliances sorted by utilization over given time range.
* [getOrganizationSummaryTopClientsByUsage](docs/summary/README.md#getorganizationsummarytopclientsbyusage) - Return metrics for organization's top 10 clients by data usage (in mb) over given time range.
* [getOrganizationSummaryTopClientsManufacturersByUsage](docs/summary/README.md#getorganizationsummarytopclientsmanufacturersbyusage) - Return metrics for organization's top clients by data usage (in mb) over given time range, grouped by manufacturer.
* [getOrganizationSummaryTopDevicesByUsage](docs/summary/README.md#getorganizationsummarytopdevicesbyusage) - Return metrics for organization's top 10 devices sorted by data usage over given time range
* [getOrganizationSummaryTopDevicesModelsByUsage](docs/summary/README.md#getorganizationsummarytopdevicesmodelsbyusage) - Return metrics for organization's top 10 device models sorted by data usage over given time range
* [getOrganizationSummaryTopSsidsByUsage](docs/summary/README.md#getorganizationsummarytopssidsbyusage) - Return metrics for organization's top 10 ssids by data usage over given time range
* [getOrganizationSummaryTopSwitchesByEnergyUsage](docs/summary/README.md#getorganizationsummarytopswitchesbyenergyusage) - Return metrics for organization's top 10 switches by energy usage over given time range

### [switch](docs/switch/README.md)

* [addNetworkSwitchStack](docs/switch/README.md#addnetworkswitchstack) - Add a switch to a stack
* [cloneOrganizationSwitchDevices](docs/switch/README.md#cloneorganizationswitchdevices) - Clone port-level and some switch-level configuration settings from a source switch to one or more target switches
* [createDeviceSwitchRoutingInterface](docs/switch/README.md#createdeviceswitchroutinginterface) - Create a layer 3 interface for a switch
* [createDeviceSwitchRoutingStaticRoute](docs/switch/README.md#createdeviceswitchroutingstaticroute) - Create a layer 3 static route for a switch
* [createNetworkSwitchAccessPolicy](docs/switch/README.md#createnetworkswitchaccesspolicy) - Create an access policy for a switch network
* [createNetworkSwitchDhcpServerPolicyArpInspectionTrustedServer](docs/switch/README.md#createnetworkswitchdhcpserverpolicyarpinspectiontrustedserver) - Add a server to be trusted by Dynamic ARP Inspection on this network
* [createNetworkSwitchLinkAggregation](docs/switch/README.md#createnetworkswitchlinkaggregation) - Create a link aggregation group
* [createNetworkSwitchPortSchedule](docs/switch/README.md#createnetworkswitchportschedule) - Add a switch port schedule
* [createNetworkSwitchQosRule](docs/switch/README.md#createnetworkswitchqosrule) - Add a quality of service rule
* [createNetworkSwitchRoutingMulticastRendezvousPoint](docs/switch/README.md#createnetworkswitchroutingmulticastrendezvouspoint) - Create a multicast rendezvous point
* [createNetworkSwitchStack](docs/switch/README.md#createnetworkswitchstack) - Create a stack
* [createNetworkSwitchStackRoutingInterface](docs/switch/README.md#createnetworkswitchstackroutinginterface) - Create a layer 3 interface for a switch stack
* [createNetworkSwitchStackRoutingStaticRoute](docs/switch/README.md#createnetworkswitchstackroutingstaticroute) - Create a layer 3 static route for a switch stack
* [cycleDeviceSwitchPorts](docs/switch/README.md#cycledeviceswitchports) - Cycle a set of switch ports
* [deleteDeviceSwitchRoutingInterface](docs/switch/README.md#deletedeviceswitchroutinginterface) - Delete a layer 3 interface from the switch
* [deleteDeviceSwitchRoutingStaticRoute](docs/switch/README.md#deletedeviceswitchroutingstaticroute) - Delete a layer 3 static route for a switch
* [deleteNetworkSwitchAccessPolicy](docs/switch/README.md#deletenetworkswitchaccesspolicy) - Delete an access policy for a switch network
* [deleteNetworkSwitchDhcpServerPolicyArpInspectionTrustedServer](docs/switch/README.md#deletenetworkswitchdhcpserverpolicyarpinspectiontrustedserver) - Remove a server from being trusted by Dynamic ARP Inspection on this network
* [deleteNetworkSwitchLinkAggregation](docs/switch/README.md#deletenetworkswitchlinkaggregation) - Split a link aggregation group into separate ports
* [deleteNetworkSwitchPortSchedule](docs/switch/README.md#deletenetworkswitchportschedule) - Delete a switch port schedule
* [deleteNetworkSwitchQosRule](docs/switch/README.md#deletenetworkswitchqosrule) - Delete a quality of service rule
* [deleteNetworkSwitchRoutingMulticastRendezvousPoint](docs/switch/README.md#deletenetworkswitchroutingmulticastrendezvouspoint) - Delete a multicast rendezvous point
* [deleteNetworkSwitchStack](docs/switch/README.md#deletenetworkswitchstack) - Delete a stack
* [deleteNetworkSwitchStackRoutingInterface](docs/switch/README.md#deletenetworkswitchstackroutinginterface) - Delete a layer 3 interface from a switch stack
* [deleteNetworkSwitchStackRoutingStaticRoute](docs/switch/README.md#deletenetworkswitchstackroutingstaticroute) - Delete a layer 3 static route for a switch stack
* [getDeviceSwitchPort](docs/switch/README.md#getdeviceswitchport) - Return a switch port
* [getDeviceSwitchPorts](docs/switch/README.md#getdeviceswitchports) - List the switch ports for a switch
* [getDeviceSwitchPortsStatuses](docs/switch/README.md#getdeviceswitchportsstatuses) - Return the status for all the ports of a switch
* [getDeviceSwitchPortsStatusesPackets](docs/switch/README.md#getdeviceswitchportsstatusespackets) - Return the packet counters for all the ports of a switch
* [getDeviceSwitchRoutingInterface](docs/switch/README.md#getdeviceswitchroutinginterface) - Return a layer 3 interface for a switch
* [getDeviceSwitchRoutingInterfaceDhcp](docs/switch/README.md#getdeviceswitchroutinginterfacedhcp) - Return a layer 3 interface DHCP configuration for a switch
* [getDeviceSwitchRoutingInterfaces](docs/switch/README.md#getdeviceswitchroutinginterfaces) - List layer 3 interfaces for a switch
* [getDeviceSwitchRoutingStaticRoute](docs/switch/README.md#getdeviceswitchroutingstaticroute) - Return a layer 3 static route for a switch
* [getDeviceSwitchRoutingStaticRoutes](docs/switch/README.md#getdeviceswitchroutingstaticroutes) - List layer 3 static routes for a switch
* [getDeviceSwitchWarmSpare](docs/switch/README.md#getdeviceswitchwarmspare) - Return warm spare configuration for a switch
* [getNetworkSwitchAccessControlLists](docs/switch/README.md#getnetworkswitchaccesscontrollists) - Return the access control lists for a MS network
* [getNetworkSwitchAccessPolicies](docs/switch/README.md#getnetworkswitchaccesspolicies) - List the access policies for a switch network
* [getNetworkSwitchAccessPolicy](docs/switch/README.md#getnetworkswitchaccesspolicy) - Return a specific access policy for a switch network
* [getNetworkSwitchAlternateManagementInterface](docs/switch/README.md#getnetworkswitchalternatemanagementinterface) - Return the switch alternate management interface for the network
* [getNetworkSwitchDhcpServerPolicy](docs/switch/README.md#getnetworkswitchdhcpserverpolicy) - Return the DHCP server settings
* [getNetworkSwitchDhcpServerPolicyArpInspectionTrustedServers](docs/switch/README.md#getnetworkswitchdhcpserverpolicyarpinspectiontrustedservers) - Return the list of servers trusted by Dynamic ARP Inspection on this network
* [getNetworkSwitchDhcpServerPolicyArpInspectionWarningsByDevice](docs/switch/README.md#getnetworkswitchdhcpserverpolicyarpinspectionwarningsbydevice) - Return the devices that have a Dynamic ARP Inspection warning and their warnings
* [getNetworkSwitchDhcpV4ServersSeen](docs/switch/README.md#getnetworkswitchdhcpv4serversseen) - Return the network's DHCPv4 servers seen within the selected timeframe (default 1 day)
* [getNetworkSwitchDscpToCosMappings](docs/switch/README.md#getnetworkswitchdscptocosmappings) - Return the DSCP to CoS mappings
* [getNetworkSwitchLinkAggregations](docs/switch/README.md#getnetworkswitchlinkaggregations) - List link aggregation groups
* [getNetworkSwitchMtu](docs/switch/README.md#getnetworkswitchmtu) - Return the MTU configuration
* [getNetworkSwitchPortSchedules](docs/switch/README.md#getnetworkswitchportschedules) - List switch port schedules
* [getNetworkSwitchQosRule](docs/switch/README.md#getnetworkswitchqosrule) - Return a quality of service rule
* [getNetworkSwitchQosRules](docs/switch/README.md#getnetworkswitchqosrules) - List quality of service rules
* [getNetworkSwitchQosRulesOrder](docs/switch/README.md#getnetworkswitchqosrulesorder) - Return the quality of service rule IDs by order in which they will be processed by the switch
* [getNetworkSwitchRoutingMulticast](docs/switch/README.md#getnetworkswitchroutingmulticast) - Return multicast settings for a network
* [getNetworkSwitchRoutingMulticastRendezvousPoint](docs/switch/README.md#getnetworkswitchroutingmulticastrendezvouspoint) - Return a multicast rendezvous point
* [getNetworkSwitchRoutingMulticastRendezvousPoints](docs/switch/README.md#getnetworkswitchroutingmulticastrendezvouspoints) - List multicast rendezvous points
* [getNetworkSwitchRoutingOspf](docs/switch/README.md#getnetworkswitchroutingospf) - Return layer 3 OSPF routing configuration
* [getNetworkSwitchSettings](docs/switch/README.md#getnetworkswitchsettings) - Returns the switch network settings
* [getNetworkSwitchStack](docs/switch/README.md#getnetworkswitchstack) - Show a switch stack
* [getNetworkSwitchStackRoutingInterface](docs/switch/README.md#getnetworkswitchstackroutinginterface) - Return a layer 3 interface from a switch stack
* [getNetworkSwitchStackRoutingInterfaceDhcp](docs/switch/README.md#getnetworkswitchstackroutinginterfacedhcp) - Return a layer 3 interface DHCP configuration for a switch stack
* [getNetworkSwitchStackRoutingInterfaces](docs/switch/README.md#getnetworkswitchstackroutinginterfaces) - List layer 3 interfaces for a switch stack
* [getNetworkSwitchStackRoutingStaticRoute](docs/switch/README.md#getnetworkswitchstackroutingstaticroute) - Return a layer 3 static route for a switch stack
* [getNetworkSwitchStackRoutingStaticRoutes](docs/switch/README.md#getnetworkswitchstackroutingstaticroutes) - List layer 3 static routes for a switch stack
* [getNetworkSwitchStacks](docs/switch/README.md#getnetworkswitchstacks) - List the switch stacks in a network
* [getNetworkSwitchStormControl](docs/switch/README.md#getnetworkswitchstormcontrol) - Return the storm control configuration for a switch network
* [getNetworkSwitchStp](docs/switch/README.md#getnetworkswitchstp) - Returns STP settings
* [getOrganizationConfigTemplateSwitchProfilePort](docs/switch/README.md#getorganizationconfigtemplateswitchprofileport) - Return a switch profile port
* [getOrganizationConfigTemplateSwitchProfilePorts](docs/switch/README.md#getorganizationconfigtemplateswitchprofileports) - Return all the ports of a switch profile
* [getOrganizationConfigTemplateSwitchProfiles](docs/switch/README.md#getorganizationconfigtemplateswitchprofiles) - List the switch profiles for your switch template configuration
* [getOrganizationSwitchPortsBySwitch](docs/switch/README.md#getorganizationswitchportsbyswitch) - List the switchports in an organization by switch
* [removeNetworkSwitchStack](docs/switch/README.md#removenetworkswitchstack) - Remove a switch from a stack
* [updateDeviceSwitchPort](docs/switch/README.md#updatedeviceswitchport) - Update a switch port
* [updateDeviceSwitchRoutingInterface](docs/switch/README.md#updatedeviceswitchroutinginterface) - Update a layer 3 interface for a switch
* [updateDeviceSwitchRoutingInterfaceDhcp](docs/switch/README.md#updatedeviceswitchroutinginterfacedhcp) - Update a layer 3 interface DHCP configuration for a switch
* [updateDeviceSwitchRoutingStaticRoute](docs/switch/README.md#updatedeviceswitchroutingstaticroute) - Update a layer 3 static route for a switch
* [updateDeviceSwitchWarmSpare](docs/switch/README.md#updatedeviceswitchwarmspare) - Update warm spare configuration for a switch
* [updateNetworkSwitchAccessControlLists](docs/switch/README.md#updatenetworkswitchaccesscontrollists) - Update the access control lists for a MS network
* [updateNetworkSwitchAccessPolicy](docs/switch/README.md#updatenetworkswitchaccesspolicy) - Update an access policy for a switch network
* [updateNetworkSwitchAlternateManagementInterface](docs/switch/README.md#updatenetworkswitchalternatemanagementinterface) - Update the switch alternate management interface for the network
* [updateNetworkSwitchDhcpServerPolicy](docs/switch/README.md#updatenetworkswitchdhcpserverpolicy) - Update the DHCP server settings
* [updateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServer](docs/switch/README.md#updatenetworkswitchdhcpserverpolicyarpinspectiontrustedserver) - Update a server that is trusted by Dynamic ARP Inspection on this network
* [updateNetworkSwitchDscpToCosMappings](docs/switch/README.md#updatenetworkswitchdscptocosmappings) - Update the DSCP to CoS mappings
* [updateNetworkSwitchLinkAggregation](docs/switch/README.md#updatenetworkswitchlinkaggregation) - Update a link aggregation group
* [updateNetworkSwitchMtu](docs/switch/README.md#updatenetworkswitchmtu) - Update the MTU configuration
* [updateNetworkSwitchPortSchedule](docs/switch/README.md#updatenetworkswitchportschedule) - Update a switch port schedule
* [updateNetworkSwitchQosRule](docs/switch/README.md#updatenetworkswitchqosrule) - Update a quality of service rule
* [updateNetworkSwitchQosRulesOrder](docs/switch/README.md#updatenetworkswitchqosrulesorder) - Update the order in which the rules should be processed by the switch
* [updateNetworkSwitchRoutingMulticast](docs/switch/README.md#updatenetworkswitchroutingmulticast) - Update multicast settings for a network
* [updateNetworkSwitchRoutingMulticastRendezvousPoint](docs/switch/README.md#updatenetworkswitchroutingmulticastrendezvouspoint) - Update a multicast rendezvous point
* [updateNetworkSwitchRoutingOspf](docs/switch/README.md#updatenetworkswitchroutingospf) - Update layer 3 OSPF routing configuration
* [updateNetworkSwitchSettings](docs/switch/README.md#updatenetworkswitchsettings) - Update switch network settings
* [updateNetworkSwitchStackRoutingInterface](docs/switch/README.md#updatenetworkswitchstackroutinginterface) - Update a layer 3 interface for a switch stack
* [updateNetworkSwitchStackRoutingInterfaceDhcp](docs/switch/README.md#updatenetworkswitchstackroutinginterfacedhcp) - Update a layer 3 interface DHCP configuration for a switch stack
* [updateNetworkSwitchStackRoutingStaticRoute](docs/switch/README.md#updatenetworkswitchstackroutingstaticroute) - Update a layer 3 static route for a switch stack
* [updateNetworkSwitchStormControl](docs/switch/README.md#updatenetworkswitchstormcontrol) - Update the storm control configuration for a switch network
* [updateNetworkSwitchStp](docs/switch/README.md#updatenetworkswitchstp) - Updates STP settings
* [updateOrganizationConfigTemplateSwitchProfilePort](docs/switch/README.md#updateorganizationconfigtemplateswitchprofileport) - Update a switch profile port

### [switches](docs/switches/README.md)

* [getOrganizationSummaryTopSwitchesByEnergyUsage](docs/switches/README.md#getorganizationsummarytopswitchesbyenergyusage) - Return metrics for organization's top 10 switches by energy usage over given time range

### [syslogServers](docs/syslogservers/README.md)

* [getNetworkSyslogServers](docs/syslogservers/README.md#getnetworksyslogservers) - List the syslog servers for a network
* [updateNetworkSyslogServers](docs/syslogservers/README.md#updatenetworksyslogservers) - Update the syslog servers for a network

### [targetGroups](docs/targetgroups/README.md)

* [createNetworkSmTargetGroup](docs/targetgroups/README.md#createnetworksmtargetgroup) - Add a target group
* [deleteNetworkSmTargetGroup](docs/targetgroups/README.md#deletenetworksmtargetgroup) - Delete a target group from a network
* [getNetworkSmTargetGroup](docs/targetgroups/README.md#getnetworksmtargetgroup) - Return a target group
* [getNetworkSmTargetGroups](docs/targetgroups/README.md#getnetworksmtargetgroups) - List the target groups in this network
* [updateNetworkSmTargetGroup](docs/targetgroups/README.md#updatenetworksmtargetgroup) - Update a target group

### [thirdPartyVPNPeers](docs/thirdpartyvpnpeers/README.md)

* [getOrganizationApplianceVPNThirdPartyVPNPeers](docs/thirdpartyvpnpeers/README.md#getorganizationappliancevpnthirdpartyvpnpeers) - Return the third party VPN peers for an organization
* [updateOrganizationApplianceVPNThirdPartyVPNPeers](docs/thirdpartyvpnpeers/README.md#updateorganizationappliancevpnthirdpartyvpnpeers) - Update the third party VPN peers for an organization

### [top](docs/top/README.md)

* [getOrganizationSummaryTopAppliancesByUtilization](docs/top/README.md#getorganizationsummarytopappliancesbyutilization) - Return the top 10 appliances sorted by utilization over given time range.
* [getOrganizationSummaryTopClientsByUsage](docs/top/README.md#getorganizationsummarytopclientsbyusage) - Return metrics for organization's top 10 clients by data usage (in mb) over given time range.
* [getOrganizationSummaryTopClientsManufacturersByUsage](docs/top/README.md#getorganizationsummarytopclientsmanufacturersbyusage) - Return metrics for organization's top clients by data usage (in mb) over given time range, grouped by manufacturer.
* [getOrganizationSummaryTopDevicesByUsage](docs/top/README.md#getorganizationsummarytopdevicesbyusage) - Return metrics for organization's top 10 devices sorted by data usage over given time range
* [getOrganizationSummaryTopDevicesModelsByUsage](docs/top/README.md#getorganizationsummarytopdevicesmodelsbyusage) - Return metrics for organization's top 10 device models sorted by data usage over given time range
* [getOrganizationSummaryTopSsidsByUsage](docs/top/README.md#getorganizationsummarytopssidsbyusage) - Return metrics for organization's top 10 ssids by data usage over given time range
* [getOrganizationSummaryTopSwitchesByEnergyUsage](docs/top/README.md#getorganizationsummarytopswitchesbyenergyusage) - Return metrics for organization's top 10 switches by energy usage over given time range

### [topology](docs/topology/README.md)

* [getNetworkTopologyLinkLayer](docs/topology/README.md#getnetworktopologylinklayer) - List the LLDP and CDP information for all discovered devices and connections in a network.

### [traffic](docs/traffic/README.md)

* [getNetworkTraffic](docs/traffic/README.md#getnetworktraffic) - Return the traffic analysis data for this network

### [trafficAnalysis](docs/trafficanalysis/README.md)

* [getNetworkTrafficAnalysis](docs/trafficanalysis/README.md#getnetworktrafficanalysis) - Return the traffic analysis settings for a network
* [updateNetworkTrafficAnalysis](docs/trafficanalysis/README.md#updatenetworktrafficanalysis) - Update the traffic analysis settings for a network

### [trafficHistory](docs/traffichistory/README.md)

* [getNetworkClientTrafficHistory](docs/traffichistory/README.md#getnetworkclienttraffichistory) - Return the client's network traffic data over time

### [trafficShaping](docs/trafficshaping/README.md)

* [createNetworkApplianceTrafficShapingCustomPerformanceClass](docs/trafficshaping/README.md#createnetworkappliancetrafficshapingcustomperformanceclass) - Add a custom performance class for an MX network
* [deleteNetworkApplianceTrafficShapingCustomPerformanceClass](docs/trafficshaping/README.md#deletenetworkappliancetrafficshapingcustomperformanceclass) - Delete a custom performance class from an MX network
* [getNetworkApplianceTrafficShaping](docs/trafficshaping/README.md#getnetworkappliancetrafficshaping) - Display the traffic shaping settings for an MX network
* [getNetworkApplianceTrafficShapingCustomPerformanceClass](docs/trafficshaping/README.md#getnetworkappliancetrafficshapingcustomperformanceclass) - Return a custom performance class for an MX network
* [getNetworkApplianceTrafficShapingCustomPerformanceClasses](docs/trafficshaping/README.md#getnetworkappliancetrafficshapingcustomperformanceclasses) - List all custom performance classes for an MX network
* [getNetworkApplianceTrafficShapingRules](docs/trafficshaping/README.md#getnetworkappliancetrafficshapingrules) - Display the traffic shaping settings rules for an MX network
* [getNetworkApplianceTrafficShapingUplinkBandwidth](docs/trafficshaping/README.md#getnetworkappliancetrafficshapinguplinkbandwidth) - Returns the uplink bandwidth limits for your MX network
* [getNetworkApplianceTrafficShapingUplinkSelection](docs/trafficshaping/README.md#getnetworkappliancetrafficshapinguplinkselection) - Show uplink selection settings for an MX network
* [getNetworkTrafficShapingApplicationCategories](docs/trafficshaping/README.md#getnetworktrafficshapingapplicationcategories) - Returns the application categories for traffic shaping rules.
* [getNetworkTrafficShapingDscpTaggingOptions](docs/trafficshaping/README.md#getnetworktrafficshapingdscptaggingoptions) - Returns the available DSCP tagging options for your traffic shaping rules.
* [getNetworkWirelessSsidTrafficShapingRules](docs/trafficshaping/README.md#getnetworkwirelessssidtrafficshapingrules) - Display the traffic shaping settings for a SSID on an MR network
* [updateNetworkApplianceTrafficShaping](docs/trafficshaping/README.md#updatenetworkappliancetrafficshaping) - Update the traffic shaping settings for an MX network
* [updateNetworkApplianceTrafficShapingCustomPerformanceClass](docs/trafficshaping/README.md#updatenetworkappliancetrafficshapingcustomperformanceclass) - Update a custom performance class for an MX network
* [updateNetworkApplianceTrafficShapingRules](docs/trafficshaping/README.md#updatenetworkappliancetrafficshapingrules) - Update the traffic shaping settings rules for an MX network
* [updateNetworkApplianceTrafficShapingUplinkBandwidth](docs/trafficshaping/README.md#updatenetworkappliancetrafficshapinguplinkbandwidth) - Updates the uplink bandwidth settings for your MX network.
* [updateNetworkApplianceTrafficShapingUplinkSelection](docs/trafficshaping/README.md#updatenetworkappliancetrafficshapinguplinkselection) - Update uplink selection settings for an MX network
* [updateNetworkWirelessSsidTrafficShapingRules](docs/trafficshaping/README.md#updatenetworkwirelessssidtrafficshapingrules) - Update the traffic shaping settings for an SSID on an MR network

### [trustedAccessConfigs](docs/trustedaccessconfigs/README.md)

* [getNetworkSmTrustedAccessConfigs](docs/trustedaccessconfigs/README.md#getnetworksmtrustedaccessconfigs) - List Trusted Access Configs

### [trustedServers](docs/trustedservers/README.md)

* [createNetworkSwitchDhcpServerPolicyArpInspectionTrustedServer](docs/trustedservers/README.md#createnetworkswitchdhcpserverpolicyarpinspectiontrustedserver) - Add a server to be trusted by Dynamic ARP Inspection on this network
* [deleteNetworkSwitchDhcpServerPolicyArpInspectionTrustedServer](docs/trustedservers/README.md#deletenetworkswitchdhcpserverpolicyarpinspectiontrustedserver) - Remove a server from being trusted by Dynamic ARP Inspection on this network
* [getNetworkSwitchDhcpServerPolicyArpInspectionTrustedServers](docs/trustedservers/README.md#getnetworkswitchdhcpserverpolicyarpinspectiontrustedservers) - Return the list of servers trusted by Dynamic ARP Inspection on this network
* [updateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServer](docs/trustedservers/README.md#updatenetworkswitchdhcpserverpolicyarpinspectiontrustedserver) - Update a server that is trusted by Dynamic ARP Inspection on this network

### [upgrades](docs/upgrades/README.md)

* [getOrganizationFirmwareUpgrades](docs/upgrades/README.md#getorganizationfirmwareupgrades) - Get firmware upgrade information for an organization
* [getOrganizationFirmwareUpgradesByDevice](docs/upgrades/README.md#getorganizationfirmwareupgradesbydevice) - Get firmware upgrade status for the filtered devices

### [uplink](docs/uplink/README.md)

* [getNetworkCellularGatewayUplink](docs/uplink/README.md#getnetworkcellulargatewayuplink) - Returns the uplink settings for your MG network.
* [getOrganizationCellularGatewayUplinkStatuses](docs/uplink/README.md#getorganizationcellulargatewayuplinkstatuses) - List the uplink status of every Meraki MG cellular gateway in the organization
* [updateNetworkCellularGatewayUplink](docs/uplink/README.md#updatenetworkcellulargatewayuplink) - Updates the uplink settings for your MG network.

### [uplinkBandwidth](docs/uplinkbandwidth/README.md)

* [getNetworkApplianceTrafficShapingUplinkBandwidth](docs/uplinkbandwidth/README.md#getnetworkappliancetrafficshapinguplinkbandwidth) - Returns the uplink bandwidth limits for your MX network
* [updateNetworkApplianceTrafficShapingUplinkBandwidth](docs/uplinkbandwidth/README.md#updatenetworkappliancetrafficshapinguplinkbandwidth) - Updates the uplink bandwidth settings for your MX network.

### [uplinkSelection](docs/uplinkselection/README.md)

* [getNetworkApplianceTrafficShapingUplinkSelection](docs/uplinkselection/README.md#getnetworkappliancetrafficshapinguplinkselection) - Show uplink selection settings for an MX network
* [updateNetworkApplianceTrafficShapingUplinkSelection](docs/uplinkselection/README.md#updatenetworkappliancetrafficshapinguplinkselection) - Update uplink selection settings for an MX network

### [uplinks](docs/uplinks/README.md)

* [getDeviceApplianceUplinksSettings](docs/uplinks/README.md#getdeviceapplianceuplinkssettings) - Return the uplink settings for an MX appliance
* [getDeviceLossAndLatencyHistory](docs/uplinks/README.md#getdevicelossandlatencyhistory) - Get the uplink loss percentage and latency in milliseconds, and goodput in kilobits per second for a wired network device.
* [getNetworkApplianceUplinksUsageHistory](docs/uplinks/README.md#getnetworkapplianceuplinksusagehistory) - Get the sent and received bytes for each uplink of a network.
* [getOrganizationApplianceUplinkStatuses](docs/uplinks/README.md#getorganizationapplianceuplinkstatuses) - List the uplink status of every Meraki MX and Z series appliances in the organization
* [getOrganizationDevicesUplinksAddressesByDevice](docs/uplinks/README.md#getorganizationdevicesuplinksaddressesbydevice) - List the current uplink addresses for devices in an organization.
* [getOrganizationDevicesUplinksLossAndLatency](docs/uplinks/README.md#getorganizationdevicesuplinkslossandlatency) - Return the uplink loss and latency for every MX in the organization from at latest 2 minutes ago
* [getOrganizationUplinksStatuses](docs/uplinks/README.md#getorganizationuplinksstatuses) - List the uplink status of every Meraki MX, MG and Z series devices in the organization
* [updateDeviceApplianceUplinksSettings](docs/uplinks/README.md#updatedeviceapplianceuplinkssettings) - Update the uplink settings for an MX appliance

### [uplinksLossAndLatency](docs/uplinkslossandlatency/README.md)

* [getOrganizationDevicesUplinksLossAndLatency](docs/uplinkslossandlatency/README.md#getorganizationdevicesuplinkslossandlatency) - Return the uplink loss and latency for every MX in the organization from at latest 2 minutes ago

### [usageHistories](docs/usagehistories/README.md)

* [getNetworkClientsUsageHistories](docs/usagehistories/README.md#getnetworkclientsusagehistories) - Return the usage histories for clients

### [usageHistory](docs/usagehistory/README.md)

* [getNetworkApplianceUplinksUsageHistory](docs/usagehistory/README.md#getnetworkapplianceuplinksusagehistory) - Get the sent and received bytes for each uplink of a network.
* [getNetworkClientUsageHistory](docs/usagehistory/README.md#getnetworkclientusagehistory) - Return the client's daily usage history
* [getNetworkWirelessUsageHistory](docs/usagehistory/README.md#getnetworkwirelessusagehistory) - Return AP usage over time for a device or network client

### [userAccessDevices](docs/useraccessdevices/README.md)

* [deleteNetworkSmUserAccessDevice](docs/useraccessdevices/README.md#deletenetworksmuseraccessdevice) - Delete a User Access Device
* [getNetworkSmUserAccessDevices](docs/useraccessdevices/README.md#getnetworksmuseraccessdevices) - List User Access Devices and its Trusted Access Connections

### [users](docs/users/README.md)

* [deleteOrganizationUser](docs/users/README.md#deleteorganizationuser) - Delete a user and all of its authentication methods.
* [getNetworkSmUserDeviceProfiles](docs/users/README.md#getnetworksmuserdeviceprofiles) - Get the profiles associated with a user
* [getNetworkSmUserSoftwares](docs/users/README.md#getnetworksmusersoftwares) - Get a list of softwares associated with a user
* [getNetworkSmUsers](docs/users/README.md#getnetworksmusers) - List the owners in an SM network with various specified fields and filters

### [v4](docs/v4/README.md)

* [getNetworkSwitchDhcpV4ServersSeen](docs/v4/README.md#getnetworkswitchdhcpv4serversseen) - Return the network's DHCPv4 servers seen within the selected timeframe (default 1 day)

### [video](docs/video/README.md)

* [getDeviceCameraVideoSettings](docs/video/README.md#getdevicecameravideosettings) - Returns video settings for the given camera
* [updateDeviceCameraVideoSettings](docs/video/README.md#updatedevicecameravideosettings) - Update video settings for the given camera

### [videoLink](docs/videolink/README.md)

* [getDeviceCameraVideoLink](docs/videolink/README.md#getdevicecameravideolink) - Returns video link to the specified camera

### [vlanAssignments](docs/vlanassignments/README.md)

* [getDeviceAppliancePrefixesDelegatedVlanAssignments](docs/vlanassignments/README.md#getdeviceapplianceprefixesdelegatedvlanassignments) - Return prefixes assigned to all IPv6 enabled VLANs on an appliance.

### [vlans](docs/vlans/README.md)

* [createNetworkApplianceVlan](docs/vlans/README.md#createnetworkappliancevlan) - Add a VLAN
* [deleteNetworkApplianceVlan](docs/vlans/README.md#deletenetworkappliancevlan) - Delete a VLAN from a network
* [getNetworkApplianceVlan](docs/vlans/README.md#getnetworkappliancevlan) - Return a VLAN
* [getNetworkApplianceVlans](docs/vlans/README.md#getnetworkappliancevlans) - List the VLANs for an MX network
* [getNetworkApplianceVlansSettings](docs/vlans/README.md#getnetworkappliancevlanssettings) - Returns the enabled status of VLANs for the network
* [updateNetworkApplianceVlan](docs/vlans/README.md#updatenetworkappliancevlan) - Update a VLAN
* [updateNetworkApplianceVlansSettings](docs/vlans/README.md#updatenetworkappliancevlanssettings) - Enable/Disable VLANs for the given network

### [vmx](docs/vmx/README.md)

* [createDeviceApplianceVmxAuthenticationToken](docs/vmx/README.md#createdeviceappliancevmxauthenticationtoken) - Generate a new vMX authentication token

### [vpn](docs/vpn/README.md)

* [getNetworkApplianceVpnBgp](docs/vpn/README.md#getnetworkappliancevpnbgp) - Return a Hub BGP Configuration
* [getNetworkApplianceVpnSiteToSiteVpn](docs/vpn/README.md#getnetworkappliancevpnsitetositevpn) - Return the site-to-site VPN settings of a network
* [getNetworkWirelessSsidVpn](docs/vpn/README.md#getnetworkwirelessssidvpn) - List the VPN settings for the SSID.
* [getOrganizationApplianceVpnStats](docs/vpn/README.md#getorganizationappliancevpnstats) - Show VPN history stat for networks in an organization
* [getOrganizationApplianceVpnStatuses](docs/vpn/README.md#getorganizationappliancevpnstatuses) - Show VPN status for networks in an organization
* [getOrganizationApplianceVPNThirdPartyVPNPeers](docs/vpn/README.md#getorganizationappliancevpnthirdpartyvpnpeers) - Return the third party VPN peers for an organization
* [getOrganizationApplianceVpnVpnFirewallRules](docs/vpn/README.md#getorganizationappliancevpnvpnfirewallrules) - Return the firewall rules for an organization's site-to-site VPN
* [updateNetworkApplianceVpnBgp](docs/vpn/README.md#updatenetworkappliancevpnbgp) - Update a Hub BGP Configuration
* [updateNetworkApplianceVpnSiteToSiteVpn](docs/vpn/README.md#updatenetworkappliancevpnsitetositevpn) - Update the site-to-site VPN settings of a network
* [updateNetworkWirelessSsidVpn](docs/vpn/README.md#updatenetworkwirelessssidvpn) - Update the VPN settings for the SSID
* [updateOrganizationApplianceVPNThirdPartyVPNPeers](docs/vpn/README.md#updateorganizationappliancevpnthirdpartyvpnpeers) - Update the third party VPN peers for an organization
* [updateOrganizationApplianceVpnVpnFirewallRules](docs/vpn/README.md#updateorganizationappliancevpnvpnfirewallrules) - Update the firewall rules of an organization's site-to-site VPN

### [vpnFirewallRules](docs/vpnfirewallrules/README.md)

* [getOrganizationApplianceVpnVpnFirewallRules](docs/vpnfirewallrules/README.md#getorganizationappliancevpnvpnfirewallrules) - Return the firewall rules for an organization's site-to-site VPN
* [updateOrganizationApplianceVpnVpnFirewallRules](docs/vpnfirewallrules/README.md#updateorganizationappliancevpnvpnfirewallrules) - Update the firewall rules of an organization's site-to-site VPN

### [vppAccounts](docs/vppaccounts/README.md)

* [getOrganizationSmVppAccount](docs/vppaccounts/README.md#getorganizationsmvppaccount) - Get a hash containing the unparsed token of the VPP account with the given ID
* [getOrganizationSmVppAccounts](docs/vppaccounts/README.md#getorganizationsmvppaccounts) - List the VPP accounts in the organization

### [warmSpare](docs/warmspare/README.md)

* [getDeviceSwitchWarmSpare](docs/warmspare/README.md#getdeviceswitchwarmspare) - Return warm spare configuration for a switch
* [getNetworkApplianceWarmSpare](docs/warmspare/README.md#getnetworkappliancewarmspare) - Return MX warm spare settings
* [swapNetworkApplianceWarmSpare](docs/warmspare/README.md#swapnetworkappliancewarmspare) - Swap MX primary and warm spare appliances
* [updateDeviceSwitchWarmSpare](docs/warmspare/README.md#updatedeviceswitchwarmspare) - Update warm spare configuration for a switch
* [updateNetworkApplianceWarmSpare](docs/warmspare/README.md#updatenetworkappliancewarmspare) - Update MX warm spare settings

### [warnings](docs/warnings/README.md)

* [getNetworkSwitchDhcpServerPolicyArpInspectionWarningsByDevice](docs/warnings/README.md#getnetworkswitchdhcpserverpolicyarpinspectionwarningsbydevice) - Return the devices that have a Dynamic ARP Inspection warning and their warnings

### [webhookTests](docs/webhooktests/README.md)

* [createNetworkWebhooksWebhookTest](docs/webhooktests/README.md#createnetworkwebhookswebhooktest) - Send a test webhook for a network
* [getNetworkWebhooksWebhookTest](docs/webhooktests/README.md#getnetworkwebhookswebhooktest) - Return the status of a webhook test for a network

### [webhooks](docs/webhooks/README.md)

* [createNetworkWebhooksHttpServer](docs/webhooks/README.md#createnetworkwebhookshttpserver) - Add an HTTP server to a network
* [createNetworkWebhooksPayloadTemplate](docs/webhooks/README.md#createnetworkwebhookspayloadtemplate) - Create a webhook payload template for a network
* [createNetworkWebhooksWebhookTest](docs/webhooks/README.md#createnetworkwebhookswebhooktest) - Send a test webhook for a network
* [deleteNetworkWebhooksHttpServer](docs/webhooks/README.md#deletenetworkwebhookshttpserver) - Delete an HTTP server from a network
* [deleteNetworkWebhooksPayloadTemplate](docs/webhooks/README.md#deletenetworkwebhookspayloadtemplate) - Destroy a webhook payload template for a network
* [getNetworkWebhooksHttpServer](docs/webhooks/README.md#getnetworkwebhookshttpserver) - Return an HTTP server for a network
* [getNetworkWebhooksHttpServers](docs/webhooks/README.md#getnetworkwebhookshttpservers) - List the HTTP servers for a network
* [getNetworkWebhooksPayloadTemplate](docs/webhooks/README.md#getnetworkwebhookspayloadtemplate) - Get the webhook payload template for a network
* [getNetworkWebhooksPayloadTemplates](docs/webhooks/README.md#getnetworkwebhookspayloadtemplates) - List the webhook payload templates for a network
* [getNetworkWebhooksWebhookTest](docs/webhooks/README.md#getnetworkwebhookswebhooktest) - Return the status of a webhook test for a network
* [getOrganizationWebhooksAlertTypes](docs/webhooks/README.md#getorganizationwebhooksalerttypes) - Return a list of alert types to be used with managing webhook alerts
* [getOrganizationWebhooksLogs](docs/webhooks/README.md#getorganizationwebhookslogs) - Return the log of webhook POSTs sent
* [updateNetworkWebhooksHttpServer](docs/webhooks/README.md#updatenetworkwebhookshttpserver) - Update an HTTP server
* [updateNetworkWebhooksPayloadTemplate](docs/webhooks/README.md#updatenetworkwebhookspayloadtemplate) - Update a webhook payload template for a network

### [wireless](docs/wireless/README.md)

* [createNetworkWirelessRfProfile](docs/wireless/README.md#createnetworkwirelessrfprofile) - Creates new RF profile for this network
* [createNetworkWirelessSsidIdentityPsk](docs/wireless/README.md#createnetworkwirelessssididentitypsk) - Create an Identity PSK
* [deleteNetworkWirelessRfProfile](docs/wireless/README.md#deletenetworkwirelessrfprofile) - Delete a RF Profile
* [deleteNetworkWirelessSsidIdentityPsk](docs/wireless/README.md#deletenetworkwirelessssididentitypsk) - Delete an Identity PSK
* [getDeviceWirelessBluetoothSettings](docs/wireless/README.md#getdevicewirelessbluetoothsettings) - Return the bluetooth settings for a wireless device
* [getDeviceWirelessConnectionStats](docs/wireless/README.md#getdevicewirelessconnectionstats) - Aggregated connectivity info for a given AP on this network
* [getDeviceWirelessLatencyStats](docs/wireless/README.md#getdevicewirelesslatencystats) - Aggregated latency info for a given AP on this network
* [getDeviceWirelessRadioSettings](docs/wireless/README.md#getdevicewirelessradiosettings) - Return the radio settings of a device
* [getDeviceWirelessStatus](docs/wireless/README.md#getdevicewirelessstatus) - Return the SSID statuses of an access point
* [getNetworkWirelessAirMarshal](docs/wireless/README.md#getnetworkwirelessairmarshal) - List Air Marshal scan results from a network
* [getNetworkWirelessAlternateManagementInterface](docs/wireless/README.md#getnetworkwirelessalternatemanagementinterface) - Return alternate management interface and devices with IP assigned
* [getNetworkWirelessBilling](docs/wireless/README.md#getnetworkwirelessbilling) - Return the billing settings of this network
* [getNetworkWirelessBluetoothSettings](docs/wireless/README.md#getnetworkwirelessbluetoothsettings) - Return the Bluetooth settings for a network. <a href="https://documentation.meraki.com/MR/Bluetooth/Bluetooth_Low_Energy_(BLE)">Bluetooth settings</a> must be enabled on the network.
* [getNetworkWirelessChannelUtilizationHistory](docs/wireless/README.md#getnetworkwirelesschannelutilizationhistory) - Return AP channel utilization over time for a device or network client
* [getNetworkWirelessClientConnectionStats](docs/wireless/README.md#getnetworkwirelessclientconnectionstats) - Aggregated connectivity info for a given client on this network
* [getNetworkWirelessClientConnectivityEvents](docs/wireless/README.md#getnetworkwirelessclientconnectivityevents) - List the wireless connectivity events for a client within a network in the timespan.
* [getNetworkWirelessClientCountHistory](docs/wireless/README.md#getnetworkwirelessclientcounthistory) - Return wireless client counts over time for a network, device, or network client
* [getNetworkWirelessClientLatencyHistory](docs/wireless/README.md#getnetworkwirelessclientlatencyhistory) - Return the latency history for a client
* [getNetworkWirelessClientLatencyStats](docs/wireless/README.md#getnetworkwirelessclientlatencystats) - Aggregated latency info for a given client on this network
* [getNetworkWirelessClientsConnectionStats](docs/wireless/README.md#getnetworkwirelessclientsconnectionstats) - Aggregated connectivity info for this network, grouped by clients
* [getNetworkWirelessClientsLatencyStats](docs/wireless/README.md#getnetworkwirelessclientslatencystats) - Aggregated latency info for this network, grouped by clients
* [getNetworkWirelessConnectionStats](docs/wireless/README.md#getnetworkwirelessconnectionstats) - Aggregated connectivity info for this network
* [getNetworkWirelessDataRateHistory](docs/wireless/README.md#getnetworkwirelessdataratehistory) - Return PHY data rates over time for a network, device, or network client
* [getNetworkWirelessDevicesConnectionStats](docs/wireless/README.md#getnetworkwirelessdevicesconnectionstats) - Aggregated connectivity info for this network, grouped by node
* [getNetworkWirelessDevicesLatencyStats](docs/wireless/README.md#getnetworkwirelessdeviceslatencystats) - Aggregated latency info for this network, grouped by node
* [getNetworkWirelessFailedConnections](docs/wireless/README.md#getnetworkwirelessfailedconnections) - List of all failed client connection events on this network in a given time range
* [getNetworkWirelessLatencyHistory](docs/wireless/README.md#getnetworkwirelesslatencyhistory) - Return average wireless latency over time for a network, device, or network client
* [getNetworkWirelessLatencyStats](docs/wireless/README.md#getnetworkwirelesslatencystats) - Aggregated latency info for this network
* [getNetworkWirelessMeshStatuses](docs/wireless/README.md#getnetworkwirelessmeshstatuses) - List wireless mesh statuses for repeaters
* [getNetworkWirelessRfProfile](docs/wireless/README.md#getnetworkwirelessrfprofile) - Return a RF profile
* [getNetworkWirelessRfProfiles](docs/wireless/README.md#getnetworkwirelessrfprofiles) - List the non-basic RF profiles for this network
* [getNetworkWirelessSettings](docs/wireless/README.md#getnetworkwirelesssettings) - Return the wireless settings for a network
* [getNetworkWirelessSignalQualityHistory](docs/wireless/README.md#getnetworkwirelesssignalqualityhistory) - Return signal quality (SNR/RSSI) over time for a device or network client
* [getNetworkWirelessSsid](docs/wireless/README.md#getnetworkwirelessssid) - Return a single MR SSID
* [getNetworkWirelessSsidBonjourForwarding](docs/wireless/README.md#getnetworkwirelessssidbonjourforwarding) - List the Bonjour forwarding setting and rules for the SSID
* [getNetworkWirelessSsidDeviceTypeGroupPolicies](docs/wireless/README.md#getnetworkwirelessssiddevicetypegrouppolicies) - List the device type group policies for the SSID
* [getNetworkWirelessSsidEapOverride](docs/wireless/README.md#getnetworkwirelessssideapoverride) - Return the EAP overridden parameters for an SSID
* [getNetworkWirelessSsidFirewallL3FirewallRules](docs/wireless/README.md#getnetworkwirelessssidfirewalll3firewallrules) - Return the L3 firewall rules for an SSID on an MR network
* [getNetworkWirelessSsidFirewallL7FirewallRules](docs/wireless/README.md#getnetworkwirelessssidfirewalll7firewallrules) - Return the L7 firewall rules for an SSID on an MR network
* [getNetworkWirelessSsidHotspot20](docs/wireless/README.md#getnetworkwirelessssidhotspot20) - Return the Hotspot 2.0 settings for an SSID
* [getNetworkWirelessSsidIdentityPsk](docs/wireless/README.md#getnetworkwirelessssididentitypsk) - Return an Identity PSK
* [getNetworkWirelessSsidIdentityPsks](docs/wireless/README.md#getnetworkwirelessssididentitypsks) - List all Identity PSKs in a wireless network
* [getNetworkWirelessSsidSchedules](docs/wireless/README.md#getnetworkwirelessssidschedules) - List the outage schedule for the SSID
* [getNetworkWirelessSsidSplashSettings](docs/wireless/README.md#getnetworkwirelessssidsplashsettings) - Display the splash page settings for the given SSID
* [getNetworkWirelessSsidTrafficShapingRules](docs/wireless/README.md#getnetworkwirelessssidtrafficshapingrules) - Display the traffic shaping settings for a SSID on an MR network
* [getNetworkWirelessSsidVpn](docs/wireless/README.md#getnetworkwirelessssidvpn) - List the VPN settings for the SSID.
* [getNetworkWirelessSsids](docs/wireless/README.md#getnetworkwirelessssids) - List the MR SSIDs in a network
* [getNetworkWirelessUsageHistory](docs/wireless/README.md#getnetworkwirelessusagehistory) - Return AP usage over time for a device or network client
* [getOrganizationWirelessDevicesEthernetStatuses](docs/wireless/README.md#getorganizationwirelessdevicesethernetstatuses) - Endpoint to see power status for wireless devices
* [updateDeviceWirelessBluetoothSettings](docs/wireless/README.md#updatedevicewirelessbluetoothsettings) - Update the bluetooth settings for a wireless device
* [updateDeviceWirelessRadioSettings](docs/wireless/README.md#updatedevicewirelessradiosettings) - Update the radio settings of a device
* [updateNetworkWirelessAlternateManagementInterface](docs/wireless/README.md#updatenetworkwirelessalternatemanagementinterface) - Update alternate management interface and device static IP
* [updateNetworkWirelessBilling](docs/wireless/README.md#updatenetworkwirelessbilling) - Update the billing settings
* [updateNetworkWirelessBluetoothSettings](docs/wireless/README.md#updatenetworkwirelessbluetoothsettings) - Update the Bluetooth settings for a network
* [updateNetworkWirelessRfProfile](docs/wireless/README.md#updatenetworkwirelessrfprofile) - Updates specified RF profile for this network
* [updateNetworkWirelessSettings](docs/wireless/README.md#updatenetworkwirelesssettings) - Update the wireless settings for a network
* [updateNetworkWirelessSsid](docs/wireless/README.md#updatenetworkwirelessssid) - Update the attributes of an MR SSID
* [updateNetworkWirelessSsidBonjourForwarding](docs/wireless/README.md#updatenetworkwirelessssidbonjourforwarding) - Update the bonjour forwarding setting and rules for the SSID
* [updateNetworkWirelessSsidDeviceTypeGroupPolicies](docs/wireless/README.md#updatenetworkwirelessssiddevicetypegrouppolicies) - Update the device type group policies for the SSID
* [updateNetworkWirelessSsidEapOverride](docs/wireless/README.md#updatenetworkwirelessssideapoverride) - Update the EAP overridden parameters for an SSID.
* [updateNetworkWirelessSsidFirewallL3FirewallRules](docs/wireless/README.md#updatenetworkwirelessssidfirewalll3firewallrules) - Update the L3 firewall rules of an SSID on an MR network
* [updateNetworkWirelessSsidFirewallL7FirewallRules](docs/wireless/README.md#updatenetworkwirelessssidfirewalll7firewallrules) - Update the L7 firewall rules of an SSID on an MR network
* [updateNetworkWirelessSsidHotspot20](docs/wireless/README.md#updatenetworkwirelessssidhotspot20) - Update the Hotspot 2.0 settings of an SSID
* [updateNetworkWirelessSsidIdentityPsk](docs/wireless/README.md#updatenetworkwirelessssididentitypsk) - Update an Identity PSK
* [updateNetworkWirelessSsidSchedules](docs/wireless/README.md#updatenetworkwirelessssidschedules) - Update the outage schedule for the SSID
* [updateNetworkWirelessSsidSplashSettings](docs/wireless/README.md#updatenetworkwirelessssidsplashsettings) - Modify the splash page settings for the given SSID
* [updateNetworkWirelessSsidTrafficShapingRules](docs/wireless/README.md#updatenetworkwirelessssidtrafficshapingrules) - Update the traffic shaping settings for an SSID on an MR network
* [updateNetworkWirelessSsidVpn](docs/wireless/README.md#updatenetworkwirelessssidvpn) - Update the VPN settings for the SSID

### [wirelessProfiles](docs/wirelessprofiles/README.md)

* [createNetworkCameraWirelessProfile](docs/wirelessprofiles/README.md#createnetworkcamerawirelessprofile) - Creates a new camera wireless profile for this network.
* [deleteNetworkCameraWirelessProfile](docs/wirelessprofiles/README.md#deletenetworkcamerawirelessprofile) - Delete an existing camera wireless profile for this network.
* [getDeviceCameraWirelessProfiles](docs/wirelessprofiles/README.md#getdevicecamerawirelessprofiles) - Returns wireless profile assigned to the given camera
* [getNetworkCameraWirelessProfile](docs/wirelessprofiles/README.md#getnetworkcamerawirelessprofile) - Retrieve a single camera wireless profile.
* [getNetworkCameraWirelessProfiles](docs/wirelessprofiles/README.md#getnetworkcamerawirelessprofiles) - List the camera wireless profiles for this network.
* [updateDeviceCameraWirelessProfiles](docs/wirelessprofiles/README.md#updatedevicecamerawirelessprofiles) - Assign wireless profiles to the given camera
* [updateNetworkCameraWirelessProfile](docs/wirelessprofiles/README.md#updatenetworkcamerawirelessprofile) - Update an existing camera wireless profile in this network.

### [wlanLists](docs/wlanlists/README.md)

* [getNetworkSmDeviceWlanLists](docs/wlanlists/README.md#getnetworksmdevicewlanlists) - List the saved SSID names on a device

### [zones](docs/zones/README.md)

* [getDeviceCameraAnalyticsZoneHistory](docs/zones/README.md#getdevicecameraanalyticszonehistory) - Return historical records for analytic zones
* [getDeviceCameraAnalyticsZones](docs/zones/README.md#getdevicecameraanalyticszones) - Returns all configured analytic zones for this camera
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
