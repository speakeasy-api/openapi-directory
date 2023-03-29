# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/meraki.com/v1.30.0/go
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

    req := operations.GetNetworkSwitchAccessControlListsRequest{
        PathParams: operations.GetNetworkSwitchAccessControlListsPathParams{
            NetworkID: "unde",
        },
    }

    ctx := context.Background()
    res, err := s.AccessControlLists.GetNetworkSwitchAccessControlLists(ctx, req)
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
## SDK Available Operations


### AccessControlLists

* `GetNetworkSwitchAccessControlLists` - Return the access control lists for a MS network
* `UpdateNetworkSwitchAccessControlLists` - Update the access control lists for a MS network

### AccessPolicies

* `CreateNetworkSwitchAccessPolicy` - Create an access policy for a switch network
* `DeleteNetworkSwitchAccessPolicy` - Delete an access policy for a switch network
* `GetNetworkSwitchAccessPolicies` - List the access policies for a switch network
* `GetNetworkSwitchAccessPolicy` - Return a specific access policy for a switch network
* `UpdateNetworkSwitchAccessPolicy` - Update an access policy for a switch network

### Acls

* `CreateOrganizationAdaptivePolicyACL` - Creates new adaptive policy ACL
* `DeleteOrganizationAdaptivePolicyACL` - Deletes the specified adaptive policy ACL
* `GetOrganizationAdaptivePolicyACL` - Returns the adaptive policy ACL information
* `GetOrganizationAdaptivePolicyAcls` - List adaptive policy ACLs in a organization
* `UpdateOrganizationAdaptivePolicyACL` - Updates an adaptive policy ACL

### ActionBatches

* `CreateOrganizationActionBatch` - Create an action batch
* `DeleteOrganizationActionBatch` - Delete an action batch
* `GetOrganizationActionBatch` - Return an action batch
* `GetOrganizationActionBatches` - Return the list of action batches in the organization
* `UpdateOrganizationActionBatch` - Update an action batch

### AdaptivePolicy

* `CreateOrganizationAdaptivePolicyACL` - Creates new adaptive policy ACL
* `CreateOrganizationAdaptivePolicyGroup` - Creates a new adaptive policy group
* `CreateOrganizationAdaptivePolicyPolicy` - Add an Adaptive Policy
* `DeleteOrganizationAdaptivePolicyACL` - Deletes the specified adaptive policy ACL
* `DeleteOrganizationAdaptivePolicyGroup` - Deletes the specified adaptive policy group and any associated policies and references
* `DeleteOrganizationAdaptivePolicyPolicy` - Delete an Adaptive Policy
* `GetOrganizationAdaptivePolicyACL` - Returns the adaptive policy ACL information
* `GetOrganizationAdaptivePolicyAcls` - List adaptive policy ACLs in a organization
* `GetOrganizationAdaptivePolicyGroup` - Returns an adaptive policy group
* `GetOrganizationAdaptivePolicyGroups` - List adaptive policy groups in a organization
* `GetOrganizationAdaptivePolicyOverview` - Returns adaptive policy aggregate statistics for an organization
* `GetOrganizationAdaptivePolicyPolicies` - List adaptive policies in an organization
* `GetOrganizationAdaptivePolicyPolicy` - Return an adaptive policy
* `GetOrganizationAdaptivePolicySettings` - Returns global adaptive policy settings in an organization
* `UpdateOrganizationAdaptivePolicyACL` - Updates an adaptive policy ACL
* `UpdateOrganizationAdaptivePolicyGroup` - Updates an adaptive policy group
* `UpdateOrganizationAdaptivePolicyPolicy` - Update an Adaptive Policy
* `UpdateOrganizationAdaptivePolicySettings` - Update global adaptive policy settings

### Addresses

* `GetOrganizationDevicesUplinksAddressesByDevice` - List the current uplink addresses for devices in an organization.

### Administered

* `GetAdministeredIdentitiesMe` - Returns the identity of the current user.

### Admins

* `CreateOrganizationAdmin` - Create a new dashboard administrator
* `DeleteOrganizationAdmin` - Revoke all access for a dashboard administrator within this organization
* `GetOrganizationAdmins` - List the dashboard administrators in this organization
* `UpdateOrganizationAdmin` - Update an administrator

### AirMarshal

* `GetNetworkWirelessAirMarshal` - List Air Marshal scan results from a network

### AlertTypes

* `GetOrganizationWebhooksAlertTypes` - Return a list of alert types to be used with managing webhook alerts

### Alerts

* `CreateNetworkSensorAlertsProfile` - Creates a sensor alert profile for a network.
* `CreateOrganizationAlertsProfile` - Create an organization-wide alert configuration
* `DeleteNetworkSensorAlertsProfile` - Deletes a sensor alert profile from a network.
* `DeleteOrganizationAlertsProfile` - Removes an organization-wide alert config
* `GetNetworkAlertsHistory` - Return the alert history for this network
* `GetNetworkAlertsSettings` - Return the alert configuration for this network
* `GetNetworkHealthAlerts` - Return all global alerts on this network
* `GetNetworkSensorAlertsCurrentOverviewByMetric` - Return an overview of currently alerting sensors by metric
* `GetNetworkSensorAlertsOverviewByMetric` - Return an overview of alert occurrences over a timespan, by metric
* `GetNetworkSensorAlertsProfile` - Show details of a sensor alert profile for a network.
* `GetNetworkSensorAlertsProfiles` - Lists all sensor alert profiles for a network.
* `GetOrganizationAlertsProfiles` - List all organization-wide alert configurations
* `UpdateNetworkAlertsSettings` - Update the alert configuration for this network
* `UpdateNetworkSensorAlertsProfile` - Updates a sensor alert profile for a network.
* `UpdateOrganizationAlertsProfile` - Update an organization-wide alert config

### AlternateManagementInterface

* `GetNetworkSwitchAlternateManagementInterface` - Return the switch alternate management interface for the network
* `GetNetworkWirelessAlternateManagementInterface` - Return alternate management interface and devices with IP assigned
* `UpdateNetworkSwitchAlternateManagementInterface` - Update the switch alternate management interface for the network
* `UpdateNetworkWirelessAlternateManagementInterface` - Update alternate management interface and device static IP

### Analytics

* `GetDeviceCameraAnalyticsLive` - Returns live state from camera of analytics zones
* `GetDeviceCameraAnalyticsOverview` - Returns an overview of aggregate analytics data for a timespan
* `GetDeviceCameraAnalyticsRecent` - Returns most recent record for analytics zones
* `GetDeviceCameraAnalyticsZoneHistory` - Return historical records for analytic zones
* `GetDeviceCameraAnalyticsZones` - Returns all configured analytic zones for this camera

### APIRequests

* `GetOrganizationAPIRequests` - List the API requests made by an organization
* `GetOrganizationAPIRequestsOverview` - Return an aggregated overview of API requests data
* `GetOrganizationAPIRequestsOverviewResponseCodesByInterval` - Tracks organizations' API requests by response code across a given time period

### ApnsCert

* `GetOrganizationSmApnsCert` - Get the organization's APNS certificate

### Appliance

* `CreateDeviceApplianceVmxAuthenticationToken` - Generate a new vMX authentication token
* `CreateNetworkAppliancePrefixesDelegatedStatic` - Add a static delegated prefix from a network
* `CreateNetworkApplianceStaticRoute` - Add a static route for an MX or teleworker network
* `CreateNetworkApplianceTrafficShapingCustomPerformanceClass` - Add a custom performance class for an MX network
* `CreateNetworkApplianceVlan` - Add a VLAN
* `DeleteNetworkAppliancePrefixesDelegatedStatic` - Delete a static delegated prefix from a network
* `DeleteNetworkApplianceStaticRoute` - Delete a static route from an MX or teleworker network
* `DeleteNetworkApplianceTrafficShapingCustomPerformanceClass` - Delete a custom performance class from an MX network
* `DeleteNetworkApplianceVlan` - Delete a VLAN from a network
* `GetDeviceApplianceDhcpSubnets` - Return the DHCP subnet information for an appliance
* `GetDeviceAppliancePerformance` - Return the performance score for a single MX
* `GetDeviceAppliancePrefixesDelegated` - Return current delegated IPv6 prefixes on an appliance.
* `GetDeviceAppliancePrefixesDelegatedVlanAssignments` - Return prefixes assigned to all IPv6 enabled VLANs on an appliance.
* `GetDeviceApplianceUplinksSettings` - Return the uplink settings for an MX appliance
* `GetNetworkApplianceClientSecurityEvents` - List the security events for a client
* `GetNetworkApplianceConnectivityMonitoringDestinations` - Return the connectivity testing destinations for an MX network
* `GetNetworkApplianceContentFiltering` - Return the content filtering settings for an MX network
* `GetNetworkApplianceContentFilteringCategories` - List all available content filtering categories for an MX network
* `GetNetworkApplianceFirewallCellularFirewallRules` - Return the cellular firewall rules for an MX network
* `GetNetworkApplianceFirewallFirewalledService` - Return the accessibility settings of the given service ('ICMP', 'web', or 'SNMP')
* `GetNetworkApplianceFirewallFirewalledServices` - List the appliance services and their accessibility rules
* `GetNetworkApplianceFirewallInboundCellularFirewallRules` - Return the inbound cellular firewall rules for an MX network
* `GetNetworkApplianceFirewallInboundFirewallRules` - Return the inbound firewall rules for an MX network
* `GetNetworkApplianceFirewallL3FirewallRules` - Return the L3 firewall rules for an MX network
* `GetNetworkApplianceFirewallL7FirewallRules` - List the MX L7 firewall rules for an MX network
* `GetNetworkApplianceFirewallL7FirewallRulesApplicationCategories` - Return the L7 firewall application categories and their associated applications for an MX network
* `GetNetworkApplianceFirewallOneToManyNatRules` - Return the 1:Many NAT mapping rules for an MX network
* `GetNetworkApplianceFirewallOneToOneNatRules` - Return the 1:1 NAT mapping rules for an MX network
* `GetNetworkApplianceFirewallPortForwardingRules` - Return the port forwarding rules for an MX network
* `GetNetworkApplianceFirewallSettings` - Return the firewall settings for this network
* `GetNetworkAppliancePort` - Return per-port VLAN settings for a single MX port.
* `GetNetworkAppliancePorts` - List per-port VLAN settings for all ports of a MX.
* `GetNetworkAppliancePrefixesDelegatedStatic` - Return a static delegated prefix from a network
* `GetNetworkAppliancePrefixesDelegatedStatics` - List static delegated prefixes for a network
* `GetNetworkApplianceSecurityEvents` - List the security events for a network
* `GetNetworkApplianceSecurityIntrusion` - Returns all supported intrusion settings for an MX network
* `GetNetworkApplianceSecurityMalware` - Returns all supported malware settings for an MX network
* `GetNetworkApplianceSettings` - Return the appliance settings for a network
* `GetNetworkApplianceSingleLan` - Return single LAN configuration
* `GetNetworkApplianceSsid` - Return a single MX SSID
* `GetNetworkApplianceSsids` - List the MX SSIDs in a network
* `GetNetworkApplianceStaticRoute` - Return a static route for an MX or teleworker network
* `GetNetworkApplianceStaticRoutes` - List the static routes for an MX or teleworker network
* `GetNetworkApplianceTrafficShaping` - Display the traffic shaping settings for an MX network
* `GetNetworkApplianceTrafficShapingCustomPerformanceClass` - Return a custom performance class for an MX network
* `GetNetworkApplianceTrafficShapingCustomPerformanceClasses` - List all custom performance classes for an MX network
* `GetNetworkApplianceTrafficShapingRules` - Display the traffic shaping settings rules for an MX network
* `GetNetworkApplianceTrafficShapingUplinkBandwidth` - Returns the uplink bandwidth settings for your MX network.
* `GetNetworkApplianceTrafficShapingUplinkSelection` - Show uplink selection settings for an MX network
* `GetNetworkApplianceUplinksUsageHistory` - Get the sent and received bytes for each uplink of a network.
* `GetNetworkApplianceVlan` - Return a VLAN
* `GetNetworkApplianceVlans` - List the VLANs for an MX network
* `GetNetworkApplianceVlansSettings` - Returns the enabled status of VLANs for the network
* `GetNetworkApplianceVpnBgp` - Return a Hub BGP Configuration
* `GetNetworkApplianceVpnSiteToSiteVpn` - Return the site-to-site VPN settings of a network
* `GetNetworkApplianceWarmSpare` - Return MX warm spare settings
* `GetOrganizationApplianceSecurityEvents` - List the security events for an organization
* `GetOrganizationApplianceSecurityIntrusion` - Returns all supported intrusion settings for an organization
* `GetOrganizationApplianceUplinkStatuses` - List the uplink status of every Meraki MX and Z series appliances in the organization
* `GetOrganizationApplianceVpnStats` - Show VPN history stat for networks in an organization
* `GetOrganizationApplianceVpnStatuses` - Show VPN status for networks in an organization
* `GetOrganizationApplianceVPNThirdPartyVPNPeers` - Return the third party VPN peers for an organization
* `GetOrganizationApplianceVpnVpnFirewallRules` - Return the firewall rules for an organization's site-to-site VPN
* `SwapNetworkApplianceWarmSpare` - Swap MX primary and warm spare appliances
* `UpdateDeviceApplianceUplinksSettings` - Update the uplink settings for an MX appliance
* `UpdateNetworkApplianceConnectivityMonitoringDestinations` - Update the connectivity testing destinations for an MX network
* `UpdateNetworkApplianceContentFiltering` - Update the content filtering settings for an MX network
* `UpdateNetworkApplianceFirewallCellularFirewallRules` - Update the cellular firewall rules of an MX network
* `UpdateNetworkApplianceFirewallFirewalledService` - Updates the accessibility settings for the given service ('ICMP', 'web', or 'SNMP')
* `UpdateNetworkApplianceFirewallInboundCellularFirewallRules` - Update the inbound cellular firewall rules of an MX network
* `UpdateNetworkApplianceFirewallInboundFirewallRules` - Update the inbound firewall rules of an MX network
* `UpdateNetworkApplianceFirewallL3FirewallRules` - Update the L3 firewall rules of an MX network
* `UpdateNetworkApplianceFirewallL7FirewallRules` - Update the MX L7 firewall rules for an MX network
* `UpdateNetworkApplianceFirewallOneToManyNatRules` - Set the 1:Many NAT mapping rules for an MX network
* `UpdateNetworkApplianceFirewallOneToOneNatRules` - Set the 1:1 NAT mapping rules for an MX network
* `UpdateNetworkApplianceFirewallPortForwardingRules` - Update the port forwarding rules for an MX network
* `UpdateNetworkApplianceFirewallSettings` - Update the firewall settings for this network
* `UpdateNetworkAppliancePort` - Update the per-port VLAN settings for a single MX port.
* `UpdateNetworkAppliancePrefixesDelegatedStatic` - Update a static delegated prefix from a network
* `UpdateNetworkApplianceSecurityIntrusion` - Set the supported intrusion settings for an MX network
* `UpdateNetworkApplianceSecurityMalware` - Set the supported malware settings for an MX network
* `UpdateNetworkApplianceSettings` - Update the appliance settings for a network
* `UpdateNetworkApplianceSingleLan` - Update single LAN configuration
* `UpdateNetworkApplianceSsid` - Update the attributes of an MX SSID
* `UpdateNetworkApplianceStaticRoute` - Update a static route for an MX or teleworker network
* `UpdateNetworkApplianceTrafficShaping` - Update the traffic shaping settings for an MX network
* `UpdateNetworkApplianceTrafficShapingCustomPerformanceClass` - Update a custom performance class for an MX network
* `UpdateNetworkApplianceTrafficShapingRules` - Update the traffic shaping settings rules for an MX network
* `UpdateNetworkApplianceTrafficShapingUplinkBandwidth` - Updates the uplink bandwidth settings for your MX network.
* `UpdateNetworkApplianceTrafficShapingUplinkSelection` - Update uplink selection settings for an MX network
* `UpdateNetworkApplianceVlan` - Update a VLAN
* `UpdateNetworkApplianceVlansSettings` - Enable/Disable VLANs for the given network
* `UpdateNetworkApplianceVpnBgp` - Update a Hub BGP Configuration
* `UpdateNetworkApplianceVpnSiteToSiteVpn` - Update the site-to-site VPN settings of a network
* `UpdateNetworkApplianceWarmSpare` - Update MX warm spare settings
* `UpdateOrganizationApplianceSecurityIntrusion` - Sets supported intrusion settings for an organization
* `UpdateOrganizationApplianceVPNThirdPartyVPNPeers` - Update the third party VPN peers for an organization
* `UpdateOrganizationApplianceVpnVpnFirewallRules` - Update the firewall rules of an organization's site-to-site VPN

### Appliances

* `GetOrganizationSummaryTopAppliancesByUtilization` - Return the top 10 appliances sorted by utilization over given time range.

### ApplicationCategories

* `GetNetworkApplianceFirewallL7FirewallRulesApplicationCategories` - Return the L7 firewall application categories and their associated applications for an MX network
* `GetNetworkTrafficShapingApplicationCategories` - Returns the application categories for traffic shaping rules.

### ApplicationUsage

* `GetNetworkClientsApplicationUsage` - Return the application usage data for clients

### Applications

* `GetNetworkInsightApplicationHealthByTime` - Get application health by time
* `GetOrganizationInsightApplications` - List all Insight tracked applications

### ArpInspection

* `CreateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServer` - Add a server to be trusted by Dynamic ARP Inspection on this network
* `DeleteNetworkSwitchDhcpServerPolicyArpInspectionTrustedServer` - Remove a server from being trusted by Dynamic ARP Inspection on this network
* `GetNetworkSwitchDhcpServerPolicyArpInspectionTrustedServers` - Return the list of servers trusted by Dynamic ARP Inspection on this network
* `GetNetworkSwitchDhcpServerPolicyArpInspectionWarningsByDevice` - Return the devices that have a Dynamic ARP Inspection warning and their warnings
* `UpdateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServer` - Update a server that is trusted by Dynamic ARP Inspection on this network

### Artifacts

* `CreateOrganizationCameraCustomAnalyticsArtifact` - Create custom analytics artifact
* `DeleteOrganizationCameraCustomAnalyticsArtifact` - Delete Custom Analytics Artifact
* `GetOrganizationCameraCustomAnalyticsArtifact` - Get Custom Analytics Artifact
* `GetOrganizationCameraCustomAnalyticsArtifacts` - List Custom Analytics Artifacts

### AuthenticationToken

* `CreateDeviceApplianceVmxAuthenticationToken` - Generate a new vMX authentication token

### Availabilities

* `GetOrganizationDevicesAvailabilities` - List the availability information for devices in an organization

### BandwidthUsageHistory

* `GetNetworkClientsBandwidthUsageHistory` - Returns a timeseries of total traffic consumption rates for all clients on a network within a given timespan, in megabits per second.
* `GetOrganizationClientsBandwidthUsageHistory` - Return data usage (in megabits per second) over time for all clients in the given organization within a given time range.

### Bgp

* `GetNetworkApplianceVpnBgp` - Return a Hub BGP Configuration
* `UpdateNetworkApplianceVpnBgp` - Update a Hub BGP Configuration

### Billing

* `GetNetworkWirelessBilling` - Return the billing settings of this network
* `UpdateNetworkWirelessBilling` - Update the billing settings

### Bluetooth

* `GetDeviceWirelessBluetoothSettings` - Return the bluetooth settings for a wireless device
* `GetNetworkWirelessBluetoothSettings` - Return the Bluetooth settings for a network. <a href="https://documentation.meraki.com/MR/Bluetooth/Bluetooth_Low_Energy_(BLE)">Bluetooth settings</a> must be enabled on the network.
* `UpdateDeviceWirelessBluetoothSettings` - Update the bluetooth settings for a wireless device
* `UpdateNetworkWirelessBluetoothSettings` - Update the Bluetooth settings for a network

### BluetoothClients

* `GetNetworkBluetoothClient` - Return a Bluetooth client
* `GetNetworkBluetoothClients` - List the Bluetooth clients seen by APs in this network

### BonjourForwarding

* `GetNetworkWirelessSsidBonjourForwarding` - List the Bonjour forwarding setting and rules for the SSID
* `UpdateNetworkWirelessSsidBonjourForwarding` - Update the bonjour forwarding setting and rules for the SSID

### BrandingPolicies

* `CreateOrganizationBrandingPolicy` - Add a new branding policy to an organization
* `DeleteOrganizationBrandingPolicy` - Delete a branding policy
* `GetOrganizationBrandingPolicies` - List the branding policies of an organization
* `GetOrganizationBrandingPoliciesPriorities` - Return the branding policy IDs of an organization in priority order
* `GetOrganizationBrandingPolicy` - Return a branding policy
* `UpdateOrganizationBrandingPoliciesPriorities` - Update the priority ordering of an organization's branding policies.
* `UpdateOrganizationBrandingPolicy` - Update a branding policy

### ByClient

* `GetNetworkPoliciesByClient` - Get policies for all clients with policies

### ByDevice

* `GetNetworkSwitchDhcpServerPolicyArpInspectionWarningsByDevice` - Return the devices that have a Dynamic ARP Inspection warning and their warnings
* `GetOrganizationDevicesPowerModulesStatusesByDevice` - List the power status information for devices in an organization
* `GetOrganizationDevicesUplinksAddressesByDevice` - List the current uplink addresses for devices in an organization.
* `GetOrganizationFirmwareUpgradesByDevice` - Get firmware upgrade status for the filtered devices

### ByEnergyUsage

* `GetOrganizationSummaryTopSwitchesByEnergyUsage` - Return metrics for organization's top 10 switches by energy usage over given time range

### ByInterval

* `GetOrganizationAPIRequestsOverviewResponseCodesByInterval` - Tracks organizations' API requests by response code across a given time period

### ByMetric

* `GetNetworkSensorAlertsCurrentOverviewByMetric` - Return an overview of currently alerting sensors by metric
* `GetNetworkSensorAlertsOverviewByMetric` - Return an overview of alert occurrences over a timespan, by metric

### BySwitch

* `GetOrganizationSwitchPortsBySwitch` - List the switchports in an organization by switch

### ByUsage

* `GetOrganizationSummaryTopClientsByUsage` - Return metrics for organization's top 10 clients by data usage (in mb) over given time range.
* `GetOrganizationSummaryTopClientsManufacturersByUsage` - Return metrics for organization's top clients by data usage (in mb) over given time range, grouped by manufacturer.
* `GetOrganizationSummaryTopDevicesByUsage` - Return metrics for organization's top 10 devices sorted by data usage over given time range
* `GetOrganizationSummaryTopDevicesModelsByUsage` - Return metrics for organization's top 10 device models sorted by data usage over given time range
* `GetOrganizationSummaryTopSsidsByUsage` - Return metrics for organization's top 10 ssids by data usage over given time range

### ByUtilization

* `GetOrganizationSummaryTopAppliancesByUtilization` - Return the top 10 appliances sorted by utilization over given time range.

### BypassActivationLockAttempts

* `CreateNetworkSmBypassActivationLockAttempt` - Bypass activation lock attempt
* `GetNetworkSmBypassActivationLockAttempt` - Bypass activation lock attempt status

### Camera

* `CreateNetworkCameraQualityRetentionProfile` - Creates new quality retention profile for this network.
* `CreateNetworkCameraWirelessProfile` - Creates a new camera wireless profile for this network.
* `CreateOrganizationCameraCustomAnalyticsArtifact` - Create custom analytics artifact
* `DeleteNetworkCameraQualityRetentionProfile` - Delete an existing quality retention profile for this network.
* `DeleteNetworkCameraWirelessProfile` - Delete an existing camera wireless profile for this network.
* `DeleteOrganizationCameraCustomAnalyticsArtifact` - Delete Custom Analytics Artifact
* `GenerateDeviceCameraSnapshot` - Generate a snapshot of what the camera sees at the specified time and return a link to that image.
* `GetDeviceCameraAnalyticsLive` - Returns live state from camera of analytics zones
* `GetDeviceCameraAnalyticsOverview` - Returns an overview of aggregate analytics data for a timespan
* `GetDeviceCameraAnalyticsRecent` - Returns most recent record for analytics zones
* `GetDeviceCameraAnalyticsZoneHistory` - Return historical records for analytic zones
* `GetDeviceCameraAnalyticsZones` - Returns all configured analytic zones for this camera
* `GetDeviceCameraCustomAnalytics` - Return custom analytics settings for a camera
* `GetDeviceCameraQualityAndRetention` - Returns quality and retention settings for the given camera
* `GetDeviceCameraSense` - Returns sense settings for a given camera
* `GetDeviceCameraSenseObjectDetectionModels` - Returns the MV Sense object detection model list for the given camera
* `GetDeviceCameraVideoLink` - Returns video link to the specified camera
* `GetDeviceCameraVideoSettings` - Returns video settings for the given camera
* `GetDeviceCameraWirelessProfiles` - Returns wireless profile assigned to the given camera
* `GetNetworkCameraQualityRetentionProfile` - Retrieve a single quality retention profile
* `GetNetworkCameraQualityRetentionProfiles` - List the quality retention profiles for this network
* `GetNetworkCameraSchedules` - Returns a list of all camera recording schedules.
* `GetNetworkCameraWirelessProfile` - Retrieve a single camera wireless profile.
* `GetNetworkCameraWirelessProfiles` - List the camera wireless profiles for this network.
* `GetOrganizationCameraCustomAnalyticsArtifact` - Get Custom Analytics Artifact
* `GetOrganizationCameraCustomAnalyticsArtifacts` - List Custom Analytics Artifacts
* `GetOrganizationCameraOnboardingStatuses` - Fetch onboarding status of cameras
* `UpdateDeviceCameraCustomAnalytics` - Update custom analytics settings for a camera
* `UpdateDeviceCameraQualityAndRetention` - Update quality and retention settings for the given camera
* `UpdateDeviceCameraSense` - Update sense settings for the given camera
* `UpdateDeviceCameraVideoSettings` - Update video settings for the given camera
* `UpdateDeviceCameraWirelessProfiles` - Assign wireless profiles to the given camera
* `UpdateNetworkCameraQualityRetentionProfile` - Update an existing quality retention profile for this network.
* `UpdateNetworkCameraWirelessProfile` - Update an existing camera wireless profile in this network.
* `UpdateOrganizationCameraOnboardingStatuses` - Notify that credential handoff to camera has completed

### Categories

* `GetNetworkApplianceContentFilteringCategories` - List all available content filtering categories for an MX network

### Cellular

* `GetDeviceCellularSims` - Return the SIM and APN configurations for a cellular device.
* `UpdateDeviceCellularSims` - Updates the SIM and APN configurations for a cellular device.

### CellularFirewallRules

* `GetNetworkApplianceFirewallCellularFirewallRules` - Return the cellular firewall rules for an MX network
* `UpdateNetworkApplianceFirewallCellularFirewallRules` - Update the cellular firewall rules of an MX network

