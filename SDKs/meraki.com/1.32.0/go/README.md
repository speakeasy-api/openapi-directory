# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/meraki.com/1.32.0/go
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
    res, err := s.AccessControlLists.GetNetworkSwitchAccessControlLists(ctx, operations.GetNetworkSwitchAccessControlListsRequest{
        NetworkID: "corrupti",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSwitchAccessControlLists200ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [AccessControlLists](docs/accesscontrollists/README.md)

* [GetNetworkSwitchAccessControlLists](docs/accesscontrollists/README.md#getnetworkswitchaccesscontrollists) - Return the access control lists for a MS network
* [UpdateNetworkSwitchAccessControlLists](docs/accesscontrollists/README.md#updatenetworkswitchaccesscontrollists) - Update the access control lists for a MS network

### [AccessPolicies](docs/accesspolicies/README.md)

* [CreateNetworkSwitchAccessPolicy](docs/accesspolicies/README.md#createnetworkswitchaccesspolicy) - Create an access policy for a switch network
* [DeleteNetworkSwitchAccessPolicy](docs/accesspolicies/README.md#deletenetworkswitchaccesspolicy) - Delete an access policy for a switch network
* [GetNetworkSwitchAccessPolicies](docs/accesspolicies/README.md#getnetworkswitchaccesspolicies) - List the access policies for a switch network
* [GetNetworkSwitchAccessPolicy](docs/accesspolicies/README.md#getnetworkswitchaccesspolicy) - Return a specific access policy for a switch network
* [UpdateNetworkSwitchAccessPolicy](docs/accesspolicies/README.md#updatenetworkswitchaccesspolicy) - Update an access policy for a switch network

### [Acls](docs/acls/README.md)

* [CreateOrganizationAdaptivePolicyACL](docs/acls/README.md#createorganizationadaptivepolicyacl) - Creates new adaptive policy ACL
* [DeleteOrganizationAdaptivePolicyACL](docs/acls/README.md#deleteorganizationadaptivepolicyacl) - Deletes the specified adaptive policy ACL
* [GetOrganizationAdaptivePolicyACL](docs/acls/README.md#getorganizationadaptivepolicyacl) - Returns the adaptive policy ACL information
* [GetOrganizationAdaptivePolicyAcls](docs/acls/README.md#getorganizationadaptivepolicyacls) - List adaptive policy ACLs in a organization
* [UpdateOrganizationAdaptivePolicyACL](docs/acls/README.md#updateorganizationadaptivepolicyacl) - Updates an adaptive policy ACL

### [ActionBatches](docs/actionbatches/README.md)

* [CreateOrganizationActionBatch](docs/actionbatches/README.md#createorganizationactionbatch) - Create an action batch
* [DeleteOrganizationActionBatch](docs/actionbatches/README.md#deleteorganizationactionbatch) - Delete an action batch
* [GetOrganizationActionBatch](docs/actionbatches/README.md#getorganizationactionbatch) - Return an action batch
* [GetOrganizationActionBatches](docs/actionbatches/README.md#getorganizationactionbatches) - Return the list of action batches in the organization
* [UpdateOrganizationActionBatch](docs/actionbatches/README.md#updateorganizationactionbatch) - Update an action batch

### [AdaptivePolicy](docs/adaptivepolicy/README.md)

* [CreateOrganizationAdaptivePolicyACL](docs/adaptivepolicy/README.md#createorganizationadaptivepolicyacl) - Creates new adaptive policy ACL
* [CreateOrganizationAdaptivePolicyGroup](docs/adaptivepolicy/README.md#createorganizationadaptivepolicygroup) - Creates a new adaptive policy group
* [CreateOrganizationAdaptivePolicyPolicy](docs/adaptivepolicy/README.md#createorganizationadaptivepolicypolicy) - Add an Adaptive Policy
* [DeleteOrganizationAdaptivePolicyACL](docs/adaptivepolicy/README.md#deleteorganizationadaptivepolicyacl) - Deletes the specified adaptive policy ACL
* [DeleteOrganizationAdaptivePolicyGroup](docs/adaptivepolicy/README.md#deleteorganizationadaptivepolicygroup) - Deletes the specified adaptive policy group and any associated policies and references
* [DeleteOrganizationAdaptivePolicyPolicy](docs/adaptivepolicy/README.md#deleteorganizationadaptivepolicypolicy) - Delete an Adaptive Policy
* [GetOrganizationAdaptivePolicyACL](docs/adaptivepolicy/README.md#getorganizationadaptivepolicyacl) - Returns the adaptive policy ACL information
* [GetOrganizationAdaptivePolicyAcls](docs/adaptivepolicy/README.md#getorganizationadaptivepolicyacls) - List adaptive policy ACLs in a organization
* [GetOrganizationAdaptivePolicyGroup](docs/adaptivepolicy/README.md#getorganizationadaptivepolicygroup) - Returns an adaptive policy group
* [GetOrganizationAdaptivePolicyGroups](docs/adaptivepolicy/README.md#getorganizationadaptivepolicygroups) - List adaptive policy groups in a organization
* [GetOrganizationAdaptivePolicyOverview](docs/adaptivepolicy/README.md#getorganizationadaptivepolicyoverview) - Returns adaptive policy aggregate statistics for an organization
* [GetOrganizationAdaptivePolicyPolicies](docs/adaptivepolicy/README.md#getorganizationadaptivepolicypolicies) - List adaptive policies in an organization
* [GetOrganizationAdaptivePolicyPolicy](docs/adaptivepolicy/README.md#getorganizationadaptivepolicypolicy) - Return an adaptive policy
* [GetOrganizationAdaptivePolicySettings](docs/adaptivepolicy/README.md#getorganizationadaptivepolicysettings) - Returns global adaptive policy settings in an organization
* [UpdateOrganizationAdaptivePolicyACL](docs/adaptivepolicy/README.md#updateorganizationadaptivepolicyacl) - Updates an adaptive policy ACL
* [UpdateOrganizationAdaptivePolicyGroup](docs/adaptivepolicy/README.md#updateorganizationadaptivepolicygroup) - Updates an adaptive policy group
* [UpdateOrganizationAdaptivePolicyPolicy](docs/adaptivepolicy/README.md#updateorganizationadaptivepolicypolicy) - Update an Adaptive Policy
* [UpdateOrganizationAdaptivePolicySettings](docs/adaptivepolicy/README.md#updateorganizationadaptivepolicysettings) - Update global adaptive policy settings

### [Addresses](docs/addresses/README.md)

* [GetOrganizationDevicesUplinksAddressesByDevice](docs/addresses/README.md#getorganizationdevicesuplinksaddressesbydevice) - List the current uplink addresses for devices in an organization.

### [Administered](docs/administered/README.md)

* [GetAdministeredIdentitiesMe](docs/administered/README.md#getadministeredidentitiesme) - Returns the identity of the current user.

### [Admins](docs/admins/README.md)

* [CreateOrganizationAdmin](docs/admins/README.md#createorganizationadmin) - Create a new dashboard administrator
* [DeleteOrganizationAdmin](docs/admins/README.md#deleteorganizationadmin) - Revoke all access for a dashboard administrator within this organization
* [GetOrganizationAdmins](docs/admins/README.md#getorganizationadmins) - List the dashboard administrators in this organization
* [UpdateOrganizationAdmin](docs/admins/README.md#updateorganizationadmin) - Update an administrator

### [AirMarshal](docs/airmarshal/README.md)

* [GetNetworkWirelessAirMarshal](docs/airmarshal/README.md#getnetworkwirelessairmarshal) - List Air Marshal scan results from a network

### [AlertTypes](docs/alerttypes/README.md)

* [GetOrganizationWebhooksAlertTypes](docs/alerttypes/README.md#getorganizationwebhooksalerttypes) - Return a list of alert types to be used with managing webhook alerts

### [Alerts](docs/alerts/README.md)

* [CreateNetworkSensorAlertsProfile](docs/alerts/README.md#createnetworksensoralertsprofile) - Creates a sensor alert profile for a network.
* [CreateOrganizationAlertsProfile](docs/alerts/README.md#createorganizationalertsprofile) - Create an organization-wide alert configuration
* [DeleteNetworkSensorAlertsProfile](docs/alerts/README.md#deletenetworksensoralertsprofile) - Deletes a sensor alert profile from a network.
* [DeleteOrganizationAlertsProfile](docs/alerts/README.md#deleteorganizationalertsprofile) - Removes an organization-wide alert config
* [GetNetworkAlertsHistory](docs/alerts/README.md#getnetworkalertshistory) - Return the alert history for this network
* [GetNetworkAlertsSettings](docs/alerts/README.md#getnetworkalertssettings) - Return the alert configuration for this network
* [GetNetworkHealthAlerts](docs/alerts/README.md#getnetworkhealthalerts) - Return all global alerts on this network
* [GetNetworkSensorAlertsCurrentOverviewByMetric](docs/alerts/README.md#getnetworksensoralertscurrentoverviewbymetric) - Return an overview of currently alerting sensors by metric
* [GetNetworkSensorAlertsOverviewByMetric](docs/alerts/README.md#getnetworksensoralertsoverviewbymetric) - Return an overview of alert occurrences over a timespan, by metric
* [GetNetworkSensorAlertsProfile](docs/alerts/README.md#getnetworksensoralertsprofile) - Show details of a sensor alert profile for a network.
* [GetNetworkSensorAlertsProfiles](docs/alerts/README.md#getnetworksensoralertsprofiles) - Lists all sensor alert profiles for a network.
* [GetOrganizationAlertsProfiles](docs/alerts/README.md#getorganizationalertsprofiles) - List all organization-wide alert configurations
* [UpdateNetworkAlertsSettings](docs/alerts/README.md#updatenetworkalertssettings) - Update the alert configuration for this network
* [UpdateNetworkSensorAlertsProfile](docs/alerts/README.md#updatenetworksensoralertsprofile) - Updates a sensor alert profile for a network.
* [UpdateOrganizationAlertsProfile](docs/alerts/README.md#updateorganizationalertsprofile) - Update an organization-wide alert config

### [AlternateManagementInterface](docs/alternatemanagementinterface/README.md)

* [GetNetworkSwitchAlternateManagementInterface](docs/alternatemanagementinterface/README.md#getnetworkswitchalternatemanagementinterface) - Return the switch alternate management interface for the network
* [GetNetworkWirelessAlternateManagementInterface](docs/alternatemanagementinterface/README.md#getnetworkwirelessalternatemanagementinterface) - Return alternate management interface and devices with IP assigned
* [UpdateNetworkSwitchAlternateManagementInterface](docs/alternatemanagementinterface/README.md#updatenetworkswitchalternatemanagementinterface) - Update the switch alternate management interface for the network
* [UpdateNetworkWirelessAlternateManagementInterface](docs/alternatemanagementinterface/README.md#updatenetworkwirelessalternatemanagementinterface) - Update alternate management interface and device static IP

### [Analytics](docs/analytics/README.md)

* [GetDeviceCameraAnalyticsLive](docs/analytics/README.md#getdevicecameraanalyticslive) - Returns live state from camera of analytics zones
* [GetDeviceCameraAnalyticsOverview](docs/analytics/README.md#getdevicecameraanalyticsoverview) - Returns an overview of aggregate analytics data for a timespan
* [GetDeviceCameraAnalyticsRecent](docs/analytics/README.md#getdevicecameraanalyticsrecent) - Returns most recent record for analytics zones
* [GetDeviceCameraAnalyticsZoneHistory](docs/analytics/README.md#getdevicecameraanalyticszonehistory) - Return historical records for analytic zones
* [GetDeviceCameraAnalyticsZones](docs/analytics/README.md#getdevicecameraanalyticszones) - Returns all configured analytic zones for this camera

### [APIRequests](docs/apirequests/README.md)

* [GetOrganizationAPIRequests](docs/apirequests/README.md#getorganizationapirequests) - List the API requests made by an organization
* [GetOrganizationAPIRequestsOverview](docs/apirequests/README.md#getorganizationapirequestsoverview) - Return an aggregated overview of API requests data
* [GetOrganizationAPIRequestsOverviewResponseCodesByInterval](docs/apirequests/README.md#getorganizationapirequestsoverviewresponsecodesbyinterval) - Tracks organizations' API requests by response code across a given time period

### [ApnsCert](docs/apnscert/README.md)

* [GetOrganizationSmApnsCert](docs/apnscert/README.md#getorganizationsmapnscert) - Get the organization's APNS certificate

### [Appliance](docs/appliance/README.md)

* [CreateDeviceApplianceVmxAuthenticationToken](docs/appliance/README.md#createdeviceappliancevmxauthenticationtoken) - Generate a new vMX authentication token
* [CreateNetworkAppliancePrefixesDelegatedStatic](docs/appliance/README.md#createnetworkapplianceprefixesdelegatedstatic) - Add a static delegated prefix from a network
* [CreateNetworkApplianceStaticRoute](docs/appliance/README.md#createnetworkappliancestaticroute) - Add a static route for an MX or teleworker network
* [CreateNetworkApplianceTrafficShapingCustomPerformanceClass](docs/appliance/README.md#createnetworkappliancetrafficshapingcustomperformanceclass) - Add a custom performance class for an MX network
* [CreateNetworkApplianceVlan](docs/appliance/README.md#createnetworkappliancevlan) - Add a VLAN
* [DeleteNetworkAppliancePrefixesDelegatedStatic](docs/appliance/README.md#deletenetworkapplianceprefixesdelegatedstatic) - Delete a static delegated prefix from a network
* [DeleteNetworkApplianceStaticRoute](docs/appliance/README.md#deletenetworkappliancestaticroute) - Delete a static route from an MX or teleworker network
* [DeleteNetworkApplianceTrafficShapingCustomPerformanceClass](docs/appliance/README.md#deletenetworkappliancetrafficshapingcustomperformanceclass) - Delete a custom performance class from an MX network
* [DeleteNetworkApplianceVlan](docs/appliance/README.md#deletenetworkappliancevlan) - Delete a VLAN from a network
* [GetDeviceApplianceDhcpSubnets](docs/appliance/README.md#getdeviceappliancedhcpsubnets) - Return the DHCP subnet information for an appliance
* [GetDeviceAppliancePerformance](docs/appliance/README.md#getdeviceapplianceperformance) - Return the performance score for a single MX
* [GetDeviceAppliancePrefixesDelegated](docs/appliance/README.md#getdeviceapplianceprefixesdelegated) - Return current delegated IPv6 prefixes on an appliance.
* [GetDeviceAppliancePrefixesDelegatedVlanAssignments](docs/appliance/README.md#getdeviceapplianceprefixesdelegatedvlanassignments) - Return prefixes assigned to all IPv6 enabled VLANs on an appliance.
* [GetDeviceApplianceUplinksSettings](docs/appliance/README.md#getdeviceapplianceuplinkssettings) - Return the uplink settings for an MX appliance
* [GetNetworkApplianceClientSecurityEvents](docs/appliance/README.md#getnetworkapplianceclientsecurityevents) - List the security events for a client
* [GetNetworkApplianceConnectivityMonitoringDestinations](docs/appliance/README.md#getnetworkapplianceconnectivitymonitoringdestinations) - Return the connectivity testing destinations for an MX network
* [GetNetworkApplianceContentFiltering](docs/appliance/README.md#getnetworkappliancecontentfiltering) - Return the content filtering settings for an MX network
* [GetNetworkApplianceContentFilteringCategories](docs/appliance/README.md#getnetworkappliancecontentfilteringcategories) - List all available content filtering categories for an MX network
* [GetNetworkApplianceFirewallCellularFirewallRules](docs/appliance/README.md#getnetworkappliancefirewallcellularfirewallrules) - Return the cellular firewall rules for an MX network
* [GetNetworkApplianceFirewallFirewalledService](docs/appliance/README.md#getnetworkappliancefirewallfirewalledservice) - Return the accessibility settings of the given service ('ICMP', 'web', or 'SNMP')
* [GetNetworkApplianceFirewallFirewalledServices](docs/appliance/README.md#getnetworkappliancefirewallfirewalledservices) - List the appliance services and their accessibility rules
* [GetNetworkApplianceFirewallInboundCellularFirewallRules](docs/appliance/README.md#getnetworkappliancefirewallinboundcellularfirewallrules) - Return the inbound cellular firewall rules for an MX network
* [GetNetworkApplianceFirewallInboundFirewallRules](docs/appliance/README.md#getnetworkappliancefirewallinboundfirewallrules) - Return the inbound firewall rules for an MX network
* [GetNetworkApplianceFirewallL3FirewallRules](docs/appliance/README.md#getnetworkappliancefirewalll3firewallrules) - Return the L3 firewall rules for an MX network
* [GetNetworkApplianceFirewallL7FirewallRules](docs/appliance/README.md#getnetworkappliancefirewalll7firewallrules) - List the MX L7 firewall rules for an MX network
* [GetNetworkApplianceFirewallL7FirewallRulesApplicationCategories](docs/appliance/README.md#getnetworkappliancefirewalll7firewallrulesapplicationcategories) - Return the L7 firewall application categories and their associated applications for an MX network
* [GetNetworkApplianceFirewallOneToManyNatRules](docs/appliance/README.md#getnetworkappliancefirewallonetomanynatrules) - Return the 1:Many NAT mapping rules for an MX network
* [GetNetworkApplianceFirewallOneToOneNatRules](docs/appliance/README.md#getnetworkappliancefirewallonetoonenatrules) - Return the 1:1 NAT mapping rules for an MX network
* [GetNetworkApplianceFirewallPortForwardingRules](docs/appliance/README.md#getnetworkappliancefirewallportforwardingrules) - Return the port forwarding rules for an MX network
* [GetNetworkApplianceFirewallSettings](docs/appliance/README.md#getnetworkappliancefirewallsettings) - Return the firewall settings for this network
* [GetNetworkAppliancePort](docs/appliance/README.md#getnetworkapplianceport) - Return per-port VLAN settings for a single MX port.
* [GetNetworkAppliancePorts](docs/appliance/README.md#getnetworkapplianceports) - List per-port VLAN settings for all ports of a MX.
* [GetNetworkAppliancePrefixesDelegatedStatic](docs/appliance/README.md#getnetworkapplianceprefixesdelegatedstatic) - Return a static delegated prefix from a network
* [GetNetworkAppliancePrefixesDelegatedStatics](docs/appliance/README.md#getnetworkapplianceprefixesdelegatedstatics) - List static delegated prefixes for a network
* [GetNetworkApplianceSecurityEvents](docs/appliance/README.md#getnetworkappliancesecurityevents) - List the security events for a network
* [GetNetworkApplianceSecurityIntrusion](docs/appliance/README.md#getnetworkappliancesecurityintrusion) - Returns all supported intrusion settings for an MX network
* [GetNetworkApplianceSecurityMalware](docs/appliance/README.md#getnetworkappliancesecuritymalware) - Returns all supported malware settings for an MX network
* [GetNetworkApplianceSettings](docs/appliance/README.md#getnetworkappliancesettings) - Return the appliance settings for a network
* [GetNetworkApplianceSingleLan](docs/appliance/README.md#getnetworkappliancesinglelan) - Return single LAN configuration
* [GetNetworkApplianceSsid](docs/appliance/README.md#getnetworkappliancessid) - Return a single MX SSID
* [GetNetworkApplianceSsids](docs/appliance/README.md#getnetworkappliancessids) - List the MX SSIDs in a network
* [GetNetworkApplianceStaticRoute](docs/appliance/README.md#getnetworkappliancestaticroute) - Return a static route for an MX or teleworker network
* [GetNetworkApplianceStaticRoutes](docs/appliance/README.md#getnetworkappliancestaticroutes) - List the static routes for an MX or teleworker network
* [GetNetworkApplianceTrafficShaping](docs/appliance/README.md#getnetworkappliancetrafficshaping) - Display the traffic shaping settings for an MX network
* [GetNetworkApplianceTrafficShapingCustomPerformanceClass](docs/appliance/README.md#getnetworkappliancetrafficshapingcustomperformanceclass) - Return a custom performance class for an MX network
* [GetNetworkApplianceTrafficShapingCustomPerformanceClasses](docs/appliance/README.md#getnetworkappliancetrafficshapingcustomperformanceclasses) - List all custom performance classes for an MX network
* [GetNetworkApplianceTrafficShapingRules](docs/appliance/README.md#getnetworkappliancetrafficshapingrules) - Display the traffic shaping settings rules for an MX network
* [GetNetworkApplianceTrafficShapingUplinkBandwidth](docs/appliance/README.md#getnetworkappliancetrafficshapinguplinkbandwidth) - Returns the uplink bandwidth limits for your MX network
* [GetNetworkApplianceTrafficShapingUplinkSelection](docs/appliance/README.md#getnetworkappliancetrafficshapinguplinkselection) - Show uplink selection settings for an MX network
* [GetNetworkApplianceUplinksUsageHistory](docs/appliance/README.md#getnetworkapplianceuplinksusagehistory) - Get the sent and received bytes for each uplink of a network.
* [GetNetworkApplianceVlan](docs/appliance/README.md#getnetworkappliancevlan) - Return a VLAN
* [GetNetworkApplianceVlans](docs/appliance/README.md#getnetworkappliancevlans) - List the VLANs for an MX network
* [GetNetworkApplianceVlansSettings](docs/appliance/README.md#getnetworkappliancevlanssettings) - Returns the enabled status of VLANs for the network
* [GetNetworkApplianceVpnBgp](docs/appliance/README.md#getnetworkappliancevpnbgp) - Return a Hub BGP Configuration
* [GetNetworkApplianceVpnSiteToSiteVpn](docs/appliance/README.md#getnetworkappliancevpnsitetositevpn) - Return the site-to-site VPN settings of a network
* [GetNetworkApplianceWarmSpare](docs/appliance/README.md#getnetworkappliancewarmspare) - Return MX warm spare settings
* [GetOrganizationApplianceSecurityEvents](docs/appliance/README.md#getorganizationappliancesecurityevents) - List the security events for an organization
* [GetOrganizationApplianceSecurityIntrusion](docs/appliance/README.md#getorganizationappliancesecurityintrusion) - Returns all supported intrusion settings for an organization
* [GetOrganizationApplianceUplinkStatuses](docs/appliance/README.md#getorganizationapplianceuplinkstatuses) - List the uplink status of every Meraki MX and Z series appliances in the organization
* [GetOrganizationApplianceVpnStats](docs/appliance/README.md#getorganizationappliancevpnstats) - Show VPN history stat for networks in an organization
* [GetOrganizationApplianceVpnStatuses](docs/appliance/README.md#getorganizationappliancevpnstatuses) - Show VPN status for networks in an organization
* [GetOrganizationApplianceVPNThirdPartyVPNPeers](docs/appliance/README.md#getorganizationappliancevpnthirdpartyvpnpeers) - Return the third party VPN peers for an organization
* [GetOrganizationApplianceVpnVpnFirewallRules](docs/appliance/README.md#getorganizationappliancevpnvpnfirewallrules) - Return the firewall rules for an organization's site-to-site VPN
* [SwapNetworkApplianceWarmSpare](docs/appliance/README.md#swapnetworkappliancewarmspare) - Swap MX primary and warm spare appliances
* [UpdateDeviceApplianceUplinksSettings](docs/appliance/README.md#updatedeviceapplianceuplinkssettings) - Update the uplink settings for an MX appliance
* [UpdateNetworkApplianceConnectivityMonitoringDestinations](docs/appliance/README.md#updatenetworkapplianceconnectivitymonitoringdestinations) - Update the connectivity testing destinations for an MX network
* [UpdateNetworkApplianceContentFiltering](docs/appliance/README.md#updatenetworkappliancecontentfiltering) - Update the content filtering settings for an MX network
* [UpdateNetworkApplianceFirewallCellularFirewallRules](docs/appliance/README.md#updatenetworkappliancefirewallcellularfirewallrules) - Update the cellular firewall rules of an MX network
* [UpdateNetworkApplianceFirewallFirewalledService](docs/appliance/README.md#updatenetworkappliancefirewallfirewalledservice) - Updates the accessibility settings for the given service ('ICMP', 'web', or 'SNMP')
* [UpdateNetworkApplianceFirewallInboundCellularFirewallRules](docs/appliance/README.md#updatenetworkappliancefirewallinboundcellularfirewallrules) - Update the inbound cellular firewall rules of an MX network
* [UpdateNetworkApplianceFirewallInboundFirewallRules](docs/appliance/README.md#updatenetworkappliancefirewallinboundfirewallrules) - Update the inbound firewall rules of an MX network
* [UpdateNetworkApplianceFirewallL3FirewallRules](docs/appliance/README.md#updatenetworkappliancefirewalll3firewallrules) - Update the L3 firewall rules of an MX network
* [UpdateNetworkApplianceFirewallL7FirewallRules](docs/appliance/README.md#updatenetworkappliancefirewalll7firewallrules) - Update the MX L7 firewall rules for an MX network
* [UpdateNetworkApplianceFirewallOneToManyNatRules](docs/appliance/README.md#updatenetworkappliancefirewallonetomanynatrules) - Set the 1:Many NAT mapping rules for an MX network
* [UpdateNetworkApplianceFirewallOneToOneNatRules](docs/appliance/README.md#updatenetworkappliancefirewallonetoonenatrules) - Set the 1:1 NAT mapping rules for an MX network
* [UpdateNetworkApplianceFirewallPortForwardingRules](docs/appliance/README.md#updatenetworkappliancefirewallportforwardingrules) - Update the port forwarding rules for an MX network
* [UpdateNetworkApplianceFirewallSettings](docs/appliance/README.md#updatenetworkappliancefirewallsettings) - Update the firewall settings for this network
* [UpdateNetworkAppliancePort](docs/appliance/README.md#updatenetworkapplianceport) - Update the per-port VLAN settings for a single MX port.
* [UpdateNetworkAppliancePrefixesDelegatedStatic](docs/appliance/README.md#updatenetworkapplianceprefixesdelegatedstatic) - Update a static delegated prefix from a network
* [UpdateNetworkApplianceSecurityIntrusion](docs/appliance/README.md#updatenetworkappliancesecurityintrusion) - Set the supported intrusion settings for an MX network
* [UpdateNetworkApplianceSecurityMalware](docs/appliance/README.md#updatenetworkappliancesecuritymalware) - Set the supported malware settings for an MX network
* [UpdateNetworkApplianceSettings](docs/appliance/README.md#updatenetworkappliancesettings) - Update the appliance settings for a network
* [UpdateNetworkApplianceSingleLan](docs/appliance/README.md#updatenetworkappliancesinglelan) - Update single LAN configuration
* [UpdateNetworkApplianceSsid](docs/appliance/README.md#updatenetworkappliancessid) - Update the attributes of an MX SSID
* [UpdateNetworkApplianceStaticRoute](docs/appliance/README.md#updatenetworkappliancestaticroute) - Update a static route for an MX or teleworker network
* [UpdateNetworkApplianceTrafficShaping](docs/appliance/README.md#updatenetworkappliancetrafficshaping) - Update the traffic shaping settings for an MX network
* [UpdateNetworkApplianceTrafficShapingCustomPerformanceClass](docs/appliance/README.md#updatenetworkappliancetrafficshapingcustomperformanceclass) - Update a custom performance class for an MX network
* [UpdateNetworkApplianceTrafficShapingRules](docs/appliance/README.md#updatenetworkappliancetrafficshapingrules) - Update the traffic shaping settings rules for an MX network
* [UpdateNetworkApplianceTrafficShapingUplinkBandwidth](docs/appliance/README.md#updatenetworkappliancetrafficshapinguplinkbandwidth) - Updates the uplink bandwidth settings for your MX network.
* [UpdateNetworkApplianceTrafficShapingUplinkSelection](docs/appliance/README.md#updatenetworkappliancetrafficshapinguplinkselection) - Update uplink selection settings for an MX network
* [UpdateNetworkApplianceVlan](docs/appliance/README.md#updatenetworkappliancevlan) - Update a VLAN
* [UpdateNetworkApplianceVlansSettings](docs/appliance/README.md#updatenetworkappliancevlanssettings) - Enable/Disable VLANs for the given network
* [UpdateNetworkApplianceVpnBgp](docs/appliance/README.md#updatenetworkappliancevpnbgp) - Update a Hub BGP Configuration
* [UpdateNetworkApplianceVpnSiteToSiteVpn](docs/appliance/README.md#updatenetworkappliancevpnsitetositevpn) - Update the site-to-site VPN settings of a network
* [UpdateNetworkApplianceWarmSpare](docs/appliance/README.md#updatenetworkappliancewarmspare) - Update MX warm spare settings
* [UpdateOrganizationApplianceSecurityIntrusion](docs/appliance/README.md#updateorganizationappliancesecurityintrusion) - Sets supported intrusion settings for an organization
* [UpdateOrganizationApplianceVPNThirdPartyVPNPeers](docs/appliance/README.md#updateorganizationappliancevpnthirdpartyvpnpeers) - Update the third party VPN peers for an organization
* [UpdateOrganizationApplianceVpnVpnFirewallRules](docs/appliance/README.md#updateorganizationappliancevpnvpnfirewallrules) - Update the firewall rules of an organization's site-to-site VPN

### [Appliances](docs/appliances/README.md)

* [GetOrganizationSummaryTopAppliancesByUtilization](docs/appliances/README.md#getorganizationsummarytopappliancesbyutilization) - Return the top 10 appliances sorted by utilization over given time range.

### [ApplicationCategories](docs/applicationcategories/README.md)

* [GetNetworkApplianceFirewallL7FirewallRulesApplicationCategories](docs/applicationcategories/README.md#getnetworkappliancefirewalll7firewallrulesapplicationcategories) - Return the L7 firewall application categories and their associated applications for an MX network
* [GetNetworkTrafficShapingApplicationCategories](docs/applicationcategories/README.md#getnetworktrafficshapingapplicationcategories) - Returns the application categories for traffic shaping rules.

### [ApplicationUsage](docs/applicationusage/README.md)

* [GetNetworkClientsApplicationUsage](docs/applicationusage/README.md#getnetworkclientsapplicationusage) - Return the application usage data for clients

### [Applications](docs/applications/README.md)

* [GetNetworkInsightApplicationHealthByTime](docs/applications/README.md#getnetworkinsightapplicationhealthbytime) - Get application health by time
* [GetOrganizationInsightApplications](docs/applications/README.md#getorganizationinsightapplications) - List all Insight tracked applications

### [ArpInspection](docs/arpinspection/README.md)

* [CreateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServer](docs/arpinspection/README.md#createnetworkswitchdhcpserverpolicyarpinspectiontrustedserver) - Add a server to be trusted by Dynamic ARP Inspection on this network
* [DeleteNetworkSwitchDhcpServerPolicyArpInspectionTrustedServer](docs/arpinspection/README.md#deletenetworkswitchdhcpserverpolicyarpinspectiontrustedserver) - Remove a server from being trusted by Dynamic ARP Inspection on this network
* [GetNetworkSwitchDhcpServerPolicyArpInspectionTrustedServers](docs/arpinspection/README.md#getnetworkswitchdhcpserverpolicyarpinspectiontrustedservers) - Return the list of servers trusted by Dynamic ARP Inspection on this network
* [GetNetworkSwitchDhcpServerPolicyArpInspectionWarningsByDevice](docs/arpinspection/README.md#getnetworkswitchdhcpserverpolicyarpinspectionwarningsbydevice) - Return the devices that have a Dynamic ARP Inspection warning and their warnings
* [UpdateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServer](docs/arpinspection/README.md#updatenetworkswitchdhcpserverpolicyarpinspectiontrustedserver) - Update a server that is trusted by Dynamic ARP Inspection on this network

### [Artifacts](docs/artifacts/README.md)

* [CreateOrganizationCameraCustomAnalyticsArtifact](docs/artifacts/README.md#createorganizationcameracustomanalyticsartifact) - Create custom analytics artifact
* [DeleteOrganizationCameraCustomAnalyticsArtifact](docs/artifacts/README.md#deleteorganizationcameracustomanalyticsartifact) - Delete Custom Analytics Artifact
* [GetOrganizationCameraCustomAnalyticsArtifact](docs/artifacts/README.md#getorganizationcameracustomanalyticsartifact) - Get Custom Analytics Artifact
* [GetOrganizationCameraCustomAnalyticsArtifacts](docs/artifacts/README.md#getorganizationcameracustomanalyticsartifacts) - List Custom Analytics Artifacts

### [AuthenticationToken](docs/authenticationtoken/README.md)

* [CreateDeviceApplianceVmxAuthenticationToken](docs/authenticationtoken/README.md#createdeviceappliancevmxauthenticationtoken) - Generate a new vMX authentication token

### [Availabilities](docs/availabilities/README.md)

* [GetOrganizationDevicesAvailabilities](docs/availabilities/README.md#getorganizationdevicesavailabilities) - List the availability information for devices in an organization

### [BandwidthUsageHistory](docs/bandwidthusagehistory/README.md)

* [GetNetworkClientsBandwidthUsageHistory](docs/bandwidthusagehistory/README.md#getnetworkclientsbandwidthusagehistory) - Returns a timeseries of total traffic consumption rates for all clients on a network within a given timespan, in megabits per second.
* [GetOrganizationClientsBandwidthUsageHistory](docs/bandwidthusagehistory/README.md#getorganizationclientsbandwidthusagehistory) - Return data usage (in megabits per second) over time for all clients in the given organization within a given time range.

### [Bgp](docs/bgp/README.md)

* [GetNetworkApplianceVpnBgp](docs/bgp/README.md#getnetworkappliancevpnbgp) - Return a Hub BGP Configuration
* [UpdateNetworkApplianceVpnBgp](docs/bgp/README.md#updatenetworkappliancevpnbgp) - Update a Hub BGP Configuration

### [Billing](docs/billing/README.md)

* [GetNetworkWirelessBilling](docs/billing/README.md#getnetworkwirelessbilling) - Return the billing settings of this network
* [UpdateNetworkWirelessBilling](docs/billing/README.md#updatenetworkwirelessbilling) - Update the billing settings

### [Bluetooth](docs/bluetooth/README.md)

* [GetDeviceWirelessBluetoothSettings](docs/bluetooth/README.md#getdevicewirelessbluetoothsettings) - Return the bluetooth settings for a wireless device
* [GetNetworkWirelessBluetoothSettings](docs/bluetooth/README.md#getnetworkwirelessbluetoothsettings) - Return the Bluetooth settings for a network. <a href="https://documentation.meraki.com/MR/Bluetooth/Bluetooth_Low_Energy_(BLE)">Bluetooth settings</a> must be enabled on the network.
* [UpdateDeviceWirelessBluetoothSettings](docs/bluetooth/README.md#updatedevicewirelessbluetoothsettings) - Update the bluetooth settings for a wireless device
* [UpdateNetworkWirelessBluetoothSettings](docs/bluetooth/README.md#updatenetworkwirelessbluetoothsettings) - Update the Bluetooth settings for a network

### [BluetoothClients](docs/bluetoothclients/README.md)

* [GetNetworkBluetoothClient](docs/bluetoothclients/README.md#getnetworkbluetoothclient) - Return a Bluetooth client
* [GetNetworkBluetoothClients](docs/bluetoothclients/README.md#getnetworkbluetoothclients) - List the Bluetooth clients seen by APs in this network

### [BonjourForwarding](docs/bonjourforwarding/README.md)

* [GetNetworkWirelessSsidBonjourForwarding](docs/bonjourforwarding/README.md#getnetworkwirelessssidbonjourforwarding) - List the Bonjour forwarding setting and rules for the SSID
* [UpdateNetworkWirelessSsidBonjourForwarding](docs/bonjourforwarding/README.md#updatenetworkwirelessssidbonjourforwarding) - Update the bonjour forwarding setting and rules for the SSID

### [BrandingPolicies](docs/brandingpolicies/README.md)

* [CreateOrganizationBrandingPolicy](docs/brandingpolicies/README.md#createorganizationbrandingpolicy) - Add a new branding policy to an organization
* [DeleteOrganizationBrandingPolicy](docs/brandingpolicies/README.md#deleteorganizationbrandingpolicy) - Delete a branding policy
* [GetOrganizationBrandingPolicies](docs/brandingpolicies/README.md#getorganizationbrandingpolicies) - List the branding policies of an organization
* [GetOrganizationBrandingPoliciesPriorities](docs/brandingpolicies/README.md#getorganizationbrandingpoliciespriorities) - Return the branding policy IDs of an organization in priority order
* [GetOrganizationBrandingPolicy](docs/brandingpolicies/README.md#getorganizationbrandingpolicy) - Return a branding policy
* [UpdateOrganizationBrandingPoliciesPriorities](docs/brandingpolicies/README.md#updateorganizationbrandingpoliciespriorities) - Update the priority ordering of an organization's branding policies.
* [UpdateOrganizationBrandingPolicy](docs/brandingpolicies/README.md#updateorganizationbrandingpolicy) - Update a branding policy

### [ByClient](docs/byclient/README.md)

* [GetNetworkPoliciesByClient](docs/byclient/README.md#getnetworkpoliciesbyclient) - Get policies for all clients with policies

### [ByDevice](docs/bydevice/README.md)

* [GetNetworkSwitchDhcpServerPolicyArpInspectionWarningsByDevice](docs/bydevice/README.md#getnetworkswitchdhcpserverpolicyarpinspectionwarningsbydevice) - Return the devices that have a Dynamic ARP Inspection warning and their warnings
* [GetOrganizationDevicesPowerModulesStatusesByDevice](docs/bydevice/README.md#getorganizationdevicespowermodulesstatusesbydevice) - List the power status information for devices in an organization
* [GetOrganizationDevicesUplinksAddressesByDevice](docs/bydevice/README.md#getorganizationdevicesuplinksaddressesbydevice) - List the current uplink addresses for devices in an organization.
* [GetOrganizationFirmwareUpgradesByDevice](docs/bydevice/README.md#getorganizationfirmwareupgradesbydevice) - Get firmware upgrade status for the filtered devices

### [ByEnergyUsage](docs/byenergyusage/README.md)

* [GetOrganizationSummaryTopSwitchesByEnergyUsage](docs/byenergyusage/README.md#getorganizationsummarytopswitchesbyenergyusage) - Return metrics for organization's top 10 switches by energy usage over given time range

### [ByInterval](docs/byinterval/README.md)

* [GetOrganizationAPIRequestsOverviewResponseCodesByInterval](docs/byinterval/README.md#getorganizationapirequestsoverviewresponsecodesbyinterval) - Tracks organizations' API requests by response code across a given time period

### [ByMetric](docs/bymetric/README.md)

* [GetNetworkSensorAlertsCurrentOverviewByMetric](docs/bymetric/README.md#getnetworksensoralertscurrentoverviewbymetric) - Return an overview of currently alerting sensors by metric
* [GetNetworkSensorAlertsOverviewByMetric](docs/bymetric/README.md#getnetworksensoralertsoverviewbymetric) - Return an overview of alert occurrences over a timespan, by metric

### [BySwitch](docs/byswitch/README.md)

* [GetOrganizationSwitchPortsBySwitch](docs/byswitch/README.md#getorganizationswitchportsbyswitch) - List the switchports in an organization by switch

### [ByUsage](docs/byusage/README.md)

* [GetOrganizationSummaryTopClientsByUsage](docs/byusage/README.md#getorganizationsummarytopclientsbyusage) - Return metrics for organization's top 10 clients by data usage (in mb) over given time range.
* [GetOrganizationSummaryTopClientsManufacturersByUsage](docs/byusage/README.md#getorganizationsummarytopclientsmanufacturersbyusage) - Return metrics for organization's top clients by data usage (in mb) over given time range, grouped by manufacturer.
* [GetOrganizationSummaryTopDevicesByUsage](docs/byusage/README.md#getorganizationsummarytopdevicesbyusage) - Return metrics for organization's top 10 devices sorted by data usage over given time range
* [GetOrganizationSummaryTopDevicesModelsByUsage](docs/byusage/README.md#getorganizationsummarytopdevicesmodelsbyusage) - Return metrics for organization's top 10 device models sorted by data usage over given time range
* [GetOrganizationSummaryTopSsidsByUsage](docs/byusage/README.md#getorganizationsummarytopssidsbyusage) - Return metrics for organization's top 10 ssids by data usage over given time range

### [ByUtilization](docs/byutilization/README.md)

* [GetOrganizationSummaryTopAppliancesByUtilization](docs/byutilization/README.md#getorganizationsummarytopappliancesbyutilization) - Return the top 10 appliances sorted by utilization over given time range.

### [BypassActivationLockAttempts](docs/bypassactivationlockattempts/README.md)

* [CreateNetworkSmBypassActivationLockAttempt](docs/bypassactivationlockattempts/README.md#createnetworksmbypassactivationlockattempt) - Bypass activation lock attempt
* [GetNetworkSmBypassActivationLockAttempt](docs/bypassactivationlockattempts/README.md#getnetworksmbypassactivationlockattempt) - Bypass activation lock attempt status

### [Camera](docs/camera/README.md)

* [CreateNetworkCameraQualityRetentionProfile](docs/camera/README.md#createnetworkcameraqualityretentionprofile) - Creates new quality retention profile for this network.
* [CreateNetworkCameraWirelessProfile](docs/camera/README.md#createnetworkcamerawirelessprofile) - Creates a new camera wireless profile for this network.
* [CreateOrganizationCameraCustomAnalyticsArtifact](docs/camera/README.md#createorganizationcameracustomanalyticsartifact) - Create custom analytics artifact
* [DeleteNetworkCameraQualityRetentionProfile](docs/camera/README.md#deletenetworkcameraqualityretentionprofile) - Delete an existing quality retention profile for this network.
* [DeleteNetworkCameraWirelessProfile](docs/camera/README.md#deletenetworkcamerawirelessprofile) - Delete an existing camera wireless profile for this network.
* [DeleteOrganizationCameraCustomAnalyticsArtifact](docs/camera/README.md#deleteorganizationcameracustomanalyticsartifact) - Delete Custom Analytics Artifact
* [GenerateDeviceCameraSnapshot](docs/camera/README.md#generatedevicecamerasnapshot) - Generate a snapshot of what the camera sees at the specified time and return a link to that image.
* [GetDeviceCameraAnalyticsLive](docs/camera/README.md#getdevicecameraanalyticslive) - Returns live state from camera of analytics zones
* [GetDeviceCameraAnalyticsOverview](docs/camera/README.md#getdevicecameraanalyticsoverview) - Returns an overview of aggregate analytics data for a timespan
* [GetDeviceCameraAnalyticsRecent](docs/camera/README.md#getdevicecameraanalyticsrecent) - Returns most recent record for analytics zones
* [GetDeviceCameraAnalyticsZoneHistory](docs/camera/README.md#getdevicecameraanalyticszonehistory) - Return historical records for analytic zones
* [GetDeviceCameraAnalyticsZones](docs/camera/README.md#getdevicecameraanalyticszones) - Returns all configured analytic zones for this camera
* [GetDeviceCameraCustomAnalytics](docs/camera/README.md#getdevicecameracustomanalytics) - Return custom analytics settings for a camera
* [GetDeviceCameraQualityAndRetention](docs/camera/README.md#getdevicecameraqualityandretention) - Returns quality and retention settings for the given camera
* [GetDeviceCameraSense](docs/camera/README.md#getdevicecamerasense) - Returns sense settings for a given camera
* [GetDeviceCameraSenseObjectDetectionModels](docs/camera/README.md#getdevicecamerasenseobjectdetectionmodels) - Returns the MV Sense object detection model list for the given camera
* [GetDeviceCameraVideoLink](docs/camera/README.md#getdevicecameravideolink) - Returns video link to the specified camera
* [GetDeviceCameraVideoSettings](docs/camera/README.md#getdevicecameravideosettings) - Returns video settings for the given camera
* [GetDeviceCameraWirelessProfiles](docs/camera/README.md#getdevicecamerawirelessprofiles) - Returns wireless profile assigned to the given camera
* [GetNetworkCameraQualityRetentionProfile](docs/camera/README.md#getnetworkcameraqualityretentionprofile) - Retrieve a single quality retention profile
* [GetNetworkCameraQualityRetentionProfiles](docs/camera/README.md#getnetworkcameraqualityretentionprofiles) - List the quality retention profiles for this network
* [GetNetworkCameraSchedules](docs/camera/README.md#getnetworkcameraschedules) - Returns a list of all camera recording schedules.
* [GetNetworkCameraWirelessProfile](docs/camera/README.md#getnetworkcamerawirelessprofile) - Retrieve a single camera wireless profile.
* [GetNetworkCameraWirelessProfiles](docs/camera/README.md#getnetworkcamerawirelessprofiles) - List the camera wireless profiles for this network.
* [GetOrganizationCameraCustomAnalyticsArtifact](docs/camera/README.md#getorganizationcameracustomanalyticsartifact) - Get Custom Analytics Artifact
* [GetOrganizationCameraCustomAnalyticsArtifacts](docs/camera/README.md#getorganizationcameracustomanalyticsartifacts) - List Custom Analytics Artifacts
* [GetOrganizationCameraOnboardingStatuses](docs/camera/README.md#getorganizationcameraonboardingstatuses) - Fetch onboarding status of cameras
* [UpdateDeviceCameraCustomAnalytics](docs/camera/README.md#updatedevicecameracustomanalytics) - Update custom analytics settings for a camera
* [UpdateDeviceCameraQualityAndRetention](docs/camera/README.md#updatedevicecameraqualityandretention) - Update quality and retention settings for the given camera
* [UpdateDeviceCameraSense](docs/camera/README.md#updatedevicecamerasense) - Update sense settings for the given camera
* [UpdateDeviceCameraVideoSettings](docs/camera/README.md#updatedevicecameravideosettings) - Update video settings for the given camera
* [UpdateDeviceCameraWirelessProfiles](docs/camera/README.md#updatedevicecamerawirelessprofiles) - Assign wireless profiles to the given camera
* [UpdateNetworkCameraQualityRetentionProfile](docs/camera/README.md#updatenetworkcameraqualityretentionprofile) - Update an existing quality retention profile for this network.
* [UpdateNetworkCameraWirelessProfile](docs/camera/README.md#updatenetworkcamerawirelessprofile) - Update an existing camera wireless profile in this network.
* [UpdateOrganizationCameraOnboardingStatuses](docs/camera/README.md#updateorganizationcameraonboardingstatuses) - Notify that credential handoff to camera has completed

### [Categories](docs/categories/README.md)

* [GetNetworkApplianceContentFilteringCategories](docs/categories/README.md#getnetworkappliancecontentfilteringcategories) - List all available content filtering categories for an MX network

### [Cellular](docs/cellular/README.md)

* [GetDeviceCellularSims](docs/cellular/README.md#getdevicecellularsims) - Return the SIM and APN configurations for a cellular device.
* [UpdateDeviceCellularSims](docs/cellular/README.md#updatedevicecellularsims) - Updates the SIM and APN configurations for a cellular device.

### [CellularFirewallRules](docs/cellularfirewallrules/README.md)

* [GetNetworkApplianceFirewallCellularFirewallRules](docs/cellularfirewallrules/README.md#getnetworkappliancefirewallcellularfirewallrules) - Return the cellular firewall rules for an MX network
* [UpdateNetworkApplianceFirewallCellularFirewallRules](docs/cellularfirewallrules/README.md#updatenetworkappliancefirewallcellularfirewallrules) - Update the cellular firewall rules of an MX network

### [CellularGateway](docs/cellulargateway/README.md)

* [GetDeviceCellularGatewayLan](docs/cellulargateway/README.md#getdevicecellulargatewaylan) - Show the LAN Settings of a MG
* [GetDeviceCellularGatewayPortForwardingRules](docs/cellulargateway/README.md#getdevicecellulargatewayportforwardingrules) - Returns the port forwarding rules for a single MG.
* [GetNetworkCellularGatewayConnectivityMonitoringDestinations](docs/cellulargateway/README.md#getnetworkcellulargatewayconnectivitymonitoringdestinations) - Return the connectivity testing destinations for an MG network
* [GetNetworkCellularGatewayDhcp](docs/cellulargateway/README.md#getnetworkcellulargatewaydhcp) - List common DHCP settings of MGs
* [GetNetworkCellularGatewaySubnetPool](docs/cellulargateway/README.md#getnetworkcellulargatewaysubnetpool) - Return the subnet pool and mask configured for MGs in the network.
* [GetNetworkCellularGatewayUplink](docs/cellulargateway/README.md#getnetworkcellulargatewayuplink) - Returns the uplink settings for your MG network.
* [GetOrganizationCellularGatewayUplinkStatuses](docs/cellulargateway/README.md#getorganizationcellulargatewayuplinkstatuses) - List the uplink status of every Meraki MG cellular gateway in the organization
* [UpdateDeviceCellularGatewayLan](docs/cellulargateway/README.md#updatedevicecellulargatewaylan) - Update the LAN Settings for a single MG.
* [UpdateDeviceCellularGatewayPortForwardingRules](docs/cellulargateway/README.md#updatedevicecellulargatewayportforwardingrules) - Updates the port forwarding rules for a single MG.
* [UpdateNetworkCellularGatewayConnectivityMonitoringDestinations](docs/cellulargateway/README.md#updatenetworkcellulargatewayconnectivitymonitoringdestinations) - Update the connectivity testing destinations for an MG network
* [UpdateNetworkCellularGatewayDhcp](docs/cellulargateway/README.md#updatenetworkcellulargatewaydhcp) - Update common DHCP settings of MGs
* [UpdateNetworkCellularGatewaySubnetPool](docs/cellulargateway/README.md#updatenetworkcellulargatewaysubnetpool) - Update the subnet pool and mask configuration for MGs in the network.
* [UpdateNetworkCellularGatewayUplink](docs/cellulargateway/README.md#updatenetworkcellulargatewayuplink) - Updates the uplink settings for your MG network.

### [CellularUsageHistory](docs/cellularusagehistory/README.md)

* [GetNetworkSmDeviceCellularUsageHistory](docs/cellularusagehistory/README.md#getnetworksmdevicecellularusagehistory) - Return the client's daily cellular data usage history

### [Certs](docs/certs/README.md)

* [GetNetworkSmDeviceCerts](docs/certs/README.md#getnetworksmdevicecerts) - List the certs on a device

### [ChannelUtilization](docs/channelutilization/README.md)

* [GetNetworkNetworkHealthChannelUtilization](docs/channelutilization/README.md#getnetworknetworkhealthchannelutilization) - Get the channel utilization over each radio for all APs in a network.

### [ChannelUtilizationHistory](docs/channelutilizationhistory/README.md)

* [GetNetworkWirelessChannelUtilizationHistory](docs/channelutilizationhistory/README.md#getnetworkwirelesschannelutilizationhistory) - Return AP channel utilization over time for a device or network client

### [Claim](docs/claim/README.md)

* [VmxNetworkDevicesClaim](docs/claim/README.md#vmxnetworkdevicesclaim) - Claim a vMX into a network

### [ClientCountHistory](docs/clientcounthistory/README.md)

* [GetNetworkWirelessClientCountHistory](docs/clientcounthistory/README.md#getnetworkwirelessclientcounthistory) - Return wireless client counts over time for a network, device, or network client

### [Clients](docs/clients/README.md)

* [GetDeviceClients](docs/clients/README.md#getdeviceclients) - List the clients of a device, up to a maximum of a month ago
* [GetNetworkApplianceClientSecurityEvents](docs/clients/README.md#getnetworkapplianceclientsecurityevents) - List the security events for a client
* [GetNetworkClient](docs/clients/README.md#getnetworkclient) - Return the client associated with the given identifier
* [GetNetworkClientPolicy](docs/clients/README.md#getnetworkclientpolicy) - Return the policy assigned to a client on the network
* [GetNetworkClientSplashAuthorizationStatus](docs/clients/README.md#getnetworkclientsplashauthorizationstatus) - Return the splash authorization for a client, for each SSID they've associated with through splash
* [GetNetworkClientTrafficHistory](docs/clients/README.md#getnetworkclienttraffichistory) - Return the client's network traffic data over time
* [GetNetworkClientUsageHistory](docs/clients/README.md#getnetworkclientusagehistory) - Return the client's daily usage history
* [GetNetworkClients](docs/clients/README.md#getnetworkclients) - List the clients that have used this network in the timespan
* [GetNetworkClientsApplicationUsage](docs/clients/README.md#getnetworkclientsapplicationusage) - Return the application usage data for clients
* [GetNetworkClientsBandwidthUsageHistory](docs/clients/README.md#getnetworkclientsbandwidthusagehistory) - Returns a timeseries of total traffic consumption rates for all clients on a network within a given timespan, in megabits per second.
* [GetNetworkClientsOverview](docs/clients/README.md#getnetworkclientsoverview) - Return overview statistics for network clients
* [GetNetworkClientsUsageHistories](docs/clients/README.md#getnetworkclientsusagehistories) - Return the usage histories for clients
* [GetNetworkWirelessClientConnectionStats](docs/clients/README.md#getnetworkwirelessclientconnectionstats) - Aggregated connectivity info for a given client on this network
* [GetNetworkWirelessClientConnectivityEvents](docs/clients/README.md#getnetworkwirelessclientconnectivityevents) - List the wireless connectivity events for a client within a network in the timespan.
* [GetNetworkWirelessClientLatencyHistory](docs/clients/README.md#getnetworkwirelessclientlatencyhistory) - Return the latency history for a client
* [GetNetworkWirelessClientLatencyStats](docs/clients/README.md#getnetworkwirelessclientlatencystats) - Aggregated latency info for a given client on this network
* [GetNetworkWirelessClientsConnectionStats](docs/clients/README.md#getnetworkwirelessclientsconnectionstats) - Aggregated connectivity info for this network, grouped by clients
* [GetNetworkWirelessClientsLatencyStats](docs/clients/README.md#getnetworkwirelessclientslatencystats) - Aggregated latency info for this network, grouped by clients
* [GetOrganizationClientsBandwidthUsageHistory](docs/clients/README.md#getorganizationclientsbandwidthusagehistory) - Return data usage (in megabits per second) over time for all clients in the given organization within a given time range.
* [GetOrganizationClientsOverview](docs/clients/README.md#getorganizationclientsoverview) - Return summary information around client data usage (in mb) across the given organization.
* [GetOrganizationClientsSearch](docs/clients/README.md#getorganizationclientssearch) - Return the client details in an organization
* [GetOrganizationSummaryTopClientsByUsage](docs/clients/README.md#getorganizationsummarytopclientsbyusage) - Return metrics for organization's top 10 clients by data usage (in mb) over given time range.
* [GetOrganizationSummaryTopClientsManufacturersByUsage](docs/clients/README.md#getorganizationsummarytopclientsmanufacturersbyusage) - Return metrics for organization's top clients by data usage (in mb) over given time range, grouped by manufacturer.
* [ProvisionNetworkClients](docs/clients/README.md#provisionnetworkclients) - Provisions a client with a name and policy
* [UpdateNetworkClientPolicy](docs/clients/README.md#updatenetworkclientpolicy) - Update the policy assigned to a client on the network
* [UpdateNetworkClientSplashAuthorizationStatus](docs/clients/README.md#updatenetworkclientsplashauthorizationstatus) - Update a client's splash authorization

### [CloudMonitoring](docs/cloudmonitoring/README.md)

* [CreateOrganizationInventoryOnboardingCloudMonitoringExportEvent](docs/cloudmonitoring/README.md#createorganizationinventoryonboardingcloudmonitoringexportevent) - Imports event logs related to the onboarding app into elastisearch
* [CreateOrganizationInventoryOnboardingCloudMonitoringImport](docs/cloudmonitoring/README.md#createorganizationinventoryonboardingcloudmonitoringimport) - Commits the import operation to complete the onboarding of a device into Dashboard for monitoring.
* [CreateOrganizationInventoryOnboardingCloudMonitoringPrepare](docs/cloudmonitoring/README.md#createorganizationinventoryonboardingcloudmonitoringprepare) - Initiates or updates an import session
* [GetOrganizationInventoryOnboardingCloudMonitoringImports](docs/cloudmonitoring/README.md#getorganizationinventoryonboardingcloudmonitoringimports) - Check the status of a committed Import operation
* [GetOrganizationInventoryOnboardingCloudMonitoringNetworks](docs/cloudmonitoring/README.md#getorganizationinventoryonboardingcloudmonitoringnetworks) - Returns list of networks eligible for adding cloud monitored device

### [ConfigTemplates](docs/configtemplates/README.md)

* [CreateOrganizationConfigTemplate](docs/configtemplates/README.md#createorganizationconfigtemplate) - Create a new configuration template
* [DeleteOrganizationConfigTemplate](docs/configtemplates/README.md#deleteorganizationconfigtemplate) - Remove a configuration template
* [GetOrganizationConfigTemplate](docs/configtemplates/README.md#getorganizationconfigtemplate) - Return a single configuration template
* [GetOrganizationConfigTemplateSwitchProfilePort](docs/configtemplates/README.md#getorganizationconfigtemplateswitchprofileport) - Return a switch profile port
* [GetOrganizationConfigTemplateSwitchProfilePorts](docs/configtemplates/README.md#getorganizationconfigtemplateswitchprofileports) - Return all the ports of a switch profile
* [GetOrganizationConfigTemplateSwitchProfiles](docs/configtemplates/README.md#getorganizationconfigtemplateswitchprofiles) - List the switch profiles for your switch template configuration
* [GetOrganizationConfigTemplates](docs/configtemplates/README.md#getorganizationconfigtemplates) - List the configuration templates for this organization
* [UpdateOrganizationConfigTemplate](docs/configtemplates/README.md#updateorganizationconfigtemplate) - Update a configuration template
* [UpdateOrganizationConfigTemplateSwitchProfilePort](docs/configtemplates/README.md#updateorganizationconfigtemplateswitchprofileport) - Update a switch profile port

### [ConfigurationChanges](docs/configurationchanges/README.md)

* [GetOrganizationConfigurationChanges](docs/configurationchanges/README.md#getorganizationconfigurationchanges) - View the Change Log for your organization

### [Configure](docs/configure/README.md)

* [AddNetworkSwitchStack](docs/configure/README.md#addnetworkswitchstack) - Add a switch to a stack
* [AssignOrganizationLicensesSeats](docs/configure/README.md#assignorganizationlicensesseats) - Assign SM seats to a network
* [BindNetwork](docs/configure/README.md#bindnetwork) - Bind a network to a template.
* [CheckinNetworkSmDevices](docs/configure/README.md#checkinnetworksmdevices) - Force check-in a set of devices
* [ClaimIntoOrganization](docs/configure/README.md#claimintoorganization) - Claim a list of devices, licenses, and/or orders into an organization
* [ClaimIntoOrganizationInventory](docs/configure/README.md#claimintoorganizationinventory) - Claim a list of devices, licenses, and/or orders into an organization inventory
* [ClaimNetworkDevices](docs/configure/README.md#claimnetworkdevices) - Claim devices into a network. (Note: for recently claimed devices, it may take a few minutes for API requsts against that device to succeed)
* [CloneOrganization](docs/configure/README.md#cloneorganization) - Create a new organization by cloning the addressed organization
* [CloneOrganizationSwitchDevices](docs/configure/README.md#cloneorganizationswitchdevices) - Clone port-level and some switch-level configuration settings from a source switch to one or more target switches
* [CombineOrganizationNetworks](docs/configure/README.md#combineorganizationnetworks) - Combine multiple networks into a single network
* [CreateDeviceApplianceVmxAuthenticationToken](docs/configure/README.md#createdeviceappliancevmxauthenticationtoken) - Generate a new vMX authentication token
* [CreateDeviceSwitchRoutingInterface](docs/configure/README.md#createdeviceswitchroutinginterface) - Create a layer 3 interface for a switch
* [CreateDeviceSwitchRoutingStaticRoute](docs/configure/README.md#createdeviceswitchroutingstaticroute) - Create a layer 3 static route for a switch
* [CreateNetworkAppliancePrefixesDelegatedStatic](docs/configure/README.md#createnetworkapplianceprefixesdelegatedstatic) - Add a static delegated prefix from a network
* [CreateNetworkApplianceStaticRoute](docs/configure/README.md#createnetworkappliancestaticroute) - Add a static route for an MX or teleworker network
* [CreateNetworkApplianceTrafficShapingCustomPerformanceClass](docs/configure/README.md#createnetworkappliancetrafficshapingcustomperformanceclass) - Add a custom performance class for an MX network
* [CreateNetworkApplianceVlan](docs/configure/README.md#createnetworkappliancevlan) - Add a VLAN
* [CreateNetworkCameraQualityRetentionProfile](docs/configure/README.md#createnetworkcameraqualityretentionprofile) - Creates new quality retention profile for this network.
* [CreateNetworkCameraWirelessProfile](docs/configure/README.md#createnetworkcamerawirelessprofile) - Creates a new camera wireless profile for this network.
* [CreateNetworkFirmwareUpgradesRollback](docs/configure/README.md#createnetworkfirmwareupgradesrollback) - Rollback a Firmware Upgrade For A Network
* [CreateNetworkFirmwareUpgradesStagedEvent](docs/configure/README.md#createnetworkfirmwareupgradesstagedevent) - Create a Staged Upgrade Event for a network
* [CreateNetworkFirmwareUpgradesStagedGroup](docs/configure/README.md#createnetworkfirmwareupgradesstagedgroup) - Create a Staged Upgrade Group for a network
* [CreateNetworkFloorPlan](docs/configure/README.md#createnetworkfloorplan) - Upload a floor plan
* [CreateNetworkGroupPolicy](docs/configure/README.md#createnetworkgrouppolicy) - Create a group policy
* [CreateNetworkMerakiAuthUser](docs/configure/README.md#createnetworkmerakiauthuser) - Authorize a user configured with Meraki Authentication for a network (currently supports 802.1X, splash guest, and client VPN users, and currently, organizations have a 50,000 user cap)
* [CreateNetworkMqttBroker](docs/configure/README.md#createnetworkmqttbroker) - Add an MQTT broker
* [CreateNetworkPiiRequest](docs/configure/README.md#createnetworkpiirequest) - Submit a new delete or restrict processing PII request
* [CreateNetworkSensorAlertsProfile](docs/configure/README.md#createnetworksensoralertsprofile) - Creates a sensor alert profile for a network.
* [CreateNetworkSmBypassActivationLockAttempt](docs/configure/README.md#createnetworksmbypassactivationlockattempt) - Bypass activation lock attempt
* [CreateNetworkSmTargetGroup](docs/configure/README.md#createnetworksmtargetgroup) - Add a target group
* [CreateNetworkSwitchAccessPolicy](docs/configure/README.md#createnetworkswitchaccesspolicy) - Create an access policy for a switch network
* [CreateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServer](docs/configure/README.md#createnetworkswitchdhcpserverpolicyarpinspectiontrustedserver) - Add a server to be trusted by Dynamic ARP Inspection on this network
* [CreateNetworkSwitchLinkAggregation](docs/configure/README.md#createnetworkswitchlinkaggregation) - Create a link aggregation group
* [CreateNetworkSwitchPortSchedule](docs/configure/README.md#createnetworkswitchportschedule) - Add a switch port schedule
* [CreateNetworkSwitchQosRule](docs/configure/README.md#createnetworkswitchqosrule) - Add a quality of service rule
* [CreateNetworkSwitchRoutingMulticastRendezvousPoint](docs/configure/README.md#createnetworkswitchroutingmulticastrendezvouspoint) - Create a multicast rendezvous point
* [CreateNetworkSwitchStack](docs/configure/README.md#createnetworkswitchstack) - Create a stack
* [CreateNetworkSwitchStackRoutingInterface](docs/configure/README.md#createnetworkswitchstackroutinginterface) - Create a layer 3 interface for a switch stack
* [CreateNetworkSwitchStackRoutingStaticRoute](docs/configure/README.md#createnetworkswitchstackroutingstaticroute) - Create a layer 3 static route for a switch stack
* [CreateNetworkWebhooksHTTPServer](docs/configure/README.md#createnetworkwebhookshttpserver) - Add an HTTP server to a network
* [CreateNetworkWebhooksPayloadTemplate](docs/configure/README.md#createnetworkwebhookspayloadtemplate) - Create a webhook payload template for a network
* [CreateNetworkWebhooksWebhookTest](docs/configure/README.md#createnetworkwebhookswebhooktest) - Send a test webhook for a network
* [CreateNetworkWirelessRfProfile](docs/configure/README.md#createnetworkwirelessrfprofile) - Creates new RF profile for this network
* [CreateNetworkWirelessSsidIdentityPsk](docs/configure/README.md#createnetworkwirelessssididentitypsk) - Create an Identity PSK
* [CreateOrganization](docs/configure/README.md#createorganization) - Create a new organization
* [CreateOrganizationActionBatch](docs/configure/README.md#createorganizationactionbatch) - Create an action batch
* [CreateOrganizationAdaptivePolicyACL](docs/configure/README.md#createorganizationadaptivepolicyacl) - Creates new adaptive policy ACL
* [CreateOrganizationAdaptivePolicyGroup](docs/configure/README.md#createorganizationadaptivepolicygroup) - Creates a new adaptive policy group
* [CreateOrganizationAdaptivePolicyPolicy](docs/configure/README.md#createorganizationadaptivepolicypolicy) - Add an Adaptive Policy
* [CreateOrganizationAdmin](docs/configure/README.md#createorganizationadmin) - Create a new dashboard administrator
* [CreateOrganizationAlertsProfile](docs/configure/README.md#createorganizationalertsprofile) - Create an organization-wide alert configuration
* [CreateOrganizationBrandingPolicy](docs/configure/README.md#createorganizationbrandingpolicy) - Add a new branding policy to an organization
* [CreateOrganizationCameraCustomAnalyticsArtifact](docs/configure/README.md#createorganizationcameracustomanalyticsartifact) - Create custom analytics artifact
* [CreateOrganizationConfigTemplate](docs/configure/README.md#createorganizationconfigtemplate) - Create a new configuration template
* [CreateOrganizationEarlyAccessFeaturesOptIn](docs/configure/README.md#createorganizationearlyaccessfeaturesoptin) - Create a new early access feature opt-in for an organization
* [CreateOrganizationInsightMonitoredMediaServer](docs/configure/README.md#createorganizationinsightmonitoredmediaserver) - Add a media server to be monitored for this organization
* [CreateOrganizationInventoryOnboardingCloudMonitoringExportEvent](docs/configure/README.md#createorganizationinventoryonboardingcloudmonitoringexportevent) - Imports event logs related to the onboarding app into elastisearch
* [CreateOrganizationInventoryOnboardingCloudMonitoringImport](docs/configure/README.md#createorganizationinventoryonboardingcloudmonitoringimport) - Commits the import operation to complete the onboarding of a device into Dashboard for monitoring.
* [CreateOrganizationInventoryOnboardingCloudMonitoringPrepare](docs/configure/README.md#createorganizationinventoryonboardingcloudmonitoringprepare) - Initiates or updates an import session
* [CreateOrganizationNetwork](docs/configure/README.md#createorganizationnetwork) - Create a network
* [CreateOrganizationPolicyObject](docs/configure/README.md#createorganizationpolicyobject) - Creates a new Policy Object.
* [CreateOrganizationPolicyObjectsGroup](docs/configure/README.md#createorganizationpolicyobjectsgroup) - Creates a new Policy Object Group.
* [CreateOrganizationSamlIdp](docs/configure/README.md#createorganizationsamlidp) - Create a SAML IdP for your organization.
* [CreateOrganizationSamlRole](docs/configure/README.md#createorganizationsamlrole) - Create a SAML role
* [DeferNetworkFirmwareUpgradesStagedEvents](docs/configure/README.md#defernetworkfirmwareupgradesstagedevents) - Postpone by 1 week all pending staged upgrade stages for a network
* [DeleteDeviceSwitchRoutingInterface](docs/configure/README.md#deletedeviceswitchroutinginterface) - Delete a layer 3 interface from the switch
* [DeleteDeviceSwitchRoutingStaticRoute](docs/configure/README.md#deletedeviceswitchroutingstaticroute) - Delete a layer 3 static route for a switch
* [DeleteNetwork](docs/configure/README.md#deletenetwork) - Delete a network
* [DeleteNetworkAppliancePrefixesDelegatedStatic](docs/configure/README.md#deletenetworkapplianceprefixesdelegatedstatic) - Delete a static delegated prefix from a network
* [DeleteNetworkApplianceStaticRoute](docs/configure/README.md#deletenetworkappliancestaticroute) - Delete a static route from an MX or teleworker network
* [DeleteNetworkApplianceTrafficShapingCustomPerformanceClass](docs/configure/README.md#deletenetworkappliancetrafficshapingcustomperformanceclass) - Delete a custom performance class from an MX network
* [DeleteNetworkApplianceVlan](docs/configure/README.md#deletenetworkappliancevlan) - Delete a VLAN from a network
* [DeleteNetworkCameraQualityRetentionProfile](docs/configure/README.md#deletenetworkcameraqualityretentionprofile) - Delete an existing quality retention profile for this network.
* [DeleteNetworkCameraWirelessProfile](docs/configure/README.md#deletenetworkcamerawirelessprofile) - Delete an existing camera wireless profile for this network.
* [DeleteNetworkFirmwareUpgradesStagedGroup](docs/configure/README.md#deletenetworkfirmwareupgradesstagedgroup) - Delete a Staged Upgrade Group
* [DeleteNetworkFloorPlan](docs/configure/README.md#deletenetworkfloorplan) - Destroy a floor plan
* [DeleteNetworkGroupPolicy](docs/configure/README.md#deletenetworkgrouppolicy) - Delete a group policy
* [DeleteNetworkMerakiAuthUser](docs/configure/README.md#deletenetworkmerakiauthuser) - Deauthorize a user
* [DeleteNetworkMqttBroker](docs/configure/README.md#deletenetworkmqttbroker) - Delete an MQTT broker
* [DeleteNetworkPiiRequest](docs/configure/README.md#deletenetworkpiirequest) - Delete a restrict processing PII request
* [DeleteNetworkSensorAlertsProfile](docs/configure/README.md#deletenetworksensoralertsprofile) - Deletes a sensor alert profile from a network.
* [DeleteNetworkSmTargetGroup](docs/configure/README.md#deletenetworksmtargetgroup) - Delete a target group from a network
* [DeleteNetworkSmUserAccessDevice](docs/configure/README.md#deletenetworksmuseraccessdevice) - Delete a User Access Device
* [DeleteNetworkSwitchAccessPolicy](docs/configure/README.md#deletenetworkswitchaccesspolicy) - Delete an access policy for a switch network
* [DeleteNetworkSwitchDhcpServerPolicyArpInspectionTrustedServer](docs/configure/README.md#deletenetworkswitchdhcpserverpolicyarpinspectiontrustedserver) - Remove a server from being trusted by Dynamic ARP Inspection on this network
* [DeleteNetworkSwitchLinkAggregation](docs/configure/README.md#deletenetworkswitchlinkaggregation) - Split a link aggregation group into separate ports
* [DeleteNetworkSwitchPortSchedule](docs/configure/README.md#deletenetworkswitchportschedule) - Delete a switch port schedule
* [DeleteNetworkSwitchQosRule](docs/configure/README.md#deletenetworkswitchqosrule) - Delete a quality of service rule
* [DeleteNetworkSwitchRoutingMulticastRendezvousPoint](docs/configure/README.md#deletenetworkswitchroutingmulticastrendezvouspoint) - Delete a multicast rendezvous point
* [DeleteNetworkSwitchStack](docs/configure/README.md#deletenetworkswitchstack) - Delete a stack
* [DeleteNetworkSwitchStackRoutingInterface](docs/configure/README.md#deletenetworkswitchstackroutinginterface) - Delete a layer 3 interface from a switch stack
* [DeleteNetworkSwitchStackRoutingStaticRoute](docs/configure/README.md#deletenetworkswitchstackroutingstaticroute) - Delete a layer 3 static route for a switch stack
* [DeleteNetworkWebhooksHTTPServer](docs/configure/README.md#deletenetworkwebhookshttpserver) - Delete an HTTP server from a network
* [DeleteNetworkWebhooksPayloadTemplate](docs/configure/README.md#deletenetworkwebhookspayloadtemplate) - Destroy a webhook payload template for a network
* [DeleteNetworkWirelessRfProfile](docs/configure/README.md#deletenetworkwirelessrfprofile) - Delete a RF Profile
* [DeleteNetworkWirelessSsidIdentityPsk](docs/configure/README.md#deletenetworkwirelessssididentitypsk) - Delete an Identity PSK
* [DeleteOrganization](docs/configure/README.md#deleteorganization) - Delete an organization
* [DeleteOrganizationActionBatch](docs/configure/README.md#deleteorganizationactionbatch) - Delete an action batch
* [DeleteOrganizationAdaptivePolicyACL](docs/configure/README.md#deleteorganizationadaptivepolicyacl) - Deletes the specified adaptive policy ACL
* [DeleteOrganizationAdaptivePolicyGroup](docs/configure/README.md#deleteorganizationadaptivepolicygroup) - Deletes the specified adaptive policy group and any associated policies and references
* [DeleteOrganizationAdaptivePolicyPolicy](docs/configure/README.md#deleteorganizationadaptivepolicypolicy) - Delete an Adaptive Policy
* [DeleteOrganizationAdmin](docs/configure/README.md#deleteorganizationadmin) - Revoke all access for a dashboard administrator within this organization
* [DeleteOrganizationAlertsProfile](docs/configure/README.md#deleteorganizationalertsprofile) - Removes an organization-wide alert config
* [DeleteOrganizationBrandingPolicy](docs/configure/README.md#deleteorganizationbrandingpolicy) - Delete a branding policy
* [DeleteOrganizationCameraCustomAnalyticsArtifact](docs/configure/README.md#deleteorganizationcameracustomanalyticsartifact) - Delete Custom Analytics Artifact
* [DeleteOrganizationConfigTemplate](docs/configure/README.md#deleteorganizationconfigtemplate) - Remove a configuration template
* [DeleteOrganizationEarlyAccessFeaturesOptIn](docs/configure/README.md#deleteorganizationearlyaccessfeaturesoptin) - Delete an early access feature opt-in
* [DeleteOrganizationInsightMonitoredMediaServer](docs/configure/README.md#deleteorganizationinsightmonitoredmediaserver) - Delete a monitored media server from this organization
* [DeleteOrganizationPolicyObject](docs/configure/README.md#deleteorganizationpolicyobject) - Deletes a Policy Object.
* [DeleteOrganizationPolicyObjectsGroup](docs/configure/README.md#deleteorganizationpolicyobjectsgroup) - Deletes a Policy Object Group.
* [DeleteOrganizationSamlIdp](docs/configure/README.md#deleteorganizationsamlidp) - Remove a SAML IdP in your organization.
* [DeleteOrganizationSamlRole](docs/configure/README.md#deleteorganizationsamlrole) - Remove a SAML role
* [DeleteOrganizationUser](docs/configure/README.md#deleteorganizationuser) - Delete a user and all of its authentication methods.
* [GetDevice](docs/configure/README.md#getdevice) - Return a single device
* [GetDeviceApplianceUplinksSettings](docs/configure/README.md#getdeviceapplianceuplinkssettings) - Return the uplink settings for an MX appliance
* [GetDeviceCameraCustomAnalytics](docs/configure/README.md#getdevicecameracustomanalytics) - Return custom analytics settings for a camera
* [GetDeviceCameraQualityAndRetention](docs/configure/README.md#getdevicecameraqualityandretention) - Returns quality and retention settings for the given camera
* [GetDeviceCameraSense](docs/configure/README.md#getdevicecamerasense) - Returns sense settings for a given camera
* [GetDeviceCameraSenseObjectDetectionModels](docs/configure/README.md#getdevicecamerasenseobjectdetectionmodels) - Returns the MV Sense object detection model list for the given camera
* [GetDeviceCameraVideoLink](docs/configure/README.md#getdevicecameravideolink) - Returns video link to the specified camera
* [GetDeviceCameraVideoSettings](docs/configure/README.md#getdevicecameravideosettings) - Returns video settings for the given camera
* [GetDeviceCameraWirelessProfiles](docs/configure/README.md#getdevicecamerawirelessprofiles) - Returns wireless profile assigned to the given camera
* [GetDeviceCellularGatewayLan](docs/configure/README.md#getdevicecellulargatewaylan) - Show the LAN Settings of a MG
* [GetDeviceCellularGatewayPortForwardingRules](docs/configure/README.md#getdevicecellulargatewayportforwardingrules) - Returns the port forwarding rules for a single MG.
* [GetDeviceCellularSims](docs/configure/README.md#getdevicecellularsims) - Return the SIM and APN configurations for a cellular device.
* [GetDeviceManagementInterface](docs/configure/README.md#getdevicemanagementinterface) - Return the management interface settings for a device
* [GetDeviceSensorRelationships](docs/configure/README.md#getdevicesensorrelationships) - List the sensor roles for a given sensor or camera device.
* [GetDeviceSwitchPort](docs/configure/README.md#getdeviceswitchport) - Return a switch port
* [GetDeviceSwitchPorts](docs/configure/README.md#getdeviceswitchports) - List the switch ports for a switch
* [GetDeviceSwitchRoutingInterface](docs/configure/README.md#getdeviceswitchroutinginterface) - Return a layer 3 interface for a switch
* [GetDeviceSwitchRoutingInterfaceDhcp](docs/configure/README.md#getdeviceswitchroutinginterfacedhcp) - Return a layer 3 interface DHCP configuration for a switch
* [GetDeviceSwitchRoutingInterfaces](docs/configure/README.md#getdeviceswitchroutinginterfaces) - List layer 3 interfaces for a switch
* [GetDeviceSwitchRoutingStaticRoute](docs/configure/README.md#getdeviceswitchroutingstaticroute) - Return a layer 3 static route for a switch
* [GetDeviceSwitchRoutingStaticRoutes](docs/configure/README.md#getdeviceswitchroutingstaticroutes) - List layer 3 static routes for a switch
* [GetDeviceSwitchWarmSpare](docs/configure/README.md#getdeviceswitchwarmspare) - Return warm spare configuration for a switch
* [GetDeviceWirelessBluetoothSettings](docs/configure/README.md#getdevicewirelessbluetoothsettings) - Return the bluetooth settings for a wireless device
* [GetDeviceWirelessRadioSettings](docs/configure/README.md#getdevicewirelessradiosettings) - Return the radio settings of a device
* [GetNetwork](docs/configure/README.md#getnetwork) - Return a network
* [GetNetworkAlertsSettings](docs/configure/README.md#getnetworkalertssettings) - Return the alert configuration for this network
* [GetNetworkApplianceConnectivityMonitoringDestinations](docs/configure/README.md#getnetworkapplianceconnectivitymonitoringdestinations) - Return the connectivity testing destinations for an MX network
* [GetNetworkApplianceContentFiltering](docs/configure/README.md#getnetworkappliancecontentfiltering) - Return the content filtering settings for an MX network
* [GetNetworkApplianceContentFilteringCategories](docs/configure/README.md#getnetworkappliancecontentfilteringcategories) - List all available content filtering categories for an MX network
* [GetNetworkApplianceFirewallCellularFirewallRules](docs/configure/README.md#getnetworkappliancefirewallcellularfirewallrules) - Return the cellular firewall rules for an MX network
* [GetNetworkApplianceFirewallFirewalledService](docs/configure/README.md#getnetworkappliancefirewallfirewalledservice) - Return the accessibility settings of the given service ('ICMP', 'web', or 'SNMP')
* [GetNetworkApplianceFirewallFirewalledServices](docs/configure/README.md#getnetworkappliancefirewallfirewalledservices) - List the appliance services and their accessibility rules
* [GetNetworkApplianceFirewallInboundCellularFirewallRules](docs/configure/README.md#getnetworkappliancefirewallinboundcellularfirewallrules) - Return the inbound cellular firewall rules for an MX network
* [GetNetworkApplianceFirewallInboundFirewallRules](docs/configure/README.md#getnetworkappliancefirewallinboundfirewallrules) - Return the inbound firewall rules for an MX network
* [GetNetworkApplianceFirewallL3FirewallRules](docs/configure/README.md#getnetworkappliancefirewalll3firewallrules) - Return the L3 firewall rules for an MX network
* [GetNetworkApplianceFirewallL7FirewallRules](docs/configure/README.md#getnetworkappliancefirewalll7firewallrules) - List the MX L7 firewall rules for an MX network
* [GetNetworkApplianceFirewallL7FirewallRulesApplicationCategories](docs/configure/README.md#getnetworkappliancefirewalll7firewallrulesapplicationcategories) - Return the L7 firewall application categories and their associated applications for an MX network
* [GetNetworkApplianceFirewallOneToManyNatRules](docs/configure/README.md#getnetworkappliancefirewallonetomanynatrules) - Return the 1:Many NAT mapping rules for an MX network
* [GetNetworkApplianceFirewallOneToOneNatRules](docs/configure/README.md#getnetworkappliancefirewallonetoonenatrules) - Return the 1:1 NAT mapping rules for an MX network
* [GetNetworkApplianceFirewallPortForwardingRules](docs/configure/README.md#getnetworkappliancefirewallportforwardingrules) - Return the port forwarding rules for an MX network
* [GetNetworkApplianceFirewallSettings](docs/configure/README.md#getnetworkappliancefirewallsettings) - Return the firewall settings for this network
* [GetNetworkAppliancePort](docs/configure/README.md#getnetworkapplianceport) - Return per-port VLAN settings for a single MX port.
* [GetNetworkAppliancePorts](docs/configure/README.md#getnetworkapplianceports) - List per-port VLAN settings for all ports of a MX.
* [GetNetworkAppliancePrefixesDelegatedStatic](docs/configure/README.md#getnetworkapplianceprefixesdelegatedstatic) - Return a static delegated prefix from a network
* [GetNetworkAppliancePrefixesDelegatedStatics](docs/configure/README.md#getnetworkapplianceprefixesdelegatedstatics) - List static delegated prefixes for a network
* [GetNetworkApplianceSecurityIntrusion](docs/configure/README.md#getnetworkappliancesecurityintrusion) - Returns all supported intrusion settings for an MX network
* [GetNetworkApplianceSecurityMalware](docs/configure/README.md#getnetworkappliancesecuritymalware) - Returns all supported malware settings for an MX network
* [GetNetworkApplianceSettings](docs/configure/README.md#getnetworkappliancesettings) - Return the appliance settings for a network
* [GetNetworkApplianceSingleLan](docs/configure/README.md#getnetworkappliancesinglelan) - Return single LAN configuration
* [GetNetworkApplianceSsid](docs/configure/README.md#getnetworkappliancessid) - Return a single MX SSID
* [GetNetworkApplianceSsids](docs/configure/README.md#getnetworkappliancessids) - List the MX SSIDs in a network
* [GetNetworkApplianceStaticRoute](docs/configure/README.md#getnetworkappliancestaticroute) - Return a static route for an MX or teleworker network
* [GetNetworkApplianceStaticRoutes](docs/configure/README.md#getnetworkappliancestaticroutes) - List the static routes for an MX or teleworker network
* [GetNetworkApplianceTrafficShaping](docs/configure/README.md#getnetworkappliancetrafficshaping) - Display the traffic shaping settings for an MX network
* [GetNetworkApplianceTrafficShapingCustomPerformanceClass](docs/configure/README.md#getnetworkappliancetrafficshapingcustomperformanceclass) - Return a custom performance class for an MX network
* [GetNetworkApplianceTrafficShapingCustomPerformanceClasses](docs/configure/README.md#getnetworkappliancetrafficshapingcustomperformanceclasses) - List all custom performance classes for an MX network
* [GetNetworkApplianceTrafficShapingRules](docs/configure/README.md#getnetworkappliancetrafficshapingrules) - Display the traffic shaping settings rules for an MX network
* [GetNetworkApplianceTrafficShapingUplinkBandwidth](docs/configure/README.md#getnetworkappliancetrafficshapinguplinkbandwidth) - Returns the uplink bandwidth limits for your MX network
* [GetNetworkApplianceTrafficShapingUplinkSelection](docs/configure/README.md#getnetworkappliancetrafficshapinguplinkselection) - Show uplink selection settings for an MX network
* [GetNetworkApplianceVlan](docs/configure/README.md#getnetworkappliancevlan) - Return a VLAN
* [GetNetworkApplianceVlans](docs/configure/README.md#getnetworkappliancevlans) - List the VLANs for an MX network
* [GetNetworkApplianceVlansSettings](docs/configure/README.md#getnetworkappliancevlanssettings) - Returns the enabled status of VLANs for the network
* [GetNetworkApplianceVpnBgp](docs/configure/README.md#getnetworkappliancevpnbgp) - Return a Hub BGP Configuration
* [GetNetworkApplianceVpnSiteToSiteVpn](docs/configure/README.md#getnetworkappliancevpnsitetositevpn) - Return the site-to-site VPN settings of a network
* [GetNetworkApplianceWarmSpare](docs/configure/README.md#getnetworkappliancewarmspare) - Return MX warm spare settings
* [GetNetworkCameraQualityRetentionProfile](docs/configure/README.md#getnetworkcameraqualityretentionprofile) - Retrieve a single quality retention profile
* [GetNetworkCameraQualityRetentionProfiles](docs/configure/README.md#getnetworkcameraqualityretentionprofiles) - List the quality retention profiles for this network
* [GetNetworkCameraSchedules](docs/configure/README.md#getnetworkcameraschedules) - Returns a list of all camera recording schedules.
* [GetNetworkCameraWirelessProfile](docs/configure/README.md#getnetworkcamerawirelessprofile) - Retrieve a single camera wireless profile.
* [GetNetworkCameraWirelessProfiles](docs/configure/README.md#getnetworkcamerawirelessprofiles) - List the camera wireless profiles for this network.
* [GetNetworkCellularGatewayConnectivityMonitoringDestinations](docs/configure/README.md#getnetworkcellulargatewayconnectivitymonitoringdestinations) - Return the connectivity testing destinations for an MG network
* [GetNetworkCellularGatewayDhcp](docs/configure/README.md#getnetworkcellulargatewaydhcp) - List common DHCP settings of MGs
* [GetNetworkCellularGatewaySubnetPool](docs/configure/README.md#getnetworkcellulargatewaysubnetpool) - Return the subnet pool and mask configured for MGs in the network.
* [GetNetworkCellularGatewayUplink](docs/configure/README.md#getnetworkcellulargatewayuplink) - Returns the uplink settings for your MG network.
* [GetNetworkClientPolicy](docs/configure/README.md#getnetworkclientpolicy) - Return the policy assigned to a client on the network
* [GetNetworkClientSplashAuthorizationStatus](docs/configure/README.md#getnetworkclientsplashauthorizationstatus) - Return the splash authorization for a client, for each SSID they've associated with through splash
* [GetNetworkDevices](docs/configure/README.md#getnetworkdevices) - List the devices in a network
* [GetNetworkFirmwareUpgrades](docs/configure/README.md#getnetworkfirmwareupgrades) - Get firmware upgrade information for a network
* [GetNetworkFirmwareUpgradesStagedEvents](docs/configure/README.md#getnetworkfirmwareupgradesstagedevents) - Get the Staged Upgrade Event from a network
* [GetNetworkFirmwareUpgradesStagedGroup](docs/configure/README.md#getnetworkfirmwareupgradesstagedgroup) - Get a Staged Upgrade Group from a network
* [GetNetworkFirmwareUpgradesStagedGroups](docs/configure/README.md#getnetworkfirmwareupgradesstagedgroups) - List of Staged Upgrade Groups in a network
* [GetNetworkFirmwareUpgradesStagedStages](docs/configure/README.md#getnetworkfirmwareupgradesstagedstages) - Order of Staged Upgrade Groups in a network
* [GetNetworkFloorPlan](docs/configure/README.md#getnetworkfloorplan) - Find a floor plan by ID
* [GetNetworkFloorPlans](docs/configure/README.md#getnetworkfloorplans) - List the floor plans that belong to your network
* [GetNetworkGroupPolicies](docs/configure/README.md#getnetworkgrouppolicies) - List the group policies in a network
* [GetNetworkGroupPolicy](docs/configure/README.md#getnetworkgrouppolicy) - Display a group policy
* [GetNetworkHealthAlerts](docs/configure/README.md#getnetworkhealthalerts) - Return all global alerts on this network
* [GetNetworkMerakiAuthUser](docs/configure/README.md#getnetworkmerakiauthuser) - Return the Meraki Auth splash guest, RADIUS, or client VPN user
* [GetNetworkMerakiAuthUsers](docs/configure/README.md#getnetworkmerakiauthusers) - List the users configured under Meraki Authentication for a network (splash guest or RADIUS users for a wireless network, or client VPN users for a wired network)
* [GetNetworkMqttBroker](docs/configure/README.md#getnetworkmqttbroker) - Return an MQTT broker
* [GetNetworkMqttBrokers](docs/configure/README.md#getnetworkmqttbrokers) - List the MQTT brokers for this network
* [GetNetworkNetflow](docs/configure/README.md#getnetworknetflow) - Return the NetFlow traffic reporting settings for a network
* [GetNetworkPiiPiiKeys](docs/configure/README.md#getnetworkpiipiikeys) - List the keys required to access Personally Identifiable Information (PII) for a given identifier
* [GetNetworkPiiRequest](docs/configure/README.md#getnetworkpiirequest) - Return a PII request
* [GetNetworkPiiRequests](docs/configure/README.md#getnetworkpiirequests) - List the PII requests for this network or organization
* [GetNetworkPiiSmDevicesForKey](docs/configure/README.md#getnetworkpiismdevicesforkey) - Given a piece of Personally Identifiable Information (PII), return the Systems Manager device ID(s) associated with that identifier
* [GetNetworkPiiSmOwnersForKey](docs/configure/README.md#getnetworkpiismownersforkey) - Given a piece of Personally Identifiable Information (PII), return the Systems Manager owner ID(s) associated with that identifier
* [GetNetworkPoliciesByClient](docs/configure/README.md#getnetworkpoliciesbyclient) - Get policies for all clients with policies
* [GetNetworkSensorAlertsProfile](docs/configure/README.md#getnetworksensoralertsprofile) - Show details of a sensor alert profile for a network.
* [GetNetworkSensorAlertsProfiles](docs/configure/README.md#getnetworksensoralertsprofiles) - Lists all sensor alert profiles for a network.
* [GetNetworkSensorRelationships](docs/configure/README.md#getnetworksensorrelationships) - List the sensor roles for devices in a given network
* [GetNetworkSettings](docs/configure/README.md#getnetworksettings) - Return the settings for a network
* [GetNetworkSmBypassActivationLockAttempt](docs/configure/README.md#getnetworksmbypassactivationlockattempt) - Bypass activation lock attempt status
* [GetNetworkSmDeviceCerts](docs/configure/README.md#getnetworksmdevicecerts) - List the certs on a device
* [GetNetworkSmDeviceDeviceProfiles](docs/configure/README.md#getnetworksmdevicedeviceprofiles) - Get the installed profiles associated with a device
* [GetNetworkSmDeviceNetworkAdapters](docs/configure/README.md#getnetworksmdevicenetworkadapters) - List the network adapters of a device
* [GetNetworkSmDeviceRestrictions](docs/configure/README.md#getnetworksmdevicerestrictions) - List the restrictions on a device
* [GetNetworkSmDeviceSecurityCenters](docs/configure/README.md#getnetworksmdevicesecuritycenters) - List the security centers on a device
* [GetNetworkSmDeviceSoftwares](docs/configure/README.md#getnetworksmdevicesoftwares) - Get a list of softwares associated with a device
* [GetNetworkSmDeviceWlanLists](docs/configure/README.md#getnetworksmdevicewlanlists) - List the saved SSID names on a device
* [GetNetworkSmDevices](docs/configure/README.md#getnetworksmdevices) - List the devices enrolled in an SM network with various specified fields and filters
* [GetNetworkSmProfiles](docs/configure/README.md#getnetworksmprofiles) - List all profiles in a network
* [GetNetworkSmTargetGroup](docs/configure/README.md#getnetworksmtargetgroup) - Return a target group
* [GetNetworkSmTargetGroups](docs/configure/README.md#getnetworksmtargetgroups) - List the target groups in this network
* [GetNetworkSmTrustedAccessConfigs](docs/configure/README.md#getnetworksmtrustedaccessconfigs) - List Trusted Access Configs
* [GetNetworkSmUserAccessDevices](docs/configure/README.md#getnetworksmuseraccessdevices) - List User Access Devices and its Trusted Access Connections
* [GetNetworkSmUserDeviceProfiles](docs/configure/README.md#getnetworksmuserdeviceprofiles) - Get the profiles associated with a user
* [GetNetworkSmUserSoftwares](docs/configure/README.md#getnetworksmusersoftwares) - Get a list of softwares associated with a user
* [GetNetworkSmUsers](docs/configure/README.md#getnetworksmusers) - List the owners in an SM network with various specified fields and filters
* [GetNetworkSnmp](docs/configure/README.md#getnetworksnmp) - Return the SNMP settings for a network
* [GetNetworkSwitchAccessControlLists](docs/configure/README.md#getnetworkswitchaccesscontrollists) - Return the access control lists for a MS network
* [GetNetworkSwitchAccessPolicies](docs/configure/README.md#getnetworkswitchaccesspolicies) - List the access policies for a switch network
* [GetNetworkSwitchAccessPolicy](docs/configure/README.md#getnetworkswitchaccesspolicy) - Return a specific access policy for a switch network
* [GetNetworkSwitchAlternateManagementInterface](docs/configure/README.md#getnetworkswitchalternatemanagementinterface) - Return the switch alternate management interface for the network
* [GetNetworkSwitchDhcpServerPolicy](docs/configure/README.md#getnetworkswitchdhcpserverpolicy) - Return the DHCP server settings
* [GetNetworkSwitchDhcpServerPolicyArpInspectionTrustedServers](docs/configure/README.md#getnetworkswitchdhcpserverpolicyarpinspectiontrustedservers) - Return the list of servers trusted by Dynamic ARP Inspection on this network
* [GetNetworkSwitchDhcpServerPolicyArpInspectionWarningsByDevice](docs/configure/README.md#getnetworkswitchdhcpserverpolicyarpinspectionwarningsbydevice) - Return the devices that have a Dynamic ARP Inspection warning and their warnings
* [GetNetworkSwitchDhcpV4ServersSeen](docs/configure/README.md#getnetworkswitchdhcpv4serversseen) - Return the network's DHCPv4 servers seen within the selected timeframe (default 1 day)
* [GetNetworkSwitchDscpToCosMappings](docs/configure/README.md#getnetworkswitchdscptocosmappings) - Return the DSCP to CoS mappings
* [GetNetworkSwitchLinkAggregations](docs/configure/README.md#getnetworkswitchlinkaggregations) - List link aggregation groups
* [GetNetworkSwitchMtu](docs/configure/README.md#getnetworkswitchmtu) - Return the MTU configuration
* [GetNetworkSwitchPortSchedules](docs/configure/README.md#getnetworkswitchportschedules) - List switch port schedules
* [GetNetworkSwitchQosRule](docs/configure/README.md#getnetworkswitchqosrule) - Return a quality of service rule
* [GetNetworkSwitchQosRules](docs/configure/README.md#getnetworkswitchqosrules) - List quality of service rules
* [GetNetworkSwitchQosRulesOrder](docs/configure/README.md#getnetworkswitchqosrulesorder) - Return the quality of service rule IDs by order in which they will be processed by the switch
* [GetNetworkSwitchRoutingMulticast](docs/configure/README.md#getnetworkswitchroutingmulticast) - Return multicast settings for a network
* [GetNetworkSwitchRoutingMulticastRendezvousPoint](docs/configure/README.md#getnetworkswitchroutingmulticastrendezvouspoint) - Return a multicast rendezvous point
* [GetNetworkSwitchRoutingMulticastRendezvousPoints](docs/configure/README.md#getnetworkswitchroutingmulticastrendezvouspoints) - List multicast rendezvous points
* [GetNetworkSwitchRoutingOspf](docs/configure/README.md#getnetworkswitchroutingospf) - Return layer 3 OSPF routing configuration
* [GetNetworkSwitchSettings](docs/configure/README.md#getnetworkswitchsettings) - Returns the switch network settings
* [GetNetworkSwitchStack](docs/configure/README.md#getnetworkswitchstack) - Show a switch stack
* [GetNetworkSwitchStackRoutingInterface](docs/configure/README.md#getnetworkswitchstackroutinginterface) - Return a layer 3 interface from a switch stack
* [GetNetworkSwitchStackRoutingInterfaceDhcp](docs/configure/README.md#getnetworkswitchstackroutinginterfacedhcp) - Return a layer 3 interface DHCP configuration for a switch stack
* [GetNetworkSwitchStackRoutingInterfaces](docs/configure/README.md#getnetworkswitchstackroutinginterfaces) - List layer 3 interfaces for a switch stack
* [GetNetworkSwitchStackRoutingStaticRoute](docs/configure/README.md#getnetworkswitchstackroutingstaticroute) - Return a layer 3 static route for a switch stack
* [GetNetworkSwitchStackRoutingStaticRoutes](docs/configure/README.md#getnetworkswitchstackroutingstaticroutes) - List layer 3 static routes for a switch stack
* [GetNetworkSwitchStacks](docs/configure/README.md#getnetworkswitchstacks) - List the switch stacks in a network
* [GetNetworkSwitchStormControl](docs/configure/README.md#getnetworkswitchstormcontrol) - Return the storm control configuration for a switch network
* [GetNetworkSwitchStp](docs/configure/README.md#getnetworkswitchstp) - Returns STP settings
* [GetNetworkSyslogServers](docs/configure/README.md#getnetworksyslogservers) - List the syslog servers for a network
* [GetNetworkTrafficAnalysis](docs/configure/README.md#getnetworktrafficanalysis) - Return the traffic analysis settings for a network
* [GetNetworkTrafficShapingApplicationCategories](docs/configure/README.md#getnetworktrafficshapingapplicationcategories) - Returns the application categories for traffic shaping rules.
* [GetNetworkTrafficShapingDscpTaggingOptions](docs/configure/README.md#getnetworktrafficshapingdscptaggingoptions) - Returns the available DSCP tagging options for your traffic shaping rules.
* [GetNetworkWebhooksHTTPServer](docs/configure/README.md#getnetworkwebhookshttpserver) - Return an HTTP server for a network
* [GetNetworkWebhooksHTTPServers](docs/configure/README.md#getnetworkwebhookshttpservers) - List the HTTP servers for a network
* [GetNetworkWebhooksPayloadTemplate](docs/configure/README.md#getnetworkwebhookspayloadtemplate) - Get the webhook payload template for a network
* [GetNetworkWebhooksPayloadTemplates](docs/configure/README.md#getnetworkwebhookspayloadtemplates) - List the webhook payload templates for a network
* [GetNetworkWebhooksWebhookTest](docs/configure/README.md#getnetworkwebhookswebhooktest) - Return the status of a webhook test for a network
* [GetNetworkWirelessAlternateManagementInterface](docs/configure/README.md#getnetworkwirelessalternatemanagementinterface) - Return alternate management interface and devices with IP assigned
* [GetNetworkWirelessBilling](docs/configure/README.md#getnetworkwirelessbilling) - Return the billing settings of this network
* [GetNetworkWirelessBluetoothSettings](docs/configure/README.md#getnetworkwirelessbluetoothsettings) - Return the Bluetooth settings for a network. <a href="https://documentation.meraki.com/MR/Bluetooth/Bluetooth_Low_Energy_(BLE)">Bluetooth settings</a> must be enabled on the network.
* [GetNetworkWirelessRfProfile](docs/configure/README.md#getnetworkwirelessrfprofile) - Return a RF profile
* [GetNetworkWirelessRfProfiles](docs/configure/README.md#getnetworkwirelessrfprofiles) - List the non-basic RF profiles for this network
* [GetNetworkWirelessSettings](docs/configure/README.md#getnetworkwirelesssettings) - Return the wireless settings for a network
* [GetNetworkWirelessSsid](docs/configure/README.md#getnetworkwirelessssid) - Return a single MR SSID
* [GetNetworkWirelessSsidBonjourForwarding](docs/configure/README.md#getnetworkwirelessssidbonjourforwarding) - List the Bonjour forwarding setting and rules for the SSID
* [GetNetworkWirelessSsidDeviceTypeGroupPolicies](docs/configure/README.md#getnetworkwirelessssiddevicetypegrouppolicies) - List the device type group policies for the SSID
* [GetNetworkWirelessSsidEapOverride](docs/configure/README.md#getnetworkwirelessssideapoverride) - Return the EAP overridden parameters for an SSID
* [GetNetworkWirelessSsidFirewallL3FirewallRules](docs/configure/README.md#getnetworkwirelessssidfirewalll3firewallrules) - Return the L3 firewall rules for an SSID on an MR network
* [GetNetworkWirelessSsidFirewallL7FirewallRules](docs/configure/README.md#getnetworkwirelessssidfirewalll7firewallrules) - Return the L7 firewall rules for an SSID on an MR network
* [GetNetworkWirelessSsidHotspot20](docs/configure/README.md#getnetworkwirelessssidhotspot20) - Return the Hotspot 2.0 settings for an SSID
* [GetNetworkWirelessSsidIdentityPsk](docs/configure/README.md#getnetworkwirelessssididentitypsk) - Return an Identity PSK
* [GetNetworkWirelessSsidIdentityPsks](docs/configure/README.md#getnetworkwirelessssididentitypsks) - List all Identity PSKs in a wireless network
* [GetNetworkWirelessSsidSchedules](docs/configure/README.md#getnetworkwirelessssidschedules) - List the outage schedule for the SSID
* [GetNetworkWirelessSsidSplashSettings](docs/configure/README.md#getnetworkwirelessssidsplashsettings) - Display the splash page settings for the given SSID
* [GetNetworkWirelessSsidTrafficShapingRules](docs/configure/README.md#getnetworkwirelessssidtrafficshapingrules) - Display the traffic shaping settings for a SSID on an MR network
* [GetNetworkWirelessSsidVpn](docs/configure/README.md#getnetworkwirelessssidvpn) - List the VPN settings for the SSID.
* [GetNetworkWirelessSsids](docs/configure/README.md#getnetworkwirelessssids) - List the MR SSIDs in a network
* [GetOrganization](docs/configure/README.md#getorganization) - Return an organization
* [GetOrganizationActionBatch](docs/configure/README.md#getorganizationactionbatch) - Return an action batch
* [GetOrganizationActionBatches](docs/configure/README.md#getorganizationactionbatches) - Return the list of action batches in the organization
* [GetOrganizationAdaptivePolicyACL](docs/configure/README.md#getorganizationadaptivepolicyacl) - Returns the adaptive policy ACL information
* [GetOrganizationAdaptivePolicyAcls](docs/configure/README.md#getorganizationadaptivepolicyacls) - List adaptive policy ACLs in a organization
* [GetOrganizationAdaptivePolicyGroup](docs/configure/README.md#getorganizationadaptivepolicygroup) - Returns an adaptive policy group
* [GetOrganizationAdaptivePolicyGroups](docs/configure/README.md#getorganizationadaptivepolicygroups) - List adaptive policy groups in a organization
* [GetOrganizationAdaptivePolicyPolicies](docs/configure/README.md#getorganizationadaptivepolicypolicies) - List adaptive policies in an organization
* [GetOrganizationAdaptivePolicyPolicy](docs/configure/README.md#getorganizationadaptivepolicypolicy) - Return an adaptive policy
* [GetOrganizationAdaptivePolicySettings](docs/configure/README.md#getorganizationadaptivepolicysettings) - Returns global adaptive policy settings in an organization
* [GetOrganizationAdmins](docs/configure/README.md#getorganizationadmins) - List the dashboard administrators in this organization
* [GetOrganizationAlertsProfiles](docs/configure/README.md#getorganizationalertsprofiles) - List all organization-wide alert configurations
* [GetOrganizationApplianceSecurityIntrusion](docs/configure/README.md#getorganizationappliancesecurityintrusion) - Returns all supported intrusion settings for an organization
* [GetOrganizationApplianceVPNThirdPartyVPNPeers](docs/configure/README.md#getorganizationappliancevpnthirdpartyvpnpeers) - Return the third party VPN peers for an organization
* [GetOrganizationApplianceVpnVpnFirewallRules](docs/configure/README.md#getorganizationappliancevpnvpnfirewallrules) - Return the firewall rules for an organization's site-to-site VPN
* [GetOrganizationBrandingPolicies](docs/configure/README.md#getorganizationbrandingpolicies) - List the branding policies of an organization
* [GetOrganizationBrandingPoliciesPriorities](docs/configure/README.md#getorganizationbrandingpoliciespriorities) - Return the branding policy IDs of an organization in priority order
* [GetOrganizationBrandingPolicy](docs/configure/README.md#getorganizationbrandingpolicy) - Return a branding policy
* [GetOrganizationCameraCustomAnalyticsArtifact](docs/configure/README.md#getorganizationcameracustomanalyticsartifact) - Get Custom Analytics Artifact
* [GetOrganizationCameraCustomAnalyticsArtifacts](docs/configure/README.md#getorganizationcameracustomanalyticsartifacts) - List Custom Analytics Artifacts
* [GetOrganizationCameraOnboardingStatuses](docs/configure/README.md#getorganizationcameraonboardingstatuses) - Fetch onboarding status of cameras
* [GetOrganizationClientsSearch](docs/configure/README.md#getorganizationclientssearch) - Return the client details in an organization
* [GetOrganizationConfigTemplate](docs/configure/README.md#getorganizationconfigtemplate) - Return a single configuration template
* [GetOrganizationConfigTemplateSwitchProfilePort](docs/configure/README.md#getorganizationconfigtemplateswitchprofileport) - Return a switch profile port
* [GetOrganizationConfigTemplateSwitchProfilePorts](docs/configure/README.md#getorganizationconfigtemplateswitchprofileports) - Return all the ports of a switch profile
* [GetOrganizationConfigTemplateSwitchProfiles](docs/configure/README.md#getorganizationconfigtemplateswitchprofiles) - List the switch profiles for your switch template configuration
* [GetOrganizationConfigTemplates](docs/configure/README.md#getorganizationconfigtemplates) - List the configuration templates for this organization
* [GetOrganizationDevices](docs/configure/README.md#getorganizationdevices) - List the devices in an organization
* [GetOrganizationEarlyAccessFeatures](docs/configure/README.md#getorganizationearlyaccessfeatures) - List the available early access features for organization
* [GetOrganizationEarlyAccessFeaturesOptIn](docs/configure/README.md#getorganizationearlyaccessfeaturesoptin) - Show an early access feature opt-in for an organization
* [GetOrganizationEarlyAccessFeaturesOptIns](docs/configure/README.md#getorganizationearlyaccessfeaturesoptins) - List the early access feature opt-ins for an organization
* [GetOrganizationFirmwareUpgrades](docs/configure/README.md#getorganizationfirmwareupgrades) - Get firmware upgrade information for an organization
* [GetOrganizationFirmwareUpgradesByDevice](docs/configure/README.md#getorganizationfirmwareupgradesbydevice) - Get firmware upgrade status for the filtered devices
* [GetOrganizationInsightApplications](docs/configure/README.md#getorganizationinsightapplications) - List all Insight tracked applications
* [GetOrganizationInsightMonitoredMediaServer](docs/configure/README.md#getorganizationinsightmonitoredmediaserver) - Return a monitored media server for this organization
* [GetOrganizationInsightMonitoredMediaServers](docs/configure/README.md#getorganizationinsightmonitoredmediaservers) - List the monitored media servers for this organization
* [GetOrganizationInventoryDevice](docs/configure/README.md#getorganizationinventorydevice) - Return a single device from the inventory of an organization
* [GetOrganizationInventoryDevices](docs/configure/README.md#getorganizationinventorydevices) - Return the device inventory for an organization
* [GetOrganizationInventoryOnboardingCloudMonitoringImports](docs/configure/README.md#getorganizationinventoryonboardingcloudmonitoringimports) - Check the status of a committed Import operation
* [GetOrganizationInventoryOnboardingCloudMonitoringNetworks](docs/configure/README.md#getorganizationinventoryonboardingcloudmonitoringnetworks) - Returns list of networks eligible for adding cloud monitored device
* [GetOrganizationLicense](docs/configure/README.md#getorganizationlicense) - Display a license
* [GetOrganizationLicenses](docs/configure/README.md#getorganizationlicenses) - List the licenses for an organization
* [GetOrganizationLicensingCotermLicenses](docs/configure/README.md#getorganizationlicensingcotermlicenses) - List the licenses in a coterm organization
* [GetOrganizationLoginSecurity](docs/configure/README.md#getorganizationloginsecurity) - Returns the login security settings for an organization.
* [GetOrganizationNetworks](docs/configure/README.md#getorganizationnetworks) - List the networks that the user has privileges on in an organization
* [GetOrganizationPolicyObject](docs/configure/README.md#getorganizationpolicyobject) - Shows details of a Policy Object.
* [GetOrganizationPolicyObjects](docs/configure/README.md#getorganizationpolicyobjects) - Lists Policy Objects belonging to the organization.
* [GetOrganizationPolicyObjectsGroup](docs/configure/README.md#getorganizationpolicyobjectsgroup) - Shows details of a Policy Object Group.
* [GetOrganizationPolicyObjectsGroups](docs/configure/README.md#getorganizationpolicyobjectsgroups) - Lists Policy Object Groups belonging to the organization.
* [GetOrganizationSaml](docs/configure/README.md#getorganizationsaml) - Returns the SAML SSO enabled settings for an organization.
* [GetOrganizationSamlIdp](docs/configure/README.md#getorganizationsamlidp) - Get a SAML IdP from your organization.
* [GetOrganizationSamlIdps](docs/configure/README.md#getorganizationsamlidps) - List the SAML IdPs in your organization.
* [GetOrganizationSamlRole](docs/configure/README.md#getorganizationsamlrole) - Return a SAML role
* [GetOrganizationSamlRoles](docs/configure/README.md#getorganizationsamlroles) - List the SAML roles for this organization
* [GetOrganizationSmApnsCert](docs/configure/README.md#getorganizationsmapnscert) - Get the organization's APNS certificate
* [GetOrganizationSmVppAccount](docs/configure/README.md#getorganizationsmvppaccount) - Get a hash containing the unparsed token of the VPP account with the given ID
* [GetOrganizationSmVppAccounts](docs/configure/README.md#getorganizationsmvppaccounts) - List the VPP accounts in the organization
* [GetOrganizationSnmp](docs/configure/README.md#getorganizationsnmp) - Return the SNMP settings for an organization
* [GetOrganizationSwitchPortsBySwitch](docs/configure/README.md#getorganizationswitchportsbyswitch) - List the switchports in an organization by switch
* [GetOrganizationWirelessDevicesEthernetStatuses](docs/configure/README.md#getorganizationwirelessdevicesethernetstatuses) - Endpoint to see power status for wireless devices
* [GetOrganizations](docs/configure/README.md#getorganizations) - List the organizations that the user has privileges on
* [LockNetworkSmDevices](docs/configure/README.md#locknetworksmdevices) - Lock a set of devices
* [ModifyNetworkSmDevicesTags](docs/configure/README.md#modifynetworksmdevicestags) - Add, delete, or update the tags of a set of devices
* [MoveNetworkSmDevices](docs/configure/README.md#movenetworksmdevices) - Move a set of devices to a new network
* [MoveOrganizationLicenses](docs/configure/README.md#moveorganizationlicenses) - Move licenses to another organization
* [MoveOrganizationLicensesSeats](docs/configure/README.md#moveorganizationlicensesseats) - Move SM seats to another organization
* [MoveOrganizationLicensingCotermLicenses](docs/configure/README.md#moveorganizationlicensingcotermlicenses) - Moves a license to a different organization (coterm only)
* [ProvisionNetworkClients](docs/configure/README.md#provisionnetworkclients) - Provisions a client with a name and policy
* [RefreshNetworkSmDeviceDetails](docs/configure/README.md#refreshnetworksmdevicedetails) - Refresh the details of a device
* [ReleaseFromOrganizationInventory](docs/configure/README.md#releasefromorganizationinventory) - Release a list of claimed devices from an organization.
* [RemoveNetworkDevices](docs/configure/README.md#removenetworkdevices) - Remove a single device
* [RemoveNetworkSwitchStack](docs/configure/README.md#removenetworkswitchstack) - Remove a switch from a stack
* [RenewOrganizationLicensesSeats](docs/configure/README.md#reneworganizationlicensesseats) - Renew SM seats of a license
* [RollbacksNetworkFirmwareUpgradesStagedEvents](docs/configure/README.md#rollbacksnetworkfirmwareupgradesstagedevents) - Rollback a Staged Upgrade Event for a network
* [SplitNetwork](docs/configure/README.md#splitnetwork) - Split a combined network into individual networks for each type of device
* [SwapNetworkApplianceWarmSpare](docs/configure/README.md#swapnetworkappliancewarmspare) - Swap MX primary and warm spare appliances
* [UnbindNetwork](docs/configure/README.md#unbindnetwork) - Unbind a network from a template.
* [UnenrollNetworkSmDevice](docs/configure/README.md#unenrollnetworksmdevice) - Unenroll a device
* [UpdateDevice](docs/configure/README.md#updatedevice) - Update the attributes of a device
* [UpdateDeviceApplianceUplinksSettings](docs/configure/README.md#updatedeviceapplianceuplinkssettings) - Update the uplink settings for an MX appliance
* [UpdateDeviceCameraCustomAnalytics](docs/configure/README.md#updatedevicecameracustomanalytics) - Update custom analytics settings for a camera
* [UpdateDeviceCameraQualityAndRetention](docs/configure/README.md#updatedevicecameraqualityandretention) - Update quality and retention settings for the given camera
* [UpdateDeviceCameraSense](docs/configure/README.md#updatedevicecamerasense) - Update sense settings for the given camera
* [UpdateDeviceCameraVideoSettings](docs/configure/README.md#updatedevicecameravideosettings) - Update video settings for the given camera
* [UpdateDeviceCameraWirelessProfiles](docs/configure/README.md#updatedevicecamerawirelessprofiles) - Assign wireless profiles to the given camera
* [UpdateDeviceCellularGatewayLan](docs/configure/README.md#updatedevicecellulargatewaylan) - Update the LAN Settings for a single MG.
* [UpdateDeviceCellularGatewayPortForwardingRules](docs/configure/README.md#updatedevicecellulargatewayportforwardingrules) - Updates the port forwarding rules for a single MG.
* [UpdateDeviceCellularSims](docs/configure/README.md#updatedevicecellularsims) - Updates the SIM and APN configurations for a cellular device.
* [UpdateDeviceManagementInterface](docs/configure/README.md#updatedevicemanagementinterface) - Update the management interface settings for a device
* [UpdateDeviceSensorRelationships](docs/configure/README.md#updatedevicesensorrelationships) - Assign one or more sensor roles to a given sensor or camera device.
* [UpdateDeviceSwitchPort](docs/configure/README.md#updatedeviceswitchport) - Update a switch port
* [UpdateDeviceSwitchRoutingInterface](docs/configure/README.md#updatedeviceswitchroutinginterface) - Update a layer 3 interface for a switch
* [UpdateDeviceSwitchRoutingInterfaceDhcp](docs/configure/README.md#updatedeviceswitchroutinginterfacedhcp) - Update a layer 3 interface DHCP configuration for a switch
* [UpdateDeviceSwitchRoutingStaticRoute](docs/configure/README.md#updatedeviceswitchroutingstaticroute) - Update a layer 3 static route for a switch
* [UpdateDeviceSwitchWarmSpare](docs/configure/README.md#updatedeviceswitchwarmspare) - Update warm spare configuration for a switch
* [UpdateDeviceWirelessBluetoothSettings](docs/configure/README.md#updatedevicewirelessbluetoothsettings) - Update the bluetooth settings for a wireless device
* [UpdateDeviceWirelessRadioSettings](docs/configure/README.md#updatedevicewirelessradiosettings) - Update the radio settings of a device
* [UpdateNetwork](docs/configure/README.md#updatenetwork) - Update a network
* [UpdateNetworkAlertsSettings](docs/configure/README.md#updatenetworkalertssettings) - Update the alert configuration for this network
* [UpdateNetworkApplianceConnectivityMonitoringDestinations](docs/configure/README.md#updatenetworkapplianceconnectivitymonitoringdestinations) - Update the connectivity testing destinations for an MX network
* [UpdateNetworkApplianceContentFiltering](docs/configure/README.md#updatenetworkappliancecontentfiltering) - Update the content filtering settings for an MX network
* [UpdateNetworkApplianceFirewallCellularFirewallRules](docs/configure/README.md#updatenetworkappliancefirewallcellularfirewallrules) - Update the cellular firewall rules of an MX network
* [UpdateNetworkApplianceFirewallFirewalledService](docs/configure/README.md#updatenetworkappliancefirewallfirewalledservice) - Updates the accessibility settings for the given service ('ICMP', 'web', or 'SNMP')
* [UpdateNetworkApplianceFirewallInboundCellularFirewallRules](docs/configure/README.md#updatenetworkappliancefirewallinboundcellularfirewallrules) - Update the inbound cellular firewall rules of an MX network
* [UpdateNetworkApplianceFirewallInboundFirewallRules](docs/configure/README.md#updatenetworkappliancefirewallinboundfirewallrules) - Update the inbound firewall rules of an MX network
* [UpdateNetworkApplianceFirewallL3FirewallRules](docs/configure/README.md#updatenetworkappliancefirewalll3firewallrules) - Update the L3 firewall rules of an MX network
* [UpdateNetworkApplianceFirewallL7FirewallRules](docs/configure/README.md#updatenetworkappliancefirewalll7firewallrules) - Update the MX L7 firewall rules for an MX network
* [UpdateNetworkApplianceFirewallOneToManyNatRules](docs/configure/README.md#updatenetworkappliancefirewallonetomanynatrules) - Set the 1:Many NAT mapping rules for an MX network
* [UpdateNetworkApplianceFirewallOneToOneNatRules](docs/configure/README.md#updatenetworkappliancefirewallonetoonenatrules) - Set the 1:1 NAT mapping rules for an MX network
* [UpdateNetworkApplianceFirewallPortForwardingRules](docs/configure/README.md#updatenetworkappliancefirewallportforwardingrules) - Update the port forwarding rules for an MX network
* [UpdateNetworkApplianceFirewallSettings](docs/configure/README.md#updatenetworkappliancefirewallsettings) - Update the firewall settings for this network
* [UpdateNetworkAppliancePort](docs/configure/README.md#updatenetworkapplianceport) - Update the per-port VLAN settings for a single MX port.
* [UpdateNetworkAppliancePrefixesDelegatedStatic](docs/configure/README.md#updatenetworkapplianceprefixesdelegatedstatic) - Update a static delegated prefix from a network
* [UpdateNetworkApplianceSecurityIntrusion](docs/configure/README.md#updatenetworkappliancesecurityintrusion) - Set the supported intrusion settings for an MX network
* [UpdateNetworkApplianceSecurityMalware](docs/configure/README.md#updatenetworkappliancesecuritymalware) - Set the supported malware settings for an MX network
* [UpdateNetworkApplianceSettings](docs/configure/README.md#updatenetworkappliancesettings) - Update the appliance settings for a network
* [UpdateNetworkApplianceSingleLan](docs/configure/README.md#updatenetworkappliancesinglelan) - Update single LAN configuration
* [UpdateNetworkApplianceSsid](docs/configure/README.md#updatenetworkappliancessid) - Update the attributes of an MX SSID
* [UpdateNetworkApplianceStaticRoute](docs/configure/README.md#updatenetworkappliancestaticroute) - Update a static route for an MX or teleworker network
* [UpdateNetworkApplianceTrafficShaping](docs/configure/README.md#updatenetworkappliancetrafficshaping) - Update the traffic shaping settings for an MX network
* [UpdateNetworkApplianceTrafficShapingCustomPerformanceClass](docs/configure/README.md#updatenetworkappliancetrafficshapingcustomperformanceclass) - Update a custom performance class for an MX network
* [UpdateNetworkApplianceTrafficShapingRules](docs/configure/README.md#updatenetworkappliancetrafficshapingrules) - Update the traffic shaping settings rules for an MX network
* [UpdateNetworkApplianceTrafficShapingUplinkBandwidth](docs/configure/README.md#updatenetworkappliancetrafficshapinguplinkbandwidth) - Updates the uplink bandwidth settings for your MX network.
* [UpdateNetworkApplianceTrafficShapingUplinkSelection](docs/configure/README.md#updatenetworkappliancetrafficshapinguplinkselection) - Update uplink selection settings for an MX network
* [UpdateNetworkApplianceVlan](docs/configure/README.md#updatenetworkappliancevlan) - Update a VLAN
* [UpdateNetworkApplianceVlansSettings](docs/configure/README.md#updatenetworkappliancevlanssettings) - Enable/Disable VLANs for the given network
* [UpdateNetworkApplianceVpnBgp](docs/configure/README.md#updatenetworkappliancevpnbgp) - Update a Hub BGP Configuration
* [UpdateNetworkApplianceVpnSiteToSiteVpn](docs/configure/README.md#updatenetworkappliancevpnsitetositevpn) - Update the site-to-site VPN settings of a network
* [UpdateNetworkApplianceWarmSpare](docs/configure/README.md#updatenetworkappliancewarmspare) - Update MX warm spare settings
* [UpdateNetworkCameraQualityRetentionProfile](docs/configure/README.md#updatenetworkcameraqualityretentionprofile) - Update an existing quality retention profile for this network.
* [UpdateNetworkCameraWirelessProfile](docs/configure/README.md#updatenetworkcamerawirelessprofile) - Update an existing camera wireless profile in this network.
* [UpdateNetworkCellularGatewayConnectivityMonitoringDestinations](docs/configure/README.md#updatenetworkcellulargatewayconnectivitymonitoringdestinations) - Update the connectivity testing destinations for an MG network
* [UpdateNetworkCellularGatewayDhcp](docs/configure/README.md#updatenetworkcellulargatewaydhcp) - Update common DHCP settings of MGs
* [UpdateNetworkCellularGatewaySubnetPool](docs/configure/README.md#updatenetworkcellulargatewaysubnetpool) - Update the subnet pool and mask configuration for MGs in the network.
* [UpdateNetworkCellularGatewayUplink](docs/configure/README.md#updatenetworkcellulargatewayuplink) - Updates the uplink settings for your MG network.
* [UpdateNetworkClientPolicy](docs/configure/README.md#updatenetworkclientpolicy) - Update the policy assigned to a client on the network
* [UpdateNetworkClientSplashAuthorizationStatus](docs/configure/README.md#updatenetworkclientsplashauthorizationstatus) - Update a client's splash authorization
* [UpdateNetworkFirmwareUpgrades](docs/configure/README.md#updatenetworkfirmwareupgrades) - Update firmware upgrade information for a network
* [UpdateNetworkFirmwareUpgradesStagedEvents](docs/configure/README.md#updatenetworkfirmwareupgradesstagedevents) - Update the Staged Upgrade Event for a network
* [UpdateNetworkFirmwareUpgradesStagedGroup](docs/configure/README.md#updatenetworkfirmwareupgradesstagedgroup) - Update a Staged Upgrade Group for a network
* [UpdateNetworkFirmwareUpgradesStagedStages](docs/configure/README.md#updatenetworkfirmwareupgradesstagedstages) - Assign Staged Upgrade Group order in the sequence.
* [UpdateNetworkFloorPlan](docs/configure/README.md#updatenetworkfloorplan) - Update a floor plan's geolocation and other meta data
* [UpdateNetworkGroupPolicy](docs/configure/README.md#updatenetworkgrouppolicy) - Update a group policy
* [UpdateNetworkMerakiAuthUser](docs/configure/README.md#updatenetworkmerakiauthuser) - Update a user configured with Meraki Authentication (currently, 802.1X RADIUS, splash guest, and client VPN users can be updated)
* [UpdateNetworkMqttBroker](docs/configure/README.md#updatenetworkmqttbroker) - Update an MQTT broker
* [UpdateNetworkNetflow](docs/configure/README.md#updatenetworknetflow) - Update the NetFlow traffic reporting settings for a network
* [UpdateNetworkSensorAlertsProfile](docs/configure/README.md#updatenetworksensoralertsprofile) - Updates a sensor alert profile for a network.
* [UpdateNetworkSettings](docs/configure/README.md#updatenetworksettings) - Update the settings for a network
* [UpdateNetworkSmDevicesFields](docs/configure/README.md#updatenetworksmdevicesfields) - Modify the fields of a device
* [UpdateNetworkSmTargetGroup](docs/configure/README.md#updatenetworksmtargetgroup) - Update a target group
* [UpdateNetworkSnmp](docs/configure/README.md#updatenetworksnmp) - Update the SNMP settings for a network
* [UpdateNetworkSwitchAccessControlLists](docs/configure/README.md#updatenetworkswitchaccesscontrollists) - Update the access control lists for a MS network
* [UpdateNetworkSwitchAccessPolicy](docs/configure/README.md#updatenetworkswitchaccesspolicy) - Update an access policy for a switch network
* [UpdateNetworkSwitchAlternateManagementInterface](docs/configure/README.md#updatenetworkswitchalternatemanagementinterface) - Update the switch alternate management interface for the network
* [UpdateNetworkSwitchDhcpServerPolicy](docs/configure/README.md#updatenetworkswitchdhcpserverpolicy) - Update the DHCP server settings
* [UpdateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServer](docs/configure/README.md#updatenetworkswitchdhcpserverpolicyarpinspectiontrustedserver) - Update a server that is trusted by Dynamic ARP Inspection on this network
* [UpdateNetworkSwitchDscpToCosMappings](docs/configure/README.md#updatenetworkswitchdscptocosmappings) - Update the DSCP to CoS mappings
* [UpdateNetworkSwitchLinkAggregation](docs/configure/README.md#updatenetworkswitchlinkaggregation) - Update a link aggregation group
* [UpdateNetworkSwitchMtu](docs/configure/README.md#updatenetworkswitchmtu) - Update the MTU configuration
* [UpdateNetworkSwitchPortSchedule](docs/configure/README.md#updatenetworkswitchportschedule) - Update a switch port schedule
* [UpdateNetworkSwitchQosRule](docs/configure/README.md#updatenetworkswitchqosrule) - Update a quality of service rule
* [UpdateNetworkSwitchQosRulesOrder](docs/configure/README.md#updatenetworkswitchqosrulesorder) - Update the order in which the rules should be processed by the switch
* [UpdateNetworkSwitchRoutingMulticast](docs/configure/README.md#updatenetworkswitchroutingmulticast) - Update multicast settings for a network
* [UpdateNetworkSwitchRoutingMulticastRendezvousPoint](docs/configure/README.md#updatenetworkswitchroutingmulticastrendezvouspoint) - Update a multicast rendezvous point
* [UpdateNetworkSwitchRoutingOspf](docs/configure/README.md#updatenetworkswitchroutingospf) - Update layer 3 OSPF routing configuration
* [UpdateNetworkSwitchSettings](docs/configure/README.md#updatenetworkswitchsettings) - Update switch network settings
* [UpdateNetworkSwitchStackRoutingInterface](docs/configure/README.md#updatenetworkswitchstackroutinginterface) - Update a layer 3 interface for a switch stack
* [UpdateNetworkSwitchStackRoutingInterfaceDhcp](docs/configure/README.md#updatenetworkswitchstackroutinginterfacedhcp) - Update a layer 3 interface DHCP configuration for a switch stack
* [UpdateNetworkSwitchStackRoutingStaticRoute](docs/configure/README.md#updatenetworkswitchstackroutingstaticroute) - Update a layer 3 static route for a switch stack
* [UpdateNetworkSwitchStormControl](docs/configure/README.md#updatenetworkswitchstormcontrol) - Update the storm control configuration for a switch network
* [UpdateNetworkSwitchStp](docs/configure/README.md#updatenetworkswitchstp) - Updates STP settings
* [UpdateNetworkSyslogServers](docs/configure/README.md#updatenetworksyslogservers) - Update the syslog servers for a network
* [UpdateNetworkTrafficAnalysis](docs/configure/README.md#updatenetworktrafficanalysis) - Update the traffic analysis settings for a network
* [UpdateNetworkWebhooksHTTPServer](docs/configure/README.md#updatenetworkwebhookshttpserver) - Update an HTTP server
* [UpdateNetworkWebhooksPayloadTemplate](docs/configure/README.md#updatenetworkwebhookspayloadtemplate) - Update a webhook payload template for a network
* [UpdateNetworkWirelessAlternateManagementInterface](docs/configure/README.md#updatenetworkwirelessalternatemanagementinterface) - Update alternate management interface and device static IP
* [UpdateNetworkWirelessBilling](docs/configure/README.md#updatenetworkwirelessbilling) - Update the billing settings
* [UpdateNetworkWirelessBluetoothSettings](docs/configure/README.md#updatenetworkwirelessbluetoothsettings) - Update the Bluetooth settings for a network
* [UpdateNetworkWirelessRfProfile](docs/configure/README.md#updatenetworkwirelessrfprofile) - Updates specified RF profile for this network
* [UpdateNetworkWirelessSettings](docs/configure/README.md#updatenetworkwirelesssettings) - Update the wireless settings for a network
* [UpdateNetworkWirelessSsid](docs/configure/README.md#updatenetworkwirelessssid) - Update the attributes of an MR SSID
* [UpdateNetworkWirelessSsidBonjourForwarding](docs/configure/README.md#updatenetworkwirelessssidbonjourforwarding) - Update the bonjour forwarding setting and rules for the SSID
* [UpdateNetworkWirelessSsidDeviceTypeGroupPolicies](docs/configure/README.md#updatenetworkwirelessssiddevicetypegrouppolicies) - Update the device type group policies for the SSID
* [UpdateNetworkWirelessSsidEapOverride](docs/configure/README.md#updatenetworkwirelessssideapoverride) - Update the EAP overridden parameters for an SSID.
* [UpdateNetworkWirelessSsidFirewallL3FirewallRules](docs/configure/README.md#updatenetworkwirelessssidfirewalll3firewallrules) - Update the L3 firewall rules of an SSID on an MR network
* [UpdateNetworkWirelessSsidFirewallL7FirewallRules](docs/configure/README.md#updatenetworkwirelessssidfirewalll7firewallrules) - Update the L7 firewall rules of an SSID on an MR network
* [UpdateNetworkWirelessSsidHotspot20](docs/configure/README.md#updatenetworkwirelessssidhotspot20) - Update the Hotspot 2.0 settings of an SSID
* [UpdateNetworkWirelessSsidIdentityPsk](docs/configure/README.md#updatenetworkwirelessssididentitypsk) - Update an Identity PSK
* [UpdateNetworkWirelessSsidSchedules](docs/configure/README.md#updatenetworkwirelessssidschedules) - Update the outage schedule for the SSID
* [UpdateNetworkWirelessSsidSplashSettings](docs/configure/README.md#updatenetworkwirelessssidsplashsettings) - Modify the splash page settings for the given SSID
* [UpdateNetworkWirelessSsidTrafficShapingRules](docs/configure/README.md#updatenetworkwirelessssidtrafficshapingrules) - Update the traffic shaping settings for an SSID on an MR network
* [UpdateNetworkWirelessSsidVpn](docs/configure/README.md#updatenetworkwirelessssidvpn) - Update the VPN settings for the SSID
* [UpdateOrganization](docs/configure/README.md#updateorganization) - Update an organization
* [UpdateOrganizationActionBatch](docs/configure/README.md#updateorganizationactionbatch) - Update an action batch
* [UpdateOrganizationAdaptivePolicyACL](docs/configure/README.md#updateorganizationadaptivepolicyacl) - Updates an adaptive policy ACL
* [UpdateOrganizationAdaptivePolicyGroup](docs/configure/README.md#updateorganizationadaptivepolicygroup) - Updates an adaptive policy group
* [UpdateOrganizationAdaptivePolicyPolicy](docs/configure/README.md#updateorganizationadaptivepolicypolicy) - Update an Adaptive Policy
* [UpdateOrganizationAdaptivePolicySettings](docs/configure/README.md#updateorganizationadaptivepolicysettings) - Update global adaptive policy settings
* [UpdateOrganizationAdmin](docs/configure/README.md#updateorganizationadmin) - Update an administrator
* [UpdateOrganizationAlertsProfile](docs/configure/README.md#updateorganizationalertsprofile) - Update an organization-wide alert config
* [UpdateOrganizationApplianceSecurityIntrusion](docs/configure/README.md#updateorganizationappliancesecurityintrusion) - Sets supported intrusion settings for an organization
* [UpdateOrganizationApplianceVPNThirdPartyVPNPeers](docs/configure/README.md#updateorganizationappliancevpnthirdpartyvpnpeers) - Update the third party VPN peers for an organization
* [UpdateOrganizationApplianceVpnVpnFirewallRules](docs/configure/README.md#updateorganizationappliancevpnvpnfirewallrules) - Update the firewall rules of an organization's site-to-site VPN
* [UpdateOrganizationBrandingPoliciesPriorities](docs/configure/README.md#updateorganizationbrandingpoliciespriorities) - Update the priority ordering of an organization's branding policies.
* [UpdateOrganizationBrandingPolicy](docs/configure/README.md#updateorganizationbrandingpolicy) - Update a branding policy
* [UpdateOrganizationCameraOnboardingStatuses](docs/configure/README.md#updateorganizationcameraonboardingstatuses) - Notify that credential handoff to camera has completed
* [UpdateOrganizationConfigTemplate](docs/configure/README.md#updateorganizationconfigtemplate) - Update a configuration template
* [UpdateOrganizationConfigTemplateSwitchProfilePort](docs/configure/README.md#updateorganizationconfigtemplateswitchprofileport) - Update a switch profile port
* [UpdateOrganizationEarlyAccessFeaturesOptIn](docs/configure/README.md#updateorganizationearlyaccessfeaturesoptin) - Update an early access feature opt-in for an organization
* [UpdateOrganizationInsightMonitoredMediaServer](docs/configure/README.md#updateorganizationinsightmonitoredmediaserver) - Update a monitored media server for this organization
* [UpdateOrganizationLicense](docs/configure/README.md#updateorganizationlicense) - Update a license
* [UpdateOrganizationLoginSecurity](docs/configure/README.md#updateorganizationloginsecurity) - Update the login security settings for an organization
* [UpdateOrganizationPolicyObject](docs/configure/README.md#updateorganizationpolicyobject) - Updates a Policy Object.
* [UpdateOrganizationPolicyObjectsGroup](docs/configure/README.md#updateorganizationpolicyobjectsgroup) - Updates a Policy Object Group.
* [UpdateOrganizationSaml](docs/configure/README.md#updateorganizationsaml) - Updates the SAML SSO enabled settings for an organization.
* [UpdateOrganizationSamlIdp](docs/configure/README.md#updateorganizationsamlidp) - Update a SAML IdP in your organization
* [UpdateOrganizationSamlRole](docs/configure/README.md#updateorganizationsamlrole) - Update a SAML role
* [UpdateOrganizationSnmp](docs/configure/README.md#updateorganizationsnmp) - Update the SNMP settings for an organization
* [VmxNetworkDevicesClaim](docs/configure/README.md#vmxnetworkdevicesclaim) - Claim a vMX into a network
* [WipeNetworkSmDevices](docs/configure/README.md#wipenetworksmdevices) - Wipe a device

### [ConnectionStats](docs/connectionstats/README.md)

* [GetDeviceWirelessConnectionStats](docs/connectionstats/README.md#getdevicewirelessconnectionstats) - Aggregated connectivity info for a given AP on this network
* [GetNetworkWirelessClientConnectionStats](docs/connectionstats/README.md#getnetworkwirelessclientconnectionstats) - Aggregated connectivity info for a given client on this network
* [GetNetworkWirelessClientsConnectionStats](docs/connectionstats/README.md#getnetworkwirelessclientsconnectionstats) - Aggregated connectivity info for this network, grouped by clients
* [GetNetworkWirelessConnectionStats](docs/connectionstats/README.md#getnetworkwirelessconnectionstats) - Aggregated connectivity info for this network
* [GetNetworkWirelessDevicesConnectionStats](docs/connectionstats/README.md#getnetworkwirelessdevicesconnectionstats) - Aggregated connectivity info for this network, grouped by node

### [Connectivity](docs/connectivity/README.md)

* [GetNetworkSmDeviceConnectivity](docs/connectivity/README.md#getnetworksmdeviceconnectivity) - Returns historical connectivity data (whether a device is regularly checking in to Dashboard).

### [ConnectivityEvents](docs/connectivityevents/README.md)

* [GetNetworkWirelessClientConnectivityEvents](docs/connectivityevents/README.md#getnetworkwirelessclientconnectivityevents) - List the wireless connectivity events for a client within a network in the timespan.

### [ConnectivityMonitoringDestinations](docs/connectivitymonitoringdestinations/README.md)

* [GetNetworkApplianceConnectivityMonitoringDestinations](docs/connectivitymonitoringdestinations/README.md#getnetworkapplianceconnectivitymonitoringdestinations) - Return the connectivity testing destinations for an MX network
* [GetNetworkCellularGatewayConnectivityMonitoringDestinations](docs/connectivitymonitoringdestinations/README.md#getnetworkcellulargatewayconnectivitymonitoringdestinations) - Return the connectivity testing destinations for an MG network
* [UpdateNetworkApplianceConnectivityMonitoringDestinations](docs/connectivitymonitoringdestinations/README.md#updatenetworkapplianceconnectivitymonitoringdestinations) - Update the connectivity testing destinations for an MX network
* [UpdateNetworkCellularGatewayConnectivityMonitoringDestinations](docs/connectivitymonitoringdestinations/README.md#updatenetworkcellulargatewayconnectivitymonitoringdestinations) - Update the connectivity testing destinations for an MG network

### [ContentFiltering](docs/contentfiltering/README.md)

* [GetNetworkApplianceContentFiltering](docs/contentfiltering/README.md#getnetworkappliancecontentfiltering) - Return the content filtering settings for an MX network
* [GetNetworkApplianceContentFilteringCategories](docs/contentfiltering/README.md#getnetworkappliancecontentfilteringcategories) - List all available content filtering categories for an MX network
* [UpdateNetworkApplianceContentFiltering](docs/contentfiltering/README.md#updatenetworkappliancecontentfiltering) - Update the content filtering settings for an MX network

### [Coterm](docs/coterm/README.md)

* [GetOrganizationLicensingCotermLicenses](docs/coterm/README.md#getorganizationlicensingcotermlicenses) - List the licenses in a coterm organization
* [MoveOrganizationLicensingCotermLicenses](docs/coterm/README.md#moveorganizationlicensingcotermlicenses) - Moves a license to a different organization (coterm only)

### [Current](docs/current/README.md)

* [GetNetworkSensorAlertsCurrentOverviewByMetric](docs/current/README.md#getnetworksensoralertscurrentoverviewbymetric) - Return an overview of currently alerting sensors by metric

### [CustomAnalytics](docs/customanalytics/README.md)

* [CreateOrganizationCameraCustomAnalyticsArtifact](docs/customanalytics/README.md#createorganizationcameracustomanalyticsartifact) - Create custom analytics artifact
* [DeleteOrganizationCameraCustomAnalyticsArtifact](docs/customanalytics/README.md#deleteorganizationcameracustomanalyticsartifact) - Delete Custom Analytics Artifact
* [GetDeviceCameraCustomAnalytics](docs/customanalytics/README.md#getdevicecameracustomanalytics) - Return custom analytics settings for a camera
* [GetOrganizationCameraCustomAnalyticsArtifact](docs/customanalytics/README.md#getorganizationcameracustomanalyticsartifact) - Get Custom Analytics Artifact
* [GetOrganizationCameraCustomAnalyticsArtifacts](docs/customanalytics/README.md#getorganizationcameracustomanalyticsartifacts) - List Custom Analytics Artifacts
* [UpdateDeviceCameraCustomAnalytics](docs/customanalytics/README.md#updatedevicecameracustomanalytics) - Update custom analytics settings for a camera

### [CustomPerformanceClasses](docs/customperformanceclasses/README.md)

* [CreateNetworkApplianceTrafficShapingCustomPerformanceClass](docs/customperformanceclasses/README.md#createnetworkappliancetrafficshapingcustomperformanceclass) - Add a custom performance class for an MX network
* [DeleteNetworkApplianceTrafficShapingCustomPerformanceClass](docs/customperformanceclasses/README.md#deletenetworkappliancetrafficshapingcustomperformanceclass) - Delete a custom performance class from an MX network
* [GetNetworkApplianceTrafficShapingCustomPerformanceClass](docs/customperformanceclasses/README.md#getnetworkappliancetrafficshapingcustomperformanceclass) - Return a custom performance class for an MX network
* [GetNetworkApplianceTrafficShapingCustomPerformanceClasses](docs/customperformanceclasses/README.md#getnetworkappliancetrafficshapingcustomperformanceclasses) - List all custom performance classes for an MX network
* [UpdateNetworkApplianceTrafficShapingCustomPerformanceClass](docs/customperformanceclasses/README.md#updatenetworkappliancetrafficshapingcustomperformanceclass) - Update a custom performance class for an MX network

### [DataRateHistory](docs/dataratehistory/README.md)

* [GetNetworkWirelessDataRateHistory](docs/dataratehistory/README.md#getnetworkwirelessdataratehistory) - Return PHY data rates over time for a network, device, or network client

### [Delegated](docs/delegated/README.md)

* [CreateNetworkAppliancePrefixesDelegatedStatic](docs/delegated/README.md#createnetworkapplianceprefixesdelegatedstatic) - Add a static delegated prefix from a network
* [DeleteNetworkAppliancePrefixesDelegatedStatic](docs/delegated/README.md#deletenetworkapplianceprefixesdelegatedstatic) - Delete a static delegated prefix from a network
* [GetDeviceAppliancePrefixesDelegated](docs/delegated/README.md#getdeviceapplianceprefixesdelegated) - Return current delegated IPv6 prefixes on an appliance.
* [GetDeviceAppliancePrefixesDelegatedVlanAssignments](docs/delegated/README.md#getdeviceapplianceprefixesdelegatedvlanassignments) - Return prefixes assigned to all IPv6 enabled VLANs on an appliance.
* [GetNetworkAppliancePrefixesDelegatedStatic](docs/delegated/README.md#getnetworkapplianceprefixesdelegatedstatic) - Return a static delegated prefix from a network
* [GetNetworkAppliancePrefixesDelegatedStatics](docs/delegated/README.md#getnetworkapplianceprefixesdelegatedstatics) - List static delegated prefixes for a network
* [UpdateNetworkAppliancePrefixesDelegatedStatic](docs/delegated/README.md#updatenetworkapplianceprefixesdelegatedstatic) - Update a static delegated prefix from a network

### [DesktopLogs](docs/desktoplogs/README.md)

* [GetNetworkSmDeviceDesktopLogs](docs/desktoplogs/README.md#getnetworksmdevicedesktoplogs) - Return historical records of various Systems Manager network connection details for desktop devices.

### [DeviceCommandLogs](docs/devicecommandlogs/README.md)

* [GetNetworkSmDeviceDeviceCommandLogs](docs/devicecommandlogs/README.md#getnetworksmdevicedevicecommandlogs) - Return historical records of commands sent to Systems Manager devices

### [DeviceProfiles](docs/deviceprofiles/README.md)

* [GetNetworkSmDeviceDeviceProfiles](docs/deviceprofiles/README.md#getnetworksmdevicedeviceprofiles) - Get the installed profiles associated with a device
* [GetNetworkSmUserDeviceProfiles](docs/deviceprofiles/README.md#getnetworksmuserdeviceprofiles) - Get the profiles associated with a user

### [DeviceTypeGroupPolicies](docs/devicetypegrouppolicies/README.md)

* [GetNetworkWirelessSsidDeviceTypeGroupPolicies](docs/devicetypegrouppolicies/README.md#getnetworkwirelessssiddevicetypegrouppolicies) - List the device type group policies for the SSID
* [UpdateNetworkWirelessSsidDeviceTypeGroupPolicies](docs/devicetypegrouppolicies/README.md#updatenetworkwirelessssiddevicetypegrouppolicies) - Update the device type group policies for the SSID

### [Devices](docs/devices/README.md)

* [BlinkDeviceLeds](docs/devices/README.md#blinkdeviceleds) - Blink the LEDs on a device
* [CheckinNetworkSmDevices](docs/devices/README.md#checkinnetworksmdevices) - Force check-in a set of devices
* [ClaimNetworkDevices](docs/devices/README.md#claimnetworkdevices) - Claim devices into a network. (Note: for recently claimed devices, it may take a few minutes for API requsts against that device to succeed)
* [CloneOrganizationSwitchDevices](docs/devices/README.md#cloneorganizationswitchdevices) - Clone port-level and some switch-level configuration settings from a source switch to one or more target switches
* [CreateDeviceLiveToolsPing](docs/devices/README.md#createdevicelivetoolsping) - Enqueue a job to ping a target host from the device
* [CreateDeviceLiveToolsPingDevice](docs/devices/README.md#createdevicelivetoolspingdevice) - Enqueue a job to check connectivity status to the device
* [GetDevice](docs/devices/README.md#getdevice) - Return a single device
* [GetDeviceCellularSims](docs/devices/README.md#getdevicecellularsims) - Return the SIM and APN configurations for a cellular device.
* [GetDeviceClients](docs/devices/README.md#getdeviceclients) - List the clients of a device, up to a maximum of a month ago
* [GetDeviceLiveToolsPing](docs/devices/README.md#getdevicelivetoolsping) - Return a ping job
* [GetDeviceLiveToolsPingDevice](docs/devices/README.md#getdevicelivetoolspingdevice) - Return a ping device job
* [GetDeviceLldpCdp](docs/devices/README.md#getdevicelldpcdp) - List LLDP and CDP information for a device
* [GetDeviceLossAndLatencyHistory](docs/devices/README.md#getdevicelossandlatencyhistory) - Get the uplink loss percentage and latency in milliseconds, and goodput in kilobits per second for a wired network device.
* [GetDeviceManagementInterface](docs/devices/README.md#getdevicemanagementinterface) - Return the management interface settings for a device
* [GetNetworkDevices](docs/devices/README.md#getnetworkdevices) - List the devices in a network
* [GetNetworkSmDeviceCellularUsageHistory](docs/devices/README.md#getnetworksmdevicecellularusagehistory) - Return the client's daily cellular data usage history
* [GetNetworkSmDeviceCerts](docs/devices/README.md#getnetworksmdevicecerts) - List the certs on a device
* [GetNetworkSmDeviceConnectivity](docs/devices/README.md#getnetworksmdeviceconnectivity) - Returns historical connectivity data (whether a device is regularly checking in to Dashboard).
* [GetNetworkSmDeviceDesktopLogs](docs/devices/README.md#getnetworksmdevicedesktoplogs) - Return historical records of various Systems Manager network connection details for desktop devices.
* [GetNetworkSmDeviceDeviceCommandLogs](docs/devices/README.md#getnetworksmdevicedevicecommandlogs) - Return historical records of commands sent to Systems Manager devices
* [GetNetworkSmDeviceDeviceProfiles](docs/devices/README.md#getnetworksmdevicedeviceprofiles) - Get the installed profiles associated with a device
* [GetNetworkSmDeviceNetworkAdapters](docs/devices/README.md#getnetworksmdevicenetworkadapters) - List the network adapters of a device
* [GetNetworkSmDevicePerformanceHistory](docs/devices/README.md#getnetworksmdeviceperformancehistory) - Return historical records of various Systems Manager client metrics for desktop devices.
* [GetNetworkSmDeviceRestrictions](docs/devices/README.md#getnetworksmdevicerestrictions) - List the restrictions on a device
* [GetNetworkSmDeviceSecurityCenters](docs/devices/README.md#getnetworksmdevicesecuritycenters) - List the security centers on a device
* [GetNetworkSmDeviceSoftwares](docs/devices/README.md#getnetworksmdevicesoftwares) - Get a list of softwares associated with a device
* [GetNetworkSmDeviceWlanLists](docs/devices/README.md#getnetworksmdevicewlanlists) - List the saved SSID names on a device
* [GetNetworkSmDevices](docs/devices/README.md#getnetworksmdevices) - List the devices enrolled in an SM network with various specified fields and filters
* [GetNetworkWirelessDevicesConnectionStats](docs/devices/README.md#getnetworkwirelessdevicesconnectionstats) - Aggregated connectivity info for this network, grouped by node
* [GetNetworkWirelessDevicesLatencyStats](docs/devices/README.md#getnetworkwirelessdeviceslatencystats) - Aggregated latency info for this network, grouped by node
* [GetOrganizationDevices](docs/devices/README.md#getorganizationdevices) - List the devices in an organization
* [GetOrganizationDevicesAvailabilities](docs/devices/README.md#getorganizationdevicesavailabilities) - List the availability information for devices in an organization
* [GetOrganizationDevicesPowerModulesStatusesByDevice](docs/devices/README.md#getorganizationdevicespowermodulesstatusesbydevice) - List the power status information for devices in an organization
* [GetOrganizationDevicesStatuses](docs/devices/README.md#getorganizationdevicesstatuses) - List the status of every Meraki device in the organization
* [GetOrganizationDevicesStatusesOverview](docs/devices/README.md#getorganizationdevicesstatusesoverview) - Return an overview of current device statuses
* [GetOrganizationDevicesUplinksAddressesByDevice](docs/devices/README.md#getorganizationdevicesuplinksaddressesbydevice) - List the current uplink addresses for devices in an organization.
* [GetOrganizationDevicesUplinksLossAndLatency](docs/devices/README.md#getorganizationdevicesuplinkslossandlatency) - Return the uplink loss and latency for every MX in the organization from at latest 2 minutes ago
* [GetOrganizationInventoryDevice](docs/devices/README.md#getorganizationinventorydevice) - Return a single device from the inventory of an organization
* [GetOrganizationInventoryDevices](docs/devices/README.md#getorganizationinventorydevices) - Return the device inventory for an organization
* [GetOrganizationSummaryTopDevicesByUsage](docs/devices/README.md#getorganizationsummarytopdevicesbyusage) - Return metrics for organization's top 10 devices sorted by data usage over given time range
* [GetOrganizationSummaryTopDevicesModelsByUsage](docs/devices/README.md#getorganizationsummarytopdevicesmodelsbyusage) - Return metrics for organization's top 10 device models sorted by data usage over given time range
* [GetOrganizationWirelessDevicesEthernetStatuses](docs/devices/README.md#getorganizationwirelessdevicesethernetstatuses) - Endpoint to see power status for wireless devices
* [LockNetworkSmDevices](docs/devices/README.md#locknetworksmdevices) - Lock a set of devices
* [ModifyNetworkSmDevicesTags](docs/devices/README.md#modifynetworksmdevicestags) - Add, delete, or update the tags of a set of devices
* [MoveNetworkSmDevices](docs/devices/README.md#movenetworksmdevices) - Move a set of devices to a new network
* [RebootDevice](docs/devices/README.md#rebootdevice) - Reboot a device
* [RefreshNetworkSmDeviceDetails](docs/devices/README.md#refreshnetworksmdevicedetails) - Refresh the details of a device
* [RemoveNetworkDevices](docs/devices/README.md#removenetworkdevices) - Remove a single device
* [UnenrollNetworkSmDevice](docs/devices/README.md#unenrollnetworksmdevice) - Unenroll a device
* [UpdateDevice](docs/devices/README.md#updatedevice) - Update the attributes of a device
* [UpdateDeviceCellularSims](docs/devices/README.md#updatedevicecellularsims) - Updates the SIM and APN configurations for a cellular device.
* [UpdateDeviceManagementInterface](docs/devices/README.md#updatedevicemanagementinterface) - Update the management interface settings for a device
* [UpdateNetworkSmDevicesFields](docs/devices/README.md#updatenetworksmdevicesfields) - Modify the fields of a device
* [VmxNetworkDevicesClaim](docs/devices/README.md#vmxnetworkdevicesclaim) - Claim a vMX into a network
* [WipeNetworkSmDevices](docs/devices/README.md#wipenetworksmdevices) - Wipe a device

### [Dhcp](docs/dhcp/README.md)

* [GetDeviceApplianceDhcpSubnets](docs/dhcp/README.md#getdeviceappliancedhcpsubnets) - Return the DHCP subnet information for an appliance
* [GetDeviceSwitchRoutingInterfaceDhcp](docs/dhcp/README.md#getdeviceswitchroutinginterfacedhcp) - Return a layer 3 interface DHCP configuration for a switch
* [GetNetworkCellularGatewayDhcp](docs/dhcp/README.md#getnetworkcellulargatewaydhcp) - List common DHCP settings of MGs
* [GetNetworkSwitchDhcpV4ServersSeen](docs/dhcp/README.md#getnetworkswitchdhcpv4serversseen) - Return the network's DHCPv4 servers seen within the selected timeframe (default 1 day)
* [GetNetworkSwitchStackRoutingInterfaceDhcp](docs/dhcp/README.md#getnetworkswitchstackroutinginterfacedhcp) - Return a layer 3 interface DHCP configuration for a switch stack
* [UpdateDeviceSwitchRoutingInterfaceDhcp](docs/dhcp/README.md#updatedeviceswitchroutinginterfacedhcp) - Update a layer 3 interface DHCP configuration for a switch
* [UpdateNetworkCellularGatewayDhcp](docs/dhcp/README.md#updatenetworkcellulargatewaydhcp) - Update common DHCP settings of MGs
* [UpdateNetworkSwitchStackRoutingInterfaceDhcp](docs/dhcp/README.md#updatenetworkswitchstackroutinginterfacedhcp) - Update a layer 3 interface DHCP configuration for a switch stack

### [DhcpServerPolicy](docs/dhcpserverpolicy/README.md)

* [CreateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServer](docs/dhcpserverpolicy/README.md#createnetworkswitchdhcpserverpolicyarpinspectiontrustedserver) - Add a server to be trusted by Dynamic ARP Inspection on this network
* [DeleteNetworkSwitchDhcpServerPolicyArpInspectionTrustedServer](docs/dhcpserverpolicy/README.md#deletenetworkswitchdhcpserverpolicyarpinspectiontrustedserver) - Remove a server from being trusted by Dynamic ARP Inspection on this network
* [GetNetworkSwitchDhcpServerPolicy](docs/dhcpserverpolicy/README.md#getnetworkswitchdhcpserverpolicy) - Return the DHCP server settings
* [GetNetworkSwitchDhcpServerPolicyArpInspectionTrustedServers](docs/dhcpserverpolicy/README.md#getnetworkswitchdhcpserverpolicyarpinspectiontrustedservers) - Return the list of servers trusted by Dynamic ARP Inspection on this network
* [GetNetworkSwitchDhcpServerPolicyArpInspectionWarningsByDevice](docs/dhcpserverpolicy/README.md#getnetworkswitchdhcpserverpolicyarpinspectionwarningsbydevice) - Return the devices that have a Dynamic ARP Inspection warning and their warnings
* [UpdateNetworkSwitchDhcpServerPolicy](docs/dhcpserverpolicy/README.md#updatenetworkswitchdhcpserverpolicy) - Update the DHCP server settings
* [UpdateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServer](docs/dhcpserverpolicy/README.md#updatenetworkswitchdhcpserverpolicyarpinspectiontrustedserver) - Update a server that is trusted by Dynamic ARP Inspection on this network

### [DscpTaggingOptions](docs/dscptaggingoptions/README.md)

* [GetNetworkTrafficShapingDscpTaggingOptions](docs/dscptaggingoptions/README.md#getnetworktrafficshapingdscptaggingoptions) - Returns the available DSCP tagging options for your traffic shaping rules.

### [DscpToCosMappings](docs/dscptocosmappings/README.md)

* [GetNetworkSwitchDscpToCosMappings](docs/dscptocosmappings/README.md#getnetworkswitchdscptocosmappings) - Return the DSCP to CoS mappings
* [UpdateNetworkSwitchDscpToCosMappings](docs/dscptocosmappings/README.md#updatenetworkswitchdscptocosmappings) - Update the DSCP to CoS mappings

### [EapOverride](docs/eapoverride/README.md)

* [GetNetworkWirelessSsidEapOverride](docs/eapoverride/README.md#getnetworkwirelessssideapoverride) - Return the EAP overridden parameters for an SSID
* [UpdateNetworkWirelessSsidEapOverride](docs/eapoverride/README.md#updatenetworkwirelessssideapoverride) - Update the EAP overridden parameters for an SSID.

### [EarlyAccess](docs/earlyaccess/README.md)

* [CreateOrganizationEarlyAccessFeaturesOptIn](docs/earlyaccess/README.md#createorganizationearlyaccessfeaturesoptin) - Create a new early access feature opt-in for an organization
* [DeleteOrganizationEarlyAccessFeaturesOptIn](docs/earlyaccess/README.md#deleteorganizationearlyaccessfeaturesoptin) - Delete an early access feature opt-in
* [GetOrganizationEarlyAccessFeatures](docs/earlyaccess/README.md#getorganizationearlyaccessfeatures) - List the available early access features for organization
* [GetOrganizationEarlyAccessFeaturesOptIn](docs/earlyaccess/README.md#getorganizationearlyaccessfeaturesoptin) - Show an early access feature opt-in for an organization
* [GetOrganizationEarlyAccessFeaturesOptIns](docs/earlyaccess/README.md#getorganizationearlyaccessfeaturesoptins) - List the early access feature opt-ins for an organization
* [UpdateOrganizationEarlyAccessFeaturesOptIn](docs/earlyaccess/README.md#updateorganizationearlyaccessfeaturesoptin) - Update an early access feature opt-in for an organization

### [Ethernet](docs/ethernet/README.md)

* [GetOrganizationWirelessDevicesEthernetStatuses](docs/ethernet/README.md#getorganizationwirelessdevicesethernetstatuses) - Endpoint to see power status for wireless devices

### [EventTypes](docs/eventtypes/README.md)

* [GetNetworkEventsEventTypes](docs/eventtypes/README.md#getnetworkeventseventtypes) - List the event type to human-readable description

### [Events](docs/events/README.md)

* [CreateNetworkFirmwareUpgradesStagedEvent](docs/events/README.md#createnetworkfirmwareupgradesstagedevent) - Create a Staged Upgrade Event for a network
* [DeferNetworkFirmwareUpgradesStagedEvents](docs/events/README.md#defernetworkfirmwareupgradesstagedevents) - Postpone by 1 week all pending staged upgrade stages for a network
* [GetNetworkApplianceClientSecurityEvents](docs/events/README.md#getnetworkapplianceclientsecurityevents) - List the security events for a client
* [GetNetworkApplianceSecurityEvents](docs/events/README.md#getnetworkappliancesecurityevents) - List the security events for a network
* [GetNetworkEvents](docs/events/README.md#getnetworkevents) - List the events for the network
* [GetNetworkEventsEventTypes](docs/events/README.md#getnetworkeventseventtypes) - List the event type to human-readable description
* [GetNetworkFirmwareUpgradesStagedEvents](docs/events/README.md#getnetworkfirmwareupgradesstagedevents) - Get the Staged Upgrade Event from a network
* [GetOrganizationApplianceSecurityEvents](docs/events/README.md#getorganizationappliancesecurityevents) - List the security events for an organization
* [RollbacksNetworkFirmwareUpgradesStagedEvents](docs/events/README.md#rollbacksnetworkfirmwareupgradesstagedevents) - Rollback a Staged Upgrade Event for a network
* [UpdateNetworkFirmwareUpgradesStagedEvents](docs/events/README.md#updatenetworkfirmwareupgradesstagedevents) - Update the Staged Upgrade Event for a network

### [ExportEvents](docs/exportevents/README.md)

* [CreateOrganizationInventoryOnboardingCloudMonitoringExportEvent](docs/exportevents/README.md#createorganizationinventoryonboardingcloudmonitoringexportevent) - Imports event logs related to the onboarding app into elastisearch

### [FailedConnections](docs/failedconnections/README.md)

* [GetNetworkWirelessFailedConnections](docs/failedconnections/README.md#getnetworkwirelessfailedconnections) - List of all failed client connection events on this network in a given time range

### [Features](docs/features/README.md)

* [CreateOrganizationEarlyAccessFeaturesOptIn](docs/features/README.md#createorganizationearlyaccessfeaturesoptin) - Create a new early access feature opt-in for an organization
* [DeleteOrganizationEarlyAccessFeaturesOptIn](docs/features/README.md#deleteorganizationearlyaccessfeaturesoptin) - Delete an early access feature opt-in
* [GetOrganizationEarlyAccessFeatures](docs/features/README.md#getorganizationearlyaccessfeatures) - List the available early access features for organization
* [GetOrganizationEarlyAccessFeaturesOptIn](docs/features/README.md#getorganizationearlyaccessfeaturesoptin) - Show an early access feature opt-in for an organization
* [GetOrganizationEarlyAccessFeaturesOptIns](docs/features/README.md#getorganizationearlyaccessfeaturesoptins) - List the early access feature opt-ins for an organization
* [UpdateOrganizationEarlyAccessFeaturesOptIn](docs/features/README.md#updateorganizationearlyaccessfeaturesoptin) - Update an early access feature opt-in for an organization

### [Fields](docs/fields/README.md)

* [UpdateNetworkSmDevicesFields](docs/fields/README.md#updatenetworksmdevicesfields) - Modify the fields of a device

### [Firewall](docs/firewall/README.md)

* [GetNetworkApplianceFirewallCellularFirewallRules](docs/firewall/README.md#getnetworkappliancefirewallcellularfirewallrules) - Return the cellular firewall rules for an MX network
* [GetNetworkApplianceFirewallFirewalledService](docs/firewall/README.md#getnetworkappliancefirewallfirewalledservice) - Return the accessibility settings of the given service ('ICMP', 'web', or 'SNMP')
* [GetNetworkApplianceFirewallFirewalledServices](docs/firewall/README.md#getnetworkappliancefirewallfirewalledservices) - List the appliance services and their accessibility rules
* [GetNetworkApplianceFirewallInboundCellularFirewallRules](docs/firewall/README.md#getnetworkappliancefirewallinboundcellularfirewallrules) - Return the inbound cellular firewall rules for an MX network
* [GetNetworkApplianceFirewallInboundFirewallRules](docs/firewall/README.md#getnetworkappliancefirewallinboundfirewallrules) - Return the inbound firewall rules for an MX network
* [GetNetworkApplianceFirewallL3FirewallRules](docs/firewall/README.md#getnetworkappliancefirewalll3firewallrules) - Return the L3 firewall rules for an MX network
* [GetNetworkApplianceFirewallL7FirewallRules](docs/firewall/README.md#getnetworkappliancefirewalll7firewallrules) - List the MX L7 firewall rules for an MX network
* [GetNetworkApplianceFirewallL7FirewallRulesApplicationCategories](docs/firewall/README.md#getnetworkappliancefirewalll7firewallrulesapplicationcategories) - Return the L7 firewall application categories and their associated applications for an MX network
* [GetNetworkApplianceFirewallOneToManyNatRules](docs/firewall/README.md#getnetworkappliancefirewallonetomanynatrules) - Return the 1:Many NAT mapping rules for an MX network
* [GetNetworkApplianceFirewallOneToOneNatRules](docs/firewall/README.md#getnetworkappliancefirewallonetoonenatrules) - Return the 1:1 NAT mapping rules for an MX network
* [GetNetworkApplianceFirewallPortForwardingRules](docs/firewall/README.md#getnetworkappliancefirewallportforwardingrules) - Return the port forwarding rules for an MX network
* [GetNetworkApplianceFirewallSettings](docs/firewall/README.md#getnetworkappliancefirewallsettings) - Return the firewall settings for this network
* [GetNetworkWirelessSsidFirewallL3FirewallRules](docs/firewall/README.md#getnetworkwirelessssidfirewalll3firewallrules) - Return the L3 firewall rules for an SSID on an MR network
* [GetNetworkWirelessSsidFirewallL7FirewallRules](docs/firewall/README.md#getnetworkwirelessssidfirewalll7firewallrules) - Return the L7 firewall rules for an SSID on an MR network
* [UpdateNetworkApplianceFirewallCellularFirewallRules](docs/firewall/README.md#updatenetworkappliancefirewallcellularfirewallrules) - Update the cellular firewall rules of an MX network
* [UpdateNetworkApplianceFirewallFirewalledService](docs/firewall/README.md#updatenetworkappliancefirewallfirewalledservice) - Updates the accessibility settings for the given service ('ICMP', 'web', or 'SNMP')
* [UpdateNetworkApplianceFirewallInboundCellularFirewallRules](docs/firewall/README.md#updatenetworkappliancefirewallinboundcellularfirewallrules) - Update the inbound cellular firewall rules of an MX network
* [UpdateNetworkApplianceFirewallInboundFirewallRules](docs/firewall/README.md#updatenetworkappliancefirewallinboundfirewallrules) - Update the inbound firewall rules of an MX network
* [UpdateNetworkApplianceFirewallL3FirewallRules](docs/firewall/README.md#updatenetworkappliancefirewalll3firewallrules) - Update the L3 firewall rules of an MX network
* [UpdateNetworkApplianceFirewallL7FirewallRules](docs/firewall/README.md#updatenetworkappliancefirewalll7firewallrules) - Update the MX L7 firewall rules for an MX network
* [UpdateNetworkApplianceFirewallOneToManyNatRules](docs/firewall/README.md#updatenetworkappliancefirewallonetomanynatrules) - Set the 1:Many NAT mapping rules for an MX network
* [UpdateNetworkApplianceFirewallOneToOneNatRules](docs/firewall/README.md#updatenetworkappliancefirewallonetoonenatrules) - Set the 1:1 NAT mapping rules for an MX network
* [UpdateNetworkApplianceFirewallPortForwardingRules](docs/firewall/README.md#updatenetworkappliancefirewallportforwardingrules) - Update the port forwarding rules for an MX network
* [UpdateNetworkApplianceFirewallSettings](docs/firewall/README.md#updatenetworkappliancefirewallsettings) - Update the firewall settings for this network
* [UpdateNetworkWirelessSsidFirewallL3FirewallRules](docs/firewall/README.md#updatenetworkwirelessssidfirewalll3firewallrules) - Update the L3 firewall rules of an SSID on an MR network
* [UpdateNetworkWirelessSsidFirewallL7FirewallRules](docs/firewall/README.md#updatenetworkwirelessssidfirewalll7firewallrules) - Update the L7 firewall rules of an SSID on an MR network

### [FirewalledServices](docs/firewalledservices/README.md)

* [GetNetworkApplianceFirewallFirewalledService](docs/firewalledservices/README.md#getnetworkappliancefirewallfirewalledservice) - Return the accessibility settings of the given service ('ICMP', 'web', or 'SNMP')
* [GetNetworkApplianceFirewallFirewalledServices](docs/firewalledservices/README.md#getnetworkappliancefirewallfirewalledservices) - List the appliance services and their accessibility rules
* [UpdateNetworkApplianceFirewallFirewalledService](docs/firewalledservices/README.md#updatenetworkappliancefirewallfirewalledservice) - Updates the accessibility settings for the given service ('ICMP', 'web', or 'SNMP')

### [Firmware](docs/firmware/README.md)

* [GetOrganizationFirmwareUpgrades](docs/firmware/README.md#getorganizationfirmwareupgrades) - Get firmware upgrade information for an organization
* [GetOrganizationFirmwareUpgradesByDevice](docs/firmware/README.md#getorganizationfirmwareupgradesbydevice) - Get firmware upgrade status for the filtered devices

### [FirmwareUpgrades](docs/firmwareupgrades/README.md)

* [CreateNetworkFirmwareUpgradesRollback](docs/firmwareupgrades/README.md#createnetworkfirmwareupgradesrollback) - Rollback a Firmware Upgrade For A Network
* [CreateNetworkFirmwareUpgradesStagedEvent](docs/firmwareupgrades/README.md#createnetworkfirmwareupgradesstagedevent) - Create a Staged Upgrade Event for a network
* [CreateNetworkFirmwareUpgradesStagedGroup](docs/firmwareupgrades/README.md#createnetworkfirmwareupgradesstagedgroup) - Create a Staged Upgrade Group for a network
* [DeferNetworkFirmwareUpgradesStagedEvents](docs/firmwareupgrades/README.md#defernetworkfirmwareupgradesstagedevents) - Postpone by 1 week all pending staged upgrade stages for a network
* [DeleteNetworkFirmwareUpgradesStagedGroup](docs/firmwareupgrades/README.md#deletenetworkfirmwareupgradesstagedgroup) - Delete a Staged Upgrade Group
* [GetNetworkFirmwareUpgrades](docs/firmwareupgrades/README.md#getnetworkfirmwareupgrades) - Get firmware upgrade information for a network
* [GetNetworkFirmwareUpgradesStagedEvents](docs/firmwareupgrades/README.md#getnetworkfirmwareupgradesstagedevents) - Get the Staged Upgrade Event from a network
* [GetNetworkFirmwareUpgradesStagedGroup](docs/firmwareupgrades/README.md#getnetworkfirmwareupgradesstagedgroup) - Get a Staged Upgrade Group from a network
* [GetNetworkFirmwareUpgradesStagedGroups](docs/firmwareupgrades/README.md#getnetworkfirmwareupgradesstagedgroups) - List of Staged Upgrade Groups in a network
* [GetNetworkFirmwareUpgradesStagedStages](docs/firmwareupgrades/README.md#getnetworkfirmwareupgradesstagedstages) - Order of Staged Upgrade Groups in a network
* [RollbacksNetworkFirmwareUpgradesStagedEvents](docs/firmwareupgrades/README.md#rollbacksnetworkfirmwareupgradesstagedevents) - Rollback a Staged Upgrade Event for a network
* [UpdateNetworkFirmwareUpgrades](docs/firmwareupgrades/README.md#updatenetworkfirmwareupgrades) - Update firmware upgrade information for a network
* [UpdateNetworkFirmwareUpgradesStagedEvents](docs/firmwareupgrades/README.md#updatenetworkfirmwareupgradesstagedevents) - Update the Staged Upgrade Event for a network
* [UpdateNetworkFirmwareUpgradesStagedGroup](docs/firmwareupgrades/README.md#updatenetworkfirmwareupgradesstagedgroup) - Update a Staged Upgrade Group for a network
* [UpdateNetworkFirmwareUpgradesStagedStages](docs/firmwareupgrades/README.md#updatenetworkfirmwareupgradesstagedstages) - Assign Staged Upgrade Group order in the sequence.

### [FloorPlans](docs/floorplans/README.md)

* [CreateNetworkFloorPlan](docs/floorplans/README.md#createnetworkfloorplan) - Upload a floor plan
* [DeleteNetworkFloorPlan](docs/floorplans/README.md#deletenetworkfloorplan) - Destroy a floor plan
* [GetNetworkFloorPlan](docs/floorplans/README.md#getnetworkfloorplan) - Find a floor plan by ID
* [GetNetworkFloorPlans](docs/floorplans/README.md#getnetworkfloorplans) - List the floor plans that belong to your network
* [UpdateNetworkFloorPlan](docs/floorplans/README.md#updatenetworkfloorplan) - Update a floor plan's geolocation and other meta data

### [GroupPolicies](docs/grouppolicies/README.md)

* [CreateNetworkGroupPolicy](docs/grouppolicies/README.md#createnetworkgrouppolicy) - Create a group policy
* [DeleteNetworkGroupPolicy](docs/grouppolicies/README.md#deletenetworkgrouppolicy) - Delete a group policy
* [GetNetworkGroupPolicies](docs/grouppolicies/README.md#getnetworkgrouppolicies) - List the group policies in a network
* [GetNetworkGroupPolicy](docs/grouppolicies/README.md#getnetworkgrouppolicy) - Display a group policy
* [UpdateNetworkGroupPolicy](docs/grouppolicies/README.md#updatenetworkgrouppolicy) - Update a group policy

### [Groups](docs/groups/README.md)

* [CreateNetworkFirmwareUpgradesStagedGroup](docs/groups/README.md#createnetworkfirmwareupgradesstagedgroup) - Create a Staged Upgrade Group for a network
* [CreateOrganizationAdaptivePolicyGroup](docs/groups/README.md#createorganizationadaptivepolicygroup) - Creates a new adaptive policy group
* [CreateOrganizationPolicyObjectsGroup](docs/groups/README.md#createorganizationpolicyobjectsgroup) - Creates a new Policy Object Group.
* [DeleteNetworkFirmwareUpgradesStagedGroup](docs/groups/README.md#deletenetworkfirmwareupgradesstagedgroup) - Delete a Staged Upgrade Group
* [DeleteOrganizationAdaptivePolicyGroup](docs/groups/README.md#deleteorganizationadaptivepolicygroup) - Deletes the specified adaptive policy group and any associated policies and references
* [DeleteOrganizationPolicyObjectsGroup](docs/groups/README.md#deleteorganizationpolicyobjectsgroup) - Deletes a Policy Object Group.
* [GetNetworkFirmwareUpgradesStagedGroup](docs/groups/README.md#getnetworkfirmwareupgradesstagedgroup) - Get a Staged Upgrade Group from a network
* [GetNetworkFirmwareUpgradesStagedGroups](docs/groups/README.md#getnetworkfirmwareupgradesstagedgroups) - List of Staged Upgrade Groups in a network
* [GetOrganizationAdaptivePolicyGroup](docs/groups/README.md#getorganizationadaptivepolicygroup) - Returns an adaptive policy group
* [GetOrganizationAdaptivePolicyGroups](docs/groups/README.md#getorganizationadaptivepolicygroups) - List adaptive policy groups in a organization
* [GetOrganizationPolicyObjectsGroup](docs/groups/README.md#getorganizationpolicyobjectsgroup) - Shows details of a Policy Object Group.
* [GetOrganizationPolicyObjectsGroups](docs/groups/README.md#getorganizationpolicyobjectsgroups) - Lists Policy Object Groups belonging to the organization.
* [UpdateNetworkFirmwareUpgradesStagedGroup](docs/groups/README.md#updatenetworkfirmwareupgradesstagedgroup) - Update a Staged Upgrade Group for a network
* [UpdateOrganizationAdaptivePolicyGroup](docs/groups/README.md#updateorganizationadaptivepolicygroup) - Updates an adaptive policy group
* [UpdateOrganizationPolicyObjectsGroup](docs/groups/README.md#updateorganizationpolicyobjectsgroup) - Updates a Policy Object Group.

### [Health](docs/health/README.md)

* [GetNetworkHealthAlerts](docs/health/README.md#getnetworkhealthalerts) - Return all global alerts on this network

### [HealthByTime](docs/healthbytime/README.md)

* [GetNetworkInsightApplicationHealthByTime](docs/healthbytime/README.md#getnetworkinsightapplicationhealthbytime) - Get application health by time

### [History](docs/history/README.md)

* [GetDeviceCameraAnalyticsZoneHistory](docs/history/README.md#getdevicecameraanalyticszonehistory) - Return historical records for analytic zones
* [GetNetworkAlertsHistory](docs/history/README.md#getnetworkalertshistory) - Return the alert history for this network
* [GetOrganizationSensorReadingsHistory](docs/history/README.md#getorganizationsensorreadingshistory) - Return all reported readings from sensors in a given timespan, sorted by timestamp

### [Hotspot20](docs/hotspot20/README.md)

* [GetNetworkWirelessSsidHotspot20](docs/hotspot20/README.md#getnetworkwirelessssidhotspot20) - Return the Hotspot 2.0 settings for an SSID
* [UpdateNetworkWirelessSsidHotspot20](docs/hotspot20/README.md#updatenetworkwirelessssidhotspot20) - Update the Hotspot 2.0 settings of an SSID

### [HTTPServers](docs/httpservers/README.md)

* [CreateNetworkWebhooksHTTPServer](docs/httpservers/README.md#createnetworkwebhookshttpserver) - Add an HTTP server to a network
* [DeleteNetworkWebhooksHTTPServer](docs/httpservers/README.md#deletenetworkwebhookshttpserver) - Delete an HTTP server from a network
* [GetNetworkWebhooksHTTPServer](docs/httpservers/README.md#getnetworkwebhookshttpserver) - Return an HTTP server for a network
* [GetNetworkWebhooksHTTPServers](docs/httpservers/README.md#getnetworkwebhookshttpservers) - List the HTTP servers for a network
* [UpdateNetworkWebhooksHTTPServer](docs/httpservers/README.md#updatenetworkwebhookshttpserver) - Update an HTTP server

### [Identities](docs/identities/README.md)

* [GetAdministeredIdentitiesMe](docs/identities/README.md#getadministeredidentitiesme) - Returns the identity of the current user.

### [IdentityPsks](docs/identitypsks/README.md)

* [CreateNetworkWirelessSsidIdentityPsk](docs/identitypsks/README.md#createnetworkwirelessssididentitypsk) - Create an Identity PSK
* [DeleteNetworkWirelessSsidIdentityPsk](docs/identitypsks/README.md#deletenetworkwirelessssididentitypsk) - Delete an Identity PSK
* [GetNetworkWirelessSsidIdentityPsk](docs/identitypsks/README.md#getnetworkwirelessssididentitypsk) - Return an Identity PSK
* [GetNetworkWirelessSsidIdentityPsks](docs/identitypsks/README.md#getnetworkwirelessssididentitypsks) - List all Identity PSKs in a wireless network
* [UpdateNetworkWirelessSsidIdentityPsk](docs/identitypsks/README.md#updatenetworkwirelessssididentitypsk) - Update an Identity PSK

### [Idps](docs/idps/README.md)

* [CreateOrganizationSamlIdp](docs/idps/README.md#createorganizationsamlidp) - Create a SAML IdP for your organization.
* [DeleteOrganizationSamlIdp](docs/idps/README.md#deleteorganizationsamlidp) - Remove a SAML IdP in your organization.
* [GetOrganizationSamlIdp](docs/idps/README.md#getorganizationsamlidp) - Get a SAML IdP from your organization.
* [GetOrganizationSamlIdps](docs/idps/README.md#getorganizationsamlidps) - List the SAML IdPs in your organization.
* [UpdateOrganizationSamlIdp](docs/idps/README.md#updateorganizationsamlidp) - Update a SAML IdP in your organization

### [Imports](docs/imports/README.md)

* [CreateOrganizationInventoryOnboardingCloudMonitoringImport](docs/imports/README.md#createorganizationinventoryonboardingcloudmonitoringimport) - Commits the import operation to complete the onboarding of a device into Dashboard for monitoring.
* [GetOrganizationInventoryOnboardingCloudMonitoringImports](docs/imports/README.md#getorganizationinventoryonboardingcloudmonitoringimports) - Check the status of a committed Import operation

### [InboundCellularFirewallRules](docs/inboundcellularfirewallrules/README.md)

* [GetNetworkApplianceFirewallInboundCellularFirewallRules](docs/inboundcellularfirewallrules/README.md#getnetworkappliancefirewallinboundcellularfirewallrules) - Return the inbound cellular firewall rules for an MX network
* [UpdateNetworkApplianceFirewallInboundCellularFirewallRules](docs/inboundcellularfirewallrules/README.md#updatenetworkappliancefirewallinboundcellularfirewallrules) - Update the inbound cellular firewall rules of an MX network

### [InboundFirewallRules](docs/inboundfirewallrules/README.md)

* [GetNetworkApplianceFirewallInboundFirewallRules](docs/inboundfirewallrules/README.md#getnetworkappliancefirewallinboundfirewallrules) - Return the inbound firewall rules for an MX network
* [UpdateNetworkApplianceFirewallInboundFirewallRules](docs/inboundfirewallrules/README.md#updatenetworkappliancefirewallinboundfirewallrules) - Update the inbound firewall rules of an MX network

### [Insight](docs/insight/README.md)

* [CreateOrganizationInsightMonitoredMediaServer](docs/insight/README.md#createorganizationinsightmonitoredmediaserver) - Add a media server to be monitored for this organization
* [DeleteOrganizationInsightMonitoredMediaServer](docs/insight/README.md#deleteorganizationinsightmonitoredmediaserver) - Delete a monitored media server from this organization
* [GetNetworkInsightApplicationHealthByTime](docs/insight/README.md#getnetworkinsightapplicationhealthbytime) - Get application health by time
* [GetOrganizationInsightApplications](docs/insight/README.md#getorganizationinsightapplications) - List all Insight tracked applications
* [GetOrganizationInsightMonitoredMediaServer](docs/insight/README.md#getorganizationinsightmonitoredmediaserver) - Return a monitored media server for this organization
* [GetOrganizationInsightMonitoredMediaServers](docs/insight/README.md#getorganizationinsightmonitoredmediaservers) - List the monitored media servers for this organization
* [UpdateOrganizationInsightMonitoredMediaServer](docs/insight/README.md#updateorganizationinsightmonitoredmediaserver) - Update a monitored media server for this organization

### [Interfaces](docs/interfaces/README.md)

* [CreateDeviceSwitchRoutingInterface](docs/interfaces/README.md#createdeviceswitchroutinginterface) - Create a layer 3 interface for a switch
* [CreateNetworkSwitchStackRoutingInterface](docs/interfaces/README.md#createnetworkswitchstackroutinginterface) - Create a layer 3 interface for a switch stack
* [DeleteDeviceSwitchRoutingInterface](docs/interfaces/README.md#deletedeviceswitchroutinginterface) - Delete a layer 3 interface from the switch
* [DeleteNetworkSwitchStackRoutingInterface](docs/interfaces/README.md#deletenetworkswitchstackroutinginterface) - Delete a layer 3 interface from a switch stack
* [GetDeviceSwitchRoutingInterface](docs/interfaces/README.md#getdeviceswitchroutinginterface) - Return a layer 3 interface for a switch
* [GetDeviceSwitchRoutingInterfaceDhcp](docs/interfaces/README.md#getdeviceswitchroutinginterfacedhcp) - Return a layer 3 interface DHCP configuration for a switch
* [GetDeviceSwitchRoutingInterfaces](docs/interfaces/README.md#getdeviceswitchroutinginterfaces) - List layer 3 interfaces for a switch
* [GetNetworkSwitchStackRoutingInterface](docs/interfaces/README.md#getnetworkswitchstackroutinginterface) - Return a layer 3 interface from a switch stack
* [GetNetworkSwitchStackRoutingInterfaceDhcp](docs/interfaces/README.md#getnetworkswitchstackroutinginterfacedhcp) - Return a layer 3 interface DHCP configuration for a switch stack
* [GetNetworkSwitchStackRoutingInterfaces](docs/interfaces/README.md#getnetworkswitchstackroutinginterfaces) - List layer 3 interfaces for a switch stack
* [UpdateDeviceSwitchRoutingInterface](docs/interfaces/README.md#updatedeviceswitchroutinginterface) - Update a layer 3 interface for a switch
* [UpdateDeviceSwitchRoutingInterfaceDhcp](docs/interfaces/README.md#updatedeviceswitchroutinginterfacedhcp) - Update a layer 3 interface DHCP configuration for a switch
* [UpdateNetworkSwitchStackRoutingInterface](docs/interfaces/README.md#updatenetworkswitchstackroutinginterface) - Update a layer 3 interface for a switch stack
* [UpdateNetworkSwitchStackRoutingInterfaceDhcp](docs/interfaces/README.md#updatenetworkswitchstackroutinginterfacedhcp) - Update a layer 3 interface DHCP configuration for a switch stack

### [Intrusion](docs/intrusion/README.md)

* [GetNetworkApplianceSecurityIntrusion](docs/intrusion/README.md#getnetworkappliancesecurityintrusion) - Returns all supported intrusion settings for an MX network
* [GetOrganizationApplianceSecurityIntrusion](docs/intrusion/README.md#getorganizationappliancesecurityintrusion) - Returns all supported intrusion settings for an organization
* [UpdateNetworkApplianceSecurityIntrusion](docs/intrusion/README.md#updatenetworkappliancesecurityintrusion) - Set the supported intrusion settings for an MX network
* [UpdateOrganizationApplianceSecurityIntrusion](docs/intrusion/README.md#updateorganizationappliancesecurityintrusion) - Sets supported intrusion settings for an organization

### [Inventory](docs/inventory/README.md)

* [ClaimIntoOrganizationInventory](docs/inventory/README.md#claimintoorganizationinventory) - Claim a list of devices, licenses, and/or orders into an organization inventory
* [CreateOrganizationInventoryOnboardingCloudMonitoringExportEvent](docs/inventory/README.md#createorganizationinventoryonboardingcloudmonitoringexportevent) - Imports event logs related to the onboarding app into elastisearch
* [CreateOrganizationInventoryOnboardingCloudMonitoringImport](docs/inventory/README.md#createorganizationinventoryonboardingcloudmonitoringimport) - Commits the import operation to complete the onboarding of a device into Dashboard for monitoring.
* [CreateOrganizationInventoryOnboardingCloudMonitoringPrepare](docs/inventory/README.md#createorganizationinventoryonboardingcloudmonitoringprepare) - Initiates or updates an import session
* [GetOrganizationInventoryDevice](docs/inventory/README.md#getorganizationinventorydevice) - Return a single device from the inventory of an organization
* [GetOrganizationInventoryDevices](docs/inventory/README.md#getorganizationinventorydevices) - Return the device inventory for an organization
* [GetOrganizationInventoryOnboardingCloudMonitoringImports](docs/inventory/README.md#getorganizationinventoryonboardingcloudmonitoringimports) - Check the status of a committed Import operation
* [GetOrganizationInventoryOnboardingCloudMonitoringNetworks](docs/inventory/README.md#getorganizationinventoryonboardingcloudmonitoringnetworks) - Returns list of networks eligible for adding cloud monitored device
* [ReleaseFromOrganizationInventory](docs/inventory/README.md#releasefromorganizationinventory) - Release a list of claimed devices from an organization.

### [L3FirewallRules](docs/l3firewallrules/README.md)

* [GetNetworkApplianceFirewallL3FirewallRules](docs/l3firewallrules/README.md#getnetworkappliancefirewalll3firewallrules) - Return the L3 firewall rules for an MX network
* [GetNetworkWirelessSsidFirewallL3FirewallRules](docs/l3firewallrules/README.md#getnetworkwirelessssidfirewalll3firewallrules) - Return the L3 firewall rules for an SSID on an MR network
* [UpdateNetworkApplianceFirewallL3FirewallRules](docs/l3firewallrules/README.md#updatenetworkappliancefirewalll3firewallrules) - Update the L3 firewall rules of an MX network
* [UpdateNetworkWirelessSsidFirewallL3FirewallRules](docs/l3firewallrules/README.md#updatenetworkwirelessssidfirewalll3firewallrules) - Update the L3 firewall rules of an SSID on an MR network

### [L7FirewallRules](docs/l7firewallrules/README.md)

* [GetNetworkApplianceFirewallL7FirewallRules](docs/l7firewallrules/README.md#getnetworkappliancefirewalll7firewallrules) - List the MX L7 firewall rules for an MX network
* [GetNetworkApplianceFirewallL7FirewallRulesApplicationCategories](docs/l7firewallrules/README.md#getnetworkappliancefirewalll7firewallrulesapplicationcategories) - Return the L7 firewall application categories and their associated applications for an MX network
* [GetNetworkWirelessSsidFirewallL7FirewallRules](docs/l7firewallrules/README.md#getnetworkwirelessssidfirewalll7firewallrules) - Return the L7 firewall rules for an SSID on an MR network
* [UpdateNetworkApplianceFirewallL7FirewallRules](docs/l7firewallrules/README.md#updatenetworkappliancefirewalll7firewallrules) - Update the MX L7 firewall rules for an MX network
* [UpdateNetworkWirelessSsidFirewallL7FirewallRules](docs/l7firewallrules/README.md#updatenetworkwirelessssidfirewalll7firewallrules) - Update the L7 firewall rules of an SSID on an MR network

### [Lan](docs/lan/README.md)

* [GetDeviceCellularGatewayLan](docs/lan/README.md#getdevicecellulargatewaylan) - Show the LAN Settings of a MG
* [UpdateDeviceCellularGatewayLan](docs/lan/README.md#updatedevicecellulargatewaylan) - Update the LAN Settings for a single MG.

### [LatencyHistory](docs/latencyhistory/README.md)

* [GetNetworkWirelessClientLatencyHistory](docs/latencyhistory/README.md#getnetworkwirelessclientlatencyhistory) - Return the latency history for a client
* [GetNetworkWirelessLatencyHistory](docs/latencyhistory/README.md#getnetworkwirelesslatencyhistory) - Return average wireless latency over time for a network, device, or network client

### [LatencyStats](docs/latencystats/README.md)

* [GetDeviceWirelessLatencyStats](docs/latencystats/README.md#getdevicewirelesslatencystats) - Aggregated latency info for a given AP on this network
* [GetNetworkWirelessClientLatencyStats](docs/latencystats/README.md#getnetworkwirelessclientlatencystats) - Aggregated latency info for a given client on this network
* [GetNetworkWirelessClientsLatencyStats](docs/latencystats/README.md#getnetworkwirelessclientslatencystats) - Aggregated latency info for this network, grouped by clients
* [GetNetworkWirelessDevicesLatencyStats](docs/latencystats/README.md#getnetworkwirelessdeviceslatencystats) - Aggregated latency info for this network, grouped by node
* [GetNetworkWirelessLatencyStats](docs/latencystats/README.md#getnetworkwirelesslatencystats) - Aggregated latency info for this network

### [Latest](docs/latest/README.md)

* [GetOrganizationSensorReadingsLatest](docs/latest/README.md#getorganizationsensorreadingslatest) - Return the latest available reading for each metric from each sensor, sorted by sensor serial

### [Licenses](docs/licenses/README.md)

* [AssignOrganizationLicensesSeats](docs/licenses/README.md#assignorganizationlicensesseats) - Assign SM seats to a network
* [GetOrganizationLicense](docs/licenses/README.md#getorganizationlicense) - Display a license
* [GetOrganizationLicenses](docs/licenses/README.md#getorganizationlicenses) - List the licenses for an organization
* [GetOrganizationLicensesOverview](docs/licenses/README.md#getorganizationlicensesoverview) - Return an overview of the license state for an organization
* [GetOrganizationLicensingCotermLicenses](docs/licenses/README.md#getorganizationlicensingcotermlicenses) - List the licenses in a coterm organization
* [MoveOrganizationLicenses](docs/licenses/README.md#moveorganizationlicenses) - Move licenses to another organization
* [MoveOrganizationLicensesSeats](docs/licenses/README.md#moveorganizationlicensesseats) - Move SM seats to another organization
* [MoveOrganizationLicensingCotermLicenses](docs/licenses/README.md#moveorganizationlicensingcotermlicenses) - Moves a license to a different organization (coterm only)
* [RenewOrganizationLicensesSeats](docs/licenses/README.md#reneworganizationlicensesseats) - Renew SM seats of a license
* [UpdateOrganizationLicense](docs/licenses/README.md#updateorganizationlicense) - Update a license

### [Licensing](docs/licensing/README.md)

* [GetOrganizationLicensingCotermLicenses](docs/licensing/README.md#getorganizationlicensingcotermlicenses) - List the licenses in a coterm organization
* [MoveOrganizationLicensingCotermLicenses](docs/licensing/README.md#moveorganizationlicensingcotermlicenses) - Moves a license to a different organization (coterm only)

### [LinkAggregations](docs/linkaggregations/README.md)

* [CreateNetworkSwitchLinkAggregation](docs/linkaggregations/README.md#createnetworkswitchlinkaggregation) - Create a link aggregation group
* [DeleteNetworkSwitchLinkAggregation](docs/linkaggregations/README.md#deletenetworkswitchlinkaggregation) - Split a link aggregation group into separate ports
* [GetNetworkSwitchLinkAggregations](docs/linkaggregations/README.md#getnetworkswitchlinkaggregations) - List link aggregation groups
* [UpdateNetworkSwitchLinkAggregation](docs/linkaggregations/README.md#updatenetworkswitchlinkaggregation) - Update a link aggregation group

### [LinkLayer](docs/linklayer/README.md)

* [GetNetworkTopologyLinkLayer](docs/linklayer/README.md#getnetworktopologylinklayer) - List the LLDP and CDP information for all discovered devices and connections in a network.

### [Live](docs/live/README.md)

* [GetDeviceCameraAnalyticsLive](docs/live/README.md#getdevicecameraanalyticslive) - Returns live state from camera of analytics zones

### [LiveTools](docs/livetools/README.md)

* [BlinkDeviceLeds](docs/livetools/README.md#blinkdeviceleds) - Blink the LEDs on a device
* [CreateDeviceLiveToolsPing](docs/livetools/README.md#createdevicelivetoolsping) - Enqueue a job to ping a target host from the device
* [CreateDeviceLiveToolsPingDevice](docs/livetools/README.md#createdevicelivetoolspingdevice) - Enqueue a job to check connectivity status to the device
* [CycleDeviceSwitchPorts](docs/livetools/README.md#cycledeviceswitchports) - Cycle a set of switch ports
* [GetDeviceLiveToolsPing](docs/livetools/README.md#getdevicelivetoolsping) - Return a ping job
* [GetDeviceLiveToolsPingDevice](docs/livetools/README.md#getdevicelivetoolspingdevice) - Return a ping device job
* [RebootDevice](docs/livetools/README.md#rebootdevice) - Reboot a device

### [LldpCdp](docs/lldpcdp/README.md)

* [GetDeviceLldpCdp](docs/lldpcdp/README.md#getdevicelldpcdp) - List LLDP and CDP information for a device

### [LoginSecurity](docs/loginsecurity/README.md)

* [GetOrganizationLoginSecurity](docs/loginsecurity/README.md#getorganizationloginsecurity) - Returns the login security settings for an organization.
* [UpdateOrganizationLoginSecurity](docs/loginsecurity/README.md#updateorganizationloginsecurity) - Update the login security settings for an organization

### [Logs](docs/logs/README.md)

* [GetOrganizationWebhooksLogs](docs/logs/README.md#getorganizationwebhookslogs) - Return the log of webhook POSTs sent

### [LossAndLatencyHistory](docs/lossandlatencyhistory/README.md)

* [GetDeviceLossAndLatencyHistory](docs/lossandlatencyhistory/README.md#getdevicelossandlatencyhistory) - Get the uplink loss percentage and latency in milliseconds, and goodput in kilobits per second for a wired network device.

### [Malware](docs/malware/README.md)

* [GetNetworkApplianceSecurityMalware](docs/malware/README.md#getnetworkappliancesecuritymalware) - Returns all supported malware settings for an MX network
* [UpdateNetworkApplianceSecurityMalware](docs/malware/README.md#updatenetworkappliancesecuritymalware) - Set the supported malware settings for an MX network

### [ManagementInterface](docs/managementinterface/README.md)

* [GetDeviceManagementInterface](docs/managementinterface/README.md#getdevicemanagementinterface) - Return the management interface settings for a device
* [UpdateDeviceManagementInterface](docs/managementinterface/README.md#updatedevicemanagementinterface) - Update the management interface settings for a device

### [Manufacturers](docs/manufacturers/README.md)

* [GetOrganizationSummaryTopClientsManufacturersByUsage](docs/manufacturers/README.md#getorganizationsummarytopclientsmanufacturersbyusage) - Return metrics for organization's top clients by data usage (in mb) over given time range, grouped by manufacturer.

### [Me](docs/me/README.md)

* [GetAdministeredIdentitiesMe](docs/me/README.md#getadministeredidentitiesme) - Returns the identity of the current user.

### [MerakiAuthUsers](docs/merakiauthusers/README.md)

* [CreateNetworkMerakiAuthUser](docs/merakiauthusers/README.md#createnetworkmerakiauthuser) - Authorize a user configured with Meraki Authentication for a network (currently supports 802.1X, splash guest, and client VPN users, and currently, organizations have a 50,000 user cap)
* [DeleteNetworkMerakiAuthUser](docs/merakiauthusers/README.md#deletenetworkmerakiauthuser) - Deauthorize a user
* [GetNetworkMerakiAuthUser](docs/merakiauthusers/README.md#getnetworkmerakiauthuser) - Return the Meraki Auth splash guest, RADIUS, or client VPN user
* [GetNetworkMerakiAuthUsers](docs/merakiauthusers/README.md#getnetworkmerakiauthusers) - List the users configured under Meraki Authentication for a network (splash guest or RADIUS users for a wireless network, or client VPN users for a wired network)
* [UpdateNetworkMerakiAuthUser](docs/merakiauthusers/README.md#updatenetworkmerakiauthuser) - Update a user configured with Meraki Authentication (currently, 802.1X RADIUS, splash guest, and client VPN users can be updated)

### [MeshStatuses](docs/meshstatuses/README.md)

* [GetNetworkWirelessMeshStatuses](docs/meshstatuses/README.md#getnetworkwirelessmeshstatuses) - List wireless mesh statuses for repeaters

### [Models](docs/models/README.md)

* [GetOrganizationSummaryTopDevicesModelsByUsage](docs/models/README.md#getorganizationsummarytopdevicesmodelsbyusage) - Return metrics for organization's top 10 device models sorted by data usage over given time range

### [Monitor](docs/monitor/README.md)

* [GenerateDeviceCameraSnapshot](docs/monitor/README.md#generatedevicecamerasnapshot) - Generate a snapshot of what the camera sees at the specified time and return a link to that image.
* [GetAdministeredIdentitiesMe](docs/monitor/README.md#getadministeredidentitiesme) - Returns the identity of the current user.
* [GetDeviceApplianceDhcpSubnets](docs/monitor/README.md#getdeviceappliancedhcpsubnets) - Return the DHCP subnet information for an appliance
* [GetDeviceAppliancePerformance](docs/monitor/README.md#getdeviceapplianceperformance) - Return the performance score for a single MX
* [GetDeviceAppliancePrefixesDelegated](docs/monitor/README.md#getdeviceapplianceprefixesdelegated) - Return current delegated IPv6 prefixes on an appliance.
* [GetDeviceAppliancePrefixesDelegatedVlanAssignments](docs/monitor/README.md#getdeviceapplianceprefixesdelegatedvlanassignments) - Return prefixes assigned to all IPv6 enabled VLANs on an appliance.
* [GetDeviceCameraAnalyticsLive](docs/monitor/README.md#getdevicecameraanalyticslive) - Returns live state from camera of analytics zones
* [GetDeviceCameraAnalyticsOverview](docs/monitor/README.md#getdevicecameraanalyticsoverview) - Returns an overview of aggregate analytics data for a timespan
* [GetDeviceCameraAnalyticsRecent](docs/monitor/README.md#getdevicecameraanalyticsrecent) - Returns most recent record for analytics zones
* [GetDeviceCameraAnalyticsZoneHistory](docs/monitor/README.md#getdevicecameraanalyticszonehistory) - Return historical records for analytic zones
* [GetDeviceCameraAnalyticsZones](docs/monitor/README.md#getdevicecameraanalyticszones) - Returns all configured analytic zones for this camera
* [GetDeviceClients](docs/monitor/README.md#getdeviceclients) - List the clients of a device, up to a maximum of a month ago
* [GetDeviceLldpCdp](docs/monitor/README.md#getdevicelldpcdp) - List LLDP and CDP information for a device
* [GetDeviceLossAndLatencyHistory](docs/monitor/README.md#getdevicelossandlatencyhistory) - Get the uplink loss percentage and latency in milliseconds, and goodput in kilobits per second for a wired network device.
* [GetDeviceSwitchPortsStatuses](docs/monitor/README.md#getdeviceswitchportsstatuses) - Return the status for all the ports of a switch
* [GetDeviceSwitchPortsStatusesPackets](docs/monitor/README.md#getdeviceswitchportsstatusespackets) - Return the packet counters for all the ports of a switch
* [GetDeviceWirelessConnectionStats](docs/monitor/README.md#getdevicewirelessconnectionstats) - Aggregated connectivity info for a given AP on this network
* [GetDeviceWirelessLatencyStats](docs/monitor/README.md#getdevicewirelesslatencystats) - Aggregated latency info for a given AP on this network
* [GetDeviceWirelessStatus](docs/monitor/README.md#getdevicewirelessstatus) - Return the SSID statuses of an access point
* [GetNetworkAlertsHistory](docs/monitor/README.md#getnetworkalertshistory) - Return the alert history for this network
* [GetNetworkApplianceClientSecurityEvents](docs/monitor/README.md#getnetworkapplianceclientsecurityevents) - List the security events for a client
* [GetNetworkApplianceSecurityEvents](docs/monitor/README.md#getnetworkappliancesecurityevents) - List the security events for a network
* [GetNetworkApplianceUplinksUsageHistory](docs/monitor/README.md#getnetworkapplianceuplinksusagehistory) - Get the sent and received bytes for each uplink of a network.
* [GetNetworkBluetoothClient](docs/monitor/README.md#getnetworkbluetoothclient) - Return a Bluetooth client
* [GetNetworkBluetoothClients](docs/monitor/README.md#getnetworkbluetoothclients) - List the Bluetooth clients seen by APs in this network
* [GetNetworkClient](docs/monitor/README.md#getnetworkclient) - Return the client associated with the given identifier
* [GetNetworkClientTrafficHistory](docs/monitor/README.md#getnetworkclienttraffichistory) - Return the client's network traffic data over time
* [GetNetworkClientUsageHistory](docs/monitor/README.md#getnetworkclientusagehistory) - Return the client's daily usage history
* [GetNetworkClients](docs/monitor/README.md#getnetworkclients) - List the clients that have used this network in the timespan
* [GetNetworkClientsApplicationUsage](docs/monitor/README.md#getnetworkclientsapplicationusage) - Return the application usage data for clients
* [GetNetworkClientsBandwidthUsageHistory](docs/monitor/README.md#getnetworkclientsbandwidthusagehistory) - Returns a timeseries of total traffic consumption rates for all clients on a network within a given timespan, in megabits per second.
* [GetNetworkClientsOverview](docs/monitor/README.md#getnetworkclientsoverview) - Return overview statistics for network clients
* [GetNetworkClientsUsageHistories](docs/monitor/README.md#getnetworkclientsusagehistories) - Return the usage histories for clients
* [GetNetworkEvents](docs/monitor/README.md#getnetworkevents) - List the events for the network
* [GetNetworkEventsEventTypes](docs/monitor/README.md#getnetworkeventseventtypes) - List the event type to human-readable description
* [GetNetworkInsightApplicationHealthByTime](docs/monitor/README.md#getnetworkinsightapplicationhealthbytime) - Get application health by time
* [GetNetworkNetworkHealthChannelUtilization](docs/monitor/README.md#getnetworknetworkhealthchannelutilization) - Get the channel utilization over each radio for all APs in a network.
* [GetNetworkSensorAlertsCurrentOverviewByMetric](docs/monitor/README.md#getnetworksensoralertscurrentoverviewbymetric) - Return an overview of currently alerting sensors by metric
* [GetNetworkSensorAlertsOverviewByMetric](docs/monitor/README.md#getnetworksensoralertsoverviewbymetric) - Return an overview of alert occurrences over a timespan, by metric
* [GetNetworkSmDeviceCellularUsageHistory](docs/monitor/README.md#getnetworksmdevicecellularusagehistory) - Return the client's daily cellular data usage history
* [GetNetworkSmDeviceConnectivity](docs/monitor/README.md#getnetworksmdeviceconnectivity) - Returns historical connectivity data (whether a device is regularly checking in to Dashboard).
* [GetNetworkSmDeviceDesktopLogs](docs/monitor/README.md#getnetworksmdevicedesktoplogs) - Return historical records of various Systems Manager network connection details for desktop devices.
* [GetNetworkSmDeviceDeviceCommandLogs](docs/monitor/README.md#getnetworksmdevicedevicecommandlogs) - Return historical records of commands sent to Systems Manager devices
* [GetNetworkSmDevicePerformanceHistory](docs/monitor/README.md#getnetworksmdeviceperformancehistory) - Return historical records of various Systems Manager client metrics for desktop devices.
* [GetNetworkSplashLoginAttempts](docs/monitor/README.md#getnetworksplashloginattempts) - List the splash login attempts for a network
* [GetNetworkTopologyLinkLayer](docs/monitor/README.md#getnetworktopologylinklayer) - List the LLDP and CDP information for all discovered devices and connections in a network.
* [GetNetworkTraffic](docs/monitor/README.md#getnetworktraffic) - Return the traffic analysis data for this network
* [GetNetworkWirelessAirMarshal](docs/monitor/README.md#getnetworkwirelessairmarshal) - List Air Marshal scan results from a network
* [GetNetworkWirelessChannelUtilizationHistory](docs/monitor/README.md#getnetworkwirelesschannelutilizationhistory) - Return AP channel utilization over time for a device or network client
* [GetNetworkWirelessClientConnectionStats](docs/monitor/README.md#getnetworkwirelessclientconnectionstats) - Aggregated connectivity info for a given client on this network
* [GetNetworkWirelessClientConnectivityEvents](docs/monitor/README.md#getnetworkwirelessclientconnectivityevents) - List the wireless connectivity events for a client within a network in the timespan.
* [GetNetworkWirelessClientCountHistory](docs/monitor/README.md#getnetworkwirelessclientcounthistory) - Return wireless client counts over time for a network, device, or network client
* [GetNetworkWirelessClientLatencyHistory](docs/monitor/README.md#getnetworkwirelessclientlatencyhistory) - Return the latency history for a client
* [GetNetworkWirelessClientLatencyStats](docs/monitor/README.md#getnetworkwirelessclientlatencystats) - Aggregated latency info for a given client on this network
* [GetNetworkWirelessClientsConnectionStats](docs/monitor/README.md#getnetworkwirelessclientsconnectionstats) - Aggregated connectivity info for this network, grouped by clients
* [GetNetworkWirelessClientsLatencyStats](docs/monitor/README.md#getnetworkwirelessclientslatencystats) - Aggregated latency info for this network, grouped by clients
* [GetNetworkWirelessConnectionStats](docs/monitor/README.md#getnetworkwirelessconnectionstats) - Aggregated connectivity info for this network
* [GetNetworkWirelessDataRateHistory](docs/monitor/README.md#getnetworkwirelessdataratehistory) - Return PHY data rates over time for a network, device, or network client
* [GetNetworkWirelessDevicesConnectionStats](docs/monitor/README.md#getnetworkwirelessdevicesconnectionstats) - Aggregated connectivity info for this network, grouped by node
* [GetNetworkWirelessDevicesLatencyStats](docs/monitor/README.md#getnetworkwirelessdeviceslatencystats) - Aggregated latency info for this network, grouped by node
* [GetNetworkWirelessFailedConnections](docs/monitor/README.md#getnetworkwirelessfailedconnections) - List of all failed client connection events on this network in a given time range
* [GetNetworkWirelessLatencyHistory](docs/monitor/README.md#getnetworkwirelesslatencyhistory) - Return average wireless latency over time for a network, device, or network client
* [GetNetworkWirelessLatencyStats](docs/monitor/README.md#getnetworkwirelesslatencystats) - Aggregated latency info for this network
* [GetNetworkWirelessMeshStatuses](docs/monitor/README.md#getnetworkwirelessmeshstatuses) - List wireless mesh statuses for repeaters
* [GetNetworkWirelessSignalQualityHistory](docs/monitor/README.md#getnetworkwirelesssignalqualityhistory) - Return signal quality (SNR/RSSI) over time for a device or network client
* [GetNetworkWirelessUsageHistory](docs/monitor/README.md#getnetworkwirelessusagehistory) - Return AP usage over time for a device or network client
* [GetOrganizationAdaptivePolicyOverview](docs/monitor/README.md#getorganizationadaptivepolicyoverview) - Returns adaptive policy aggregate statistics for an organization
* [GetOrganizationAPIRequests](docs/monitor/README.md#getorganizationapirequests) - List the API requests made by an organization
* [GetOrganizationAPIRequestsOverview](docs/monitor/README.md#getorganizationapirequestsoverview) - Return an aggregated overview of API requests data
* [GetOrganizationAPIRequestsOverviewResponseCodesByInterval](docs/monitor/README.md#getorganizationapirequestsoverviewresponsecodesbyinterval) - Tracks organizations' API requests by response code across a given time period
* [GetOrganizationApplianceSecurityEvents](docs/monitor/README.md#getorganizationappliancesecurityevents) - List the security events for an organization
* [GetOrganizationApplianceUplinkStatuses](docs/monitor/README.md#getorganizationapplianceuplinkstatuses) - List the uplink status of every Meraki MX and Z series appliances in the organization
* [GetOrganizationApplianceVpnStats](docs/monitor/README.md#getorganizationappliancevpnstats) - Show VPN history stat for networks in an organization
* [GetOrganizationApplianceVpnStatuses](docs/monitor/README.md#getorganizationappliancevpnstatuses) - Show VPN status for networks in an organization
* [GetOrganizationCellularGatewayUplinkStatuses](docs/monitor/README.md#getorganizationcellulargatewayuplinkstatuses) - List the uplink status of every Meraki MG cellular gateway in the organization
* [GetOrganizationClientsBandwidthUsageHistory](docs/monitor/README.md#getorganizationclientsbandwidthusagehistory) - Return data usage (in megabits per second) over time for all clients in the given organization within a given time range.
* [GetOrganizationClientsOverview](docs/monitor/README.md#getorganizationclientsoverview) - Return summary information around client data usage (in mb) across the given organization.
* [GetOrganizationConfigurationChanges](docs/monitor/README.md#getorganizationconfigurationchanges) - View the Change Log for your organization
* [GetOrganizationDevicesAvailabilities](docs/monitor/README.md#getorganizationdevicesavailabilities) - List the availability information for devices in an organization
* [GetOrganizationDevicesPowerModulesStatusesByDevice](docs/monitor/README.md#getorganizationdevicespowermodulesstatusesbydevice) - List the power status information for devices in an organization
* [GetOrganizationDevicesStatuses](docs/monitor/README.md#getorganizationdevicesstatuses) - List the status of every Meraki device in the organization
* [GetOrganizationDevicesStatusesOverview](docs/monitor/README.md#getorganizationdevicesstatusesoverview) - Return an overview of current device statuses
* [GetOrganizationDevicesUplinksAddressesByDevice](docs/monitor/README.md#getorganizationdevicesuplinksaddressesbydevice) - List the current uplink addresses for devices in an organization.
* [GetOrganizationDevicesUplinksLossAndLatency](docs/monitor/README.md#getorganizationdevicesuplinkslossandlatency) - Return the uplink loss and latency for every MX in the organization from at latest 2 minutes ago
* [GetOrganizationLicensesOverview](docs/monitor/README.md#getorganizationlicensesoverview) - Return an overview of the license state for an organization
* [GetOrganizationOpenapiSpec](docs/monitor/README.md#getorganizationopenapispec) - Return the OpenAPI 2.0 Specification of the organization's API documentation in JSON
* [GetOrganizationSensorReadingsHistory](docs/monitor/README.md#getorganizationsensorreadingshistory) - Return all reported readings from sensors in a given timespan, sorted by timestamp
* [GetOrganizationSensorReadingsLatest](docs/monitor/README.md#getorganizationsensorreadingslatest) - Return the latest available reading for each metric from each sensor, sorted by sensor serial
* [GetOrganizationSummaryTopAppliancesByUtilization](docs/monitor/README.md#getorganizationsummarytopappliancesbyutilization) - Return the top 10 appliances sorted by utilization over given time range.
* [GetOrganizationSummaryTopClientsByUsage](docs/monitor/README.md#getorganizationsummarytopclientsbyusage) - Return metrics for organization's top 10 clients by data usage (in mb) over given time range.
* [GetOrganizationSummaryTopClientsManufacturersByUsage](docs/monitor/README.md#getorganizationsummarytopclientsmanufacturersbyusage) - Return metrics for organization's top clients by data usage (in mb) over given time range, grouped by manufacturer.
* [GetOrganizationSummaryTopDevicesByUsage](docs/monitor/README.md#getorganizationsummarytopdevicesbyusage) - Return metrics for organization's top 10 devices sorted by data usage over given time range
* [GetOrganizationSummaryTopDevicesModelsByUsage](docs/monitor/README.md#getorganizationsummarytopdevicesmodelsbyusage) - Return metrics for organization's top 10 device models sorted by data usage over given time range
* [GetOrganizationSummaryTopSsidsByUsage](docs/monitor/README.md#getorganizationsummarytopssidsbyusage) - Return metrics for organization's top 10 ssids by data usage over given time range
* [GetOrganizationSummaryTopSwitchesByEnergyUsage](docs/monitor/README.md#getorganizationsummarytopswitchesbyenergyusage) - Return metrics for organization's top 10 switches by energy usage over given time range
* [GetOrganizationUplinksStatuses](docs/monitor/README.md#getorganizationuplinksstatuses) - List the uplink status of every Meraki MX, MG and Z series devices in the organization
* [GetOrganizationWebhooksAlertTypes](docs/monitor/README.md#getorganizationwebhooksalerttypes) - Return a list of alert types to be used with managing webhook alerts
* [GetOrganizationWebhooksLogs](docs/monitor/README.md#getorganizationwebhookslogs) - Return the log of webhook POSTs sent

### [MonitoredMediaServers](docs/monitoredmediaservers/README.md)

* [CreateOrganizationInsightMonitoredMediaServer](docs/monitoredmediaservers/README.md#createorganizationinsightmonitoredmediaserver) - Add a media server to be monitored for this organization
* [DeleteOrganizationInsightMonitoredMediaServer](docs/monitoredmediaservers/README.md#deleteorganizationinsightmonitoredmediaserver) - Delete a monitored media server from this organization
* [GetOrganizationInsightMonitoredMediaServer](docs/monitoredmediaservers/README.md#getorganizationinsightmonitoredmediaserver) - Return a monitored media server for this organization
* [GetOrganizationInsightMonitoredMediaServers](docs/monitoredmediaservers/README.md#getorganizationinsightmonitoredmediaservers) - List the monitored media servers for this organization
* [UpdateOrganizationInsightMonitoredMediaServer](docs/monitoredmediaservers/README.md#updateorganizationinsightmonitoredmediaserver) - Update a monitored media server for this organization

### [MqttBrokers](docs/mqttbrokers/README.md)

* [CreateNetworkMqttBroker](docs/mqttbrokers/README.md#createnetworkmqttbroker) - Add an MQTT broker
* [DeleteNetworkMqttBroker](docs/mqttbrokers/README.md#deletenetworkmqttbroker) - Delete an MQTT broker
* [GetNetworkMqttBroker](docs/mqttbrokers/README.md#getnetworkmqttbroker) - Return an MQTT broker
* [GetNetworkMqttBrokers](docs/mqttbrokers/README.md#getnetworkmqttbrokers) - List the MQTT brokers for this network
* [UpdateNetworkMqttBroker](docs/mqttbrokers/README.md#updatenetworkmqttbroker) - Update an MQTT broker

### [Mtu](docs/mtu/README.md)

* [GetNetworkSwitchMtu](docs/mtu/README.md#getnetworkswitchmtu) - Return the MTU configuration
* [UpdateNetworkSwitchMtu](docs/mtu/README.md#updatenetworkswitchmtu) - Update the MTU configuration

### [Multicast](docs/multicast/README.md)

* [CreateNetworkSwitchRoutingMulticastRendezvousPoint](docs/multicast/README.md#createnetworkswitchroutingmulticastrendezvouspoint) - Create a multicast rendezvous point
* [DeleteNetworkSwitchRoutingMulticastRendezvousPoint](docs/multicast/README.md#deletenetworkswitchroutingmulticastrendezvouspoint) - Delete a multicast rendezvous point
* [GetNetworkSwitchRoutingMulticast](docs/multicast/README.md#getnetworkswitchroutingmulticast) - Return multicast settings for a network
* [GetNetworkSwitchRoutingMulticastRendezvousPoint](docs/multicast/README.md#getnetworkswitchroutingmulticastrendezvouspoint) - Return a multicast rendezvous point
* [GetNetworkSwitchRoutingMulticastRendezvousPoints](docs/multicast/README.md#getnetworkswitchroutingmulticastrendezvouspoints) - List multicast rendezvous points
* [UpdateNetworkSwitchRoutingMulticast](docs/multicast/README.md#updatenetworkswitchroutingmulticast) - Update multicast settings for a network
* [UpdateNetworkSwitchRoutingMulticastRendezvousPoint](docs/multicast/README.md#updatenetworkswitchroutingmulticastrendezvouspoint) - Update a multicast rendezvous point

### [Netflow](docs/netflow/README.md)

* [GetNetworkNetflow](docs/netflow/README.md#getnetworknetflow) - Return the NetFlow traffic reporting settings for a network
* [UpdateNetworkNetflow](docs/netflow/README.md#updatenetworknetflow) - Update the NetFlow traffic reporting settings for a network

### [NetworkAdapters](docs/networkadapters/README.md)

* [GetNetworkSmDeviceNetworkAdapters](docs/networkadapters/README.md#getnetworksmdevicenetworkadapters) - List the network adapters of a device

### [NetworkHealth](docs/networkhealth/README.md)

* [GetNetworkNetworkHealthChannelUtilization](docs/networkhealth/README.md#getnetworknetworkhealthchannelutilization) - Get the channel utilization over each radio for all APs in a network.

### [Networks](docs/networks/README.md)

* [BindNetwork](docs/networks/README.md#bindnetwork) - Bind a network to a template.
* [ClaimNetworkDevices](docs/networks/README.md#claimnetworkdevices) - Claim devices into a network. (Note: for recently claimed devices, it may take a few minutes for API requsts against that device to succeed)
* [CombineOrganizationNetworks](docs/networks/README.md#combineorganizationnetworks) - Combine multiple networks into a single network
* [CreateNetworkFirmwareUpgradesRollback](docs/networks/README.md#createnetworkfirmwareupgradesrollback) - Rollback a Firmware Upgrade For A Network
* [CreateNetworkFirmwareUpgradesStagedEvent](docs/networks/README.md#createnetworkfirmwareupgradesstagedevent) - Create a Staged Upgrade Event for a network
* [CreateNetworkFirmwareUpgradesStagedGroup](docs/networks/README.md#createnetworkfirmwareupgradesstagedgroup) - Create a Staged Upgrade Group for a network
* [CreateNetworkFloorPlan](docs/networks/README.md#createnetworkfloorplan) - Upload a floor plan
* [CreateNetworkGroupPolicy](docs/networks/README.md#createnetworkgrouppolicy) - Create a group policy
* [CreateNetworkMerakiAuthUser](docs/networks/README.md#createnetworkmerakiauthuser) - Authorize a user configured with Meraki Authentication for a network (currently supports 802.1X, splash guest, and client VPN users, and currently, organizations have a 50,000 user cap)
* [CreateNetworkMqttBroker](docs/networks/README.md#createnetworkmqttbroker) - Add an MQTT broker
* [CreateNetworkPiiRequest](docs/networks/README.md#createnetworkpiirequest) - Submit a new delete or restrict processing PII request
* [CreateNetworkWebhooksHTTPServer](docs/networks/README.md#createnetworkwebhookshttpserver) - Add an HTTP server to a network
* [CreateNetworkWebhooksPayloadTemplate](docs/networks/README.md#createnetworkwebhookspayloadtemplate) - Create a webhook payload template for a network
* [CreateNetworkWebhooksWebhookTest](docs/networks/README.md#createnetworkwebhookswebhooktest) - Send a test webhook for a network
* [CreateOrganizationNetwork](docs/networks/README.md#createorganizationnetwork) - Create a network
* [DeferNetworkFirmwareUpgradesStagedEvents](docs/networks/README.md#defernetworkfirmwareupgradesstagedevents) - Postpone by 1 week all pending staged upgrade stages for a network
* [DeleteNetwork](docs/networks/README.md#deletenetwork) - Delete a network
* [DeleteNetworkFirmwareUpgradesStagedGroup](docs/networks/README.md#deletenetworkfirmwareupgradesstagedgroup) - Delete a Staged Upgrade Group
* [DeleteNetworkFloorPlan](docs/networks/README.md#deletenetworkfloorplan) - Destroy a floor plan
* [DeleteNetworkGroupPolicy](docs/networks/README.md#deletenetworkgrouppolicy) - Delete a group policy
* [DeleteNetworkMerakiAuthUser](docs/networks/README.md#deletenetworkmerakiauthuser) - Deauthorize a user
* [DeleteNetworkMqttBroker](docs/networks/README.md#deletenetworkmqttbroker) - Delete an MQTT broker
* [DeleteNetworkPiiRequest](docs/networks/README.md#deletenetworkpiirequest) - Delete a restrict processing PII request
* [DeleteNetworkWebhooksHTTPServer](docs/networks/README.md#deletenetworkwebhookshttpserver) - Delete an HTTP server from a network
* [DeleteNetworkWebhooksPayloadTemplate](docs/networks/README.md#deletenetworkwebhookspayloadtemplate) - Destroy a webhook payload template for a network
* [GetNetwork](docs/networks/README.md#getnetwork) - Return a network
* [GetNetworkAlertsHistory](docs/networks/README.md#getnetworkalertshistory) - Return the alert history for this network
* [GetNetworkAlertsSettings](docs/networks/README.md#getnetworkalertssettings) - Return the alert configuration for this network
* [GetNetworkBluetoothClient](docs/networks/README.md#getnetworkbluetoothclient) - Return a Bluetooth client
* [GetNetworkBluetoothClients](docs/networks/README.md#getnetworkbluetoothclients) - List the Bluetooth clients seen by APs in this network
* [GetNetworkClient](docs/networks/README.md#getnetworkclient) - Return the client associated with the given identifier
* [GetNetworkClientPolicy](docs/networks/README.md#getnetworkclientpolicy) - Return the policy assigned to a client on the network
* [GetNetworkClientSplashAuthorizationStatus](docs/networks/README.md#getnetworkclientsplashauthorizationstatus) - Return the splash authorization for a client, for each SSID they've associated with through splash
* [GetNetworkClientTrafficHistory](docs/networks/README.md#getnetworkclienttraffichistory) - Return the client's network traffic data over time
* [GetNetworkClientUsageHistory](docs/networks/README.md#getnetworkclientusagehistory) - Return the client's daily usage history
* [GetNetworkClients](docs/networks/README.md#getnetworkclients) - List the clients that have used this network in the timespan
* [GetNetworkClientsApplicationUsage](docs/networks/README.md#getnetworkclientsapplicationusage) - Return the application usage data for clients
* [GetNetworkClientsBandwidthUsageHistory](docs/networks/README.md#getnetworkclientsbandwidthusagehistory) - Returns a timeseries of total traffic consumption rates for all clients on a network within a given timespan, in megabits per second.
* [GetNetworkClientsOverview](docs/networks/README.md#getnetworkclientsoverview) - Return overview statistics for network clients
* [GetNetworkClientsUsageHistories](docs/networks/README.md#getnetworkclientsusagehistories) - Return the usage histories for clients
* [GetNetworkDevices](docs/networks/README.md#getnetworkdevices) - List the devices in a network
* [GetNetworkEvents](docs/networks/README.md#getnetworkevents) - List the events for the network
* [GetNetworkEventsEventTypes](docs/networks/README.md#getnetworkeventseventtypes) - List the event type to human-readable description
* [GetNetworkFirmwareUpgrades](docs/networks/README.md#getnetworkfirmwareupgrades) - Get firmware upgrade information for a network
* [GetNetworkFirmwareUpgradesStagedEvents](docs/networks/README.md#getnetworkfirmwareupgradesstagedevents) - Get the Staged Upgrade Event from a network
* [GetNetworkFirmwareUpgradesStagedGroup](docs/networks/README.md#getnetworkfirmwareupgradesstagedgroup) - Get a Staged Upgrade Group from a network
* [GetNetworkFirmwareUpgradesStagedGroups](docs/networks/README.md#getnetworkfirmwareupgradesstagedgroups) - List of Staged Upgrade Groups in a network
* [GetNetworkFirmwareUpgradesStagedStages](docs/networks/README.md#getnetworkfirmwareupgradesstagedstages) - Order of Staged Upgrade Groups in a network
* [GetNetworkFloorPlan](docs/networks/README.md#getnetworkfloorplan) - Find a floor plan by ID
* [GetNetworkFloorPlans](docs/networks/README.md#getnetworkfloorplans) - List the floor plans that belong to your network
* [GetNetworkGroupPolicies](docs/networks/README.md#getnetworkgrouppolicies) - List the group policies in a network
* [GetNetworkGroupPolicy](docs/networks/README.md#getnetworkgrouppolicy) - Display a group policy
* [GetNetworkHealthAlerts](docs/networks/README.md#getnetworkhealthalerts) - Return all global alerts on this network
* [GetNetworkMerakiAuthUser](docs/networks/README.md#getnetworkmerakiauthuser) - Return the Meraki Auth splash guest, RADIUS, or client VPN user
* [GetNetworkMerakiAuthUsers](docs/networks/README.md#getnetworkmerakiauthusers) - List the users configured under Meraki Authentication for a network (splash guest or RADIUS users for a wireless network, or client VPN users for a wired network)
* [GetNetworkMqttBroker](docs/networks/README.md#getnetworkmqttbroker) - Return an MQTT broker
* [GetNetworkMqttBrokers](docs/networks/README.md#getnetworkmqttbrokers) - List the MQTT brokers for this network
* [GetNetworkNetflow](docs/networks/README.md#getnetworknetflow) - Return the NetFlow traffic reporting settings for a network
* [GetNetworkNetworkHealthChannelUtilization](docs/networks/README.md#getnetworknetworkhealthchannelutilization) - Get the channel utilization over each radio for all APs in a network.
* [GetNetworkPiiPiiKeys](docs/networks/README.md#getnetworkpiipiikeys) - List the keys required to access Personally Identifiable Information (PII) for a given identifier
* [GetNetworkPiiRequest](docs/networks/README.md#getnetworkpiirequest) - Return a PII request
* [GetNetworkPiiRequests](docs/networks/README.md#getnetworkpiirequests) - List the PII requests for this network or organization
* [GetNetworkPiiSmDevicesForKey](docs/networks/README.md#getnetworkpiismdevicesforkey) - Given a piece of Personally Identifiable Information (PII), return the Systems Manager device ID(s) associated with that identifier
* [GetNetworkPiiSmOwnersForKey](docs/networks/README.md#getnetworkpiismownersforkey) - Given a piece of Personally Identifiable Information (PII), return the Systems Manager owner ID(s) associated with that identifier
* [GetNetworkPoliciesByClient](docs/networks/README.md#getnetworkpoliciesbyclient) - Get policies for all clients with policies
* [GetNetworkSettings](docs/networks/README.md#getnetworksettings) - Return the settings for a network
* [GetNetworkSnmp](docs/networks/README.md#getnetworksnmp) - Return the SNMP settings for a network
* [GetNetworkSplashLoginAttempts](docs/networks/README.md#getnetworksplashloginattempts) - List the splash login attempts for a network
* [GetNetworkSyslogServers](docs/networks/README.md#getnetworksyslogservers) - List the syslog servers for a network
* [GetNetworkTopologyLinkLayer](docs/networks/README.md#getnetworktopologylinklayer) - List the LLDP and CDP information for all discovered devices and connections in a network.
* [GetNetworkTraffic](docs/networks/README.md#getnetworktraffic) - Return the traffic analysis data for this network
* [GetNetworkTrafficAnalysis](docs/networks/README.md#getnetworktrafficanalysis) - Return the traffic analysis settings for a network
* [GetNetworkTrafficShapingApplicationCategories](docs/networks/README.md#getnetworktrafficshapingapplicationcategories) - Returns the application categories for traffic shaping rules.
* [GetNetworkTrafficShapingDscpTaggingOptions](docs/networks/README.md#getnetworktrafficshapingdscptaggingoptions) - Returns the available DSCP tagging options for your traffic shaping rules.
* [GetNetworkWebhooksHTTPServer](docs/networks/README.md#getnetworkwebhookshttpserver) - Return an HTTP server for a network
* [GetNetworkWebhooksHTTPServers](docs/networks/README.md#getnetworkwebhookshttpservers) - List the HTTP servers for a network
* [GetNetworkWebhooksPayloadTemplate](docs/networks/README.md#getnetworkwebhookspayloadtemplate) - Get the webhook payload template for a network
* [GetNetworkWebhooksPayloadTemplates](docs/networks/README.md#getnetworkwebhookspayloadtemplates) - List the webhook payload templates for a network
* [GetNetworkWebhooksWebhookTest](docs/networks/README.md#getnetworkwebhookswebhooktest) - Return the status of a webhook test for a network
* [GetOrganizationInventoryOnboardingCloudMonitoringNetworks](docs/networks/README.md#getorganizationinventoryonboardingcloudmonitoringnetworks) - Returns list of networks eligible for adding cloud monitored device
* [GetOrganizationNetworks](docs/networks/README.md#getorganizationnetworks) - List the networks that the user has privileges on in an organization
* [ProvisionNetworkClients](docs/networks/README.md#provisionnetworkclients) - Provisions a client with a name and policy
* [RemoveNetworkDevices](docs/networks/README.md#removenetworkdevices) - Remove a single device
* [RollbacksNetworkFirmwareUpgradesStagedEvents](docs/networks/README.md#rollbacksnetworkfirmwareupgradesstagedevents) - Rollback a Staged Upgrade Event for a network
* [SplitNetwork](docs/networks/README.md#splitnetwork) - Split a combined network into individual networks for each type of device
* [UnbindNetwork](docs/networks/README.md#unbindnetwork) - Unbind a network from a template.
* [UpdateNetwork](docs/networks/README.md#updatenetwork) - Update a network
* [UpdateNetworkAlertsSettings](docs/networks/README.md#updatenetworkalertssettings) - Update the alert configuration for this network
* [UpdateNetworkClientPolicy](docs/networks/README.md#updatenetworkclientpolicy) - Update the policy assigned to a client on the network
* [UpdateNetworkClientSplashAuthorizationStatus](docs/networks/README.md#updatenetworkclientsplashauthorizationstatus) - Update a client's splash authorization
* [UpdateNetworkFirmwareUpgrades](docs/networks/README.md#updatenetworkfirmwareupgrades) - Update firmware upgrade information for a network
* [UpdateNetworkFirmwareUpgradesStagedEvents](docs/networks/README.md#updatenetworkfirmwareupgradesstagedevents) - Update the Staged Upgrade Event for a network
* [UpdateNetworkFirmwareUpgradesStagedGroup](docs/networks/README.md#updatenetworkfirmwareupgradesstagedgroup) - Update a Staged Upgrade Group for a network
* [UpdateNetworkFirmwareUpgradesStagedStages](docs/networks/README.md#updatenetworkfirmwareupgradesstagedstages) - Assign Staged Upgrade Group order in the sequence.
* [UpdateNetworkFloorPlan](docs/networks/README.md#updatenetworkfloorplan) - Update a floor plan's geolocation and other meta data
* [UpdateNetworkGroupPolicy](docs/networks/README.md#updatenetworkgrouppolicy) - Update a group policy
* [UpdateNetworkMerakiAuthUser](docs/networks/README.md#updatenetworkmerakiauthuser) - Update a user configured with Meraki Authentication (currently, 802.1X RADIUS, splash guest, and client VPN users can be updated)
* [UpdateNetworkMqttBroker](docs/networks/README.md#updatenetworkmqttbroker) - Update an MQTT broker
* [UpdateNetworkNetflow](docs/networks/README.md#updatenetworknetflow) - Update the NetFlow traffic reporting settings for a network
* [UpdateNetworkSettings](docs/networks/README.md#updatenetworksettings) - Update the settings for a network
* [UpdateNetworkSnmp](docs/networks/README.md#updatenetworksnmp) - Update the SNMP settings for a network
* [UpdateNetworkSyslogServers](docs/networks/README.md#updatenetworksyslogservers) - Update the syslog servers for a network
* [UpdateNetworkTrafficAnalysis](docs/networks/README.md#updatenetworktrafficanalysis) - Update the traffic analysis settings for a network
* [UpdateNetworkWebhooksHTTPServer](docs/networks/README.md#updatenetworkwebhookshttpserver) - Update an HTTP server
* [UpdateNetworkWebhooksPayloadTemplate](docs/networks/README.md#updatenetworkwebhookspayloadtemplate) - Update a webhook payload template for a network
* [VmxNetworkDevicesClaim](docs/networks/README.md#vmxnetworkdevicesclaim) - Claim a vMX into a network

### [ObjectDetectionModels](docs/objectdetectionmodels/README.md)

* [GetDeviceCameraSenseObjectDetectionModels](docs/objectdetectionmodels/README.md#getdevicecamerasenseobjectdetectionmodels) - Returns the MV Sense object detection model list for the given camera

### [Onboarding](docs/onboarding/README.md)

* [CreateOrganizationInventoryOnboardingCloudMonitoringExportEvent](docs/onboarding/README.md#createorganizationinventoryonboardingcloudmonitoringexportevent) - Imports event logs related to the onboarding app into elastisearch
* [CreateOrganizationInventoryOnboardingCloudMonitoringImport](docs/onboarding/README.md#createorganizationinventoryonboardingcloudmonitoringimport) - Commits the import operation to complete the onboarding of a device into Dashboard for monitoring.
* [CreateOrganizationInventoryOnboardingCloudMonitoringPrepare](docs/onboarding/README.md#createorganizationinventoryonboardingcloudmonitoringprepare) - Initiates or updates an import session
* [GetOrganizationCameraOnboardingStatuses](docs/onboarding/README.md#getorganizationcameraonboardingstatuses) - Fetch onboarding status of cameras
* [GetOrganizationInventoryOnboardingCloudMonitoringImports](docs/onboarding/README.md#getorganizationinventoryonboardingcloudmonitoringimports) - Check the status of a committed Import operation
* [GetOrganizationInventoryOnboardingCloudMonitoringNetworks](docs/onboarding/README.md#getorganizationinventoryonboardingcloudmonitoringnetworks) - Returns list of networks eligible for adding cloud monitored device
* [UpdateOrganizationCameraOnboardingStatuses](docs/onboarding/README.md#updateorganizationcameraonboardingstatuses) - Notify that credential handoff to camera has completed

### [OneToManyNatRules](docs/onetomanynatrules/README.md)

* [GetNetworkApplianceFirewallOneToManyNatRules](docs/onetomanynatrules/README.md#getnetworkappliancefirewallonetomanynatrules) - Return the 1:Many NAT mapping rules for an MX network
* [UpdateNetworkApplianceFirewallOneToManyNatRules](docs/onetomanynatrules/README.md#updatenetworkappliancefirewallonetomanynatrules) - Set the 1:Many NAT mapping rules for an MX network

### [OneToOneNatRules](docs/onetoonenatrules/README.md)

* [GetNetworkApplianceFirewallOneToOneNatRules](docs/onetoonenatrules/README.md#getnetworkappliancefirewallonetoonenatrules) - Return the 1:1 NAT mapping rules for an MX network
* [UpdateNetworkApplianceFirewallOneToOneNatRules](docs/onetoonenatrules/README.md#updatenetworkappliancefirewallonetoonenatrules) - Set the 1:1 NAT mapping rules for an MX network

### [OpenapiSpec](docs/openapispec/README.md)

* [GetOrganizationOpenapiSpec](docs/openapispec/README.md#getorganizationopenapispec) - Return the OpenAPI 2.0 Specification of the organization's API documentation in JSON

### [OptIns](docs/optins/README.md)

* [CreateOrganizationEarlyAccessFeaturesOptIn](docs/optins/README.md#createorganizationearlyaccessfeaturesoptin) - Create a new early access feature opt-in for an organization
* [DeleteOrganizationEarlyAccessFeaturesOptIn](docs/optins/README.md#deleteorganizationearlyaccessfeaturesoptin) - Delete an early access feature opt-in
* [GetOrganizationEarlyAccessFeaturesOptIn](docs/optins/README.md#getorganizationearlyaccessfeaturesoptin) - Show an early access feature opt-in for an organization
* [GetOrganizationEarlyAccessFeaturesOptIns](docs/optins/README.md#getorganizationearlyaccessfeaturesoptins) - List the early access feature opt-ins for an organization
* [UpdateOrganizationEarlyAccessFeaturesOptIn](docs/optins/README.md#updateorganizationearlyaccessfeaturesoptin) - Update an early access feature opt-in for an organization

### [Order](docs/order/README.md)

* [GetNetworkSwitchQosRulesOrder](docs/order/README.md#getnetworkswitchqosrulesorder) - Return the quality of service rule IDs by order in which they will be processed by the switch
* [UpdateNetworkSwitchQosRulesOrder](docs/order/README.md#updatenetworkswitchqosrulesorder) - Update the order in which the rules should be processed by the switch

### [Organizations](docs/organizations/README.md)

* [AssignOrganizationLicensesSeats](docs/organizations/README.md#assignorganizationlicensesseats) - Assign SM seats to a network
* [ClaimIntoOrganization](docs/organizations/README.md#claimintoorganization) - Claim a list of devices, licenses, and/or orders into an organization
* [ClaimIntoOrganizationInventory](docs/organizations/README.md#claimintoorganizationinventory) - Claim a list of devices, licenses, and/or orders into an organization inventory
* [CloneOrganization](docs/organizations/README.md#cloneorganization) - Create a new organization by cloning the addressed organization
* [CombineOrganizationNetworks](docs/organizations/README.md#combineorganizationnetworks) - Combine multiple networks into a single network
* [CreateOrganization](docs/organizations/README.md#createorganization) - Create a new organization
* [CreateOrganizationActionBatch](docs/organizations/README.md#createorganizationactionbatch) - Create an action batch
* [CreateOrganizationAdaptivePolicyACL](docs/organizations/README.md#createorganizationadaptivepolicyacl) - Creates new adaptive policy ACL
* [CreateOrganizationAdaptivePolicyGroup](docs/organizations/README.md#createorganizationadaptivepolicygroup) - Creates a new adaptive policy group
* [CreateOrganizationAdaptivePolicyPolicy](docs/organizations/README.md#createorganizationadaptivepolicypolicy) - Add an Adaptive Policy
* [CreateOrganizationAdmin](docs/organizations/README.md#createorganizationadmin) - Create a new dashboard administrator
* [CreateOrganizationAlertsProfile](docs/organizations/README.md#createorganizationalertsprofile) - Create an organization-wide alert configuration
* [CreateOrganizationBrandingPolicy](docs/organizations/README.md#createorganizationbrandingpolicy) - Add a new branding policy to an organization
* [CreateOrganizationConfigTemplate](docs/organizations/README.md#createorganizationconfigtemplate) - Create a new configuration template
* [CreateOrganizationEarlyAccessFeaturesOptIn](docs/organizations/README.md#createorganizationearlyaccessfeaturesoptin) - Create a new early access feature opt-in for an organization
* [CreateOrganizationInventoryOnboardingCloudMonitoringExportEvent](docs/organizations/README.md#createorganizationinventoryonboardingcloudmonitoringexportevent) - Imports event logs related to the onboarding app into elastisearch
* [CreateOrganizationInventoryOnboardingCloudMonitoringImport](docs/organizations/README.md#createorganizationinventoryonboardingcloudmonitoringimport) - Commits the import operation to complete the onboarding of a device into Dashboard for monitoring.
* [CreateOrganizationInventoryOnboardingCloudMonitoringPrepare](docs/organizations/README.md#createorganizationinventoryonboardingcloudmonitoringprepare) - Initiates or updates an import session
* [CreateOrganizationNetwork](docs/organizations/README.md#createorganizationnetwork) - Create a network
* [CreateOrganizationPolicyObject](docs/organizations/README.md#createorganizationpolicyobject) - Creates a new Policy Object.
* [CreateOrganizationPolicyObjectsGroup](docs/organizations/README.md#createorganizationpolicyobjectsgroup) - Creates a new Policy Object Group.
* [CreateOrganizationSamlIdp](docs/organizations/README.md#createorganizationsamlidp) - Create a SAML IdP for your organization.
* [CreateOrganizationSamlRole](docs/organizations/README.md#createorganizationsamlrole) - Create a SAML role
* [DeleteOrganization](docs/organizations/README.md#deleteorganization) - Delete an organization
* [DeleteOrganizationActionBatch](docs/organizations/README.md#deleteorganizationactionbatch) - Delete an action batch
* [DeleteOrganizationAdaptivePolicyACL](docs/organizations/README.md#deleteorganizationadaptivepolicyacl) - Deletes the specified adaptive policy ACL
* [DeleteOrganizationAdaptivePolicyGroup](docs/organizations/README.md#deleteorganizationadaptivepolicygroup) - Deletes the specified adaptive policy group and any associated policies and references
* [DeleteOrganizationAdaptivePolicyPolicy](docs/organizations/README.md#deleteorganizationadaptivepolicypolicy) - Delete an Adaptive Policy
* [DeleteOrganizationAdmin](docs/organizations/README.md#deleteorganizationadmin) - Revoke all access for a dashboard administrator within this organization
* [DeleteOrganizationAlertsProfile](docs/organizations/README.md#deleteorganizationalertsprofile) - Removes an organization-wide alert config
* [DeleteOrganizationBrandingPolicy](docs/organizations/README.md#deleteorganizationbrandingpolicy) - Delete a branding policy
* [DeleteOrganizationConfigTemplate](docs/organizations/README.md#deleteorganizationconfigtemplate) - Remove a configuration template
* [DeleteOrganizationEarlyAccessFeaturesOptIn](docs/organizations/README.md#deleteorganizationearlyaccessfeaturesoptin) - Delete an early access feature opt-in
* [DeleteOrganizationPolicyObject](docs/organizations/README.md#deleteorganizationpolicyobject) - Deletes a Policy Object.
* [DeleteOrganizationPolicyObjectsGroup](docs/organizations/README.md#deleteorganizationpolicyobjectsgroup) - Deletes a Policy Object Group.
* [DeleteOrganizationSamlIdp](docs/organizations/README.md#deleteorganizationsamlidp) - Remove a SAML IdP in your organization.
* [DeleteOrganizationSamlRole](docs/organizations/README.md#deleteorganizationsamlrole) - Remove a SAML role
* [DeleteOrganizationUser](docs/organizations/README.md#deleteorganizationuser) - Delete a user and all of its authentication methods.
* [GetOrganization](docs/organizations/README.md#getorganization) - Return an organization
* [GetOrganizationActionBatch](docs/organizations/README.md#getorganizationactionbatch) - Return an action batch
* [GetOrganizationActionBatches](docs/organizations/README.md#getorganizationactionbatches) - Return the list of action batches in the organization
* [GetOrganizationAdaptivePolicyACL](docs/organizations/README.md#getorganizationadaptivepolicyacl) - Returns the adaptive policy ACL information
* [GetOrganizationAdaptivePolicyAcls](docs/organizations/README.md#getorganizationadaptivepolicyacls) - List adaptive policy ACLs in a organization
* [GetOrganizationAdaptivePolicyGroup](docs/organizations/README.md#getorganizationadaptivepolicygroup) - Returns an adaptive policy group
* [GetOrganizationAdaptivePolicyGroups](docs/organizations/README.md#getorganizationadaptivepolicygroups) - List adaptive policy groups in a organization
* [GetOrganizationAdaptivePolicyOverview](docs/organizations/README.md#getorganizationadaptivepolicyoverview) - Returns adaptive policy aggregate statistics for an organization
* [GetOrganizationAdaptivePolicyPolicies](docs/organizations/README.md#getorganizationadaptivepolicypolicies) - List adaptive policies in an organization
* [GetOrganizationAdaptivePolicyPolicy](docs/organizations/README.md#getorganizationadaptivepolicypolicy) - Return an adaptive policy
* [GetOrganizationAdaptivePolicySettings](docs/organizations/README.md#getorganizationadaptivepolicysettings) - Returns global adaptive policy settings in an organization
* [GetOrganizationAdmins](docs/organizations/README.md#getorganizationadmins) - List the dashboard administrators in this organization
* [GetOrganizationAlertsProfiles](docs/organizations/README.md#getorganizationalertsprofiles) - List all organization-wide alert configurations
* [GetOrganizationAPIRequests](docs/organizations/README.md#getorganizationapirequests) - List the API requests made by an organization
* [GetOrganizationAPIRequestsOverview](docs/organizations/README.md#getorganizationapirequestsoverview) - Return an aggregated overview of API requests data
* [GetOrganizationAPIRequestsOverviewResponseCodesByInterval](docs/organizations/README.md#getorganizationapirequestsoverviewresponsecodesbyinterval) - Tracks organizations' API requests by response code across a given time period
* [GetOrganizationBrandingPolicies](docs/organizations/README.md#getorganizationbrandingpolicies) - List the branding policies of an organization
* [GetOrganizationBrandingPoliciesPriorities](docs/organizations/README.md#getorganizationbrandingpoliciespriorities) - Return the branding policy IDs of an organization in priority order
* [GetOrganizationBrandingPolicy](docs/organizations/README.md#getorganizationbrandingpolicy) - Return a branding policy
* [GetOrganizationClientsBandwidthUsageHistory](docs/organizations/README.md#getorganizationclientsbandwidthusagehistory) - Return data usage (in megabits per second) over time for all clients in the given organization within a given time range.
* [GetOrganizationClientsOverview](docs/organizations/README.md#getorganizationclientsoverview) - Return summary information around client data usage (in mb) across the given organization.
* [GetOrganizationClientsSearch](docs/organizations/README.md#getorganizationclientssearch) - Return the client details in an organization
* [GetOrganizationConfigTemplate](docs/organizations/README.md#getorganizationconfigtemplate) - Return a single configuration template
* [GetOrganizationConfigTemplates](docs/organizations/README.md#getorganizationconfigtemplates) - List the configuration templates for this organization
* [GetOrganizationConfigurationChanges](docs/organizations/README.md#getorganizationconfigurationchanges) - View the Change Log for your organization
* [GetOrganizationDevices](docs/organizations/README.md#getorganizationdevices) - List the devices in an organization
* [GetOrganizationDevicesAvailabilities](docs/organizations/README.md#getorganizationdevicesavailabilities) - List the availability information for devices in an organization
* [GetOrganizationDevicesPowerModulesStatusesByDevice](docs/organizations/README.md#getorganizationdevicespowermodulesstatusesbydevice) - List the power status information for devices in an organization
* [GetOrganizationDevicesStatuses](docs/organizations/README.md#getorganizationdevicesstatuses) - List the status of every Meraki device in the organization
* [GetOrganizationDevicesStatusesOverview](docs/organizations/README.md#getorganizationdevicesstatusesoverview) - Return an overview of current device statuses
* [GetOrganizationDevicesUplinksAddressesByDevice](docs/organizations/README.md#getorganizationdevicesuplinksaddressesbydevice) - List the current uplink addresses for devices in an organization.
* [GetOrganizationDevicesUplinksLossAndLatency](docs/organizations/README.md#getorganizationdevicesuplinkslossandlatency) - Return the uplink loss and latency for every MX in the organization from at latest 2 minutes ago
* [GetOrganizationEarlyAccessFeatures](docs/organizations/README.md#getorganizationearlyaccessfeatures) - List the available early access features for organization
* [GetOrganizationEarlyAccessFeaturesOptIn](docs/organizations/README.md#getorganizationearlyaccessfeaturesoptin) - Show an early access feature opt-in for an organization
* [GetOrganizationEarlyAccessFeaturesOptIns](docs/organizations/README.md#getorganizationearlyaccessfeaturesoptins) - List the early access feature opt-ins for an organization
* [GetOrganizationFirmwareUpgrades](docs/organizations/README.md#getorganizationfirmwareupgrades) - Get firmware upgrade information for an organization
* [GetOrganizationFirmwareUpgradesByDevice](docs/organizations/README.md#getorganizationfirmwareupgradesbydevice) - Get firmware upgrade status for the filtered devices
* [GetOrganizationInventoryDevice](docs/organizations/README.md#getorganizationinventorydevice) - Return a single device from the inventory of an organization
* [GetOrganizationInventoryDevices](docs/organizations/README.md#getorganizationinventorydevices) - Return the device inventory for an organization
* [GetOrganizationInventoryOnboardingCloudMonitoringImports](docs/organizations/README.md#getorganizationinventoryonboardingcloudmonitoringimports) - Check the status of a committed Import operation
* [GetOrganizationInventoryOnboardingCloudMonitoringNetworks](docs/organizations/README.md#getorganizationinventoryonboardingcloudmonitoringnetworks) - Returns list of networks eligible for adding cloud monitored device
* [GetOrganizationLicense](docs/organizations/README.md#getorganizationlicense) - Display a license
* [GetOrganizationLicenses](docs/organizations/README.md#getorganizationlicenses) - List the licenses for an organization
* [GetOrganizationLicensesOverview](docs/organizations/README.md#getorganizationlicensesoverview) - Return an overview of the license state for an organization
* [GetOrganizationLoginSecurity](docs/organizations/README.md#getorganizationloginsecurity) - Returns the login security settings for an organization.
* [GetOrganizationNetworks](docs/organizations/README.md#getorganizationnetworks) - List the networks that the user has privileges on in an organization
* [GetOrganizationOpenapiSpec](docs/organizations/README.md#getorganizationopenapispec) - Return the OpenAPI 2.0 Specification of the organization's API documentation in JSON
* [GetOrganizationPolicyObject](docs/organizations/README.md#getorganizationpolicyobject) - Shows details of a Policy Object.
* [GetOrganizationPolicyObjects](docs/organizations/README.md#getorganizationpolicyobjects) - Lists Policy Objects belonging to the organization.
* [GetOrganizationPolicyObjectsGroup](docs/organizations/README.md#getorganizationpolicyobjectsgroup) - Shows details of a Policy Object Group.
* [GetOrganizationPolicyObjectsGroups](docs/organizations/README.md#getorganizationpolicyobjectsgroups) - Lists Policy Object Groups belonging to the organization.
* [GetOrganizationSaml](docs/organizations/README.md#getorganizationsaml) - Returns the SAML SSO enabled settings for an organization.
* [GetOrganizationSamlIdp](docs/organizations/README.md#getorganizationsamlidp) - Get a SAML IdP from your organization.
* [GetOrganizationSamlIdps](docs/organizations/README.md#getorganizationsamlidps) - List the SAML IdPs in your organization.
* [GetOrganizationSamlRole](docs/organizations/README.md#getorganizationsamlrole) - Return a SAML role
* [GetOrganizationSamlRoles](docs/organizations/README.md#getorganizationsamlroles) - List the SAML roles for this organization
* [GetOrganizationSnmp](docs/organizations/README.md#getorganizationsnmp) - Return the SNMP settings for an organization
* [GetOrganizationSummaryTopAppliancesByUtilization](docs/organizations/README.md#getorganizationsummarytopappliancesbyutilization) - Return the top 10 appliances sorted by utilization over given time range.
* [GetOrganizationSummaryTopClientsByUsage](docs/organizations/README.md#getorganizationsummarytopclientsbyusage) - Return metrics for organization's top 10 clients by data usage (in mb) over given time range.
* [GetOrganizationSummaryTopClientsManufacturersByUsage](docs/organizations/README.md#getorganizationsummarytopclientsmanufacturersbyusage) - Return metrics for organization's top clients by data usage (in mb) over given time range, grouped by manufacturer.
* [GetOrganizationSummaryTopDevicesByUsage](docs/organizations/README.md#getorganizationsummarytopdevicesbyusage) - Return metrics for organization's top 10 devices sorted by data usage over given time range
* [GetOrganizationSummaryTopDevicesModelsByUsage](docs/organizations/README.md#getorganizationsummarytopdevicesmodelsbyusage) - Return metrics for organization's top 10 device models sorted by data usage over given time range
* [GetOrganizationSummaryTopSsidsByUsage](docs/organizations/README.md#getorganizationsummarytopssidsbyusage) - Return metrics for organization's top 10 ssids by data usage over given time range
* [GetOrganizationSummaryTopSwitchesByEnergyUsage](docs/organizations/README.md#getorganizationsummarytopswitchesbyenergyusage) - Return metrics for organization's top 10 switches by energy usage over given time range
* [GetOrganizationUplinksStatuses](docs/organizations/README.md#getorganizationuplinksstatuses) - List the uplink status of every Meraki MX, MG and Z series devices in the organization
* [GetOrganizationWebhooksAlertTypes](docs/organizations/README.md#getorganizationwebhooksalerttypes) - Return a list of alert types to be used with managing webhook alerts
* [GetOrganizationWebhooksLogs](docs/organizations/README.md#getorganizationwebhookslogs) - Return the log of webhook POSTs sent
* [GetOrganizations](docs/organizations/README.md#getorganizations) - List the organizations that the user has privileges on
* [MoveOrganizationLicenses](docs/organizations/README.md#moveorganizationlicenses) - Move licenses to another organization
* [MoveOrganizationLicensesSeats](docs/organizations/README.md#moveorganizationlicensesseats) - Move SM seats to another organization
* [ReleaseFromOrganizationInventory](docs/organizations/README.md#releasefromorganizationinventory) - Release a list of claimed devices from an organization.
* [RenewOrganizationLicensesSeats](docs/organizations/README.md#reneworganizationlicensesseats) - Renew SM seats of a license
* [UpdateOrganization](docs/organizations/README.md#updateorganization) - Update an organization
* [UpdateOrganizationActionBatch](docs/organizations/README.md#updateorganizationactionbatch) - Update an action batch
* [UpdateOrganizationAdaptivePolicyACL](docs/organizations/README.md#updateorganizationadaptivepolicyacl) - Updates an adaptive policy ACL
* [UpdateOrganizationAdaptivePolicyGroup](docs/organizations/README.md#updateorganizationadaptivepolicygroup) - Updates an adaptive policy group
* [UpdateOrganizationAdaptivePolicyPolicy](docs/organizations/README.md#updateorganizationadaptivepolicypolicy) - Update an Adaptive Policy
* [UpdateOrganizationAdaptivePolicySettings](docs/organizations/README.md#updateorganizationadaptivepolicysettings) - Update global adaptive policy settings
* [UpdateOrganizationAdmin](docs/organizations/README.md#updateorganizationadmin) - Update an administrator
* [UpdateOrganizationAlertsProfile](docs/organizations/README.md#updateorganizationalertsprofile) - Update an organization-wide alert config
* [UpdateOrganizationBrandingPoliciesPriorities](docs/organizations/README.md#updateorganizationbrandingpoliciespriorities) - Update the priority ordering of an organization's branding policies.
* [UpdateOrganizationBrandingPolicy](docs/organizations/README.md#updateorganizationbrandingpolicy) - Update a branding policy
* [UpdateOrganizationConfigTemplate](docs/organizations/README.md#updateorganizationconfigtemplate) - Update a configuration template
* [UpdateOrganizationEarlyAccessFeaturesOptIn](docs/organizations/README.md#updateorganizationearlyaccessfeaturesoptin) - Update an early access feature opt-in for an organization
* [UpdateOrganizationLicense](docs/organizations/README.md#updateorganizationlicense) - Update a license
* [UpdateOrganizationLoginSecurity](docs/organizations/README.md#updateorganizationloginsecurity) - Update the login security settings for an organization
* [UpdateOrganizationPolicyObject](docs/organizations/README.md#updateorganizationpolicyobject) - Updates a Policy Object.
* [UpdateOrganizationPolicyObjectsGroup](docs/organizations/README.md#updateorganizationpolicyobjectsgroup) - Updates a Policy Object Group.
* [UpdateOrganizationSaml](docs/organizations/README.md#updateorganizationsaml) - Updates the SAML SSO enabled settings for an organization.
* [UpdateOrganizationSamlIdp](docs/organizations/README.md#updateorganizationsamlidp) - Update a SAML IdP in your organization
* [UpdateOrganizationSamlRole](docs/organizations/README.md#updateorganizationsamlrole) - Update a SAML role
* [UpdateOrganizationSnmp](docs/organizations/README.md#updateorganizationsnmp) - Update the SNMP settings for an organization

### [Ospf](docs/ospf/README.md)

* [GetNetworkSwitchRoutingOspf](docs/ospf/README.md#getnetworkswitchroutingospf) - Return layer 3 OSPF routing configuration
* [UpdateNetworkSwitchRoutingOspf](docs/ospf/README.md#updatenetworkswitchroutingospf) - Update layer 3 OSPF routing configuration

### [Overview](docs/overview/README.md)

* [GetDeviceCameraAnalyticsOverview](docs/overview/README.md#getdevicecameraanalyticsoverview) - Returns an overview of aggregate analytics data for a timespan
* [GetNetworkClientsOverview](docs/overview/README.md#getnetworkclientsoverview) - Return overview statistics for network clients
* [GetNetworkSensorAlertsCurrentOverviewByMetric](docs/overview/README.md#getnetworksensoralertscurrentoverviewbymetric) - Return an overview of currently alerting sensors by metric
* [GetNetworkSensorAlertsOverviewByMetric](docs/overview/README.md#getnetworksensoralertsoverviewbymetric) - Return an overview of alert occurrences over a timespan, by metric
* [GetOrganizationAdaptivePolicyOverview](docs/overview/README.md#getorganizationadaptivepolicyoverview) - Returns adaptive policy aggregate statistics for an organization
* [GetOrganizationAPIRequestsOverview](docs/overview/README.md#getorganizationapirequestsoverview) - Return an aggregated overview of API requests data
* [GetOrganizationAPIRequestsOverviewResponseCodesByInterval](docs/overview/README.md#getorganizationapirequestsoverviewresponsecodesbyinterval) - Tracks organizations' API requests by response code across a given time period
* [GetOrganizationClientsOverview](docs/overview/README.md#getorganizationclientsoverview) - Return summary information around client data usage (in mb) across the given organization.
* [GetOrganizationDevicesStatusesOverview](docs/overview/README.md#getorganizationdevicesstatusesoverview) - Return an overview of current device statuses
* [GetOrganizationLicensesOverview](docs/overview/README.md#getorganizationlicensesoverview) - Return an overview of the license state for an organization

### [Packets](docs/packets/README.md)

* [GetDeviceSwitchPortsStatusesPackets](docs/packets/README.md#getdeviceswitchportsstatusespackets) - Return the packet counters for all the ports of a switch

### [PayloadTemplates](docs/payloadtemplates/README.md)

* [CreateNetworkWebhooksPayloadTemplate](docs/payloadtemplates/README.md#createnetworkwebhookspayloadtemplate) - Create a webhook payload template for a network
* [DeleteNetworkWebhooksPayloadTemplate](docs/payloadtemplates/README.md#deletenetworkwebhookspayloadtemplate) - Destroy a webhook payload template for a network
* [GetNetworkWebhooksPayloadTemplate](docs/payloadtemplates/README.md#getnetworkwebhookspayloadtemplate) - Get the webhook payload template for a network
* [GetNetworkWebhooksPayloadTemplates](docs/payloadtemplates/README.md#getnetworkwebhookspayloadtemplates) - List the webhook payload templates for a network
* [UpdateNetworkWebhooksPayloadTemplate](docs/payloadtemplates/README.md#updatenetworkwebhookspayloadtemplate) - Update a webhook payload template for a network

### [Performance](docs/performance/README.md)

* [GetDeviceAppliancePerformance](docs/performance/README.md#getdeviceapplianceperformance) - Return the performance score for a single MX

### [PerformanceHistory](docs/performancehistory/README.md)

* [GetNetworkSmDevicePerformanceHistory](docs/performancehistory/README.md#getnetworksmdeviceperformancehistory) - Return historical records of various Systems Manager client metrics for desktop devices.

### [Pii](docs/pii/README.md)

* [CreateNetworkPiiRequest](docs/pii/README.md#createnetworkpiirequest) - Submit a new delete or restrict processing PII request
* [DeleteNetworkPiiRequest](docs/pii/README.md#deletenetworkpiirequest) - Delete a restrict processing PII request
* [GetNetworkPiiPiiKeys](docs/pii/README.md#getnetworkpiipiikeys) - List the keys required to access Personally Identifiable Information (PII) for a given identifier
* [GetNetworkPiiRequest](docs/pii/README.md#getnetworkpiirequest) - Return a PII request
* [GetNetworkPiiRequests](docs/pii/README.md#getnetworkpiirequests) - List the PII requests for this network or organization
* [GetNetworkPiiSmDevicesForKey](docs/pii/README.md#getnetworkpiismdevicesforkey) - Given a piece of Personally Identifiable Information (PII), return the Systems Manager device ID(s) associated with that identifier
* [GetNetworkPiiSmOwnersForKey](docs/pii/README.md#getnetworkpiismownersforkey) - Given a piece of Personally Identifiable Information (PII), return the Systems Manager owner ID(s) associated with that identifier

### [PiiKeys](docs/piikeys/README.md)

* [GetNetworkPiiPiiKeys](docs/piikeys/README.md#getnetworkpiipiikeys) - List the keys required to access Personally Identifiable Information (PII) for a given identifier

### [Ping](docs/ping/README.md)

* [CreateDeviceLiveToolsPing](docs/ping/README.md#createdevicelivetoolsping) - Enqueue a job to ping a target host from the device
* [GetDeviceLiveToolsPing](docs/ping/README.md#getdevicelivetoolsping) - Return a ping job

### [PingDevice](docs/pingdevice/README.md)

* [CreateDeviceLiveToolsPingDevice](docs/pingdevice/README.md#createdevicelivetoolspingdevice) - Enqueue a job to check connectivity status to the device
* [GetDeviceLiveToolsPingDevice](docs/pingdevice/README.md#getdevicelivetoolspingdevice) - Return a ping device job

### [Policies](docs/policies/README.md)

* [CreateOrganizationAdaptivePolicyPolicy](docs/policies/README.md#createorganizationadaptivepolicypolicy) - Add an Adaptive Policy
* [DeleteOrganizationAdaptivePolicyPolicy](docs/policies/README.md#deleteorganizationadaptivepolicypolicy) - Delete an Adaptive Policy
* [GetNetworkPoliciesByClient](docs/policies/README.md#getnetworkpoliciesbyclient) - Get policies for all clients with policies
* [GetOrganizationAdaptivePolicyPolicies](docs/policies/README.md#getorganizationadaptivepolicypolicies) - List adaptive policies in an organization
* [GetOrganizationAdaptivePolicyPolicy](docs/policies/README.md#getorganizationadaptivepolicypolicy) - Return an adaptive policy
* [UpdateOrganizationAdaptivePolicyPolicy](docs/policies/README.md#updateorganizationadaptivepolicypolicy) - Update an Adaptive Policy

### [Policy](docs/policy/README.md)

* [GetNetworkClientPolicy](docs/policy/README.md#getnetworkclientpolicy) - Return the policy assigned to a client on the network
* [UpdateNetworkClientPolicy](docs/policy/README.md#updatenetworkclientpolicy) - Update the policy assigned to a client on the network

### [PolicyObjects](docs/policyobjects/README.md)

* [CreateOrganizationPolicyObject](docs/policyobjects/README.md#createorganizationpolicyobject) - Creates a new Policy Object.
* [CreateOrganizationPolicyObjectsGroup](docs/policyobjects/README.md#createorganizationpolicyobjectsgroup) - Creates a new Policy Object Group.
* [DeleteOrganizationPolicyObject](docs/policyobjects/README.md#deleteorganizationpolicyobject) - Deletes a Policy Object.
* [DeleteOrganizationPolicyObjectsGroup](docs/policyobjects/README.md#deleteorganizationpolicyobjectsgroup) - Deletes a Policy Object Group.
* [GetOrganizationPolicyObject](docs/policyobjects/README.md#getorganizationpolicyobject) - Shows details of a Policy Object.
* [GetOrganizationPolicyObjects](docs/policyobjects/README.md#getorganizationpolicyobjects) - Lists Policy Objects belonging to the organization.
* [GetOrganizationPolicyObjectsGroup](docs/policyobjects/README.md#getorganizationpolicyobjectsgroup) - Shows details of a Policy Object Group.
* [GetOrganizationPolicyObjectsGroups](docs/policyobjects/README.md#getorganizationpolicyobjectsgroups) - Lists Policy Object Groups belonging to the organization.
* [UpdateOrganizationPolicyObject](docs/policyobjects/README.md#updateorganizationpolicyobject) - Updates a Policy Object.
* [UpdateOrganizationPolicyObjectsGroup](docs/policyobjects/README.md#updateorganizationpolicyobjectsgroup) - Updates a Policy Object Group.

### [PortForwardingRules](docs/portforwardingrules/README.md)

* [GetDeviceCellularGatewayPortForwardingRules](docs/portforwardingrules/README.md#getdevicecellulargatewayportforwardingrules) - Returns the port forwarding rules for a single MG.
* [GetNetworkApplianceFirewallPortForwardingRules](docs/portforwardingrules/README.md#getnetworkappliancefirewallportforwardingrules) - Return the port forwarding rules for an MX network
* [UpdateDeviceCellularGatewayPortForwardingRules](docs/portforwardingrules/README.md#updatedevicecellulargatewayportforwardingrules) - Updates the port forwarding rules for a single MG.
* [UpdateNetworkApplianceFirewallPortForwardingRules](docs/portforwardingrules/README.md#updatenetworkappliancefirewallportforwardingrules) - Update the port forwarding rules for an MX network

### [PortSchedules](docs/portschedules/README.md)

* [CreateNetworkSwitchPortSchedule](docs/portschedules/README.md#createnetworkswitchportschedule) - Add a switch port schedule
* [DeleteNetworkSwitchPortSchedule](docs/portschedules/README.md#deletenetworkswitchportschedule) - Delete a switch port schedule
* [GetNetworkSwitchPortSchedules](docs/portschedules/README.md#getnetworkswitchportschedules) - List switch port schedules
* [UpdateNetworkSwitchPortSchedule](docs/portschedules/README.md#updatenetworkswitchportschedule) - Update a switch port schedule

### [Ports](docs/ports/README.md)

* [CycleDeviceSwitchPorts](docs/ports/README.md#cycledeviceswitchports) - Cycle a set of switch ports
* [GetDeviceSwitchPort](docs/ports/README.md#getdeviceswitchport) - Return a switch port
* [GetDeviceSwitchPorts](docs/ports/README.md#getdeviceswitchports) - List the switch ports for a switch
* [GetDeviceSwitchPortsStatuses](docs/ports/README.md#getdeviceswitchportsstatuses) - Return the status for all the ports of a switch
* [GetDeviceSwitchPortsStatusesPackets](docs/ports/README.md#getdeviceswitchportsstatusespackets) - Return the packet counters for all the ports of a switch
* [GetNetworkAppliancePort](docs/ports/README.md#getnetworkapplianceport) - Return per-port VLAN settings for a single MX port.
* [GetNetworkAppliancePorts](docs/ports/README.md#getnetworkapplianceports) - List per-port VLAN settings for all ports of a MX.
* [GetOrganizationConfigTemplateSwitchProfilePort](docs/ports/README.md#getorganizationconfigtemplateswitchprofileport) - Return a switch profile port
* [GetOrganizationConfigTemplateSwitchProfilePorts](docs/ports/README.md#getorganizationconfigtemplateswitchprofileports) - Return all the ports of a switch profile
* [GetOrganizationSwitchPortsBySwitch](docs/ports/README.md#getorganizationswitchportsbyswitch) - List the switchports in an organization by switch
* [UpdateDeviceSwitchPort](docs/ports/README.md#updatedeviceswitchport) - Update a switch port
* [UpdateNetworkAppliancePort](docs/ports/README.md#updatenetworkapplianceport) - Update the per-port VLAN settings for a single MX port.
* [UpdateOrganizationConfigTemplateSwitchProfilePort](docs/ports/README.md#updateorganizationconfigtemplateswitchprofileport) - Update a switch profile port

### [PowerModules](docs/powermodules/README.md)

* [GetOrganizationDevicesPowerModulesStatusesByDevice](docs/powermodules/README.md#getorganizationdevicespowermodulesstatusesbydevice) - List the power status information for devices in an organization

### [Prefixes](docs/prefixes/README.md)

* [CreateNetworkAppliancePrefixesDelegatedStatic](docs/prefixes/README.md#createnetworkapplianceprefixesdelegatedstatic) - Add a static delegated prefix from a network
* [DeleteNetworkAppliancePrefixesDelegatedStatic](docs/prefixes/README.md#deletenetworkapplianceprefixesdelegatedstatic) - Delete a static delegated prefix from a network
* [GetDeviceAppliancePrefixesDelegated](docs/prefixes/README.md#getdeviceapplianceprefixesdelegated) - Return current delegated IPv6 prefixes on an appliance.
* [GetDeviceAppliancePrefixesDelegatedVlanAssignments](docs/prefixes/README.md#getdeviceapplianceprefixesdelegatedvlanassignments) - Return prefixes assigned to all IPv6 enabled VLANs on an appliance.
* [GetNetworkAppliancePrefixesDelegatedStatic](docs/prefixes/README.md#getnetworkapplianceprefixesdelegatedstatic) - Return a static delegated prefix from a network
* [GetNetworkAppliancePrefixesDelegatedStatics](docs/prefixes/README.md#getnetworkapplianceprefixesdelegatedstatics) - List static delegated prefixes for a network
* [UpdateNetworkAppliancePrefixesDelegatedStatic](docs/prefixes/README.md#updatenetworkapplianceprefixesdelegatedstatic) - Update a static delegated prefix from a network

### [Prepare](docs/prepare/README.md)

* [CreateOrganizationInventoryOnboardingCloudMonitoringPrepare](docs/prepare/README.md#createorganizationinventoryonboardingcloudmonitoringprepare) - Initiates or updates an import session

### [Priorities](docs/priorities/README.md)

* [GetOrganizationBrandingPoliciesPriorities](docs/priorities/README.md#getorganizationbrandingpoliciespriorities) - Return the branding policy IDs of an organization in priority order
* [UpdateOrganizationBrandingPoliciesPriorities](docs/priorities/README.md#updateorganizationbrandingpoliciespriorities) - Update the priority ordering of an organization's branding policies.

### [Profiles](docs/profiles/README.md)

* [CreateNetworkSensorAlertsProfile](docs/profiles/README.md#createnetworksensoralertsprofile) - Creates a sensor alert profile for a network.
* [CreateOrganizationAlertsProfile](docs/profiles/README.md#createorganizationalertsprofile) - Create an organization-wide alert configuration
* [DeleteNetworkSensorAlertsProfile](docs/profiles/README.md#deletenetworksensoralertsprofile) - Deletes a sensor alert profile from a network.
* [DeleteOrganizationAlertsProfile](docs/profiles/README.md#deleteorganizationalertsprofile) - Removes an organization-wide alert config
* [GetNetworkSensorAlertsProfile](docs/profiles/README.md#getnetworksensoralertsprofile) - Show details of a sensor alert profile for a network.
* [GetNetworkSensorAlertsProfiles](docs/profiles/README.md#getnetworksensoralertsprofiles) - Lists all sensor alert profiles for a network.
* [GetNetworkSmProfiles](docs/profiles/README.md#getnetworksmprofiles) - List all profiles in a network
* [GetOrganizationAlertsProfiles](docs/profiles/README.md#getorganizationalertsprofiles) - List all organization-wide alert configurations
* [GetOrganizationConfigTemplateSwitchProfilePort](docs/profiles/README.md#getorganizationconfigtemplateswitchprofileport) - Return a switch profile port
* [GetOrganizationConfigTemplateSwitchProfilePorts](docs/profiles/README.md#getorganizationconfigtemplateswitchprofileports) - Return all the ports of a switch profile
* [GetOrganizationConfigTemplateSwitchProfiles](docs/profiles/README.md#getorganizationconfigtemplateswitchprofiles) - List the switch profiles for your switch template configuration
* [UpdateNetworkSensorAlertsProfile](docs/profiles/README.md#updatenetworksensoralertsprofile) - Updates a sensor alert profile for a network.
* [UpdateOrganizationAlertsProfile](docs/profiles/README.md#updateorganizationalertsprofile) - Update an organization-wide alert config
* [UpdateOrganizationConfigTemplateSwitchProfilePort](docs/profiles/README.md#updateorganizationconfigtemplateswitchprofileport) - Update a switch profile port

### [QosRules](docs/qosrules/README.md)

* [CreateNetworkSwitchQosRule](docs/qosrules/README.md#createnetworkswitchqosrule) - Add a quality of service rule
* [DeleteNetworkSwitchQosRule](docs/qosrules/README.md#deletenetworkswitchqosrule) - Delete a quality of service rule
* [GetNetworkSwitchQosRule](docs/qosrules/README.md#getnetworkswitchqosrule) - Return a quality of service rule
* [GetNetworkSwitchQosRules](docs/qosrules/README.md#getnetworkswitchqosrules) - List quality of service rules
* [GetNetworkSwitchQosRulesOrder](docs/qosrules/README.md#getnetworkswitchqosrulesorder) - Return the quality of service rule IDs by order in which they will be processed by the switch
* [UpdateNetworkSwitchQosRule](docs/qosrules/README.md#updatenetworkswitchqosrule) - Update a quality of service rule
* [UpdateNetworkSwitchQosRulesOrder](docs/qosrules/README.md#updatenetworkswitchqosrulesorder) - Update the order in which the rules should be processed by the switch

### [QualityAndRetention](docs/qualityandretention/README.md)

* [GetDeviceCameraQualityAndRetention](docs/qualityandretention/README.md#getdevicecameraqualityandretention) - Returns quality and retention settings for the given camera
* [UpdateDeviceCameraQualityAndRetention](docs/qualityandretention/README.md#updatedevicecameraqualityandretention) - Update quality and retention settings for the given camera

### [QualityRetentionProfiles](docs/qualityretentionprofiles/README.md)

* [CreateNetworkCameraQualityRetentionProfile](docs/qualityretentionprofiles/README.md#createnetworkcameraqualityretentionprofile) - Creates new quality retention profile for this network.
* [DeleteNetworkCameraQualityRetentionProfile](docs/qualityretentionprofiles/README.md#deletenetworkcameraqualityretentionprofile) - Delete an existing quality retention profile for this network.
* [GetNetworkCameraQualityRetentionProfile](docs/qualityretentionprofiles/README.md#getnetworkcameraqualityretentionprofile) - Retrieve a single quality retention profile
* [GetNetworkCameraQualityRetentionProfiles](docs/qualityretentionprofiles/README.md#getnetworkcameraqualityretentionprofiles) - List the quality retention profiles for this network
* [UpdateNetworkCameraQualityRetentionProfile](docs/qualityretentionprofiles/README.md#updatenetworkcameraqualityretentionprofile) - Update an existing quality retention profile for this network.

### [Radio](docs/radio/README.md)

* [GetDeviceWirelessRadioSettings](docs/radio/README.md#getdevicewirelessradiosettings) - Return the radio settings of a device
* [UpdateDeviceWirelessRadioSettings](docs/radio/README.md#updatedevicewirelessradiosettings) - Update the radio settings of a device

### [Readings](docs/readings/README.md)

* [GetOrganizationSensorReadingsHistory](docs/readings/README.md#getorganizationsensorreadingshistory) - Return all reported readings from sensors in a given timespan, sorted by timestamp
* [GetOrganizationSensorReadingsLatest](docs/readings/README.md#getorganizationsensorreadingslatest) - Return the latest available reading for each metric from each sensor, sorted by sensor serial

### [Recent](docs/recent/README.md)

* [GetDeviceCameraAnalyticsRecent](docs/recent/README.md#getdevicecameraanalyticsrecent) - Returns most recent record for analytics zones

### [Relationships](docs/relationships/README.md)

* [GetDeviceSensorRelationships](docs/relationships/README.md#getdevicesensorrelationships) - List the sensor roles for a given sensor or camera device.
* [GetNetworkSensorRelationships](docs/relationships/README.md#getnetworksensorrelationships) - List the sensor roles for devices in a given network
* [UpdateDeviceSensorRelationships](docs/relationships/README.md#updatedevicesensorrelationships) - Assign one or more sensor roles to a given sensor or camera device.

### [RendezvousPoints](docs/rendezvouspoints/README.md)

* [CreateNetworkSwitchRoutingMulticastRendezvousPoint](docs/rendezvouspoints/README.md#createnetworkswitchroutingmulticastrendezvouspoint) - Create a multicast rendezvous point
* [DeleteNetworkSwitchRoutingMulticastRendezvousPoint](docs/rendezvouspoints/README.md#deletenetworkswitchroutingmulticastrendezvouspoint) - Delete a multicast rendezvous point
* [GetNetworkSwitchRoutingMulticastRendezvousPoint](docs/rendezvouspoints/README.md#getnetworkswitchroutingmulticastrendezvouspoint) - Return a multicast rendezvous point
* [GetNetworkSwitchRoutingMulticastRendezvousPoints](docs/rendezvouspoints/README.md#getnetworkswitchroutingmulticastrendezvouspoints) - List multicast rendezvous points
* [UpdateNetworkSwitchRoutingMulticastRendezvousPoint](docs/rendezvouspoints/README.md#updatenetworkswitchroutingmulticastrendezvouspoint) - Update a multicast rendezvous point

### [Requests](docs/requests/README.md)

* [CreateNetworkPiiRequest](docs/requests/README.md#createnetworkpiirequest) - Submit a new delete or restrict processing PII request
* [DeleteNetworkPiiRequest](docs/requests/README.md#deletenetworkpiirequest) - Delete a restrict processing PII request
* [GetNetworkPiiRequest](docs/requests/README.md#getnetworkpiirequest) - Return a PII request
* [GetNetworkPiiRequests](docs/requests/README.md#getnetworkpiirequests) - List the PII requests for this network or organization

### [ResponseCodes](docs/responsecodes/README.md)

* [GetOrganizationAPIRequestsOverviewResponseCodesByInterval](docs/responsecodes/README.md#getorganizationapirequestsoverviewresponsecodesbyinterval) - Tracks organizations' API requests by response code across a given time period

### [Restrictions](docs/restrictions/README.md)

* [GetNetworkSmDeviceRestrictions](docs/restrictions/README.md#getnetworksmdevicerestrictions) - List the restrictions on a device

### [RfProfiles](docs/rfprofiles/README.md)

* [CreateNetworkWirelessRfProfile](docs/rfprofiles/README.md#createnetworkwirelessrfprofile) - Creates new RF profile for this network
* [DeleteNetworkWirelessRfProfile](docs/rfprofiles/README.md#deletenetworkwirelessrfprofile) - Delete a RF Profile
* [GetNetworkWirelessRfProfile](docs/rfprofiles/README.md#getnetworkwirelessrfprofile) - Return a RF profile
* [GetNetworkWirelessRfProfiles](docs/rfprofiles/README.md#getnetworkwirelessrfprofiles) - List the non-basic RF profiles for this network
* [UpdateNetworkWirelessRfProfile](docs/rfprofiles/README.md#updatenetworkwirelessrfprofile) - Updates specified RF profile for this network

### [Rollbacks](docs/rollbacks/README.md)

* [CreateNetworkFirmwareUpgradesRollback](docs/rollbacks/README.md#createnetworkfirmwareupgradesrollback) - Rollback a Firmware Upgrade For A Network

### [Routing](docs/routing/README.md)

* [CreateDeviceSwitchRoutingInterface](docs/routing/README.md#createdeviceswitchroutinginterface) - Create a layer 3 interface for a switch
* [CreateDeviceSwitchRoutingStaticRoute](docs/routing/README.md#createdeviceswitchroutingstaticroute) - Create a layer 3 static route for a switch
* [CreateNetworkSwitchRoutingMulticastRendezvousPoint](docs/routing/README.md#createnetworkswitchroutingmulticastrendezvouspoint) - Create a multicast rendezvous point
* [CreateNetworkSwitchStackRoutingInterface](docs/routing/README.md#createnetworkswitchstackroutinginterface) - Create a layer 3 interface for a switch stack
* [CreateNetworkSwitchStackRoutingStaticRoute](docs/routing/README.md#createnetworkswitchstackroutingstaticroute) - Create a layer 3 static route for a switch stack
* [DeleteDeviceSwitchRoutingInterface](docs/routing/README.md#deletedeviceswitchroutinginterface) - Delete a layer 3 interface from the switch
* [DeleteDeviceSwitchRoutingStaticRoute](docs/routing/README.md#deletedeviceswitchroutingstaticroute) - Delete a layer 3 static route for a switch
* [DeleteNetworkSwitchRoutingMulticastRendezvousPoint](docs/routing/README.md#deletenetworkswitchroutingmulticastrendezvouspoint) - Delete a multicast rendezvous point
* [DeleteNetworkSwitchStackRoutingInterface](docs/routing/README.md#deletenetworkswitchstackroutinginterface) - Delete a layer 3 interface from a switch stack
* [DeleteNetworkSwitchStackRoutingStaticRoute](docs/routing/README.md#deletenetworkswitchstackroutingstaticroute) - Delete a layer 3 static route for a switch stack
* [GetDeviceSwitchRoutingInterface](docs/routing/README.md#getdeviceswitchroutinginterface) - Return a layer 3 interface for a switch
* [GetDeviceSwitchRoutingInterfaceDhcp](docs/routing/README.md#getdeviceswitchroutinginterfacedhcp) - Return a layer 3 interface DHCP configuration for a switch
* [GetDeviceSwitchRoutingInterfaces](docs/routing/README.md#getdeviceswitchroutinginterfaces) - List layer 3 interfaces for a switch
* [GetDeviceSwitchRoutingStaticRoute](docs/routing/README.md#getdeviceswitchroutingstaticroute) - Return a layer 3 static route for a switch
* [GetDeviceSwitchRoutingStaticRoutes](docs/routing/README.md#getdeviceswitchroutingstaticroutes) - List layer 3 static routes for a switch
* [GetNetworkSwitchRoutingMulticast](docs/routing/README.md#getnetworkswitchroutingmulticast) - Return multicast settings for a network
* [GetNetworkSwitchRoutingMulticastRendezvousPoint](docs/routing/README.md#getnetworkswitchroutingmulticastrendezvouspoint) - Return a multicast rendezvous point
* [GetNetworkSwitchRoutingMulticastRendezvousPoints](docs/routing/README.md#getnetworkswitchroutingmulticastrendezvouspoints) - List multicast rendezvous points
* [GetNetworkSwitchRoutingOspf](docs/routing/README.md#getnetworkswitchroutingospf) - Return layer 3 OSPF routing configuration
* [GetNetworkSwitchStackRoutingInterface](docs/routing/README.md#getnetworkswitchstackroutinginterface) - Return a layer 3 interface from a switch stack
* [GetNetworkSwitchStackRoutingInterfaceDhcp](docs/routing/README.md#getnetworkswitchstackroutinginterfacedhcp) - Return a layer 3 interface DHCP configuration for a switch stack
* [GetNetworkSwitchStackRoutingInterfaces](docs/routing/README.md#getnetworkswitchstackroutinginterfaces) - List layer 3 interfaces for a switch stack
* [GetNetworkSwitchStackRoutingStaticRoute](docs/routing/README.md#getnetworkswitchstackroutingstaticroute) - Return a layer 3 static route for a switch stack
* [GetNetworkSwitchStackRoutingStaticRoutes](docs/routing/README.md#getnetworkswitchstackroutingstaticroutes) - List layer 3 static routes for a switch stack
* [UpdateDeviceSwitchRoutingInterface](docs/routing/README.md#updatedeviceswitchroutinginterface) - Update a layer 3 interface for a switch
* [UpdateDeviceSwitchRoutingInterfaceDhcp](docs/routing/README.md#updatedeviceswitchroutinginterfacedhcp) - Update a layer 3 interface DHCP configuration for a switch
* [UpdateDeviceSwitchRoutingStaticRoute](docs/routing/README.md#updatedeviceswitchroutingstaticroute) - Update a layer 3 static route for a switch
* [UpdateNetworkSwitchRoutingMulticast](docs/routing/README.md#updatenetworkswitchroutingmulticast) - Update multicast settings for a network
* [UpdateNetworkSwitchRoutingMulticastRendezvousPoint](docs/routing/README.md#updatenetworkswitchroutingmulticastrendezvouspoint) - Update a multicast rendezvous point
* [UpdateNetworkSwitchRoutingOspf](docs/routing/README.md#updatenetworkswitchroutingospf) - Update layer 3 OSPF routing configuration
* [UpdateNetworkSwitchStackRoutingInterface](docs/routing/README.md#updatenetworkswitchstackroutinginterface) - Update a layer 3 interface for a switch stack
* [UpdateNetworkSwitchStackRoutingInterfaceDhcp](docs/routing/README.md#updatenetworkswitchstackroutinginterfacedhcp) - Update a layer 3 interface DHCP configuration for a switch stack
* [UpdateNetworkSwitchStackRoutingStaticRoute](docs/routing/README.md#updatenetworkswitchstackroutingstaticroute) - Update a layer 3 static route for a switch stack

### [Rules](docs/rules/README.md)

* [GetNetworkApplianceTrafficShapingRules](docs/rules/README.md#getnetworkappliancetrafficshapingrules) - Display the traffic shaping settings rules for an MX network
* [GetNetworkWirelessSsidTrafficShapingRules](docs/rules/README.md#getnetworkwirelessssidtrafficshapingrules) - Display the traffic shaping settings for a SSID on an MR network
* [UpdateNetworkApplianceTrafficShapingRules](docs/rules/README.md#updatenetworkappliancetrafficshapingrules) - Update the traffic shaping settings rules for an MX network
* [UpdateNetworkWirelessSsidTrafficShapingRules](docs/rules/README.md#updatenetworkwirelessssidtrafficshapingrules) - Update the traffic shaping settings for an SSID on an MR network

### [Saml](docs/saml/README.md)

* [CreateOrganizationSamlIdp](docs/saml/README.md#createorganizationsamlidp) - Create a SAML IdP for your organization.
* [DeleteOrganizationSamlIdp](docs/saml/README.md#deleteorganizationsamlidp) - Remove a SAML IdP in your organization.
* [GetOrganizationSaml](docs/saml/README.md#getorganizationsaml) - Returns the SAML SSO enabled settings for an organization.
* [GetOrganizationSamlIdp](docs/saml/README.md#getorganizationsamlidp) - Get a SAML IdP from your organization.
* [GetOrganizationSamlIdps](docs/saml/README.md#getorganizationsamlidps) - List the SAML IdPs in your organization.
* [UpdateOrganizationSaml](docs/saml/README.md#updateorganizationsaml) - Updates the SAML SSO enabled settings for an organization.
* [UpdateOrganizationSamlIdp](docs/saml/README.md#updateorganizationsamlidp) - Update a SAML IdP in your organization

### [SamlRoles](docs/samlroles/README.md)

* [CreateOrganizationSamlRole](docs/samlroles/README.md#createorganizationsamlrole) - Create a SAML role
* [DeleteOrganizationSamlRole](docs/samlroles/README.md#deleteorganizationsamlrole) - Remove a SAML role
* [GetOrganizationSamlRole](docs/samlroles/README.md#getorganizationsamlrole) - Return a SAML role
* [GetOrganizationSamlRoles](docs/samlroles/README.md#getorganizationsamlroles) - List the SAML roles for this organization
* [UpdateOrganizationSamlRole](docs/samlroles/README.md#updateorganizationsamlrole) - Update a SAML role

### [Schedules](docs/schedules/README.md)

* [GetNetworkCameraSchedules](docs/schedules/README.md#getnetworkcameraschedules) - Returns a list of all camera recording schedules.
* [GetNetworkWirelessSsidSchedules](docs/schedules/README.md#getnetworkwirelessssidschedules) - List the outage schedule for the SSID
* [UpdateNetworkWirelessSsidSchedules](docs/schedules/README.md#updatenetworkwirelessssidschedules) - Update the outage schedule for the SSID

### [Search](docs/search/README.md)

* [GetOrganizationClientsSearch](docs/search/README.md#getorganizationclientssearch) - Return the client details in an organization

### [Security](docs/security/README.md)

* [GetNetworkApplianceClientSecurityEvents](docs/security/README.md#getnetworkapplianceclientsecurityevents) - List the security events for a client
* [GetNetworkApplianceSecurityEvents](docs/security/README.md#getnetworkappliancesecurityevents) - List the security events for a network
* [GetNetworkApplianceSecurityIntrusion](docs/security/README.md#getnetworkappliancesecurityintrusion) - Returns all supported intrusion settings for an MX network
* [GetNetworkApplianceSecurityMalware](docs/security/README.md#getnetworkappliancesecuritymalware) - Returns all supported malware settings for an MX network
* [GetOrganizationApplianceSecurityEvents](docs/security/README.md#getorganizationappliancesecurityevents) - List the security events for an organization
* [GetOrganizationApplianceSecurityIntrusion](docs/security/README.md#getorganizationappliancesecurityintrusion) - Returns all supported intrusion settings for an organization
* [UpdateNetworkApplianceSecurityIntrusion](docs/security/README.md#updatenetworkappliancesecurityintrusion) - Set the supported intrusion settings for an MX network
* [UpdateNetworkApplianceSecurityMalware](docs/security/README.md#updatenetworkappliancesecuritymalware) - Set the supported malware settings for an MX network
* [UpdateOrganizationApplianceSecurityIntrusion](docs/security/README.md#updateorganizationappliancesecurityintrusion) - Sets supported intrusion settings for an organization

### [SecurityCenters](docs/securitycenters/README.md)

* [GetNetworkSmDeviceSecurityCenters](docs/securitycenters/README.md#getnetworksmdevicesecuritycenters) - List the security centers on a device

### [Seen](docs/seen/README.md)

* [GetNetworkSwitchDhcpV4ServersSeen](docs/seen/README.md#getnetworkswitchdhcpv4serversseen) - Return the network's DHCPv4 servers seen within the selected timeframe (default 1 day)

### [Sense](docs/sense/README.md)

* [GetDeviceCameraSense](docs/sense/README.md#getdevicecamerasense) - Returns sense settings for a given camera
* [GetDeviceCameraSenseObjectDetectionModels](docs/sense/README.md#getdevicecamerasenseobjectdetectionmodels) - Returns the MV Sense object detection model list for the given camera
* [UpdateDeviceCameraSense](docs/sense/README.md#updatedevicecamerasense) - Update sense settings for the given camera

### [Sensor](docs/sensor/README.md)

* [CreateNetworkSensorAlertsProfile](docs/sensor/README.md#createnetworksensoralertsprofile) - Creates a sensor alert profile for a network.
* [DeleteNetworkSensorAlertsProfile](docs/sensor/README.md#deletenetworksensoralertsprofile) - Deletes a sensor alert profile from a network.
* [GetDeviceSensorRelationships](docs/sensor/README.md#getdevicesensorrelationships) - List the sensor roles for a given sensor or camera device.
* [GetNetworkSensorAlertsCurrentOverviewByMetric](docs/sensor/README.md#getnetworksensoralertscurrentoverviewbymetric) - Return an overview of currently alerting sensors by metric
* [GetNetworkSensorAlertsOverviewByMetric](docs/sensor/README.md#getnetworksensoralertsoverviewbymetric) - Return an overview of alert occurrences over a timespan, by metric
* [GetNetworkSensorAlertsProfile](docs/sensor/README.md#getnetworksensoralertsprofile) - Show details of a sensor alert profile for a network.
* [GetNetworkSensorAlertsProfiles](docs/sensor/README.md#getnetworksensoralertsprofiles) - Lists all sensor alert profiles for a network.
* [GetNetworkSensorRelationships](docs/sensor/README.md#getnetworksensorrelationships) - List the sensor roles for devices in a given network
* [GetOrganizationSensorReadingsHistory](docs/sensor/README.md#getorganizationsensorreadingshistory) - Return all reported readings from sensors in a given timespan, sorted by timestamp
* [GetOrganizationSensorReadingsLatest](docs/sensor/README.md#getorganizationsensorreadingslatest) - Return the latest available reading for each metric from each sensor, sorted by sensor serial
* [UpdateDeviceSensorRelationships](docs/sensor/README.md#updatedevicesensorrelationships) - Assign one or more sensor roles to a given sensor or camera device.
* [UpdateNetworkSensorAlertsProfile](docs/sensor/README.md#updatenetworksensoralertsprofile) - Updates a sensor alert profile for a network.

### [Servers](docs/servers/README.md)

* [GetNetworkSwitchDhcpV4ServersSeen](docs/servers/README.md#getnetworkswitchdhcpv4serversseen) - Return the network's DHCPv4 servers seen within the selected timeframe (default 1 day)

### [Settings](docs/settings/README.md)

* [GetDeviceApplianceUplinksSettings](docs/settings/README.md#getdeviceapplianceuplinkssettings) - Return the uplink settings for an MX appliance
* [GetDeviceCameraVideoSettings](docs/settings/README.md#getdevicecameravideosettings) - Returns video settings for the given camera
* [GetDeviceWirelessBluetoothSettings](docs/settings/README.md#getdevicewirelessbluetoothsettings) - Return the bluetooth settings for a wireless device
* [GetDeviceWirelessRadioSettings](docs/settings/README.md#getdevicewirelessradiosettings) - Return the radio settings of a device
* [GetNetworkAlertsSettings](docs/settings/README.md#getnetworkalertssettings) - Return the alert configuration for this network
* [GetNetworkApplianceFirewallSettings](docs/settings/README.md#getnetworkappliancefirewallsettings) - Return the firewall settings for this network
* [GetNetworkApplianceSettings](docs/settings/README.md#getnetworkappliancesettings) - Return the appliance settings for a network
* [GetNetworkApplianceVlansSettings](docs/settings/README.md#getnetworkappliancevlanssettings) - Returns the enabled status of VLANs for the network
* [GetNetworkSettings](docs/settings/README.md#getnetworksettings) - Return the settings for a network
* [GetNetworkSwitchSettings](docs/settings/README.md#getnetworkswitchsettings) - Returns the switch network settings
* [GetNetworkWirelessBluetoothSettings](docs/settings/README.md#getnetworkwirelessbluetoothsettings) - Return the Bluetooth settings for a network. <a href="https://documentation.meraki.com/MR/Bluetooth/Bluetooth_Low_Energy_(BLE)">Bluetooth settings</a> must be enabled on the network.
* [GetNetworkWirelessSettings](docs/settings/README.md#getnetworkwirelesssettings) - Return the wireless settings for a network
* [GetNetworkWirelessSsidSplashSettings](docs/settings/README.md#getnetworkwirelessssidsplashsettings) - Display the splash page settings for the given SSID
* [GetOrganizationAdaptivePolicySettings](docs/settings/README.md#getorganizationadaptivepolicysettings) - Returns global adaptive policy settings in an organization
* [UpdateDeviceApplianceUplinksSettings](docs/settings/README.md#updatedeviceapplianceuplinkssettings) - Update the uplink settings for an MX appliance
* [UpdateDeviceCameraVideoSettings](docs/settings/README.md#updatedevicecameravideosettings) - Update video settings for the given camera
* [UpdateDeviceWirelessBluetoothSettings](docs/settings/README.md#updatedevicewirelessbluetoothsettings) - Update the bluetooth settings for a wireless device
* [UpdateDeviceWirelessRadioSettings](docs/settings/README.md#updatedevicewirelessradiosettings) - Update the radio settings of a device
* [UpdateNetworkAlertsSettings](docs/settings/README.md#updatenetworkalertssettings) - Update the alert configuration for this network
* [UpdateNetworkApplianceFirewallSettings](docs/settings/README.md#updatenetworkappliancefirewallsettings) - Update the firewall settings for this network
* [UpdateNetworkApplianceSettings](docs/settings/README.md#updatenetworkappliancesettings) - Update the appliance settings for a network
* [UpdateNetworkApplianceVlansSettings](docs/settings/README.md#updatenetworkappliancevlanssettings) - Enable/Disable VLANs for the given network
* [UpdateNetworkSettings](docs/settings/README.md#updatenetworksettings) - Update the settings for a network
* [UpdateNetworkSwitchSettings](docs/settings/README.md#updatenetworkswitchsettings) - Update switch network settings
* [UpdateNetworkWirelessBluetoothSettings](docs/settings/README.md#updatenetworkwirelessbluetoothsettings) - Update the Bluetooth settings for a network
* [UpdateNetworkWirelessSettings](docs/settings/README.md#updatenetworkwirelesssettings) - Update the wireless settings for a network
* [UpdateNetworkWirelessSsidSplashSettings](docs/settings/README.md#updatenetworkwirelessssidsplashsettings) - Modify the splash page settings for the given SSID
* [UpdateOrganizationAdaptivePolicySettings](docs/settings/README.md#updateorganizationadaptivepolicysettings) - Update global adaptive policy settings

### [SignalQualityHistory](docs/signalqualityhistory/README.md)

* [GetNetworkWirelessSignalQualityHistory](docs/signalqualityhistory/README.md#getnetworkwirelesssignalqualityhistory) - Return signal quality (SNR/RSSI) over time for a device or network client

### [Sims](docs/sims/README.md)

* [GetDeviceCellularSims](docs/sims/README.md#getdevicecellularsims) - Return the SIM and APN configurations for a cellular device.
* [UpdateDeviceCellularSims](docs/sims/README.md#updatedevicecellularsims) - Updates the SIM and APN configurations for a cellular device.

### [SingleLan](docs/singlelan/README.md)

* [GetNetworkApplianceSingleLan](docs/singlelan/README.md#getnetworkappliancesinglelan) - Return single LAN configuration
* [UpdateNetworkApplianceSingleLan](docs/singlelan/README.md#updatenetworkappliancesinglelan) - Update single LAN configuration

### [SiteToSiteVpn](docs/sitetositevpn/README.md)

* [GetNetworkApplianceVpnSiteToSiteVpn](docs/sitetositevpn/README.md#getnetworkappliancevpnsitetositevpn) - Return the site-to-site VPN settings of a network
* [UpdateNetworkApplianceVpnSiteToSiteVpn](docs/sitetositevpn/README.md#updatenetworkappliancevpnsitetositevpn) - Update the site-to-site VPN settings of a network

### [Sm](docs/sm/README.md)

* [CheckinNetworkSmDevices](docs/sm/README.md#checkinnetworksmdevices) - Force check-in a set of devices
* [CreateNetworkSmBypassActivationLockAttempt](docs/sm/README.md#createnetworksmbypassactivationlockattempt) - Bypass activation lock attempt
* [CreateNetworkSmTargetGroup](docs/sm/README.md#createnetworksmtargetgroup) - Add a target group
* [DeleteNetworkSmTargetGroup](docs/sm/README.md#deletenetworksmtargetgroup) - Delete a target group from a network
* [DeleteNetworkSmUserAccessDevice](docs/sm/README.md#deletenetworksmuseraccessdevice) - Delete a User Access Device
* [GetNetworkSmBypassActivationLockAttempt](docs/sm/README.md#getnetworksmbypassactivationlockattempt) - Bypass activation lock attempt status
* [GetNetworkSmDeviceCellularUsageHistory](docs/sm/README.md#getnetworksmdevicecellularusagehistory) - Return the client's daily cellular data usage history
* [GetNetworkSmDeviceCerts](docs/sm/README.md#getnetworksmdevicecerts) - List the certs on a device
* [GetNetworkSmDeviceConnectivity](docs/sm/README.md#getnetworksmdeviceconnectivity) - Returns historical connectivity data (whether a device is regularly checking in to Dashboard).
* [GetNetworkSmDeviceDesktopLogs](docs/sm/README.md#getnetworksmdevicedesktoplogs) - Return historical records of various Systems Manager network connection details for desktop devices.
* [GetNetworkSmDeviceDeviceCommandLogs](docs/sm/README.md#getnetworksmdevicedevicecommandlogs) - Return historical records of commands sent to Systems Manager devices
* [GetNetworkSmDeviceDeviceProfiles](docs/sm/README.md#getnetworksmdevicedeviceprofiles) - Get the installed profiles associated with a device
* [GetNetworkSmDeviceNetworkAdapters](docs/sm/README.md#getnetworksmdevicenetworkadapters) - List the network adapters of a device
* [GetNetworkSmDevicePerformanceHistory](docs/sm/README.md#getnetworksmdeviceperformancehistory) - Return historical records of various Systems Manager client metrics for desktop devices.
* [GetNetworkSmDeviceRestrictions](docs/sm/README.md#getnetworksmdevicerestrictions) - List the restrictions on a device
* [GetNetworkSmDeviceSecurityCenters](docs/sm/README.md#getnetworksmdevicesecuritycenters) - List the security centers on a device
* [GetNetworkSmDeviceSoftwares](docs/sm/README.md#getnetworksmdevicesoftwares) - Get a list of softwares associated with a device
* [GetNetworkSmDeviceWlanLists](docs/sm/README.md#getnetworksmdevicewlanlists) - List the saved SSID names on a device
* [GetNetworkSmDevices](docs/sm/README.md#getnetworksmdevices) - List the devices enrolled in an SM network with various specified fields and filters
* [GetNetworkSmProfiles](docs/sm/README.md#getnetworksmprofiles) - List all profiles in a network
* [GetNetworkSmTargetGroup](docs/sm/README.md#getnetworksmtargetgroup) - Return a target group
* [GetNetworkSmTargetGroups](docs/sm/README.md#getnetworksmtargetgroups) - List the target groups in this network
* [GetNetworkSmTrustedAccessConfigs](docs/sm/README.md#getnetworksmtrustedaccessconfigs) - List Trusted Access Configs
* [GetNetworkSmUserAccessDevices](docs/sm/README.md#getnetworksmuseraccessdevices) - List User Access Devices and its Trusted Access Connections
* [GetNetworkSmUserDeviceProfiles](docs/sm/README.md#getnetworksmuserdeviceprofiles) - Get the profiles associated with a user
* [GetNetworkSmUserSoftwares](docs/sm/README.md#getnetworksmusersoftwares) - Get a list of softwares associated with a user
* [GetNetworkSmUsers](docs/sm/README.md#getnetworksmusers) - List the owners in an SM network with various specified fields and filters
* [GetOrganizationSmApnsCert](docs/sm/README.md#getorganizationsmapnscert) - Get the organization's APNS certificate
* [GetOrganizationSmVppAccount](docs/sm/README.md#getorganizationsmvppaccount) - Get a hash containing the unparsed token of the VPP account with the given ID
* [GetOrganizationSmVppAccounts](docs/sm/README.md#getorganizationsmvppaccounts) - List the VPP accounts in the organization
* [LockNetworkSmDevices](docs/sm/README.md#locknetworksmdevices) - Lock a set of devices
* [ModifyNetworkSmDevicesTags](docs/sm/README.md#modifynetworksmdevicestags) - Add, delete, or update the tags of a set of devices
* [MoveNetworkSmDevices](docs/sm/README.md#movenetworksmdevices) - Move a set of devices to a new network
* [RefreshNetworkSmDeviceDetails](docs/sm/README.md#refreshnetworksmdevicedetails) - Refresh the details of a device
* [UnenrollNetworkSmDevice](docs/sm/README.md#unenrollnetworksmdevice) - Unenroll a device
* [UpdateNetworkSmDevicesFields](docs/sm/README.md#updatenetworksmdevicesfields) - Modify the fields of a device
* [UpdateNetworkSmTargetGroup](docs/sm/README.md#updatenetworksmtargetgroup) - Update a target group
* [WipeNetworkSmDevices](docs/sm/README.md#wipenetworksmdevices) - Wipe a device

### [SmDevicesForKey](docs/smdevicesforkey/README.md)

* [GetNetworkPiiSmDevicesForKey](docs/smdevicesforkey/README.md#getnetworkpiismdevicesforkey) - Given a piece of Personally Identifiable Information (PII), return the Systems Manager device ID(s) associated with that identifier

### [SmOwnersForKey](docs/smownersforkey/README.md)

* [GetNetworkPiiSmOwnersForKey](docs/smownersforkey/README.md#getnetworkpiismownersforkey) - Given a piece of Personally Identifiable Information (PII), return the Systems Manager owner ID(s) associated with that identifier

### [Snmp](docs/snmp/README.md)

* [GetNetworkSnmp](docs/snmp/README.md#getnetworksnmp) - Return the SNMP settings for a network
* [GetOrganizationSnmp](docs/snmp/README.md#getorganizationsnmp) - Return the SNMP settings for an organization
* [UpdateNetworkSnmp](docs/snmp/README.md#updatenetworksnmp) - Update the SNMP settings for a network
* [UpdateOrganizationSnmp](docs/snmp/README.md#updateorganizationsnmp) - Update the SNMP settings for an organization

### [Softwares](docs/softwares/README.md)

* [GetNetworkSmDeviceSoftwares](docs/softwares/README.md#getnetworksmdevicesoftwares) - Get a list of softwares associated with a device
* [GetNetworkSmUserSoftwares](docs/softwares/README.md#getnetworksmusersoftwares) - Get a list of softwares associated with a user

### [Splash](docs/splash/README.md)

* [GetNetworkWirelessSsidSplashSettings](docs/splash/README.md#getnetworkwirelessssidsplashsettings) - Display the splash page settings for the given SSID
* [UpdateNetworkWirelessSsidSplashSettings](docs/splash/README.md#updatenetworkwirelessssidsplashsettings) - Modify the splash page settings for the given SSID

### [SplashAuthorizationStatus](docs/splashauthorizationstatus/README.md)

* [GetNetworkClientSplashAuthorizationStatus](docs/splashauthorizationstatus/README.md#getnetworkclientsplashauthorizationstatus) - Return the splash authorization for a client, for each SSID they've associated with through splash
* [UpdateNetworkClientSplashAuthorizationStatus](docs/splashauthorizationstatus/README.md#updatenetworkclientsplashauthorizationstatus) - Update a client's splash authorization

### [SplashLoginAttempts](docs/splashloginattempts/README.md)

* [GetNetworkSplashLoginAttempts](docs/splashloginattempts/README.md#getnetworksplashloginattempts) - List the splash login attempts for a network

### [Ssids](docs/ssids/README.md)

* [CreateNetworkWirelessSsidIdentityPsk](docs/ssids/README.md#createnetworkwirelessssididentitypsk) - Create an Identity PSK
* [DeleteNetworkWirelessSsidIdentityPsk](docs/ssids/README.md#deletenetworkwirelessssididentitypsk) - Delete an Identity PSK
* [GetNetworkApplianceSsid](docs/ssids/README.md#getnetworkappliancessid) - Return a single MX SSID
* [GetNetworkApplianceSsids](docs/ssids/README.md#getnetworkappliancessids) - List the MX SSIDs in a network
* [GetNetworkWirelessSsid](docs/ssids/README.md#getnetworkwirelessssid) - Return a single MR SSID
* [GetNetworkWirelessSsidBonjourForwarding](docs/ssids/README.md#getnetworkwirelessssidbonjourforwarding) - List the Bonjour forwarding setting and rules for the SSID
* [GetNetworkWirelessSsidDeviceTypeGroupPolicies](docs/ssids/README.md#getnetworkwirelessssiddevicetypegrouppolicies) - List the device type group policies for the SSID
* [GetNetworkWirelessSsidEapOverride](docs/ssids/README.md#getnetworkwirelessssideapoverride) - Return the EAP overridden parameters for an SSID
* [GetNetworkWirelessSsidFirewallL3FirewallRules](docs/ssids/README.md#getnetworkwirelessssidfirewalll3firewallrules) - Return the L3 firewall rules for an SSID on an MR network
* [GetNetworkWirelessSsidFirewallL7FirewallRules](docs/ssids/README.md#getnetworkwirelessssidfirewalll7firewallrules) - Return the L7 firewall rules for an SSID on an MR network
* [GetNetworkWirelessSsidHotspot20](docs/ssids/README.md#getnetworkwirelessssidhotspot20) - Return the Hotspot 2.0 settings for an SSID
* [GetNetworkWirelessSsidIdentityPsk](docs/ssids/README.md#getnetworkwirelessssididentitypsk) - Return an Identity PSK
* [GetNetworkWirelessSsidIdentityPsks](docs/ssids/README.md#getnetworkwirelessssididentitypsks) - List all Identity PSKs in a wireless network
* [GetNetworkWirelessSsidSchedules](docs/ssids/README.md#getnetworkwirelessssidschedules) - List the outage schedule for the SSID
* [GetNetworkWirelessSsidSplashSettings](docs/ssids/README.md#getnetworkwirelessssidsplashsettings) - Display the splash page settings for the given SSID
* [GetNetworkWirelessSsidTrafficShapingRules](docs/ssids/README.md#getnetworkwirelessssidtrafficshapingrules) - Display the traffic shaping settings for a SSID on an MR network
* [GetNetworkWirelessSsidVpn](docs/ssids/README.md#getnetworkwirelessssidvpn) - List the VPN settings for the SSID.
* [GetNetworkWirelessSsids](docs/ssids/README.md#getnetworkwirelessssids) - List the MR SSIDs in a network
* [GetOrganizationSummaryTopSsidsByUsage](docs/ssids/README.md#getorganizationsummarytopssidsbyusage) - Return metrics for organization's top 10 ssids by data usage over given time range
* [UpdateNetworkApplianceSsid](docs/ssids/README.md#updatenetworkappliancessid) - Update the attributes of an MX SSID
* [UpdateNetworkWirelessSsid](docs/ssids/README.md#updatenetworkwirelessssid) - Update the attributes of an MR SSID
* [UpdateNetworkWirelessSsidBonjourForwarding](docs/ssids/README.md#updatenetworkwirelessssidbonjourforwarding) - Update the bonjour forwarding setting and rules for the SSID
* [UpdateNetworkWirelessSsidDeviceTypeGroupPolicies](docs/ssids/README.md#updatenetworkwirelessssiddevicetypegrouppolicies) - Update the device type group policies for the SSID
* [UpdateNetworkWirelessSsidEapOverride](docs/ssids/README.md#updatenetworkwirelessssideapoverride) - Update the EAP overridden parameters for an SSID.
* [UpdateNetworkWirelessSsidFirewallL3FirewallRules](docs/ssids/README.md#updatenetworkwirelessssidfirewalll3firewallrules) - Update the L3 firewall rules of an SSID on an MR network
* [UpdateNetworkWirelessSsidFirewallL7FirewallRules](docs/ssids/README.md#updatenetworkwirelessssidfirewalll7firewallrules) - Update the L7 firewall rules of an SSID on an MR network
* [UpdateNetworkWirelessSsidHotspot20](docs/ssids/README.md#updatenetworkwirelessssidhotspot20) - Update the Hotspot 2.0 settings of an SSID
* [UpdateNetworkWirelessSsidIdentityPsk](docs/ssids/README.md#updatenetworkwirelessssididentitypsk) - Update an Identity PSK
* [UpdateNetworkWirelessSsidSchedules](docs/ssids/README.md#updatenetworkwirelessssidschedules) - Update the outage schedule for the SSID
* [UpdateNetworkWirelessSsidSplashSettings](docs/ssids/README.md#updatenetworkwirelessssidsplashsettings) - Modify the splash page settings for the given SSID
* [UpdateNetworkWirelessSsidTrafficShapingRules](docs/ssids/README.md#updatenetworkwirelessssidtrafficshapingrules) - Update the traffic shaping settings for an SSID on an MR network
* [UpdateNetworkWirelessSsidVpn](docs/ssids/README.md#updatenetworkwirelessssidvpn) - Update the VPN settings for the SSID

### [Stacks](docs/stacks/README.md)

* [AddNetworkSwitchStack](docs/stacks/README.md#addnetworkswitchstack) - Add a switch to a stack
* [CreateNetworkSwitchStack](docs/stacks/README.md#createnetworkswitchstack) - Create a stack
* [CreateNetworkSwitchStackRoutingInterface](docs/stacks/README.md#createnetworkswitchstackroutinginterface) - Create a layer 3 interface for a switch stack
* [CreateNetworkSwitchStackRoutingStaticRoute](docs/stacks/README.md#createnetworkswitchstackroutingstaticroute) - Create a layer 3 static route for a switch stack
* [DeleteNetworkSwitchStack](docs/stacks/README.md#deletenetworkswitchstack) - Delete a stack
* [DeleteNetworkSwitchStackRoutingInterface](docs/stacks/README.md#deletenetworkswitchstackroutinginterface) - Delete a layer 3 interface from a switch stack
* [DeleteNetworkSwitchStackRoutingStaticRoute](docs/stacks/README.md#deletenetworkswitchstackroutingstaticroute) - Delete a layer 3 static route for a switch stack
* [GetNetworkSwitchStack](docs/stacks/README.md#getnetworkswitchstack) - Show a switch stack
* [GetNetworkSwitchStackRoutingInterface](docs/stacks/README.md#getnetworkswitchstackroutinginterface) - Return a layer 3 interface from a switch stack
* [GetNetworkSwitchStackRoutingInterfaceDhcp](docs/stacks/README.md#getnetworkswitchstackroutinginterfacedhcp) - Return a layer 3 interface DHCP configuration for a switch stack
* [GetNetworkSwitchStackRoutingInterfaces](docs/stacks/README.md#getnetworkswitchstackroutinginterfaces) - List layer 3 interfaces for a switch stack
* [GetNetworkSwitchStackRoutingStaticRoute](docs/stacks/README.md#getnetworkswitchstackroutingstaticroute) - Return a layer 3 static route for a switch stack
* [GetNetworkSwitchStackRoutingStaticRoutes](docs/stacks/README.md#getnetworkswitchstackroutingstaticroutes) - List layer 3 static routes for a switch stack
* [GetNetworkSwitchStacks](docs/stacks/README.md#getnetworkswitchstacks) - List the switch stacks in a network
* [RemoveNetworkSwitchStack](docs/stacks/README.md#removenetworkswitchstack) - Remove a switch from a stack
* [UpdateNetworkSwitchStackRoutingInterface](docs/stacks/README.md#updatenetworkswitchstackroutinginterface) - Update a layer 3 interface for a switch stack
* [UpdateNetworkSwitchStackRoutingInterfaceDhcp](docs/stacks/README.md#updatenetworkswitchstackroutinginterfacedhcp) - Update a layer 3 interface DHCP configuration for a switch stack
* [UpdateNetworkSwitchStackRoutingStaticRoute](docs/stacks/README.md#updatenetworkswitchstackroutingstaticroute) - Update a layer 3 static route for a switch stack

### [Staged](docs/staged/README.md)

* [CreateNetworkFirmwareUpgradesStagedEvent](docs/staged/README.md#createnetworkfirmwareupgradesstagedevent) - Create a Staged Upgrade Event for a network
* [CreateNetworkFirmwareUpgradesStagedGroup](docs/staged/README.md#createnetworkfirmwareupgradesstagedgroup) - Create a Staged Upgrade Group for a network
* [DeferNetworkFirmwareUpgradesStagedEvents](docs/staged/README.md#defernetworkfirmwareupgradesstagedevents) - Postpone by 1 week all pending staged upgrade stages for a network
* [DeleteNetworkFirmwareUpgradesStagedGroup](docs/staged/README.md#deletenetworkfirmwareupgradesstagedgroup) - Delete a Staged Upgrade Group
* [GetNetworkFirmwareUpgradesStagedEvents](docs/staged/README.md#getnetworkfirmwareupgradesstagedevents) - Get the Staged Upgrade Event from a network
* [GetNetworkFirmwareUpgradesStagedGroup](docs/staged/README.md#getnetworkfirmwareupgradesstagedgroup) - Get a Staged Upgrade Group from a network
* [GetNetworkFirmwareUpgradesStagedGroups](docs/staged/README.md#getnetworkfirmwareupgradesstagedgroups) - List of Staged Upgrade Groups in a network
* [GetNetworkFirmwareUpgradesStagedStages](docs/staged/README.md#getnetworkfirmwareupgradesstagedstages) - Order of Staged Upgrade Groups in a network
* [RollbacksNetworkFirmwareUpgradesStagedEvents](docs/staged/README.md#rollbacksnetworkfirmwareupgradesstagedevents) - Rollback a Staged Upgrade Event for a network
* [UpdateNetworkFirmwareUpgradesStagedEvents](docs/staged/README.md#updatenetworkfirmwareupgradesstagedevents) - Update the Staged Upgrade Event for a network
* [UpdateNetworkFirmwareUpgradesStagedGroup](docs/staged/README.md#updatenetworkfirmwareupgradesstagedgroup) - Update a Staged Upgrade Group for a network
* [UpdateNetworkFirmwareUpgradesStagedStages](docs/staged/README.md#updatenetworkfirmwareupgradesstagedstages) - Assign Staged Upgrade Group order in the sequence.

### [Stages](docs/stages/README.md)

* [GetNetworkFirmwareUpgradesStagedStages](docs/stages/README.md#getnetworkfirmwareupgradesstagedstages) - Order of Staged Upgrade Groups in a network
* [UpdateNetworkFirmwareUpgradesStagedStages](docs/stages/README.md#updatenetworkfirmwareupgradesstagedstages) - Assign Staged Upgrade Group order in the sequence.

### [StaticRoutes](docs/staticroutes/README.md)

* [CreateDeviceSwitchRoutingStaticRoute](docs/staticroutes/README.md#createdeviceswitchroutingstaticroute) - Create a layer 3 static route for a switch
* [CreateNetworkApplianceStaticRoute](docs/staticroutes/README.md#createnetworkappliancestaticroute) - Add a static route for an MX or teleworker network
* [CreateNetworkSwitchStackRoutingStaticRoute](docs/staticroutes/README.md#createnetworkswitchstackroutingstaticroute) - Create a layer 3 static route for a switch stack
* [DeleteDeviceSwitchRoutingStaticRoute](docs/staticroutes/README.md#deletedeviceswitchroutingstaticroute) - Delete a layer 3 static route for a switch
* [DeleteNetworkApplianceStaticRoute](docs/staticroutes/README.md#deletenetworkappliancestaticroute) - Delete a static route from an MX or teleworker network
* [DeleteNetworkSwitchStackRoutingStaticRoute](docs/staticroutes/README.md#deletenetworkswitchstackroutingstaticroute) - Delete a layer 3 static route for a switch stack
* [GetDeviceSwitchRoutingStaticRoute](docs/staticroutes/README.md#getdeviceswitchroutingstaticroute) - Return a layer 3 static route for a switch
* [GetDeviceSwitchRoutingStaticRoutes](docs/staticroutes/README.md#getdeviceswitchroutingstaticroutes) - List layer 3 static routes for a switch
* [GetNetworkApplianceStaticRoute](docs/staticroutes/README.md#getnetworkappliancestaticroute) - Return a static route for an MX or teleworker network
* [GetNetworkApplianceStaticRoutes](docs/staticroutes/README.md#getnetworkappliancestaticroutes) - List the static routes for an MX or teleworker network
* [GetNetworkSwitchStackRoutingStaticRoute](docs/staticroutes/README.md#getnetworkswitchstackroutingstaticroute) - Return a layer 3 static route for a switch stack
* [GetNetworkSwitchStackRoutingStaticRoutes](docs/staticroutes/README.md#getnetworkswitchstackroutingstaticroutes) - List layer 3 static routes for a switch stack
* [UpdateDeviceSwitchRoutingStaticRoute](docs/staticroutes/README.md#updatedeviceswitchroutingstaticroute) - Update a layer 3 static route for a switch
* [UpdateNetworkApplianceStaticRoute](docs/staticroutes/README.md#updatenetworkappliancestaticroute) - Update a static route for an MX or teleworker network
* [UpdateNetworkSwitchStackRoutingStaticRoute](docs/staticroutes/README.md#updatenetworkswitchstackroutingstaticroute) - Update a layer 3 static route for a switch stack

### [Statics](docs/statics/README.md)

* [CreateNetworkAppliancePrefixesDelegatedStatic](docs/statics/README.md#createnetworkapplianceprefixesdelegatedstatic) - Add a static delegated prefix from a network
* [DeleteNetworkAppliancePrefixesDelegatedStatic](docs/statics/README.md#deletenetworkapplianceprefixesdelegatedstatic) - Delete a static delegated prefix from a network
* [GetNetworkAppliancePrefixesDelegatedStatic](docs/statics/README.md#getnetworkapplianceprefixesdelegatedstatic) - Return a static delegated prefix from a network
* [GetNetworkAppliancePrefixesDelegatedStatics](docs/statics/README.md#getnetworkapplianceprefixesdelegatedstatics) - List static delegated prefixes for a network
* [UpdateNetworkAppliancePrefixesDelegatedStatic](docs/statics/README.md#updatenetworkapplianceprefixesdelegatedstatic) - Update a static delegated prefix from a network

### [Stats](docs/stats/README.md)

* [GetOrganizationApplianceVpnStats](docs/stats/README.md#getorganizationappliancevpnstats) - Show VPN history stat for networks in an organization

### [Status](docs/status/README.md)

* [GetDeviceWirelessStatus](docs/status/README.md#getdevicewirelessstatus) - Return the SSID statuses of an access point

### [Statuses](docs/statuses/README.md)

* [GetDeviceSwitchPortsStatuses](docs/statuses/README.md#getdeviceswitchportsstatuses) - Return the status for all the ports of a switch
* [GetDeviceSwitchPortsStatusesPackets](docs/statuses/README.md#getdeviceswitchportsstatusespackets) - Return the packet counters for all the ports of a switch
* [GetOrganizationApplianceUplinkStatuses](docs/statuses/README.md#getorganizationapplianceuplinkstatuses) - List the uplink status of every Meraki MX and Z series appliances in the organization
* [GetOrganizationApplianceVpnStatuses](docs/statuses/README.md#getorganizationappliancevpnstatuses) - Show VPN status for networks in an organization
* [GetOrganizationCameraOnboardingStatuses](docs/statuses/README.md#getorganizationcameraonboardingstatuses) - Fetch onboarding status of cameras
* [GetOrganizationCellularGatewayUplinkStatuses](docs/statuses/README.md#getorganizationcellulargatewayuplinkstatuses) - List the uplink status of every Meraki MG cellular gateway in the organization
* [GetOrganizationDevicesPowerModulesStatusesByDevice](docs/statuses/README.md#getorganizationdevicespowermodulesstatusesbydevice) - List the power status information for devices in an organization
* [GetOrganizationDevicesStatuses](docs/statuses/README.md#getorganizationdevicesstatuses) - List the status of every Meraki device in the organization
* [GetOrganizationDevicesStatusesOverview](docs/statuses/README.md#getorganizationdevicesstatusesoverview) - Return an overview of current device statuses
* [GetOrganizationUplinksStatuses](docs/statuses/README.md#getorganizationuplinksstatuses) - List the uplink status of every Meraki MX, MG and Z series devices in the organization
* [GetOrganizationWirelessDevicesEthernetStatuses](docs/statuses/README.md#getorganizationwirelessdevicesethernetstatuses) - Endpoint to see power status for wireless devices
* [UpdateOrganizationCameraOnboardingStatuses](docs/statuses/README.md#updateorganizationcameraonboardingstatuses) - Notify that credential handoff to camera has completed

### [StormControl](docs/stormcontrol/README.md)

* [GetNetworkSwitchStormControl](docs/stormcontrol/README.md#getnetworkswitchstormcontrol) - Return the storm control configuration for a switch network
* [UpdateNetworkSwitchStormControl](docs/stormcontrol/README.md#updatenetworkswitchstormcontrol) - Update the storm control configuration for a switch network

### [Stp](docs/stp/README.md)

* [GetNetworkSwitchStp](docs/stp/README.md#getnetworkswitchstp) - Returns STP settings
* [UpdateNetworkSwitchStp](docs/stp/README.md#updatenetworkswitchstp) - Updates STP settings

### [SubnetPool](docs/subnetpool/README.md)

* [GetNetworkCellularGatewaySubnetPool](docs/subnetpool/README.md#getnetworkcellulargatewaysubnetpool) - Return the subnet pool and mask configured for MGs in the network.
* [UpdateNetworkCellularGatewaySubnetPool](docs/subnetpool/README.md#updatenetworkcellulargatewaysubnetpool) - Update the subnet pool and mask configuration for MGs in the network.

### [Subnets](docs/subnets/README.md)

* [GetDeviceApplianceDhcpSubnets](docs/subnets/README.md#getdeviceappliancedhcpsubnets) - Return the DHCP subnet information for an appliance

### [Summary](docs/summary/README.md)

* [GetOrganizationSummaryTopAppliancesByUtilization](docs/summary/README.md#getorganizationsummarytopappliancesbyutilization) - Return the top 10 appliances sorted by utilization over given time range.
* [GetOrganizationSummaryTopClientsByUsage](docs/summary/README.md#getorganizationsummarytopclientsbyusage) - Return metrics for organization's top 10 clients by data usage (in mb) over given time range.
* [GetOrganizationSummaryTopClientsManufacturersByUsage](docs/summary/README.md#getorganizationsummarytopclientsmanufacturersbyusage) - Return metrics for organization's top clients by data usage (in mb) over given time range, grouped by manufacturer.
* [GetOrganizationSummaryTopDevicesByUsage](docs/summary/README.md#getorganizationsummarytopdevicesbyusage) - Return metrics for organization's top 10 devices sorted by data usage over given time range
* [GetOrganizationSummaryTopDevicesModelsByUsage](docs/summary/README.md#getorganizationsummarytopdevicesmodelsbyusage) - Return metrics for organization's top 10 device models sorted by data usage over given time range
* [GetOrganizationSummaryTopSsidsByUsage](docs/summary/README.md#getorganizationsummarytopssidsbyusage) - Return metrics for organization's top 10 ssids by data usage over given time range
* [GetOrganizationSummaryTopSwitchesByEnergyUsage](docs/summary/README.md#getorganizationsummarytopswitchesbyenergyusage) - Return metrics for organization's top 10 switches by energy usage over given time range

### [Switch](docs/switch/README.md)

* [AddNetworkSwitchStack](docs/switch/README.md#addnetworkswitchstack) - Add a switch to a stack
* [CloneOrganizationSwitchDevices](docs/switch/README.md#cloneorganizationswitchdevices) - Clone port-level and some switch-level configuration settings from a source switch to one or more target switches
* [CreateDeviceSwitchRoutingInterface](docs/switch/README.md#createdeviceswitchroutinginterface) - Create a layer 3 interface for a switch
* [CreateDeviceSwitchRoutingStaticRoute](docs/switch/README.md#createdeviceswitchroutingstaticroute) - Create a layer 3 static route for a switch
* [CreateNetworkSwitchAccessPolicy](docs/switch/README.md#createnetworkswitchaccesspolicy) - Create an access policy for a switch network
* [CreateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServer](docs/switch/README.md#createnetworkswitchdhcpserverpolicyarpinspectiontrustedserver) - Add a server to be trusted by Dynamic ARP Inspection on this network
* [CreateNetworkSwitchLinkAggregation](docs/switch/README.md#createnetworkswitchlinkaggregation) - Create a link aggregation group
* [CreateNetworkSwitchPortSchedule](docs/switch/README.md#createnetworkswitchportschedule) - Add a switch port schedule
* [CreateNetworkSwitchQosRule](docs/switch/README.md#createnetworkswitchqosrule) - Add a quality of service rule
* [CreateNetworkSwitchRoutingMulticastRendezvousPoint](docs/switch/README.md#createnetworkswitchroutingmulticastrendezvouspoint) - Create a multicast rendezvous point
* [CreateNetworkSwitchStack](docs/switch/README.md#createnetworkswitchstack) - Create a stack
* [CreateNetworkSwitchStackRoutingInterface](docs/switch/README.md#createnetworkswitchstackroutinginterface) - Create a layer 3 interface for a switch stack
* [CreateNetworkSwitchStackRoutingStaticRoute](docs/switch/README.md#createnetworkswitchstackroutingstaticroute) - Create a layer 3 static route for a switch stack
* [CycleDeviceSwitchPorts](docs/switch/README.md#cycledeviceswitchports) - Cycle a set of switch ports
* [DeleteDeviceSwitchRoutingInterface](docs/switch/README.md#deletedeviceswitchroutinginterface) - Delete a layer 3 interface from the switch
* [DeleteDeviceSwitchRoutingStaticRoute](docs/switch/README.md#deletedeviceswitchroutingstaticroute) - Delete a layer 3 static route for a switch
* [DeleteNetworkSwitchAccessPolicy](docs/switch/README.md#deletenetworkswitchaccesspolicy) - Delete an access policy for a switch network
* [DeleteNetworkSwitchDhcpServerPolicyArpInspectionTrustedServer](docs/switch/README.md#deletenetworkswitchdhcpserverpolicyarpinspectiontrustedserver) - Remove a server from being trusted by Dynamic ARP Inspection on this network
* [DeleteNetworkSwitchLinkAggregation](docs/switch/README.md#deletenetworkswitchlinkaggregation) - Split a link aggregation group into separate ports
* [DeleteNetworkSwitchPortSchedule](docs/switch/README.md#deletenetworkswitchportschedule) - Delete a switch port schedule
* [DeleteNetworkSwitchQosRule](docs/switch/README.md#deletenetworkswitchqosrule) - Delete a quality of service rule
* [DeleteNetworkSwitchRoutingMulticastRendezvousPoint](docs/switch/README.md#deletenetworkswitchroutingmulticastrendezvouspoint) - Delete a multicast rendezvous point
* [DeleteNetworkSwitchStack](docs/switch/README.md#deletenetworkswitchstack) - Delete a stack
* [DeleteNetworkSwitchStackRoutingInterface](docs/switch/README.md#deletenetworkswitchstackroutinginterface) - Delete a layer 3 interface from a switch stack
* [DeleteNetworkSwitchStackRoutingStaticRoute](docs/switch/README.md#deletenetworkswitchstackroutingstaticroute) - Delete a layer 3 static route for a switch stack
* [GetDeviceSwitchPort](docs/switch/README.md#getdeviceswitchport) - Return a switch port
* [GetDeviceSwitchPorts](docs/switch/README.md#getdeviceswitchports) - List the switch ports for a switch
* [GetDeviceSwitchPortsStatuses](docs/switch/README.md#getdeviceswitchportsstatuses) - Return the status for all the ports of a switch
* [GetDeviceSwitchPortsStatusesPackets](docs/switch/README.md#getdeviceswitchportsstatusespackets) - Return the packet counters for all the ports of a switch
* [GetDeviceSwitchRoutingInterface](docs/switch/README.md#getdeviceswitchroutinginterface) - Return a layer 3 interface for a switch
* [GetDeviceSwitchRoutingInterfaceDhcp](docs/switch/README.md#getdeviceswitchroutinginterfacedhcp) - Return a layer 3 interface DHCP configuration for a switch
* [GetDeviceSwitchRoutingInterfaces](docs/switch/README.md#getdeviceswitchroutinginterfaces) - List layer 3 interfaces for a switch
* [GetDeviceSwitchRoutingStaticRoute](docs/switch/README.md#getdeviceswitchroutingstaticroute) - Return a layer 3 static route for a switch
* [GetDeviceSwitchRoutingStaticRoutes](docs/switch/README.md#getdeviceswitchroutingstaticroutes) - List layer 3 static routes for a switch
* [GetDeviceSwitchWarmSpare](docs/switch/README.md#getdeviceswitchwarmspare) - Return warm spare configuration for a switch
* [GetNetworkSwitchAccessControlLists](docs/switch/README.md#getnetworkswitchaccesscontrollists) - Return the access control lists for a MS network
* [GetNetworkSwitchAccessPolicies](docs/switch/README.md#getnetworkswitchaccesspolicies) - List the access policies for a switch network
* [GetNetworkSwitchAccessPolicy](docs/switch/README.md#getnetworkswitchaccesspolicy) - Return a specific access policy for a switch network
* [GetNetworkSwitchAlternateManagementInterface](docs/switch/README.md#getnetworkswitchalternatemanagementinterface) - Return the switch alternate management interface for the network
* [GetNetworkSwitchDhcpServerPolicy](docs/switch/README.md#getnetworkswitchdhcpserverpolicy) - Return the DHCP server settings
* [GetNetworkSwitchDhcpServerPolicyArpInspectionTrustedServers](docs/switch/README.md#getnetworkswitchdhcpserverpolicyarpinspectiontrustedservers) - Return the list of servers trusted by Dynamic ARP Inspection on this network
* [GetNetworkSwitchDhcpServerPolicyArpInspectionWarningsByDevice](docs/switch/README.md#getnetworkswitchdhcpserverpolicyarpinspectionwarningsbydevice) - Return the devices that have a Dynamic ARP Inspection warning and their warnings
* [GetNetworkSwitchDhcpV4ServersSeen](docs/switch/README.md#getnetworkswitchdhcpv4serversseen) - Return the network's DHCPv4 servers seen within the selected timeframe (default 1 day)
* [GetNetworkSwitchDscpToCosMappings](docs/switch/README.md#getnetworkswitchdscptocosmappings) - Return the DSCP to CoS mappings
* [GetNetworkSwitchLinkAggregations](docs/switch/README.md#getnetworkswitchlinkaggregations) - List link aggregation groups
* [GetNetworkSwitchMtu](docs/switch/README.md#getnetworkswitchmtu) - Return the MTU configuration
* [GetNetworkSwitchPortSchedules](docs/switch/README.md#getnetworkswitchportschedules) - List switch port schedules
* [GetNetworkSwitchQosRule](docs/switch/README.md#getnetworkswitchqosrule) - Return a quality of service rule
* [GetNetworkSwitchQosRules](docs/switch/README.md#getnetworkswitchqosrules) - List quality of service rules
* [GetNetworkSwitchQosRulesOrder](docs/switch/README.md#getnetworkswitchqosrulesorder) - Return the quality of service rule IDs by order in which they will be processed by the switch
* [GetNetworkSwitchRoutingMulticast](docs/switch/README.md#getnetworkswitchroutingmulticast) - Return multicast settings for a network
* [GetNetworkSwitchRoutingMulticastRendezvousPoint](docs/switch/README.md#getnetworkswitchroutingmulticastrendezvouspoint) - Return a multicast rendezvous point
* [GetNetworkSwitchRoutingMulticastRendezvousPoints](docs/switch/README.md#getnetworkswitchroutingmulticastrendezvouspoints) - List multicast rendezvous points
* [GetNetworkSwitchRoutingOspf](docs/switch/README.md#getnetworkswitchroutingospf) - Return layer 3 OSPF routing configuration
* [GetNetworkSwitchSettings](docs/switch/README.md#getnetworkswitchsettings) - Returns the switch network settings
* [GetNetworkSwitchStack](docs/switch/README.md#getnetworkswitchstack) - Show a switch stack
* [GetNetworkSwitchStackRoutingInterface](docs/switch/README.md#getnetworkswitchstackroutinginterface) - Return a layer 3 interface from a switch stack
* [GetNetworkSwitchStackRoutingInterfaceDhcp](docs/switch/README.md#getnetworkswitchstackroutinginterfacedhcp) - Return a layer 3 interface DHCP configuration for a switch stack
* [GetNetworkSwitchStackRoutingInterfaces](docs/switch/README.md#getnetworkswitchstackroutinginterfaces) - List layer 3 interfaces for a switch stack
* [GetNetworkSwitchStackRoutingStaticRoute](docs/switch/README.md#getnetworkswitchstackroutingstaticroute) - Return a layer 3 static route for a switch stack
* [GetNetworkSwitchStackRoutingStaticRoutes](docs/switch/README.md#getnetworkswitchstackroutingstaticroutes) - List layer 3 static routes for a switch stack
* [GetNetworkSwitchStacks](docs/switch/README.md#getnetworkswitchstacks) - List the switch stacks in a network
* [GetNetworkSwitchStormControl](docs/switch/README.md#getnetworkswitchstormcontrol) - Return the storm control configuration for a switch network
* [GetNetworkSwitchStp](docs/switch/README.md#getnetworkswitchstp) - Returns STP settings
* [GetOrganizationConfigTemplateSwitchProfilePort](docs/switch/README.md#getorganizationconfigtemplateswitchprofileport) - Return a switch profile port
* [GetOrganizationConfigTemplateSwitchProfilePorts](docs/switch/README.md#getorganizationconfigtemplateswitchprofileports) - Return all the ports of a switch profile
* [GetOrganizationConfigTemplateSwitchProfiles](docs/switch/README.md#getorganizationconfigtemplateswitchprofiles) - List the switch profiles for your switch template configuration
* [GetOrganizationSwitchPortsBySwitch](docs/switch/README.md#getorganizationswitchportsbyswitch) - List the switchports in an organization by switch
* [RemoveNetworkSwitchStack](docs/switch/README.md#removenetworkswitchstack) - Remove a switch from a stack
* [UpdateDeviceSwitchPort](docs/switch/README.md#updatedeviceswitchport) - Update a switch port
* [UpdateDeviceSwitchRoutingInterface](docs/switch/README.md#updatedeviceswitchroutinginterface) - Update a layer 3 interface for a switch
* [UpdateDeviceSwitchRoutingInterfaceDhcp](docs/switch/README.md#updatedeviceswitchroutinginterfacedhcp) - Update a layer 3 interface DHCP configuration for a switch
* [UpdateDeviceSwitchRoutingStaticRoute](docs/switch/README.md#updatedeviceswitchroutingstaticroute) - Update a layer 3 static route for a switch
* [UpdateDeviceSwitchWarmSpare](docs/switch/README.md#updatedeviceswitchwarmspare) - Update warm spare configuration for a switch
* [UpdateNetworkSwitchAccessControlLists](docs/switch/README.md#updatenetworkswitchaccesscontrollists) - Update the access control lists for a MS network
* [UpdateNetworkSwitchAccessPolicy](docs/switch/README.md#updatenetworkswitchaccesspolicy) - Update an access policy for a switch network
* [UpdateNetworkSwitchAlternateManagementInterface](docs/switch/README.md#updatenetworkswitchalternatemanagementinterface) - Update the switch alternate management interface for the network
* [UpdateNetworkSwitchDhcpServerPolicy](docs/switch/README.md#updatenetworkswitchdhcpserverpolicy) - Update the DHCP server settings
* [UpdateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServer](docs/switch/README.md#updatenetworkswitchdhcpserverpolicyarpinspectiontrustedserver) - Update a server that is trusted by Dynamic ARP Inspection on this network
* [UpdateNetworkSwitchDscpToCosMappings](docs/switch/README.md#updatenetworkswitchdscptocosmappings) - Update the DSCP to CoS mappings
* [UpdateNetworkSwitchLinkAggregation](docs/switch/README.md#updatenetworkswitchlinkaggregation) - Update a link aggregation group
* [UpdateNetworkSwitchMtu](docs/switch/README.md#updatenetworkswitchmtu) - Update the MTU configuration
* [UpdateNetworkSwitchPortSchedule](docs/switch/README.md#updatenetworkswitchportschedule) - Update a switch port schedule
* [UpdateNetworkSwitchQosRule](docs/switch/README.md#updatenetworkswitchqosrule) - Update a quality of service rule
* [UpdateNetworkSwitchQosRulesOrder](docs/switch/README.md#updatenetworkswitchqosrulesorder) - Update the order in which the rules should be processed by the switch
* [UpdateNetworkSwitchRoutingMulticast](docs/switch/README.md#updatenetworkswitchroutingmulticast) - Update multicast settings for a network
* [UpdateNetworkSwitchRoutingMulticastRendezvousPoint](docs/switch/README.md#updatenetworkswitchroutingmulticastrendezvouspoint) - Update a multicast rendezvous point
* [UpdateNetworkSwitchRoutingOspf](docs/switch/README.md#updatenetworkswitchroutingospf) - Update layer 3 OSPF routing configuration
* [UpdateNetworkSwitchSettings](docs/switch/README.md#updatenetworkswitchsettings) - Update switch network settings
* [UpdateNetworkSwitchStackRoutingInterface](docs/switch/README.md#updatenetworkswitchstackroutinginterface) - Update a layer 3 interface for a switch stack
* [UpdateNetworkSwitchStackRoutingInterfaceDhcp](docs/switch/README.md#updatenetworkswitchstackroutinginterfacedhcp) - Update a layer 3 interface DHCP configuration for a switch stack
* [UpdateNetworkSwitchStackRoutingStaticRoute](docs/switch/README.md#updatenetworkswitchstackroutingstaticroute) - Update a layer 3 static route for a switch stack
* [UpdateNetworkSwitchStormControl](docs/switch/README.md#updatenetworkswitchstormcontrol) - Update the storm control configuration for a switch network
* [UpdateNetworkSwitchStp](docs/switch/README.md#updatenetworkswitchstp) - Updates STP settings
* [UpdateOrganizationConfigTemplateSwitchProfilePort](docs/switch/README.md#updateorganizationconfigtemplateswitchprofileport) - Update a switch profile port

### [Switches](docs/switches/README.md)

* [GetOrganizationSummaryTopSwitchesByEnergyUsage](docs/switches/README.md#getorganizationsummarytopswitchesbyenergyusage) - Return metrics for organization's top 10 switches by energy usage over given time range

### [SyslogServers](docs/syslogservers/README.md)

* [GetNetworkSyslogServers](docs/syslogservers/README.md#getnetworksyslogservers) - List the syslog servers for a network
* [UpdateNetworkSyslogServers](docs/syslogservers/README.md#updatenetworksyslogservers) - Update the syslog servers for a network

### [TargetGroups](docs/targetgroups/README.md)

* [CreateNetworkSmTargetGroup](docs/targetgroups/README.md#createnetworksmtargetgroup) - Add a target group
* [DeleteNetworkSmTargetGroup](docs/targetgroups/README.md#deletenetworksmtargetgroup) - Delete a target group from a network
* [GetNetworkSmTargetGroup](docs/targetgroups/README.md#getnetworksmtargetgroup) - Return a target group
* [GetNetworkSmTargetGroups](docs/targetgroups/README.md#getnetworksmtargetgroups) - List the target groups in this network
* [UpdateNetworkSmTargetGroup](docs/targetgroups/README.md#updatenetworksmtargetgroup) - Update a target group

### [ThirdPartyVPNPeers](docs/thirdpartyvpnpeers/README.md)

* [GetOrganizationApplianceVPNThirdPartyVPNPeers](docs/thirdpartyvpnpeers/README.md#getorganizationappliancevpnthirdpartyvpnpeers) - Return the third party VPN peers for an organization
* [UpdateOrganizationApplianceVPNThirdPartyVPNPeers](docs/thirdpartyvpnpeers/README.md#updateorganizationappliancevpnthirdpartyvpnpeers) - Update the third party VPN peers for an organization

### [Top](docs/top/README.md)

* [GetOrganizationSummaryTopAppliancesByUtilization](docs/top/README.md#getorganizationsummarytopappliancesbyutilization) - Return the top 10 appliances sorted by utilization over given time range.
* [GetOrganizationSummaryTopClientsByUsage](docs/top/README.md#getorganizationsummarytopclientsbyusage) - Return metrics for organization's top 10 clients by data usage (in mb) over given time range.
* [GetOrganizationSummaryTopClientsManufacturersByUsage](docs/top/README.md#getorganizationsummarytopclientsmanufacturersbyusage) - Return metrics for organization's top clients by data usage (in mb) over given time range, grouped by manufacturer.
* [GetOrganizationSummaryTopDevicesByUsage](docs/top/README.md#getorganizationsummarytopdevicesbyusage) - Return metrics for organization's top 10 devices sorted by data usage over given time range
* [GetOrganizationSummaryTopDevicesModelsByUsage](docs/top/README.md#getorganizationsummarytopdevicesmodelsbyusage) - Return metrics for organization's top 10 device models sorted by data usage over given time range
* [GetOrganizationSummaryTopSsidsByUsage](docs/top/README.md#getorganizationsummarytopssidsbyusage) - Return metrics for organization's top 10 ssids by data usage over given time range
* [GetOrganizationSummaryTopSwitchesByEnergyUsage](docs/top/README.md#getorganizationsummarytopswitchesbyenergyusage) - Return metrics for organization's top 10 switches by energy usage over given time range

### [Topology](docs/topology/README.md)

* [GetNetworkTopologyLinkLayer](docs/topology/README.md#getnetworktopologylinklayer) - List the LLDP and CDP information for all discovered devices and connections in a network.

### [Traffic](docs/traffic/README.md)

* [GetNetworkTraffic](docs/traffic/README.md#getnetworktraffic) - Return the traffic analysis data for this network

### [TrafficAnalysis](docs/trafficanalysis/README.md)

* [GetNetworkTrafficAnalysis](docs/trafficanalysis/README.md#getnetworktrafficanalysis) - Return the traffic analysis settings for a network
* [UpdateNetworkTrafficAnalysis](docs/trafficanalysis/README.md#updatenetworktrafficanalysis) - Update the traffic analysis settings for a network

### [TrafficHistory](docs/traffichistory/README.md)

* [GetNetworkClientTrafficHistory](docs/traffichistory/README.md#getnetworkclienttraffichistory) - Return the client's network traffic data over time

### [TrafficShaping](docs/trafficshaping/README.md)

* [CreateNetworkApplianceTrafficShapingCustomPerformanceClass](docs/trafficshaping/README.md#createnetworkappliancetrafficshapingcustomperformanceclass) - Add a custom performance class for an MX network
* [DeleteNetworkApplianceTrafficShapingCustomPerformanceClass](docs/trafficshaping/README.md#deletenetworkappliancetrafficshapingcustomperformanceclass) - Delete a custom performance class from an MX network
* [GetNetworkApplianceTrafficShaping](docs/trafficshaping/README.md#getnetworkappliancetrafficshaping) - Display the traffic shaping settings for an MX network
* [GetNetworkApplianceTrafficShapingCustomPerformanceClass](docs/trafficshaping/README.md#getnetworkappliancetrafficshapingcustomperformanceclass) - Return a custom performance class for an MX network
* [GetNetworkApplianceTrafficShapingCustomPerformanceClasses](docs/trafficshaping/README.md#getnetworkappliancetrafficshapingcustomperformanceclasses) - List all custom performance classes for an MX network
* [GetNetworkApplianceTrafficShapingRules](docs/trafficshaping/README.md#getnetworkappliancetrafficshapingrules) - Display the traffic shaping settings rules for an MX network
* [GetNetworkApplianceTrafficShapingUplinkBandwidth](docs/trafficshaping/README.md#getnetworkappliancetrafficshapinguplinkbandwidth) - Returns the uplink bandwidth limits for your MX network
* [GetNetworkApplianceTrafficShapingUplinkSelection](docs/trafficshaping/README.md#getnetworkappliancetrafficshapinguplinkselection) - Show uplink selection settings for an MX network
* [GetNetworkTrafficShapingApplicationCategories](docs/trafficshaping/README.md#getnetworktrafficshapingapplicationcategories) - Returns the application categories for traffic shaping rules.
* [GetNetworkTrafficShapingDscpTaggingOptions](docs/trafficshaping/README.md#getnetworktrafficshapingdscptaggingoptions) - Returns the available DSCP tagging options for your traffic shaping rules.
* [GetNetworkWirelessSsidTrafficShapingRules](docs/trafficshaping/README.md#getnetworkwirelessssidtrafficshapingrules) - Display the traffic shaping settings for a SSID on an MR network
* [UpdateNetworkApplianceTrafficShaping](docs/trafficshaping/README.md#updatenetworkappliancetrafficshaping) - Update the traffic shaping settings for an MX network
* [UpdateNetworkApplianceTrafficShapingCustomPerformanceClass](docs/trafficshaping/README.md#updatenetworkappliancetrafficshapingcustomperformanceclass) - Update a custom performance class for an MX network
* [UpdateNetworkApplianceTrafficShapingRules](docs/trafficshaping/README.md#updatenetworkappliancetrafficshapingrules) - Update the traffic shaping settings rules for an MX network
* [UpdateNetworkApplianceTrafficShapingUplinkBandwidth](docs/trafficshaping/README.md#updatenetworkappliancetrafficshapinguplinkbandwidth) - Updates the uplink bandwidth settings for your MX network.
* [UpdateNetworkApplianceTrafficShapingUplinkSelection](docs/trafficshaping/README.md#updatenetworkappliancetrafficshapinguplinkselection) - Update uplink selection settings for an MX network
* [UpdateNetworkWirelessSsidTrafficShapingRules](docs/trafficshaping/README.md#updatenetworkwirelessssidtrafficshapingrules) - Update the traffic shaping settings for an SSID on an MR network

### [TrustedAccessConfigs](docs/trustedaccessconfigs/README.md)

* [GetNetworkSmTrustedAccessConfigs](docs/trustedaccessconfigs/README.md#getnetworksmtrustedaccessconfigs) - List Trusted Access Configs

### [TrustedServers](docs/trustedservers/README.md)

* [CreateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServer](docs/trustedservers/README.md#createnetworkswitchdhcpserverpolicyarpinspectiontrustedserver) - Add a server to be trusted by Dynamic ARP Inspection on this network
* [DeleteNetworkSwitchDhcpServerPolicyArpInspectionTrustedServer](docs/trustedservers/README.md#deletenetworkswitchdhcpserverpolicyarpinspectiontrustedserver) - Remove a server from being trusted by Dynamic ARP Inspection on this network
* [GetNetworkSwitchDhcpServerPolicyArpInspectionTrustedServers](docs/trustedservers/README.md#getnetworkswitchdhcpserverpolicyarpinspectiontrustedservers) - Return the list of servers trusted by Dynamic ARP Inspection on this network
* [UpdateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServer](docs/trustedservers/README.md#updatenetworkswitchdhcpserverpolicyarpinspectiontrustedserver) - Update a server that is trusted by Dynamic ARP Inspection on this network

### [Upgrades](docs/upgrades/README.md)

* [GetOrganizationFirmwareUpgrades](docs/upgrades/README.md#getorganizationfirmwareupgrades) - Get firmware upgrade information for an organization
* [GetOrganizationFirmwareUpgradesByDevice](docs/upgrades/README.md#getorganizationfirmwareupgradesbydevice) - Get firmware upgrade status for the filtered devices

### [Uplink](docs/uplink/README.md)

* [GetNetworkCellularGatewayUplink](docs/uplink/README.md#getnetworkcellulargatewayuplink) - Returns the uplink settings for your MG network.
* [GetOrganizationCellularGatewayUplinkStatuses](docs/uplink/README.md#getorganizationcellulargatewayuplinkstatuses) - List the uplink status of every Meraki MG cellular gateway in the organization
* [UpdateNetworkCellularGatewayUplink](docs/uplink/README.md#updatenetworkcellulargatewayuplink) - Updates the uplink settings for your MG network.

### [UplinkBandwidth](docs/uplinkbandwidth/README.md)

* [GetNetworkApplianceTrafficShapingUplinkBandwidth](docs/uplinkbandwidth/README.md#getnetworkappliancetrafficshapinguplinkbandwidth) - Returns the uplink bandwidth limits for your MX network
* [UpdateNetworkApplianceTrafficShapingUplinkBandwidth](docs/uplinkbandwidth/README.md#updatenetworkappliancetrafficshapinguplinkbandwidth) - Updates the uplink bandwidth settings for your MX network.

### [UplinkSelection](docs/uplinkselection/README.md)

* [GetNetworkApplianceTrafficShapingUplinkSelection](docs/uplinkselection/README.md#getnetworkappliancetrafficshapinguplinkselection) - Show uplink selection settings for an MX network
* [UpdateNetworkApplianceTrafficShapingUplinkSelection](docs/uplinkselection/README.md#updatenetworkappliancetrafficshapinguplinkselection) - Update uplink selection settings for an MX network

### [Uplinks](docs/uplinks/README.md)

* [GetDeviceApplianceUplinksSettings](docs/uplinks/README.md#getdeviceapplianceuplinkssettings) - Return the uplink settings for an MX appliance
* [GetDeviceLossAndLatencyHistory](docs/uplinks/README.md#getdevicelossandlatencyhistory) - Get the uplink loss percentage and latency in milliseconds, and goodput in kilobits per second for a wired network device.
* [GetNetworkApplianceUplinksUsageHistory](docs/uplinks/README.md#getnetworkapplianceuplinksusagehistory) - Get the sent and received bytes for each uplink of a network.
* [GetOrganizationApplianceUplinkStatuses](docs/uplinks/README.md#getorganizationapplianceuplinkstatuses) - List the uplink status of every Meraki MX and Z series appliances in the organization
* [GetOrganizationDevicesUplinksAddressesByDevice](docs/uplinks/README.md#getorganizationdevicesuplinksaddressesbydevice) - List the current uplink addresses for devices in an organization.
* [GetOrganizationDevicesUplinksLossAndLatency](docs/uplinks/README.md#getorganizationdevicesuplinkslossandlatency) - Return the uplink loss and latency for every MX in the organization from at latest 2 minutes ago
* [GetOrganizationUplinksStatuses](docs/uplinks/README.md#getorganizationuplinksstatuses) - List the uplink status of every Meraki MX, MG and Z series devices in the organization
* [UpdateDeviceApplianceUplinksSettings](docs/uplinks/README.md#updatedeviceapplianceuplinkssettings) - Update the uplink settings for an MX appliance

### [UplinksLossAndLatency](docs/uplinkslossandlatency/README.md)

* [GetOrganizationDevicesUplinksLossAndLatency](docs/uplinkslossandlatency/README.md#getorganizationdevicesuplinkslossandlatency) - Return the uplink loss and latency for every MX in the organization from at latest 2 minutes ago

### [UsageHistories](docs/usagehistories/README.md)

* [GetNetworkClientsUsageHistories](docs/usagehistories/README.md#getnetworkclientsusagehistories) - Return the usage histories for clients

### [UsageHistory](docs/usagehistory/README.md)

* [GetNetworkApplianceUplinksUsageHistory](docs/usagehistory/README.md#getnetworkapplianceuplinksusagehistory) - Get the sent and received bytes for each uplink of a network.
* [GetNetworkClientUsageHistory](docs/usagehistory/README.md#getnetworkclientusagehistory) - Return the client's daily usage history
* [GetNetworkWirelessUsageHistory](docs/usagehistory/README.md#getnetworkwirelessusagehistory) - Return AP usage over time for a device or network client

### [UserAccessDevices](docs/useraccessdevices/README.md)

* [DeleteNetworkSmUserAccessDevice](docs/useraccessdevices/README.md#deletenetworksmuseraccessdevice) - Delete a User Access Device
* [GetNetworkSmUserAccessDevices](docs/useraccessdevices/README.md#getnetworksmuseraccessdevices) - List User Access Devices and its Trusted Access Connections

### [Users](docs/users/README.md)

* [DeleteOrganizationUser](docs/users/README.md#deleteorganizationuser) - Delete a user and all of its authentication methods.
* [GetNetworkSmUserDeviceProfiles](docs/users/README.md#getnetworksmuserdeviceprofiles) - Get the profiles associated with a user
* [GetNetworkSmUserSoftwares](docs/users/README.md#getnetworksmusersoftwares) - Get a list of softwares associated with a user
* [GetNetworkSmUsers](docs/users/README.md#getnetworksmusers) - List the owners in an SM network with various specified fields and filters

### [V4](docs/v4/README.md)

* [GetNetworkSwitchDhcpV4ServersSeen](docs/v4/README.md#getnetworkswitchdhcpv4serversseen) - Return the network's DHCPv4 servers seen within the selected timeframe (default 1 day)

### [Video](docs/video/README.md)

* [GetDeviceCameraVideoSettings](docs/video/README.md#getdevicecameravideosettings) - Returns video settings for the given camera
* [UpdateDeviceCameraVideoSettings](docs/video/README.md#updatedevicecameravideosettings) - Update video settings for the given camera

### [VideoLink](docs/videolink/README.md)

* [GetDeviceCameraVideoLink](docs/videolink/README.md#getdevicecameravideolink) - Returns video link to the specified camera

### [VlanAssignments](docs/vlanassignments/README.md)

* [GetDeviceAppliancePrefixesDelegatedVlanAssignments](docs/vlanassignments/README.md#getdeviceapplianceprefixesdelegatedvlanassignments) - Return prefixes assigned to all IPv6 enabled VLANs on an appliance.

### [Vlans](docs/vlans/README.md)

* [CreateNetworkApplianceVlan](docs/vlans/README.md#createnetworkappliancevlan) - Add a VLAN
* [DeleteNetworkApplianceVlan](docs/vlans/README.md#deletenetworkappliancevlan) - Delete a VLAN from a network
* [GetNetworkApplianceVlan](docs/vlans/README.md#getnetworkappliancevlan) - Return a VLAN
* [GetNetworkApplianceVlans](docs/vlans/README.md#getnetworkappliancevlans) - List the VLANs for an MX network
* [GetNetworkApplianceVlansSettings](docs/vlans/README.md#getnetworkappliancevlanssettings) - Returns the enabled status of VLANs for the network
* [UpdateNetworkApplianceVlan](docs/vlans/README.md#updatenetworkappliancevlan) - Update a VLAN
* [UpdateNetworkApplianceVlansSettings](docs/vlans/README.md#updatenetworkappliancevlanssettings) - Enable/Disable VLANs for the given network

### [Vmx](docs/vmx/README.md)

* [CreateDeviceApplianceVmxAuthenticationToken](docs/vmx/README.md#createdeviceappliancevmxauthenticationtoken) - Generate a new vMX authentication token

### [Vpn](docs/vpn/README.md)

* [GetNetworkApplianceVpnBgp](docs/vpn/README.md#getnetworkappliancevpnbgp) - Return a Hub BGP Configuration
* [GetNetworkApplianceVpnSiteToSiteVpn](docs/vpn/README.md#getnetworkappliancevpnsitetositevpn) - Return the site-to-site VPN settings of a network
* [GetNetworkWirelessSsidVpn](docs/vpn/README.md#getnetworkwirelessssidvpn) - List the VPN settings for the SSID.
* [GetOrganizationApplianceVpnStats](docs/vpn/README.md#getorganizationappliancevpnstats) - Show VPN history stat for networks in an organization
* [GetOrganizationApplianceVpnStatuses](docs/vpn/README.md#getorganizationappliancevpnstatuses) - Show VPN status for networks in an organization
* [GetOrganizationApplianceVPNThirdPartyVPNPeers](docs/vpn/README.md#getorganizationappliancevpnthirdpartyvpnpeers) - Return the third party VPN peers for an organization
* [GetOrganizationApplianceVpnVpnFirewallRules](docs/vpn/README.md#getorganizationappliancevpnvpnfirewallrules) - Return the firewall rules for an organization's site-to-site VPN
* [UpdateNetworkApplianceVpnBgp](docs/vpn/README.md#updatenetworkappliancevpnbgp) - Update a Hub BGP Configuration
* [UpdateNetworkApplianceVpnSiteToSiteVpn](docs/vpn/README.md#updatenetworkappliancevpnsitetositevpn) - Update the site-to-site VPN settings of a network
* [UpdateNetworkWirelessSsidVpn](docs/vpn/README.md#updatenetworkwirelessssidvpn) - Update the VPN settings for the SSID
* [UpdateOrganizationApplianceVPNThirdPartyVPNPeers](docs/vpn/README.md#updateorganizationappliancevpnthirdpartyvpnpeers) - Update the third party VPN peers for an organization
* [UpdateOrganizationApplianceVpnVpnFirewallRules](docs/vpn/README.md#updateorganizationappliancevpnvpnfirewallrules) - Update the firewall rules of an organization's site-to-site VPN

### [VpnFirewallRules](docs/vpnfirewallrules/README.md)

* [GetOrganizationApplianceVpnVpnFirewallRules](docs/vpnfirewallrules/README.md#getorganizationappliancevpnvpnfirewallrules) - Return the firewall rules for an organization's site-to-site VPN
* [UpdateOrganizationApplianceVpnVpnFirewallRules](docs/vpnfirewallrules/README.md#updateorganizationappliancevpnvpnfirewallrules) - Update the firewall rules of an organization's site-to-site VPN

### [VppAccounts](docs/vppaccounts/README.md)

* [GetOrganizationSmVppAccount](docs/vppaccounts/README.md#getorganizationsmvppaccount) - Get a hash containing the unparsed token of the VPP account with the given ID
* [GetOrganizationSmVppAccounts](docs/vppaccounts/README.md#getorganizationsmvppaccounts) - List the VPP accounts in the organization

### [WarmSpare](docs/warmspare/README.md)

* [GetDeviceSwitchWarmSpare](docs/warmspare/README.md#getdeviceswitchwarmspare) - Return warm spare configuration for a switch
* [GetNetworkApplianceWarmSpare](docs/warmspare/README.md#getnetworkappliancewarmspare) - Return MX warm spare settings
* [SwapNetworkApplianceWarmSpare](docs/warmspare/README.md#swapnetworkappliancewarmspare) - Swap MX primary and warm spare appliances
* [UpdateDeviceSwitchWarmSpare](docs/warmspare/README.md#updatedeviceswitchwarmspare) - Update warm spare configuration for a switch
* [UpdateNetworkApplianceWarmSpare](docs/warmspare/README.md#updatenetworkappliancewarmspare) - Update MX warm spare settings

### [Warnings](docs/warnings/README.md)

* [GetNetworkSwitchDhcpServerPolicyArpInspectionWarningsByDevice](docs/warnings/README.md#getnetworkswitchdhcpserverpolicyarpinspectionwarningsbydevice) - Return the devices that have a Dynamic ARP Inspection warning and their warnings

### [WebhookTests](docs/webhooktests/README.md)

* [CreateNetworkWebhooksWebhookTest](docs/webhooktests/README.md#createnetworkwebhookswebhooktest) - Send a test webhook for a network
* [GetNetworkWebhooksWebhookTest](docs/webhooktests/README.md#getnetworkwebhookswebhooktest) - Return the status of a webhook test for a network

### [Webhooks](docs/webhooks/README.md)

* [CreateNetworkWebhooksHTTPServer](docs/webhooks/README.md#createnetworkwebhookshttpserver) - Add an HTTP server to a network
* [CreateNetworkWebhooksPayloadTemplate](docs/webhooks/README.md#createnetworkwebhookspayloadtemplate) - Create a webhook payload template for a network
* [CreateNetworkWebhooksWebhookTest](docs/webhooks/README.md#createnetworkwebhookswebhooktest) - Send a test webhook for a network
* [DeleteNetworkWebhooksHTTPServer](docs/webhooks/README.md#deletenetworkwebhookshttpserver) - Delete an HTTP server from a network
* [DeleteNetworkWebhooksPayloadTemplate](docs/webhooks/README.md#deletenetworkwebhookspayloadtemplate) - Destroy a webhook payload template for a network
* [GetNetworkWebhooksHTTPServer](docs/webhooks/README.md#getnetworkwebhookshttpserver) - Return an HTTP server for a network
* [GetNetworkWebhooksHTTPServers](docs/webhooks/README.md#getnetworkwebhookshttpservers) - List the HTTP servers for a network
* [GetNetworkWebhooksPayloadTemplate](docs/webhooks/README.md#getnetworkwebhookspayloadtemplate) - Get the webhook payload template for a network
* [GetNetworkWebhooksPayloadTemplates](docs/webhooks/README.md#getnetworkwebhookspayloadtemplates) - List the webhook payload templates for a network
* [GetNetworkWebhooksWebhookTest](docs/webhooks/README.md#getnetworkwebhookswebhooktest) - Return the status of a webhook test for a network
* [GetOrganizationWebhooksAlertTypes](docs/webhooks/README.md#getorganizationwebhooksalerttypes) - Return a list of alert types to be used with managing webhook alerts
* [GetOrganizationWebhooksLogs](docs/webhooks/README.md#getorganizationwebhookslogs) - Return the log of webhook POSTs sent
* [UpdateNetworkWebhooksHTTPServer](docs/webhooks/README.md#updatenetworkwebhookshttpserver) - Update an HTTP server
* [UpdateNetworkWebhooksPayloadTemplate](docs/webhooks/README.md#updatenetworkwebhookspayloadtemplate) - Update a webhook payload template for a network

### [Wireless](docs/wireless/README.md)

* [CreateNetworkWirelessRfProfile](docs/wireless/README.md#createnetworkwirelessrfprofile) - Creates new RF profile for this network
* [CreateNetworkWirelessSsidIdentityPsk](docs/wireless/README.md#createnetworkwirelessssididentitypsk) - Create an Identity PSK
* [DeleteNetworkWirelessRfProfile](docs/wireless/README.md#deletenetworkwirelessrfprofile) - Delete a RF Profile
* [DeleteNetworkWirelessSsidIdentityPsk](docs/wireless/README.md#deletenetworkwirelessssididentitypsk) - Delete an Identity PSK
* [GetDeviceWirelessBluetoothSettings](docs/wireless/README.md#getdevicewirelessbluetoothsettings) - Return the bluetooth settings for a wireless device
* [GetDeviceWirelessConnectionStats](docs/wireless/README.md#getdevicewirelessconnectionstats) - Aggregated connectivity info for a given AP on this network
* [GetDeviceWirelessLatencyStats](docs/wireless/README.md#getdevicewirelesslatencystats) - Aggregated latency info for a given AP on this network
* [GetDeviceWirelessRadioSettings](docs/wireless/README.md#getdevicewirelessradiosettings) - Return the radio settings of a device
* [GetDeviceWirelessStatus](docs/wireless/README.md#getdevicewirelessstatus) - Return the SSID statuses of an access point
* [GetNetworkWirelessAirMarshal](docs/wireless/README.md#getnetworkwirelessairmarshal) - List Air Marshal scan results from a network
* [GetNetworkWirelessAlternateManagementInterface](docs/wireless/README.md#getnetworkwirelessalternatemanagementinterface) - Return alternate management interface and devices with IP assigned
* [GetNetworkWirelessBilling](docs/wireless/README.md#getnetworkwirelessbilling) - Return the billing settings of this network
* [GetNetworkWirelessBluetoothSettings](docs/wireless/README.md#getnetworkwirelessbluetoothsettings) - Return the Bluetooth settings for a network. <a href="https://documentation.meraki.com/MR/Bluetooth/Bluetooth_Low_Energy_(BLE)">Bluetooth settings</a> must be enabled on the network.
* [GetNetworkWirelessChannelUtilizationHistory](docs/wireless/README.md#getnetworkwirelesschannelutilizationhistory) - Return AP channel utilization over time for a device or network client
* [GetNetworkWirelessClientConnectionStats](docs/wireless/README.md#getnetworkwirelessclientconnectionstats) - Aggregated connectivity info for a given client on this network
* [GetNetworkWirelessClientConnectivityEvents](docs/wireless/README.md#getnetworkwirelessclientconnectivityevents) - List the wireless connectivity events for a client within a network in the timespan.
* [GetNetworkWirelessClientCountHistory](docs/wireless/README.md#getnetworkwirelessclientcounthistory) - Return wireless client counts over time for a network, device, or network client
* [GetNetworkWirelessClientLatencyHistory](docs/wireless/README.md#getnetworkwirelessclientlatencyhistory) - Return the latency history for a client
* [GetNetworkWirelessClientLatencyStats](docs/wireless/README.md#getnetworkwirelessclientlatencystats) - Aggregated latency info for a given client on this network
* [GetNetworkWirelessClientsConnectionStats](docs/wireless/README.md#getnetworkwirelessclientsconnectionstats) - Aggregated connectivity info for this network, grouped by clients
* [GetNetworkWirelessClientsLatencyStats](docs/wireless/README.md#getnetworkwirelessclientslatencystats) - Aggregated latency info for this network, grouped by clients
* [GetNetworkWirelessConnectionStats](docs/wireless/README.md#getnetworkwirelessconnectionstats) - Aggregated connectivity info for this network
* [GetNetworkWirelessDataRateHistory](docs/wireless/README.md#getnetworkwirelessdataratehistory) - Return PHY data rates over time for a network, device, or network client
* [GetNetworkWirelessDevicesConnectionStats](docs/wireless/README.md#getnetworkwirelessdevicesconnectionstats) - Aggregated connectivity info for this network, grouped by node
* [GetNetworkWirelessDevicesLatencyStats](docs/wireless/README.md#getnetworkwirelessdeviceslatencystats) - Aggregated latency info for this network, grouped by node
* [GetNetworkWirelessFailedConnections](docs/wireless/README.md#getnetworkwirelessfailedconnections) - List of all failed client connection events on this network in a given time range
* [GetNetworkWirelessLatencyHistory](docs/wireless/README.md#getnetworkwirelesslatencyhistory) - Return average wireless latency over time for a network, device, or network client
* [GetNetworkWirelessLatencyStats](docs/wireless/README.md#getnetworkwirelesslatencystats) - Aggregated latency info for this network
* [GetNetworkWirelessMeshStatuses](docs/wireless/README.md#getnetworkwirelessmeshstatuses) - List wireless mesh statuses for repeaters
* [GetNetworkWirelessRfProfile](docs/wireless/README.md#getnetworkwirelessrfprofile) - Return a RF profile
* [GetNetworkWirelessRfProfiles](docs/wireless/README.md#getnetworkwirelessrfprofiles) - List the non-basic RF profiles for this network
* [GetNetworkWirelessSettings](docs/wireless/README.md#getnetworkwirelesssettings) - Return the wireless settings for a network
* [GetNetworkWirelessSignalQualityHistory](docs/wireless/README.md#getnetworkwirelesssignalqualityhistory) - Return signal quality (SNR/RSSI) over time for a device or network client
* [GetNetworkWirelessSsid](docs/wireless/README.md#getnetworkwirelessssid) - Return a single MR SSID
* [GetNetworkWirelessSsidBonjourForwarding](docs/wireless/README.md#getnetworkwirelessssidbonjourforwarding) - List the Bonjour forwarding setting and rules for the SSID
* [GetNetworkWirelessSsidDeviceTypeGroupPolicies](docs/wireless/README.md#getnetworkwirelessssiddevicetypegrouppolicies) - List the device type group policies for the SSID
* [GetNetworkWirelessSsidEapOverride](docs/wireless/README.md#getnetworkwirelessssideapoverride) - Return the EAP overridden parameters for an SSID
* [GetNetworkWirelessSsidFirewallL3FirewallRules](docs/wireless/README.md#getnetworkwirelessssidfirewalll3firewallrules) - Return the L3 firewall rules for an SSID on an MR network
* [GetNetworkWirelessSsidFirewallL7FirewallRules](docs/wireless/README.md#getnetworkwirelessssidfirewalll7firewallrules) - Return the L7 firewall rules for an SSID on an MR network
* [GetNetworkWirelessSsidHotspot20](docs/wireless/README.md#getnetworkwirelessssidhotspot20) - Return the Hotspot 2.0 settings for an SSID
* [GetNetworkWirelessSsidIdentityPsk](docs/wireless/README.md#getnetworkwirelessssididentitypsk) - Return an Identity PSK
* [GetNetworkWirelessSsidIdentityPsks](docs/wireless/README.md#getnetworkwirelessssididentitypsks) - List all Identity PSKs in a wireless network
* [GetNetworkWirelessSsidSchedules](docs/wireless/README.md#getnetworkwirelessssidschedules) - List the outage schedule for the SSID
* [GetNetworkWirelessSsidSplashSettings](docs/wireless/README.md#getnetworkwirelessssidsplashsettings) - Display the splash page settings for the given SSID
* [GetNetworkWirelessSsidTrafficShapingRules](docs/wireless/README.md#getnetworkwirelessssidtrafficshapingrules) - Display the traffic shaping settings for a SSID on an MR network
* [GetNetworkWirelessSsidVpn](docs/wireless/README.md#getnetworkwirelessssidvpn) - List the VPN settings for the SSID.
* [GetNetworkWirelessSsids](docs/wireless/README.md#getnetworkwirelessssids) - List the MR SSIDs in a network
* [GetNetworkWirelessUsageHistory](docs/wireless/README.md#getnetworkwirelessusagehistory) - Return AP usage over time for a device or network client
* [GetOrganizationWirelessDevicesEthernetStatuses](docs/wireless/README.md#getorganizationwirelessdevicesethernetstatuses) - Endpoint to see power status for wireless devices
* [UpdateDeviceWirelessBluetoothSettings](docs/wireless/README.md#updatedevicewirelessbluetoothsettings) - Update the bluetooth settings for a wireless device
* [UpdateDeviceWirelessRadioSettings](docs/wireless/README.md#updatedevicewirelessradiosettings) - Update the radio settings of a device
* [UpdateNetworkWirelessAlternateManagementInterface](docs/wireless/README.md#updatenetworkwirelessalternatemanagementinterface) - Update alternate management interface and device static IP
* [UpdateNetworkWirelessBilling](docs/wireless/README.md#updatenetworkwirelessbilling) - Update the billing settings
* [UpdateNetworkWirelessBluetoothSettings](docs/wireless/README.md#updatenetworkwirelessbluetoothsettings) - Update the Bluetooth settings for a network
* [UpdateNetworkWirelessRfProfile](docs/wireless/README.md#updatenetworkwirelessrfprofile) - Updates specified RF profile for this network
* [UpdateNetworkWirelessSettings](docs/wireless/README.md#updatenetworkwirelesssettings) - Update the wireless settings for a network
* [UpdateNetworkWirelessSsid](docs/wireless/README.md#updatenetworkwirelessssid) - Update the attributes of an MR SSID
* [UpdateNetworkWirelessSsidBonjourForwarding](docs/wireless/README.md#updatenetworkwirelessssidbonjourforwarding) - Update the bonjour forwarding setting and rules for the SSID
* [UpdateNetworkWirelessSsidDeviceTypeGroupPolicies](docs/wireless/README.md#updatenetworkwirelessssiddevicetypegrouppolicies) - Update the device type group policies for the SSID
* [UpdateNetworkWirelessSsidEapOverride](docs/wireless/README.md#updatenetworkwirelessssideapoverride) - Update the EAP overridden parameters for an SSID.
* [UpdateNetworkWirelessSsidFirewallL3FirewallRules](docs/wireless/README.md#updatenetworkwirelessssidfirewalll3firewallrules) - Update the L3 firewall rules of an SSID on an MR network
* [UpdateNetworkWirelessSsidFirewallL7FirewallRules](docs/wireless/README.md#updatenetworkwirelessssidfirewalll7firewallrules) - Update the L7 firewall rules of an SSID on an MR network
* [UpdateNetworkWirelessSsidHotspot20](docs/wireless/README.md#updatenetworkwirelessssidhotspot20) - Update the Hotspot 2.0 settings of an SSID
* [UpdateNetworkWirelessSsidIdentityPsk](docs/wireless/README.md#updatenetworkwirelessssididentitypsk) - Update an Identity PSK
* [UpdateNetworkWirelessSsidSchedules](docs/wireless/README.md#updatenetworkwirelessssidschedules) - Update the outage schedule for the SSID
* [UpdateNetworkWirelessSsidSplashSettings](docs/wireless/README.md#updatenetworkwirelessssidsplashsettings) - Modify the splash page settings for the given SSID
* [UpdateNetworkWirelessSsidTrafficShapingRules](docs/wireless/README.md#updatenetworkwirelessssidtrafficshapingrules) - Update the traffic shaping settings for an SSID on an MR network
* [UpdateNetworkWirelessSsidVpn](docs/wireless/README.md#updatenetworkwirelessssidvpn) - Update the VPN settings for the SSID

### [WirelessProfiles](docs/wirelessprofiles/README.md)

* [CreateNetworkCameraWirelessProfile](docs/wirelessprofiles/README.md#createnetworkcamerawirelessprofile) - Creates a new camera wireless profile for this network.
* [DeleteNetworkCameraWirelessProfile](docs/wirelessprofiles/README.md#deletenetworkcamerawirelessprofile) - Delete an existing camera wireless profile for this network.
* [GetDeviceCameraWirelessProfiles](docs/wirelessprofiles/README.md#getdevicecamerawirelessprofiles) - Returns wireless profile assigned to the given camera
* [GetNetworkCameraWirelessProfile](docs/wirelessprofiles/README.md#getnetworkcamerawirelessprofile) - Retrieve a single camera wireless profile.
* [GetNetworkCameraWirelessProfiles](docs/wirelessprofiles/README.md#getnetworkcamerawirelessprofiles) - List the camera wireless profiles for this network.
* [UpdateDeviceCameraWirelessProfiles](docs/wirelessprofiles/README.md#updatedevicecamerawirelessprofiles) - Assign wireless profiles to the given camera
* [UpdateNetworkCameraWirelessProfile](docs/wirelessprofiles/README.md#updatenetworkcamerawirelessprofile) - Update an existing camera wireless profile in this network.

### [WlanLists](docs/wlanlists/README.md)

* [GetNetworkSmDeviceWlanLists](docs/wlanlists/README.md#getnetworksmdevicewlanlists) - List the saved SSID names on a device

### [Zones](docs/zones/README.md)

* [GetDeviceCameraAnalyticsZoneHistory](docs/zones/README.md#getdevicecameraanalyticszonehistory) - Return historical records for analytic zones
* [GetDeviceCameraAnalyticsZones](docs/zones/README.md#getdevicecameraanalyticszones) - Returns all configured analytic zones for this camera
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
