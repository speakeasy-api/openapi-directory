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

<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### accessControlLists

* `getNetworkSwitchAccessControlLists` - Return the access control lists for a MS network
* `updateNetworkSwitchAccessControlLists` - Update the access control lists for a MS network

### accessPolicies

* `createNetworkSwitchAccessPolicy` - Create an access policy for a switch network
* `deleteNetworkSwitchAccessPolicy` - Delete an access policy for a switch network
* `getNetworkSwitchAccessPolicies` - List the access policies for a switch network
* `getNetworkSwitchAccessPolicy` - Return a specific access policy for a switch network
* `updateNetworkSwitchAccessPolicy` - Update an access policy for a switch network

### acls

* `createOrganizationAdaptivePolicyAcl` - Creates new adaptive policy ACL
* `deleteOrganizationAdaptivePolicyAcl` - Deletes the specified adaptive policy ACL
* `getOrganizationAdaptivePolicyAcl` - Returns the adaptive policy ACL information
* `getOrganizationAdaptivePolicyAcls` - List adaptive policy ACLs in a organization
* `updateOrganizationAdaptivePolicyAcl` - Updates an adaptive policy ACL

### actionBatches

* `createOrganizationActionBatch` - Create an action batch
* `deleteOrganizationActionBatch` - Delete an action batch
* `getOrganizationActionBatch` - Return an action batch
* `getOrganizationActionBatches` - Return the list of action batches in the organization
* `updateOrganizationActionBatch` - Update an action batch

### adaptivePolicy

* `createOrganizationAdaptivePolicyAcl` - Creates new adaptive policy ACL
* `createOrganizationAdaptivePolicyGroup` - Creates a new adaptive policy group
* `createOrganizationAdaptivePolicyPolicy` - Add an Adaptive Policy
* `deleteOrganizationAdaptivePolicyAcl` - Deletes the specified adaptive policy ACL
* `deleteOrganizationAdaptivePolicyGroup` - Deletes the specified adaptive policy group and any associated policies and references
* `deleteOrganizationAdaptivePolicyPolicy` - Delete an Adaptive Policy
* `getOrganizationAdaptivePolicyAcl` - Returns the adaptive policy ACL information
* `getOrganizationAdaptivePolicyAcls` - List adaptive policy ACLs in a organization
* `getOrganizationAdaptivePolicyGroup` - Returns an adaptive policy group
* `getOrganizationAdaptivePolicyGroups` - List adaptive policy groups in a organization
* `getOrganizationAdaptivePolicyOverview` - Returns adaptive policy aggregate statistics for an organization
* `getOrganizationAdaptivePolicyPolicies` - List adaptive policies in an organization
* `getOrganizationAdaptivePolicyPolicy` - Return an adaptive policy
* `getOrganizationAdaptivePolicySettings` - Returns global adaptive policy settings in an organization
* `updateOrganizationAdaptivePolicyAcl` - Updates an adaptive policy ACL
* `updateOrganizationAdaptivePolicyGroup` - Updates an adaptive policy group
* `updateOrganizationAdaptivePolicyPolicy` - Update an Adaptive Policy
* `updateOrganizationAdaptivePolicySettings` - Update global adaptive policy settings

### addresses

* `getOrganizationDevicesUplinksAddressesByDevice` - List the current uplink addresses for devices in an organization.

### administered

* `getAdministeredIdentitiesMe` - Returns the identity of the current user.

### admins

* `createOrganizationAdmin` - Create a new dashboard administrator
* `deleteOrganizationAdmin` - Revoke all access for a dashboard administrator within this organization
* `getOrganizationAdmins` - List the dashboard administrators in this organization
* `updateOrganizationAdmin` - Update an administrator

### airMarshal

* `getNetworkWirelessAirMarshal` - List Air Marshal scan results from a network

### alertTypes

* `getOrganizationWebhooksAlertTypes` - Return a list of alert types to be used with managing webhook alerts

### alerts

* `createNetworkSensorAlertsProfile` - Creates a sensor alert profile for a network.
* `createOrganizationAlertsProfile` - Create an organization-wide alert configuration
* `deleteNetworkSensorAlertsProfile` - Deletes a sensor alert profile from a network.
* `deleteOrganizationAlertsProfile` - Removes an organization-wide alert config
* `getNetworkAlertsHistory` - Return the alert history for this network
* `getNetworkAlertsSettings` - Return the alert configuration for this network
* `getNetworkHealthAlerts` - Return all global alerts on this network
* `getNetworkSensorAlertsCurrentOverviewByMetric` - Return an overview of currently alerting sensors by metric
* `getNetworkSensorAlertsOverviewByMetric` - Return an overview of alert occurrences over a timespan, by metric
* `getNetworkSensorAlertsProfile` - Show details of a sensor alert profile for a network.
* `getNetworkSensorAlertsProfiles` - Lists all sensor alert profiles for a network.
* `getOrganizationAlertsProfiles` - List all organization-wide alert configurations
* `updateNetworkAlertsSettings` - Update the alert configuration for this network
* `updateNetworkSensorAlertsProfile` - Updates a sensor alert profile for a network.
* `updateOrganizationAlertsProfile` - Update an organization-wide alert config

### alternateManagementInterface

* `getNetworkSwitchAlternateManagementInterface` - Return the switch alternate management interface for the network
* `getNetworkWirelessAlternateManagementInterface` - Return alternate management interface and devices with IP assigned
* `updateNetworkSwitchAlternateManagementInterface` - Update the switch alternate management interface for the network
* `updateNetworkWirelessAlternateManagementInterface` - Update alternate management interface and device static IP

### analytics

* `getDeviceCameraAnalyticsLive` - Returns live state from camera of analytics zones
* `getDeviceCameraAnalyticsOverview` - Returns an overview of aggregate analytics data for a timespan
* `getDeviceCameraAnalyticsRecent` - Returns most recent record for analytics zones
* `getDeviceCameraAnalyticsZoneHistory` - Return historical records for analytic zones
* `getDeviceCameraAnalyticsZones` - Returns all configured analytic zones for this camera

### apiRequests

* `getOrganizationApiRequests` - List the API requests made by an organization
* `getOrganizationApiRequestsOverview` - Return an aggregated overview of API requests data
* `getOrganizationApiRequestsOverviewResponseCodesByInterval` - Tracks organizations' API requests by response code across a given time period

### apnsCert

* `getOrganizationSmApnsCert` - Get the organization's APNS certificate

### appliance

* `createDeviceApplianceVmxAuthenticationToken` - Generate a new vMX authentication token
* `createNetworkAppliancePrefixesDelegatedStatic` - Add a static delegated prefix from a network
* `createNetworkApplianceStaticRoute` - Add a static route for an MX or teleworker network
* `createNetworkApplianceTrafficShapingCustomPerformanceClass` - Add a custom performance class for an MX network
* `createNetworkApplianceVlan` - Add a VLAN
* `deleteNetworkAppliancePrefixesDelegatedStatic` - Delete a static delegated prefix from a network
* `deleteNetworkApplianceStaticRoute` - Delete a static route from an MX or teleworker network
* `deleteNetworkApplianceTrafficShapingCustomPerformanceClass` - Delete a custom performance class from an MX network
* `deleteNetworkApplianceVlan` - Delete a VLAN from a network
* `getDeviceApplianceDhcpSubnets` - Return the DHCP subnet information for an appliance
* `getDeviceAppliancePerformance` - Return the performance score for a single MX
* `getDeviceAppliancePrefixesDelegated` - Return current delegated IPv6 prefixes on an appliance.
* `getDeviceAppliancePrefixesDelegatedVlanAssignments` - Return prefixes assigned to all IPv6 enabled VLANs on an appliance.
* `getDeviceApplianceUplinksSettings` - Return the uplink settings for an MX appliance
* `getNetworkApplianceClientSecurityEvents` - List the security events for a client
* `getNetworkApplianceConnectivityMonitoringDestinations` - Return the connectivity testing destinations for an MX network
* `getNetworkApplianceContentFiltering` - Return the content filtering settings for an MX network
* `getNetworkApplianceContentFilteringCategories` - List all available content filtering categories for an MX network
* `getNetworkApplianceFirewallCellularFirewallRules` - Return the cellular firewall rules for an MX network
* `getNetworkApplianceFirewallFirewalledService` - Return the accessibility settings of the given service ('ICMP', 'web', or 'SNMP')
* `getNetworkApplianceFirewallFirewalledServices` - List the appliance services and their accessibility rules
* `getNetworkApplianceFirewallInboundCellularFirewallRules` - Return the inbound cellular firewall rules for an MX network
* `getNetworkApplianceFirewallInboundFirewallRules` - Return the inbound firewall rules for an MX network
* `getNetworkApplianceFirewallL3FirewallRules` - Return the L3 firewall rules for an MX network
* `getNetworkApplianceFirewallL7FirewallRules` - List the MX L7 firewall rules for an MX network
* `getNetworkApplianceFirewallL7FirewallRulesApplicationCategories` - Return the L7 firewall application categories and their associated applications for an MX network
* `getNetworkApplianceFirewallOneToManyNatRules` - Return the 1:Many NAT mapping rules for an MX network
* `getNetworkApplianceFirewallOneToOneNatRules` - Return the 1:1 NAT mapping rules for an MX network
* `getNetworkApplianceFirewallPortForwardingRules` - Return the port forwarding rules for an MX network
* `getNetworkApplianceFirewallSettings` - Return the firewall settings for this network
* `getNetworkAppliancePort` - Return per-port VLAN settings for a single MX port.
* `getNetworkAppliancePorts` - List per-port VLAN settings for all ports of a MX.
* `getNetworkAppliancePrefixesDelegatedStatic` - Return a static delegated prefix from a network
* `getNetworkAppliancePrefixesDelegatedStatics` - List static delegated prefixes for a network
* `getNetworkApplianceSecurityEvents` - List the security events for a network
* `getNetworkApplianceSecurityIntrusion` - Returns all supported intrusion settings for an MX network
* `getNetworkApplianceSecurityMalware` - Returns all supported malware settings for an MX network
* `getNetworkApplianceSettings` - Return the appliance settings for a network
* `getNetworkApplianceSingleLan` - Return single LAN configuration
* `getNetworkApplianceSsid` - Return a single MX SSID
* `getNetworkApplianceSsids` - List the MX SSIDs in a network
* `getNetworkApplianceStaticRoute` - Return a static route for an MX or teleworker network
* `getNetworkApplianceStaticRoutes` - List the static routes for an MX or teleworker network
* `getNetworkApplianceTrafficShaping` - Display the traffic shaping settings for an MX network
* `getNetworkApplianceTrafficShapingCustomPerformanceClass` - Return a custom performance class for an MX network
* `getNetworkApplianceTrafficShapingCustomPerformanceClasses` - List all custom performance classes for an MX network
* `getNetworkApplianceTrafficShapingRules` - Display the traffic shaping settings rules for an MX network
* `getNetworkApplianceTrafficShapingUplinkBandwidth` - Returns the uplink bandwidth settings for your MX network.
* `getNetworkApplianceTrafficShapingUplinkSelection` - Show uplink selection settings for an MX network
* `getNetworkApplianceUplinksUsageHistory` - Get the sent and received bytes for each uplink of a network.
* `getNetworkApplianceVlan` - Return a VLAN
* `getNetworkApplianceVlans` - List the VLANs for an MX network
* `getNetworkApplianceVlansSettings` - Returns the enabled status of VLANs for the network
* `getNetworkApplianceVpnBgp` - Return a Hub BGP Configuration
* `getNetworkApplianceVpnSiteToSiteVpn` - Return the site-to-site VPN settings of a network
* `getNetworkApplianceWarmSpare` - Return MX warm spare settings
* `getOrganizationApplianceSecurityEvents` - List the security events for an organization
* `getOrganizationApplianceSecurityIntrusion` - Returns all supported intrusion settings for an organization
* `getOrganizationApplianceUplinkStatuses` - List the uplink status of every Meraki MX and Z series appliances in the organization
* `getOrganizationApplianceVpnStats` - Show VPN history stat for networks in an organization
* `getOrganizationApplianceVpnStatuses` - Show VPN status for networks in an organization
* `getOrganizationApplianceVPNThirdPartyVPNPeers` - Return the third party VPN peers for an organization
* `getOrganizationApplianceVpnVpnFirewallRules` - Return the firewall rules for an organization's site-to-site VPN
* `swapNetworkApplianceWarmSpare` - Swap MX primary and warm spare appliances
* `updateDeviceApplianceUplinksSettings` - Update the uplink settings for an MX appliance
* `updateNetworkApplianceConnectivityMonitoringDestinations` - Update the connectivity testing destinations for an MX network
* `updateNetworkApplianceContentFiltering` - Update the content filtering settings for an MX network
* `updateNetworkApplianceFirewallCellularFirewallRules` - Update the cellular firewall rules of an MX network
* `updateNetworkApplianceFirewallFirewalledService` - Updates the accessibility settings for the given service ('ICMP', 'web', or 'SNMP')
* `updateNetworkApplianceFirewallInboundCellularFirewallRules` - Update the inbound cellular firewall rules of an MX network
* `updateNetworkApplianceFirewallInboundFirewallRules` - Update the inbound firewall rules of an MX network
* `updateNetworkApplianceFirewallL3FirewallRules` - Update the L3 firewall rules of an MX network
* `updateNetworkApplianceFirewallL7FirewallRules` - Update the MX L7 firewall rules for an MX network
* `updateNetworkApplianceFirewallOneToManyNatRules` - Set the 1:Many NAT mapping rules for an MX network
* `updateNetworkApplianceFirewallOneToOneNatRules` - Set the 1:1 NAT mapping rules for an MX network
* `updateNetworkApplianceFirewallPortForwardingRules` - Update the port forwarding rules for an MX network
* `updateNetworkApplianceFirewallSettings` - Update the firewall settings for this network
* `updateNetworkAppliancePort` - Update the per-port VLAN settings for a single MX port.
* `updateNetworkAppliancePrefixesDelegatedStatic` - Update a static delegated prefix from a network
* `updateNetworkApplianceSecurityIntrusion` - Set the supported intrusion settings for an MX network
* `updateNetworkApplianceSecurityMalware` - Set the supported malware settings for an MX network
* `updateNetworkApplianceSettings` - Update the appliance settings for a network
* `updateNetworkApplianceSingleLan` - Update single LAN configuration
* `updateNetworkApplianceSsid` - Update the attributes of an MX SSID
* `updateNetworkApplianceStaticRoute` - Update a static route for an MX or teleworker network
* `updateNetworkApplianceTrafficShaping` - Update the traffic shaping settings for an MX network
* `updateNetworkApplianceTrafficShapingCustomPerformanceClass` - Update a custom performance class for an MX network
* `updateNetworkApplianceTrafficShapingRules` - Update the traffic shaping settings rules for an MX network
* `updateNetworkApplianceTrafficShapingUplinkBandwidth` - Updates the uplink bandwidth settings for your MX network.
* `updateNetworkApplianceTrafficShapingUplinkSelection` - Update uplink selection settings for an MX network
* `updateNetworkApplianceVlan` - Update a VLAN
* `updateNetworkApplianceVlansSettings` - Enable/Disable VLANs for the given network
* `updateNetworkApplianceVpnBgp` - Update a Hub BGP Configuration
* `updateNetworkApplianceVpnSiteToSiteVpn` - Update the site-to-site VPN settings of a network
* `updateNetworkApplianceWarmSpare` - Update MX warm spare settings
* `updateOrganizationApplianceSecurityIntrusion` - Sets supported intrusion settings for an organization
* `updateOrganizationApplianceVPNThirdPartyVPNPeers` - Update the third party VPN peers for an organization
* `updateOrganizationApplianceVpnVpnFirewallRules` - Update the firewall rules of an organization's site-to-site VPN

### appliances

* `getOrganizationSummaryTopAppliancesByUtilization` - Return the top 10 appliances sorted by utilization over given time range.

### applicationCategories

* `getNetworkApplianceFirewallL7FirewallRulesApplicationCategories` - Return the L7 firewall application categories and their associated applications for an MX network
* `getNetworkTrafficShapingApplicationCategories` - Returns the application categories for traffic shaping rules.

### applicationUsage

* `getNetworkClientsApplicationUsage` - Return the application usage data for clients

### applications

* `getNetworkInsightApplicationHealthByTime` - Get application health by time
* `getOrganizationInsightApplications` - List all Insight tracked applications

### arpInspection

* `createNetworkSwitchDhcpServerPolicyArpInspectionTrustedServer` - Add a server to be trusted by Dynamic ARP Inspection on this network
* `deleteNetworkSwitchDhcpServerPolicyArpInspectionTrustedServer` - Remove a server from being trusted by Dynamic ARP Inspection on this network
* `getNetworkSwitchDhcpServerPolicyArpInspectionTrustedServers` - Return the list of servers trusted by Dynamic ARP Inspection on this network
* `getNetworkSwitchDhcpServerPolicyArpInspectionWarningsByDevice` - Return the devices that have a Dynamic ARP Inspection warning and their warnings
* `updateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServer` - Update a server that is trusted by Dynamic ARP Inspection on this network

### artifacts

* `createOrganizationCameraCustomAnalyticsArtifact` - Create custom analytics artifact
* `deleteOrganizationCameraCustomAnalyticsArtifact` - Delete Custom Analytics Artifact
* `getOrganizationCameraCustomAnalyticsArtifact` - Get Custom Analytics Artifact
* `getOrganizationCameraCustomAnalyticsArtifacts` - List Custom Analytics Artifacts

### authenticationToken

* `createDeviceApplianceVmxAuthenticationToken` - Generate a new vMX authentication token

### availabilities

* `getOrganizationDevicesAvailabilities` - List the availability information for devices in an organization

### bandwidthUsageHistory

* `getNetworkClientsBandwidthUsageHistory` - Returns a timeseries of total traffic consumption rates for all clients on a network within a given timespan, in megabits per second.
* `getOrganizationClientsBandwidthUsageHistory` - Return data usage (in megabits per second) over time for all clients in the given organization within a given time range.

### bgp

* `getNetworkApplianceVpnBgp` - Return a Hub BGP Configuration
* `updateNetworkApplianceVpnBgp` - Update a Hub BGP Configuration

### billing

* `getNetworkWirelessBilling` - Return the billing settings of this network
* `updateNetworkWirelessBilling` - Update the billing settings

### bluetooth

* `getDeviceWirelessBluetoothSettings` - Return the bluetooth settings for a wireless device
* `getNetworkWirelessBluetoothSettings` - Return the Bluetooth settings for a network. <a href="https://documentation.meraki.com/MR/Bluetooth/Bluetooth_Low_Energy_(BLE)">Bluetooth settings</a> must be enabled on the network.
* `updateDeviceWirelessBluetoothSettings` - Update the bluetooth settings for a wireless device
* `updateNetworkWirelessBluetoothSettings` - Update the Bluetooth settings for a network

### bluetoothClients

* `getNetworkBluetoothClient` - Return a Bluetooth client
* `getNetworkBluetoothClients` - List the Bluetooth clients seen by APs in this network

### bonjourForwarding

* `getNetworkWirelessSsidBonjourForwarding` - List the Bonjour forwarding setting and rules for the SSID
* `updateNetworkWirelessSsidBonjourForwarding` - Update the bonjour forwarding setting and rules for the SSID

### brandingPolicies

* `createOrganizationBrandingPolicy` - Add a new branding policy to an organization
* `deleteOrganizationBrandingPolicy` - Delete a branding policy
* `getOrganizationBrandingPolicies` - List the branding policies of an organization
* `getOrganizationBrandingPoliciesPriorities` - Return the branding policy IDs of an organization in priority order
* `getOrganizationBrandingPolicy` - Return a branding policy
* `updateOrganizationBrandingPoliciesPriorities` - Update the priority ordering of an organization's branding policies.
* `updateOrganizationBrandingPolicy` - Update a branding policy

### byClient

* `getNetworkPoliciesByClient` - Get policies for all clients with policies

### byDevice

* `getNetworkSwitchDhcpServerPolicyArpInspectionWarningsByDevice` - Return the devices that have a Dynamic ARP Inspection warning and their warnings
* `getOrganizationDevicesPowerModulesStatusesByDevice` - List the power status information for devices in an organization
* `getOrganizationDevicesUplinksAddressesByDevice` - List the current uplink addresses for devices in an organization.
* `getOrganizationFirmwareUpgradesByDevice` - Get firmware upgrade status for the filtered devices

### byEnergyUsage

* `getOrganizationSummaryTopSwitchesByEnergyUsage` - Return metrics for organization's top 10 switches by energy usage over given time range

### byInterval

* `getOrganizationApiRequestsOverviewResponseCodesByInterval` - Tracks organizations' API requests by response code across a given time period

### byMetric

* `getNetworkSensorAlertsCurrentOverviewByMetric` - Return an overview of currently alerting sensors by metric
* `getNetworkSensorAlertsOverviewByMetric` - Return an overview of alert occurrences over a timespan, by metric

### bySwitch

* `getOrganizationSwitchPortsBySwitch` - List the switchports in an organization by switch

### byUsage

* `getOrganizationSummaryTopClientsByUsage` - Return metrics for organization's top 10 clients by data usage (in mb) over given time range.
* `getOrganizationSummaryTopClientsManufacturersByUsage` - Return metrics for organization's top clients by data usage (in mb) over given time range, grouped by manufacturer.
* `getOrganizationSummaryTopDevicesByUsage` - Return metrics for organization's top 10 devices sorted by data usage over given time range
* `getOrganizationSummaryTopDevicesModelsByUsage` - Return metrics for organization's top 10 device models sorted by data usage over given time range
* `getOrganizationSummaryTopSsidsByUsage` - Return metrics for organization's top 10 ssids by data usage over given time range

### byUtilization

* `getOrganizationSummaryTopAppliancesByUtilization` - Return the top 10 appliances sorted by utilization over given time range.

### bypassActivationLockAttempts

* `createNetworkSmBypassActivationLockAttempt` - Bypass activation lock attempt
* `getNetworkSmBypassActivationLockAttempt` - Bypass activation lock attempt status

### camera

* `createNetworkCameraQualityRetentionProfile` - Creates new quality retention profile for this network.
* `createNetworkCameraWirelessProfile` - Creates a new camera wireless profile for this network.
* `createOrganizationCameraCustomAnalyticsArtifact` - Create custom analytics artifact
* `deleteNetworkCameraQualityRetentionProfile` - Delete an existing quality retention profile for this network.
* `deleteNetworkCameraWirelessProfile` - Delete an existing camera wireless profile for this network.
* `deleteOrganizationCameraCustomAnalyticsArtifact` - Delete Custom Analytics Artifact
* `generateDeviceCameraSnapshot` - Generate a snapshot of what the camera sees at the specified time and return a link to that image.
* `getDeviceCameraAnalyticsLive` - Returns live state from camera of analytics zones
* `getDeviceCameraAnalyticsOverview` - Returns an overview of aggregate analytics data for a timespan
* `getDeviceCameraAnalyticsRecent` - Returns most recent record for analytics zones
* `getDeviceCameraAnalyticsZoneHistory` - Return historical records for analytic zones
* `getDeviceCameraAnalyticsZones` - Returns all configured analytic zones for this camera
* `getDeviceCameraCustomAnalytics` - Return custom analytics settings for a camera
* `getDeviceCameraQualityAndRetention` - Returns quality and retention settings for the given camera
* `getDeviceCameraSense` - Returns sense settings for a given camera
* `getDeviceCameraSenseObjectDetectionModels` - Returns the MV Sense object detection model list for the given camera
* `getDeviceCameraVideoLink` - Returns video link to the specified camera
* `getDeviceCameraVideoSettings` - Returns video settings for the given camera
* `getDeviceCameraWirelessProfiles` - Returns wireless profile assigned to the given camera
* `getNetworkCameraQualityRetentionProfile` - Retrieve a single quality retention profile
* `getNetworkCameraQualityRetentionProfiles` - List the quality retention profiles for this network
* `getNetworkCameraSchedules` - Returns a list of all camera recording schedules.
* `getNetworkCameraWirelessProfile` - Retrieve a single camera wireless profile.
* `getNetworkCameraWirelessProfiles` - List the camera wireless profiles for this network.
* `getOrganizationCameraCustomAnalyticsArtifact` - Get Custom Analytics Artifact
* `getOrganizationCameraCustomAnalyticsArtifacts` - List Custom Analytics Artifacts
* `getOrganizationCameraOnboardingStatuses` - Fetch onboarding status of cameras
* `updateDeviceCameraCustomAnalytics` - Update custom analytics settings for a camera
* `updateDeviceCameraQualityAndRetention` - Update quality and retention settings for the given camera
* `updateDeviceCameraSense` - Update sense settings for the given camera
* `updateDeviceCameraVideoSettings` - Update video settings for the given camera
* `updateDeviceCameraWirelessProfiles` - Assign wireless profiles to the given camera
* `updateNetworkCameraQualityRetentionProfile` - Update an existing quality retention profile for this network.
* `updateNetworkCameraWirelessProfile` - Update an existing camera wireless profile in this network.
* `updateOrganizationCameraOnboardingStatuses` - Notify that credential handoff to camera has completed

### categories

* `getNetworkApplianceContentFilteringCategories` - List all available content filtering categories for an MX network

### cellular

* `getDeviceCellularSims` - Return the SIM and APN configurations for a cellular device.
* `updateDeviceCellularSims` - Updates the SIM and APN configurations for a cellular device.

### cellularFirewallRules

* `getNetworkApplianceFirewallCellularFirewallRules` - Return the cellular firewall rules for an MX network
* `updateNetworkApplianceFirewallCellularFirewallRules` - Update the cellular firewall rules of an MX network

### cellularGateway