### CellularGateway

* `GetDeviceCellularGatewayLan` - Show the LAN Settings of a MG
* `GetDeviceCellularGatewayPortForwardingRules` - Returns the port forwarding rules for a single MG.
* `GetNetworkCellularGatewayConnectivityMonitoringDestinations` - Return the connectivity testing destinations for an MG network
* `GetNetworkCellularGatewayDhcp` - List common DHCP settings of MGs
* `GetNetworkCellularGatewaySubnetPool` - Return the subnet pool and mask configured for MGs in the network.
* `GetNetworkCellularGatewayUplink` - Returns the uplink settings for your MG network.
* `GetOrganizationCellularGatewayUplinkStatuses` - List the uplink status of every Meraki MG cellular gateway in the organization
* `UpdateDeviceCellularGatewayLan` - Update the LAN Settings for a single MG.
* `UpdateDeviceCellularGatewayPortForwardingRules` - Updates the port forwarding rules for a single MG.
* `UpdateNetworkCellularGatewayConnectivityMonitoringDestinations` - Update the connectivity testing destinations for an MG network
* `UpdateNetworkCellularGatewayDhcp` - Update common DHCP settings of MGs
* `UpdateNetworkCellularGatewaySubnetPool` - Update the subnet pool and mask configuration for MGs in the network.
* `UpdateNetworkCellularGatewayUplink` - Updates the uplink settings for your MG network.

### CellularUsageHistory

* `GetNetworkSmDeviceCellularUsageHistory` - Return the client's daily cellular data usage history

### Certs

* `GetNetworkSmDeviceCerts` - List the certs on a device

### ChannelUtilization

* `GetNetworkNetworkHealthChannelUtilization` - Get the channel utilization over each radio for all APs in a network.

### ChannelUtilizationHistory

* `GetNetworkWirelessChannelUtilizationHistory` - Return AP channel utilization over time for a device or network client

### Claim

* `VmxNetworkDevicesClaim` - Claim a vMX into a network

### ClientCountHistory

* `GetNetworkWirelessClientCountHistory` - Return wireless client counts over time for a network, device, or network client

### Clients

* `GetDeviceClients` - List the clients of a device, up to a maximum of a month ago
* `GetNetworkApplianceClientSecurityEvents` - List the security events for a client
* `GetNetworkClient` - Return the client associated with the given identifier
* `GetNetworkClientPolicy` - Return the policy assigned to a client on the network
* `GetNetworkClientSplashAuthorizationStatus` - Return the splash authorization for a client, for each SSID they've associated with through splash
* `GetNetworkClientTrafficHistory` - Return the client's network traffic data over time
* `GetNetworkClientUsageHistory` - Return the client's daily usage history
* `GetNetworkClients` - List the clients that have used this network in the timespan
* `GetNetworkClientsApplicationUsage` - Return the application usage data for clients
* `GetNetworkClientsBandwidthUsageHistory` - Returns a timeseries of total traffic consumption rates for all clients on a network within a given timespan, in megabits per second.
* `GetNetworkClientsOverview` - Return overview statistics for network clients
* `GetNetworkClientsUsageHistories` - Return the usage histories for clients
* `GetNetworkWirelessClientConnectionStats` - Aggregated connectivity info for a given client on this network
* `GetNetworkWirelessClientConnectivityEvents` - List the wireless connectivity events for a client within a network in the timespan.
* `GetNetworkWirelessClientLatencyHistory` - Return the latency history for a client
* `GetNetworkWirelessClientLatencyStats` - Aggregated latency info for a given client on this network
* `GetNetworkWirelessClientsConnectionStats` - Aggregated connectivity info for this network, grouped by clients
* `GetNetworkWirelessClientsLatencyStats` - Aggregated latency info for this network, grouped by clients
* `GetOrganizationClientsBandwidthUsageHistory` - Return data usage (in megabits per second) over time for all clients in the given organization within a given time range.
* `GetOrganizationClientsOverview` - Return summary information around client data usage (in mb) across the given organization.
* `GetOrganizationClientsSearch` - Return the client details in an organization
* `GetOrganizationSummaryTopClientsByUsage` - Return metrics for organization's top 10 clients by data usage (in mb) over given time range.
* `GetOrganizationSummaryTopClientsManufacturersByUsage` - Return metrics for organization's top clients by data usage (in mb) over given time range, grouped by manufacturer.
* `ProvisionNetworkClients` - Provisions a client with a name and policy
* `UpdateNetworkClientPolicy` - Update the policy assigned to a client on the network
* `UpdateNetworkClientSplashAuthorizationStatus` - Update a client's splash authorization

### CloudMonitoring

* `CreateOrganizationInventoryOnboardingCloudMonitoringImport` - Commits the import operation to complete the onboarding of a device into Dashboard for monitoring.
* `CreateOrganizationInventoryOnboardingCloudMonitoringPrepare` - Initiates or updates an import session
* `GetOrganizationInventoryOnboardingCloudMonitoringImports` - Check the status of a committed Import operation

### ConfigTemplates

* `CreateOrganizationConfigTemplate` - Create a new configuration template
* `DeleteOrganizationConfigTemplate` - Remove a configuration template
* `GetOrganizationConfigTemplate` - Return a single configuration template
* `GetOrganizationConfigTemplateSwitchProfilePort` - Return a switch profile port
* `GetOrganizationConfigTemplateSwitchProfilePorts` - Return all the ports of a switch profile
* `GetOrganizationConfigTemplateSwitchProfiles` - List the switch profiles for your switch template configuration
* `GetOrganizationConfigTemplates` - List the configuration templates for this organization
* `UpdateOrganizationConfigTemplate` - Update a configuration template
* `UpdateOrganizationConfigTemplateSwitchProfilePort` - Update a switch profile port

### ConfigurationChanges

* `GetOrganizationConfigurationChanges` - View the Change Log for your organization

### Configure

