# configure

### Available Operations

* [addNetworkSwitchStack](#addnetworkswitchstack) - Add a switch to a stack
* [assignOrganizationLicensesSeats](#assignorganizationlicensesseats) - Assign SM seats to a network
* [bindNetwork](#bindnetwork) - Bind a network to a template.
* [checkinNetworkSmDevices](#checkinnetworksmdevices) - Force check-in a set of devices
* [claimIntoOrganization](#claimintoorganization) - Claim a list of devices, licenses, and/or orders into an organization
* [claimIntoOrganizationInventory](#claimintoorganizationinventory) - Claim a list of devices, licenses, and/or orders into an organization inventory
* [claimNetworkDevices](#claimnetworkdevices) - Claim devices into a network. (Note: for recently claimed devices, it may take a few minutes for API requsts against that device to succeed)
* [cloneOrganization](#cloneorganization) - Create a new organization by cloning the addressed organization
* [cloneOrganizationSwitchDevices](#cloneorganizationswitchdevices) - Clone port-level and some switch-level configuration settings from a source switch to one or more target switches
* [combineOrganizationNetworks](#combineorganizationnetworks) - Combine multiple networks into a single network
* [createDeviceApplianceVmxAuthenticationToken](#createdeviceappliancevmxauthenticationtoken) - Generate a new vMX authentication token
* [createDeviceSwitchRoutingInterface](#createdeviceswitchroutinginterface) - Create a layer 3 interface for a switch
* [createDeviceSwitchRoutingStaticRoute](#createdeviceswitchroutingstaticroute) - Create a layer 3 static route for a switch
* [createNetworkAppliancePrefixesDelegatedStatic](#createnetworkapplianceprefixesdelegatedstatic) - Add a static delegated prefix from a network
* [createNetworkApplianceStaticRoute](#createnetworkappliancestaticroute) - Add a static route for an MX or teleworker network
* [createNetworkApplianceTrafficShapingCustomPerformanceClass](#createnetworkappliancetrafficshapingcustomperformanceclass) - Add a custom performance class for an MX network
* [createNetworkApplianceVlan](#createnetworkappliancevlan) - Add a VLAN
* [createNetworkCameraQualityRetentionProfile](#createnetworkcameraqualityretentionprofile) - Creates new quality retention profile for this network.
* [createNetworkCameraWirelessProfile](#createnetworkcamerawirelessprofile) - Creates a new camera wireless profile for this network.
* [createNetworkFirmwareUpgradesRollback](#createnetworkfirmwareupgradesrollback) - Rollback a Firmware Upgrade For A Network
* [createNetworkFirmwareUpgradesStagedEvent](#createnetworkfirmwareupgradesstagedevent) - Create a Staged Upgrade Event for a network
* [createNetworkFirmwareUpgradesStagedGroup](#createnetworkfirmwareupgradesstagedgroup) - Create a Staged Upgrade Group for a network
* [createNetworkFloorPlan](#createnetworkfloorplan) - Upload a floor plan
* [createNetworkGroupPolicy](#createnetworkgrouppolicy) - Create a group policy
* [createNetworkMerakiAuthUser](#createnetworkmerakiauthuser) - Authorize a user configured with Meraki Authentication for a network (currently supports 802.1X, splash guest, and client VPN users, and currently, organizations have a 50,000 user cap)
* [createNetworkMqttBroker](#createnetworkmqttbroker) - Add an MQTT broker
* [createNetworkPiiRequest](#createnetworkpiirequest) - Submit a new delete or restrict processing PII request
* [createNetworkSensorAlertsProfile](#createnetworksensoralertsprofile) - Creates a sensor alert profile for a network.
* [createNetworkSmBypassActivationLockAttempt](#createnetworksmbypassactivationlockattempt) - Bypass activation lock attempt
* [createNetworkSmTargetGroup](#createnetworksmtargetgroup) - Add a target group
* [createNetworkSwitchAccessPolicy](#createnetworkswitchaccesspolicy) - Create an access policy for a switch network
* [createNetworkSwitchDhcpServerPolicyArpInspectionTrustedServer](#createnetworkswitchdhcpserverpolicyarpinspectiontrustedserver) - Add a server to be trusted by Dynamic ARP Inspection on this network
* [createNetworkSwitchLinkAggregation](#createnetworkswitchlinkaggregation) - Create a link aggregation group
* [createNetworkSwitchPortSchedule](#createnetworkswitchportschedule) - Add a switch port schedule
* [createNetworkSwitchQosRule](#createnetworkswitchqosrule) - Add a quality of service rule
* [createNetworkSwitchRoutingMulticastRendezvousPoint](#createnetworkswitchroutingmulticastrendezvouspoint) - Create a multicast rendezvous point
* [createNetworkSwitchStack](#createnetworkswitchstack) - Create a stack
* [createNetworkSwitchStackRoutingInterface](#createnetworkswitchstackroutinginterface) - Create a layer 3 interface for a switch stack
* [createNetworkSwitchStackRoutingStaticRoute](#createnetworkswitchstackroutingstaticroute) - Create a layer 3 static route for a switch stack
* [createNetworkWebhooksHttpServer](#createnetworkwebhookshttpserver) - Add an HTTP server to a network
* [createNetworkWebhooksPayloadTemplate](#createnetworkwebhookspayloadtemplate) - Create a webhook payload template for a network
* [createNetworkWebhooksWebhookTest](#createnetworkwebhookswebhooktest) - Send a test webhook for a network
* [createNetworkWirelessRfProfile](#createnetworkwirelessrfprofile) - Creates new RF profile for this network
* [createNetworkWirelessSsidIdentityPsk](#createnetworkwirelessssididentitypsk) - Create an Identity PSK
* [createOrganization](#createorganization) - Create a new organization
* [createOrganizationActionBatch](#createorganizationactionbatch) - Create an action batch
* [createOrganizationAdaptivePolicyAcl](#createorganizationadaptivepolicyacl) - Creates new adaptive policy ACL
* [createOrganizationAdaptivePolicyGroup](#createorganizationadaptivepolicygroup) - Creates a new adaptive policy group
* [createOrganizationAdaptivePolicyPolicy](#createorganizationadaptivepolicypolicy) - Add an Adaptive Policy
* [createOrganizationAdmin](#createorganizationadmin) - Create a new dashboard administrator
* [createOrganizationAlertsProfile](#createorganizationalertsprofile) - Create an organization-wide alert configuration
* [createOrganizationBrandingPolicy](#createorganizationbrandingpolicy) - Add a new branding policy to an organization
* [createOrganizationCameraCustomAnalyticsArtifact](#createorganizationcameracustomanalyticsartifact) - Create custom analytics artifact
* [createOrganizationConfigTemplate](#createorganizationconfigtemplate) - Create a new configuration template
* [createOrganizationEarlyAccessFeaturesOptIn](#createorganizationearlyaccessfeaturesoptin) - Create a new early access feature opt-in for an organization
* [createOrganizationInsightMonitoredMediaServer](#createorganizationinsightmonitoredmediaserver) - Add a media server to be monitored for this organization
* [createOrganizationInventoryOnboardingCloudMonitoringExportEvent](#createorganizationinventoryonboardingcloudmonitoringexportevent) - Imports event logs related to the onboarding app into elastisearch
* [createOrganizationInventoryOnboardingCloudMonitoringImport](#createorganizationinventoryonboardingcloudmonitoringimport) - Commits the import operation to complete the onboarding of a device into Dashboard for monitoring.
* [createOrganizationInventoryOnboardingCloudMonitoringPrepare](#createorganizationinventoryonboardingcloudmonitoringprepare) - Initiates or updates an import session
* [createOrganizationNetwork](#createorganizationnetwork) - Create a network
* [createOrganizationPolicyObject](#createorganizationpolicyobject) - Creates a new Policy Object.
* [createOrganizationPolicyObjectsGroup](#createorganizationpolicyobjectsgroup) - Creates a new Policy Object Group.
* [createOrganizationSamlIdp](#createorganizationsamlidp) - Create a SAML IdP for your organization.
* [createOrganizationSamlRole](#createorganizationsamlrole) - Create a SAML role
* [deferNetworkFirmwareUpgradesStagedEvents](#defernetworkfirmwareupgradesstagedevents) - Postpone by 1 week all pending staged upgrade stages for a network
* [deleteDeviceSwitchRoutingInterface](#deletedeviceswitchroutinginterface) - Delete a layer 3 interface from the switch
* [deleteDeviceSwitchRoutingStaticRoute](#deletedeviceswitchroutingstaticroute) - Delete a layer 3 static route for a switch
* [deleteNetwork](#deletenetwork) - Delete a network
* [deleteNetworkAppliancePrefixesDelegatedStatic](#deletenetworkapplianceprefixesdelegatedstatic) - Delete a static delegated prefix from a network
* [deleteNetworkApplianceStaticRoute](#deletenetworkappliancestaticroute) - Delete a static route from an MX or teleworker network
* [deleteNetworkApplianceTrafficShapingCustomPerformanceClass](#deletenetworkappliancetrafficshapingcustomperformanceclass) - Delete a custom performance class from an MX network
* [deleteNetworkApplianceVlan](#deletenetworkappliancevlan) - Delete a VLAN from a network
* [deleteNetworkCameraQualityRetentionProfile](#deletenetworkcameraqualityretentionprofile) - Delete an existing quality retention profile for this network.
* [deleteNetworkCameraWirelessProfile](#deletenetworkcamerawirelessprofile) - Delete an existing camera wireless profile for this network.
* [deleteNetworkFirmwareUpgradesStagedGroup](#deletenetworkfirmwareupgradesstagedgroup) - Delete a Staged Upgrade Group
* [deleteNetworkFloorPlan](#deletenetworkfloorplan) - Destroy a floor plan
* [deleteNetworkGroupPolicy](#deletenetworkgrouppolicy) - Delete a group policy
* [deleteNetworkMerakiAuthUser](#deletenetworkmerakiauthuser) - Deauthorize a user
* [deleteNetworkMqttBroker](#deletenetworkmqttbroker) - Delete an MQTT broker
* [deleteNetworkPiiRequest](#deletenetworkpiirequest) - Delete a restrict processing PII request
* [deleteNetworkSensorAlertsProfile](#deletenetworksensoralertsprofile) - Deletes a sensor alert profile from a network.
* [deleteNetworkSmTargetGroup](#deletenetworksmtargetgroup) - Delete a target group from a network
* [deleteNetworkSmUserAccessDevice](#deletenetworksmuseraccessdevice) - Delete a User Access Device
* [deleteNetworkSwitchAccessPolicy](#deletenetworkswitchaccesspolicy) - Delete an access policy for a switch network
* [deleteNetworkSwitchDhcpServerPolicyArpInspectionTrustedServer](#deletenetworkswitchdhcpserverpolicyarpinspectiontrustedserver) - Remove a server from being trusted by Dynamic ARP Inspection on this network
* [deleteNetworkSwitchLinkAggregation](#deletenetworkswitchlinkaggregation) - Split a link aggregation group into separate ports
* [deleteNetworkSwitchPortSchedule](#deletenetworkswitchportschedule) - Delete a switch port schedule
* [deleteNetworkSwitchQosRule](#deletenetworkswitchqosrule) - Delete a quality of service rule
* [deleteNetworkSwitchRoutingMulticastRendezvousPoint](#deletenetworkswitchroutingmulticastrendezvouspoint) - Delete a multicast rendezvous point
* [deleteNetworkSwitchStack](#deletenetworkswitchstack) - Delete a stack
* [deleteNetworkSwitchStackRoutingInterface](#deletenetworkswitchstackroutinginterface) - Delete a layer 3 interface from a switch stack
* [deleteNetworkSwitchStackRoutingStaticRoute](#deletenetworkswitchstackroutingstaticroute) - Delete a layer 3 static route for a switch stack
* [deleteNetworkWebhooksHttpServer](#deletenetworkwebhookshttpserver) - Delete an HTTP server from a network
* [deleteNetworkWebhooksPayloadTemplate](#deletenetworkwebhookspayloadtemplate) - Destroy a webhook payload template for a network
* [deleteNetworkWirelessRfProfile](#deletenetworkwirelessrfprofile) - Delete a RF Profile
* [deleteNetworkWirelessSsidIdentityPsk](#deletenetworkwirelessssididentitypsk) - Delete an Identity PSK
* [deleteOrganization](#deleteorganization) - Delete an organization
* [deleteOrganizationActionBatch](#deleteorganizationactionbatch) - Delete an action batch
* [deleteOrganizationAdaptivePolicyAcl](#deleteorganizationadaptivepolicyacl) - Deletes the specified adaptive policy ACL
* [deleteOrganizationAdaptivePolicyGroup](#deleteorganizationadaptivepolicygroup) - Deletes the specified adaptive policy group and any associated policies and references
* [deleteOrganizationAdaptivePolicyPolicy](#deleteorganizationadaptivepolicypolicy) - Delete an Adaptive Policy
* [deleteOrganizationAdmin](#deleteorganizationadmin) - Revoke all access for a dashboard administrator within this organization
* [deleteOrganizationAlertsProfile](#deleteorganizationalertsprofile) - Removes an organization-wide alert config
* [deleteOrganizationBrandingPolicy](#deleteorganizationbrandingpolicy) - Delete a branding policy
* [deleteOrganizationCameraCustomAnalyticsArtifact](#deleteorganizationcameracustomanalyticsartifact) - Delete Custom Analytics Artifact
* [deleteOrganizationConfigTemplate](#deleteorganizationconfigtemplate) - Remove a configuration template
* [deleteOrganizationEarlyAccessFeaturesOptIn](#deleteorganizationearlyaccessfeaturesoptin) - Delete an early access feature opt-in
* [deleteOrganizationInsightMonitoredMediaServer](#deleteorganizationinsightmonitoredmediaserver) - Delete a monitored media server from this organization
* [deleteOrganizationPolicyObject](#deleteorganizationpolicyobject) - Deletes a Policy Object.
* [deleteOrganizationPolicyObjectsGroup](#deleteorganizationpolicyobjectsgroup) - Deletes a Policy Object Group.
* [deleteOrganizationSamlIdp](#deleteorganizationsamlidp) - Remove a SAML IdP in your organization.
* [deleteOrganizationSamlRole](#deleteorganizationsamlrole) - Remove a SAML role
* [deleteOrganizationUser](#deleteorganizationuser) - Delete a user and all of its authentication methods.
* [getDevice](#getdevice) - Return a single device
* [getDeviceApplianceUplinksSettings](#getdeviceapplianceuplinkssettings) - Return the uplink settings for an MX appliance
* [getDeviceCameraCustomAnalytics](#getdevicecameracustomanalytics) - Return custom analytics settings for a camera
* [getDeviceCameraQualityAndRetention](#getdevicecameraqualityandretention) - Returns quality and retention settings for the given camera
* [getDeviceCameraSense](#getdevicecamerasense) - Returns sense settings for a given camera
* [getDeviceCameraSenseObjectDetectionModels](#getdevicecamerasenseobjectdetectionmodels) - Returns the MV Sense object detection model list for the given camera
* [getDeviceCameraVideoLink](#getdevicecameravideolink) - Returns video link to the specified camera
* [getDeviceCameraVideoSettings](#getdevicecameravideosettings) - Returns video settings for the given camera
* [getDeviceCameraWirelessProfiles](#getdevicecamerawirelessprofiles) - Returns wireless profile assigned to the given camera
* [getDeviceCellularGatewayLan](#getdevicecellulargatewaylan) - Show the LAN Settings of a MG
* [getDeviceCellularGatewayPortForwardingRules](#getdevicecellulargatewayportforwardingrules) - Returns the port forwarding rules for a single MG.
* [getDeviceCellularSims](#getdevicecellularsims) - Return the SIM and APN configurations for a cellular device.
* [getDeviceManagementInterface](#getdevicemanagementinterface) - Return the management interface settings for a device
* [getDeviceSensorRelationships](#getdevicesensorrelationships) - List the sensor roles for a given sensor or camera device.
* [getDeviceSwitchPort](#getdeviceswitchport) - Return a switch port
* [getDeviceSwitchPorts](#getdeviceswitchports) - List the switch ports for a switch
* [getDeviceSwitchRoutingInterface](#getdeviceswitchroutinginterface) - Return a layer 3 interface for a switch
* [getDeviceSwitchRoutingInterfaceDhcp](#getdeviceswitchroutinginterfacedhcp) - Return a layer 3 interface DHCP configuration for a switch
* [getDeviceSwitchRoutingInterfaces](#getdeviceswitchroutinginterfaces) - List layer 3 interfaces for a switch
* [getDeviceSwitchRoutingStaticRoute](#getdeviceswitchroutingstaticroute) - Return a layer 3 static route for a switch
* [getDeviceSwitchRoutingStaticRoutes](#getdeviceswitchroutingstaticroutes) - List layer 3 static routes for a switch
* [getDeviceSwitchWarmSpare](#getdeviceswitchwarmspare) - Return warm spare configuration for a switch
* [getDeviceWirelessBluetoothSettings](#getdevicewirelessbluetoothsettings) - Return the bluetooth settings for a wireless device
* [getDeviceWirelessRadioSettings](#getdevicewirelessradiosettings) - Return the radio settings of a device
* [getNetwork](#getnetwork) - Return a network
* [getNetworkAlertsSettings](#getnetworkalertssettings) - Return the alert configuration for this network
* [getNetworkApplianceConnectivityMonitoringDestinations](#getnetworkapplianceconnectivitymonitoringdestinations) - Return the connectivity testing destinations for an MX network
* [getNetworkApplianceContentFiltering](#getnetworkappliancecontentfiltering) - Return the content filtering settings for an MX network
* [getNetworkApplianceContentFilteringCategories](#getnetworkappliancecontentfilteringcategories) - List all available content filtering categories for an MX network
* [getNetworkApplianceFirewallCellularFirewallRules](#getnetworkappliancefirewallcellularfirewallrules) - Return the cellular firewall rules for an MX network
* [getNetworkApplianceFirewallFirewalledService](#getnetworkappliancefirewallfirewalledservice) - Return the accessibility settings of the given service ('ICMP', 'web', or 'SNMP')
* [getNetworkApplianceFirewallFirewalledServices](#getnetworkappliancefirewallfirewalledservices) - List the appliance services and their accessibility rules
* [getNetworkApplianceFirewallInboundCellularFirewallRules](#getnetworkappliancefirewallinboundcellularfirewallrules) - Return the inbound cellular firewall rules for an MX network
* [getNetworkApplianceFirewallInboundFirewallRules](#getnetworkappliancefirewallinboundfirewallrules) - Return the inbound firewall rules for an MX network
* [getNetworkApplianceFirewallL3FirewallRules](#getnetworkappliancefirewalll3firewallrules) - Return the L3 firewall rules for an MX network
* [getNetworkApplianceFirewallL7FirewallRules](#getnetworkappliancefirewalll7firewallrules) - List the MX L7 firewall rules for an MX network
* [getNetworkApplianceFirewallL7FirewallRulesApplicationCategories](#getnetworkappliancefirewalll7firewallrulesapplicationcategories) - Return the L7 firewall application categories and their associated applications for an MX network
* [getNetworkApplianceFirewallOneToManyNatRules](#getnetworkappliancefirewallonetomanynatrules) - Return the 1:Many NAT mapping rules for an MX network
* [getNetworkApplianceFirewallOneToOneNatRules](#getnetworkappliancefirewallonetoonenatrules) - Return the 1:1 NAT mapping rules for an MX network
* [getNetworkApplianceFirewallPortForwardingRules](#getnetworkappliancefirewallportforwardingrules) - Return the port forwarding rules for an MX network
* [getNetworkApplianceFirewallSettings](#getnetworkappliancefirewallsettings) - Return the firewall settings for this network
* [getNetworkAppliancePort](#getnetworkapplianceport) - Return per-port VLAN settings for a single MX port.
* [getNetworkAppliancePorts](#getnetworkapplianceports) - List per-port VLAN settings for all ports of a MX.
* [getNetworkAppliancePrefixesDelegatedStatic](#getnetworkapplianceprefixesdelegatedstatic) - Return a static delegated prefix from a network
* [getNetworkAppliancePrefixesDelegatedStatics](#getnetworkapplianceprefixesdelegatedstatics) - List static delegated prefixes for a network
* [getNetworkApplianceSecurityIntrusion](#getnetworkappliancesecurityintrusion) - Returns all supported intrusion settings for an MX network
* [getNetworkApplianceSecurityMalware](#getnetworkappliancesecuritymalware) - Returns all supported malware settings for an MX network
* [getNetworkApplianceSettings](#getnetworkappliancesettings) - Return the appliance settings for a network
* [getNetworkApplianceSingleLan](#getnetworkappliancesinglelan) - Return single LAN configuration
* [getNetworkApplianceSsid](#getnetworkappliancessid) - Return a single MX SSID
* [getNetworkApplianceSsids](#getnetworkappliancessids) - List the MX SSIDs in a network
* [getNetworkApplianceStaticRoute](#getnetworkappliancestaticroute) - Return a static route for an MX or teleworker network
* [getNetworkApplianceStaticRoutes](#getnetworkappliancestaticroutes) - List the static routes for an MX or teleworker network
* [getNetworkApplianceTrafficShaping](#getnetworkappliancetrafficshaping) - Display the traffic shaping settings for an MX network
* [getNetworkApplianceTrafficShapingCustomPerformanceClass](#getnetworkappliancetrafficshapingcustomperformanceclass) - Return a custom performance class for an MX network
* [getNetworkApplianceTrafficShapingCustomPerformanceClasses](#getnetworkappliancetrafficshapingcustomperformanceclasses) - List all custom performance classes for an MX network
* [getNetworkApplianceTrafficShapingRules](#getnetworkappliancetrafficshapingrules) - Display the traffic shaping settings rules for an MX network
* [getNetworkApplianceTrafficShapingUplinkBandwidth](#getnetworkappliancetrafficshapinguplinkbandwidth) - Returns the uplink bandwidth limits for your MX network
* [getNetworkApplianceTrafficShapingUplinkSelection](#getnetworkappliancetrafficshapinguplinkselection) - Show uplink selection settings for an MX network
* [getNetworkApplianceVlan](#getnetworkappliancevlan) - Return a VLAN
* [getNetworkApplianceVlans](#getnetworkappliancevlans) - List the VLANs for an MX network
* [getNetworkApplianceVlansSettings](#getnetworkappliancevlanssettings) - Returns the enabled status of VLANs for the network
* [getNetworkApplianceVpnBgp](#getnetworkappliancevpnbgp) - Return a Hub BGP Configuration
* [getNetworkApplianceVpnSiteToSiteVpn](#getnetworkappliancevpnsitetositevpn) - Return the site-to-site VPN settings of a network
* [getNetworkApplianceWarmSpare](#getnetworkappliancewarmspare) - Return MX warm spare settings
* [getNetworkCameraQualityRetentionProfile](#getnetworkcameraqualityretentionprofile) - Retrieve a single quality retention profile
* [getNetworkCameraQualityRetentionProfiles](#getnetworkcameraqualityretentionprofiles) - List the quality retention profiles for this network
* [getNetworkCameraSchedules](#getnetworkcameraschedules) - Returns a list of all camera recording schedules.
* [getNetworkCameraWirelessProfile](#getnetworkcamerawirelessprofile) - Retrieve a single camera wireless profile.
* [getNetworkCameraWirelessProfiles](#getnetworkcamerawirelessprofiles) - List the camera wireless profiles for this network.
* [getNetworkCellularGatewayConnectivityMonitoringDestinations](#getnetworkcellulargatewayconnectivitymonitoringdestinations) - Return the connectivity testing destinations for an MG network
* [getNetworkCellularGatewayDhcp](#getnetworkcellulargatewaydhcp) - List common DHCP settings of MGs
* [getNetworkCellularGatewaySubnetPool](#getnetworkcellulargatewaysubnetpool) - Return the subnet pool and mask configured for MGs in the network.
* [getNetworkCellularGatewayUplink](#getnetworkcellulargatewayuplink) - Returns the uplink settings for your MG network.
* [getNetworkClientPolicy](#getnetworkclientpolicy) - Return the policy assigned to a client on the network
* [getNetworkClientSplashAuthorizationStatus](#getnetworkclientsplashauthorizationstatus) - Return the splash authorization for a client, for each SSID they've associated with through splash
* [getNetworkDevices](#getnetworkdevices) - List the devices in a network
* [getNetworkFirmwareUpgrades](#getnetworkfirmwareupgrades) - Get firmware upgrade information for a network
* [getNetworkFirmwareUpgradesStagedEvents](#getnetworkfirmwareupgradesstagedevents) - Get the Staged Upgrade Event from a network
* [getNetworkFirmwareUpgradesStagedGroup](#getnetworkfirmwareupgradesstagedgroup) - Get a Staged Upgrade Group from a network
* [getNetworkFirmwareUpgradesStagedGroups](#getnetworkfirmwareupgradesstagedgroups) - List of Staged Upgrade Groups in a network
* [getNetworkFirmwareUpgradesStagedStages](#getnetworkfirmwareupgradesstagedstages) - Order of Staged Upgrade Groups in a network
* [getNetworkFloorPlan](#getnetworkfloorplan) - Find a floor plan by ID
* [getNetworkFloorPlans](#getnetworkfloorplans) - List the floor plans that belong to your network
* [getNetworkGroupPolicies](#getnetworkgrouppolicies) - List the group policies in a network
* [getNetworkGroupPolicy](#getnetworkgrouppolicy) - Display a group policy
* [getNetworkHealthAlerts](#getnetworkhealthalerts) - Return all global alerts on this network
* [getNetworkMerakiAuthUser](#getnetworkmerakiauthuser) - Return the Meraki Auth splash guest, RADIUS, or client VPN user
* [getNetworkMerakiAuthUsers](#getnetworkmerakiauthusers) - List the users configured under Meraki Authentication for a network (splash guest or RADIUS users for a wireless network, or client VPN users for a wired network)
* [getNetworkMqttBroker](#getnetworkmqttbroker) - Return an MQTT broker
* [getNetworkMqttBrokers](#getnetworkmqttbrokers) - List the MQTT brokers for this network
* [getNetworkNetflow](#getnetworknetflow) - Return the NetFlow traffic reporting settings for a network
* [getNetworkPiiPiiKeys](#getnetworkpiipiikeys) - List the keys required to access Personally Identifiable Information (PII) for a given identifier
* [getNetworkPiiRequest](#getnetworkpiirequest) - Return a PII request
* [getNetworkPiiRequests](#getnetworkpiirequests) - List the PII requests for this network or organization
* [getNetworkPiiSmDevicesForKey](#getnetworkpiismdevicesforkey) - Given a piece of Personally Identifiable Information (PII), return the Systems Manager device ID(s) associated with that identifier
* [getNetworkPiiSmOwnersForKey](#getnetworkpiismownersforkey) - Given a piece of Personally Identifiable Information (PII), return the Systems Manager owner ID(s) associated with that identifier
* [getNetworkPoliciesByClient](#getnetworkpoliciesbyclient) - Get policies for all clients with policies
* [getNetworkSensorAlertsProfile](#getnetworksensoralertsprofile) - Show details of a sensor alert profile for a network.
* [getNetworkSensorAlertsProfiles](#getnetworksensoralertsprofiles) - Lists all sensor alert profiles for a network.
* [getNetworkSensorRelationships](#getnetworksensorrelationships) - List the sensor roles for devices in a given network
* [getNetworkSettings](#getnetworksettings) - Return the settings for a network
* [getNetworkSmBypassActivationLockAttempt](#getnetworksmbypassactivationlockattempt) - Bypass activation lock attempt status
* [getNetworkSmDeviceCerts](#getnetworksmdevicecerts) - List the certs on a device
* [getNetworkSmDeviceDeviceProfiles](#getnetworksmdevicedeviceprofiles) - Get the installed profiles associated with a device
* [getNetworkSmDeviceNetworkAdapters](#getnetworksmdevicenetworkadapters) - List the network adapters of a device
* [getNetworkSmDeviceRestrictions](#getnetworksmdevicerestrictions) - List the restrictions on a device
* [getNetworkSmDeviceSecurityCenters](#getnetworksmdevicesecuritycenters) - List the security centers on a device
* [getNetworkSmDeviceSoftwares](#getnetworksmdevicesoftwares) - Get a list of softwares associated with a device
* [getNetworkSmDeviceWlanLists](#getnetworksmdevicewlanlists) - List the saved SSID names on a device
* [getNetworkSmDevices](#getnetworksmdevices) - List the devices enrolled in an SM network with various specified fields and filters
* [getNetworkSmProfiles](#getnetworksmprofiles) - List all profiles in a network
* [getNetworkSmTargetGroup](#getnetworksmtargetgroup) - Return a target group
* [getNetworkSmTargetGroups](#getnetworksmtargetgroups) - List the target groups in this network
* [getNetworkSmTrustedAccessConfigs](#getnetworksmtrustedaccessconfigs) - List Trusted Access Configs
* [getNetworkSmUserAccessDevices](#getnetworksmuseraccessdevices) - List User Access Devices and its Trusted Access Connections
* [getNetworkSmUserDeviceProfiles](#getnetworksmuserdeviceprofiles) - Get the profiles associated with a user
* [getNetworkSmUserSoftwares](#getnetworksmusersoftwares) - Get a list of softwares associated with a user
* [getNetworkSmUsers](#getnetworksmusers) - List the owners in an SM network with various specified fields and filters
* [getNetworkSnmp](#getnetworksnmp) - Return the SNMP settings for a network
* [getNetworkSwitchAccessControlLists](#getnetworkswitchaccesscontrollists) - Return the access control lists for a MS network
* [getNetworkSwitchAccessPolicies](#getnetworkswitchaccesspolicies) - List the access policies for a switch network
* [getNetworkSwitchAccessPolicy](#getnetworkswitchaccesspolicy) - Return a specific access policy for a switch network
* [getNetworkSwitchAlternateManagementInterface](#getnetworkswitchalternatemanagementinterface) - Return the switch alternate management interface for the network
* [getNetworkSwitchDhcpServerPolicy](#getnetworkswitchdhcpserverpolicy) - Return the DHCP server settings
* [getNetworkSwitchDhcpServerPolicyArpInspectionTrustedServers](#getnetworkswitchdhcpserverpolicyarpinspectiontrustedservers) - Return the list of servers trusted by Dynamic ARP Inspection on this network
* [getNetworkSwitchDhcpServerPolicyArpInspectionWarningsByDevice](#getnetworkswitchdhcpserverpolicyarpinspectionwarningsbydevice) - Return the devices that have a Dynamic ARP Inspection warning and their warnings
* [getNetworkSwitchDhcpV4ServersSeen](#getnetworkswitchdhcpv4serversseen) - Return the network's DHCPv4 servers seen within the selected timeframe (default 1 day)
* [getNetworkSwitchDscpToCosMappings](#getnetworkswitchdscptocosmappings) - Return the DSCP to CoS mappings
* [getNetworkSwitchLinkAggregations](#getnetworkswitchlinkaggregations) - List link aggregation groups
* [getNetworkSwitchMtu](#getnetworkswitchmtu) - Return the MTU configuration
* [getNetworkSwitchPortSchedules](#getnetworkswitchportschedules) - List switch port schedules
* [getNetworkSwitchQosRule](#getnetworkswitchqosrule) - Return a quality of service rule
* [getNetworkSwitchQosRules](#getnetworkswitchqosrules) - List quality of service rules
* [getNetworkSwitchQosRulesOrder](#getnetworkswitchqosrulesorder) - Return the quality of service rule IDs by order in which they will be processed by the switch
* [getNetworkSwitchRoutingMulticast](#getnetworkswitchroutingmulticast) - Return multicast settings for a network
* [getNetworkSwitchRoutingMulticastRendezvousPoint](#getnetworkswitchroutingmulticastrendezvouspoint) - Return a multicast rendezvous point
* [getNetworkSwitchRoutingMulticastRendezvousPoints](#getnetworkswitchroutingmulticastrendezvouspoints) - List multicast rendezvous points
* [getNetworkSwitchRoutingOspf](#getnetworkswitchroutingospf) - Return layer 3 OSPF routing configuration
* [getNetworkSwitchSettings](#getnetworkswitchsettings) - Returns the switch network settings
* [getNetworkSwitchStack](#getnetworkswitchstack) - Show a switch stack
* [getNetworkSwitchStackRoutingInterface](#getnetworkswitchstackroutinginterface) - Return a layer 3 interface from a switch stack
* [getNetworkSwitchStackRoutingInterfaceDhcp](#getnetworkswitchstackroutinginterfacedhcp) - Return a layer 3 interface DHCP configuration for a switch stack
* [getNetworkSwitchStackRoutingInterfaces](#getnetworkswitchstackroutinginterfaces) - List layer 3 interfaces for a switch stack
* [getNetworkSwitchStackRoutingStaticRoute](#getnetworkswitchstackroutingstaticroute) - Return a layer 3 static route for a switch stack
* [getNetworkSwitchStackRoutingStaticRoutes](#getnetworkswitchstackroutingstaticroutes) - List layer 3 static routes for a switch stack
* [getNetworkSwitchStacks](#getnetworkswitchstacks) - List the switch stacks in a network
* [getNetworkSwitchStormControl](#getnetworkswitchstormcontrol) - Return the storm control configuration for a switch network
* [getNetworkSwitchStp](#getnetworkswitchstp) - Returns STP settings
* [getNetworkSyslogServers](#getnetworksyslogservers) - List the syslog servers for a network
* [getNetworkTrafficAnalysis](#getnetworktrafficanalysis) - Return the traffic analysis settings for a network
* [getNetworkTrafficShapingApplicationCategories](#getnetworktrafficshapingapplicationcategories) - Returns the application categories for traffic shaping rules.
* [getNetworkTrafficShapingDscpTaggingOptions](#getnetworktrafficshapingdscptaggingoptions) - Returns the available DSCP tagging options for your traffic shaping rules.
* [getNetworkWebhooksHttpServer](#getnetworkwebhookshttpserver) - Return an HTTP server for a network
* [getNetworkWebhooksHttpServers](#getnetworkwebhookshttpservers) - List the HTTP servers for a network
* [getNetworkWebhooksPayloadTemplate](#getnetworkwebhookspayloadtemplate) - Get the webhook payload template for a network
* [getNetworkWebhooksPayloadTemplates](#getnetworkwebhookspayloadtemplates) - List the webhook payload templates for a network
* [getNetworkWebhooksWebhookTest](#getnetworkwebhookswebhooktest) - Return the status of a webhook test for a network
* [getNetworkWirelessAlternateManagementInterface](#getnetworkwirelessalternatemanagementinterface) - Return alternate management interface and devices with IP assigned
* [getNetworkWirelessBilling](#getnetworkwirelessbilling) - Return the billing settings of this network
* [getNetworkWirelessBluetoothSettings](#getnetworkwirelessbluetoothsettings) - Return the Bluetooth settings for a network. <a href="https://documentation.meraki.com/MR/Bluetooth/Bluetooth_Low_Energy_(BLE)">Bluetooth settings</a> must be enabled on the network.
* [getNetworkWirelessRfProfile](#getnetworkwirelessrfprofile) - Return a RF profile
* [getNetworkWirelessRfProfiles](#getnetworkwirelessrfprofiles) - List the non-basic RF profiles for this network
* [getNetworkWirelessSettings](#getnetworkwirelesssettings) - Return the wireless settings for a network
* [getNetworkWirelessSsid](#getnetworkwirelessssid) - Return a single MR SSID
* [getNetworkWirelessSsidBonjourForwarding](#getnetworkwirelessssidbonjourforwarding) - List the Bonjour forwarding setting and rules for the SSID
* [getNetworkWirelessSsidDeviceTypeGroupPolicies](#getnetworkwirelessssiddevicetypegrouppolicies) - List the device type group policies for the SSID
* [getNetworkWirelessSsidEapOverride](#getnetworkwirelessssideapoverride) - Return the EAP overridden parameters for an SSID
* [getNetworkWirelessSsidFirewallL3FirewallRules](#getnetworkwirelessssidfirewalll3firewallrules) - Return the L3 firewall rules for an SSID on an MR network
* [getNetworkWirelessSsidFirewallL7FirewallRules](#getnetworkwirelessssidfirewalll7firewallrules) - Return the L7 firewall rules for an SSID on an MR network
* [getNetworkWirelessSsidHotspot20](#getnetworkwirelessssidhotspot20) - Return the Hotspot 2.0 settings for an SSID
* [getNetworkWirelessSsidIdentityPsk](#getnetworkwirelessssididentitypsk) - Return an Identity PSK
* [getNetworkWirelessSsidIdentityPsks](#getnetworkwirelessssididentitypsks) - List all Identity PSKs in a wireless network
* [getNetworkWirelessSsidSchedules](#getnetworkwirelessssidschedules) - List the outage schedule for the SSID
* [getNetworkWirelessSsidSplashSettings](#getnetworkwirelessssidsplashsettings) - Display the splash page settings for the given SSID
* [getNetworkWirelessSsidTrafficShapingRules](#getnetworkwirelessssidtrafficshapingrules) - Display the traffic shaping settings for a SSID on an MR network
* [getNetworkWirelessSsidVpn](#getnetworkwirelessssidvpn) - List the VPN settings for the SSID.
* [getNetworkWirelessSsids](#getnetworkwirelessssids) - List the MR SSIDs in a network
* [getOrganization](#getorganization) - Return an organization
* [getOrganizationActionBatch](#getorganizationactionbatch) - Return an action batch
* [getOrganizationActionBatches](#getorganizationactionbatches) - Return the list of action batches in the organization
* [getOrganizationAdaptivePolicyAcl](#getorganizationadaptivepolicyacl) - Returns the adaptive policy ACL information
* [getOrganizationAdaptivePolicyAcls](#getorganizationadaptivepolicyacls) - List adaptive policy ACLs in a organization
* [getOrganizationAdaptivePolicyGroup](#getorganizationadaptivepolicygroup) - Returns an adaptive policy group
* [getOrganizationAdaptivePolicyGroups](#getorganizationadaptivepolicygroups) - List adaptive policy groups in a organization
* [getOrganizationAdaptivePolicyPolicies](#getorganizationadaptivepolicypolicies) - List adaptive policies in an organization
* [getOrganizationAdaptivePolicyPolicy](#getorganizationadaptivepolicypolicy) - Return an adaptive policy
* [getOrganizationAdaptivePolicySettings](#getorganizationadaptivepolicysettings) - Returns global adaptive policy settings in an organization
* [getOrganizationAdmins](#getorganizationadmins) - List the dashboard administrators in this organization
* [getOrganizationAlertsProfiles](#getorganizationalertsprofiles) - List all organization-wide alert configurations
* [getOrganizationApplianceSecurityIntrusion](#getorganizationappliancesecurityintrusion) - Returns all supported intrusion settings for an organization
* [getOrganizationApplianceVPNThirdPartyVPNPeers](#getorganizationappliancevpnthirdpartyvpnpeers) - Return the third party VPN peers for an organization
* [getOrganizationApplianceVpnVpnFirewallRules](#getorganizationappliancevpnvpnfirewallrules) - Return the firewall rules for an organization's site-to-site VPN
* [getOrganizationBrandingPolicies](#getorganizationbrandingpolicies) - List the branding policies of an organization
* [getOrganizationBrandingPoliciesPriorities](#getorganizationbrandingpoliciespriorities) - Return the branding policy IDs of an organization in priority order
* [getOrganizationBrandingPolicy](#getorganizationbrandingpolicy) - Return a branding policy
* [getOrganizationCameraCustomAnalyticsArtifact](#getorganizationcameracustomanalyticsartifact) - Get Custom Analytics Artifact
* [getOrganizationCameraCustomAnalyticsArtifacts](#getorganizationcameracustomanalyticsartifacts) - List Custom Analytics Artifacts
* [getOrganizationCameraOnboardingStatuses](#getorganizationcameraonboardingstatuses) - Fetch onboarding status of cameras
* [getOrganizationClientsSearch](#getorganizationclientssearch) - Return the client details in an organization
* [getOrganizationConfigTemplate](#getorganizationconfigtemplate) - Return a single configuration template
* [getOrganizationConfigTemplateSwitchProfilePort](#getorganizationconfigtemplateswitchprofileport) - Return a switch profile port
* [getOrganizationConfigTemplateSwitchProfilePorts](#getorganizationconfigtemplateswitchprofileports) - Return all the ports of a switch profile
* [getOrganizationConfigTemplateSwitchProfiles](#getorganizationconfigtemplateswitchprofiles) - List the switch profiles for your switch template configuration
* [getOrganizationConfigTemplates](#getorganizationconfigtemplates) - List the configuration templates for this organization
* [getOrganizationDevices](#getorganizationdevices) - List the devices in an organization
* [getOrganizationEarlyAccessFeatures](#getorganizationearlyaccessfeatures) - List the available early access features for organization
* [getOrganizationEarlyAccessFeaturesOptIn](#getorganizationearlyaccessfeaturesoptin) - Show an early access feature opt-in for an organization
* [getOrganizationEarlyAccessFeaturesOptIns](#getorganizationearlyaccessfeaturesoptins) - List the early access feature opt-ins for an organization
* [getOrganizationFirmwareUpgrades](#getorganizationfirmwareupgrades) - Get firmware upgrade information for an organization
* [getOrganizationFirmwareUpgradesByDevice](#getorganizationfirmwareupgradesbydevice) - Get firmware upgrade status for the filtered devices
* [getOrganizationInsightApplications](#getorganizationinsightapplications) - List all Insight tracked applications
* [getOrganizationInsightMonitoredMediaServer](#getorganizationinsightmonitoredmediaserver) - Return a monitored media server for this organization
* [getOrganizationInsightMonitoredMediaServers](#getorganizationinsightmonitoredmediaservers) - List the monitored media servers for this organization
* [getOrganizationInventoryDevice](#getorganizationinventorydevice) - Return a single device from the inventory of an organization
* [getOrganizationInventoryDevices](#getorganizationinventorydevices) - Return the device inventory for an organization
* [getOrganizationInventoryOnboardingCloudMonitoringImports](#getorganizationinventoryonboardingcloudmonitoringimports) - Check the status of a committed Import operation
* [getOrganizationInventoryOnboardingCloudMonitoringNetworks](#getorganizationinventoryonboardingcloudmonitoringnetworks) - Returns list of networks eligible for adding cloud monitored device
* [getOrganizationLicense](#getorganizationlicense) - Display a license
* [getOrganizationLicenses](#getorganizationlicenses) - List the licenses for an organization
* [getOrganizationLicensingCotermLicenses](#getorganizationlicensingcotermlicenses) - List the licenses in a coterm organization
* [getOrganizationLoginSecurity](#getorganizationloginsecurity) - Returns the login security settings for an organization.
* [getOrganizationNetworks](#getorganizationnetworks) - List the networks that the user has privileges on in an organization
* [getOrganizationPolicyObject](#getorganizationpolicyobject) - Shows details of a Policy Object.
* [getOrganizationPolicyObjects](#getorganizationpolicyobjects) - Lists Policy Objects belonging to the organization.
* [getOrganizationPolicyObjectsGroup](#getorganizationpolicyobjectsgroup) - Shows details of a Policy Object Group.
* [getOrganizationPolicyObjectsGroups](#getorganizationpolicyobjectsgroups) - Lists Policy Object Groups belonging to the organization.
* [getOrganizationSaml](#getorganizationsaml) - Returns the SAML SSO enabled settings for an organization.
* [getOrganizationSamlIdp](#getorganizationsamlidp) - Get a SAML IdP from your organization.
* [getOrganizationSamlIdps](#getorganizationsamlidps) - List the SAML IdPs in your organization.
* [getOrganizationSamlRole](#getorganizationsamlrole) - Return a SAML role
* [getOrganizationSamlRoles](#getorganizationsamlroles) - List the SAML roles for this organization
* [getOrganizationSmApnsCert](#getorganizationsmapnscert) - Get the organization's APNS certificate
* [getOrganizationSmVppAccount](#getorganizationsmvppaccount) - Get a hash containing the unparsed token of the VPP account with the given ID
* [getOrganizationSmVppAccounts](#getorganizationsmvppaccounts) - List the VPP accounts in the organization
* [getOrganizationSnmp](#getorganizationsnmp) - Return the SNMP settings for an organization
* [getOrganizationSwitchPortsBySwitch](#getorganizationswitchportsbyswitch) - List the switchports in an organization by switch
* [getOrganizationWirelessDevicesEthernetStatuses](#getorganizationwirelessdevicesethernetstatuses) - Endpoint to see power status for wireless devices
* [getOrganizations](#getorganizations) - List the organizations that the user has privileges on
* [lockNetworkSmDevices](#locknetworksmdevices) - Lock a set of devices
* [modifyNetworkSmDevicesTags](#modifynetworksmdevicestags) - Add, delete, or update the tags of a set of devices
* [moveNetworkSmDevices](#movenetworksmdevices) - Move a set of devices to a new network
* [moveOrganizationLicenses](#moveorganizationlicenses) - Move licenses to another organization
* [moveOrganizationLicensesSeats](#moveorganizationlicensesseats) - Move SM seats to another organization
* [moveOrganizationLicensingCotermLicenses](#moveorganizationlicensingcotermlicenses) - Moves a license to a different organization (coterm only)
* [provisionNetworkClients](#provisionnetworkclients) - Provisions a client with a name and policy
* [refreshNetworkSmDeviceDetails](#refreshnetworksmdevicedetails) - Refresh the details of a device
* [releaseFromOrganizationInventory](#releasefromorganizationinventory) - Release a list of claimed devices from an organization.
* [removeNetworkDevices](#removenetworkdevices) - Remove a single device
* [removeNetworkSwitchStack](#removenetworkswitchstack) - Remove a switch from a stack
* [renewOrganizationLicensesSeats](#reneworganizationlicensesseats) - Renew SM seats of a license
* [rollbacksNetworkFirmwareUpgradesStagedEvents](#rollbacksnetworkfirmwareupgradesstagedevents) - Rollback a Staged Upgrade Event for a network
* [splitNetwork](#splitnetwork) - Split a combined network into individual networks for each type of device
* [swapNetworkApplianceWarmSpare](#swapnetworkappliancewarmspare) - Swap MX primary and warm spare appliances
* [unbindNetwork](#unbindnetwork) - Unbind a network from a template.
* [unenrollNetworkSmDevice](#unenrollnetworksmdevice) - Unenroll a device
* [updateDevice](#updatedevice) - Update the attributes of a device
* [updateDeviceApplianceUplinksSettings](#updatedeviceapplianceuplinkssettings) - Update the uplink settings for an MX appliance
* [updateDeviceCameraCustomAnalytics](#updatedevicecameracustomanalytics) - Update custom analytics settings for a camera
* [updateDeviceCameraQualityAndRetention](#updatedevicecameraqualityandretention) - Update quality and retention settings for the given camera
* [updateDeviceCameraSense](#updatedevicecamerasense) - Update sense settings for the given camera
* [updateDeviceCameraVideoSettings](#updatedevicecameravideosettings) - Update video settings for the given camera
* [updateDeviceCameraWirelessProfiles](#updatedevicecamerawirelessprofiles) - Assign wireless profiles to the given camera
* [updateDeviceCellularGatewayLan](#updatedevicecellulargatewaylan) - Update the LAN Settings for a single MG.
* [updateDeviceCellularGatewayPortForwardingRules](#updatedevicecellulargatewayportforwardingrules) - Updates the port forwarding rules for a single MG.
* [updateDeviceCellularSims](#updatedevicecellularsims) - Updates the SIM and APN configurations for a cellular device.
* [updateDeviceManagementInterface](#updatedevicemanagementinterface) - Update the management interface settings for a device
* [updateDeviceSensorRelationships](#updatedevicesensorrelationships) - Assign one or more sensor roles to a given sensor or camera device.
* [updateDeviceSwitchPort](#updatedeviceswitchport) - Update a switch port
* [updateDeviceSwitchRoutingInterface](#updatedeviceswitchroutinginterface) - Update a layer 3 interface for a switch
* [updateDeviceSwitchRoutingInterfaceDhcp](#updatedeviceswitchroutinginterfacedhcp) - Update a layer 3 interface DHCP configuration for a switch
* [updateDeviceSwitchRoutingStaticRoute](#updatedeviceswitchroutingstaticroute) - Update a layer 3 static route for a switch
* [updateDeviceSwitchWarmSpare](#updatedeviceswitchwarmspare) - Update warm spare configuration for a switch
* [updateDeviceWirelessBluetoothSettings](#updatedevicewirelessbluetoothsettings) - Update the bluetooth settings for a wireless device
* [updateDeviceWirelessRadioSettings](#updatedevicewirelessradiosettings) - Update the radio settings of a device
* [updateNetwork](#updatenetwork) - Update a network
* [updateNetworkAlertsSettings](#updatenetworkalertssettings) - Update the alert configuration for this network
* [updateNetworkApplianceConnectivityMonitoringDestinations](#updatenetworkapplianceconnectivitymonitoringdestinations) - Update the connectivity testing destinations for an MX network
* [updateNetworkApplianceContentFiltering](#updatenetworkappliancecontentfiltering) - Update the content filtering settings for an MX network
* [updateNetworkApplianceFirewallCellularFirewallRules](#updatenetworkappliancefirewallcellularfirewallrules) - Update the cellular firewall rules of an MX network
* [updateNetworkApplianceFirewallFirewalledService](#updatenetworkappliancefirewallfirewalledservice) - Updates the accessibility settings for the given service ('ICMP', 'web', or 'SNMP')
* [updateNetworkApplianceFirewallInboundCellularFirewallRules](#updatenetworkappliancefirewallinboundcellularfirewallrules) - Update the inbound cellular firewall rules of an MX network
* [updateNetworkApplianceFirewallInboundFirewallRules](#updatenetworkappliancefirewallinboundfirewallrules) - Update the inbound firewall rules of an MX network
* [updateNetworkApplianceFirewallL3FirewallRules](#updatenetworkappliancefirewalll3firewallrules) - Update the L3 firewall rules of an MX network
* [updateNetworkApplianceFirewallL7FirewallRules](#updatenetworkappliancefirewalll7firewallrules) - Update the MX L7 firewall rules for an MX network
* [updateNetworkApplianceFirewallOneToManyNatRules](#updatenetworkappliancefirewallonetomanynatrules) - Set the 1:Many NAT mapping rules for an MX network
* [updateNetworkApplianceFirewallOneToOneNatRules](#updatenetworkappliancefirewallonetoonenatrules) - Set the 1:1 NAT mapping rules for an MX network
* [updateNetworkApplianceFirewallPortForwardingRules](#updatenetworkappliancefirewallportforwardingrules) - Update the port forwarding rules for an MX network
* [updateNetworkApplianceFirewallSettings](#updatenetworkappliancefirewallsettings) - Update the firewall settings for this network
* [updateNetworkAppliancePort](#updatenetworkapplianceport) - Update the per-port VLAN settings for a single MX port.
* [updateNetworkAppliancePrefixesDelegatedStatic](#updatenetworkapplianceprefixesdelegatedstatic) - Update a static delegated prefix from a network
* [updateNetworkApplianceSecurityIntrusion](#updatenetworkappliancesecurityintrusion) - Set the supported intrusion settings for an MX network
* [updateNetworkApplianceSecurityMalware](#updatenetworkappliancesecuritymalware) - Set the supported malware settings for an MX network
* [updateNetworkApplianceSettings](#updatenetworkappliancesettings) - Update the appliance settings for a network
* [updateNetworkApplianceSingleLan](#updatenetworkappliancesinglelan) - Update single LAN configuration
* [updateNetworkApplianceSsid](#updatenetworkappliancessid) - Update the attributes of an MX SSID
* [updateNetworkApplianceStaticRoute](#updatenetworkappliancestaticroute) - Update a static route for an MX or teleworker network
* [updateNetworkApplianceTrafficShaping](#updatenetworkappliancetrafficshaping) - Update the traffic shaping settings for an MX network
* [updateNetworkApplianceTrafficShapingCustomPerformanceClass](#updatenetworkappliancetrafficshapingcustomperformanceclass) - Update a custom performance class for an MX network
* [updateNetworkApplianceTrafficShapingRules](#updatenetworkappliancetrafficshapingrules) - Update the traffic shaping settings rules for an MX network
* [updateNetworkApplianceTrafficShapingUplinkBandwidth](#updatenetworkappliancetrafficshapinguplinkbandwidth) - Updates the uplink bandwidth settings for your MX network.
* [updateNetworkApplianceTrafficShapingUplinkSelection](#updatenetworkappliancetrafficshapinguplinkselection) - Update uplink selection settings for an MX network
* [updateNetworkApplianceVlan](#updatenetworkappliancevlan) - Update a VLAN
* [updateNetworkApplianceVlansSettings](#updatenetworkappliancevlanssettings) - Enable/Disable VLANs for the given network
* [updateNetworkApplianceVpnBgp](#updatenetworkappliancevpnbgp) - Update a Hub BGP Configuration
* [updateNetworkApplianceVpnSiteToSiteVpn](#updatenetworkappliancevpnsitetositevpn) - Update the site-to-site VPN settings of a network
* [updateNetworkApplianceWarmSpare](#updatenetworkappliancewarmspare) - Update MX warm spare settings
* [updateNetworkCameraQualityRetentionProfile](#updatenetworkcameraqualityretentionprofile) - Update an existing quality retention profile for this network.
* [updateNetworkCameraWirelessProfile](#updatenetworkcamerawirelessprofile) - Update an existing camera wireless profile in this network.
* [updateNetworkCellularGatewayConnectivityMonitoringDestinations](#updatenetworkcellulargatewayconnectivitymonitoringdestinations) - Update the connectivity testing destinations for an MG network
* [updateNetworkCellularGatewayDhcp](#updatenetworkcellulargatewaydhcp) - Update common DHCP settings of MGs
* [updateNetworkCellularGatewaySubnetPool](#updatenetworkcellulargatewaysubnetpool) - Update the subnet pool and mask configuration for MGs in the network.
* [updateNetworkCellularGatewayUplink](#updatenetworkcellulargatewayuplink) - Updates the uplink settings for your MG network.
* [updateNetworkClientPolicy](#updatenetworkclientpolicy) - Update the policy assigned to a client on the network
* [updateNetworkClientSplashAuthorizationStatus](#updatenetworkclientsplashauthorizationstatus) - Update a client's splash authorization
* [updateNetworkFirmwareUpgrades](#updatenetworkfirmwareupgrades) - Update firmware upgrade information for a network
* [updateNetworkFirmwareUpgradesStagedEvents](#updatenetworkfirmwareupgradesstagedevents) - Update the Staged Upgrade Event for a network
* [updateNetworkFirmwareUpgradesStagedGroup](#updatenetworkfirmwareupgradesstagedgroup) - Update a Staged Upgrade Group for a network
* [updateNetworkFirmwareUpgradesStagedStages](#updatenetworkfirmwareupgradesstagedstages) - Assign Staged Upgrade Group order in the sequence.
* [updateNetworkFloorPlan](#updatenetworkfloorplan) - Update a floor plan's geolocation and other meta data
* [updateNetworkGroupPolicy](#updatenetworkgrouppolicy) - Update a group policy
* [updateNetworkMerakiAuthUser](#updatenetworkmerakiauthuser) - Update a user configured with Meraki Authentication (currently, 802.1X RADIUS, splash guest, and client VPN users can be updated)
* [updateNetworkMqttBroker](#updatenetworkmqttbroker) - Update an MQTT broker
* [updateNetworkNetflow](#updatenetworknetflow) - Update the NetFlow traffic reporting settings for a network
* [updateNetworkSensorAlertsProfile](#updatenetworksensoralertsprofile) - Updates a sensor alert profile for a network.
* [updateNetworkSettings](#updatenetworksettings) - Update the settings for a network
* [updateNetworkSmDevicesFields](#updatenetworksmdevicesfields) - Modify the fields of a device
* [updateNetworkSmTargetGroup](#updatenetworksmtargetgroup) - Update a target group
* [updateNetworkSnmp](#updatenetworksnmp) - Update the SNMP settings for a network
* [updateNetworkSwitchAccessControlLists](#updatenetworkswitchaccesscontrollists) - Update the access control lists for a MS network
* [updateNetworkSwitchAccessPolicy](#updatenetworkswitchaccesspolicy) - Update an access policy for a switch network
* [updateNetworkSwitchAlternateManagementInterface](#updatenetworkswitchalternatemanagementinterface) - Update the switch alternate management interface for the network
* [updateNetworkSwitchDhcpServerPolicy](#updatenetworkswitchdhcpserverpolicy) - Update the DHCP server settings
* [updateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServer](#updatenetworkswitchdhcpserverpolicyarpinspectiontrustedserver) - Update a server that is trusted by Dynamic ARP Inspection on this network
* [updateNetworkSwitchDscpToCosMappings](#updatenetworkswitchdscptocosmappings) - Update the DSCP to CoS mappings
* [updateNetworkSwitchLinkAggregation](#updatenetworkswitchlinkaggregation) - Update a link aggregation group
* [updateNetworkSwitchMtu](#updatenetworkswitchmtu) - Update the MTU configuration
* [updateNetworkSwitchPortSchedule](#updatenetworkswitchportschedule) - Update a switch port schedule
* [updateNetworkSwitchQosRule](#updatenetworkswitchqosrule) - Update a quality of service rule
* [updateNetworkSwitchQosRulesOrder](#updatenetworkswitchqosrulesorder) - Update the order in which the rules should be processed by the switch
* [updateNetworkSwitchRoutingMulticast](#updatenetworkswitchroutingmulticast) - Update multicast settings for a network
* [updateNetworkSwitchRoutingMulticastRendezvousPoint](#updatenetworkswitchroutingmulticastrendezvouspoint) - Update a multicast rendezvous point
* [updateNetworkSwitchRoutingOspf](#updatenetworkswitchroutingospf) - Update layer 3 OSPF routing configuration
* [updateNetworkSwitchSettings](#updatenetworkswitchsettings) - Update switch network settings
* [updateNetworkSwitchStackRoutingInterface](#updatenetworkswitchstackroutinginterface) - Update a layer 3 interface for a switch stack
* [updateNetworkSwitchStackRoutingInterfaceDhcp](#updatenetworkswitchstackroutinginterfacedhcp) - Update a layer 3 interface DHCP configuration for a switch stack
* [updateNetworkSwitchStackRoutingStaticRoute](#updatenetworkswitchstackroutingstaticroute) - Update a layer 3 static route for a switch stack
* [updateNetworkSwitchStormControl](#updatenetworkswitchstormcontrol) - Update the storm control configuration for a switch network
* [updateNetworkSwitchStp](#updatenetworkswitchstp) - Updates STP settings
* [updateNetworkSyslogServers](#updatenetworksyslogservers) - Update the syslog servers for a network
* [updateNetworkTrafficAnalysis](#updatenetworktrafficanalysis) - Update the traffic analysis settings for a network
* [updateNetworkWebhooksHttpServer](#updatenetworkwebhookshttpserver) - Update an HTTP server
* [updateNetworkWebhooksPayloadTemplate](#updatenetworkwebhookspayloadtemplate) - Update a webhook payload template for a network
* [updateNetworkWirelessAlternateManagementInterface](#updatenetworkwirelessalternatemanagementinterface) - Update alternate management interface and device static IP
* [updateNetworkWirelessBilling](#updatenetworkwirelessbilling) - Update the billing settings
* [updateNetworkWirelessBluetoothSettings](#updatenetworkwirelessbluetoothsettings) - Update the Bluetooth settings for a network
* [updateNetworkWirelessRfProfile](#updatenetworkwirelessrfprofile) - Updates specified RF profile for this network
* [updateNetworkWirelessSettings](#updatenetworkwirelesssettings) - Update the wireless settings for a network
* [updateNetworkWirelessSsid](#updatenetworkwirelessssid) - Update the attributes of an MR SSID
* [updateNetworkWirelessSsidBonjourForwarding](#updatenetworkwirelessssidbonjourforwarding) - Update the bonjour forwarding setting and rules for the SSID
* [updateNetworkWirelessSsidDeviceTypeGroupPolicies](#updatenetworkwirelessssiddevicetypegrouppolicies) - Update the device type group policies for the SSID
* [updateNetworkWirelessSsidEapOverride](#updatenetworkwirelessssideapoverride) - Update the EAP overridden parameters for an SSID.
* [updateNetworkWirelessSsidFirewallL3FirewallRules](#updatenetworkwirelessssidfirewalll3firewallrules) - Update the L3 firewall rules of an SSID on an MR network
* [updateNetworkWirelessSsidFirewallL7FirewallRules](#updatenetworkwirelessssidfirewalll7firewallrules) - Update the L7 firewall rules of an SSID on an MR network
* [updateNetworkWirelessSsidHotspot20](#updatenetworkwirelessssidhotspot20) - Update the Hotspot 2.0 settings of an SSID
* [updateNetworkWirelessSsidIdentityPsk](#updatenetworkwirelessssididentitypsk) - Update an Identity PSK
* [updateNetworkWirelessSsidSchedules](#updatenetworkwirelessssidschedules) - Update the outage schedule for the SSID
* [updateNetworkWirelessSsidSplashSettings](#updatenetworkwirelessssidsplashsettings) - Modify the splash page settings for the given SSID
* [updateNetworkWirelessSsidTrafficShapingRules](#updatenetworkwirelessssidtrafficshapingrules) - Update the traffic shaping settings for an SSID on an MR network
* [updateNetworkWirelessSsidVpn](#updatenetworkwirelessssidvpn) - Update the VPN settings for the SSID
* [updateOrganization](#updateorganization) - Update an organization
* [updateOrganizationActionBatch](#updateorganizationactionbatch) - Update an action batch
* [updateOrganizationAdaptivePolicyAcl](#updateorganizationadaptivepolicyacl) - Updates an adaptive policy ACL
* [updateOrganizationAdaptivePolicyGroup](#updateorganizationadaptivepolicygroup) - Updates an adaptive policy group
* [updateOrganizationAdaptivePolicyPolicy](#updateorganizationadaptivepolicypolicy) - Update an Adaptive Policy
* [updateOrganizationAdaptivePolicySettings](#updateorganizationadaptivepolicysettings) - Update global adaptive policy settings
* [updateOrganizationAdmin](#updateorganizationadmin) - Update an administrator
* [updateOrganizationAlertsProfile](#updateorganizationalertsprofile) - Update an organization-wide alert config
* [updateOrganizationApplianceSecurityIntrusion](#updateorganizationappliancesecurityintrusion) - Sets supported intrusion settings for an organization
* [updateOrganizationApplianceVPNThirdPartyVPNPeers](#updateorganizationappliancevpnthirdpartyvpnpeers) - Update the third party VPN peers for an organization
* [updateOrganizationApplianceVpnVpnFirewallRules](#updateorganizationappliancevpnvpnfirewallrules) - Update the firewall rules of an organization's site-to-site VPN
* [updateOrganizationBrandingPoliciesPriorities](#updateorganizationbrandingpoliciespriorities) - Update the priority ordering of an organization's branding policies.
* [updateOrganizationBrandingPolicy](#updateorganizationbrandingpolicy) - Update a branding policy
* [updateOrganizationCameraOnboardingStatuses](#updateorganizationcameraonboardingstatuses) - Notify that credential handoff to camera has completed
* [updateOrganizationConfigTemplate](#updateorganizationconfigtemplate) - Update a configuration template
* [updateOrganizationConfigTemplateSwitchProfilePort](#updateorganizationconfigtemplateswitchprofileport) - Update a switch profile port
* [updateOrganizationEarlyAccessFeaturesOptIn](#updateorganizationearlyaccessfeaturesoptin) - Update an early access feature opt-in for an organization
* [updateOrganizationInsightMonitoredMediaServer](#updateorganizationinsightmonitoredmediaserver) - Update a monitored media server for this organization
* [updateOrganizationLicense](#updateorganizationlicense) - Update a license
* [updateOrganizationLoginSecurity](#updateorganizationloginsecurity) - Update the login security settings for an organization
* [updateOrganizationPolicyObject](#updateorganizationpolicyobject) - Updates a Policy Object.
* [updateOrganizationPolicyObjectsGroup](#updateorganizationpolicyobjectsgroup) - Updates a Policy Object Group.
* [updateOrganizationSaml](#updateorganizationsaml) - Updates the SAML SSO enabled settings for an organization.
* [updateOrganizationSamlIdp](#updateorganizationsamlidp) - Update a SAML IdP in your organization
* [updateOrganizationSamlRole](#updateorganizationsamlrole) - Update a SAML role
* [updateOrganizationSnmp](#updateorganizationsnmp) - Update the SNMP settings for an organization
* [vmxNetworkDevicesClaim](#vmxnetworkdevicesclaim) - Claim a vMX into a network
* [wipeNetworkSmDevices](#wipenetworksmdevices) - Wipe a device

## addNetworkSwitchStack

Add a switch to a stack

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AddNetworkSwitchStackRequest;
use \OpenAPI\OpenAPI\Models\Operations\AddNetworkSwitchStackRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AddNetworkSwitchStackRequest();
    $request->requestBody = new AddNetworkSwitchStackRequestBody();
    $request->requestBody->serial = 'veniam';
    $request->networkId = 'quod';
    $request->switchStackId = 'itaque';

    $response = $sdk->configure->addNetworkSwitchStack($request);

    if ($response->addNetworkSwitchStack200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## assignOrganizationLicensesSeats

Assign SM seats to a network. This will increase the managed SM device limit of the network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AssignOrganizationLicensesSeatsRequest;
use \OpenAPI\OpenAPI\Models\Operations\AssignOrganizationLicensesSeatsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AssignOrganizationLicensesSeatsRequest();
    $request->requestBody = new AssignOrganizationLicensesSeatsRequestBody();
    $request->requestBody->licenseId = 'a';
    $request->requestBody->networkId = 'quisquam';
    $request->requestBody->seatCount = 316550;
    $request->organizationId = 'doloribus';

    $response = $sdk->configure->assignOrganizationLicensesSeats($request);

    if ($response->assignOrganizationLicensesSeats200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## bindNetwork

Bind a network to a template.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BindNetworkRequest;
use \OpenAPI\OpenAPI\Models\Operations\BindNetworkRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BindNetworkRequest();
    $request->requestBody = new BindNetworkRequestBody();
    $request->requestBody->autoBind = false;
    $request->requestBody->configTemplateId = 'assumenda';
    $request->networkId = 'officiis';

    $response = $sdk->configure->bindNetwork($request);

    if ($response->bindNetwork200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## checkinNetworkSmDevices

Force check-in a set of devices

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CheckinNetworkSmDevicesRequest;
use \OpenAPI\OpenAPI\Models\Operations\CheckinNetworkSmDevicesRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CheckinNetworkSmDevicesRequest();
    $request->requestBody = new CheckinNetworkSmDevicesRequestBody();
    $request->requestBody->ids = [
        'alias',
    ];
    $request->requestBody->scope = [
        'ipsa',
        'nobis',
        'necessitatibus',
    ];
    $request->requestBody->serials = [
        'dicta',
    ];
    $request->requestBody->wifiMacs = [
        'perspiciatis',
        'debitis',
    ];
    $request->networkId = 'ullam';

    $response = $sdk->configure->checkinNetworkSmDevices($request);

    if ($response->checkinNetworkSmDevices200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## claimIntoOrganization

Claim a list of devices, licenses, and/or orders into an organization. When claiming by order, all devices and licenses in the order will be claimed; licenses will be added to the organization and devices will be placed in the organization's inventory.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ClaimIntoOrganizationRequest;
use \OpenAPI\OpenAPI\Models\Operations\ClaimIntoOrganizationRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\ClaimIntoOrganizationRequestBodyLicenses;
use \OpenAPI\OpenAPI\Models\Operations\ClaimIntoOrganizationRequestBodyLicensesModeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ClaimIntoOrganizationRequest();
    $request->requestBody = new ClaimIntoOrganizationRequestBody();
    $request->requestBody->licenses = [
        new ClaimIntoOrganizationRequestBodyLicenses(),
    ];
    $request->requestBody->orders = [
        'perferendis',
    ];
    $request->requestBody->serials = [
        'provident',
    ];
    $request->organizationId = 'cumque';

    $response = $sdk->configure->claimIntoOrganization($request);

    if ($response->claimIntoOrganization200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## claimIntoOrganizationInventory

Claim a list of devices, licenses, and/or orders into an organization inventory. When claiming by order, all devices and licenses in the order will be claimed; licenses will be added to the organization and devices will be placed in the organization's inventory. Use /organizations/{organizationId}/inventory/release to release devices from an organization.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ClaimIntoOrganizationInventoryRequest;
use \OpenAPI\OpenAPI\Models\Operations\ClaimIntoOrganizationInventoryRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\ClaimIntoOrganizationInventoryRequestBodyLicenses;
use \OpenAPI\OpenAPI\Models\Operations\ClaimIntoOrganizationInventoryRequestBodyLicensesModeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ClaimIntoOrganizationInventoryRequest();
    $request->requestBody = new ClaimIntoOrganizationInventoryRequestBody();
    $request->requestBody->licenses = [
        new ClaimIntoOrganizationInventoryRequestBodyLicenses(),
        new ClaimIntoOrganizationInventoryRequestBodyLicenses(),
    ];
    $request->requestBody->orders = [
        'quod',
        'nemo',
        'recusandae',
        'velit',
    ];
    $request->requestBody->serials = [
        'dignissimos',
        'laboriosam',
    ];
    $request->organizationId = 'sed';

    $response = $sdk->configure->claimIntoOrganizationInventory($request);

    if ($response->claimIntoOrganizationInventory200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## claimNetworkDevices

Claim devices into a network. (Note: for recently claimed devices, it may take a few minutes for API requsts against that device to succeed)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ClaimNetworkDevicesRequest;
use \OpenAPI\OpenAPI\Models\Operations\ClaimNetworkDevicesRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ClaimNetworkDevicesRequest();
    $request->requestBody = new ClaimNetworkDevicesRequestBody();
    $request->requestBody->serials = [
        'natus',
        'provident',
    ];
    $request->networkId = 'cum';

    $response = $sdk->configure->claimNetworkDevices($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloneOrganization

Create a new organization by cloning the addressed organization

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CloneOrganizationRequest;
use \OpenAPI\OpenAPI\Models\Operations\CloneOrganizationRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloneOrganizationRequest();
    $request->requestBody = new CloneOrganizationRequestBody();
    $request->requestBody->name = 'Andres Predovic';
    $request->organizationId = 'unde';

    $response = $sdk->configure->cloneOrganization($request);

    if ($response->cloneOrganization201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloneOrganizationSwitchDevices

Clone port-level and some switch-level configuration settings from a source switch to one or more target switches. Cloned settings include: Aggregation Groups, Power Settings, Multicast Settings, MTU Configuration, STP Bridge priority, Port Mirroring

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CloneOrganizationSwitchDevicesRequest;
use \OpenAPI\OpenAPI\Models\Operations\CloneOrganizationSwitchDevicesRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloneOrganizationSwitchDevicesRequest();
    $request->requestBody = new CloneOrganizationSwitchDevicesRequestBody();
    $request->requestBody->sourceSerial = 'modi';
    $request->requestBody->targetSerials = [
        'hic',
        'cum',
        'aspernatur',
    ];
    $request->organizationId = 'libero';

    $response = $sdk->configure->cloneOrganizationSwitchDevices($request);

    if ($response->cloneOrganizationSwitchDevices200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## combineOrganizationNetworks

Combine multiple networks into a single network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CombineOrganizationNetworksRequest;
use \OpenAPI\OpenAPI\Models\Operations\CombineOrganizationNetworksRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CombineOrganizationNetworksRequest();
    $request->requestBody = new CombineOrganizationNetworksRequestBody();
    $request->requestBody->enrollmentString = 'nam';
    $request->requestBody->name = 'Sophie Schmeler';
    $request->requestBody->networkIds = [
        'quo',
        'nesciunt',
    ];
    $request->organizationId = 'illum';

    $response = $sdk->configure->combineOrganizationNetworks($request);

    if ($response->combineOrganizationNetworks200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createDeviceApplianceVmxAuthenticationToken

Generate a new vMX authentication token

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateDeviceApplianceVmxAuthenticationTokenRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateDeviceApplianceVmxAuthenticationTokenRequest();
    $request->serial = 'nemo';

    $response = $sdk->configure->createDeviceApplianceVmxAuthenticationToken($request);

    if ($response->createDeviceApplianceVmxAuthenticationToken201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createDeviceSwitchRoutingInterface

Create a layer 3 interface for a switch

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateDeviceSwitchRoutingInterfaceRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateDeviceSwitchRoutingInterfaceRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateDeviceSwitchRoutingInterfaceRequestBodyIpv6;
use \OpenAPI\OpenAPI\Models\Operations\CreateDeviceSwitchRoutingInterfaceRequestBodyMulticastRoutingEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateDeviceSwitchRoutingInterfaceRequestBodyOspfSettings;
use \OpenAPI\OpenAPI\Models\Operations\CreateDeviceSwitchRoutingInterfaceRequestBodyOspfV3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateDeviceSwitchRoutingInterfaceRequest();
    $request->requestBody = new CreateDeviceSwitchRoutingInterfaceRequestBody();
    $request->requestBody->defaultGateway = 'illum';
    $request->requestBody->interfaceIp = 'facilis';
    $request->requestBody->ipv6 = new CreateDeviceSwitchRoutingInterfaceRequestBodyIpv6();
    $request->requestBody->ipv6->address = '68978 Raymond Points';
    $request->requestBody->ipv6->assignmentMode = 'eveniet';
    $request->requestBody->ipv6->gateway = 'laborum';
    $request->requestBody->ipv6->prefix = 'incidunt';
    $request->requestBody->multicastRouting = CreateDeviceSwitchRoutingInterfaceRequestBodyMulticastRoutingEnum::ENABLED;
    $request->requestBody->name = 'Mary Hoeger';
    $request->requestBody->ospfSettings = new CreateDeviceSwitchRoutingInterfaceRequestBodyOspfSettings();
    $request->requestBody->ospfSettings->area = 'laborum';
    $request->requestBody->ospfSettings->cost = 668218;
    $request->requestBody->ospfSettings->isPassiveEnabled = false;
    $request->requestBody->ospfV3 = new CreateDeviceSwitchRoutingInterfaceRequestBodyOspfV3();
    $request->requestBody->ospfV3->area = 'occaecati';
    $request->requestBody->ospfV3->cost = 286716;
    $request->requestBody->ospfV3->isPassiveEnabled = false;
    $request->requestBody->subnet = 'quo';
    $request->requestBody->vlanId = 19462;
    $request->serial = 'fugit';

    $response = $sdk->configure->createDeviceSwitchRoutingInterface($request);

    if ($response->createDeviceSwitchRoutingInterface201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createDeviceSwitchRoutingStaticRoute

Create a layer 3 static route for a switch

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateDeviceSwitchRoutingStaticRouteRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateDeviceSwitchRoutingStaticRouteRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateDeviceSwitchRoutingStaticRouteRequest();
    $request->requestBody = new CreateDeviceSwitchRoutingStaticRouteRequestBody();
    $request->requestBody->advertiseViaOspfEnabled = false;
    $request->requestBody->name = 'Megan Hackett';
    $request->requestBody->nextHopIp = 'nostrum';
    $request->requestBody->preferOverOspfRoutesEnabled = false;
    $request->requestBody->subnet = 'officiis';
    $request->serial = 'unde';

    $response = $sdk->configure->createDeviceSwitchRoutingStaticRoute($request);

    if ($response->createDeviceSwitchRoutingStaticRoute201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createNetworkAppliancePrefixesDelegatedStatic

Add a static delegated prefix from a network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkAppliancePrefixesDelegatedStaticRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkAppliancePrefixesDelegatedStaticRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkAppliancePrefixesDelegatedStaticRequestBodyOrigin;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkAppliancePrefixesDelegatedStaticRequestBodyOriginTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateNetworkAppliancePrefixesDelegatedStaticRequest();
    $request->requestBody = new CreateNetworkAppliancePrefixesDelegatedStaticRequestBody();
    $request->requestBody->description = 'nulla';
    $request->requestBody->origin = new CreateNetworkAppliancePrefixesDelegatedStaticRequestBodyOrigin();
    $request->requestBody->origin->interfaces = [
        'mollitia',
        'magnam',
        'nostrum',
    ];
    $request->requestBody->origin->type = CreateNetworkAppliancePrefixesDelegatedStaticRequestBodyOriginTypeEnum::INDEPENDENT;
    $request->requestBody->prefix = 'corrupti';
    $request->networkId = 'fuga';

    $response = $sdk->configure->createNetworkAppliancePrefixesDelegatedStatic($request);

    if ($response->createNetworkAppliancePrefixesDelegatedStatic201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createNetworkApplianceStaticRoute

Add a static route for an MX or teleworker network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkApplianceStaticRouteRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkApplianceStaticRouteRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateNetworkApplianceStaticRouteRequest();
    $request->requestBody = new CreateNetworkApplianceStaticRouteRequestBody();
    $request->requestBody->gatewayIp = 'facere';
    $request->requestBody->gatewayVlanId = 'impedit';
    $request->requestBody->name = 'Joanna Schmidt Jr.';
    $request->requestBody->subnet = 'facere';
    $request->networkId = 'necessitatibus';

    $response = $sdk->configure->createNetworkApplianceStaticRoute($request);

    if ($response->createNetworkApplianceStaticRoute201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createNetworkApplianceTrafficShapingCustomPerformanceClass

Add a custom performance class for an MX network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkApplianceTrafficShapingCustomPerformanceClassRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkApplianceTrafficShapingCustomPerformanceClassRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateNetworkApplianceTrafficShapingCustomPerformanceClassRequest();
    $request->requestBody = new CreateNetworkApplianceTrafficShapingCustomPerformanceClassRequestBody();
    $request->requestBody->maxJitter = 807564;
    $request->requestBody->maxLatency = 9375;
    $request->requestBody->maxLossPercentage = 51007;
    $request->requestBody->name = 'Marguerite Sawayn Sr.';
    $request->networkId = 'officiis';

    $response = $sdk->configure->createNetworkApplianceTrafficShapingCustomPerformanceClass($request);

    if ($response->createNetworkApplianceTrafficShapingCustomPerformanceClass201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createNetworkApplianceVlan

Add a VLAN

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkApplianceVlanRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkApplianceVlanRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkApplianceVlanRequestBodyIpv6;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkApplianceVlanRequestBodyIpv6PrefixAssignments;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkApplianceVlanRequestBodyIpv6PrefixAssignmentsOrigin;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkApplianceVlanRequestBodyIpv6PrefixAssignmentsOriginTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkApplianceVlanRequestBodyMandatoryDhcp;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkApplianceVlanRequestBodyTemplateVlanTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateNetworkApplianceVlanRequest();
    $request->requestBody = new CreateNetworkApplianceVlanRequestBody();
    $request->requestBody->applianceIp = 'sed';
    $request->requestBody->cidr = 'necessitatibus';
    $request->requestBody->groupPolicyId = 'impedit';
    $request->requestBody->id = '09ff8f0f-816f-4f34-b7c1-3e902c14125b';
    $request->requestBody->ipv6 = new CreateNetworkApplianceVlanRequestBodyIpv6();
    $request->requestBody->ipv6->enabled = false;
    $request->requestBody->ipv6->prefixAssignments = [
        new CreateNetworkApplianceVlanRequestBodyIpv6PrefixAssignments(),
    ];
    $request->requestBody->mandatoryDhcp = new CreateNetworkApplianceVlanRequestBodyMandatoryDhcp();
    $request->requestBody->mandatoryDhcp->enabled = false;
    $request->requestBody->mask = 624498;
    $request->requestBody->name = 'Carol O'Reilly';
    $request->requestBody->subnet = 'quas';
    $request->requestBody->templateVlanType = CreateNetworkApplianceVlanRequestBodyTemplateVlanTypeEnum::SAME;
    $request->networkId = 'ullam';

    $response = $sdk->configure->createNetworkApplianceVlan($request);

    if ($response->createNetworkApplianceVlan201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createNetworkCameraQualityRetentionProfile

Creates new quality retention profile for this network.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkCameraQualityRetentionProfileRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkCameraQualityRetentionProfileRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettings;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72QualityEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72ResolutionEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12WE;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12WEQualityEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12WEResolutionEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv13;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv13QualityEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv13ResolutionEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71QualityEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71ResolutionEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72X;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72XQualityEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72XResolutionEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32QualityEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32ResolutionEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv33;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv33QualityEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv33ResolutionEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv52;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv52QualityEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv52ResolutionEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv63;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv63QualityEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv63ResolutionEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv63X;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv63XQualityEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv63XResolutionEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv93;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv93QualityEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv93ResolutionEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv93X;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv93XQualityEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv93XResolutionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateNetworkCameraQualityRetentionProfileRequest();
    $request->requestBody = new CreateNetworkCameraQualityRetentionProfileRequestBody();
    $request->requestBody->audioRecordingEnabled = false;
    $request->requestBody->cloudArchiveEnabled = false;
    $request->requestBody->maxRetentionDays = 62688;
    $request->requestBody->motionBasedRetentionEnabled = false;
    $request->requestBody->motionDetectorVersion = 631719;
    $request->requestBody->name = 'Constance Dach';
    $request->requestBody->restrictedBandwidthModeEnabled = false;
    $request->requestBody->scheduleId = 'omnis';
    $request->requestBody->videoSettings = new CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettings();
    $request->requestBody->videoSettings->mv12Mv22Mv72 = new CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72();
    $request->requestBody->videoSettings->mv12Mv22Mv72->quality = CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72QualityEnum::ENHANCED;
    $request->requestBody->videoSettings->mv12Mv22Mv72->resolution = CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72ResolutionEnum::ONE_THOUSAND_TWO_HUNDRED_AND_EIGHTYX720;
    $request->requestBody->videoSettings->mv12We = new CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12WE();
    $request->requestBody->videoSettings->mv12We->quality = CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12WEQualityEnum::STANDARD;
    $request->requestBody->videoSettings->mv12We->resolution = CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12WEResolutionEnum::ONE_THOUSAND_TWO_HUNDRED_AND_EIGHTYX720;
    $request->requestBody->videoSettings->mv13 = new CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv13();
    $request->requestBody->videoSettings->mv13->quality = CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv13QualityEnum::HIGH;
    $request->requestBody->videoSettings->mv13->resolution = CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv13ResolutionEnum::ONE_THOUSAND_AND_EIGHTYX1080;
    $request->requestBody->videoSettings->mv21Mv71 = new CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71();
    $request->requestBody->videoSettings->mv21Mv71->quality = CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71QualityEnum::HIGH;
    $request->requestBody->videoSettings->mv21Mv71->resolution = CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71ResolutionEnum::ONE_THOUSAND_TWO_HUNDRED_AND_EIGHTYX720;
    $request->requestBody->videoSettings->mv22XMv72X = new CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72X();
    $request->requestBody->videoSettings->mv22XMv72X->quality = CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72XQualityEnum::STANDARD;
    $request->requestBody->videoSettings->mv22XMv72X->resolution = CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72XResolutionEnum::ONE_THOUSAND_NINE_HUNDRED_AND_TWENTYX1080;
    $request->requestBody->videoSettings->mv32 = new CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32();
    $request->requestBody->videoSettings->mv32->quality = CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32QualityEnum::ENHANCED;
    $request->requestBody->videoSettings->mv32->resolution = CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32ResolutionEnum::TWO_THOUSAND_AND_FIFTY_EIGHTX2058;
    $request->requestBody->videoSettings->mv33 = new CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv33();
    $request->requestBody->videoSettings->mv33->quality = CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv33QualityEnum::ENHANCED;
    $request->requestBody->videoSettings->mv33->resolution = CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv33ResolutionEnum::ONE_THOUSAND_AND_EIGHTYX1080;
    $request->requestBody->videoSettings->mv52 = new CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv52();
    $request->requestBody->videoSettings->mv52->quality = CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv52QualityEnum::ENHANCED;
    $request->requestBody->videoSettings->mv52->resolution = CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv52ResolutionEnum::THREE_THOUSAND_EIGHT_HUNDRED_AND_FORTYX2160;
    $request->requestBody->videoSettings->mv63 = new CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv63();
    $request->requestBody->videoSettings->mv63->quality = CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv63QualityEnum::STANDARD;
    $request->requestBody->videoSettings->mv63->resolution = CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv63ResolutionEnum::TWO_THOUSAND_SIX_HUNDRED_AND_EIGHTY_EIGHTX1512;
    $request->requestBody->videoSettings->mv63X = new CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv63X();
    $request->requestBody->videoSettings->mv63X->quality = CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv63XQualityEnum::HIGH;
    $request->requestBody->videoSettings->mv63X->resolution = CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv63XResolutionEnum::TWO_THOUSAND_SIX_HUNDRED_AND_EIGHTY_EIGHTX1512;
    $request->requestBody->videoSettings->mv93 = new CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv93();
    $request->requestBody->videoSettings->mv93->quality = CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv93QualityEnum::STANDARD;
    $request->requestBody->videoSettings->mv93->resolution = CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv93ResolutionEnum::TWO_THOUSAND_ONE_HUNDRED_AND_TWELVEX2112;
    $request->requestBody->videoSettings->mv93X = new CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv93X();
    $request->requestBody->videoSettings->mv93X->quality = CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv93XQualityEnum::STANDARD;
    $request->requestBody->videoSettings->mv93X->resolution = CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv93XResolutionEnum::TWO_THOUSAND_ONE_HUNDRED_AND_TWELVEX2112;
    $request->networkId = 'accusantium';

    $response = $sdk->configure->createNetworkCameraQualityRetentionProfile($request);

    if ($response->createNetworkCameraQualityRetentionProfile200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createNetworkCameraWirelessProfile

Creates a new camera wireless profile for this network.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkCameraWirelessProfileRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkCameraWirelessProfileRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkCameraWirelessProfileRequestBodyIdentity;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkCameraWirelessProfileRequestBodySsid;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkCameraWirelessProfileRequestBodySsidAuthModeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateNetworkCameraWirelessProfileRequest();
    $request->requestBody = new CreateNetworkCameraWirelessProfileRequestBody();
    $request->requestBody->identity = new CreateNetworkCameraWirelessProfileRequestBodyIdentity();
    $request->requestBody->identity->password = 'dicta';
    $request->requestBody->identity->username = 'Pete_Johnson73';
    $request->requestBody->name = 'Joel Von';
    $request->requestBody->ssid = new CreateNetworkCameraWirelessProfileRequestBodySsid();
    $request->requestBody->ssid->authMode = CreateNetworkCameraWirelessProfileRequestBodySsidAuthModeEnum::EIGHT_THOUSAND_AND_TWENTY_ONEX_RADIUS;
    $request->requestBody->ssid->encryptionMode = 'eligendi';
    $request->requestBody->ssid->name = 'Claude Kutch';
    $request->requestBody->ssid->psk = 'a';
    $request->networkId = 'animi';

    $response = $sdk->configure->createNetworkCameraWirelessProfile($request);

    if ($response->createNetworkCameraWirelessProfile200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createNetworkFirmwareUpgradesRollback

Rollback a Firmware Upgrade For A Network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkFirmwareUpgradesRollbackRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkFirmwareUpgradesRollbackRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkFirmwareUpgradesRollbackRequestBodyProductEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkFirmwareUpgradesRollbackRequestBodyReasons;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkFirmwareUpgradesRollbackRequestBodyReasonsCategoryEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkFirmwareUpgradesRollbackRequestBodyToVersion;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateNetworkFirmwareUpgradesRollbackRequest();
    $request->requestBody = new CreateNetworkFirmwareUpgradesRollbackRequestBody();
    $request->requestBody->product = CreateNetworkFirmwareUpgradesRollbackRequestBodyProductEnum::WIRELESS;
    $request->requestBody->reasons = [
        new CreateNetworkFirmwareUpgradesRollbackRequestBodyReasons(),
        new CreateNetworkFirmwareUpgradesRollbackRequestBodyReasons(),
        new CreateNetworkFirmwareUpgradesRollbackRequestBodyReasons(),
        new CreateNetworkFirmwareUpgradesRollbackRequestBodyReasons(),
    ];
    $request->requestBody->time = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-01-26T10:56:43.935Z');
    $request->requestBody->toVersion = new CreateNetworkFirmwareUpgradesRollbackRequestBodyToVersion();
    $request->requestBody->toVersion->id = '53e5ae6e-0ac1-484c-ab9c-247c88373a40';
    $request->networkId = 'necessitatibus';

    $response = $sdk->configure->createNetworkFirmwareUpgradesRollback($request);

    if ($response->createNetworkFirmwareUpgradesRollback200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createNetworkFirmwareUpgradesStagedEvent

Create a Staged Upgrade Event for a network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkFirmwareUpgradesStagedEventRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkFirmwareUpgradesStagedEventRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkFirmwareUpgradesStagedEventRequestBodyProducts;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkFirmwareUpgradesStagedEventRequestBodyProductsSwitch;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkFirmwareUpgradesStagedEventRequestBodyProductsSwitchNextUpgrade;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkFirmwareUpgradesStagedEventRequestBodyProductsSwitchNextUpgradeToVersion;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkFirmwareUpgradesStagedEventRequestBodyStages;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkFirmwareUpgradesStagedEventRequestBodyStagesGroup;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkFirmwareUpgradesStagedEventRequestBodyStagesMilestones;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateNetworkFirmwareUpgradesStagedEventRequest();
    $request->requestBody = new CreateNetworkFirmwareUpgradesStagedEventRequestBody();
    $request->requestBody->products = new CreateNetworkFirmwareUpgradesStagedEventRequestBodyProducts();
    $request->requestBody->products->switch = new CreateNetworkFirmwareUpgradesStagedEventRequestBodyProductsSwitch();
    $request->requestBody->products->switch->nextUpgrade = new CreateNetworkFirmwareUpgradesStagedEventRequestBodyProductsSwitchNextUpgrade();
    $request->requestBody->products->switch->nextUpgrade->toVersion = new CreateNetworkFirmwareUpgradesStagedEventRequestBodyProductsSwitchNextUpgradeToVersion();
    $request->requestBody->products->switch->nextUpgrade->toVersion->id = '1942f32e-5505-4575-af5d-56d0bd0af2df';
    $request->requestBody->stages = [
        new CreateNetworkFirmwareUpgradesStagedEventRequestBodyStages(),
        new CreateNetworkFirmwareUpgradesStagedEventRequestBodyStages(),
        new CreateNetworkFirmwareUpgradesStagedEventRequestBodyStages(),
        new CreateNetworkFirmwareUpgradesStagedEventRequestBodyStages(),
    ];
    $request->networkId = 'architecto';

    $response = $sdk->configure->createNetworkFirmwareUpgradesStagedEvent($request);

    if ($response->createNetworkFirmwareUpgradesStagedEvent200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createNetworkFirmwareUpgradesStagedGroup

Create a Staged Upgrade Group for a network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkFirmwareUpgradesStagedGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkFirmwareUpgradesStagedGroupRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevices;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevicesDevices;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevicesSwitchStacks;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateNetworkFirmwareUpgradesStagedGroupRequest();
    $request->requestBody = new CreateNetworkFirmwareUpgradesStagedGroupRequestBody();
    $request->requestBody->assignedDevices = new CreateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevices();
    $request->requestBody->assignedDevices->devices = [
        new CreateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevicesDevices(),
    ];
    $request->requestBody->assignedDevices->switchStacks = [
        new CreateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevicesSwitchStacks(),
        new CreateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevicesSwitchStacks(),
        new CreateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevicesSwitchStacks(),
        new CreateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevicesSwitchStacks(),
    ];
    $request->requestBody->description = 'harum';
    $request->requestBody->isDefault = false;
    $request->requestBody->name = 'Miss Tami Kerluke';
    $request->networkId = 'dolorum';

    $response = $sdk->configure->createNetworkFirmwareUpgradesStagedGroup($request);

    if ($response->createNetworkFirmwareUpgradesStagedGroup200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createNetworkFloorPlan

Upload a floor plan

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkFloorPlanRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkFloorPlanRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkFloorPlanRequestBodyBottomLeftCorner;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkFloorPlanRequestBodyBottomRightCorner;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkFloorPlanRequestBodyCenter;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkFloorPlanRequestBodyTopLeftCorner;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkFloorPlanRequestBodyTopRightCorner;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateNetworkFloorPlanRequest();
    $request->requestBody = new CreateNetworkFloorPlanRequestBody();
    $request->requestBody->bottomLeftCorner = new CreateNetworkFloorPlanRequestBodyBottomLeftCorner();
    $request->requestBody->bottomLeftCorner->lat = 2425.31;
    $request->requestBody->bottomLeftCorner->lng = 9378.65;
    $request->requestBody->bottomRightCorner = new CreateNetworkFloorPlanRequestBodyBottomRightCorner();
    $request->requestBody->bottomRightCorner->lat = 5100.2;
    $request->requestBody->bottomRightCorner->lng = 6211.4;
    $request->requestBody->center = new CreateNetworkFloorPlanRequestBodyCenter();
    $request->requestBody->center->lat = 2524.73;
    $request->requestBody->center->lng = 978.1;
    $request->requestBody->imageContents = 'mollitia';
    $request->requestBody->name = 'Miss Horace Runte';
    $request->requestBody->topLeftCorner = new CreateNetworkFloorPlanRequestBodyTopLeftCorner();
    $request->requestBody->topLeftCorner->lat = 537.33;
    $request->requestBody->topLeftCorner->lng = 6431.99;
    $request->requestBody->topRightCorner = new CreateNetworkFloorPlanRequestBodyTopRightCorner();
    $request->requestBody->topRightCorner->lat = 3962.23;
    $request->requestBody->topRightCorner->lng = 5704.23;
    $request->networkId = 'magni';

    $response = $sdk->configure->createNetworkFloorPlan($request);

    if ($response->createNetworkFloorPlan201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createNetworkGroupPolicy

Create a group policy

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkGroupPolicyRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkGroupPolicyRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkGroupPolicyRequestBodyBandwidth;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkGroupPolicyRequestBodyBandwidthBandwidthLimits;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkGroupPolicyRequestBodyBandwidthSettingsEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkGroupPolicyRequestBodyBonjourForwarding;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkGroupPolicyRequestBodyBonjourForwardingRules;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkGroupPolicyRequestBodyBonjourForwardingSettingsEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkGroupPolicyRequestBodyContentFiltering;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkGroupPolicyRequestBodyContentFilteringAllowedUrlPatterns;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkGroupPolicyRequestBodyContentFilteringAllowedUrlPatternsSettingsEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlCategories;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlCategoriesSettingsEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlPatterns;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlPatternsSettingsEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShaping;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL3FirewallRules;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRules;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRulesPolicyEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRulesTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingSettingsEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRules;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitions;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesPerClientBandwidthLimits;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesPerClientBandwidthLimitsBandwidthLimits;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkGroupPolicyRequestBodyScheduling;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkGroupPolicyRequestBodySchedulingFriday;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkGroupPolicyRequestBodySchedulingMonday;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkGroupPolicyRequestBodySchedulingSaturday;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkGroupPolicyRequestBodySchedulingSunday;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkGroupPolicyRequestBodySchedulingThursday;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkGroupPolicyRequestBodySchedulingTuesday;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkGroupPolicyRequestBodySchedulingWednesday;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkGroupPolicyRequestBodySplashAuthSettingsEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkGroupPolicyRequestBodyVlanTagging;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkGroupPolicyRequestBodyVlanTaggingSettingsEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateNetworkGroupPolicyRequest();
    $request->requestBody = new CreateNetworkGroupPolicyRequestBody();
    $request->requestBody->bandwidth = new CreateNetworkGroupPolicyRequestBodyBandwidth();
    $request->requestBody->bandwidth->bandwidthLimits = new CreateNetworkGroupPolicyRequestBodyBandwidthBandwidthLimits();
    $request->requestBody->bandwidth->bandwidthLimits->limitDown = 273677;
    $request->requestBody->bandwidth->bandwidthLimits->limitUp = 821904;
    $request->requestBody->bandwidth->settings = CreateNetworkGroupPolicyRequestBodyBandwidthSettingsEnum::CUSTOM;
    $request->requestBody->bonjourForwarding = new CreateNetworkGroupPolicyRequestBodyBonjourForwarding();
    $request->requestBody->bonjourForwarding->rules = [
        new CreateNetworkGroupPolicyRequestBodyBonjourForwardingRules(),
        new CreateNetworkGroupPolicyRequestBodyBonjourForwardingRules(),
        new CreateNetworkGroupPolicyRequestBodyBonjourForwardingRules(),
    ];
    $request->requestBody->bonjourForwarding->settings = CreateNetworkGroupPolicyRequestBodyBonjourForwardingSettingsEnum::CUSTOM;
    $request->requestBody->contentFiltering = new CreateNetworkGroupPolicyRequestBodyContentFiltering();
    $request->requestBody->contentFiltering->allowedUrlPatterns = new CreateNetworkGroupPolicyRequestBodyContentFilteringAllowedUrlPatterns();
    $request->requestBody->contentFiltering->allowedUrlPatterns->patterns = [
        'optio',
        'delectus',
        'minus',
        'quo',
    ];
    $request->requestBody->contentFiltering->allowedUrlPatterns->settings = CreateNetworkGroupPolicyRequestBodyContentFilteringAllowedUrlPatternsSettingsEnum::NETWORK_DEFAULT;
    $request->requestBody->contentFiltering->blockedUrlCategories = new CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlCategories();
    $request->requestBody->contentFiltering->blockedUrlCategories->categories = [
        'voluptatum',
        'iste',
        'corporis',
        'accusantium',
    ];
    $request->requestBody->contentFiltering->blockedUrlCategories->settings = CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlCategoriesSettingsEnum::APPEND;
    $request->requestBody->contentFiltering->blockedUrlPatterns = new CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlPatterns();
    $request->requestBody->contentFiltering->blockedUrlPatterns->patterns = [
        'doloribus',
    ];
    $request->requestBody->contentFiltering->blockedUrlPatterns->settings = CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlPatternsSettingsEnum::NETWORK_DEFAULT;
    $request->requestBody->firewallAndTrafficShaping = new CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShaping();
    $request->requestBody->firewallAndTrafficShaping->l3FirewallRules = [
        new CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL3FirewallRules(),
        new CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL3FirewallRules(),
        new CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL3FirewallRules(),
        new CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL3FirewallRules(),
    ];
    $request->requestBody->firewallAndTrafficShaping->l7FirewallRules = [
        new CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRules(),
        new CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRules(),
        new CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRules(),
        new CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRules(),
    ];
    $request->requestBody->firewallAndTrafficShaping->settings = CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingSettingsEnum::CUSTOM;
    $request->requestBody->firewallAndTrafficShaping->trafficShapingRules = [
        new CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRules(),
        new CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRules(),
        new CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRules(),
        new CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRules(),
    ];
    $request->requestBody->name = 'Ms. Dixie O'Hara I';
    $request->requestBody->scheduling = new CreateNetworkGroupPolicyRequestBodyScheduling();
    $request->requestBody->scheduling->enabled = false;
    $request->requestBody->scheduling->friday = new CreateNetworkGroupPolicyRequestBodySchedulingFriday();
    $request->requestBody->scheduling->friday->active = false;
    $request->requestBody->scheduling->friday->from = 'voluptates';
    $request->requestBody->scheduling->friday->to = 'ad';
    $request->requestBody->scheduling->monday = new CreateNetworkGroupPolicyRequestBodySchedulingMonday();
    $request->requestBody->scheduling->monday->active = false;
    $request->requestBody->scheduling->monday->from = 'aliquam';
    $request->requestBody->scheduling->monday->to = 'quisquam';
    $request->requestBody->scheduling->saturday = new CreateNetworkGroupPolicyRequestBodySchedulingSaturday();
    $request->requestBody->scheduling->saturday->active = false;
    $request->requestBody->scheduling->saturday->from = 'quas';
    $request->requestBody->scheduling->saturday->to = 'consequuntur';
    $request->requestBody->scheduling->sunday = new CreateNetworkGroupPolicyRequestBodySchedulingSunday();
    $request->requestBody->scheduling->sunday->active = false;
    $request->requestBody->scheduling->sunday->from = 'maiores';
    $request->requestBody->scheduling->sunday->to = 'inventore';
    $request->requestBody->scheduling->thursday = new CreateNetworkGroupPolicyRequestBodySchedulingThursday();
    $request->requestBody->scheduling->thursday->active = false;
    $request->requestBody->scheduling->thursday->from = 'aliquid';
    $request->requestBody->scheduling->thursday->to = 'laudantium';
    $request->requestBody->scheduling->tuesday = new CreateNetworkGroupPolicyRequestBodySchedulingTuesday();
    $request->requestBody->scheduling->tuesday->active = false;
    $request->requestBody->scheduling->tuesday->from = 'est';
    $request->requestBody->scheduling->tuesday->to = 'dolor';
    $request->requestBody->scheduling->wednesday = new CreateNetworkGroupPolicyRequestBodySchedulingWednesday();
    $request->requestBody->scheduling->wednesday->active = false;
    $request->requestBody->scheduling->wednesday->from = 'aliquid';
    $request->requestBody->scheduling->wednesday->to = 'consectetur';
    $request->requestBody->splashAuthSettings = CreateNetworkGroupPolicyRequestBodySplashAuthSettingsEnum::NETWORK_DEFAULT;
    $request->requestBody->vlanTagging = new CreateNetworkGroupPolicyRequestBodyVlanTagging();
    $request->requestBody->vlanTagging->settings = CreateNetworkGroupPolicyRequestBodyVlanTaggingSettingsEnum::IGNORE;
    $request->requestBody->vlanTagging->vlanId = 'voluptatum';
    $request->networkId = 'ducimus';

    $response = $sdk->configure->createNetworkGroupPolicy($request);

    if ($response->createNetworkGroupPolicy201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createNetworkMerakiAuthUser

Authorize a user configured with Meraki Authentication for a network (currently supports 802.1X, splash guest, and client VPN users, and currently, organizations have a 50,000 user cap)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkMerakiAuthUserRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkMerakiAuthUserRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkMerakiAuthUserRequestBodyAccountTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkMerakiAuthUserRequestBodyAuthorizations;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateNetworkMerakiAuthUserRequest();
    $request->requestBody = new CreateNetworkMerakiAuthUserRequestBody();
    $request->requestBody->accountType = CreateNetworkMerakiAuthUserRequestBodyAccountTypeEnum::EIGHT_HUNDRED_AND_TWO1_X;
    $request->requestBody->authorizations = [
        new CreateNetworkMerakiAuthUserRequestBodyAuthorizations(),
        new CreateNetworkMerakiAuthUserRequestBodyAuthorizations(),
        new CreateNetworkMerakiAuthUserRequestBodyAuthorizations(),
        new CreateNetworkMerakiAuthUserRequestBodyAuthorizations(),
    ];
    $request->requestBody->email = 'Joana53@gmail.com';
    $request->requestBody->emailPasswordToUser = false;
    $request->requestBody->isAdmin = false;
    $request->requestBody->name = 'Olivia Boehm';
    $request->requestBody->password = 'quidem';
    $request->networkId = 'totam';

    $response = $sdk->configure->createNetworkMerakiAuthUser($request);

    if ($response->createNetworkMerakiAuthUser201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createNetworkMqttBroker

Add an MQTT broker

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkMqttBrokerRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkMqttBrokerRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkMqttBrokerRequestBodySecurity;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkMqttBrokerRequestBodySecuritySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateNetworkMqttBrokerRequest();
    $request->requestBody = new CreateNetworkMqttBrokerRequestBody();
    $request->requestBody->authentication = [
        'deserunt' => 'magni',
        'nihil' => 'voluptas',
        'animi' => 'commodi',
        'alias' => 'fuga',
    ];
    $request->requestBody->host = 'aut';
    $request->requestBody->name = 'Jody Gutmann';
    $request->requestBody->port = 755738;
    $request->requestBody->security = new CreateNetworkMqttBrokerRequestBodySecurity();
    $request->requestBody->security->mode = 'placeat';
    $request->requestBody->security->security = new CreateNetworkMqttBrokerRequestBodySecuritySecurity();
    $request->requestBody->security->security->caCertificate = 'voluptas';
    $request->requestBody->security->security->verifyHostnames = false;
    $request->networkId = 'occaecati';

    $response = $sdk->configure->createNetworkMqttBroker($request);

    if ($response->createNetworkMqttBroker201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createNetworkPiiRequest

Submit a new delete or restrict processing PII request

## ALTERNATE PATH

```
/organizations/{organizationId}/pii/requests
```

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkPiiRequestRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkPiiRequestRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkPiiRequestRequestBodyTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateNetworkPiiRequestRequest();
    $request->requestBody = new CreateNetworkPiiRequestRequestBody();
    $request->requestBody->datasets = [
        'illo',
        'nihil',
        'inventore',
    ];
    $request->requestBody->email = 'Gabriel.Boyle68@hotmail.com';
    $request->requestBody->mac = 'facere';
    $request->requestBody->smDeviceId = 'facilis';
    $request->requestBody->smUserId = 'beatae';
    $request->requestBody->type = CreateNetworkPiiRequestRequestBodyTypeEnum::RESTRICT_PROCESSING;
    $request->requestBody->username = 'Violet_Grant52';
    $request->networkId = 'atque';

    $response = $sdk->configure->createNetworkPiiRequest($request);

    if ($response->createNetworkPiiRequest201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createNetworkSensorAlertsProfile

Creates a sensor alert profile for a network.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkSensorAlertsProfileRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkSensorAlertsProfileRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkSensorAlertsProfileRequestBodyConditions;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkSensorAlertsProfileRequestBodyConditionsDirectionEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkSensorAlertsProfileRequestBodyConditionsDurationEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkSensorAlertsProfileRequestBodyConditionsThreshold;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdDoor;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdHumidity;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdHumidityQualityEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdIndoorAirQuality;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdIndoorAirQualityQualityEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdNoise;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdNoiseAmbient;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdNoiseAmbientQualityEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdPm25;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdPm25QualityEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdTemperature;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdTemperatureQualityEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdTvoc;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdTvocQualityEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdWater;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkSensorAlertsProfileRequestBodyRecipients;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkSensorAlertsProfileRequestBodySchedule;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateNetworkSensorAlertsProfileRequest();
    $request->requestBody = new CreateNetworkSensorAlertsProfileRequestBody();
    $request->requestBody->conditions = [
        new CreateNetworkSensorAlertsProfileRequestBodyConditions(),
        new CreateNetworkSensorAlertsProfileRequestBodyConditions(),
        new CreateNetworkSensorAlertsProfileRequestBodyConditions(),
        new CreateNetworkSensorAlertsProfileRequestBodyConditions(),
    ];
    $request->requestBody->name = 'Jody Will';
    $request->requestBody->recipients = new CreateNetworkSensorAlertsProfileRequestBodyRecipients();
    $request->requestBody->recipients->emails = [
        'minus',
        'porro',
        'id',
        'excepturi',
    ];
    $request->requestBody->recipients->httpServerIds = [
        'libero',
        'quo',
        'esse',
    ];
    $request->requestBody->recipients->smsNumbers = [
        'maxime',
        'accusantium',
        'soluta',
        'fugit',
    ];
    $request->requestBody->schedule = new CreateNetworkSensorAlertsProfileRequestBodySchedule();
    $request->requestBody->schedule->id = 'dce10873-e42b-4006-9678-878ba8581a58';
    $request->requestBody->serials = [
        'quae',
    ];
    $request->networkId = 'quas';

    $response = $sdk->configure->createNetworkSensorAlertsProfile($request);

    if ($response->createNetworkSensorAlertsProfile200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createNetworkSmBypassActivationLockAttempt

Bypass activation lock attempt

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkSmBypassActivationLockAttemptRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkSmBypassActivationLockAttemptRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateNetworkSmBypassActivationLockAttemptRequest();
    $request->requestBody = new CreateNetworkSmBypassActivationLockAttemptRequestBody();
    $request->requestBody->ids = [
        'enim',
        'labore',
        'sapiente',
        'saepe',
    ];
    $request->networkId = 'delectus';

    $response = $sdk->configure->createNetworkSmBypassActivationLockAttempt($request);

    if ($response->createNetworkSmBypassActivationLockAttempt201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createNetworkSmTargetGroup

Add a target group

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkSmTargetGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkSmTargetGroupRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateNetworkSmTargetGroupRequest();
    $request->requestBody = new CreateNetworkSmTargetGroupRequestBody();
    $request->requestBody->name = 'Jeremiah Runolfsdottir';
    $request->requestBody->scope = 'doloribus';
    $request->networkId = 'quia';

    $response = $sdk->configure->createNetworkSmTargetGroup($request);

    if ($response->createNetworkSmTargetGroup201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createNetworkSwitchAccessPolicy

Create an access policy for a switch network. If you would like to enable Meraki Authentication, set radiusServers to empty array.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkSwitchAccessPolicyRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkSwitchAccessPolicyRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkSwitchAccessPolicyRequestBodyAccessPolicyTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkSwitchAccessPolicyRequestBodyDot1x;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkSwitchAccessPolicyRequestBodyDot1xControlDirectionEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkSwitchAccessPolicyRequestBodyHostModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkSwitchAccessPolicyRequestBodyRadius;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkSwitchAccessPolicyRequestBodyRadiusCriticalAuth;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkSwitchAccessPolicyRequestBodyRadiusAccountingServers;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkSwitchAccessPolicyRequestBodyRadiusServers;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateNetworkSwitchAccessPolicyRequest();
    $request->requestBody = new CreateNetworkSwitchAccessPolicyRequestBody();
    $request->requestBody->accessPolicyType = CreateNetworkSwitchAccessPolicyRequestBodyAccessPolicyTypeEnum::MAC_AUTHENTICATION_BYPASS;
    $request->requestBody->dot1x = new CreateNetworkSwitchAccessPolicyRequestBodyDot1x();
    $request->requestBody->dot1x->controlDirection = CreateNetworkSwitchAccessPolicyRequestBodyDot1xControlDirectionEnum::INBOUND;
    $request->requestBody->guestPortBouncing = false;
    $request->requestBody->guestVlanId = 765070;
    $request->requestBody->hostMode = CreateNetworkSwitchAccessPolicyRequestBodyHostModeEnum::MULTI_DOMAIN;
    $request->requestBody->increaseAccessSpeed = false;
    $request->requestBody->name = 'Natalie Hickle';
    $request->requestBody->radius = new CreateNetworkSwitchAccessPolicyRequestBodyRadius();
    $request->requestBody->radius->criticalAuth = new CreateNetworkSwitchAccessPolicyRequestBodyRadiusCriticalAuth();
    $request->requestBody->radius->criticalAuth->dataVlanId = 22331;
    $request->requestBody->radius->criticalAuth->suspendPortBounce = false;
    $request->requestBody->radius->criticalAuth->voiceVlanId = 487148;
    $request->requestBody->radius->failedAuthVlanId = 794306;
    $request->requestBody->radius->reAuthenticationInterval = 990369;
    $request->requestBody->radiusAccountingEnabled = false;
    $request->requestBody->radiusAccountingServers = [
        new CreateNetworkSwitchAccessPolicyRequestBodyRadiusAccountingServers(),
        new CreateNetworkSwitchAccessPolicyRequestBodyRadiusAccountingServers(),
        new CreateNetworkSwitchAccessPolicyRequestBodyRadiusAccountingServers(),
        new CreateNetworkSwitchAccessPolicyRequestBodyRadiusAccountingServers(),
    ];
    $request->requestBody->radiusCoaSupportEnabled = false;
    $request->requestBody->radiusGroupAttribute = 'voluptates';
    $request->requestBody->radiusServers = [
        new CreateNetworkSwitchAccessPolicyRequestBodyRadiusServers(),
        new CreateNetworkSwitchAccessPolicyRequestBodyRadiusServers(),
        new CreateNetworkSwitchAccessPolicyRequestBodyRadiusServers(),
    ];
    $request->requestBody->radiusTestingEnabled = false;
    $request->requestBody->urlRedirectWalledGardenEnabled = false;
    $request->requestBody->urlRedirectWalledGardenRanges = [
        'fugit',
    ];
    $request->requestBody->voiceVlanClients = false;
    $request->networkId = 'sit';

    $response = $sdk->configure->createNetworkSwitchAccessPolicy($request);

    if ($response->createNetworkSwitchAccessPolicy201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createNetworkSwitchDhcpServerPolicyArpInspectionTrustedServer

Add a server to be trusted by Dynamic ARP Inspection on this network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerRequestBodyIpv4;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerRequest();
    $request->requestBody = new CreateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerRequestBody();
    $request->requestBody->ipv4 = new CreateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerRequestBodyIpv4();
    $request->requestBody->ipv4->address = '8151 Vinnie Points';
    $request->requestBody->mac = 'aliquam';
    $request->requestBody->vlan = 644223;
    $request->networkId = 'modi';

    $response = $sdk->configure->createNetworkSwitchDhcpServerPolicyArpInspectionTrustedServer($request);

    if ($response->createNetworkSwitchDhcpServerPolicyArpInspectionTrustedServer201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createNetworkSwitchLinkAggregation

Create a link aggregation group

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkSwitchLinkAggregationRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkSwitchLinkAggregationRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkSwitchLinkAggregationRequestBodySwitchPorts;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkSwitchLinkAggregationRequestBodySwitchProfilePorts;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateNetworkSwitchLinkAggregationRequest();
    $request->requestBody = new CreateNetworkSwitchLinkAggregationRequestBody();
    $request->requestBody->switchPorts = [
        new CreateNetworkSwitchLinkAggregationRequestBodySwitchPorts(),
    ];
    $request->requestBody->switchProfilePorts = [
        new CreateNetworkSwitchLinkAggregationRequestBodySwitchProfilePorts(),
        new CreateNetworkSwitchLinkAggregationRequestBodySwitchProfilePorts(),
        new CreateNetworkSwitchLinkAggregationRequestBodySwitchProfilePorts(),
        new CreateNetworkSwitchLinkAggregationRequestBodySwitchProfilePorts(),
    ];
    $request->networkId = 'eius';

    $response = $sdk->configure->createNetworkSwitchLinkAggregation($request);

    if ($response->createNetworkSwitchLinkAggregation201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createNetworkSwitchPortSchedule

Add a switch port schedule

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkSwitchPortScheduleRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkSwitchPortScheduleRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkSwitchPortScheduleRequestBodyPortSchedule;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkSwitchPortScheduleRequestBodyPortScheduleFriday;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkSwitchPortScheduleRequestBodyPortScheduleMonday;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkSwitchPortScheduleRequestBodyPortScheduleSaturday;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkSwitchPortScheduleRequestBodyPortScheduleSunday;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkSwitchPortScheduleRequestBodyPortScheduleThursday;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkSwitchPortScheduleRequestBodyPortScheduleTuesday;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkSwitchPortScheduleRequestBodyPortScheduleWednesday;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateNetworkSwitchPortScheduleRequest();
    $request->requestBody = new CreateNetworkSwitchPortScheduleRequestBody();
    $request->requestBody->name = 'Frank Swaniawski';
    $request->requestBody->portSchedule = new CreateNetworkSwitchPortScheduleRequestBodyPortSchedule();
    $request->requestBody->portSchedule->friday = new CreateNetworkSwitchPortScheduleRequestBodyPortScheduleFriday();
    $request->requestBody->portSchedule->friday->active = false;
    $request->requestBody->portSchedule->friday->from = 'aspernatur';
    $request->requestBody->portSchedule->friday->to = 'inventore';
    $request->requestBody->portSchedule->monday = new CreateNetworkSwitchPortScheduleRequestBodyPortScheduleMonday();
    $request->requestBody->portSchedule->monday->active = false;
    $request->requestBody->portSchedule->monday->from = 'sequi';
    $request->requestBody->portSchedule->monday->to = 'fugit';
    $request->requestBody->portSchedule->saturday = new CreateNetworkSwitchPortScheduleRequestBodyPortScheduleSaturday();
    $request->requestBody->portSchedule->saturday->active = false;
    $request->requestBody->portSchedule->saturday->from = 'fuga';
    $request->requestBody->portSchedule->saturday->to = 'hic';
    $request->requestBody->portSchedule->sunday = new CreateNetworkSwitchPortScheduleRequestBodyPortScheduleSunday();
    $request->requestBody->portSchedule->sunday->active = false;
    $request->requestBody->portSchedule->sunday->from = 'eaque';
    $request->requestBody->portSchedule->sunday->to = 'dolorem';
    $request->requestBody->portSchedule->thursday = new CreateNetworkSwitchPortScheduleRequestBodyPortScheduleThursday();
    $request->requestBody->portSchedule->thursday->active = false;
    $request->requestBody->portSchedule->thursday->from = 'architecto';
    $request->requestBody->portSchedule->thursday->to = 'aperiam';
    $request->requestBody->portSchedule->tuesday = new CreateNetworkSwitchPortScheduleRequestBodyPortScheduleTuesday();
    $request->requestBody->portSchedule->tuesday->active = false;
    $request->requestBody->portSchedule->tuesday->from = 'aspernatur';
    $request->requestBody->portSchedule->tuesday->to = 'nulla';
    $request->requestBody->portSchedule->wednesday = new CreateNetworkSwitchPortScheduleRequestBodyPortScheduleWednesday();
    $request->requestBody->portSchedule->wednesday->active = false;
    $request->requestBody->portSchedule->wednesday->from = 'enim';
    $request->requestBody->portSchedule->wednesday->to = 'illo';
    $request->networkId = 'magnam';

    $response = $sdk->configure->createNetworkSwitchPortSchedule($request);

    if ($response->createNetworkSwitchPortSchedule201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createNetworkSwitchQosRule

Add a quality of service rule

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkSwitchQosRuleRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkSwitchQosRuleRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkSwitchQosRuleRequestBodyProtocolEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateNetworkSwitchQosRuleRequest();
    $request->requestBody = new CreateNetworkSwitchQosRuleRequestBody();
    $request->requestBody->dscp = 961842;
    $request->requestBody->dstPort = 255064;
    $request->requestBody->dstPortRange = 'optio';
    $request->requestBody->protocol = CreateNetworkSwitchQosRuleRequestBodyProtocolEnum::UDP;
    $request->requestBody->srcPort = 404422;
    $request->requestBody->srcPortRange = 'repellat';
    $request->requestBody->vlan = 65118;
    $request->networkId = 'deleniti';

    $response = $sdk->configure->createNetworkSwitchQosRule($request);

    if ($response->createNetworkSwitchQosRule201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createNetworkSwitchRoutingMulticastRendezvousPoint

Create a multicast rendezvous point

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkSwitchRoutingMulticastRendezvousPointRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkSwitchRoutingMulticastRendezvousPointRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateNetworkSwitchRoutingMulticastRendezvousPointRequest();
    $request->requestBody = new CreateNetworkSwitchRoutingMulticastRendezvousPointRequestBody();
    $request->requestBody->interfaceIp = 'expedita';
    $request->requestBody->multicastGroup = 'hic';
    $request->networkId = 'excepturi';

    $response = $sdk->configure->createNetworkSwitchRoutingMulticastRendezvousPoint($request);

    if ($response->createNetworkSwitchRoutingMulticastRendezvousPoint201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createNetworkSwitchStack

Create a stack

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkSwitchStackRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkSwitchStackRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateNetworkSwitchStackRequest();
    $request->requestBody = new CreateNetworkSwitchStackRequestBody();
    $request->requestBody->name = 'Irene Breitenberg';
    $request->requestBody->serials = [
        'dolore',
        'tenetur',
        'dignissimos',
    ];
    $request->networkId = 'esse';

    $response = $sdk->configure->createNetworkSwitchStack($request);

    if ($response->createNetworkSwitchStack201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createNetworkSwitchStackRoutingInterface

Create a layer 3 interface for a switch stack

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkSwitchStackRoutingInterfaceRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkSwitchStackRoutingInterfaceRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkSwitchStackRoutingInterfaceRequestBodyIpv6;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkSwitchStackRoutingInterfaceRequestBodyMulticastRoutingEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkSwitchStackRoutingInterfaceRequestBodyOspfSettings;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateNetworkSwitchStackRoutingInterfaceRequest();
    $request->requestBody = new CreateNetworkSwitchStackRoutingInterfaceRequestBody();
    $request->requestBody->defaultGateway = 'animi';
    $request->requestBody->interfaceIp = 'laudantium';
    $request->requestBody->ipv6 = new CreateNetworkSwitchStackRoutingInterfaceRequestBodyIpv6();
    $request->requestBody->ipv6->address = '9928 Maye Viaduct';
    $request->requestBody->ipv6->assignmentMode = 'dignissimos';
    $request->requestBody->ipv6->gateway = 'ipsam';
    $request->requestBody->ipv6->prefix = 'explicabo';
    $request->requestBody->multicastRouting = CreateNetworkSwitchStackRoutingInterfaceRequestBodyMulticastRoutingEnum::ENABLED;
    $request->requestBody->name = 'Beatrice Purdy';
    $request->requestBody->ospfSettings = new CreateNetworkSwitchStackRoutingInterfaceRequestBodyOspfSettings();
    $request->requestBody->ospfSettings->area = 'quaerat';
    $request->requestBody->ospfSettings->cost = 103988;
    $request->requestBody->ospfSettings->isPassiveEnabled = false;
    $request->requestBody->subnet = 'praesentium';
    $request->requestBody->vlanId = 907899;
    $request->networkId = 'dolor';
    $request->switchStackId = 'expedita';

    $response = $sdk->configure->createNetworkSwitchStackRoutingInterface($request);

    if ($response->createNetworkSwitchStackRoutingInterface201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createNetworkSwitchStackRoutingStaticRoute

Create a layer 3 static route for a switch stack

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkSwitchStackRoutingStaticRouteRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkSwitchStackRoutingStaticRouteRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateNetworkSwitchStackRoutingStaticRouteRequest();
    $request->requestBody = new CreateNetworkSwitchStackRoutingStaticRouteRequestBody();
    $request->requestBody->advertiseViaOspfEnabled = false;
    $request->requestBody->name = 'Nick Blanda';
    $request->requestBody->nextHopIp = 'temporibus';
    $request->requestBody->preferOverOspfRoutesEnabled = false;
    $request->requestBody->subnet = 'sint';
    $request->networkId = 'iusto';
    $request->switchStackId = 'enim';

    $response = $sdk->configure->createNetworkSwitchStackRoutingStaticRoute($request);

    if ($response->createNetworkSwitchStackRoutingStaticRoute201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createNetworkWebhooksHttpServer

Add an HTTP server to a network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkWebhooksHttpServerRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkWebhooksHttpServerRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkWebhooksHttpServerRequestBodyPayloadTemplate;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateNetworkWebhooksHttpServerRequest();
    $request->requestBody = new CreateNetworkWebhooksHttpServerRequestBody();
    $request->requestBody->name = 'Kevin Von';
    $request->requestBody->payloadTemplate = new CreateNetworkWebhooksHttpServerRequestBodyPayloadTemplate();
    $request->requestBody->payloadTemplate->name = 'Guadalupe Stanton';
    $request->requestBody->payloadTemplate->payloadTemplateId = 'deleniti';
    $request->requestBody->sharedSecret = 'modi';
    $request->requestBody->url = 'earum';
    $request->networkId = 'architecto';

    $response = $sdk->configure->createNetworkWebhooksHttpServer($request);

    if ($response->createNetworkWebhooksHttpServer201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createNetworkWebhooksPayloadTemplate

Create a webhook payload template for a network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkWebhooksPayloadTemplateRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkWebhooksPayloadTemplateRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkWebhooksPayloadTemplateRequestBodyHeaders;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateNetworkWebhooksPayloadTemplateRequest();
    $request->requestBody = new CreateNetworkWebhooksPayloadTemplateRequestBody();
    $request->requestBody->body = 'aliquam';
    $request->requestBody->bodyFile = 'labore';
    $request->requestBody->headers = [
        new CreateNetworkWebhooksPayloadTemplateRequestBodyHeaders(),
        new CreateNetworkWebhooksPayloadTemplateRequestBodyHeaders(),
        new CreateNetworkWebhooksPayloadTemplateRequestBodyHeaders(),
        new CreateNetworkWebhooksPayloadTemplateRequestBodyHeaders(),
    ];
    $request->requestBody->headersFile = 'sequi';
    $request->requestBody->name = 'William Koch';
    $request->networkId = 'quisquam';

    $response = $sdk->configure->createNetworkWebhooksPayloadTemplate($request);

    if ($response->createNetworkWebhooksPayloadTemplate201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createNetworkWebhooksWebhookTest

Send a test webhook for a network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkWebhooksWebhookTestRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkWebhooksWebhookTestRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateNetworkWebhooksWebhookTestRequest();
    $request->requestBody = new CreateNetworkWebhooksWebhookTestRequestBody();
    $request->requestBody->alertTypeId = 'cumque';
    $request->requestBody->payloadTemplateId = 'aliquam';
    $request->requestBody->payloadTemplateName = 'dolorum';
    $request->requestBody->sharedSecret = 'deserunt';
    $request->requestBody->url = 'ad';
    $request->networkId = 'reiciendis';

    $response = $sdk->configure->createNetworkWebhooksWebhookTest($request);

    if ($response->createNetworkWebhooksWebhookTest201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createNetworkWirelessRfProfile

Creates new RF profile for this network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkWirelessRfProfileRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkWirelessRfProfileRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkWirelessRfProfileRequestBodyApBandSettings;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkWirelessRfProfileRequestBodyApBandSettingsBandOperationModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkWirelessRfProfileRequestBodyBandSelectionTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkWirelessRfProfileRequestBodyFiveGhzSettings;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkWirelessRfProfileRequestBodyMinBitrateTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings0;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings0BandOperationModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings1;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings1BandOperationModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings10;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings10BandOperationModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings11;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings11BandOperationModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings12;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings12BandOperationModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings13;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings13BandOperationModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings14;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings14BandOperationModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings2;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings2BandOperationModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings3;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings3BandOperationModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings4;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings4BandOperationModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings5;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings5BandOperationModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings6;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings6BandOperationModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings7;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings7BandOperationModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings8;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings8BandOperationModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings9;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings9BandOperationModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkWirelessRfProfileRequestBodyTransmission;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkWirelessRfProfileRequestBodyTwoFourGhzSettings;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateNetworkWirelessRfProfileRequest();
    $request->requestBody = new CreateNetworkWirelessRfProfileRequestBody();
    $request->requestBody->apBandSettings = new CreateNetworkWirelessRfProfileRequestBodyApBandSettings();
    $request->requestBody->apBandSettings->bandOperationMode = CreateNetworkWirelessRfProfileRequestBodyApBandSettingsBandOperationModeEnum::TWO4GHZ;
    $request->requestBody->apBandSettings->bandSteeringEnabled = false;
    $request->requestBody->bandSelectionType = CreateNetworkWirelessRfProfileRequestBodyBandSelectionTypeEnum::SSID;
    $request->requestBody->clientBalancingEnabled = false;
    $request->requestBody->fiveGhzSettings = new CreateNetworkWirelessRfProfileRequestBodyFiveGhzSettings();
    $request->requestBody->fiveGhzSettings->channelWidth = 'laborum';
    $request->requestBody->fiveGhzSettings->maxPower = 748973;
    $request->requestBody->fiveGhzSettings->minBitrate = 842974;
    $request->requestBody->fiveGhzSettings->minPower = 607624;
    $request->requestBody->fiveGhzSettings->rxsop = 16252;
    $request->requestBody->fiveGhzSettings->validAutoChannels = [
        642804,
        584640,
    ];
    $request->requestBody->minBitrateType = CreateNetworkWirelessRfProfileRequestBodyMinBitrateTypeEnum::BAND;
    $request->requestBody->name = 'Kelley Bashirian';
    $request->requestBody->perSsidSettings = new CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings();
    $request->requestBody->perSsidSettings->zero = new CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings0();
    $request->requestBody->perSsidSettings->zero->bandOperationMode = CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings0BandOperationModeEnum::FIVEGHZ;
    $request->requestBody->perSsidSettings->zero->bandSteeringEnabled = false;
    $request->requestBody->perSsidSettings->zero->minBitrate = 1541.3;
    $request->requestBody->perSsidSettings->one = new CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings1();
    $request->requestBody->perSsidSettings->one->bandOperationMode = CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings1BandOperationModeEnum::FIVEGHZ;
    $request->requestBody->perSsidSettings->one->bandSteeringEnabled = false;
    $request->requestBody->perSsidSettings->one->minBitrate = 1527.42;
    $request->requestBody->perSsidSettings->ten = new CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings10();
    $request->requestBody->perSsidSettings->ten->bandOperationMode = CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings10BandOperationModeEnum::TWO4GHZ;
    $request->requestBody->perSsidSettings->ten->bandSteeringEnabled = false;
    $request->requestBody->perSsidSettings->ten->minBitrate = 4798.3;
    $request->requestBody->perSsidSettings->eleven = new CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings11();
    $request->requestBody->perSsidSettings->eleven->bandOperationMode = CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings11BandOperationModeEnum::DUAL;
    $request->requestBody->perSsidSettings->eleven->bandSteeringEnabled = false;
    $request->requestBody->perSsidSettings->eleven->minBitrate = 1769.35;
    $request->requestBody->perSsidSettings->twelve = new CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings12();
    $request->requestBody->perSsidSettings->twelve->bandOperationMode = CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings12BandOperationModeEnum::DUAL;
    $request->requestBody->perSsidSettings->twelve->bandSteeringEnabled = false;
    $request->requestBody->perSsidSettings->twelve->minBitrate = 1998.79;
    $request->requestBody->perSsidSettings->thirteen = new CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings13();
    $request->requestBody->perSsidSettings->thirteen->bandOperationMode = CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings13BandOperationModeEnum::TWO4GHZ;
    $request->requestBody->perSsidSettings->thirteen->bandSteeringEnabled = false;
    $request->requestBody->perSsidSettings->thirteen->minBitrate = 5751.39;
    $request->requestBody->perSsidSettings->fourteen = new CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings14();
    $request->requestBody->perSsidSettings->fourteen->bandOperationMode = CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings14BandOperationModeEnum::TWO4GHZ;
    $request->requestBody->perSsidSettings->fourteen->bandSteeringEnabled = false;
    $request->requestBody->perSsidSettings->fourteen->minBitrate = 4570.63;
    $request->requestBody->perSsidSettings->two = new CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings2();
    $request->requestBody->perSsidSettings->two->bandOperationMode = CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings2BandOperationModeEnum::TWO4GHZ;
    $request->requestBody->perSsidSettings->two->bandSteeringEnabled = false;
    $request->requestBody->perSsidSettings->two->minBitrate = 7181.19;
    $request->requestBody->perSsidSettings->three = new CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings3();
    $request->requestBody->perSsidSettings->three->bandOperationMode = CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings3BandOperationModeEnum::DUAL;
    $request->requestBody->perSsidSettings->three->bandSteeringEnabled = false;
    $request->requestBody->perSsidSettings->three->minBitrate = 4630.5;
    $request->requestBody->perSsidSettings->four = new CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings4();
    $request->requestBody->perSsidSettings->four->bandOperationMode = CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings4BandOperationModeEnum::DUAL;
    $request->requestBody->perSsidSettings->four->bandSteeringEnabled = false;
    $request->requestBody->perSsidSettings->four->minBitrate = 3073.06;
    $request->requestBody->perSsidSettings->five = new CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings5();
    $request->requestBody->perSsidSettings->five->bandOperationMode = CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings5BandOperationModeEnum::DUAL;
    $request->requestBody->perSsidSettings->five->bandSteeringEnabled = false;
    $request->requestBody->perSsidSettings->five->minBitrate = 6358.68;
    $request->requestBody->perSsidSettings->six = new CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings6();
    $request->requestBody->perSsidSettings->six->bandOperationMode = CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings6BandOperationModeEnum::FIVEGHZ;
    $request->requestBody->perSsidSettings->six->bandSteeringEnabled = false;
    $request->requestBody->perSsidSettings->six->minBitrate = 4826.28;
    $request->requestBody->perSsidSettings->seven = new CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings7();
    $request->requestBody->perSsidSettings->seven->bandOperationMode = CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings7BandOperationModeEnum::DUAL;
    $request->requestBody->perSsidSettings->seven->bandSteeringEnabled = false;
    $request->requestBody->perSsidSettings->seven->minBitrate = 9775.83;
    $request->requestBody->perSsidSettings->eight = new CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings8();
    $request->requestBody->perSsidSettings->eight->bandOperationMode = CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings8BandOperationModeEnum::FIVEGHZ;
    $request->requestBody->perSsidSettings->eight->bandSteeringEnabled = false;
    $request->requestBody->perSsidSettings->eight->minBitrate = 2477.67;
    $request->requestBody->perSsidSettings->nine = new CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings9();
    $request->requestBody->perSsidSettings->nine->bandOperationMode = CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings9BandOperationModeEnum::FIVEGHZ;
    $request->requestBody->perSsidSettings->nine->bandSteeringEnabled = false;
    $request->requestBody->perSsidSettings->nine->minBitrate = 6750.58;
    $request->requestBody->transmission = new CreateNetworkWirelessRfProfileRequestBodyTransmission();
    $request->requestBody->transmission->enabled = false;
    $request->requestBody->twoFourGhzSettings = new CreateNetworkWirelessRfProfileRequestBodyTwoFourGhzSettings();
    $request->requestBody->twoFourGhzSettings->axEnabled = false;
    $request->requestBody->twoFourGhzSettings->maxPower = 378268;
    $request->requestBody->twoFourGhzSettings->minBitrate = 9873.71;
    $request->requestBody->twoFourGhzSettings->minPower = 657862;
    $request->requestBody->twoFourGhzSettings->rxsop = 925994;
    $request->requestBody->twoFourGhzSettings->validAutoChannels = [
        252567,
        900368,
    ];
    $request->networkId = 'distinctio';

    $response = $sdk->configure->createNetworkWirelessRfProfile($request);

    if ($response->createNetworkWirelessRfProfile201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createNetworkWirelessSsidIdentityPsk

Create an Identity PSK

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkWirelessSsidIdentityPskRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkWirelessSsidIdentityPskRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateNetworkWirelessSsidIdentityPskRequest();
    $request->requestBody = new CreateNetworkWirelessSsidIdentityPskRequestBody();
    $request->requestBody->groupPolicyId = 'maiores';
    $request->requestBody->name = 'Sandra Rowe Sr.';
    $request->requestBody->passphrase = 'voluptatibus';
    $request->networkId = 'doloremque';
    $request->number = 'sed';

    $response = $sdk->configure->createNetworkWirelessSsidIdentityPsk($request);

    if ($response->createNetworkWirelessSsidIdentityPsk201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createOrganization

Create a new organization

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrganizationRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrganizationRequestBodyManagement;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrganizationRequestBodyManagementDetails;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateOrganizationRequestBody();
    $request->management = new CreateOrganizationRequestBodyManagement();
    $request->management->details = [
        new CreateOrganizationRequestBodyManagementDetails(),
    ];
    $request->name = 'Arnold Hegmann';

    $response = $sdk->configure->createOrganization($request);

    if ($response->createOrganization201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createOrganizationActionBatch

Create an action batch

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrganizationActionBatchRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrganizationActionBatchRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrganizationActionBatchRequestBodyActions;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateOrganizationActionBatchRequest();
    $request->requestBody = new CreateOrganizationActionBatchRequestBody();
    $request->requestBody->actions = [
        new CreateOrganizationActionBatchRequestBodyActions(),
    ];
    $request->requestBody->confirmed = false;
    $request->requestBody->synchronous = false;
    $request->organizationId = 'nisi';

    $response = $sdk->configure->createOrganizationActionBatch($request);

    if ($response->createOrganizationActionBatch201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createOrganizationAdaptivePolicyAcl

Creates new adaptive policy ACL

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrganizationAdaptivePolicyAclRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrganizationAdaptivePolicyAclRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrganizationAdaptivePolicyAclRequestBodyIpVersionEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrganizationAdaptivePolicyAclRequestBodyRules;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrganizationAdaptivePolicyAclRequestBodyRulesPolicyEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrganizationAdaptivePolicyAclRequestBodyRulesProtocolEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateOrganizationAdaptivePolicyAclRequest();
    $request->requestBody = new CreateOrganizationAdaptivePolicyAclRequestBody();
    $request->requestBody->description = 'dignissimos';
    $request->requestBody->ipVersion = CreateOrganizationAdaptivePolicyAclRequestBodyIpVersionEnum::IPV6;
    $request->requestBody->name = 'Miss Gerald Orn';
    $request->requestBody->rules = [
        new CreateOrganizationAdaptivePolicyAclRequestBodyRules(),
        new CreateOrganizationAdaptivePolicyAclRequestBodyRules(),
        new CreateOrganizationAdaptivePolicyAclRequestBodyRules(),
    ];
    $request->organizationId = 'possimus';

    $response = $sdk->configure->createOrganizationAdaptivePolicyAcl($request);

    if ($response->createOrganizationAdaptivePolicyAcl200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createOrganizationAdaptivePolicyGroup

Creates a new adaptive policy group

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrganizationAdaptivePolicyGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrganizationAdaptivePolicyGroupRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrganizationAdaptivePolicyGroupRequestBodyPolicyObjects;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateOrganizationAdaptivePolicyGroupRequest();
    $request->requestBody = new CreateOrganizationAdaptivePolicyGroupRequestBody();
    $request->requestBody->description = 'maiores';
    $request->requestBody->name = 'Miss Daisy Willms';
    $request->requestBody->policyObjects = [
        new CreateOrganizationAdaptivePolicyGroupRequestBodyPolicyObjects(),
        new CreateOrganizationAdaptivePolicyGroupRequestBodyPolicyObjects(),
        new CreateOrganizationAdaptivePolicyGroupRequestBodyPolicyObjects(),
    ];
    $request->requestBody->sgt = 404774;
    $request->organizationId = 'repellendus';

    $response = $sdk->configure->createOrganizationAdaptivePolicyGroup($request);

    if ($response->createOrganizationAdaptivePolicyGroup201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createOrganizationAdaptivePolicyPolicy

Add an Adaptive Policy

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrganizationAdaptivePolicyPolicyRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrganizationAdaptivePolicyPolicyRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrganizationAdaptivePolicyPolicyRequestBodyAcls;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrganizationAdaptivePolicyPolicyRequestBodyDestinationGroup;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrganizationAdaptivePolicyPolicyRequestBodyLastEntryRuleEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrganizationAdaptivePolicyPolicyRequestBodySourceGroup;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateOrganizationAdaptivePolicyPolicyRequest();
    $request->requestBody = new CreateOrganizationAdaptivePolicyPolicyRequestBody();
    $request->requestBody->acls = [
        new CreateOrganizationAdaptivePolicyPolicyRequestBodyAcls(),
        new CreateOrganizationAdaptivePolicyPolicyRequestBodyAcls(),
        new CreateOrganizationAdaptivePolicyPolicyRequestBodyAcls(),
    ];
    $request->requestBody->destinationGroup = new CreateOrganizationAdaptivePolicyPolicyRequestBodyDestinationGroup();
    $request->requestBody->destinationGroup->id = '0c364b7c-15df-4bac-a188-b1c4ee2c8c6c';
    $request->requestBody->destinationGroup->name = 'Dr. Ruben Braun';
    $request->requestBody->destinationGroup->sgt = 875452;
    $request->requestBody->lastEntryRule = CreateOrganizationAdaptivePolicyPolicyRequestBodyLastEntryRuleEnum::DENY;
    $request->requestBody->sourceGroup = new CreateOrganizationAdaptivePolicyPolicyRequestBodySourceGroup();
    $request->requestBody->sourceGroup->id = '1c7cbdb6-eec7-4437-8ba2-5317747dc915';
    $request->requestBody->sourceGroup->name = 'Gilberto Corkery';
    $request->requestBody->sourceGroup->sgt = 998355;
    $request->organizationId = 'nostrum';

    $response = $sdk->configure->createOrganizationAdaptivePolicyPolicy($request);

    if ($response->createOrganizationAdaptivePolicyPolicy201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createOrganizationAdmin

Create a new dashboard administrator

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrganizationAdminRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrganizationAdminRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrganizationAdminRequestBodyAuthenticationMethodEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrganizationAdminRequestBodyNetworks;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrganizationAdminRequestBodyOrgAccessEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrganizationAdminRequestBodyTags;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrganizationAdminRequestBodyTagsAccessEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateOrganizationAdminRequest();
    $request->requestBody = new CreateOrganizationAdminRequestBody();
    $request->requestBody->authenticationMethod = CreateOrganizationAdminRequestBodyAuthenticationMethodEnum::EMAIL;
    $request->requestBody->email = 'Harvey23@hotmail.com';
    $request->requestBody->name = 'Benny Beier';
    $request->requestBody->networks = [
        new CreateOrganizationAdminRequestBodyNetworks(),
        new CreateOrganizationAdminRequestBodyNetworks(),
        new CreateOrganizationAdminRequestBodyNetworks(),
    ];
    $request->requestBody->orgAccess = CreateOrganizationAdminRequestBodyOrgAccessEnum::READ_ONLY;
    $request->requestBody->tags = [
        new CreateOrganizationAdminRequestBodyTags(),
    ];
    $request->organizationId = 'sapiente';

    $response = $sdk->configure->createOrganizationAdmin($request);

    if ($response->createOrganizationAdmin201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createOrganizationAlertsProfile

Create an organization-wide alert configuration

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrganizationAlertsProfileRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrganizationAlertsProfileRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrganizationAlertsProfileRequestBodyAlertCondition;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrganizationAlertsProfileRequestBodyAlertConditionInterfaceEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrganizationAlertsProfileRequestBodyRecipients;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrganizationAlertsProfileRequestBodyTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateOrganizationAlertsProfileRequest();
    $request->requestBody = new CreateOrganizationAlertsProfileRequestBody();
    $request->requestBody->alertCondition = new CreateOrganizationAlertsProfileRequestBodyAlertCondition();
    $request->requestBody->alertCondition->bitRateBps = 204373;
    $request->requestBody->alertCondition->duration = 640565;
    $request->requestBody->alertCondition->interface = CreateOrganizationAlertsProfileRequestBodyAlertConditionInterfaceEnum::WAN1;
    $request->requestBody->alertCondition->jitterMs = 688649;
    $request->requestBody->alertCondition->latencyMs = 496578;
    $request->requestBody->alertCondition->lossRatio = 424.54;
    $request->requestBody->alertCondition->mos = 201.41;
    $request->requestBody->alertCondition->window = 514480;
    $request->requestBody->description = 'iusto';
    $request->requestBody->networkTags = [
        'molestiae',
        'quis',
        'iure',
    ];
    $request->requestBody->recipients = new CreateOrganizationAlertsProfileRequestBodyRecipients();
    $request->requestBody->recipients->emails = [
        'quaerat',
    ];
    $request->requestBody->recipients->httpServerIds = [
        'sapiente',
    ];
    $request->requestBody->type = CreateOrganizationAlertsProfileRequestBodyTypeEnum::VOIP_MOS;
    $request->organizationId = 'est';

    $response = $sdk->configure->createOrganizationAlertsProfile($request);

    if ($response->createOrganizationAlertsProfile201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createOrganizationBrandingPolicy

Add a new branding policy to an organization

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrganizationBrandingPolicyRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrganizationBrandingPolicyRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrganizationBrandingPolicyRequestBodyAdminSettings;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrganizationBrandingPolicyRequestBodyAdminSettingsAppliesToEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrganizationBrandingPolicyRequestBodyCustomLogo;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrganizationBrandingPolicyRequestBodyCustomLogoImage;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrganizationBrandingPolicyRequestBodyCustomLogoImageFormatEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrganizationBrandingPolicyRequestBodyHelpSettings;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrganizationBrandingPolicyRequestBodyHelpSettingsApiDocsSubtabEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrganizationBrandingPolicyRequestBodyHelpSettingsCasesSubtabEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrganizationBrandingPolicyRequestBodyHelpSettingsCommunitySubtabEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrganizationBrandingPolicyRequestBodyHelpSettingsDataProtectionRequestsSubtabEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrganizationBrandingPolicyRequestBodyHelpSettingsFirewallInfoSubtabEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrganizationBrandingPolicyRequestBodyHelpSettingsGetHelpSubtabEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrganizationBrandingPolicyRequestBodyHelpSettingsHardwareReplacementsSubtabEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrganizationBrandingPolicyRequestBodyHelpSettingsHelpTabEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrganizationBrandingPolicyRequestBodyHelpSettingsHelpWidgetEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrganizationBrandingPolicyRequestBodyHelpSettingsNewFeaturesSubtabEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrganizationBrandingPolicyRequestBodyHelpSettingsSmForumsEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrganizationBrandingPolicyRequestBodyHelpSettingsUniversalSearchKnowledgeBaseSearchEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateOrganizationBrandingPolicyRequest();
    $request->requestBody = new CreateOrganizationBrandingPolicyRequestBody();
    $request->requestBody->adminSettings = new CreateOrganizationBrandingPolicyRequestBodyAdminSettings();
    $request->requestBody->adminSettings->appliesTo = CreateOrganizationBrandingPolicyRequestBodyAdminSettingsAppliesToEnum::ALL_ADMINS_OF_NETWORKS;
    $request->requestBody->adminSettings->values = [
        'provident',
        'laudantium',
        'nam',
        'nemo',
    ];
    $request->requestBody->customLogo = new CreateOrganizationBrandingPolicyRequestBodyCustomLogo();
    $request->requestBody->customLogo->enabled = false;
    $request->requestBody->customLogo->image = new CreateOrganizationBrandingPolicyRequestBodyCustomLogoImage();
    $request->requestBody->customLogo->image->contents = 'enim';
    $request->requestBody->customLogo->image->format = CreateOrganizationBrandingPolicyRequestBodyCustomLogoImageFormatEnum::JPG;
    $request->requestBody->enabled = false;
    $request->requestBody->helpSettings = new CreateOrganizationBrandingPolicyRequestBodyHelpSettings();
    $request->requestBody->helpSettings->apiDocsSubtab = CreateOrganizationBrandingPolicyRequestBodyHelpSettingsApiDocsSubtabEnum::DEFAULT_OR_INHERIT;
    $request->requestBody->helpSettings->casesSubtab = CreateOrganizationBrandingPolicyRequestBodyHelpSettingsCasesSubtabEnum::DEFAULT_OR_INHERIT;
    $request->requestBody->helpSettings->ciscoMerakiProductDocumentation = 'perferendis';
    $request->requestBody->helpSettings->communitySubtab = CreateOrganizationBrandingPolicyRequestBodyHelpSettingsCommunitySubtabEnum::HIDE;
    $request->requestBody->helpSettings->dataProtectionRequestsSubtab = CreateOrganizationBrandingPolicyRequestBodyHelpSettingsDataProtectionRequestsSubtabEnum::DEFAULT_OR_INHERIT;
    $request->requestBody->helpSettings->firewallInfoSubtab = CreateOrganizationBrandingPolicyRequestBodyHelpSettingsFirewallInfoSubtabEnum::SHOW;
    $request->requestBody->helpSettings->getHelpSubtab = CreateOrganizationBrandingPolicyRequestBodyHelpSettingsGetHelpSubtabEnum::DEFAULT_OR_INHERIT;
    $request->requestBody->helpSettings->getHelpSubtabKnowledgeBaseSearch = 'doloremque';
    $request->requestBody->helpSettings->hardwareReplacementsSubtab = CreateOrganizationBrandingPolicyRequestBodyHelpSettingsHardwareReplacementsSubtabEnum::SHOW;
    $request->requestBody->helpSettings->helpTab = CreateOrganizationBrandingPolicyRequestBodyHelpSettingsHelpTabEnum::SHOW;
    $request->requestBody->helpSettings->helpWidget = CreateOrganizationBrandingPolicyRequestBodyHelpSettingsHelpWidgetEnum::HIDE;
    $request->requestBody->helpSettings->newFeaturesSubtab = CreateOrganizationBrandingPolicyRequestBodyHelpSettingsNewFeaturesSubtabEnum::SHOW;
    $request->requestBody->helpSettings->smForums = CreateOrganizationBrandingPolicyRequestBodyHelpSettingsSmForumsEnum::SHOW;
    $request->requestBody->helpSettings->supportContactInfo = 'nisi';
    $request->requestBody->helpSettings->universalSearchKnowledgeBaseSearch = CreateOrganizationBrandingPolicyRequestBodyHelpSettingsUniversalSearchKnowledgeBaseSearchEnum::SHOW;
    $request->requestBody->name = 'Ismael Hudson';
    $request->organizationId = 'maiores';

    $response = $sdk->configure->createOrganizationBrandingPolicy($request);

    if ($response->createOrganizationBrandingPolicy201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createOrganizationCameraCustomAnalyticsArtifact

Create custom analytics artifact. Returns an artifact upload URL with expiry time. Upload the artifact file with a put request to the returned upload URL before its expiry.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrganizationCameraCustomAnalyticsArtifactRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrganizationCameraCustomAnalyticsArtifactRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateOrganizationCameraCustomAnalyticsArtifactRequest();
    $request->requestBody = new CreateOrganizationCameraCustomAnalyticsArtifactRequestBody();
    $request->requestBody->name = 'Kelley Schneider V';
    $request->organizationId = 'adipisci';

    $response = $sdk->configure->createOrganizationCameraCustomAnalyticsArtifact($request);

    if ($response->createOrganizationCameraCustomAnalyticsArtifact201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createOrganizationConfigTemplate

Create a new configuration template

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrganizationConfigTemplateRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrganizationConfigTemplateRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateOrganizationConfigTemplateRequest();
    $request->requestBody = new CreateOrganizationConfigTemplateRequestBody();
    $request->requestBody->copyFromNetworkId = 'accusantium';
    $request->requestBody->name = 'Kristie Mohr';
    $request->requestBody->timeZone = 'cum';
    $request->organizationId = 'id';

    $response = $sdk->configure->createOrganizationConfigTemplate($request);

    if ($response->createOrganizationConfigTemplate201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createOrganizationEarlyAccessFeaturesOptIn

Create a new early access feature opt-in for an organization

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrganizationEarlyAccessFeaturesOptInRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrganizationEarlyAccessFeaturesOptInRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateOrganizationEarlyAccessFeaturesOptInRequest();
    $request->requestBody = new CreateOrganizationEarlyAccessFeaturesOptInRequestBody();
    $request->requestBody->limitScopeToNetworks = [
        'fugit',
        'ipsam',
        'nostrum',
        'sequi',
    ];
    $request->requestBody->shortName = 'voluptatum';
    $request->organizationId = 'quasi';

    $response = $sdk->configure->createOrganizationEarlyAccessFeaturesOptIn($request);

    if ($response->createOrganizationEarlyAccessFeaturesOptIn200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createOrganizationInsightMonitoredMediaServer

Add a media server to be monitored for this organization. Only valid for organizations with Meraki Insight.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrganizationInsightMonitoredMediaServerRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrganizationInsightMonitoredMediaServerRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateOrganizationInsightMonitoredMediaServerRequest();
    $request->requestBody = new CreateOrganizationInsightMonitoredMediaServerRequestBody();
    $request->requestBody->address = '7242 Bayer Valley';
    $request->requestBody->bestEffortMonitoringEnabled = false;
    $request->requestBody->name = 'Steve Barrows';
    $request->organizationId = 'ea';

    $response = $sdk->configure->createOrganizationInsightMonitoredMediaServer($request);

    if ($response->createOrganizationInsightMonitoredMediaServer201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createOrganizationInventoryOnboardingCloudMonitoringExportEvent

Imports event logs related to the onboarding app into elastisearch

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrganizationInventoryOnboardingCloudMonitoringExportEventRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrganizationInventoryOnboardingCloudMonitoringExportEventRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateOrganizationInventoryOnboardingCloudMonitoringExportEventRequest();
    $request->requestBody = new CreateOrganizationInventoryOnboardingCloudMonitoringExportEventRequestBody();
    $request->requestBody->logEvent = 'eos';
    $request->requestBody->request = 'aliquam';
    $request->requestBody->targetOS = 'blanditiis';
    $request->requestBody->timestamp = 943063;
    $request->organizationId = 'maiores';

    $response = $sdk->configure->createOrganizationInventoryOnboardingCloudMonitoringExportEvent($request);

    if ($response->createOrganizationInventoryOnboardingCloudMonitoringExportEvent202ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createOrganizationInventoryOnboardingCloudMonitoringImport

Commits the import operation to complete the onboarding of a device into Dashboard for monitoring.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrganizationInventoryOnboardingCloudMonitoringImportRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrganizationInventoryOnboardingCloudMonitoringImportRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrganizationInventoryOnboardingCloudMonitoringImportRequestBodyDevices;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateOrganizationInventoryOnboardingCloudMonitoringImportRequest();
    $request->requestBody = new CreateOrganizationInventoryOnboardingCloudMonitoringImportRequestBody();
    $request->requestBody->devices = [
        new CreateOrganizationInventoryOnboardingCloudMonitoringImportRequestBodyDevices(),
        new CreateOrganizationInventoryOnboardingCloudMonitoringImportRequestBodyDevices(),
        new CreateOrganizationInventoryOnboardingCloudMonitoringImportRequestBodyDevices(),
        new CreateOrganizationInventoryOnboardingCloudMonitoringImportRequestBodyDevices(),
    ];
    $request->organizationId = 'autem';

    $response = $sdk->configure->createOrganizationInventoryOnboardingCloudMonitoringImport($request);

    if ($response->createOrganizationInventoryOnboardingCloudMonitoringImport201ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createOrganizationInventoryOnboardingCloudMonitoringPrepare

Initiates or updates an import session. An import ID will be generated and used when you are ready to commit the import.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevices;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesTunnel;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesUser;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesVty;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesVtyAccessList;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesVtyAccessListVtyIn;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesVtyAccessListVtyOut;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesVtyAuthentication;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesVtyAuthenticationGroup;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesVtyAuthorization;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesVtyAuthorizationGroup;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequest();
    $request->requestBody = new CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBody();
    $request->requestBody->devices = [
        new CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevices(),
    ];
    $request->organizationId = 'cupiditate';

    $response = $sdk->configure->createOrganizationInventoryOnboardingCloudMonitoringPrepare($request);

    if ($response->createOrganizationInventoryOnboardingCloudMonitoringPrepare201ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createOrganizationNetwork

Create a network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrganizationNetworkRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrganizationNetworkRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrganizationNetworkRequestBodyProductTypesEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateOrganizationNetworkRequest();
    $request->requestBody = new CreateOrganizationNetworkRequestBody();
    $request->requestBody->copyFromNetworkId = 'animi';
    $request->requestBody->name = 'Albert Bednar';
    $request->requestBody->notes = 'assumenda';
    $request->requestBody->productTypes = [
        CreateOrganizationNetworkRequestBodyProductTypesEnum::SWITCH,
        CreateOrganizationNetworkRequestBodyProductTypesEnum::SYSTEMS_MANAGER,
        CreateOrganizationNetworkRequestBodyProductTypesEnum::CELLULAR_GATEWAY,
        CreateOrganizationNetworkRequestBodyProductTypesEnum::CAMERA,
    ];
    $request->requestBody->tags = [
        'voluptate',
        'nisi',
    ];
    $request->requestBody->timeZone = 'aliquid';
    $request->organizationId = 'provident';

    $response = $sdk->configure->createOrganizationNetwork($request);

    if ($response->createOrganizationNetwork201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createOrganizationPolicyObject

Creates a new Policy Object.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrganizationPolicyObjectRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrganizationPolicyObjectRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateOrganizationPolicyObjectRequest();
    $request->requestBody = new CreateOrganizationPolicyObjectRequestBody();
    $request->requestBody->category = 'laboriosam';
    $request->requestBody->cidr = 'accusamus';
    $request->requestBody->fqdn = 'ab';
    $request->requestBody->groupIds = [
        790305,
        53529,
        4929,
        181622,
    ];
    $request->requestBody->ip = 'consequuntur';
    $request->requestBody->mask = 'vitae';
    $request->requestBody->name = 'Johnny Farrell';
    $request->requestBody->type = 'praesentium';
    $request->organizationId = 'unde';

    $response = $sdk->configure->createOrganizationPolicyObject($request);

    if ($response->createOrganizationPolicyObject201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createOrganizationPolicyObjectsGroup

Creates a new Policy Object Group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrganizationPolicyObjectsGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrganizationPolicyObjectsGroupRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateOrganizationPolicyObjectsGroupRequest();
    $request->requestBody = new CreateOrganizationPolicyObjectsGroupRequestBody();
    $request->requestBody->category = 'similique';
    $request->requestBody->name = 'Garry Fahey';
    $request->requestBody->objectIds = [
        836053,
        662857,
        542017,
        845365,
    ];
    $request->organizationId = 'sit';

    $response = $sdk->configure->createOrganizationPolicyObjectsGroup($request);

    if ($response->createOrganizationPolicyObjectsGroup201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createOrganizationSamlIdp

Create a SAML IdP for your organization.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrganizationSamlIdpRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrganizationSamlIdpRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateOrganizationSamlIdpRequest();
    $request->requestBody = new CreateOrganizationSamlIdpRequestBody();
    $request->requestBody->sloLogoutUrl = 'quo';
    $request->requestBody->x509certSha1Fingerprint = 'veniam';
    $request->organizationId = 'aliquam';

    $response = $sdk->configure->createOrganizationSamlIdp($request);

    if ($response->createOrganizationSamlIdp201ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createOrganizationSamlRole

Create a SAML role

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrganizationSamlRoleRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrganizationSamlRoleRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrganizationSamlRoleRequestBodyNetworks;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrganizationSamlRoleRequestBodyNetworksAccessEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrganizationSamlRoleRequestBodyOrgAccessEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrganizationSamlRoleRequestBodyTags;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrganizationSamlRoleRequestBodyTagsAccessEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateOrganizationSamlRoleRequest();
    $request->requestBody = new CreateOrganizationSamlRoleRequestBody();
    $request->requestBody->networks = [
        new CreateOrganizationSamlRoleRequestBodyNetworks(),
        new CreateOrganizationSamlRoleRequestBodyNetworks(),
        new CreateOrganizationSamlRoleRequestBodyNetworks(),
    ];
    $request->requestBody->orgAccess = CreateOrganizationSamlRoleRequestBodyOrgAccessEnum::READ_ONLY;
    $request->requestBody->role = 'earum';
    $request->requestBody->tags = [
        new CreateOrganizationSamlRoleRequestBodyTags(),
    ];
    $request->organizationId = 'ipsum';

    $response = $sdk->configure->createOrganizationSamlRole($request);

    if ($response->createOrganizationSamlRole201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deferNetworkFirmwareUpgradesStagedEvents

Postpone by 1 week all pending staged upgrade stages for a network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeferNetworkFirmwareUpgradesStagedEventsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeferNetworkFirmwareUpgradesStagedEventsRequest();
    $request->networkId = 'alias';

    $response = $sdk->configure->deferNetworkFirmwareUpgradesStagedEvents($request);

    if ($response->deferNetworkFirmwareUpgradesStagedEvents200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteDeviceSwitchRoutingInterface

Delete a layer 3 interface from the switch

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteDeviceSwitchRoutingInterfaceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteDeviceSwitchRoutingInterfaceRequest();
    $request->interfaceId = 'doloremque';
    $request->serial = 'tempora';

    $response = $sdk->configure->deleteDeviceSwitchRoutingInterface($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteDeviceSwitchRoutingStaticRoute

Delete a layer 3 static route for a switch

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteDeviceSwitchRoutingStaticRouteRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteDeviceSwitchRoutingStaticRouteRequest();
    $request->serial = 'perspiciatis';
    $request->staticRouteId = 'quam';

    $response = $sdk->configure->deleteDeviceSwitchRoutingStaticRoute($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteNetwork

Delete a network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteNetworkRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteNetworkRequest();
    $request->networkId = 'atque';

    $response = $sdk->configure->deleteNetwork($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteNetworkAppliancePrefixesDelegatedStatic

Delete a static delegated prefix from a network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteNetworkAppliancePrefixesDelegatedStaticRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteNetworkAppliancePrefixesDelegatedStaticRequest();
    $request->networkId = 'officia';
    $request->staticDelegatedPrefixId = 'ex';

    $response = $sdk->configure->deleteNetworkAppliancePrefixesDelegatedStatic($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteNetworkApplianceStaticRoute

Delete a static route from an MX or teleworker network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteNetworkApplianceStaticRouteRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteNetworkApplianceStaticRouteRequest();
    $request->networkId = 'architecto';
    $request->staticRouteId = 'a';

    $response = $sdk->configure->deleteNetworkApplianceStaticRoute($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteNetworkApplianceTrafficShapingCustomPerformanceClass

Delete a custom performance class from an MX network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteNetworkApplianceTrafficShapingCustomPerformanceClassRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteNetworkApplianceTrafficShapingCustomPerformanceClassRequest();
    $request->customPerformanceClassId = 'laborum';
    $request->networkId = 'veritatis';

    $response = $sdk->configure->deleteNetworkApplianceTrafficShapingCustomPerformanceClass($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteNetworkApplianceVlan

Delete a VLAN from a network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteNetworkApplianceVlanRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteNetworkApplianceVlanRequest();
    $request->networkId = 'quod';
    $request->vlanId = 'a';

    $response = $sdk->configure->deleteNetworkApplianceVlan($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteNetworkCameraQualityRetentionProfile

Delete an existing quality retention profile for this network.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteNetworkCameraQualityRetentionProfileRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteNetworkCameraQualityRetentionProfileRequest();
    $request->networkId = 'qui';
    $request->qualityRetentionProfileId = 'accusantium';

    $response = $sdk->configure->deleteNetworkCameraQualityRetentionProfile($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteNetworkCameraWirelessProfile

Delete an existing camera wireless profile for this network.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteNetworkCameraWirelessProfileRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteNetworkCameraWirelessProfileRequest();
    $request->networkId = 'commodi';
    $request->wirelessProfileId = 'atque';

    $response = $sdk->configure->deleteNetworkCameraWirelessProfile($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteNetworkFirmwareUpgradesStagedGroup

Delete a Staged Upgrade Group

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteNetworkFirmwareUpgradesStagedGroupRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteNetworkFirmwareUpgradesStagedGroupRequest();
    $request->groupId = 'totam';
    $request->networkId = 'tenetur';

    $response = $sdk->configure->deleteNetworkFirmwareUpgradesStagedGroup($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteNetworkFloorPlan

Destroy a floor plan

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteNetworkFloorPlanRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteNetworkFloorPlanRequest();
    $request->floorPlanId = 'voluptate';
    $request->networkId = 'quam';

    $response = $sdk->configure->deleteNetworkFloorPlan($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteNetworkGroupPolicy

Delete a group policy

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteNetworkGroupPolicyRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteNetworkGroupPolicyRequest();
    $request->groupPolicyId = 'quod';
    $request->networkId = 'vitae';

    $response = $sdk->configure->deleteNetworkGroupPolicy($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteNetworkMerakiAuthUser

Deauthorize a user. To reauthorize a user after deauthorizing them, POST to this endpoint. (Currently, 802.1X RADIUS, splash guest, and client VPN users can be deauthorized.)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteNetworkMerakiAuthUserRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteNetworkMerakiAuthUserRequest();
    $request->merakiAuthUserId = 'sapiente';
    $request->networkId = 'reiciendis';

    $response = $sdk->configure->deleteNetworkMerakiAuthUser($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteNetworkMqttBroker

Delete an MQTT broker

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteNetworkMqttBrokerRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteNetworkMqttBrokerRequest();
    $request->mqttBrokerId = 'quod';
    $request->networkId = 'voluptate';

    $response = $sdk->configure->deleteNetworkMqttBroker($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteNetworkPiiRequest

Delete a restrict processing PII request

## ALTERNATE PATH

```
/organizations/{organizationId}/pii/requests/{requestId}
```

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteNetworkPiiRequestRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteNetworkPiiRequestRequest();
    $request->networkId = 'inventore';
    $request->requestId = 'facere';

    $response = $sdk->configure->deleteNetworkPiiRequest($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteNetworkSensorAlertsProfile

Deletes a sensor alert profile from a network.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteNetworkSensorAlertsProfileRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteNetworkSensorAlertsProfileRequest();
    $request->id = 'ca163f2a-3c80-4a97-bf33-4cddf857a9e6';
    $request->networkId = 'quasi';

    $response = $sdk->configure->deleteNetworkSensorAlertsProfile($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteNetworkSmTargetGroup

Delete a target group from a network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteNetworkSmTargetGroupRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteNetworkSmTargetGroupRequest();
    $request->networkId = 'quas';
    $request->targetGroupId = 'odio';

    $response = $sdk->configure->deleteNetworkSmTargetGroup($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteNetworkSmUserAccessDevice

Delete a User Access Device

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteNetworkSmUserAccessDeviceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteNetworkSmUserAccessDeviceRequest();
    $request->networkId = 'commodi';
    $request->userAccessDeviceId = 'porro';

    $response = $sdk->configure->deleteNetworkSmUserAccessDevice($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteNetworkSwitchAccessPolicy

Delete an access policy for a switch network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteNetworkSwitchAccessPolicyRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteNetworkSwitchAccessPolicyRequest();
    $request->accessPolicyNumber = 'aliquid';
    $request->networkId = 'mollitia';

    $response = $sdk->configure->deleteNetworkSwitchAccessPolicy($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteNetworkSwitchDhcpServerPolicyArpInspectionTrustedServer

Remove a server from being trusted by Dynamic ARP Inspection on this network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerRequest();
    $request->networkId = 'quidem';
    $request->trustedServerId = 'explicabo';

    $response = $sdk->configure->deleteNetworkSwitchDhcpServerPolicyArpInspectionTrustedServer($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteNetworkSwitchLinkAggregation

Split a link aggregation group into separate ports

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteNetworkSwitchLinkAggregationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteNetworkSwitchLinkAggregationRequest();
    $request->linkAggregationId = 'et';
    $request->networkId = 'nulla';

    $response = $sdk->configure->deleteNetworkSwitchLinkAggregation($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteNetworkSwitchPortSchedule

Delete a switch port schedule

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteNetworkSwitchPortScheduleRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteNetworkSwitchPortScheduleRequest();
    $request->networkId = 'magni';
    $request->portScheduleId = 'natus';

    $response = $sdk->configure->deleteNetworkSwitchPortSchedule($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteNetworkSwitchQosRule

Delete a quality of service rule

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteNetworkSwitchQosRuleRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteNetworkSwitchQosRuleRequest();
    $request->networkId = 'illum';
    $request->qosRuleId = 'a';

    $response = $sdk->configure->deleteNetworkSwitchQosRule($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteNetworkSwitchRoutingMulticastRendezvousPoint

Delete a multicast rendezvous point

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteNetworkSwitchRoutingMulticastRendezvousPointRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteNetworkSwitchRoutingMulticastRendezvousPointRequest();
    $request->networkId = 'impedit';
    $request->rendezvousPointId = 'unde';

    $response = $sdk->configure->deleteNetworkSwitchRoutingMulticastRendezvousPoint($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteNetworkSwitchStack

Delete a stack

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteNetworkSwitchStackRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteNetworkSwitchStackRequest();
    $request->networkId = 'ut';
    $request->switchStackId = 'facere';

    $response = $sdk->configure->deleteNetworkSwitchStack($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteNetworkSwitchStackRoutingInterface

Delete a layer 3 interface from a switch stack

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteNetworkSwitchStackRoutingInterfaceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteNetworkSwitchStackRoutingInterfaceRequest();
    $request->interfaceId = 'voluptas';
    $request->networkId = 'doloribus';
    $request->switchStackId = 'recusandae';

    $response = $sdk->configure->deleteNetworkSwitchStackRoutingInterface($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteNetworkSwitchStackRoutingStaticRoute

Delete a layer 3 static route for a switch stack

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteNetworkSwitchStackRoutingStaticRouteRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteNetworkSwitchStackRoutingStaticRouteRequest();
    $request->networkId = 'quisquam';
    $request->staticRouteId = 'facere';
    $request->switchStackId = 'dignissimos';

    $response = $sdk->configure->deleteNetworkSwitchStackRoutingStaticRoute($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteNetworkWebhooksHttpServer

Delete an HTTP server from a network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteNetworkWebhooksHttpServerRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteNetworkWebhooksHttpServerRequest();
    $request->httpServerId = 'iste';
    $request->networkId = 'provident';

    $response = $sdk->configure->deleteNetworkWebhooksHttpServer($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteNetworkWebhooksPayloadTemplate

Destroy a webhook payload template for a network. Does not work for included templates ('wpt_00001', 'wpt_00002', 'wpt_00003', 'wpt_00004', 'wpt_00005' or 'wpt_00006')

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteNetworkWebhooksPayloadTemplateRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteNetworkWebhooksPayloadTemplateRequest();
    $request->networkId = 'dolor';
    $request->payloadTemplateId = 'sint';

    $response = $sdk->configure->deleteNetworkWebhooksPayloadTemplate($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteNetworkWirelessRfProfile

Delete a RF Profile

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteNetworkWirelessRfProfileRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteNetworkWirelessRfProfileRequest();
    $request->networkId = 'aperiam';
    $request->rfProfileId = 'eaque';

    $response = $sdk->configure->deleteNetworkWirelessRfProfile($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteNetworkWirelessSsidIdentityPsk

Delete an Identity PSK

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteNetworkWirelessSsidIdentityPskRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteNetworkWirelessSsidIdentityPskRequest();
    $request->identityPskId = 'eum';
    $request->networkId = 'laboriosam';
    $request->number = 'laborum';

    $response = $sdk->configure->deleteNetworkWirelessSsidIdentityPsk($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteOrganization

Delete an organization

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteOrganizationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteOrganizationRequest();
    $request->organizationId = 'autem';

    $response = $sdk->configure->deleteOrganization($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteOrganizationActionBatch

Delete an action batch

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteOrganizationActionBatchRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteOrganizationActionBatchRequest();
    $request->actionBatchId = 'assumenda';
    $request->organizationId = 'explicabo';

    $response = $sdk->configure->deleteOrganizationActionBatch($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteOrganizationAdaptivePolicyAcl

Deletes the specified adaptive policy ACL. Note this adaptive policy ACL will also be removed from policies using it.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteOrganizationAdaptivePolicyAclRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteOrganizationAdaptivePolicyAclRequest();
    $request->aclId = 'fugiat';
    $request->organizationId = 'doloremque';

    $response = $sdk->configure->deleteOrganizationAdaptivePolicyAcl($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteOrganizationAdaptivePolicyGroup

Deletes the specified adaptive policy group and any associated policies and references

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteOrganizationAdaptivePolicyGroupRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteOrganizationAdaptivePolicyGroupRequest();
    $request->id = '00355338-cec0-486f-a21e-9152cb311916';
    $request->organizationId = 'ducimus';

    $response = $sdk->configure->deleteOrganizationAdaptivePolicyGroup($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteOrganizationAdaptivePolicyPolicy

Delete an Adaptive Policy

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteOrganizationAdaptivePolicyPolicyRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteOrganizationAdaptivePolicyPolicyRequest();
    $request->id = 'b8e3c8db-0340-48d6-9364-ffd455906d12';
    $request->organizationId = 'commodi';

    $response = $sdk->configure->deleteOrganizationAdaptivePolicyPolicy($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteOrganizationAdmin

Revoke all access for a dashboard administrator within this organization

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteOrganizationAdminRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteOrganizationAdminRequest();
    $request->adminId = 'neque';
    $request->organizationId = 'quibusdam';

    $response = $sdk->configure->deleteOrganizationAdmin($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteOrganizationAlertsProfile

Removes an organization-wide alert config

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteOrganizationAlertsProfileRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteOrganizationAlertsProfileRequest();
    $request->alertConfigId = 'numquam';
    $request->organizationId = 'rem';

    $response = $sdk->configure->deleteOrganizationAlertsProfile($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteOrganizationBrandingPolicy

Delete a branding policy

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteOrganizationBrandingPolicyRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteOrganizationBrandingPolicyRequest();
    $request->brandingPolicyId = 'officiis';
    $request->organizationId = 'omnis';

    $response = $sdk->configure->deleteOrganizationBrandingPolicy($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteOrganizationCameraCustomAnalyticsArtifact

Delete Custom Analytics Artifact

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteOrganizationCameraCustomAnalyticsArtifactRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteOrganizationCameraCustomAnalyticsArtifactRequest();
    $request->artifactId = 'neque';
    $request->organizationId = 'corporis';

    $response = $sdk->configure->deleteOrganizationCameraCustomAnalyticsArtifact($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteOrganizationConfigTemplate

Remove a configuration template

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteOrganizationConfigTemplateRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteOrganizationConfigTemplateRequest();
    $request->configTemplateId = 'quod';
    $request->organizationId = 'dolores';

    $response = $sdk->configure->deleteOrganizationConfigTemplate($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteOrganizationEarlyAccessFeaturesOptIn

Delete an early access feature opt-in

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteOrganizationEarlyAccessFeaturesOptInRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteOrganizationEarlyAccessFeaturesOptInRequest();
    $request->optInId = 'placeat';
    $request->organizationId = 'excepturi';

    $response = $sdk->configure->deleteOrganizationEarlyAccessFeaturesOptIn($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteOrganizationInsightMonitoredMediaServer

Delete a monitored media server from this organization. Only valid for organizations with Meraki Insight.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteOrganizationInsightMonitoredMediaServerRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteOrganizationInsightMonitoredMediaServerRequest();
    $request->monitoredMediaServerId = 'recusandae';
    $request->organizationId = 'quos';

    $response = $sdk->configure->deleteOrganizationInsightMonitoredMediaServer($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteOrganizationPolicyObject

Deletes a Policy Object.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteOrganizationPolicyObjectRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteOrganizationPolicyObjectRequest();
    $request->organizationId = 'dicta';
    $request->policyObjectId = 'sapiente';

    $response = $sdk->configure->deleteOrganizationPolicyObject($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteOrganizationPolicyObjectsGroup

Deletes a Policy Object Group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteOrganizationPolicyObjectsGroupRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteOrganizationPolicyObjectsGroupRequest();
    $request->organizationId = 'ipsum';
    $request->policyObjectGroupId = 'consequatur';

    $response = $sdk->configure->deleteOrganizationPolicyObjectsGroup($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteOrganizationSamlIdp

Remove a SAML IdP in your organization.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteOrganizationSamlIdpRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteOrganizationSamlIdpRequest();
    $request->idpId = 'soluta';
    $request->organizationId = 'necessitatibus';

    $response = $sdk->configure->deleteOrganizationSamlIdp($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteOrganizationSamlRole

Remove a SAML role

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteOrganizationSamlRoleRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteOrganizationSamlRoleRequest();
    $request->organizationId = 'sequi';
    $request->samlRoleId = 'recusandae';

    $response = $sdk->configure->deleteOrganizationSamlRole($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteOrganizationUser

Delete a user and all of its authentication methods.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteOrganizationUserRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteOrganizationUserRequest();
    $request->organizationId = 'labore';
    $request->userId = 'adipisci';

    $response = $sdk->configure->deleteOrganizationUser($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDevice

Return a single device

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDeviceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDeviceRequest();
    $request->serial = 'magni';

    $response = $sdk->configure->getDevice($request);

    if ($response->getDevice200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeviceApplianceUplinksSettings

Return the uplink settings for an MX appliance

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDeviceApplianceUplinksSettingsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDeviceApplianceUplinksSettingsRequest();
    $request->serial = 'aperiam';

    $response = $sdk->configure->getDeviceApplianceUplinksSettings($request);

    if ($response->getDeviceApplianceUplinksSettings200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeviceCameraCustomAnalytics

Return custom analytics settings for a camera

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDeviceCameraCustomAnalyticsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDeviceCameraCustomAnalyticsRequest();
    $request->serial = 'dolores';

    $response = $sdk->configure->getDeviceCameraCustomAnalytics($request);

    if ($response->getDeviceCameraCustomAnalytics200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeviceCameraQualityAndRetention

Returns quality and retention settings for the given camera

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDeviceCameraQualityAndRetentionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDeviceCameraQualityAndRetentionRequest();
    $request->serial = 'illum';

    $response = $sdk->configure->getDeviceCameraQualityAndRetention($request);

    if ($response->getDeviceCameraQualityAndRetention200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeviceCameraSense

Returns sense settings for a given camera

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDeviceCameraSenseRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDeviceCameraSenseRequest();
    $request->serial = 'iusto';

    $response = $sdk->configure->getDeviceCameraSense($request);

    if ($response->getDeviceCameraSense200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeviceCameraSenseObjectDetectionModels

Returns the MV Sense object detection model list for the given camera

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDeviceCameraSenseObjectDetectionModelsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDeviceCameraSenseObjectDetectionModelsRequest();
    $request->serial = 'magni';

    $response = $sdk->configure->getDeviceCameraSenseObjectDetectionModels($request);

    if ($response->getDeviceCameraSenseObjectDetectionModels200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeviceCameraVideoLink

Returns video link to the specified camera. If a timestamp is supplied, it links to that timestamp.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDeviceCameraVideoLinkRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDeviceCameraVideoLinkRequest();
    $request->serial = 'beatae';
    $request->timestamp = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-09-05T13:55:43.105Z');

    $response = $sdk->configure->getDeviceCameraVideoLink($request);

    if ($response->getDeviceCameraVideoLink200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeviceCameraVideoSettings

Returns video settings for the given camera

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDeviceCameraVideoSettingsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDeviceCameraVideoSettingsRequest();
    $request->serial = 'voluptate';

    $response = $sdk->configure->getDeviceCameraVideoSettings($request);

    if ($response->getDeviceCameraVideoSettings200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeviceCameraWirelessProfiles

Returns wireless profile assigned to the given camera

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDeviceCameraWirelessProfilesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDeviceCameraWirelessProfilesRequest();
    $request->serial = 'vel';

    $response = $sdk->configure->getDeviceCameraWirelessProfiles($request);

    if ($response->getDeviceCameraWirelessProfiles200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeviceCellularGatewayLan

Show the LAN Settings of a MG

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDeviceCellularGatewayLanRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDeviceCellularGatewayLanRequest();
    $request->serial = 'minima';

    $response = $sdk->configure->getDeviceCellularGatewayLan($request);

    if ($response->getDeviceCellularGatewayLan200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeviceCellularGatewayPortForwardingRules

Returns the port forwarding rules for a single MG.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDeviceCellularGatewayPortForwardingRulesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDeviceCellularGatewayPortForwardingRulesRequest();
    $request->serial = 'sit';

    $response = $sdk->configure->getDeviceCellularGatewayPortForwardingRules($request);

    if ($response->getDeviceCellularGatewayPortForwardingRules200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeviceCellularSims

Return the SIM and APN configurations for a cellular device.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDeviceCellularSimsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDeviceCellularSimsRequest();
    $request->serial = 'vel';

    $response = $sdk->configure->getDeviceCellularSims($request);

    if ($response->getDeviceCellularSims200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeviceManagementInterface

Return the management interface settings for a device

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDeviceManagementInterfaceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDeviceManagementInterfaceRequest();
    $request->serial = 'laboriosam';

    $response = $sdk->configure->getDeviceManagementInterface($request);

    if ($response->getDeviceManagementInterface200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeviceSensorRelationships

List the sensor roles for a given sensor or camera device.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDeviceSensorRelationshipsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDeviceSensorRelationshipsRequest();
    $request->serial = 'quaerat';

    $response = $sdk->configure->getDeviceSensorRelationships($request);

    if ($response->getDeviceSensorRelationships200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeviceSwitchPort

Return a switch port

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDeviceSwitchPortRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDeviceSwitchPortRequest();
    $request->portId = 'quasi';
    $request->serial = 'rem';

    $response = $sdk->configure->getDeviceSwitchPort($request);

    if ($response->getDeviceSwitchPort200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeviceSwitchPorts

List the switch ports for a switch

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDeviceSwitchPortsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDeviceSwitchPortsRequest();
    $request->serial = 'dignissimos';

    $response = $sdk->configure->getDeviceSwitchPorts($request);

    if ($response->getDeviceSwitchPorts200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeviceSwitchRoutingInterface

Return a layer 3 interface for a switch

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDeviceSwitchRoutingInterfaceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDeviceSwitchRoutingInterfaceRequest();
    $request->interfaceId = 'doloremque';
    $request->serial = 'assumenda';

    $response = $sdk->configure->getDeviceSwitchRoutingInterface($request);

    if ($response->getDeviceSwitchRoutingInterface200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeviceSwitchRoutingInterfaceDhcp

Return a layer 3 interface DHCP configuration for a switch

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDeviceSwitchRoutingInterfaceDhcpRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDeviceSwitchRoutingInterfaceDhcpRequest();
    $request->interfaceId = 'provident';
    $request->serial = 'facere';

    $response = $sdk->configure->getDeviceSwitchRoutingInterfaceDhcp($request);

    if ($response->getDeviceSwitchRoutingInterfaceDhcp200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeviceSwitchRoutingInterfaces

List layer 3 interfaces for a switch. Those for a stack may be found under switch stack routing.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDeviceSwitchRoutingInterfacesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDeviceSwitchRoutingInterfacesRequest();
    $request->serial = 'sed';

    $response = $sdk->configure->getDeviceSwitchRoutingInterfaces($request);

    if ($response->getDeviceSwitchRoutingInterfaces200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeviceSwitchRoutingStaticRoute

Return a layer 3 static route for a switch

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDeviceSwitchRoutingStaticRouteRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDeviceSwitchRoutingStaticRouteRequest();
    $request->serial = 'inventore';
    $request->staticRouteId = 'voluptatibus';

    $response = $sdk->configure->getDeviceSwitchRoutingStaticRoute($request);

    if ($response->getDeviceSwitchRoutingStaticRoute200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeviceSwitchRoutingStaticRoutes

List layer 3 static routes for a switch

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDeviceSwitchRoutingStaticRoutesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDeviceSwitchRoutingStaticRoutesRequest();
    $request->serial = 'unde';

    $response = $sdk->configure->getDeviceSwitchRoutingStaticRoutes($request);

    if ($response->getDeviceSwitchRoutingStaticRoutes200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeviceSwitchWarmSpare

Return warm spare configuration for a switch

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDeviceSwitchWarmSpareRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDeviceSwitchWarmSpareRequest();
    $request->serial = 'deserunt';

    $response = $sdk->configure->getDeviceSwitchWarmSpare($request);

    if ($response->getDeviceSwitchWarmSpare200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeviceWirelessBluetoothSettings

Return the bluetooth settings for a wireless device

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDeviceWirelessBluetoothSettingsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDeviceWirelessBluetoothSettingsRequest();
    $request->serial = 'repellendus';

    $response = $sdk->configure->getDeviceWirelessBluetoothSettings($request);

    if ($response->getDeviceWirelessBluetoothSettings200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeviceWirelessRadioSettings

Return the radio settings of a device

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDeviceWirelessRadioSettingsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDeviceWirelessRadioSettingsRequest();
    $request->serial = 'consequatur';

    $response = $sdk->configure->getDeviceWirelessRadioSettings($request);

    if ($response->getDeviceWirelessRadioSettings200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetwork

Return a network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkRequest();
    $request->networkId = 'adipisci';

    $response = $sdk->configure->getNetwork($request);

    if ($response->getNetwork200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkAlertsSettings

Return the alert configuration for this network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkAlertsSettingsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkAlertsSettingsRequest();
    $request->networkId = 'doloremque';

    $response = $sdk->configure->getNetworkAlertsSettings($request);

    if ($response->getNetworkAlertsSettings200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkApplianceConnectivityMonitoringDestinations

Return the connectivity testing destinations for an MX network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkApplianceConnectivityMonitoringDestinationsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkApplianceConnectivityMonitoringDestinationsRequest();
    $request->networkId = 'optio';

    $response = $sdk->configure->getNetworkApplianceConnectivityMonitoringDestinations($request);

    if ($response->getNetworkApplianceConnectivityMonitoringDestinations200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkApplianceContentFiltering

Return the content filtering settings for an MX network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkApplianceContentFilteringRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkApplianceContentFilteringRequest();
    $request->networkId = 'tempora';

    $response = $sdk->configure->getNetworkApplianceContentFiltering($request);

    if ($response->getNetworkApplianceContentFiltering200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkApplianceContentFilteringCategories

List all available content filtering categories for an MX network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkApplianceContentFilteringCategoriesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkApplianceContentFilteringCategoriesRequest();
    $request->networkId = 'debitis';

    $response = $sdk->configure->getNetworkApplianceContentFilteringCategories($request);

    if ($response->getNetworkApplianceContentFilteringCategories200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkApplianceFirewallCellularFirewallRules

Return the cellular firewall rules for an MX network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkApplianceFirewallCellularFirewallRulesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkApplianceFirewallCellularFirewallRulesRequest();
    $request->networkId = 'cumque';

    $response = $sdk->configure->getNetworkApplianceFirewallCellularFirewallRules($request);

    if ($response->getNetworkApplianceFirewallCellularFirewallRules200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkApplianceFirewallFirewalledService

Return the accessibility settings of the given service ('ICMP', 'web', or 'SNMP')

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkApplianceFirewallFirewalledServiceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkApplianceFirewallFirewalledServiceRequest();
    $request->networkId = 'maxime';
    $request->service = 'et';

    $response = $sdk->configure->getNetworkApplianceFirewallFirewalledService($request);

    if ($response->getNetworkApplianceFirewallFirewalledService200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkApplianceFirewallFirewalledServices

List the appliance services and their accessibility rules

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkApplianceFirewallFirewalledServicesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkApplianceFirewallFirewalledServicesRequest();
    $request->networkId = 'beatae';

    $response = $sdk->configure->getNetworkApplianceFirewallFirewalledServices($request);

    if ($response->getNetworkApplianceFirewallFirewalledServices200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkApplianceFirewallInboundCellularFirewallRules

Return the inbound cellular firewall rules for an MX network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkApplianceFirewallInboundCellularFirewallRulesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkApplianceFirewallInboundCellularFirewallRulesRequest();
    $request->networkId = 'id';

    $response = $sdk->configure->getNetworkApplianceFirewallInboundCellularFirewallRules($request);

    if ($response->getNetworkApplianceFirewallInboundCellularFirewallRules200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkApplianceFirewallInboundFirewallRules

Return the inbound firewall rules for an MX network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkApplianceFirewallInboundFirewallRulesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkApplianceFirewallInboundFirewallRulesRequest();
    $request->networkId = 'consequatur';

    $response = $sdk->configure->getNetworkApplianceFirewallInboundFirewallRules($request);

    if ($response->getNetworkApplianceFirewallInboundFirewallRules200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkApplianceFirewallL3FirewallRules

Return the L3 firewall rules for an MX network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkApplianceFirewallL3FirewallRulesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkApplianceFirewallL3FirewallRulesRequest();
    $request->networkId = 'quos';

    $response = $sdk->configure->getNetworkApplianceFirewallL3FirewallRules($request);

    if ($response->getNetworkApplianceFirewallL3FirewallRules200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkApplianceFirewallL7FirewallRules

List the MX L7 firewall rules for an MX network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkApplianceFirewallL7FirewallRulesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkApplianceFirewallL7FirewallRulesRequest();
    $request->networkId = 'ratione';

    $response = $sdk->configure->getNetworkApplianceFirewallL7FirewallRules($request);

    if ($response->getNetworkApplianceFirewallL7FirewallRules200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkApplianceFirewallL7FirewallRulesApplicationCategories

Return the L7 firewall application categories and their associated applications for an MX network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkApplianceFirewallL7FirewallRulesApplicationCategoriesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkApplianceFirewallL7FirewallRulesApplicationCategoriesRequest();
    $request->networkId = 'iure';

    $response = $sdk->configure->getNetworkApplianceFirewallL7FirewallRulesApplicationCategories($request);

    if ($response->getNetworkApplianceFirewallL7FirewallRulesApplicationCategories200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkApplianceFirewallOneToManyNatRules

Return the 1:Many NAT mapping rules for an MX network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkApplianceFirewallOneToManyNatRulesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkApplianceFirewallOneToManyNatRulesRequest();
    $request->networkId = 'tempora';

    $response = $sdk->configure->getNetworkApplianceFirewallOneToManyNatRules($request);

    if ($response->getNetworkApplianceFirewallOneToManyNatRules200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkApplianceFirewallOneToOneNatRules

Return the 1:1 NAT mapping rules for an MX network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkApplianceFirewallOneToOneNatRulesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkApplianceFirewallOneToOneNatRulesRequest();
    $request->networkId = 'eos';

    $response = $sdk->configure->getNetworkApplianceFirewallOneToOneNatRules($request);

    if ($response->getNetworkApplianceFirewallOneToOneNatRules200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkApplianceFirewallPortForwardingRules

Return the port forwarding rules for an MX network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkApplianceFirewallPortForwardingRulesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkApplianceFirewallPortForwardingRulesRequest();
    $request->networkId = 'natus';

    $response = $sdk->configure->getNetworkApplianceFirewallPortForwardingRules($request);

    if ($response->getNetworkApplianceFirewallPortForwardingRules200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkApplianceFirewallSettings

Return the firewall settings for this network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkApplianceFirewallSettingsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkApplianceFirewallSettingsRequest();
    $request->networkId = 'voluptatem';

    $response = $sdk->configure->getNetworkApplianceFirewallSettings($request);

    if ($response->getNetworkApplianceFirewallSettings200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkAppliancePort

Return per-port VLAN settings for a single MX port.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkAppliancePortRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkAppliancePortRequest();
    $request->networkId = 'suscipit';
    $request->portId = 'laudantium';

    $response = $sdk->configure->getNetworkAppliancePort($request);

    if ($response->getNetworkAppliancePort200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkAppliancePorts

List per-port VLAN settings for all ports of a MX.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkAppliancePortsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkAppliancePortsRequest();
    $request->networkId = 'facilis';

    $response = $sdk->configure->getNetworkAppliancePorts($request);

    if ($response->getNetworkAppliancePorts200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkAppliancePrefixesDelegatedStatic

Return a static delegated prefix from a network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkAppliancePrefixesDelegatedStaticRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkAppliancePrefixesDelegatedStaticRequest();
    $request->networkId = 'laudantium';
    $request->staticDelegatedPrefixId = 'ullam';

    $response = $sdk->configure->getNetworkAppliancePrefixesDelegatedStatic($request);

    if ($response->getNetworkAppliancePrefixesDelegatedStatic200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkAppliancePrefixesDelegatedStatics

List static delegated prefixes for a network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkAppliancePrefixesDelegatedStaticsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkAppliancePrefixesDelegatedStaticsRequest();
    $request->networkId = 'aut';

    $response = $sdk->configure->getNetworkAppliancePrefixesDelegatedStatics($request);

    if ($response->getNetworkAppliancePrefixesDelegatedStatics200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkApplianceSecurityIntrusion

Returns all supported intrusion settings for an MX network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkApplianceSecurityIntrusionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkApplianceSecurityIntrusionRequest();
    $request->networkId = 'quia';

    $response = $sdk->configure->getNetworkApplianceSecurityIntrusion($request);

    if ($response->getNetworkApplianceSecurityIntrusion200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkApplianceSecurityMalware

Returns all supported malware settings for an MX network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkApplianceSecurityMalwareRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkApplianceSecurityMalwareRequest();
    $request->networkId = 'officia';

    $response = $sdk->configure->getNetworkApplianceSecurityMalware($request);

    if ($response->getNetworkApplianceSecurityMalware200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkApplianceSettings

Return the appliance settings for a network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkApplianceSettingsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkApplianceSettingsRequest();
    $request->networkId = 'quaerat';

    $response = $sdk->configure->getNetworkApplianceSettings($request);

    if ($response->getNetworkApplianceSettings200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkApplianceSingleLan

Return single LAN configuration

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkApplianceSingleLanRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkApplianceSingleLanRequest();
    $request->networkId = 'corporis';

    $response = $sdk->configure->getNetworkApplianceSingleLan($request);

    if ($response->getNetworkApplianceSingleLan200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkApplianceSsid

Return a single MX SSID

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkApplianceSsidRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkApplianceSsidRequest();
    $request->networkId = 'accusamus';
    $request->number = 'iusto';

    $response = $sdk->configure->getNetworkApplianceSsid($request);

    if ($response->getNetworkApplianceSsid200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkApplianceSsids

List the MX SSIDs in a network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkApplianceSsidsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkApplianceSsidsRequest();
    $request->networkId = 'sapiente';

    $response = $sdk->configure->getNetworkApplianceSsids($request);

    if ($response->getNetworkApplianceSsids200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkApplianceStaticRoute

Return a static route for an MX or teleworker network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkApplianceStaticRouteRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkApplianceStaticRouteRequest();
    $request->networkId = 'esse';
    $request->staticRouteId = 'neque';

    $response = $sdk->configure->getNetworkApplianceStaticRoute($request);

    if ($response->getNetworkApplianceStaticRoute200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkApplianceStaticRoutes

List the static routes for an MX or teleworker network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkApplianceStaticRoutesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkApplianceStaticRoutesRequest();
    $request->networkId = 'quidem';

    $response = $sdk->configure->getNetworkApplianceStaticRoutes($request);

    if ($response->getNetworkApplianceStaticRoutes200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkApplianceTrafficShaping

Display the traffic shaping settings for an MX network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkApplianceTrafficShapingRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkApplianceTrafficShapingRequest();
    $request->networkId = 'quisquam';

    $response = $sdk->configure->getNetworkApplianceTrafficShaping($request);

    if ($response->getNetworkApplianceTrafficShaping200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkApplianceTrafficShapingCustomPerformanceClass

Return a custom performance class for an MX network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkApplianceTrafficShapingCustomPerformanceClassRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkApplianceTrafficShapingCustomPerformanceClassRequest();
    $request->customPerformanceClassId = 'praesentium';
    $request->networkId = 'tempora';

    $response = $sdk->configure->getNetworkApplianceTrafficShapingCustomPerformanceClass($request);

    if ($response->getNetworkApplianceTrafficShapingCustomPerformanceClass200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkApplianceTrafficShapingCustomPerformanceClasses

List all custom performance classes for an MX network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkApplianceTrafficShapingCustomPerformanceClassesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkApplianceTrafficShapingCustomPerformanceClassesRequest();
    $request->networkId = 'ipsam';

    $response = $sdk->configure->getNetworkApplianceTrafficShapingCustomPerformanceClasses($request);

    if ($response->getNetworkApplianceTrafficShapingCustomPerformanceClasses200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkApplianceTrafficShapingRules

Display the traffic shaping settings rules for an MX network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkApplianceTrafficShapingRulesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkApplianceTrafficShapingRulesRequest();
    $request->networkId = 'officiis';

    $response = $sdk->configure->getNetworkApplianceTrafficShapingRules($request);

    if ($response->getNetworkApplianceTrafficShapingRules200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkApplianceTrafficShapingUplinkBandwidth

Returns the uplink bandwidth limits for your MX network. This may not reflect the affected device's hardware capabilities.  For more information on your device's hardware capabilities, please consult our MX Family Datasheet - [https://meraki.cisco.com/product-collateral/mx-family-datasheet/?file]

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkApplianceTrafficShapingUplinkBandwidthRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkApplianceTrafficShapingUplinkBandwidthRequest();
    $request->networkId = 'sequi';

    $response = $sdk->configure->getNetworkApplianceTrafficShapingUplinkBandwidth($request);

    if ($response->getNetworkApplianceTrafficShapingUplinkBandwidth200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkApplianceTrafficShapingUplinkSelection

Show uplink selection settings for an MX network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkApplianceTrafficShapingUplinkSelectionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkApplianceTrafficShapingUplinkSelectionRequest();
    $request->networkId = 'magni';

    $response = $sdk->configure->getNetworkApplianceTrafficShapingUplinkSelection($request);

    if ($response->getNetworkApplianceTrafficShapingUplinkSelection200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkApplianceVlan

Return a VLAN

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkApplianceVlanRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkApplianceVlanRequest();
    $request->networkId = 'voluptatem';
    $request->vlanId = 'est';

    $response = $sdk->configure->getNetworkApplianceVlan($request);

    if ($response->getNetworkApplianceVlan200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkApplianceVlans

List the VLANs for an MX network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkApplianceVlansRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkApplianceVlansRequest();
    $request->networkId = 'amet';

    $response = $sdk->configure->getNetworkApplianceVlans($request);

    if ($response->getNetworkApplianceVlans200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkApplianceVlansSettings

Returns the enabled status of VLANs for the network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkApplianceVlansSettingsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkApplianceVlansSettingsRequest();
    $request->networkId = 'veritatis';

    $response = $sdk->configure->getNetworkApplianceVlansSettings($request);

    if ($response->getNetworkApplianceVlansSettings200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkApplianceVpnBgp

Return a Hub BGP Configuration

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkApplianceVpnBgpRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkApplianceVpnBgpRequest();
    $request->networkId = 'error';

    $response = $sdk->configure->getNetworkApplianceVpnBgp($request);

    if ($response->getNetworkApplianceVpnBgp200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkApplianceVpnSiteToSiteVpn

Return the site-to-site VPN settings of a network. Only valid for MX networks.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkApplianceVpnSiteToSiteVpnRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkApplianceVpnSiteToSiteVpnRequest();
    $request->networkId = 'voluptatibus';

    $response = $sdk->configure->getNetworkApplianceVpnSiteToSiteVpn($request);

    if ($response->getNetworkApplianceVpnSiteToSiteVpn200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkApplianceWarmSpare

Return MX warm spare settings

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkApplianceWarmSpareRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkApplianceWarmSpareRequest();
    $request->networkId = 'numquam';

    $response = $sdk->configure->getNetworkApplianceWarmSpare($request);

    if ($response->getNetworkApplianceWarmSpare200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkCameraQualityRetentionProfile

Retrieve a single quality retention profile

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkCameraQualityRetentionProfileRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkCameraQualityRetentionProfileRequest();
    $request->networkId = 'rerum';
    $request->qualityRetentionProfileId = 'dolorum';

    $response = $sdk->configure->getNetworkCameraQualityRetentionProfile($request);

    if ($response->getNetworkCameraQualityRetentionProfile200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkCameraQualityRetentionProfiles

List the quality retention profiles for this network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkCameraQualityRetentionProfilesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkCameraQualityRetentionProfilesRequest();
    $request->networkId = 'quibusdam';

    $response = $sdk->configure->getNetworkCameraQualityRetentionProfiles($request);

    if ($response->getNetworkCameraQualityRetentionProfiles200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkCameraSchedules

Returns a list of all camera recording schedules.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkCameraSchedulesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkCameraSchedulesRequest();
    $request->networkId = 'earum';

    $response = $sdk->configure->getNetworkCameraSchedules($request);

    if ($response->getNetworkCameraSchedules200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkCameraWirelessProfile

Retrieve a single camera wireless profile.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkCameraWirelessProfileRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkCameraWirelessProfileRequest();
    $request->networkId = 'excepturi';
    $request->wirelessProfileId = 'numquam';

    $response = $sdk->configure->getNetworkCameraWirelessProfile($request);

    if ($response->getNetworkCameraWirelessProfile200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkCameraWirelessProfiles

List the camera wireless profiles for this network.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkCameraWirelessProfilesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkCameraWirelessProfilesRequest();
    $request->networkId = 'molestiae';

    $response = $sdk->configure->getNetworkCameraWirelessProfiles($request);

    if ($response->getNetworkCameraWirelessProfiles200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkCellularGatewayConnectivityMonitoringDestinations

Return the connectivity testing destinations for an MG network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkCellularGatewayConnectivityMonitoringDestinationsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkCellularGatewayConnectivityMonitoringDestinationsRequest();
    $request->networkId = 'impedit';

    $response = $sdk->configure->getNetworkCellularGatewayConnectivityMonitoringDestinations($request);

    if ($response->getNetworkCellularGatewayConnectivityMonitoringDestinations200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkCellularGatewayDhcp

List common DHCP settings of MGs

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkCellularGatewayDhcpRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkCellularGatewayDhcpRequest();
    $request->networkId = 'error';

    $response = $sdk->configure->getNetworkCellularGatewayDhcp($request);

    if ($response->getNetworkCellularGatewayDhcp200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkCellularGatewaySubnetPool

Return the subnet pool and mask configured for MGs in the network.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkCellularGatewaySubnetPoolRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkCellularGatewaySubnetPoolRequest();
    $request->networkId = 'animi';

    $response = $sdk->configure->getNetworkCellularGatewaySubnetPool($request);

    if ($response->getNetworkCellularGatewaySubnetPool200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkCellularGatewayUplink

Returns the uplink settings for your MG network.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkCellularGatewayUplinkRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkCellularGatewayUplinkRequest();
    $request->networkId = 'voluptatum';

    $response = $sdk->configure->getNetworkCellularGatewayUplink($request);

    if ($response->getNetworkCellularGatewayUplink200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkClientPolicy

Return the policy assigned to a client on the network. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkClientPolicyRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkClientPolicyRequest();
    $request->clientId = 'aliquid';
    $request->networkId = 'nihil';

    $response = $sdk->configure->getNetworkClientPolicy($request);

    if ($response->getNetworkClientPolicy200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkClientSplashAuthorizationStatus

Return the splash authorization for a client, for each SSID they've associated with through splash. Only enabled SSIDs with Click-through splash enabled will be included. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkClientSplashAuthorizationStatusRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkClientSplashAuthorizationStatusRequest();
    $request->clientId = 'facilis';
    $request->networkId = 'optio';

    $response = $sdk->configure->getNetworkClientSplashAuthorizationStatus($request);

    if ($response->getNetworkClientSplashAuthorizationStatus200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkDevices

List the devices in a network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkDevicesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkDevicesRequest();
    $request->networkId = 'incidunt';

    $response = $sdk->configure->getNetworkDevices($request);

    if ($response->getNetworkDevices200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkFirmwareUpgrades

Get firmware upgrade information for a network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkFirmwareUpgradesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkFirmwareUpgradesRequest();
    $request->networkId = 'eos';

    $response = $sdk->configure->getNetworkFirmwareUpgrades($request);

    if ($response->getNetworkFirmwareUpgrades200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkFirmwareUpgradesStagedEvents

Get the Staged Upgrade Event from a network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkFirmwareUpgradesStagedEventsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkFirmwareUpgradesStagedEventsRequest();
    $request->networkId = 'magnam';

    $response = $sdk->configure->getNetworkFirmwareUpgradesStagedEvents($request);

    if ($response->getNetworkFirmwareUpgradesStagedEvents200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkFirmwareUpgradesStagedGroup

Get a Staged Upgrade Group from a network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkFirmwareUpgradesStagedGroupRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkFirmwareUpgradesStagedGroupRequest();
    $request->groupId = 'dolores';
    $request->networkId = 'aliquid';

    $response = $sdk->configure->getNetworkFirmwareUpgradesStagedGroup($request);

    if ($response->getNetworkFirmwareUpgradesStagedGroup200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkFirmwareUpgradesStagedGroups

List of Staged Upgrade Groups in a network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkFirmwareUpgradesStagedGroupsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkFirmwareUpgradesStagedGroupsRequest();
    $request->networkId = 'eum';

    $response = $sdk->configure->getNetworkFirmwareUpgradesStagedGroups($request);

    if ($response->getNetworkFirmwareUpgradesStagedGroups200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkFirmwareUpgradesStagedStages

Order of Staged Upgrade Groups in a network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkFirmwareUpgradesStagedStagesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkFirmwareUpgradesStagedStagesRequest();
    $request->networkId = 'vel';

    $response = $sdk->configure->getNetworkFirmwareUpgradesStagedStages($request);

    if ($response->getNetworkFirmwareUpgradesStagedStages200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkFloorPlan

Find a floor plan by ID

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkFloorPlanRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkFloorPlanRequest();
    $request->floorPlanId = 'ad';
    $request->networkId = 'quos';

    $response = $sdk->configure->getNetworkFloorPlan($request);

    if ($response->getNetworkFloorPlan200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkFloorPlans

List the floor plans that belong to your network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkFloorPlansRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkFloorPlansRequest();
    $request->networkId = 'illo';

    $response = $sdk->configure->getNetworkFloorPlans($request);

    if ($response->getNetworkFloorPlans200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkGroupPolicies

List the group policies in a network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkGroupPoliciesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkGroupPoliciesRequest();
    $request->networkId = 'suscipit';

    $response = $sdk->configure->getNetworkGroupPolicies($request);

    if ($response->getNetworkGroupPolicies200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkGroupPolicy

Display a group policy

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkGroupPolicyRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkGroupPolicyRequest();
    $request->groupPolicyId = 'quibusdam';
    $request->networkId = 'fugiat';

    $response = $sdk->configure->getNetworkGroupPolicy($request);

    if ($response->getNetworkGroupPolicy200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkHealthAlerts

Return all global alerts on this network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkHealthAlertsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkHealthAlertsRequest();
    $request->networkId = 'impedit';

    $response = $sdk->configure->getNetworkHealthAlerts($request);

    if ($response->getNetworkHealthAlerts200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkMerakiAuthUser

Return the Meraki Auth splash guest, RADIUS, or client VPN user

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkMerakiAuthUserRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkMerakiAuthUserRequest();
    $request->merakiAuthUserId = 'culpa';
    $request->networkId = 'atque';

    $response = $sdk->configure->getNetworkMerakiAuthUser($request);

    if ($response->getNetworkMerakiAuthUser200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkMerakiAuthUsers

List the users configured under Meraki Authentication for a network (splash guest or RADIUS users for a wireless network, or client VPN users for a wired network)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkMerakiAuthUsersRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkMerakiAuthUsersRequest();
    $request->networkId = 'voluptates';

    $response = $sdk->configure->getNetworkMerakiAuthUsers($request);

    if ($response->getNetworkMerakiAuthUsers200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkMqttBroker

Return an MQTT broker

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkMqttBrokerRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkMqttBrokerRequest();
    $request->mqttBrokerId = 'maiores';
    $request->networkId = 'nemo';

    $response = $sdk->configure->getNetworkMqttBroker($request);

    if ($response->getNetworkMqttBroker200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkMqttBrokers

List the MQTT brokers for this network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkMqttBrokersRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkMqttBrokersRequest();
    $request->networkId = 'illo';

    $response = $sdk->configure->getNetworkMqttBrokers($request);

    if ($response->getNetworkMqttBrokers200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkNetflow

Return the NetFlow traffic reporting settings for a network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkNetflowRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkNetflowRequest();
    $request->networkId = 'doloribus';

    $response = $sdk->configure->getNetworkNetflow($request);

    if ($response->getNetworkNetflow200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkPiiPiiKeys

List the keys required to access Personally Identifiable Information (PII) for a given identifier. Exactly one identifier will be accepted. If the organization contains org-wide Systems Manager users matching the key provided then there will be an entry with the key "0" containing the applicable keys.

## ALTERNATE PATH

```
/organizations/{organizationId}/pii/piiKeys
```

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkPiiPiiKeysRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkPiiPiiKeysRequest();
    $request->bluetoothMac = 'cumque';
    $request->email = 'Dion_Runte@hotmail.com';
    $request->imei = 'ipsum';
    $request->mac = 'accusamus';
    $request->networkId = 'quisquam';
    $request->serial = 'quasi';
    $request->username = 'Buford_Satterfield66';

    $response = $sdk->configure->getNetworkPiiPiiKeys($request);

    if ($response->getNetworkPiiPiiKeys200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkPiiRequest

Return a PII request

## ALTERNATE PATH

```
/organizations/{organizationId}/pii/requests/{requestId}
```

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkPiiRequestRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkPiiRequestRequest();
    $request->networkId = 'quibusdam';
    $request->requestId = 'ipsa';

    $response = $sdk->configure->getNetworkPiiRequest($request);

    if ($response->getNetworkPiiRequest200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkPiiRequests

List the PII requests for this network or organization

## ALTERNATE PATH

```
/organizations/{organizationId}/pii/requests
```

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkPiiRequestsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkPiiRequestsRequest();
    $request->networkId = 'accusamus';

    $response = $sdk->configure->getNetworkPiiRequests($request);

    if ($response->getNetworkPiiRequests200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkPiiSmDevicesForKey

Given a piece of Personally Identifiable Information (PII), return the Systems Manager device ID(s) associated with that identifier. These device IDs can be used with the Systems Manager API endpoints to retrieve device details. Exactly one identifier will be accepted.

## ALTERNATE PATH

```
/organizations/{organizationId}/pii/smDevicesForKey
```

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkPiiSmDevicesForKeyRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkPiiSmDevicesForKeyRequest();
    $request->bluetoothMac = 'placeat';
    $request->email = 'Lizzie_Windler74@yahoo.com';
    $request->imei = 'at';
    $request->mac = 'molestias';
    $request->networkId = 'aut';
    $request->serial = 'temporibus';
    $request->username = 'Una54';

    $response = $sdk->configure->getNetworkPiiSmDevicesForKey($request);

    if ($response->getNetworkPiiSmDevicesForKey200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkPiiSmOwnersForKey

Given a piece of Personally Identifiable Information (PII), return the Systems Manager owner ID(s) associated with that identifier. These owner IDs can be used with the Systems Manager API endpoints to retrieve owner details. Exactly one identifier will be accepted.

## ALTERNATE PATH

```
/organizations/{organizationId}/pii/smOwnersForKey
```

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkPiiSmOwnersForKeyRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkPiiSmOwnersForKeyRequest();
    $request->bluetoothMac = 'similique';
    $request->email = 'Jacquelyn.Wisoky@gmail.com';
    $request->imei = 'occaecati';
    $request->mac = 'aut';
    $request->networkId = 'impedit';
    $request->serial = 'minima';
    $request->username = 'Katlynn.Kuvalis';

    $response = $sdk->configure->getNetworkPiiSmOwnersForKey($request);

    if ($response->getNetworkPiiSmOwnersForKey200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkPoliciesByClient

Get policies for all clients with policies

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkPoliciesByClientRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkPoliciesByClientRequest();
    $request->endingBefore = 'provident';
    $request->networkId = 'quas';
    $request->perPage = 218413;
    $request->startingAfter = 'vero';
    $request->t0 = 'fuga';
    $request->timespan = 7047.32;

    $response = $sdk->configure->getNetworkPoliciesByClient($request);

    if ($response->getNetworkPoliciesByClient200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkSensorAlertsProfile

Show details of a sensor alert profile for a network.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkSensorAlertsProfileRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkSensorAlertsProfileRequest();
    $request->id = 'f9ef3ffd-d9f7-4f07-9af4-d35724cdb0f4';
    $request->networkId = 'vero';

    $response = $sdk->configure->getNetworkSensorAlertsProfile($request);

    if ($response->getNetworkSensorAlertsProfile200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkSensorAlertsProfiles

Lists all sensor alert profiles for a network.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkSensorAlertsProfilesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkSensorAlertsProfilesRequest();
    $request->networkId = 'eos';

    $response = $sdk->configure->getNetworkSensorAlertsProfiles($request);

    if ($response->getNetworkSensorAlertsProfiles200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkSensorRelationships

List the sensor roles for devices in a given network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkSensorRelationshipsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkSensorRelationshipsRequest();
    $request->networkId = 'quas';

    $response = $sdk->configure->getNetworkSensorRelationships($request);

    if ($response->getNetworkSensorRelationships200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkSettings

Return the settings for a network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkSettingsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkSettingsRequest();
    $request->networkId = 'quasi';

    $response = $sdk->configure->getNetworkSettings($request);

    if ($response->getNetworkSettings200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkSmBypassActivationLockAttempt

Bypass activation lock attempt status

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkSmBypassActivationLockAttemptRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkSmBypassActivationLockAttemptRequest();
    $request->attemptId = 'architecto';
    $request->networkId = 'praesentium';

    $response = $sdk->configure->getNetworkSmBypassActivationLockAttempt($request);

    if ($response->getNetworkSmBypassActivationLockAttempt200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkSmDeviceCerts

List the certs on a device

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkSmDeviceCertsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkSmDeviceCertsRequest();
    $request->deviceId = 'iusto';
    $request->networkId = 'fugiat';

    $response = $sdk->configure->getNetworkSmDeviceCerts($request);

    if ($response->getNetworkSmDeviceCerts200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkSmDeviceDeviceProfiles

Get the installed profiles associated with a device

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkSmDeviceDeviceProfilesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkSmDeviceDeviceProfilesRequest();
    $request->deviceId = 'enim';
    $request->networkId = 'iure';

    $response = $sdk->configure->getNetworkSmDeviceDeviceProfiles($request);

    if ($response->getNetworkSmDeviceDeviceProfiles200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkSmDeviceNetworkAdapters

List the network adapters of a device

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkSmDeviceNetworkAdaptersRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkSmDeviceNetworkAdaptersRequest();
    $request->deviceId = 'laudantium';
    $request->networkId = 'modi';

    $response = $sdk->configure->getNetworkSmDeviceNetworkAdapters($request);

    if ($response->getNetworkSmDeviceNetworkAdapters200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkSmDeviceRestrictions

List the restrictions on a device

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkSmDeviceRestrictionsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkSmDeviceRestrictionsRequest();
    $request->deviceId = 'magnam';
    $request->networkId = 'accusamus';

    $response = $sdk->configure->getNetworkSmDeviceRestrictions($request);

    if ($response->getNetworkSmDeviceRestrictions200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkSmDeviceSecurityCenters

List the security centers on a device

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkSmDeviceSecurityCentersRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkSmDeviceSecurityCentersRequest();
    $request->deviceId = 'nulla';
    $request->networkId = 'repudiandae';

    $response = $sdk->configure->getNetworkSmDeviceSecurityCenters($request);

    if ($response->getNetworkSmDeviceSecurityCenters200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkSmDeviceSoftwares

Get a list of softwares associated with a device

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkSmDeviceSoftwaresRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkSmDeviceSoftwaresRequest();
    $request->deviceId = 'quibusdam';
    $request->networkId = 'praesentium';

    $response = $sdk->configure->getNetworkSmDeviceSoftwares($request);

    if ($response->getNetworkSmDeviceSoftwares200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkSmDeviceWlanLists

List the saved SSID names on a device

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkSmDeviceWlanListsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkSmDeviceWlanListsRequest();
    $request->deviceId = 'enim';
    $request->networkId = 'animi';

    $response = $sdk->configure->getNetworkSmDeviceWlanLists($request);

    if ($response->getNetworkSmDeviceWlanLists200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkSmDevices

List the devices enrolled in an SM network with various specified fields and filters

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkSmDevicesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkSmDevicesRequest();
    $request->endingBefore = 'unde';
    $request->fields = [
        'eum',
    ];
    $request->ids = [
        'eveniet',
        'laboriosam',
    ];
    $request->networkId = 'ratione';
    $request->perPage = 505473;
    $request->scope = [
        'illum',
        'reiciendis',
        'placeat',
    ];
    $request->serials = [
        'consequatur',
    ];
    $request->startingAfter = 'nesciunt';
    $request->wifiMacs = [
        'quidem',
    ];

    $response = $sdk->configure->getNetworkSmDevices($request);

    if ($response->getNetworkSmDevices200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkSmProfiles

List all profiles in a network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkSmProfilesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkSmProfilesRequest();
    $request->networkId = 'voluptas';

    $response = $sdk->configure->getNetworkSmProfiles($request);

    if ($response->getNetworkSmProfiles200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkSmTargetGroup

Return a target group

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkSmTargetGroupRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkSmTargetGroupRequest();
    $request->networkId = 'quo';
    $request->targetGroupId = 'laudantium';
    $request->withDetails = false;

    $response = $sdk->configure->getNetworkSmTargetGroup($request);

    if ($response->getNetworkSmTargetGroup200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkSmTargetGroups

List the target groups in this network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkSmTargetGroupsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkSmTargetGroupsRequest();
    $request->networkId = 'dignissimos';
    $request->withDetails = false;

    $response = $sdk->configure->getNetworkSmTargetGroups($request);

    if ($response->getNetworkSmTargetGroups200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkSmTrustedAccessConfigs

List Trusted Access Configs

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkSmTrustedAccessConfigsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkSmTrustedAccessConfigsRequest();
    $request->endingBefore = 'omnis';
    $request->networkId = 'omnis';
    $request->perPage = 144397;
    $request->startingAfter = 'dolorem';

    $response = $sdk->configure->getNetworkSmTrustedAccessConfigs($request);

    if ($response->getNetworkSmTrustedAccessConfigs200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkSmUserAccessDevices

List User Access Devices and its Trusted Access Connections

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkSmUserAccessDevicesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkSmUserAccessDevicesRequest();
    $request->endingBefore = 'quidem';
    $request->networkId = 'molestiae';
    $request->perPage = 890780;
    $request->startingAfter = 'vitae';

    $response = $sdk->configure->getNetworkSmUserAccessDevices($request);

    if ($response->getNetworkSmUserAccessDevices200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkSmUserDeviceProfiles

Get the profiles associated with a user

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkSmUserDeviceProfilesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkSmUserDeviceProfilesRequest();
    $request->networkId = 'dolor';
    $request->userId = 'ad';

    $response = $sdk->configure->getNetworkSmUserDeviceProfiles($request);

    if ($response->getNetworkSmUserDeviceProfiles200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkSmUserSoftwares

Get a list of softwares associated with a user

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkSmUserSoftwaresRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkSmUserSoftwaresRequest();
    $request->networkId = 'atque';
    $request->userId = 'ut';

    $response = $sdk->configure->getNetworkSmUserSoftwares($request);

    if ($response->getNetworkSmUserSoftwares200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkSmUsers

List the owners in an SM network with various specified fields and filters

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkSmUsersRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkSmUsersRequest();
    $request->emails = [
        'reprehenderit',
        'deserunt',
        'itaque',
        'et',
    ];
    $request->ids = [
        'impedit',
    ];
    $request->networkId = 'ex';
    $request->scope = [
        'natus',
        'vitae',
        'tenetur',
    ];
    $request->usernames = [
        'aspernatur',
        'eligendi',
        'repudiandae',
    ];

    $response = $sdk->configure->getNetworkSmUsers($request);

    if ($response->getNetworkSmUsers200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkSnmp

Return the SNMP settings for a network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkSnmpRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkSnmpRequest();
    $request->networkId = 'dicta';

    $response = $sdk->configure->getNetworkSnmp($request);

    if ($response->getNetworkSnmp200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkSwitchAccessControlLists

Return the access control lists for a MS network

### Example Usage

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
    $request->networkId = 'inventore';

    $response = $sdk->configure->getNetworkSwitchAccessControlLists($request);

    if ($response->getNetworkSwitchAccessControlLists200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkSwitchAccessPolicies

List the access policies for a switch network. Only returns access policies with 'my RADIUS server' as authentication method

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkSwitchAccessPoliciesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkSwitchAccessPoliciesRequest();
    $request->networkId = 'ullam';

    $response = $sdk->configure->getNetworkSwitchAccessPolicies($request);

    if ($response->getNetworkSwitchAccessPolicies200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkSwitchAccessPolicy

Return a specific access policy for a switch network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkSwitchAccessPolicyRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkSwitchAccessPolicyRequest();
    $request->accessPolicyNumber = 'iusto';
    $request->networkId = 'inventore';

    $response = $sdk->configure->getNetworkSwitchAccessPolicy($request);

    if ($response->getNetworkSwitchAccessPolicy200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkSwitchAlternateManagementInterface

Return the switch alternate management interface for the network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkSwitchAlternateManagementInterfaceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkSwitchAlternateManagementInterfaceRequest();
    $request->networkId = 'voluptate';

    $response = $sdk->configure->getNetworkSwitchAlternateManagementInterface($request);

    if ($response->getNetworkSwitchAlternateManagementInterface200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkSwitchDhcpServerPolicy

Return the DHCP server settings. Blocked/allowed servers are only applied when default policy is allow/block, respectively

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkSwitchDhcpServerPolicyRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkSwitchDhcpServerPolicyRequest();
    $request->networkId = 'sed';

    $response = $sdk->configure->getNetworkSwitchDhcpServerPolicy($request);

    if ($response->getNetworkSwitchDhcpServerPolicy200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkSwitchDhcpServerPolicyArpInspectionTrustedServers

Return the list of servers trusted by Dynamic ARP Inspection on this network. These are also known as whitelisted snoop entries

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkSwitchDhcpServerPolicyArpInspectionTrustedServersRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkSwitchDhcpServerPolicyArpInspectionTrustedServersRequest();
    $request->endingBefore = 'dolorem';
    $request->networkId = 'eaque';
    $request->perPage = 347460;
    $request->startingAfter = 'amet';

    $response = $sdk->configure->getNetworkSwitchDhcpServerPolicyArpInspectionTrustedServers($request);

    if ($response->getNetworkSwitchDhcpServerPolicyArpInspectionTrustedServers200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkSwitchDhcpServerPolicyArpInspectionWarningsByDevice

Return the devices that have a Dynamic ARP Inspection warning and their warnings

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkSwitchDhcpServerPolicyArpInspectionWarningsByDeviceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkSwitchDhcpServerPolicyArpInspectionWarningsByDeviceRequest();
    $request->endingBefore = 'voluptate';
    $request->networkId = 'voluptate';
    $request->perPage = 865212;
    $request->startingAfter = 'minus';

    $response = $sdk->configure->getNetworkSwitchDhcpServerPolicyArpInspectionWarningsByDevice($request);

    if ($response->getNetworkSwitchDhcpServerPolicyArpInspectionWarningsByDevice200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkSwitchDhcpV4ServersSeen

Return the network's DHCPv4 servers seen within the selected timeframe (default 1 day)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkSwitchDhcpV4ServersSeenRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkSwitchDhcpV4ServersSeenRequest();
    $request->endingBefore = 'a';
    $request->networkId = 'fuga';
    $request->perPage = 518926;
    $request->startingAfter = 'cupiditate';
    $request->t0 = 'at';
    $request->timespan = 9865.94;

    $response = $sdk->configure->getNetworkSwitchDhcpV4ServersSeen($request);

    if ($response->getNetworkSwitchDhcpV4ServersSeen200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkSwitchDscpToCosMappings

Return the DSCP to CoS mappings

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkSwitchDscpToCosMappingsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkSwitchDscpToCosMappingsRequest();
    $request->networkId = 'omnis';

    $response = $sdk->configure->getNetworkSwitchDscpToCosMappings($request);

    if ($response->getNetworkSwitchDscpToCosMappings200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkSwitchLinkAggregations

List link aggregation groups

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkSwitchLinkAggregationsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkSwitchLinkAggregationsRequest();
    $request->networkId = 'quam';

    $response = $sdk->configure->getNetworkSwitchLinkAggregations($request);

    if ($response->getNetworkSwitchLinkAggregations200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkSwitchMtu

Return the MTU configuration

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkSwitchMtuRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkSwitchMtuRequest();
    $request->networkId = 'exercitationem';

    $response = $sdk->configure->getNetworkSwitchMtu($request);

    if ($response->getNetworkSwitchMtu200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkSwitchPortSchedules

List switch port schedules

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkSwitchPortSchedulesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkSwitchPortSchedulesRequest();
    $request->networkId = 'voluptates';

    $response = $sdk->configure->getNetworkSwitchPortSchedules($request);

    if ($response->getNetworkSwitchPortSchedules200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkSwitchQosRule

Return a quality of service rule

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkSwitchQosRuleRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkSwitchQosRuleRequest();
    $request->networkId = 'sequi';
    $request->qosRuleId = 'quis';

    $response = $sdk->configure->getNetworkSwitchQosRule($request);

    if ($response->getNetworkSwitchQosRule200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkSwitchQosRules

List quality of service rules

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkSwitchQosRulesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkSwitchQosRulesRequest();
    $request->networkId = 'commodi';

    $response = $sdk->configure->getNetworkSwitchQosRules($request);

    if ($response->getNetworkSwitchQosRules200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkSwitchQosRulesOrder

Return the quality of service rule IDs by order in which they will be processed by the switch

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkSwitchQosRulesOrderRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkSwitchQosRulesOrderRequest();
    $request->networkId = 'vel';

    $response = $sdk->configure->getNetworkSwitchQosRulesOrder($request);

    if ($response->getNetworkSwitchQosRulesOrder200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkSwitchRoutingMulticast

Return multicast settings for a network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkSwitchRoutingMulticastRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkSwitchRoutingMulticastRequest();
    $request->networkId = 'rem';

    $response = $sdk->configure->getNetworkSwitchRoutingMulticast($request);

    if ($response->getNetworkSwitchRoutingMulticast200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkSwitchRoutingMulticastRendezvousPoint

Return a multicast rendezvous point

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkSwitchRoutingMulticastRendezvousPointRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkSwitchRoutingMulticastRendezvousPointRequest();
    $request->networkId = 'aliquid';
    $request->rendezvousPointId = 'aperiam';

    $response = $sdk->configure->getNetworkSwitchRoutingMulticastRendezvousPoint($request);

    if ($response->getNetworkSwitchRoutingMulticastRendezvousPoint200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkSwitchRoutingMulticastRendezvousPoints

List multicast rendezvous points

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkSwitchRoutingMulticastRendezvousPointsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkSwitchRoutingMulticastRendezvousPointsRequest();
    $request->networkId = 'perspiciatis';

    $response = $sdk->configure->getNetworkSwitchRoutingMulticastRendezvousPoints($request);

    if ($response->getNetworkSwitchRoutingMulticastRendezvousPoints200ApplicationJSONArrays !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkSwitchRoutingOspf

Return layer 3 OSPF routing configuration

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkSwitchRoutingOspfRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkSwitchRoutingOspfRequest();
    $request->networkId = 'fugit';

    $response = $sdk->configure->getNetworkSwitchRoutingOspf($request);

    if ($response->getNetworkSwitchRoutingOspf200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkSwitchSettings

Returns the switch network settings

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkSwitchSettingsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkSwitchSettingsRequest();
    $request->networkId = 'itaque';

    $response = $sdk->configure->getNetworkSwitchSettings($request);

    if ($response->getNetworkSwitchSettings200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkSwitchStack

Show a switch stack

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkSwitchStackRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkSwitchStackRequest();
    $request->networkId = 'unde';
    $request->switchStackId = 'cumque';

    $response = $sdk->configure->getNetworkSwitchStack($request);

    if ($response->getNetworkSwitchStack200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkSwitchStackRoutingInterface

Return a layer 3 interface from a switch stack

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkSwitchStackRoutingInterfaceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkSwitchStackRoutingInterfaceRequest();
    $request->interfaceId = 'dolor';
    $request->networkId = 'repellendus';
    $request->switchStackId = 'temporibus';

    $response = $sdk->configure->getNetworkSwitchStackRoutingInterface($request);

    if ($response->getNetworkSwitchStackRoutingInterface200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkSwitchStackRoutingInterfaceDhcp

Return a layer 3 interface DHCP configuration for a switch stack

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkSwitchStackRoutingInterfaceDhcpRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkSwitchStackRoutingInterfaceDhcpRequest();
    $request->interfaceId = 'minus';
    $request->networkId = 'minima';
    $request->switchStackId = 'a';

    $response = $sdk->configure->getNetworkSwitchStackRoutingInterfaceDhcp($request);

    if ($response->getNetworkSwitchStackRoutingInterfaceDhcp200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkSwitchStackRoutingInterfaces

List layer 3 interfaces for a switch stack

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkSwitchStackRoutingInterfacesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkSwitchStackRoutingInterfacesRequest();
    $request->networkId = 'beatae';
    $request->switchStackId = 'vitae';

    $response = $sdk->configure->getNetworkSwitchStackRoutingInterfaces($request);

    if ($response->getNetworkSwitchStackRoutingInterfaces200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkSwitchStackRoutingStaticRoute

Return a layer 3 static route for a switch stack

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkSwitchStackRoutingStaticRouteRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkSwitchStackRoutingStaticRouteRequest();
    $request->networkId = 'veritatis';
    $request->staticRouteId = 'facere';
    $request->switchStackId = 'earum';

    $response = $sdk->configure->getNetworkSwitchStackRoutingStaticRoute($request);

    if ($response->getNetworkSwitchStackRoutingStaticRoute200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkSwitchStackRoutingStaticRoutes

List layer 3 static routes for a switch stack

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkSwitchStackRoutingStaticRoutesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkSwitchStackRoutingStaticRoutesRequest();
    $request->networkId = 'laborum';
    $request->switchStackId = 'dicta';

    $response = $sdk->configure->getNetworkSwitchStackRoutingStaticRoutes($request);

    if ($response->getNetworkSwitchStackRoutingStaticRoutes200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkSwitchStacks

List the switch stacks in a network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkSwitchStacksRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkSwitchStacksRequest();
    $request->networkId = 'voluptatem';

    $response = $sdk->configure->getNetworkSwitchStacks($request);

    if ($response->getNetworkSwitchStacks200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkSwitchStormControl

Return the storm control configuration for a switch network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkSwitchStormControlRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkSwitchStormControlRequest();
    $request->networkId = 'odit';

    $response = $sdk->configure->getNetworkSwitchStormControl($request);

    if ($response->getNetworkSwitchStormControl200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkSwitchStp

Returns STP settings

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkSwitchStpRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkSwitchStpRequest();
    $request->networkId = 'aliquid';

    $response = $sdk->configure->getNetworkSwitchStp($request);

    if ($response->getNetworkSwitchStp200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkSyslogServers

List the syslog servers for a network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkSyslogServersRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkSyslogServersRequest();
    $request->networkId = 'pariatur';

    $response = $sdk->configure->getNetworkSyslogServers($request);

    if ($response->getNetworkSyslogServers200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkTrafficAnalysis

Return the traffic analysis settings for a network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkTrafficAnalysisRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkTrafficAnalysisRequest();
    $request->networkId = 'enim';

    $response = $sdk->configure->getNetworkTrafficAnalysis($request);

    if ($response->getNetworkTrafficAnalysis200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkTrafficShapingApplicationCategories

Returns the application categories for traffic shaping rules.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkTrafficShapingApplicationCategoriesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkTrafficShapingApplicationCategoriesRequest();
    $request->networkId = 'numquam';

    $response = $sdk->configure->getNetworkTrafficShapingApplicationCategories($request);

    if ($response->getNetworkTrafficShapingApplicationCategories200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkTrafficShapingDscpTaggingOptions

Returns the available DSCP tagging options for your traffic shaping rules.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkTrafficShapingDscpTaggingOptionsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkTrafficShapingDscpTaggingOptionsRequest();
    $request->networkId = 'architecto';

    $response = $sdk->configure->getNetworkTrafficShapingDscpTaggingOptions($request);

    if ($response->getNetworkTrafficShapingDscpTaggingOptions200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkWebhooksHttpServer

Return an HTTP server for a network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkWebhooksHttpServerRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkWebhooksHttpServerRequest();
    $request->httpServerId = 'est';
    $request->networkId = 'quaerat';

    $response = $sdk->configure->getNetworkWebhooksHttpServer($request);

    if ($response->getNetworkWebhooksHttpServer200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkWebhooksHttpServers

List the HTTP servers for a network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkWebhooksHttpServersRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkWebhooksHttpServersRequest();
    $request->networkId = 'facere';

    $response = $sdk->configure->getNetworkWebhooksHttpServers($request);

    if ($response->getNetworkWebhooksHttpServers200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkWebhooksPayloadTemplate

Get the webhook payload template for a network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkWebhooksPayloadTemplateRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkWebhooksPayloadTemplateRequest();
    $request->networkId = 'vitae';
    $request->payloadTemplateId = 'omnis';

    $response = $sdk->configure->getNetworkWebhooksPayloadTemplate($request);

    if ($response->getNetworkWebhooksPayloadTemplate200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkWebhooksPayloadTemplates

List the webhook payload templates for a network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkWebhooksPayloadTemplatesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkWebhooksPayloadTemplatesRequest();
    $request->networkId = 'alias';

    $response = $sdk->configure->getNetworkWebhooksPayloadTemplates($request);

    if ($response->getNetworkWebhooksPayloadTemplates200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkWebhooksWebhookTest

Return the status of a webhook test for a network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkWebhooksWebhookTestRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkWebhooksWebhookTestRequest();
    $request->networkId = 'sapiente';
    $request->webhookTestId = 'officiis';

    $response = $sdk->configure->getNetworkWebhooksWebhookTest($request);

    if ($response->getNetworkWebhooksWebhookTest200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkWirelessAlternateManagementInterface

Return alternate management interface and devices with IP assigned

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkWirelessAlternateManagementInterfaceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkWirelessAlternateManagementInterfaceRequest();
    $request->networkId = 'expedita';

    $response = $sdk->configure->getNetworkWirelessAlternateManagementInterface($request);

    if ($response->getNetworkWirelessAlternateManagementInterface200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkWirelessBilling

Return the billing settings of this network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkWirelessBillingRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkWirelessBillingRequest();
    $request->networkId = 'quia';

    $response = $sdk->configure->getNetworkWirelessBilling($request);

    if ($response->getNetworkWirelessBilling200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkWirelessBluetoothSettings

Return the Bluetooth settings for a network. <a href="https://documentation.meraki.com/MR/Bluetooth/Bluetooth_Low_Energy_(BLE)">Bluetooth settings</a> must be enabled on the network.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkWirelessBluetoothSettingsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkWirelessBluetoothSettingsRequest();
    $request->networkId = 'vitae';

    $response = $sdk->configure->getNetworkWirelessBluetoothSettings($request);

    if ($response->getNetworkWirelessBluetoothSettings200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkWirelessRfProfile

Return a RF profile

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkWirelessRfProfileRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkWirelessRfProfileRequest();
    $request->networkId = 'odio';
    $request->rfProfileId = 'quas';

    $response = $sdk->configure->getNetworkWirelessRfProfile($request);

    if ($response->getNetworkWirelessRfProfile200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkWirelessRfProfiles

List the non-basic RF profiles for this network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkWirelessRfProfilesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkWirelessRfProfilesRequest();
    $request->includeTemplateProfiles = false;
    $request->networkId = 'ipsa';

    $response = $sdk->configure->getNetworkWirelessRfProfiles($request);

    if ($response->getNetworkWirelessRfProfiles200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkWirelessSettings

Return the wireless settings for a network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkWirelessSettingsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkWirelessSettingsRequest();
    $request->networkId = 'distinctio';

    $response = $sdk->configure->getNetworkWirelessSettings($request);

    if ($response->getNetworkWirelessSettings200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkWirelessSsid

Return a single MR SSID

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkWirelessSsidRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkWirelessSsidRequest();
    $request->networkId = 'placeat';
    $request->number = 'quod';

    $response = $sdk->configure->getNetworkWirelessSsid($request);

    if ($response->getNetworkWirelessSsid200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkWirelessSsidBonjourForwarding

List the Bonjour forwarding setting and rules for the SSID

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkWirelessSsidBonjourForwardingRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkWirelessSsidBonjourForwardingRequest();
    $request->networkId = 'eligendi';
    $request->number = 'sit';

    $response = $sdk->configure->getNetworkWirelessSsidBonjourForwarding($request);

    if ($response->getNetworkWirelessSsidBonjourForwarding200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkWirelessSsidDeviceTypeGroupPolicies

List the device type group policies for the SSID

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkWirelessSsidDeviceTypeGroupPoliciesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkWirelessSsidDeviceTypeGroupPoliciesRequest();
    $request->networkId = 'possimus';
    $request->number = 'distinctio';

    $response = $sdk->configure->getNetworkWirelessSsidDeviceTypeGroupPolicies($request);

    if ($response->getNetworkWirelessSsidDeviceTypeGroupPolicies200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkWirelessSsidEapOverride

Return the EAP overridden parameters for an SSID

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkWirelessSsidEapOverrideRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkWirelessSsidEapOverrideRequest();
    $request->networkId = 'distinctio';
    $request->number = 'assumenda';

    $response = $sdk->configure->getNetworkWirelessSsidEapOverride($request);

    if ($response->getNetworkWirelessSsidEapOverride200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkWirelessSsidFirewallL3FirewallRules

Return the L3 firewall rules for an SSID on an MR network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkWirelessSsidFirewallL3FirewallRulesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkWirelessSsidFirewallL3FirewallRulesRequest();
    $request->networkId = 'illum';
    $request->number = 'soluta';

    $response = $sdk->configure->getNetworkWirelessSsidFirewallL3FirewallRules($request);

    if ($response->getNetworkWirelessSsidFirewallL3FirewallRules200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkWirelessSsidFirewallL7FirewallRules

Return the L7 firewall rules for an SSID on an MR network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkWirelessSsidFirewallL7FirewallRulesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkWirelessSsidFirewallL7FirewallRulesRequest();
    $request->networkId = 'magnam';
    $request->number = 'laudantium';

    $response = $sdk->configure->getNetworkWirelessSsidFirewallL7FirewallRules($request);

    if ($response->getNetworkWirelessSsidFirewallL7FirewallRules200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkWirelessSsidHotspot20

Return the Hotspot 2.0 settings for an SSID

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkWirelessSsidHotspot20Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkWirelessSsidHotspot20Request();
    $request->networkId = 'tempora';
    $request->number = 'esse';

    $response = $sdk->configure->getNetworkWirelessSsidHotspot20($request);

    if ($response->getNetworkWirelessSsidHotspot20200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkWirelessSsidIdentityPsk

Return an Identity PSK

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkWirelessSsidIdentityPskRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkWirelessSsidIdentityPskRequest();
    $request->identityPskId = 'doloremque';
    $request->networkId = 'corrupti';
    $request->number = 'reiciendis';

    $response = $sdk->configure->getNetworkWirelessSsidIdentityPsk($request);

    if ($response->getNetworkWirelessSsidIdentityPsk200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkWirelessSsidIdentityPsks

List all Identity PSKs in a wireless network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkWirelessSsidIdentityPsksRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkWirelessSsidIdentityPsksRequest();
    $request->networkId = 'facilis';
    $request->number = 'aliquam';

    $response = $sdk->configure->getNetworkWirelessSsidIdentityPsks($request);

    if ($response->getNetworkWirelessSsidIdentityPsks200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkWirelessSsidSchedules

List the outage schedule for the SSID

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkWirelessSsidSchedulesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkWirelessSsidSchedulesRequest();
    $request->networkId = 'repudiandae';
    $request->number = 'amet';

    $response = $sdk->configure->getNetworkWirelessSsidSchedules($request);

    if ($response->getNetworkWirelessSsidSchedules200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkWirelessSsidSplashSettings

Display the splash page settings for the given SSID

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkWirelessSsidSplashSettingsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkWirelessSsidSplashSettingsRequest();
    $request->networkId = 'natus';
    $request->number = 'ab';

    $response = $sdk->configure->getNetworkWirelessSsidSplashSettings($request);

    if ($response->getNetworkWirelessSsidSplashSettings200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkWirelessSsidTrafficShapingRules

Display the traffic shaping settings for a SSID on an MR network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkWirelessSsidTrafficShapingRulesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkWirelessSsidTrafficShapingRulesRequest();
    $request->networkId = 'officiis';
    $request->number = 'eum';

    $response = $sdk->configure->getNetworkWirelessSsidTrafficShapingRules($request);

    if ($response->getNetworkWirelessSsidTrafficShapingRules200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkWirelessSsidVpn

List the VPN settings for the SSID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkWirelessSsidVpnRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkWirelessSsidVpnRequest();
    $request->networkId = 'rerum';
    $request->number = 'placeat';

    $response = $sdk->configure->getNetworkWirelessSsidVpn($request);

    if ($response->getNetworkWirelessSsidVpn200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkWirelessSsids

List the MR SSIDs in a network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkWirelessSsidsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkWirelessSsidsRequest();
    $request->networkId = 'ab';

    $response = $sdk->configure->getNetworkWirelessSsids($request);

    if ($response->getNetworkWirelessSsids200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganization

Return an organization

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationRequest();
    $request->organizationId = 'ad';

    $response = $sdk->configure->getOrganization($request);

    if ($response->getOrganization200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationActionBatch

Return an action batch

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationActionBatchRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationActionBatchRequest();
    $request->actionBatchId = 'blanditiis';
    $request->organizationId = 'porro';

    $response = $sdk->configure->getOrganizationActionBatch($request);

    if ($response->getOrganizationActionBatch200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationActionBatches

Return the list of action batches in the organization

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationActionBatchesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationActionBatchesStatusEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationActionBatchesRequest();
    $request->organizationId = 'labore';
    $request->status = GetOrganizationActionBatchesStatusEnum::PENDING;

    $response = $sdk->configure->getOrganizationActionBatches($request);

    if ($response->getOrganizationActionBatches200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationAdaptivePolicyAcl

Returns the adaptive policy ACL information

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationAdaptivePolicyAclRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationAdaptivePolicyAclRequest();
    $request->aclId = 'ut';
    $request->organizationId = 'earum';

    $response = $sdk->configure->getOrganizationAdaptivePolicyAcl($request);

    if ($response->getOrganizationAdaptivePolicyAcl200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationAdaptivePolicyAcls

List adaptive policy ACLs in a organization

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationAdaptivePolicyAclsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationAdaptivePolicyAclsRequest();
    $request->organizationId = 'ullam';

    $response = $sdk->configure->getOrganizationAdaptivePolicyAcls($request);

    if ($response->getOrganizationAdaptivePolicyAcls200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationAdaptivePolicyGroup

Returns an adaptive policy group

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationAdaptivePolicyGroupRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationAdaptivePolicyGroupRequest();
    $request->id = '4599ea34-2260-4e9b-a00c-e78a1bd8fb7a';
    $request->organizationId = 'doloremque';

    $response = $sdk->configure->getOrganizationAdaptivePolicyGroup($request);

    if ($response->getOrganizationAdaptivePolicyGroup200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationAdaptivePolicyGroups

List adaptive policy groups in a organization

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationAdaptivePolicyGroupsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationAdaptivePolicyGroupsRequest();
    $request->organizationId = 'fuga';

    $response = $sdk->configure->getOrganizationAdaptivePolicyGroups($request);

    if ($response->getOrganizationAdaptivePolicyGroups200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationAdaptivePolicyPolicies

List adaptive policies in an organization

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationAdaptivePolicyPoliciesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationAdaptivePolicyPoliciesRequest();
    $request->organizationId = 'dicta';

    $response = $sdk->configure->getOrganizationAdaptivePolicyPolicies($request);

    if ($response->getOrganizationAdaptivePolicyPolicies200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationAdaptivePolicyPolicy

Return an adaptive policy

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationAdaptivePolicyPolicyRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationAdaptivePolicyPolicyRequest();
    $request->id = '16ce723d-4097-4fa3-8e9a-f725b2912203';
    $request->organizationId = 'consequatur';

    $response = $sdk->configure->getOrganizationAdaptivePolicyPolicy($request);

    if ($response->getOrganizationAdaptivePolicyPolicy200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationAdaptivePolicySettings

Returns global adaptive policy settings in an organization

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationAdaptivePolicySettingsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationAdaptivePolicySettingsRequest();
    $request->organizationId = 'fugiat';

    $response = $sdk->configure->getOrganizationAdaptivePolicySettings($request);

    if ($response->getOrganizationAdaptivePolicySettings200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationAdmins

List the dashboard administrators in this organization

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationAdminsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationAdminsRequest();
    $request->organizationId = 'voluptatum';

    $response = $sdk->configure->getOrganizationAdmins($request);

    if ($response->getOrganizationAdmins200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationAlertsProfiles

List all organization-wide alert configurations

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationAlertsProfilesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationAlertsProfilesRequest();
    $request->organizationId = 'velit';

    $response = $sdk->configure->getOrganizationAlertsProfiles($request);

    if ($response->getOrganizationAlertsProfiles200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationApplianceSecurityIntrusion

Returns all supported intrusion settings for an organization

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationApplianceSecurityIntrusionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationApplianceSecurityIntrusionRequest();
    $request->organizationId = 'hic';

    $response = $sdk->configure->getOrganizationApplianceSecurityIntrusion($request);

    if ($response->getOrganizationApplianceSecurityIntrusion200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationApplianceVPNThirdPartyVPNPeers

Return the third party VPN peers for an organization

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationApplianceVPNThirdPartyVPNPeersRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationApplianceVPNThirdPartyVPNPeersRequest();
    $request->organizationId = 'ullam';

    $response = $sdk->configure->getOrganizationApplianceVPNThirdPartyVPNPeers($request);

    if ($response->getOrganizationApplianceVPNThirdPartyVPNPeers200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationApplianceVpnVpnFirewallRules

Return the firewall rules for an organization's site-to-site VPN

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationApplianceVpnVpnFirewallRulesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationApplianceVpnVpnFirewallRulesRequest();
    $request->organizationId = 'deserunt';

    $response = $sdk->configure->getOrganizationApplianceVpnVpnFirewallRules($request);

    if ($response->getOrganizationApplianceVpnVpnFirewallRules200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationBrandingPolicies

List the branding policies of an organization

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationBrandingPoliciesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationBrandingPoliciesRequest();
    $request->organizationId = 'itaque';

    $response = $sdk->configure->getOrganizationBrandingPolicies($request);

    if ($response->getOrganizationBrandingPolicies200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationBrandingPoliciesPriorities

Return the branding policy IDs of an organization in priority order. IDs are ordered in ascending order of priority (IDs later in the array have higher priority).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationBrandingPoliciesPrioritiesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationBrandingPoliciesPrioritiesRequest();
    $request->organizationId = 'distinctio';

    $response = $sdk->configure->getOrganizationBrandingPoliciesPriorities($request);

    if ($response->getOrganizationBrandingPoliciesPriorities200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationBrandingPolicy

Return a branding policy

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationBrandingPolicyRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationBrandingPolicyRequest();
    $request->brandingPolicyId = 'iusto';
    $request->organizationId = 'dignissimos';

    $response = $sdk->configure->getOrganizationBrandingPolicy($request);

    if ($response->getOrganizationBrandingPolicy200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationCameraCustomAnalyticsArtifact

Get Custom Analytics Artifact

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationCameraCustomAnalyticsArtifactRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationCameraCustomAnalyticsArtifactRequest();
    $request->artifactId = 'provident';
    $request->organizationId = 'occaecati';

    $response = $sdk->configure->getOrganizationCameraCustomAnalyticsArtifact($request);

    if ($response->getOrganizationCameraCustomAnalyticsArtifact200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationCameraCustomAnalyticsArtifacts

List Custom Analytics Artifacts

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationCameraCustomAnalyticsArtifactsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationCameraCustomAnalyticsArtifactsRequest();
    $request->organizationId = 'assumenda';

    $response = $sdk->configure->getOrganizationCameraCustomAnalyticsArtifacts($request);

    if ($response->getOrganizationCameraCustomAnalyticsArtifacts200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationCameraOnboardingStatuses

Fetch onboarding status of cameras

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationCameraOnboardingStatusesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationCameraOnboardingStatusesRequest();
    $request->networkIds = [
        'odit',
    ];
    $request->organizationId = 'vero';
    $request->serials = [
        'optio',
        'quasi',
        'repellat',
    ];

    $response = $sdk->configure->getOrganizationCameraOnboardingStatuses($request);

    if ($response->getOrganizationCameraOnboardingStatuses200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationClientsSearch

Return the client details in an organization

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationClientsSearchRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationClientsSearchRequest();
    $request->endingBefore = 'atque';
    $request->mac = 'magnam';
    $request->organizationId = 'perspiciatis';
    $request->perPage = 227017;
    $request->startingAfter = 'corrupti';

    $response = $sdk->configure->getOrganizationClientsSearch($request);

    if ($response->getOrganizationClientsSearch200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationConfigTemplate

Return a single configuration template

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationConfigTemplateRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationConfigTemplateRequest();
    $request->configTemplateId = 'sunt';
    $request->organizationId = 'nemo';

    $response = $sdk->configure->getOrganizationConfigTemplate($request);

    if ($response->getOrganizationConfigTemplate200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationConfigTemplateSwitchProfilePort

Return a switch profile port

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationConfigTemplateSwitchProfilePortRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationConfigTemplateSwitchProfilePortRequest();
    $request->configTemplateId = 'delectus';
    $request->organizationId = 'illum';
    $request->portId = 'porro';
    $request->profileId = 'quaerat';

    $response = $sdk->configure->getOrganizationConfigTemplateSwitchProfilePort($request);

    if ($response->getOrganizationConfigTemplateSwitchProfilePort200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationConfigTemplateSwitchProfilePorts

Return all the ports of a switch profile

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationConfigTemplateSwitchProfilePortsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationConfigTemplateSwitchProfilePortsRequest();
    $request->configTemplateId = 'magni';
    $request->organizationId = 'cumque';
    $request->profileId = 'quos';

    $response = $sdk->configure->getOrganizationConfigTemplateSwitchProfilePorts($request);

    if ($response->getOrganizationConfigTemplateSwitchProfilePorts200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationConfigTemplateSwitchProfiles

List the switch profiles for your switch template configuration

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationConfigTemplateSwitchProfilesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationConfigTemplateSwitchProfilesRequest();
    $request->configTemplateId = 'in';
    $request->organizationId = 'commodi';

    $response = $sdk->configure->getOrganizationConfigTemplateSwitchProfiles($request);

    if ($response->getOrganizationConfigTemplateSwitchProfiles200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationConfigTemplates

List the configuration templates for this organization

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationConfigTemplatesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationConfigTemplatesRequest();
    $request->organizationId = 'maxime';

    $response = $sdk->configure->getOrganizationConfigTemplates($request);

    if ($response->getOrganizationConfigTemplates200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationDevices

List the devices in an organization

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationDevicesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationDevicesProductTypesEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationDevicesTagsFilterTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationDevicesRequest();
    $request->configurationUpdatedAfter = 'sed';
    $request->endingBefore = 'minus';
    $request->mac = 'consequuntur';
    $request->macs = [
        'delectus',
        'harum',
        'aliquam',
        'eligendi',
    ];
    $request->model = 'hic';
    $request->models = [
        'illo',
        'nobis',
        'esse',
        'nisi',
    ];
    $request->name = 'Emily Abshire';
    $request->networkIds = [
        'vitae',
        'maiores',
    ];
    $request->organizationId = 'nam';
    $request->perPage = 102184;
    $request->productTypes = [
        GetOrganizationDevicesProductTypesEnum::SYSTEMS_MANAGER,
        GetOrganizationDevicesProductTypesEnum::CAMERA,
        GetOrganizationDevicesProductTypesEnum::CAMERA,
    ];
    $request->sensorAlertProfileIds = [
        'repellendus',
        'nam',
        'ab',
        'magnam',
    ];
    $request->sensorMetrics = [
        'expedita',
        'autem',
        'tempore',
        'recusandae',
    ];
    $request->serial = 'nostrum';
    $request->serials = [
        'voluptas',
        'laudantium',
        'corporis',
    ];
    $request->startingAfter = 'excepturi';
    $request->tags = [
        'deleniti',
        'necessitatibus',
        'aspernatur',
    ];
    $request->tagsFilterType = GetOrganizationDevicesTagsFilterTypeEnum::WITH_ALL_TAGS;

    $response = $sdk->configure->getOrganizationDevices($request);

    if ($response->getOrganizationDevices200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationEarlyAccessFeatures

List the available early access features for organization

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationEarlyAccessFeaturesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationEarlyAccessFeaturesRequest();
    $request->organizationId = 'laborum';

    $response = $sdk->configure->getOrganizationEarlyAccessFeatures($request);

    if ($response->getOrganizationEarlyAccessFeatures200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationEarlyAccessFeaturesOptIn

Show an early access feature opt-in for an organization

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationEarlyAccessFeaturesOptInRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationEarlyAccessFeaturesOptInRequest();
    $request->optInId = 'vero';
    $request->organizationId = 'eos';

    $response = $sdk->configure->getOrganizationEarlyAccessFeaturesOptIn($request);

    if ($response->getOrganizationEarlyAccessFeaturesOptIn200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationEarlyAccessFeaturesOptIns

List the early access feature opt-ins for an organization

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationEarlyAccessFeaturesOptInsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationEarlyAccessFeaturesOptInsRequest();
    $request->organizationId = 'voluptatem';

    $response = $sdk->configure->getOrganizationEarlyAccessFeaturesOptIns($request);

    if ($response->getOrganizationEarlyAccessFeaturesOptIns200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationFirmwareUpgrades

Get firmware upgrade information for an organization

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationFirmwareUpgradesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationFirmwareUpgradesRequest();
    $request->organizationId = 'temporibus';
    $request->productType = [
        'quae',
        'commodi',
        'a',
    ];
    $request->status = [
        'sed',
        'nam',
        'quia',
        'iusto',
    ];

    $response = $sdk->configure->getOrganizationFirmwareUpgrades($request);

    if ($response->getOrganizationFirmwareUpgrades200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationFirmwareUpgradesByDevice

Get firmware upgrade status for the filtered devices

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationFirmwareUpgradesByDeviceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationFirmwareUpgradesByDeviceRequest();
    $request->endingBefore = 'ab';
    $request->firmwareUpgradeBatchIds = [
        'sed',
        'blanditiis',
        'sint',
    ];
    $request->firmwareUpgradeIds = [
        'ullam',
        'molestiae',
        'itaque',
        'rem',
    ];
    $request->macs = [
        'non',
        'recusandae',
    ];
    $request->networkIds = [
        'ipsa',
        'aliquam',
        'dolor',
    ];
    $request->organizationId = 'occaecati';
    $request->perPage = 842678;
    $request->serials = [
        'consequuntur',
    ];
    $request->startingAfter = 'consequuntur';

    $response = $sdk->configure->getOrganizationFirmwareUpgradesByDevice($request);

    if ($response->getOrganizationFirmwareUpgradesByDevice200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationInsightApplications

List all Insight tracked applications

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationInsightApplicationsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationInsightApplicationsRequest();
    $request->organizationId = 'eius';

    $response = $sdk->configure->getOrganizationInsightApplications($request);

    if ($response->getOrganizationInsightApplications200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationInsightMonitoredMediaServer

Return a monitored media server for this organization. Only valid for organizations with Meraki Insight.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationInsightMonitoredMediaServerRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationInsightMonitoredMediaServerRequest();
    $request->monitoredMediaServerId = 'commodi';
    $request->organizationId = 'ipsam';

    $response = $sdk->configure->getOrganizationInsightMonitoredMediaServer($request);

    if ($response->getOrganizationInsightMonitoredMediaServer200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationInsightMonitoredMediaServers

List the monitored media servers for this organization. Only valid for organizations with Meraki Insight.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationInsightMonitoredMediaServersRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationInsightMonitoredMediaServersRequest();
    $request->organizationId = 'vel';

    $response = $sdk->configure->getOrganizationInsightMonitoredMediaServers($request);

    if ($response->getOrganizationInsightMonitoredMediaServers200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationInventoryDevice

Return a single device from the inventory of an organization

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationInventoryDeviceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationInventoryDeviceRequest();
    $request->organizationId = 'cupiditate';
    $request->serial = 'modi';

    $response = $sdk->configure->getOrganizationInventoryDevice($request);

    if ($response->getOrganizationInventoryDevice200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationInventoryDevices

Return the device inventory for an organization

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationInventoryDevicesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationInventoryDevicesProductTypesEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationInventoryDevicesTagsFilterTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationInventoryDevicesUsedStateEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationInventoryDevicesRequest();
    $request->endingBefore = 'nisi';
    $request->macs = [
        'modi',
    ];
    $request->models = [
        'odio',
    ];
    $request->networkIds = [
        'voluptatum',
    ];
    $request->orderNumbers = [
        'delectus',
        'quam',
    ];
    $request->organizationId = 'dolorum';
    $request->perPage = 726244;
    $request->productTypes = [
        GetOrganizationInventoryDevicesProductTypesEnum::SENSOR,
    ];
    $request->search = 'optio';
    $request->serials = [
        'maiores',
        'accusantium',
        'sed',
        'eos',
    ];
    $request->startingAfter = 'consequuntur';
    $request->tags = [
        'vitae',
        'occaecati',
    ];
    $request->tagsFilterType = GetOrganizationInventoryDevicesTagsFilterTypeEnum::WITH_ALL_TAGS;
    $request->usedState = GetOrganizationInventoryDevicesUsedStateEnum::USED;

    $response = $sdk->configure->getOrganizationInventoryDevices($request);

    if ($response->getOrganizationInventoryDevices200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationInventoryOnboardingCloudMonitoringImports

Check the status of a committed Import operation

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationInventoryOnboardingCloudMonitoringImportsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationInventoryOnboardingCloudMonitoringImportsRequest();
    $request->importIds = [
        'exercitationem',
        'veniam',
        'modi',
    ];
    $request->organizationId = 'quasi';

    $response = $sdk->configure->getOrganizationInventoryOnboardingCloudMonitoringImports($request);

    if ($response->getOrganizationInventoryOnboardingCloudMonitoringImports200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationInventoryOnboardingCloudMonitoringNetworks

Returns list of networks eligible for adding cloud monitored device

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationInventoryOnboardingCloudMonitoringNetworksRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationInventoryOnboardingCloudMonitoringNetworksDeviceTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationInventoryOnboardingCloudMonitoringNetworksRequest();
    $request->deviceType = GetOrganizationInventoryOnboardingCloudMonitoringNetworksDeviceTypeEnum::SWITCH;
    $request->endingBefore = 'similique';
    $request->organizationId = 'possimus';
    $request->perPage = 775138;
    $request->startingAfter = 'suscipit';

    $response = $sdk->configure->getOrganizationInventoryOnboardingCloudMonitoringNetworks($request);

    if ($response->getOrganizationInventoryOnboardingCloudMonitoringNetworks202ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationLicense

Display a license

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationLicenseRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationLicenseRequest();
    $request->licenseId = 'ex';
    $request->organizationId = 'sint';

    $response = $sdk->configure->getOrganizationLicense($request);

    if ($response->getOrganizationLicense200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationLicenses

List the licenses for an organization

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationLicensesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationLicensesStateEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationLicensesRequest();
    $request->deviceSerial = 'est';
    $request->endingBefore = 'doloribus';
    $request->networkId = 'provident';
    $request->organizationId = 'alias';
    $request->perPage = 643644;
    $request->startingAfter = 'fugit';
    $request->state = GetOrganizationLicensesStateEnum::EXPIRING;

    $response = $sdk->configure->getOrganizationLicenses($request);

    if ($response->getOrganizationLicenses200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationLicensingCotermLicenses

List the licenses in a coterm organization

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationLicensingCotermLicensesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationLicensingCotermLicensesRequest();
    $request->endingBefore = 'quo';
    $request->expired = false;
    $request->invalidated = false;
    $request->organizationId = 'molestiae';
    $request->perPage = 805128;
    $request->startingAfter = 'facere';

    $response = $sdk->configure->getOrganizationLicensingCotermLicenses($request);

    if ($response->getOrganizationLicensingCotermLicenses200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationLoginSecurity

Returns the login security settings for an organization.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationLoginSecurityRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationLoginSecurityRequest();
    $request->organizationId = 'impedit';

    $response = $sdk->configure->getOrganizationLoginSecurity($request);

    if ($response->getOrganizationLoginSecurity200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationNetworks

List the networks that the user has privileges on in an organization

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationNetworksRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationNetworksTagsFilterTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationNetworksRequest();
    $request->configTemplateId = 'cupiditate';
    $request->endingBefore = 'deleniti';
    $request->isBoundToConfigTemplate = false;
    $request->organizationId = 'quasi';
    $request->perPage = 978857;
    $request->startingAfter = 'voluptatem';
    $request->tags = [
        'laudantium',
        'unde',
    ];
    $request->tagsFilterType = GetOrganizationNetworksTagsFilterTypeEnum::WITH_ANY_TAGS;

    $response = $sdk->configure->getOrganizationNetworks($request);

    if ($response->getOrganizationNetworks200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationPolicyObject

Shows details of a Policy Object.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationPolicyObjectRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationPolicyObjectRequest();
    $request->organizationId = 'quae';
    $request->policyObjectId = 'facere';

    $response = $sdk->configure->getOrganizationPolicyObject($request);

    if ($response->getOrganizationPolicyObject200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationPolicyObjects

Lists Policy Objects belonging to the organization.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationPolicyObjectsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationPolicyObjectsRequest();
    $request->endingBefore = 'ea';
    $request->organizationId = 'libero';
    $request->perPage = 722500;
    $request->startingAfter = 'amet';

    $response = $sdk->configure->getOrganizationPolicyObjects($request);

    if ($response->getOrganizationPolicyObjects200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationPolicyObjectsGroup

Shows details of a Policy Object Group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationPolicyObjectsGroupRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationPolicyObjectsGroupRequest();
    $request->organizationId = 'adipisci';
    $request->policyObjectGroupId = 'minus';

    $response = $sdk->configure->getOrganizationPolicyObjectsGroup($request);

    if ($response->getOrganizationPolicyObjectsGroup200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationPolicyObjectsGroups

Lists Policy Object Groups belonging to the organization.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationPolicyObjectsGroupsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationPolicyObjectsGroupsRequest();
    $request->endingBefore = 'hic';
    $request->organizationId = 'similique';
    $request->perPage = 686784;
    $request->startingAfter = 'consectetur';

    $response = $sdk->configure->getOrganizationPolicyObjectsGroups($request);

    if ($response->getOrganizationPolicyObjectsGroups200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationSaml

Returns the SAML SSO enabled settings for an organization.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationSamlRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationSamlRequest();
    $request->organizationId = 'labore';

    $response = $sdk->configure->getOrganizationSaml($request);

    if ($response->getOrganizationSaml200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationSamlIdp

Get a SAML IdP from your organization.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationSamlIdpRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationSamlIdpRequest();
    $request->idpId = 'laudantium';
    $request->organizationId = 'cumque';

    $response = $sdk->configure->getOrganizationSamlIdp($request);

    if ($response->getOrganizationSamlIdp200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationSamlIdps

List the SAML IdPs in your organization.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationSamlIdpsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationSamlIdpsRequest();
    $request->organizationId = 'adipisci';

    $response = $sdk->configure->getOrganizationSamlIdps($request);

    if ($response->getOrganizationSamlIdps200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationSamlRole

Return a SAML role

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationSamlRoleRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationSamlRoleRequest();
    $request->organizationId = 'veritatis';
    $request->samlRoleId = 'nam';

    $response = $sdk->configure->getOrganizationSamlRole($request);

    if ($response->getOrganizationSamlRole200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationSamlRoles

List the SAML roles for this organization

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationSamlRolesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationSamlRolesRequest();
    $request->organizationId = 'voluptatibus';

    $response = $sdk->configure->getOrganizationSamlRoles($request);

    if ($response->getOrganizationSamlRoles200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationSmApnsCert

Get the organization's APNS certificate

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationSmApnsCertRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationSmApnsCertRequest();
    $request->organizationId = 'magnam';

    $response = $sdk->configure->getOrganizationSmApnsCert($request);

    if ($response->getOrganizationSmApnsCert200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationSmVppAccount

Get a hash containing the unparsed token of the VPP account with the given ID

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationSmVppAccountRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationSmVppAccountRequest();
    $request->organizationId = 'aperiam';
    $request->vppAccountId = 'ducimus';

    $response = $sdk->configure->getOrganizationSmVppAccount($request);

    if ($response->getOrganizationSmVppAccount200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationSmVppAccounts

List the VPP accounts in the organization

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationSmVppAccountsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationSmVppAccountsRequest();
    $request->organizationId = 'itaque';

    $response = $sdk->configure->getOrganizationSmVppAccounts($request);

    if ($response->getOrganizationSmVppAccounts200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationSnmp

Return the SNMP settings for an organization

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationSnmpRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationSnmpRequest();
    $request->organizationId = 'necessitatibus';

    $response = $sdk->configure->getOrganizationSnmp($request);

    if ($response->getOrganizationSnmp200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationSwitchPortsBySwitch

List the switchports in an organization by switch

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationSwitchPortsBySwitchRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationSwitchPortsBySwitchRequest();
    $request->configurationUpdatedAfter = 'numquam';
    $request->endingBefore = 'doloribus';
    $request->mac = 'eligendi';
    $request->macs = [
        'alias',
        'impedit',
        'numquam',
        'aspernatur',
    ];
    $request->name = 'Neil Lemke II';
    $request->networkIds = [
        'consequuntur',
        'voluptas',
    ];
    $request->organizationId = 'ratione';
    $request->perPage = 568162;
    $request->portProfileIds = [
        'est',
        'perferendis',
        'quibusdam',
    ];
    $request->serial = 'impedit';
    $request->serials = [
        'nisi',
        'nisi',
    ];
    $request->startingAfter = 'dolor';

    $response = $sdk->configure->getOrganizationSwitchPortsBySwitch($request);

    if ($response->getOrganizationSwitchPortsBySwitch200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationWirelessDevicesEthernetStatuses

Endpoint to see power status for wireless devices

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationWirelessDevicesEthernetStatusesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationWirelessDevicesEthernetStatusesRequest();
    $request->endingBefore = 'fugit';
    $request->networkIds = [
        'maxime',
        'maxime',
    ];
    $request->organizationId = 'expedita';
    $request->perPage = 37181;
    $request->startingAfter = 'ea';

    $response = $sdk->configure->getOrganizationWirelessDevicesEthernetStatuses($request);

    if ($response->getOrganizationWirelessDevicesEthernetStatuses200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizations

List the organizations that the user has privileges on

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->configure->getOrganizations();

    if ($response->getOrganizations200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## lockNetworkSmDevices

Lock a set of devices

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\LockNetworkSmDevicesRequest;
use \OpenAPI\OpenAPI\Models\Operations\LockNetworkSmDevicesRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new LockNetworkSmDevicesRequest();
    $request->requestBody = new LockNetworkSmDevicesRequestBody();
    $request->requestBody->ids = [
        'totam',
        'optio',
        'est',
        'inventore',
    ];
    $request->requestBody->pin = 164805;
    $request->requestBody->scope = [
        'sit',
        'dolores',
        'enim',
        'aspernatur',
    ];
    $request->requestBody->serials = [
        'magni',
        'odio',
        'alias',
    ];
    $request->requestBody->wifiMacs = [
        'deleniti',
        'possimus',
        'ipsam',
    ];
    $request->networkId = 'odio';

    $response = $sdk->configure->lockNetworkSmDevices($request);

    if ($response->lockNetworkSmDevices200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## modifyNetworkSmDevicesTags

Add, delete, or update the tags of a set of devices

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ModifyNetworkSmDevicesTagsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ModifyNetworkSmDevicesTagsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ModifyNetworkSmDevicesTagsRequest();
    $request->requestBody = new ModifyNetworkSmDevicesTagsRequestBody();
    $request->requestBody->ids = [
        'aspernatur',
    ];
    $request->requestBody->scope = [
        'illum',
        'praesentium',
        'sint',
        'exercitationem',
    ];
    $request->requestBody->serials = [
        'voluptatum',
        'facilis',
        'placeat',
    ];
    $request->requestBody->tags = [
        'dolores',
        'dolore',
        'pariatur',
        'facilis',
    ];
    $request->requestBody->updateAction = 'cupiditate';
    $request->requestBody->wifiMacs = [
        'natus',
        'nisi',
    ];
    $request->networkId = 'provident';

    $response = $sdk->configure->modifyNetworkSmDevicesTags($request);

    if ($response->modifyNetworkSmDevicesTags200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## moveNetworkSmDevices

Move a set of devices to a new network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\MoveNetworkSmDevicesRequest;
use \OpenAPI\OpenAPI\Models\Operations\MoveNetworkSmDevicesRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MoveNetworkSmDevicesRequest();
    $request->requestBody = new MoveNetworkSmDevicesRequestBody();
    $request->requestBody->ids = [
        'dolor',
    ];
    $request->requestBody->newNetwork = 'nostrum';
    $request->requestBody->scope = [
        'tenetur',
    ];
    $request->requestBody->serials = [
        'dolore',
        'ullam',
    ];
    $request->requestBody->wifiMacs = [
        'adipisci',
    ];
    $request->networkId = 'cupiditate';

    $response = $sdk->configure->moveNetworkSmDevices($request);

    if ($response->moveNetworkSmDevices200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## moveOrganizationLicenses

Move licenses to another organization. This will also move any devices that the licenses are assigned to

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\MoveOrganizationLicensesRequest;
use \OpenAPI\OpenAPI\Models\Operations\MoveOrganizationLicensesRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MoveOrganizationLicensesRequest();
    $request->requestBody = new MoveOrganizationLicensesRequestBody();
    $request->requestBody->destOrganizationId = 'occaecati';
    $request->requestBody->licenseIds = [
        'fugiat',
        'molestiae',
    ];
    $request->organizationId = 'quas';

    $response = $sdk->configure->moveOrganizationLicenses($request);

    if ($response->moveOrganizationLicenses200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## moveOrganizationLicensesSeats

Move SM seats to another organization

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\MoveOrganizationLicensesSeatsRequest;
use \OpenAPI\OpenAPI\Models\Operations\MoveOrganizationLicensesSeatsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MoveOrganizationLicensesSeatsRequest();
    $request->requestBody = new MoveOrganizationLicensesSeatsRequestBody();
    $request->requestBody->destOrganizationId = 'repellendus';
    $request->requestBody->licenseId = 'saepe';
    $request->requestBody->seatCount = 230400;
    $request->organizationId = 'distinctio';

    $response = $sdk->configure->moveOrganizationLicensesSeats($request);

    if ($response->moveOrganizationLicensesSeats200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## moveOrganizationLicensingCotermLicenses

Moves a license to a different organization (coterm only)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\MoveOrganizationLicensingCotermLicensesRequest;
use \OpenAPI\OpenAPI\Models\Operations\MoveOrganizationLicensingCotermLicensesRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\MoveOrganizationLicensingCotermLicensesRequestBodyDestination;
use \OpenAPI\OpenAPI\Models\Operations\MoveOrganizationLicensingCotermLicensesRequestBodyDestinationModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\MoveOrganizationLicensingCotermLicensesRequestBodyLicenses;
use \OpenAPI\OpenAPI\Models\Operations\MoveOrganizationLicensingCotermLicensesRequestBodyLicensesCounts;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MoveOrganizationLicensingCotermLicensesRequest();
    $request->requestBody = new MoveOrganizationLicensingCotermLicensesRequestBody();
    $request->requestBody->destination = new MoveOrganizationLicensingCotermLicensesRequestBodyDestination();
    $request->requestBody->destination->mode = MoveOrganizationLicensingCotermLicensesRequestBodyDestinationModeEnum::ADD_DEVICES;
    $request->requestBody->destination->organizationId = 'necessitatibus';
    $request->requestBody->licenses = [
        new MoveOrganizationLicensingCotermLicensesRequestBodyLicenses(),
        new MoveOrganizationLicensingCotermLicensesRequestBodyLicenses(),
        new MoveOrganizationLicensingCotermLicensesRequestBodyLicenses(),
    ];
    $request->organizationId = 'nesciunt';

    $response = $sdk->configure->moveOrganizationLicensingCotermLicenses($request);

    if ($response->moveOrganizationLicensingCotermLicenses200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## provisionNetworkClients

Provisions a client with a name and policy. Clients can be provisioned before they associate to the network.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProvisionNetworkClientsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ProvisionNetworkClientsRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\ProvisionNetworkClientsRequestBodyClients;
use \OpenAPI\OpenAPI\Models\Operations\ProvisionNetworkClientsRequestBodyDevicePolicyEnum;
use \OpenAPI\OpenAPI\Models\Operations\ProvisionNetworkClientsRequestBodyPoliciesBySecurityAppliance;
use \OpenAPI\OpenAPI\Models\Operations\ProvisionNetworkClientsRequestBodyPoliciesBySecurityApplianceDevicePolicyEnum;
use \OpenAPI\OpenAPI\Models\Operations\ProvisionNetworkClientsRequestBodyPoliciesBySsid;
use \OpenAPI\OpenAPI\Models\Operations\ProvisionNetworkClientsRequestBodyPoliciesBySsid0;
use \OpenAPI\OpenAPI\Models\Operations\ProvisionNetworkClientsRequestBodyPoliciesBySsid0DevicePolicyEnum;
use \OpenAPI\OpenAPI\Models\Operations\ProvisionNetworkClientsRequestBodyPoliciesBySsid1;
use \OpenAPI\OpenAPI\Models\Operations\ProvisionNetworkClientsRequestBodyPoliciesBySsid1DevicePolicyEnum;
use \OpenAPI\OpenAPI\Models\Operations\ProvisionNetworkClientsRequestBodyPoliciesBySsid10;
use \OpenAPI\OpenAPI\Models\Operations\ProvisionNetworkClientsRequestBodyPoliciesBySsid10DevicePolicyEnum;
use \OpenAPI\OpenAPI\Models\Operations\ProvisionNetworkClientsRequestBodyPoliciesBySsid11;
use \OpenAPI\OpenAPI\Models\Operations\ProvisionNetworkClientsRequestBodyPoliciesBySsid11DevicePolicyEnum;
use \OpenAPI\OpenAPI\Models\Operations\ProvisionNetworkClientsRequestBodyPoliciesBySsid12;
use \OpenAPI\OpenAPI\Models\Operations\ProvisionNetworkClientsRequestBodyPoliciesBySsid12DevicePolicyEnum;
use \OpenAPI\OpenAPI\Models\Operations\ProvisionNetworkClientsRequestBodyPoliciesBySsid13;
use \OpenAPI\OpenAPI\Models\Operations\ProvisionNetworkClientsRequestBodyPoliciesBySsid13DevicePolicyEnum;
use \OpenAPI\OpenAPI\Models\Operations\ProvisionNetworkClientsRequestBodyPoliciesBySsid14;
use \OpenAPI\OpenAPI\Models\Operations\ProvisionNetworkClientsRequestBodyPoliciesBySsid14DevicePolicyEnum;
use \OpenAPI\OpenAPI\Models\Operations\ProvisionNetworkClientsRequestBodyPoliciesBySsid2;
use \OpenAPI\OpenAPI\Models\Operations\ProvisionNetworkClientsRequestBodyPoliciesBySsid2DevicePolicyEnum;
use \OpenAPI\OpenAPI\Models\Operations\ProvisionNetworkClientsRequestBodyPoliciesBySsid3;
use \OpenAPI\OpenAPI\Models\Operations\ProvisionNetworkClientsRequestBodyPoliciesBySsid3DevicePolicyEnum;
use \OpenAPI\OpenAPI\Models\Operations\ProvisionNetworkClientsRequestBodyPoliciesBySsid4;
use \OpenAPI\OpenAPI\Models\Operations\ProvisionNetworkClientsRequestBodyPoliciesBySsid4DevicePolicyEnum;
use \OpenAPI\OpenAPI\Models\Operations\ProvisionNetworkClientsRequestBodyPoliciesBySsid5;
use \OpenAPI\OpenAPI\Models\Operations\ProvisionNetworkClientsRequestBodyPoliciesBySsid5DevicePolicyEnum;
use \OpenAPI\OpenAPI\Models\Operations\ProvisionNetworkClientsRequestBodyPoliciesBySsid6;
use \OpenAPI\OpenAPI\Models\Operations\ProvisionNetworkClientsRequestBodyPoliciesBySsid6DevicePolicyEnum;
use \OpenAPI\OpenAPI\Models\Operations\ProvisionNetworkClientsRequestBodyPoliciesBySsid7;
use \OpenAPI\OpenAPI\Models\Operations\ProvisionNetworkClientsRequestBodyPoliciesBySsid7DevicePolicyEnum;
use \OpenAPI\OpenAPI\Models\Operations\ProvisionNetworkClientsRequestBodyPoliciesBySsid8;
use \OpenAPI\OpenAPI\Models\Operations\ProvisionNetworkClientsRequestBodyPoliciesBySsid8DevicePolicyEnum;
use \OpenAPI\OpenAPI\Models\Operations\ProvisionNetworkClientsRequestBodyPoliciesBySsid9;
use \OpenAPI\OpenAPI\Models\Operations\ProvisionNetworkClientsRequestBodyPoliciesBySsid9DevicePolicyEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProvisionNetworkClientsRequest();
    $request->requestBody = new ProvisionNetworkClientsRequestBody();
    $request->requestBody->clients = [
        new ProvisionNetworkClientsRequestBodyClients(),
        new ProvisionNetworkClientsRequestBodyClients(),
        new ProvisionNetworkClientsRequestBodyClients(),
    ];
    $request->requestBody->devicePolicy = ProvisionNetworkClientsRequestBodyDevicePolicyEnum::GROUP_POLICY;
    $request->requestBody->groupPolicyId = 'voluptatibus';
    $request->requestBody->policiesBySecurityAppliance = new ProvisionNetworkClientsRequestBodyPoliciesBySecurityAppliance();
    $request->requestBody->policiesBySecurityAppliance->devicePolicy = ProvisionNetworkClientsRequestBodyPoliciesBySecurityApplianceDevicePolicyEnum::BLOCKED;
    $request->requestBody->policiesBySsid = new ProvisionNetworkClientsRequestBodyPoliciesBySsid();
    $request->requestBody->policiesBySsid->zero = new ProvisionNetworkClientsRequestBodyPoliciesBySsid0();
    $request->requestBody->policiesBySsid->zero->devicePolicy = ProvisionNetworkClientsRequestBodyPoliciesBySsid0DevicePolicyEnum::GROUP_POLICY;
    $request->requestBody->policiesBySsid->zero->groupPolicyId = 'soluta';
    $request->requestBody->policiesBySsid->one = new ProvisionNetworkClientsRequestBodyPoliciesBySsid1();
    $request->requestBody->policiesBySsid->one->devicePolicy = ProvisionNetworkClientsRequestBodyPoliciesBySsid1DevicePolicyEnum::GROUP_POLICY;
    $request->requestBody->policiesBySsid->one->groupPolicyId = 'in';
    $request->requestBody->policiesBySsid->ten = new ProvisionNetworkClientsRequestBodyPoliciesBySsid10();
    $request->requestBody->policiesBySsid->ten->devicePolicy = ProvisionNetworkClientsRequestBodyPoliciesBySsid10DevicePolicyEnum::NORMAL;
    $request->requestBody->policiesBySsid->ten->groupPolicyId = 'commodi';
    $request->requestBody->policiesBySsid->eleven = new ProvisionNetworkClientsRequestBodyPoliciesBySsid11();
    $request->requestBody->policiesBySsid->eleven->devicePolicy = ProvisionNetworkClientsRequestBodyPoliciesBySsid11DevicePolicyEnum::BLOCKED;
    $request->requestBody->policiesBySsid->eleven->groupPolicyId = 'fugit';
    $request->requestBody->policiesBySsid->twelve = new ProvisionNetworkClientsRequestBodyPoliciesBySsid12();
    $request->requestBody->policiesBySsid->twelve->devicePolicy = ProvisionNetworkClientsRequestBodyPoliciesBySsid12DevicePolicyEnum::BLOCKED;
    $request->requestBody->policiesBySsid->twelve->groupPolicyId = 'ullam';
    $request->requestBody->policiesBySsid->thirteen = new ProvisionNetworkClientsRequestBodyPoliciesBySsid13();
    $request->requestBody->policiesBySsid->thirteen->devicePolicy = ProvisionNetworkClientsRequestBodyPoliciesBySsid13DevicePolicyEnum::ALLOWED;
    $request->requestBody->policiesBySsid->thirteen->groupPolicyId = 'est';
    $request->requestBody->policiesBySsid->fourteen = new ProvisionNetworkClientsRequestBodyPoliciesBySsid14();
    $request->requestBody->policiesBySsid->fourteen->devicePolicy = ProvisionNetworkClientsRequestBodyPoliciesBySsid14DevicePolicyEnum::ALLOWED;
    $request->requestBody->policiesBySsid->fourteen->groupPolicyId = 'praesentium';
    $request->requestBody->policiesBySsid->two = new ProvisionNetworkClientsRequestBodyPoliciesBySsid2();
    $request->requestBody->policiesBySsid->two->devicePolicy = ProvisionNetworkClientsRequestBodyPoliciesBySsid2DevicePolicyEnum::ALLOWED;
    $request->requestBody->policiesBySsid->two->groupPolicyId = 'totam';
    $request->requestBody->policiesBySsid->three = new ProvisionNetworkClientsRequestBodyPoliciesBySsid3();
    $request->requestBody->policiesBySsid->three->devicePolicy = ProvisionNetworkClientsRequestBodyPoliciesBySsid3DevicePolicyEnum::ALLOWED;
    $request->requestBody->policiesBySsid->three->groupPolicyId = 'deserunt';
    $request->requestBody->policiesBySsid->four = new ProvisionNetworkClientsRequestBodyPoliciesBySsid4();
    $request->requestBody->policiesBySsid->four->devicePolicy = ProvisionNetworkClientsRequestBodyPoliciesBySsid4DevicePolicyEnum::NORMAL;
    $request->requestBody->policiesBySsid->four->groupPolicyId = 'incidunt';
    $request->requestBody->policiesBySsid->five = new ProvisionNetworkClientsRequestBodyPoliciesBySsid5();
    $request->requestBody->policiesBySsid->five->devicePolicy = ProvisionNetworkClientsRequestBodyPoliciesBySsid5DevicePolicyEnum::GROUP_POLICY;
    $request->requestBody->policiesBySsid->five->groupPolicyId = 'dolor';
    $request->requestBody->policiesBySsid->six = new ProvisionNetworkClientsRequestBodyPoliciesBySsid6();
    $request->requestBody->policiesBySsid->six->devicePolicy = ProvisionNetworkClientsRequestBodyPoliciesBySsid6DevicePolicyEnum::GROUP_POLICY;
    $request->requestBody->policiesBySsid->six->groupPolicyId = 'reiciendis';
    $request->requestBody->policiesBySsid->seven = new ProvisionNetworkClientsRequestBodyPoliciesBySsid7();
    $request->requestBody->policiesBySsid->seven->devicePolicy = ProvisionNetworkClientsRequestBodyPoliciesBySsid7DevicePolicyEnum::NORMAL;
    $request->requestBody->policiesBySsid->seven->groupPolicyId = 'odit';
    $request->requestBody->policiesBySsid->eight = new ProvisionNetworkClientsRequestBodyPoliciesBySsid8();
    $request->requestBody->policiesBySsid->eight->devicePolicy = ProvisionNetworkClientsRequestBodyPoliciesBySsid8DevicePolicyEnum::ALLOWED;
    $request->requestBody->policiesBySsid->eight->groupPolicyId = 'inventore';
    $request->requestBody->policiesBySsid->nine = new ProvisionNetworkClientsRequestBodyPoliciesBySsid9();
    $request->requestBody->policiesBySsid->nine->devicePolicy = ProvisionNetworkClientsRequestBodyPoliciesBySsid9DevicePolicyEnum::BLOCKED;
    $request->requestBody->policiesBySsid->nine->groupPolicyId = 'facilis';
    $request->networkId = 'facilis';

    $response = $sdk->configure->provisionNetworkClients($request);

    if ($response->provisionNetworkClients201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## refreshNetworkSmDeviceDetails

Refresh the details of a device

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RefreshNetworkSmDeviceDetailsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RefreshNetworkSmDeviceDetailsRequest();
    $request->deviceId = 'deserunt';
    $request->networkId = 'nisi';

    $response = $sdk->configure->refreshNetworkSmDeviceDetails($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## releaseFromOrganizationInventory

Release a list of claimed devices from an organization.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ReleaseFromOrganizationInventoryRequest;
use \OpenAPI\OpenAPI\Models\Operations\ReleaseFromOrganizationInventoryRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReleaseFromOrganizationInventoryRequest();
    $request->requestBody = new ReleaseFromOrganizationInventoryRequestBody();
    $request->requestBody->serials = [
        'voluptatem',
        'illo',
    ];
    $request->organizationId = 'iure';

    $response = $sdk->configure->releaseFromOrganizationInventory($request);

    if ($response->releaseFromOrganizationInventory200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## removeNetworkDevices

Remove a single device

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RemoveNetworkDevicesRequest;
use \OpenAPI\OpenAPI\Models\Operations\RemoveNetworkDevicesRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RemoveNetworkDevicesRequest();
    $request->requestBody = new RemoveNetworkDevicesRequestBody();
    $request->requestBody->serial = 'incidunt';
    $request->networkId = 'eveniet';

    $response = $sdk->configure->removeNetworkDevices($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## removeNetworkSwitchStack

Remove a switch from a stack

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RemoveNetworkSwitchStackRequest;
use \OpenAPI\OpenAPI\Models\Operations\RemoveNetworkSwitchStackRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RemoveNetworkSwitchStackRequest();
    $request->requestBody = new RemoveNetworkSwitchStackRequestBody();
    $request->requestBody->serial = 'quae';
    $request->networkId = 'ea';
    $request->switchStackId = 'asperiores';

    $response = $sdk->configure->removeNetworkSwitchStack($request);

    if ($response->removeNetworkSwitchStack200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## renewOrganizationLicensesSeats

Renew SM seats of a license. This will extend the license expiration date of managed SM devices covered by this license

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RenewOrganizationLicensesSeatsRequest;
use \OpenAPI\OpenAPI\Models\Operations\RenewOrganizationLicensesSeatsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RenewOrganizationLicensesSeatsRequest();
    $request->requestBody = new RenewOrganizationLicensesSeatsRequestBody();
    $request->requestBody->licenseIdToRenew = 'veniam';
    $request->requestBody->unusedLicenseId = 'quidem';
    $request->organizationId = 'asperiores';

    $response = $sdk->configure->renewOrganizationLicensesSeats($request);

    if ($response->renewOrganizationLicensesSeats200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## rollbacksNetworkFirmwareUpgradesStagedEvents

Rollback a Staged Upgrade Event for a network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RollbacksNetworkFirmwareUpgradesStagedEventsRequest;
use \OpenAPI\OpenAPI\Models\Operations\RollbacksNetworkFirmwareUpgradesStagedEventsRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\RollbacksNetworkFirmwareUpgradesStagedEventsRequestBodyReasons;
use \OpenAPI\OpenAPI\Models\Operations\RollbacksNetworkFirmwareUpgradesStagedEventsRequestBodyReasonsCategoryEnum;
use \OpenAPI\OpenAPI\Models\Operations\RollbacksNetworkFirmwareUpgradesStagedEventsRequestBodyStages;
use \OpenAPI\OpenAPI\Models\Operations\RollbacksNetworkFirmwareUpgradesStagedEventsRequestBodyStagesGroup;
use \OpenAPI\OpenAPI\Models\Operations\RollbacksNetworkFirmwareUpgradesStagedEventsRequestBodyStagesMilestones;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RollbacksNetworkFirmwareUpgradesStagedEventsRequest();
    $request->requestBody = new RollbacksNetworkFirmwareUpgradesStagedEventsRequestBody();
    $request->requestBody->reasons = [
        new RollbacksNetworkFirmwareUpgradesStagedEventsRequestBodyReasons(),
        new RollbacksNetworkFirmwareUpgradesStagedEventsRequestBodyReasons(),
    ];
    $request->requestBody->stages = [
        new RollbacksNetworkFirmwareUpgradesStagedEventsRequestBodyStages(),
        new RollbacksNetworkFirmwareUpgradesStagedEventsRequestBodyStages(),
        new RollbacksNetworkFirmwareUpgradesStagedEventsRequestBodyStages(),
    ];
    $request->networkId = 'repudiandae';

    $response = $sdk->configure->rollbacksNetworkFirmwareUpgradesStagedEvents($request);

    if ($response->rollbacksNetworkFirmwareUpgradesStagedEvents200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## splitNetwork

Split a combined network into individual networks for each type of device

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SplitNetworkRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SplitNetworkRequest();
    $request->networkId = 'nemo';

    $response = $sdk->configure->splitNetwork($request);

    if ($response->splitNetwork200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## swapNetworkApplianceWarmSpare

Swap MX primary and warm spare appliances

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SwapNetworkApplianceWarmSpareRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SwapNetworkApplianceWarmSpareRequest();
    $request->networkId = 'molestias';

    $response = $sdk->configure->swapNetworkApplianceWarmSpare($request);

    if ($response->swapNetworkApplianceWarmSpare200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## unbindNetwork

Unbind a network from a template.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UnbindNetworkRequest;
use \OpenAPI\OpenAPI\Models\Operations\UnbindNetworkRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UnbindNetworkRequest();
    $request->requestBody = new UnbindNetworkRequestBody();
    $request->requestBody->retainConfigs = false;
    $request->networkId = 'architecto';

    $response = $sdk->configure->unbindNetwork($request);

    if ($response->unbindNetwork200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## unenrollNetworkSmDevice

Unenroll a device

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UnenrollNetworkSmDeviceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UnenrollNetworkSmDeviceRequest();
    $request->deviceId = 'expedita';
    $request->networkId = 'quisquam';

    $response = $sdk->configure->unenrollNetworkSmDevice($request);

    if ($response->unenrollNetworkSmDevice200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateDevice

Update the attributes of a device

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateDeviceRequest();
    $request->requestBody = new UpdateDeviceRequestBody();
    $request->requestBody->address = '7899 Hardy Corners';
    $request->requestBody->floorPlanId = 'fugit';
    $request->requestBody->lat = 7240.73;
    $request->requestBody->lng = 4018.44;
    $request->requestBody->moveMapMarker = false;
    $request->requestBody->name = 'Mrs. Sadie Dare';
    $request->requestBody->notes = 'facere';
    $request->requestBody->switchProfileId = 'id';
    $request->requestBody->tags = [
        'quaerat',
        'aperiam',
        'dignissimos',
    ];
    $request->serial = 'quam';

    $response = $sdk->configure->updateDevice($request);

    if ($response->updateDevice200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateDeviceApplianceUplinksSettings

Update the uplink settings for an MX appliance

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceApplianceUplinksSettingsRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceApplianceUplinksSettingsRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceApplianceUplinksSettingsRequestBodyInterfaces;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan1;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan1Pppoe;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan1PppoeAuthentication;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan1Svis;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan1SvisIpv4;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan1SvisIpv4AssignmentModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan1SvisIpv4Nameservers;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan1SvisIpv6;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan1SvisIpv6AssignmentModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan1SvisIpv6Nameservers;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan1VlanTagging;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2Pppoe;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2PppoeAuthentication;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2Svis;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2SvisIpv4;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2SvisIpv4AssignmentModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2SvisIpv4Nameservers;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2SvisIpv6;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2SvisIpv6AssignmentModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2SvisIpv6Nameservers;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2VlanTagging;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateDeviceApplianceUplinksSettingsRequest();
    $request->requestBody = new UpdateDeviceApplianceUplinksSettingsRequestBody();
    $request->requestBody->interfaces = new UpdateDeviceApplianceUplinksSettingsRequestBodyInterfaces();
    $request->requestBody->interfaces->wan1 = new UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan1();
    $request->requestBody->interfaces->wan1->enabled = false;
    $request->requestBody->interfaces->wan1->pppoe = new UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan1Pppoe();
    $request->requestBody->interfaces->wan1->pppoe->authentication = new UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan1PppoeAuthentication();
    $request->requestBody->interfaces->wan1->pppoe->authentication->enabled = false;
    $request->requestBody->interfaces->wan1->pppoe->authentication->password = 'modi';
    $request->requestBody->interfaces->wan1->pppoe->authentication->username = 'Markus_Kertzmann';
    $request->requestBody->interfaces->wan1->pppoe->enabled = false;
    $request->requestBody->interfaces->wan1->svis = new UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan1Svis();
    $request->requestBody->interfaces->wan1->svis->ipv4 = new UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan1SvisIpv4();
    $request->requestBody->interfaces->wan1->svis->ipv4->address = '6238 Kellie Highway';
    $request->requestBody->interfaces->wan1->svis->ipv4->assignmentMode = UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan1SvisIpv4AssignmentModeEnum::STATIC;
    $request->requestBody->interfaces->wan1->svis->ipv4->gateway = 'voluptas';
    $request->requestBody->interfaces->wan1->svis->ipv4->nameservers = new UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan1SvisIpv4Nameservers();
    $request->requestBody->interfaces->wan1->svis->ipv4->nameservers->addresses = [
        'ea',
        'vel',
        'delectus',
        'accusamus',
    ];
    $request->requestBody->interfaces->wan1->svis->ipv6 = new UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan1SvisIpv6();
    $request->requestBody->interfaces->wan1->svis->ipv6->address = '010 McLaughlin Wall';
    $request->requestBody->interfaces->wan1->svis->ipv6->assignmentMode = UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan1SvisIpv6AssignmentModeEnum::DYNAMIC;
    $request->requestBody->interfaces->wan1->svis->ipv6->gateway = 'numquam';
    $request->requestBody->interfaces->wan1->svis->ipv6->nameservers = new UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan1SvisIpv6Nameservers();
    $request->requestBody->interfaces->wan1->svis->ipv6->nameservers->addresses = [
        'cum',
    ];
    $request->requestBody->interfaces->wan1->vlanTagging = new UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan1VlanTagging();
    $request->requestBody->interfaces->wan1->vlanTagging->enabled = false;
    $request->requestBody->interfaces->wan1->vlanTagging->vlanId = 277935;
    $request->requestBody->interfaces->wan2 = new UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2();
    $request->requestBody->interfaces->wan2->enabled = false;
    $request->requestBody->interfaces->wan2->pppoe = new UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2Pppoe();
    $request->requestBody->interfaces->wan2->pppoe->authentication = new UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2PppoeAuthentication();
    $request->requestBody->interfaces->wan2->pppoe->authentication->enabled = false;
    $request->requestBody->interfaces->wan2->pppoe->authentication->password = 'dolores';
    $request->requestBody->interfaces->wan2->pppoe->authentication->username = 'Emilio_Kozey56';
    $request->requestBody->interfaces->wan2->pppoe->enabled = false;
    $request->requestBody->interfaces->wan2->svis = new UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2Svis();
    $request->requestBody->interfaces->wan2->svis->ipv4 = new UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2SvisIpv4();
    $request->requestBody->interfaces->wan2->svis->ipv4->address = '75878 Johns Path';
    $request->requestBody->interfaces->wan2->svis->ipv4->assignmentMode = UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2SvisIpv4AssignmentModeEnum::DYNAMIC;
    $request->requestBody->interfaces->wan2->svis->ipv4->gateway = 'dicta';
    $request->requestBody->interfaces->wan2->svis->ipv4->nameservers = new UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2SvisIpv4Nameservers();
    $request->requestBody->interfaces->wan2->svis->ipv4->nameservers->addresses = [
        'sapiente',
        'id',
        'odit',
        'inventore',
    ];
    $request->requestBody->interfaces->wan2->svis->ipv6 = new UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2SvisIpv6();
    $request->requestBody->interfaces->wan2->svis->ipv6->address = '5135 Stroman Branch';
    $request->requestBody->interfaces->wan2->svis->ipv6->assignmentMode = UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2SvisIpv6AssignmentModeEnum::STATIC;
    $request->requestBody->interfaces->wan2->svis->ipv6->gateway = 'iste';
    $request->requestBody->interfaces->wan2->svis->ipv6->nameservers = new UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2SvisIpv6Nameservers();
    $request->requestBody->interfaces->wan2->svis->ipv6->nameservers->addresses = [
        'nam',
        'animi',
        'labore',
        'voluptate',
    ];
    $request->requestBody->interfaces->wan2->vlanTagging = new UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2VlanTagging();
    $request->requestBody->interfaces->wan2->vlanTagging->enabled = false;
    $request->requestBody->interfaces->wan2->vlanTagging->vlanId = 973642;
    $request->serial = 'quam';

    $response = $sdk->configure->updateDeviceApplianceUplinksSettings($request);

    if ($response->updateDeviceApplianceUplinksSettings200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateDeviceCameraCustomAnalytics

Update custom analytics settings for a camera

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceCameraCustomAnalyticsRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceCameraCustomAnalyticsRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceCameraCustomAnalyticsRequestBodyParameters;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateDeviceCameraCustomAnalyticsRequest();
    $request->requestBody = new UpdateDeviceCameraCustomAnalyticsRequestBody();
    $request->requestBody->artifactId = 'nulla';
    $request->requestBody->enabled = false;
    $request->requestBody->parameters = [
        new UpdateDeviceCameraCustomAnalyticsRequestBodyParameters(),
    ];
    $request->serial = 'voluptates';

    $response = $sdk->configure->updateDeviceCameraCustomAnalytics($request);

    if ($response->updateDeviceCameraCustomAnalytics200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateDeviceCameraQualityAndRetention

Update quality and retention settings for the given camera

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceCameraQualityAndRetentionRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceCameraQualityAndRetentionRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceCameraQualityAndRetentionRequestBodyMotionDetectorVersionEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceCameraQualityAndRetentionRequestBodyQualityEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceCameraQualityAndRetentionRequestBodyResolutionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateDeviceCameraQualityAndRetentionRequest();
    $request->requestBody = new UpdateDeviceCameraQualityAndRetentionRequestBody();
    $request->requestBody->audioRecordingEnabled = false;
    $request->requestBody->motionBasedRetentionEnabled = false;
    $request->requestBody->motionDetectorVersion = UpdateDeviceCameraQualityAndRetentionRequestBodyMotionDetectorVersionEnum::TWO;
    $request->requestBody->profileId = 'perferendis';
    $request->requestBody->quality = UpdateDeviceCameraQualityAndRetentionRequestBodyQualityEnum::ENHANCED;
    $request->requestBody->resolution = UpdateDeviceCameraQualityAndRetentionRequestBodyResolutionEnum::TWO_THOUSAND_ONE_HUNDRED_AND_TWELVEX2112;
    $request->requestBody->restrictedBandwidthModeEnabled = false;
    $request->serial = 'aliquid';

    $response = $sdk->configure->updateDeviceCameraQualityAndRetention($request);

    if ($response->updateDeviceCameraQualityAndRetention200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateDeviceCameraSense

Update sense settings for the given camera

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceCameraSenseRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceCameraSenseRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceCameraSenseRequestBodyAudioDetection;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateDeviceCameraSenseRequest();
    $request->requestBody = new UpdateDeviceCameraSenseRequestBody();
    $request->requestBody->audioDetection = new UpdateDeviceCameraSenseRequestBodyAudioDetection();
    $request->requestBody->audioDetection->enabled = false;
    $request->requestBody->detectionModelId = 'dolore';
    $request->requestBody->mqttBrokerId = 'voluptatem';
    $request->requestBody->senseEnabled = false;
    $request->serial = 'illum';

    $response = $sdk->configure->updateDeviceCameraSense($request);

    if ($response->updateDeviceCameraSense200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateDeviceCameraVideoSettings

Update video settings for the given camera

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceCameraVideoSettingsRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceCameraVideoSettingsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateDeviceCameraVideoSettingsRequest();
    $request->requestBody = new UpdateDeviceCameraVideoSettingsRequestBody();
    $request->requestBody->externalRtspEnabled = false;
    $request->serial = 'laboriosam';

    $response = $sdk->configure->updateDeviceCameraVideoSettings($request);

    if ($response->updateDeviceCameraVideoSettings200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateDeviceCameraWirelessProfiles

Assign wireless profiles to the given camera. Incremental updates are not supported, all profile assignment need to be supplied at once.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceCameraWirelessProfilesRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceCameraWirelessProfilesRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceCameraWirelessProfilesRequestBodyIds;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateDeviceCameraWirelessProfilesRequest();
    $request->requestBody = new UpdateDeviceCameraWirelessProfilesRequestBody();
    $request->requestBody->ids = new UpdateDeviceCameraWirelessProfilesRequestBodyIds();
    $request->requestBody->ids->backup = 'culpa';
    $request->requestBody->ids->primary = 'dicta';
    $request->requestBody->ids->secondary = 'atque';
    $request->serial = 'ratione';

    $response = $sdk->configure->updateDeviceCameraWirelessProfiles($request);

    if ($response->updateDeviceCameraWirelessProfiles200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateDeviceCellularGatewayLan

Update the LAN Settings for a single MG.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceCellularGatewayLanRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceCellularGatewayLanRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceCellularGatewayLanRequestBodyFixedIpAssignments;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceCellularGatewayLanRequestBodyReservedIpRanges;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateDeviceCellularGatewayLanRequest();
    $request->requestBody = new UpdateDeviceCellularGatewayLanRequestBody();
    $request->requestBody->fixedIpAssignments = [
        new UpdateDeviceCellularGatewayLanRequestBodyFixedIpAssignments(),
    ];
    $request->requestBody->reservedIpRanges = [
        new UpdateDeviceCellularGatewayLanRequestBodyReservedIpRanges(),
        new UpdateDeviceCellularGatewayLanRequestBodyReservedIpRanges(),
        new UpdateDeviceCellularGatewayLanRequestBodyReservedIpRanges(),
        new UpdateDeviceCellularGatewayLanRequestBodyReservedIpRanges(),
    ];
    $request->serial = 'atque';

    $response = $sdk->configure->updateDeviceCellularGatewayLan($request);

    if ($response->updateDeviceCellularGatewayLan200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateDeviceCellularGatewayPortForwardingRules

Updates the port forwarding rules for a single MG.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceCellularGatewayPortForwardingRulesRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceCellularGatewayPortForwardingRulesRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceCellularGatewayPortForwardingRulesRequestBodyRules;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateDeviceCellularGatewayPortForwardingRulesRequest();
    $request->requestBody = new UpdateDeviceCellularGatewayPortForwardingRulesRequestBody();
    $request->requestBody->rules = [
        new UpdateDeviceCellularGatewayPortForwardingRulesRequestBodyRules(),
        new UpdateDeviceCellularGatewayPortForwardingRulesRequestBodyRules(),
    ];
    $request->serial = 'culpa';

    $response = $sdk->configure->updateDeviceCellularGatewayPortForwardingRules($request);

    if ($response->updateDeviceCellularGatewayPortForwardingRules200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateDeviceCellularSims

Updates the SIM and APN configurations for a cellular device.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceCellularSimsRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceCellularSimsRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceCellularSimsRequestBodySimFailover;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceCellularSimsRequestBodySims;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceCellularSimsRequestBodySimsApns;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceCellularSimsRequestBodySimsApnsAuthentication;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceCellularSimsRequestBodySimsApnsAuthenticationTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceCellularSimsRequestBodySimsSlotEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateDeviceCellularSimsRequest();
    $request->requestBody = new UpdateDeviceCellularSimsRequestBody();
    $request->requestBody->simFailover = new UpdateDeviceCellularSimsRequestBodySimFailover();
    $request->requestBody->simFailover->enabled = false;
    $request->requestBody->sims = [
        new UpdateDeviceCellularSimsRequestBodySims(),
        new UpdateDeviceCellularSimsRequestBodySims(),
        new UpdateDeviceCellularSimsRequestBodySims(),
        new UpdateDeviceCellularSimsRequestBodySims(),
    ];
    $request->serial = 'a';

    $response = $sdk->configure->updateDeviceCellularSims($request);

    if ($response->updateDeviceCellularSims200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateDeviceManagementInterface

Update the management interface settings for a device

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceManagementInterfaceRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceManagementInterfaceRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceManagementInterfaceRequestBodyWan1;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceManagementInterfaceRequestBodyWan1WanEnabledEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceManagementInterfaceRequestBodyWan2;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceManagementInterfaceRequestBodyWan2WanEnabledEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateDeviceManagementInterfaceRequest();
    $request->requestBody = new UpdateDeviceManagementInterfaceRequestBody();
    $request->requestBody->wan1 = new UpdateDeviceManagementInterfaceRequestBodyWan1();
    $request->requestBody->wan1->staticDns = [
        'cupiditate',
        'suscipit',
    ];
    $request->requestBody->wan1->staticGatewayIp = 'reiciendis';
    $request->requestBody->wan1->staticIp = 'repellendus';
    $request->requestBody->wan1->staticSubnetMask = 'delectus';
    $request->requestBody->wan1->usingStaticIp = false;
    $request->requestBody->wan1->vlan = 67631;
    $request->requestBody->wan1->wanEnabled = UpdateDeviceManagementInterfaceRequestBodyWan1WanEnabledEnum::ENABLED;
    $request->requestBody->wan2 = new UpdateDeviceManagementInterfaceRequestBodyWan2();
    $request->requestBody->wan2->staticDns = [
        'praesentium',
        'neque',
        'quam',
        'animi',
    ];
    $request->requestBody->wan2->staticGatewayIp = 'debitis';
    $request->requestBody->wan2->staticIp = 'voluptatum';
    $request->requestBody->wan2->staticSubnetMask = 'voluptatem';
    $request->requestBody->wan2->usingStaticIp = false;
    $request->requestBody->wan2->vlan = 789286;
    $request->requestBody->wan2->wanEnabled = UpdateDeviceManagementInterfaceRequestBodyWan2WanEnabledEnum::DISABLED;
    $request->serial = 'cumque';

    $response = $sdk->configure->updateDeviceManagementInterface($request);

    if ($response->updateDeviceManagementInterface200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateDeviceSensorRelationships

Assign one or more sensor roles to a given sensor or camera device.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceSensorRelationshipsRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceSensorRelationshipsRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceSensorRelationshipsRequestBodyLivestream;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceSensorRelationshipsRequestBodyLivestreamRelatedDevices;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateDeviceSensorRelationshipsRequest();
    $request->requestBody = new UpdateDeviceSensorRelationshipsRequestBody();
    $request->requestBody->livestream = new UpdateDeviceSensorRelationshipsRequestBodyLivestream();
    $request->requestBody->livestream->relatedDevices = [
        new UpdateDeviceSensorRelationshipsRequestBodyLivestreamRelatedDevices(),
    ];
    $request->serial = 'sint';

    $response = $sdk->configure->updateDeviceSensorRelationships($request);

    if ($response->updateDeviceSensorRelationships200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateDeviceSwitchPort

Update a switch port

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceSwitchPortRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceSwitchPortRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceSwitchPortRequestBodyAccessPolicyTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceSwitchPortRequestBodyProfile;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceSwitchPortRequestBodyStpGuardEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceSwitchPortRequestBodyTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceSwitchPortRequestBodyUdldEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateDeviceSwitchPortRequest();
    $request->requestBody = new UpdateDeviceSwitchPortRequestBody();
    $request->requestBody->accessPolicyNumber = 756936;
    $request->requestBody->accessPolicyType = UpdateDeviceSwitchPortRequestBodyAccessPolicyTypeEnum::OPEN;
    $request->requestBody->adaptivePolicyGroupId = 'quis';
    $request->requestBody->allowedVlans = 'tempore';
    $request->requestBody->daiTrusted = false;
    $request->requestBody->enabled = false;
    $request->requestBody->flexibleStackingEnabled = false;
    $request->requestBody->isolationEnabled = false;
    $request->requestBody->linkNegotiation = 'officia';
    $request->requestBody->macAllowList = [
        'unde',
        'quas',
        'laboriosam',
    ];
    $request->requestBody->name = 'Nora Will';
    $request->requestBody->peerSgtCapable = false;
    $request->requestBody->poeEnabled = false;
    $request->requestBody->portScheduleId = 'hic';
    $request->requestBody->profile = new UpdateDeviceSwitchPortRequestBodyProfile();
    $request->requestBody->profile->enabled = false;
    $request->requestBody->profile->id = '696991af-388c-4e03-a144-48c7977a0ef2';
    $request->requestBody->profile->iname = 'delectus';
    $request->requestBody->rstpEnabled = false;
    $request->requestBody->stickyMacAllowList = [
        'ipsum',
        'laboriosam',
    ];
    $request->requestBody->stickyMacAllowListLimit = 41346;
    $request->requestBody->stormControlEnabled = false;
    $request->requestBody->stpGuard = UpdateDeviceSwitchPortRequestBodyStpGuardEnum::BPDU_GUARD;
    $request->requestBody->tags = [
        'debitis',
        'a',
        'itaque',
    ];
    $request->requestBody->type = UpdateDeviceSwitchPortRequestBodyTypeEnum::TRUNK;
    $request->requestBody->udld = UpdateDeviceSwitchPortRequestBodyUdldEnum::ENFORCE;
    $request->requestBody->vlan = 584663;
    $request->requestBody->voiceVlan = 237208;
    $request->portId = 'aliquam';
    $request->serial = 'illo';

    $response = $sdk->configure->updateDeviceSwitchPort($request);

    if ($response->updateDeviceSwitchPort200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateDeviceSwitchRoutingInterface

Update a layer 3 interface for a switch

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceSwitchRoutingInterfaceRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceSwitchRoutingInterfaceRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceSwitchRoutingInterfaceRequestBodyIpv6;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceSwitchRoutingInterfaceRequestBodyMulticastRoutingEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceSwitchRoutingInterfaceRequestBodyOspfSettings;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceSwitchRoutingInterfaceRequestBodyOspfV3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateDeviceSwitchRoutingInterfaceRequest();
    $request->requestBody = new UpdateDeviceSwitchRoutingInterfaceRequestBody();
    $request->requestBody->defaultGateway = 'veniam';
    $request->requestBody->interfaceIp = 'sed';
    $request->requestBody->ipv6 = new UpdateDeviceSwitchRoutingInterfaceRequestBodyIpv6();
    $request->requestBody->ipv6->address = '849 Flavie Fields';
    $request->requestBody->ipv6->assignmentMode = 'delectus';
    $request->requestBody->ipv6->gateway = 'incidunt';
    $request->requestBody->ipv6->prefix = 'quod';
    $request->requestBody->multicastRouting = UpdateDeviceSwitchRoutingInterfaceRequestBodyMulticastRoutingEnum::IGMP_SNOOPING_QUERIER;
    $request->requestBody->name = 'Constance Stark';
    $request->requestBody->ospfSettings = new UpdateDeviceSwitchRoutingInterfaceRequestBodyOspfSettings();
    $request->requestBody->ospfSettings->area = 'est';
    $request->requestBody->ospfSettings->cost = 446484;
    $request->requestBody->ospfSettings->isPassiveEnabled = false;
    $request->requestBody->ospfV3 = new UpdateDeviceSwitchRoutingInterfaceRequestBodyOspfV3();
    $request->requestBody->ospfV3->area = 'illo';
    $request->requestBody->ospfV3->cost = 451926;
    $request->requestBody->ospfV3->isPassiveEnabled = false;
    $request->requestBody->subnet = 'consequatur';
    $request->requestBody->vlanId = 962120;
    $request->interfaceId = 'incidunt';
    $request->serial = 'dolore';

    $response = $sdk->configure->updateDeviceSwitchRoutingInterface($request);

    if ($response->updateDeviceSwitchRoutingInterface200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateDeviceSwitchRoutingInterfaceDhcp

Update a layer 3 interface DHCP configuration for a switch

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceSwitchRoutingInterfaceDhcpRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceSwitchRoutingInterfaceDhcpRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpLeaseTimeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpOptions;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpOptionsTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDnsNameserversOptionEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyFixedIpAssignments;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyReservedIpRanges;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateDeviceSwitchRoutingInterfaceDhcpRequest();
    $request->requestBody = new UpdateDeviceSwitchRoutingInterfaceDhcpRequestBody();
    $request->requestBody->bootFileName = 'nemo';
    $request->requestBody->bootNextServer = 'est';
    $request->requestBody->bootOptionsEnabled = false;
    $request->requestBody->dhcpLeaseTime = UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpLeaseTimeEnum::THIRTY_MINUTES;
    $request->requestBody->dhcpMode = UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpModeEnum::DHCP_SERVER;
    $request->requestBody->dhcpOptions = [
        new UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpOptions(),
        new UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpOptions(),
        new UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpOptions(),
        new UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpOptions(),
    ];
    $request->requestBody->dhcpRelayServerIps = [
        'laboriosam',
        'quam',
    ];
    $request->requestBody->dnsCustomNameservers = [
        'officia',
        'repellat',
        'cupiditate',
    ];
    $request->requestBody->dnsNameserversOption = UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDnsNameserversOptionEnum::OPEN_DNS;
    $request->requestBody->fixedIpAssignments = [
        new UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyFixedIpAssignments(),
        new UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyFixedIpAssignments(),
        new UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyFixedIpAssignments(),
    ];
    $request->requestBody->reservedIpRanges = [
        new UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyReservedIpRanges(),
        new UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyReservedIpRanges(),
        new UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyReservedIpRanges(),
    ];
    $request->interfaceId = 'fugiat';
    $request->serial = 'inventore';

    $response = $sdk->configure->updateDeviceSwitchRoutingInterfaceDhcp($request);

    if ($response->updateDeviceSwitchRoutingInterfaceDhcp200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateDeviceSwitchRoutingStaticRoute

Update a layer 3 static route for a switch

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceSwitchRoutingStaticRouteRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceSwitchRoutingStaticRouteRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateDeviceSwitchRoutingStaticRouteRequest();
    $request->requestBody = new UpdateDeviceSwitchRoutingStaticRouteRequestBody();
    $request->requestBody->advertiseViaOspfEnabled = false;
    $request->requestBody->name = 'Leon Williamson';
    $request->requestBody->nextHopIp = 'nesciunt';
    $request->requestBody->preferOverOspfRoutesEnabled = false;
    $request->requestBody->subnet = 'ab';
    $request->serial = 'quibusdam';
    $request->staticRouteId = 'suscipit';

    $response = $sdk->configure->updateDeviceSwitchRoutingStaticRoute($request);

    if ($response->updateDeviceSwitchRoutingStaticRoute200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateDeviceSwitchWarmSpare

Update warm spare configuration for a switch. The spare will use the same L3 configuration as the primary. Note that this will irreversibly destroy any existing L3 configuration on the spare.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceSwitchWarmSpareRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceSwitchWarmSpareRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateDeviceSwitchWarmSpareRequest();
    $request->requestBody = new UpdateDeviceSwitchWarmSpareRequestBody();
    $request->requestBody->enabled = false;
    $request->requestBody->spareSerial = 'quidem';
    $request->serial = 'delectus';

    $response = $sdk->configure->updateDeviceSwitchWarmSpare($request);

    if ($response->updateDeviceSwitchWarmSpare200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateDeviceWirelessBluetoothSettings

Update the bluetooth settings for a wireless device

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceWirelessBluetoothSettingsRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceWirelessBluetoothSettingsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateDeviceWirelessBluetoothSettingsRequest();
    $request->requestBody = new UpdateDeviceWirelessBluetoothSettingsRequestBody();
    $request->requestBody->major = 366324;
    $request->requestBody->minor = 763934;
    $request->requestBody->uuid = '838fbb8c-20cb-467f-84b4-25e99e6234c9';
    $request->serial = 'reiciendis';

    $response = $sdk->configure->updateDeviceWirelessBluetoothSettings($request);

    if ($response->updateDeviceWirelessBluetoothSettings200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateDeviceWirelessRadioSettings

Update the radio settings of a device

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceWirelessRadioSettingsRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceWirelessRadioSettingsRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceWirelessRadioSettingsRequestBodyFiveGhzSettings;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceWirelessRadioSettingsRequestBodyFiveGhzSettingsChannelEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceWirelessRadioSettingsRequestBodyFiveGhzSettingsChannelWidthEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceWirelessRadioSettingsRequestBodyTwoFourGhzSettings;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceWirelessRadioSettingsRequestBodyTwoFourGhzSettingsChannelEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateDeviceWirelessRadioSettingsRequest();
    $request->requestBody = new UpdateDeviceWirelessRadioSettingsRequestBody();
    $request->requestBody->fiveGhzSettings = new UpdateDeviceWirelessRadioSettingsRequestBodyFiveGhzSettings();
    $request->requestBody->fiveGhzSettings->channel = UpdateDeviceWirelessRadioSettingsRequestBodyFiveGhzSettingsChannelEnum::ONE_HUNDRED_AND_SIXTEEN;
    $request->requestBody->fiveGhzSettings->channelWidth = UpdateDeviceWirelessRadioSettingsRequestBodyFiveGhzSettingsChannelWidthEnum::EIGHTY;
    $request->requestBody->fiveGhzSettings->targetPower = 447323;
    $request->requestBody->rfProfileId = 'omnis';
    $request->requestBody->twoFourGhzSettings = new UpdateDeviceWirelessRadioSettingsRequestBodyTwoFourGhzSettings();
    $request->requestBody->twoFourGhzSettings->channel = UpdateDeviceWirelessRadioSettingsRequestBodyTwoFourGhzSettingsChannelEnum::TWELVE;
    $request->requestBody->twoFourGhzSettings->targetPower = 950337;
    $request->serial = 'recusandae';

    $response = $sdk->configure->updateDeviceWirelessRadioSettings($request);

    if ($response->updateDeviceWirelessRadioSettings200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetwork

Update a network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkRequest();
    $request->requestBody = new UpdateNetworkRequestBody();
    $request->requestBody->enrollmentString = 'expedita';
    $request->requestBody->name = 'Tamara Pfeffer';
    $request->requestBody->notes = 'ratione';
    $request->requestBody->tags = [
        'vero',
        'dolore',
        'nam',
    ];
    $request->requestBody->timeZone = 'officia';
    $request->networkId = 'maiores';

    $response = $sdk->configure->updateNetwork($request);

    if ($response->updateNetwork200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkAlertsSettings

Update the alert configuration for this network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkAlertsSettingsRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkAlertsSettingsRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkAlertsSettingsRequestBodyAlerts;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkAlertsSettingsRequestBodyAlertsAlertDestinations;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkAlertsSettingsRequestBodyDefaultDestinations;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkAlertsSettingsRequest();
    $request->requestBody = new UpdateNetworkAlertsSettingsRequestBody();
    $request->requestBody->alerts = [
        new UpdateNetworkAlertsSettingsRequestBodyAlerts(),
        new UpdateNetworkAlertsSettingsRequestBodyAlerts(),
        new UpdateNetworkAlertsSettingsRequestBodyAlerts(),
    ];
    $request->requestBody->defaultDestinations = new UpdateNetworkAlertsSettingsRequestBodyDefaultDestinations();
    $request->requestBody->defaultDestinations->allAdmins = false;
    $request->requestBody->defaultDestinations->emails = [
        'saepe',
    ];
    $request->requestBody->defaultDestinations->httpServerIds = [
        'eaque',
        'ex',
    ];
    $request->requestBody->defaultDestinations->snmp = false;
    $request->networkId = 'eveniet';

    $response = $sdk->configure->updateNetworkAlertsSettings($request);

    if ($response->updateNetworkAlertsSettings200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkApplianceConnectivityMonitoringDestinations

Update the connectivity testing destinations for an MX network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceConnectivityMonitoringDestinationsRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceConnectivityMonitoringDestinationsRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceConnectivityMonitoringDestinationsRequestBodyDestinations;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkApplianceConnectivityMonitoringDestinationsRequest();
    $request->requestBody = new UpdateNetworkApplianceConnectivityMonitoringDestinationsRequestBody();
    $request->requestBody->destinations = [
        new UpdateNetworkApplianceConnectivityMonitoringDestinationsRequestBodyDestinations(),
        new UpdateNetworkApplianceConnectivityMonitoringDestinationsRequestBodyDestinations(),
        new UpdateNetworkApplianceConnectivityMonitoringDestinationsRequestBodyDestinations(),
        new UpdateNetworkApplianceConnectivityMonitoringDestinationsRequestBodyDestinations(),
    ];
    $request->networkId = 'deleniti';

    $response = $sdk->configure->updateNetworkApplianceConnectivityMonitoringDestinations($request);

    if ($response->updateNetworkApplianceConnectivityMonitoringDestinations200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkApplianceContentFiltering

Update the content filtering settings for an MX network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceContentFilteringRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceContentFilteringRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceContentFilteringRequestBodyUrlCategoryListSizeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkApplianceContentFilteringRequest();
    $request->requestBody = new UpdateNetworkApplianceContentFilteringRequestBody();
    $request->requestBody->allowedUrlPatterns = [
        'aut',
        'dolorum',
        'nostrum',
    ];
    $request->requestBody->blockedUrlCategories = [
        'nam',
        'numquam',
    ];
    $request->requestBody->blockedUrlPatterns = [
        'nostrum',
        'maiores',
    ];
    $request->requestBody->urlCategoryListSize = UpdateNetworkApplianceContentFilteringRequestBodyUrlCategoryListSizeEnum::FULL_LIST;
    $request->networkId = 'autem';

    $response = $sdk->configure->updateNetworkApplianceContentFiltering($request);

    if ($response->updateNetworkApplianceContentFiltering200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkApplianceFirewallCellularFirewallRules

Update the cellular firewall rules of an MX network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceFirewallCellularFirewallRulesRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBodyRules;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBodyRulesPolicyEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBodyRulesProtocolEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkApplianceFirewallCellularFirewallRulesRequest();
    $request->requestBody = new UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBody();
    $request->requestBody->rules = [
        new UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBodyRules(),
        new UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBodyRules(),
        new UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBodyRules(),
        new UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBodyRules(),
    ];
    $request->networkId = 'minima';

    $response = $sdk->configure->updateNetworkApplianceFirewallCellularFirewallRules($request);

    if ($response->updateNetworkApplianceFirewallCellularFirewallRules200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkApplianceFirewallFirewalledService

Updates the accessibility settings for the given service ('ICMP', 'web', or 'SNMP')

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceFirewallFirewalledServiceRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceFirewallFirewalledServiceRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceFirewallFirewalledServiceRequestBodyAccessEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkApplianceFirewallFirewalledServiceRequest();
    $request->requestBody = new UpdateNetworkApplianceFirewallFirewalledServiceRequestBody();
    $request->requestBody->access = UpdateNetworkApplianceFirewallFirewalledServiceRequestBodyAccessEnum::RESTRICTED;
    $request->requestBody->allowedIps = [
        'nesciunt',
        'corrupti',
        'nostrum',
        'fuga',
    ];
    $request->networkId = 'sequi';
    $request->service = 'maxime';

    $response = $sdk->configure->updateNetworkApplianceFirewallFirewalledService($request);

    if ($response->updateNetworkApplianceFirewallFirewalledService200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkApplianceFirewallInboundCellularFirewallRules

Update the inbound cellular firewall rules of an MX network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceFirewallInboundCellularFirewallRulesRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceFirewallInboundCellularFirewallRulesRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceFirewallInboundCellularFirewallRulesRequestBodyRules;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceFirewallInboundCellularFirewallRulesRequestBodyRulesPolicyEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceFirewallInboundCellularFirewallRulesRequestBodyRulesProtocolEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkApplianceFirewallInboundCellularFirewallRulesRequest();
    $request->requestBody = new UpdateNetworkApplianceFirewallInboundCellularFirewallRulesRequestBody();
    $request->requestBody->rules = [
        new UpdateNetworkApplianceFirewallInboundCellularFirewallRulesRequestBodyRules(),
        new UpdateNetworkApplianceFirewallInboundCellularFirewallRulesRequestBodyRules(),
    ];
    $request->networkId = 'laborum';

    $response = $sdk->configure->updateNetworkApplianceFirewallInboundCellularFirewallRules($request);

    if ($response->updateNetworkApplianceFirewallInboundCellularFirewallRules200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkApplianceFirewallInboundFirewallRules

Update the inbound firewall rules of an MX network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceFirewallInboundFirewallRulesRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRules;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRulesPolicyEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRulesProtocolEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkApplianceFirewallInboundFirewallRulesRequest();
    $request->requestBody = new UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBody();
    $request->requestBody->rules = [
        new UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRules(),
        new UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRules(),
        new UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRules(),
        new UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRules(),
    ];
    $request->requestBody->syslogDefaultRule = false;
    $request->networkId = 'autem';

    $response = $sdk->configure->updateNetworkApplianceFirewallInboundFirewallRules($request);

    if ($response->updateNetworkApplianceFirewallInboundFirewallRules200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkApplianceFirewallL3FirewallRules

Update the L3 firewall rules of an MX network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceFirewallL3FirewallRulesRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceFirewallL3FirewallRulesRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceFirewallL3FirewallRulesRequestBodyRules;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceFirewallL3FirewallRulesRequestBodyRulesPolicyEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceFirewallL3FirewallRulesRequestBodyRulesProtocolEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkApplianceFirewallL3FirewallRulesRequest();
    $request->requestBody = new UpdateNetworkApplianceFirewallL3FirewallRulesRequestBody();
    $request->requestBody->rules = [
        new UpdateNetworkApplianceFirewallL3FirewallRulesRequestBodyRules(),
    ];
    $request->requestBody->syslogDefaultRule = false;
    $request->networkId = 'sunt';

    $response = $sdk->configure->updateNetworkApplianceFirewallL3FirewallRules($request);

    if ($response->updateNetworkApplianceFirewallL3FirewallRules200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkApplianceFirewallL7FirewallRules

Update the MX L7 firewall rules for an MX network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceFirewallL7FirewallRulesRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceFirewallL7FirewallRulesRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceFirewallL7FirewallRulesRequestBodyRules;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceFirewallL7FirewallRulesRequestBodyRulesPolicyEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceFirewallL7FirewallRulesRequestBodyRulesTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkApplianceFirewallL7FirewallRulesRequest();
    $request->requestBody = new UpdateNetworkApplianceFirewallL7FirewallRulesRequestBody();
    $request->requestBody->rules = [
        new UpdateNetworkApplianceFirewallL7FirewallRulesRequestBodyRules(),
        new UpdateNetworkApplianceFirewallL7FirewallRulesRequestBodyRules(),
        new UpdateNetworkApplianceFirewallL7FirewallRulesRequestBodyRules(),
    ];
    $request->networkId = 'occaecati';

    $response = $sdk->configure->updateNetworkApplianceFirewallL7FirewallRules($request);

    if ($response->updateNetworkApplianceFirewallL7FirewallRules200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkApplianceFirewallOneToManyNatRules

Set the 1:Many NAT mapping rules for an MX network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceFirewallOneToManyNatRulesRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRules;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesPortRules;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesPortRulesProtocolEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesUplinkEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkApplianceFirewallOneToManyNatRulesRequest();
    $request->requestBody = new UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBody();
    $request->requestBody->rules = [
        new UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRules(),
        new UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRules(),
        new UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRules(),
    ];
    $request->networkId = 'necessitatibus';

    $response = $sdk->configure->updateNetworkApplianceFirewallOneToManyNatRules($request);

    if ($response->updateNetworkApplianceFirewallOneToManyNatRules200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkApplianceFirewallOneToOneNatRules

Set the 1:1 NAT mapping rules for an MX network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceFirewallOneToOneNatRulesRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRules;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesAllowedInbound;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesAllowedInboundProtocolEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesUplinkEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkApplianceFirewallOneToOneNatRulesRequest();
    $request->requestBody = new UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBody();
    $request->requestBody->rules = [
        new UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRules(),
    ];
    $request->networkId = 'autem';

    $response = $sdk->configure->updateNetworkApplianceFirewallOneToOneNatRules($request);

    if ($response->updateNetworkApplianceFirewallOneToOneNatRules200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkApplianceFirewallPortForwardingRules

Update the port forwarding rules for an MX network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceFirewallPortForwardingRulesRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceFirewallPortForwardingRulesRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceFirewallPortForwardingRulesRequestBodyRules;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceFirewallPortForwardingRulesRequestBodyRulesProtocolEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceFirewallPortForwardingRulesRequestBodyRulesUplinkEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkApplianceFirewallPortForwardingRulesRequest();
    $request->requestBody = new UpdateNetworkApplianceFirewallPortForwardingRulesRequestBody();
    $request->requestBody->rules = [
        new UpdateNetworkApplianceFirewallPortForwardingRulesRequestBodyRules(),
        new UpdateNetworkApplianceFirewallPortForwardingRulesRequestBodyRules(),
        new UpdateNetworkApplianceFirewallPortForwardingRulesRequestBodyRules(),
        new UpdateNetworkApplianceFirewallPortForwardingRulesRequestBodyRules(),
    ];
    $request->networkId = 'eveniet';

    $response = $sdk->configure->updateNetworkApplianceFirewallPortForwardingRules($request);

    if ($response->updateNetworkApplianceFirewallPortForwardingRules200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkApplianceFirewallSettings

Update the firewall settings for this network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceFirewallSettingsRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceFirewallSettingsRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceFirewallSettingsRequestBodySpoofingProtection;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceFirewallSettingsRequestBodySpoofingProtectionIpSourceGuard;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceFirewallSettingsRequestBodySpoofingProtectionIpSourceGuardModeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkApplianceFirewallSettingsRequest();
    $request->requestBody = new UpdateNetworkApplianceFirewallSettingsRequestBody();
    $request->requestBody->spoofingProtection = new UpdateNetworkApplianceFirewallSettingsRequestBodySpoofingProtection();
    $request->requestBody->spoofingProtection->ipSourceGuard = new UpdateNetworkApplianceFirewallSettingsRequestBodySpoofingProtectionIpSourceGuard();
    $request->requestBody->spoofingProtection->ipSourceGuard->mode = UpdateNetworkApplianceFirewallSettingsRequestBodySpoofingProtectionIpSourceGuardModeEnum::LOG;
    $request->networkId = 'blanditiis';

    $response = $sdk->configure->updateNetworkApplianceFirewallSettings($request);

    if ($response->updateNetworkApplianceFirewallSettings200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkAppliancePort

Update the per-port VLAN settings for a single MX port.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkAppliancePortRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkAppliancePortRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkAppliancePortRequest();
    $request->requestBody = new UpdateNetworkAppliancePortRequestBody();
    $request->requestBody->accessPolicy = 'a';
    $request->requestBody->allowedVlans = 'natus';
    $request->requestBody->dropUntaggedTraffic = false;
    $request->requestBody->enabled = false;
    $request->requestBody->type = 'sapiente';
    $request->requestBody->vlan = 832989;
    $request->networkId = 'facilis';
    $request->portId = 'molestias';

    $response = $sdk->configure->updateNetworkAppliancePort($request);

    if ($response->updateNetworkAppliancePort200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkAppliancePrefixesDelegatedStatic

Update a static delegated prefix from a network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkAppliancePrefixesDelegatedStaticRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkAppliancePrefixesDelegatedStaticRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkAppliancePrefixesDelegatedStaticRequestBodyOrigin;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkAppliancePrefixesDelegatedStaticRequestBodyOriginTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkAppliancePrefixesDelegatedStaticRequest();
    $request->requestBody = new UpdateNetworkAppliancePrefixesDelegatedStaticRequestBody();
    $request->requestBody->description = 'dolore';
    $request->requestBody->origin = new UpdateNetworkAppliancePrefixesDelegatedStaticRequestBodyOrigin();
    $request->requestBody->origin->interfaces = [
        'accusantium',
    ];
    $request->requestBody->origin->type = UpdateNetworkAppliancePrefixesDelegatedStaticRequestBodyOriginTypeEnum::INTERNET;
    $request->requestBody->prefix = 'nisi';
    $request->networkId = 'velit';
    $request->staticDelegatedPrefixId = 'tempore';

    $response = $sdk->configure->updateNetworkAppliancePrefixesDelegatedStatic($request);

    if ($response->updateNetworkAppliancePrefixesDelegatedStatic200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkApplianceSecurityIntrusion

Set the supported intrusion settings for an MX network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceSecurityIntrusionRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceSecurityIntrusionRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceSecurityIntrusionRequestBodyIdsRulesetsEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceSecurityIntrusionRequestBodyModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceSecurityIntrusionRequestBodyProtectedNetworks;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkApplianceSecurityIntrusionRequest();
    $request->requestBody = new UpdateNetworkApplianceSecurityIntrusionRequestBody();
    $request->requestBody->idsRulesets = UpdateNetworkApplianceSecurityIntrusionRequestBodyIdsRulesetsEnum::SECURITY;
    $request->requestBody->mode = UpdateNetworkApplianceSecurityIntrusionRequestBodyModeEnum::PREVENTION;
    $request->requestBody->protectedNetworks = new UpdateNetworkApplianceSecurityIntrusionRequestBodyProtectedNetworks();
    $request->requestBody->protectedNetworks->excludedCidr = [
        'vitae',
        'iusto',
        'atque',
    ];
    $request->requestBody->protectedNetworks->includedCidr = [
        'molestiae',
    ];
    $request->requestBody->protectedNetworks->useDefault = false;
    $request->networkId = 'nam';

    $response = $sdk->configure->updateNetworkApplianceSecurityIntrusion($request);

    if ($response->updateNetworkApplianceSecurityIntrusion200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkApplianceSecurityMalware

Set the supported malware settings for an MX network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceSecurityMalwareRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceSecurityMalwareRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceSecurityMalwareRequestBodyAllowedFiles;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceSecurityMalwareRequestBodyAllowedUrls;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceSecurityMalwareRequestBodyModeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkApplianceSecurityMalwareRequest();
    $request->requestBody = new UpdateNetworkApplianceSecurityMalwareRequestBody();
    $request->requestBody->allowedFiles = [
        new UpdateNetworkApplianceSecurityMalwareRequestBodyAllowedFiles(),
    ];
    $request->requestBody->allowedUrls = [
        new UpdateNetworkApplianceSecurityMalwareRequestBodyAllowedUrls(),
    ];
    $request->requestBody->mode = UpdateNetworkApplianceSecurityMalwareRequestBodyModeEnum::ENABLED;
    $request->networkId = 'asperiores';

    $response = $sdk->configure->updateNetworkApplianceSecurityMalware($request);

    if ($response->updateNetworkApplianceSecurityMalware200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkApplianceSettings

Update the appliance settings for a network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceSettingsRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceSettingsRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceSettingsRequestBodyClientTrackingMethodEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceSettingsRequestBodyDeploymentModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceSettingsRequestBodyDynamicDns;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkApplianceSettingsRequest();
    $request->requestBody = new UpdateNetworkApplianceSettingsRequestBody();
    $request->requestBody->clientTrackingMethod = UpdateNetworkApplianceSettingsRequestBodyClientTrackingMethodEnum::UNIQUE_CLIENT_IDENTIFIER;
    $request->requestBody->deploymentMode = UpdateNetworkApplianceSettingsRequestBodyDeploymentModeEnum::ROUTED;
    $request->requestBody->dynamicDns = new UpdateNetworkApplianceSettingsRequestBodyDynamicDns();
    $request->requestBody->dynamicDns->enabled = false;
    $request->requestBody->dynamicDns->prefix = 'quam';
    $request->networkId = 'deleniti';

    $response = $sdk->configure->updateNetworkApplianceSettings($request);

    if ($response->updateNetworkApplianceSettings200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkApplianceSingleLan

Update single LAN configuration

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceSingleLanRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceSingleLanRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceSingleLanRequestBodyIpv6;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceSingleLanRequestBodyIpv6PrefixAssignments;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceSingleLanRequestBodyIpv6PrefixAssignmentsOrigin;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceSingleLanRequestBodyIpv6PrefixAssignmentsOriginTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceSingleLanRequestBodyMandatoryDhcp;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkApplianceSingleLanRequest();
    $request->requestBody = new UpdateNetworkApplianceSingleLanRequestBody();
    $request->requestBody->applianceIp = 'rem';
    $request->requestBody->ipv6 = new UpdateNetworkApplianceSingleLanRequestBodyIpv6();
    $request->requestBody->ipv6->enabled = false;
    $request->requestBody->ipv6->prefixAssignments = [
        new UpdateNetworkApplianceSingleLanRequestBodyIpv6PrefixAssignments(),
        new UpdateNetworkApplianceSingleLanRequestBodyIpv6PrefixAssignments(),
    ];
    $request->requestBody->mandatoryDhcp = new UpdateNetworkApplianceSingleLanRequestBodyMandatoryDhcp();
    $request->requestBody->mandatoryDhcp->enabled = false;
    $request->requestBody->subnet = 'eos';
    $request->networkId = 'labore';

    $response = $sdk->configure->updateNetworkApplianceSingleLan($request);

    if ($response->updateNetworkApplianceSingleLan200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkApplianceSsid

Update the attributes of an MX SSID

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceSsidRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceSsidRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceSsidRequestBodyAuthModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceSsidRequestBodyDhcpEnforcedDeauthentication;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceSsidRequestBodyEncryptionModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceSsidRequestBodyRadiusServers;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceSsidRequestBodyWpaEncryptionModeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkApplianceSsidRequest();
    $request->requestBody = new UpdateNetworkApplianceSsidRequestBody();
    $request->requestBody->authMode = UpdateNetworkApplianceSsidRequestBodyAuthModeEnum::EIGHT_THOUSAND_AND_TWENTY_ONEX_MERAKI;
    $request->requestBody->defaultVlanId = 501591;
    $request->requestBody->dhcpEnforcedDeauthentication = new UpdateNetworkApplianceSsidRequestBodyDhcpEnforcedDeauthentication();
    $request->requestBody->dhcpEnforcedDeauthentication->enabled = false;
    $request->requestBody->enabled = false;
    $request->requestBody->encryptionMode = UpdateNetworkApplianceSsidRequestBodyEncryptionModeEnum::WPA;
    $request->requestBody->name = 'Rudy Gorczany';
    $request->requestBody->psk = 'ducimus';
    $request->requestBody->radiusServers = [
        new UpdateNetworkApplianceSsidRequestBodyRadiusServers(),
    ];
    $request->requestBody->visible = false;
    $request->requestBody->wpaEncryptionMode = UpdateNetworkApplianceSsidRequestBodyWpaEncryptionModeEnum::WPA3_ONLY;
    $request->networkId = 'quis';
    $request->number = 'accusantium';

    $response = $sdk->configure->updateNetworkApplianceSsid($request);

    if ($response->updateNetworkApplianceSsid200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkApplianceStaticRoute

Update a static route for an MX or teleworker network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceStaticRouteRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceStaticRouteRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceStaticRouteRequestBodyReservedIpRanges;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkApplianceStaticRouteRequest();
    $request->requestBody = new UpdateNetworkApplianceStaticRouteRequestBody();
    $request->requestBody->enabled = false;
    $request->requestBody->fixedIpAssignments = [
        'consectetur' => 'asperiores',
    ];
    $request->requestBody->gatewayIp = 'architecto';
    $request->requestBody->gatewayVlanId = 'sint';
    $request->requestBody->name = 'Mr. Garry Zemlak';
    $request->requestBody->reservedIpRanges = [
        new UpdateNetworkApplianceStaticRouteRequestBodyReservedIpRanges(),
        new UpdateNetworkApplianceStaticRouteRequestBodyReservedIpRanges(),
        new UpdateNetworkApplianceStaticRouteRequestBodyReservedIpRanges(),
        new UpdateNetworkApplianceStaticRouteRequestBodyReservedIpRanges(),
    ];
    $request->requestBody->subnet = 'debitis';
    $request->networkId = 'labore';
    $request->staticRouteId = 'veritatis';

    $response = $sdk->configure->updateNetworkApplianceStaticRoute($request);

    if ($response->updateNetworkApplianceStaticRoute200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkApplianceTrafficShaping

Update the traffic shaping settings for an MX network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceTrafficShapingRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceTrafficShapingRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceTrafficShapingRequestBodyGlobalBandwidthLimits;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkApplianceTrafficShapingRequest();
    $request->requestBody = new UpdateNetworkApplianceTrafficShapingRequestBody();
    $request->requestBody->globalBandwidthLimits = new UpdateNetworkApplianceTrafficShapingRequestBodyGlobalBandwidthLimits();
    $request->requestBody->globalBandwidthLimits->limitDown = 328744;
    $request->requestBody->globalBandwidthLimits->limitUp = 165483;
    $request->networkId = 'itaque';

    $response = $sdk->configure->updateNetworkApplianceTrafficShaping($request);

    if ($response->updateNetworkApplianceTrafficShaping200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkApplianceTrafficShapingCustomPerformanceClass

Update a custom performance class for an MX network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceTrafficShapingCustomPerformanceClassRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceTrafficShapingCustomPerformanceClassRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkApplianceTrafficShapingCustomPerformanceClassRequest();
    $request->requestBody = new UpdateNetworkApplianceTrafficShapingCustomPerformanceClassRequestBody();
    $request->requestBody->maxJitter = 625418;
    $request->requestBody->maxLatency = 712523;
    $request->requestBody->maxLossPercentage = 622789;
    $request->requestBody->name = 'Lionel Klocko';
    $request->customPerformanceClassId = 'odit';
    $request->networkId = 'odit';

    $response = $sdk->configure->updateNetworkApplianceTrafficShapingCustomPerformanceClass($request);

    if ($response->updateNetworkApplianceTrafficShapingCustomPerformanceClass200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkApplianceTrafficShapingRules

Update the traffic shaping settings rules for an MX network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceTrafficShapingRulesRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceTrafficShapingRulesRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceTrafficShapingRulesRequestBodyRules;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitions;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimits;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimitsBandwidthLimits;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkApplianceTrafficShapingRulesRequest();
    $request->requestBody = new UpdateNetworkApplianceTrafficShapingRulesRequestBody();
    $request->requestBody->defaultRulesEnabled = false;
    $request->requestBody->rules = [
        new UpdateNetworkApplianceTrafficShapingRulesRequestBodyRules(),
        new UpdateNetworkApplianceTrafficShapingRulesRequestBodyRules(),
    ];
    $request->networkId = 'error';

    $response = $sdk->configure->updateNetworkApplianceTrafficShapingRules($request);

    if ($response->updateNetworkApplianceTrafficShapingRules200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkApplianceTrafficShapingUplinkBandwidth

Updates the uplink bandwidth settings for your MX network.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBodyBandwidthLimits;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBodyBandwidthLimitsCellular;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBodyBandwidthLimitsWan1;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBodyBandwidthLimitsWan2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequest();
    $request->requestBody = new UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBody();
    $request->requestBody->bandwidthLimits = new UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBodyBandwidthLimits();
    $request->requestBody->bandwidthLimits->cellular = new UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBodyBandwidthLimitsCellular();
    $request->requestBody->bandwidthLimits->cellular->limitDown = 427461;
    $request->requestBody->bandwidthLimits->cellular->limitUp = 679835;
    $request->requestBody->bandwidthLimits->wan1 = new UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBodyBandwidthLimitsWan1();
    $request->requestBody->bandwidthLimits->wan1->limitDown = 903;
    $request->requestBody->bandwidthLimits->wan1->limitUp = 930398;
    $request->requestBody->bandwidthLimits->wan2 = new UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBodyBandwidthLimitsWan2();
    $request->requestBody->bandwidthLimits->wan2->limitDown = 69814;
    $request->requestBody->bandwidthLimits->wan2->limitUp = 125154;
    $request->networkId = 'amet';

    $response = $sdk->configure->updateNetworkApplianceTrafficShapingUplinkBandwidth($request);

    if ($response->updateNetworkApplianceTrafficShapingUplinkBandwidth200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkApplianceTrafficShapingUplinkSelection

Update uplink selection settings for an MX network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceTrafficShapingUplinkSelectionRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyDefaultUplinkEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyFailoverAndFailback;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyFailoverAndFailbackImmediate;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferences;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesFailOverCriterionEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPerformanceClass;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPerformanceClassBuiltinPerformanceClassNameEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPerformanceClassTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPreferredUplinkEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFilters;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValue;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueDestination;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueSource;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferences;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesPreferredUplinkEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFilters;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValue;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueDestination;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueSource;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequest();
    $request->requestBody = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBody();
    $request->requestBody->activeActiveAutoVpnEnabled = false;
    $request->requestBody->defaultUplink = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyDefaultUplinkEnum::WAN2;
    $request->requestBody->failoverAndFailback = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyFailoverAndFailback();
    $request->requestBody->failoverAndFailback->immediate = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyFailoverAndFailbackImmediate();
    $request->requestBody->failoverAndFailback->immediate->enabled = false;
    $request->requestBody->loadBalancingEnabled = false;
    $request->requestBody->vpnTrafficUplinkPreferences = [
        new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferences(),
        new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferences(),
    ];
    $request->requestBody->wanTrafficUplinkPreferences = [
        new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferences(),
        new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferences(),
        new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferences(),
    ];
    $request->networkId = 'non';

    $response = $sdk->configure->updateNetworkApplianceTrafficShapingUplinkSelection($request);

    if ($response->updateNetworkApplianceTrafficShapingUplinkSelection200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkApplianceVlan

Update a VLAN

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceVlanRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceVlanRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceVlanRequestBodyDhcpHandlingEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceVlanRequestBodyDhcpLeaseTimeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceVlanRequestBodyDhcpOptions;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceVlanRequestBodyDhcpOptionsTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceVlanRequestBodyIpv6;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceVlanRequestBodyIpv6PrefixAssignments;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceVlanRequestBodyIpv6PrefixAssignmentsOrigin;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceVlanRequestBodyIpv6PrefixAssignmentsOriginTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceVlanRequestBodyMandatoryDhcp;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceVlanRequestBodyReservedIpRanges;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceVlanRequestBodyTemplateVlanTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkApplianceVlanRequest();
    $request->requestBody = new UpdateNetworkApplianceVlanRequestBody();
    $request->requestBody->applianceIp = 'esse';
    $request->requestBody->cidr = 'vero';
    $request->requestBody->dhcpBootFilename = 'eligendi';
    $request->requestBody->dhcpBootNextServer = 'minima';
    $request->requestBody->dhcpBootOptionsEnabled = false;
    $request->requestBody->dhcpHandling = UpdateNetworkApplianceVlanRequestBodyDhcpHandlingEnum::RELAY_DHCP_TO_ANOTHER_SERVER;
    $request->requestBody->dhcpLeaseTime = UpdateNetworkApplianceVlanRequestBodyDhcpLeaseTimeEnum::FOUR_HOURS;
    $request->requestBody->dhcpOptions = [
        new UpdateNetworkApplianceVlanRequestBodyDhcpOptions(),
    ];
    $request->requestBody->dhcpRelayServerIps = [
        'autem',
        'in',
        'repellat',
        'amet',
    ];
    $request->requestBody->dnsNameservers = 'cumque';
    $request->requestBody->fixedIpAssignments = [
        'optio' => 'quo',
        'repudiandae' => 'tempora',
    ];
    $request->requestBody->groupPolicyId = 'libero';
    $request->requestBody->ipv6 = new UpdateNetworkApplianceVlanRequestBodyIpv6();
    $request->requestBody->ipv6->enabled = false;
    $request->requestBody->ipv6->prefixAssignments = [
        new UpdateNetworkApplianceVlanRequestBodyIpv6PrefixAssignments(),
        new UpdateNetworkApplianceVlanRequestBodyIpv6PrefixAssignments(),
    ];
    $request->requestBody->mandatoryDhcp = new UpdateNetworkApplianceVlanRequestBodyMandatoryDhcp();
    $request->requestBody->mandatoryDhcp->enabled = false;
    $request->requestBody->mask = 847985;
    $request->requestBody->name = 'Vicki Mayer';
    $request->requestBody->reservedIpRanges = [
        new UpdateNetworkApplianceVlanRequestBodyReservedIpRanges(),
        new UpdateNetworkApplianceVlanRequestBodyReservedIpRanges(),
        new UpdateNetworkApplianceVlanRequestBodyReservedIpRanges(),
        new UpdateNetworkApplianceVlanRequestBodyReservedIpRanges(),
    ];
    $request->requestBody->subnet = 'consectetur';
    $request->requestBody->templateVlanType = UpdateNetworkApplianceVlanRequestBodyTemplateVlanTypeEnum::UNIQUE;
    $request->requestBody->vpnNatSubnet = 'ullam';
    $request->networkId = 'nihil';
    $request->vlanId = 'eius';

    $response = $sdk->configure->updateNetworkApplianceVlan($request);

    if ($response->updateNetworkApplianceVlan200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkApplianceVlansSettings

Enable/Disable VLANs for the given network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceVlansSettingsRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceVlansSettingsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkApplianceVlansSettingsRequest();
    $request->requestBody = new UpdateNetworkApplianceVlansSettingsRequestBody();
    $request->requestBody->vlansEnabled = false;
    $request->networkId = 'dignissimos';

    $response = $sdk->configure->updateNetworkApplianceVlansSettings($request);

    if ($response->updateNetworkApplianceVlansSettings200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkApplianceVpnBgp

Update a Hub BGP Configuration

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceVpnBgpRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceVpnBgpRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceVpnBgpRequestBodyNeighbors;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceVpnBgpRequestBodyNeighborsIpv6;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkApplianceVpnBgpRequest();
    $request->requestBody = new UpdateNetworkApplianceVpnBgpRequestBody();
    $request->requestBody->asNumber = 361113;
    $request->requestBody->enabled = false;
    $request->requestBody->ibgpHoldTimer = 16590;
    $request->requestBody->neighbors = [
        new UpdateNetworkApplianceVpnBgpRequestBodyNeighbors(),
    ];
    $request->networkId = 'amet';

    $response = $sdk->configure->updateNetworkApplianceVpnBgp($request);

    if ($response->updateNetworkApplianceVpnBgp200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkApplianceVpnSiteToSiteVpn

Update the site-to-site VPN settings of a network. Only valid for MX networks in NAT mode.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceVpnSiteToSiteVpnRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceVpnSiteToSiteVpnRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceVpnSiteToSiteVpnRequestBodyHubs;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceVpnSiteToSiteVpnRequestBodyModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceVpnSiteToSiteVpnRequestBodySubnets;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkApplianceVpnSiteToSiteVpnRequest();
    $request->requestBody = new UpdateNetworkApplianceVpnSiteToSiteVpnRequestBody();
    $request->requestBody->hubs = [
        new UpdateNetworkApplianceVpnSiteToSiteVpnRequestBodyHubs(),
        new UpdateNetworkApplianceVpnSiteToSiteVpnRequestBodyHubs(),
    ];
    $request->requestBody->mode = UpdateNetworkApplianceVpnSiteToSiteVpnRequestBodyModeEnum::NONE;
    $request->requestBody->subnets = [
        new UpdateNetworkApplianceVpnSiteToSiteVpnRequestBodySubnets(),
        new UpdateNetworkApplianceVpnSiteToSiteVpnRequestBodySubnets(),
        new UpdateNetworkApplianceVpnSiteToSiteVpnRequestBodySubnets(),
        new UpdateNetworkApplianceVpnSiteToSiteVpnRequestBodySubnets(),
    ];
    $request->networkId = 'dolore';

    $response = $sdk->configure->updateNetworkApplianceVpnSiteToSiteVpn($request);

    if ($response->updateNetworkApplianceVpnSiteToSiteVpn200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkApplianceWarmSpare

Update MX warm spare settings

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceWarmSpareRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceWarmSpareRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkApplianceWarmSpareRequest();
    $request->requestBody = new UpdateNetworkApplianceWarmSpareRequestBody();
    $request->requestBody->enabled = false;
    $request->requestBody->spareSerial = 'magnam';
    $request->requestBody->uplinkMode = 'maiores';
    $request->requestBody->virtualIp1 = 'ipsam';
    $request->requestBody->virtualIp2 = 'dicta';
    $request->networkId = 'hic';

    $response = $sdk->configure->updateNetworkApplianceWarmSpare($request);

    if ($response->updateNetworkApplianceWarmSpare200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkCameraQualityRetentionProfile

Update an existing quality retention profile for this network.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkCameraQualityRetentionProfileRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkCameraQualityRetentionProfileRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettings;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72QualityEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72ResolutionEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12WE;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12WEQualityEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12WEResolutionEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv13;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv13QualityEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv13ResolutionEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71QualityEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71ResolutionEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72X;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72XQualityEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72XResolutionEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32QualityEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32ResolutionEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv33;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv33QualityEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv33ResolutionEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv52;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv52QualityEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv52ResolutionEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv63;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv63QualityEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv63ResolutionEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv63X;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv63XQualityEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv63XResolutionEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv93;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv93QualityEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv93ResolutionEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv93X;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv93XQualityEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv93XResolutionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkCameraQualityRetentionProfileRequest();
    $request->requestBody = new UpdateNetworkCameraQualityRetentionProfileRequestBody();
    $request->requestBody->audioRecordingEnabled = false;
    $request->requestBody->cloudArchiveEnabled = false;
    $request->requestBody->maxRetentionDays = 505558;
    $request->requestBody->motionBasedRetentionEnabled = false;
    $request->requestBody->motionDetectorVersion = 728379;
    $request->requestBody->name = 'Lena Goldner';
    $request->requestBody->restrictedBandwidthModeEnabled = false;
    $request->requestBody->scheduleId = 'sunt';
    $request->requestBody->videoSettings = new UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettings();
    $request->requestBody->videoSettings->mv12Mv22Mv72 = new UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72();
    $request->requestBody->videoSettings->mv12Mv22Mv72->quality = UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72QualityEnum::HIGH;
    $request->requestBody->videoSettings->mv12Mv22Mv72->resolution = UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72ResolutionEnum::ONE_THOUSAND_TWO_HUNDRED_AND_EIGHTYX720;
    $request->requestBody->videoSettings->mv12We = new UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12WE();
    $request->requestBody->videoSettings->mv12We->quality = UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12WEQualityEnum::STANDARD;
    $request->requestBody->videoSettings->mv12We->resolution = UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12WEResolutionEnum::ONE_THOUSAND_TWO_HUNDRED_AND_EIGHTYX720;
    $request->requestBody->videoSettings->mv13 = new UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv13();
    $request->requestBody->videoSettings->mv13->quality = UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv13QualityEnum::HIGH;
    $request->requestBody->videoSettings->mv13->resolution = UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv13ResolutionEnum::ONE_THOUSAND_AND_EIGHTYX1080;
    $request->requestBody->videoSettings->mv21Mv71 = new UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71();
    $request->requestBody->videoSettings->mv21Mv71->quality = UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71QualityEnum::HIGH;
    $request->requestBody->videoSettings->mv21Mv71->resolution = UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71ResolutionEnum::ONE_THOUSAND_TWO_HUNDRED_AND_EIGHTYX720;
    $request->requestBody->videoSettings->mv22XMv72X = new UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72X();
    $request->requestBody->videoSettings->mv22XMv72X->quality = UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72XQualityEnum::ENHANCED;
    $request->requestBody->videoSettings->mv22XMv72X->resolution = UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72XResolutionEnum::ONE_THOUSAND_TWO_HUNDRED_AND_EIGHTYX720;
    $request->requestBody->videoSettings->mv32 = new UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32();
    $request->requestBody->videoSettings->mv32->quality = UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32QualityEnum::HIGH;
    $request->requestBody->videoSettings->mv32->resolution = UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32ResolutionEnum::ONE_THOUSAND_AND_EIGHTYX1080;
    $request->requestBody->videoSettings->mv33 = new UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv33();
    $request->requestBody->videoSettings->mv33->quality = UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv33QualityEnum::HIGH;
    $request->requestBody->videoSettings->mv33->resolution = UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv33ResolutionEnum::ONE_THOUSAND_AND_EIGHTYX1080;
    $request->requestBody->videoSettings->mv52 = new UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv52();
    $request->requestBody->videoSettings->mv52->quality = UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv52QualityEnum::STANDARD;
    $request->requestBody->videoSettings->mv52->resolution = UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv52ResolutionEnum::TWO_THOUSAND_SIX_HUNDRED_AND_EIGHTY_EIGHTX1512;
    $request->requestBody->videoSettings->mv63 = new UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv63();
    $request->requestBody->videoSettings->mv63->quality = UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv63QualityEnum::ENHANCED;
    $request->requestBody->videoSettings->mv63->resolution = UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv63ResolutionEnum::TWO_THOUSAND_SIX_HUNDRED_AND_EIGHTY_EIGHTX1512;
    $request->requestBody->videoSettings->mv63X = new UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv63X();
    $request->requestBody->videoSettings->mv63X->quality = UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv63XQualityEnum::HIGH;
    $request->requestBody->videoSettings->mv63X->resolution = UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv63XResolutionEnum::ONE_THOUSAND_NINE_HUNDRED_AND_TWENTYX1080;
    $request->requestBody->videoSettings->mv93 = new UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv93();
    $request->requestBody->videoSettings->mv93->quality = UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv93QualityEnum::STANDARD;
    $request->requestBody->videoSettings->mv93->resolution = UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv93ResolutionEnum::ONE_THOUSAND_AND_EIGHTYX1080;
    $request->requestBody->videoSettings->mv93X = new UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv93X();
    $request->requestBody->videoSettings->mv93X->quality = UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv93XQualityEnum::STANDARD;
    $request->requestBody->videoSettings->mv93X->resolution = UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv93XResolutionEnum::TWO_THOUSAND_ONE_HUNDRED_AND_TWELVEX2112;
    $request->networkId = 'nobis';
    $request->qualityRetentionProfileId = 'porro';

    $response = $sdk->configure->updateNetworkCameraQualityRetentionProfile($request);

    if ($response->updateNetworkCameraQualityRetentionProfile200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkCameraWirelessProfile

Update an existing camera wireless profile in this network.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkCameraWirelessProfileRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkCameraWirelessProfileRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkCameraWirelessProfileRequestBodyIdentity;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkCameraWirelessProfileRequestBodySsid;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkCameraWirelessProfileRequestBodySsidAuthModeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkCameraWirelessProfileRequest();
    $request->requestBody = new UpdateNetworkCameraWirelessProfileRequestBody();
    $request->requestBody->identity = new UpdateNetworkCameraWirelessProfileRequestBodyIdentity();
    $request->requestBody->identity->password = 'labore';
    $request->requestBody->identity->username = 'Laury18';
    $request->requestBody->name = 'Paula Turner';
    $request->requestBody->ssid = new UpdateNetworkCameraWirelessProfileRequestBodySsid();
    $request->requestBody->ssid->authMode = UpdateNetworkCameraWirelessProfileRequestBodySsidAuthModeEnum::PSK;
    $request->requestBody->ssid->encryptionMode = 'fugiat';
    $request->requestBody->ssid->name = 'Jan Torphy';
    $request->requestBody->ssid->psk = 'aut';
    $request->networkId = 'voluptatem';
    $request->wirelessProfileId = 'libero';

    $response = $sdk->configure->updateNetworkCameraWirelessProfile($request);

    if ($response->updateNetworkCameraWirelessProfile200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkCellularGatewayConnectivityMonitoringDestinations

Update the connectivity testing destinations for an MG network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsRequestBodyDestinations;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsRequest();
    $request->requestBody = new UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsRequestBody();
    $request->requestBody->destinations = [
        new UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsRequestBodyDestinations(),
        new UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsRequestBodyDestinations(),
        new UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsRequestBodyDestinations(),
    ];
    $request->networkId = 'odio';

    $response = $sdk->configure->updateNetworkCellularGatewayConnectivityMonitoringDestinations($request);

    if ($response->updateNetworkCellularGatewayConnectivityMonitoringDestinations200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkCellularGatewayDhcp

Update common DHCP settings of MGs

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkCellularGatewayDhcpRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkCellularGatewayDhcpRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkCellularGatewayDhcpRequest();
    $request->requestBody = new UpdateNetworkCellularGatewayDhcpRequestBody();
    $request->requestBody->dhcpLeaseTime = 'omnis';
    $request->requestBody->dnsCustomNameservers = [
        'delectus',
        'magni',
        'sit',
        'velit',
    ];
    $request->requestBody->dnsNameservers = 'voluptatum';
    $request->networkId = 'nihil';

    $response = $sdk->configure->updateNetworkCellularGatewayDhcp($request);

    if ($response->updateNetworkCellularGatewayDhcp200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkCellularGatewaySubnetPool

Update the subnet pool and mask configuration for MGs in the network.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkCellularGatewaySubnetPoolRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkCellularGatewaySubnetPoolRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkCellularGatewaySubnetPoolRequest();
    $request->requestBody = new UpdateNetworkCellularGatewaySubnetPoolRequestBody();
    $request->requestBody->cidr = 'neque';
    $request->requestBody->mask = 135775;
    $request->networkId = 'eaque';

    $response = $sdk->configure->updateNetworkCellularGatewaySubnetPool($request);

    if ($response->updateNetworkCellularGatewaySubnetPool200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkCellularGatewayUplink

Updates the uplink settings for your MG network.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkCellularGatewayUplinkRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkCellularGatewayUplinkRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkCellularGatewayUplinkRequestBodyBandwidthLimits;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkCellularGatewayUplinkRequest();
    $request->requestBody = new UpdateNetworkCellularGatewayUplinkRequestBody();
    $request->requestBody->bandwidthLimits = new UpdateNetworkCellularGatewayUplinkRequestBodyBandwidthLimits();
    $request->requestBody->bandwidthLimits->limitDown = 360334;
    $request->requestBody->bandwidthLimits->limitUp = 587489;
    $request->networkId = 'aut';

    $response = $sdk->configure->updateNetworkCellularGatewayUplink($request);

    if ($response->updateNetworkCellularGatewayUplink200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkClientPolicy

Update the policy assigned to a client on the network. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkClientPolicyRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkClientPolicyRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkClientPolicyRequest();
    $request->requestBody = new UpdateNetworkClientPolicyRequestBody();
    $request->requestBody->devicePolicy = 'impedit';
    $request->requestBody->groupPolicyId = 'quod';
    $request->clientId = 'quo';
    $request->networkId = 'architecto';

    $response = $sdk->configure->updateNetworkClientPolicy($request);

    if ($response->updateNetworkClientPolicy200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkClientSplashAuthorizationStatus

Update a client's splash authorization. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkClientSplashAuthorizationStatusRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkClientSplashAuthorizationStatusRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids0;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids1;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids10;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids11;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids12;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids13;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids14;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids2;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids3;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids4;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids5;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids6;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids7;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids8;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids9;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkClientSplashAuthorizationStatusRequest();
    $request->requestBody = new UpdateNetworkClientSplashAuthorizationStatusRequestBody();
    $request->requestBody->ssids = new UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids();
    $request->requestBody->ssids->zero = new UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids0();
    $request->requestBody->ssids->zero->isAuthorized = false;
    $request->requestBody->ssids->one = new UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids1();
    $request->requestBody->ssids->one->isAuthorized = false;
    $request->requestBody->ssids->ten = new UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids10();
    $request->requestBody->ssids->ten->isAuthorized = false;
    $request->requestBody->ssids->eleven = new UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids11();
    $request->requestBody->ssids->eleven->isAuthorized = false;
    $request->requestBody->ssids->twelve = new UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids12();
    $request->requestBody->ssids->twelve->isAuthorized = false;
    $request->requestBody->ssids->thirteen = new UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids13();
    $request->requestBody->ssids->thirteen->isAuthorized = false;
    $request->requestBody->ssids->fourteen = new UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids14();
    $request->requestBody->ssids->fourteen->isAuthorized = false;
    $request->requestBody->ssids->two = new UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids2();
    $request->requestBody->ssids->two->isAuthorized = false;
    $request->requestBody->ssids->three = new UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids3();
    $request->requestBody->ssids->three->isAuthorized = false;
    $request->requestBody->ssids->four = new UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids4();
    $request->requestBody->ssids->four->isAuthorized = false;
    $request->requestBody->ssids->five = new UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids5();
    $request->requestBody->ssids->five->isAuthorized = false;
    $request->requestBody->ssids->six = new UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids6();
    $request->requestBody->ssids->six->isAuthorized = false;
    $request->requestBody->ssids->seven = new UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids7();
    $request->requestBody->ssids->seven->isAuthorized = false;
    $request->requestBody->ssids->eight = new UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids8();
    $request->requestBody->ssids->eight->isAuthorized = false;
    $request->requestBody->ssids->nine = new UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids9();
    $request->requestBody->ssids->nine->isAuthorized = false;
    $request->clientId = 'voluptatem';
    $request->networkId = 'perspiciatis';

    $response = $sdk->configure->updateNetworkClientSplashAuthorizationStatus($request);

    if ($response->updateNetworkClientSplashAuthorizationStatus200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkFirmwareUpgrades

Update firmware upgrade information for a network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkFirmwareUpgradesRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkFirmwareUpgradesRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkFirmwareUpgradesRequestBodyProducts;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkFirmwareUpgradesRequestBodyProductsAppliance;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkFirmwareUpgradesRequestBodyProductsApplianceNextUpgrade;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkFirmwareUpgradesRequestBodyProductsApplianceNextUpgradeToVersion;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkFirmwareUpgradesRequestBodyProductsCamera;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkFirmwareUpgradesRequestBodyProductsCameraNextUpgrade;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkFirmwareUpgradesRequestBodyProductsCameraNextUpgradeToVersion;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkFirmwareUpgradesRequestBodyProductsCellularGateway;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkFirmwareUpgradesRequestBodyProductsCellularGatewayNextUpgrade;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkFirmwareUpgradesRequestBodyProductsCellularGatewayNextUpgradeToVersion;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkFirmwareUpgradesRequestBodyProductsSensor;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkFirmwareUpgradesRequestBodyProductsSensorNextUpgrade;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkFirmwareUpgradesRequestBodyProductsSensorNextUpgradeToVersion;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkFirmwareUpgradesRequestBodyProductsSwitch;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkFirmwareUpgradesRequestBodyProductsSwitchNextUpgrade;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkFirmwareUpgradesRequestBodyProductsSwitchNextUpgradeToVersion;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkFirmwareUpgradesRequestBodyProductsWireless;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkFirmwareUpgradesRequestBodyProductsWirelessNextUpgrade;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkFirmwareUpgradesRequestBodyProductsWirelessNextUpgradeToVersion;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindow;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindowDayOfWeekEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindowHourOfDayEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkFirmwareUpgradesRequest();
    $request->requestBody = new UpdateNetworkFirmwareUpgradesRequestBody();
    $request->requestBody->products = new UpdateNetworkFirmwareUpgradesRequestBodyProducts();
    $request->requestBody->products->appliance = new UpdateNetworkFirmwareUpgradesRequestBodyProductsAppliance();
    $request->requestBody->products->appliance->nextUpgrade = new UpdateNetworkFirmwareUpgradesRequestBodyProductsApplianceNextUpgrade();
    $request->requestBody->products->appliance->nextUpgrade->time = 'ea';
    $request->requestBody->products->appliance->nextUpgrade->toVersion = new UpdateNetworkFirmwareUpgradesRequestBodyProductsApplianceNextUpgradeToVersion();
    $request->requestBody->products->appliance->nextUpgrade->toVersion->id = '400313b3-e504-44f6-9fe7-2dc4077d0cc3';
    $request->requestBody->products->appliance->participateInNextBetaRelease = false;
    $request->requestBody->products->camera = new UpdateNetworkFirmwareUpgradesRequestBodyProductsCamera();
    $request->requestBody->products->camera->nextUpgrade = new UpdateNetworkFirmwareUpgradesRequestBodyProductsCameraNextUpgrade();
    $request->requestBody->products->camera->nextUpgrade->time = 'tenetur';
    $request->requestBody->products->camera->nextUpgrade->toVersion = new UpdateNetworkFirmwareUpgradesRequestBodyProductsCameraNextUpgradeToVersion();
    $request->requestBody->products->camera->nextUpgrade->toVersion->id = '408efc15-ceb4-4d6e-9eae-0f75aedf2aca';
    $request->requestBody->products->camera->participateInNextBetaRelease = false;
    $request->requestBody->products->cellularGateway = new UpdateNetworkFirmwareUpgradesRequestBodyProductsCellularGateway();
    $request->requestBody->products->cellularGateway->nextUpgrade = new UpdateNetworkFirmwareUpgradesRequestBodyProductsCellularGatewayNextUpgrade();
    $request->requestBody->products->cellularGateway->nextUpgrade->time = 'distinctio';
    $request->requestBody->products->cellularGateway->nextUpgrade->toVersion = new UpdateNetworkFirmwareUpgradesRequestBodyProductsCellularGatewayNextUpgradeToVersion();
    $request->requestBody->products->cellularGateway->nextUpgrade->toVersion->id = '58b991c9-26dd-4b58-9461-e7421cbe6d95';
    $request->requestBody->products->cellularGateway->participateInNextBetaRelease = false;
    $request->requestBody->products->sensor = new UpdateNetworkFirmwareUpgradesRequestBodyProductsSensor();
    $request->requestBody->products->sensor->nextUpgrade = new UpdateNetworkFirmwareUpgradesRequestBodyProductsSensorNextUpgrade();
    $request->requestBody->products->sensor->nextUpgrade->time = 'sit';
    $request->requestBody->products->sensor->nextUpgrade->toVersion = new UpdateNetworkFirmwareUpgradesRequestBodyProductsSensorNextUpgradeToVersion();
    $request->requestBody->products->sensor->nextUpgrade->toVersion->id = '2f0ea930-b69f-47ac-af72-f88500904911';
    $request->requestBody->products->sensor->participateInNextBetaRelease = false;
    $request->requestBody->products->switch = new UpdateNetworkFirmwareUpgradesRequestBodyProductsSwitch();
    $request->requestBody->products->switch->nextUpgrade = new UpdateNetworkFirmwareUpgradesRequestBodyProductsSwitchNextUpgrade();
    $request->requestBody->products->switch->nextUpgrade->time = 'ex';
    $request->requestBody->products->switch->nextUpgrade->toVersion = new UpdateNetworkFirmwareUpgradesRequestBodyProductsSwitchNextUpgradeToVersion();
    $request->requestBody->products->switch->nextUpgrade->toVersion->id = '08207888-ec66-4183-bfe9-659eb40ec16f';
    $request->requestBody->products->switch->participateInNextBetaRelease = false;
    $request->requestBody->products->wireless = new UpdateNetworkFirmwareUpgradesRequestBodyProductsWireless();
    $request->requestBody->products->wireless->nextUpgrade = new UpdateNetworkFirmwareUpgradesRequestBodyProductsWirelessNextUpgrade();
    $request->requestBody->products->wireless->nextUpgrade->time = 'est';
    $request->requestBody->products->wireless->nextUpgrade->toVersion = new UpdateNetworkFirmwareUpgradesRequestBodyProductsWirelessNextUpgradeToVersion();
    $request->requestBody->products->wireless->nextUpgrade->toVersion->id = 'f75b0b53-2a4d-4a37-8baa-f4452c4842c9';
    $request->requestBody->products->wireless->participateInNextBetaRelease = false;
    $request->requestBody->timezone = 'tempore';
    $request->requestBody->upgradeWindow = new UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindow();
    $request->requestBody->upgradeWindow->dayOfWeek = UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindowDayOfWeekEnum::FRIDAY;
    $request->requestBody->upgradeWindow->hourOfDay = UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindowHourOfDayEnum::TWO00;
    $request->networkId = 'at';

    $response = $sdk->configure->updateNetworkFirmwareUpgrades($request);

    if ($response->updateNetworkFirmwareUpgrades200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkFirmwareUpgradesStagedEvents

Update the Staged Upgrade Event for a network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkFirmwareUpgradesStagedEventsRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkFirmwareUpgradesStagedEventsRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkFirmwareUpgradesStagedEventsRequestBodyStages;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkFirmwareUpgradesStagedEventsRequestBodyStagesGroup;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkFirmwareUpgradesStagedEventsRequestBodyStagesMilestones;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkFirmwareUpgradesStagedEventsRequest();
    $request->requestBody = new UpdateNetworkFirmwareUpgradesStagedEventsRequestBody();
    $request->requestBody->stages = [
        new UpdateNetworkFirmwareUpgradesStagedEventsRequestBodyStages(),
    ];
    $request->networkId = 'explicabo';

    $response = $sdk->configure->updateNetworkFirmwareUpgradesStagedEvents($request);

    if ($response->updateNetworkFirmwareUpgradesStagedEvents200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkFirmwareUpgradesStagedGroup

Update a Staged Upgrade Group for a network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkFirmwareUpgradesStagedGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkFirmwareUpgradesStagedGroupRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevices;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevicesDevices;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevicesSwitchStacks;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkFirmwareUpgradesStagedGroupRequest();
    $request->requestBody = new UpdateNetworkFirmwareUpgradesStagedGroupRequestBody();
    $request->requestBody->assignedDevices = new UpdateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevices();
    $request->requestBody->assignedDevices->devices = [
        new UpdateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevicesDevices(),
        new UpdateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevicesDevices(),
        new UpdateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevicesDevices(),
        new UpdateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevicesDevices(),
    ];
    $request->requestBody->assignedDevices->switchStacks = [
        new UpdateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevicesSwitchStacks(),
        new UpdateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevicesSwitchStacks(),
        new UpdateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevicesSwitchStacks(),
    ];
    $request->requestBody->description = 'sapiente';
    $request->requestBody->isDefault = false;
    $request->requestBody->name = 'Bob Boyle';
    $request->groupId = 'blanditiis';
    $request->networkId = 'sapiente';

    $response = $sdk->configure->updateNetworkFirmwareUpgradesStagedGroup($request);

    if ($response->updateNetworkFirmwareUpgradesStagedGroup200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkFirmwareUpgradesStagedStages

Assign Staged Upgrade Group order in the sequence.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkFirmwareUpgradesStagedStagesRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkFirmwareUpgradesStagedStagesRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkFirmwareUpgradesStagedStagesRequestBodyJson;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkFirmwareUpgradesStagedStagesRequestBodyJsonGroup;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkFirmwareUpgradesStagedStagesRequest();
    $request->requestBody = new UpdateNetworkFirmwareUpgradesStagedStagesRequestBody();
    $request->requestBody->json = [
        new UpdateNetworkFirmwareUpgradesStagedStagesRequestBodyJson(),
        new UpdateNetworkFirmwareUpgradesStagedStagesRequestBodyJson(),
    ];
    $request->networkId = 'incidunt';

    $response = $sdk->configure->updateNetworkFirmwareUpgradesStagedStages($request);

    if ($response->updateNetworkFirmwareUpgradesStagedStages200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkFloorPlan

Update a floor plan's geolocation and other meta data

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkFloorPlanRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkFloorPlanRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkFloorPlanRequestBodyBottomLeftCorner;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkFloorPlanRequestBodyBottomRightCorner;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkFloorPlanRequestBodyCenter;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkFloorPlanRequestBodyTopLeftCorner;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkFloorPlanRequestBodyTopRightCorner;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkFloorPlanRequest();
    $request->requestBody = new UpdateNetworkFloorPlanRequestBody();
    $request->requestBody->bottomLeftCorner = new UpdateNetworkFloorPlanRequestBodyBottomLeftCorner();
    $request->requestBody->bottomLeftCorner->lat = 2861.47;
    $request->requestBody->bottomLeftCorner->lng = 2810.68;
    $request->requestBody->bottomRightCorner = new UpdateNetworkFloorPlanRequestBodyBottomRightCorner();
    $request->requestBody->bottomRightCorner->lat = 3134.2;
    $request->requestBody->bottomRightCorner->lng = 4700.52;
    $request->requestBody->center = new UpdateNetworkFloorPlanRequestBodyCenter();
    $request->requestBody->center->lat = 1908.5;
    $request->requestBody->center->lng = 9477.04;
    $request->requestBody->imageContents = 'saepe';
    $request->requestBody->name = 'Orville Goldner';
    $request->requestBody->topLeftCorner = new UpdateNetworkFloorPlanRequestBodyTopLeftCorner();
    $request->requestBody->topLeftCorner->lat = 3672.51;
    $request->requestBody->topLeftCorner->lng = 1986.16;
    $request->requestBody->topRightCorner = new UpdateNetworkFloorPlanRequestBodyTopRightCorner();
    $request->requestBody->topRightCorner->lat = 9390.79;
    $request->requestBody->topRightCorner->lng = 4297.25;
    $request->floorPlanId = 'dolor';
    $request->networkId = 'placeat';

    $response = $sdk->configure->updateNetworkFloorPlan($request);

    if ($response->updateNetworkFloorPlan200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkGroupPolicy

Update a group policy

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkGroupPolicyRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkGroupPolicyRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkGroupPolicyRequestBodyBandwidth;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkGroupPolicyRequestBodyBandwidthBandwidthLimits;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkGroupPolicyRequestBodyBandwidthSettingsEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkGroupPolicyRequestBodyBonjourForwarding;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkGroupPolicyRequestBodyBonjourForwardingRules;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkGroupPolicyRequestBodyBonjourForwardingSettingsEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkGroupPolicyRequestBodyContentFiltering;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkGroupPolicyRequestBodyContentFilteringAllowedUrlPatterns;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkGroupPolicyRequestBodyContentFilteringAllowedUrlPatternsSettingsEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlCategories;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlCategoriesSettingsEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlPatterns;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlPatternsSettingsEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShaping;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL3FirewallRules;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRules;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRulesPolicyEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRulesTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingSettingsEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRules;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitions;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesPerClientBandwidthLimits;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesPerClientBandwidthLimitsBandwidthLimits;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkGroupPolicyRequestBodyScheduling;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkGroupPolicyRequestBodySchedulingFriday;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkGroupPolicyRequestBodySchedulingMonday;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkGroupPolicyRequestBodySchedulingSaturday;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkGroupPolicyRequestBodySchedulingSunday;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkGroupPolicyRequestBodySchedulingThursday;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkGroupPolicyRequestBodySchedulingTuesday;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkGroupPolicyRequestBodySchedulingWednesday;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkGroupPolicyRequestBodySplashAuthSettingsEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkGroupPolicyRequestBodyVlanTagging;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkGroupPolicyRequestBodyVlanTaggingSettingsEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkGroupPolicyRequest();
    $request->requestBody = new UpdateNetworkGroupPolicyRequestBody();
    $request->requestBody->bandwidth = new UpdateNetworkGroupPolicyRequestBodyBandwidth();
    $request->requestBody->bandwidth->bandwidthLimits = new UpdateNetworkGroupPolicyRequestBodyBandwidthBandwidthLimits();
    $request->requestBody->bandwidth->bandwidthLimits->limitDown = 553542;
    $request->requestBody->bandwidth->bandwidthLimits->limitUp = 152302;
    $request->requestBody->bandwidth->settings = UpdateNetworkGroupPolicyRequestBodyBandwidthSettingsEnum::CUSTOM;
    $request->requestBody->bonjourForwarding = new UpdateNetworkGroupPolicyRequestBodyBonjourForwarding();
    $request->requestBody->bonjourForwarding->rules = [
        new UpdateNetworkGroupPolicyRequestBodyBonjourForwardingRules(),
        new UpdateNetworkGroupPolicyRequestBodyBonjourForwardingRules(),
        new UpdateNetworkGroupPolicyRequestBodyBonjourForwardingRules(),
    ];
    $request->requestBody->bonjourForwarding->settings = UpdateNetworkGroupPolicyRequestBodyBonjourForwardingSettingsEnum::CUSTOM;
    $request->requestBody->contentFiltering = new UpdateNetworkGroupPolicyRequestBodyContentFiltering();
    $request->requestBody->contentFiltering->allowedUrlPatterns = new UpdateNetworkGroupPolicyRequestBodyContentFilteringAllowedUrlPatterns();
    $request->requestBody->contentFiltering->allowedUrlPatterns->patterns = [
        'unde',
        'deserunt',
    ];
    $request->requestBody->contentFiltering->allowedUrlPatterns->settings = UpdateNetworkGroupPolicyRequestBodyContentFilteringAllowedUrlPatternsSettingsEnum::NETWORK_DEFAULT;
    $request->requestBody->contentFiltering->blockedUrlCategories = new UpdateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlCategories();
    $request->requestBody->contentFiltering->blockedUrlCategories->categories = [
        'occaecati',
        'optio',
    ];
    $request->requestBody->contentFiltering->blockedUrlCategories->settings = UpdateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlCategoriesSettingsEnum::OVERRIDE;
    $request->requestBody->contentFiltering->blockedUrlPatterns = new UpdateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlPatterns();
    $request->requestBody->contentFiltering->blockedUrlPatterns->patterns = [
        'asperiores',
        'nam',
    ];
    $request->requestBody->contentFiltering->blockedUrlPatterns->settings = UpdateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlPatternsSettingsEnum::OVERRIDE;
    $request->requestBody->firewallAndTrafficShaping = new UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShaping();
    $request->requestBody->firewallAndTrafficShaping->l3FirewallRules = [
        new UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL3FirewallRules(),
        new UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL3FirewallRules(),
        new UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL3FirewallRules(),
        new UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL3FirewallRules(),
    ];
    $request->requestBody->firewallAndTrafficShaping->l7FirewallRules = [
        new UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRules(),
        new UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRules(),
    ];
    $request->requestBody->firewallAndTrafficShaping->settings = UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingSettingsEnum::IGNORE;
    $request->requestBody->firewallAndTrafficShaping->trafficShapingRules = [
        new UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRules(),
        new UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRules(),
        new UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRules(),
        new UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRules(),
    ];
    $request->requestBody->name = 'Willie Leffler';
    $request->requestBody->scheduling = new UpdateNetworkGroupPolicyRequestBodyScheduling();
    $request->requestBody->scheduling->enabled = false;
    $request->requestBody->scheduling->friday = new UpdateNetworkGroupPolicyRequestBodySchedulingFriday();
    $request->requestBody->scheduling->friday->active = false;
    $request->requestBody->scheduling->friday->from = 'totam';
    $request->requestBody->scheduling->friday->to = 'magni';
    $request->requestBody->scheduling->monday = new UpdateNetworkGroupPolicyRequestBodySchedulingMonday();
    $request->requestBody->scheduling->monday->active = false;
    $request->requestBody->scheduling->monday->from = 'eos';
    $request->requestBody->scheduling->monday->to = 'harum';
    $request->requestBody->scheduling->saturday = new UpdateNetworkGroupPolicyRequestBodySchedulingSaturday();
    $request->requestBody->scheduling->saturday->active = false;
    $request->requestBody->scheduling->saturday->from = 'voluptatibus';
    $request->requestBody->scheduling->saturday->to = 'omnis';
    $request->requestBody->scheduling->sunday = new UpdateNetworkGroupPolicyRequestBodySchedulingSunday();
    $request->requestBody->scheduling->sunday->active = false;
    $request->requestBody->scheduling->sunday->from = 'quis';
    $request->requestBody->scheduling->sunday->to = 'quos';
    $request->requestBody->scheduling->thursday = new UpdateNetworkGroupPolicyRequestBodySchedulingThursday();
    $request->requestBody->scheduling->thursday->active = false;
    $request->requestBody->scheduling->thursday->from = 'natus';
    $request->requestBody->scheduling->thursday->to = 'aliquam';
    $request->requestBody->scheduling->tuesday = new UpdateNetworkGroupPolicyRequestBodySchedulingTuesday();
    $request->requestBody->scheduling->tuesday->active = false;
    $request->requestBody->scheduling->tuesday->from = 'vero';
    $request->requestBody->scheduling->tuesday->to = 'nisi';
    $request->requestBody->scheduling->wednesday = new UpdateNetworkGroupPolicyRequestBodySchedulingWednesday();
    $request->requestBody->scheduling->wednesday->active = false;
    $request->requestBody->scheduling->wednesday->from = 'praesentium';
    $request->requestBody->scheduling->wednesday->to = 'eum';
    $request->requestBody->splashAuthSettings = UpdateNetworkGroupPolicyRequestBodySplashAuthSettingsEnum::BYPASS;
    $request->requestBody->vlanTagging = new UpdateNetworkGroupPolicyRequestBodyVlanTagging();
    $request->requestBody->vlanTagging->settings = UpdateNetworkGroupPolicyRequestBodyVlanTaggingSettingsEnum::IGNORE;
    $request->requestBody->vlanTagging->vlanId = 'possimus';
    $request->groupPolicyId = 'libero';
    $request->networkId = 'ullam';

    $response = $sdk->configure->updateNetworkGroupPolicy($request);

    if ($response->updateNetworkGroupPolicy200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkMerakiAuthUser

Update a user configured with Meraki Authentication (currently, 802.1X RADIUS, splash guest, and client VPN users can be updated)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkMerakiAuthUserRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkMerakiAuthUserRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkMerakiAuthUserRequestBodyAuthorizations;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkMerakiAuthUserRequest();
    $request->requestBody = new UpdateNetworkMerakiAuthUserRequestBody();
    $request->requestBody->authorizations = [
        new UpdateNetworkMerakiAuthUserRequestBodyAuthorizations(),
        new UpdateNetworkMerakiAuthUserRequestBodyAuthorizations(),
    ];
    $request->requestBody->emailPasswordToUser = false;
    $request->requestBody->name = 'Nick Torp';
    $request->requestBody->password = 'odio';
    $request->merakiAuthUserId = 'ullam';
    $request->networkId = 'inventore';

    $response = $sdk->configure->updateNetworkMerakiAuthUser($request);

    if ($response->updateNetworkMerakiAuthUser200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkMqttBroker

Update an MQTT broker

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkMqttBrokerRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkMqttBrokerRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkMqttBrokerRequestBodySecurity;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkMqttBrokerRequestBodySecuritySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkMqttBrokerRequest();
    $request->requestBody = new UpdateNetworkMqttBrokerRequestBody();
    $request->requestBody->authentication = [
        'occaecati' => 'doloribus',
        'necessitatibus' => 'rem',
        'a' => 'nihil',
        'veniam' => 'aut',
    ];
    $request->requestBody->host = 'magni';
    $request->requestBody->name = 'Jan Stokes';
    $request->requestBody->port = 293176;
    $request->requestBody->security = new UpdateNetworkMqttBrokerRequestBodySecurity();
    $request->requestBody->security->mode = 'enim';
    $request->requestBody->security->security = new UpdateNetworkMqttBrokerRequestBodySecuritySecurity();
    $request->requestBody->security->security->caCertificate = 'alias';
    $request->requestBody->security->security->verifyHostnames = false;
    $request->mqttBrokerId = 'blanditiis';
    $request->networkId = 'modi';

    $response = $sdk->configure->updateNetworkMqttBroker($request);

    if ($response->updateNetworkMqttBroker200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkNetflow

Update the NetFlow traffic reporting settings for a network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkNetflowRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkNetflowRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkNetflowRequest();
    $request->requestBody = new UpdateNetworkNetflowRequestBody();
    $request->requestBody->collectorIp = 'illo';
    $request->requestBody->collectorPort = 954946;
    $request->requestBody->etaDstPort = 89642;
    $request->requestBody->etaEnabled = false;
    $request->requestBody->reportingEnabled = false;
    $request->networkId = 'molestiae';

    $response = $sdk->configure->updateNetworkNetflow($request);

    if ($response->updateNetworkNetflow200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkSensorAlertsProfile

Updates a sensor alert profile for a network.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSensorAlertsProfileRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSensorAlertsProfileRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSensorAlertsProfileRequestBodyConditions;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSensorAlertsProfileRequestBodyConditionsDirectionEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSensorAlertsProfileRequestBodyConditionsDurationEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSensorAlertsProfileRequestBodyConditionsThreshold;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdDoor;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdHumidity;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdHumidityQualityEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdIndoorAirQuality;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdIndoorAirQualityQualityEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdNoise;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdNoiseAmbient;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdNoiseAmbientQualityEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdPm25;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdPm25QualityEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdTemperature;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdTemperatureQualityEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdTvoc;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdTvocQualityEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdWater;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSensorAlertsProfileRequestBodyRecipients;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSensorAlertsProfileRequestBodySchedule;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkSensorAlertsProfileRequest();
    $request->requestBody = new UpdateNetworkSensorAlertsProfileRequestBody();
    $request->requestBody->conditions = [
        new UpdateNetworkSensorAlertsProfileRequestBodyConditions(),
        new UpdateNetworkSensorAlertsProfileRequestBodyConditions(),
    ];
    $request->requestBody->name = 'Monica Heaney';
    $request->requestBody->recipients = new UpdateNetworkSensorAlertsProfileRequestBodyRecipients();
    $request->requestBody->recipients->emails = [
        'molestias',
        'voluptatibus',
    ];
    $request->requestBody->recipients->httpServerIds = [
        'hic',
    ];
    $request->requestBody->recipients->smsNumbers = [
        'odit',
        'molestiae',
        'accusamus',
    ];
    $request->requestBody->schedule = new UpdateNetworkSensorAlertsProfileRequestBodySchedule();
    $request->requestBody->schedule->id = '21f86265-7b36-4fc6-b9f5-87ce525c6764';
    $request->requestBody->serials = [
        'fuga',
    ];
    $request->id = '8312e504-7b4c-421c-8b42-3abcdc91faab';
    $request->networkId = 'fugiat';

    $response = $sdk->configure->updateNetworkSensorAlertsProfile($request);

    if ($response->updateNetworkSensorAlertsProfile200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkSettings

Update the settings for a network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSettingsRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSettingsRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSettingsRequestBodyLocalStatusPage;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSettingsRequestBodyLocalStatusPageAuthentication;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSettingsRequestBodySecurePort;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkSettingsRequest();
    $request->requestBody = new UpdateNetworkSettingsRequestBody();
    $request->requestBody->localStatusPage = new UpdateNetworkSettingsRequestBodyLocalStatusPage();
    $request->requestBody->localStatusPage->authentication = new UpdateNetworkSettingsRequestBodyLocalStatusPageAuthentication();
    $request->requestBody->localStatusPage->authentication->enabled = false;
    $request->requestBody->localStatusPage->authentication->password = 'nulla';
    $request->requestBody->localStatusPageEnabled = false;
    $request->requestBody->remoteStatusPageEnabled = false;
    $request->requestBody->securePort = new UpdateNetworkSettingsRequestBodySecurePort();
    $request->requestBody->securePort->enabled = false;
    $request->networkId = 'totam';

    $response = $sdk->configure->updateNetworkSettings($request);

    if ($response->updateNetworkSettings200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkSmDevicesFields

Modify the fields of a device

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSmDevicesFieldsRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSmDevicesFieldsRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSmDevicesFieldsRequestBodyDeviceFields;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkSmDevicesFieldsRequest();
    $request->requestBody = new UpdateNetworkSmDevicesFieldsRequestBody();
    $request->requestBody->deviceFields = new UpdateNetworkSmDevicesFieldsRequestBodyDeviceFields();
    $request->requestBody->deviceFields->name = 'Dr. Erick Koepp';
    $request->requestBody->deviceFields->notes = 'minus';
    $request->requestBody->id = '48252d77-71e7-4fd0-b400-9ef8d29de1dd';
    $request->requestBody->serial = 'ducimus';
    $request->requestBody->wifiMac = 'aut';
    $request->networkId = 'provident';

    $response = $sdk->configure->updateNetworkSmDevicesFields($request);

    if ($response->updateNetworkSmDevicesFields200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkSmTargetGroup

Update a target group

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSmTargetGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSmTargetGroupRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkSmTargetGroupRequest();
    $request->requestBody = new UpdateNetworkSmTargetGroupRequestBody();
    $request->requestBody->name = 'Kelli Hermann';
    $request->requestBody->scope = 'ipsa';
    $request->networkId = 'quos';
    $request->targetGroupId = 'quo';

    $response = $sdk->configure->updateNetworkSmTargetGroup($request);

    if ($response->updateNetworkSmTargetGroup200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkSnmp

Update the SNMP settings for a network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSnmpRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSnmpRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSnmpRequestBodyAccessEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSnmpRequestBodyUsers;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkSnmpRequest();
    $request->requestBody = new UpdateNetworkSnmpRequestBody();
    $request->requestBody->access = UpdateNetworkSnmpRequestBodyAccessEnum::NONE;
    $request->requestBody->communityString = 'in';
    $request->requestBody->users = [
        new UpdateNetworkSnmpRequestBodyUsers(),
        new UpdateNetworkSnmpRequestBodyUsers(),
        new UpdateNetworkSnmpRequestBodyUsers(),
        new UpdateNetworkSnmpRequestBodyUsers(),
    ];
    $request->networkId = 'id';

    $response = $sdk->configure->updateNetworkSnmp($request);

    if ($response->updateNetworkSnmp200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkSwitchAccessControlLists

Update the access control lists for a MS network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchAccessControlListsRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchAccessControlListsRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchAccessControlListsRequestBodyRules;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchAccessControlListsRequestBodyRulesIpVersionEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchAccessControlListsRequestBodyRulesPolicyEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchAccessControlListsRequestBodyRulesProtocolEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkSwitchAccessControlListsRequest();
    $request->requestBody = new UpdateNetworkSwitchAccessControlListsRequestBody();
    $request->requestBody->rules = [
        new UpdateNetworkSwitchAccessControlListsRequestBodyRules(),
        new UpdateNetworkSwitchAccessControlListsRequestBodyRules(),
    ];
    $request->networkId = 'cumque';

    $response = $sdk->configure->updateNetworkSwitchAccessControlLists($request);

    if ($response->updateNetworkSwitchAccessControlLists200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkSwitchAccessPolicy

Update an access policy for a switch network. If you would like to enable Meraki Authentication, set radiusServers to empty array.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchAccessPolicyRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchAccessPolicyRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchAccessPolicyRequestBodyAccessPolicyTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchAccessPolicyRequestBodyDot1x;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchAccessPolicyRequestBodyDot1xControlDirectionEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchAccessPolicyRequestBodyHostModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchAccessPolicyRequestBodyRadius;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchAccessPolicyRequestBodyRadiusCriticalAuth;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchAccessPolicyRequestBodyRadiusAccountingServers;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchAccessPolicyRequestBodyRadiusServers;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkSwitchAccessPolicyRequest();
    $request->requestBody = new UpdateNetworkSwitchAccessPolicyRequestBody();
    $request->requestBody->accessPolicyType = UpdateNetworkSwitchAccessPolicyRequestBodyAccessPolicyTypeEnum::HYBRID_AUTHENTICATION;
    $request->requestBody->dot1x = new UpdateNetworkSwitchAccessPolicyRequestBodyDot1x();
    $request->requestBody->dot1x->controlDirection = UpdateNetworkSwitchAccessPolicyRequestBodyDot1xControlDirectionEnum::INBOUND;
    $request->requestBody->guestPortBouncing = false;
    $request->requestBody->guestVlanId = 628811;
    $request->requestBody->hostMode = UpdateNetworkSwitchAccessPolicyRequestBodyHostModeEnum::MULTI_AUTH;
    $request->requestBody->increaseAccessSpeed = false;
    $request->requestBody->name = 'Ms. Eileen Thompson';
    $request->requestBody->radius = new UpdateNetworkSwitchAccessPolicyRequestBodyRadius();
    $request->requestBody->radius->criticalAuth = new UpdateNetworkSwitchAccessPolicyRequestBodyRadiusCriticalAuth();
    $request->requestBody->radius->criticalAuth->dataVlanId = 675689;
    $request->requestBody->radius->criticalAuth->suspendPortBounce = false;
    $request->requestBody->radius->criticalAuth->voiceVlanId = 953707;
    $request->requestBody->radius->failedAuthVlanId = 922640;
    $request->requestBody->radius->reAuthenticationInterval = 795253;
    $request->requestBody->radiusAccountingEnabled = false;
    $request->requestBody->radiusAccountingServers = [
        new UpdateNetworkSwitchAccessPolicyRequestBodyRadiusAccountingServers(),
        new UpdateNetworkSwitchAccessPolicyRequestBodyRadiusAccountingServers(),
        new UpdateNetworkSwitchAccessPolicyRequestBodyRadiusAccountingServers(),
    ];
    $request->requestBody->radiusCoaSupportEnabled = false;
    $request->requestBody->radiusGroupAttribute = 'laboriosam';
    $request->requestBody->radiusServers = [
        new UpdateNetworkSwitchAccessPolicyRequestBodyRadiusServers(),
    ];
    $request->requestBody->radiusTestingEnabled = false;
    $request->requestBody->urlRedirectWalledGardenEnabled = false;
    $request->requestBody->urlRedirectWalledGardenRanges = [
        'veritatis',
        'aliquam',
        'excepturi',
    ];
    $request->requestBody->voiceVlanClients = false;
    $request->accessPolicyNumber = 'atque';
    $request->networkId = 'dicta';

    $response = $sdk->configure->updateNetworkSwitchAccessPolicy($request);

    if ($response->updateNetworkSwitchAccessPolicy200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkSwitchAlternateManagementInterface

Update the switch alternate management interface for the network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchAlternateManagementInterfaceRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchAlternateManagementInterfaceRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchAlternateManagementInterfaceRequestBodyProtocolsEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchAlternateManagementInterfaceRequestBodySwitches;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkSwitchAlternateManagementInterfaceRequest();
    $request->requestBody = new UpdateNetworkSwitchAlternateManagementInterfaceRequestBody();
    $request->requestBody->enabled = false;
    $request->requestBody->protocols = [
        UpdateNetworkSwitchAlternateManagementInterfaceRequestBodyProtocolsEnum::RADIUS,
        UpdateNetworkSwitchAlternateManagementInterfaceRequestBodyProtocolsEnum::SYSLOG,
    ];
    $request->requestBody->switches = [
        new UpdateNetworkSwitchAlternateManagementInterfaceRequestBodySwitches(),
        new UpdateNetworkSwitchAlternateManagementInterfaceRequestBodySwitches(),
    ];
    $request->requestBody->vlanId = 259341;
    $request->networkId = 'maiores';

    $response = $sdk->configure->updateNetworkSwitchAlternateManagementInterface($request);

    if ($response->updateNetworkSwitchAlternateManagementInterface200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkSwitchDhcpServerPolicy

Update the DHCP server settings. Blocked/allowed servers are only applied when default policy is allow/block, respectively

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchDhcpServerPolicyRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchDhcpServerPolicyRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchDhcpServerPolicyRequestBodyAlerts;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchDhcpServerPolicyRequestBodyAlertsEmail;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchDhcpServerPolicyRequestBodyArpInspection;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchDhcpServerPolicyRequestBodyDefaultPolicyEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkSwitchDhcpServerPolicyRequest();
    $request->requestBody = new UpdateNetworkSwitchDhcpServerPolicyRequestBody();
    $request->requestBody->alerts = new UpdateNetworkSwitchDhcpServerPolicyRequestBodyAlerts();
    $request->requestBody->alerts->email = new UpdateNetworkSwitchDhcpServerPolicyRequestBodyAlertsEmail();
    $request->requestBody->alerts->email->enabled = false;
    $request->requestBody->allowedServers = [
        'quos',
        'id',
        'officiis',
        'ab',
    ];
    $request->requestBody->arpInspection = new UpdateNetworkSwitchDhcpServerPolicyRequestBodyArpInspection();
    $request->requestBody->arpInspection->enabled = false;
    $request->requestBody->blockedServers = [
        'consequatur',
        'itaque',
    ];
    $request->requestBody->defaultPolicy = UpdateNetworkSwitchDhcpServerPolicyRequestBodyDefaultPolicyEnum::BLOCK;
    $request->networkId = 'voluptatem';

    $response = $sdk->configure->updateNetworkSwitchDhcpServerPolicy($request);

    if ($response->updateNetworkSwitchDhcpServerPolicy200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServer

Update a server that is trusted by Dynamic ARP Inspection on this network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerRequestBodyIpv4;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerRequest();
    $request->requestBody = new UpdateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerRequestBody();
    $request->requestBody->ipv4 = new UpdateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerRequestBodyIpv4();
    $request->requestBody->ipv4->address = '73924 Funk Plain';
    $request->requestBody->mac = 'mollitia';
    $request->requestBody->vlan = 504386;
    $request->networkId = 'suscipit';
    $request->trustedServerId = 'quas';

    $response = $sdk->configure->updateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServer($request);

    if ($response->updateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServer200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkSwitchDscpToCosMappings

Update the DSCP to CoS mappings

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchDscpToCosMappingsRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchDscpToCosMappingsRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchDscpToCosMappingsRequestBodyMappings;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkSwitchDscpToCosMappingsRequest();
    $request->requestBody = new UpdateNetworkSwitchDscpToCosMappingsRequestBody();
    $request->requestBody->mappings = [
        new UpdateNetworkSwitchDscpToCosMappingsRequestBodyMappings(),
        new UpdateNetworkSwitchDscpToCosMappingsRequestBodyMappings(),
    ];
    $request->networkId = 'enim';

    $response = $sdk->configure->updateNetworkSwitchDscpToCosMappings($request);

    if ($response->updateNetworkSwitchDscpToCosMappings200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkSwitchLinkAggregation

Update a link aggregation group

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchLinkAggregationRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchLinkAggregationRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchLinkAggregationRequestBodySwitchPorts;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchLinkAggregationRequestBodySwitchProfilePorts;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkSwitchLinkAggregationRequest();
    $request->requestBody = new UpdateNetworkSwitchLinkAggregationRequestBody();
    $request->requestBody->switchPorts = [
        new UpdateNetworkSwitchLinkAggregationRequestBodySwitchPorts(),
        new UpdateNetworkSwitchLinkAggregationRequestBodySwitchPorts(),
    ];
    $request->requestBody->switchProfilePorts = [
        new UpdateNetworkSwitchLinkAggregationRequestBodySwitchProfilePorts(),
        new UpdateNetworkSwitchLinkAggregationRequestBodySwitchProfilePorts(),
        new UpdateNetworkSwitchLinkAggregationRequestBodySwitchProfilePorts(),
    ];
    $request->linkAggregationId = 'ea';
    $request->networkId = 'autem';

    $response = $sdk->configure->updateNetworkSwitchLinkAggregation($request);

    if ($response->updateNetworkSwitchLinkAggregation200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkSwitchMtu

Update the MTU configuration

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchMtuRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchMtuRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchMtuRequestBodyOverrides;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkSwitchMtuRequest();
    $request->requestBody = new UpdateNetworkSwitchMtuRequestBody();
    $request->requestBody->defaultMtuSize = 450895;
    $request->requestBody->overrides = [
        new UpdateNetworkSwitchMtuRequestBodyOverrides(),
    ];
    $request->networkId = 'magni';

    $response = $sdk->configure->updateNetworkSwitchMtu($request);

    if ($response->updateNetworkSwitchMtu200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkSwitchPortSchedule

Update a switch port schedule

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchPortScheduleRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchPortScheduleRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchPortScheduleRequestBodyPortSchedule;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleFriday;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleMonday;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleSaturday;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleSunday;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleThursday;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleTuesday;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleWednesday;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkSwitchPortScheduleRequest();
    $request->requestBody = new UpdateNetworkSwitchPortScheduleRequestBody();
    $request->requestBody->name = 'Lorenzo Hintz';
    $request->requestBody->portSchedule = new UpdateNetworkSwitchPortScheduleRequestBodyPortSchedule();
    $request->requestBody->portSchedule->friday = new UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleFriday();
    $request->requestBody->portSchedule->friday->active = false;
    $request->requestBody->portSchedule->friday->from = 'tempore';
    $request->requestBody->portSchedule->friday->to = 'commodi';
    $request->requestBody->portSchedule->monday = new UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleMonday();
    $request->requestBody->portSchedule->monday->active = false;
    $request->requestBody->portSchedule->monday->from = 'autem';
    $request->requestBody->portSchedule->monday->to = 'praesentium';
    $request->requestBody->portSchedule->saturday = new UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleSaturday();
    $request->requestBody->portSchedule->saturday->active = false;
    $request->requestBody->portSchedule->saturday->from = 'magni';
    $request->requestBody->portSchedule->saturday->to = 'quisquam';
    $request->requestBody->portSchedule->sunday = new UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleSunday();
    $request->requestBody->portSchedule->sunday->active = false;
    $request->requestBody->portSchedule->sunday->from = 'expedita';
    $request->requestBody->portSchedule->sunday->to = 'in';
    $request->requestBody->portSchedule->thursday = new UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleThursday();
    $request->requestBody->portSchedule->thursday->active = false;
    $request->requestBody->portSchedule->thursday->from = 'eaque';
    $request->requestBody->portSchedule->thursday->to = 'delectus';
    $request->requestBody->portSchedule->tuesday = new UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleTuesday();
    $request->requestBody->portSchedule->tuesday->active = false;
    $request->requestBody->portSchedule->tuesday->from = 'blanditiis';
    $request->requestBody->portSchedule->tuesday->to = 'minus';
    $request->requestBody->portSchedule->wednesday = new UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleWednesday();
    $request->requestBody->portSchedule->wednesday->active = false;
    $request->requestBody->portSchedule->wednesday->from = 'tenetur';
    $request->requestBody->portSchedule->wednesday->to = 'assumenda';
    $request->networkId = 'exercitationem';
    $request->portScheduleId = 'a';

    $response = $sdk->configure->updateNetworkSwitchPortSchedule($request);

    if ($response->updateNetworkSwitchPortSchedule200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkSwitchQosRule

Update a quality of service rule

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchQosRuleRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchQosRuleRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchQosRuleRequestBodyProtocolEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkSwitchQosRuleRequest();
    $request->requestBody = new UpdateNetworkSwitchQosRuleRequestBody();
    $request->requestBody->dscp = 733674;
    $request->requestBody->dstPort = 388851;
    $request->requestBody->dstPortRange = 'earum';
    $request->requestBody->protocol = UpdateNetworkSwitchQosRuleRequestBodyProtocolEnum::TCP;
    $request->requestBody->srcPort = 116170;
    $request->requestBody->srcPortRange = 'quidem';
    $request->requestBody->vlan = 609151;
    $request->networkId = 'laborum';
    $request->qosRuleId = 'molestias';

    $response = $sdk->configure->updateNetworkSwitchQosRule($request);

    if ($response->updateNetworkSwitchQosRule200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkSwitchQosRulesOrder

Update the order in which the rules should be processed by the switch

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchQosRulesOrderRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchQosRulesOrderRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkSwitchQosRulesOrderRequest();
    $request->requestBody = new UpdateNetworkSwitchQosRulesOrderRequestBody();
    $request->requestBody->ruleIds = [
        'dignissimos',
        'labore',
        'laudantium',
        'dolore',
    ];
    $request->networkId = 'aliquid';

    $response = $sdk->configure->updateNetworkSwitchQosRulesOrder($request);

    if ($response->updateNetworkSwitchQosRulesOrder200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkSwitchRoutingMulticast

Update multicast settings for a network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchRoutingMulticastRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchRoutingMulticastRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchRoutingMulticastRequestBodyDefaultSettings;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchRoutingMulticastRequestBodyOverrides;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkSwitchRoutingMulticastRequest();
    $request->requestBody = new UpdateNetworkSwitchRoutingMulticastRequestBody();
    $request->requestBody->defaultSettings = new UpdateNetworkSwitchRoutingMulticastRequestBodyDefaultSettings();
    $request->requestBody->defaultSettings->floodUnknownMulticastTrafficEnabled = false;
    $request->requestBody->defaultSettings->igmpSnoopingEnabled = false;
    $request->requestBody->overrides = [
        new UpdateNetworkSwitchRoutingMulticastRequestBodyOverrides(),
        new UpdateNetworkSwitchRoutingMulticastRequestBodyOverrides(),
        new UpdateNetworkSwitchRoutingMulticastRequestBodyOverrides(),
        new UpdateNetworkSwitchRoutingMulticastRequestBodyOverrides(),
    ];
    $request->networkId = 'aspernatur';

    $response = $sdk->configure->updateNetworkSwitchRoutingMulticast($request);

    if ($response->updateNetworkSwitchRoutingMulticast200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkSwitchRoutingMulticastRendezvousPoint

Update a multicast rendezvous point

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchRoutingMulticastRendezvousPointRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchRoutingMulticastRendezvousPointRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkSwitchRoutingMulticastRendezvousPointRequest();
    $request->requestBody = new UpdateNetworkSwitchRoutingMulticastRendezvousPointRequestBody();
    $request->requestBody->interfaceIp = 'quod';
    $request->requestBody->multicastGroup = 'dolorem';
    $request->networkId = 'neque';
    $request->rendezvousPointId = 'ipsa';

    $response = $sdk->configure->updateNetworkSwitchRoutingMulticastRendezvousPoint($request);

    if ($response->updateNetworkSwitchRoutingMulticastRendezvousPoint200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkSwitchRoutingOspf

Update layer 3 OSPF routing configuration

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchRoutingOspfRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchRoutingOspfRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchRoutingOspfRequestBodyAreas;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchRoutingOspfRequestBodyAreasAreaTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchRoutingOspfRequestBodyMd5AuthenticationKey;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchRoutingOspfRequestBodyV3;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchRoutingOspfRequestBodyV3Areas;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchRoutingOspfRequestBodyV3AreasAreaTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkSwitchRoutingOspfRequest();
    $request->requestBody = new UpdateNetworkSwitchRoutingOspfRequestBody();
    $request->requestBody->areas = [
        new UpdateNetworkSwitchRoutingOspfRequestBodyAreas(),
        new UpdateNetworkSwitchRoutingOspfRequestBodyAreas(),
        new UpdateNetworkSwitchRoutingOspfRequestBodyAreas(),
    ];
    $request->requestBody->deadTimerInSeconds = 831105;
    $request->requestBody->enabled = false;
    $request->requestBody->helloTimerInSeconds = 745764;
    $request->requestBody->md5AuthenticationEnabled = false;
    $request->requestBody->md5AuthenticationKey = new UpdateNetworkSwitchRoutingOspfRequestBodyMd5AuthenticationKey();
    $request->requestBody->md5AuthenticationKey->id = 15205;
    $request->requestBody->md5AuthenticationKey->passphrase = 'ullam';
    $request->requestBody->v3 = new UpdateNetworkSwitchRoutingOspfRequestBodyV3();
    $request->requestBody->v3->areas = [
        new UpdateNetworkSwitchRoutingOspfRequestBodyV3Areas(),
    ];
    $request->requestBody->v3->deadTimerInSeconds = 434382;
    $request->requestBody->v3->enabled = false;
    $request->requestBody->v3->helloTimerInSeconds = 842461;
    $request->networkId = 'sint';

    $response = $sdk->configure->updateNetworkSwitchRoutingOspf($request);

    if ($response->updateNetworkSwitchRoutingOspf200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkSwitchSettings

Update switch network settings

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchSettingsRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchSettingsRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchSettingsRequestBodyPowerExceptions;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchSettingsRequestBodyPowerExceptionsPowerTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkSwitchSettingsRequest();
    $request->requestBody = new UpdateNetworkSwitchSettingsRequestBody();
    $request->requestBody->powerExceptions = [
        new UpdateNetworkSwitchSettingsRequestBodyPowerExceptions(),
        new UpdateNetworkSwitchSettingsRequestBodyPowerExceptions(),
        new UpdateNetworkSwitchSettingsRequestBodyPowerExceptions(),
        new UpdateNetworkSwitchSettingsRequestBodyPowerExceptions(),
    ];
    $request->requestBody->useCombinedPower = false;
    $request->requestBody->vlan = 467109;
    $request->networkId = 'ad';

    $response = $sdk->configure->updateNetworkSwitchSettings($request);

    if ($response->updateNetworkSwitchSettings200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkSwitchStackRoutingInterface

Update a layer 3 interface for a switch stack

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchStackRoutingInterfaceRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchStackRoutingInterfaceRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchStackRoutingInterfaceRequestBodyIpv6;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchStackRoutingInterfaceRequestBodyMulticastRoutingEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchStackRoutingInterfaceRequestBodyOspfSettings;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkSwitchStackRoutingInterfaceRequest();
    $request->requestBody = new UpdateNetworkSwitchStackRoutingInterfaceRequestBody();
    $request->requestBody->defaultGateway = 'eligendi';
    $request->requestBody->interfaceIp = 'fuga';
    $request->requestBody->ipv6 = new UpdateNetworkSwitchStackRoutingInterfaceRequestBodyIpv6();
    $request->requestBody->ipv6->address = '04932 Cormier Shoals';
    $request->requestBody->ipv6->assignmentMode = 'et';
    $request->requestBody->ipv6->gateway = 'illo';
    $request->requestBody->ipv6->prefix = 'est';
    $request->requestBody->multicastRouting = UpdateNetworkSwitchStackRoutingInterfaceRequestBodyMulticastRoutingEnum::IGMP_SNOOPING_QUERIER;
    $request->requestBody->name = 'Genevieve Legros';
    $request->requestBody->ospfSettings = new UpdateNetworkSwitchStackRoutingInterfaceRequestBodyOspfSettings();
    $request->requestBody->ospfSettings->area = 'provident';
    $request->requestBody->ospfSettings->cost = 125083;
    $request->requestBody->ospfSettings->isPassiveEnabled = false;
    $request->requestBody->subnet = 'maiores';
    $request->requestBody->vlanId = 569266;
    $request->interfaceId = 'ducimus';
    $request->networkId = 'dolore';
    $request->switchStackId = 'aspernatur';

    $response = $sdk->configure->updateNetworkSwitchStackRoutingInterface($request);

    if ($response->updateNetworkSwitchStackRoutingInterface200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkSwitchStackRoutingInterfaceDhcp

Update a layer 3 interface DHCP configuration for a switch stack

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchStackRoutingInterfaceDhcpRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpLeaseTimeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpOptions;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpOptionsTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDnsNameserversOptionEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyFixedIpAssignments;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyReservedIpRanges;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkSwitchStackRoutingInterfaceDhcpRequest();
    $request->requestBody = new UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBody();
    $request->requestBody->bootFileName = 'molestias';
    $request->requestBody->bootNextServer = 'fuga';
    $request->requestBody->bootOptionsEnabled = false;
    $request->requestBody->dhcpLeaseTime = UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpLeaseTimeEnum::FOUR_HOURS;
    $request->requestBody->dhcpMode = UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpModeEnum::DHCP_RELAY;
    $request->requestBody->dhcpOptions = [
        new UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpOptions(),
        new UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpOptions(),
        new UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpOptions(),
    ];
    $request->requestBody->dhcpRelayServerIps = [
        'hic',
        'corrupti',
        'soluta',
    ];
    $request->requestBody->dnsCustomNameservers = [
        'praesentium',
        'explicabo',
        'odit',
        'illo',
    ];
    $request->requestBody->dnsNameserversOption = UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDnsNameserversOptionEnum::CUSTOM;
    $request->requestBody->fixedIpAssignments = [
        new UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyFixedIpAssignments(),
    ];
    $request->requestBody->reservedIpRanges = [
        new UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyReservedIpRanges(),
        new UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyReservedIpRanges(),
    ];
    $request->interfaceId = 'velit';
    $request->networkId = 'ullam';
    $request->switchStackId = 'provident';

    $response = $sdk->configure->updateNetworkSwitchStackRoutingInterfaceDhcp($request);

    if ($response->updateNetworkSwitchStackRoutingInterfaceDhcp200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkSwitchStackRoutingStaticRoute

Update a layer 3 static route for a switch stack

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchStackRoutingStaticRouteRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchStackRoutingStaticRouteRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkSwitchStackRoutingStaticRouteRequest();
    $request->requestBody = new UpdateNetworkSwitchStackRoutingStaticRouteRequestBody();
    $request->requestBody->advertiseViaOspfEnabled = false;
    $request->requestBody->name = 'Joey Labadie';
    $request->requestBody->nextHopIp = 'dignissimos';
    $request->requestBody->preferOverOspfRoutesEnabled = false;
    $request->requestBody->subnet = 'repellat';
    $request->networkId = 'iusto';
    $request->staticRouteId = 'culpa';
    $request->switchStackId = 'voluptate';

    $response = $sdk->configure->updateNetworkSwitchStackRoutingStaticRoute($request);

    if ($response->updateNetworkSwitchStackRoutingStaticRoute200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkSwitchStormControl

Update the storm control configuration for a switch network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchStormControlRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchStormControlRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkSwitchStormControlRequest();
    $request->requestBody = new UpdateNetworkSwitchStormControlRequestBody();
    $request->requestBody->broadcastThreshold = 583142;
    $request->requestBody->multicastThreshold = 803546;
    $request->requestBody->unknownUnicastThreshold = 828267;
    $request->networkId = 'nihil';

    $response = $sdk->configure->updateNetworkSwitchStormControl($request);

    if ($response->updateNetworkSwitchStormControl200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkSwitchStp

Updates STP settings

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchStpRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchStpRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchStpRequestBodyStpBridgePriority;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkSwitchStpRequest();
    $request->requestBody = new UpdateNetworkSwitchStpRequestBody();
    $request->requestBody->rstpEnabled = false;
    $request->requestBody->stpBridgePriority = [
        new UpdateNetworkSwitchStpRequestBodyStpBridgePriority(),
    ];
    $request->networkId = 'optio';

    $response = $sdk->configure->updateNetworkSwitchStp($request);

    if ($response->updateNetworkSwitchStp200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkSyslogServers

Update the syslog servers for a network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSyslogServersRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSyslogServersRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSyslogServersRequestBodyServers;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkSyslogServersRequest();
    $request->requestBody = new UpdateNetworkSyslogServersRequestBody();
    $request->requestBody->servers = [
        new UpdateNetworkSyslogServersRequestBodyServers(),
        new UpdateNetworkSyslogServersRequestBodyServers(),
        new UpdateNetworkSyslogServersRequestBodyServers(),
        new UpdateNetworkSyslogServersRequestBodyServers(),
    ];
    $request->networkId = 'magni';

    $response = $sdk->configure->updateNetworkSyslogServers($request);

    if ($response->updateNetworkSyslogServers200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkTrafficAnalysis

Update the traffic analysis settings for a network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkTrafficAnalysisRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkTrafficAnalysisRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkTrafficAnalysisRequestBodyCustomPieChartItems;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkTrafficAnalysisRequestBodyCustomPieChartItemsTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkTrafficAnalysisRequestBodyModeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkTrafficAnalysisRequest();
    $request->requestBody = new UpdateNetworkTrafficAnalysisRequestBody();
    $request->requestBody->customPieChartItems = [
        new UpdateNetworkTrafficAnalysisRequestBodyCustomPieChartItems(),
        new UpdateNetworkTrafficAnalysisRequestBodyCustomPieChartItems(),
    ];
    $request->requestBody->mode = UpdateNetworkTrafficAnalysisRequestBodyModeEnum::DETAILED;
    $request->networkId = 'dolore';

    $response = $sdk->configure->updateNetworkTrafficAnalysis($request);

    if ($response->updateNetworkTrafficAnalysis200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkWebhooksHttpServer

Update an HTTP server. To change a URL, create a new HTTP server.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWebhooksHttpServerRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWebhooksHttpServerRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWebhooksHttpServerRequestBodyPayloadTemplate;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkWebhooksHttpServerRequest();
    $request->requestBody = new UpdateNetworkWebhooksHttpServerRequestBody();
    $request->requestBody->name = 'Ms. Lorenzo Daugherty';
    $request->requestBody->payloadTemplate = new UpdateNetworkWebhooksHttpServerRequestBodyPayloadTemplate();
    $request->requestBody->payloadTemplate->payloadTemplateId = 'omnis';
    $request->requestBody->sharedSecret = 'reiciendis';
    $request->httpServerId = 'qui';
    $request->networkId = 'similique';

    $response = $sdk->configure->updateNetworkWebhooksHttpServer($request);

    if ($response->updateNetworkWebhooksHttpServer200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkWebhooksPayloadTemplate

Update a webhook payload template for a network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWebhooksPayloadTemplateRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWebhooksPayloadTemplateRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWebhooksPayloadTemplateRequestBodyHeaders;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkWebhooksPayloadTemplateRequest();
    $request->requestBody = new UpdateNetworkWebhooksPayloadTemplateRequestBody();
    $request->requestBody->body = 'eligendi';
    $request->requestBody->bodyFile = 'numquam';
    $request->requestBody->headers = [
        new UpdateNetworkWebhooksPayloadTemplateRequestBodyHeaders(),
    ];
    $request->requestBody->headersFile = 'necessitatibus';
    $request->requestBody->name = 'Jorge Koss';
    $request->networkId = 'maiores';
    $request->payloadTemplateId = 'dicta';

    $response = $sdk->configure->updateNetworkWebhooksPayloadTemplate($request);

    if ($response->updateNetworkWebhooksPayloadTemplate200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkWirelessAlternateManagementInterface

Update alternate management interface and device static IP

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessAlternateManagementInterfaceRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessAlternateManagementInterfaceRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessAlternateManagementInterfaceRequestBodyAccessPoints;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessAlternateManagementInterfaceRequestBodyProtocolsEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkWirelessAlternateManagementInterfaceRequest();
    $request->requestBody = new UpdateNetworkWirelessAlternateManagementInterfaceRequestBody();
    $request->requestBody->accessPoints = [
        new UpdateNetworkWirelessAlternateManagementInterfaceRequestBodyAccessPoints(),
    ];
    $request->requestBody->enabled = false;
    $request->requestBody->protocols = [
        UpdateNetworkWirelessAlternateManagementInterfaceRequestBodyProtocolsEnum::SNMP,
        UpdateNetworkWirelessAlternateManagementInterfaceRequestBodyProtocolsEnum::SNMP,
    ];
    $request->requestBody->vlanId = 750075;
    $request->networkId = 'quasi';

    $response = $sdk->configure->updateNetworkWirelessAlternateManagementInterface($request);

    if ($response->updateNetworkWirelessAlternateManagementInterface200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkWirelessBilling

Update the billing settings

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessBillingRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessBillingRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessBillingRequestBodyPlans;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessBillingRequestBodyPlansBandwidthLimits;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessBillingRequestBodyPlansTimeLimitEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkWirelessBillingRequest();
    $request->requestBody = new UpdateNetworkWirelessBillingRequestBody();
    $request->requestBody->currency = 'itaque';
    $request->requestBody->plans = [
        new UpdateNetworkWirelessBillingRequestBodyPlans(),
        new UpdateNetworkWirelessBillingRequestBodyPlans(),
    ];
    $request->networkId = 'vitae';

    $response = $sdk->configure->updateNetworkWirelessBilling($request);

    if ($response->updateNetworkWirelessBilling200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkWirelessBluetoothSettings

Update the Bluetooth settings for a network. See the docs page for <a href="https://documentation.meraki.com/MR/Bluetooth/Bluetooth_Low_Energy_(BLE)">Bluetooth settings</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessBluetoothSettingsRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessBluetoothSettingsRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessBluetoothSettingsRequestBodyMajorMinorAssignmentModeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkWirelessBluetoothSettingsRequest();
    $request->requestBody = new UpdateNetworkWirelessBluetoothSettingsRequestBody();
    $request->requestBody->advertisingEnabled = false;
    $request->requestBody->major = 836018;
    $request->requestBody->majorMinorAssignmentMode = UpdateNetworkWirelessBluetoothSettingsRequestBodyMajorMinorAssignmentModeEnum::UNIQUE;
    $request->requestBody->minor = 646181;
    $request->requestBody->scanningEnabled = false;
    $request->requestBody->uuid = '23c23e34-f2df-4a4a-997f-6de922151fe1';
    $request->networkId = 'in';

    $response = $sdk->configure->updateNetworkWirelessBluetoothSettings($request);

    if ($response->updateNetworkWirelessBluetoothSettings200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkWirelessRfProfile

Updates specified RF profile for this network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessRfProfileRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessRfProfileRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessRfProfileRequestBodyApBandSettings;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessRfProfileRequestBodyApBandSettingsBandOperationModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessRfProfileRequestBodyBandSelectionTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessRfProfileRequestBodyFiveGhzSettings;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessRfProfileRequestBodyMinBitrateTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings0;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings0BandOperationModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings1;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings1BandOperationModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings10;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings10BandOperationModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings11;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings11BandOperationModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings12;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings12BandOperationModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings13;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings13BandOperationModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings14;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings14BandOperationModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings2;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings2BandOperationModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings3;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings3BandOperationModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings4;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings4BandOperationModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings5;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings5BandOperationModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings6;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings6BandOperationModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings7;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings7BandOperationModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings8;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings8BandOperationModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings9;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings9BandOperationModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessRfProfileRequestBodyTransmission;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessRfProfileRequestBodyTwoFourGhzSettings;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkWirelessRfProfileRequest();
    $request->requestBody = new UpdateNetworkWirelessRfProfileRequestBody();
    $request->requestBody->apBandSettings = new UpdateNetworkWirelessRfProfileRequestBodyApBandSettings();
    $request->requestBody->apBandSettings->bandOperationMode = UpdateNetworkWirelessRfProfileRequestBodyApBandSettingsBandOperationModeEnum::TWO4GHZ;
    $request->requestBody->apBandSettings->bandSteeringEnabled = false;
    $request->requestBody->bandSelectionType = UpdateNetworkWirelessRfProfileRequestBodyBandSelectionTypeEnum::AP;
    $request->requestBody->clientBalancingEnabled = false;
    $request->requestBody->fiveGhzSettings = new UpdateNetworkWirelessRfProfileRequestBodyFiveGhzSettings();
    $request->requestBody->fiveGhzSettings->channelWidth = 'voluptatem';
    $request->requestBody->fiveGhzSettings->maxPower = 593830;
    $request->requestBody->fiveGhzSettings->minBitrate = 622485;
    $request->requestBody->fiveGhzSettings->minPower = 537623;
    $request->requestBody->fiveGhzSettings->rxsop = 315190;
    $request->requestBody->fiveGhzSettings->validAutoChannels = [
        902727,
    ];
    $request->requestBody->minBitrateType = UpdateNetworkWirelessRfProfileRequestBodyMinBitrateTypeEnum::SSID;
    $request->requestBody->name = 'Wesley Gleason';
    $request->requestBody->perSsidSettings = new UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings();
    $request->requestBody->perSsidSettings->zero = new UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings0();
    $request->requestBody->perSsidSettings->zero->bandOperationMode = UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings0BandOperationModeEnum::FIVEGHZ;
    $request->requestBody->perSsidSettings->zero->bandSteeringEnabled = false;
    $request->requestBody->perSsidSettings->zero->minBitrate = 3646.79;
    $request->requestBody->perSsidSettings->one = new UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings1();
    $request->requestBody->perSsidSettings->one->bandOperationMode = UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings1BandOperationModeEnum::TWO4GHZ;
    $request->requestBody->perSsidSettings->one->bandSteeringEnabled = false;
    $request->requestBody->perSsidSettings->one->minBitrate = 2536.07;
    $request->requestBody->perSsidSettings->ten = new UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings10();
    $request->requestBody->perSsidSettings->ten->bandOperationMode = UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings10BandOperationModeEnum::TWO4GHZ;
    $request->requestBody->perSsidSettings->ten->bandSteeringEnabled = false;
    $request->requestBody->perSsidSettings->ten->minBitrate = 5968.88;
    $request->requestBody->perSsidSettings->eleven = new UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings11();
    $request->requestBody->perSsidSettings->eleven->bandOperationMode = UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings11BandOperationModeEnum::DUAL;
    $request->requestBody->perSsidSettings->eleven->bandSteeringEnabled = false;
    $request->requestBody->perSsidSettings->eleven->minBitrate = 9126.71;
    $request->requestBody->perSsidSettings->twelve = new UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings12();
    $request->requestBody->perSsidSettings->twelve->bandOperationMode = UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings12BandOperationModeEnum::TWO4GHZ;
    $request->requestBody->perSsidSettings->twelve->bandSteeringEnabled = false;
    $request->requestBody->perSsidSettings->twelve->minBitrate = 1351.1;
    $request->requestBody->perSsidSettings->thirteen = new UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings13();
    $request->requestBody->perSsidSettings->thirteen->bandOperationMode = UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings13BandOperationModeEnum::TWO4GHZ;
    $request->requestBody->perSsidSettings->thirteen->bandSteeringEnabled = false;
    $request->requestBody->perSsidSettings->thirteen->minBitrate = 2507.42;
    $request->requestBody->perSsidSettings->fourteen = new UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings14();
    $request->requestBody->perSsidSettings->fourteen->bandOperationMode = UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings14BandOperationModeEnum::FIVEGHZ;
    $request->requestBody->perSsidSettings->fourteen->bandSteeringEnabled = false;
    $request->requestBody->perSsidSettings->fourteen->minBitrate = 370.44;
    $request->requestBody->perSsidSettings->two = new UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings2();
    $request->requestBody->perSsidSettings->two->bandOperationMode = UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings2BandOperationModeEnum::TWO4GHZ;
    $request->requestBody->perSsidSettings->two->bandSteeringEnabled = false;
    $request->requestBody->perSsidSettings->two->minBitrate = 3022.28;
    $request->requestBody->perSsidSettings->three = new UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings3();
    $request->requestBody->perSsidSettings->three->bandOperationMode = UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings3BandOperationModeEnum::TWO4GHZ;
    $request->requestBody->perSsidSettings->three->bandSteeringEnabled = false;
    $request->requestBody->perSsidSettings->three->minBitrate = 7122.09;
    $request->requestBody->perSsidSettings->four = new UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings4();
    $request->requestBody->perSsidSettings->four->bandOperationMode = UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings4BandOperationModeEnum::DUAL;
    $request->requestBody->perSsidSettings->four->bandSteeringEnabled = false;
    $request->requestBody->perSsidSettings->four->minBitrate = 1027.34;
    $request->requestBody->perSsidSettings->five = new UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings5();
    $request->requestBody->perSsidSettings->five->bandOperationMode = UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings5BandOperationModeEnum::TWO4GHZ;
    $request->requestBody->perSsidSettings->five->bandSteeringEnabled = false;
    $request->requestBody->perSsidSettings->five->minBitrate = 2991.66;
    $request->requestBody->perSsidSettings->six = new UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings6();
    $request->requestBody->perSsidSettings->six->bandOperationMode = UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings6BandOperationModeEnum::TWO4GHZ;
    $request->requestBody->perSsidSettings->six->bandSteeringEnabled = false;
    $request->requestBody->perSsidSettings->six->minBitrate = 5529.65;
    $request->requestBody->perSsidSettings->seven = new UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings7();
    $request->requestBody->perSsidSettings->seven->bandOperationMode = UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings7BandOperationModeEnum::FIVEGHZ;
    $request->requestBody->perSsidSettings->seven->bandSteeringEnabled = false;
    $request->requestBody->perSsidSettings->seven->minBitrate = 7911.29;
    $request->requestBody->perSsidSettings->eight = new UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings8();
    $request->requestBody->perSsidSettings->eight->bandOperationMode = UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings8BandOperationModeEnum::TWO4GHZ;
    $request->requestBody->perSsidSettings->eight->bandSteeringEnabled = false;
    $request->requestBody->perSsidSettings->eight->minBitrate = 9892.06;
    $request->requestBody->perSsidSettings->nine = new UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings9();
    $request->requestBody->perSsidSettings->nine->bandOperationMode = UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings9BandOperationModeEnum::FIVEGHZ;
    $request->requestBody->perSsidSettings->nine->bandSteeringEnabled = false;
    $request->requestBody->perSsidSettings->nine->minBitrate = 4261.73;
    $request->requestBody->transmission = new UpdateNetworkWirelessRfProfileRequestBodyTransmission();
    $request->requestBody->transmission->enabled = false;
    $request->requestBody->twoFourGhzSettings = new UpdateNetworkWirelessRfProfileRequestBodyTwoFourGhzSettings();
    $request->requestBody->twoFourGhzSettings->axEnabled = false;
    $request->requestBody->twoFourGhzSettings->maxPower = 881827;
    $request->requestBody->twoFourGhzSettings->minBitrate = 5217.82;
    $request->requestBody->twoFourGhzSettings->minPower = 369161;
    $request->requestBody->twoFourGhzSettings->rxsop = 872922;
    $request->requestBody->twoFourGhzSettings->validAutoChannels = [
        468579,
        514626,
        213860,
    ];
    $request->networkId = 'odit';
    $request->rfProfileId = 'officiis';

    $response = $sdk->configure->updateNetworkWirelessRfProfile($request);

    if ($response->updateNetworkWirelessRfProfile200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkWirelessSettings

Update the wireless settings for a network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSettingsRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSettingsRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSettingsRequestBodyUpgradeStrategyEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkWirelessSettingsRequest();
    $request->requestBody = new UpdateNetworkWirelessSettingsRequestBody();
    $request->requestBody->ipv6BridgeEnabled = false;
    $request->requestBody->ledLightsOn = false;
    $request->requestBody->locationAnalyticsEnabled = false;
    $request->requestBody->meshingEnabled = false;
    $request->requestBody->upgradeStrategy = UpdateNetworkWirelessSettingsRequestBodyUpgradeStrategyEnum::MINIMIZE_UPGRADE_TIME;
    $request->networkId = 'libero';

    $response = $sdk->configure->updateNetworkWirelessSettings($request);

    if ($response->updateNetworkWirelessSettings200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkWirelessSsid

Update the attributes of an MR SSID

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidRequestBodyActiveDirectory;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidRequestBodyActiveDirectoryCredentials;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidRequestBodyActiveDirectoryServers;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidRequestBodyApTagsAndVlanIds;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidRequestBodyAuthModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidRequestBodyDnsRewrite;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidRequestBodyDot11r;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidRequestBodyDot11w;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidRequestBodyEncryptionModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidRequestBodyEnterpriseAdminAccessEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidRequestBodyGre;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidRequestBodyGreConcentrator;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidRequestBodyLdap;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidRequestBodyLdapCredentials;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidRequestBodyLdapServerCaCertificate;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidRequestBodyLdapServers;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidRequestBodyLocalRadius;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidRequestBodyLocalRadiusCertificateAuthentication;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidRequestBodyLocalRadiusCertificateAuthenticationClientRootCaCertificate;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidRequestBodyLocalRadiusPasswordAuthentication;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidRequestBodyOauth;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidRequestBodyRadiusAccountingServers;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidRequestBodyRadiusAttributeForGroupPoliciesEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidRequestBodyRadiusFailoverPolicyEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidRequestBodyRadiusLoadBalancingPolicyEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidRequestBodyRadiusServers;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidRequestBodySpeedBurst;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidRequestBodySplashPageEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidRequestBodyWpaEncryptionModeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkWirelessSsidRequest();
    $request->requestBody = new UpdateNetworkWirelessSsidRequestBody();
    $request->requestBody->activeDirectory = new UpdateNetworkWirelessSsidRequestBodyActiveDirectory();
    $request->requestBody->activeDirectory->credentials = new UpdateNetworkWirelessSsidRequestBodyActiveDirectoryCredentials();
    $request->requestBody->activeDirectory->credentials->logonName = 'fugiat';
    $request->requestBody->activeDirectory->credentials->password = 'voluptas';
    $request->requestBody->activeDirectory->servers = [
        new UpdateNetworkWirelessSsidRequestBodyActiveDirectoryServers(),
    ];
    $request->requestBody->adultContentFilteringEnabled = false;
    $request->requestBody->apTagsAndVlanIds = [
        new UpdateNetworkWirelessSsidRequestBodyApTagsAndVlanIds(),
        new UpdateNetworkWirelessSsidRequestBodyApTagsAndVlanIds(),
    ];
    $request->requestBody->authMode = UpdateNetworkWirelessSsidRequestBodyAuthModeEnum::OPEN_WITH_NAC;
    $request->requestBody->availabilityTags = [
        'harum',
    ];
    $request->requestBody->availableOnAllAps = false;
    $request->requestBody->bandSelection = 'aperiam';
    $request->requestBody->concentratorNetworkId = 'pariatur';
    $request->requestBody->defaultVlanId = 323290;
    $request->requestBody->disassociateClientsOnVpnFailover = false;
    $request->requestBody->dnsRewrite = new UpdateNetworkWirelessSsidRequestBodyDnsRewrite();
    $request->requestBody->dnsRewrite->dnsCustomNameservers = [
        'culpa',
    ];
    $request->requestBody->dnsRewrite->enabled = false;
    $request->requestBody->dot11r = new UpdateNetworkWirelessSsidRequestBodyDot11r();
    $request->requestBody->dot11r->adaptive = false;
    $request->requestBody->dot11r->enabled = false;
    $request->requestBody->dot11w = new UpdateNetworkWirelessSsidRequestBodyDot11w();
    $request->requestBody->dot11w->enabled = false;
    $request->requestBody->dot11w->required = false;
    $request->requestBody->enabled = false;
    $request->requestBody->encryptionMode = UpdateNetworkWirelessSsidRequestBodyEncryptionModeEnum::WEP;
    $request->requestBody->enterpriseAdminAccess = UpdateNetworkWirelessSsidRequestBodyEnterpriseAdminAccessEnum::ACCESS_DISABLED;
    $request->requestBody->gre = new UpdateNetworkWirelessSsidRequestBodyGre();
    $request->requestBody->gre->concentrator = new UpdateNetworkWirelessSsidRequestBodyGreConcentrator();
    $request->requestBody->gre->concentrator->host = 'quidem';
    $request->requestBody->gre->key = 985265;
    $request->requestBody->ipAssignmentMode = 'sit';
    $request->requestBody->lanIsolationEnabled = false;
    $request->requestBody->ldap = new UpdateNetworkWirelessSsidRequestBodyLdap();
    $request->requestBody->ldap->baseDistinguishedName = 'architecto';
    $request->requestBody->ldap->credentials = new UpdateNetworkWirelessSsidRequestBodyLdapCredentials();
    $request->requestBody->ldap->credentials->distinguishedName = 'tempore';
    $request->requestBody->ldap->credentials->password = 'deserunt';
    $request->requestBody->ldap->serverCaCertificate = new UpdateNetworkWirelessSsidRequestBodyLdapServerCaCertificate();
    $request->requestBody->ldap->serverCaCertificate->contents = 'nulla';
    $request->requestBody->ldap->servers = [
        new UpdateNetworkWirelessSsidRequestBodyLdapServers(),
        new UpdateNetworkWirelessSsidRequestBodyLdapServers(),
        new UpdateNetworkWirelessSsidRequestBodyLdapServers(),
    ];
    $request->requestBody->localRadius = new UpdateNetworkWirelessSsidRequestBodyLocalRadius();
    $request->requestBody->localRadius->cacheTimeout = 453304;
    $request->requestBody->localRadius->certificateAuthentication = new UpdateNetworkWirelessSsidRequestBodyLocalRadiusCertificateAuthentication();
    $request->requestBody->localRadius->certificateAuthentication->clientRootCaCertificate = new UpdateNetworkWirelessSsidRequestBodyLocalRadiusCertificateAuthenticationClientRootCaCertificate();
    $request->requestBody->localRadius->certificateAuthentication->clientRootCaCertificate->contents = 'alias';
    $request->requestBody->localRadius->certificateAuthentication->enabled = false;
    $request->requestBody->localRadius->certificateAuthentication->ocspResponderUrl = 'iure';
    $request->requestBody->localRadius->certificateAuthentication->useLdap = false;
    $request->requestBody->localRadius->certificateAuthentication->useOcsp = false;
    $request->requestBody->localRadius->passwordAuthentication = new UpdateNetworkWirelessSsidRequestBodyLocalRadiusPasswordAuthentication();
    $request->requestBody->localRadius->passwordAuthentication->enabled = false;
    $request->requestBody->mandatoryDhcpEnabled = false;
    $request->requestBody->minBitrate = 8403.85;
    $request->requestBody->name = 'Rosemary Abshire';
    $request->requestBody->oauth = new UpdateNetworkWirelessSsidRequestBodyOauth();
    $request->requestBody->oauth->allowedDomains = [
        'maiores',
        'nam',
        'pariatur',
    ];
    $request->requestBody->perClientBandwidthLimitDown = 797262;
    $request->requestBody->perClientBandwidthLimitUp = 266504;
    $request->requestBody->perSsidBandwidthLimitDown = 114341;
    $request->requestBody->perSsidBandwidthLimitUp = 963749;
    $request->requestBody->psk = 'delectus';
    $request->requestBody->radiusAccountingEnabled = false;
    $request->requestBody->radiusAccountingInterimInterval = 367712;
    $request->requestBody->radiusAccountingServers = [
        new UpdateNetworkWirelessSsidRequestBodyRadiusAccountingServers(),
        new UpdateNetworkWirelessSsidRequestBodyRadiusAccountingServers(),
        new UpdateNetworkWirelessSsidRequestBodyRadiusAccountingServers(),
        new UpdateNetworkWirelessSsidRequestBodyRadiusAccountingServers(),
    ];
    $request->requestBody->radiusAttributeForGroupPolicies = UpdateNetworkWirelessSsidRequestBodyRadiusAttributeForGroupPoliciesEnum::ARUBA_USER_ROLE;
    $request->requestBody->radiusAuthenticationNasId = 'officiis';
    $request->requestBody->radiusCalledStationId = 'sed';
    $request->requestBody->radiusCoaEnabled = false;
    $request->requestBody->radiusFailoverPolicy = UpdateNetworkWirelessSsidRequestBodyRadiusFailoverPolicyEnum::DENY_ACCESS;
    $request->requestBody->radiusFallbackEnabled = false;
    $request->requestBody->radiusGuestVlanEnabled = false;
    $request->requestBody->radiusGuestVlanId = 901611;
    $request->requestBody->radiusLoadBalancingPolicy = UpdateNetworkWirelessSsidRequestBodyRadiusLoadBalancingPolicyEnum::ROUND_ROBIN;
    $request->requestBody->radiusOverride = false;
    $request->requestBody->radiusProxyEnabled = false;
    $request->requestBody->radiusServerAttemptsLimit = 986993;
    $request->requestBody->radiusServerTimeout = 704054;
    $request->requestBody->radiusServers = [
        new UpdateNetworkWirelessSsidRequestBodyRadiusServers(),
        new UpdateNetworkWirelessSsidRequestBodyRadiusServers(),
    ];
    $request->requestBody->radiusTestingEnabled = false;
    $request->requestBody->secondaryConcentratorNetworkId = 'impedit';
    $request->requestBody->speedBurst = new UpdateNetworkWirelessSsidRequestBodySpeedBurst();
    $request->requestBody->speedBurst->enabled = false;
    $request->requestBody->splashGuestSponsorDomains = [
        'amet',
        'quis',
        'fugiat',
    ];
    $request->requestBody->splashPage = UpdateNetworkWirelessSsidRequestBodySplashPageEnum::CISCO_ISE;
    $request->requestBody->useVlanTagging = false;
    $request->requestBody->visible = false;
    $request->requestBody->vlanId = 490618;
    $request->requestBody->walledGardenEnabled = false;
    $request->requestBody->walledGardenRanges = [
        'consectetur',
        'quos',
    ];
    $request->requestBody->wpaEncryptionMode = UpdateNetworkWirelessSsidRequestBodyWpaEncryptionModeEnum::WPA3_ONLY;
    $request->networkId = 'sunt';
    $request->number = 'repudiandae';

    $response = $sdk->configure->updateNetworkWirelessSsid($request);

    if ($response->updateNetworkWirelessSsid200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkWirelessSsidBonjourForwarding

Update the bonjour forwarding setting and rules for the SSID

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidBonjourForwardingRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidBonjourForwardingRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidBonjourForwardingRequestBodyRules;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidBonjourForwardingRequestBodyRulesServicesEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkWirelessSsidBonjourForwardingRequest();
    $request->requestBody = new UpdateNetworkWirelessSsidBonjourForwardingRequestBody();
    $request->requestBody->enabled = false;
    $request->requestBody->rules = [
        new UpdateNetworkWirelessSsidBonjourForwardingRequestBodyRules(),
        new UpdateNetworkWirelessSsidBonjourForwardingRequestBodyRules(),
        new UpdateNetworkWirelessSsidBonjourForwardingRequestBodyRules(),
        new UpdateNetworkWirelessSsidBonjourForwardingRequestBodyRules(),
    ];
    $request->networkId = 'distinctio';
    $request->number = 'ducimus';

    $response = $sdk->configure->updateNetworkWirelessSsidBonjourForwarding($request);

    if ($response->updateNetworkWirelessSsidBonjourForwarding200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkWirelessSsidDeviceTypeGroupPolicies

Update the device type group policies for the SSID

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBodyDeviceTypePolicies;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBodyDeviceTypePoliciesDevicePolicyEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBodyDeviceTypePoliciesDeviceTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequest();
    $request->requestBody = new UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBody();
    $request->requestBody->deviceTypePolicies = [
        new UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBodyDeviceTypePolicies(),
        new UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBodyDeviceTypePolicies(),
        new UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBodyDeviceTypePolicies(),
    ];
    $request->requestBody->enabled = false;
    $request->networkId = 'consectetur';
    $request->number = 'nemo';

    $response = $sdk->configure->updateNetworkWirelessSsidDeviceTypeGroupPolicies($request);

    if ($response->updateNetworkWirelessSsidDeviceTypeGroupPolicies200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkWirelessSsidEapOverride

Update the EAP overridden parameters for an SSID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidEapOverrideRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidEapOverrideRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidEapOverrideRequestBodyEapolKey;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidEapOverrideRequestBodyIdentity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkWirelessSsidEapOverrideRequest();
    $request->requestBody = new UpdateNetworkWirelessSsidEapOverrideRequestBody();
    $request->requestBody->eapolKey = new UpdateNetworkWirelessSsidEapOverrideRequestBodyEapolKey();
    $request->requestBody->eapolKey->retries = 592760;
    $request->requestBody->eapolKey->timeoutInMs = 882272;
    $request->requestBody->identity = new UpdateNetworkWirelessSsidEapOverrideRequestBodyIdentity();
    $request->requestBody->identity->retries = 793260;
    $request->requestBody->identity->timeout = 773479;
    $request->requestBody->maxRetries = 327624;
    $request->requestBody->timeout = 767235;
    $request->networkId = 'rerum';
    $request->number = 'praesentium';

    $response = $sdk->configure->updateNetworkWirelessSsidEapOverride($request);

    if ($response->updateNetworkWirelessSsidEapOverride200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkWirelessSsidFirewallL3FirewallRules

Update the L3 firewall rules of an SSID on an MR network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRules;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRulesPolicyEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRulesProtocolEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequest();
    $request->requestBody = new UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBody();
    $request->requestBody->allowLanAccess = false;
    $request->requestBody->rules = [
        new UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRules(),
        new UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRules(),
    ];
    $request->networkId = 'doloremque';
    $request->number = 'delectus';

    $response = $sdk->configure->updateNetworkWirelessSsidFirewallL3FirewallRules($request);

    if ($response->updateNetworkWirelessSsidFirewallL3FirewallRules200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkWirelessSsidFirewallL7FirewallRules

Update the L7 firewall rules of an SSID on an MR network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBodyRules;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBodyRulesPolicyEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBodyRulesTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequest();
    $request->requestBody = new UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBody();
    $request->requestBody->rules = [
        new UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBodyRules(),
        new UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBodyRules(),
        new UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBodyRules(),
    ];
    $request->networkId = 'impedit';
    $request->number = 'illum';

    $response = $sdk->configure->updateNetworkWirelessSsidFirewallL7FirewallRules($request);

    if ($response->updateNetworkWirelessSsidFirewallL7FirewallRules200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkWirelessSsidHotspot20

Update the Hotspot 2.0 settings of an SSID

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidHotspot20Request;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidHotspot20RequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidHotspot20RequestBodyMccMncs;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidHotspot20RequestBodyNaiRealms;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidHotspot20RequestBodyNaiRealmsFormatEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidHotspot20RequestBodyNaiRealmsMethods;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidHotspot20RequestBodyNetworkAccessTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidHotspot20RequestBodyOperator;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidHotspot20RequestBodyVenue;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkWirelessSsidHotspot20Request();
    $request->requestBody = new UpdateNetworkWirelessSsidHotspot20RequestBody();
    $request->requestBody->domains = [
        'praesentium',
        'perferendis',
    ];
    $request->requestBody->enabled = false;
    $request->requestBody->mccMncs = [
        new UpdateNetworkWirelessSsidHotspot20RequestBodyMccMncs(),
        new UpdateNetworkWirelessSsidHotspot20RequestBodyMccMncs(),
        new UpdateNetworkWirelessSsidHotspot20RequestBodyMccMncs(),
    ];
    $request->requestBody->naiRealms = [
        new UpdateNetworkWirelessSsidHotspot20RequestBodyNaiRealms(),
        new UpdateNetworkWirelessSsidHotspot20RequestBodyNaiRealms(),
        new UpdateNetworkWirelessSsidHotspot20RequestBodyNaiRealms(),
    ];
    $request->requestBody->networkAccessType = UpdateNetworkWirelessSsidHotspot20RequestBodyNetworkAccessTypeEnum::PERSONAL_DEVICE_NETWORK;
    $request->requestBody->operator = new UpdateNetworkWirelessSsidHotspot20RequestBodyOperator();
    $request->requestBody->operator->name = 'Dr. Tracey Cartwright';
    $request->requestBody->roamConsortOis = [
        'necessitatibus',
        'tempora',
        'quaerat',
        'magnam',
    ];
    $request->requestBody->venue = new UpdateNetworkWirelessSsidHotspot20RequestBodyVenue();
    $request->requestBody->venue->name = 'Louise Marks';
    $request->requestBody->venue->type = UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum::UNSPECIFIED_FACTORY_AND_INDUSTRIAL;
    $request->networkId = 'non';
    $request->number = 'rerum';

    $response = $sdk->configure->updateNetworkWirelessSsidHotspot20($request);

    if ($response->updateNetworkWirelessSsidHotspot20200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkWirelessSsidIdentityPsk

Update an Identity PSK

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidIdentityPskRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidIdentityPskRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkWirelessSsidIdentityPskRequest();
    $request->requestBody = new UpdateNetworkWirelessSsidIdentityPskRequestBody();
    $request->requestBody->groupPolicyId = 'illo';
    $request->requestBody->name = 'Orville Fay';
    $request->requestBody->passphrase = 'impedit';
    $request->identityPskId = 'repudiandae';
    $request->networkId = 'dolores';
    $request->number = 'ut';

    $response = $sdk->configure->updateNetworkWirelessSsidIdentityPsk($request);

    if ($response->updateNetworkWirelessSsidIdentityPsk200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkWirelessSsidSchedules

Update the outage schedule for the SSID

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidSchedulesRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidSchedulesRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidSchedulesRequestBodyRanges;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidSchedulesRequestBodyRangesInSeconds;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkWirelessSsidSchedulesRequest();
    $request->requestBody = new UpdateNetworkWirelessSsidSchedulesRequestBody();
    $request->requestBody->enabled = false;
    $request->requestBody->ranges = [
        new UpdateNetworkWirelessSsidSchedulesRequestBodyRanges(),
        new UpdateNetworkWirelessSsidSchedulesRequestBodyRanges(),
    ];
    $request->requestBody->rangesInSeconds = [
        new UpdateNetworkWirelessSsidSchedulesRequestBodyRangesInSeconds(),
        new UpdateNetworkWirelessSsidSchedulesRequestBodyRangesInSeconds(),
        new UpdateNetworkWirelessSsidSchedulesRequestBodyRangesInSeconds(),
    ];
    $request->networkId = 'voluptate';
    $request->number = 'aliquid';

    $response = $sdk->configure->updateNetworkWirelessSsidSchedules($request);

    if ($response->updateNetworkWirelessSsidSchedules200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkWirelessSsidSplashSettings

Modify the splash page settings for the given SSID

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidSplashSettingsRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidSplashSettingsRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidSplashSettingsRequestBodyBilling;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidSplashSettingsRequestBodyBillingFreeAccess;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidSplashSettingsRequestBodyControllerDisconnectionBehaviorEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidSplashSettingsRequestBodyGuestSponsorship;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidSplashSettingsRequestBodySentryEnrollment;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidSplashSettingsRequestBodySentryEnrollmentStrengthEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidSplashSettingsRequestBodySentryEnrollmentSystemsManagerNetwork;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashImage;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashImageImage;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashImageImageFormatEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashLogo;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashLogoImage;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashLogoImageFormatEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashPrepaidFront;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashPrepaidFrontImage;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashPrepaidFrontImageFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkWirelessSsidSplashSettingsRequest();
    $request->requestBody = new UpdateNetworkWirelessSsidSplashSettingsRequestBody();
    $request->requestBody->allowSimultaneousLogins = false;
    $request->requestBody->billing = new UpdateNetworkWirelessSsidSplashSettingsRequestBodyBilling();
    $request->requestBody->billing->freeAccess = new UpdateNetworkWirelessSsidSplashSettingsRequestBodyBillingFreeAccess();
    $request->requestBody->billing->freeAccess->durationInMinutes = 503373;
    $request->requestBody->billing->freeAccess->enabled = false;
    $request->requestBody->billing->prepaidAccessFastLoginEnabled = false;
    $request->requestBody->billing->replyToEmailAddress = 'labore';
    $request->requestBody->blockAllTrafficBeforeSignOn = false;
    $request->requestBody->controllerDisconnectionBehavior = UpdateNetworkWirelessSsidSplashSettingsRequestBodyControllerDisconnectionBehaviorEnum::RESTRICTED;
    $request->requestBody->guestSponsorship = new UpdateNetworkWirelessSsidSplashSettingsRequestBodyGuestSponsorship();
    $request->requestBody->guestSponsorship->durationInMinutes = 969624;
    $request->requestBody->guestSponsorship->guestCanRequestTimeframe = false;
    $request->requestBody->redirectUrl = 'asperiores';
    $request->requestBody->sentryEnrollment = new UpdateNetworkWirelessSsidSplashSettingsRequestBodySentryEnrollment();
    $request->requestBody->sentryEnrollment->enforcedSystems = [
        'voluptatem',
        'beatae',
    ];
    $request->requestBody->sentryEnrollment->strength = UpdateNetworkWirelessSsidSplashSettingsRequestBodySentryEnrollmentStrengthEnum::CLICK_THROUGH;
    $request->requestBody->sentryEnrollment->systemsManagerNetwork = new UpdateNetworkWirelessSsidSplashSettingsRequestBodySentryEnrollmentSystemsManagerNetwork();
    $request->requestBody->sentryEnrollment->systemsManagerNetwork->id = '6d71cffb-d0eb-474b-8421-953b44bd3c43';
    $request->requestBody->splashImage = new UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashImage();
    $request->requestBody->splashImage->extension = 'veritatis';
    $request->requestBody->splashImage->image = new UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashImageImage();
    $request->requestBody->splashImage->image->contents = 'veniam';
    $request->requestBody->splashImage->image->format = UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashImageImageFormatEnum::JPG;
    $request->requestBody->splashImage->md5 = 'assumenda';
    $request->requestBody->splashLogo = new UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashLogo();
    $request->requestBody->splashLogo->extension = 'adipisci';
    $request->requestBody->splashLogo->image = new UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashLogoImage();
    $request->requestBody->splashLogo->image->contents = 'velit';
    $request->requestBody->splashLogo->image->format = UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashLogoImageFormatEnum::PNG;
    $request->requestBody->splashLogo->md5 = 'veniam';
    $request->requestBody->splashPrepaidFront = new UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashPrepaidFront();
    $request->requestBody->splashPrepaidFront->extension = 'provident';
    $request->requestBody->splashPrepaidFront->image = new UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashPrepaidFrontImage();
    $request->requestBody->splashPrepaidFront->image->contents = 'nostrum';
    $request->requestBody->splashPrepaidFront->image->format = UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashPrepaidFrontImageFormatEnum::GIF;
    $request->requestBody->splashPrepaidFront->md5 = 'quod';
    $request->requestBody->splashTimeout = 7287;
    $request->requestBody->splashUrl = 'accusantium';
    $request->requestBody->useRedirectUrl = false;
    $request->requestBody->useSplashUrl = false;
    $request->requestBody->welcomeMessage = 'dicta';
    $request->networkId = 'illo';
    $request->number = 'amet';

    $response = $sdk->configure->updateNetworkWirelessSsidSplashSettings($request);

    if ($response->updateNetworkWirelessSsidSplashSettings200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkWirelessSsidTrafficShapingRules

Update the traffic shaping settings for an SSID on an MR network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidTrafficShapingRulesRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidTrafficShapingRulesRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRules;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitions;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimits;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimitsBandwidthLimits;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkWirelessSsidTrafficShapingRulesRequest();
    $request->requestBody = new UpdateNetworkWirelessSsidTrafficShapingRulesRequestBody();
    $request->requestBody->defaultRulesEnabled = false;
    $request->requestBody->rules = [
        new UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRules(),
        new UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRules(),
        new UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRules(),
    ];
    $request->requestBody->trafficShapingEnabled = false;
    $request->networkId = 'quos';
    $request->number = 'aliquid';

    $response = $sdk->configure->updateNetworkWirelessSsidTrafficShapingRules($request);

    if ($response->updateNetworkWirelessSsidTrafficShapingRules200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkWirelessSsidVpn

Update the VPN settings for the SSID

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidVpnRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidVpnRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidVpnRequestBodyConcentrator;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidVpnRequestBodyFailover;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidVpnRequestBodySplitTunnel;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidVpnRequestBodySplitTunnelRules;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidVpnRequestBodySplitTunnelRulesProtocolEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkWirelessSsidVpnRequest();
    $request->requestBody = new UpdateNetworkWirelessSsidVpnRequestBody();
    $request->requestBody->concentrator = new UpdateNetworkWirelessSsidVpnRequestBodyConcentrator();
    $request->requestBody->concentrator->networkId = 'sequi';
    $request->requestBody->concentrator->vlanId = 632885;
    $request->requestBody->failover = new UpdateNetworkWirelessSsidVpnRequestBodyFailover();
    $request->requestBody->failover->heartbeatInterval = 682703;
    $request->requestBody->failover->idleTimeout = 266461;
    $request->requestBody->failover->requestIp = 'et';
    $request->requestBody->splitTunnel = new UpdateNetworkWirelessSsidVpnRequestBodySplitTunnel();
    $request->requestBody->splitTunnel->enabled = false;
    $request->requestBody->splitTunnel->rules = [
        new UpdateNetworkWirelessSsidVpnRequestBodySplitTunnelRules(),
        new UpdateNetworkWirelessSsidVpnRequestBodySplitTunnelRules(),
        new UpdateNetworkWirelessSsidVpnRequestBodySplitTunnelRules(),
        new UpdateNetworkWirelessSsidVpnRequestBodySplitTunnelRules(),
    ];
    $request->networkId = 'aliquid';
    $request->number = 'optio';

    $response = $sdk->configure->updateNetworkWirelessSsidVpn($request);

    if ($response->updateNetworkWirelessSsidVpn200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateOrganization

Update an organization

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationRequestBodyApi;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationRequestBodyManagement;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationRequestBodyManagementDetails;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateOrganizationRequest();
    $request->requestBody = new UpdateOrganizationRequestBody();
    $request->requestBody->api = new UpdateOrganizationRequestBodyApi();
    $request->requestBody->api->enabled = false;
    $request->requestBody->management = new UpdateOrganizationRequestBodyManagement();
    $request->requestBody->management->details = [
        new UpdateOrganizationRequestBodyManagementDetails(),
    ];
    $request->requestBody->name = 'Dr. Jody Sawayn DVM';
    $request->organizationId = 'porro';

    $response = $sdk->configure->updateOrganization($request);

    if ($response->updateOrganization200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateOrganizationActionBatch

Update an action batch

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationActionBatchRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationActionBatchRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateOrganizationActionBatchRequest();
    $request->requestBody = new UpdateOrganizationActionBatchRequestBody();
    $request->requestBody->confirmed = false;
    $request->requestBody->synchronous = false;
    $request->actionBatchId = 'tempore';
    $request->organizationId = 'ullam';

    $response = $sdk->configure->updateOrganizationActionBatch($request);

    if ($response->updateOrganizationActionBatch200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateOrganizationAdaptivePolicyAcl

Updates an adaptive policy ACL

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationAdaptivePolicyAclRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationAdaptivePolicyAclRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationAdaptivePolicyAclRequestBodyIpVersionEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationAdaptivePolicyAclRequestBodyRules;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationAdaptivePolicyAclRequestBodyRulesPolicyEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationAdaptivePolicyAclRequestBodyRulesProtocolEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateOrganizationAdaptivePolicyAclRequest();
    $request->requestBody = new UpdateOrganizationAdaptivePolicyAclRequestBody();
    $request->requestBody->description = 'sunt';
    $request->requestBody->ipVersion = UpdateOrganizationAdaptivePolicyAclRequestBodyIpVersionEnum::IPV6;
    $request->requestBody->name = 'Dr. Rex Graham';
    $request->requestBody->rules = [
        new UpdateOrganizationAdaptivePolicyAclRequestBodyRules(),
        new UpdateOrganizationAdaptivePolicyAclRequestBodyRules(),
        new UpdateOrganizationAdaptivePolicyAclRequestBodyRules(),
    ];
    $request->aclId = 'itaque';
    $request->organizationId = 'iste';

    $response = $sdk->configure->updateOrganizationAdaptivePolicyAcl($request);

    if ($response->updateOrganizationAdaptivePolicyAcl200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateOrganizationAdaptivePolicyGroup

Updates an adaptive policy group. If updating "Infrastructure", only the SGT is allowed. Cannot update "Unknown".

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationAdaptivePolicyGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationAdaptivePolicyGroupRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationAdaptivePolicyGroupRequestBodyPolicyObjects;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateOrganizationAdaptivePolicyGroupRequest();
    $request->requestBody = new UpdateOrganizationAdaptivePolicyGroupRequestBody();
    $request->requestBody->description = 'quod';
    $request->requestBody->name = 'Lionel Kessler';
    $request->requestBody->policyObjects = [
        new UpdateOrganizationAdaptivePolicyGroupRequestBodyPolicyObjects(),
        new UpdateOrganizationAdaptivePolicyGroupRequestBodyPolicyObjects(),
        new UpdateOrganizationAdaptivePolicyGroupRequestBodyPolicyObjects(),
        new UpdateOrganizationAdaptivePolicyGroupRequestBodyPolicyObjects(),
    ];
    $request->requestBody->sgt = 935800;
    $request->id = '65e076cc-7abf-4616-aa5c-71641934b90f';
    $request->organizationId = 'aspernatur';

    $response = $sdk->configure->updateOrganizationAdaptivePolicyGroup($request);

    if ($response->updateOrganizationAdaptivePolicyGroup200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateOrganizationAdaptivePolicyPolicy

Update an Adaptive Policy

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationAdaptivePolicyPolicyRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationAdaptivePolicyPolicyRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationAdaptivePolicyPolicyRequestBodyAcls;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationAdaptivePolicyPolicyRequestBodyDestinationGroup;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationAdaptivePolicyPolicyRequestBodyLastEntryRuleEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationAdaptivePolicyPolicyRequestBodySourceGroup;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateOrganizationAdaptivePolicyPolicyRequest();
    $request->requestBody = new UpdateOrganizationAdaptivePolicyPolicyRequestBody();
    $request->requestBody->acls = [
        new UpdateOrganizationAdaptivePolicyPolicyRequestBodyAcls(),
        new UpdateOrganizationAdaptivePolicyPolicyRequestBodyAcls(),
        new UpdateOrganizationAdaptivePolicyPolicyRequestBodyAcls(),
        new UpdateOrganizationAdaptivePolicyPolicyRequestBodyAcls(),
    ];
    $request->requestBody->destinationGroup = new UpdateOrganizationAdaptivePolicyPolicyRequestBodyDestinationGroup();
    $request->requestBody->destinationGroup->id = '09d19d2f-c2f9-4e2e-9059-44b935d237a7';
    $request->requestBody->destinationGroup->name = 'Ms. Nettie McCullough';
    $request->requestBody->destinationGroup->sgt = 571381;
    $request->requestBody->lastEntryRule = UpdateOrganizationAdaptivePolicyPolicyRequestBodyLastEntryRuleEnum::DENY;
    $request->requestBody->sourceGroup = new UpdateOrganizationAdaptivePolicyPolicyRequestBodySourceGroup();
    $request->requestBody->sourceGroup->id = '6aed4aec-b753-47cd-9222-c9ff57491aab';
    $request->requestBody->sourceGroup->name = 'Neal Collins';
    $request->requestBody->sourceGroup->sgt = 432996;
    $request->id = '1f0ca4d4-56ef-4103-9e68-99f0c2001e22';
    $request->organizationId = 'minus';

    $response = $sdk->configure->updateOrganizationAdaptivePolicyPolicy($request);

    if ($response->updateOrganizationAdaptivePolicyPolicy200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateOrganizationAdaptivePolicySettings

Update global adaptive policy settings

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationAdaptivePolicySettingsRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationAdaptivePolicySettingsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateOrganizationAdaptivePolicySettingsRequest();
    $request->requestBody = new UpdateOrganizationAdaptivePolicySettingsRequestBody();
    $request->requestBody->enabledNetworks = [
        'veniam',
        'exercitationem',
        'quod',
        'quod',
    ];
    $request->organizationId = 'alias';

    $response = $sdk->configure->updateOrganizationAdaptivePolicySettings($request);

    if ($response->updateOrganizationAdaptivePolicySettings200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateOrganizationAdmin

Update an administrator

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationAdminRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationAdminRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationAdminRequestBodyNetworks;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationAdminRequestBodyOrgAccessEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationAdminRequestBodyTags;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationAdminRequestBodyTagsAccessEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateOrganizationAdminRequest();
    $request->requestBody = new UpdateOrganizationAdminRequestBody();
    $request->requestBody->name = 'Leona Gleichner IV';
    $request->requestBody->networks = [
        new UpdateOrganizationAdminRequestBodyNetworks(),
        new UpdateOrganizationAdminRequestBodyNetworks(),
    ];
    $request->requestBody->orgAccess = UpdateOrganizationAdminRequestBodyOrgAccessEnum::READ_ONLY;
    $request->requestBody->tags = [
        new UpdateOrganizationAdminRequestBodyTags(),
        new UpdateOrganizationAdminRequestBodyTags(),
    ];
    $request->adminId = 'voluptas';
    $request->organizationId = 'facere';

    $response = $sdk->configure->updateOrganizationAdmin($request);

    if ($response->updateOrganizationAdmin200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateOrganizationAlertsProfile

Update an organization-wide alert config

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationAlertsProfileRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationAlertsProfileRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationAlertsProfileRequestBodyAlertCondition;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationAlertsProfileRequestBodyAlertConditionInterfaceEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationAlertsProfileRequestBodyRecipients;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationAlertsProfileRequestBodyTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateOrganizationAlertsProfileRequest();
    $request->requestBody = new UpdateOrganizationAlertsProfileRequestBody();
    $request->requestBody->alertCondition = new UpdateOrganizationAlertsProfileRequestBodyAlertCondition();
    $request->requestBody->alertCondition->bitRateBps = 607937;
    $request->requestBody->alertCondition->duration = 452515;
    $request->requestBody->alertCondition->interface = UpdateOrganizationAlertsProfileRequestBodyAlertConditionInterfaceEnum::CELLULAR;
    $request->requestBody->alertCondition->jitterMs = 971436;
    $request->requestBody->alertCondition->latencyMs = 766501;
    $request->requestBody->alertCondition->lossRatio = 5416.33;
    $request->requestBody->alertCondition->mos = 1267.33;
    $request->requestBody->alertCondition->window = 24945;
    $request->requestBody->description = 'eligendi';
    $request->requestBody->enabled = false;
    $request->requestBody->networkTags = [
        'enim',
        'harum',
    ];
    $request->requestBody->recipients = new UpdateOrganizationAlertsProfileRequestBodyRecipients();
    $request->requestBody->recipients->emails = [
        'consectetur',
    ];
    $request->requestBody->recipients->httpServerIds = [
        'rerum',
        'distinctio',
    ];
    $request->requestBody->type = UpdateOrganizationAlertsProfileRequestBodyTypeEnum::WAN_LATENCY;
    $request->alertConfigId = 'saepe';
    $request->organizationId = 'sit';

    $response = $sdk->configure->updateOrganizationAlertsProfile($request);

    if ($response->updateOrganizationAlertsProfile200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateOrganizationApplianceSecurityIntrusion

Sets supported intrusion settings for an organization

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationApplianceSecurityIntrusionRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationApplianceSecurityIntrusionRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationApplianceSecurityIntrusionRequestBodyAllowedRules;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateOrganizationApplianceSecurityIntrusionRequest();
    $request->requestBody = new UpdateOrganizationApplianceSecurityIntrusionRequestBody();
    $request->requestBody->allowedRules = [
        new UpdateOrganizationApplianceSecurityIntrusionRequestBodyAllowedRules(),
        new UpdateOrganizationApplianceSecurityIntrusionRequestBodyAllowedRules(),
        new UpdateOrganizationApplianceSecurityIntrusionRequestBodyAllowedRules(),
        new UpdateOrganizationApplianceSecurityIntrusionRequestBodyAllowedRules(),
    ];
    $request->organizationId = 'impedit';

    $response = $sdk->configure->updateOrganizationApplianceSecurityIntrusion($request);

    if ($response->updateOrganizationApplianceSecurityIntrusion200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateOrganizationApplianceVPNThirdPartyVPNPeers

Update the third party VPN peers for an organization

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeers;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIkeVersionEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPolicies;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesChildAuthAlgoEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesChildCipherAlgoEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkeAuthAlgoEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkeCipherAlgoEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkePrfAlgoEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequest();
    $request->requestBody = new UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBody();
    $request->requestBody->peers = [
        new UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeers(),
        new UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeers(),
        new UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeers(),
    ];
    $request->organizationId = 'quas';

    $response = $sdk->configure->updateOrganizationApplianceVPNThirdPartyVPNPeers($request);

    if ($response->updateOrganizationApplianceVPNThirdPartyVPNPeers200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateOrganizationApplianceVpnVpnFirewallRules

Update the firewall rules of an organization's site-to-site VPN

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationApplianceVpnVpnFirewallRulesRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBodyRules;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBodyRulesPolicyEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBodyRulesProtocolEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateOrganizationApplianceVpnVpnFirewallRulesRequest();
    $request->requestBody = new UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBody();
    $request->requestBody->rules = [
        new UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBodyRules(),
        new UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBodyRules(),
    ];
    $request->requestBody->syslogDefaultRule = false;
    $request->organizationId = 'veritatis';

    $response = $sdk->configure->updateOrganizationApplianceVpnVpnFirewallRules($request);

    if ($response->updateOrganizationApplianceVpnVpnFirewallRules200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateOrganizationBrandingPoliciesPriorities

Update the priority ordering of an organization's branding policies.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationBrandingPoliciesPrioritiesRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationBrandingPoliciesPrioritiesRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateOrganizationBrandingPoliciesPrioritiesRequest();
    $request->requestBody = new UpdateOrganizationBrandingPoliciesPrioritiesRequestBody();
    $request->requestBody->brandingPolicyIds = [
        'molestiae',
        'officiis',
        'labore',
    ];
    $request->organizationId = 'nulla';

    $response = $sdk->configure->updateOrganizationBrandingPoliciesPriorities($request);

    if ($response->updateOrganizationBrandingPoliciesPriorities200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateOrganizationBrandingPolicy

Update a branding policy

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationBrandingPolicyRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationBrandingPolicyRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationBrandingPolicyRequestBodyAdminSettings;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationBrandingPolicyRequestBodyAdminSettingsAppliesToEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationBrandingPolicyRequestBodyCustomLogo;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationBrandingPolicyRequestBodyCustomLogoImage;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationBrandingPolicyRequestBodyCustomLogoImageFormatEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationBrandingPolicyRequestBodyHelpSettings;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsApiDocsSubtabEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsCasesSubtabEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsCommunitySubtabEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsDataProtectionRequestsSubtabEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsFirewallInfoSubtabEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsGetHelpSubtabEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsHardwareReplacementsSubtabEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsHelpTabEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsHelpWidgetEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsNewFeaturesSubtabEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsSmForumsEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsUniversalSearchKnowledgeBaseSearchEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateOrganizationBrandingPolicyRequest();
    $request->requestBody = new UpdateOrganizationBrandingPolicyRequestBody();
    $request->requestBody->adminSettings = new UpdateOrganizationBrandingPolicyRequestBodyAdminSettings();
    $request->requestBody->adminSettings->appliesTo = UpdateOrganizationBrandingPolicyRequestBodyAdminSettingsAppliesToEnum::SPECIFIC_ADMINS;
    $request->requestBody->adminSettings->values = [
        'ut',
    ];
    $request->requestBody->customLogo = new UpdateOrganizationBrandingPolicyRequestBodyCustomLogo();
    $request->requestBody->customLogo->enabled = false;
    $request->requestBody->customLogo->image = new UpdateOrganizationBrandingPolicyRequestBodyCustomLogoImage();
    $request->requestBody->customLogo->image->contents = 'laborum';
    $request->requestBody->customLogo->image->format = UpdateOrganizationBrandingPolicyRequestBodyCustomLogoImageFormatEnum::PNG;
    $request->requestBody->enabled = false;
    $request->requestBody->helpSettings = new UpdateOrganizationBrandingPolicyRequestBodyHelpSettings();
    $request->requestBody->helpSettings->apiDocsSubtab = UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsApiDocsSubtabEnum::DEFAULT_OR_INHERIT;
    $request->requestBody->helpSettings->casesSubtab = UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsCasesSubtabEnum::HIDE;
    $request->requestBody->helpSettings->ciscoMerakiProductDocumentation = 'maxime';
    $request->requestBody->helpSettings->communitySubtab = UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsCommunitySubtabEnum::DEFAULT_OR_INHERIT;
    $request->requestBody->helpSettings->dataProtectionRequestsSubtab = UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsDataProtectionRequestsSubtabEnum::SHOW;
    $request->requestBody->helpSettings->firewallInfoSubtab = UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsFirewallInfoSubtabEnum::SHOW;
    $request->requestBody->helpSettings->getHelpSubtab = UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsGetHelpSubtabEnum::SHOW;
    $request->requestBody->helpSettings->getHelpSubtabKnowledgeBaseSearch = 'quidem';
    $request->requestBody->helpSettings->hardwareReplacementsSubtab = UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsHardwareReplacementsSubtabEnum::DEFAULT_OR_INHERIT;
    $request->requestBody->helpSettings->helpTab = UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsHelpTabEnum::HIDE;
    $request->requestBody->helpSettings->helpWidget = UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsHelpWidgetEnum::HIDE;
    $request->requestBody->helpSettings->newFeaturesSubtab = UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsNewFeaturesSubtabEnum::HIDE;
    $request->requestBody->helpSettings->smForums = UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsSmForumsEnum::DEFAULT_OR_INHERIT;
    $request->requestBody->helpSettings->supportContactInfo = 'quo';
    $request->requestBody->helpSettings->universalSearchKnowledgeBaseSearch = UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsUniversalSearchKnowledgeBaseSearchEnum::SHOW;
    $request->requestBody->name = 'Angel Schumm';
    $request->brandingPolicyId = 'blanditiis';
    $request->organizationId = 'assumenda';

    $response = $sdk->configure->updateOrganizationBrandingPolicy($request);

    if ($response->updateOrganizationBrandingPolicy200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateOrganizationCameraOnboardingStatuses

Notify that credential handoff to camera has completed

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationCameraOnboardingStatusesRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationCameraOnboardingStatusesRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateOrganizationCameraOnboardingStatusesRequest();
    $request->requestBody = new UpdateOrganizationCameraOnboardingStatusesRequestBody();
    $request->requestBody->serial = 'culpa';
    $request->requestBody->wirelessCredentialsSent = false;
    $request->organizationId = 'ipsa';

    $response = $sdk->configure->updateOrganizationCameraOnboardingStatuses($request);

    if ($response->updateOrganizationCameraOnboardingStatuses200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateOrganizationConfigTemplate

Update a configuration template

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationConfigTemplateRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationConfigTemplateRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateOrganizationConfigTemplateRequest();
    $request->requestBody = new UpdateOrganizationConfigTemplateRequestBody();
    $request->requestBody->name = 'Peggy Borer Sr.';
    $request->requestBody->timeZone = 'qui';
    $request->configTemplateId = 'unde';
    $request->organizationId = 'ex';

    $response = $sdk->configure->updateOrganizationConfigTemplate($request);

    if ($response->updateOrganizationConfigTemplate200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateOrganizationConfigTemplateSwitchProfilePort

Update a switch profile port

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationConfigTemplateSwitchProfilePortRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationConfigTemplateSwitchProfilePortRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyAccessPolicyTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyProfile;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyStpGuardEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyUdldEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateOrganizationConfigTemplateSwitchProfilePortRequest();
    $request->requestBody = new UpdateOrganizationConfigTemplateSwitchProfilePortRequestBody();
    $request->requestBody->accessPolicyNumber = 307965;
    $request->requestBody->accessPolicyType = UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyAccessPolicyTypeEnum::MAC_ALLOW_LIST;
    $request->requestBody->allowedVlans = 'eum';
    $request->requestBody->daiTrusted = false;
    $request->requestBody->enabled = false;
    $request->requestBody->flexibleStackingEnabled = false;
    $request->requestBody->isolationEnabled = false;
    $request->requestBody->linkNegotiation = 'quaerat';
    $request->requestBody->macAllowList = [
        'cumque',
        'ab',
    ];
    $request->requestBody->name = 'Nelson Botsford';
    $request->requestBody->poeEnabled = false;
    $request->requestBody->portScheduleId = 'iste';
    $request->requestBody->profile = new UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyProfile();
    $request->requestBody->profile->enabled = false;
    $request->requestBody->profile->id = '042f569b-7aff-40ea-a216-cbe071bc163e';
    $request->requestBody->profile->iname = 'sed';
    $request->requestBody->rstpEnabled = false;
    $request->requestBody->stickyMacAllowList = [
        'unde',
        'harum',
    ];
    $request->requestBody->stickyMacAllowListLimit = 197540;
    $request->requestBody->stormControlEnabled = false;
    $request->requestBody->stpGuard = UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyStpGuardEnum::LOOP_GUARD;
    $request->requestBody->tags = [
        'blanditiis',
    ];
    $request->requestBody->type = UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyTypeEnum::ACCESS;
    $request->requestBody->udld = UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyUdldEnum::ENFORCE;
    $request->requestBody->vlan = 677213;
    $request->requestBody->voiceVlan = 609036;
    $request->configTemplateId = 'occaecati';
    $request->organizationId = 'consequuntur';
    $request->portId = 'veniam';
    $request->profileId = 'quam';

    $response = $sdk->configure->updateOrganizationConfigTemplateSwitchProfilePort($request);

    if ($response->updateOrganizationConfigTemplateSwitchProfilePort200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateOrganizationEarlyAccessFeaturesOptIn

Update an early access feature opt-in for an organization

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationEarlyAccessFeaturesOptInRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationEarlyAccessFeaturesOptInRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateOrganizationEarlyAccessFeaturesOptInRequest();
    $request->requestBody = new UpdateOrganizationEarlyAccessFeaturesOptInRequestBody();
    $request->requestBody->limitScopeToNetworks = [
        'eaque',
        'incidunt',
        'asperiores',
        'eius',
    ];
    $request->optInId = 'ipsa';
    $request->organizationId = 'quas';

    $response = $sdk->configure->updateOrganizationEarlyAccessFeaturesOptIn($request);

    if ($response->updateOrganizationEarlyAccessFeaturesOptIn200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateOrganizationInsightMonitoredMediaServer

Update a monitored media server for this organization. Only valid for organizations with Meraki Insight.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationInsightMonitoredMediaServerRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationInsightMonitoredMediaServerRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateOrganizationInsightMonitoredMediaServerRequest();
    $request->requestBody = new UpdateOrganizationInsightMonitoredMediaServerRequestBody();
    $request->requestBody->address = '46421 Labadie Forges';
    $request->requestBody->bestEffortMonitoringEnabled = false;
    $request->requestBody->name = 'Mae Huel';
    $request->monitoredMediaServerId = 'facere';
    $request->organizationId = 'earum';

    $response = $sdk->configure->updateOrganizationInsightMonitoredMediaServer($request);

    if ($response->updateOrganizationInsightMonitoredMediaServer200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateOrganizationLicense

Update a license

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationLicenseRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationLicenseRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateOrganizationLicenseRequest();
    $request->requestBody = new UpdateOrganizationLicenseRequestBody();
    $request->requestBody->deviceSerial = 'debitis';
    $request->licenseId = 'impedit';
    $request->organizationId = 'reiciendis';

    $response = $sdk->configure->updateOrganizationLicense($request);

    if ($response->updateOrganizationLicense200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateOrganizationLoginSecurity

Update the login security settings for an organization

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationLoginSecurityRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationLoginSecurityRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationLoginSecurityRequestBodyApiAuthentication;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationLoginSecurityRequestBodyApiAuthenticationIpRestrictionsForKeys;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateOrganizationLoginSecurityRequest();
    $request->requestBody = new UpdateOrganizationLoginSecurityRequestBody();
    $request->requestBody->accountLockoutAttempts = 405634;
    $request->requestBody->apiAuthentication = new UpdateOrganizationLoginSecurityRequestBodyApiAuthentication();
    $request->requestBody->apiAuthentication->ipRestrictionsForKeys = new UpdateOrganizationLoginSecurityRequestBodyApiAuthenticationIpRestrictionsForKeys();
    $request->requestBody->apiAuthentication->ipRestrictionsForKeys->enabled = false;
    $request->requestBody->apiAuthentication->ipRestrictionsForKeys->ranges = [
        'provident',
        'provident',
        'soluta',
    ];
    $request->requestBody->enforceAccountLockout = false;
    $request->requestBody->enforceDifferentPasswords = false;
    $request->requestBody->enforceIdleTimeout = false;
    $request->requestBody->enforceLoginIpRanges = false;
    $request->requestBody->enforcePasswordExpiration = false;
    $request->requestBody->enforceStrongPasswords = false;
    $request->requestBody->enforceTwoFactorAuth = false;
    $request->requestBody->idleTimeoutMinutes = 803800;
    $request->requestBody->loginIpRanges = [
        'consectetur',
        'corporis',
    ];
    $request->requestBody->numDifferentPasswords = 391970;
    $request->requestBody->passwordExpirationDays = 135243;
    $request->organizationId = 'eveniet';

    $response = $sdk->configure->updateOrganizationLoginSecurity($request);

    if ($response->updateOrganizationLoginSecurity200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateOrganizationPolicyObject

Updates a Policy Object.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationPolicyObjectRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationPolicyObjectRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateOrganizationPolicyObjectRequest();
    $request->requestBody = new UpdateOrganizationPolicyObjectRequestBody();
    $request->requestBody->cidr = 'tempore';
    $request->requestBody->fqdn = 'asperiores';
    $request->requestBody->groupIds = [
        966682,
        316584,
        368658,
        783508,
    ];
    $request->requestBody->ip = 'dolores';
    $request->requestBody->mask = 'iste';
    $request->requestBody->name = 'Francis Bechtelar DDS';
    $request->organizationId = 'accusantium';
    $request->policyObjectId = 'ea';

    $response = $sdk->configure->updateOrganizationPolicyObject($request);

    if ($response->updateOrganizationPolicyObject200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateOrganizationPolicyObjectsGroup

Updates a Policy Object Group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationPolicyObjectsGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationPolicyObjectsGroupRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateOrganizationPolicyObjectsGroupRequest();
    $request->requestBody = new UpdateOrganizationPolicyObjectsGroupRequestBody();
    $request->requestBody->name = 'Douglas Considine';
    $request->requestBody->objectIds = [
        421018,
        252880,
    ];
    $request->organizationId = 'voluptates';
    $request->policyObjectGroupId = 'debitis';

    $response = $sdk->configure->updateOrganizationPolicyObjectsGroup($request);

    if ($response->updateOrganizationPolicyObjectsGroup200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateOrganizationSaml

Updates the SAML SSO enabled settings for an organization.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationSamlRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationSamlRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateOrganizationSamlRequest();
    $request->requestBody = new UpdateOrganizationSamlRequestBody();
    $request->requestBody->enabled = false;
    $request->organizationId = 'earum';

    $response = $sdk->configure->updateOrganizationSaml($request);

    if ($response->updateOrganizationSaml200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateOrganizationSamlIdp

Update a SAML IdP in your organization

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationSamlIdpRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationSamlIdpRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateOrganizationSamlIdpRequest();
    $request->requestBody = new UpdateOrganizationSamlIdpRequestBody();
    $request->requestBody->sloLogoutUrl = 'suscipit';
    $request->requestBody->x509certSha1Fingerprint = 'assumenda';
    $request->idpId = 'doloremque';
    $request->organizationId = 'porro';

    $response = $sdk->configure->updateOrganizationSamlIdp($request);

    if ($response->updateOrganizationSamlIdp200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateOrganizationSamlRole

Update a SAML role

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationSamlRoleRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationSamlRoleRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationSamlRoleRequestBodyNetworks;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationSamlRoleRequestBodyNetworksAccessEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationSamlRoleRequestBodyOrgAccessEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationSamlRoleRequestBodyTags;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationSamlRoleRequestBodyTagsAccessEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateOrganizationSamlRoleRequest();
    $request->requestBody = new UpdateOrganizationSamlRoleRequestBody();
    $request->requestBody->networks = [
        new UpdateOrganizationSamlRoleRequestBodyNetworks(),
        new UpdateOrganizationSamlRoleRequestBodyNetworks(),
    ];
    $request->requestBody->orgAccess = UpdateOrganizationSamlRoleRequestBodyOrgAccessEnum::READ_ONLY;
    $request->requestBody->role = 'vel';
    $request->requestBody->tags = [
        new UpdateOrganizationSamlRoleRequestBodyTags(),
        new UpdateOrganizationSamlRoleRequestBodyTags(),
        new UpdateOrganizationSamlRoleRequestBodyTags(),
        new UpdateOrganizationSamlRoleRequestBodyTags(),
    ];
    $request->organizationId = 'nulla';
    $request->samlRoleId = 'excepturi';

    $response = $sdk->configure->updateOrganizationSamlRole($request);

    if ($response->updateOrganizationSamlRole200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateOrganizationSnmp

Update the SNMP settings for an organization

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationSnmpRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationSnmpRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationSnmpRequestBodyV3AuthModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationSnmpRequestBodyV3PrivModeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateOrganizationSnmpRequest();
    $request->requestBody = new UpdateOrganizationSnmpRequestBody();
    $request->requestBody->peerIps = [
        'in',
        'nesciunt',
        'temporibus',
        'temporibus',
    ];
    $request->requestBody->v2cEnabled = false;
    $request->requestBody->v3AuthMode = UpdateOrganizationSnmpRequestBodyV3AuthModeEnum::MD5;
    $request->requestBody->v3AuthPass = 'non';
    $request->requestBody->v3Enabled = false;
    $request->requestBody->v3PrivMode = UpdateOrganizationSnmpRequestBodyV3PrivModeEnum::AES128;
    $request->requestBody->v3PrivPass = 'nostrum';
    $request->organizationId = 'dignissimos';

    $response = $sdk->configure->updateOrganizationSnmp($request);

    if ($response->updateOrganizationSnmp200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## vmxNetworkDevicesClaim

Claim a vMX into a network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\VmxNetworkDevicesClaimRequest;
use \OpenAPI\OpenAPI\Models\Operations\VmxNetworkDevicesClaimRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\VmxNetworkDevicesClaimRequestBodySizeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new VmxNetworkDevicesClaimRequest();
    $request->requestBody = new VmxNetworkDevicesClaimRequestBody();
    $request->requestBody->size = VmxNetworkDevicesClaimRequestBodySizeEnum::ONE_HUNDRED;
    $request->networkId = 'corporis';

    $response = $sdk->configure->vmxNetworkDevicesClaim($request);

    if ($response->vmxNetworkDevicesClaim200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## wipeNetworkSmDevices

Wipe a device

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\WipeNetworkSmDevicesRequest;
use \OpenAPI\OpenAPI\Models\Operations\WipeNetworkSmDevicesRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new WipeNetworkSmDevicesRequest();
    $request->requestBody = new WipeNetworkSmDevicesRequestBody();
    $request->requestBody->id = '09a8e870-d3c5-4a1f-9c24-2c7b66a1f30c';
    $request->requestBody->pin = 491881;
    $request->requestBody->serial = 'non';
    $request->requestBody->wifiMac = 'facere';
    $request->networkId = 'repellat';

    $response = $sdk->configure->wipeNetworkSmDevices($request);

    if ($response->wipeNetworkSmDevices200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