* `getDeviceCellularGatewayLan` - Show the LAN Settings of a MG
* `getDeviceCellularGatewayPortForwardingRules` - Returns the port forwarding rules for a single MG.
* `getNetworkCellularGatewayConnectivityMonitoringDestinations` - Return the connectivity testing destinations for an MG network
* `getNetworkCellularGatewayDhcp` - List common DHCP settings of MGs
* `getNetworkCellularGatewaySubnetPool` - Return the subnet pool and mask configured for MGs in the network.
* `getNetworkCellularGatewayUplink` - Returns the uplink settings for your MG network.
* `getOrganizationCellularGatewayUplinkStatuses` - List the uplink status of every Meraki MG cellular gateway in the organization
* `updateDeviceCellularGatewayLan` - Update the LAN Settings for a single MG.
* `updateDeviceCellularGatewayPortForwardingRules` - Updates the port forwarding rules for a single MG.
* `updateNetworkCellularGatewayConnectivityMonitoringDestinations` - Update the connectivity testing destinations for an MG network
* `updateNetworkCellularGatewayDhcp` - Update common DHCP settings of MGs
* `updateNetworkCellularGatewaySubnetPool` - Update the subnet pool and mask configuration for MGs in the network.
* `updateNetworkCellularGatewayUplink` - Updates the uplink settings for your MG network.

### cellularUsageHistory

* `getNetworkSmDeviceCellularUsageHistory` - Return the client's daily cellular data usage history

### certs

* `getNetworkSmDeviceCerts` - List the certs on a device

### channelUtilization

* `getNetworkNetworkHealthChannelUtilization` - Get the channel utilization over each radio for all APs in a network.

### channelUtilizationHistory

* `getNetworkWirelessChannelUtilizationHistory` - Return AP channel utilization over time for a device or network client

### claim

* `vmxNetworkDevicesClaim` - Claim a vMX into a network

### clientCountHistory

* `getNetworkWirelessClientCountHistory` - Return wireless client counts over time for a network, device, or network client

### clients

* `getDeviceClients` - List the clients of a device, up to a maximum of a month ago
* `getNetworkApplianceClientSecurityEvents` - List the security events for a client
* `getNetworkClient` - Return the client associated with the given identifier
* `getNetworkClientPolicy` - Return the policy assigned to a client on the network
* `getNetworkClientSplashAuthorizationStatus` - Return the splash authorization for a client, for each SSID they've associated with through splash
* `getNetworkClientTrafficHistory` - Return the client's network traffic data over time
* `getNetworkClientUsageHistory` - Return the client's daily usage history
* `getNetworkClients` - List the clients that have used this network in the timespan
* `getNetworkClientsApplicationUsage` - Return the application usage data for clients
* `getNetworkClientsBandwidthUsageHistory` - Returns a timeseries of total traffic consumption rates for all clients on a network within a given timespan, in megabits per second.
* `getNetworkClientsOverview` - Return overview statistics for network clients
* `getNetworkClientsUsageHistories` - Return the usage histories for clients
* `getNetworkWirelessClientConnectionStats` - Aggregated connectivity info for a given client on this network
* `getNetworkWirelessClientConnectivityEvents` - List the wireless connectivity events for a client within a network in the timespan.
* `getNetworkWirelessClientLatencyHistory` - Return the latency history for a client
* `getNetworkWirelessClientLatencyStats` - Aggregated latency info for a given client on this network
* `getNetworkWirelessClientsConnectionStats` - Aggregated connectivity info for this network, grouped by clients
* `getNetworkWirelessClientsLatencyStats` - Aggregated latency info for this network, grouped by clients
* `getOrganizationClientsBandwidthUsageHistory` - Return data usage (in megabits per second) over time for all clients in the given organization within a given time range.
* `getOrganizationClientsOverview` - Return summary information around client data usage (in mb) across the given organization.
* `getOrganizationClientsSearch` - Return the client details in an organization
* `getOrganizationSummaryTopClientsByUsage` - Return metrics for organization's top 10 clients by data usage (in mb) over given time range.
* `getOrganizationSummaryTopClientsManufacturersByUsage` - Return metrics for organization's top clients by data usage (in mb) over given time range, grouped by manufacturer.
* `provisionNetworkClients` - Provisions a client with a name and policy
* `updateNetworkClientPolicy` - Update the policy assigned to a client on the network
* `updateNetworkClientSplashAuthorizationStatus` - Update a client's splash authorization

### cloudMonitoring

* `createOrganizationInventoryOnboardingCloudMonitoringExportEvent` - Imports event logs related to the onboarding app into elastisearch
* `createOrganizationInventoryOnboardingCloudMonitoringImport` - Commits the import operation to complete the onboarding of a device into Dashboard for monitoring.
* `getOrganizationInventoryOnboardingCloudMonitoringImports` - Check the status of a committed Import operation
* `getOrganizationInventoryOnboardingCloudMonitoringNetworks` - Returns list of networks eligible for adding cloud monitored device

### configTemplates

* `createOrganizationConfigTemplate` - Create a new configuration template
* `deleteOrganizationConfigTemplate` - Remove a configuration template
* `getOrganizationConfigTemplate` - Return a single configuration template
* `getOrganizationConfigTemplateSwitchProfilePort` - Return a switch profile port
* `getOrganizationConfigTemplateSwitchProfilePorts` - Return all the ports of a switch profile
* `getOrganizationConfigTemplateSwitchProfiles` - List the switch profiles for your switch template configuration
* `getOrganizationConfigTemplates` - List the configuration templates for this organization
* `updateOrganizationConfigTemplate` - Update a configuration template
* `updateOrganizationConfigTemplateSwitchProfilePort` - Update a switch profile port

### configurationChanges

* `getOrganizationConfigurationChanges` - View the Change Log for your organization

### configure