* `AddNetworkSwitchStack` - Add a switch to a stack
* `AssignOrganizationLicensesSeats` - Assign SM seats to a network
* `BindNetwork` - Bind a network to a template.
* `CheckinNetworkSmDevices` - Force check-in a set of devices
* `ClaimIntoOrganization` - Claim a list of devices, licenses, and/or orders into an organization
* `ClaimIntoOrganizationInventory` - Claim a list of devices, licenses, and/or orders into an organization inventory
* `ClaimNetworkDevices` - Claim devices into a network. (Note: for recently claimed devices, it may take a few minutes for API requsts against that device to succeed)
* `CloneOrganization` - Create a new organization by cloning the addressed organization
* `CloneOrganizationSwitchDevices` - Clone port-level and some switch-level configuration settings from a source switch to one or more target switches
* `CombineOrganizationNetworks` - Combine multiple networks into a single network
* `CreateDeviceApplianceVmxAuthenticationToken` - Generate a new vMX authentication token
* `CreateDeviceSwitchRoutingInterface` - Create a layer 3 interface for a switch
* `CreateDeviceSwitchRoutingStaticRoute` - Create a layer 3 static route for a switch
* `CreateNetworkAppliancePrefixesDelegatedStatic` - Add a static delegated prefix from a network
* `CreateNetworkApplianceStaticRoute` - Add a static route for an MX or teleworker network
* `CreateNetworkApplianceTrafficShapingCustomPerformanceClass` - Add a custom performance class for an MX network
* `CreateNetworkApplianceVlan` - Add a VLAN
* `CreateNetworkCameraQualityRetentionProfile` - Creates new quality retention profile for this network.
* `CreateNetworkCameraWirelessProfile` - Creates a new camera wireless profile for this network.
* `CreateNetworkFirmwareUpgradesRollback` - Rollback a Firmware Upgrade For A Network
* `CreateNetworkFirmwareUpgradesStagedEvent` - Create a Staged Upgrade Event for a network
* `CreateNetworkFirmwareUpgradesStagedGroup` - Create a Staged Upgrade Group for a network
* `CreateNetworkFloorPlan` - Upload a floor plan
* `CreateNetworkGroupPolicy` - Create a group policy
* `CreateNetworkMerakiAuthUser` - Authorize a user configured with Meraki Authentication for a network (currently supports 802.1X, splash guest, and client VPN users, and currently, organizations have a 50,000 user cap)
* `CreateNetworkMqttBroker` - Add an MQTT broker
* `CreateNetworkPiiRequest` - Submit a new delete or restrict processing PII request
* `CreateNetworkSensorAlertsProfile` - Creates a sensor alert profile for a network.
* `CreateNetworkSmBypassActivationLockAttempt` - Bypass activation lock attempt
* `CreateNetworkSmTargetGroup` - Add a target group
* `CreateNetworkSwitchAccessPolicy` - Create an access policy for a switch network
* `CreateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServer` - Add a server to be trusted by Dynamic ARP Inspection on this network
* `CreateNetworkSwitchLinkAggregation` - Create a link aggregation group
* `CreateNetworkSwitchPortSchedule` - Add a switch port schedule
* `CreateNetworkSwitchQosRule` - Add a quality of service rule
* `CreateNetworkSwitchRoutingMulticastRendezvousPoint` - Create a multicast rendezvous point
* `CreateNetworkSwitchStack` - Create a stack
* `CreateNetworkSwitchStackRoutingInterface` - Create a layer 3 interface for a switch stack
* `CreateNetworkSwitchStackRoutingStaticRoute` - Create a layer 3 static route for a switch stack
* `CreateNetworkWebhooksHTTPServer` - Add an HTTP server to a network
* `CreateNetworkWebhooksPayloadTemplate` - Create a webhook payload template for a network
* `CreateNetworkWebhooksWebhookTest` - Send a test webhook for a network
* `CreateNetworkWirelessRfProfile` - Creates new RF profile for this network
* `CreateNetworkWirelessSsidIdentityPsk` - Create an Identity PSK
* `CreateOrganization` - Create a new organization
* `CreateOrganizationActionBatch` - Create an action batch
* `CreateOrganizationAdaptivePolicyACL` - Creates new adaptive policy ACL
* `CreateOrganizationAdaptivePolicyGroup` - Creates a new adaptive policy group
* `CreateOrganizationAdaptivePolicyPolicy` - Add an Adaptive Policy
* `CreateOrganizationAdmin` - Create a new dashboard administrator
* `CreateOrganizationAlertsProfile` - Create an organization-wide alert configuration
* `CreateOrganizationBrandingPolicy` - Add a new branding policy to an organization
* `CreateOrganizationCameraCustomAnalyticsArtifact` - Create custom analytics artifact
* `CreateOrganizationConfigTemplate` - Create a new configuration template
* `CreateOrganizationEarlyAccessFeaturesOptIn` - Create a new early access feature opt-in for an organization
* `CreateOrganizationInsightMonitoredMediaServer` - Add a media server to be monitored for this organization
* `CreateOrganizationInventoryOnboardingCloudMonitoringImport` - Commits the import operation to complete the onboarding of a device into Dashboard for monitoring.
* `CreateOrganizationInventoryOnboardingCloudMonitoringPrepare` - Initiates or updates an import session
* `CreateOrganizationNetwork` - Create a network
* `CreateOrganizationPolicyObject` - Creates a new Policy Object.
* `CreateOrganizationPolicyObjectsGroup` - Creates a new Policy Object Group.
* `CreateOrganizationSamlIdp` - Create a SAML IdP for your organization.
* `CreateOrganizationSamlRole` - Create a SAML role
* `DeferNetworkFirmwareUpgradesStagedEvents` - Postpone by 1 week all pending staged upgrade stages for a network
* `DeleteDeviceSwitchRoutingInterface` - Delete a layer 3 interface from the switch
* `DeleteDeviceSwitchRoutingStaticRoute` - Delete a layer 3 static route for a switch
* `DeleteNetwork` - Delete a network
* `DeleteNetworkAppliancePrefixesDelegatedStatic` - Delete a static delegated prefix from a network
* `DeleteNetworkApplianceStaticRoute` - Delete a static route from an MX or teleworker network
* `DeleteNetworkApplianceTrafficShapingCustomPerformanceClass` - Delete a custom performance class from an MX network
* `DeleteNetworkApplianceVlan` - Delete a VLAN from a network
* `DeleteNetworkCameraQualityRetentionProfile` - Delete an existing quality retention profile for this network.
* `DeleteNetworkCameraWirelessProfile` - Delete an existing camera wireless profile for this network.
* `DeleteNetworkFirmwareUpgradesStagedGroup` - Delete a Staged Upgrade Group
* `DeleteNetworkFloorPlan` - Destroy a floor plan
* `DeleteNetworkGroupPolicy` - Delete a group policy
* `DeleteNetworkMerakiAuthUser` - Deauthorize a user
* `DeleteNetworkMqttBroker` - Delete an MQTT broker
* `DeleteNetworkPiiRequest` - Delete a restrict processing PII request
* `DeleteNetworkSensorAlertsProfile` - Deletes a sensor alert profile from a network.
* `DeleteNetworkSmTargetGroup` - Delete a target group from a network
* `DeleteNetworkSmUserAccessDevice` - Delete a User Access Device
* `DeleteNetworkSwitchAccessPolicy` - Delete an access policy for a switch network
* `DeleteNetworkSwitchDhcpServerPolicyArpInspectionTrustedServer` - Remove a server from being trusted by Dynamic ARP Inspection on this network
* `DeleteNetworkSwitchLinkAggregation` - Split a link aggregation group into separate ports
* `DeleteNetworkSwitchPortSchedule` - Delete a switch port schedule
* `DeleteNetworkSwitchQosRule` - Delete a quality of service rule
* `DeleteNetworkSwitchRoutingMulticastRendezvousPoint` - Delete a multicast rendezvous point
* `DeleteNetworkSwitchStack` - Delete a stack
* `DeleteNetworkSwitchStackRoutingInterface` - Delete a layer 3 interface from a switch stack
* `DeleteNetworkSwitchStackRoutingStaticRoute` - Delete a layer 3 static route for a switch stack
* `DeleteNetworkWebhooksHTTPServer` - Delete an HTTP server from a network
* `DeleteNetworkWebhooksPayloadTemplate` - Destroy a webhook payload template for a network
* `DeleteNetworkWirelessRfProfile` - Delete a RF Profile
* `DeleteNetworkWirelessSsidIdentityPsk` - Delete an Identity PSK
* `DeleteOrganization` - Delete an organization
* `DeleteOrganizationActionBatch` - Delete an action batch
* `DeleteOrganizationAdaptivePolicyACL` - Deletes the specified adaptive policy ACL
* `DeleteOrganizationAdaptivePolicyGroup` - Deletes the specified adaptive policy group and any associated policies and references
* `DeleteOrganizationAdaptivePolicyPolicy` - Delete an Adaptive Policy
* `DeleteOrganizationAdmin` - Revoke all access for a dashboard administrator within this organization
* `DeleteOrganizationAlertsProfile` - Removes an organization-wide alert config
* `DeleteOrganizationBrandingPolicy` - Delete a branding policy
* `DeleteOrganizationCameraCustomAnalyticsArtifact` - Delete Custom Analytics Artifact
* `DeleteOrganizationConfigTemplate` - Remove a configuration template
* `DeleteOrganizationEarlyAccessFeaturesOptIn` - Delete an early access feature opt-in
* `DeleteOrganizationInsightMonitoredMediaServer` - Delete a monitored media server from this organization
* `DeleteOrganizationPolicyObject` - Deletes a Policy Object.
* `DeleteOrganizationPolicyObjectsGroup` - Deletes a Policy Object Group.
* `DeleteOrganizationSamlIdp` - Remove a SAML IdP in your organization.
* `DeleteOrganizationSamlRole` - Remove a SAML role
* `DeleteOrganizationUser` - Delete a user and all of its authentication methods.
* `GetDevice` - Return a single device
* `GetDeviceApplianceUplinksSettings` - Return the uplink settings for an MX appliance
* `GetDeviceCameraCustomAnalytics` - Return custom analytics settings for a camera
* `GetDeviceCameraQualityAndRetention` - Returns quality and retention settings for the given camera
* `GetDeviceCameraSense` - Returns sense settings for a given camera
* `GetDeviceCameraSenseObjectDetectionModels` - Returns the MV Sense object detection model list for the given camera
* `GetDeviceCameraVideoLink` - Returns video link to the specified camera
* `GetDeviceCameraVideoSettings` - Returns video settings for the given camera
* `GetDeviceCameraWirelessProfiles` - Returns wireless profile assigned to the given camera
* `GetDeviceCellularGatewayLan` - Show the LAN Settings of a MG
* `GetDeviceCellularGatewayPortForwardingRules` - Returns the port forwarding rules for a single MG.
* `GetDeviceCellularSims` - Return the SIM and APN configurations for a cellular device.
* `GetDeviceManagementInterface` - Return the management interface settings for a device
* `GetDeviceSensorRelationships` - List the sensor roles for a given sensor or camera device.
* `GetDeviceSwitchPort` - Return a switch port
* `GetDeviceSwitchPorts` - List the switch ports for a switch
* `GetDeviceSwitchRoutingInterface` - Return a layer 3 interface for a switch
* `GetDeviceSwitchRoutingInterfaceDhcp` - Return a layer 3 interface DHCP configuration for a switch
* `GetDeviceSwitchRoutingInterfaces` - List layer 3 interfaces for a switch
* `GetDeviceSwitchRoutingStaticRoute` - Return a layer 3 static route for a switch
* `GetDeviceSwitchRoutingStaticRoutes` - List layer 3 static routes for a switch
* `GetDeviceSwitchWarmSpare` - Return warm spare configuration for a switch
* `GetDeviceWirelessBluetoothSettings` - Return the bluetooth settings for a wireless device
* `GetDeviceWirelessRadioSettings` - Return the radio settings of a device
* `GetNetwork` - Return a network
* `GetNetworkAlertsSettings` - Return the alert configuration for this network
* `GetNetworkApplianceConnectivityMonitoringDestinations` - Return the connectivity testing destinations for an MX network
* `GetNetworkApplianceContentFiltering` - Return the content filtering settings for an MX network
* `GetNetworkApplianceContentFilteringCategories` - List all available content filtering categories for an MX network
* `GetNetworkApplianceFirewallCellularFirewallRules` - Return the cellular firewall rules for an MX network
* `GetNetworkApplianceFirewallFirewalledService` - Return the accessibility settings of the given service ('ICMP', 'web', or 'SNMP')
* `GetNetworkApplianceFirewallFirewalledServices` - List the appliance services and their accessibility rules
* `GetNetworkApplianceFirewallInboundCellularFirewallRules` - Return the inbound cellular firewall rules for an MX network
* `GetNetworkApplianceFirewallInboundFirewallRules` - Return the inbound firewall rules for an MX network
* `GetNetworkApplianceFirewallL3FirewallRules` - Return the L3 firewall rules for an MX network
* `GetNetworkApplianceFirewallL7FirewallRules` - List the MX L7 firewall rules for an MX network
* `GetNetworkApplianceFirewallL7FirewallRulesApplicationCategories` - Return the L7 firewall application categories and their associated applications for an MX network
* `GetNetworkApplianceFirewallOneToManyNatRules` - Return the 1:Many NAT mapping rules for an MX network
* `GetNetworkApplianceFirewallOneToOneNatRules` - Return the 1:1 NAT mapping rules for an MX network
* `GetNetworkApplianceFirewallPortForwardingRules` - Return the port forwarding rules for an MX network
* `GetNetworkApplianceFirewallSettings` - Return the firewall settings for this network
* `GetNetworkAppliancePort` - Return per-port VLAN settings for a single MX port.
* `GetNetworkAppliancePorts` - List per-port VLAN settings for all ports of a MX.
* `GetNetworkAppliancePrefixesDelegatedStatic` - Return a static delegated prefix from a network
* `GetNetworkAppliancePrefixesDelegatedStatics` - List static delegated prefixes for a network
* `GetNetworkApplianceSecurityIntrusion` - Returns all supported intrusion settings for an MX network
* `GetNetworkApplianceSecurityMalware` - Returns all supported malware settings for an MX network
* `GetNetworkApplianceSettings` - Return the appliance settings for a network
* `GetNetworkApplianceSingleLan` - Return single LAN configuration
* `GetNetworkApplianceSsid` - Return a single MX SSID
* `GetNetworkApplianceSsids` - List the MX SSIDs in a network
* `GetNetworkApplianceStaticRoute` - Return a static route for an MX or teleworker network
* `GetNetworkApplianceStaticRoutes` - List the static routes for an MX or teleworker network
* `GetNetworkApplianceTrafficShaping` - Display the traffic shaping settings for an MX network
* `GetNetworkApplianceTrafficShapingCustomPerformanceClass` - Return a custom performance class for an MX network
* `GetNetworkApplianceTrafficShapingCustomPerformanceClasses` - List all custom performance classes for an MX network
* `GetNetworkApplianceTrafficShapingRules` - Display the traffic shaping settings rules for an MX network
* `GetNetworkApplianceTrafficShapingUplinkBandwidth` - Returns the uplink bandwidth settings for your MX network.
* `GetNetworkApplianceTrafficShapingUplinkSelection` - Show uplink selection settings for an MX network
* `GetNetworkApplianceVlan` - Return a VLAN
* `GetNetworkApplianceVlans` - List the VLANs for an MX network
* `GetNetworkApplianceVlansSettings` - Returns the enabled status of VLANs for the network
* `GetNetworkApplianceVpnBgp` - Return a Hub BGP Configuration
* `GetNetworkApplianceVpnSiteToSiteVpn` - Return the site-to-site VPN settings of a network
* `GetNetworkApplianceWarmSpare` - Return MX warm spare settings
* `GetNetworkCameraQualityRetentionProfile` - Retrieve a single quality retention profile
* `GetNetworkCameraQualityRetentionProfiles` - List the quality retention profiles for this network
* `GetNetworkCameraSchedules` - Returns a list of all camera recording schedules.
* `GetNetworkCameraWirelessProfile` - Retrieve a single camera wireless profile.
* `GetNetworkCameraWirelessProfiles` - List the camera wireless profiles for this network.
* `GetNetworkCellularGatewayConnectivityMonitoringDestinations` - Return the connectivity testing destinations for an MG network
* `GetNetworkCellularGatewayDhcp` - List common DHCP settings of MGs
* `GetNetworkCellularGatewaySubnetPool` - Return the subnet pool and mask configured for MGs in the network.
* `GetNetworkCellularGatewayUplink` - Returns the uplink settings for your MG network.
* `GetNetworkClientPolicy` - Return the policy assigned to a client on the network
* `GetNetworkClientSplashAuthorizationStatus` - Return the splash authorization for a client, for each SSID they've associated with through splash
* `GetNetworkDevices` - List the devices in a network
* `GetNetworkFirmwareUpgrades` - Get firmware upgrade information for a network
* `GetNetworkFirmwareUpgradesStagedEvents` - Get the Staged Upgrade Event from a network
* `GetNetworkFirmwareUpgradesStagedGroup` - Get a Staged Upgrade Group from a network
* `GetNetworkFirmwareUpgradesStagedGroups` - List of Staged Upgrade Groups in a network
* `GetNetworkFirmwareUpgradesStagedStages` - Order of Staged Upgrade Groups in a network
* `GetNetworkFloorPlan` - Find a floor plan by ID
* `GetNetworkFloorPlans` - List the floor plans that belong to your network
* `GetNetworkGroupPolicies` - List the group policies in a network
* `GetNetworkGroupPolicy` - Display a group policy
* `GetNetworkHealthAlerts` - Return all global alerts on this network
* `GetNetworkMerakiAuthUser` - Return the Meraki Auth splash guest, RADIUS, or client VPN user
* `GetNetworkMerakiAuthUsers` - List the users configured under Meraki Authentication for a network (splash guest or RADIUS users for a wireless network, or client VPN users for a wired network)
* `GetNetworkMqttBroker` - Return an MQTT broker
* `GetNetworkMqttBrokers` - List the MQTT brokers for this network
* `GetNetworkNetflow` - Return the NetFlow traffic reporting settings for a network
* `GetNetworkPiiPiiKeys` - List the keys required to access Personally Identifiable Information (PII) for a given identifier
* `GetNetworkPiiRequest` - Return a PII request
* `GetNetworkPiiRequests` - List the PII requests for this network or organization
* `GetNetworkPiiSmDevicesForKey` - Given a piece of Personally Identifiable Information (PII), return the Systems Manager device ID(s) associated with that identifier
* `GetNetworkPiiSmOwnersForKey` - Given a piece of Personally Identifiable Information (PII), return the Systems Manager owner ID(s) associated with that identifier
* `GetNetworkPoliciesByClient` - Get policies for all clients with policies
* `GetNetworkSensorAlertsProfile` - Show details of a sensor alert profile for a network.
* `GetNetworkSensorAlertsProfiles` - Lists all sensor alert profiles for a network.
* `GetNetworkSensorRelationships` - List the sensor roles for devices in a given network
* `GetNetworkSettings` - Return the settings for a network
* `GetNetworkSmBypassActivationLockAttempt` - Bypass activation lock attempt status
* `GetNetworkSmDeviceCerts` - List the certs on a device
* `GetNetworkSmDeviceDeviceProfiles` - Get the installed profiles associated with a device
* `GetNetworkSmDeviceNetworkAdapters` - List the network adapters of a device
* `GetNetworkSmDeviceRestrictions` - List the restrictions on a device
* `GetNetworkSmDeviceSecurityCenters` - List the security centers on a device
* `GetNetworkSmDeviceSoftwares` - Get a list of softwares associated with a device
* `GetNetworkSmDeviceWlanLists` - List the saved SSID names on a device
* `GetNetworkSmDevices` - List the devices enrolled in an SM network with various specified fields and filters
* `GetNetworkSmProfiles` - List all the profiles in the network
* `GetNetworkSmTargetGroup` - Return a target group
* `GetNetworkSmTargetGroups` - List the target groups in this network
* `GetNetworkSmTrustedAccessConfigs` - List Trusted Access Configs
* `GetNetworkSmUserAccessDevices` - List User Access Devices and its Trusted Access Connections
* `GetNetworkSmUserDeviceProfiles` - Get the profiles associated with a user
* `GetNetworkSmUserSoftwares` - Get a list of softwares associated with a user
* `GetNetworkSmUsers` - List the owners in an SM network with various specified fields and filters
* `GetNetworkSnmp` - Return the SNMP settings for a network
* `GetNetworkSwitchAccessControlLists` - Return the access control lists for a MS network
* `GetNetworkSwitchAccessPolicies` - List the access policies for a switch network
* `GetNetworkSwitchAccessPolicy` - Return a specific access policy for a switch network
* `GetNetworkSwitchAlternateManagementInterface` - Return the switch alternate management interface for the network
* `GetNetworkSwitchDhcpServerPolicy` - Return the DHCP server settings
* `GetNetworkSwitchDhcpServerPolicyArpInspectionTrustedServers` - Return the list of servers trusted by Dynamic ARP Inspection on this network
* `GetNetworkSwitchDhcpServerPolicyArpInspectionWarningsByDevice` - Return the devices that have a Dynamic ARP Inspection warning and their warnings
* `GetNetworkSwitchDhcpV4ServersSeen` - Return the network's DHCPv4 servers seen within the selected timeframe (default 1 day)
* `GetNetworkSwitchDscpToCosMappings` - Return the DSCP to CoS mappings
* `GetNetworkSwitchLinkAggregations` - List link aggregation groups
* `GetNetworkSwitchMtu` - Return the MTU configuration
* `GetNetworkSwitchPortSchedules` - List switch port schedules
* `GetNetworkSwitchQosRule` - Return a quality of service rule
* `GetNetworkSwitchQosRules` - List quality of service rules
* `GetNetworkSwitchQosRulesOrder` - Return the quality of service rule IDs by order in which they will be processed by the switch
* `GetNetworkSwitchRoutingMulticast` - Return multicast settings for a network
* `GetNetworkSwitchRoutingMulticastRendezvousPoint` - Return a multicast rendezvous point
* `GetNetworkSwitchRoutingMulticastRendezvousPoints` - List multicast rendezvous points
* `GetNetworkSwitchRoutingOspf` - Return layer 3 OSPF routing configuration
* `GetNetworkSwitchSettings` - Returns the switch network settings
* `GetNetworkSwitchStack` - Show a switch stack
* `GetNetworkSwitchStackRoutingInterface` - Return a layer 3 interface from a switch stack
* `GetNetworkSwitchStackRoutingInterfaceDhcp` - Return a layer 3 interface DHCP configuration for a switch stack
* `GetNetworkSwitchStackRoutingInterfaces` - List layer 3 interfaces for a switch stack
* `GetNetworkSwitchStackRoutingStaticRoute` - Return a layer 3 static route for a switch stack
* `GetNetworkSwitchStackRoutingStaticRoutes` - List layer 3 static routes for a switch stack
* `GetNetworkSwitchStacks` - List the switch stacks in a network
* `GetNetworkSwitchStormControl` - Return the storm control configuration for a switch network
* `GetNetworkSwitchStp` - Returns STP settings
* `GetNetworkSyslogServers` - List the syslog servers for a network
* `GetNetworkTrafficAnalysis` - Return the traffic analysis settings for a network
* `GetNetworkTrafficShapingApplicationCategories` - Returns the application categories for traffic shaping rules.
* `GetNetworkTrafficShapingDscpTaggingOptions` - Returns the available DSCP tagging options for your traffic shaping rules.
* `GetNetworkWebhooksHTTPServer` - Return an HTTP server for a network
* `GetNetworkWebhooksHTTPServers` - List the HTTP servers for a network
* `GetNetworkWebhooksPayloadTemplate` - Get the webhook payload template for a network
* `GetNetworkWebhooksPayloadTemplates` - List the webhook payload templates for a network
* `GetNetworkWebhooksWebhookTest` - Return the status of a webhook test for a network
* `GetNetworkWirelessAlternateManagementInterface` - Return alternate management interface and devices with IP assigned
* `GetNetworkWirelessBilling` - Return the billing settings of this network
* `GetNetworkWirelessBluetoothSettings` - Return the Bluetooth settings for a network. <a href="https://documentation.meraki.com/MR/Bluetooth/Bluetooth_Low_Energy_(BLE)">Bluetooth settings</a> must be enabled on the network.
* `GetNetworkWirelessRfProfile` - Return a RF profile
* `GetNetworkWirelessRfProfiles` - List the non-basic RF profiles for this network
* `GetNetworkWirelessSettings` - Return the wireless settings for a network
* `GetNetworkWirelessSsid` - Return a single MR SSID
* `GetNetworkWirelessSsidBonjourForwarding` - List the Bonjour forwarding setting and rules for the SSID
* `GetNetworkWirelessSsidDeviceTypeGroupPolicies` - List the device type group policies for the SSID
* `GetNetworkWirelessSsidEapOverride` - Return the EAP overridden parameters for an SSID
* `GetNetworkWirelessSsidFirewallL3FirewallRules` - Return the L3 firewall rules for an SSID on an MR network
* `GetNetworkWirelessSsidFirewallL7FirewallRules` - Return the L7 firewall rules for an SSID on an MR network
* `GetNetworkWirelessSsidHotspot20` - Return the Hotspot 2.0 settings for an SSID
* `GetNetworkWirelessSsidIdentityPsk` - Return an Identity PSK
* `GetNetworkWirelessSsidIdentityPsks` - List all Identity PSKs in a wireless network
* `GetNetworkWirelessSsidSchedules` - List the outage schedule for the SSID
* `GetNetworkWirelessSsidSplashSettings` - Display the splash page settings for the given SSID
* `GetNetworkWirelessSsidTrafficShapingRules` - Display the traffic shaping settings for a SSID on an MR network
* `GetNetworkWirelessSsidVpn` - List the VPN settings for the SSID.
* `GetNetworkWirelessSsids` - List the MR SSIDs in a network
* `GetOrganization` - Return an organization
* `GetOrganizationActionBatch` - Return an action batch
* `GetOrganizationActionBatches` - Return the list of action batches in the organization
* `GetOrganizationAdaptivePolicyACL` - Returns the adaptive policy ACL information
* `GetOrganizationAdaptivePolicyAcls` - List adaptive policy ACLs in a organization
* `GetOrganizationAdaptivePolicyGroup` - Returns an adaptive policy group
* `GetOrganizationAdaptivePolicyGroups` - List adaptive policy groups in a organization
* `GetOrganizationAdaptivePolicyPolicies` - List adaptive policies in an organization
* `GetOrganizationAdaptivePolicyPolicy` - Return an adaptive policy
* `GetOrganizationAdaptivePolicySettings` - Returns global adaptive policy settings in an organization
* `GetOrganizationAdmins` - List the dashboard administrators in this organization
* `GetOrganizationAlertsProfiles` - List all organization-wide alert configurations
* `GetOrganizationApplianceSecurityIntrusion` - Returns all supported intrusion settings for an organization
* `GetOrganizationApplianceVPNThirdPartyVPNPeers` - Return the third party VPN peers for an organization
* `GetOrganizationApplianceVpnVpnFirewallRules` - Return the firewall rules for an organization's site-to-site VPN
* `GetOrganizationBrandingPolicies` - List the branding policies of an organization
* `GetOrganizationBrandingPoliciesPriorities` - Return the branding policy IDs of an organization in priority order
* `GetOrganizationBrandingPolicy` - Return a branding policy
* `GetOrganizationCameraCustomAnalyticsArtifact` - Get Custom Analytics Artifact
* `GetOrganizationCameraCustomAnalyticsArtifacts` - List Custom Analytics Artifacts
* `GetOrganizationCameraOnboardingStatuses` - Fetch onboarding status of cameras
* `GetOrganizationClientsSearch` - Return the client details in an organization
* `GetOrganizationConfigTemplate` - Return a single configuration template
* `GetOrganizationConfigTemplateSwitchProfilePort` - Return a switch profile port
* `GetOrganizationConfigTemplateSwitchProfilePorts` - Return all the ports of a switch profile
* `GetOrganizationConfigTemplateSwitchProfiles` - List the switch profiles for your switch template configuration
* `GetOrganizationConfigTemplates` - List the configuration templates for this organization
* `GetOrganizationDevices` - List the devices in an organization
* `GetOrganizationEarlyAccessFeatures` - List the available early access features for organization
* `GetOrganizationEarlyAccessFeaturesOptIn` - Show an early access feature opt-in for an organization
* `GetOrganizationEarlyAccessFeaturesOptIns` - List the early access feature opt-ins for an organization
* `GetOrganizationFirmwareUpgrades` - Get firmware upgrade information for an organization
* `GetOrganizationFirmwareUpgradesByDevice` - Get firmware upgrade status for the filtered devices
* `GetOrganizationInsightApplications` - List all Insight tracked applications
* `GetOrganizationInsightMonitoredMediaServer` - Return a monitored media server for this organization
* `GetOrganizationInsightMonitoredMediaServers` - List the monitored media servers for this organization
* `GetOrganizationInventoryDevice` - Return a single device from the inventory of an organization
* `GetOrganizationInventoryDevices` - Return the device inventory for an organization
* `GetOrganizationInventoryOnboardingCloudMonitoringImports` - Check the status of a committed Import operation
* `GetOrganizationLicense` - Display a license
* `GetOrganizationLicenses` - List the licenses for an organization
* `GetOrganizationLicensingCotermLicenses` - List the licenses in a coterm organization
* `GetOrganizationLoginSecurity` - Returns the login security settings for an organization.
* `GetOrganizationNetworks` - List the networks that the user has privileges on in an organization
* `GetOrganizationPolicyObject` - Shows details of a Policy Object.
* `GetOrganizationPolicyObjects` - Lists Policy Objects belonging to the organization.
* `GetOrganizationPolicyObjectsGroup` - Shows details of a Policy Object Group.
* `GetOrganizationPolicyObjectsGroups` - Lists Policy Object Groups belonging to the organization.
* `GetOrganizationSaml` - Returns the SAML SSO enabled settings for an organization.
* `GetOrganizationSamlIdp` - Get a SAML IdP from your organization.
* `GetOrganizationSamlIdps` - List the SAML IdPs in your organization.
* `GetOrganizationSamlRole` - Return a SAML role
* `GetOrganizationSamlRoles` - List the SAML roles for this organization
* `GetOrganizationSmApnsCert` - Get the organization's APNS certificate
* `GetOrganizationSmVppAccount` - Get a hash containing the unparsed token of the VPP account with the given ID
* `GetOrganizationSmVppAccounts` - List the VPP accounts in the organization
* `GetOrganizationSnmp` - Return the SNMP settings for an organization
* `GetOrganizationSwitchPortsBySwitch` - List the switchports in an organization by switch
* `GetOrganizationWirelessDevicesEthernetStatuses` - Endpoint to see power status for wireless devices
* `GetOrganizations` - List the organizations that the user has privileges on
* `LockNetworkSmDevices` - Lock a set of devices
* `ModifyNetworkSmDevicesTags` - Add, delete, or update the tags of a set of devices
* `MoveNetworkSmDevices` - Move a set of devices to a new network
* `MoveOrganizationLicenses` - Move licenses to another organization
* `MoveOrganizationLicensesSeats` - Move SM seats to another organization
* `MoveOrganizationLicensingCotermLicenses` - Moves a license to a different organization (coterm only)
* `ProvisionNetworkClients` - Provisions a client with a name and policy
* `RefreshNetworkSmDeviceDetails` - Refresh the details of a device
* `ReleaseFromOrganizationInventory` - Release a list of claimed devices from an organization.
* `RemoveNetworkDevices` - Remove a single device
* `RemoveNetworkSwitchStack` - Remove a switch from a stack
* `RenewOrganizationLicensesSeats` - Renew SM seats of a license
* `RollbacksNetworkFirmwareUpgradesStagedEvents` - Rollback a Staged Upgrade Event for a network
* `SplitNetwork` - Split a combined network into individual networks for each type of device
* `SwapNetworkApplianceWarmSpare` - Swap MX primary and warm spare appliances
* `UnbindNetwork` - Unbind a network from a template.
* `UnenrollNetworkSmDevice` - Unenroll a device
* `UpdateDevice` - Update the attributes of a device
* `UpdateDeviceApplianceUplinksSettings` - Update the uplink settings for an MX appliance
* `UpdateDeviceCameraCustomAnalytics` - Update custom analytics settings for a camera
* `UpdateDeviceCameraQualityAndRetention` - Update quality and retention settings for the given camera
* `UpdateDeviceCameraSense` - Update sense settings for the given camera
* `UpdateDeviceCameraVideoSettings` - Update video settings for the given camera
* `UpdateDeviceCameraWirelessProfiles` - Assign wireless profiles to the given camera
* `UpdateDeviceCellularGatewayLan` - Update the LAN Settings for a single MG.
* `UpdateDeviceCellularGatewayPortForwardingRules` - Updates the port forwarding rules for a single MG.
* `UpdateDeviceCellularSims` - Updates the SIM and APN configurations for a cellular device.
* `UpdateDeviceManagementInterface` - Update the management interface settings for a device
* `UpdateDeviceSensorRelationships` - Assign one or more sensor roles to a given sensor or camera device.
* `UpdateDeviceSwitchPort` - Update a switch port
* `UpdateDeviceSwitchRoutingInterface` - Update a layer 3 interface for a switch
* `UpdateDeviceSwitchRoutingInterfaceDhcp` - Update a layer 3 interface DHCP configuration for a switch
* `UpdateDeviceSwitchRoutingStaticRoute` - Update a layer 3 static route for a switch
* `UpdateDeviceSwitchWarmSpare` - Update warm spare configuration for a switch
* `UpdateDeviceWirelessBluetoothSettings` - Update the bluetooth settings for a wireless device
* `UpdateDeviceWirelessRadioSettings` - Update the radio settings of a device
* `UpdateNetwork` - Update a network
* `UpdateNetworkAlertsSettings` - Update the alert configuration for this network
* `UpdateNetworkApplianceConnectivityMonitoringDestinations` - Update the connectivity testing destinations for an MX network
* `UpdateNetworkApplianceContentFiltering` - Update the content filtering settings for an MX network
* `UpdateNetworkApplianceFirewallCellularFirewallRules` - Update the cellular firewall rules of an MX network
* `UpdateNetworkApplianceFirewallFirewalledService` - Updates the accessibility settings for the given service ('ICMP', 'web', or 'SNMP')
* `UpdateNetworkApplianceFirewallInboundCellularFirewallRules` - Update the inbound cellular firewall rules of an MX network
* `UpdateNetworkApplianceFirewallInboundFirewallRules` - Update the inbound firewall rules of an MX network
* `UpdateNetworkApplianceFirewallL3FirewallRules` - Update the L3 firewall rules of an MX network
* `UpdateNetworkApplianceFirewallL7FirewallRules` - Update the MX L7 firewall rules for an MX network
* `UpdateNetworkApplianceFirewallOneToManyNatRules` - Set the 1:Many NAT mapping rules for an MX network
* `UpdateNetworkApplianceFirewallOneToOneNatRules` - Set the 1:1 NAT mapping rules for an MX network
* `UpdateNetworkApplianceFirewallPortForwardingRules` - Update the port forwarding rules for an MX network
* `UpdateNetworkApplianceFirewallSettings` - Update the firewall settings for this network
* `UpdateNetworkAppliancePort` - Update the per-port VLAN settings for a single MX port.
* `UpdateNetworkAppliancePrefixesDelegatedStatic` - Update a static delegated prefix from a network
* `UpdateNetworkApplianceSecurityIntrusion` - Set the supported intrusion settings for an MX network
* `UpdateNetworkApplianceSecurityMalware` - Set the supported malware settings for an MX network
* `UpdateNetworkApplianceSettings` - Update the appliance settings for a network
* `UpdateNetworkApplianceSingleLan` - Update single LAN configuration
* `UpdateNetworkApplianceSsid` - Update the attributes of an MX SSID
* `UpdateNetworkApplianceStaticRoute` - Update a static route for an MX or teleworker network
* `UpdateNetworkApplianceTrafficShaping` - Update the traffic shaping settings for an MX network
* `UpdateNetworkApplianceTrafficShapingCustomPerformanceClass` - Update a custom performance class for an MX network
* `UpdateNetworkApplianceTrafficShapingRules` - Update the traffic shaping settings rules for an MX network
* `UpdateNetworkApplianceTrafficShapingUplinkBandwidth` - Updates the uplink bandwidth settings for your MX network.
* `UpdateNetworkApplianceTrafficShapingUplinkSelection` - Update uplink selection settings for an MX network
* `UpdateNetworkApplianceVlan` - Update a VLAN
* `UpdateNetworkApplianceVlansSettings` - Enable/Disable VLANs for the given network
* `UpdateNetworkApplianceVpnBgp` - Update a Hub BGP Configuration
* `UpdateNetworkApplianceVpnSiteToSiteVpn` - Update the site-to-site VPN settings of a network
* `UpdateNetworkApplianceWarmSpare` - Update MX warm spare settings
* `UpdateNetworkCameraQualityRetentionProfile` - Update an existing quality retention profile for this network.
* `UpdateNetworkCameraWirelessProfile` - Update an existing camera wireless profile in this network.
* `UpdateNetworkCellularGatewayConnectivityMonitoringDestinations` - Update the connectivity testing destinations for an MG network
* `UpdateNetworkCellularGatewayDhcp` - Update common DHCP settings of MGs
* `UpdateNetworkCellularGatewaySubnetPool` - Update the subnet pool and mask configuration for MGs in the network.
* `UpdateNetworkCellularGatewayUplink` - Updates the uplink settings for your MG network.
* `UpdateNetworkClientPolicy` - Update the policy assigned to a client on the network
* `UpdateNetworkClientSplashAuthorizationStatus` - Update a client's splash authorization
* `UpdateNetworkFirmwareUpgrades` - Update firmware upgrade information for a network
* `UpdateNetworkFirmwareUpgradesStagedEvents` - Update the Staged Upgrade Event for a network
* `UpdateNetworkFirmwareUpgradesStagedGroup` - Update a Staged Upgrade Group for a network
* `UpdateNetworkFirmwareUpgradesStagedStages` - Assign Staged Upgrade Group order in the sequence.
* `UpdateNetworkFloorPlan` - Update a floor plan's geolocation and other meta data
* `UpdateNetworkGroupPolicy` - Update a group policy
* `UpdateNetworkMerakiAuthUser` - Update a user configured with Meraki Authentication (currently, 802.1X RADIUS, splash guest, and client VPN users can be updated)
* `UpdateNetworkMqttBroker` - Update an MQTT broker
* `UpdateNetworkNetflow` - Update the NetFlow traffic reporting settings for a network
* `UpdateNetworkSensorAlertsProfile` - Updates a sensor alert profile for a network.
* `UpdateNetworkSettings` - Update the settings for a network
* `UpdateNetworkSmDevicesFields` - Modify the fields of a device
* `UpdateNetworkSmTargetGroup` - Update a target group
* `UpdateNetworkSnmp` - Update the SNMP settings for a network
* `UpdateNetworkSwitchAccessControlLists` - Update the access control lists for a MS network
* `UpdateNetworkSwitchAccessPolicy` - Update an access policy for a switch network
* `UpdateNetworkSwitchAlternateManagementInterface` - Update the switch alternate management interface for the network
* `UpdateNetworkSwitchDhcpServerPolicy` - Update the DHCP server settings
* `UpdateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServer` - Update a server that is trusted by Dynamic ARP Inspection on this network
* `UpdateNetworkSwitchDscpToCosMappings` - Update the DSCP to CoS mappings
* `UpdateNetworkSwitchLinkAggregation` - Update a link aggregation group
* `UpdateNetworkSwitchMtu` - Update the MTU configuration
* `UpdateNetworkSwitchPortSchedule` - Update a switch port schedule
* `UpdateNetworkSwitchQosRule` - Update a quality of service rule
* `UpdateNetworkSwitchQosRulesOrder` - Update the order in which the rules should be processed by the switch
* `UpdateNetworkSwitchRoutingMulticast` - Update multicast settings for a network
* `UpdateNetworkSwitchRoutingMulticastRendezvousPoint` - Update a multicast rendezvous point
* `UpdateNetworkSwitchRoutingOspf` - Update layer 3 OSPF routing configuration
* `UpdateNetworkSwitchSettings` - Update switch network settings
* `UpdateNetworkSwitchStackRoutingInterface` - Update a layer 3 interface for a switch stack
* `UpdateNetworkSwitchStackRoutingInterfaceDhcp` - Update a layer 3 interface DHCP configuration for a switch stack
* `UpdateNetworkSwitchStackRoutingStaticRoute` - Update a layer 3 static route for a switch stack
* `UpdateNetworkSwitchStormControl` - Update the storm control configuration for a switch network
* `UpdateNetworkSwitchStp` - Updates STP settings
* `UpdateNetworkSyslogServers` - Update the syslog servers for a network
* `UpdateNetworkTrafficAnalysis` - Update the traffic analysis settings for a network
* `UpdateNetworkWebhooksHTTPServer` - Update an HTTP server
* `UpdateNetworkWebhooksPayloadTemplate` - Update a webhook payload template for a network
* `UpdateNetworkWirelessAlternateManagementInterface` - Update alternate management interface and device static IP
* `UpdateNetworkWirelessBilling` - Update the billing settings
* `UpdateNetworkWirelessBluetoothSettings` - Update the Bluetooth settings for a network
* `UpdateNetworkWirelessRfProfile` - Updates specified RF profile for this network
* `UpdateNetworkWirelessSettings` - Update the wireless settings for a network
* `UpdateNetworkWirelessSsid` - Update the attributes of an MR SSID
* `UpdateNetworkWirelessSsidBonjourForwarding` - Update the bonjour forwarding setting and rules for the SSID
* `UpdateNetworkWirelessSsidDeviceTypeGroupPolicies` - Update the device type group policies for the SSID
* `UpdateNetworkWirelessSsidEapOverride` - Update the EAP overridden parameters for an SSID.
* `UpdateNetworkWirelessSsidFirewallL3FirewallRules` - Update the L3 firewall rules of an SSID on an MR network
* `UpdateNetworkWirelessSsidFirewallL7FirewallRules` - Update the L7 firewall rules of an SSID on an MR network
* `UpdateNetworkWirelessSsidHotspot20` - Update the Hotspot 2.0 settings of an SSID
* `UpdateNetworkWirelessSsidIdentityPsk` - Update an Identity PSK
* `UpdateNetworkWirelessSsidSchedules` - Update the outage schedule for the SSID
* `UpdateNetworkWirelessSsidSplashSettings` - Modify the splash page settings for the given SSID
* `UpdateNetworkWirelessSsidTrafficShapingRules` - Update the traffic shaping settings for an SSID on an MR network
* `UpdateNetworkWirelessSsidVpn` - Update the VPN settings for the SSID
* `UpdateOrganization` - Update an organization
* `UpdateOrganizationActionBatch` - Update an action batch
* `UpdateOrganizationAdaptivePolicyACL` - Updates an adaptive policy ACL
* `UpdateOrganizationAdaptivePolicyGroup` - Updates an adaptive policy group
* `UpdateOrganizationAdaptivePolicyPolicy` - Update an Adaptive Policy
* `UpdateOrganizationAdaptivePolicySettings` - Update global adaptive policy settings
* `UpdateOrganizationAdmin` - Update an administrator
* `UpdateOrganizationAlertsProfile` - Update an organization-wide alert config
* `UpdateOrganizationApplianceSecurityIntrusion` - Sets supported intrusion settings for an organization
* `UpdateOrganizationApplianceVPNThirdPartyVPNPeers` - Update the third party VPN peers for an organization
* `UpdateOrganizationApplianceVpnVpnFirewallRules` - Update the firewall rules of an organization's site-to-site VPN
* `UpdateOrganizationBrandingPoliciesPriorities` - Update the priority ordering of an organization's branding policies.
* `UpdateOrganizationBrandingPolicy` - Update a branding policy
* `UpdateOrganizationCameraOnboardingStatuses` - Notify that credential handoff to camera has completed
* `UpdateOrganizationConfigTemplate` - Update a configuration template
* `UpdateOrganizationConfigTemplateSwitchProfilePort` - Update a switch profile port
* `UpdateOrganizationEarlyAccessFeaturesOptIn` - Update an early access feature opt-in for an organization
* `UpdateOrganizationInsightMonitoredMediaServer` - Update a monitored media server for this organization
* `UpdateOrganizationLicense` - Update a license
* `UpdateOrganizationLoginSecurity` - Update the login security settings for an organization
* `UpdateOrganizationPolicyObject` - Updates a Policy Object.
* `UpdateOrganizationPolicyObjectsGroup` - Updates a Policy Object Group.
* `UpdateOrganizationSaml` - Updates the SAML SSO enabled settings for an organization.
* `UpdateOrganizationSamlIdp` - Update a SAML IdP in your organization
* `UpdateOrganizationSamlRole` - Update a SAML role
* `UpdateOrganizationSnmp` - Update the SNMP settings for an organization
* `VmxNetworkDevicesClaim` - Claim a vMX into a network
* `WipeNetworkSmDevices` - Wipe a device

### ConnectionStats

* `GetDeviceWirelessConnectionStats` - Aggregated connectivity info for a given AP on this network
* `GetNetworkWirelessClientConnectionStats` - Aggregated connectivity info for a given client on this network
* `GetNetworkWirelessClientsConnectionStats` - Aggregated connectivity info for this network, grouped by clients
* `GetNetworkWirelessConnectionStats` - Aggregated connectivity info for this network
* `GetNetworkWirelessDevicesConnectionStats` - Aggregated connectivity info for this network, grouped by node

### Connectivity

* `GetNetworkSmDeviceConnectivity` - Returns historical connectivity data (whether a device is regularly checking in to Dashboard).

### ConnectivityEvents

* `GetNetworkWirelessClientConnectivityEvents` - List the wireless connectivity events for a client within a network in the timespan.

### ConnectivityMonitoringDestinations

* `GetNetworkApplianceConnectivityMonitoringDestinations` - Return the connectivity testing destinations for an MX network
* `GetNetworkCellularGatewayConnectivityMonitoringDestinations` - Return the connectivity testing destinations for an MG network
* `UpdateNetworkApplianceConnectivityMonitoringDestinations` - Update the connectivity testing destinations for an MX network
* `UpdateNetworkCellularGatewayConnectivityMonitoringDestinations` - Update the connectivity testing destinations for an MG network

### ContentFiltering

* `GetNetworkApplianceContentFiltering` - Return the content filtering settings for an MX network
* `GetNetworkApplianceContentFilteringCategories` - List all available content filtering categories for an MX network
* `UpdateNetworkApplianceContentFiltering` - Update the content filtering settings for an MX network

### Coterm

* `GetOrganizationLicensingCotermLicenses` - List the licenses in a coterm organization
* `MoveOrganizationLicensingCotermLicenses` - Moves a license to a different organization (coterm only)

### Current

* `GetNetworkSensorAlertsCurrentOverviewByMetric` - Return an overview of currently alerting sensors by metric

### CustomAnalytics

* `CreateOrganizationCameraCustomAnalyticsArtifact` - Create custom analytics artifact
* `DeleteOrganizationCameraCustomAnalyticsArtifact` - Delete Custom Analytics Artifact
* `GetDeviceCameraCustomAnalytics` - Return custom analytics settings for a camera
* `GetOrganizationCameraCustomAnalyticsArtifact` - Get Custom Analytics Artifact
* `GetOrganizationCameraCustomAnalyticsArtifacts` - List Custom Analytics Artifacts
* `UpdateDeviceCameraCustomAnalytics` - Update custom analytics settings for a camera

### CustomPerformanceClasses

* `CreateNetworkApplianceTrafficShapingCustomPerformanceClass` - Add a custom performance class for an MX network
* `DeleteNetworkApplianceTrafficShapingCustomPerformanceClass` - Delete a custom performance class from an MX network
* `GetNetworkApplianceTrafficShapingCustomPerformanceClass` - Return a custom performance class for an MX network
* `GetNetworkApplianceTrafficShapingCustomPerformanceClasses` - List all custom performance classes for an MX network
* `UpdateNetworkApplianceTrafficShapingCustomPerformanceClass` - Update a custom performance class for an MX network

### DataRateHistory

* `GetNetworkWirelessDataRateHistory` - Return PHY data rates over time for a network, device, or network client

### Delegated

* `CreateNetworkAppliancePrefixesDelegatedStatic` - Add a static delegated prefix from a network
* `DeleteNetworkAppliancePrefixesDelegatedStatic` - Delete a static delegated prefix from a network
* `GetDeviceAppliancePrefixesDelegated` - Return current delegated IPv6 prefixes on an appliance.
* `GetDeviceAppliancePrefixesDelegatedVlanAssignments` - Return prefixes assigned to all IPv6 enabled VLANs on an appliance.
* `GetNetworkAppliancePrefixesDelegatedStatic` - Return a static delegated prefix from a network
* `GetNetworkAppliancePrefixesDelegatedStatics` - List static delegated prefixes for a network
* `UpdateNetworkAppliancePrefixesDelegatedStatic` - Update a static delegated prefix from a network

### DesktopLogs

* `GetNetworkSmDeviceDesktopLogs` - Return historical records of various Systems Manager network connection details for desktop devices.

### DeviceCommandLogs

* `GetNetworkSmDeviceDeviceCommandLogs` - Return historical records of commands sent to Systems Manager devices

### DeviceProfiles

* `GetNetworkSmDeviceDeviceProfiles` - Get the installed profiles associated with a device
* `GetNetworkSmUserDeviceProfiles` - Get the profiles associated with a user

### DeviceTypeGroupPolicies

* `GetNetworkWirelessSsidDeviceTypeGroupPolicies` - List the device type group policies for the SSID
* `UpdateNetworkWirelessSsidDeviceTypeGroupPolicies` - Update the device type group policies for the SSID

### Devices

* `BlinkDeviceLeds` - Blink the LEDs on a device
* `CheckinNetworkSmDevices` - Force check-in a set of devices
* `ClaimNetworkDevices` - Claim devices into a network. (Note: for recently claimed devices, it may take a few minutes for API requsts against that device to succeed)
* `CloneOrganizationSwitchDevices` - Clone port-level and some switch-level configuration settings from a source switch to one or more target switches
* `CreateDeviceLiveToolsPing` - Enqueue a job to ping a target host from the device
* `CreateDeviceLiveToolsPingDevice` - Enqueue a job to check connectivity status to the device
* `GetDevice` - Return a single device
* `GetDeviceCellularSims` - Return the SIM and APN configurations for a cellular device.
* `GetDeviceClients` - List the clients of a device, up to a maximum of a month ago
* `GetDeviceLiveToolsPing` - Return a ping job
* `GetDeviceLiveToolsPingDevice` - Return a ping device job
* `GetDeviceLldpCdp` - List LLDP and CDP information for a device
* `GetDeviceLossAndLatencyHistory` - Get the uplink loss percentage and latency in milliseconds, and goodput in kilobits per second for a wired network device.
* `GetDeviceManagementInterface` - Return the management interface settings for a device
* `GetNetworkDevices` - List the devices in a network
* `GetNetworkSmDeviceCellularUsageHistory` - Return the client's daily cellular data usage history
* `GetNetworkSmDeviceCerts` - List the certs on a device
* `GetNetworkSmDeviceConnectivity` - Returns historical connectivity data (whether a device is regularly checking in to Dashboard).
* `GetNetworkSmDeviceDesktopLogs` - Return historical records of various Systems Manager network connection details for desktop devices.
* `GetNetworkSmDeviceDeviceCommandLogs` - Return historical records of commands sent to Systems Manager devices
* `GetNetworkSmDeviceDeviceProfiles` - Get the installed profiles associated with a device
* `GetNetworkSmDeviceNetworkAdapters` - List the network adapters of a device
* `GetNetworkSmDevicePerformanceHistory` - Return historical records of various Systems Manager client metrics for desktop devices.
* `GetNetworkSmDeviceRestrictions` - List the restrictions on a device
* `GetNetworkSmDeviceSecurityCenters` - List the security centers on a device
* `GetNetworkSmDeviceSoftwares` - Get a list of softwares associated with a device
* `GetNetworkSmDeviceWlanLists` - List the saved SSID names on a device
* `GetNetworkSmDevices` - List the devices enrolled in an SM network with various specified fields and filters
* `GetNetworkWirelessDevicesConnectionStats` - Aggregated connectivity info for this network, grouped by node
* `GetNetworkWirelessDevicesLatencyStats` - Aggregated latency info for this network, grouped by node
* `GetOrganizationDevices` - List the devices in an organization
* `GetOrganizationDevicesAvailabilities` - List the availability information for devices in an organization
* `GetOrganizationDevicesPowerModulesStatusesByDevice` - List the power status information for devices in an organization
* `GetOrganizationDevicesStatuses` - List the status of every Meraki device in the organization
* `GetOrganizationDevicesStatusesOverview` - Return an overview of current device statuses
* `GetOrganizationDevicesUplinksAddressesByDevice` - List the current uplink addresses for devices in an organization.
* `GetOrganizationDevicesUplinksLossAndLatency` - Return the uplink loss and latency for every MX in the organization from at latest 2 minutes ago
* `GetOrganizationInventoryDevice` - Return a single device from the inventory of an organization
* `GetOrganizationInventoryDevices` - Return the device inventory for an organization
* `GetOrganizationSummaryTopDevicesByUsage` - Return metrics for organization's top 10 devices sorted by data usage over given time range
* `GetOrganizationSummaryTopDevicesModelsByUsage` - Return metrics for organization's top 10 device models sorted by data usage over given time range
* `GetOrganizationWirelessDevicesEthernetStatuses` - Endpoint to see power status for wireless devices
* `LockNetworkSmDevices` - Lock a set of devices
* `ModifyNetworkSmDevicesTags` - Add, delete, or update the tags of a set of devices
* `MoveNetworkSmDevices` - Move a set of devices to a new network
* `RebootDevice` - Reboot a device
* `RefreshNetworkSmDeviceDetails` - Refresh the details of a device
* `RemoveNetworkDevices` - Remove a single device
* `UnenrollNetworkSmDevice` - Unenroll a device
* `UpdateDevice` - Update the attributes of a device
* `UpdateDeviceCellularSims` - Updates the SIM and APN configurations for a cellular device.
* `UpdateDeviceManagementInterface` - Update the management interface settings for a device
* `UpdateNetworkSmDevicesFields` - Modify the fields of a device
* `VmxNetworkDevicesClaim` - Claim a vMX into a network
* `WipeNetworkSmDevices` - Wipe a device

### Dhcp

* `GetDeviceApplianceDhcpSubnets` - Return the DHCP subnet information for an appliance
* `GetDeviceSwitchRoutingInterfaceDhcp` - Return a layer 3 interface DHCP configuration for a switch
* `GetNetworkCellularGatewayDhcp` - List common DHCP settings of MGs
* `GetNetworkSwitchDhcpV4ServersSeen` - Return the network's DHCPv4 servers seen within the selected timeframe (default 1 day)
* `GetNetworkSwitchStackRoutingInterfaceDhcp` - Return a layer 3 interface DHCP configuration for a switch stack
* `UpdateDeviceSwitchRoutingInterfaceDhcp` - Update a layer 3 interface DHCP configuration for a switch
* `UpdateNetworkCellularGatewayDhcp` - Update common DHCP settings of MGs
* `UpdateNetworkSwitchStackRoutingInterfaceDhcp` - Update a layer 3 interface DHCP configuration for a switch stack

### DhcpServerPolicy

* `CreateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServer` - Add a server to be trusted by Dynamic ARP Inspection on this network
* `DeleteNetworkSwitchDhcpServerPolicyArpInspectionTrustedServer` - Remove a server from being trusted by Dynamic ARP Inspection on this network
* `GetNetworkSwitchDhcpServerPolicy` - Return the DHCP server settings
* `GetNetworkSwitchDhcpServerPolicyArpInspectionTrustedServers` - Return the list of servers trusted by Dynamic ARP Inspection on this network
* `GetNetworkSwitchDhcpServerPolicyArpInspectionWarningsByDevice` - Return the devices that have a Dynamic ARP Inspection warning and their warnings
* `UpdateNetworkSwitchDhcpServerPolicy` - Update the DHCP server settings
* `UpdateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServer` - Update a server that is trusted by Dynamic ARP Inspection on this network

### DscpTaggingOptions

* `GetNetworkTrafficShapingDscpTaggingOptions` - Returns the available DSCP tagging options for your traffic shaping rules.

### DscpToCosMappings

* `GetNetworkSwitchDscpToCosMappings` - Return the DSCP to CoS mappings
* `UpdateNetworkSwitchDscpToCosMappings` - Update the DSCP to CoS mappings

### EapOverride

* `GetNetworkWirelessSsidEapOverride` - Return the EAP overridden parameters for an SSID
* `UpdateNetworkWirelessSsidEapOverride` - Update the EAP overridden parameters for an SSID.

### EarlyAccess

* `CreateOrganizationEarlyAccessFeaturesOptIn` - Create a new early access feature opt-in for an organization
* `DeleteOrganizationEarlyAccessFeaturesOptIn` - Delete an early access feature opt-in
* `GetOrganizationEarlyAccessFeatures` - List the available early access features for organization
* `GetOrganizationEarlyAccessFeaturesOptIn` - Show an early access feature opt-in for an organization
* `GetOrganizationEarlyAccessFeaturesOptIns` - List the early access feature opt-ins for an organization
* `UpdateOrganizationEarlyAccessFeaturesOptIn` - Update an early access feature opt-in for an organization

### Ethernet

* `GetOrganizationWirelessDevicesEthernetStatuses` - Endpoint to see power status for wireless devices

### EventTypes

* `GetNetworkEventsEventTypes` - List the event type to human-readable description

### Events

* `CreateNetworkFirmwareUpgradesStagedEvent` - Create a Staged Upgrade Event for a network
* `DeferNetworkFirmwareUpgradesStagedEvents` - Postpone by 1 week all pending staged upgrade stages for a network
* `GetNetworkApplianceClientSecurityEvents` - List the security events for a client
* `GetNetworkApplianceSecurityEvents` - List the security events for a network
* `GetNetworkEvents` - List the events for the network
* `GetNetworkEventsEventTypes` - List the event type to human-readable description
* `GetNetworkFirmwareUpgradesStagedEvents` - Get the Staged Upgrade Event from a network
* `GetOrganizationApplianceSecurityEvents` - List the security events for an organization
* `RollbacksNetworkFirmwareUpgradesStagedEvents` - Rollback a Staged Upgrade Event for a network
* `UpdateNetworkFirmwareUpgradesStagedEvents` - Update the Staged Upgrade Event for a network

### FailedConnections

* `GetNetworkWirelessFailedConnections` - List of all failed client connection events on this network in a given time range

### Features

* `CreateOrganizationEarlyAccessFeaturesOptIn` - Create a new early access feature opt-in for an organization
* `DeleteOrganizationEarlyAccessFeaturesOptIn` - Delete an early access feature opt-in
* `GetOrganizationEarlyAccessFeatures` - List the available early access features for organization
* `GetOrganizationEarlyAccessFeaturesOptIn` - Show an early access feature opt-in for an organization
* `GetOrganizationEarlyAccessFeaturesOptIns` - List the early access feature opt-ins for an organization
* `UpdateOrganizationEarlyAccessFeaturesOptIn` - Update an early access feature opt-in for an organization

### Fields

* `UpdateNetworkSmDevicesFields` - Modify the fields of a device

### Firewall

* `GetNetworkApplianceFirewallCellularFirewallRules` - Return the cellular firewall rules for an MX network
* `GetNetworkApplianceFirewallFirewalledService` - Return the accessibility settings of the given service ('ICMP', 'web', or 'SNMP')
* `GetNetworkApplianceFirewallFirewalledServices` - List the appliance services and their accessibility rules
* `GetNetworkApplianceFirewallInboundCellularFirewallRules` - Return the inbound cellular firewall rules for an MX network
* `GetNetworkApplianceFirewallInboundFirewallRules` - Return the inbound firewall rules for an MX network
* `GetNetworkApplianceFirewallL3FirewallRules` - Return the L3 firewall rules for an MX network
* `GetNetworkApplianceFirewallL7FirewallRules` - List the MX L7 firewall rules for an MX network
* `GetNetworkApplianceFirewallL7FirewallRulesApplicationCategories` - Return the L7 firewall application categories and their associated applications for an MX network
* `GetNetworkApplianceFirewallOneToManyNatRules` - Return the 1:Many NAT mapping rules for an MX network
* `GetNetworkApplianceFirewallOneToOneNatRules` - Return the 1:1 NAT mapping rules for an MX network
* `GetNetworkApplianceFirewallPortForwardingRules` - Return the port forwarding rules for an MX network
* `GetNetworkApplianceFirewallSettings` - Return the firewall settings for this network
* `GetNetworkWirelessSsidFirewallL3FirewallRules` - Return the L3 firewall rules for an SSID on an MR network
* `GetNetworkWirelessSsidFirewallL7FirewallRules` - Return the L7 firewall rules for an SSID on an MR network
* `UpdateNetworkApplianceFirewallCellularFirewallRules` - Update the cellular firewall rules of an MX network
* `UpdateNetworkApplianceFirewallFirewalledService` - Updates the accessibility settings for the given service ('ICMP', 'web', or 'SNMP')
* `UpdateNetworkApplianceFirewallInboundCellularFirewallRules` - Update the inbound cellular firewall rules of an MX network
* `UpdateNetworkApplianceFirewallInboundFirewallRules` - Update the inbound firewall rules of an MX network
* `UpdateNetworkApplianceFirewallL3FirewallRules` - Update the L3 firewall rules of an MX network
* `UpdateNetworkApplianceFirewallL7FirewallRules` - Update the MX L7 firewall rules for an MX network
* `UpdateNetworkApplianceFirewallOneToManyNatRules` - Set the 1:Many NAT mapping rules for an MX network
* `UpdateNetworkApplianceFirewallOneToOneNatRules` - Set the 1:1 NAT mapping rules for an MX network
* `UpdateNetworkApplianceFirewallPortForwardingRules` - Update the port forwarding rules for an MX network
* `UpdateNetworkApplianceFirewallSettings` - Update the firewall settings for this network
* `UpdateNetworkWirelessSsidFirewallL3FirewallRules` - Update the L3 firewall rules of an SSID on an MR network
* `UpdateNetworkWirelessSsidFirewallL7FirewallRules` - Update the L7 firewall rules of an SSID on an MR network

### FirewalledServices

* `GetNetworkApplianceFirewallFirewalledService` - Return the accessibility settings of the given service ('ICMP', 'web', or 'SNMP')
* `GetNetworkApplianceFirewallFirewalledServices` - List the appliance services and their accessibility rules
* `UpdateNetworkApplianceFirewallFirewalledService` - Updates the accessibility settings for the given service ('ICMP', 'web', or 'SNMP')

### Firmware

* `GetOrganizationFirmwareUpgrades` - Get firmware upgrade information for an organization
* `GetOrganizationFirmwareUpgradesByDevice` - Get firmware upgrade status for the filtered devices

### FirmwareUpgrades

* `CreateNetworkFirmwareUpgradesRollback` - Rollback a Firmware Upgrade For A Network
* `CreateNetworkFirmwareUpgradesStagedEvent` - Create a Staged Upgrade Event for a network
* `CreateNetworkFirmwareUpgradesStagedGroup` - Create a Staged Upgrade Group for a network
* `DeferNetworkFirmwareUpgradesStagedEvents` - Postpone by 1 week all pending staged upgrade stages for a network
* `DeleteNetworkFirmwareUpgradesStagedGroup` - Delete a Staged Upgrade Group
* `GetNetworkFirmwareUpgrades` - Get firmware upgrade information for a network
* `GetNetworkFirmwareUpgradesStagedEvents` - Get the Staged Upgrade Event from a network
* `GetNetworkFirmwareUpgradesStagedGroup` - Get a Staged Upgrade Group from a network
* `GetNetworkFirmwareUpgradesStagedGroups` - List of Staged Upgrade Groups in a network
* `GetNetworkFirmwareUpgradesStagedStages` - Order of Staged Upgrade Groups in a network
* `RollbacksNetworkFirmwareUpgradesStagedEvents` - Rollback a Staged Upgrade Event for a network
* `UpdateNetworkFirmwareUpgrades` - Update firmware upgrade information for a network
* `UpdateNetworkFirmwareUpgradesStagedEvents` - Update the Staged Upgrade Event for a network
* `UpdateNetworkFirmwareUpgradesStagedGroup` - Update a Staged Upgrade Group for a network
* `UpdateNetworkFirmwareUpgradesStagedStages` - Assign Staged Upgrade Group order in the sequence.

### FloorPlans

* `CreateNetworkFloorPlan` - Upload a floor plan
* `DeleteNetworkFloorPlan` - Destroy a floor plan
* `GetNetworkFloorPlan` - Find a floor plan by ID
* `GetNetworkFloorPlans` - List the floor plans that belong to your network
* `UpdateNetworkFloorPlan` - Update a floor plan's geolocation and other meta data

### GroupPolicies

* `CreateNetworkGroupPolicy` - Create a group policy
* `DeleteNetworkGroupPolicy` - Delete a group policy
* `GetNetworkGroupPolicies` - List the group policies in a network
* `GetNetworkGroupPolicy` - Display a group policy
* `UpdateNetworkGroupPolicy` - Update a group policy

### Groups

* `CreateNetworkFirmwareUpgradesStagedGroup` - Create a Staged Upgrade Group for a network
* `CreateOrganizationAdaptivePolicyGroup` - Creates a new adaptive policy group
* `CreateOrganizationPolicyObjectsGroup` - Creates a new Policy Object Group.
* `DeleteNetworkFirmwareUpgradesStagedGroup` - Delete a Staged Upgrade Group
* `DeleteOrganizationAdaptivePolicyGroup` - Deletes the specified adaptive policy group and any associated policies and references
* `DeleteOrganizationPolicyObjectsGroup` - Deletes a Policy Object Group.
* `GetNetworkFirmwareUpgradesStagedGroup` - Get a Staged Upgrade Group from a network
* `GetNetworkFirmwareUpgradesStagedGroups` - List of Staged Upgrade Groups in a network
* `GetOrganizationAdaptivePolicyGroup` - Returns an adaptive policy group
* `GetOrganizationAdaptivePolicyGroups` - List adaptive policy groups in a organization
* `GetOrganizationPolicyObjectsGroup` - Shows details of a Policy Object Group.
* `GetOrganizationPolicyObjectsGroups` - Lists Policy Object Groups belonging to the organization.
* `UpdateNetworkFirmwareUpgradesStagedGroup` - Update a Staged Upgrade Group for a network
* `UpdateOrganizationAdaptivePolicyGroup` - Updates an adaptive policy group
* `UpdateOrganizationPolicyObjectsGroup` - Updates a Policy Object Group.

### Health

* `GetNetworkHealthAlerts` - Return all global alerts on this network

### HealthByTime

* `GetNetworkInsightApplicationHealthByTime` - Get application health by time

### History

* `GetDeviceCameraAnalyticsZoneHistory` - Return historical records for analytic zones
* `GetNetworkAlertsHistory` - Return the alert history for this network
* `GetOrganizationSensorReadingsHistory` - Return all reported readings from sensors in a given timespan, sorted by timestamp

### Hotspot20

* `GetNetworkWirelessSsidHotspot20` - Return the Hotspot 2.0 settings for an SSID
* `UpdateNetworkWirelessSsidHotspot20` - Update the Hotspot 2.0 settings of an SSID

### HTTPServers

* `CreateNetworkWebhooksHTTPServer` - Add an HTTP server to a network
* `DeleteNetworkWebhooksHTTPServer` - Delete an HTTP server from a network
* `GetNetworkWebhooksHTTPServer` - Return an HTTP server for a network
* `GetNetworkWebhooksHTTPServers` - List the HTTP servers for a network
* `UpdateNetworkWebhooksHTTPServer` - Update an HTTP server

### Identities

* `GetAdministeredIdentitiesMe` - Returns the identity of the current user.

### IdentityPsks

* `CreateNetworkWirelessSsidIdentityPsk` - Create an Identity PSK
* `DeleteNetworkWirelessSsidIdentityPsk` - Delete an Identity PSK
* `GetNetworkWirelessSsidIdentityPsk` - Return an Identity PSK
* `GetNetworkWirelessSsidIdentityPsks` - List all Identity PSKs in a wireless network
* `UpdateNetworkWirelessSsidIdentityPsk` - Update an Identity PSK

### Idps

* `CreateOrganizationSamlIdp` - Create a SAML IdP for your organization.
* `DeleteOrganizationSamlIdp` - Remove a SAML IdP in your organization.
* `GetOrganizationSamlIdp` - Get a SAML IdP from your organization.
* `GetOrganizationSamlIdps` - List the SAML IdPs in your organization.
* `UpdateOrganizationSamlIdp` - Update a SAML IdP in your organization

### Imports

* `CreateOrganizationInventoryOnboardingCloudMonitoringImport` - Commits the import operation to complete the onboarding of a device into Dashboard for monitoring.
* `GetOrganizationInventoryOnboardingCloudMonitoringImports` - Check the status of a committed Import operation

### InboundCellularFirewallRules

* `GetNetworkApplianceFirewallInboundCellularFirewallRules` - Return the inbound cellular firewall rules for an MX network
* `UpdateNetworkApplianceFirewallInboundCellularFirewallRules` - Update the inbound cellular firewall rules of an MX network

### InboundFirewallRules

* `GetNetworkApplianceFirewallInboundFirewallRules` - Return the inbound firewall rules for an MX network
* `UpdateNetworkApplianceFirewallInboundFirewallRules` - Update the inbound firewall rules of an MX network

### Insight

* `CreateOrganizationInsightMonitoredMediaServer` - Add a media server to be monitored for this organization
* `DeleteOrganizationInsightMonitoredMediaServer` - Delete a monitored media server from this organization
* `GetNetworkInsightApplicationHealthByTime` - Get application health by time
* `GetOrganizationInsightApplications` - List all Insight tracked applications
* `GetOrganizationInsightMonitoredMediaServer` - Return a monitored media server for this organization
* `GetOrganizationInsightMonitoredMediaServers` - List the monitored media servers for this organization
* `UpdateOrganizationInsightMonitoredMediaServer` - Update a monitored media server for this organization

### Interfaces

* `CreateDeviceSwitchRoutingInterface` - Create a layer 3 interface for a switch
* `CreateNetworkSwitchStackRoutingInterface` - Create a layer 3 interface for a switch stack
* `DeleteDeviceSwitchRoutingInterface` - Delete a layer 3 interface from the switch
* `DeleteNetworkSwitchStackRoutingInterface` - Delete a layer 3 interface from a switch stack
* `GetDeviceSwitchRoutingInterface` - Return a layer 3 interface for a switch
* `GetDeviceSwitchRoutingInterfaceDhcp` - Return a layer 3 interface DHCP configuration for a switch
* `GetDeviceSwitchRoutingInterfaces` - List layer 3 interfaces for a switch
* `GetNetworkSwitchStackRoutingInterface` - Return a layer 3 interface from a switch stack
* `GetNetworkSwitchStackRoutingInterfaceDhcp` - Return a layer 3 interface DHCP configuration for a switch stack
* `GetNetworkSwitchStackRoutingInterfaces` - List layer 3 interfaces for a switch stack
* `UpdateDeviceSwitchRoutingInterface` - Update a layer 3 interface for a switch
* `UpdateDeviceSwitchRoutingInterfaceDhcp` - Update a layer 3 interface DHCP configuration for a switch
* `UpdateNetworkSwitchStackRoutingInterface` - Update a layer 3 interface for a switch stack
* `UpdateNetworkSwitchStackRoutingInterfaceDhcp` - Update a layer 3 interface DHCP configuration for a switch stack

### Intrusion

* `GetNetworkApplianceSecurityIntrusion` - Returns all supported intrusion settings for an MX network
* `GetOrganizationApplianceSecurityIntrusion` - Returns all supported intrusion settings for an organization
* `UpdateNetworkApplianceSecurityIntrusion` - Set the supported intrusion settings for an MX network
* `UpdateOrganizationApplianceSecurityIntrusion` - Sets supported intrusion settings for an organization

### Inventory

* `ClaimIntoOrganizationInventory` - Claim a list of devices, licenses, and/or orders into an organization inventory
* `CreateOrganizationInventoryOnboardingCloudMonitoringImport` - Commits the import operation to complete the onboarding of a device into Dashboard for monitoring.
* `CreateOrganizationInventoryOnboardingCloudMonitoringPrepare` - Initiates or updates an import session
* `GetOrganizationInventoryDevice` - Return a single device from the inventory of an organization
* `GetOrganizationInventoryDevices` - Return the device inventory for an organization
* `GetOrganizationInventoryOnboardingCloudMonitoringImports` - Check the status of a committed Import operation
* `ReleaseFromOrganizationInventory` - Release a list of claimed devices from an organization.

### L3FirewallRules

* `GetNetworkApplianceFirewallL3FirewallRules` - Return the L3 firewall rules for an MX network
* `GetNetworkWirelessSsidFirewallL3FirewallRules` - Return the L3 firewall rules for an SSID on an MR network
* `UpdateNetworkApplianceFirewallL3FirewallRules` - Update the L3 firewall rules of an MX network
* `UpdateNetworkWirelessSsidFirewallL3FirewallRules` - Update the L3 firewall rules of an SSID on an MR network

### L7FirewallRules

* `GetNetworkApplianceFirewallL7FirewallRules` - List the MX L7 firewall rules for an MX network
* `GetNetworkApplianceFirewallL7FirewallRulesApplicationCategories` - Return the L7 firewall application categories and their associated applications for an MX network
* `GetNetworkWirelessSsidFirewallL7FirewallRules` - Return the L7 firewall rules for an SSID on an MR network
* `UpdateNetworkApplianceFirewallL7FirewallRules` - Update the MX L7 firewall rules for an MX network
* `UpdateNetworkWirelessSsidFirewallL7FirewallRules` - Update the L7 firewall rules of an SSID on an MR network

### Lan

* `GetDeviceCellularGatewayLan` - Show the LAN Settings of a MG
* `UpdateDeviceCellularGatewayLan` - Update the LAN Settings for a single MG.

### LatencyHistory

* `GetNetworkWirelessClientLatencyHistory` - Return the latency history for a client
* `GetNetworkWirelessLatencyHistory` - Return average wireless latency over time for a network, device, or network client

### LatencyStats