* `addNetworkSwitchStack` - Add a switch to a stack
* `assignOrganizationLicensesSeats` - Assign SM seats to a network
* `bindNetwork` - Bind a network to a template.
* `checkinNetworkSmDevices` - Force check-in a set of devices
* `claimIntoOrganization` - Claim a list of devices, licenses, and/or orders into an organization
* `claimIntoOrganizationInventory` - Claim a list of devices, licenses, and/or orders into an organization inventory
* `claimNetworkDevices` - Claim devices into a network. (Note: for recently claimed devices, it may take a few minutes for API requsts against that device to succeed)
* `cloneOrganization` - Create a new organization by cloning the addressed organization
* `cloneOrganizationSwitchDevices` - Clone port-level and some switch-level configuration settings from a source switch to one or more target switches
* `combineOrganizationNetworks` - Combine multiple networks into a single network
* `createDeviceApplianceVmxAuthenticationToken` - Generate a new vMX authentication token
* `createDeviceSwitchRoutingInterface` - Create a layer 3 interface for a switch
* `createDeviceSwitchRoutingStaticRoute` - Create a layer 3 static route for a switch
* `createNetworkAppliancePrefixesDelegatedStatic` - Add a static delegated prefix from a network
* `createNetworkApplianceStaticRoute` - Add a static route for an MX or teleworker network
* `createNetworkApplianceTrafficShapingCustomPerformanceClass` - Add a custom performance class for an MX network
* `createNetworkApplianceVlan` - Add a VLAN
* `createNetworkCameraQualityRetentionProfile` - Creates new quality retention profile for this network.
* `createNetworkCameraWirelessProfile` - Creates a new camera wireless profile for this network.
* `createNetworkFirmwareUpgradesRollback` - Rollback a Firmware Upgrade For A Network
* `createNetworkFirmwareUpgradesStagedEvent` - Create a Staged Upgrade Event for a network
* `createNetworkFirmwareUpgradesStagedGroup` - Create a Staged Upgrade Group for a network
* `createNetworkFloorPlan` - Upload a floor plan
* `createNetworkGroupPolicy` - Create a group policy
* `createNetworkMerakiAuthUser` - Authorize a user configured with Meraki Authentication for a network (currently supports 802.1X, splash guest, and client VPN users, and currently, organizations have a 50,000 user cap)
* `createNetworkMqttBroker` - Add an MQTT broker
* `createNetworkPiiRequest` - Submit a new delete or restrict processing PII request
* `createNetworkSensorAlertsProfile` - Creates a sensor alert profile for a network.
* `createNetworkSmBypassActivationLockAttempt` - Bypass activation lock attempt
* `createNetworkSmTargetGroup` - Add a target group
* `createNetworkSwitchAccessPolicy` - Create an access policy for a switch network
* `createNetworkSwitchDhcpServerPolicyArpInspectionTrustedServer` - Add a server to be trusted by Dynamic ARP Inspection on this network
* `createNetworkSwitchLinkAggregation` - Create a link aggregation group
* `createNetworkSwitchPortSchedule` - Add a switch port schedule
* `createNetworkSwitchQosRule` - Add a quality of service rule
* `createNetworkSwitchRoutingMulticastRendezvousPoint` - Create a multicast rendezvous point
* `createNetworkSwitchStack` - Create a stack
* `createNetworkSwitchStackRoutingInterface` - Create a layer 3 interface for a switch stack
* `createNetworkSwitchStackRoutingStaticRoute` - Create a layer 3 static route for a switch stack
* `createNetworkWebhooksHttpServer` - Add an HTTP server to a network
* `createNetworkWebhooksPayloadTemplate` - Create a webhook payload template for a network
* `createNetworkWebhooksWebhookTest` - Send a test webhook for a network
* `createNetworkWirelessRfProfile` - Creates new RF profile for this network
* `createNetworkWirelessSsidIdentityPsk` - Create an Identity PSK
* `createOrganization` - Create a new organization
* `createOrganizationActionBatch` - Create an action batch
* `createOrganizationAdaptivePolicyAcl` - Creates new adaptive policy ACL
* `createOrganizationAdaptivePolicyGroup` - Creates a new adaptive policy group
* `createOrganizationAdaptivePolicyPolicy` - Add an Adaptive Policy
* `createOrganizationAdmin` - Create a new dashboard administrator
* `createOrganizationAlertsProfile` - Create an organization-wide alert configuration
* `createOrganizationBrandingPolicy` - Add a new branding policy to an organization
* `createOrganizationCameraCustomAnalyticsArtifact` - Create custom analytics artifact
* `createOrganizationConfigTemplate` - Create a new configuration template
* `createOrganizationEarlyAccessFeaturesOptIn` - Create a new early access feature opt-in for an organization
* `createOrganizationInsightMonitoredMediaServer` - Add a media server to be monitored for this organization
* `createOrganizationInventoryOnboardingCloudMonitoringExportEvent` - Imports event logs related to the onboarding app into elastisearch
* `createOrganizationInventoryOnboardingCloudMonitoringImport` - Commits the import operation to complete the onboarding of a device into Dashboard for monitoring.
* `createOrganizationNetwork` - Create a network
* `createOrganizationPolicyObject` - Creates a new Policy Object.
* `createOrganizationPolicyObjectsGroup` - Creates a new Policy Object Group.
* `createOrganizationSamlIdp` - Create a SAML IdP for your organization.
* `createOrganizationSamlRole` - Create a SAML role
* `deferNetworkFirmwareUpgradesStagedEvents` - Postpone by 1 week all pending staged upgrade stages for a network
* `deleteDeviceSwitchRoutingInterface` - Delete a layer 3 interface from the switch
* `deleteDeviceSwitchRoutingStaticRoute` - Delete a layer 3 static route for a switch
* `deleteNetwork` - Delete a network
* `deleteNetworkAppliancePrefixesDelegatedStatic` - Delete a static delegated prefix from a network
* `deleteNetworkApplianceStaticRoute` - Delete a static route from an MX or teleworker network
* `deleteNetworkApplianceTrafficShapingCustomPerformanceClass` - Delete a custom performance class from an MX network
* `deleteNetworkApplianceVlan` - Delete a VLAN from a network
* `deleteNetworkCameraQualityRetentionProfile` - Delete an existing quality retention profile for this network.
* `deleteNetworkCameraWirelessProfile` - Delete an existing camera wireless profile for this network.
* `deleteNetworkFirmwareUpgradesStagedGroup` - Delete a Staged Upgrade Group
* `deleteNetworkFloorPlan` - Destroy a floor plan
* `deleteNetworkGroupPolicy` - Delete a group policy
* `deleteNetworkMerakiAuthUser` - Deauthorize a user
* `deleteNetworkMqttBroker` - Delete an MQTT broker
* `deleteNetworkPiiRequest` - Delete a restrict processing PII request
* `deleteNetworkSensorAlertsProfile` - Deletes a sensor alert profile from a network.
* `deleteNetworkSmTargetGroup` - Delete a target group from a network
* `deleteNetworkSmUserAccessDevice` - Delete a User Access Device
* `deleteNetworkSwitchAccessPolicy` - Delete an access policy for a switch network
* `deleteNetworkSwitchDhcpServerPolicyArpInspectionTrustedServer` - Remove a server from being trusted by Dynamic ARP Inspection on this network
* `deleteNetworkSwitchLinkAggregation` - Split a link aggregation group into separate ports
* `deleteNetworkSwitchPortSchedule` - Delete a switch port schedule
* `deleteNetworkSwitchQosRule` - Delete a quality of service rule
* `deleteNetworkSwitchRoutingMulticastRendezvousPoint` - Delete a multicast rendezvous point
* `deleteNetworkSwitchStack` - Delete a stack
* `deleteNetworkSwitchStackRoutingInterface` - Delete a layer 3 interface from a switch stack
* `deleteNetworkSwitchStackRoutingStaticRoute` - Delete a layer 3 static route for a switch stack
* `deleteNetworkWebhooksHttpServer` - Delete an HTTP server from a network
* `deleteNetworkWebhooksPayloadTemplate` - Destroy a webhook payload template for a network
* `deleteNetworkWirelessRfProfile` - Delete a RF Profile
* `deleteNetworkWirelessSsidIdentityPsk` - Delete an Identity PSK
* `deleteOrganization` - Delete an organization
* `deleteOrganizationActionBatch` - Delete an action batch
* `deleteOrganizationAdaptivePolicyAcl` - Deletes the specified adaptive policy ACL
* `deleteOrganizationAdaptivePolicyGroup` - Deletes the specified adaptive policy group and any associated policies and references
* `deleteOrganizationAdaptivePolicyPolicy` - Delete an Adaptive Policy
* `deleteOrganizationAdmin` - Revoke all access for a dashboard administrator within this organization
* `deleteOrganizationAlertsProfile` - Removes an organization-wide alert config
* `deleteOrganizationBrandingPolicy` - Delete a branding policy
* `deleteOrganizationCameraCustomAnalyticsArtifact` - Delete Custom Analytics Artifact
* `deleteOrganizationConfigTemplate` - Remove a configuration template
* `deleteOrganizationEarlyAccessFeaturesOptIn` - Delete an early access feature opt-in
* `deleteOrganizationInsightMonitoredMediaServer` - Delete a monitored media server from this organization
* `deleteOrganizationPolicyObject` - Deletes a Policy Object.
* `deleteOrganizationPolicyObjectsGroup` - Deletes a Policy Object Group.
* `deleteOrganizationSamlIdp` - Remove a SAML IdP in your organization.
* `deleteOrganizationSamlRole` - Remove a SAML role
* `deleteOrganizationUser` - Delete a user and all of its authentication methods.
* `getDevice` - Return a single device
* `getDeviceApplianceUplinksSettings` - Return the uplink settings for an MX appliance
* `getDeviceCameraCustomAnalytics` - Return custom analytics settings for a camera
* `getDeviceCameraQualityAndRetention` - Returns quality and retention settings for the given camera
* `getDeviceCameraSense` - Returns sense settings for a given camera
* `getDeviceCameraSenseObjectDetectionModels` - Returns the MV Sense object detection model list for the given camera
* `getDeviceCameraVideoLink` - Returns video link to the specified camera
* `getDeviceCameraVideoSettings` - Returns video settings for the given camera
* `getDeviceCameraWirelessProfiles` - Returns wireless profile assigned to the given camera
* `getDeviceCellularGatewayLan` - Show the LAN Settings of a MG
* `getDeviceCellularGatewayPortForwardingRules` - Returns the port forwarding rules for a single MG.
* `getDeviceCellularSims` - Return the SIM and APN configurations for a cellular device.
* `getDeviceManagementInterface` - Return the management interface settings for a device
* `getDeviceSensorRelationships` - List the sensor roles for a given sensor or camera device.
* `getDeviceSwitchPort` - Return a switch port
* `getDeviceSwitchPorts` - List the switch ports for a switch
* `getDeviceSwitchRoutingInterface` - Return a layer 3 interface for a switch
* `getDeviceSwitchRoutingInterfaceDhcp` - Return a layer 3 interface DHCP configuration for a switch
* `getDeviceSwitchRoutingInterfaces` - List layer 3 interfaces for a switch
* `getDeviceSwitchRoutingStaticRoute` - Return a layer 3 static route for a switch
* `getDeviceSwitchRoutingStaticRoutes` - List layer 3 static routes for a switch
* `getDeviceSwitchWarmSpare` - Return warm spare configuration for a switch
* `getDeviceWirelessBluetoothSettings` - Return the bluetooth settings for a wireless device
* `getDeviceWirelessRadioSettings` - Return the radio settings of a device
* `getNetwork` - Return a network
* `getNetworkAlertsSettings` - Return the alert configuration for this network
* `getNetworkApplianceConnectivityMonitoringDestinations` - Return the connectivity testing destinations for an MX network
* `getNetworkApplianceContentFiltering` - Return the content filtering settings for an MX network
* `getNetworkApplianceContentFilteringCategories` - List all available content filtering categories for an MX network
* `getNetworkApplianceFirewallCellularFirewallRules` - Return the cellular firewall rules for an MX network
* `getNetworkApplianceFirewallFirewalledService` - Return the accessibility settings of the given service ('ICMP', 'web', or 'SNMP')
* `getNetworkApplianceFirewallFirewalledServices` - List the appliance services and their accessibility rules
* `getNetworkApplianceFirewallInboundCellularFirewallRules` - Return the inbound cellular firewall rules for an MX network
* `getNetworkApplianceFirewallInboundFirewallRules` - Return the inbound firewall rules for an MX network
* `getNetworkApplianceFirewallL3FirewallRules` - Return the L3 firewall rules for an MX network
* `getNetworkApplianceFirewallL7FirewallRules` - List the MX L7 firewall rules for an MX network
* `getNetworkApplianceFirewallL7FirewallRulesApplicationCategories` - Return the L7 firewall application categories and their associated applications for an MX network
* `getNetworkApplianceFirewallOneToManyNatRules` - Return the 1:Many NAT mapping rules for an MX network
* `getNetworkApplianceFirewallOneToOneNatRules` - Return the 1:1 NAT mapping rules for an MX network
* `getNetworkApplianceFirewallPortForwardingRules` - Return the port forwarding rules for an MX network
* `getNetworkApplianceFirewallSettings` - Return the firewall settings for this network
* `getNetworkAppliancePort` - Return per-port VLAN settings for a single MX port.
* `getNetworkAppliancePorts` - List per-port VLAN settings for all ports of a MX.
* `getNetworkAppliancePrefixesDelegatedStatic` - Return a static delegated prefix from a network
* `getNetworkAppliancePrefixesDelegatedStatics` - List static delegated prefixes for a network
* `getNetworkApplianceSecurityIntrusion` - Returns all supported intrusion settings for an MX network
* `getNetworkApplianceSecurityMalware` - Returns all supported malware settings for an MX network
* `getNetworkApplianceSettings` - Return the appliance settings for a network
* `getNetworkApplianceSingleLan` - Return single LAN configuration
* `getNetworkApplianceSsid` - Return a single MX SSID
* `getNetworkApplianceSsids` - List the MX SSIDs in a network
* `getNetworkApplianceStaticRoute` - Return a static route for an MX or teleworker network
* `getNetworkApplianceStaticRoutes` - List the static routes for an MX or teleworker network
* `getNetworkApplianceTrafficShaping` - Display the traffic shaping settings for an MX network
* `getNetworkApplianceTrafficShapingCustomPerformanceClass` - Return a custom performance class for an MX network
* `getNetworkApplianceTrafficShapingCustomPerformanceClasses` - List all custom performance classes for an MX network
* `getNetworkApplianceTrafficShapingRules` - Display the traffic shaping settings rules for an MX network
* `getNetworkApplianceTrafficShapingUplinkBandwidth` - Returns the uplink bandwidth settings for your MX network.
* `getNetworkApplianceTrafficShapingUplinkSelection` - Show uplink selection settings for an MX network
* `getNetworkApplianceVlan` - Return a VLAN
* `getNetworkApplianceVlans` - List the VLANs for an MX network
* `getNetworkApplianceVlansSettings` - Returns the enabled status of VLANs for the network
* `getNetworkApplianceVpnBgp` - Return a Hub BGP Configuration
* `getNetworkApplianceVpnSiteToSiteVpn` - Return the site-to-site VPN settings of a network
* `getNetworkApplianceWarmSpare` - Return MX warm spare settings
* `getNetworkCameraQualityRetentionProfile` - Retrieve a single quality retention profile
* `getNetworkCameraQualityRetentionProfiles` - List the quality retention profiles for this network
* `getNetworkCameraSchedules` - Returns a list of all camera recording schedules.
* `getNetworkCameraWirelessProfile` - Retrieve a single camera wireless profile.
* `getNetworkCameraWirelessProfiles` - List the camera wireless profiles for this network.
* `getNetworkCellularGatewayConnectivityMonitoringDestinations` - Return the connectivity testing destinations for an MG network
* `getNetworkCellularGatewayDhcp` - List common DHCP settings of MGs
* `getNetworkCellularGatewaySubnetPool` - Return the subnet pool and mask configured for MGs in the network.
* `getNetworkCellularGatewayUplink` - Returns the uplink settings for your MG network.
* `getNetworkClientPolicy` - Return the policy assigned to a client on the network
* `getNetworkClientSplashAuthorizationStatus` - Return the splash authorization for a client, for each SSID they've associated with through splash
* `getNetworkDevices` - List the devices in a network
* `getNetworkFirmwareUpgrades` - Get firmware upgrade information for a network
* `getNetworkFirmwareUpgradesStagedEvents` - Get the Staged Upgrade Event from a network
* `getNetworkFirmwareUpgradesStagedGroup` - Get a Staged Upgrade Group from a network
* `getNetworkFirmwareUpgradesStagedGroups` - List of Staged Upgrade Groups in a network
* `getNetworkFirmwareUpgradesStagedStages` - Order of Staged Upgrade Groups in a network
* `getNetworkFloorPlan` - Find a floor plan by ID
* `getNetworkFloorPlans` - List the floor plans that belong to your network
* `getNetworkGroupPolicies` - List the group policies in a network
* `getNetworkGroupPolicy` - Display a group policy
* `getNetworkHealthAlerts` - Return all global alerts on this network
* `getNetworkMerakiAuthUser` - Return the Meraki Auth splash guest, RADIUS, or client VPN user
* `getNetworkMerakiAuthUsers` - List the users configured under Meraki Authentication for a network (splash guest or RADIUS users for a wireless network, or client VPN users for a wired network)
* `getNetworkMqttBroker` - Return an MQTT broker
* `getNetworkMqttBrokers` - List the MQTT brokers for this network
* `getNetworkNetflow` - Return the NetFlow traffic reporting settings for a network
* `getNetworkPiiPiiKeys` - List the keys required to access Personally Identifiable Information (PII) for a given identifier
* `getNetworkPiiRequest` - Return a PII request
* `getNetworkPiiRequests` - List the PII requests for this network or organization
* `getNetworkPiiSmDevicesForKey` - Given a piece of Personally Identifiable Information (PII), return the Systems Manager device ID(s) associated with that identifier
* `getNetworkPiiSmOwnersForKey` - Given a piece of Personally Identifiable Information (PII), return the Systems Manager owner ID(s) associated with that identifier
* `getNetworkPoliciesByClient` - Get policies for all clients with policies
* `getNetworkSensorAlertsProfile` - Show details of a sensor alert profile for a network.
* `getNetworkSensorAlertsProfiles` - Lists all sensor alert profiles for a network.
* `getNetworkSensorRelationships` - List the sensor roles for devices in a given network
* `getNetworkSettings` - Return the settings for a network
* `getNetworkSmBypassActivationLockAttempt` - Bypass activation lock attempt status
* `getNetworkSmDeviceCerts` - List the certs on a device
* `getNetworkSmDeviceDeviceProfiles` - Get the installed profiles associated with a device
* `getNetworkSmDeviceNetworkAdapters` - List the network adapters of a device
* `getNetworkSmDeviceRestrictions` - List the restrictions on a device
* `getNetworkSmDeviceSecurityCenters` - List the security centers on a device
* `getNetworkSmDeviceSoftwares` - Get a list of softwares associated with a device
* `getNetworkSmDeviceWlanLists` - List the saved SSID names on a device
* `getNetworkSmDevices` - List the devices enrolled in an SM network with various specified fields and filters
* `getNetworkSmProfiles` - List all profiles in a network
* `getNetworkSmTargetGroup` - Return a target group
* `getNetworkSmTargetGroups` - List the target groups in this network
* `getNetworkSmTrustedAccessConfigs` - List Trusted Access Configs
* `getNetworkSmUserAccessDevices` - List User Access Devices and its Trusted Access Connections
* `getNetworkSmUserDeviceProfiles` - Get the profiles associated with a user
* `getNetworkSmUserSoftwares` - Get a list of softwares associated with a user
* `getNetworkSmUsers` - List the owners in an SM network with various specified fields and filters
* `getNetworkSnmp` - Return the SNMP settings for a network
* `getNetworkSwitchAccessControlLists` - Return the access control lists for a MS network
* `getNetworkSwitchAccessPolicies` - List the access policies for a switch network
* `getNetworkSwitchAccessPolicy` - Return a specific access policy for a switch network
* `getNetworkSwitchAlternateManagementInterface` - Return the switch alternate management interface for the network
* `getNetworkSwitchDhcpServerPolicy` - Return the DHCP server settings
* `getNetworkSwitchDhcpServerPolicyArpInspectionTrustedServers` - Return the list of servers trusted by Dynamic ARP Inspection on this network
* `getNetworkSwitchDhcpServerPolicyArpInspectionWarningsByDevice` - Return the devices that have a Dynamic ARP Inspection warning and their warnings
* `getNetworkSwitchDhcpV4ServersSeen` - Return the network's DHCPv4 servers seen within the selected timeframe (default 1 day)
* `getNetworkSwitchDscpToCosMappings` - Return the DSCP to CoS mappings
* `getNetworkSwitchLinkAggregations` - List link aggregation groups
* `getNetworkSwitchMtu` - Return the MTU configuration
* `getNetworkSwitchPortSchedules` - List switch port schedules
* `getNetworkSwitchQosRule` - Return a quality of service rule
* `getNetworkSwitchQosRules` - List quality of service rules
* `getNetworkSwitchQosRulesOrder` - Return the quality of service rule IDs by order in which they will be processed by the switch
* `getNetworkSwitchRoutingMulticast` - Return multicast settings for a network
* `getNetworkSwitchRoutingMulticastRendezvousPoint` - Return a multicast rendezvous point
* `getNetworkSwitchRoutingMulticastRendezvousPoints` - List multicast rendezvous points
* `getNetworkSwitchRoutingOspf` - Return layer 3 OSPF routing configuration
* `getNetworkSwitchSettings` - Returns the switch network settings
* `getNetworkSwitchStack` - Show a switch stack
* `getNetworkSwitchStackRoutingInterface` - Return a layer 3 interface from a switch stack
* `getNetworkSwitchStackRoutingInterfaceDhcp` - Return a layer 3 interface DHCP configuration for a switch stack
* `getNetworkSwitchStackRoutingInterfaces` - List layer 3 interfaces for a switch stack
* `getNetworkSwitchStackRoutingStaticRoute` - Return a layer 3 static route for a switch stack
* `getNetworkSwitchStackRoutingStaticRoutes` - List layer 3 static routes for a switch stack
* `getNetworkSwitchStacks` - List the switch stacks in a network
* `getNetworkSwitchStormControl` - Return the storm control configuration for a switch network
* `getNetworkSwitchStp` - Returns STP settings
* `getNetworkSyslogServers` - List the syslog servers for a network
* `getNetworkTrafficAnalysis` - Return the traffic analysis settings for a network
* `getNetworkTrafficShapingApplicationCategories` - Returns the application categories for traffic shaping rules.
* `getNetworkTrafficShapingDscpTaggingOptions` - Returns the available DSCP tagging options for your traffic shaping rules.
* `getNetworkWebhooksHttpServer` - Return an HTTP server for a network
* `getNetworkWebhooksHttpServers` - List the HTTP servers for a network
* `getNetworkWebhooksPayloadTemplate` - Get the webhook payload template for a network
* `getNetworkWebhooksPayloadTemplates` - List the webhook payload templates for a network
* `getNetworkWebhooksWebhookTest` - Return the status of a webhook test for a network
* `getNetworkWirelessAlternateManagementInterface` - Return alternate management interface and devices with IP assigned
* `getNetworkWirelessBilling` - Return the billing settings of this network
* `getNetworkWirelessBluetoothSettings` - Return the Bluetooth settings for a network. <a href="https://documentation.meraki.com/MR/Bluetooth/Bluetooth_Low_Energy_(BLE)">Bluetooth settings</a> must be enabled on the network.
* `getNetworkWirelessRfProfile` - Return a RF profile
* `getNetworkWirelessRfProfiles` - List the non-basic RF profiles for this network
* `getNetworkWirelessSettings` - Return the wireless settings for a network
* `getNetworkWirelessSsid` - Return a single MR SSID
* `getNetworkWirelessSsidBonjourForwarding` - List the Bonjour forwarding setting and rules for the SSID
* `getNetworkWirelessSsidDeviceTypeGroupPolicies` - List the device type group policies for the SSID
* `getNetworkWirelessSsidEapOverride` - Return the EAP overridden parameters for an SSID
* `getNetworkWirelessSsidFirewallL3FirewallRules` - Return the L3 firewall rules for an SSID on an MR network
* `getNetworkWirelessSsidFirewallL7FirewallRules` - Return the L7 firewall rules for an SSID on an MR network
* `getNetworkWirelessSsidHotspot20` - Return the Hotspot 2.0 settings for an SSID
* `getNetworkWirelessSsidIdentityPsk` - Return an Identity PSK
* `getNetworkWirelessSsidIdentityPsks` - List all Identity PSKs in a wireless network
* `getNetworkWirelessSsidSchedules` - List the outage schedule for the SSID
* `getNetworkWirelessSsidSplashSettings` - Display the splash page settings for the given SSID
* `getNetworkWirelessSsidTrafficShapingRules` - Display the traffic shaping settings for a SSID on an MR network
* `getNetworkWirelessSsidVpn` - List the VPN settings for the SSID.
* `getNetworkWirelessSsids` - List the MR SSIDs in a network
* `getOrganization` - Return an organization
* `getOrganizationActionBatch` - Return an action batch
* `getOrganizationActionBatches` - Return the list of action batches in the organization
* `getOrganizationAdaptivePolicyAcl` - Returns the adaptive policy ACL information
* `getOrganizationAdaptivePolicyAcls` - List adaptive policy ACLs in a organization
* `getOrganizationAdaptivePolicyGroup` - Returns an adaptive policy group
* `getOrganizationAdaptivePolicyGroups` - List adaptive policy groups in a organization
* `getOrganizationAdaptivePolicyPolicies` - List adaptive policies in an organization
* `getOrganizationAdaptivePolicyPolicy` - Return an adaptive policy
* `getOrganizationAdaptivePolicySettings` - Returns global adaptive policy settings in an organization
* `getOrganizationAdmins` - List the dashboard administrators in this organization
* `getOrganizationAlertsProfiles` - List all organization-wide alert configurations
* `getOrganizationApplianceSecurityIntrusion` - Returns all supported intrusion settings for an organization
* `getOrganizationApplianceVPNThirdPartyVPNPeers` - Return the third party VPN peers for an organization
* `getOrganizationApplianceVpnVpnFirewallRules` - Return the firewall rules for an organization's site-to-site VPN
* `getOrganizationBrandingPolicies` - List the branding policies of an organization
* `getOrganizationBrandingPoliciesPriorities` - Return the branding policy IDs of an organization in priority order
* `getOrganizationBrandingPolicy` - Return a branding policy
* `getOrganizationCameraCustomAnalyticsArtifact` - Get Custom Analytics Artifact
* `getOrganizationCameraCustomAnalyticsArtifacts` - List Custom Analytics Artifacts
* `getOrganizationCameraOnboardingStatuses` - Fetch onboarding status of cameras
* `getOrganizationClientsSearch` - Return the client details in an organization
* `getOrganizationConfigTemplate` - Return a single configuration template
* `getOrganizationConfigTemplateSwitchProfilePort` - Return a switch profile port
* `getOrganizationConfigTemplateSwitchProfilePorts` - Return all the ports of a switch profile
* `getOrganizationConfigTemplateSwitchProfiles` - List the switch profiles for your switch template configuration
* `getOrganizationConfigTemplates` - List the configuration templates for this organization
* `getOrganizationDevices` - List the devices in an organization
* `getOrganizationEarlyAccessFeatures` - List the available early access features for organization
* `getOrganizationEarlyAccessFeaturesOptIn` - Show an early access feature opt-in for an organization
* `getOrganizationEarlyAccessFeaturesOptIns` - List the early access feature opt-ins for an organization
* `getOrganizationFirmwareUpgrades` - Get firmware upgrade information for an organization
* `getOrganizationFirmwareUpgradesByDevice` - Get firmware upgrade status for the filtered devices
* `getOrganizationInsightApplications` - List all Insight tracked applications
* `getOrganizationInsightMonitoredMediaServer` - Return a monitored media server for this organization
* `getOrganizationInsightMonitoredMediaServers` - List the monitored media servers for this organization
* `getOrganizationInventoryDevice` - Return a single device from the inventory of an organization
* `getOrganizationInventoryDevices` - Return the device inventory for an organization
* `getOrganizationInventoryOnboardingCloudMonitoringImports` - Check the status of a committed Import operation
* `getOrganizationInventoryOnboardingCloudMonitoringNetworks` - Returns list of networks eligible for adding cloud monitored device
* `getOrganizationLicense` - Display a license
* `getOrganizationLicenses` - List the licenses for an organization
* `getOrganizationLicensingCotermLicenses` - List the licenses in a coterm organization
* `getOrganizationLoginSecurity` - Returns the login security settings for an organization.
* `getOrganizationNetworks` - List the networks that the user has privileges on in an organization
* `getOrganizationPolicyObject` - Shows details of a Policy Object.
* `getOrganizationPolicyObjects` - Lists Policy Objects belonging to the organization.
* `getOrganizationPolicyObjectsGroup` - Shows details of a Policy Object Group.
* `getOrganizationPolicyObjectsGroups` - Lists Policy Object Groups belonging to the organization.
* `getOrganizationSaml` - Returns the SAML SSO enabled settings for an organization.
* `getOrganizationSamlIdp` - Get a SAML IdP from your organization.
* `getOrganizationSamlIdps` - List the SAML IdPs in your organization.
* `getOrganizationSamlRole` - Return a SAML role
* `getOrganizationSamlRoles` - List the SAML roles for this organization
* `getOrganizationSmApnsCert` - Get the organization's APNS certificate
* `getOrganizationSmVppAccount` - Get a hash containing the unparsed token of the VPP account with the given ID
* `getOrganizationSmVppAccounts` - List the VPP accounts in the organization
* `getOrganizationSnmp` - Return the SNMP settings for an organization
* `getOrganizationSwitchPortsBySwitch` - List the switchports in an organization by switch
* `getOrganizationWirelessDevicesEthernetStatuses` - Endpoint to see power status for wireless devices
* `getOrganizations` - List the organizations that the user has privileges on
* `lockNetworkSmDevices` - Lock a set of devices
* `modifyNetworkSmDevicesTags` - Add, delete, or update the tags of a set of devices
* `moveNetworkSmDevices` - Move a set of devices to a new network
* `moveOrganizationLicenses` - Move licenses to another organization
* `moveOrganizationLicensesSeats` - Move SM seats to another organization
* `moveOrganizationLicensingCotermLicenses` - Moves a license to a different organization (coterm only)
* `provisionNetworkClients` - Provisions a client with a name and policy
* `refreshNetworkSmDeviceDetails` - Refresh the details of a device
* `releaseFromOrganizationInventory` - Release a list of claimed devices from an organization.
* `removeNetworkDevices` - Remove a single device
* `removeNetworkSwitchStack` - Remove a switch from a stack
* `renewOrganizationLicensesSeats` - Renew SM seats of a license
* `rollbacksNetworkFirmwareUpgradesStagedEvents` - Rollback a Staged Upgrade Event for a network
* `splitNetwork` - Split a combined network into individual networks for each type of device
* `swapNetworkApplianceWarmSpare` - Swap MX primary and warm spare appliances
* `unbindNetwork` - Unbind a network from a template.
* `unenrollNetworkSmDevice` - Unenroll a device
* `updateDevice` - Update the attributes of a device
* `updateDeviceApplianceUplinksSettings` - Update the uplink settings for an MX appliance
* `updateDeviceCameraCustomAnalytics` - Update custom analytics settings for a camera
* `updateDeviceCameraQualityAndRetention` - Update quality and retention settings for the given camera
* `updateDeviceCameraSense` - Update sense settings for the given camera
* `updateDeviceCameraVideoSettings` - Update video settings for the given camera
* `updateDeviceCameraWirelessProfiles` - Assign wireless profiles to the given camera
* `updateDeviceCellularGatewayLan` - Update the LAN Settings for a single MG.
* `updateDeviceCellularGatewayPortForwardingRules` - Updates the port forwarding rules for a single MG.
* `updateDeviceCellularSims` - Updates the SIM and APN configurations for a cellular device.
* `updateDeviceManagementInterface` - Update the management interface settings for a device
* `updateDeviceSensorRelationships` - Assign one or more sensor roles to a given sensor or camera device.
* `updateDeviceSwitchPort` - Update a switch port
* `updateDeviceSwitchRoutingInterface` - Update a layer 3 interface for a switch
* `updateDeviceSwitchRoutingInterfaceDhcp` - Update a layer 3 interface DHCP configuration for a switch
* `updateDeviceSwitchRoutingStaticRoute` - Update a layer 3 static route for a switch
* `updateDeviceSwitchWarmSpare` - Update warm spare configuration for a switch
* `updateDeviceWirelessBluetoothSettings` - Update the bluetooth settings for a wireless device
* `updateDeviceWirelessRadioSettings` - Update the radio settings of a device
* `updateNetwork` - Update a network
* `updateNetworkAlertsSettings` - Update the alert configuration for this network
* `updateNetworkApplianceConnectivityMonitoringDestinations` - Update the connectivity testing destinations for an MX network
* `updateNetworkApplianceContentFiltering` - Update the content filtering settings for an MX network
* `updateNetworkApplianceFirewallCellularFirewallRules` - Update the cellular firewall rules of an MX network
* `updateNetworkApplianceFirewallFirewalledService` - Updates the accessibility settings for the given service ('ICMP', 'web', or 'SNMP')
* `updateNetworkApplianceFirewallInboundCellularFirewallRules` - Update the inbound cellular firewall rules of an MX network
* `updateNetworkApplianceFirewallInboundFirewallRules` - Update the inbound firewall rules of an MX network
* `updateNetworkApplianceFirewallL3FirewallRules` - Update the L3 firewall rules of an MX network
* `updateNetworkApplianceFirewallL7FirewallRules` - Update the MX L7 firewall rules for an MX network
* `updateNetworkApplianceFirewallOneToManyNatRules` - Set the 1:Many NAT mapping rules for an MX network
* `updateNetworkApplianceFirewallOneToOneNatRules` - Set the 1:1 NAT mapping rules for an MX network
* `updateNetworkApplianceFirewallPortForwardingRules` - Update the port forwarding rules for an MX network
* `updateNetworkApplianceFirewallSettings` - Update the firewall settings for this network
* `updateNetworkAppliancePort` - Update the per-port VLAN settings for a single MX port.
* `updateNetworkAppliancePrefixesDelegatedStatic` - Update a static delegated prefix from a network
* `updateNetworkApplianceSecurityIntrusion` - Set the supported intrusion settings for an MX network
* `updateNetworkApplianceSecurityMalware` - Set the supported malware settings for an MX network
* `updateNetworkApplianceSettings` - Update the appliance settings for a network
* `updateNetworkApplianceSingleLan` - Update single LAN configuration
* `updateNetworkApplianceSsid` - Update the attributes of an MX SSID
* `updateNetworkApplianceStaticRoute` - Update a static route for an MX or teleworker network
* `updateNetworkApplianceTrafficShaping` - Update the traffic shaping settings for an MX network
* `updateNetworkApplianceTrafficShapingCustomPerformanceClass` - Update a custom performance class for an MX network
* `updateNetworkApplianceTrafficShapingRules` - Update the traffic shaping settings rules for an MX network
* `updateNetworkApplianceTrafficShapingUplinkBandwidth` - Updates the uplink bandwidth settings for your MX network.
* `updateNetworkApplianceTrafficShapingUplinkSelection` - Update uplink selection settings for an MX network
* `updateNetworkApplianceVlan` - Update a VLAN
* `updateNetworkApplianceVlansSettings` - Enable/Disable VLANs for the given network
* `updateNetworkApplianceVpnBgp` - Update a Hub BGP Configuration
* `updateNetworkApplianceVpnSiteToSiteVpn` - Update the site-to-site VPN settings of a network
* `updateNetworkApplianceWarmSpare` - Update MX warm spare settings
* `updateNetworkCameraQualityRetentionProfile` - Update an existing quality retention profile for this network.
* `updateNetworkCameraWirelessProfile` - Update an existing camera wireless profile in this network.
* `updateNetworkCellularGatewayConnectivityMonitoringDestinations` - Update the connectivity testing destinations for an MG network
* `updateNetworkCellularGatewayDhcp` - Update common DHCP settings of MGs
* `updateNetworkCellularGatewaySubnetPool` - Update the subnet pool and mask configuration for MGs in the network.
* `updateNetworkCellularGatewayUplink` - Updates the uplink settings for your MG network.
* `updateNetworkClientPolicy` - Update the policy assigned to a client on the network
* `updateNetworkClientSplashAuthorizationStatus` - Update a client's splash authorization
* `updateNetworkFirmwareUpgrades` - Update firmware upgrade information for a network
* `updateNetworkFirmwareUpgradesStagedEvents` - Update the Staged Upgrade Event for a network
* `updateNetworkFirmwareUpgradesStagedGroup` - Update a Staged Upgrade Group for a network
* `updateNetworkFirmwareUpgradesStagedStages` - Assign Staged Upgrade Group order in the sequence.
* `updateNetworkFloorPlan` - Update a floor plan's geolocation and other meta data
* `updateNetworkGroupPolicy` - Update a group policy
* `updateNetworkMerakiAuthUser` - Update a user configured with Meraki Authentication (currently, 802.1X RADIUS, splash guest, and client VPN users can be updated)
* `updateNetworkMqttBroker` - Update an MQTT broker
* `updateNetworkNetflow` - Update the NetFlow traffic reporting settings for a network
* `updateNetworkSensorAlertsProfile` - Updates a sensor alert profile for a network.
* `updateNetworkSettings` - Update the settings for a network
* `updateNetworkSmDevicesFields` - Modify the fields of a device
* `updateNetworkSmTargetGroup` - Update a target group
* `updateNetworkSnmp` - Update the SNMP settings for a network
* `updateNetworkSwitchAccessControlLists` - Update the access control lists for a MS network
* `updateNetworkSwitchAccessPolicy` - Update an access policy for a switch network
* `updateNetworkSwitchAlternateManagementInterface` - Update the switch alternate management interface for the network
* `updateNetworkSwitchDhcpServerPolicy` - Update the DHCP server settings
* `updateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServer` - Update a server that is trusted by Dynamic ARP Inspection on this network
* `updateNetworkSwitchDscpToCosMappings` - Update the DSCP to CoS mappings
* `updateNetworkSwitchLinkAggregation` - Update a link aggregation group
* `updateNetworkSwitchMtu` - Update the MTU configuration
* `updateNetworkSwitchPortSchedule` - Update a switch port schedule
* `updateNetworkSwitchQosRule` - Update a quality of service rule
* `updateNetworkSwitchQosRulesOrder` - Update the order in which the rules should be processed by the switch
* `updateNetworkSwitchRoutingMulticast` - Update multicast settings for a network
* `updateNetworkSwitchRoutingMulticastRendezvousPoint` - Update a multicast rendezvous point
* `updateNetworkSwitchRoutingOspf` - Update layer 3 OSPF routing configuration
* `updateNetworkSwitchSettings` - Update switch network settings
* `updateNetworkSwitchStackRoutingInterface` - Update a layer 3 interface for a switch stack
* `updateNetworkSwitchStackRoutingInterfaceDhcp` - Update a layer 3 interface DHCP configuration for a switch stack
* `updateNetworkSwitchStackRoutingStaticRoute` - Update a layer 3 static route for a switch stack
* `updateNetworkSwitchStormControl` - Update the storm control configuration for a switch network
* `updateNetworkSwitchStp` - Updates STP settings
* `updateNetworkSyslogServers` - Update the syslog servers for a network
* `updateNetworkTrafficAnalysis` - Update the traffic analysis settings for a network
* `updateNetworkWebhooksHttpServer` - Update an HTTP server
* `updateNetworkWebhooksPayloadTemplate` - Update a webhook payload template for a network
* `updateNetworkWirelessAlternateManagementInterface` - Update alternate management interface and device static IP
* `updateNetworkWirelessBilling` - Update the billing settings
* `updateNetworkWirelessBluetoothSettings` - Update the Bluetooth settings for a network
* `updateNetworkWirelessRfProfile` - Updates specified RF profile for this network
* `updateNetworkWirelessSettings` - Update the wireless settings for a network
* `updateNetworkWirelessSsid` - Update the attributes of an MR SSID
* `updateNetworkWirelessSsidBonjourForwarding` - Update the bonjour forwarding setting and rules for the SSID
* `updateNetworkWirelessSsidDeviceTypeGroupPolicies` - Update the device type group policies for the SSID
* `updateNetworkWirelessSsidEapOverride` - Update the EAP overridden parameters for an SSID.
* `updateNetworkWirelessSsidFirewallL3FirewallRules` - Update the L3 firewall rules of an SSID on an MR network
* `updateNetworkWirelessSsidFirewallL7FirewallRules` - Update the L7 firewall rules of an SSID on an MR network
* `updateNetworkWirelessSsidHotspot20` - Update the Hotspot 2.0 settings of an SSID
* `updateNetworkWirelessSsidIdentityPsk` - Update an Identity PSK
* `updateNetworkWirelessSsidSchedules` - Update the outage schedule for the SSID
* `updateNetworkWirelessSsidSplashSettings` - Modify the splash page settings for the given SSID
* `updateNetworkWirelessSsidTrafficShapingRules` - Update the traffic shaping settings for an SSID on an MR network
* `updateNetworkWirelessSsidVpn` - Update the VPN settings for the SSID
* `updateOrganization` - Update an organization
* `updateOrganizationActionBatch` - Update an action batch
* `updateOrganizationAdaptivePolicyAcl` - Updates an adaptive policy ACL
* `updateOrganizationAdaptivePolicyGroup` - Updates an adaptive policy group
* `updateOrganizationAdaptivePolicyPolicy` - Update an Adaptive Policy
* `updateOrganizationAdaptivePolicySettings` - Update global adaptive policy settings
* `updateOrganizationAdmin` - Update an administrator
* `updateOrganizationAlertsProfile` - Update an organization-wide alert config
* `updateOrganizationApplianceSecurityIntrusion` - Sets supported intrusion settings for an organization
* `updateOrganizationApplianceVPNThirdPartyVPNPeers` - Update the third party VPN peers for an organization
* `updateOrganizationApplianceVpnVpnFirewallRules` - Update the firewall rules of an organization's site-to-site VPN
* `updateOrganizationBrandingPoliciesPriorities` - Update the priority ordering of an organization's branding policies.
* `updateOrganizationBrandingPolicy` - Update a branding policy
* `updateOrganizationCameraOnboardingStatuses` - Notify that credential handoff to camera has completed
* `updateOrganizationConfigTemplate` - Update a configuration template
* `updateOrganizationConfigTemplateSwitchProfilePort` - Update a switch profile port
* `updateOrganizationEarlyAccessFeaturesOptIn` - Update an early access feature opt-in for an organization
* `updateOrganizationInsightMonitoredMediaServer` - Update a monitored media server for this organization
* `updateOrganizationLicense` - Update a license
* `updateOrganizationLoginSecurity` - Update the login security settings for an organization
* `updateOrganizationPolicyObject` - Updates a Policy Object.
* `updateOrganizationPolicyObjectsGroup` - Updates a Policy Object Group.
* `updateOrganizationSaml` - Updates the SAML SSO enabled settings for an organization.
* `updateOrganizationSamlIdp` - Update a SAML IdP in your organization
* `updateOrganizationSamlRole` - Update a SAML role
* `updateOrganizationSnmp` - Update the SNMP settings for an organization
* `vmxNetworkDevicesClaim` - Claim a vMX into a network
* `wipeNetworkSmDevices` - Wipe a device

### connectionStats

* `getDeviceWirelessConnectionStats` - Aggregated connectivity info for a given AP on this network
* `getNetworkWirelessClientConnectionStats` - Aggregated connectivity info for a given client on this network
* `getNetworkWirelessClientsConnectionStats` - Aggregated connectivity info for this network, grouped by clients
* `getNetworkWirelessConnectionStats` - Aggregated connectivity info for this network
* `getNetworkWirelessDevicesConnectionStats` - Aggregated connectivity info for this network, grouped by node

### connectivity

* `getNetworkSmDeviceConnectivity` - Returns historical connectivity data (whether a device is regularly checking in to Dashboard).

### connectivityEvents

* `getNetworkWirelessClientConnectivityEvents` - List the wireless connectivity events for a client within a network in the timespan.

### connectivityMonitoringDestinations

* `getNetworkApplianceConnectivityMonitoringDestinations` - Return the connectivity testing destinations for an MX network
* `getNetworkCellularGatewayConnectivityMonitoringDestinations` - Return the connectivity testing destinations for an MG network
* `updateNetworkApplianceConnectivityMonitoringDestinations` - Update the connectivity testing destinations for an MX network
* `updateNetworkCellularGatewayConnectivityMonitoringDestinations` - Update the connectivity testing destinations for an MG network

### contentFiltering

* `getNetworkApplianceContentFiltering` - Return the content filtering settings for an MX network
* `getNetworkApplianceContentFilteringCategories` - List all available content filtering categories for an MX network
* `updateNetworkApplianceContentFiltering` - Update the content filtering settings for an MX network

### coterm

* `getOrganizationLicensingCotermLicenses` - List the licenses in a coterm organization
* `moveOrganizationLicensingCotermLicenses` - Moves a license to a different organization (coterm only)

### current

* `getNetworkSensorAlertsCurrentOverviewByMetric` - Return an overview of currently alerting sensors by metric

### customAnalytics

* `createOrganizationCameraCustomAnalyticsArtifact` - Create custom analytics artifact
* `deleteOrganizationCameraCustomAnalyticsArtifact` - Delete Custom Analytics Artifact
* `getDeviceCameraCustomAnalytics` - Return custom analytics settings for a camera
* `getOrganizationCameraCustomAnalyticsArtifact` - Get Custom Analytics Artifact
* `getOrganizationCameraCustomAnalyticsArtifacts` - List Custom Analytics Artifacts
* `updateDeviceCameraCustomAnalytics` - Update custom analytics settings for a camera

### customPerformanceClasses

* `createNetworkApplianceTrafficShapingCustomPerformanceClass` - Add a custom performance class for an MX network
* `deleteNetworkApplianceTrafficShapingCustomPerformanceClass` - Delete a custom performance class from an MX network
* `getNetworkApplianceTrafficShapingCustomPerformanceClass` - Return a custom performance class for an MX network
* `getNetworkApplianceTrafficShapingCustomPerformanceClasses` - List all custom performance classes for an MX network
* `updateNetworkApplianceTrafficShapingCustomPerformanceClass` - Update a custom performance class for an MX network