* `GetDeviceWirelessLatencyStats` - Aggregated latency info for a given AP on this network
* `GetNetworkWirelessClientLatencyStats` - Aggregated latency info for a given client on this network
* `GetNetworkWirelessClientsLatencyStats` - Aggregated latency info for this network, grouped by clients
* `GetNetworkWirelessDevicesLatencyStats` - Aggregated latency info for this network, grouped by node
* `GetNetworkWirelessLatencyStats` - Aggregated latency info for this network

### Latest

* `GetOrganizationSensorReadingsLatest` - Return the latest available reading for each metric from each sensor, sorted by sensor serial

### Licenses

* `AssignOrganizationLicensesSeats` - Assign SM seats to a network
* `GetOrganizationLicense` - Display a license
* `GetOrganizationLicenses` - List the licenses for an organization
* `GetOrganizationLicensesOverview` - Return an overview of the license state for an organization
* `GetOrganizationLicensingCotermLicenses` - List the licenses in a coterm organization
* `MoveOrganizationLicenses` - Move licenses to another organization
* `MoveOrganizationLicensesSeats` - Move SM seats to another organization
* `MoveOrganizationLicensingCotermLicenses` - Moves a license to a different organization (coterm only)
* `RenewOrganizationLicensesSeats` - Renew SM seats of a license
* `UpdateOrganizationLicense` - Update a license

### Licensing

* `GetOrganizationLicensingCotermLicenses` - List the licenses in a coterm organization
* `MoveOrganizationLicensingCotermLicenses` - Moves a license to a different organization (coterm only)

### LinkAggregations

* `CreateNetworkSwitchLinkAggregation` - Create a link aggregation group
* `DeleteNetworkSwitchLinkAggregation` - Split a link aggregation group into separate ports
* `GetNetworkSwitchLinkAggregations` - List link aggregation groups
* `UpdateNetworkSwitchLinkAggregation` - Update a link aggregation group

### LinkLayer

* `GetNetworkTopologyLinkLayer` - List the LLDP and CDP information for all discovered devices and connections in a network.

### Live

* `GetDeviceCameraAnalyticsLive` - Returns live state from camera of analytics zones

### LiveTools

* `BlinkDeviceLeds` - Blink the LEDs on a device
* `CreateDeviceLiveToolsPing` - Enqueue a job to ping a target host from the device
* `CreateDeviceLiveToolsPingDevice` - Enqueue a job to check connectivity status to the device
* `CycleDeviceSwitchPorts` - Cycle a set of switch ports
* `GetDeviceLiveToolsPing` - Return a ping job
* `GetDeviceLiveToolsPingDevice` - Return a ping device job
* `RebootDevice` - Reboot a device

### LldpCdp

* `GetDeviceLldpCdp` - List LLDP and CDP information for a device

### LoginSecurity

* `GetOrganizationLoginSecurity` - Returns the login security settings for an organization.
* `UpdateOrganizationLoginSecurity` - Update the login security settings for an organization

### Logs

* `GetOrganizationWebhooksLogs` - Return the log of webhook POSTs sent

### LossAndLatencyHistory

* `GetDeviceLossAndLatencyHistory` - Get the uplink loss percentage and latency in milliseconds, and goodput in kilobits per second for a wired network device.

### Malware

* `GetNetworkApplianceSecurityMalware` - Returns all supported malware settings for an MX network
* `UpdateNetworkApplianceSecurityMalware` - Set the supported malware settings for an MX network

### ManagementInterface

* `GetDeviceManagementInterface` - Return the management interface settings for a device
* `UpdateDeviceManagementInterface` - Update the management interface settings for a device

### Manufacturers

* `GetOrganizationSummaryTopClientsManufacturersByUsage` - Return metrics for organization's top clients by data usage (in mb) over given time range, grouped by manufacturer.

### Me

* `GetAdministeredIdentitiesMe` - Returns the identity of the current user.

### MerakiAuthUsers

* `CreateNetworkMerakiAuthUser` - Authorize a user configured with Meraki Authentication for a network (currently supports 802.1X, splash guest, and client VPN users, and currently, organizations have a 50,000 user cap)
* `DeleteNetworkMerakiAuthUser` - Deauthorize a user
* `GetNetworkMerakiAuthUser` - Return the Meraki Auth splash guest, RADIUS, or client VPN user
* `GetNetworkMerakiAuthUsers` - List the users configured under Meraki Authentication for a network (splash guest or RADIUS users for a wireless network, or client VPN users for a wired network)
* `UpdateNetworkMerakiAuthUser` - Update a user configured with Meraki Authentication (currently, 802.1X RADIUS, splash guest, and client VPN users can be updated)

### MeshStatuses

* `GetNetworkWirelessMeshStatuses` - List wireless mesh statuses for repeaters

### Models

* `GetOrganizationSummaryTopDevicesModelsByUsage` - Return metrics for organization's top 10 device models sorted by data usage over given time range

### Monitor

* `GenerateDeviceCameraSnapshot` - Generate a snapshot of what the camera sees at the specified time and return a link to that image.
* `GetAdministeredIdentitiesMe` - Returns the identity of the current user.
* `GetDeviceApplianceDhcpSubnets` - Return the DHCP subnet information for an appliance
* `GetDeviceAppliancePerformance` - Return the performance score for a single MX
* `GetDeviceAppliancePrefixesDelegated` - Return current delegated IPv6 prefixes on an appliance.
* `GetDeviceAppliancePrefixesDelegatedVlanAssignments` - Return prefixes assigned to all IPv6 enabled VLANs on an appliance.
* `GetDeviceCameraAnalyticsLive` - Returns live state from camera of analytics zones
* `GetDeviceCameraAnalyticsOverview` - Returns an overview of aggregate analytics data for a timespan
* `GetDeviceCameraAnalyticsRecent` - Returns most recent record for analytics zones
* `GetDeviceCameraAnalyticsZoneHistory` - Return historical records for analytic zones
* `GetDeviceCameraAnalyticsZones` - Returns all configured analytic zones for this camera
* `GetDeviceClients` - List the clients of a device, up to a maximum of a month ago
* `GetDeviceLldpCdp` - List LLDP and CDP information for a device
* `GetDeviceLossAndLatencyHistory` - Get the uplink loss percentage and latency in milliseconds, and goodput in kilobits per second for a wired network device.
* `GetDeviceSwitchPortsStatuses` - Return the status for all the ports of a switch
* `GetDeviceSwitchPortsStatusesPackets` - Return the packet counters for all the ports of a switch
* `GetDeviceWirelessConnectionStats` - Aggregated connectivity info for a given AP on this network
* `GetDeviceWirelessLatencyStats` - Aggregated latency info for a given AP on this network
* `GetDeviceWirelessStatus` - Return the SSID statuses of an access point
* `GetNetworkAlertsHistory` - Return the alert history for this network
* `GetNetworkApplianceClientSecurityEvents` - List the security events for a client
* `GetNetworkApplianceSecurityEvents` - List the security events for a network
* `GetNetworkApplianceUplinksUsageHistory` - Get the sent and received bytes for each uplink of a network.
* `GetNetworkBluetoothClient` - Return a Bluetooth client
* `GetNetworkBluetoothClients` - List the Bluetooth clients seen by APs in this network
* `GetNetworkClient` - Return the client associated with the given identifier
* `GetNetworkClientTrafficHistory` - Return the client's network traffic data over time
* `GetNetworkClientUsageHistory` - Return the client's daily usage history
* `GetNetworkClients` - List the clients that have used this network in the timespan
* `GetNetworkClientsApplicationUsage` - Return the application usage data for clients
* `GetNetworkClientsBandwidthUsageHistory` - Returns a timeseries of total traffic consumption rates for all clients on a network within a given timespan, in megabits per second.
* `GetNetworkClientsOverview` - Return overview statistics for network clients
* `GetNetworkClientsUsageHistories` - Return the usage histories for clients
* `GetNetworkEvents` - List the events for the network
* `GetNetworkEventsEventTypes` - List the event type to human-readable description
* `GetNetworkInsightApplicationHealthByTime` - Get application health by time
* `GetNetworkNetworkHealthChannelUtilization` - Get the channel utilization over each radio for all APs in a network.
* `GetNetworkSensorAlertsCurrentOverviewByMetric` - Return an overview of currently alerting sensors by metric
* `GetNetworkSensorAlertsOverviewByMetric` - Return an overview of alert occurrences over a timespan, by metric
* `GetNetworkSmDeviceCellularUsageHistory` - Return the client's daily cellular data usage history
* `GetNetworkSmDeviceConnectivity` - Returns historical connectivity data (whether a device is regularly checking in to Dashboard).
* `GetNetworkSmDeviceDesktopLogs` - Return historical records of various Systems Manager network connection details for desktop devices.
* `GetNetworkSmDeviceDeviceCommandLogs` - Return historical records of commands sent to Systems Manager devices
* `GetNetworkSmDevicePerformanceHistory` - Return historical records of various Systems Manager client metrics for desktop devices.
* `GetNetworkSplashLoginAttempts` - List the splash login attempts for a network
* `GetNetworkTopologyLinkLayer` - List the LLDP and CDP information for all discovered devices and connections in a network.
* `GetNetworkTraffic` - Return the traffic analysis data for this network
* `GetNetworkWirelessAirMarshal` - List Air Marshal scan results from a network
* `GetNetworkWirelessChannelUtilizationHistory` - Return AP channel utilization over time for a device or network client
* `GetNetworkWirelessClientConnectionStats` - Aggregated connectivity info for a given client on this network
* `GetNetworkWirelessClientConnectivityEvents` - List the wireless connectivity events for a client within a network in the timespan.
* `GetNetworkWirelessClientCountHistory` - Return wireless client counts over time for a network, device, or network client
* `GetNetworkWirelessClientLatencyHistory` - Return the latency history for a client
* `GetNetworkWirelessClientLatencyStats` - Aggregated latency info for a given client on this network
* `GetNetworkWirelessClientsConnectionStats` - Aggregated connectivity info for this network, grouped by clients
* `GetNetworkWirelessClientsLatencyStats` - Aggregated latency info for this network, grouped by clients
* `GetNetworkWirelessConnectionStats` - Aggregated connectivity info for this network
* `GetNetworkWirelessDataRateHistory` - Return PHY data rates over time for a network, device, or network client
* `GetNetworkWirelessDevicesConnectionStats` - Aggregated connectivity info for this network, grouped by node
* `GetNetworkWirelessDevicesLatencyStats` - Aggregated latency info for this network, grouped by node
* `GetNetworkWirelessFailedConnections` - List of all failed client connection events on this network in a given time range
* `GetNetworkWirelessLatencyHistory` - Return average wireless latency over time for a network, device, or network client
* `GetNetworkWirelessLatencyStats` - Aggregated latency info for this network
* `GetNetworkWirelessMeshStatuses` - List wireless mesh statuses for repeaters
* `GetNetworkWirelessSignalQualityHistory` - Return signal quality (SNR/RSSI) over time for a device or network client
* `GetNetworkWirelessUsageHistory` - Return AP usage over time for a device or network client
* `GetOrganizationAdaptivePolicyOverview` - Returns adaptive policy aggregate statistics for an organization
* `GetOrganizationAPIRequests` - List the API requests made by an organization
* `GetOrganizationAPIRequestsOverview` - Return an aggregated overview of API requests data
* `GetOrganizationAPIRequestsOverviewResponseCodesByInterval` - Tracks organizations' API requests by response code across a given time period
* `GetOrganizationApplianceSecurityEvents` - List the security events for an organization
* `GetOrganizationApplianceUplinkStatuses` - List the uplink status of every Meraki MX and Z series appliances in the organization
* `GetOrganizationApplianceVpnStats` - Show VPN history stat for networks in an organization
* `GetOrganizationApplianceVpnStatuses` - Show VPN status for networks in an organization
* `GetOrganizationCellularGatewayUplinkStatuses` - List the uplink status of every Meraki MG cellular gateway in the organization
* `GetOrganizationClientsBandwidthUsageHistory` - Return data usage (in megabits per second) over time for all clients in the given organization within a given time range.
* `GetOrganizationClientsOverview` - Return summary information around client data usage (in mb) across the given organization.
* `GetOrganizationConfigurationChanges` - View the Change Log for your organization
* `GetOrganizationDevicesAvailabilities` - List the availability information for devices in an organization
* `GetOrganizationDevicesPowerModulesStatusesByDevice` - List the power status information for devices in an organization
* `GetOrganizationDevicesStatuses` - List the status of every Meraki device in the organization
* `GetOrganizationDevicesStatusesOverview` - Return an overview of current device statuses
* `GetOrganizationDevicesUplinksAddressesByDevice` - List the current uplink addresses for devices in an organization.
* `GetOrganizationDevicesUplinksLossAndLatency` - Return the uplink loss and latency for every MX in the organization from at latest 2 minutes ago
* `GetOrganizationLicensesOverview` - Return an overview of the license state for an organization
* `GetOrganizationOpenapiSpec` - Return the OpenAPI 2.0 Specification of the organization's API documentation in JSON
* `GetOrganizationSensorReadingsHistory` - Return all reported readings from sensors in a given timespan, sorted by timestamp
* `GetOrganizationSensorReadingsLatest` - Return the latest available reading for each metric from each sensor, sorted by sensor serial
* `GetOrganizationSummaryTopAppliancesByUtilization` - Return the top 10 appliances sorted by utilization over given time range.
* `GetOrganizationSummaryTopClientsByUsage` - Return metrics for organization's top 10 clients by data usage (in mb) over given time range.
* `GetOrganizationSummaryTopClientsManufacturersByUsage` - Return metrics for organization's top clients by data usage (in mb) over given time range, grouped by manufacturer.
* `GetOrganizationSummaryTopDevicesByUsage` - Return metrics for organization's top 10 devices sorted by data usage over given time range
* `GetOrganizationSummaryTopDevicesModelsByUsage` - Return metrics for organization's top 10 device models sorted by data usage over given time range
* `GetOrganizationSummaryTopSsidsByUsage` - Return metrics for organization's top 10 ssids by data usage over given time range
* `GetOrganizationSummaryTopSwitchesByEnergyUsage` - Return metrics for organization's top 10 switches by energy usage over given time range
* `GetOrganizationUplinksStatuses` - List the uplink status of every Meraki MX, MG and Z series devices in the organization
* `GetOrganizationWebhooksAlertTypes` - Return a list of alert types to be used with managing webhook alerts
* `GetOrganizationWebhooksLogs` - Return the log of webhook POSTs sent

### MonitoredMediaServers

* `CreateOrganizationInsightMonitoredMediaServer` - Add a media server to be monitored for this organization
* `DeleteOrganizationInsightMonitoredMediaServer` - Delete a monitored media server from this organization
* `GetOrganizationInsightMonitoredMediaServer` - Return a monitored media server for this organization
* `GetOrganizationInsightMonitoredMediaServers` - List the monitored media servers for this organization
* `UpdateOrganizationInsightMonitoredMediaServer` - Update a monitored media server for this organization

### MqttBrokers

* `CreateNetworkMqttBroker` - Add an MQTT broker
* `DeleteNetworkMqttBroker` - Delete an MQTT broker
* `GetNetworkMqttBroker` - Return an MQTT broker
* `GetNetworkMqttBrokers` - List the MQTT brokers for this network
* `UpdateNetworkMqttBroker` - Update an MQTT broker

### Mtu

* `GetNetworkSwitchMtu` - Return the MTU configuration
* `UpdateNetworkSwitchMtu` - Update the MTU configuration

### Multicast

* `CreateNetworkSwitchRoutingMulticastRendezvousPoint` - Create a multicast rendezvous point
* `DeleteNetworkSwitchRoutingMulticastRendezvousPoint` - Delete a multicast rendezvous point
* `GetNetworkSwitchRoutingMulticast` - Return multicast settings for a network
* `GetNetworkSwitchRoutingMulticastRendezvousPoint` - Return a multicast rendezvous point
* `GetNetworkSwitchRoutingMulticastRendezvousPoints` - List multicast rendezvous points
* `UpdateNetworkSwitchRoutingMulticast` - Update multicast settings for a network
* `UpdateNetworkSwitchRoutingMulticastRendezvousPoint` - Update a multicast rendezvous point

### Netflow

* `GetNetworkNetflow` - Return the NetFlow traffic reporting settings for a network
* `UpdateNetworkNetflow` - Update the NetFlow traffic reporting settings for a network

### NetworkAdapters

* `GetNetworkSmDeviceNetworkAdapters` - List the network adapters of a device

### NetworkHealth

* `GetNetworkNetworkHealthChannelUtilization` - Get the channel utilization over each radio for all APs in a network.

### Networks

* `BindNetwork` - Bind a network to a template.
* `ClaimNetworkDevices` - Claim devices into a network. (Note: for recently claimed devices, it may take a few minutes for API requsts against that device to succeed)
* `CombineOrganizationNetworks` - Combine multiple networks into a single network
* `CreateNetworkFirmwareUpgradesRollback` - Rollback a Firmware Upgrade For A Network
* `CreateNetworkFirmwareUpgradesStagedEvent` - Create a Staged Upgrade Event for a network
* `CreateNetworkFirmwareUpgradesStagedGroup` - Create a Staged Upgrade Group for a network
* `CreateNetworkFloorPlan` - Upload a floor plan
* `CreateNetworkGroupPolicy` - Create a group policy
* `CreateNetworkMerakiAuthUser` - Authorize a user configured with Meraki Authentication for a network (currently supports 802.1X, splash guest, and client VPN users, and currently, organizations have a 50,000 user cap)
* `CreateNetworkMqttBroker` - Add an MQTT broker
* `CreateNetworkPiiRequest` - Submit a new delete or restrict processing PII request
* `CreateNetworkWebhooksHTTPServer` - Add an HTTP server to a network
* `CreateNetworkWebhooksPayloadTemplate` - Create a webhook payload template for a network
* `CreateNetworkWebhooksWebhookTest` - Send a test webhook for a network
* `CreateOrganizationNetwork` - Create a network
* `DeferNetworkFirmwareUpgradesStagedEvents` - Postpone by 1 week all pending staged upgrade stages for a network
* `DeleteNetwork` - Delete a network
* `DeleteNetworkFirmwareUpgradesStagedGroup` - Delete a Staged Upgrade Group
* `DeleteNetworkFloorPlan` - Destroy a floor plan
* `DeleteNetworkGroupPolicy` - Delete a group policy
* `DeleteNetworkMerakiAuthUser` - Deauthorize a user
* `DeleteNetworkMqttBroker` - Delete an MQTT broker
* `DeleteNetworkPiiRequest` - Delete a restrict processing PII request
* `DeleteNetworkWebhooksHTTPServer` - Delete an HTTP server from a network
* `DeleteNetworkWebhooksPayloadTemplate` - Destroy a webhook payload template for a network
* `GetNetwork` - Return a network
* `GetNetworkAlertsHistory` - Return the alert history for this network
* `GetNetworkAlertsSettings` - Return the alert configuration for this network
* `GetNetworkBluetoothClient` - Return a Bluetooth client
* `GetNetworkBluetoothClients` - List the Bluetooth clients seen by APs in this network
* `GetNetworkClient` - Return the client associated with the given identifier
* `GetNetworkClientPolicy` - Return the policy assigned to a client on the network
* `GetNetworkClientSplashAuthorizationStatus` - Return the splash authorization for a client, for each SSID they've associated with through splash
* `GetNetworkClientTrafficHistory` - Return the client's network traffic data over time
* `GetNetworkClientUsageHistory` - Return the client's daily usage history
* `GetNetworkClients` - List the clients that have used this network in the timespan
* `GetNetworkClientsApplicationUsage` - Return the application usage data for clients
* `GetNetworkClientsBandwidthUsageHistory` - Returns a timeseries of total traffic consumption rates for all clients on a network within a given timespan, in megabits per second.
* `GetNetworkClientsOverview` - Return overview statistics for network clients
* `GetNetworkClientsUsageHistories` - Return the usage histories for clients
* `GetNetworkDevices` - List the devices in a network
* `GetNetworkEvents` - List the events for the network
* `GetNetworkEventsEventTypes` - List the event type to human-readable description
* `GetNetworkFirmwareUpgrades` - Get firmware upgrade information for a network
* `GetNetworkFirmwareUpgradesStagedEvents` - Get the Staged Upgrade Event from a network
* `GetNetworkFirmwareUpgradesStagedGroup` - Get a Staged Upgrade Group from a network
* `GetNetworkFirmwareUpgradesStagedGroups` - List of Staged Upgrade Groups in a network
* `GetNetworkFirmwareUpgradesStagedStages` - Order of Staged Upgrade Groups in a network
* `GetNetworkFloorPlan` - Find a floor plan by ID
* `GetNetworkFloorPlans` - List the floor plans that belong to your network
* `GetNetworkGroupPolicies` - List the group policies in a network
* `GetNetworkGroupPolicy` - Display a group policy
* `GetNetworkHealthAlerts` - Return all global alerts on this network
* `GetNetworkMerakiAuthUser` - Return the Meraki Auth splash guest, RADIUS, or client VPN user
* `GetNetworkMerakiAuthUsers` - List the users configured under Meraki Authentication for a network (splash guest or RADIUS users for a wireless network, or client VPN users for a wired network)
* `GetNetworkMqttBroker` - Return an MQTT broker
* `GetNetworkMqttBrokers` - List the MQTT brokers for this network
* `GetNetworkNetflow` - Return the NetFlow traffic reporting settings for a network
* `GetNetworkNetworkHealthChannelUtilization` - Get the channel utilization over each radio for all APs in a network.
* `GetNetworkPiiPiiKeys` - List the keys required to access Personally Identifiable Information (PII) for a given identifier
* `GetNetworkPiiRequest` - Return a PII request
* `GetNetworkPiiRequests` - List the PII requests for this network or organization
* `GetNetworkPiiSmDevicesForKey` - Given a piece of Personally Identifiable Information (PII), return the Systems Manager device ID(s) associated with that identifier
* `GetNetworkPiiSmOwnersForKey` - Given a piece of Personally Identifiable Information (PII), return the Systems Manager owner ID(s) associated with that identifier
* `GetNetworkPoliciesByClient` - Get policies for all clients with policies
* `GetNetworkSettings` - Return the settings for a network
* `GetNetworkSnmp` - Return the SNMP settings for a network
* `GetNetworkSplashLoginAttempts` - List the splash login attempts for a network
* `GetNetworkSyslogServers` - List the syslog servers for a network
* `GetNetworkTopologyLinkLayer` - List the LLDP and CDP information for all discovered devices and connections in a network.
* `GetNetworkTraffic` - Return the traffic analysis data for this network
* `GetNetworkTrafficAnalysis` - Return the traffic analysis settings for a network
* `GetNetworkTrafficShapingApplicationCategories` - Returns the application categories for traffic shaping rules.
* `GetNetworkTrafficShapingDscpTaggingOptions` - Returns the available DSCP tagging options for your traffic shaping rules.
* `GetNetworkWebhooksHTTPServer` - Return an HTTP server for a network
* `GetNetworkWebhooksHTTPServers` - List the HTTP servers for a network
* `GetNetworkWebhooksPayloadTemplate` - Get the webhook payload template for a network
* `GetNetworkWebhooksPayloadTemplates` - List the webhook payload templates for a network
* `GetNetworkWebhooksWebhookTest` - Return the status of a webhook test for a network
* `GetOrganizationNetworks` - List the networks that the user has privileges on in an organization
* `ProvisionNetworkClients` - Provisions a client with a name and policy
* `RemoveNetworkDevices` - Remove a single device
* `RollbacksNetworkFirmwareUpgradesStagedEvents` - Rollback a Staged Upgrade Event for a network
* `SplitNetwork` - Split a combined network into individual networks for each type of device
* `UnbindNetwork` - Unbind a network from a template.
* `UpdateNetwork` - Update a network
* `UpdateNetworkAlertsSettings` - Update the alert configuration for this network
* `UpdateNetworkClientPolicy` - Update the policy assigned to a client on the network
* `UpdateNetworkClientSplashAuthorizationStatus` - Update a client's splash authorization
* `UpdateNetworkFirmwareUpgrades` - Update firmware upgrade information for a network
* `UpdateNetworkFirmwareUpgradesStagedEvents` - Update the Staged Upgrade Event for a network
* `UpdateNetworkFirmwareUpgradesStagedGroup` - Update a Staged Upgrade Group for a network
* `UpdateNetworkFirmwareUpgradesStagedStages` - Assign Staged Upgrade Group order in the sequence.
* `UpdateNetworkFloorPlan` - Update a floor plan's geolocation and other meta data
* `UpdateNetworkGroupPolicy` - Update a group policy
* `UpdateNetworkMerakiAuthUser` - Update a user configured with Meraki Authentication (currently, 802.1X RADIUS, splash guest, and client VPN users can be updated)
* `UpdateNetworkMqttBroker` - Update an MQTT broker
* `UpdateNetworkNetflow` - Update the NetFlow traffic reporting settings for a network
* `UpdateNetworkSettings` - Update the settings for a network
* `UpdateNetworkSnmp` - Update the SNMP settings for a network
* `UpdateNetworkSyslogServers` - Update the syslog servers for a network
* `UpdateNetworkTrafficAnalysis` - Update the traffic analysis settings for a network
* `UpdateNetworkWebhooksHTTPServer` - Update an HTTP server
* `UpdateNetworkWebhooksPayloadTemplate` - Update a webhook payload template for a network
* `VmxNetworkDevicesClaim` - Claim a vMX into a network

### ObjectDetectionModels

* `GetDeviceCameraSenseObjectDetectionModels` - Returns the MV Sense object detection model list for the given camera

### Onboarding

* `CreateOrganizationInventoryOnboardingCloudMonitoringImport` - Commits the import operation to complete the onboarding of a device into Dashboard for monitoring.
* `CreateOrganizationInventoryOnboardingCloudMonitoringPrepare` - Initiates or updates an import session
* `GetOrganizationCameraOnboardingStatuses` - Fetch onboarding status of cameras
* `GetOrganizationInventoryOnboardingCloudMonitoringImports` - Check the status of a committed Import operation
* `UpdateOrganizationCameraOnboardingStatuses` - Notify that credential handoff to camera has completed

### OneToManyNatRules

* `GetNetworkApplianceFirewallOneToManyNatRules` - Return the 1:Many NAT mapping rules for an MX network
* `UpdateNetworkApplianceFirewallOneToManyNatRules` - Set the 1:Many NAT mapping rules for an MX network

### OneToOneNatRules

* `GetNetworkApplianceFirewallOneToOneNatRules` - Return the 1:1 NAT mapping rules for an MX network
* `UpdateNetworkApplianceFirewallOneToOneNatRules` - Set the 1:1 NAT mapping rules for an MX network

### OpenapiSpec

* `GetOrganizationOpenapiSpec` - Return the OpenAPI 2.0 Specification of the organization's API documentation in JSON

### OptIns

* `CreateOrganizationEarlyAccessFeaturesOptIn` - Create a new early access feature opt-in for an organization
* `DeleteOrganizationEarlyAccessFeaturesOptIn` - Delete an early access feature opt-in
* `GetOrganizationEarlyAccessFeaturesOptIn` - Show an early access feature opt-in for an organization
* `GetOrganizationEarlyAccessFeaturesOptIns` - List the early access feature opt-ins for an organization
* `UpdateOrganizationEarlyAccessFeaturesOptIn` - Update an early access feature opt-in for an organization

### Order

* `GetNetworkSwitchQosRulesOrder` - Return the quality of service rule IDs by order in which they will be processed by the switch
* `UpdateNetworkSwitchQosRulesOrder` - Update the order in which the rules should be processed by the switch

### Organizations

* `AssignOrganizationLicensesSeats` - Assign SM seats to a network
* `ClaimIntoOrganization` - Claim a list of devices, licenses, and/or orders into an organization
* `ClaimIntoOrganizationInventory` - Claim a list of devices, licenses, and/or orders into an organization inventory
* `CloneOrganization` - Create a new organization by cloning the addressed organization
* `CombineOrganizationNetworks` - Combine multiple networks into a single network
* `CreateOrganization` - Create a new organization
* `CreateOrganizationActionBatch` - Create an action batch
* `CreateOrganizationAdaptivePolicyACL` - Creates new adaptive policy ACL
* `CreateOrganizationAdaptivePolicyGroup` - Creates a new adaptive policy group
* `CreateOrganizationAdaptivePolicyPolicy` - Add an Adaptive Policy
* `CreateOrganizationAdmin` - Create a new dashboard administrator
* `CreateOrganizationAlertsProfile` - Create an organization-wide alert configuration
* `CreateOrganizationBrandingPolicy` - Add a new branding policy to an organization
* `CreateOrganizationConfigTemplate` - Create a new configuration template
* `CreateOrganizationEarlyAccessFeaturesOptIn` - Create a new early access feature opt-in for an organization
* `CreateOrganizationInventoryOnboardingCloudMonitoringImport` - Commits the import operation to complete the onboarding of a device into Dashboard for monitoring.
* `CreateOrganizationInventoryOnboardingCloudMonitoringPrepare` - Initiates or updates an import session
* `CreateOrganizationNetwork` - Create a network
* `CreateOrganizationPolicyObject` - Creates a new Policy Object.
* `CreateOrganizationPolicyObjectsGroup` - Creates a new Policy Object Group.
* `CreateOrganizationSamlIdp` - Create a SAML IdP for your organization.
* `CreateOrganizationSamlRole` - Create a SAML role
* `DeleteOrganization` - Delete an organization
* `DeleteOrganizationActionBatch` - Delete an action batch
* `DeleteOrganizationAdaptivePolicyACL` - Deletes the specified adaptive policy ACL
* `DeleteOrganizationAdaptivePolicyGroup` - Deletes the specified adaptive policy group and any associated policies and references
* `DeleteOrganizationAdaptivePolicyPolicy` - Delete an Adaptive Policy
* `DeleteOrganizationAdmin` - Revoke all access for a dashboard administrator within this organization
* `DeleteOrganizationAlertsProfile` - Removes an organization-wide alert config
* `DeleteOrganizationBrandingPolicy` - Delete a branding policy
* `DeleteOrganizationConfigTemplate` - Remove a configuration template
* `DeleteOrganizationEarlyAccessFeaturesOptIn` - Delete an early access feature opt-in
* `DeleteOrganizationPolicyObject` - Deletes a Policy Object.
* `DeleteOrganizationPolicyObjectsGroup` - Deletes a Policy Object Group.
* `DeleteOrganizationSamlIdp` - Remove a SAML IdP in your organization.
* `DeleteOrganizationSamlRole` - Remove a SAML role
* `DeleteOrganizationUser` - Delete a user and all of its authentication methods.
* `GetOrganization` - Return an organization
* `GetOrganizationActionBatch` - Return an action batch
* `GetOrganizationActionBatches` - Return the list of action batches in the organization
* `GetOrganizationAdaptivePolicyACL` - Returns the adaptive policy ACL information
* `GetOrganizationAdaptivePolicyAcls` - List adaptive policy ACLs in a organization
* `GetOrganizationAdaptivePolicyGroup` - Returns an adaptive policy group
* `GetOrganizationAdaptivePolicyGroups` - List adaptive policy groups in a organization
* `GetOrganizationAdaptivePolicyOverview` - Returns adaptive policy aggregate statistics for an organization
* `GetOrganizationAdaptivePolicyPolicies` - List adaptive policies in an organization
* `GetOrganizationAdaptivePolicyPolicy` - Return an adaptive policy
* `GetOrganizationAdaptivePolicySettings` - Returns global adaptive policy settings in an organization
* `GetOrganizationAdmins` - List the dashboard administrators in this organization
* `GetOrganizationAlertsProfiles` - List all organization-wide alert configurations
* `GetOrganizationAPIRequests` - List the API requests made by an organization
* `GetOrganizationAPIRequestsOverview` - Return an aggregated overview of API requests data
* `GetOrganizationAPIRequestsOverviewResponseCodesByInterval` - Tracks organizations' API requests by response code across a given time period
* `GetOrganizationBrandingPolicies` - List the branding policies of an organization
* `GetOrganizationBrandingPoliciesPriorities` - Return the branding policy IDs of an organization in priority order
* `GetOrganizationBrandingPolicy` - Return a branding policy
* `GetOrganizationClientsBandwidthUsageHistory` - Return data usage (in megabits per second) over time for all clients in the given organization within a given time range.
* `GetOrganizationClientsOverview` - Return summary information around client data usage (in mb) across the given organization.
* `GetOrganizationClientsSearch` - Return the client details in an organization
* `GetOrganizationConfigTemplate` - Return a single configuration template
* `GetOrganizationConfigTemplates` - List the configuration templates for this organization
* `GetOrganizationConfigurationChanges` - View the Change Log for your organization
* `GetOrganizationDevices` - List the devices in an organization
* `GetOrganizationDevicesAvailabilities` - List the availability information for devices in an organization
* `GetOrganizationDevicesPowerModulesStatusesByDevice` - List the power status information for devices in an organization
* `GetOrganizationDevicesStatuses` - List the status of every Meraki device in the organization
* `GetOrganizationDevicesStatusesOverview` - Return an overview of current device statuses
* `GetOrganizationDevicesUplinksAddressesByDevice` - List the current uplink addresses for devices in an organization.
* `GetOrganizationDevicesUplinksLossAndLatency` - Return the uplink loss and latency for every MX in the organization from at latest 2 minutes ago
* `GetOrganizationEarlyAccessFeatures` - List the available early access features for organization
* `GetOrganizationEarlyAccessFeaturesOptIn` - Show an early access feature opt-in for an organization
* `GetOrganizationEarlyAccessFeaturesOptIns` - List the early access feature opt-ins for an organization
* `GetOrganizationFirmwareUpgrades` - Get firmware upgrade information for an organization
* `GetOrganizationFirmwareUpgradesByDevice` - Get firmware upgrade status for the filtered devices
* `GetOrganizationInventoryDevice` - Return a single device from the inventory of an organization
* `GetOrganizationInventoryDevices` - Return the device inventory for an organization
* `GetOrganizationInventoryOnboardingCloudMonitoringImports` - Check the status of a committed Import operation
* `GetOrganizationLicense` - Display a license
* `GetOrganizationLicenses` - List the licenses for an organization
* `GetOrganizationLicensesOverview` - Return an overview of the license state for an organization
* `GetOrganizationLicensingCotermLicenses` - List the licenses in a coterm organization
* `GetOrganizationLoginSecurity` - Returns the login security settings for an organization.
* `GetOrganizationNetworks` - List the networks that the user has privileges on in an organization
* `GetOrganizationOpenapiSpec` - Return the OpenAPI 2.0 Specification of the organization's API documentation in JSON
* `GetOrganizationPolicyObject` - Shows details of a Policy Object.
* `GetOrganizationPolicyObjects` - Lists Policy Objects belonging to the organization.
* `GetOrganizationPolicyObjectsGroup` - Shows details of a Policy Object Group.
* `GetOrganizationPolicyObjectsGroups` - Lists Policy Object Groups belonging to the organization.
* `GetOrganizationSaml` - Returns the SAML SSO enabled settings for an organization.
* `GetOrganizationSamlIdp` - Get a SAML IdP from your organization.
* `GetOrganizationSamlIdps` - List the SAML IdPs in your organization.
* `GetOrganizationSamlRole` - Return a SAML role
* `GetOrganizationSamlRoles` - List the SAML roles for this organization
* `GetOrganizationSnmp` - Return the SNMP settings for an organization
* `GetOrganizationSummaryTopAppliancesByUtilization` - Return the top 10 appliances sorted by utilization over given time range.
* `GetOrganizationSummaryTopClientsByUsage` - Return metrics for organization's top 10 clients by data usage (in mb) over given time range.
* `GetOrganizationSummaryTopClientsManufacturersByUsage` - Return metrics for organization's top clients by data usage (in mb) over given time range, grouped by manufacturer.
* `GetOrganizationSummaryTopDevicesByUsage` - Return metrics for organization's top 10 devices sorted by data usage over given time range
* `GetOrganizationSummaryTopDevicesModelsByUsage` - Return metrics for organization's top 10 device models sorted by data usage over given time range
* `GetOrganizationSummaryTopSsidsByUsage` - Return metrics for organization's top 10 ssids by data usage over given time range
* `GetOrganizationSummaryTopSwitchesByEnergyUsage` - Return metrics for organization's top 10 switches by energy usage over given time range
* `GetOrganizationUplinksStatuses` - List the uplink status of every Meraki MX, MG and Z series devices in the organization
* `GetOrganizationWebhooksAlertTypes` - Return a list of alert types to be used with managing webhook alerts
* `GetOrganizationWebhooksLogs` - Return the log of webhook POSTs sent
* `GetOrganizations` - List the organizations that the user has privileges on
* `MoveOrganizationLicenses` - Move licenses to another organization
* `MoveOrganizationLicensesSeats` - Move SM seats to another organization
* `MoveOrganizationLicensingCotermLicenses` - Moves a license to a different organization (coterm only)
* `ReleaseFromOrganizationInventory` - Release a list of claimed devices from an organization.
* `RenewOrganizationLicensesSeats` - Renew SM seats of a license
* `UpdateOrganization` - Update an organization
* `UpdateOrganizationActionBatch` - Update an action batch
* `UpdateOrganizationAdaptivePolicyACL` - Updates an adaptive policy ACL
* `UpdateOrganizationAdaptivePolicyGroup` - Updates an adaptive policy group
* `UpdateOrganizationAdaptivePolicyPolicy` - Update an Adaptive Policy
* `UpdateOrganizationAdaptivePolicySettings` - Update global adaptive policy settings
* `UpdateOrganizationAdmin` - Update an administrator
* `UpdateOrganizationAlertsProfile` - Update an organization-wide alert config
* `UpdateOrganizationBrandingPoliciesPriorities` - Update the priority ordering of an organization's branding policies.
* `UpdateOrganizationBrandingPolicy` - Update a branding policy
* `UpdateOrganizationConfigTemplate` - Update a configuration template
* `UpdateOrganizationEarlyAccessFeaturesOptIn` - Update an early access feature opt-in for an organization
* `UpdateOrganizationLicense` - Update a license
* `UpdateOrganizationLoginSecurity` - Update the login security settings for an organization
* `UpdateOrganizationPolicyObject` - Updates a Policy Object.
* `UpdateOrganizationPolicyObjectsGroup` - Updates a Policy Object Group.
* `UpdateOrganizationSaml` - Updates the SAML SSO enabled settings for an organization.
* `UpdateOrganizationSamlIdp` - Update a SAML IdP in your organization
* `UpdateOrganizationSamlRole` - Update a SAML role
* `UpdateOrganizationSnmp` - Update the SNMP settings for an organization

### Ospf

* `GetNetworkSwitchRoutingOspf` - Return layer 3 OSPF routing configuration
* `UpdateNetworkSwitchRoutingOspf` - Update layer 3 OSPF routing configuration

### Overview

* `GetDeviceCameraAnalyticsOverview` - Returns an overview of aggregate analytics data for a timespan
* `GetNetworkClientsOverview` - Return overview statistics for network clients
* `GetNetworkSensorAlertsCurrentOverviewByMetric` - Return an overview of currently alerting sensors by metric
* `GetNetworkSensorAlertsOverviewByMetric` - Return an overview of alert occurrences over a timespan, by metric
* `GetOrganizationAdaptivePolicyOverview` - Returns adaptive policy aggregate statistics for an organization
* `GetOrganizationAPIRequestsOverview` - Return an aggregated overview of API requests data
* `GetOrganizationAPIRequestsOverviewResponseCodesByInterval` - Tracks organizations' API requests by response code across a given time period
* `GetOrganizationClientsOverview` - Return summary information around client data usage (in mb) across the given organization.
* `GetOrganizationDevicesStatusesOverview` - Return an overview of current device statuses
* `GetOrganizationLicensesOverview` - Return an overview of the license state for an organization

### Packets

* `GetDeviceSwitchPortsStatusesPackets` - Return the packet counters for all the ports of a switch

### PayloadTemplates

* `CreateNetworkWebhooksPayloadTemplate` - Create a webhook payload template for a network
* `DeleteNetworkWebhooksPayloadTemplate` - Destroy a webhook payload template for a network
* `GetNetworkWebhooksPayloadTemplate` - Get the webhook payload template for a network
* `GetNetworkWebhooksPayloadTemplates` - List the webhook payload templates for a network
* `UpdateNetworkWebhooksPayloadTemplate` - Update a webhook payload template for a network

### Performance

* `GetDeviceAppliancePerformance` - Return the performance score for a single MX

### PerformanceHistory

* `GetNetworkSmDevicePerformanceHistory` - Return historical records of various Systems Manager client metrics for desktop devices.

### Pii

* `CreateNetworkPiiRequest` - Submit a new delete or restrict processing PII request
* `DeleteNetworkPiiRequest` - Delete a restrict processing PII request
* `GetNetworkPiiPiiKeys` - List the keys required to access Personally Identifiable Information (PII) for a given identifier
* `GetNetworkPiiRequest` - Return a PII request
* `GetNetworkPiiRequests` - List the PII requests for this network or organization
* `GetNetworkPiiSmDevicesForKey` - Given a piece of Personally Identifiable Information (PII), return the Systems Manager device ID(s) associated with that identifier
* `GetNetworkPiiSmOwnersForKey` - Given a piece of Personally Identifiable Information (PII), return the Systems Manager owner ID(s) associated with that identifier

### PiiKeys

* `GetNetworkPiiPiiKeys` - List the keys required to access Personally Identifiable Information (PII) for a given identifier

### Ping

* `CreateDeviceLiveToolsPing` - Enqueue a job to ping a target host from the device
* `GetDeviceLiveToolsPing` - Return a ping job

### PingDevice

* `CreateDeviceLiveToolsPingDevice` - Enqueue a job to check connectivity status to the device
* `GetDeviceLiveToolsPingDevice` - Return a ping device job

### Policies

* `CreateOrganizationAdaptivePolicyPolicy` - Add an Adaptive Policy
* `DeleteOrganizationAdaptivePolicyPolicy` - Delete an Adaptive Policy
* `GetNetworkPoliciesByClient` - Get policies for all clients with policies
* `GetOrganizationAdaptivePolicyPolicies` - List adaptive policies in an organization
* `GetOrganizationAdaptivePolicyPolicy` - Return an adaptive policy
* `UpdateOrganizationAdaptivePolicyPolicy` - Update an Adaptive Policy

### Policy

* `GetNetworkClientPolicy` - Return the policy assigned to a client on the network
* `UpdateNetworkClientPolicy` - Update the policy assigned to a client on the network

### PolicyObjects

* `CreateOrganizationPolicyObject` - Creates a new Policy Object.
* `CreateOrganizationPolicyObjectsGroup` - Creates a new Policy Object Group.
* `DeleteOrganizationPolicyObject` - Deletes a Policy Object.
* `DeleteOrganizationPolicyObjectsGroup` - Deletes a Policy Object Group.
* `GetOrganizationPolicyObject` - Shows details of a Policy Object.
* `GetOrganizationPolicyObjects` - Lists Policy Objects belonging to the organization.
* `GetOrganizationPolicyObjectsGroup` - Shows details of a Policy Object Group.
* `GetOrganizationPolicyObjectsGroups` - Lists Policy Object Groups belonging to the organization.
* `UpdateOrganizationPolicyObject` - Updates a Policy Object.
* `UpdateOrganizationPolicyObjectsGroup` - Updates a Policy Object Group.

### PortForwardingRules

* `GetDeviceCellularGatewayPortForwardingRules` - Returns the port forwarding rules for a single MG.
* `GetNetworkApplianceFirewallPortForwardingRules` - Return the port forwarding rules for an MX network
* `UpdateDeviceCellularGatewayPortForwardingRules` - Updates the port forwarding rules for a single MG.
* `UpdateNetworkApplianceFirewallPortForwardingRules` - Update the port forwarding rules for an MX network

### PortSchedules

* `CreateNetworkSwitchPortSchedule` - Add a switch port schedule
* `DeleteNetworkSwitchPortSchedule` - Delete a switch port schedule
* `GetNetworkSwitchPortSchedules` - List switch port schedules
* `UpdateNetworkSwitchPortSchedule` - Update a switch port schedule

### Ports

* `CycleDeviceSwitchPorts` - Cycle a set of switch ports
* `GetDeviceSwitchPort` - Return a switch port
* `GetDeviceSwitchPorts` - List the switch ports for a switch
* `GetDeviceSwitchPortsStatuses` - Return the status for all the ports of a switch
* `GetDeviceSwitchPortsStatusesPackets` - Return the packet counters for all the ports of a switch
* `GetNetworkAppliancePort` - Return per-port VLAN settings for a single MX port.
* `GetNetworkAppliancePorts` - List per-port VLAN settings for all ports of a MX.
* `GetOrganizationConfigTemplateSwitchProfilePort` - Return a switch profile port
* `GetOrganizationConfigTemplateSwitchProfilePorts` - Return all the ports of a switch profile
* `GetOrganizationSwitchPortsBySwitch` - List the switchports in an organization by switch
* `UpdateDeviceSwitchPort` - Update a switch port
* `UpdateNetworkAppliancePort` - Update the per-port VLAN settings for a single MX port.
* `UpdateOrganizationConfigTemplateSwitchProfilePort` - Update a switch profile port

### PowerModules

* `GetOrganizationDevicesPowerModulesStatusesByDevice` - List the power status information for devices in an organization

### Prefixes

* `CreateNetworkAppliancePrefixesDelegatedStatic` - Add a static delegated prefix from a network
* `DeleteNetworkAppliancePrefixesDelegatedStatic` - Delete a static delegated prefix from a network
* `GetDeviceAppliancePrefixesDelegated` - Return current delegated IPv6 prefixes on an appliance.
* `GetDeviceAppliancePrefixesDelegatedVlanAssignments` - Return prefixes assigned to all IPv6 enabled VLANs on an appliance.
* `GetNetworkAppliancePrefixesDelegatedStatic` - Return a static delegated prefix from a network
* `GetNetworkAppliancePrefixesDelegatedStatics` - List static delegated prefixes for a network
* `UpdateNetworkAppliancePrefixesDelegatedStatic` - Update a static delegated prefix from a network

### Prepare

* `CreateOrganizationInventoryOnboardingCloudMonitoringPrepare` - Initiates or updates an import session

### Priorities

* `GetOrganizationBrandingPoliciesPriorities` - Return the branding policy IDs of an organization in priority order
* `UpdateOrganizationBrandingPoliciesPriorities` - Update the priority ordering of an organization's branding policies.

### Profiles

* `CreateNetworkSensorAlertsProfile` - Creates a sensor alert profile for a network.
* `CreateOrganizationAlertsProfile` - Create an organization-wide alert configuration
* `DeleteNetworkSensorAlertsProfile` - Deletes a sensor alert profile from a network.
* `DeleteOrganizationAlertsProfile` - Removes an organization-wide alert config
* `GetNetworkSensorAlertsProfile` - Show details of a sensor alert profile for a network.
* `GetNetworkSensorAlertsProfiles` - Lists all sensor alert profiles for a network.
* `GetNetworkSmProfiles` - List all the profiles in the network
* `GetOrganizationAlertsProfiles` - List all organization-wide alert configurations
* `GetOrganizationConfigTemplateSwitchProfilePort` - Return a switch profile port
* `GetOrganizationConfigTemplateSwitchProfilePorts` - Return all the ports of a switch profile
* `GetOrganizationConfigTemplateSwitchProfiles` - List the switch profiles for your switch template configuration
* `UpdateNetworkSensorAlertsProfile` - Updates a sensor alert profile for a network.
* `UpdateOrganizationAlertsProfile` - Update an organization-wide alert config
* `UpdateOrganizationConfigTemplateSwitchProfilePort` - Update a switch profile port

### QosRules

* `CreateNetworkSwitchQosRule` - Add a quality of service rule
* `DeleteNetworkSwitchQosRule` - Delete a quality of service rule
* `GetNetworkSwitchQosRule` - Return a quality of service rule
* `GetNetworkSwitchQosRules` - List quality of service rules
* `GetNetworkSwitchQosRulesOrder` - Return the quality of service rule IDs by order in which they will be processed by the switch
* `UpdateNetworkSwitchQosRule` - Update a quality of service rule
* `UpdateNetworkSwitchQosRulesOrder` - Update the order in which the rules should be processed by the switch

### QualityAndRetention

* `GetDeviceCameraQualityAndRetention` - Returns quality and retention settings for the given camera
* `UpdateDeviceCameraQualityAndRetention` - Update quality and retention settings for the given camera

### QualityRetentionProfiles

* `CreateNetworkCameraQualityRetentionProfile` - Creates new quality retention profile for this network.
* `DeleteNetworkCameraQualityRetentionProfile` - Delete an existing quality retention profile for this network.
* `GetNetworkCameraQualityRetentionProfile` - Retrieve a single quality retention profile
* `GetNetworkCameraQualityRetentionProfiles` - List the quality retention profiles for this network
* `UpdateNetworkCameraQualityRetentionProfile` - Update an existing quality retention profile for this network.

### Radio

* `GetDeviceWirelessRadioSettings` - Return the radio settings of a device
* `UpdateDeviceWirelessRadioSettings` - Update the radio settings of a device

### Readings

* `GetOrganizationSensorReadingsHistory` - Return all reported readings from sensors in a given timespan, sorted by timestamp
* `GetOrganizationSensorReadingsLatest` - Return the latest available reading for each metric from each sensor, sorted by sensor serial

### Recent

* `GetDeviceCameraAnalyticsRecent` - Returns most recent record for analytics zones

### Relationships

* `GetDeviceSensorRelationships` - List the sensor roles for a given sensor or camera device.
* `GetNetworkSensorRelationships` - List the sensor roles for devices in a given network
* `UpdateDeviceSensorRelationships` - Assign one or more sensor roles to a given sensor or camera device.

### RendezvousPoints

* `CreateNetworkSwitchRoutingMulticastRendezvousPoint` - Create a multicast rendezvous point
* `DeleteNetworkSwitchRoutingMulticastRendezvousPoint` - Delete a multicast rendezvous point
* `GetNetworkSwitchRoutingMulticastRendezvousPoint` - Return a multicast rendezvous point
* `GetNetworkSwitchRoutingMulticastRendezvousPoints` - List multicast rendezvous points
* `UpdateNetworkSwitchRoutingMulticastRendezvousPoint` - Update a multicast rendezvous point

### Requests

* `CreateNetworkPiiRequest` - Submit a new delete or restrict processing PII request
* `DeleteNetworkPiiRequest` - Delete a restrict processing PII request
* `GetNetworkPiiRequest` - Return a PII request
* `GetNetworkPiiRequests` - List the PII requests for this network or organization

### ResponseCodes

* `GetOrganizationAPIRequestsOverviewResponseCodesByInterval` - Tracks organizations' API requests by response code across a given time period

### Restrictions

* `GetNetworkSmDeviceRestrictions` - List the restrictions on a device

### RfProfiles

* `CreateNetworkWirelessRfProfile` - Creates new RF profile for this network
* `DeleteNetworkWirelessRfProfile` - Delete a RF Profile
* `GetNetworkWirelessRfProfile` - Return a RF profile
* `GetNetworkWirelessRfProfiles` - List the non-basic RF profiles for this network
* `UpdateNetworkWirelessRfProfile` - Updates specified RF profile for this network

### Rollbacks

* `CreateNetworkFirmwareUpgradesRollback` - Rollback a Firmware Upgrade For A Network

### Routing

* `CreateDeviceSwitchRoutingInterface` - Create a layer 3 interface for a switch
* `CreateDeviceSwitchRoutingStaticRoute` - Create a layer 3 static route for a switch
* `CreateNetworkSwitchRoutingMulticastRendezvousPoint` - Create a multicast rendezvous point
* `CreateNetworkSwitchStackRoutingInterface` - Create a layer 3 interface for a switch stack
* `CreateNetworkSwitchStackRoutingStaticRoute` - Create a layer 3 static route for a switch stack
* `DeleteDeviceSwitchRoutingInterface` - Delete a layer 3 interface from the switch
* `DeleteDeviceSwitchRoutingStaticRoute` - Delete a layer 3 static route for a switch
* `DeleteNetworkSwitchRoutingMulticastRendezvousPoint` - Delete a multicast rendezvous point
* `DeleteNetworkSwitchStackRoutingInterface` - Delete a layer 3 interface from a switch stack
* `DeleteNetworkSwitchStackRoutingStaticRoute` - Delete a layer 3 static route for a switch stack
* `GetDeviceSwitchRoutingInterface` - Return a layer 3 interface for a switch
* `GetDeviceSwitchRoutingInterfaceDhcp` - Return a layer 3 interface DHCP configuration for a switch
* `GetDeviceSwitchRoutingInterfaces` - List layer 3 interfaces for a switch
* `GetDeviceSwitchRoutingStaticRoute` - Return a layer 3 static route for a switch
* `GetDeviceSwitchRoutingStaticRoutes` - List layer 3 static routes for a switch
* `GetNetworkSwitchRoutingMulticast` - Return multicast settings for a network
* `GetNetworkSwitchRoutingMulticastRendezvousPoint` - Return a multicast rendezvous point
* `GetNetworkSwitchRoutingMulticastRendezvousPoints` - List multicast rendezvous points
* `GetNetworkSwitchRoutingOspf` - Return layer 3 OSPF routing configuration
* `GetNetworkSwitchStackRoutingInterface` - Return a layer 3 interface from a switch stack
* `GetNetworkSwitchStackRoutingInterfaceDhcp` - Return a layer 3 interface DHCP configuration for a switch stack
* `GetNetworkSwitchStackRoutingInterfaces` - List layer 3 interfaces for a switch stack
* `GetNetworkSwitchStackRoutingStaticRoute` - Return a layer 3 static route for a switch stack
* `GetNetworkSwitchStackRoutingStaticRoutes` - List layer 3 static routes for a switch stack
* `UpdateDeviceSwitchRoutingInterface` - Update a layer 3 interface for a switch
* `UpdateDeviceSwitchRoutingInterfaceDhcp` - Update a layer 3 interface DHCP configuration for a switch
* `UpdateDeviceSwitchRoutingStaticRoute` - Update a layer 3 static route for a switch
* `UpdateNetworkSwitchRoutingMulticast` - Update multicast settings for a network
* `UpdateNetworkSwitchRoutingMulticastRendezvousPoint` - Update a multicast rendezvous point
* `UpdateNetworkSwitchRoutingOspf` - Update layer 3 OSPF routing configuration
* `UpdateNetworkSwitchStackRoutingInterface` - Update a layer 3 interface for a switch stack
* `UpdateNetworkSwitchStackRoutingInterfaceDhcp` - Update a layer 3 interface DHCP configuration for a switch stack
* `UpdateNetworkSwitchStackRoutingStaticRoute` - Update a layer 3 static route for a switch stack