### dataRateHistory

* `getNetworkWirelessDataRateHistory` - Return PHY data rates over time for a network, device, or network client

### delegated

* `createNetworkAppliancePrefixesDelegatedStatic` - Add a static delegated prefix from a network
* `deleteNetworkAppliancePrefixesDelegatedStatic` - Delete a static delegated prefix from a network
* `getDeviceAppliancePrefixesDelegated` - Return current delegated IPv6 prefixes on an appliance.
* `getDeviceAppliancePrefixesDelegatedVlanAssignments` - Return prefixes assigned to all IPv6 enabled VLANs on an appliance.
* `getNetworkAppliancePrefixesDelegatedStatic` - Return a static delegated prefix from a network
* `getNetworkAppliancePrefixesDelegatedStatics` - List static delegated prefixes for a network
* `updateNetworkAppliancePrefixesDelegatedStatic` - Update a static delegated prefix from a network

### desktopLogs

* `getNetworkSmDeviceDesktopLogs` - Return historical records of various Systems Manager network connection details for desktop devices.

### deviceCommandLogs

* `getNetworkSmDeviceDeviceCommandLogs` - Return historical records of commands sent to Systems Manager devices

### deviceProfiles

* `getNetworkSmDeviceDeviceProfiles` - Get the installed profiles associated with a device
* `getNetworkSmUserDeviceProfiles` - Get the profiles associated with a user

### deviceTypeGroupPolicies

* `getNetworkWirelessSsidDeviceTypeGroupPolicies` - List the device type group policies for the SSID
* `updateNetworkWirelessSsidDeviceTypeGroupPolicies` - Update the device type group policies for the SSID

### devices

* `blinkDeviceLeds` - Blink the LEDs on a device
* `checkinNetworkSmDevices` - Force check-in a set of devices
* `claimNetworkDevices` - Claim devices into a network. (Note: for recently claimed devices, it may take a few minutes for API requsts against that device to succeed)
* `cloneOrganizationSwitchDevices` - Clone port-level and some switch-level configuration settings from a source switch to one or more target switches
* `createDeviceLiveToolsPing` - Enqueue a job to ping a target host from the device
* `createDeviceLiveToolsPingDevice` - Enqueue a job to check connectivity status to the device
* `getDevice` - Return a single device
* `getDeviceCellularSims` - Return the SIM and APN configurations for a cellular device.
* `getDeviceClients` - List the clients of a device, up to a maximum of a month ago
* `getDeviceLiveToolsPing` - Return a ping job
* `getDeviceLiveToolsPingDevice` - Return a ping device job
* `getDeviceLldpCdp` - List LLDP and CDP information for a device
* `getDeviceLossAndLatencyHistory` - Get the uplink loss percentage and latency in milliseconds, and goodput in kilobits per second for a wired network device.
* `getDeviceManagementInterface` - Return the management interface settings for a device
* `getNetworkDevices` - List the devices in a network
* `getNetworkSmDeviceCellularUsageHistory` - Return the client's daily cellular data usage history
* `getNetworkSmDeviceCerts` - List the certs on a device
* `getNetworkSmDeviceConnectivity` - Returns historical connectivity data (whether a device is regularly checking in to Dashboard).
* `getNetworkSmDeviceDesktopLogs` - Return historical records of various Systems Manager network connection details for desktop devices.
* `getNetworkSmDeviceDeviceCommandLogs` - Return historical records of commands sent to Systems Manager devices
* `getNetworkSmDeviceDeviceProfiles` - Get the installed profiles associated with a device
* `getNetworkSmDeviceNetworkAdapters` - List the network adapters of a device
* `getNetworkSmDevicePerformanceHistory` - Return historical records of various Systems Manager client metrics for desktop devices.
* `getNetworkSmDeviceRestrictions` - List the restrictions on a device
* `getNetworkSmDeviceSecurityCenters` - List the security centers on a device
* `getNetworkSmDeviceSoftwares` - Get a list of softwares associated with a device
* `getNetworkSmDeviceWlanLists` - List the saved SSID names on a device
* `getNetworkSmDevices` - List the devices enrolled in an SM network with various specified fields and filters
* `getNetworkWirelessDevicesConnectionStats` - Aggregated connectivity info for this network, grouped by node
* `getNetworkWirelessDevicesLatencyStats` - Aggregated latency info for this network, grouped by node
* `getOrganizationDevices` - List the devices in an organization
* `getOrganizationDevicesAvailabilities` - List the availability information for devices in an organization
* `getOrganizationDevicesPowerModulesStatusesByDevice` - List the power status information for devices in an organization
* `getOrganizationDevicesStatuses` - List the status of every Meraki device in the organization
* `getOrganizationDevicesStatusesOverview` - Return an overview of current device statuses
* `getOrganizationDevicesUplinksAddressesByDevice` - List the current uplink addresses for devices in an organization.
* `getOrganizationDevicesUplinksLossAndLatency` - Return the uplink loss and latency for every MX in the organization from at latest 2 minutes ago
* `getOrganizationInventoryDevice` - Return a single device from the inventory of an organization
* `getOrganizationInventoryDevices` - Return the device inventory for an organization
* `getOrganizationSummaryTopDevicesByUsage` - Return metrics for organization's top 10 devices sorted by data usage over given time range
* `getOrganizationSummaryTopDevicesModelsByUsage` - Return metrics for organization's top 10 device models sorted by data usage over given time range
* `getOrganizationWirelessDevicesEthernetStatuses` - Endpoint to see power status for wireless devices
* `lockNetworkSmDevices` - Lock a set of devices
* `modifyNetworkSmDevicesTags` - Add, delete, or update the tags of a set of devices
* `moveNetworkSmDevices` - Move a set of devices to a new network
* `rebootDevice` - Reboot a device
* `refreshNetworkSmDeviceDetails` - Refresh the details of a device
* `removeNetworkDevices` - Remove a single device
* `unenrollNetworkSmDevice` - Unenroll a device
* `updateDevice` - Update the attributes of a device
* `updateDeviceCellularSims` - Updates the SIM and APN configurations for a cellular device.
* `updateDeviceManagementInterface` - Update the management interface settings for a device
* `updateNetworkSmDevicesFields` - Modify the fields of a device
* `vmxNetworkDevicesClaim` - Claim a vMX into a network
* `wipeNetworkSmDevices` - Wipe a device

### dhcp

* `getDeviceApplianceDhcpSubnets` - Return the DHCP subnet information for an appliance
* `getDeviceSwitchRoutingInterfaceDhcp` - Return a layer 3 interface DHCP configuration for a switch
* `getNetworkCellularGatewayDhcp` - List common DHCP settings of MGs
* `getNetworkSwitchDhcpV4ServersSeen` - Return the network's DHCPv4 servers seen within the selected timeframe (default 1 day)
* `getNetworkSwitchStackRoutingInterfaceDhcp` - Return a layer 3 interface DHCP configuration for a switch stack
* `updateDeviceSwitchRoutingInterfaceDhcp` - Update a layer 3 interface DHCP configuration for a switch
* `updateNetworkCellularGatewayDhcp` - Update common DHCP settings of MGs
* `updateNetworkSwitchStackRoutingInterfaceDhcp` - Update a layer 3 interface DHCP configuration for a switch stack

### dhcpServerPolicy

* `createNetworkSwitchDhcpServerPolicyArpInspectionTrustedServer` - Add a server to be trusted by Dynamic ARP Inspection on this network
* `deleteNetworkSwitchDhcpServerPolicyArpInspectionTrustedServer` - Remove a server from being trusted by Dynamic ARP Inspection on this network
* `getNetworkSwitchDhcpServerPolicy` - Return the DHCP server settings
* `getNetworkSwitchDhcpServerPolicyArpInspectionTrustedServers` - Return the list of servers trusted by Dynamic ARP Inspection on this network
* `getNetworkSwitchDhcpServerPolicyArpInspectionWarningsByDevice` - Return the devices that have a Dynamic ARP Inspection warning and their warnings
* `updateNetworkSwitchDhcpServerPolicy` - Update the DHCP server settings
* `updateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServer` - Update a server that is trusted by Dynamic ARP Inspection on this network

### dscpTaggingOptions

* `getNetworkTrafficShapingDscpTaggingOptions` - Returns the available DSCP tagging options for your traffic shaping rules.

### dscpToCosMappings

* `getNetworkSwitchDscpToCosMappings` - Return the DSCP to CoS mappings
* `updateNetworkSwitchDscpToCosMappings` - Update the DSCP to CoS mappings

### eapOverride

* `getNetworkWirelessSsidEapOverride` - Return the EAP overridden parameters for an SSID
* `updateNetworkWirelessSsidEapOverride` - Update the EAP overridden parameters for an SSID.

### earlyAccess

* `createOrganizationEarlyAccessFeaturesOptIn` - Create a new early access feature opt-in for an organization
* `deleteOrganizationEarlyAccessFeaturesOptIn` - Delete an early access feature opt-in
* `getOrganizationEarlyAccessFeatures` - List the available early access features for organization
* `getOrganizationEarlyAccessFeaturesOptIn` - Show an early access feature opt-in for an organization
* `getOrganizationEarlyAccessFeaturesOptIns` - List the early access feature opt-ins for an organization
* `updateOrganizationEarlyAccessFeaturesOptIn` - Update an early access feature opt-in for an organization

### ethernet

* `getOrganizationWirelessDevicesEthernetStatuses` - Endpoint to see power status for wireless devices

### eventTypes

* `getNetworkEventsEventTypes` - List the event type to human-readable description

### events

* `createNetworkFirmwareUpgradesStagedEvent` - Create a Staged Upgrade Event for a network
* `deferNetworkFirmwareUpgradesStagedEvents` - Postpone by 1 week all pending staged upgrade stages for a network
* `getNetworkApplianceClientSecurityEvents` - List the security events for a client
* `getNetworkApplianceSecurityEvents` - List the security events for a network
* `getNetworkEvents` - List the events for the network
* `getNetworkEventsEventTypes` - List the event type to human-readable description
* `getNetworkFirmwareUpgradesStagedEvents` - Get the Staged Upgrade Event from a network
* `getOrganizationApplianceSecurityEvents` - List the security events for an organization
* `rollbacksNetworkFirmwareUpgradesStagedEvents` - Rollback a Staged Upgrade Event for a network
* `updateNetworkFirmwareUpgradesStagedEvents` - Update the Staged Upgrade Event for a network

### exportEvents

* `createOrganizationInventoryOnboardingCloudMonitoringExportEvent` - Imports event logs related to the onboarding app into elastisearch

### failedConnections

* `getNetworkWirelessFailedConnections` - List of all failed client connection events on this network in a given time range

### features

* `createOrganizationEarlyAccessFeaturesOptIn` - Create a new early access feature opt-in for an organization
* `deleteOrganizationEarlyAccessFeaturesOptIn` - Delete an early access feature opt-in
* `getOrganizationEarlyAccessFeatures` - List the available early access features for organization
* `getOrganizationEarlyAccessFeaturesOptIn` - Show an early access feature opt-in for an organization
* `getOrganizationEarlyAccessFeaturesOptIns` - List the early access feature opt-ins for an organization
* `updateOrganizationEarlyAccessFeaturesOptIn` - Update an early access feature opt-in for an organization

### fields

* `updateNetworkSmDevicesFields` - Modify the fields of a device

### firewall

* `getNetworkApplianceFirewallCellularFirewallRules` - Return the cellular firewall rules for an MX network
* `getNetworkApplianceFirewallFirewalledService` - Return the accessibility settings of the given service ('ICMP', 'web', or 'SNMP')
* `getNetworkApplianceFirewallFirewalledServices` - List the appliance services and their accessibility rules
* `getNetworkApplianceFirewallInboundCellularFirewallRules` - Return the inbound cellular firewall rules for an MX network
* `getNetworkApplianceFirewallInboundFirewallRules` - Return the inbound firewall rules for an MX network
* `getNetworkApplianceFirewallL3FirewallRules` - Return the L3 firewall rules for an MX network
* `getNetworkApplianceFirewallL7FirewallRules` - List the MX L7 firewall rules for an MX network
* `getNetworkApplianceFirewallL7FirewallRulesApplicationCategories` - Return the L7 firewall application categories and their associated applications for an MX network
* `getNetworkApplianceFirewallOneToManyNatRules` - Return the 1:Many NAT mapping rules for an MX network
* `getNetworkApplianceFirewallOneToOneNatRules` - Return the 1:1 NAT mapping rules for an MX network
* `getNetworkApplianceFirewallPortForwardingRules` - Return the port forwarding rules for an MX network
* `getNetworkApplianceFirewallSettings` - Return the firewall settings for this network
* `getNetworkWirelessSsidFirewallL3FirewallRules` - Return the L3 firewall rules for an SSID on an MR network
* `getNetworkWirelessSsidFirewallL7FirewallRules` - Return the L7 firewall rules for an SSID on an MR network
* `updateNetworkApplianceFirewallCellularFirewallRules` - Update the cellular firewall rules of an MX network
* `updateNetworkApplianceFirewallFirewalledService` - Updates the accessibility settings for the given service ('ICMP', 'web', or 'SNMP')
* `updateNetworkApplianceFirewallInboundCellularFirewallRules` - Update the inbound cellular firewall rules of an MX network
* `updateNetworkApplianceFirewallInboundFirewallRules` - Update the inbound firewall rules of an MX network
* `updateNetworkApplianceFirewallL3FirewallRules` - Update the L3 firewall rules of an MX network
* `updateNetworkApplianceFirewallL7FirewallRules` - Update the MX L7 firewall rules for an MX network
* `updateNetworkApplianceFirewallOneToManyNatRules` - Set the 1:Many NAT mapping rules for an MX network
* `updateNetworkApplianceFirewallOneToOneNatRules` - Set the 1:1 NAT mapping rules for an MX network
* `updateNetworkApplianceFirewallPortForwardingRules` - Update the port forwarding rules for an MX network
* `updateNetworkApplianceFirewallSettings` - Update the firewall settings for this network
* `updateNetworkWirelessSsidFirewallL3FirewallRules` - Update the L3 firewall rules of an SSID on an MR network
* `updateNetworkWirelessSsidFirewallL7FirewallRules` - Update the L7 firewall rules of an SSID on an MR network

### firewalledServices

* `getNetworkApplianceFirewallFirewalledService` - Return the accessibility settings of the given service ('ICMP', 'web', or 'SNMP')
* `getNetworkApplianceFirewallFirewalledServices` - List the appliance services and their accessibility rules
* `updateNetworkApplianceFirewallFirewalledService` - Updates the accessibility settings for the given service ('ICMP', 'web', or 'SNMP')

### firmware

* `getOrganizationFirmwareUpgrades` - Get firmware upgrade information for an organization
* `getOrganizationFirmwareUpgradesByDevice` - Get firmware upgrade status for the filtered devices

### firmwareUpgrades

* `createNetworkFirmwareUpgradesRollback` - Rollback a Firmware Upgrade For A Network
* `createNetworkFirmwareUpgradesStagedEvent` - Create a Staged Upgrade Event for a network
* `createNetworkFirmwareUpgradesStagedGroup` - Create a Staged Upgrade Group for a network
* `deferNetworkFirmwareUpgradesStagedEvents` - Postpone by 1 week all pending staged upgrade stages for a network
* `deleteNetworkFirmwareUpgradesStagedGroup` - Delete a Staged Upgrade Group
* `getNetworkFirmwareUpgrades` - Get firmware upgrade information for a network
* `getNetworkFirmwareUpgradesStagedEvents` - Get the Staged Upgrade Event from a network
* `getNetworkFirmwareUpgradesStagedGroup` - Get a Staged Upgrade Group from a network
* `getNetworkFirmwareUpgradesStagedGroups` - List of Staged Upgrade Groups in a network
* `getNetworkFirmwareUpgradesStagedStages` - Order of Staged Upgrade Groups in a network
* `rollbacksNetworkFirmwareUpgradesStagedEvents` - Rollback a Staged Upgrade Event for a network
* `updateNetworkFirmwareUpgrades` - Update firmware upgrade information for a network
* `updateNetworkFirmwareUpgradesStagedEvents` - Update the Staged Upgrade Event for a network
* `updateNetworkFirmwareUpgradesStagedGroup` - Update a Staged Upgrade Group for a network
* `updateNetworkFirmwareUpgradesStagedStages` - Assign Staged Upgrade Group order in the sequence.

### floorPlans

* `createNetworkFloorPlan` - Upload a floor plan
* `deleteNetworkFloorPlan` - Destroy a floor plan
* `getNetworkFloorPlan` - Find a floor plan by ID
* `getNetworkFloorPlans` - List the floor plans that belong to your network
* `updateNetworkFloorPlan` - Update a floor plan's geolocation and other meta data

### groupPolicies

* `createNetworkGroupPolicy` - Create a group policy
* `deleteNetworkGroupPolicy` - Delete a group policy
* `getNetworkGroupPolicies` - List the group policies in a network
* `getNetworkGroupPolicy` - Display a group policy
* `updateNetworkGroupPolicy` - Update a group policy

### groups

* `createNetworkFirmwareUpgradesStagedGroup` - Create a Staged Upgrade Group for a network
* `createOrganizationAdaptivePolicyGroup` - Creates a new adaptive policy group
* `createOrganizationPolicyObjectsGroup` - Creates a new Policy Object Group.
* `deleteNetworkFirmwareUpgradesStagedGroup` - Delete a Staged Upgrade Group
* `deleteOrganizationAdaptivePolicyGroup` - Deletes the specified adaptive policy group and any associated policies and references
* `deleteOrganizationPolicyObjectsGroup` - Deletes a Policy Object Group.
* `getNetworkFirmwareUpgradesStagedGroup` - Get a Staged Upgrade Group from a network
* `getNetworkFirmwareUpgradesStagedGroups` - List of Staged Upgrade Groups in a network
* `getOrganizationAdaptivePolicyGroup` - Returns an adaptive policy group
* `getOrganizationAdaptivePolicyGroups` - List adaptive policy groups in a organization
* `getOrganizationPolicyObjectsGroup` - Shows details of a Policy Object Group.
* `getOrganizationPolicyObjectsGroups` - Lists Policy Object Groups belonging to the organization.
* `updateNetworkFirmwareUpgradesStagedGroup` - Update a Staged Upgrade Group for a network
* `updateOrganizationAdaptivePolicyGroup` - Updates an adaptive policy group
* `updateOrganizationPolicyObjectsGroup` - Updates a Policy Object Group.

### health

* `getNetworkHealthAlerts` - Return all global alerts on this network

### healthByTime

* `getNetworkInsightApplicationHealthByTime` - Get application health by time

### history

* `getDeviceCameraAnalyticsZoneHistory` - Return historical records for analytic zones
* `getNetworkAlertsHistory` - Return the alert history for this network
* `getOrganizationSensorReadingsHistory` - Return all reported readings from sensors in a given timespan, sorted by timestamp

### hotspot20

* `getNetworkWirelessSsidHotspot20` - Return the Hotspot 2.0 settings for an SSID
* `updateNetworkWirelessSsidHotspot20` - Update the Hotspot 2.0 settings of an SSID

### httpServers

* `createNetworkWebhooksHttpServer` - Add an HTTP server to a network
* `deleteNetworkWebhooksHttpServer` - Delete an HTTP server from a network
* `getNetworkWebhooksHttpServer` - Return an HTTP server for a network
* `getNetworkWebhooksHttpServers` - List the HTTP servers for a network
* `updateNetworkWebhooksHttpServer` - Update an HTTP server

### identities

* `getAdministeredIdentitiesMe` - Returns the identity of the current user.

### identityPsks

* `createNetworkWirelessSsidIdentityPsk` - Create an Identity PSK
* `deleteNetworkWirelessSsidIdentityPsk` - Delete an Identity PSK
* `getNetworkWirelessSsidIdentityPsk` - Return an Identity PSK
* `getNetworkWirelessSsidIdentityPsks` - List all Identity PSKs in a wireless network
* `updateNetworkWirelessSsidIdentityPsk` - Update an Identity PSK

### idps

* `createOrganizationSamlIdp` - Create a SAML IdP for your organization.
* `deleteOrganizationSamlIdp` - Remove a SAML IdP in your organization.
* `getOrganizationSamlIdp` - Get a SAML IdP from your organization.
* `getOrganizationSamlIdps` - List the SAML IdPs in your organization.
* `updateOrganizationSamlIdp` - Update a SAML IdP in your organization

### imports

* `createOrganizationInventoryOnboardingCloudMonitoringImport` - Commits the import operation to complete the onboarding of a device into Dashboard for monitoring.
* `getOrganizationInventoryOnboardingCloudMonitoringImports` - Check the status of a committed Import operation

### inboundCellularFirewallRules

* `getNetworkApplianceFirewallInboundCellularFirewallRules` - Return the inbound cellular firewall rules for an MX network
* `updateNetworkApplianceFirewallInboundCellularFirewallRules` - Update the inbound cellular firewall rules of an MX network

### inboundFirewallRules

* `getNetworkApplianceFirewallInboundFirewallRules` - Return the inbound firewall rules for an MX network
* `updateNetworkApplianceFirewallInboundFirewallRules` - Update the inbound firewall rules of an MX network

### insight

* `createOrganizationInsightMonitoredMediaServer` - Add a media server to be monitored for this organization
* `deleteOrganizationInsightMonitoredMediaServer` - Delete a monitored media server from this organization
* `getNetworkInsightApplicationHealthByTime` - Get application health by time
* `getOrganizationInsightApplications` - List all Insight tracked applications
* `getOrganizationInsightMonitoredMediaServer` - Return a monitored media server for this organization
* `getOrganizationInsightMonitoredMediaServers` - List the monitored media servers for this organization
* `updateOrganizationInsightMonitoredMediaServer` - Update a monitored media server for this organization

### interfaces

* `createDeviceSwitchRoutingInterface` - Create a layer 3 interface for a switch
* `createNetworkSwitchStackRoutingInterface` - Create a layer 3 interface for a switch stack
* `deleteDeviceSwitchRoutingInterface` - Delete a layer 3 interface from the switch
* `deleteNetworkSwitchStackRoutingInterface` - Delete a layer 3 interface from a switch stack
* `getDeviceSwitchRoutingInterface` - Return a layer 3 interface for a switch
* `getDeviceSwitchRoutingInterfaceDhcp` - Return a layer 3 interface DHCP configuration for a switch
* `getDeviceSwitchRoutingInterfaces` - List layer 3 interfaces for a switch
* `getNetworkSwitchStackRoutingInterface` - Return a layer 3 interface from a switch stack
* `getNetworkSwitchStackRoutingInterfaceDhcp` - Return a layer 3 interface DHCP configuration for a switch stack
* `getNetworkSwitchStackRoutingInterfaces` - List layer 3 interfaces for a switch stack
* `updateDeviceSwitchRoutingInterface` - Update a layer 3 interface for a switch
* `updateDeviceSwitchRoutingInterfaceDhcp` - Update a layer 3 interface DHCP configuration for a switch
* `updateNetworkSwitchStackRoutingInterface` - Update a layer 3 interface for a switch stack
* `updateNetworkSwitchStackRoutingInterfaceDhcp` - Update a layer 3 interface DHCP configuration for a switch stack

### intrusion

* `getNetworkApplianceSecurityIntrusion` - Returns all supported intrusion settings for an MX network
* `getOrganizationApplianceSecurityIntrusion` - Returns all supported intrusion settings for an organization
* `updateNetworkApplianceSecurityIntrusion` - Set the supported intrusion settings for an MX network
* `updateOrganizationApplianceSecurityIntrusion` - Sets supported intrusion settings for an organization

### inventory

* `claimIntoOrganizationInventory` - Claim a list of devices, licenses, and/or orders into an organization inventory
* `createOrganizationInventoryOnboardingCloudMonitoringExportEvent` - Imports event logs related to the onboarding app into elastisearch
* `createOrganizationInventoryOnboardingCloudMonitoringImport` - Commits the import operation to complete the onboarding of a device into Dashboard for monitoring.
* `getOrganizationInventoryDevice` - Return a single device from the inventory of an organization
* `getOrganizationInventoryDevices` - Return the device inventory for an organization
* `getOrganizationInventoryOnboardingCloudMonitoringImports` - Check the status of a committed Import operation
* `getOrganizationInventoryOnboardingCloudMonitoringNetworks` - Returns list of networks eligible for adding cloud monitored device
* `releaseFromOrganizationInventory` - Release a list of claimed devices from an organization.

### l3FirewallRules

* `getNetworkApplianceFirewallL3FirewallRules` - Return the L3 firewall rules for an MX network
* `getNetworkWirelessSsidFirewallL3FirewallRules` - Return the L3 firewall rules for an SSID on an MR network
* `updateNetworkApplianceFirewallL3FirewallRules` - Update the L3 firewall rules of an MX network
* `updateNetworkWirelessSsidFirewallL3FirewallRules` - Update the L3 firewall rules of an SSID on an MR network

### l7FirewallRules

* `getNetworkApplianceFirewallL7FirewallRules` - List the MX L7 firewall rules for an MX network
* `getNetworkApplianceFirewallL7FirewallRulesApplicationCategories` - Return the L7 firewall application categories and their associated applications for an MX network
* `getNetworkWirelessSsidFirewallL7FirewallRules` - Return the L7 firewall rules for an SSID on an MR network
* `updateNetworkApplianceFirewallL7FirewallRules` - Update the MX L7 firewall rules for an MX network
* `updateNetworkWirelessSsidFirewallL7FirewallRules` - Update the L7 firewall rules of an SSID on an MR network

### lan

* `getDeviceCellularGatewayLan` - Show the LAN Settings of a MG
* `updateDeviceCellularGatewayLan` - Update the LAN Settings for a single MG.

### latencyHistory

* `getNetworkWirelessClientLatencyHistory` - Return the latency history for a client
* `getNetworkWirelessLatencyHistory` - Return average wireless latency over time for a network, device, or network client

### latencyStats