### Rules

* `GetNetworkApplianceTrafficShapingRules` - Display the traffic shaping settings rules for an MX network
* `GetNetworkWirelessSsidTrafficShapingRules` - Display the traffic shaping settings for a SSID on an MR network
* `UpdateNetworkApplianceTrafficShapingRules` - Update the traffic shaping settings rules for an MX network
* `UpdateNetworkWirelessSsidTrafficShapingRules` - Update the traffic shaping settings for an SSID on an MR network

### Saml

* `CreateOrganizationSamlIdp` - Create a SAML IdP for your organization.
* `DeleteOrganizationSamlIdp` - Remove a SAML IdP in your organization.
* `GetOrganizationSaml` - Returns the SAML SSO enabled settings for an organization.
* `GetOrganizationSamlIdp` - Get a SAML IdP from your organization.
* `GetOrganizationSamlIdps` - List the SAML IdPs in your organization.
* `UpdateOrganizationSaml` - Updates the SAML SSO enabled settings for an organization.
* `UpdateOrganizationSamlIdp` - Update a SAML IdP in your organization

### SamlRoles

* `CreateOrganizationSamlRole` - Create a SAML role
* `DeleteOrganizationSamlRole` - Remove a SAML role
* `GetOrganizationSamlRole` - Return a SAML role
* `GetOrganizationSamlRoles` - List the SAML roles for this organization
* `UpdateOrganizationSamlRole` - Update a SAML role

### Schedules

* `GetNetworkCameraSchedules` - Returns a list of all camera recording schedules.
* `GetNetworkWirelessSsidSchedules` - List the outage schedule for the SSID
* `UpdateNetworkWirelessSsidSchedules` - Update the outage schedule for the SSID

### Search

* `GetOrganizationClientsSearch` - Return the client details in an organization

### Security

* `GetNetworkApplianceClientSecurityEvents` - List the security events for a client
* `GetNetworkApplianceSecurityEvents` - List the security events for a network
* `GetNetworkApplianceSecurityIntrusion` - Returns all supported intrusion settings for an MX network
* `GetNetworkApplianceSecurityMalware` - Returns all supported malware settings for an MX network
* `GetOrganizationApplianceSecurityEvents` - List the security events for an organization
* `GetOrganizationApplianceSecurityIntrusion` - Returns all supported intrusion settings for an organization
* `UpdateNetworkApplianceSecurityIntrusion` - Set the supported intrusion settings for an MX network
* `UpdateNetworkApplianceSecurityMalware` - Set the supported malware settings for an MX network
* `UpdateOrganizationApplianceSecurityIntrusion` - Sets supported intrusion settings for an organization

### SecurityCenters

* `GetNetworkSmDeviceSecurityCenters` - List the security centers on a device

### Seen

* `GetNetworkSwitchDhcpV4ServersSeen` - Return the network's DHCPv4 servers seen within the selected timeframe (default 1 day)

### Sense

* `GetDeviceCameraSense` - Returns sense settings for a given camera
* `GetDeviceCameraSenseObjectDetectionModels` - Returns the MV Sense object detection model list for the given camera
* `UpdateDeviceCameraSense` - Update sense settings for the given camera

### Sensor

* `CreateNetworkSensorAlertsProfile` - Creates a sensor alert profile for a network.
* `DeleteNetworkSensorAlertsProfile` - Deletes a sensor alert profile from a network.
* `GetDeviceSensorRelationships` - List the sensor roles for a given sensor or camera device.
* `GetNetworkSensorAlertsCurrentOverviewByMetric` - Return an overview of currently alerting sensors by metric
* `GetNetworkSensorAlertsOverviewByMetric` - Return an overview of alert occurrences over a timespan, by metric
* `GetNetworkSensorAlertsProfile` - Show details of a sensor alert profile for a network.
* `GetNetworkSensorAlertsProfiles` - Lists all sensor alert profiles for a network.
* `GetNetworkSensorRelationships` - List the sensor roles for devices in a given network
* `GetOrganizationSensorReadingsHistory` - Return all reported readings from sensors in a given timespan, sorted by timestamp
* `GetOrganizationSensorReadingsLatest` - Return the latest available reading for each metric from each sensor, sorted by sensor serial
* `UpdateDeviceSensorRelationships` - Assign one or more sensor roles to a given sensor or camera device.
* `UpdateNetworkSensorAlertsProfile` - Updates a sensor alert profile for a network.

### Servers

* `GetNetworkSwitchDhcpV4ServersSeen` - Return the network's DHCPv4 servers seen within the selected timeframe (default 1 day)

### Settings

* `GetDeviceApplianceUplinksSettings` - Return the uplink settings for an MX appliance
* `GetDeviceCameraVideoSettings` - Returns video settings for the given camera
* `GetDeviceWirelessBluetoothSettings` - Return the bluetooth settings for a wireless device
* `GetDeviceWirelessRadioSettings` - Return the radio settings of a device
* `GetNetworkAlertsSettings` - Return the alert configuration for this network
* `GetNetworkApplianceFirewallSettings` - Return the firewall settings for this network
* `GetNetworkApplianceSettings` - Return the appliance settings for a network
* `GetNetworkApplianceVlansSettings` - Returns the enabled status of VLANs for the network
* `GetNetworkSettings` - Return the settings for a network
* `GetNetworkSwitchSettings` - Returns the switch network settings
* `GetNetworkWirelessBluetoothSettings` - Return the Bluetooth settings for a network. <a href="https://documentation.meraki.com/MR/Bluetooth/Bluetooth_Low_Energy_(BLE)">Bluetooth settings</a> must be enabled on the network.
* `GetNetworkWirelessSettings` - Return the wireless settings for a network
* `GetNetworkWirelessSsidSplashSettings` - Display the splash page settings for the given SSID
* `GetOrganizationAdaptivePolicySettings` - Returns global adaptive policy settings in an organization
* `UpdateDeviceApplianceUplinksSettings` - Update the uplink settings for an MX appliance
* `UpdateDeviceCameraVideoSettings` - Update video settings for the given camera
* `UpdateDeviceWirelessBluetoothSettings` - Update the bluetooth settings for a wireless device
* `UpdateDeviceWirelessRadioSettings` - Update the radio settings of a device
* `UpdateNetworkAlertsSettings` - Update the alert configuration for this network
* `UpdateNetworkApplianceFirewallSettings` - Update the firewall settings for this network
* `UpdateNetworkApplianceSettings` - Update the appliance settings for a network
* `UpdateNetworkApplianceVlansSettings` - Enable/Disable VLANs for the given network
* `UpdateNetworkSettings` - Update the settings for a network
* `UpdateNetworkSwitchSettings` - Update switch network settings
* `UpdateNetworkWirelessBluetoothSettings` - Update the Bluetooth settings for a network
* `UpdateNetworkWirelessSettings` - Update the wireless settings for a network
* `UpdateNetworkWirelessSsidSplashSettings` - Modify the splash page settings for the given SSID
* `UpdateOrganizationAdaptivePolicySettings` - Update global adaptive policy settings

### SignalQualityHistory

* `GetNetworkWirelessSignalQualityHistory` - Return signal quality (SNR/RSSI) over time for a device or network client

### Sims

* `GetDeviceCellularSims` - Return the SIM and APN configurations for a cellular device.
* `UpdateDeviceCellularSims` - Updates the SIM and APN configurations for a cellular device.

### SingleLan

* `GetNetworkApplianceSingleLan` - Return single LAN configuration
* `UpdateNetworkApplianceSingleLan` - Update single LAN configuration

### SiteToSiteVpn

* `GetNetworkApplianceVpnSiteToSiteVpn` - Return the site-to-site VPN settings of a network
* `UpdateNetworkApplianceVpnSiteToSiteVpn` - Update the site-to-site VPN settings of a network

### Sm

* `CheckinNetworkSmDevices` - Force check-in a set of devices
* `CreateNetworkSmBypassActivationLockAttempt` - Bypass activation lock attempt
* `CreateNetworkSmTargetGroup` - Add a target group
* `DeleteNetworkSmTargetGroup` - Delete a target group from a network
* `DeleteNetworkSmUserAccessDevice` - Delete a User Access Device
* `GetNetworkSmBypassActivationLockAttempt` - Bypass activation lock attempt status
* `GetNetworkSmDeviceCellularUsageHistory` - Return the client's daily cellular data usage history
* `GetNetworkSmDeviceCerts` - List the certs on a device
* `GetNetworkSmDeviceConnectivity` - Returns historical connectivity data (whether a device is regularly checking in to Dashboard).
* `GetNetworkSmDeviceDesktopLogs` - Return historical records of various Systems Manager network connection details for desktop devices.
* `GetNetworkSmDeviceDeviceCommandLogs` - Return historical records of commands sent to Systems Manager devices
* `GetNetworkSmDeviceDeviceProfiles` - Get the installed profiles associated with a device
* `GetNetworkSmDeviceNetworkAdapters` - List the network adapters of a device
* `GetNetworkSmDevicePerformanceHistory` - Return historical records of various Systems Manager client metrics for desktop devices.
* `GetNetworkSmDeviceRestrictions` - List the restrictions on a device
* `GetNetworkSmDeviceSecurityCenters` - List the security centers on a device
* `GetNetworkSmDeviceSoftwares` - Get a list of softwares associated with a device
* `GetNetworkSmDeviceWlanLists` - List the saved SSID names on a device
* `GetNetworkSmDevices` - List the devices enrolled in an SM network with various specified fields and filters
* `GetNetworkSmProfiles` - List all the profiles in the network
* `GetNetworkSmTargetGroup` - Return a target group
* `GetNetworkSmTargetGroups` - List the target groups in this network
* `GetNetworkSmTrustedAccessConfigs` - List Trusted Access Configs
* `GetNetworkSmUserAccessDevices` - List User Access Devices and its Trusted Access Connections
* `GetNetworkSmUserDeviceProfiles` - Get the profiles associated with a user
* `GetNetworkSmUserSoftwares` - Get a list of softwares associated with a user
* `GetNetworkSmUsers` - List the owners in an SM network with various specified fields and filters
* `GetOrganizationSmApnsCert` - Get the organization's APNS certificate
* `GetOrganizationSmVppAccount` - Get a hash containing the unparsed token of the VPP account with the given ID
* `GetOrganizationSmVppAccounts` - List the VPP accounts in the organization
* `LockNetworkSmDevices` - Lock a set of devices
* `ModifyNetworkSmDevicesTags` - Add, delete, or update the tags of a set of devices
* `MoveNetworkSmDevices` - Move a set of devices to a new network
* `RefreshNetworkSmDeviceDetails` - Refresh the details of a device
* `UnenrollNetworkSmDevice` - Unenroll a device
* `UpdateNetworkSmDevicesFields` - Modify the fields of a device
* `UpdateNetworkSmTargetGroup` - Update a target group
* `WipeNetworkSmDevices` - Wipe a device

### SmDevicesForKey

* `GetNetworkPiiSmDevicesForKey` - Given a piece of Personally Identifiable Information (PII), return the Systems Manager device ID(s) associated with that identifier

### SmOwnersForKey

* `GetNetworkPiiSmOwnersForKey` - Given a piece of Personally Identifiable Information (PII), return the Systems Manager owner ID(s) associated with that identifier

### Snmp

* `GetNetworkSnmp` - Return the SNMP settings for a network
* `GetOrganizationSnmp` - Return the SNMP settings for an organization
* `UpdateNetworkSnmp` - Update the SNMP settings for a network
* `UpdateOrganizationSnmp` - Update the SNMP settings for an organization

### Softwares

* `GetNetworkSmDeviceSoftwares` - Get a list of softwares associated with a device
* `GetNetworkSmUserSoftwares` - Get a list of softwares associated with a user

### Splash

* `GetNetworkWirelessSsidSplashSettings` - Display the splash page settings for the given SSID
* `UpdateNetworkWirelessSsidSplashSettings` - Modify the splash page settings for the given SSID

### SplashAuthorizationStatus

* `GetNetworkClientSplashAuthorizationStatus` - Return the splash authorization for a client, for each SSID they've associated with through splash
* `UpdateNetworkClientSplashAuthorizationStatus` - Update a client's splash authorization

### SplashLoginAttempts

* `GetNetworkSplashLoginAttempts` - List the splash login attempts for a network

### Ssids

* `CreateNetworkWirelessSsidIdentityPsk` - Create an Identity PSK
* `DeleteNetworkWirelessSsidIdentityPsk` - Delete an Identity PSK
* `GetNetworkApplianceSsid` - Return a single MX SSID
* `GetNetworkApplianceSsids` - List the MX SSIDs in a network
* `GetNetworkWirelessSsid` - Return a single MR SSID
* `GetNetworkWirelessSsidBonjourForwarding` - List the Bonjour forwarding setting and rules for the SSID
* `GetNetworkWirelessSsidDeviceTypeGroupPolicies` - List the device type group policies for the SSID
* `GetNetworkWirelessSsidEapOverride` - Return the EAP overridden parameters for an SSID
* `GetNetworkWirelessSsidFirewallL3FirewallRules` - Return the L3 firewall rules for an SSID on an MR network
* `GetNetworkWirelessSsidFirewallL7FirewallRules` - Return the L7 firewall rules for an SSID on an MR network
* `GetNetworkWirelessSsidHotspot20` - Return the Hotspot 2.0 settings for an SSID
* `GetNetworkWirelessSsidIdentityPsk` - Return an Identity PSK
* `GetNetworkWirelessSsidIdentityPsks` - List all Identity PSKs in a wireless network
* `GetNetworkWirelessSsidSchedules` - List the outage schedule for the SSID
* `GetNetworkWirelessSsidSplashSettings` - Display the splash page settings for the given SSID
* `GetNetworkWirelessSsidTrafficShapingRules` - Display the traffic shaping settings for a SSID on an MR network
* `GetNetworkWirelessSsidVpn` - List the VPN settings for the SSID.
* `GetNetworkWirelessSsids` - List the MR SSIDs in a network
* `GetOrganizationSummaryTopSsidsByUsage` - Return metrics for organization's top 10 ssids by data usage over given time range
* `UpdateNetworkApplianceSsid` - Update the attributes of an MX SSID
* `UpdateNetworkWirelessSsid` - Update the attributes of an MR SSID
* `UpdateNetworkWirelessSsidBonjourForwarding` - Update the bonjour forwarding setting and rules for the SSID
* `UpdateNetworkWirelessSsidDeviceTypeGroupPolicies` - Update the device type group policies for the SSID
* `UpdateNetworkWirelessSsidEapOverride` - Update the EAP overridden parameters for an SSID.
* `UpdateNetworkWirelessSsidFirewallL3FirewallRules` - Update the L3 firewall rules of an SSID on an MR network
* `UpdateNetworkWirelessSsidFirewallL7FirewallRules` - Update the L7 firewall rules of an SSID on an MR network
* `UpdateNetworkWirelessSsidHotspot20` - Update the Hotspot 2.0 settings of an SSID
* `UpdateNetworkWirelessSsidIdentityPsk` - Update an Identity PSK
* `UpdateNetworkWirelessSsidSchedules` - Update the outage schedule for the SSID
* `UpdateNetworkWirelessSsidSplashSettings` - Modify the splash page settings for the given SSID
* `UpdateNetworkWirelessSsidTrafficShapingRules` - Update the traffic shaping settings for an SSID on an MR network
* `UpdateNetworkWirelessSsidVpn` - Update the VPN settings for the SSID

### Stacks

* `AddNetworkSwitchStack` - Add a switch to a stack
* `CreateNetworkSwitchStack` - Create a stack
* `CreateNetworkSwitchStackRoutingInterface` - Create a layer 3 interface for a switch stack
* `CreateNetworkSwitchStackRoutingStaticRoute` - Create a layer 3 static route for a switch stack
* `DeleteNetworkSwitchStack` - Delete a stack
* `DeleteNetworkSwitchStackRoutingInterface` - Delete a layer 3 interface from a switch stack
* `DeleteNetworkSwitchStackRoutingStaticRoute` - Delete a layer 3 static route for a switch stack
* `GetNetworkSwitchStack` - Show a switch stack
* `GetNetworkSwitchStackRoutingInterface` - Return a layer 3 interface from a switch stack
* `GetNetworkSwitchStackRoutingInterfaceDhcp` - Return a layer 3 interface DHCP configuration for a switch stack
* `GetNetworkSwitchStackRoutingInterfaces` - List layer 3 interfaces for a switch stack
* `GetNetworkSwitchStackRoutingStaticRoute` - Return a layer 3 static route for a switch stack
* `GetNetworkSwitchStackRoutingStaticRoutes` - List layer 3 static routes for a switch stack
* `GetNetworkSwitchStacks` - List the switch stacks in a network
* `RemoveNetworkSwitchStack` - Remove a switch from a stack
* `UpdateNetworkSwitchStackRoutingInterface` - Update a layer 3 interface for a switch stack
* `UpdateNetworkSwitchStackRoutingInterfaceDhcp` - Update a layer 3 interface DHCP configuration for a switch stack
* `UpdateNetworkSwitchStackRoutingStaticRoute` - Update a layer 3 static route for a switch stack

### Staged

* `CreateNetworkFirmwareUpgradesStagedEvent` - Create a Staged Upgrade Event for a network
* `CreateNetworkFirmwareUpgradesStagedGroup` - Create a Staged Upgrade Group for a network
* `DeferNetworkFirmwareUpgradesStagedEvents` - Postpone by 1 week all pending staged upgrade stages for a network
* `DeleteNetworkFirmwareUpgradesStagedGroup` - Delete a Staged Upgrade Group
* `GetNetworkFirmwareUpgradesStagedEvents` - Get the Staged Upgrade Event from a network
* `GetNetworkFirmwareUpgradesStagedGroup` - Get a Staged Upgrade Group from a network
* `GetNetworkFirmwareUpgradesStagedGroups` - List of Staged Upgrade Groups in a network
* `GetNetworkFirmwareUpgradesStagedStages` - Order of Staged Upgrade Groups in a network
* `RollbacksNetworkFirmwareUpgradesStagedEvents` - Rollback a Staged Upgrade Event for a network
* `UpdateNetworkFirmwareUpgradesStagedEvents` - Update the Staged Upgrade Event for a network
* `UpdateNetworkFirmwareUpgradesStagedGroup` - Update a Staged Upgrade Group for a network
* `UpdateNetworkFirmwareUpgradesStagedStages` - Assign Staged Upgrade Group order in the sequence.

### Stages

* `GetNetworkFirmwareUpgradesStagedStages` - Order of Staged Upgrade Groups in a network
* `UpdateNetworkFirmwareUpgradesStagedStages` - Assign Staged Upgrade Group order in the sequence.

### StaticRoutes

* `CreateDeviceSwitchRoutingStaticRoute` - Create a layer 3 static route for a switch
* `CreateNetworkApplianceStaticRoute` - Add a static route for an MX or teleworker network
* `CreateNetworkSwitchStackRoutingStaticRoute` - Create a layer 3 static route for a switch stack
* `DeleteDeviceSwitchRoutingStaticRoute` - Delete a layer 3 static route for a switch
* `DeleteNetworkApplianceStaticRoute` - Delete a static route from an MX or teleworker network
* `DeleteNetworkSwitchStackRoutingStaticRoute` - Delete a layer 3 static route for a switch stack
* `GetDeviceSwitchRoutingStaticRoute` - Return a layer 3 static route for a switch
* `GetDeviceSwitchRoutingStaticRoutes` - List layer 3 static routes for a switch
* `GetNetworkApplianceStaticRoute` - Return a static route for an MX or teleworker network
* `GetNetworkApplianceStaticRoutes` - List the static routes for an MX or teleworker network
* `GetNetworkSwitchStackRoutingStaticRoute` - Return a layer 3 static route for a switch stack
* `GetNetworkSwitchStackRoutingStaticRoutes` - List layer 3 static routes for a switch stack
* `UpdateDeviceSwitchRoutingStaticRoute` - Update a layer 3 static route for a switch
* `UpdateNetworkApplianceStaticRoute` - Update a static route for an MX or teleworker network
* `UpdateNetworkSwitchStackRoutingStaticRoute` - Update a layer 3 static route for a switch stack

### Statics

* `CreateNetworkAppliancePrefixesDelegatedStatic` - Add a static delegated prefix from a network
* `DeleteNetworkAppliancePrefixesDelegatedStatic` - Delete a static delegated prefix from a network
* `GetNetworkAppliancePrefixesDelegatedStatic` - Return a static delegated prefix from a network
* `GetNetworkAppliancePrefixesDelegatedStatics` - List static delegated prefixes for a network
* `UpdateNetworkAppliancePrefixesDelegatedStatic` - Update a static delegated prefix from a network

### Stats

* `GetOrganizationApplianceVpnStats` - Show VPN history stat for networks in an organization

### Status

* `GetDeviceWirelessStatus` - Return the SSID statuses of an access point

### Statuses

* `GetDeviceSwitchPortsStatuses` - Return the status for all the ports of a switch
* `GetDeviceSwitchPortsStatusesPackets` - Return the packet counters for all the ports of a switch
* `GetOrganizationApplianceUplinkStatuses` - List the uplink status of every Meraki MX and Z series appliances in the organization
* `GetOrganizationApplianceVpnStatuses` - Show VPN status for networks in an organization
* `GetOrganizationCameraOnboardingStatuses` - Fetch onboarding status of cameras
* `GetOrganizationCellularGatewayUplinkStatuses` - List the uplink status of every Meraki MG cellular gateway in the organization
* `GetOrganizationDevicesPowerModulesStatusesByDevice` - List the power status information for devices in an organization
* `GetOrganizationDevicesStatuses` - List the status of every Meraki device in the organization
* `GetOrganizationDevicesStatusesOverview` - Return an overview of current device statuses
* `GetOrganizationUplinksStatuses` - List the uplink status of every Meraki MX, MG and Z series devices in the organization
* `GetOrganizationWirelessDevicesEthernetStatuses` - Endpoint to see power status for wireless devices
* `UpdateOrganizationCameraOnboardingStatuses` - Notify that credential handoff to camera has completed

### StormControl

* `GetNetworkSwitchStormControl` - Return the storm control configuration for a switch network
* `UpdateNetworkSwitchStormControl` - Update the storm control configuration for a switch network

### Stp

* `GetNetworkSwitchStp` - Returns STP settings
* `UpdateNetworkSwitchStp` - Updates STP settings

### SubnetPool

* `GetNetworkCellularGatewaySubnetPool` - Return the subnet pool and mask configured for MGs in the network.
* `UpdateNetworkCellularGatewaySubnetPool` - Update the subnet pool and mask configuration for MGs in the network.

### Subnets

* `GetDeviceApplianceDhcpSubnets` - Return the DHCP subnet information for an appliance

### Summary

* `GetOrganizationSummaryTopAppliancesByUtilization` - Return the top 10 appliances sorted by utilization over given time range.
* `GetOrganizationSummaryTopClientsByUsage` - Return metrics for organization's top 10 clients by data usage (in mb) over given time range.
* `GetOrganizationSummaryTopClientsManufacturersByUsage` - Return metrics for organization's top clients by data usage (in mb) over given time range, grouped by manufacturer.
* `GetOrganizationSummaryTopDevicesByUsage` - Return metrics for organization's top 10 devices sorted by data usage over given time range
* `GetOrganizationSummaryTopDevicesModelsByUsage` - Return metrics for organization's top 10 device models sorted by data usage over given time range
* `GetOrganizationSummaryTopSsidsByUsage` - Return metrics for organization's top 10 ssids by data usage over given time range
* `GetOrganizationSummaryTopSwitchesByEnergyUsage` - Return metrics for organization's top 10 switches by energy usage over given time range

### Switch