* `getDeviceWirelessLatencyStats` - Aggregated latency info for a given AP on this network
* `getNetworkWirelessClientLatencyStats` - Aggregated latency info for a given client on this network
* `getNetworkWirelessClientsLatencyStats` - Aggregated latency info for this network, grouped by clients
* `getNetworkWirelessDevicesLatencyStats` - Aggregated latency info for this network, grouped by node
* `getNetworkWirelessLatencyStats` - Aggregated latency info for this network

### latest

* `getOrganizationSensorReadingsLatest` - Return the latest available reading for each metric from each sensor, sorted by sensor serial

### licenses

* `assignOrganizationLicensesSeats` - Assign SM seats to a network
* `getOrganizationLicense` - Display a license
* `getOrganizationLicenses` - List the licenses for an organization
* `getOrganizationLicensesOverview` - Return an overview of the license state for an organization
* `getOrganizationLicensingCotermLicenses` - List the licenses in a coterm organization
* `moveOrganizationLicenses` - Move licenses to another organization
* `moveOrganizationLicensesSeats` - Move SM seats to another organization
* `moveOrganizationLicensingCotermLicenses` - Moves a license to a different organization (coterm only)
* `renewOrganizationLicensesSeats` - Renew SM seats of a license
* `updateOrganizationLicense` - Update a license

### licensing

* `getOrganizationLicensingCotermLicenses` - List the licenses in a coterm organization
* `moveOrganizationLicensingCotermLicenses` - Moves a license to a different organization (coterm only)

### linkAggregations

* `createNetworkSwitchLinkAggregation` - Create a link aggregation group
* `deleteNetworkSwitchLinkAggregation` - Split a link aggregation group into separate ports
* `getNetworkSwitchLinkAggregations` - List link aggregation groups
* `updateNetworkSwitchLinkAggregation` - Update a link aggregation group

### linkLayer

* `getNetworkTopologyLinkLayer` - List the LLDP and CDP information for all discovered devices and connections in a network.

### live

* `getDeviceCameraAnalyticsLive` - Returns live state from camera of analytics zones

### liveTools

* `blinkDeviceLeds` - Blink the LEDs on a device
* `createDeviceLiveToolsPing` - Enqueue a job to ping a target host from the device
* `createDeviceLiveToolsPingDevice` - Enqueue a job to check connectivity status to the device
* `cycleDeviceSwitchPorts` - Cycle a set of switch ports
* `getDeviceLiveToolsPing` - Return a ping job
* `getDeviceLiveToolsPingDevice` - Return a ping device job
* `rebootDevice` - Reboot a device

### lldpCdp

* `getDeviceLldpCdp` - List LLDP and CDP information for a device

### loginSecurity

* `getOrganizationLoginSecurity` - Returns the login security settings for an organization.
* `updateOrganizationLoginSecurity` - Update the login security settings for an organization

### logs

* `getOrganizationWebhooksLogs` - Return the log of webhook POSTs sent

### lossAndLatencyHistory

* `getDeviceLossAndLatencyHistory` - Get the uplink loss percentage and latency in milliseconds, and goodput in kilobits per second for a wired network device.

### malware

* `getNetworkApplianceSecurityMalware` - Returns all supported malware settings for an MX network
* `updateNetworkApplianceSecurityMalware` - Set the supported malware settings for an MX network

### managementInterface

* `getDeviceManagementInterface` - Return the management interface settings for a device
* `updateDeviceManagementInterface` - Update the management interface settings for a device

### manufacturers

* `getOrganizationSummaryTopClientsManufacturersByUsage` - Return metrics for organization's top clients by data usage (in mb) over given time range, grouped by manufacturer.

### me

* `getAdministeredIdentitiesMe` - Returns the identity of the current user.

### merakiAuthUsers

* `createNetworkMerakiAuthUser` - Authorize a user configured with Meraki Authentication for a network (currently supports 802.1X, splash guest, and client VPN users, and currently, organizations have a 50,000 user cap)
* `deleteNetworkMerakiAuthUser` - Deauthorize a user
* `getNetworkMerakiAuthUser` - Return the Meraki Auth splash guest, RADIUS, or client VPN user
* `getNetworkMerakiAuthUsers` - List the users configured under Meraki Authentication for a network (splash guest or RADIUS users for a wireless network, or client VPN users for a wired network)
* `updateNetworkMerakiAuthUser` - Update a user configured with Meraki Authentication (currently, 802.1X RADIUS, splash guest, and client VPN users can be updated)

### meshStatuses

* `getNetworkWirelessMeshStatuses` - List wireless mesh statuses for repeaters

### models

* `getOrganizationSummaryTopDevicesModelsByUsage` - Return metrics for organization's top 10 device models sorted by data usage over given time range

### monitor

* `generateDeviceCameraSnapshot` - Generate a snapshot of what the camera sees at the specified time and return a link to that image.
* `getAdministeredIdentitiesMe` - Returns the identity of the current user.
* `getDeviceApplianceDhcpSubnets` - Return the DHCP subnet information for an appliance
* `getDeviceAppliancePerformance` - Return the performance score for a single MX
* `getDeviceAppliancePrefixesDelegated` - Return current delegated IPv6 prefixes on an appliance.
* `getDeviceAppliancePrefixesDelegatedVlanAssignments` - Return prefixes assigned to all IPv6 enabled VLANs on an appliance.
* `getDeviceCameraAnalyticsLive` - Returns live state from camera of analytics zones
* `getDeviceCameraAnalyticsOverview` - Returns an overview of aggregate analytics data for a timespan
* `getDeviceCameraAnalyticsRecent` - Returns most recent record for analytics zones
* `getDeviceCameraAnalyticsZoneHistory` - Return historical records for analytic zones
* `getDeviceCameraAnalyticsZones` - Returns all configured analytic zones for this camera
* `getDeviceClients` - List the clients of a device, up to a maximum of a month ago
* `getDeviceLldpCdp` - List LLDP and CDP information for a device
* `getDeviceLossAndLatencyHistory` - Get the uplink loss percentage and latency in milliseconds, and goodput in kilobits per second for a wired network device.
* `getDeviceSwitchPortsStatuses` - Return the status for all the ports of a switch
* `getDeviceSwitchPortsStatusesPackets` - Return the packet counters for all the ports of a switch
* `getDeviceWirelessConnectionStats` - Aggregated connectivity info for a given AP on this network
* `getDeviceWirelessLatencyStats` - Aggregated latency info for a given AP on this network
* `getDeviceWirelessStatus` - Return the SSID statuses of an access point
* `getNetworkAlertsHistory` - Return the alert history for this network
* `getNetworkApplianceClientSecurityEvents` - List the security events for a client
* `getNetworkApplianceSecurityEvents` - List the security events for a network
* `getNetworkApplianceUplinksUsageHistory` - Get the sent and received bytes for each uplink of a network.
* `getNetworkBluetoothClient` - Return a Bluetooth client
* `getNetworkBluetoothClients` - List the Bluetooth clients seen by APs in this network
* `getNetworkClient` - Return the client associated with the given identifier
* `getNetworkClientTrafficHistory` - Return the client's network traffic data over time
* `getNetworkClientUsageHistory` - Return the client's daily usage history
* `getNetworkClients` - List the clients that have used this network in the timespan
* `getNetworkClientsApplicationUsage` - Return the application usage data for clients
* `getNetworkClientsBandwidthUsageHistory` - Returns a timeseries of total traffic consumption rates for all clients on a network within a given timespan, in megabits per second.
* `getNetworkClientsOverview` - Return overview statistics for network clients
* `getNetworkClientsUsageHistories` - Return the usage histories for clients
* `getNetworkEvents` - List the events for the network
* `getNetworkEventsEventTypes` - List the event type to human-readable description
* `getNetworkInsightApplicationHealthByTime` - Get application health by time
* `getNetworkNetworkHealthChannelUtilization` - Get the channel utilization over each radio for all APs in a network.
* `getNetworkSensorAlertsCurrentOverviewByMetric` - Return an overview of currently alerting sensors by metric
* `getNetworkSensorAlertsOverviewByMetric` - Return an overview of alert occurrences over a timespan, by metric
* `getNetworkSmDeviceCellularUsageHistory` - Return the client's daily cellular data usage history
* `getNetworkSmDeviceConnectivity` - Returns historical connectivity data (whether a device is regularly checking in to Dashboard).
* `getNetworkSmDeviceDesktopLogs` - Return historical records of various Systems Manager network connection details for desktop devices.
* `getNetworkSmDeviceDeviceCommandLogs` - Return historical records of commands sent to Systems Manager devices
* `getNetworkSmDevicePerformanceHistory` - Return historical records of various Systems Manager client metrics for desktop devices.
* `getNetworkSplashLoginAttempts` - List the splash login attempts for a network
* `getNetworkTopologyLinkLayer` - List the LLDP and CDP information for all discovered devices and connections in a network.
* `getNetworkTraffic` - Return the traffic analysis data for this network
* `getNetworkWirelessAirMarshal` - List Air Marshal scan results from a network
* `getNetworkWirelessChannelUtilizationHistory` - Return AP channel utilization over time for a device or network client
* `getNetworkWirelessClientConnectionStats` - Aggregated connectivity info for a given client on this network
* `getNetworkWirelessClientConnectivityEvents` - List the wireless connectivity events for a client within a network in the timespan.
* `getNetworkWirelessClientCountHistory` - Return wireless client counts over time for a network, device, or network client
* `getNetworkWirelessClientLatencyHistory` - Return the latency history for a client
* `getNetworkWirelessClientLatencyStats` - Aggregated latency info for a given client on this network
* `getNetworkWirelessClientsConnectionStats` - Aggregated connectivity info for this network, grouped by clients
* `getNetworkWirelessClientsLatencyStats` - Aggregated latency info for this network, grouped by clients
* `getNetworkWirelessConnectionStats` - Aggregated connectivity info for this network
* `getNetworkWirelessDataRateHistory` - Return PHY data rates over time for a network, device, or network client
* `getNetworkWirelessDevicesConnectionStats` - Aggregated connectivity info for this network, grouped by node
* `getNetworkWirelessDevicesLatencyStats` - Aggregated latency info for this network, grouped by node
* `getNetworkWirelessFailedConnections` - List of all failed client connection events on this network in a given time range
* `getNetworkWirelessLatencyHistory` - Return average wireless latency over time for a network, device, or network client
* `getNetworkWirelessLatencyStats` - Aggregated latency info for this network
* `getNetworkWirelessMeshStatuses` - List wireless mesh statuses for repeaters
* `getNetworkWirelessSignalQualityHistory` - Return signal quality (SNR/RSSI) over time for a device or network client
* `getNetworkWirelessUsageHistory` - Return AP usage over time for a device or network client
* `getOrganizationAdaptivePolicyOverview` - Returns adaptive policy aggregate statistics for an organization
* `getOrganizationApiRequests` - List the API requests made by an organization
* `getOrganizationApiRequestsOverview` - Return an aggregated overview of API requests data
* `getOrganizationApiRequestsOverviewResponseCodesByInterval` - Tracks organizations' API requests by response code across a given time period
* `getOrganizationApplianceSecurityEvents` - List the security events for an organization
* `getOrganizationApplianceUplinkStatuses` - List the uplink status of every Meraki MX and Z series appliances in the organization
* `getOrganizationApplianceVpnStats` - Show VPN history stat for networks in an organization
* `getOrganizationApplianceVpnStatuses` - Show VPN status for networks in an organization
* `getOrganizationCellularGatewayUplinkStatuses` - List the uplink status of every Meraki MG cellular gateway in the organization
* `getOrganizationClientsBandwidthUsageHistory` - Return data usage (in megabits per second) over time for all clients in the given organization within a given time range.
* `getOrganizationClientsOverview` - Return summary information around client data usage (in mb) across the given organization.
* `getOrganizationConfigurationChanges` - View the Change Log for your organization
* `getOrganizationDevicesAvailabilities` - List the availability information for devices in an organization
* `getOrganizationDevicesPowerModulesStatusesByDevice` - List the power status information for devices in an organization
* `getOrganizationDevicesStatuses` - List the status of every Meraki device in the organization
* `getOrganizationDevicesStatusesOverview` - Return an overview of current device statuses
* `getOrganizationDevicesUplinksAddressesByDevice` - List the current uplink addresses for devices in an organization.
* `getOrganizationDevicesUplinksLossAndLatency` - Return the uplink loss and latency for every MX in the organization from at latest 2 minutes ago
* `getOrganizationLicensesOverview` - Return an overview of the license state for an organization
* `getOrganizationOpenapiSpec` - Return the OpenAPI 2.0 Specification of the organization's API documentation in JSON
* `getOrganizationSensorReadingsHistory` - Return all reported readings from sensors in a given timespan, sorted by timestamp
* `getOrganizationSensorReadingsLatest` - Return the latest available reading for each metric from each sensor, sorted by sensor serial
* `getOrganizationSummaryTopAppliancesByUtilization` - Return the top 10 appliances sorted by utilization over given time range.
* `getOrganizationSummaryTopClientsByUsage` - Return metrics for organization's top 10 clients by data usage (in mb) over given time range.
* `getOrganizationSummaryTopClientsManufacturersByUsage` - Return metrics for organization's top clients by data usage (in mb) over given time range, grouped by manufacturer.
* `getOrganizationSummaryTopDevicesByUsage` - Return metrics for organization's top 10 devices sorted by data usage over given time range
* `getOrganizationSummaryTopDevicesModelsByUsage` - Return metrics for organization's top 10 device models sorted by data usage over given time range
* `getOrganizationSummaryTopSsidsByUsage` - Return metrics for organization's top 10 ssids by data usage over given time range
* `getOrganizationSummaryTopSwitchesByEnergyUsage` - Return metrics for organization's top 10 switches by energy usage over given time range
* `getOrganizationUplinksStatuses` - List the uplink status of every Meraki MX, MG and Z series devices in the organization
* `getOrganizationWebhooksAlertTypes` - Return a list of alert types to be used with managing webhook alerts
* `getOrganizationWebhooksLogs` - Return the log of webhook POSTs sent

### monitoredMediaServers

* `createOrganizationInsightMonitoredMediaServer` - Add a media server to be monitored for this organization
* `deleteOrganizationInsightMonitoredMediaServer` - Delete a monitored media server from this organization
* `getOrganizationInsightMonitoredMediaServer` - Return a monitored media server for this organization
* `getOrganizationInsightMonitoredMediaServers` - List the monitored media servers for this organization
* `updateOrganizationInsightMonitoredMediaServer` - Update a monitored media server for this organization

### mqttBrokers

* `createNetworkMqttBroker` - Add an MQTT broker
* `deleteNetworkMqttBroker` - Delete an MQTT broker
* `getNetworkMqttBroker` - Return an MQTT broker
* `getNetworkMqttBrokers` - List the MQTT brokers for this network
* `updateNetworkMqttBroker` - Update an MQTT broker

### mtu

* `getNetworkSwitchMtu` - Return the MTU configuration
* `updateNetworkSwitchMtu` - Update the MTU configuration

### multicast

* `createNetworkSwitchRoutingMulticastRendezvousPoint` - Create a multicast rendezvous point
* `deleteNetworkSwitchRoutingMulticastRendezvousPoint` - Delete a multicast rendezvous point
* `getNetworkSwitchRoutingMulticast` - Return multicast settings for a network
* `getNetworkSwitchRoutingMulticastRendezvousPoint` - Return a multicast rendezvous point
* `getNetworkSwitchRoutingMulticastRendezvousPoints` - List multicast rendezvous points
* `updateNetworkSwitchRoutingMulticast` - Update multicast settings for a network
* `updateNetworkSwitchRoutingMulticastRendezvousPoint` - Update a multicast rendezvous point

### netflow

* `getNetworkNetflow` - Return the NetFlow traffic reporting settings for a network
* `updateNetworkNetflow` - Update the NetFlow traffic reporting settings for a network

### networkAdapters

* `getNetworkSmDeviceNetworkAdapters` - List the network adapters of a device

### networkHealth

* `getNetworkNetworkHealthChannelUtilization` - Get the channel utilization over each radio for all APs in a network.

### networks

* `bindNetwork` - Bind a network to a template.
* `claimNetworkDevices` - Claim devices into a network. (Note: for recently claimed devices, it may take a few minutes for API requsts against that device to succeed)
* `combineOrganizationNetworks` - Combine multiple networks into a single network
* `createNetworkFirmwareUpgradesRollback` - Rollback a Firmware Upgrade For A Network
* `createNetworkFirmwareUpgradesStagedEvent` - Create a Staged Upgrade Event for a network
* `createNetworkFirmwareUpgradesStagedGroup` - Create a Staged Upgrade Group for a network
* `createNetworkFloorPlan` - Upload a floor plan
* `createNetworkGroupPolicy` - Create a group policy
* `createNetworkMerakiAuthUser` - Authorize a user configured with Meraki Authentication for a network (currently supports 802.1X, splash guest, and client VPN users, and currently, organizations have a 50,000 user cap)
* `createNetworkMqttBroker` - Add an MQTT broker
* `createNetworkPiiRequest` - Submit a new delete or restrict processing PII request
* `createNetworkWebhooksHttpServer` - Add an HTTP server to a network
* `createNetworkWebhooksPayloadTemplate` - Create a webhook payload template for a network
* `createNetworkWebhooksWebhookTest` - Send a test webhook for a network
* `createOrganizationNetwork` - Create a network
* `deferNetworkFirmwareUpgradesStagedEvents` - Postpone by 1 week all pending staged upgrade stages for a network
* `deleteNetwork` - Delete a network
* `deleteNetworkFirmwareUpgradesStagedGroup` - Delete a Staged Upgrade Group
* `deleteNetworkFloorPlan` - Destroy a floor plan
* `deleteNetworkGroupPolicy` - Delete a group policy
* `deleteNetworkMerakiAuthUser` - Deauthorize a user
* `deleteNetworkMqttBroker` - Delete an MQTT broker
* `deleteNetworkPiiRequest` - Delete a restrict processing PII request
* `deleteNetworkWebhooksHttpServer` - Delete an HTTP server from a network
* `deleteNetworkWebhooksPayloadTemplate` - Destroy a webhook payload template for a network
* `getNetwork` - Return a network
* `getNetworkAlertsHistory` - Return the alert history for this network
* `getNetworkAlertsSettings` - Return the alert configuration for this network
* `getNetworkBluetoothClient` - Return a Bluetooth client
* `getNetworkBluetoothClients` - List the Bluetooth clients seen by APs in this network
* `getNetworkClient` - Return the client associated with the given identifier
* `getNetworkClientPolicy` - Return the policy assigned to a client on the network
* `getNetworkClientSplashAuthorizationStatus` - Return the splash authorization for a client, for each SSID they've associated with through splash
* `getNetworkClientTrafficHistory` - Return the client's network traffic data over time
* `getNetworkClientUsageHistory` - Return the client's daily usage history
* `getNetworkClients` - List the clients that have used this network in the timespan
* `getNetworkClientsApplicationUsage` - Return the application usage data for clients
* `getNetworkClientsBandwidthUsageHistory` - Returns a timeseries of total traffic consumption rates for all clients on a network within a given timespan, in megabits per second.
* `getNetworkClientsOverview` - Return overview statistics for network clients
* `getNetworkClientsUsageHistories` - Return the usage histories for clients
* `getNetworkDevices` - List the devices in a network
* `getNetworkEvents` - List the events for the network
* `getNetworkEventsEventTypes` - List the event type to human-readable description
* `getNetworkFirmwareUpgrades` - Get firmware upgrade information for a network
* `getNetworkFirmwareUpgradesStagedEvents` - Get the Staged Upgrade Event from a network
* `getNetworkFirmwareUpgradesStagedGroup` - Get a Staged Upgrade Group from a network
* `getNetworkFirmwareUpgradesStagedGroups` - List of Staged Upgrade Groups in a network
* `getNetworkFirmwareUpgradesStagedStages` - Order of Staged Upgrade Groups in a network
* `getNetworkFloorPlan` - Find a floor plan by ID
* `getNetworkFloorPlans` - List the floor plans that belong to your network
* `getNetworkGroupPolicies` - List the group policies in a network
* `getNetworkGroupPolicy` - Display a group policy
* `getNetworkHealthAlerts` - Return all global alerts on this network
* `getNetworkMerakiAuthUser` - Return the Meraki Auth splash guest, RADIUS, or client VPN user
* `getNetworkMerakiAuthUsers` - List the users configured under Meraki Authentication for a network (splash guest or RADIUS users for a wireless network, or client VPN users for a wired network)
* `getNetworkMqttBroker` - Return an MQTT broker
* `getNetworkMqttBrokers` - List the MQTT brokers for this network
* `getNetworkNetflow` - Return the NetFlow traffic reporting settings for a network
* `getNetworkNetworkHealthChannelUtilization` - Get the channel utilization over each radio for all APs in a network.
* `getNetworkPiiPiiKeys` - List the keys required to access Personally Identifiable Information (PII) for a given identifier
* `getNetworkPiiRequest` - Return a PII request
* `getNetworkPiiRequests` - List the PII requests for this network or organization
* `getNetworkPiiSmDevicesForKey` - Given a piece of Personally Identifiable Information (PII), return the Systems Manager device ID(s) associated with that identifier
* `getNetworkPiiSmOwnersForKey` - Given a piece of Personally Identifiable Information (PII), return the Systems Manager owner ID(s) associated with that identifier
* `getNetworkPoliciesByClient` - Get policies for all clients with policies
* `getNetworkSettings` - Return the settings for a network
* `getNetworkSnmp` - Return the SNMP settings for a network
* `getNetworkSplashLoginAttempts` - List the splash login attempts for a network
* `getNetworkSyslogServers` - List the syslog servers for a network
* `getNetworkTopologyLinkLayer` - List the LLDP and CDP information for all discovered devices and connections in a network.
* `getNetworkTraffic` - Return the traffic analysis data for this network
* `getNetworkTrafficAnalysis` - Return the traffic analysis settings for a network
* `getNetworkTrafficShapingApplicationCategories` - Returns the application categories for traffic shaping rules.
* `getNetworkTrafficShapingDscpTaggingOptions` - Returns the available DSCP tagging options for your traffic shaping rules.
* `getNetworkWebhooksHttpServer` - Return an HTTP server for a network
* `getNetworkWebhooksHttpServers` - List the HTTP servers for a network
* `getNetworkWebhooksPayloadTemplate` - Get the webhook payload template for a network
* `getNetworkWebhooksPayloadTemplates` - List the webhook payload templates for a network
* `getNetworkWebhooksWebhookTest` - Return the status of a webhook test for a network
* `getOrganizationInventoryOnboardingCloudMonitoringNetworks` - Returns list of networks eligible for adding cloud monitored device
* `getOrganizationNetworks` - List the networks that the user has privileges on in an organization
* `provisionNetworkClients` - Provisions a client with a name and policy
* `removeNetworkDevices` - Remove a single device
* `rollbacksNetworkFirmwareUpgradesStagedEvents` - Rollback a Staged Upgrade Event for a network
* `splitNetwork` - Split a combined network into individual networks for each type of device
* `unbindNetwork` - Unbind a network from a template.
* `updateNetwork` - Update a network
* `updateNetworkAlertsSettings` - Update the alert configuration for this network
* `updateNetworkClientPolicy` - Update the policy assigned to a client on the network
* `updateNetworkClientSplashAuthorizationStatus` - Update a client's splash authorization
* `updateNetworkFirmwareUpgrades` - Update firmware upgrade information for a network
* `updateNetworkFirmwareUpgradesStagedEvents` - Update the Staged Upgrade Event for a network
* `updateNetworkFirmwareUpgradesStagedGroup` - Update a Staged Upgrade Group for a network
* `updateNetworkFirmwareUpgradesStagedStages` - Assign Staged Upgrade Group order in the sequence.
* `updateNetworkFloorPlan` - Update a floor plan's geolocation and other meta data
* `updateNetworkGroupPolicy` - Update a group policy
* `updateNetworkMerakiAuthUser` - Update a user configured with Meraki Authentication (currently, 802.1X RADIUS, splash guest, and client VPN users can be updated)
* `updateNetworkMqttBroker` - Update an MQTT broker
* `updateNetworkNetflow` - Update the NetFlow traffic reporting settings for a network
* `updateNetworkSettings` - Update the settings for a network
* `updateNetworkSnmp` - Update the SNMP settings for a network
* `updateNetworkSyslogServers` - Update the syslog servers for a network
* `updateNetworkTrafficAnalysis` - Update the traffic analysis settings for a network
* `updateNetworkWebhooksHttpServer` - Update an HTTP server
* `updateNetworkWebhooksPayloadTemplate` - Update a webhook payload template for a network
* `vmxNetworkDevicesClaim` - Claim a vMX into a network

### objectDetectionModels

* `getDeviceCameraSenseObjectDetectionModels` - Returns the MV Sense object detection model list for the given camera

### onboarding

* `createOrganizationInventoryOnboardingCloudMonitoringExportEvent` - Imports event logs related to the onboarding app into elastisearch
* `createOrganizationInventoryOnboardingCloudMonitoringImport` - Commits the import operation to complete the onboarding of a device into Dashboard for monitoring.
* `getOrganizationCameraOnboardingStatuses` - Fetch onboarding status of cameras
* `getOrganizationInventoryOnboardingCloudMonitoringImports` - Check the status of a committed Import operation
* `getOrganizationInventoryOnboardingCloudMonitoringNetworks` - Returns list of networks eligible for adding cloud monitored device
* `updateOrganizationCameraOnboardingStatuses` - Notify that credential handoff to camera has completed

### oneToManyNatRules

* `getNetworkApplianceFirewallOneToManyNatRules` - Return the 1:Many NAT mapping rules for an MX network
* `updateNetworkApplianceFirewallOneToManyNatRules` - Set the 1:Many NAT mapping rules for an MX network

### oneToOneNatRules

* `getNetworkApplianceFirewallOneToOneNatRules` - Return the 1:1 NAT mapping rules for an MX network
* `updateNetworkApplianceFirewallOneToOneNatRules` - Set the 1:1 NAT mapping rules for an MX network

### openapiSpec

* `getOrganizationOpenapiSpec` - Return the OpenAPI 2.0 Specification of the organization's API documentation in JSON

### optIns

* `createOrganizationEarlyAccessFeaturesOptIn` - Create a new early access feature opt-in for an organization
* `deleteOrganizationEarlyAccessFeaturesOptIn` - Delete an early access feature opt-in
* `getOrganizationEarlyAccessFeaturesOptIn` - Show an early access feature opt-in for an organization
* `getOrganizationEarlyAccessFeaturesOptIns` - List the early access feature opt-ins for an organization
* `updateOrganizationEarlyAccessFeaturesOptIn` - Update an early access feature opt-in for an organization

### order

* `getNetworkSwitchQosRulesOrder` - Return the quality of service rule IDs by order in which they will be processed by the switch
* `updateNetworkSwitchQosRulesOrder` - Update the order in which the rules should be processed by the switch

### organizations

* `assignOrganizationLicensesSeats` - Assign SM seats to a network
* `claimIntoOrganization` - Claim a list of devices, licenses, and/or orders into an organization
* `claimIntoOrganizationInventory` - Claim a list of devices, licenses, and/or orders into an organization inventory
* `cloneOrganization` - Create a new organization by cloning the addressed organization
* `combineOrganizationNetworks` - Combine multiple networks into a single network
* `createOrganization` - Create a new organization
* `createOrganizationActionBatch` - Create an action batch
* `createOrganizationAdaptivePolicyAcl` - Creates new adaptive policy ACL
* `createOrganizationAdaptivePolicyGroup` - Creates a new adaptive policy group
* `createOrganizationAdaptivePolicyPolicy` - Add an Adaptive Policy
* `createOrganizationAdmin` - Create a new dashboard administrator
* `createOrganizationAlertsProfile` - Create an organization-wide alert configuration
* `createOrganizationBrandingPolicy` - Add a new branding policy to an organization
* `createOrganizationConfigTemplate` - Create a new configuration template
* `createOrganizationEarlyAccessFeaturesOptIn` - Create a new early access feature opt-in for an organization
* `createOrganizationInventoryOnboardingCloudMonitoringExportEvent` - Imports event logs related to the onboarding app into elastisearch
* `createOrganizationInventoryOnboardingCloudMonitoringImport` - Commits the import operation to complete the onboarding of a device into Dashboard for monitoring.
* `createOrganizationNetwork` - Create a network
* `createOrganizationPolicyObject` - Creates a new Policy Object.
* `createOrganizationPolicyObjectsGroup` - Creates a new Policy Object Group.
* `createOrganizationSamlIdp` - Create a SAML IdP for your organization.
* `createOrganizationSamlRole` - Create a SAML role
* `deleteOrganization` - Delete an organization
* `deleteOrganizationActionBatch` - Delete an action batch
* `deleteOrganizationAdaptivePolicyAcl` - Deletes the specified adaptive policy ACL
* `deleteOrganizationAdaptivePolicyGroup` - Deletes the specified adaptive policy group and any associated policies and references
* `deleteOrganizationAdaptivePolicyPolicy` - Delete an Adaptive Policy
* `deleteOrganizationAdmin` - Revoke all access for a dashboard administrator within this organization
* `deleteOrganizationAlertsProfile` - Removes an organization-wide alert config
* `deleteOrganizationBrandingPolicy` - Delete a branding policy
* `deleteOrganizationConfigTemplate` - Remove a configuration template
* `deleteOrganizationEarlyAccessFeaturesOptIn` - Delete an early access feature opt-in
* `deleteOrganizationPolicyObject` - Deletes a Policy Object.
* `deleteOrganizationPolicyObjectsGroup` - Deletes a Policy Object Group.
* `deleteOrganizationSamlIdp` - Remove a SAML IdP in your organization.
* `deleteOrganizationSamlRole` - Remove a SAML role
* `deleteOrganizationUser` - Delete a user and all of its authentication methods.
* `getOrganization` - Return an organization
* `getOrganizationActionBatch` - Return an action batch
* `getOrganizationActionBatches` - Return the list of action batches in the organization
* `getOrganizationAdaptivePolicyAcl` - Returns the adaptive policy ACL information
* `getOrganizationAdaptivePolicyAcls` - List adaptive policy ACLs in a organization
* `getOrganizationAdaptivePolicyGroup` - Returns an adaptive policy group
* `getOrganizationAdaptivePolicyGroups` - List adaptive policy groups in a organization
* `getOrganizationAdaptivePolicyOverview` - Returns adaptive policy aggregate statistics for an organization
* `getOrganizationAdaptivePolicyPolicies` - List adaptive policies in an organization
* `getOrganizationAdaptivePolicyPolicy` - Return an adaptive policy
* `getOrganizationAdaptivePolicySettings` - Returns global adaptive policy settings in an organization
* `getOrganizationAdmins` - List the dashboard administrators in this organization
* `getOrganizationAlertsProfiles` - List all organization-wide alert configurations
* `getOrganizationApiRequests` - List the API requests made by an organization
* `getOrganizationApiRequestsOverview` - Return an aggregated overview of API requests data
* `getOrganizationApiRequestsOverviewResponseCodesByInterval` - Tracks organizations' API requests by response code across a given time period
* `getOrganizationBrandingPolicies` - List the branding policies of an organization
* `getOrganizationBrandingPoliciesPriorities` - Return the branding policy IDs of an organization in priority order
* `getOrganizationBrandingPolicy` - Return a branding policy
* `getOrganizationClientsBandwidthUsageHistory` - Return data usage (in megabits per second) over time for all clients in the given organization within a given time range.
* `getOrganizationClientsOverview` - Return summary information around client data usage (in mb) across the given organization.
* `getOrganizationClientsSearch` - Return the client details in an organization
* `getOrganizationConfigTemplate` - Return a single configuration template
* `getOrganizationConfigTemplates` - List the configuration templates for this organization
* `getOrganizationConfigurationChanges` - View the Change Log for your organization
* `getOrganizationDevices` - List the devices in an organization
* `getOrganizationDevicesAvailabilities` - List the availability information for devices in an organization
* `getOrganizationDevicesPowerModulesStatusesByDevice` - List the power status information for devices in an organization
* `getOrganizationDevicesStatuses` - List the status of every Meraki device in the organization
* `getOrganizationDevicesStatusesOverview` - Return an overview of current device statuses
* `getOrganizationDevicesUplinksAddressesByDevice` - List the current uplink addresses for devices in an organization.
* `getOrganizationDevicesUplinksLossAndLatency` - Return the uplink loss and latency for every MX in the organization from at latest 2 minutes ago
* `getOrganizationEarlyAccessFeatures` - List the available early access features for organization
* `getOrganizationEarlyAccessFeaturesOptIn` - Show an early access feature opt-in for an organization
* `getOrganizationEarlyAccessFeaturesOptIns` - List the early access feature opt-ins for an organization
* `getOrganizationFirmwareUpgrades` - Get firmware upgrade information for an organization
* `getOrganizationFirmwareUpgradesByDevice` - Get firmware upgrade status for the filtered devices
* `getOrganizationInventoryDevice` - Return a single device from the inventory of an organization
* `getOrganizationInventoryDevices` - Return the device inventory for an organization
* `getOrganizationInventoryOnboardingCloudMonitoringImports` - Check the status of a committed Import operation
* `getOrganizationInventoryOnboardingCloudMonitoringNetworks` - Returns list of networks eligible for adding cloud monitored device
* `getOrganizationLicense` - Display a license
* `getOrganizationLicenses` - List the licenses for an organization
* `getOrganizationLicensesOverview` - Return an overview of the license state for an organization
* `getOrganizationLicensingCotermLicenses` - List the licenses in a coterm organization
* `getOrganizationLoginSecurity` - Returns the login security settings for an organization.
* `getOrganizationNetworks` - List the networks that the user has privileges on in an organization
* `getOrganizationOpenapiSpec` - Return the OpenAPI 2.0 Specification of the organization's API documentation in JSON
* `getOrganizationPolicyObject` - Shows details of a Policy Object.
* `getOrganizationPolicyObjects` - Lists Policy Objects belonging to the organization.
* `getOrganizationPolicyObjectsGroup` - Shows details of a Policy Object Group.
* `getOrganizationPolicyObjectsGroups` - Lists Policy Object Groups belonging to the organization.
* `getOrganizationSaml` - Returns the SAML SSO enabled settings for an organization.
* `getOrganizationSamlIdp` - Get a SAML IdP from your organization.
* `getOrganizationSamlIdps` - List the SAML IdPs in your organization.
* `getOrganizationSamlRole` - Return a SAML role
* `getOrganizationSamlRoles` - List the SAML roles for this organization
* `getOrganizationSnmp` - Return the SNMP settings for an organization
* `getOrganizationSummaryTopAppliancesByUtilization` - Return the top 10 appliances sorted by utilization over given time range.
* `getOrganizationSummaryTopClientsByUsage` - Return metrics for organization's top 10 clients by data usage (in mb) over given time range.
* `getOrganizationSummaryTopClientsManufacturersByUsage` - Return metrics for organization's top clients by data usage (in mb) over given time range, grouped by manufacturer.
* `getOrganizationSummaryTopDevicesByUsage` - Return metrics for organization's top 10 devices sorted by data usage over given time range
* `getOrganizationSummaryTopDevicesModelsByUsage` - Return metrics for organization's top 10 device models sorted by data usage over given time range
* `getOrganizationSummaryTopSsidsByUsage` - Return metrics for organization's top 10 ssids by data usage over given time range
* `getOrganizationSummaryTopSwitchesByEnergyUsage` - Return metrics for organization's top 10 switches by energy usage over given time range
* `getOrganizationUplinksStatuses` - List the uplink status of every Meraki MX, MG and Z series devices in the organization
* `getOrganizationWebhooksAlertTypes` - Return a list of alert types to be used with managing webhook alerts
* `getOrganizationWebhooksLogs` - Return the log of webhook POSTs sent
* `getOrganizations` - List the organizations that the user has privileges on
* `moveOrganizationLicenses` - Move licenses to another organization
* `moveOrganizationLicensesSeats` - Move SM seats to another organization
* `moveOrganizationLicensingCotermLicenses` - Moves a license to a different organization (coterm only)
* `releaseFromOrganizationInventory` - Release a list of claimed devices from an organization.
* `renewOrganizationLicensesSeats` - Renew SM seats of a license
* `updateOrganization` - Update an organization
* `updateOrganizationActionBatch` - Update an action batch
* `updateOrganizationAdaptivePolicyAcl` - Updates an adaptive policy ACL
* `updateOrganizationAdaptivePolicyGroup` - Updates an adaptive policy group
* `updateOrganizationAdaptivePolicyPolicy` - Update an Adaptive Policy
* `updateOrganizationAdaptivePolicySettings` - Update global adaptive policy settings
* `updateOrganizationAdmin` - Update an administrator
* `updateOrganizationAlertsProfile` - Update an organization-wide alert config
* `updateOrganizationBrandingPoliciesPriorities` - Update the priority ordering of an organization's branding policies.
* `updateOrganizationBrandingPolicy` - Update a branding policy
* `updateOrganizationConfigTemplate` - Update a configuration template
* `updateOrganizationEarlyAccessFeaturesOptIn` - Update an early access feature opt-in for an organization
* `updateOrganizationLicense` - Update a license
* `updateOrganizationLoginSecurity` - Update the login security settings for an organization
* `updateOrganizationPolicyObject` - Updates a Policy Object.
* `updateOrganizationPolicyObjectsGroup` - Updates a Policy Object Group.
* `updateOrganizationSaml` - Updates the SAML SSO enabled settings for an organization.
* `updateOrganizationSamlIdp` - Update a SAML IdP in your organization
* `updateOrganizationSamlRole` - Update a SAML role
* `updateOrganizationSnmp` - Update the SNMP settings for an organization

### ospf

* `getNetworkSwitchRoutingOspf` - Return layer 3 OSPF routing configuration
* `updateNetworkSwitchRoutingOspf` - Update layer 3 OSPF routing configuration

### overview

* `getDeviceCameraAnalyticsOverview` - Returns an overview of aggregate analytics data for a timespan
* `getNetworkClientsOverview` - Return overview statistics for network clients
* `getNetworkSensorAlertsCurrentOverviewByMetric` - Return an overview of currently alerting sensors by metric
* `getNetworkSensorAlertsOverviewByMetric` - Return an overview of alert occurrences over a timespan, by metric
* `getOrganizationAdaptivePolicyOverview` - Returns adaptive policy aggregate statistics for an organization
* `getOrganizationApiRequestsOverview` - Return an aggregated overview of API requests data
* `getOrganizationApiRequestsOverviewResponseCodesByInterval` - Tracks organizations' API requests by response code across a given time period
* `getOrganizationClientsOverview` - Return summary information around client data usage (in mb) across the given organization.
* `getOrganizationDevicesStatusesOverview` - Return an overview of current device statuses
* `getOrganizationLicensesOverview` - Return an overview of the license state for an organization

### packets

* `getDeviceSwitchPortsStatusesPackets` - Return the packet counters for all the ports of a switch

### payloadTemplates

* `createNetworkWebhooksPayloadTemplate` - Create a webhook payload template for a network
* `deleteNetworkWebhooksPayloadTemplate` - Destroy a webhook payload template for a network
* `getNetworkWebhooksPayloadTemplate` - Get the webhook payload template for a network
* `getNetworkWebhooksPayloadTemplates` - List the webhook payload templates for a network
* `updateNetworkWebhooksPayloadTemplate` - Update a webhook payload template for a network

### performance

* `getDeviceAppliancePerformance` - Return the performance score for a single MX

### performanceHistory

* `getNetworkSmDevicePerformanceHistory` - Return historical records of various Systems Manager client metrics for desktop devices.

### pii

* `createNetworkPiiRequest` - Submit a new delete or restrict processing PII request
* `deleteNetworkPiiRequest` - Delete a restrict processing PII request
* `getNetworkPiiPiiKeys` - List the keys required to access Personally Identifiable Information (PII) for a given identifier
* `getNetworkPiiRequest` - Return a PII request
* `getNetworkPiiRequests` - List the PII requests for this network or organization
* `getNetworkPiiSmDevicesForKey` - Given a piece of Personally Identifiable Information (PII), return the Systems Manager device ID(s) associated with that identifier
* `getNetworkPiiSmOwnersForKey` - Given a piece of Personally Identifiable Information (PII), return the Systems Manager owner ID(s) associated with that identifier

### piiKeys

* `getNetworkPiiPiiKeys` - List the keys required to access Personally Identifiable Information (PII) for a given identifier

### ping

* `createDeviceLiveToolsPing` - Enqueue a job to ping a target host from the device
* `getDeviceLiveToolsPing` - Return a ping job

### pingDevice

* `createDeviceLiveToolsPingDevice` - Enqueue a job to check connectivity status to the device
* `getDeviceLiveToolsPingDevice` - Return a ping device job

### policies

* `createOrganizationAdaptivePolicyPolicy` - Add an Adaptive Policy
* `deleteOrganizationAdaptivePolicyPolicy` - Delete an Adaptive Policy
* `getNetworkPoliciesByClient` - Get policies for all clients with policies
* `getOrganizationAdaptivePolicyPolicies` - List adaptive policies in an organization
* `getOrganizationAdaptivePolicyPolicy` - Return an adaptive policy
* `updateOrganizationAdaptivePolicyPolicy` - Update an Adaptive Policy

### policy

* `getNetworkClientPolicy` - Return the policy assigned to a client on the network
* `updateNetworkClientPolicy` - Update the policy assigned to a client on the network

### policyObjects

* `createOrganizationPolicyObject` - Creates a new Policy Object.
* `createOrganizationPolicyObjectsGroup` - Creates a new Policy Object Group.
* `deleteOrganizationPolicyObject` - Deletes a Policy Object.
* `deleteOrganizationPolicyObjectsGroup` - Deletes a Policy Object Group.
* `getOrganizationPolicyObject` - Shows details of a Policy Object.
* `getOrganizationPolicyObjects` - Lists Policy Objects belonging to the organization.
* `getOrganizationPolicyObjectsGroup` - Shows details of a Policy Object Group.
* `getOrganizationPolicyObjectsGroups` - Lists Policy Object Groups belonging to the organization.
* `updateOrganizationPolicyObject` - Updates a Policy Object.
* `updateOrganizationPolicyObjectsGroup` - Updates a Policy Object Group.

### portForwardingRules

* `getDeviceCellularGatewayPortForwardingRules` - Returns the port forwarding rules for a single MG.
* `getNetworkApplianceFirewallPortForwardingRules` - Return the port forwarding rules for an MX network
* `updateDeviceCellularGatewayPortForwardingRules` - Updates the port forwarding rules for a single MG.
* `updateNetworkApplianceFirewallPortForwardingRules` - Update the port forwarding rules for an MX network

### portSchedules

* `createNetworkSwitchPortSchedule` - Add a switch port schedule
* `deleteNetworkSwitchPortSchedule` - Delete a switch port schedule
* `getNetworkSwitchPortSchedules` - List switch port schedules
* `updateNetworkSwitchPortSchedule` - Update a switch port schedule

### ports

* `cycleDeviceSwitchPorts` - Cycle a set of switch ports
* `getDeviceSwitchPort` - Return a switch port
* `getDeviceSwitchPorts` - List the switch ports for a switch
* `getDeviceSwitchPortsStatuses` - Return the status for all the ports of a switch
* `getDeviceSwitchPortsStatusesPackets` - Return the packet counters for all the ports of a switch
* `getNetworkAppliancePort` - Return per-port VLAN settings for a single MX port.
* `getNetworkAppliancePorts` - List per-port VLAN settings for all ports of a MX.
* `getOrganizationConfigTemplateSwitchProfilePort` - Return a switch profile port
* `getOrganizationConfigTemplateSwitchProfilePorts` - Return all the ports of a switch profile
* `getOrganizationSwitchPortsBySwitch` - List the switchports in an organization by switch
* `updateDeviceSwitchPort` - Update a switch port
* `updateNetworkAppliancePort` - Update the per-port VLAN settings for a single MX port.
* `updateOrganizationConfigTemplateSwitchProfilePort` - Update a switch profile port

### powerModules

* `getOrganizationDevicesPowerModulesStatusesByDevice` - List the power status information for devices in an organization

### prefixes

* `createNetworkAppliancePrefixesDelegatedStatic` - Add a static delegated prefix from a network
* `deleteNetworkAppliancePrefixesDelegatedStatic` - Delete a static delegated prefix from a network
* `getDeviceAppliancePrefixesDelegated` - Return current delegated IPv6 prefixes on an appliance.
* `getDeviceAppliancePrefixesDelegatedVlanAssignments` - Return prefixes assigned to all IPv6 enabled VLANs on an appliance.
* `getNetworkAppliancePrefixesDelegatedStatic` - Return a static delegated prefix from a network
* `getNetworkAppliancePrefixesDelegatedStatics` - List static delegated prefixes for a network
* `updateNetworkAppliancePrefixesDelegatedStatic` - Update a static delegated prefix from a network

### priorities

* `getOrganizationBrandingPoliciesPriorities` - Return the branding policy IDs of an organization in priority order
* `updateOrganizationBrandingPoliciesPriorities` - Update the priority ordering of an organization's branding policies.

### profiles

* `createNetworkSensorAlertsProfile` - Creates a sensor alert profile for a network.
* `createOrganizationAlertsProfile` - Create an organization-wide alert configuration
* `deleteNetworkSensorAlertsProfile` - Deletes a sensor alert profile from a network.
* `deleteOrganizationAlertsProfile` - Removes an organization-wide alert config
* `getNetworkSensorAlertsProfile` - Show details of a sensor alert profile for a network.
* `getNetworkSensorAlertsProfiles` - Lists all sensor alert profiles for a network.
* `getNetworkSmProfiles` - List all profiles in a network
* `getOrganizationAlertsProfiles` - List all organization-wide alert configurations
* `getOrganizationConfigTemplateSwitchProfilePort` - Return a switch profile port
* `getOrganizationConfigTemplateSwitchProfilePorts` - Return all the ports of a switch profile
* `getOrganizationConfigTemplateSwitchProfiles` - List the switch profiles for your switch template configuration
* `updateNetworkSensorAlertsProfile` - Updates a sensor alert profile for a network.
* `updateOrganizationAlertsProfile` - Update an organization-wide alert config
* `updateOrganizationConfigTemplateSwitchProfilePort` - Update a switch profile port

### qosRules

* `createNetworkSwitchQosRule` - Add a quality of service rule
* `deleteNetworkSwitchQosRule` - Delete a quality of service rule
* `getNetworkSwitchQosRule` - Return a quality of service rule
* `getNetworkSwitchQosRules` - List quality of service rules
* `getNetworkSwitchQosRulesOrder` - Return the quality of service rule IDs by order in which they will be processed by the switch
* `updateNetworkSwitchQosRule` - Update a quality of service rule
* `updateNetworkSwitchQosRulesOrder` - Update the order in which the rules should be processed by the switch

### qualityAndRetention

* `getDeviceCameraQualityAndRetention` - Returns quality and retention settings for the given camera
* `updateDeviceCameraQualityAndRetention` - Update quality and retention settings for the given camera

### qualityRetentionProfiles

* `createNetworkCameraQualityRetentionProfile` - Creates new quality retention profile for this network.
* `deleteNetworkCameraQualityRetentionProfile` - Delete an existing quality retention profile for this network.
* `getNetworkCameraQualityRetentionProfile` - Retrieve a single quality retention profile
* `getNetworkCameraQualityRetentionProfiles` - List the quality retention profiles for this network
* `updateNetworkCameraQualityRetentionProfile` - Update an existing quality retention profile for this network.

### radio

* `getDeviceWirelessRadioSettings` - Return the radio settings of a device
* `updateDeviceWirelessRadioSettings` - Update the radio settings of a device

### readings

* `getOrganizationSensorReadingsHistory` - Return all reported readings from sensors in a given timespan, sorted by timestamp
* `getOrganizationSensorReadingsLatest` - Return the latest available reading for each metric from each sensor, sorted by sensor serial

### recent

* `getDeviceCameraAnalyticsRecent` - Returns most recent record for analytics zones

### relationships

* `getDeviceSensorRelationships` - List the sensor roles for a given sensor or camera device.
* `getNetworkSensorRelationships` - List the sensor roles for devices in a given network
* `updateDeviceSensorRelationships` - Assign one or more sensor roles to a given sensor or camera device.

### rendezvousPoints

* `createNetworkSwitchRoutingMulticastRendezvousPoint` - Create a multicast rendezvous point
* `deleteNetworkSwitchRoutingMulticastRendezvousPoint` - Delete a multicast rendezvous point
* `getNetworkSwitchRoutingMulticastRendezvousPoint` - Return a multicast rendezvous point
* `getNetworkSwitchRoutingMulticastRendezvousPoints` - List multicast rendezvous points
* `updateNetworkSwitchRoutingMulticastRendezvousPoint` - Update a multicast rendezvous point

### requests

* `createNetworkPiiRequest` - Submit a new delete or restrict processing PII request
* `deleteNetworkPiiRequest` - Delete a restrict processing PII request
* `getNetworkPiiRequest` - Return a PII request
* `getNetworkPiiRequests` - List the PII requests for this network or organization

### responseCodes

* `getOrganizationApiRequestsOverviewResponseCodesByInterval` - Tracks organizations' API requests by response code across a given time period

### restrictions

* `getNetworkSmDeviceRestrictions` - List the restrictions on a device

### rfProfiles

* `createNetworkWirelessRfProfile` - Creates new RF profile for this network
* `deleteNetworkWirelessRfProfile` - Delete a RF Profile
* `getNetworkWirelessRfProfile` - Return a RF profile
* `getNetworkWirelessRfProfiles` - List the non-basic RF profiles for this network
* `updateNetworkWirelessRfProfile` - Updates specified RF profile for this network

### rollbacks

* `createNetworkFirmwareUpgradesRollback` - Rollback a Firmware Upgrade For A Network

### routing

* `createDeviceSwitchRoutingInterface` - Create a layer 3 interface for a switch
* `createDeviceSwitchRoutingStaticRoute` - Create a layer 3 static route for a switch
* `createNetworkSwitchRoutingMulticastRendezvousPoint` - Create a multicast rendezvous point
* `createNetworkSwitchStackRoutingInterface` - Create a layer 3 interface for a switch stack
* `createNetworkSwitchStackRoutingStaticRoute` - Create a layer 3 static route for a switch stack
* `deleteDeviceSwitchRoutingInterface` - Delete a layer 3 interface from the switch
* `deleteDeviceSwitchRoutingStaticRoute` - Delete a layer 3 static route for a switch
* `deleteNetworkSwitchRoutingMulticastRendezvousPoint` - Delete a multicast rendezvous point
* `deleteNetworkSwitchStackRoutingInterface` - Delete a layer 3 interface from a switch stack
* `deleteNetworkSwitchStackRoutingStaticRoute` - Delete a layer 3 static route for a switch stack
* `getDeviceSwitchRoutingInterface` - Return a layer 3 interface for a switch
* `getDeviceSwitchRoutingInterfaceDhcp` - Return a layer 3 interface DHCP configuration for a switch
* `getDeviceSwitchRoutingInterfaces` - List layer 3 interfaces for a switch
* `getDeviceSwitchRoutingStaticRoute` - Return a layer 3 static route for a switch
* `getDeviceSwitchRoutingStaticRoutes` - List layer 3 static routes for a switch
* `getNetworkSwitchRoutingMulticast` - Return multicast settings for a network
* `getNetworkSwitchRoutingMulticastRendezvousPoint` - Return a multicast rendezvous point
* `getNetworkSwitchRoutingMulticastRendezvousPoints` - List multicast rendezvous points
* `getNetworkSwitchRoutingOspf` - Return layer 3 OSPF routing configuration
* `getNetworkSwitchStackRoutingInterface` - Return a layer 3 interface from a switch stack
* `getNetworkSwitchStackRoutingInterfaceDhcp` - Return a layer 3 interface DHCP configuration for a switch stack
* `getNetworkSwitchStackRoutingInterfaces` - List layer 3 interfaces for a switch stack
* `getNetworkSwitchStackRoutingStaticRoute` - Return a layer 3 static route for a switch stack
* `getNetworkSwitchStackRoutingStaticRoutes` - List layer 3 static routes for a switch stack
* `updateDeviceSwitchRoutingInterface` - Update a layer 3 interface for a switch
* `updateDeviceSwitchRoutingInterfaceDhcp` - Update a layer 3 interface DHCP configuration for a switch
* `updateDeviceSwitchRoutingStaticRoute` - Update a layer 3 static route for a switch
* `updateNetworkSwitchRoutingMulticast` - Update multicast settings for a network
* `updateNetworkSwitchRoutingMulticastRendezvousPoint` - Update a multicast rendezvous point
* `updateNetworkSwitchRoutingOspf` - Update layer 3 OSPF routing configuration
* `updateNetworkSwitchStackRoutingInterface` - Update a layer 3 interface for a switch stack
* `updateNetworkSwitchStackRoutingInterfaceDhcp` - Update a layer 3 interface DHCP configuration for a switch stack
* `updateNetworkSwitchStackRoutingStaticRoute` - Update a layer 3 static route for a switch stack