* `AddNetworkSwitchStack` - Add a switch to a stack
* `CloneOrganizationSwitchDevices` - Clone port-level and some switch-level configuration settings from a source switch to one or more target switches
* `CreateDeviceSwitchRoutingInterface` - Create a layer 3 interface for a switch
* `CreateDeviceSwitchRoutingStaticRoute` - Create a layer 3 static route for a switch
* `CreateNetworkSwitchAccessPolicy` - Create an access policy for a switch network
* `CreateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServer` - Add a server to be trusted by Dynamic ARP Inspection on this network
* `CreateNetworkSwitchLinkAggregation` - Create a link aggregation group
* `CreateNetworkSwitchPortSchedule` - Add a switch port schedule
* `CreateNetworkSwitchQosRule` - Add a quality of service rule
* `CreateNetworkSwitchRoutingMulticastRendezvousPoint` - Create a multicast rendezvous point
* `CreateNetworkSwitchStack` - Create a stack
* `CreateNetworkSwitchStackRoutingInterface` - Create a layer 3 interface for a switch stack
* `CreateNetworkSwitchStackRoutingStaticRoute` - Create a layer 3 static route for a switch stack
* `CycleDeviceSwitchPorts` - Cycle a set of switch ports
* `DeleteDeviceSwitchRoutingInterface` - Delete a layer 3 interface from the switch
* `DeleteDeviceSwitchRoutingStaticRoute` - Delete a layer 3 static route for a switch
* `DeleteNetworkSwitchAccessPolicy` - Delete an access policy for a switch network
* `DeleteNetworkSwitchDhcpServerPolicyArpInspectionTrustedServer` - Remove a server from being trusted by Dynamic ARP Inspection on this network
* `DeleteNetworkSwitchLinkAggregation` - Split a link aggregation group into separate ports
* `DeleteNetworkSwitchPortSchedule` - Delete a switch port schedule
* `DeleteNetworkSwitchQosRule` - Delete a quality of service rule
* `DeleteNetworkSwitchRoutingMulticastRendezvousPoint` - Delete a multicast rendezvous point
* `DeleteNetworkSwitchStack` - Delete a stack
* `DeleteNetworkSwitchStackRoutingInterface` - Delete a layer 3 interface from a switch stack
* `DeleteNetworkSwitchStackRoutingStaticRoute` - Delete a layer 3 static route for a switch stack
* `GetDeviceSwitchPort` - Return a switch port
* `GetDeviceSwitchPorts` - List the switch ports for a switch
* `GetDeviceSwitchPortsStatuses` - Return the status for all the ports of a switch
* `GetDeviceSwitchPortsStatusesPackets` - Return the packet counters for all the ports of a switch
* `GetDeviceSwitchRoutingInterface` - Return a layer 3 interface for a switch
* `GetDeviceSwitchRoutingInterfaceDhcp` - Return a layer 3 interface DHCP configuration for a switch
* `GetDeviceSwitchRoutingInterfaces` - List layer 3 interfaces for a switch
* `GetDeviceSwitchRoutingStaticRoute` - Return a layer 3 static route for a switch
* `GetDeviceSwitchRoutingStaticRoutes` - List layer 3 static routes for a switch
* `GetDeviceSwitchWarmSpare` - Return warm spare configuration for a switch
* `GetNetworkSwitchAccessControlLists` - Return the access control lists for a MS network
* `GetNetworkSwitchAccessPolicies` - List the access policies for a switch network
* `GetNetworkSwitchAccessPolicy` - Return a specific access policy for a switch network
* `GetNetworkSwitchAlternateManagementInterface` - Return the switch alternate management interface for the network
* `GetNetworkSwitchDhcpServerPolicy` - Return the DHCP server settings
* `GetNetworkSwitchDhcpServerPolicyArpInspectionTrustedServers` - Return the list of servers trusted by Dynamic ARP Inspection on this network
* `GetNetworkSwitchDhcpServerPolicyArpInspectionWarningsByDevice` - Return the devices that have a Dynamic ARP Inspection warning and their warnings
* `GetNetworkSwitchDhcpV4ServersSeen` - Return the network's DHCPv4 servers seen within the selected timeframe (default 1 day)
* `GetNetworkSwitchDscpToCosMappings` - Return the DSCP to CoS mappings
* `GetNetworkSwitchLinkAggregations` - List link aggregation groups
* `GetNetworkSwitchMtu` - Return the MTU configuration
* `GetNetworkSwitchPortSchedules` - List switch port schedules
* `GetNetworkSwitchQosRule` - Return a quality of service rule
* `GetNetworkSwitchQosRules` - List quality of service rules
* `GetNetworkSwitchQosRulesOrder` - Return the quality of service rule IDs by order in which they will be processed by the switch
* `GetNetworkSwitchRoutingMulticast` - Return multicast settings for a network
* `GetNetworkSwitchRoutingMulticastRendezvousPoint` - Return a multicast rendezvous point
* `GetNetworkSwitchRoutingMulticastRendezvousPoints` - List multicast rendezvous points
* `GetNetworkSwitchRoutingOspf` - Return layer 3 OSPF routing configuration
* `GetNetworkSwitchSettings` - Returns the switch network settings
* `GetNetworkSwitchStack` - Show a switch stack
* `GetNetworkSwitchStackRoutingInterface` - Return a layer 3 interface from a switch stack
* `GetNetworkSwitchStackRoutingInterfaceDhcp` - Return a layer 3 interface DHCP configuration for a switch stack
* `GetNetworkSwitchStackRoutingInterfaces` - List layer 3 interfaces for a switch stack
* `GetNetworkSwitchStackRoutingStaticRoute` - Return a layer 3 static route for a switch stack
* `GetNetworkSwitchStackRoutingStaticRoutes` - List layer 3 static routes for a switch stack
* `GetNetworkSwitchStacks` - List the switch stacks in a network
* `GetNetworkSwitchStormControl` - Return the storm control configuration for a switch network
* `GetNetworkSwitchStp` - Returns STP settings
* `GetOrganizationConfigTemplateSwitchProfilePort` - Return a switch profile port
* `GetOrganizationConfigTemplateSwitchProfilePorts` - Return all the ports of a switch profile
* `GetOrganizationConfigTemplateSwitchProfiles` - List the switch profiles for your switch template configuration
* `GetOrganizationSwitchPortsBySwitch` - List the switchports in an organization by switch
* `RemoveNetworkSwitchStack` - Remove a switch from a stack
* `UpdateDeviceSwitchPort` - Update a switch port
* `UpdateDeviceSwitchRoutingInterface` - Update a layer 3 interface for a switch
* `UpdateDeviceSwitchRoutingInterfaceDhcp` - Update a layer 3 interface DHCP configuration for a switch
* `UpdateDeviceSwitchRoutingStaticRoute` - Update a layer 3 static route for a switch
* `UpdateDeviceSwitchWarmSpare` - Update warm spare configuration for a switch
* `UpdateNetworkSwitchAccessControlLists` - Update the access control lists for a MS network
* `UpdateNetworkSwitchAccessPolicy` - Update an access policy for a switch network
* `UpdateNetworkSwitchAlternateManagementInterface` - Update the switch alternate management interface for the network
* `UpdateNetworkSwitchDhcpServerPolicy` - Update the DHCP server settings
* `UpdateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServer` - Update a server that is trusted by Dynamic ARP Inspection on this network
* `UpdateNetworkSwitchDscpToCosMappings` - Update the DSCP to CoS mappings
* `UpdateNetworkSwitchLinkAggregation` - Update a link aggregation group
* `UpdateNetworkSwitchMtu` - Update the MTU configuration
* `UpdateNetworkSwitchPortSchedule` - Update a switch port schedule
* `UpdateNetworkSwitchQosRule` - Update a quality of service rule
* `UpdateNetworkSwitchQosRulesOrder` - Update the order in which the rules should be processed by the switch
* `UpdateNetworkSwitchRoutingMulticast` - Update multicast settings for a network
* `UpdateNetworkSwitchRoutingMulticastRendezvousPoint` - Update a multicast rendezvous point
* `UpdateNetworkSwitchRoutingOspf` - Update layer 3 OSPF routing configuration
* `UpdateNetworkSwitchSettings` - Update switch network settings
* `UpdateNetworkSwitchStackRoutingInterface` - Update a layer 3 interface for a switch stack
* `UpdateNetworkSwitchStackRoutingInterfaceDhcp` - Update a layer 3 interface DHCP configuration for a switch stack
* `UpdateNetworkSwitchStackRoutingStaticRoute` - Update a layer 3 static route for a switch stack
* `UpdateNetworkSwitchStormControl` - Update the storm control configuration for a switch network
* `UpdateNetworkSwitchStp` - Updates STP settings
* `UpdateOrganizationConfigTemplateSwitchProfilePort` - Update a switch profile port

### Switches

* `GetOrganizationSummaryTopSwitchesByEnergyUsage` - Return metrics for organization's top 10 switches by energy usage over given time range

### SyslogServers

* `GetNetworkSyslogServers` - List the syslog servers for a network
* `UpdateNetworkSyslogServers` - Update the syslog servers for a network

### TargetGroups

* `CreateNetworkSmTargetGroup` - Add a target group
* `DeleteNetworkSmTargetGroup` - Delete a target group from a network
* `GetNetworkSmTargetGroup` - Return a target group
* `GetNetworkSmTargetGroups` - List the target groups in this network
* `UpdateNetworkSmTargetGroup` - Update a target group

### ThirdPartyVPNPeers

* `GetOrganizationApplianceVPNThirdPartyVPNPeers` - Return the third party VPN peers for an organization
* `UpdateOrganizationApplianceVPNThirdPartyVPNPeers` - Update the third party VPN peers for an organization

### Top

* `GetOrganizationSummaryTopAppliancesByUtilization` - Return the top 10 appliances sorted by utilization over given time range.
* `GetOrganizationSummaryTopClientsByUsage` - Return metrics for organization's top 10 clients by data usage (in mb) over given time range.
* `GetOrganizationSummaryTopClientsManufacturersByUsage` - Return metrics for organization's top clients by data usage (in mb) over given time range, grouped by manufacturer.
* `GetOrganizationSummaryTopDevicesByUsage` - Return metrics for organization's top 10 devices sorted by data usage over given time range
* `GetOrganizationSummaryTopDevicesModelsByUsage` - Return metrics for organization's top 10 device models sorted by data usage over given time range
* `GetOrganizationSummaryTopSsidsByUsage` - Return metrics for organization's top 10 ssids by data usage over given time range
* `GetOrganizationSummaryTopSwitchesByEnergyUsage` - Return metrics for organization's top 10 switches by energy usage over given time range

### Topology

* `GetNetworkTopologyLinkLayer` - List the LLDP and CDP information for all discovered devices and connections in a network.

### Traffic

* `GetNetworkTraffic` - Return the traffic analysis data for this network

### TrafficAnalysis

* `GetNetworkTrafficAnalysis` - Return the traffic analysis settings for a network
* `UpdateNetworkTrafficAnalysis` - Update the traffic analysis settings for a network

### TrafficHistory

* `GetNetworkClientTrafficHistory` - Return the client's network traffic data over time

### TrafficShaping

* `CreateNetworkApplianceTrafficShapingCustomPerformanceClass` - Add a custom performance class for an MX network
* `DeleteNetworkApplianceTrafficShapingCustomPerformanceClass` - Delete a custom performance class from an MX network
* `GetNetworkApplianceTrafficShaping` - Display the traffic shaping settings for an MX network
* `GetNetworkApplianceTrafficShapingCustomPerformanceClass` - Return a custom performance class for an MX network
* `GetNetworkApplianceTrafficShapingCustomPerformanceClasses` - List all custom performance classes for an MX network
* `GetNetworkApplianceTrafficShapingRules` - Display the traffic shaping settings rules for an MX network
* `GetNetworkApplianceTrafficShapingUplinkBandwidth` - Returns the uplink bandwidth settings for your MX network.
* `GetNetworkApplianceTrafficShapingUplinkSelection` - Show uplink selection settings for an MX network
* `GetNetworkTrafficShapingApplicationCategories` - Returns the application categories for traffic shaping rules.
* `GetNetworkTrafficShapingDscpTaggingOptions` - Returns the available DSCP tagging options for your traffic shaping rules.
* `GetNetworkWirelessSsidTrafficShapingRules` - Display the traffic shaping settings for a SSID on an MR network
* `UpdateNetworkApplianceTrafficShaping` - Update the traffic shaping settings for an MX network
* `UpdateNetworkApplianceTrafficShapingCustomPerformanceClass` - Update a custom performance class for an MX network
* `UpdateNetworkApplianceTrafficShapingRules` - Update the traffic shaping settings rules for an MX network
* `UpdateNetworkApplianceTrafficShapingUplinkBandwidth` - Updates the uplink bandwidth settings for your MX network.
* `UpdateNetworkApplianceTrafficShapingUplinkSelection` - Update uplink selection settings for an MX network
* `UpdateNetworkWirelessSsidTrafficShapingRules` - Update the traffic shaping settings for an SSID on an MR network

### TrustedAccessConfigs

* `GetNetworkSmTrustedAccessConfigs` - List Trusted Access Configs

### TrustedServers

* `CreateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServer` - Add a server to be trusted by Dynamic ARP Inspection on this network
* `DeleteNetworkSwitchDhcpServerPolicyArpInspectionTrustedServer` - Remove a server from being trusted by Dynamic ARP Inspection on this network
* `GetNetworkSwitchDhcpServerPolicyArpInspectionTrustedServers` - Return the list of servers trusted by Dynamic ARP Inspection on this network
* `UpdateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServer` - Update a server that is trusted by Dynamic ARP Inspection on this network

### Upgrades

* `GetOrganizationFirmwareUpgrades` - Get firmware upgrade information for an organization
* `GetOrganizationFirmwareUpgradesByDevice` - Get firmware upgrade status for the filtered devices

### Uplink

* `GetNetworkCellularGatewayUplink` - Returns the uplink settings for your MG network.
* `GetOrganizationCellularGatewayUplinkStatuses` - List the uplink status of every Meraki MG cellular gateway in the organization
* `UpdateNetworkCellularGatewayUplink` - Updates the uplink settings for your MG network.

### UplinkBandwidth

* `GetNetworkApplianceTrafficShapingUplinkBandwidth` - Returns the uplink bandwidth settings for your MX network.
* `UpdateNetworkApplianceTrafficShapingUplinkBandwidth` - Updates the uplink bandwidth settings for your MX network.

### UplinkSelection

* `GetNetworkApplianceTrafficShapingUplinkSelection` - Show uplink selection settings for an MX network
* `UpdateNetworkApplianceTrafficShapingUplinkSelection` - Update uplink selection settings for an MX network

### Uplinks

* `GetDeviceApplianceUplinksSettings` - Return the uplink settings for an MX appliance
* `GetDeviceLossAndLatencyHistory` - Get the uplink loss percentage and latency in milliseconds, and goodput in kilobits per second for a wired network device.
* `GetNetworkApplianceUplinksUsageHistory` - Get the sent and received bytes for each uplink of a network.
* `GetOrganizationApplianceUplinkStatuses` - List the uplink status of every Meraki MX and Z series appliances in the organization
* `GetOrganizationDevicesUplinksAddressesByDevice` - List the current uplink addresses for devices in an organization.
* `GetOrganizationDevicesUplinksLossAndLatency` - Return the uplink loss and latency for every MX in the organization from at latest 2 minutes ago
* `GetOrganizationUplinksStatuses` - List the uplink status of every Meraki MX, MG and Z series devices in the organization
* `UpdateDeviceApplianceUplinksSettings` - Update the uplink settings for an MX appliance

### UplinksLossAndLatency

* `GetOrganizationDevicesUplinksLossAndLatency` - Return the uplink loss and latency for every MX in the organization from at latest 2 minutes ago

### UsageHistories

* `GetNetworkClientsUsageHistories` - Return the usage histories for clients

### UsageHistory

* `GetNetworkApplianceUplinksUsageHistory` - Get the sent and received bytes for each uplink of a network.
* `GetNetworkClientUsageHistory` - Return the client's daily usage history
* `GetNetworkWirelessUsageHistory` - Return AP usage over time for a device or network client

### UserAccessDevices

* `DeleteNetworkSmUserAccessDevice` - Delete a User Access Device
* `GetNetworkSmUserAccessDevices` - List User Access Devices and its Trusted Access Connections

### Users

* `DeleteOrganizationUser` - Delete a user and all of its authentication methods.
* `GetNetworkSmUserDeviceProfiles` - Get the profiles associated with a user
* `GetNetworkSmUserSoftwares` - Get a list of softwares associated with a user
* `GetNetworkSmUsers` - List the owners in an SM network with various specified fields and filters

### V4

* `GetNetworkSwitchDhcpV4ServersSeen` - Return the network's DHCPv4 servers seen within the selected timeframe (default 1 day)

### Video

* `GetDeviceCameraVideoSettings` - Returns video settings for the given camera
* `UpdateDeviceCameraVideoSettings` - Update video settings for the given camera

### VideoLink

* `GetDeviceCameraVideoLink` - Returns video link to the specified camera

### VlanAssignments

* `GetDeviceAppliancePrefixesDelegatedVlanAssignments` - Return prefixes assigned to all IPv6 enabled VLANs on an appliance.

### Vlans

* `CreateNetworkApplianceVlan` - Add a VLAN
* `DeleteNetworkApplianceVlan` - Delete a VLAN from a network
* `GetNetworkApplianceVlan` - Return a VLAN
* `GetNetworkApplianceVlans` - List the VLANs for an MX network
* `GetNetworkApplianceVlansSettings` - Returns the enabled status of VLANs for the network
* `UpdateNetworkApplianceVlan` - Update a VLAN
* `UpdateNetworkApplianceVlansSettings` - Enable/Disable VLANs for the given network

### Vmx

* `CreateDeviceApplianceVmxAuthenticationToken` - Generate a new vMX authentication token

### Vpn

* `GetNetworkApplianceVpnBgp` - Return a Hub BGP Configuration
* `GetNetworkApplianceVpnSiteToSiteVpn` - Return the site-to-site VPN settings of a network
* `GetNetworkWirelessSsidVpn` - List the VPN settings for the SSID.
* `GetOrganizationApplianceVpnStats` - Show VPN history stat for networks in an organization
* `GetOrganizationApplianceVpnStatuses` - Show VPN status for networks in an organization
* `GetOrganizationApplianceVPNThirdPartyVPNPeers` - Return the third party VPN peers for an organization
* `GetOrganizationApplianceVpnVpnFirewallRules` - Return the firewall rules for an organization's site-to-site VPN
* `UpdateNetworkApplianceVpnBgp` - Update a Hub BGP Configuration
* `UpdateNetworkApplianceVpnSiteToSiteVpn` - Update the site-to-site VPN settings of a network
* `UpdateNetworkWirelessSsidVpn` - Update the VPN settings for the SSID
* `UpdateOrganizationApplianceVPNThirdPartyVPNPeers` - Update the third party VPN peers for an organization
* `UpdateOrganizationApplianceVpnVpnFirewallRules` - Update the firewall rules of an organization's site-to-site VPN

### VpnFirewallRules

* `GetOrganizationApplianceVpnVpnFirewallRules` - Return the firewall rules for an organization's site-to-site VPN
* `UpdateOrganizationApplianceVpnVpnFirewallRules` - Update the firewall rules of an organization's site-to-site VPN

### VppAccounts

* `GetOrganizationSmVppAccount` - Get a hash containing the unparsed token of the VPP account with the given ID
* `GetOrganizationSmVppAccounts` - List the VPP accounts in the organization

### WarmSpare

* `GetDeviceSwitchWarmSpare` - Return warm spare configuration for a switch
* `GetNetworkApplianceWarmSpare` - Return MX warm spare settings
* `SwapNetworkApplianceWarmSpare` - Swap MX primary and warm spare appliances
* `UpdateDeviceSwitchWarmSpare` - Update warm spare configuration for a switch
* `UpdateNetworkApplianceWarmSpare` - Update MX warm spare settings

### Warnings

* `GetNetworkSwitchDhcpServerPolicyArpInspectionWarningsByDevice` - Return the devices that have a Dynamic ARP Inspection warning and their warnings

### WebhookTests

* `CreateNetworkWebhooksWebhookTest` - Send a test webhook for a network
* `GetNetworkWebhooksWebhookTest` - Return the status of a webhook test for a network

### Webhooks

* `CreateNetworkWebhooksHTTPServer` - Add an HTTP server to a network
* `CreateNetworkWebhooksPayloadTemplate` - Create a webhook payload template for a network
* `CreateNetworkWebhooksWebhookTest` - Send a test webhook for a network
* `DeleteNetworkWebhooksHTTPServer` - Delete an HTTP server from a network
* `DeleteNetworkWebhooksPayloadTemplate` - Destroy a webhook payload template for a network
* `GetNetworkWebhooksHTTPServer` - Return an HTTP server for a network
* `GetNetworkWebhooksHTTPServers` - List the HTTP servers for a network
* `GetNetworkWebhooksPayloadTemplate` - Get the webhook payload template for a network
* `GetNetworkWebhooksPayloadTemplates` - List the webhook payload templates for a network
* `GetNetworkWebhooksWebhookTest` - Return the status of a webhook test for a network
* `GetOrganizationWebhooksAlertTypes` - Return a list of alert types to be used with managing webhook alerts
* `GetOrganizationWebhooksLogs` - Return the log of webhook POSTs sent
* `UpdateNetworkWebhooksHTTPServer` - Update an HTTP server
* `UpdateNetworkWebhooksPayloadTemplate` - Update a webhook payload template for a network

### Wireless

* `CreateNetworkWirelessRfProfile` - Creates new RF profile for this network
* `CreateNetworkWirelessSsidIdentityPsk` - Create an Identity PSK
* `DeleteNetworkWirelessRfProfile` - Delete a RF Profile
* `DeleteNetworkWirelessSsidIdentityPsk` - Delete an Identity PSK
* `GetDeviceWirelessBluetoothSettings` - Return the bluetooth settings for a wireless device
* `GetDeviceWirelessConnectionStats` - Aggregated connectivity info for a given AP on this network
* `GetDeviceWirelessLatencyStats` - Aggregated latency info for a given AP on this network
* `GetDeviceWirelessRadioSettings` - Return the radio settings of a device
* `GetDeviceWirelessStatus` - Return the SSID statuses of an access point
* `GetNetworkWirelessAirMarshal` - List Air Marshal scan results from a network
* `GetNetworkWirelessAlternateManagementInterface` - Return alternate management interface and devices with IP assigned
* `GetNetworkWirelessBilling` - Return the billing settings of this network
* `GetNetworkWirelessBluetoothSettings` - Return the Bluetooth settings for a network. <a href="https://documentation.meraki.com/MR/Bluetooth/Bluetooth_Low_Energy_(BLE)">Bluetooth settings</a> must be enabled on the network.
* `GetNetworkWirelessChannelUtilizationHistory` - Return AP channel utilization over time for a device or network client
* `GetNetworkWirelessClientConnectionStats` - Aggregated connectivity info for a given client on this network
* `GetNetworkWirelessClientConnectivityEvents` - List the wireless connectivity events for a client within a network in the timespan.
* `GetNetworkWirelessClientCountHistory` - Return wireless client counts over time for a network, device, or network client
* `GetNetworkWirelessClientLatencyHistory` - Return the latency history for a client
* `GetNetworkWirelessClientLatencyStats` - Aggregated latency info for a given client on this network
* `GetNetworkWirelessClientsConnectionStats` - Aggregated connectivity info for this network, grouped by clients
* `GetNetworkWirelessClientsLatencyStats` - Aggregated latency info for this network, grouped by clients
* `GetNetworkWirelessConnectionStats` - Aggregated connectivity info for this network
* `GetNetworkWirelessDataRateHistory` - Return PHY data rates over time for a network, device, or network client
* `GetNetworkWirelessDevicesConnectionStats` - Aggregated connectivity info for this network, grouped by node
* `GetNetworkWirelessDevicesLatencyStats` - Aggregated latency info for this network, grouped by node
* `GetNetworkWirelessFailedConnections` - List of all failed client connection events on this network in a given time range
* `GetNetworkWirelessLatencyHistory` - Return average wireless latency over time for a network, device, or network client
* `GetNetworkWirelessLatencyStats` - Aggregated latency info for this network
* `GetNetworkWirelessMeshStatuses` - List wireless mesh statuses for repeaters
* `GetNetworkWirelessRfProfile` - Return a RF profile
* `GetNetworkWirelessRfProfiles` - List the non-basic RF profiles for this network
* `GetNetworkWirelessSettings` - Return the wireless settings for a network
* `GetNetworkWirelessSignalQualityHistory` - Return signal quality (SNR/RSSI) over time for a device or network client
* `GetNetworkWirelessSsid` - Return a single MR SSID
* `GetNetworkWirelessSsidBonjourForwarding` - List the Bonjour forwarding setting and rules for the SSID
* `GetNetworkWirelessSsidDeviceTypeGroupPolicies` - List the device type group policies for the SSID
* `GetNetworkWirelessSsidEapOverride` - Return the EAP overridden parameters for an SSID
* `GetNetworkWirelessSsidFirewallL3FirewallRules` - Return the L3 firewall rules for an SSID on an MR network
* `GetNetworkWirelessSsidFirewallL7FirewallRules` - Return the L7 firewall rules for an SSID on an MR network
* `GetNetworkWirelessSsidHotspot20` - Return the Hotspot 2.0 settings for an SSID
* `GetNetworkWirelessSsidIdentityPsk` - Return an Identity PSK
* `GetNetworkWirelessSsidIdentityPsks` - List all Identity PSKs in a wireless network
* `GetNetworkWirelessSsidSchedules` - List the outage schedule for the SSID
* `GetNetworkWirelessSsidSplashSettings` - Display the splash page settings for the given SSID
* `GetNetworkWirelessSsidTrafficShapingRules` - Display the traffic shaping settings for a SSID on an MR network
* `GetNetworkWirelessSsidVpn` - List the VPN settings for the SSID.
* `GetNetworkWirelessSsids` - List the MR SSIDs in a network
* `GetNetworkWirelessUsageHistory` - Return AP usage over time for a device or network client
* `GetOrganizationWirelessDevicesEthernetStatuses` - Endpoint to see power status for wireless devices
* `UpdateDeviceWirelessBluetoothSettings` - Update the bluetooth settings for a wireless device
* `UpdateDeviceWirelessRadioSettings` - Update the radio settings of a device
* `UpdateNetworkWirelessAlternateManagementInterface` - Update alternate management interface and device static IP
* `UpdateNetworkWirelessBilling` - Update the billing settings
* `UpdateNetworkWirelessBluetoothSettings` - Update the Bluetooth settings for a network
* `UpdateNetworkWirelessRfProfile` - Updates specified RF profile for this network
* `UpdateNetworkWirelessSettings` - Update the wireless settings for a network
* `UpdateNetworkWirelessSsid` - Update the attributes of an MR SSID
* `UpdateNetworkWirelessSsidBonjourForwarding` - Update the bonjour forwarding setting and rules for the SSID
* `UpdateNetworkWirelessSsidDeviceTypeGroupPolicies` - Update the device type group policies for the SSID
* `UpdateNetworkWirelessSsidEapOverride` - Update the EAP overridden parameters for an SSID.
* `UpdateNetworkWirelessSsidFirewallL3FirewallRules` - Update the L3 firewall rules of an SSID on an MR network
* `UpdateNetworkWirelessSsidFirewallL7FirewallRules` - Update the L7 firewall rules of an SSID on an MR network
* `UpdateNetworkWirelessSsidHotspot20` - Update the Hotspot 2.0 settings of an SSID
* `UpdateNetworkWirelessSsidIdentityPsk` - Update an Identity PSK
* `UpdateNetworkWirelessSsidSchedules` - Update the outage schedule for the SSID
* `UpdateNetworkWirelessSsidSplashSettings` - Modify the splash page settings for the given SSID
* `UpdateNetworkWirelessSsidTrafficShapingRules` - Update the traffic shaping settings for an SSID on an MR network
* `UpdateNetworkWirelessSsidVpn` - Update the VPN settings for the SSID

### WirelessProfiles

* `CreateNetworkCameraWirelessProfile` - Creates a new camera wireless profile for this network.
* `DeleteNetworkCameraWirelessProfile` - Delete an existing camera wireless profile for this network.
* `GetDeviceCameraWirelessProfiles` - Returns wireless profile assigned to the given camera
* `GetNetworkCameraWirelessProfile` - Retrieve a single camera wireless profile.
* `GetNetworkCameraWirelessProfiles` - List the camera wireless profiles for this network.
* `UpdateDeviceCameraWirelessProfiles` - Assign wireless profiles to the given camera
* `UpdateNetworkCameraWirelessProfile` - Update an existing camera wireless profile in this network.

### WlanLists

* `GetNetworkSmDeviceWlanLists` - List the saved SSID names on a device

### Zones

* `GetDeviceCameraAnalyticsZoneHistory` - Return historical records for analytic zones
* `GetDeviceCameraAnalyticsZones` - Returns all configured analytic zones for this camera
<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