### rules

* `getNetworkApplianceTrafficShapingRules` - Display the traffic shaping settings rules for an MX network
* `getNetworkWirelessSsidTrafficShapingRules` - Display the traffic shaping settings for a SSID on an MR network
* `updateNetworkApplianceTrafficShapingRules` - Update the traffic shaping settings rules for an MX network
* `updateNetworkWirelessSsidTrafficShapingRules` - Update the traffic shaping settings for an SSID on an MR network

### saml

* `createOrganizationSamlIdp` - Create a SAML IdP for your organization.
* `deleteOrganizationSamlIdp` - Remove a SAML IdP in your organization.
* `getOrganizationSaml` - Returns the SAML SSO enabled settings for an organization.
* `getOrganizationSamlIdp` - Get a SAML IdP from your organization.
* `getOrganizationSamlIdps` - List the SAML IdPs in your organization.
* `updateOrganizationSaml` - Updates the SAML SSO enabled settings for an organization.
* `updateOrganizationSamlIdp` - Update a SAML IdP in your organization

### samlRoles

* `createOrganizationSamlRole` - Create a SAML role
* `deleteOrganizationSamlRole` - Remove a SAML role
* `getOrganizationSamlRole` - Return a SAML role
* `getOrganizationSamlRoles` - List the SAML roles for this organization
* `updateOrganizationSamlRole` - Update a SAML role

### schedules

* `getNetworkCameraSchedules` - Returns a list of all camera recording schedules.
* `getNetworkWirelessSsidSchedules` - List the outage schedule for the SSID
* `updateNetworkWirelessSsidSchedules` - Update the outage schedule for the SSID

### search

* `getOrganizationClientsSearch` - Return the client details in an organization

### security

* `getNetworkApplianceClientSecurityEvents` - List the security events for a client
* `getNetworkApplianceSecurityEvents` - List the security events for a network
* `getNetworkApplianceSecurityIntrusion` - Returns all supported intrusion settings for an MX network
* `getNetworkApplianceSecurityMalware` - Returns all supported malware settings for an MX network
* `getOrganizationApplianceSecurityEvents` - List the security events for an organization
* `getOrganizationApplianceSecurityIntrusion` - Returns all supported intrusion settings for an organization
* `updateNetworkApplianceSecurityIntrusion` - Set the supported intrusion settings for an MX network
* `updateNetworkApplianceSecurityMalware` - Set the supported malware settings for an MX network
* `updateOrganizationApplianceSecurityIntrusion` - Sets supported intrusion settings for an organization

### securityCenters

* `getNetworkSmDeviceSecurityCenters` - List the security centers on a device

### seen

* `getNetworkSwitchDhcpV4ServersSeen` - Return the network's DHCPv4 servers seen within the selected timeframe (default 1 day)

### sense

* `getDeviceCameraSense` - Returns sense settings for a given camera
* `getDeviceCameraSenseObjectDetectionModels` - Returns the MV Sense object detection model list for the given camera
* `updateDeviceCameraSense` - Update sense settings for the given camera

### sensor

* `createNetworkSensorAlertsProfile` - Creates a sensor alert profile for a network.
* `deleteNetworkSensorAlertsProfile` - Deletes a sensor alert profile from a network.
* `getDeviceSensorRelationships` - List the sensor roles for a given sensor or camera device.
* `getNetworkSensorAlertsCurrentOverviewByMetric` - Return an overview of currently alerting sensors by metric
* `getNetworkSensorAlertsOverviewByMetric` - Return an overview of alert occurrences over a timespan, by metric
* `getNetworkSensorAlertsProfile` - Show details of a sensor alert profile for a network.
* `getNetworkSensorAlertsProfiles` - Lists all sensor alert profiles for a network.
* `getNetworkSensorRelationships` - List the sensor roles for devices in a given network
* `getOrganizationSensorReadingsHistory` - Return all reported readings from sensors in a given timespan, sorted by timestamp
* `getOrganizationSensorReadingsLatest` - Return the latest available reading for each metric from each sensor, sorted by sensor serial
* `updateDeviceSensorRelationships` - Assign one or more sensor roles to a given sensor or camera device.
* `updateNetworkSensorAlertsProfile` - Updates a sensor alert profile for a network.

### servers

* `getNetworkSwitchDhcpV4ServersSeen` - Return the network's DHCPv4 servers seen within the selected timeframe (default 1 day)

### settings

* `getDeviceApplianceUplinksSettings` - Return the uplink settings for an MX appliance
* `getDeviceCameraVideoSettings` - Returns video settings for the given camera
* `getDeviceWirelessBluetoothSettings` - Return the bluetooth settings for a wireless device
* `getDeviceWirelessRadioSettings` - Return the radio settings of a device
* `getNetworkAlertsSettings` - Return the alert configuration for this network
* `getNetworkApplianceFirewallSettings` - Return the firewall settings for this network
* `getNetworkApplianceSettings` - Return the appliance settings for a network
* `getNetworkApplianceVlansSettings` - Returns the enabled status of VLANs for the network
* `getNetworkSettings` - Return the settings for a network
* `getNetworkSwitchSettings` - Returns the switch network settings
* `getNetworkWirelessBluetoothSettings` - Return the Bluetooth settings for a network. <a href="https://documentation.meraki.com/MR/Bluetooth/Bluetooth_Low_Energy_(BLE)">Bluetooth settings</a> must be enabled on the network.
* `getNetworkWirelessSettings` - Return the wireless settings for a network
* `getNetworkWirelessSsidSplashSettings` - Display the splash page settings for the given SSID
* `getOrganizationAdaptivePolicySettings` - Returns global adaptive policy settings in an organization
* `updateDeviceApplianceUplinksSettings` - Update the uplink settings for an MX appliance
* `updateDeviceCameraVideoSettings` - Update video settings for the given camera
* `updateDeviceWirelessBluetoothSettings` - Update the bluetooth settings for a wireless device
* `updateDeviceWirelessRadioSettings` - Update the radio settings of a device
* `updateNetworkAlertsSettings` - Update the alert configuration for this network
* `updateNetworkApplianceFirewallSettings` - Update the firewall settings for this network
* `updateNetworkApplianceSettings` - Update the appliance settings for a network
* `updateNetworkApplianceVlansSettings` - Enable/Disable VLANs for the given network
* `updateNetworkSettings` - Update the settings for a network
* `updateNetworkSwitchSettings` - Update switch network settings
* `updateNetworkWirelessBluetoothSettings` - Update the Bluetooth settings for a network
* `updateNetworkWirelessSettings` - Update the wireless settings for a network
* `updateNetworkWirelessSsidSplashSettings` - Modify the splash page settings for the given SSID
* `updateOrganizationAdaptivePolicySettings` - Update global adaptive policy settings

### signalQualityHistory

* `getNetworkWirelessSignalQualityHistory` - Return signal quality (SNR/RSSI) over time for a device or network client

### sims

* `getDeviceCellularSims` - Return the SIM and APN configurations for a cellular device.
* `updateDeviceCellularSims` - Updates the SIM and APN configurations for a cellular device.

### singleLan

* `getNetworkApplianceSingleLan` - Return single LAN configuration
* `updateNetworkApplianceSingleLan` - Update single LAN configuration

### siteToSiteVpn

* `getNetworkApplianceVpnSiteToSiteVpn` - Return the site-to-site VPN settings of a network
* `updateNetworkApplianceVpnSiteToSiteVpn` - Update the site-to-site VPN settings of a network

### sm

* `checkinNetworkSmDevices` - Force check-in a set of devices
* `createNetworkSmBypassActivationLockAttempt` - Bypass activation lock attempt
* `createNetworkSmTargetGroup` - Add a target group
* `deleteNetworkSmTargetGroup` - Delete a target group from a network
* `deleteNetworkSmUserAccessDevice` - Delete a User Access Device
* `getNetworkSmBypassActivationLockAttempt` - Bypass activation lock attempt status
* `getNetworkSmDeviceCellularUsageHistory` - Return the client's daily cellular data usage history
* `getNetworkSmDeviceCerts` - List the certs on a device
* `getNetworkSmDeviceConnectivity` - Returns historical connectivity data (whether a device is regularly checking in to Dashboard).
* `getNetworkSmDeviceDesktopLogs` - Return historical records of various Systems Manager network connection details for desktop devices.
* `getNetworkSmDeviceDeviceCommandLogs` - Return historical records of commands sent to Systems Manager devices
* `getNetworkSmDeviceDeviceProfiles` - Get the installed profiles associated with a device
* `getNetworkSmDeviceNetworkAdapters` - List the network adapters of a device
* `getNetworkSmDevicePerformanceHistory` - Return historical records of various Systems Manager client metrics for desktop devices.
* `getNetworkSmDeviceRestrictions` - List the restrictions on a device
* `getNetworkSmDeviceSecurityCenters` - List the security centers on a device
* `getNetworkSmDeviceSoftwares` - Get a list of softwares associated with a device
* `getNetworkSmDeviceWlanLists` - List the saved SSID names on a device
* `getNetworkSmDevices` - List the devices enrolled in an SM network with various specified fields and filters
* `getNetworkSmProfiles` - List all profiles in a network
* `getNetworkSmTargetGroup` - Return a target group
* `getNetworkSmTargetGroups` - List the target groups in this network
* `getNetworkSmTrustedAccessConfigs` - List Trusted Access Configs
* `getNetworkSmUserAccessDevices` - List User Access Devices and its Trusted Access Connections
* `getNetworkSmUserDeviceProfiles` - Get the profiles associated with a user
* `getNetworkSmUserSoftwares` - Get a list of softwares associated with a user
* `getNetworkSmUsers` - List the owners in an SM network with various specified fields and filters
* `getOrganizationSmApnsCert` - Get the organization's APNS certificate
* `getOrganizationSmVppAccount` - Get a hash containing the unparsed token of the VPP account with the given ID
* `getOrganizationSmVppAccounts` - List the VPP accounts in the organization
* `lockNetworkSmDevices` - Lock a set of devices
* `modifyNetworkSmDevicesTags` - Add, delete, or update the tags of a set of devices
* `moveNetworkSmDevices` - Move a set of devices to a new network
* `refreshNetworkSmDeviceDetails` - Refresh the details of a device
* `unenrollNetworkSmDevice` - Unenroll a device
* `updateNetworkSmDevicesFields` - Modify the fields of a device
* `updateNetworkSmTargetGroup` - Update a target group
* `wipeNetworkSmDevices` - Wipe a device

### smDevicesForKey

* `getNetworkPiiSmDevicesForKey` - Given a piece of Personally Identifiable Information (PII), return the Systems Manager device ID(s) associated with that identifier

### smOwnersForKey

* `getNetworkPiiSmOwnersForKey` - Given a piece of Personally Identifiable Information (PII), return the Systems Manager owner ID(s) associated with that identifier

### snmp

* `getNetworkSnmp` - Return the SNMP settings for a network
* `getOrganizationSnmp` - Return the SNMP settings for an organization
* `updateNetworkSnmp` - Update the SNMP settings for a network
* `updateOrganizationSnmp` - Update the SNMP settings for an organization

### softwares

* `getNetworkSmDeviceSoftwares` - Get a list of softwares associated with a device
* `getNetworkSmUserSoftwares` - Get a list of softwares associated with a user

### splash

* `getNetworkWirelessSsidSplashSettings` - Display the splash page settings for the given SSID
* `updateNetworkWirelessSsidSplashSettings` - Modify the splash page settings for the given SSID

### splashAuthorizationStatus

* `getNetworkClientSplashAuthorizationStatus` - Return the splash authorization for a client, for each SSID they've associated with through splash
* `updateNetworkClientSplashAuthorizationStatus` - Update a client's splash authorization

### splashLoginAttempts

* `getNetworkSplashLoginAttempts` - List the splash login attempts for a network

### ssids

* `createNetworkWirelessSsidIdentityPsk` - Create an Identity PSK
* `deleteNetworkWirelessSsidIdentityPsk` - Delete an Identity PSK
* `getNetworkApplianceSsid` - Return a single MX SSID
* `getNetworkApplianceSsids` - List the MX SSIDs in a network
* `getNetworkWirelessSsid` - Return a single MR SSID
* `getNetworkWirelessSsidBonjourForwarding` - List the Bonjour forwarding setting and rules for the SSID
* `getNetworkWirelessSsidDeviceTypeGroupPolicies` - List the device type group policies for the SSID
* `getNetworkWirelessSsidEapOverride` - Return the EAP overridden parameters for an SSID
* `getNetworkWirelessSsidFirewallL3FirewallRules` - Return the L3 firewall rules for an SSID on an MR network
* `getNetworkWirelessSsidFirewallL7FirewallRules` - Return the L7 firewall rules for an SSID on an MR network
* `getNetworkWirelessSsidHotspot20` - Return the Hotspot 2.0 settings for an SSID
* `getNetworkWirelessSsidIdentityPsk` - Return an Identity PSK
* `getNetworkWirelessSsidIdentityPsks` - List all Identity PSKs in a wireless network
* `getNetworkWirelessSsidSchedules` - List the outage schedule for the SSID
* `getNetworkWirelessSsidSplashSettings` - Display the splash page settings for the given SSID
* `getNetworkWirelessSsidTrafficShapingRules` - Display the traffic shaping settings for a SSID on an MR network
* `getNetworkWirelessSsidVpn` - List the VPN settings for the SSID.
* `getNetworkWirelessSsids` - List the MR SSIDs in a network
* `getOrganizationSummaryTopSsidsByUsage` - Return metrics for organization's top 10 ssids by data usage over given time range
* `updateNetworkApplianceSsid` - Update the attributes of an MX SSID
* `updateNetworkWirelessSsid` - Update the attributes of an MR SSID
* `updateNetworkWirelessSsidBonjourForwarding` - Update the bonjour forwarding setting and rules for the SSID
* `updateNetworkWirelessSsidDeviceTypeGroupPolicies` - Update the device type group policies for the SSID
* `updateNetworkWirelessSsidEapOverride` - Update the EAP overridden parameters for an SSID.
* `updateNetworkWirelessSsidFirewallL3FirewallRules` - Update the L3 firewall rules of an SSID on an MR network
* `updateNetworkWirelessSsidFirewallL7FirewallRules` - Update the L7 firewall rules of an SSID on an MR network
* `updateNetworkWirelessSsidHotspot20` - Update the Hotspot 2.0 settings of an SSID
* `updateNetworkWirelessSsidIdentityPsk` - Update an Identity PSK
* `updateNetworkWirelessSsidSchedules` - Update the outage schedule for the SSID
* `updateNetworkWirelessSsidSplashSettings` - Modify the splash page settings for the given SSID
* `updateNetworkWirelessSsidTrafficShapingRules` - Update the traffic shaping settings for an SSID on an MR network
* `updateNetworkWirelessSsidVpn` - Update the VPN settings for the SSID

### stacks

* `addNetworkSwitchStack` - Add a switch to a stack
* `createNetworkSwitchStack` - Create a stack
* `createNetworkSwitchStackRoutingInterface` - Create a layer 3 interface for a switch stack
* `createNetworkSwitchStackRoutingStaticRoute` - Create a layer 3 static route for a switch stack
* `deleteNetworkSwitchStack` - Delete a stack
* `deleteNetworkSwitchStackRoutingInterface` - Delete a layer 3 interface from a switch stack
* `deleteNetworkSwitchStackRoutingStaticRoute` - Delete a layer 3 static route for a switch stack
* `getNetworkSwitchStack` - Show a switch stack
* `getNetworkSwitchStackRoutingInterface` - Return a layer 3 interface from a switch stack
* `getNetworkSwitchStackRoutingInterfaceDhcp` - Return a layer 3 interface DHCP configuration for a switch stack
* `getNetworkSwitchStackRoutingInterfaces` - List layer 3 interfaces for a switch stack
* `getNetworkSwitchStackRoutingStaticRoute` - Return a layer 3 static route for a switch stack
* `getNetworkSwitchStackRoutingStaticRoutes` - List layer 3 static routes for a switch stack
* `getNetworkSwitchStacks` - List the switch stacks in a network
* `removeNetworkSwitchStack` - Remove a switch from a stack
* `updateNetworkSwitchStackRoutingInterface` - Update a layer 3 interface for a switch stack
* `updateNetworkSwitchStackRoutingInterfaceDhcp` - Update a layer 3 interface DHCP configuration for a switch stack
* `updateNetworkSwitchStackRoutingStaticRoute` - Update a layer 3 static route for a switch stack

### staged

* `createNetworkFirmwareUpgradesStagedEvent` - Create a Staged Upgrade Event for a network
* `createNetworkFirmwareUpgradesStagedGroup` - Create a Staged Upgrade Group for a network
* `deferNetworkFirmwareUpgradesStagedEvents` - Postpone by 1 week all pending staged upgrade stages for a network
* `deleteNetworkFirmwareUpgradesStagedGroup` - Delete a Staged Upgrade Group
* `getNetworkFirmwareUpgradesStagedEvents` - Get the Staged Upgrade Event from a network
* `getNetworkFirmwareUpgradesStagedGroup` - Get a Staged Upgrade Group from a network
* `getNetworkFirmwareUpgradesStagedGroups` - List of Staged Upgrade Groups in a network
* `getNetworkFirmwareUpgradesStagedStages` - Order of Staged Upgrade Groups in a network
* `rollbacksNetworkFirmwareUpgradesStagedEvents` - Rollback a Staged Upgrade Event for a network
* `updateNetworkFirmwareUpgradesStagedEvents` - Update the Staged Upgrade Event for a network
* `updateNetworkFirmwareUpgradesStagedGroup` - Update a Staged Upgrade Group for a network
* `updateNetworkFirmwareUpgradesStagedStages` - Assign Staged Upgrade Group order in the sequence.

### stages

* `getNetworkFirmwareUpgradesStagedStages` - Order of Staged Upgrade Groups in a network
* `updateNetworkFirmwareUpgradesStagedStages` - Assign Staged Upgrade Group order in the sequence.

### staticRoutes

* `createDeviceSwitchRoutingStaticRoute` - Create a layer 3 static route for a switch
* `createNetworkApplianceStaticRoute` - Add a static route for an MX or teleworker network
* `createNetworkSwitchStackRoutingStaticRoute` - Create a layer 3 static route for a switch stack
* `deleteDeviceSwitchRoutingStaticRoute` - Delete a layer 3 static route for a switch
* `deleteNetworkApplianceStaticRoute` - Delete a static route from an MX or teleworker network
* `deleteNetworkSwitchStackRoutingStaticRoute` - Delete a layer 3 static route for a switch stack
* `getDeviceSwitchRoutingStaticRoute` - Return a layer 3 static route for a switch
* `getDeviceSwitchRoutingStaticRoutes` - List layer 3 static routes for a switch
* `getNetworkApplianceStaticRoute` - Return a static route for an MX or teleworker network
* `getNetworkApplianceStaticRoutes` - List the static routes for an MX or teleworker network
* `getNetworkSwitchStackRoutingStaticRoute` - Return a layer 3 static route for a switch stack
* `getNetworkSwitchStackRoutingStaticRoutes` - List layer 3 static routes for a switch stack
* `updateDeviceSwitchRoutingStaticRoute` - Update a layer 3 static route for a switch
* `updateNetworkApplianceStaticRoute` - Update a static route for an MX or teleworker network
* `updateNetworkSwitchStackRoutingStaticRoute` - Update a layer 3 static route for a switch stack

### statics

* `createNetworkAppliancePrefixesDelegatedStatic` - Add a static delegated prefix from a network
* `deleteNetworkAppliancePrefixesDelegatedStatic` - Delete a static delegated prefix from a network
* `getNetworkAppliancePrefixesDelegatedStatic` - Return a static delegated prefix from a network
* `getNetworkAppliancePrefixesDelegatedStatics` - List static delegated prefixes for a network
* `updateNetworkAppliancePrefixesDelegatedStatic` - Update a static delegated prefix from a network

### stats

* `getOrganizationApplianceVpnStats` - Show VPN history stat for networks in an organization

### status

* `getDeviceWirelessStatus` - Return the SSID statuses of an access point

### statuses

* `getDeviceSwitchPortsStatuses` - Return the status for all the ports of a switch
* `getDeviceSwitchPortsStatusesPackets` - Return the packet counters for all the ports of a switch
* `getOrganizationApplianceUplinkStatuses` - List the uplink status of every Meraki MX and Z series appliances in the organization
* `getOrganizationApplianceVpnStatuses` - Show VPN status for networks in an organization
* `getOrganizationCameraOnboardingStatuses` - Fetch onboarding status of cameras
* `getOrganizationCellularGatewayUplinkStatuses` - List the uplink status of every Meraki MG cellular gateway in the organization
* `getOrganizationDevicesPowerModulesStatusesByDevice` - List the power status information for devices in an organization
* `getOrganizationDevicesStatuses` - List the status of every Meraki device in the organization
* `getOrganizationDevicesStatusesOverview` - Return an overview of current device statuses
* `getOrganizationUplinksStatuses` - List the uplink status of every Meraki MX, MG and Z series devices in the organization
* `getOrganizationWirelessDevicesEthernetStatuses` - Endpoint to see power status for wireless devices
* `updateOrganizationCameraOnboardingStatuses` - Notify that credential handoff to camera has completed

### stormControl

* `getNetworkSwitchStormControl` - Return the storm control configuration for a switch network
* `updateNetworkSwitchStormControl` - Update the storm control configuration for a switch network

### stp

* `getNetworkSwitchStp` - Returns STP settings
* `updateNetworkSwitchStp` - Updates STP settings

### subnetPool

* `getNetworkCellularGatewaySubnetPool` - Return the subnet pool and mask configured for MGs in the network.
* `updateNetworkCellularGatewaySubnetPool` - Update the subnet pool and mask configuration for MGs in the network.

### subnets

* `getDeviceApplianceDhcpSubnets` - Return the DHCP subnet information for an appliance

### summary

* `getOrganizationSummaryTopAppliancesByUtilization` - Return the top 10 appliances sorted by utilization over given time range.
* `getOrganizationSummaryTopClientsByUsage` - Return metrics for organization's top 10 clients by data usage (in mb) over given time range.
* `getOrganizationSummaryTopClientsManufacturersByUsage` - Return metrics for organization's top clients by data usage (in mb) over given time range, grouped by manufacturer.
* `getOrganizationSummaryTopDevicesByUsage` - Return metrics for organization's top 10 devices sorted by data usage over given time range
* `getOrganizationSummaryTopDevicesModelsByUsage` - Return metrics for organization's top 10 device models sorted by data usage over given time range
* `getOrganizationSummaryTopSsidsByUsage` - Return metrics for organization's top 10 ssids by data usage over given time range
* `getOrganizationSummaryTopSwitchesByEnergyUsage` - Return metrics for organization's top 10 switches by energy usage over given time range

### switch

* `addNetworkSwitchStack` - Add a switch to a stack
* `cloneOrganizationSwitchDevices` - Clone port-level and some switch-level configuration settings from a source switch to one or more target switches
* `createDeviceSwitchRoutingInterface` - Create a layer 3 interface for a switch
* `createDeviceSwitchRoutingStaticRoute` - Create a layer 3 static route for a switch
* `createNetworkSwitchAccessPolicy` - Create an access policy for a switch network
* `createNetworkSwitchDhcpServerPolicyArpInspectionTrustedServer` - Add a server to be trusted by Dynamic ARP Inspection on this network
* `createNetworkSwitchLinkAggregation` - Create a link aggregation group
* `createNetworkSwitchPortSchedule` - Add a switch port schedule
* `createNetworkSwitchQosRule` - Add a quality of service rule
* `createNetworkSwitchRoutingMulticastRendezvousPoint` - Create a multicast rendezvous point
* `createNetworkSwitchStack` - Create a stack
* `createNetworkSwitchStackRoutingInterface` - Create a layer 3 interface for a switch stack
* `createNetworkSwitchStackRoutingStaticRoute` - Create a layer 3 static route for a switch stack
* `cycleDeviceSwitchPorts` - Cycle a set of switch ports
* `deleteDeviceSwitchRoutingInterface` - Delete a layer 3 interface from the switch
* `deleteDeviceSwitchRoutingStaticRoute` - Delete a layer 3 static route for a switch
* `deleteNetworkSwitchAccessPolicy` - Delete an access policy for a switch network
* `deleteNetworkSwitchDhcpServerPolicyArpInspectionTrustedServer` - Remove a server from being trusted by Dynamic ARP Inspection on this network
* `deleteNetworkSwitchLinkAggregation` - Split a link aggregation group into separate ports
* `deleteNetworkSwitchPortSchedule` - Delete a switch port schedule
* `deleteNetworkSwitchQosRule` - Delete a quality of service rule
* `deleteNetworkSwitchRoutingMulticastRendezvousPoint` - Delete a multicast rendezvous point
* `deleteNetworkSwitchStack` - Delete a stack
* `deleteNetworkSwitchStackRoutingInterface` - Delete a layer 3 interface from a switch stack
* `deleteNetworkSwitchStackRoutingStaticRoute` - Delete a layer 3 static route for a switch stack
* `getDeviceSwitchPort` - Return a switch port
* `getDeviceSwitchPorts` - List the switch ports for a switch
* `getDeviceSwitchPortsStatuses` - Return the status for all the ports of a switch
* `getDeviceSwitchPortsStatusesPackets` - Return the packet counters for all the ports of a switch
* `getDeviceSwitchRoutingInterface` - Return a layer 3 interface for a switch
* `getDeviceSwitchRoutingInterfaceDhcp` - Return a layer 3 interface DHCP configuration for a switch
* `getDeviceSwitchRoutingInterfaces` - List layer 3 interfaces for a switch
* `getDeviceSwitchRoutingStaticRoute` - Return a layer 3 static route for a switch
* `getDeviceSwitchRoutingStaticRoutes` - List layer 3 static routes for a switch
* `getDeviceSwitchWarmSpare` - Return warm spare configuration for a switch
* `getNetworkSwitchAccessControlLists` - Return the access control lists for a MS network
* `getNetworkSwitchAccessPolicies` - List the access policies for a switch network
* `getNetworkSwitchAccessPolicy` - Return a specific access policy for a switch network
* `getNetworkSwitchAlternateManagementInterface` - Return the switch alternate management interface for the network
* `getNetworkSwitchDhcpServerPolicy` - Return the DHCP server settings
* `getNetworkSwitchDhcpServerPolicyArpInspectionTrustedServers` - Return the list of servers trusted by Dynamic ARP Inspection on this network
* `getNetworkSwitchDhcpServerPolicyArpInspectionWarningsByDevice` - Return the devices that have a Dynamic ARP Inspection warning and their warnings
* `getNetworkSwitchDhcpV4ServersSeen` - Return the network's DHCPv4 servers seen within the selected timeframe (default 1 day)
* `getNetworkSwitchDscpToCosMappings` - Return the DSCP to CoS mappings
* `getNetworkSwitchLinkAggregations` - List link aggregation groups
* `getNetworkSwitchMtu` - Return the MTU configuration
* `getNetworkSwitchPortSchedules` - List switch port schedules
* `getNetworkSwitchQosRule` - Return a quality of service rule
* `getNetworkSwitchQosRules` - List quality of service rules
* `getNetworkSwitchQosRulesOrder` - Return the quality of service rule IDs by order in which they will be processed by the switch
* `getNetworkSwitchRoutingMulticast` - Return multicast settings for a network
* `getNetworkSwitchRoutingMulticastRendezvousPoint` - Return a multicast rendezvous point
* `getNetworkSwitchRoutingMulticastRendezvousPoints` - List multicast rendezvous points
* `getNetworkSwitchRoutingOspf` - Return layer 3 OSPF routing configuration
* `getNetworkSwitchSettings` - Returns the switch network settings
* `getNetworkSwitchStack` - Show a switch stack
* `getNetworkSwitchStackRoutingInterface` - Return a layer 3 interface from a switch stack
* `getNetworkSwitchStackRoutingInterfaceDhcp` - Return a layer 3 interface DHCP configuration for a switch stack
* `getNetworkSwitchStackRoutingInterfaces` - List layer 3 interfaces for a switch stack
* `getNetworkSwitchStackRoutingStaticRoute` - Return a layer 3 static route for a switch stack
* `getNetworkSwitchStackRoutingStaticRoutes` - List layer 3 static routes for a switch stack
* `getNetworkSwitchStacks` - List the switch stacks in a network
* `getNetworkSwitchStormControl` - Return the storm control configuration for a switch network
* `getNetworkSwitchStp` - Returns STP settings
* `getOrganizationConfigTemplateSwitchProfilePort` - Return a switch profile port
* `getOrganizationConfigTemplateSwitchProfilePorts` - Return all the ports of a switch profile
* `getOrganizationConfigTemplateSwitchProfiles` - List the switch profiles for your switch template configuration
* `getOrganizationSwitchPortsBySwitch` - List the switchports in an organization by switch
* `removeNetworkSwitchStack` - Remove a switch from a stack
* `updateDeviceSwitchPort` - Update a switch port
* `updateDeviceSwitchRoutingInterface` - Update a layer 3 interface for a switch
* `updateDeviceSwitchRoutingInterfaceDhcp` - Update a layer 3 interface DHCP configuration for a switch
* `updateDeviceSwitchRoutingStaticRoute` - Update a layer 3 static route for a switch
* `updateDeviceSwitchWarmSpare` - Update warm spare configuration for a switch
* `updateNetworkSwitchAccessControlLists` - Update the access control lists for a MS network
* `updateNetworkSwitchAccessPolicy` - Update an access policy for a switch network
* `updateNetworkSwitchAlternateManagementInterface` - Update the switch alternate management interface for the network
* `updateNetworkSwitchDhcpServerPolicy` - Update the DHCP server settings
* `updateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServer` - Update a server that is trusted by Dynamic ARP Inspection on this network
* `updateNetworkSwitchDscpToCosMappings` - Update the DSCP to CoS mappings
* `updateNetworkSwitchLinkAggregation` - Update a link aggregation group
* `updateNetworkSwitchMtu` - Update the MTU configuration
* `updateNetworkSwitchPortSchedule` - Update a switch port schedule
* `updateNetworkSwitchQosRule` - Update a quality of service rule
* `updateNetworkSwitchQosRulesOrder` - Update the order in which the rules should be processed by the switch
* `updateNetworkSwitchRoutingMulticast` - Update multicast settings for a network
* `updateNetworkSwitchRoutingMulticastRendezvousPoint` - Update a multicast rendezvous point
* `updateNetworkSwitchRoutingOspf` - Update layer 3 OSPF routing configuration
* `updateNetworkSwitchSettings` - Update switch network settings
* `updateNetworkSwitchStackRoutingInterface` - Update a layer 3 interface for a switch stack
* `updateNetworkSwitchStackRoutingInterfaceDhcp` - Update a layer 3 interface DHCP configuration for a switch stack
* `updateNetworkSwitchStackRoutingStaticRoute` - Update a layer 3 static route for a switch stack
* `updateNetworkSwitchStormControl` - Update the storm control configuration for a switch network
* `updateNetworkSwitchStp` - Updates STP settings
* `updateOrganizationConfigTemplateSwitchProfilePort` - Update a switch profile port

### switches

* `getOrganizationSummaryTopSwitchesByEnergyUsage` - Return metrics for organization's top 10 switches by energy usage over given time range

### syslogServers

* `getNetworkSyslogServers` - List the syslog servers for a network
* `updateNetworkSyslogServers` - Update the syslog servers for a network

### targetGroups

* `createNetworkSmTargetGroup` - Add a target group
* `deleteNetworkSmTargetGroup` - Delete a target group from a network
* `getNetworkSmTargetGroup` - Return a target group
* `getNetworkSmTargetGroups` - List the target groups in this network
* `updateNetworkSmTargetGroup` - Update a target group

### thirdPartyVPNPeers

* `getOrganizationApplianceVPNThirdPartyVPNPeers` - Return the third party VPN peers for an organization
* `updateOrganizationApplianceVPNThirdPartyVPNPeers` - Update the third party VPN peers for an organization

### top

* `getOrganizationSummaryTopAppliancesByUtilization` - Return the top 10 appliances sorted by utilization over given time range.
* `getOrganizationSummaryTopClientsByUsage` - Return metrics for organization's top 10 clients by data usage (in mb) over given time range.
* `getOrganizationSummaryTopClientsManufacturersByUsage` - Return metrics for organization's top clients by data usage (in mb) over given time range, grouped by manufacturer.
* `getOrganizationSummaryTopDevicesByUsage` - Return metrics for organization's top 10 devices sorted by data usage over given time range
* `getOrganizationSummaryTopDevicesModelsByUsage` - Return metrics for organization's top 10 device models sorted by data usage over given time range
* `getOrganizationSummaryTopSsidsByUsage` - Return metrics for organization's top 10 ssids by data usage over given time range
* `getOrganizationSummaryTopSwitchesByEnergyUsage` - Return metrics for organization's top 10 switches by energy usage over given time range

### topology

* `getNetworkTopologyLinkLayer` - List the LLDP and CDP information for all discovered devices and connections in a network.

### traffic

* `getNetworkTraffic` - Return the traffic analysis data for this network

### trafficAnalysis

* `getNetworkTrafficAnalysis` - Return the traffic analysis settings for a network
* `updateNetworkTrafficAnalysis` - Update the traffic analysis settings for a network

### trafficHistory

* `getNetworkClientTrafficHistory` - Return the client's network traffic data over time

### trafficShaping

* `createNetworkApplianceTrafficShapingCustomPerformanceClass` - Add a custom performance class for an MX network
* `deleteNetworkApplianceTrafficShapingCustomPerformanceClass` - Delete a custom performance class from an MX network
* `getNetworkApplianceTrafficShaping` - Display the traffic shaping settings for an MX network
* `getNetworkApplianceTrafficShapingCustomPerformanceClass` - Return a custom performance class for an MX network
* `getNetworkApplianceTrafficShapingCustomPerformanceClasses` - List all custom performance classes for an MX network
* `getNetworkApplianceTrafficShapingRules` - Display the traffic shaping settings rules for an MX network
* `getNetworkApplianceTrafficShapingUplinkBandwidth` - Returns the uplink bandwidth settings for your MX network.
* `getNetworkApplianceTrafficShapingUplinkSelection` - Show uplink selection settings for an MX network
* `getNetworkTrafficShapingApplicationCategories` - Returns the application categories for traffic shaping rules.
* `getNetworkTrafficShapingDscpTaggingOptions` - Returns the available DSCP tagging options for your traffic shaping rules.
* `getNetworkWirelessSsidTrafficShapingRules` - Display the traffic shaping settings for a SSID on an MR network
* `updateNetworkApplianceTrafficShaping` - Update the traffic shaping settings for an MX network
* `updateNetworkApplianceTrafficShapingCustomPerformanceClass` - Update a custom performance class for an MX network
* `updateNetworkApplianceTrafficShapingRules` - Update the traffic shaping settings rules for an MX network
* `updateNetworkApplianceTrafficShapingUplinkBandwidth` - Updates the uplink bandwidth settings for your MX network.
* `updateNetworkApplianceTrafficShapingUplinkSelection` - Update uplink selection settings for an MX network
* `updateNetworkWirelessSsidTrafficShapingRules` - Update the traffic shaping settings for an SSID on an MR network

### trustedAccessConfigs

* `getNetworkSmTrustedAccessConfigs` - List Trusted Access Configs

### trustedServers

* `createNetworkSwitchDhcpServerPolicyArpInspectionTrustedServer` - Add a server to be trusted by Dynamic ARP Inspection on this network
* `deleteNetworkSwitchDhcpServerPolicyArpInspectionTrustedServer` - Remove a server from being trusted by Dynamic ARP Inspection on this network
* `getNetworkSwitchDhcpServerPolicyArpInspectionTrustedServers` - Return the list of servers trusted by Dynamic ARP Inspection on this network
* `updateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServer` - Update a server that is trusted by Dynamic ARP Inspection on this network

### upgrades

* `getOrganizationFirmwareUpgrades` - Get firmware upgrade information for an organization
* `getOrganizationFirmwareUpgradesByDevice` - Get firmware upgrade status for the filtered devices

### uplink

* `getNetworkCellularGatewayUplink` - Returns the uplink settings for your MG network.
* `getOrganizationCellularGatewayUplinkStatuses` - List the uplink status of every Meraki MG cellular gateway in the organization
* `updateNetworkCellularGatewayUplink` - Updates the uplink settings for your MG network.

### uplinkBandwidth

* `getNetworkApplianceTrafficShapingUplinkBandwidth` - Returns the uplink bandwidth settings for your MX network.
* `updateNetworkApplianceTrafficShapingUplinkBandwidth` - Updates the uplink bandwidth settings for your MX network.

### uplinkSelection

* `getNetworkApplianceTrafficShapingUplinkSelection` - Show uplink selection settings for an MX network
* `updateNetworkApplianceTrafficShapingUplinkSelection` - Update uplink selection settings for an MX network

### uplinks

* `getDeviceApplianceUplinksSettings` - Return the uplink settings for an MX appliance
* `getDeviceLossAndLatencyHistory` - Get the uplink loss percentage and latency in milliseconds, and goodput in kilobits per second for a wired network device.
* `getNetworkApplianceUplinksUsageHistory` - Get the sent and received bytes for each uplink of a network.
* `getOrganizationApplianceUplinkStatuses` - List the uplink status of every Meraki MX and Z series appliances in the organization
* `getOrganizationDevicesUplinksAddressesByDevice` - List the current uplink addresses for devices in an organization.
* `getOrganizationDevicesUplinksLossAndLatency` - Return the uplink loss and latency for every MX in the organization from at latest 2 minutes ago
* `getOrganizationUplinksStatuses` - List the uplink status of every Meraki MX, MG and Z series devices in the organization
* `updateDeviceApplianceUplinksSettings` - Update the uplink settings for an MX appliance

### uplinksLossAndLatency

* `getOrganizationDevicesUplinksLossAndLatency` - Return the uplink loss and latency for every MX in the organization from at latest 2 minutes ago

### usageHistories

* `getNetworkClientsUsageHistories` - Return the usage histories for clients

### usageHistory

* `getNetworkApplianceUplinksUsageHistory` - Get the sent and received bytes for each uplink of a network.
* `getNetworkClientUsageHistory` - Return the client's daily usage history
* `getNetworkWirelessUsageHistory` - Return AP usage over time for a device or network client

### userAccessDevices

* `deleteNetworkSmUserAccessDevice` - Delete a User Access Device
* `getNetworkSmUserAccessDevices` - List User Access Devices and its Trusted Access Connections

### users

* `deleteOrganizationUser` - Delete a user and all of its authentication methods.
* `getNetworkSmUserDeviceProfiles` - Get the profiles associated with a user
* `getNetworkSmUserSoftwares` - Get a list of softwares associated with a user
* `getNetworkSmUsers` - List the owners in an SM network with various specified fields and filters

### v4

* `getNetworkSwitchDhcpV4ServersSeen` - Return the network's DHCPv4 servers seen within the selected timeframe (default 1 day)

### video

* `getDeviceCameraVideoSettings` - Returns video settings for the given camera
* `updateDeviceCameraVideoSettings` - Update video settings for the given camera

### videoLink

* `getDeviceCameraVideoLink` - Returns video link to the specified camera

### vlanAssignments

* `getDeviceAppliancePrefixesDelegatedVlanAssignments` - Return prefixes assigned to all IPv6 enabled VLANs on an appliance.

### vlans

* `createNetworkApplianceVlan` - Add a VLAN
* `deleteNetworkApplianceVlan` - Delete a VLAN from a network
* `getNetworkApplianceVlan` - Return a VLAN
* `getNetworkApplianceVlans` - List the VLANs for an MX network
* `getNetworkApplianceVlansSettings` - Returns the enabled status of VLANs for the network
* `updateNetworkApplianceVlan` - Update a VLAN
* `updateNetworkApplianceVlansSettings` - Enable/Disable VLANs for the given network

### vmx

* `createDeviceApplianceVmxAuthenticationToken` - Generate a new vMX authentication token

### vpn

* `getNetworkApplianceVpnBgp` - Return a Hub BGP Configuration
* `getNetworkApplianceVpnSiteToSiteVpn` - Return the site-to-site VPN settings of a network
* `getNetworkWirelessSsidVpn` - List the VPN settings for the SSID.
* `getOrganizationApplianceVpnStats` - Show VPN history stat for networks in an organization
* `getOrganizationApplianceVpnStatuses` - Show VPN status for networks in an organization
* `getOrganizationApplianceVPNThirdPartyVPNPeers` - Return the third party VPN peers for an organization
* `getOrganizationApplianceVpnVpnFirewallRules` - Return the firewall rules for an organization's site-to-site VPN
* `updateNetworkApplianceVpnBgp` - Update a Hub BGP Configuration
* `updateNetworkApplianceVpnSiteToSiteVpn` - Update the site-to-site VPN settings of a network
* `updateNetworkWirelessSsidVpn` - Update the VPN settings for the SSID
* `updateOrganizationApplianceVPNThirdPartyVPNPeers` - Update the third party VPN peers for an organization
* `updateOrganizationApplianceVpnVpnFirewallRules` - Update the firewall rules of an organization's site-to-site VPN

### vpnFirewallRules

* `getOrganizationApplianceVpnVpnFirewallRules` - Return the firewall rules for an organization's site-to-site VPN
* `updateOrganizationApplianceVpnVpnFirewallRules` - Update the firewall rules of an organization's site-to-site VPN

### vppAccounts

* `getOrganizationSmVppAccount` - Get a hash containing the unparsed token of the VPP account with the given ID
* `getOrganizationSmVppAccounts` - List the VPP accounts in the organization

### warmSpare

* `getDeviceSwitchWarmSpare` - Return warm spare configuration for a switch
* `getNetworkApplianceWarmSpare` - Return MX warm spare settings
* `swapNetworkApplianceWarmSpare` - Swap MX primary and warm spare appliances
* `updateDeviceSwitchWarmSpare` - Update warm spare configuration for a switch
* `updateNetworkApplianceWarmSpare` - Update MX warm spare settings

### warnings

* `getNetworkSwitchDhcpServerPolicyArpInspectionWarningsByDevice` - Return the devices that have a Dynamic ARP Inspection warning and their warnings

### webhookTests

* `createNetworkWebhooksWebhookTest` - Send a test webhook for a network
* `getNetworkWebhooksWebhookTest` - Return the status of a webhook test for a network

### webhooks

* `createNetworkWebhooksHttpServer` - Add an HTTP server to a network
* `createNetworkWebhooksPayloadTemplate` - Create a webhook payload template for a network
* `createNetworkWebhooksWebhookTest` - Send a test webhook for a network
* `deleteNetworkWebhooksHttpServer` - Delete an HTTP server from a network
* `deleteNetworkWebhooksPayloadTemplate` - Destroy a webhook payload template for a network
* `getNetworkWebhooksHttpServer` - Return an HTTP server for a network
* `getNetworkWebhooksHttpServers` - List the HTTP servers for a network
* `getNetworkWebhooksPayloadTemplate` - Get the webhook payload template for a network
* `getNetworkWebhooksPayloadTemplates` - List the webhook payload templates for a network
* `getNetworkWebhooksWebhookTest` - Return the status of a webhook test for a network
* `getOrganizationWebhooksAlertTypes` - Return a list of alert types to be used with managing webhook alerts
* `getOrganizationWebhooksLogs` - Return the log of webhook POSTs sent
* `updateNetworkWebhooksHttpServer` - Update an HTTP server
* `updateNetworkWebhooksPayloadTemplate` - Update a webhook payload template for a network

### wireless

* `createNetworkWirelessRfProfile` - Creates new RF profile for this network
* `createNetworkWirelessSsidIdentityPsk` - Create an Identity PSK
* `deleteNetworkWirelessRfProfile` - Delete a RF Profile
* `deleteNetworkWirelessSsidIdentityPsk` - Delete an Identity PSK
* `getDeviceWirelessBluetoothSettings` - Return the bluetooth settings for a wireless device
* `getDeviceWirelessConnectionStats` - Aggregated connectivity info for a given AP on this network
* `getDeviceWirelessLatencyStats` - Aggregated latency info for a given AP on this network
* `getDeviceWirelessRadioSettings` - Return the radio settings of a device
* `getDeviceWirelessStatus` - Return the SSID statuses of an access point
* `getNetworkWirelessAirMarshal` - List Air Marshal scan results from a network
* `getNetworkWirelessAlternateManagementInterface` - Return alternate management interface and devices with IP assigned
* `getNetworkWirelessBilling` - Return the billing settings of this network
* `getNetworkWirelessBluetoothSettings` - Return the Bluetooth settings for a network. <a href="https://documentation.meraki.com/MR/Bluetooth/Bluetooth_Low_Energy_(BLE)">Bluetooth settings</a> must be enabled on the network.
* `getNetworkWirelessChannelUtilizationHistory` - Return AP channel utilization over time for a device or network client
* `getNetworkWirelessClientConnectionStats` - Aggregated connectivity info for a given client on this network
* `getNetworkWirelessClientConnectivityEvents` - List the wireless connectivity events for a client within a network in the timespan.
* `getNetworkWirelessClientCountHistory` - Return wireless client counts over time for a network, device, or network client
* `getNetworkWirelessClientLatencyHistory` - Return the latency history for a client
* `getNetworkWirelessClientLatencyStats` - Aggregated latency info for a given client on this network
* `getNetworkWirelessClientsConnectionStats` - Aggregated connectivity info for this network, grouped by clients
* `getNetworkWirelessClientsLatencyStats` - Aggregated latency info for this network, grouped by clients
* `getNetworkWirelessConnectionStats` - Aggregated connectivity info for this network
* `getNetworkWirelessDataRateHistory` - Return PHY data rates over time for a network, device, or network client
* `getNetworkWirelessDevicesConnectionStats` - Aggregated connectivity info for this network, grouped by node
* `getNetworkWirelessDevicesLatencyStats` - Aggregated latency info for this network, grouped by node
* `getNetworkWirelessFailedConnections` - List of all failed client connection events on this network in a given time range
* `getNetworkWirelessLatencyHistory` - Return average wireless latency over time for a network, device, or network client
* `getNetworkWirelessLatencyStats` - Aggregated latency info for this network
* `getNetworkWirelessMeshStatuses` - List wireless mesh statuses for repeaters
* `getNetworkWirelessRfProfile` - Return a RF profile
* `getNetworkWirelessRfProfiles` - List the non-basic RF profiles for this network
* `getNetworkWirelessSettings` - Return the wireless settings for a network
* `getNetworkWirelessSignalQualityHistory` - Return signal quality (SNR/RSSI) over time for a device or network client
* `getNetworkWirelessSsid` - Return a single MR SSID
* `getNetworkWirelessSsidBonjourForwarding` - List the Bonjour forwarding setting and rules for the SSID
* `getNetworkWirelessSsidDeviceTypeGroupPolicies` - List the device type group policies for the SSID
* `getNetworkWirelessSsidEapOverride` - Return the EAP overridden parameters for an SSID
* `getNetworkWirelessSsidFirewallL3FirewallRules` - Return the L3 firewall rules for an SSID on an MR network
* `getNetworkWirelessSsidFirewallL7FirewallRules` - Return the L7 firewall rules for an SSID on an MR network
* `getNetworkWirelessSsidHotspot20` - Return the Hotspot 2.0 settings for an SSID
* `getNetworkWirelessSsidIdentityPsk` - Return an Identity PSK
* `getNetworkWirelessSsidIdentityPsks` - List all Identity PSKs in a wireless network
* `getNetworkWirelessSsidSchedules` - List the outage schedule for the SSID
* `getNetworkWirelessSsidSplashSettings` - Display the splash page settings for the given SSID
* `getNetworkWirelessSsidTrafficShapingRules` - Display the traffic shaping settings for a SSID on an MR network
* `getNetworkWirelessSsidVpn` - List the VPN settings for the SSID.
* `getNetworkWirelessSsids` - List the MR SSIDs in a network
* `getNetworkWirelessUsageHistory` - Return AP usage over time for a device or network client
* `getOrganizationWirelessDevicesEthernetStatuses` - Endpoint to see power status for wireless devices
* `updateDeviceWirelessBluetoothSettings` - Update the bluetooth settings for a wireless device
* `updateDeviceWirelessRadioSettings` - Update the radio settings of a device
* `updateNetworkWirelessAlternateManagementInterface` - Update alternate management interface and device static IP
* `updateNetworkWirelessBilling` - Update the billing settings
* `updateNetworkWirelessBluetoothSettings` - Update the Bluetooth settings for a network
* `updateNetworkWirelessRfProfile` - Updates specified RF profile for this network
* `updateNetworkWirelessSettings` - Update the wireless settings for a network
* `updateNetworkWirelessSsid` - Update the attributes of an MR SSID
* `updateNetworkWirelessSsidBonjourForwarding` - Update the bonjour forwarding setting and rules for the SSID
* `updateNetworkWirelessSsidDeviceTypeGroupPolicies` - Update the device type group policies for the SSID
* `updateNetworkWirelessSsidEapOverride` - Update the EAP overridden parameters for an SSID.
* `updateNetworkWirelessSsidFirewallL3FirewallRules` - Update the L3 firewall rules of an SSID on an MR network
* `updateNetworkWirelessSsidFirewallL7FirewallRules` - Update the L7 firewall rules of an SSID on an MR network
* `updateNetworkWirelessSsidHotspot20` - Update the Hotspot 2.0 settings of an SSID
* `updateNetworkWirelessSsidIdentityPsk` - Update an Identity PSK
* `updateNetworkWirelessSsidSchedules` - Update the outage schedule for the SSID
* `updateNetworkWirelessSsidSplashSettings` - Modify the splash page settings for the given SSID
* `updateNetworkWirelessSsidTrafficShapingRules` - Update the traffic shaping settings for an SSID on an MR network
* `updateNetworkWirelessSsidVpn` - Update the VPN settings for the SSID

### wirelessProfiles

* `createNetworkCameraWirelessProfile` - Creates a new camera wireless profile for this network.
* `deleteNetworkCameraWirelessProfile` - Delete an existing camera wireless profile for this network.
* `getDeviceCameraWirelessProfiles` - Returns wireless profile assigned to the given camera
* `getNetworkCameraWirelessProfile` - Retrieve a single camera wireless profile.
* `getNetworkCameraWirelessProfiles` - List the camera wireless profiles for this network.
* `updateDeviceCameraWirelessProfiles` - Assign wireless profiles to the given camera
* `updateNetworkCameraWirelessProfile` - Update an existing camera wireless profile in this network.

### wlanLists

* `getNetworkSmDeviceWlanLists` - List the saved SSID names on a device

### zones

* `getDeviceCameraAnalyticsZoneHistory` - Return historical records for analytic zones
* `getDeviceCameraAnalyticsZones` - Returns all configured analytic zones for this camera
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
