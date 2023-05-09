# Configure

### Available Operations

* [AddNetworkSwitchStack](#addnetworkswitchstack) - Add a switch to a stack
* [AssignOrganizationLicensesSeats](#assignorganizationlicensesseats) - Assign SM seats to a network
* [BindNetwork](#bindnetwork) - Bind a network to a template.
* [CheckinNetworkSmDevices](#checkinnetworksmdevices) - Force check-in a set of devices
* [ClaimIntoOrganization](#claimintoorganization) - Claim a list of devices, licenses, and/or orders into an organization
* [ClaimIntoOrganizationInventory](#claimintoorganizationinventory) - Claim a list of devices, licenses, and/or orders into an organization inventory
* [ClaimNetworkDevices](#claimnetworkdevices) - Claim devices into a network. (Note: for recently claimed devices, it may take a few minutes for API requsts against that device to succeed)
* [CloneOrganization](#cloneorganization) - Create a new organization by cloning the addressed organization
* [CloneOrganizationSwitchDevices](#cloneorganizationswitchdevices) - Clone port-level and some switch-level configuration settings from a source switch to one or more target switches
* [CombineOrganizationNetworks](#combineorganizationnetworks) - Combine multiple networks into a single network
* [CreateDeviceApplianceVmxAuthenticationToken](#createdeviceappliancevmxauthenticationtoken) - Generate a new vMX authentication token
* [CreateDeviceSwitchRoutingInterface](#createdeviceswitchroutinginterface) - Create a layer 3 interface for a switch
* [CreateDeviceSwitchRoutingStaticRoute](#createdeviceswitchroutingstaticroute) - Create a layer 3 static route for a switch
* [CreateNetworkAppliancePrefixesDelegatedStatic](#createnetworkapplianceprefixesdelegatedstatic) - Add a static delegated prefix from a network
* [CreateNetworkApplianceStaticRoute](#createnetworkappliancestaticroute) - Add a static route for an MX or teleworker network
* [CreateNetworkApplianceTrafficShapingCustomPerformanceClass](#createnetworkappliancetrafficshapingcustomperformanceclass) - Add a custom performance class for an MX network
* [CreateNetworkApplianceVlan](#createnetworkappliancevlan) - Add a VLAN
* [CreateNetworkCameraQualityRetentionProfile](#createnetworkcameraqualityretentionprofile) - Creates new quality retention profile for this network.
* [CreateNetworkCameraWirelessProfile](#createnetworkcamerawirelessprofile) - Creates a new camera wireless profile for this network.
* [CreateNetworkFirmwareUpgradesRollback](#createnetworkfirmwareupgradesrollback) - Rollback a Firmware Upgrade For A Network
* [CreateNetworkFirmwareUpgradesStagedEvent](#createnetworkfirmwareupgradesstagedevent) - Create a Staged Upgrade Event for a network
* [CreateNetworkFirmwareUpgradesStagedGroup](#createnetworkfirmwareupgradesstagedgroup) - Create a Staged Upgrade Group for a network
* [CreateNetworkFloorPlan](#createnetworkfloorplan) - Upload a floor plan
* [CreateNetworkGroupPolicy](#createnetworkgrouppolicy) - Create a group policy
* [CreateNetworkMerakiAuthUser](#createnetworkmerakiauthuser) - Authorize a user configured with Meraki Authentication for a network (currently supports 802.1X, splash guest, and client VPN users, and currently, organizations have a 50,000 user cap)
* [CreateNetworkMqttBroker](#createnetworkmqttbroker) - Add an MQTT broker
* [CreateNetworkPiiRequest](#createnetworkpiirequest) - Submit a new delete or restrict processing PII request
* [CreateNetworkSensorAlertsProfile](#createnetworksensoralertsprofile) - Creates a sensor alert profile for a network.
* [CreateNetworkSmBypassActivationLockAttempt](#createnetworksmbypassactivationlockattempt) - Bypass activation lock attempt
* [CreateNetworkSmTargetGroup](#createnetworksmtargetgroup) - Add a target group
* [CreateNetworkSwitchAccessPolicy](#createnetworkswitchaccesspolicy) - Create an access policy for a switch network
* [CreateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServer](#createnetworkswitchdhcpserverpolicyarpinspectiontrustedserver) - Add a server to be trusted by Dynamic ARP Inspection on this network
* [CreateNetworkSwitchLinkAggregation](#createnetworkswitchlinkaggregation) - Create a link aggregation group
* [CreateNetworkSwitchPortSchedule](#createnetworkswitchportschedule) - Add a switch port schedule
* [CreateNetworkSwitchQosRule](#createnetworkswitchqosrule) - Add a quality of service rule
* [CreateNetworkSwitchRoutingMulticastRendezvousPoint](#createnetworkswitchroutingmulticastrendezvouspoint) - Create a multicast rendezvous point
* [CreateNetworkSwitchStack](#createnetworkswitchstack) - Create a stack
* [CreateNetworkSwitchStackRoutingInterface](#createnetworkswitchstackroutinginterface) - Create a layer 3 interface for a switch stack
* [CreateNetworkSwitchStackRoutingStaticRoute](#createnetworkswitchstackroutingstaticroute) - Create a layer 3 static route for a switch stack
* [CreateNetworkWebhooksHTTPServer](#createnetworkwebhookshttpserver) - Add an HTTP server to a network
* [CreateNetworkWebhooksPayloadTemplate](#createnetworkwebhookspayloadtemplate) - Create a webhook payload template for a network
* [CreateNetworkWebhooksWebhookTest](#createnetworkwebhookswebhooktest) - Send a test webhook for a network
* [CreateNetworkWirelessRfProfile](#createnetworkwirelessrfprofile) - Creates new RF profile for this network
* [CreateNetworkWirelessSsidIdentityPsk](#createnetworkwirelessssididentitypsk) - Create an Identity PSK
* [CreateOrganization](#createorganization) - Create a new organization
* [CreateOrganizationActionBatch](#createorganizationactionbatch) - Create an action batch
* [CreateOrganizationAdaptivePolicyACL](#createorganizationadaptivepolicyacl) - Creates new adaptive policy ACL
* [CreateOrganizationAdaptivePolicyGroup](#createorganizationadaptivepolicygroup) - Creates a new adaptive policy group
* [CreateOrganizationAdaptivePolicyPolicy](#createorganizationadaptivepolicypolicy) - Add an Adaptive Policy
* [CreateOrganizationAdmin](#createorganizationadmin) - Create a new dashboard administrator
* [CreateOrganizationAlertsProfile](#createorganizationalertsprofile) - Create an organization-wide alert configuration
* [CreateOrganizationBrandingPolicy](#createorganizationbrandingpolicy) - Add a new branding policy to an organization
* [CreateOrganizationCameraCustomAnalyticsArtifact](#createorganizationcameracustomanalyticsartifact) - Create custom analytics artifact
* [CreateOrganizationConfigTemplate](#createorganizationconfigtemplate) - Create a new configuration template
* [CreateOrganizationEarlyAccessFeaturesOptIn](#createorganizationearlyaccessfeaturesoptin) - Create a new early access feature opt-in for an organization
* [CreateOrganizationInsightMonitoredMediaServer](#createorganizationinsightmonitoredmediaserver) - Add a media server to be monitored for this organization
* [CreateOrganizationInventoryOnboardingCloudMonitoringExportEvent](#createorganizationinventoryonboardingcloudmonitoringexportevent) - Imports event logs related to the onboarding app into elastisearch
* [CreateOrganizationInventoryOnboardingCloudMonitoringImport](#createorganizationinventoryonboardingcloudmonitoringimport) - Commits the import operation to complete the onboarding of a device into Dashboard for monitoring.
* [CreateOrganizationInventoryOnboardingCloudMonitoringPrepare](#createorganizationinventoryonboardingcloudmonitoringprepare) - Initiates or updates an import session
* [CreateOrganizationNetwork](#createorganizationnetwork) - Create a network
* [CreateOrganizationPolicyObject](#createorganizationpolicyobject) - Creates a new Policy Object.
* [CreateOrganizationPolicyObjectsGroup](#createorganizationpolicyobjectsgroup) - Creates a new Policy Object Group.
* [CreateOrganizationSamlIdp](#createorganizationsamlidp) - Create a SAML IdP for your organization.
* [CreateOrganizationSamlRole](#createorganizationsamlrole) - Create a SAML role
* [DeferNetworkFirmwareUpgradesStagedEvents](#defernetworkfirmwareupgradesstagedevents) - Postpone by 1 week all pending staged upgrade stages for a network
* [DeleteDeviceSwitchRoutingInterface](#deletedeviceswitchroutinginterface) - Delete a layer 3 interface from the switch
* [DeleteDeviceSwitchRoutingStaticRoute](#deletedeviceswitchroutingstaticroute) - Delete a layer 3 static route for a switch
* [DeleteNetwork](#deletenetwork) - Delete a network
* [DeleteNetworkAppliancePrefixesDelegatedStatic](#deletenetworkapplianceprefixesdelegatedstatic) - Delete a static delegated prefix from a network
* [DeleteNetworkApplianceStaticRoute](#deletenetworkappliancestaticroute) - Delete a static route from an MX or teleworker network
* [DeleteNetworkApplianceTrafficShapingCustomPerformanceClass](#deletenetworkappliancetrafficshapingcustomperformanceclass) - Delete a custom performance class from an MX network
* [DeleteNetworkApplianceVlan](#deletenetworkappliancevlan) - Delete a VLAN from a network
* [DeleteNetworkCameraQualityRetentionProfile](#deletenetworkcameraqualityretentionprofile) - Delete an existing quality retention profile for this network.
* [DeleteNetworkCameraWirelessProfile](#deletenetworkcamerawirelessprofile) - Delete an existing camera wireless profile for this network.
* [DeleteNetworkFirmwareUpgradesStagedGroup](#deletenetworkfirmwareupgradesstagedgroup) - Delete a Staged Upgrade Group
* [DeleteNetworkFloorPlan](#deletenetworkfloorplan) - Destroy a floor plan
* [DeleteNetworkGroupPolicy](#deletenetworkgrouppolicy) - Delete a group policy
* [DeleteNetworkMerakiAuthUser](#deletenetworkmerakiauthuser) - Deauthorize a user
* [DeleteNetworkMqttBroker](#deletenetworkmqttbroker) - Delete an MQTT broker
* [DeleteNetworkPiiRequest](#deletenetworkpiirequest) - Delete a restrict processing PII request
* [DeleteNetworkSensorAlertsProfile](#deletenetworksensoralertsprofile) - Deletes a sensor alert profile from a network.
* [DeleteNetworkSmTargetGroup](#deletenetworksmtargetgroup) - Delete a target group from a network
* [DeleteNetworkSmUserAccessDevice](#deletenetworksmuseraccessdevice) - Delete a User Access Device
* [DeleteNetworkSwitchAccessPolicy](#deletenetworkswitchaccesspolicy) - Delete an access policy for a switch network
* [DeleteNetworkSwitchDhcpServerPolicyArpInspectionTrustedServer](#deletenetworkswitchdhcpserverpolicyarpinspectiontrustedserver) - Remove a server from being trusted by Dynamic ARP Inspection on this network
* [DeleteNetworkSwitchLinkAggregation](#deletenetworkswitchlinkaggregation) - Split a link aggregation group into separate ports
* [DeleteNetworkSwitchPortSchedule](#deletenetworkswitchportschedule) - Delete a switch port schedule
* [DeleteNetworkSwitchQosRule](#deletenetworkswitchqosrule) - Delete a quality of service rule
* [DeleteNetworkSwitchRoutingMulticastRendezvousPoint](#deletenetworkswitchroutingmulticastrendezvouspoint) - Delete a multicast rendezvous point
* [DeleteNetworkSwitchStack](#deletenetworkswitchstack) - Delete a stack
* [DeleteNetworkSwitchStackRoutingInterface](#deletenetworkswitchstackroutinginterface) - Delete a layer 3 interface from a switch stack
* [DeleteNetworkSwitchStackRoutingStaticRoute](#deletenetworkswitchstackroutingstaticroute) - Delete a layer 3 static route for a switch stack
* [DeleteNetworkWebhooksHTTPServer](#deletenetworkwebhookshttpserver) - Delete an HTTP server from a network
* [DeleteNetworkWebhooksPayloadTemplate](#deletenetworkwebhookspayloadtemplate) - Destroy a webhook payload template for a network
* [DeleteNetworkWirelessRfProfile](#deletenetworkwirelessrfprofile) - Delete a RF Profile
* [DeleteNetworkWirelessSsidIdentityPsk](#deletenetworkwirelessssididentitypsk) - Delete an Identity PSK
* [DeleteOrganization](#deleteorganization) - Delete an organization
* [DeleteOrganizationActionBatch](#deleteorganizationactionbatch) - Delete an action batch
* [DeleteOrganizationAdaptivePolicyACL](#deleteorganizationadaptivepolicyacl) - Deletes the specified adaptive policy ACL
* [DeleteOrganizationAdaptivePolicyGroup](#deleteorganizationadaptivepolicygroup) - Deletes the specified adaptive policy group and any associated policies and references
* [DeleteOrganizationAdaptivePolicyPolicy](#deleteorganizationadaptivepolicypolicy) - Delete an Adaptive Policy
* [DeleteOrganizationAdmin](#deleteorganizationadmin) - Revoke all access for a dashboard administrator within this organization
* [DeleteOrganizationAlertsProfile](#deleteorganizationalertsprofile) - Removes an organization-wide alert config
* [DeleteOrganizationBrandingPolicy](#deleteorganizationbrandingpolicy) - Delete a branding policy
* [DeleteOrganizationCameraCustomAnalyticsArtifact](#deleteorganizationcameracustomanalyticsartifact) - Delete Custom Analytics Artifact
* [DeleteOrganizationConfigTemplate](#deleteorganizationconfigtemplate) - Remove a configuration template
* [DeleteOrganizationEarlyAccessFeaturesOptIn](#deleteorganizationearlyaccessfeaturesoptin) - Delete an early access feature opt-in
* [DeleteOrganizationInsightMonitoredMediaServer](#deleteorganizationinsightmonitoredmediaserver) - Delete a monitored media server from this organization
* [DeleteOrganizationPolicyObject](#deleteorganizationpolicyobject) - Deletes a Policy Object.
* [DeleteOrganizationPolicyObjectsGroup](#deleteorganizationpolicyobjectsgroup) - Deletes a Policy Object Group.
* [DeleteOrganizationSamlIdp](#deleteorganizationsamlidp) - Remove a SAML IdP in your organization.
* [DeleteOrganizationSamlRole](#deleteorganizationsamlrole) - Remove a SAML role
* [DeleteOrganizationUser](#deleteorganizationuser) - Delete a user and all of its authentication methods.
* [GetDevice](#getdevice) - Return a single device
* [GetDeviceApplianceUplinksSettings](#getdeviceapplianceuplinkssettings) - Return the uplink settings for an MX appliance
* [GetDeviceCameraCustomAnalytics](#getdevicecameracustomanalytics) - Return custom analytics settings for a camera
* [GetDeviceCameraQualityAndRetention](#getdevicecameraqualityandretention) - Returns quality and retention settings for the given camera
* [GetDeviceCameraSense](#getdevicecamerasense) - Returns sense settings for a given camera
* [GetDeviceCameraSenseObjectDetectionModels](#getdevicecamerasenseobjectdetectionmodels) - Returns the MV Sense object detection model list for the given camera
* [GetDeviceCameraVideoLink](#getdevicecameravideolink) - Returns video link to the specified camera
* [GetDeviceCameraVideoSettings](#getdevicecameravideosettings) - Returns video settings for the given camera
* [GetDeviceCameraWirelessProfiles](#getdevicecamerawirelessprofiles) - Returns wireless profile assigned to the given camera
* [GetDeviceCellularGatewayLan](#getdevicecellulargatewaylan) - Show the LAN Settings of a MG
* [GetDeviceCellularGatewayPortForwardingRules](#getdevicecellulargatewayportforwardingrules) - Returns the port forwarding rules for a single MG.
* [GetDeviceCellularSims](#getdevicecellularsims) - Return the SIM and APN configurations for a cellular device.
* [GetDeviceManagementInterface](#getdevicemanagementinterface) - Return the management interface settings for a device
* [GetDeviceSensorRelationships](#getdevicesensorrelationships) - List the sensor roles for a given sensor or camera device.
* [GetDeviceSwitchPort](#getdeviceswitchport) - Return a switch port
* [GetDeviceSwitchPorts](#getdeviceswitchports) - List the switch ports for a switch
* [GetDeviceSwitchRoutingInterface](#getdeviceswitchroutinginterface) - Return a layer 3 interface for a switch
* [GetDeviceSwitchRoutingInterfaceDhcp](#getdeviceswitchroutinginterfacedhcp) - Return a layer 3 interface DHCP configuration for a switch
* [GetDeviceSwitchRoutingInterfaces](#getdeviceswitchroutinginterfaces) - List layer 3 interfaces for a switch
* [GetDeviceSwitchRoutingStaticRoute](#getdeviceswitchroutingstaticroute) - Return a layer 3 static route for a switch
* [GetDeviceSwitchRoutingStaticRoutes](#getdeviceswitchroutingstaticroutes) - List layer 3 static routes for a switch
* [GetDeviceSwitchWarmSpare](#getdeviceswitchwarmspare) - Return warm spare configuration for a switch
* [GetDeviceWirelessBluetoothSettings](#getdevicewirelessbluetoothsettings) - Return the bluetooth settings for a wireless device
* [GetDeviceWirelessRadioSettings](#getdevicewirelessradiosettings) - Return the radio settings of a device
* [GetNetwork](#getnetwork) - Return a network
* [GetNetworkAlertsSettings](#getnetworkalertssettings) - Return the alert configuration for this network
* [GetNetworkApplianceConnectivityMonitoringDestinations](#getnetworkapplianceconnectivitymonitoringdestinations) - Return the connectivity testing destinations for an MX network
* [GetNetworkApplianceContentFiltering](#getnetworkappliancecontentfiltering) - Return the content filtering settings for an MX network
* [GetNetworkApplianceContentFilteringCategories](#getnetworkappliancecontentfilteringcategories) - List all available content filtering categories for an MX network
* [GetNetworkApplianceFirewallCellularFirewallRules](#getnetworkappliancefirewallcellularfirewallrules) - Return the cellular firewall rules for an MX network
* [GetNetworkApplianceFirewallFirewalledService](#getnetworkappliancefirewallfirewalledservice) - Return the accessibility settings of the given service ('ICMP', 'web', or 'SNMP')
* [GetNetworkApplianceFirewallFirewalledServices](#getnetworkappliancefirewallfirewalledservices) - List the appliance services and their accessibility rules
* [GetNetworkApplianceFirewallInboundCellularFirewallRules](#getnetworkappliancefirewallinboundcellularfirewallrules) - Return the inbound cellular firewall rules for an MX network
* [GetNetworkApplianceFirewallInboundFirewallRules](#getnetworkappliancefirewallinboundfirewallrules) - Return the inbound firewall rules for an MX network
* [GetNetworkApplianceFirewallL3FirewallRules](#getnetworkappliancefirewalll3firewallrules) - Return the L3 firewall rules for an MX network
* [GetNetworkApplianceFirewallL7FirewallRules](#getnetworkappliancefirewalll7firewallrules) - List the MX L7 firewall rules for an MX network
* [GetNetworkApplianceFirewallL7FirewallRulesApplicationCategories](#getnetworkappliancefirewalll7firewallrulesapplicationcategories) - Return the L7 firewall application categories and their associated applications for an MX network
* [GetNetworkApplianceFirewallOneToManyNatRules](#getnetworkappliancefirewallonetomanynatrules) - Return the 1:Many NAT mapping rules for an MX network
* [GetNetworkApplianceFirewallOneToOneNatRules](#getnetworkappliancefirewallonetoonenatrules) - Return the 1:1 NAT mapping rules for an MX network
* [GetNetworkApplianceFirewallPortForwardingRules](#getnetworkappliancefirewallportforwardingrules) - Return the port forwarding rules for an MX network
* [GetNetworkApplianceFirewallSettings](#getnetworkappliancefirewallsettings) - Return the firewall settings for this network
* [GetNetworkAppliancePort](#getnetworkapplianceport) - Return per-port VLAN settings for a single MX port.
* [GetNetworkAppliancePorts](#getnetworkapplianceports) - List per-port VLAN settings for all ports of a MX.
* [GetNetworkAppliancePrefixesDelegatedStatic](#getnetworkapplianceprefixesdelegatedstatic) - Return a static delegated prefix from a network
* [GetNetworkAppliancePrefixesDelegatedStatics](#getnetworkapplianceprefixesdelegatedstatics) - List static delegated prefixes for a network
* [GetNetworkApplianceSecurityIntrusion](#getnetworkappliancesecurityintrusion) - Returns all supported intrusion settings for an MX network
* [GetNetworkApplianceSecurityMalware](#getnetworkappliancesecuritymalware) - Returns all supported malware settings for an MX network
* [GetNetworkApplianceSettings](#getnetworkappliancesettings) - Return the appliance settings for a network
* [GetNetworkApplianceSingleLan](#getnetworkappliancesinglelan) - Return single LAN configuration
* [GetNetworkApplianceSsid](#getnetworkappliancessid) - Return a single MX SSID
* [GetNetworkApplianceSsids](#getnetworkappliancessids) - List the MX SSIDs in a network
* [GetNetworkApplianceStaticRoute](#getnetworkappliancestaticroute) - Return a static route for an MX or teleworker network
* [GetNetworkApplianceStaticRoutes](#getnetworkappliancestaticroutes) - List the static routes for an MX or teleworker network
* [GetNetworkApplianceTrafficShaping](#getnetworkappliancetrafficshaping) - Display the traffic shaping settings for an MX network
* [GetNetworkApplianceTrafficShapingCustomPerformanceClass](#getnetworkappliancetrafficshapingcustomperformanceclass) - Return a custom performance class for an MX network
* [GetNetworkApplianceTrafficShapingCustomPerformanceClasses](#getnetworkappliancetrafficshapingcustomperformanceclasses) - List all custom performance classes for an MX network
* [GetNetworkApplianceTrafficShapingRules](#getnetworkappliancetrafficshapingrules) - Display the traffic shaping settings rules for an MX network
* [GetNetworkApplianceTrafficShapingUplinkBandwidth](#getnetworkappliancetrafficshapinguplinkbandwidth) - Returns the uplink bandwidth limits for your MX network
* [GetNetworkApplianceTrafficShapingUplinkSelection](#getnetworkappliancetrafficshapinguplinkselection) - Show uplink selection settings for an MX network
* [GetNetworkApplianceVlan](#getnetworkappliancevlan) - Return a VLAN
* [GetNetworkApplianceVlans](#getnetworkappliancevlans) - List the VLANs for an MX network
* [GetNetworkApplianceVlansSettings](#getnetworkappliancevlanssettings) - Returns the enabled status of VLANs for the network
* [GetNetworkApplianceVpnBgp](#getnetworkappliancevpnbgp) - Return a Hub BGP Configuration
* [GetNetworkApplianceVpnSiteToSiteVpn](#getnetworkappliancevpnsitetositevpn) - Return the site-to-site VPN settings of a network
* [GetNetworkApplianceWarmSpare](#getnetworkappliancewarmspare) - Return MX warm spare settings
* [GetNetworkCameraQualityRetentionProfile](#getnetworkcameraqualityretentionprofile) - Retrieve a single quality retention profile
* [GetNetworkCameraQualityRetentionProfiles](#getnetworkcameraqualityretentionprofiles) - List the quality retention profiles for this network
* [GetNetworkCameraSchedules](#getnetworkcameraschedules) - Returns a list of all camera recording schedules.
* [GetNetworkCameraWirelessProfile](#getnetworkcamerawirelessprofile) - Retrieve a single camera wireless profile.
* [GetNetworkCameraWirelessProfiles](#getnetworkcamerawirelessprofiles) - List the camera wireless profiles for this network.
* [GetNetworkCellularGatewayConnectivityMonitoringDestinations](#getnetworkcellulargatewayconnectivitymonitoringdestinations) - Return the connectivity testing destinations for an MG network
* [GetNetworkCellularGatewayDhcp](#getnetworkcellulargatewaydhcp) - List common DHCP settings of MGs
* [GetNetworkCellularGatewaySubnetPool](#getnetworkcellulargatewaysubnetpool) - Return the subnet pool and mask configured for MGs in the network.
* [GetNetworkCellularGatewayUplink](#getnetworkcellulargatewayuplink) - Returns the uplink settings for your MG network.
* [GetNetworkClientPolicy](#getnetworkclientpolicy) - Return the policy assigned to a client on the network
* [GetNetworkClientSplashAuthorizationStatus](#getnetworkclientsplashauthorizationstatus) - Return the splash authorization for a client, for each SSID they've associated with through splash
* [GetNetworkDevices](#getnetworkdevices) - List the devices in a network
* [GetNetworkFirmwareUpgrades](#getnetworkfirmwareupgrades) - Get firmware upgrade information for a network
* [GetNetworkFirmwareUpgradesStagedEvents](#getnetworkfirmwareupgradesstagedevents) - Get the Staged Upgrade Event from a network
* [GetNetworkFirmwareUpgradesStagedGroup](#getnetworkfirmwareupgradesstagedgroup) - Get a Staged Upgrade Group from a network
* [GetNetworkFirmwareUpgradesStagedGroups](#getnetworkfirmwareupgradesstagedgroups) - List of Staged Upgrade Groups in a network
* [GetNetworkFirmwareUpgradesStagedStages](#getnetworkfirmwareupgradesstagedstages) - Order of Staged Upgrade Groups in a network
* [GetNetworkFloorPlan](#getnetworkfloorplan) - Find a floor plan by ID
* [GetNetworkFloorPlans](#getnetworkfloorplans) - List the floor plans that belong to your network
* [GetNetworkGroupPolicies](#getnetworkgrouppolicies) - List the group policies in a network
* [GetNetworkGroupPolicy](#getnetworkgrouppolicy) - Display a group policy
* [GetNetworkHealthAlerts](#getnetworkhealthalerts) - Return all global alerts on this network
* [GetNetworkMerakiAuthUser](#getnetworkmerakiauthuser) - Return the Meraki Auth splash guest, RADIUS, or client VPN user
* [GetNetworkMerakiAuthUsers](#getnetworkmerakiauthusers) - List the users configured under Meraki Authentication for a network (splash guest or RADIUS users for a wireless network, or client VPN users for a wired network)
* [GetNetworkMqttBroker](#getnetworkmqttbroker) - Return an MQTT broker
* [GetNetworkMqttBrokers](#getnetworkmqttbrokers) - List the MQTT brokers for this network
* [GetNetworkNetflow](#getnetworknetflow) - Return the NetFlow traffic reporting settings for a network
* [GetNetworkPiiPiiKeys](#getnetworkpiipiikeys) - List the keys required to access Personally Identifiable Information (PII) for a given identifier
* [GetNetworkPiiRequest](#getnetworkpiirequest) - Return a PII request
* [GetNetworkPiiRequests](#getnetworkpiirequests) - List the PII requests for this network or organization
* [GetNetworkPiiSmDevicesForKey](#getnetworkpiismdevicesforkey) - Given a piece of Personally Identifiable Information (PII), return the Systems Manager device ID(s) associated with that identifier
* [GetNetworkPiiSmOwnersForKey](#getnetworkpiismownersforkey) - Given a piece of Personally Identifiable Information (PII), return the Systems Manager owner ID(s) associated with that identifier
* [GetNetworkPoliciesByClient](#getnetworkpoliciesbyclient) - Get policies for all clients with policies
* [GetNetworkSensorAlertsProfile](#getnetworksensoralertsprofile) - Show details of a sensor alert profile for a network.
* [GetNetworkSensorAlertsProfiles](#getnetworksensoralertsprofiles) - Lists all sensor alert profiles for a network.
* [GetNetworkSensorRelationships](#getnetworksensorrelationships) - List the sensor roles for devices in a given network
* [GetNetworkSettings](#getnetworksettings) - Return the settings for a network
* [GetNetworkSmBypassActivationLockAttempt](#getnetworksmbypassactivationlockattempt) - Bypass activation lock attempt status
* [GetNetworkSmDeviceCerts](#getnetworksmdevicecerts) - List the certs on a device
* [GetNetworkSmDeviceDeviceProfiles](#getnetworksmdevicedeviceprofiles) - Get the installed profiles associated with a device
* [GetNetworkSmDeviceNetworkAdapters](#getnetworksmdevicenetworkadapters) - List the network adapters of a device
* [GetNetworkSmDeviceRestrictions](#getnetworksmdevicerestrictions) - List the restrictions on a device
* [GetNetworkSmDeviceSecurityCenters](#getnetworksmdevicesecuritycenters) - List the security centers on a device
* [GetNetworkSmDeviceSoftwares](#getnetworksmdevicesoftwares) - Get a list of softwares associated with a device
* [GetNetworkSmDeviceWlanLists](#getnetworksmdevicewlanlists) - List the saved SSID names on a device
* [GetNetworkSmDevices](#getnetworksmdevices) - List the devices enrolled in an SM network with various specified fields and filters
* [GetNetworkSmProfiles](#getnetworksmprofiles) - List all profiles in a network
* [GetNetworkSmTargetGroup](#getnetworksmtargetgroup) - Return a target group
* [GetNetworkSmTargetGroups](#getnetworksmtargetgroups) - List the target groups in this network
* [GetNetworkSmTrustedAccessConfigs](#getnetworksmtrustedaccessconfigs) - List Trusted Access Configs
* [GetNetworkSmUserAccessDevices](#getnetworksmuseraccessdevices) - List User Access Devices and its Trusted Access Connections
* [GetNetworkSmUserDeviceProfiles](#getnetworksmuserdeviceprofiles) - Get the profiles associated with a user
* [GetNetworkSmUserSoftwares](#getnetworksmusersoftwares) - Get a list of softwares associated with a user
* [GetNetworkSmUsers](#getnetworksmusers) - List the owners in an SM network with various specified fields and filters
* [GetNetworkSnmp](#getnetworksnmp) - Return the SNMP settings for a network
* [GetNetworkSwitchAccessControlLists](#getnetworkswitchaccesscontrollists) - Return the access control lists for a MS network
* [GetNetworkSwitchAccessPolicies](#getnetworkswitchaccesspolicies) - List the access policies for a switch network
* [GetNetworkSwitchAccessPolicy](#getnetworkswitchaccesspolicy) - Return a specific access policy for a switch network
* [GetNetworkSwitchAlternateManagementInterface](#getnetworkswitchalternatemanagementinterface) - Return the switch alternate management interface for the network
* [GetNetworkSwitchDhcpServerPolicy](#getnetworkswitchdhcpserverpolicy) - Return the DHCP server settings
* [GetNetworkSwitchDhcpServerPolicyArpInspectionTrustedServers](#getnetworkswitchdhcpserverpolicyarpinspectiontrustedservers) - Return the list of servers trusted by Dynamic ARP Inspection on this network
* [GetNetworkSwitchDhcpServerPolicyArpInspectionWarningsByDevice](#getnetworkswitchdhcpserverpolicyarpinspectionwarningsbydevice) - Return the devices that have a Dynamic ARP Inspection warning and their warnings
* [GetNetworkSwitchDhcpV4ServersSeen](#getnetworkswitchdhcpv4serversseen) - Return the network's DHCPv4 servers seen within the selected timeframe (default 1 day)
* [GetNetworkSwitchDscpToCosMappings](#getnetworkswitchdscptocosmappings) - Return the DSCP to CoS mappings
* [GetNetworkSwitchLinkAggregations](#getnetworkswitchlinkaggregations) - List link aggregation groups
* [GetNetworkSwitchMtu](#getnetworkswitchmtu) - Return the MTU configuration
* [GetNetworkSwitchPortSchedules](#getnetworkswitchportschedules) - List switch port schedules
* [GetNetworkSwitchQosRule](#getnetworkswitchqosrule) - Return a quality of service rule
* [GetNetworkSwitchQosRules](#getnetworkswitchqosrules) - List quality of service rules
* [GetNetworkSwitchQosRulesOrder](#getnetworkswitchqosrulesorder) - Return the quality of service rule IDs by order in which they will be processed by the switch
* [GetNetworkSwitchRoutingMulticast](#getnetworkswitchroutingmulticast) - Return multicast settings for a network
* [GetNetworkSwitchRoutingMulticastRendezvousPoint](#getnetworkswitchroutingmulticastrendezvouspoint) - Return a multicast rendezvous point
* [GetNetworkSwitchRoutingMulticastRendezvousPoints](#getnetworkswitchroutingmulticastrendezvouspoints) - List multicast rendezvous points
* [GetNetworkSwitchRoutingOspf](#getnetworkswitchroutingospf) - Return layer 3 OSPF routing configuration
* [GetNetworkSwitchSettings](#getnetworkswitchsettings) - Returns the switch network settings
* [GetNetworkSwitchStack](#getnetworkswitchstack) - Show a switch stack
* [GetNetworkSwitchStackRoutingInterface](#getnetworkswitchstackroutinginterface) - Return a layer 3 interface from a switch stack
* [GetNetworkSwitchStackRoutingInterfaceDhcp](#getnetworkswitchstackroutinginterfacedhcp) - Return a layer 3 interface DHCP configuration for a switch stack
* [GetNetworkSwitchStackRoutingInterfaces](#getnetworkswitchstackroutinginterfaces) - List layer 3 interfaces for a switch stack
* [GetNetworkSwitchStackRoutingStaticRoute](#getnetworkswitchstackroutingstaticroute) - Return a layer 3 static route for a switch stack
* [GetNetworkSwitchStackRoutingStaticRoutes](#getnetworkswitchstackroutingstaticroutes) - List layer 3 static routes for a switch stack
* [GetNetworkSwitchStacks](#getnetworkswitchstacks) - List the switch stacks in a network
* [GetNetworkSwitchStormControl](#getnetworkswitchstormcontrol) - Return the storm control configuration for a switch network
* [GetNetworkSwitchStp](#getnetworkswitchstp) - Returns STP settings
* [GetNetworkSyslogServers](#getnetworksyslogservers) - List the syslog servers for a network
* [GetNetworkTrafficAnalysis](#getnetworktrafficanalysis) - Return the traffic analysis settings for a network
* [GetNetworkTrafficShapingApplicationCategories](#getnetworktrafficshapingapplicationcategories) - Returns the application categories for traffic shaping rules.
* [GetNetworkTrafficShapingDscpTaggingOptions](#getnetworktrafficshapingdscptaggingoptions) - Returns the available DSCP tagging options for your traffic shaping rules.
* [GetNetworkWebhooksHTTPServer](#getnetworkwebhookshttpserver) - Return an HTTP server for a network
* [GetNetworkWebhooksHTTPServers](#getnetworkwebhookshttpservers) - List the HTTP servers for a network
* [GetNetworkWebhooksPayloadTemplate](#getnetworkwebhookspayloadtemplate) - Get the webhook payload template for a network
* [GetNetworkWebhooksPayloadTemplates](#getnetworkwebhookspayloadtemplates) - List the webhook payload templates for a network
* [GetNetworkWebhooksWebhookTest](#getnetworkwebhookswebhooktest) - Return the status of a webhook test for a network
* [GetNetworkWirelessAlternateManagementInterface](#getnetworkwirelessalternatemanagementinterface) - Return alternate management interface and devices with IP assigned
* [GetNetworkWirelessBilling](#getnetworkwirelessbilling) - Return the billing settings of this network
* [GetNetworkWirelessBluetoothSettings](#getnetworkwirelessbluetoothsettings) - Return the Bluetooth settings for a network. <a href="https://documentation.meraki.com/MR/Bluetooth/Bluetooth_Low_Energy_(BLE)">Bluetooth settings</a> must be enabled on the network.
* [GetNetworkWirelessRfProfile](#getnetworkwirelessrfprofile) - Return a RF profile
* [GetNetworkWirelessRfProfiles](#getnetworkwirelessrfprofiles) - List the non-basic RF profiles for this network
* [GetNetworkWirelessSettings](#getnetworkwirelesssettings) - Return the wireless settings for a network
* [GetNetworkWirelessSsid](#getnetworkwirelessssid) - Return a single MR SSID
* [GetNetworkWirelessSsidBonjourForwarding](#getnetworkwirelessssidbonjourforwarding) - List the Bonjour forwarding setting and rules for the SSID
* [GetNetworkWirelessSsidDeviceTypeGroupPolicies](#getnetworkwirelessssiddevicetypegrouppolicies) - List the device type group policies for the SSID
* [GetNetworkWirelessSsidEapOverride](#getnetworkwirelessssideapoverride) - Return the EAP overridden parameters for an SSID
* [GetNetworkWirelessSsidFirewallL3FirewallRules](#getnetworkwirelessssidfirewalll3firewallrules) - Return the L3 firewall rules for an SSID on an MR network
* [GetNetworkWirelessSsidFirewallL7FirewallRules](#getnetworkwirelessssidfirewalll7firewallrules) - Return the L7 firewall rules for an SSID on an MR network
* [GetNetworkWirelessSsidHotspot20](#getnetworkwirelessssidhotspot20) - Return the Hotspot 2.0 settings for an SSID
* [GetNetworkWirelessSsidIdentityPsk](#getnetworkwirelessssididentitypsk) - Return an Identity PSK
* [GetNetworkWirelessSsidIdentityPsks](#getnetworkwirelessssididentitypsks) - List all Identity PSKs in a wireless network
* [GetNetworkWirelessSsidSchedules](#getnetworkwirelessssidschedules) - List the outage schedule for the SSID
* [GetNetworkWirelessSsidSplashSettings](#getnetworkwirelessssidsplashsettings) - Display the splash page settings for the given SSID
* [GetNetworkWirelessSsidTrafficShapingRules](#getnetworkwirelessssidtrafficshapingrules) - Display the traffic shaping settings for a SSID on an MR network
* [GetNetworkWirelessSsidVpn](#getnetworkwirelessssidvpn) - List the VPN settings for the SSID.
* [GetNetworkWirelessSsids](#getnetworkwirelessssids) - List the MR SSIDs in a network
* [GetOrganization](#getorganization) - Return an organization
* [GetOrganizationActionBatch](#getorganizationactionbatch) - Return an action batch
* [GetOrganizationActionBatches](#getorganizationactionbatches) - Return the list of action batches in the organization
* [GetOrganizationAdaptivePolicyACL](#getorganizationadaptivepolicyacl) - Returns the adaptive policy ACL information
* [GetOrganizationAdaptivePolicyAcls](#getorganizationadaptivepolicyacls) - List adaptive policy ACLs in a organization
* [GetOrganizationAdaptivePolicyGroup](#getorganizationadaptivepolicygroup) - Returns an adaptive policy group
* [GetOrganizationAdaptivePolicyGroups](#getorganizationadaptivepolicygroups) - List adaptive policy groups in a organization
* [GetOrganizationAdaptivePolicyPolicies](#getorganizationadaptivepolicypolicies) - List adaptive policies in an organization
* [GetOrganizationAdaptivePolicyPolicy](#getorganizationadaptivepolicypolicy) - Return an adaptive policy
* [GetOrganizationAdaptivePolicySettings](#getorganizationadaptivepolicysettings) - Returns global adaptive policy settings in an organization
* [GetOrganizationAdmins](#getorganizationadmins) - List the dashboard administrators in this organization
* [GetOrganizationAlertsProfiles](#getorganizationalertsprofiles) - List all organization-wide alert configurations
* [GetOrganizationApplianceSecurityIntrusion](#getorganizationappliancesecurityintrusion) - Returns all supported intrusion settings for an organization
* [GetOrganizationApplianceVPNThirdPartyVPNPeers](#getorganizationappliancevpnthirdpartyvpnpeers) - Return the third party VPN peers for an organization
* [GetOrganizationApplianceVpnVpnFirewallRules](#getorganizationappliancevpnvpnfirewallrules) - Return the firewall rules for an organization's site-to-site VPN
* [GetOrganizationBrandingPolicies](#getorganizationbrandingpolicies) - List the branding policies of an organization
* [GetOrganizationBrandingPoliciesPriorities](#getorganizationbrandingpoliciespriorities) - Return the branding policy IDs of an organization in priority order
* [GetOrganizationBrandingPolicy](#getorganizationbrandingpolicy) - Return a branding policy
* [GetOrganizationCameraCustomAnalyticsArtifact](#getorganizationcameracustomanalyticsartifact) - Get Custom Analytics Artifact
* [GetOrganizationCameraCustomAnalyticsArtifacts](#getorganizationcameracustomanalyticsartifacts) - List Custom Analytics Artifacts
* [GetOrganizationCameraOnboardingStatuses](#getorganizationcameraonboardingstatuses) - Fetch onboarding status of cameras
* [GetOrganizationClientsSearch](#getorganizationclientssearch) - Return the client details in an organization
* [GetOrganizationConfigTemplate](#getorganizationconfigtemplate) - Return a single configuration template
* [GetOrganizationConfigTemplateSwitchProfilePort](#getorganizationconfigtemplateswitchprofileport) - Return a switch profile port
* [GetOrganizationConfigTemplateSwitchProfilePorts](#getorganizationconfigtemplateswitchprofileports) - Return all the ports of a switch profile
* [GetOrganizationConfigTemplateSwitchProfiles](#getorganizationconfigtemplateswitchprofiles) - List the switch profiles for your switch template configuration
* [GetOrganizationConfigTemplates](#getorganizationconfigtemplates) - List the configuration templates for this organization
* [GetOrganizationDevices](#getorganizationdevices) - List the devices in an organization
* [GetOrganizationEarlyAccessFeatures](#getorganizationearlyaccessfeatures) - List the available early access features for organization
* [GetOrganizationEarlyAccessFeaturesOptIn](#getorganizationearlyaccessfeaturesoptin) - Show an early access feature opt-in for an organization
* [GetOrganizationEarlyAccessFeaturesOptIns](#getorganizationearlyaccessfeaturesoptins) - List the early access feature opt-ins for an organization
* [GetOrganizationFirmwareUpgrades](#getorganizationfirmwareupgrades) - Get firmware upgrade information for an organization
* [GetOrganizationFirmwareUpgradesByDevice](#getorganizationfirmwareupgradesbydevice) - Get firmware upgrade status for the filtered devices
* [GetOrganizationInsightApplications](#getorganizationinsightapplications) - List all Insight tracked applications
* [GetOrganizationInsightMonitoredMediaServer](#getorganizationinsightmonitoredmediaserver) - Return a monitored media server for this organization
* [GetOrganizationInsightMonitoredMediaServers](#getorganizationinsightmonitoredmediaservers) - List the monitored media servers for this organization
* [GetOrganizationInventoryDevice](#getorganizationinventorydevice) - Return a single device from the inventory of an organization
* [GetOrganizationInventoryDevices](#getorganizationinventorydevices) - Return the device inventory for an organization
* [GetOrganizationInventoryOnboardingCloudMonitoringImports](#getorganizationinventoryonboardingcloudmonitoringimports) - Check the status of a committed Import operation
* [GetOrganizationInventoryOnboardingCloudMonitoringNetworks](#getorganizationinventoryonboardingcloudmonitoringnetworks) - Returns list of networks eligible for adding cloud monitored device
* [GetOrganizationLicense](#getorganizationlicense) - Display a license
* [GetOrganizationLicenses](#getorganizationlicenses) - List the licenses for an organization
* [GetOrganizationLicensingCotermLicenses](#getorganizationlicensingcotermlicenses) - List the licenses in a coterm organization
* [GetOrganizationLoginSecurity](#getorganizationloginsecurity) - Returns the login security settings for an organization.
* [GetOrganizationNetworks](#getorganizationnetworks) - List the networks that the user has privileges on in an organization
* [GetOrganizationPolicyObject](#getorganizationpolicyobject) - Shows details of a Policy Object.
* [GetOrganizationPolicyObjects](#getorganizationpolicyobjects) - Lists Policy Objects belonging to the organization.
* [GetOrganizationPolicyObjectsGroup](#getorganizationpolicyobjectsgroup) - Shows details of a Policy Object Group.
* [GetOrganizationPolicyObjectsGroups](#getorganizationpolicyobjectsgroups) - Lists Policy Object Groups belonging to the organization.
* [GetOrganizationSaml](#getorganizationsaml) - Returns the SAML SSO enabled settings for an organization.
* [GetOrganizationSamlIdp](#getorganizationsamlidp) - Get a SAML IdP from your organization.
* [GetOrganizationSamlIdps](#getorganizationsamlidps) - List the SAML IdPs in your organization.
* [GetOrganizationSamlRole](#getorganizationsamlrole) - Return a SAML role
* [GetOrganizationSamlRoles](#getorganizationsamlroles) - List the SAML roles for this organization
* [GetOrganizationSmApnsCert](#getorganizationsmapnscert) - Get the organization's APNS certificate
* [GetOrganizationSmVppAccount](#getorganizationsmvppaccount) - Get a hash containing the unparsed token of the VPP account with the given ID
* [GetOrganizationSmVppAccounts](#getorganizationsmvppaccounts) - List the VPP accounts in the organization
* [GetOrganizationSnmp](#getorganizationsnmp) - Return the SNMP settings for an organization
* [GetOrganizationSwitchPortsBySwitch](#getorganizationswitchportsbyswitch) - List the switchports in an organization by switch
* [GetOrganizationWirelessDevicesEthernetStatuses](#getorganizationwirelessdevicesethernetstatuses) - Endpoint to see power status for wireless devices
* [GetOrganizations](#getorganizations) - List the organizations that the user has privileges on
* [LockNetworkSmDevices](#locknetworksmdevices) - Lock a set of devices
* [ModifyNetworkSmDevicesTags](#modifynetworksmdevicestags) - Add, delete, or update the tags of a set of devices
* [MoveNetworkSmDevices](#movenetworksmdevices) - Move a set of devices to a new network
* [MoveOrganizationLicenses](#moveorganizationlicenses) - Move licenses to another organization
* [MoveOrganizationLicensesSeats](#moveorganizationlicensesseats) - Move SM seats to another organization
* [MoveOrganizationLicensingCotermLicenses](#moveorganizationlicensingcotermlicenses) - Moves a license to a different organization (coterm only)
* [ProvisionNetworkClients](#provisionnetworkclients) - Provisions a client with a name and policy
* [RefreshNetworkSmDeviceDetails](#refreshnetworksmdevicedetails) - Refresh the details of a device
* [ReleaseFromOrganizationInventory](#releasefromorganizationinventory) - Release a list of claimed devices from an organization.
* [RemoveNetworkDevices](#removenetworkdevices) - Remove a single device
* [RemoveNetworkSwitchStack](#removenetworkswitchstack) - Remove a switch from a stack
* [RenewOrganizationLicensesSeats](#reneworganizationlicensesseats) - Renew SM seats of a license
* [RollbacksNetworkFirmwareUpgradesStagedEvents](#rollbacksnetworkfirmwareupgradesstagedevents) - Rollback a Staged Upgrade Event for a network
* [SplitNetwork](#splitnetwork) - Split a combined network into individual networks for each type of device
* [SwapNetworkApplianceWarmSpare](#swapnetworkappliancewarmspare) - Swap MX primary and warm spare appliances
* [UnbindNetwork](#unbindnetwork) - Unbind a network from a template.
* [UnenrollNetworkSmDevice](#unenrollnetworksmdevice) - Unenroll a device
* [UpdateDevice](#updatedevice) - Update the attributes of a device
* [UpdateDeviceApplianceUplinksSettings](#updatedeviceapplianceuplinkssettings) - Update the uplink settings for an MX appliance
* [UpdateDeviceCameraCustomAnalytics](#updatedevicecameracustomanalytics) - Update custom analytics settings for a camera
* [UpdateDeviceCameraQualityAndRetention](#updatedevicecameraqualityandretention) - Update quality and retention settings for the given camera
* [UpdateDeviceCameraSense](#updatedevicecamerasense) - Update sense settings for the given camera
* [UpdateDeviceCameraVideoSettings](#updatedevicecameravideosettings) - Update video settings for the given camera
* [UpdateDeviceCameraWirelessProfiles](#updatedevicecamerawirelessprofiles) - Assign wireless profiles to the given camera
* [UpdateDeviceCellularGatewayLan](#updatedevicecellulargatewaylan) - Update the LAN Settings for a single MG.
* [UpdateDeviceCellularGatewayPortForwardingRules](#updatedevicecellulargatewayportforwardingrules) - Updates the port forwarding rules for a single MG.
* [UpdateDeviceCellularSims](#updatedevicecellularsims) - Updates the SIM and APN configurations for a cellular device.
* [UpdateDeviceManagementInterface](#updatedevicemanagementinterface) - Update the management interface settings for a device
* [UpdateDeviceSensorRelationships](#updatedevicesensorrelationships) - Assign one or more sensor roles to a given sensor or camera device.
* [UpdateDeviceSwitchPort](#updatedeviceswitchport) - Update a switch port
* [UpdateDeviceSwitchRoutingInterface](#updatedeviceswitchroutinginterface) - Update a layer 3 interface for a switch
* [UpdateDeviceSwitchRoutingInterfaceDhcp](#updatedeviceswitchroutinginterfacedhcp) - Update a layer 3 interface DHCP configuration for a switch
* [UpdateDeviceSwitchRoutingStaticRoute](#updatedeviceswitchroutingstaticroute) - Update a layer 3 static route for a switch
* [UpdateDeviceSwitchWarmSpare](#updatedeviceswitchwarmspare) - Update warm spare configuration for a switch
* [UpdateDeviceWirelessBluetoothSettings](#updatedevicewirelessbluetoothsettings) - Update the bluetooth settings for a wireless device
* [UpdateDeviceWirelessRadioSettings](#updatedevicewirelessradiosettings) - Update the radio settings of a device
* [UpdateNetwork](#updatenetwork) - Update a network
* [UpdateNetworkAlertsSettings](#updatenetworkalertssettings) - Update the alert configuration for this network
* [UpdateNetworkApplianceConnectivityMonitoringDestinations](#updatenetworkapplianceconnectivitymonitoringdestinations) - Update the connectivity testing destinations for an MX network
* [UpdateNetworkApplianceContentFiltering](#updatenetworkappliancecontentfiltering) - Update the content filtering settings for an MX network
* [UpdateNetworkApplianceFirewallCellularFirewallRules](#updatenetworkappliancefirewallcellularfirewallrules) - Update the cellular firewall rules of an MX network
* [UpdateNetworkApplianceFirewallFirewalledService](#updatenetworkappliancefirewallfirewalledservice) - Updates the accessibility settings for the given service ('ICMP', 'web', or 'SNMP')
* [UpdateNetworkApplianceFirewallInboundCellularFirewallRules](#updatenetworkappliancefirewallinboundcellularfirewallrules) - Update the inbound cellular firewall rules of an MX network
* [UpdateNetworkApplianceFirewallInboundFirewallRules](#updatenetworkappliancefirewallinboundfirewallrules) - Update the inbound firewall rules of an MX network
* [UpdateNetworkApplianceFirewallL3FirewallRules](#updatenetworkappliancefirewalll3firewallrules) - Update the L3 firewall rules of an MX network
* [UpdateNetworkApplianceFirewallL7FirewallRules](#updatenetworkappliancefirewalll7firewallrules) - Update the MX L7 firewall rules for an MX network
* [UpdateNetworkApplianceFirewallOneToManyNatRules](#updatenetworkappliancefirewallonetomanynatrules) - Set the 1:Many NAT mapping rules for an MX network
* [UpdateNetworkApplianceFirewallOneToOneNatRules](#updatenetworkappliancefirewallonetoonenatrules) - Set the 1:1 NAT mapping rules for an MX network
* [UpdateNetworkApplianceFirewallPortForwardingRules](#updatenetworkappliancefirewallportforwardingrules) - Update the port forwarding rules for an MX network
* [UpdateNetworkApplianceFirewallSettings](#updatenetworkappliancefirewallsettings) - Update the firewall settings for this network
* [UpdateNetworkAppliancePort](#updatenetworkapplianceport) - Update the per-port VLAN settings for a single MX port.
* [UpdateNetworkAppliancePrefixesDelegatedStatic](#updatenetworkapplianceprefixesdelegatedstatic) - Update a static delegated prefix from a network
* [UpdateNetworkApplianceSecurityIntrusion](#updatenetworkappliancesecurityintrusion) - Set the supported intrusion settings for an MX network
* [UpdateNetworkApplianceSecurityMalware](#updatenetworkappliancesecuritymalware) - Set the supported malware settings for an MX network
* [UpdateNetworkApplianceSettings](#updatenetworkappliancesettings) - Update the appliance settings for a network
* [UpdateNetworkApplianceSingleLan](#updatenetworkappliancesinglelan) - Update single LAN configuration
* [UpdateNetworkApplianceSsid](#updatenetworkappliancessid) - Update the attributes of an MX SSID
* [UpdateNetworkApplianceStaticRoute](#updatenetworkappliancestaticroute) - Update a static route for an MX or teleworker network
* [UpdateNetworkApplianceTrafficShaping](#updatenetworkappliancetrafficshaping) - Update the traffic shaping settings for an MX network
* [UpdateNetworkApplianceTrafficShapingCustomPerformanceClass](#updatenetworkappliancetrafficshapingcustomperformanceclass) - Update a custom performance class for an MX network
* [UpdateNetworkApplianceTrafficShapingRules](#updatenetworkappliancetrafficshapingrules) - Update the traffic shaping settings rules for an MX network
* [UpdateNetworkApplianceTrafficShapingUplinkBandwidth](#updatenetworkappliancetrafficshapinguplinkbandwidth) - Updates the uplink bandwidth settings for your MX network.
* [UpdateNetworkApplianceTrafficShapingUplinkSelection](#updatenetworkappliancetrafficshapinguplinkselection) - Update uplink selection settings for an MX network
* [UpdateNetworkApplianceVlan](#updatenetworkappliancevlan) - Update a VLAN
* [UpdateNetworkApplianceVlansSettings](#updatenetworkappliancevlanssettings) - Enable/Disable VLANs for the given network
* [UpdateNetworkApplianceVpnBgp](#updatenetworkappliancevpnbgp) - Update a Hub BGP Configuration
* [UpdateNetworkApplianceVpnSiteToSiteVpn](#updatenetworkappliancevpnsitetositevpn) - Update the site-to-site VPN settings of a network
* [UpdateNetworkApplianceWarmSpare](#updatenetworkappliancewarmspare) - Update MX warm spare settings
* [UpdateNetworkCameraQualityRetentionProfile](#updatenetworkcameraqualityretentionprofile) - Update an existing quality retention profile for this network.
* [UpdateNetworkCameraWirelessProfile](#updatenetworkcamerawirelessprofile) - Update an existing camera wireless profile in this network.
* [UpdateNetworkCellularGatewayConnectivityMonitoringDestinations](#updatenetworkcellulargatewayconnectivitymonitoringdestinations) - Update the connectivity testing destinations for an MG network
* [UpdateNetworkCellularGatewayDhcp](#updatenetworkcellulargatewaydhcp) - Update common DHCP settings of MGs
* [UpdateNetworkCellularGatewaySubnetPool](#updatenetworkcellulargatewaysubnetpool) - Update the subnet pool and mask configuration for MGs in the network.
* [UpdateNetworkCellularGatewayUplink](#updatenetworkcellulargatewayuplink) - Updates the uplink settings for your MG network.
* [UpdateNetworkClientPolicy](#updatenetworkclientpolicy) - Update the policy assigned to a client on the network
* [UpdateNetworkClientSplashAuthorizationStatus](#updatenetworkclientsplashauthorizationstatus) - Update a client's splash authorization
* [UpdateNetworkFirmwareUpgrades](#updatenetworkfirmwareupgrades) - Update firmware upgrade information for a network
* [UpdateNetworkFirmwareUpgradesStagedEvents](#updatenetworkfirmwareupgradesstagedevents) - Update the Staged Upgrade Event for a network
* [UpdateNetworkFirmwareUpgradesStagedGroup](#updatenetworkfirmwareupgradesstagedgroup) - Update a Staged Upgrade Group for a network
* [UpdateNetworkFirmwareUpgradesStagedStages](#updatenetworkfirmwareupgradesstagedstages) - Assign Staged Upgrade Group order in the sequence.
* [UpdateNetworkFloorPlan](#updatenetworkfloorplan) - Update a floor plan's geolocation and other meta data
* [UpdateNetworkGroupPolicy](#updatenetworkgrouppolicy) - Update a group policy
* [UpdateNetworkMerakiAuthUser](#updatenetworkmerakiauthuser) - Update a user configured with Meraki Authentication (currently, 802.1X RADIUS, splash guest, and client VPN users can be updated)
* [UpdateNetworkMqttBroker](#updatenetworkmqttbroker) - Update an MQTT broker
* [UpdateNetworkNetflow](#updatenetworknetflow) - Update the NetFlow traffic reporting settings for a network
* [UpdateNetworkSensorAlertsProfile](#updatenetworksensoralertsprofile) - Updates a sensor alert profile for a network.
* [UpdateNetworkSettings](#updatenetworksettings) - Update the settings for a network
* [UpdateNetworkSmDevicesFields](#updatenetworksmdevicesfields) - Modify the fields of a device
* [UpdateNetworkSmTargetGroup](#updatenetworksmtargetgroup) - Update a target group
* [UpdateNetworkSnmp](#updatenetworksnmp) - Update the SNMP settings for a network
* [UpdateNetworkSwitchAccessControlLists](#updatenetworkswitchaccesscontrollists) - Update the access control lists for a MS network
* [UpdateNetworkSwitchAccessPolicy](#updatenetworkswitchaccesspolicy) - Update an access policy for a switch network
* [UpdateNetworkSwitchAlternateManagementInterface](#updatenetworkswitchalternatemanagementinterface) - Update the switch alternate management interface for the network
* [UpdateNetworkSwitchDhcpServerPolicy](#updatenetworkswitchdhcpserverpolicy) - Update the DHCP server settings
* [UpdateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServer](#updatenetworkswitchdhcpserverpolicyarpinspectiontrustedserver) - Update a server that is trusted by Dynamic ARP Inspection on this network
* [UpdateNetworkSwitchDscpToCosMappings](#updatenetworkswitchdscptocosmappings) - Update the DSCP to CoS mappings
* [UpdateNetworkSwitchLinkAggregation](#updatenetworkswitchlinkaggregation) - Update a link aggregation group
* [UpdateNetworkSwitchMtu](#updatenetworkswitchmtu) - Update the MTU configuration
* [UpdateNetworkSwitchPortSchedule](#updatenetworkswitchportschedule) - Update a switch port schedule
* [UpdateNetworkSwitchQosRule](#updatenetworkswitchqosrule) - Update a quality of service rule
* [UpdateNetworkSwitchQosRulesOrder](#updatenetworkswitchqosrulesorder) - Update the order in which the rules should be processed by the switch
* [UpdateNetworkSwitchRoutingMulticast](#updatenetworkswitchroutingmulticast) - Update multicast settings for a network
* [UpdateNetworkSwitchRoutingMulticastRendezvousPoint](#updatenetworkswitchroutingmulticastrendezvouspoint) - Update a multicast rendezvous point
* [UpdateNetworkSwitchRoutingOspf](#updatenetworkswitchroutingospf) - Update layer 3 OSPF routing configuration
* [UpdateNetworkSwitchSettings](#updatenetworkswitchsettings) - Update switch network settings
* [UpdateNetworkSwitchStackRoutingInterface](#updatenetworkswitchstackroutinginterface) - Update a layer 3 interface for a switch stack
* [UpdateNetworkSwitchStackRoutingInterfaceDhcp](#updatenetworkswitchstackroutinginterfacedhcp) - Update a layer 3 interface DHCP configuration for a switch stack
* [UpdateNetworkSwitchStackRoutingStaticRoute](#updatenetworkswitchstackroutingstaticroute) - Update a layer 3 static route for a switch stack
* [UpdateNetworkSwitchStormControl](#updatenetworkswitchstormcontrol) - Update the storm control configuration for a switch network
* [UpdateNetworkSwitchStp](#updatenetworkswitchstp) - Updates STP settings
* [UpdateNetworkSyslogServers](#updatenetworksyslogservers) - Update the syslog servers for a network
* [UpdateNetworkTrafficAnalysis](#updatenetworktrafficanalysis) - Update the traffic analysis settings for a network
* [UpdateNetworkWebhooksHTTPServer](#updatenetworkwebhookshttpserver) - Update an HTTP server
* [UpdateNetworkWebhooksPayloadTemplate](#updatenetworkwebhookspayloadtemplate) - Update a webhook payload template for a network
* [UpdateNetworkWirelessAlternateManagementInterface](#updatenetworkwirelessalternatemanagementinterface) - Update alternate management interface and device static IP
* [UpdateNetworkWirelessBilling](#updatenetworkwirelessbilling) - Update the billing settings
* [UpdateNetworkWirelessBluetoothSettings](#updatenetworkwirelessbluetoothsettings) - Update the Bluetooth settings for a network
* [UpdateNetworkWirelessRfProfile](#updatenetworkwirelessrfprofile) - Updates specified RF profile for this network
* [UpdateNetworkWirelessSettings](#updatenetworkwirelesssettings) - Update the wireless settings for a network
* [UpdateNetworkWirelessSsid](#updatenetworkwirelessssid) - Update the attributes of an MR SSID
* [UpdateNetworkWirelessSsidBonjourForwarding](#updatenetworkwirelessssidbonjourforwarding) - Update the bonjour forwarding setting and rules for the SSID
* [UpdateNetworkWirelessSsidDeviceTypeGroupPolicies](#updatenetworkwirelessssiddevicetypegrouppolicies) - Update the device type group policies for the SSID
* [UpdateNetworkWirelessSsidEapOverride](#updatenetworkwirelessssideapoverride) - Update the EAP overridden parameters for an SSID.
* [UpdateNetworkWirelessSsidFirewallL3FirewallRules](#updatenetworkwirelessssidfirewalll3firewallrules) - Update the L3 firewall rules of an SSID on an MR network
* [UpdateNetworkWirelessSsidFirewallL7FirewallRules](#updatenetworkwirelessssidfirewalll7firewallrules) - Update the L7 firewall rules of an SSID on an MR network
* [UpdateNetworkWirelessSsidHotspot20](#updatenetworkwirelessssidhotspot20) - Update the Hotspot 2.0 settings of an SSID
* [UpdateNetworkWirelessSsidIdentityPsk](#updatenetworkwirelessssididentitypsk) - Update an Identity PSK
* [UpdateNetworkWirelessSsidSchedules](#updatenetworkwirelessssidschedules) - Update the outage schedule for the SSID
* [UpdateNetworkWirelessSsidSplashSettings](#updatenetworkwirelessssidsplashsettings) - Modify the splash page settings for the given SSID
* [UpdateNetworkWirelessSsidTrafficShapingRules](#updatenetworkwirelessssidtrafficshapingrules) - Update the traffic shaping settings for an SSID on an MR network
* [UpdateNetworkWirelessSsidVpn](#updatenetworkwirelessssidvpn) - Update the VPN settings for the SSID
* [UpdateOrganization](#updateorganization) - Update an organization
* [UpdateOrganizationActionBatch](#updateorganizationactionbatch) - Update an action batch
* [UpdateOrganizationAdaptivePolicyACL](#updateorganizationadaptivepolicyacl) - Updates an adaptive policy ACL
* [UpdateOrganizationAdaptivePolicyGroup](#updateorganizationadaptivepolicygroup) - Updates an adaptive policy group
* [UpdateOrganizationAdaptivePolicyPolicy](#updateorganizationadaptivepolicypolicy) - Update an Adaptive Policy
* [UpdateOrganizationAdaptivePolicySettings](#updateorganizationadaptivepolicysettings) - Update global adaptive policy settings
* [UpdateOrganizationAdmin](#updateorganizationadmin) - Update an administrator
* [UpdateOrganizationAlertsProfile](#updateorganizationalertsprofile) - Update an organization-wide alert config
* [UpdateOrganizationApplianceSecurityIntrusion](#updateorganizationappliancesecurityintrusion) - Sets supported intrusion settings for an organization
* [UpdateOrganizationApplianceVPNThirdPartyVPNPeers](#updateorganizationappliancevpnthirdpartyvpnpeers) - Update the third party VPN peers for an organization
* [UpdateOrganizationApplianceVpnVpnFirewallRules](#updateorganizationappliancevpnvpnfirewallrules) - Update the firewall rules of an organization's site-to-site VPN
* [UpdateOrganizationBrandingPoliciesPriorities](#updateorganizationbrandingpoliciespriorities) - Update the priority ordering of an organization's branding policies.
* [UpdateOrganizationBrandingPolicy](#updateorganizationbrandingpolicy) - Update a branding policy
* [UpdateOrganizationCameraOnboardingStatuses](#updateorganizationcameraonboardingstatuses) - Notify that credential handoff to camera has completed
* [UpdateOrganizationConfigTemplate](#updateorganizationconfigtemplate) - Update a configuration template
* [UpdateOrganizationConfigTemplateSwitchProfilePort](#updateorganizationconfigtemplateswitchprofileport) - Update a switch profile port
* [UpdateOrganizationEarlyAccessFeaturesOptIn](#updateorganizationearlyaccessfeaturesoptin) - Update an early access feature opt-in for an organization
* [UpdateOrganizationInsightMonitoredMediaServer](#updateorganizationinsightmonitoredmediaserver) - Update a monitored media server for this organization
* [UpdateOrganizationLicense](#updateorganizationlicense) - Update a license
* [UpdateOrganizationLoginSecurity](#updateorganizationloginsecurity) - Update the login security settings for an organization
* [UpdateOrganizationPolicyObject](#updateorganizationpolicyobject) - Updates a Policy Object.
* [UpdateOrganizationPolicyObjectsGroup](#updateorganizationpolicyobjectsgroup) - Updates a Policy Object Group.
* [UpdateOrganizationSaml](#updateorganizationsaml) - Updates the SAML SSO enabled settings for an organization.
* [UpdateOrganizationSamlIdp](#updateorganizationsamlidp) - Update a SAML IdP in your organization
* [UpdateOrganizationSamlRole](#updateorganizationsamlrole) - Update a SAML role
* [UpdateOrganizationSnmp](#updateorganizationsnmp) - Update the SNMP settings for an organization
* [VmxNetworkDevicesClaim](#vmxnetworkdevicesclaim) - Claim a vMX into a network
* [WipeNetworkSmDevices](#wipenetworksmdevices) - Wipe a device

## AddNetworkSwitchStack

Add a switch to a stack

### Example Usage

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
    res, err := s.Configure.AddNetworkSwitchStack(ctx, operations.AddNetworkSwitchStackRequest{
        RequestBody: operations.AddNetworkSwitchStackRequestBody{
            Serial: "maiores",
        },
        NetworkID: "ea",
        SwitchStackID: "vel",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AddNetworkSwitchStack200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## AssignOrganizationLicensesSeats

Assign SM seats to a network. This will increase the managed SM device limit of the network

### Example Usage

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
    res, err := s.Configure.AssignOrganizationLicensesSeats(ctx, operations.AssignOrganizationLicensesSeatsRequest{
        RequestBody: operations.AssignOrganizationLicensesSeatsRequestBody{
            LicenseID: "delectus",
            NetworkID: "accusamus",
            SeatCount: 970097,
        },
        OrganizationID: "consequatur",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssignOrganizationLicensesSeats200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## BindNetwork

Bind a network to a template.

### Example Usage

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
    res, err := s.Configure.BindNetwork(ctx, operations.BindNetworkRequest{
        RequestBody: operations.BindNetworkRequestBody{
            AutoBind: sdk.Bool(false),
            ConfigTemplateID: "sed",
        },
        NetworkID: "accusantium",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BindNetwork200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## CheckinNetworkSmDevices

Force check-in a set of devices

### Example Usage

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
    res, err := s.Configure.CheckinNetworkSmDevices(ctx, operations.CheckinNetworkSmDevicesRequest{
        RequestBody: &operations.CheckinNetworkSmDevicesRequestBody{
            Ids: []string{
                "provident",
                "maiores",
                "quaerat",
                "numquam",
            },
            Scope: []string{
                "cum",
            },
            Serials: []string{
                "dolores",
                "enim",
            },
            WifiMacs: []string{
                "libero",
                "omnis",
            },
        },
        NetworkID: "excepturi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CheckinNetworkSmDevices200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ClaimIntoOrganization

Claim a list of devices, licenses, and/or orders into an organization. When claiming by order, all devices and licenses in the order will be claimed; licenses will be added to the organization and devices will be placed in the organization's inventory.

### Example Usage

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
    res, err := s.Configure.ClaimIntoOrganization(ctx, operations.ClaimIntoOrganizationRequest{
        RequestBody: &operations.ClaimIntoOrganizationRequestBody{
            Licenses: []ClaimIntoOrganizationRequestBodyLicenses{
                operations.ClaimIntoOrganizationRequestBodyLicenses{
                    Key: "quisquam",
                    Mode: operations.ClaimIntoOrganizationRequestBodyLicensesModeEnumRenew.ToPointer(),
                },
            },
            Orders: []string{
                "cum",
                "quibusdam",
                "est",
                "commodi",
            },
            Serials: []string{
                "autem",
                "dicta",
                "recusandae",
            },
        },
        OrganizationID: "sapiente",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ClaimIntoOrganization200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ClaimIntoOrganizationInventory

Claim a list of devices, licenses, and/or orders into an organization inventory. When claiming by order, all devices and licenses in the order will be claimed; licenses will be added to the organization and devices will be placed in the organization's inventory. Use /organizations/{organizationId}/inventory/release to release devices from an organization.

### Example Usage

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
    res, err := s.Configure.ClaimIntoOrganizationInventory(ctx, operations.ClaimIntoOrganizationInventoryRequest{
        RequestBody: &operations.ClaimIntoOrganizationInventoryRequestBody{
            Licenses: []ClaimIntoOrganizationInventoryRequestBodyLicenses{
                operations.ClaimIntoOrganizationInventoryRequestBodyLicenses{
                    Key: "odit",
                    Mode: operations.ClaimIntoOrganizationInventoryRequestBodyLicensesModeEnumAddDevices.ToPointer(),
                },
                operations.ClaimIntoOrganizationInventoryRequestBodyLicenses{
                    Key: "iste",
                    Mode: operations.ClaimIntoOrganizationInventoryRequestBodyLicensesModeEnumRenew.ToPointer(),
                },
                operations.ClaimIntoOrganizationInventoryRequestBodyLicenses{
                    Key: "explicabo",
                    Mode: operations.ClaimIntoOrganizationInventoryRequestBodyLicensesModeEnumAddDevices.ToPointer(),
                },
            },
            Orders: []string{
                "doloribus",
                "pariatur",
                "aut",
            },
            Serials: []string{
                "iste",
                "eveniet",
                "nam",
            },
        },
        OrganizationID: "animi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ClaimIntoOrganizationInventory200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ClaimNetworkDevices

Claim devices into a network. (Note: for recently claimed devices, it may take a few minutes for API requsts against that device to succeed)

### Example Usage

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
    res, err := s.Configure.ClaimNetworkDevices(ctx, operations.ClaimNetworkDevicesRequest{
        RequestBody: operations.ClaimNetworkDevicesRequestBody{
            Serials: []string{
                "voluptate",
                "voluptatibus",
            },
        },
        NetworkID: "quam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## CloneOrganization

Create a new organization by cloning the addressed organization

### Example Usage

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
    res, err := s.Configure.CloneOrganization(ctx, operations.CloneOrganizationRequest{
        RequestBody: operations.CloneOrganizationRequestBody{
            Name: "Stanley Von II",
        },
        OrganizationID: "excepturi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CloneOrganization201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## CloneOrganizationSwitchDevices

Clone port-level and some switch-level configuration settings from a source switch to one or more target switches. Cloned settings include: Aggregation Groups, Power Settings, Multicast Settings, MTU Configuration, STP Bridge priority, Port Mirroring

### Example Usage

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
    res, err := s.Configure.CloneOrganizationSwitchDevices(ctx, operations.CloneOrganizationSwitchDevicesRequest{
        RequestBody: operations.CloneOrganizationSwitchDevicesRequestBody{
            SourceSerial: "aliquid",
            TargetSerials: []string{
                "voluptatem",
                "illum",
            },
        },
        OrganizationID: "laboriosam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CloneOrganizationSwitchDevices200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## CombineOrganizationNetworks

Combine multiple networks into a single network

### Example Usage

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
    res, err := s.Configure.CombineOrganizationNetworks(ctx, operations.CombineOrganizationNetworksRequest{
        RequestBody: operations.CombineOrganizationNetworksRequestBody{
            EnrollmentString: sdk.String("culpa"),
            Name: "Miss Leah Dicki",
            NetworkIds: []string{
                "culpa",
                "temporibus",
            },
        },
        OrganizationID: "a",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CombineOrganizationNetworks200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## CreateDeviceApplianceVmxAuthenticationToken

Generate a new vMX authentication token

### Example Usage

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
    res, err := s.Configure.CreateDeviceApplianceVmxAuthenticationToken(ctx, operations.CreateDeviceApplianceVmxAuthenticationTokenRequest{
        Serial: "ad",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateDeviceApplianceVmxAuthenticationToken201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## CreateDeviceSwitchRoutingInterface

Create a layer 3 interface for a switch

### Example Usage

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
    res, err := s.Configure.CreateDeviceSwitchRoutingInterface(ctx, operations.CreateDeviceSwitchRoutingInterfaceRequest{
        RequestBody: &operations.CreateDeviceSwitchRoutingInterfaceRequestBody{
            DefaultGateway: sdk.String("cupiditate"),
            InterfaceIP: sdk.String("suscipit"),
            Ipv6: &operations.CreateDeviceSwitchRoutingInterfaceRequestBodyIpv6{
                Address: sdk.String("890 Schuster Loop"),
                AssignmentMode: sdk.String("neque"),
                Gateway: sdk.String("quam"),
                Prefix: sdk.String("animi"),
            },
            MulticastRouting: operations.CreateDeviceSwitchRoutingInterfaceRequestBodyMulticastRoutingEnumEnabled.ToPointer(),
            Name: sdk.String("Miss Donald Schamberger V"),
            OspfSettings: &operations.CreateDeviceSwitchRoutingInterfaceRequestBodyOspfSettings{
                Area: sdk.String("eligendi"),
                Cost: sdk.Int64(580689),
                IsPassiveEnabled: sdk.Bool(false),
            },
            OspfV3: &operations.CreateDeviceSwitchRoutingInterfaceRequestBodyOspfV3{
                Area: sdk.String("quis"),
                Cost: sdk.Int64(734361),
                IsPassiveEnabled: sdk.Bool(false),
            },
            Subnet: sdk.String("officia"),
            VlanID: sdk.Int64(610563),
        },
        Serial: "unde",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateDeviceSwitchRoutingInterface201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## CreateDeviceSwitchRoutingStaticRoute

Create a layer 3 static route for a switch

### Example Usage

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
    res, err := s.Configure.CreateDeviceSwitchRoutingStaticRoute(ctx, operations.CreateDeviceSwitchRoutingStaticRouteRequest{
        RequestBody: operations.CreateDeviceSwitchRoutingStaticRouteRequestBody{
            AdvertiseViaOspfEnabled: sdk.Bool(false),
            Name: sdk.String("Rick Kuphal"),
            NextHopIP: "deserunt",
            PreferOverOspfRoutesEnabled: sdk.Bool(false),
            Subnet: "dolor",
        },
        Serial: "hic",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateDeviceSwitchRoutingStaticRoute201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## CreateNetworkAppliancePrefixesDelegatedStatic

Add a static delegated prefix from a network

### Example Usage

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
    res, err := s.Configure.CreateNetworkAppliancePrefixesDelegatedStatic(ctx, operations.CreateNetworkAppliancePrefixesDelegatedStaticRequest{
        RequestBody: operations.CreateNetworkAppliancePrefixesDelegatedStaticRequestBody{
            Description: sdk.String("iure"),
            Origin: operations.CreateNetworkAppliancePrefixesDelegatedStaticRequestBodyOrigin{
                Interfaces: []string{
                    "autem",
                    "iste",
                    "cupiditate",
                },
                Type: operations.CreateNetworkAppliancePrefixesDelegatedStaticRequestBodyOriginTypeEnumIndependent.ToPointer(),
            },
            Prefix: "fuga",
        },
        NetworkID: "a",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateNetworkAppliancePrefixesDelegatedStatic201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## CreateNetworkApplianceStaticRoute

Add a static route for an MX or teleworker network

### Example Usage

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
    res, err := s.Configure.CreateNetworkApplianceStaticRoute(ctx, operations.CreateNetworkApplianceStaticRouteRequest{
        RequestBody: operations.CreateNetworkApplianceStaticRouteRequestBody{
            GatewayIP: "dolor",
            GatewayVlanID: sdk.String("voluptatum"),
            Name: "Mrs. Forrest Waelchi",
            Subnet: "vitae",
        },
        NetworkID: "numquam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateNetworkApplianceStaticRoute201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## CreateNetworkApplianceTrafficShapingCustomPerformanceClass

Add a custom performance class for an MX network

### Example Usage

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
    res, err := s.Configure.CreateNetworkApplianceTrafficShapingCustomPerformanceClass(ctx, operations.CreateNetworkApplianceTrafficShapingCustomPerformanceClassRequest{
        RequestBody: operations.CreateNetworkApplianceTrafficShapingCustomPerformanceClassRequestBody{
            MaxJitter: sdk.Int64(279232),
            MaxLatency: sdk.Int64(266976),
            MaxLossPercentage: sdk.Int64(552741),
            Name: "Adrian Muller",
        },
        NetworkID: "animi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateNetworkApplianceTrafficShapingCustomPerformanceClass201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## CreateNetworkApplianceVlan

Add a VLAN

### Example Usage

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
    res, err := s.Configure.CreateNetworkApplianceVlan(ctx, operations.CreateNetworkApplianceVlanRequest{
        RequestBody: operations.CreateNetworkApplianceVlanRequestBody{
            ApplianceIP: sdk.String("consequatur"),
            Cidr: sdk.String("voluptates"),
            GroupPolicyID: sdk.String("delectus"),
            ID: "2f536028-efee-4f93-8152-ed7e253f4c15",
            Ipv6: &operations.CreateNetworkApplianceVlanRequestBodyIpv6{
                Enabled: sdk.Bool(false),
                PrefixAssignments: []CreateNetworkApplianceVlanRequestBodyIpv6PrefixAssignments{
                    operations.CreateNetworkApplianceVlanRequestBodyIpv6PrefixAssignments{
                        Autonomous: sdk.Bool(false),
                        Origin: &operations.CreateNetworkApplianceVlanRequestBodyIpv6PrefixAssignmentsOrigin{
                            Interfaces: []string{
                                "voluptates",
                                "officia",
                                "est",
                                "in",
                            },
                            Type: operations.CreateNetworkApplianceVlanRequestBodyIpv6PrefixAssignmentsOriginTypeEnumIndependent,
                        },
                        StaticApplianceIp6: sdk.String("voluptate"),
                        StaticPrefix: sdk.String("consequatur"),
                    },
                    operations.CreateNetworkApplianceVlanRequestBodyIpv6PrefixAssignments{
                        Autonomous: sdk.Bool(false),
                        Origin: &operations.CreateNetworkApplianceVlanRequestBodyIpv6PrefixAssignmentsOrigin{
                            Interfaces: []string{
                                "incidunt",
                                "dolore",
                                "nemo",
                                "est",
                            },
                            Type: operations.CreateNetworkApplianceVlanRequestBodyIpv6PrefixAssignmentsOriginTypeEnumInternet,
                        },
                        StaticApplianceIp6: sdk.String("maxime"),
                        StaticPrefix: sdk.String("delectus"),
                    },
                },
            },
            MandatoryDhcp: &operations.CreateNetworkApplianceVlanRequestBodyMandatoryDhcp{
                Enabled: sdk.Bool(false),
            },
            Mask: sdk.Int64(385383),
            Name: "Lillie Pfannerstill",
            Subnet: sdk.String("cupiditate"),
            TemplateVlanType: operations.CreateNetworkApplianceVlanRequestBodyTemplateVlanTypeEnumUnique.ToPointer(),
        },
        NetworkID: "tempore",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateNetworkApplianceVlan201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## CreateNetworkCameraQualityRetentionProfile

Creates new quality retention profile for this network.

### Example Usage

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
    res, err := s.Configure.CreateNetworkCameraQualityRetentionProfile(ctx, operations.CreateNetworkCameraQualityRetentionProfileRequest{
        RequestBody: operations.CreateNetworkCameraQualityRetentionProfileRequestBody{
            AudioRecordingEnabled: sdk.Bool(false),
            CloudArchiveEnabled: sdk.Bool(false),
            MaxRetentionDays: sdk.Int64(636190),
            MotionBasedRetentionEnabled: sdk.Bool(false),
            MotionDetectorVersion: sdk.Int64(855647),
            Name: "Penny Hand",
            RestrictedBandwidthModeEnabled: sdk.Bool(false),
            ScheduleID: sdk.String("ut"),
            VideoSettings: &operations.CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettings{
                Mv12Mv22Mv72: &operations.CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72{
                    Quality: operations.CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72QualityEnumEnhanced,
                    Resolution: operations.CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72ResolutionEnumOneThousandTwoHundredAndEightyx720,
                },
                Mv12We: &operations.CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12WE{
                    Quality: operations.CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12WEQualityEnumStandard,
                    Resolution: operations.CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12WEResolutionEnumOneThousandTwoHundredAndEightyx720,
                },
                Mv13: &operations.CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv13{
                    Quality: operations.CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv13QualityEnumStandard,
                    Resolution: operations.CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv13ResolutionEnumTwoThousandSixHundredAndEightyEightx1512,
                },
                Mv21Mv71: &operations.CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71{
                    Quality: operations.CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71QualityEnumHigh,
                    Resolution: operations.CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71ResolutionEnumOneThousandTwoHundredAndEightyx720,
                },
                Mv22XMv72X: &operations.CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72X{
                    Quality: operations.CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72XQualityEnumStandard,
                    Resolution: operations.CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72XResolutionEnumOneThousandNineHundredAndTwentyx1080,
                },
                Mv32: &operations.CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32{
                    Quality: operations.CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32QualityEnumEnhanced,
                    Resolution: operations.CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32ResolutionEnumTwoThousandAndFiftyEightx2058,
                },
                Mv33: &operations.CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv33{
                    Quality: operations.CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv33QualityEnumStandard,
                    Resolution: operations.CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv33ResolutionEnumTwoThousandOneHundredAndTwelvex2112,
                },
                Mv52: &operations.CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv52{
                    Quality: operations.CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv52QualityEnumStandard,
                    Resolution: operations.CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv52ResolutionEnumTwoThousandSixHundredAndEightyEightx1512,
                },
                Mv63: &operations.CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv63{
                    Quality: operations.CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv63QualityEnumStandard,
                    Resolution: operations.CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv63ResolutionEnumOneThousandNineHundredAndTwentyx1080,
                },
                Mv63X: &operations.CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv63X{
                    Quality: operations.CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv63XQualityEnumEnhanced,
                    Resolution: operations.CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv63XResolutionEnumThreeThousandEightHundredAndFortyx2160,
                },
                Mv93: &operations.CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv93{
                    Quality: operations.CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv93QualityEnumStandard,
                    Resolution: operations.CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv93ResolutionEnumOneThousandAndEightyx1080,
                },
                Mv93X: &operations.CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv93X{
                    Quality: operations.CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv93XQualityEnumHigh,
                    Resolution: operations.CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv93XResolutionEnumTwoThousandEightHundredAndEightyx2880,
                },
            },
        },
        NetworkID: "minus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateNetworkCameraQualityRetentionProfile200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## CreateNetworkCameraWirelessProfile

Creates a new camera wireless profile for this network.

### Example Usage

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
    res, err := s.Configure.CreateNetworkCameraWirelessProfile(ctx, operations.CreateNetworkCameraWirelessProfileRequest{
        RequestBody: operations.CreateNetworkCameraWirelessProfileRequestBody{
            Identity: &operations.CreateNetworkCameraWirelessProfileRequestBodyIdentity{
                Password: sdk.String("ut"),
                Username: sdk.String("Michele33"),
            },
            Name: "Perry Mayert",
            Ssid: operations.CreateNetworkCameraWirelessProfileRequestBodySsid{
                AuthMode: operations.CreateNetworkCameraWirelessProfileRequestBodySsidAuthModeEnumEightThousandAndTwentyOnexRadius.ToPointer(),
                EncryptionMode: sdk.String("amet"),
                Name: sdk.String("Robyn McCullough"),
                Psk: sdk.String("tempore"),
            },
        },
        NetworkID: "in",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateNetworkCameraWirelessProfile200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## CreateNetworkFirmwareUpgradesRollback

Rollback a Firmware Upgrade For A Network

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Configure.CreateNetworkFirmwareUpgradesRollback(ctx, operations.CreateNetworkFirmwareUpgradesRollbackRequest{
        RequestBody: operations.CreateNetworkFirmwareUpgradesRollbackRequestBody{
            Product: operations.CreateNetworkFirmwareUpgradesRollbackRequestBodyProductEnumSwitch.ToPointer(),
            Reasons: []CreateNetworkFirmwareUpgradesRollbackRequestBodyReasons{
                operations.CreateNetworkFirmwareUpgradesRollbackRequestBodyReasons{
                    Category: operations.CreateNetworkFirmwareUpgradesRollbackRequestBodyReasonsCategoryEnumUnifyingNetworksVersions,
                    Comment: "recusandae",
                },
                operations.CreateNetworkFirmwareUpgradesRollbackRequestBodyReasons{
                    Category: operations.CreateNetworkFirmwareUpgradesRollbackRequestBodyReasonsCategoryEnumTesting,
                    Comment: "iusto",
                },
                operations.CreateNetworkFirmwareUpgradesRollbackRequestBodyReasons{
                    Category: operations.CreateNetworkFirmwareUpgradesRollbackRequestBodyReasonsCategoryEnumPerformance,
                    Comment: "harum",
                },
                operations.CreateNetworkFirmwareUpgradesRollbackRequestBodyReasons{
                    Category: operations.CreateNetworkFirmwareUpgradesRollbackRequestBodyReasonsCategoryEnumOther,
                    Comment: "quod",
                },
            },
            Time: types.MustTimeFromString("2022-06-25T19:06:36.393Z"),
            ToVersion: &operations.CreateNetworkFirmwareUpgradesRollbackRequestBodyToVersion{
                ID: sdk.String("d4baf91e-506e-4f89-8a54-b475f16f56d3"),
            },
        },
        NetworkID: "corrupti",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateNetworkFirmwareUpgradesRollback200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## CreateNetworkFirmwareUpgradesStagedEvent

Create a Staged Upgrade Event for a network

### Example Usage

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
    res, err := s.Configure.CreateNetworkFirmwareUpgradesStagedEvent(ctx, operations.CreateNetworkFirmwareUpgradesStagedEventRequest{
        RequestBody: operations.CreateNetworkFirmwareUpgradesStagedEventRequestBody{
            Products: &operations.CreateNetworkFirmwareUpgradesStagedEventRequestBodyProducts{
                Switch: &operations.CreateNetworkFirmwareUpgradesStagedEventRequestBodyProductsSwitch{
                    NextUpgrade: &operations.CreateNetworkFirmwareUpgradesStagedEventRequestBodyProductsSwitchNextUpgrade{
                        ToVersion: &operations.CreateNetworkFirmwareUpgradesStagedEventRequestBodyProductsSwitchNextUpgradeToVersion{
                            ID: "5a3c4ac6-31b9-49e2-aced-8f9fdb9410f6",
                        },
                    },
                },
            },
            Stages: []CreateNetworkFirmwareUpgradesStagedEventRequestBodyStages{
                operations.CreateNetworkFirmwareUpgradesStagedEventRequestBodyStages{
                    Group: &operations.CreateNetworkFirmwareUpgradesStagedEventRequestBodyStagesGroup{
                        ID: "bbf81783-7b01-4afd-9788-624189eb4487",
                    },
                    Milestones: &operations.CreateNetworkFirmwareUpgradesStagedEventRequestBodyStagesMilestones{
                        ScheduledFor: "consectetur",
                    },
                },
            },
        },
        NetworkID: "sapiente",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateNetworkFirmwareUpgradesStagedEvent200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## CreateNetworkFirmwareUpgradesStagedGroup

Create a Staged Upgrade Group for a network

### Example Usage

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
    res, err := s.Configure.CreateNetworkFirmwareUpgradesStagedGroup(ctx, operations.CreateNetworkFirmwareUpgradesStagedGroupRequest{
        RequestBody: operations.CreateNetworkFirmwareUpgradesStagedGroupRequestBody{
            AssignedDevices: &operations.CreateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevices{
                Devices: []CreateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevicesDevices{
                    operations.CreateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevicesDevices{
                        Name: sdk.String("Diana Feil V"),
                        Serial: "possimus",
                    },
                    operations.CreateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevicesDevices{
                        Name: sdk.String("Marlon Boyle"),
                        Serial: "nobis",
                    },
                },
                SwitchStacks: []CreateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevicesSwitchStacks{
                    operations.CreateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevicesSwitchStacks{
                        ID: "4152eab9-cd7e-4522-8a6a-0e123b7847ec",
                        Name: sdk.String("Dr. Guadalupe Walsh"),
                    },
                    operations.CreateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevicesSwitchStacks{
                        ID: "7f3c4cce-4b6d-4769-aff3-c5747501357e",
                        Name: sdk.String("Danielle Wunsch DVM"),
                    },
                    operations.CreateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevicesSwitchStacks{
                        ID: "8b084c31-97e1-493a-a454-67f94874c2d5",
                        Name: sdk.String("Sherman Green"),
                    },
                    operations.CreateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevicesSwitchStacks{
                        ID: "2233e66b-d8fe-45d0-8b97-9ef203873205",
                        Name: sdk.String("Charles Rutherford"),
                    },
                },
            },
            Description: sdk.String("architecto"),
            IsDefault: false,
            Name: "Erika Jaskolski Jr.",
        },
        NetworkID: "non",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateNetworkFirmwareUpgradesStagedGroup200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## CreateNetworkFloorPlan

Upload a floor plan

### Example Usage

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
    res, err := s.Configure.CreateNetworkFloorPlan(ctx, operations.CreateNetworkFloorPlanRequest{
        RequestBody: operations.CreateNetworkFloorPlanRequestBody{
            BottomLeftCorner: &operations.CreateNetworkFloorPlanRequestBodyBottomLeftCorner{
                Lat: sdk.Float32(1096.95),
                Lng: sdk.Float32(1928.8),
            },
            BottomRightCorner: &operations.CreateNetworkFloorPlanRequestBodyBottomRightCorner{
                Lat: sdk.Float32(6992.15),
                Lng: sdk.Float32(2151.82),
            },
            Center: &operations.CreateNetworkFloorPlanRequestBodyCenter{
                Lat: sdk.Float32(8910.63),
                Lng: sdk.Float32(3391.18),
            },
            ImageContents: "eaque",
            Name: "Debbie Windler",
            TopLeftCorner: &operations.CreateNetworkFloorPlanRequestBodyTopLeftCorner{
                Lat: sdk.Float32(9786.83),
                Lng: sdk.Float32(8941.73),
            },
            TopRightCorner: &operations.CreateNetworkFloorPlanRequestBodyTopRightCorner{
                Lat: sdk.Float32(4426.68),
                Lng: sdk.Float32(1810.41),
            },
        },
        NetworkID: "assumenda",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateNetworkFloorPlan201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## CreateNetworkGroupPolicy

Create a group policy

### Example Usage

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
    res, err := s.Configure.CreateNetworkGroupPolicy(ctx, operations.CreateNetworkGroupPolicyRequest{
        RequestBody: operations.CreateNetworkGroupPolicyRequestBody{
            Bandwidth: &operations.CreateNetworkGroupPolicyRequestBodyBandwidth{
                BandwidthLimits: &operations.CreateNetworkGroupPolicyRequestBodyBandwidthBandwidthLimits{
                    LimitDown: sdk.Int64(763747),
                    LimitUp: sdk.Int64(281120),
                },
                Settings: operations.CreateNetworkGroupPolicyRequestBodyBandwidthSettingsEnumCustom.ToPointer(),
            },
            BonjourForwarding: &operations.CreateNetworkGroupPolicyRequestBodyBonjourForwarding{
                Rules: []CreateNetworkGroupPolicyRequestBodyBonjourForwardingRules{
                    operations.CreateNetworkGroupPolicyRequestBodyBonjourForwardingRules{
                        Description: sdk.String("quam"),
                        Services: []CreateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnum{
                            operations.CreateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnumAfp,
                            operations.CreateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnumScanners,
                            operations.CreateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnumScanners,
                            operations.CreateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnumAllServices,
                        },
                        VlanID: "tenetur",
                    },
                    operations.CreateNetworkGroupPolicyRequestBodyBonjourForwardingRules{
                        Description: sdk.String("non"),
                        Services: []CreateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnum{
                            operations.CreateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnumSSH,
                        },
                        VlanID: "itaque",
                    },
                },
                Settings: operations.CreateNetworkGroupPolicyRequestBodyBonjourForwardingSettingsEnumNetworkDefault.ToPointer(),
            },
            ContentFiltering: &operations.CreateNetworkGroupPolicyRequestBodyContentFiltering{
                AllowedURLPatterns: &operations.CreateNetworkGroupPolicyRequestBodyContentFilteringAllowedURLPatterns{
                    Patterns: []string{
                        "dicta",
                        "corporis",
                        "impedit",
                        "eveniet",
                    },
                    Settings: operations.CreateNetworkGroupPolicyRequestBodyContentFilteringAllowedURLPatternsSettingsEnumOverride.ToPointer(),
                },
                BlockedURLCategories: &operations.CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedURLCategories{
                    Categories: []string{
                        "illum",
                        "ea",
                    },
                    Settings: operations.CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedURLCategoriesSettingsEnumOverride.ToPointer(),
                },
                BlockedURLPatterns: &operations.CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedURLPatterns{
                    Patterns: []string{
                        "accusamus",
                    },
                    Settings: operations.CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedURLPatternsSettingsEnumNetworkDefault.ToPointer(),
                },
            },
            FirewallAndTrafficShaping: &operations.CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShaping{
                L3FirewallRules: []CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL3FirewallRules{
                    operations.CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL3FirewallRules{
                        Comment: sdk.String("voluptatem"),
                        DestCidr: "maiores",
                        DestPort: sdk.String("odio"),
                        Policy: "veniam",
                        Protocol: "fuga",
                    },
                    operations.CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL3FirewallRules{
                        Comment: sdk.String("itaque"),
                        DestCidr: "possimus",
                        DestPort: sdk.String("tenetur"),
                        Policy: "sed",
                        Protocol: "deserunt",
                    },
                    operations.CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL3FirewallRules{
                        Comment: sdk.String("eligendi"),
                        DestCidr: "id",
                        DestPort: sdk.String("distinctio"),
                        Policy: "corporis",
                        Protocol: "quas",
                    },
                    operations.CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL3FirewallRules{
                        Comment: sdk.String("soluta"),
                        DestCidr: "cupiditate",
                        DestPort: sdk.String("unde"),
                        Policy: "et",
                        Protocol: "quisquam",
                    },
                },
                L7FirewallRules: []CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRules{
                    operations.CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRules{
                        Policy: operations.CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRulesPolicyEnumDeny.ToPointer(),
                        Type: operations.CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRulesTypeEnumApplication.ToPointer(),
                        Value: sdk.String("suscipit"),
                    },
                    operations.CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRules{
                        Policy: operations.CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRulesPolicyEnumDeny.ToPointer(),
                        Type: operations.CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRulesTypeEnumPort.ToPointer(),
                        Value: sdk.String("pariatur"),
                    },
                    operations.CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRules{
                        Policy: operations.CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRulesPolicyEnumDeny.ToPointer(),
                        Type: operations.CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRulesTypeEnumIPRange.ToPointer(),
                        Value: sdk.String("quaerat"),
                    },
                },
                Settings: operations.CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingSettingsEnumIgnore.ToPointer(),
                TrafficShapingRules: []CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRules{
                    operations.CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRules{
                        Definitions: []CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitions{
                            operations.CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitions{
                                Type: operations.CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnumHost,
                                Value: "quasi",
                            },
                            operations.CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitions{
                                Type: operations.CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnumPort,
                                Value: "odio",
                            },
                        },
                        DscpTagValue: sdk.Int64(253916),
                        PcpTagValue: sdk.Int64(144621),
                        PerClientBandwidthLimits: &operations.CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesPerClientBandwidthLimits{
                            BandwidthLimits: &operations.CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesPerClientBandwidthLimitsBandwidthLimits{
                                LimitDown: sdk.Int64(78802),
                                LimitUp: sdk.Int64(761773),
                            },
                            Settings: sdk.String("nobis"),
                        },
                        Priority: sdk.String("recusandae"),
                    },
                    operations.CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRules{
                        Definitions: []CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitions{
                            operations.CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitions{
                                Type: operations.CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnumLocalNet,
                                Value: "provident",
                            },
                            operations.CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitions{
                                Type: operations.CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnumApplicationCategory,
                                Value: "sit",
                            },
                        },
                        DscpTagValue: sdk.Int64(146004),
                        PcpTagValue: sdk.Int64(952110),
                        PerClientBandwidthLimits: &operations.CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesPerClientBandwidthLimits{
                            BandwidthLimits: &operations.CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesPerClientBandwidthLimitsBandwidthLimits{
                                LimitDown: sdk.Int64(7913),
                                LimitUp: sdk.Int64(877619),
                            },
                            Settings: sdk.String("id"),
                        },
                        Priority: sdk.String("error"),
                    },
                    operations.CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRules{
                        Definitions: []CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitions{
                            operations.CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitions{
                                Type: operations.CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnumApplication,
                                Value: "distinctio",
                            },
                        },
                        DscpTagValue: sdk.Int64(377976),
                        PcpTagValue: sdk.Int64(575433),
                        PerClientBandwidthLimits: &operations.CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesPerClientBandwidthLimits{
                            BandwidthLimits: &operations.CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesPerClientBandwidthLimitsBandwidthLimits{
                                LimitDown: sdk.Int64(978797),
                                LimitUp: sdk.Int64(470017),
                            },
                            Settings: sdk.String("fuga"),
                        },
                        Priority: sdk.String("cumque"),
                    },
                },
            },
            Name: "Dr. Elisa Koelpin",
            Scheduling: &operations.CreateNetworkGroupPolicyRequestBodyScheduling{
                Enabled: sdk.Bool(false),
                Friday: &operations.CreateNetworkGroupPolicyRequestBodySchedulingFriday{
                    Active: sdk.Bool(false),
                    From: sdk.String("deleniti"),
                    To: sdk.String("enim"),
                },
                Monday: &operations.CreateNetworkGroupPolicyRequestBodySchedulingMonday{
                    Active: sdk.Bool(false),
                    From: sdk.String("sit"),
                    To: sdk.String("voluptatem"),
                },
                Saturday: &operations.CreateNetworkGroupPolicyRequestBodySchedulingSaturday{
                    Active: sdk.Bool(false),
                    From: sdk.String("natus"),
                    To: sdk.String("voluptatem"),
                },
                Sunday: &operations.CreateNetworkGroupPolicyRequestBodySchedulingSunday{
                    Active: sdk.Bool(false),
                    From: sdk.String("tempora"),
                    To: sdk.String("occaecati"),
                },
                Thursday: &operations.CreateNetworkGroupPolicyRequestBodySchedulingThursday{
                    Active: sdk.Bool(false),
                    From: sdk.String("quasi"),
                    To: sdk.String("veritatis"),
                },
                Tuesday: &operations.CreateNetworkGroupPolicyRequestBodySchedulingTuesday{
                    Active: sdk.Bool(false),
                    From: sdk.String("ex"),
                    To: sdk.String("doloremque"),
                },
                Wednesday: &operations.CreateNetworkGroupPolicyRequestBodySchedulingWednesday{
                    Active: sdk.Bool(false),
                    From: sdk.String("quas"),
                    To: sdk.String("dolores"),
                },
            },
            SplashAuthSettings: operations.CreateNetworkGroupPolicyRequestBodySplashAuthSettingsEnumBypass.ToPointer(),
            VlanTagging: &operations.CreateNetworkGroupPolicyRequestBodyVlanTagging{
                Settings: operations.CreateNetworkGroupPolicyRequestBodyVlanTaggingSettingsEnumIgnore.ToPointer(),
                VlanID: sdk.String("quas"),
            },
        },
        NetworkID: "blanditiis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateNetworkGroupPolicy201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## CreateNetworkMerakiAuthUser

Authorize a user configured with Meraki Authentication for a network (currently supports 802.1X, splash guest, and client VPN users, and currently, organizations have a 50,000 user cap)

### Example Usage

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
    res, err := s.Configure.CreateNetworkMerakiAuthUser(ctx, operations.CreateNetworkMerakiAuthUserRequest{
        RequestBody: operations.CreateNetworkMerakiAuthUserRequestBody{
            AccountType: operations.CreateNetworkMerakiAuthUserRequestBodyAccountTypeEnumClientVpn.ToPointer(),
            Authorizations: []CreateNetworkMerakiAuthUserRequestBodyAuthorizations{
                operations.CreateNetworkMerakiAuthUserRequestBodyAuthorizations{
                    ExpiresAt: sdk.String("minus"),
                    SsidNumber: sdk.Int64(419669),
                },
                operations.CreateNetworkMerakiAuthUserRequestBodyAuthorizations{
                    ExpiresAt: sdk.String("vel"),
                    SsidNumber: sdk.Int64(107778),
                },
                operations.CreateNetworkMerakiAuthUserRequestBodyAuthorizations{
                    ExpiresAt: sdk.String("quos"),
                    SsidNumber: sdk.Int64(230916),
                },
                operations.CreateNetworkMerakiAuthUserRequestBodyAuthorizations{
                    ExpiresAt: sdk.String("soluta"),
                    SsidNumber: sdk.Int64(945409),
                },
            },
            Email: "Laurianne_Hoeger@hotmail.com",
            EmailPasswordToUser: sdk.Bool(false),
            IsAdmin: sdk.Bool(false),
            Name: sdk.String("Dr. Willis Gutkowski"),
            Password: sdk.String("sunt"),
        },
        NetworkID: "voluptas",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateNetworkMerakiAuthUser201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## CreateNetworkMqttBroker

Add an MQTT broker

### Example Usage

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
    res, err := s.Configure.CreateNetworkMqttBroker(ctx, operations.CreateNetworkMqttBrokerRequest{
        RequestBody: operations.CreateNetworkMqttBrokerRequestBody{
            Authentication: map[string]interface{}{
                "est": "earum",
                "nihil": "nostrum",
                "rerum": "perferendis",
                "nam": "ullam",
            },
            Host: "ratione",
            Name: "Alberta Gleason",
            Port: 235567,
            Security: &operations.CreateNetworkMqttBrokerRequestBodySecurity{
                Mode: sdk.String("reprehenderit"),
                Security: &operations.CreateNetworkMqttBrokerRequestBodySecuritySecurity{
                    CaCertificate: sdk.String("eligendi"),
                    VerifyHostnames: sdk.Bool(false),
                },
            },
        },
        NetworkID: "cum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateNetworkMqttBroker201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## CreateNetworkPiiRequest

Submit a new delete or restrict processing PII request

## ALTERNATE PATH

```
/organizations/{organizationId}/pii/requests
```

### Example Usage

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
    res, err := s.Configure.CreateNetworkPiiRequest(ctx, operations.CreateNetworkPiiRequestRequest{
        RequestBody: &operations.CreateNetworkPiiRequestRequestBody{
            Datasets: []string{
                "culpa",
                "a",
                "magnam",
            },
            Email: sdk.String("Enrico.Cremin53@gmail.com"),
            Mac: sdk.String("numquam"),
            SmDeviceID: sdk.String("explicabo"),
            SmUserID: sdk.String("eligendi"),
            Type: operations.CreateNetworkPiiRequestRequestBodyTypeEnumRestrictProcessing.ToPointer(),
            Username: sdk.String("Mozell_Conn21"),
        },
        NetworkID: "explicabo",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateNetworkPiiRequest201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## CreateNetworkSensorAlertsProfile

Creates a sensor alert profile for a network.

### Example Usage

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
    res, err := s.Configure.CreateNetworkSensorAlertsProfile(ctx, operations.CreateNetworkSensorAlertsProfileRequest{
        RequestBody: operations.CreateNetworkSensorAlertsProfileRequestBody{
            Conditions: []CreateNetworkSensorAlertsProfileRequestBodyConditions{
                operations.CreateNetworkSensorAlertsProfileRequestBodyConditions{
                    Direction: operations.CreateNetworkSensorAlertsProfileRequestBodyConditionsDirectionEnumBelow.ToPointer(),
                    Duration: operations.CreateNetworkSensorAlertsProfileRequestBodyConditionsDurationEnumThreeThousandSixHundred.ToPointer(),
                    Metric: "necessitatibus",
                    Threshold: operations.CreateNetworkSensorAlertsProfileRequestBodyConditionsThreshold{
                        Door: &operations.CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdDoor{
                            Open: false,
                        },
                        Humidity: &operations.CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdHumidity{
                            Quality: operations.CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdHumidityQualityEnumInadequate.ToPointer(),
                            RelativePercentage: sdk.Int64(98123),
                        },
                        IndoorAirQuality: &operations.CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdIndoorAirQuality{
                            Quality: operations.CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdIndoorAirQualityQualityEnumInadequate.ToPointer(),
                            Score: sdk.Int64(530232),
                        },
                        Noise: &operations.CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdNoise{
                            Ambient: operations.CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdNoiseAmbient{
                                Level: sdk.Int64(500692),
                                Quality: operations.CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdNoiseAmbientQualityEnumPoor.ToPointer(),
                            },
                        },
                        Pm25: &operations.CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdPm25{
                            Concentration: sdk.Int64(283557),
                            Quality: operations.CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdPm25QualityEnumGood.ToPointer(),
                        },
                        Temperature: &operations.CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdTemperature{
                            Celsius: sdk.Float32(2861.47),
                            Fahrenheit: sdk.Float32(2810.68),
                            Quality: operations.CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdTemperatureQualityEnumGood.ToPointer(),
                        },
                        Tvoc: &operations.CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdTvoc{
                            Concentration: sdk.Int64(470052),
                            Quality: operations.CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdTvocQualityEnumFair.ToPointer(),
                        },
                        Water: &operations.CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdWater{
                            Present: false,
                        },
                    },
                },
                operations.CreateNetworkSensorAlertsProfileRequestBodyConditions{
                    Direction: operations.CreateNetworkSensorAlertsProfileRequestBodyConditionsDirectionEnumBelow.ToPointer(),
                    Duration: operations.CreateNetworkSensorAlertsProfileRequestBodyConditionsDurationEnumThreeThousandSixHundred.ToPointer(),
                    Metric: "quod",
                    Threshold: operations.CreateNetworkSensorAlertsProfileRequestBodyConditionsThreshold{
                        Door: &operations.CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdDoor{
                            Open: false,
                        },
                        Humidity: &operations.CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdHumidity{
                            Quality: operations.CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdHumidityQualityEnumPoor.ToPointer(),
                            RelativePercentage: sdk.Int64(271185),
                        },
                        IndoorAirQuality: &operations.CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdIndoorAirQuality{
                            Quality: operations.CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdIndoorAirQualityQualityEnumGood.ToPointer(),
                            Score: sdk.Int64(231585),
                        },
                        Noise: &operations.CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdNoise{
                            Ambient: operations.CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdNoiseAmbient{
                                Level: sdk.Int64(367251),
                                Quality: operations.CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdNoiseAmbientQualityEnumFair.ToPointer(),
                            },
                        },
                        Pm25: &operations.CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdPm25{
                            Concentration: sdk.Int64(939079),
                            Quality: operations.CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdPm25QualityEnumGood.ToPointer(),
                        },
                        Temperature: &operations.CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdTemperature{
                            Celsius: sdk.Float32(2223.73),
                            Fahrenheit: sdk.Float32(8079.06),
                            Quality: operations.CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdTemperatureQualityEnumInadequate.ToPointer(),
                        },
                        Tvoc: &operations.CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdTvoc{
                            Concentration: sdk.Int64(152302),
                            Quality: operations.CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdTvocQualityEnumFair.ToPointer(),
                        },
                        Water: &operations.CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdWater{
                            Present: false,
                        },
                    },
                },
                operations.CreateNetworkSensorAlertsProfileRequestBodyConditions{
                    Direction: operations.CreateNetworkSensorAlertsProfileRequestBodyConditionsDirectionEnumBelow.ToPointer(),
                    Duration: operations.CreateNetworkSensorAlertsProfileRequestBodyConditionsDurationEnumSixty.ToPointer(),
                    Metric: "nihil",
                    Threshold: operations.CreateNetworkSensorAlertsProfileRequestBodyConditionsThreshold{
                        Door: &operations.CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdDoor{
                            Open: false,
                        },
                        Humidity: &operations.CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdHumidity{
                            Quality: operations.CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdHumidityQualityEnumInadequate.ToPointer(),
                            RelativePercentage: sdk.Int64(646321),
                        },
                        IndoorAirQuality: &operations.CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdIndoorAirQuality{
                            Quality: operations.CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdIndoorAirQualityQualityEnumInadequate.ToPointer(),
                            Score: sdk.Int64(403485),
                        },
                        Noise: &operations.CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdNoise{
                            Ambient: operations.CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdNoiseAmbient{
                                Level: sdk.Int64(580996),
                                Quality: operations.CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdNoiseAmbientQualityEnumPoor.ToPointer(),
                            },
                        },
                        Pm25: &operations.CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdPm25{
                            Concentration: sdk.Int64(869602),
                            Quality: operations.CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdPm25QualityEnumGood.ToPointer(),
                        },
                        Temperature: &operations.CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdTemperature{
                            Celsius: sdk.Float32(9934.06),
                            Fahrenheit: sdk.Float32(7221.68),
                            Quality: operations.CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdTemperatureQualityEnumPoor.ToPointer(),
                        },
                        Tvoc: &operations.CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdTvoc{
                            Concentration: sdk.Int64(959659),
                            Quality: operations.CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdTvocQualityEnumGood.ToPointer(),
                        },
                        Water: &operations.CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdWater{
                            Present: false,
                        },
                    },
                },
                operations.CreateNetworkSensorAlertsProfileRequestBodyConditions{
                    Direction: operations.CreateNetworkSensorAlertsProfileRequestBodyConditionsDirectionEnumBelow.ToPointer(),
                    Duration: operations.CreateNetworkSensorAlertsProfileRequestBodyConditionsDurationEnumOneThousandEightHundred.ToPointer(),
                    Metric: "culpa",
                    Threshold: operations.CreateNetworkSensorAlertsProfileRequestBodyConditionsThreshold{
                        Door: &operations.CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdDoor{
                            Open: false,
                        },
                        Humidity: &operations.CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdHumidity{
                            Quality: operations.CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdHumidityQualityEnumFair.ToPointer(),
                            RelativePercentage: sdk.Int64(524801),
                        },
                        IndoorAirQuality: &operations.CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdIndoorAirQuality{
                            Quality: operations.CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdIndoorAirQualityQualityEnumInadequate.ToPointer(),
                            Score: sdk.Int64(485950),
                        },
                        Noise: &operations.CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdNoise{
                            Ambient: operations.CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdNoiseAmbient{
                                Level: sdk.Int64(518338),
                                Quality: operations.CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdNoiseAmbientQualityEnumFair.ToPointer(),
                            },
                        },
                        Pm25: &operations.CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdPm25{
                            Concentration: sdk.Int64(178066),
                            Quality: operations.CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdPm25QualityEnumInadequate.ToPointer(),
                        },
                        Temperature: &operations.CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdTemperature{
                            Celsius: sdk.Float32(9729.34),
                            Fahrenheit: sdk.Float32(6061.72),
                            Quality: operations.CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdTemperatureQualityEnumGood.ToPointer(),
                        },
                        Tvoc: &operations.CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdTvoc{
                            Concentration: sdk.Int64(552886),
                            Quality: operations.CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdTvocQualityEnumInadequate.ToPointer(),
                        },
                        Water: &operations.CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdWater{
                            Present: false,
                        },
                    },
                },
            },
            Name: "Meghan Huels",
            Recipients: &operations.CreateNetworkSensorAlertsProfileRequestBodyRecipients{
                Emails: []string{
                    "animi",
                },
                HTTPServerIds: []string{
                    "libero",
                    "ullam",
                    "quaerat",
                    "maiores",
                },
                SmsNumbers: []string{
                    "accusamus",
                    "ipsam",
                    "fugiat",
                },
            },
            Schedule: &operations.CreateNetworkSensorAlertsProfileRequestBodySchedule{
                ID: sdk.String("751c9fe8-f750-42bf-9c34-50841f176445"),
            },
            Serials: []string{
                "amet",
                "voluptate",
            },
        },
        NetworkID: "molestias",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateNetworkSensorAlertsProfile200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## CreateNetworkSmBypassActivationLockAttempt

Bypass activation lock attempt

### Example Usage

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
    res, err := s.Configure.CreateNetworkSmBypassActivationLockAttempt(ctx, operations.CreateNetworkSmBypassActivationLockAttemptRequest{
        RequestBody: operations.CreateNetworkSmBypassActivationLockAttemptRequestBody{
            Ids: []string{
                "ipsum",
                "hic",
                "quidem",
                "odit",
            },
        },
        NetworkID: "molestiae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateNetworkSmBypassActivationLockAttempt201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## CreateNetworkSmTargetGroup

Add a target group

### Example Usage

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
    res, err := s.Configure.CreateNetworkSmTargetGroup(ctx, operations.CreateNetworkSmTargetGroupRequest{
        RequestBody: &operations.CreateNetworkSmTargetGroupRequestBody{
            Name: sdk.String("Eugene Block"),
            Scope: sdk.String("aliquid"),
        },
        NetworkID: "consequuntur",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateNetworkSmTargetGroup201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## CreateNetworkSwitchAccessPolicy

Create an access policy for a switch network. If you would like to enable Meraki Authentication, set radiusServers to empty array.

### Example Usage

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
    res, err := s.Configure.CreateNetworkSwitchAccessPolicy(ctx, operations.CreateNetworkSwitchAccessPolicyRequest{
        RequestBody: operations.CreateNetworkSwitchAccessPolicyRequestBody{
            AccessPolicyType: operations.CreateNetworkSwitchAccessPolicyRequestBodyAccessPolicyTypeEnumHybridAuthentication.ToPointer(),
            Dot1x: &operations.CreateNetworkSwitchAccessPolicyRequestBodyDot1x{
                ControlDirection: operations.CreateNetworkSwitchAccessPolicyRequestBodyDot1xControlDirectionEnumBoth.ToPointer(),
            },
            GuestPortBouncing: sdk.Bool(false),
            GuestVlanID: sdk.Int64(442853),
            HostMode: operations.CreateNetworkSwitchAccessPolicyRequestBodyHostModeEnumMultiHost,
            IncreaseAccessSpeed: sdk.Bool(false),
            Name: "Gina Windler",
            Radius: &operations.CreateNetworkSwitchAccessPolicyRequestBodyRadius{
                CriticalAuth: &operations.CreateNetworkSwitchAccessPolicyRequestBodyRadiusCriticalAuth{
                    DataVlanID: sdk.Int64(718816),
                    SuspendPortBounce: sdk.Bool(false),
                    VoiceVlanID: sdk.Int64(586163),
                },
                FailedAuthVlanID: sdk.Int64(942840),
                ReAuthenticationInterval: sdk.Int64(339221),
            },
            RadiusAccountingEnabled: false,
            RadiusAccountingServers: []CreateNetworkSwitchAccessPolicyRequestBodyRadiusAccountingServers{
                operations.CreateNetworkSwitchAccessPolicyRequestBodyRadiusAccountingServers{
                    Host: "iusto",
                    Port: 802148,
                    Secret: "saepe",
                },
                operations.CreateNetworkSwitchAccessPolicyRequestBodyRadiusAccountingServers{
                    Host: "ad",
                    Port: 167613,
                    Secret: "nostrum",
                },
                operations.CreateNetworkSwitchAccessPolicyRequestBodyRadiusAccountingServers{
                    Host: "minus",
                    Port: 400510,
                    Secret: "quam",
                },
            },
            RadiusCoaSupportEnabled: false,
            RadiusGroupAttribute: sdk.String("ea"),
            RadiusServers: []CreateNetworkSwitchAccessPolicyRequestBodyRadiusServers{
                operations.CreateNetworkSwitchAccessPolicyRequestBodyRadiusServers{
                    Host: "architecto",
                    Port: 686470,
                    Secret: "totam",
                },
                operations.CreateNetworkSwitchAccessPolicyRequestBodyRadiusServers{
                    Host: "velit",
                    Port: 96803,
                    Secret: "sed",
                },
            },
            RadiusTestingEnabled: false,
            URLRedirectWalledGardenEnabled: false,
            URLRedirectWalledGardenRanges: []string{
                "veniam",
                "quae",
                "dolore",
                "in",
            },
            VoiceVlanClients: sdk.Bool(false),
        },
        NetworkID: "libero",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateNetworkSwitchAccessPolicy201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## CreateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServer

Add a server to be trusted by Dynamic ARP Inspection on this network

### Example Usage

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
    res, err := s.Configure.CreateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServer(ctx, operations.CreateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerRequest{
        RequestBody: operations.CreateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerRequestBody{
            Ipv4: operations.CreateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerRequestBodyIpv4{
                Address: sdk.String("71177 Gerhold Creek"),
            },
            Mac: "amet",
            Vlan: 632766,
        },
        NetworkID: "facilis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServer201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## CreateNetworkSwitchLinkAggregation

Create a link aggregation group

### Example Usage

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
    res, err := s.Configure.CreateNetworkSwitchLinkAggregation(ctx, operations.CreateNetworkSwitchLinkAggregationRequest{
        RequestBody: &operations.CreateNetworkSwitchLinkAggregationRequestBody{
            SwitchPorts: []CreateNetworkSwitchLinkAggregationRequestBodySwitchPorts{
                operations.CreateNetworkSwitchLinkAggregationRequestBodySwitchPorts{
                    PortID: "vero",
                    Serial: "impedit",
                },
                operations.CreateNetworkSwitchLinkAggregationRequestBodySwitchPorts{
                    PortID: "omnis",
                    Serial: "et",
                },
                operations.CreateNetworkSwitchLinkAggregationRequestBodySwitchPorts{
                    PortID: "earum",
                    Serial: "fuga",
                },
                operations.CreateNetworkSwitchLinkAggregationRequestBodySwitchPorts{
                    PortID: "est",
                    Serial: "distinctio",
                },
            },
            SwitchProfilePorts: []CreateNetworkSwitchLinkAggregationRequestBodySwitchProfilePorts{
                operations.CreateNetworkSwitchLinkAggregationRequestBodySwitchProfilePorts{
                    PortID: "nulla",
                    Profile: "totam",
                },
                operations.CreateNetworkSwitchLinkAggregationRequestBodySwitchProfilePorts{
                    PortID: "praesentium",
                    Profile: "officiis",
                },
                operations.CreateNetworkSwitchLinkAggregationRequestBodySwitchProfilePorts{
                    PortID: "esse",
                    Profile: "vitae",
                },
                operations.CreateNetworkSwitchLinkAggregationRequestBodySwitchProfilePorts{
                    PortID: "delectus",
                    Profile: "laboriosam",
                },
            },
        },
        NetworkID: "minus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateNetworkSwitchLinkAggregation201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## CreateNetworkSwitchPortSchedule

Add a switch port schedule

### Example Usage

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
    res, err := s.Configure.CreateNetworkSwitchPortSchedule(ctx, operations.CreateNetworkSwitchPortScheduleRequest{
        RequestBody: operations.CreateNetworkSwitchPortScheduleRequestBody{
            Name: "Tracey Cormier",
            PortSchedule: &operations.CreateNetworkSwitchPortScheduleRequestBodyPortSchedule{
                Friday: &operations.CreateNetworkSwitchPortScheduleRequestBodyPortScheduleFriday{
                    Active: sdk.Bool(false),
                    From: sdk.String("quibusdam"),
                    To: sdk.String("reprehenderit"),
                },
                Monday: &operations.CreateNetworkSwitchPortScheduleRequestBodyPortScheduleMonday{
                    Active: sdk.Bool(false),
                    From: sdk.String("voluptate"),
                    To: sdk.String("reprehenderit"),
                },
                Saturday: &operations.CreateNetworkSwitchPortScheduleRequestBodyPortScheduleSaturday{
                    Active: sdk.Bool(false),
                    From: sdk.String("et"),
                    To: sdk.String("eveniet"),
                },
                Sunday: &operations.CreateNetworkSwitchPortScheduleRequestBodyPortScheduleSunday{
                    Active: sdk.Bool(false),
                    From: sdk.String("voluptate"),
                    To: sdk.String("hic"),
                },
                Thursday: &operations.CreateNetworkSwitchPortScheduleRequestBodyPortScheduleThursday{
                    Active: sdk.Bool(false),
                    From: sdk.String("at"),
                    To: sdk.String("perferendis"),
                },
                Tuesday: &operations.CreateNetworkSwitchPortScheduleRequestBodyPortScheduleTuesday{
                    Active: sdk.Bool(false),
                    From: sdk.String("in"),
                    To: sdk.String("eius"),
                },
                Wednesday: &operations.CreateNetworkSwitchPortScheduleRequestBodyPortScheduleWednesday{
                    Active: sdk.Bool(false),
                    From: sdk.String("aut"),
                    To: sdk.String("consequatur"),
                },
            },
        },
        NetworkID: "iste",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateNetworkSwitchPortSchedule201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## CreateNetworkSwitchQosRule

Add a quality of service rule

### Example Usage

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
    res, err := s.Configure.CreateNetworkSwitchQosRule(ctx, operations.CreateNetworkSwitchQosRuleRequest{
        RequestBody: operations.CreateNetworkSwitchQosRuleRequestBody{
            Dscp: sdk.Int64(881413),
            DstPort: sdk.Int64(995830),
            DstPortRange: sdk.String("voluptatum"),
            Protocol: operations.CreateNetworkSwitchQosRuleRequestBodyProtocolEnumUDP.ToPointer(),
            SrcPort: sdk.Int64(161134),
            SrcPortRange: sdk.String("natus"),
            Vlan: 830473,
        },
        NetworkID: "voluptates",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateNetworkSwitchQosRule201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## CreateNetworkSwitchRoutingMulticastRendezvousPoint

Create a multicast rendezvous point

### Example Usage

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
    res, err := s.Configure.CreateNetworkSwitchRoutingMulticastRendezvousPoint(ctx, operations.CreateNetworkSwitchRoutingMulticastRendezvousPointRequest{
        RequestBody: operations.CreateNetworkSwitchRoutingMulticastRendezvousPointRequestBody{
            InterfaceIP: "illo",
            MulticastGroup: "facere",
        },
        NetworkID: "fugiat",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateNetworkSwitchRoutingMulticastRendezvousPoint201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## CreateNetworkSwitchStack

Create a stack

### Example Usage

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
    res, err := s.Configure.CreateNetworkSwitchStack(ctx, operations.CreateNetworkSwitchStackRequest{
        RequestBody: operations.CreateNetworkSwitchStackRequestBody{
            Name: "Margaret McLaughlin",
            Serials: []string{
                "illum",
                "mollitia",
            },
        },
        NetworkID: "ipsa",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateNetworkSwitchStack201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## CreateNetworkSwitchStackRoutingInterface

Create a layer 3 interface for a switch stack

### Example Usage

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
    res, err := s.Configure.CreateNetworkSwitchStackRoutingInterface(ctx, operations.CreateNetworkSwitchStackRoutingInterfaceRequest{
        RequestBody: operations.CreateNetworkSwitchStackRoutingInterfaceRequestBody{
            DefaultGateway: sdk.String("quos"),
            InterfaceIP: sdk.String("quo"),
            Ipv6: &operations.CreateNetworkSwitchStackRoutingInterfaceRequestBodyIpv6{
                Address: sdk.String("4964 Kuhic Mill"),
                AssignmentMode: sdk.String("similique"),
                Gateway: sdk.String("quia"),
                Prefix: sdk.String("architecto"),
            },
            MulticastRouting: operations.CreateNetworkSwitchStackRoutingInterfaceRequestBodyMulticastRoutingEnumDisabled.ToPointer(),
            Name: "Jerry Mann",
            OspfSettings: &operations.CreateNetworkSwitchStackRoutingInterfaceRequestBodyOspfSettings{
                Area: sdk.String("a"),
                Cost: sdk.Int64(922640),
                IsPassiveEnabled: sdk.Bool(false),
            },
            Subnet: sdk.String("minus"),
            VlanID: 642341,
        },
        NetworkID: "laboriosam",
        SwitchStackID: "illo",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateNetworkSwitchStackRoutingInterface201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## CreateNetworkSwitchStackRoutingStaticRoute

Create a layer 3 static route for a switch stack

### Example Usage

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
    res, err := s.Configure.CreateNetworkSwitchStackRoutingStaticRoute(ctx, operations.CreateNetworkSwitchStackRoutingStaticRouteRequest{
        RequestBody: operations.CreateNetworkSwitchStackRoutingStaticRouteRequestBody{
            AdvertiseViaOspfEnabled: sdk.Bool(false),
            Name: sdk.String("Patrick Gutmann"),
            NextHopIP: "dicta",
            PreferOverOspfRoutesEnabled: sdk.Bool(false),
            Subnet: "magnam",
        },
        NetworkID: "doloremque",
        SwitchStackID: "cum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateNetworkSwitchStackRoutingStaticRoute201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## CreateNetworkWebhooksHTTPServer

Add an HTTP server to a network

### Example Usage

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
    res, err := s.Configure.CreateNetworkWebhooksHTTPServer(ctx, operations.CreateNetworkWebhooksHTTPServerRequest{
        RequestBody: operations.CreateNetworkWebhooksHTTPServerRequestBody{
            Name: "Charlotte Wolff",
            PayloadTemplate: &operations.CreateNetworkWebhooksHTTPServerRequestBodyPayloadTemplate{
                Name: sdk.String("Erick Bernhard DVM"),
                PayloadTemplateID: sdk.String("repellat"),
            },
            SharedSecret: sdk.String("voluptatem"),
            URL: "dolor",
        },
        NetworkID: "distinctio",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateNetworkWebhooksHTTPServer201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## CreateNetworkWebhooksPayloadTemplate

Create a webhook payload template for a network

### Example Usage

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
    res, err := s.Configure.CreateNetworkWebhooksPayloadTemplate(ctx, operations.CreateNetworkWebhooksPayloadTemplateRequest{
        RequestBody: operations.CreateNetworkWebhooksPayloadTemplateRequestBody{
            Body: sdk.String("quaerat"),
            BodyFile: sdk.String("a"),
            Headers: []CreateNetworkWebhooksPayloadTemplateRequestBodyHeaders{
                operations.CreateNetworkWebhooksPayloadTemplateRequestBodyHeaders{
                    Name: sdk.String("Patti Funk"),
                    Template: sdk.String("blanditiis"),
                },
            },
            HeadersFile: sdk.String("suscipit"),
            Name: "Tim Hamill",
        },
        NetworkID: "ea",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateNetworkWebhooksPayloadTemplate201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## CreateNetworkWebhooksWebhookTest

Send a test webhook for a network

### Example Usage

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
    res, err := s.Configure.CreateNetworkWebhooksWebhookTest(ctx, operations.CreateNetworkWebhooksWebhookTestRequest{
        RequestBody: operations.CreateNetworkWebhooksWebhookTestRequestBody{
            AlertTypeID: sdk.String("autem"),
            PayloadTemplateID: sdk.String("voluptate"),
            PayloadTemplateName: sdk.String("nesciunt"),
            SharedSecret: sdk.String("magni"),
            URL: "animi",
        },
        NetworkID: "dolorum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateNetworkWebhooksWebhookTest201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## CreateNetworkWirelessRfProfile

Creates new RF profile for this network

### Example Usage

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
    res, err := s.Configure.CreateNetworkWirelessRfProfile(ctx, operations.CreateNetworkWirelessRfProfileRequest{
        RequestBody: operations.CreateNetworkWirelessRfProfileRequestBody{
            ApBandSettings: &operations.CreateNetworkWirelessRfProfileRequestBodyApBandSettings{
                BandOperationMode: operations.CreateNetworkWirelessRfProfileRequestBodyApBandSettingsBandOperationModeEnumFiveghz.ToPointer(),
                BandSteeringEnabled: sdk.Bool(false),
            },
            BandSelectionType: operations.CreateNetworkWirelessRfProfileRequestBodyBandSelectionTypeEnumSsid,
            ClientBalancingEnabled: sdk.Bool(false),
            FiveGhzSettings: &operations.CreateNetworkWirelessRfProfileRequestBodyFiveGhzSettings{
                ChannelWidth: sdk.String("porro"),
                MaxPower: sdk.Int64(734292),
                MinBitrate: sdk.Int64(415395),
                MinPower: sdk.Int64(419585),
                Rxsop: sdk.Int64(508271),
                ValidAutoChannels: []int64{
                    787467,
                },
            },
            MinBitrateType: operations.CreateNetworkWirelessRfProfileRequestBodyMinBitrateTypeEnumSsid.ToPointer(),
            Name: "Shirley Wisoky",
            PerSsidSettings: &operations.CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings{
                Zero: &operations.CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings0{
                    BandOperationMode: operations.CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings0BandOperationModeEnumDual.ToPointer(),
                    BandSteeringEnabled: sdk.Bool(false),
                    MinBitrate: sdk.Float32(8264.31),
                },
                One: &operations.CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings1{
                    BandOperationMode: operations.CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings1BandOperationModeEnumFiveghz.ToPointer(),
                    BandSteeringEnabled: sdk.Bool(false),
                    MinBitrate: sdk.Float32(9539.21),
                },
                Ten: &operations.CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings10{
                    BandOperationMode: operations.CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings10BandOperationModeEnumDual.ToPointer(),
                    BandSteeringEnabled: sdk.Bool(false),
                    MinBitrate: sdk.Float32(3888.51),
                },
                Eleven: &operations.CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings11{
                    BandOperationMode: operations.CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings11BandOperationModeEnumDual.ToPointer(),
                    BandSteeringEnabled: sdk.Bool(false),
                    MinBitrate: sdk.Float32(5800.8),
                },
                Twelve: &operations.CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings12{
                    BandOperationMode: operations.CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings12BandOperationModeEnumTwo4ghz.ToPointer(),
                    BandSteeringEnabled: sdk.Bool(false),
                    MinBitrate: sdk.Float32(6935.92),
                },
                Thirteen: &operations.CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings13{
                    BandOperationMode: operations.CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings13BandOperationModeEnumFiveghz.ToPointer(),
                    BandSteeringEnabled: sdk.Bool(false),
                    MinBitrate: sdk.Float32(6734.59),
                },
                Fourteen: &operations.CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings14{
                    BandOperationMode: operations.CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings14BandOperationModeEnumFiveghz.ToPointer(),
                    BandSteeringEnabled: sdk.Bool(false),
                    MinBitrate: sdk.Float32(9529.37),
                },
                Two: &operations.CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings2{
                    BandOperationMode: operations.CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings2BandOperationModeEnumFiveghz.ToPointer(),
                    BandSteeringEnabled: sdk.Bool(false),
                    MinBitrate: sdk.Float32(2883.48),
                },
                Three: &operations.CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings3{
                    BandOperationMode: operations.CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings3BandOperationModeEnumFiveghz.ToPointer(),
                    BandSteeringEnabled: sdk.Bool(false),
                    MinBitrate: sdk.Float32(2913.61),
                },
                Four: &operations.CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings4{
                    BandOperationMode: operations.CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings4BandOperationModeEnumFiveghz.ToPointer(),
                    BandSteeringEnabled: sdk.Bool(false),
                    MinBitrate: sdk.Float32(9180.05),
                },
                Five: &operations.CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings5{
                    BandOperationMode: operations.CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings5BandOperationModeEnumTwo4ghz.ToPointer(),
                    BandSteeringEnabled: sdk.Bool(false),
                    MinBitrate: sdk.Float32(7993.06),
                },
                Six: &operations.CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings6{
                    BandOperationMode: operations.CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings6BandOperationModeEnumTwo4ghz.ToPointer(),
                    BandSteeringEnabled: sdk.Bool(false),
                    MinBitrate: sdk.Float32(2033.56),
                },
                Seven: &operations.CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings7{
                    BandOperationMode: operations.CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings7BandOperationModeEnumTwo4ghz.ToPointer(),
                    BandSteeringEnabled: sdk.Bool(false),
                    MinBitrate: sdk.Float32(5700.47),
                },
                Eight: &operations.CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings8{
                    BandOperationMode: operations.CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings8BandOperationModeEnumDual.ToPointer(),
                    BandSteeringEnabled: sdk.Bool(false),
                    MinBitrate: sdk.Float32(7457.64),
                },
                Nine: &operations.CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings9{
                    BandOperationMode: operations.CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings9BandOperationModeEnumTwo4ghz.ToPointer(),
                    BandSteeringEnabled: sdk.Bool(false),
                    MinBitrate: sdk.Float32(3530.36),
                },
            },
            Transmission: &operations.CreateNetworkWirelessRfProfileRequestBodyTransmission{
                Enabled: sdk.Bool(false),
            },
            TwoFourGhzSettings: &operations.CreateNetworkWirelessRfProfileRequestBodyTwoFourGhzSettings{
                AxEnabled: sdk.Bool(false),
                MaxPower: sdk.Int64(227185),
                MinBitrate: sdk.Float32(4343.82),
                MinPower: sdk.Int64(842461),
                Rxsop: sdk.Int64(575397),
                ValidAutoChannels: []int64{
                    467109,
                    323478,
                    753043,
                    682756,
                },
            },
        },
        NetworkID: "consequatur",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateNetworkWirelessRfProfile201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## CreateNetworkWirelessSsidIdentityPsk

Create an Identity PSK

### Example Usage

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
    res, err := s.Configure.CreateNetworkWirelessSsidIdentityPsk(ctx, operations.CreateNetworkWirelessSsidIdentityPskRequest{
        RequestBody: operations.CreateNetworkWirelessSsidIdentityPskRequestBody{
            GroupPolicyID: "sit",
            Name: "Lana Hauck",
            Passphrase: sdk.String("sed"),
        },
        NetworkID: "quo",
        Number: "et",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateNetworkWirelessSsidIdentityPsk201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## CreateOrganization

Create a new organization

### Example Usage

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
    res, err := s.Configure.CreateOrganization(ctx, operations.CreateOrganizationRequestBody{
        Management: &operations.CreateOrganizationRequestBodyManagement{
            Details: []CreateOrganizationRequestBodyManagementDetails{
                operations.CreateOrganizationRequestBodyManagementDetails{
                    Name: sdk.String("Eugene Hartmann"),
                    Value: sdk.String("cum"),
                },
            },
        },
        Name: "Rene Cassin",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateOrganization201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## CreateOrganizationActionBatch

Create an action batch

### Example Usage

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
    res, err := s.Configure.CreateOrganizationActionBatch(ctx, operations.CreateOrganizationActionBatchRequest{
        RequestBody: operations.CreateOrganizationActionBatchRequestBody{
            Actions: []CreateOrganizationActionBatchRequestBodyActions{
                operations.CreateOrganizationActionBatchRequestBodyActions{
                    Body: map[string]interface{}{
                        "aspernatur": "molestias",
                        "fuga": "at",
                    },
                    Operation: "unde",
                    Resource: "laborum",
                },
                operations.CreateOrganizationActionBatchRequestBodyActions{
                    Body: map[string]interface{}{
                        "hic": "corrupti",
                        "soluta": "earum",
                        "praesentium": "explicabo",
                    },
                    Operation: "odit",
                    Resource: "illo",
                },
            },
            Confirmed: sdk.Bool(false),
            Synchronous: sdk.Bool(false),
        },
        OrganizationID: "architecto",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateOrganizationActionBatch201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## CreateOrganizationAdaptivePolicyACL

Creates new adaptive policy ACL

### Example Usage

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
    res, err := s.Configure.CreateOrganizationAdaptivePolicyACL(ctx, operations.CreateOrganizationAdaptivePolicyACLRequest{
        RequestBody: operations.CreateOrganizationAdaptivePolicyACLRequestBody{
            Description: sdk.String("quia"),
            IPVersion: operations.CreateOrganizationAdaptivePolicyACLRequestBodyIPVersionEnumAny,
            Name: "Marion Medhurst",
            Rules: []CreateOrganizationAdaptivePolicyACLRequestBodyRules{
                operations.CreateOrganizationAdaptivePolicyACLRequestBodyRules{
                    DstPort: sdk.String("consectetur"),
                    Policy: operations.CreateOrganizationAdaptivePolicyACLRequestBodyRulesPolicyEnumDeny,
                    Protocol: operations.CreateOrganizationAdaptivePolicyACLRequestBodyRulesProtocolEnumIcmp,
                    SrcPort: sdk.String("repellat"),
                },
                operations.CreateOrganizationAdaptivePolicyACLRequestBodyRules{
                    DstPort: sdk.String("iusto"),
                    Policy: operations.CreateOrganizationAdaptivePolicyACLRequestBodyRulesPolicyEnumDeny,
                    Protocol: operations.CreateOrganizationAdaptivePolicyACLRequestBodyRulesProtocolEnumIcmp,
                    SrcPort: sdk.String("cupiditate"),
                },
                operations.CreateOrganizationAdaptivePolicyACLRequestBodyRules{
                    DstPort: sdk.String("maxime"),
                    Policy: operations.CreateOrganizationAdaptivePolicyACLRequestBodyRulesPolicyEnumDeny,
                    Protocol: operations.CreateOrganizationAdaptivePolicyACLRequestBodyRulesProtocolEnumIcmp,
                    SrcPort: sdk.String("sed"),
                },
            },
        },
        OrganizationID: "optio",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateOrganizationAdaptivePolicyACL200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## CreateOrganizationAdaptivePolicyGroup

Creates a new adaptive policy group

### Example Usage

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
    res, err := s.Configure.CreateOrganizationAdaptivePolicyGroup(ctx, operations.CreateOrganizationAdaptivePolicyGroupRequest{
        RequestBody: operations.CreateOrganizationAdaptivePolicyGroupRequestBody{
            Description: sdk.String("nulla"),
            Name: "Pauline Lemke",
            PolicyObjects: []CreateOrganizationAdaptivePolicyGroupRequestBodyPolicyObjects{
                operations.CreateOrganizationAdaptivePolicyGroupRequestBodyPolicyObjects{
                    ID: sdk.String("21729f2a-c41e-4f57-a5f1-169ac1e41d8a"),
                    Name: sdk.String("Rita Rutherford"),
                },
                operations.CreateOrganizationAdaptivePolicyGroupRequestBodyPolicyObjects{
                    ID: sdk.String("e34f2dfa-4a19-47f6-9e92-2151fe171209"),
                    Name: sdk.String("Alfredo Halvorson"),
                },
                operations.CreateOrganizationAdaptivePolicyGroupRequestBodyPolicyObjects{
                    ID: sdk.String("9f543d85-4439-4ee2-a446-0443bc154188"),
                    Name: sdk.String("Lawrence Yundt"),
                },
            },
            Sgt: 881827,
        },
        OrganizationID: "totam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateOrganizationAdaptivePolicyGroup201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## CreateOrganizationAdaptivePolicyPolicy

Add an Adaptive Policy

### Example Usage

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
    res, err := s.Configure.CreateOrganizationAdaptivePolicyPolicy(ctx, operations.CreateOrganizationAdaptivePolicyPolicyRequest{
        RequestBody: operations.CreateOrganizationAdaptivePolicyPolicyRequestBody{
            Acls: []CreateOrganizationAdaptivePolicyPolicyRequestBodyAcls{
                operations.CreateOrganizationAdaptivePolicyPolicyRequestBodyAcls{
                    ID: sdk.String("da7832ea-bd61-47c3-b0d5-1a44bf01bad8"),
                    Name: sdk.String("Patricia Kerluke"),
                },
                operations.CreateOrganizationAdaptivePolicyPolicyRequestBodyAcls{
                    ID: sdk.String("6082bfbd-c41f-4f5d-8e2a-e4fb5cb35d17"),
                    Name: sdk.String("Edith Lubowitz DVM"),
                },
            },
            DestinationGroup: operations.CreateOrganizationAdaptivePolicyPolicyRequestBodyDestinationGroup{
                ID: sdk.String("db78359e-cc5c-4b86-8f8c-d580ba73810e"),
                Name: sdk.String("Kristie Treutel"),
                Sgt: sdk.Int64(301768),
            },
            LastEntryRule: operations.CreateOrganizationAdaptivePolicyPolicyRequestBodyLastEntryRuleEnumDefault.ToPointer(),
            SourceGroup: operations.CreateOrganizationAdaptivePolicyPolicyRequestBodySourceGroup{
                ID: sdk.String("297cd3b1-dd3b-4bce-a47b-7684eff50126"),
                Name: sdk.String("Arnold Bogisich"),
                Sgt: sdk.Int64(949915),
            },
        },
        OrganizationID: "facilis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateOrganizationAdaptivePolicyPolicy201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## CreateOrganizationAdmin

Create a new dashboard administrator

### Example Usage

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
    res, err := s.Configure.CreateOrganizationAdmin(ctx, operations.CreateOrganizationAdminRequest{
        RequestBody: operations.CreateOrganizationAdminRequestBody{
            AuthenticationMethod: operations.CreateOrganizationAdminRequestBodyAuthenticationMethodEnumEmail.ToPointer(),
            Email: "Tomasa.Price@gmail.com",
            Name: "Nelson Hagenes V",
            Networks: []CreateOrganizationAdminRequestBodyNetworks{
                operations.CreateOrganizationAdminRequestBodyNetworks{
                    Access: "dolorem",
                    ID: "b44bd3c4-3159-4d33-a595-3c001139863a",
                },
                operations.CreateOrganizationAdminRequestBodyNetworks{
                    Access: "fuga",
                    ID: "41e6c31c-c2f1-4fcb-91c9-a41ffbe9cbd7",
                },
            },
            OrgAccess: operations.CreateOrganizationAdminRequestBodyOrgAccessEnumNone,
            Tags: []CreateOrganizationAdminRequestBodyTags{
                operations.CreateOrganizationAdminRequestBodyTags{
                    Access: operations.CreateOrganizationAdminRequestBodyTagsAccessEnumReadOnly,
                    Tag: "earum",
                },
                operations.CreateOrganizationAdminRequestBodyTags{
                    Access: operations.CreateOrganizationAdminRequestBodyTagsAccessEnumGuestAmbassador,
                    Tag: "veniam",
                },
            },
        },
        OrganizationID: "debitis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateOrganizationAdmin201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## CreateOrganizationAlertsProfile

Create an organization-wide alert configuration

### Example Usage

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
    res, err := s.Configure.CreateOrganizationAlertsProfile(ctx, operations.CreateOrganizationAlertsProfileRequest{
        RequestBody: operations.CreateOrganizationAlertsProfileRequestBody{
            AlertCondition: operations.CreateOrganizationAlertsProfileRequestBodyAlertCondition{
                BitRateBps: sdk.Int64(41436),
                Duration: sdk.Int64(458274),
                Interface: operations.CreateOrganizationAlertsProfileRequestBodyAlertConditionInterfaceEnumWan1.ToPointer(),
                JitterMs: sdk.Int64(781781),
                LatencyMs: sdk.Int64(790341),
                LossRatio: sdk.Float32(4756),
                Mos: sdk.Float32(6484.69),
                Window: sdk.Int64(697217),
            },
            Description: sdk.String("delectus"),
            NetworkTags: []string{
                "beatae",
                "suscipit",
            },
            Recipients: operations.CreateOrganizationAlertsProfileRequestBodyRecipients{
                Emails: []string{
                    "mollitia",
                    "ipsam",
                    "porro",
                    "molestiae",
                },
                HTTPServerIds: []string{
                    "vel",
                },
            },
            Type: operations.CreateOrganizationAlertsProfileRequestBodyTypeEnumVoipMos,
        },
        OrganizationID: "dicta",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateOrganizationAlertsProfile201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## CreateOrganizationBrandingPolicy

Add a new branding policy to an organization

### Example Usage

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
    res, err := s.Configure.CreateOrganizationBrandingPolicy(ctx, operations.CreateOrganizationBrandingPolicyRequest{
        RequestBody: &operations.CreateOrganizationBrandingPolicyRequestBody{
            AdminSettings: &operations.CreateOrganizationBrandingPolicyRequestBodyAdminSettings{
                AppliesTo: operations.CreateOrganizationBrandingPolicyRequestBodyAdminSettingsAppliesToEnumAllEnterpriseAdmins.ToPointer(),
                Values: []string{
                    "dolore",
                },
            },
            CustomLogo: &operations.CreateOrganizationBrandingPolicyRequestBodyCustomLogo{
                Enabled: sdk.Bool(false),
                Image: &operations.CreateOrganizationBrandingPolicyRequestBodyCustomLogoImage{
                    Contents: sdk.String("soluta"),
                    Format: operations.CreateOrganizationBrandingPolicyRequestBodyCustomLogoImageFormatEnumJpg.ToPointer(),
                },
            },
            Enabled: sdk.Bool(false),
            HelpSettings: &operations.CreateOrganizationBrandingPolicyRequestBodyHelpSettings{
                APIDocsSubtab: operations.CreateOrganizationBrandingPolicyRequestBodyHelpSettingsAPIDocsSubtabEnumDefaultOrInherit.ToPointer(),
                CasesSubtab: operations.CreateOrganizationBrandingPolicyRequestBodyHelpSettingsCasesSubtabEnumShow.ToPointer(),
                CiscoMerakiProductDocumentation: sdk.String("aspernatur"),
                CommunitySubtab: operations.CreateOrganizationBrandingPolicyRequestBodyHelpSettingsCommunitySubtabEnumShow.ToPointer(),
                DataProtectionRequestsSubtab: operations.CreateOrganizationBrandingPolicyRequestBodyHelpSettingsDataProtectionRequestsSubtabEnumDefaultOrInherit.ToPointer(),
                FirewallInfoSubtab: operations.CreateOrganizationBrandingPolicyRequestBodyHelpSettingsFirewallInfoSubtabEnumHide.ToPointer(),
                GetHelpSubtab: operations.CreateOrganizationBrandingPolicyRequestBodyHelpSettingsGetHelpSubtabEnumShow.ToPointer(),
                GetHelpSubtabKnowledgeBaseSearch: sdk.String("ab"),
                HardwareReplacementsSubtab: operations.CreateOrganizationBrandingPolicyRequestBodyHelpSettingsHardwareReplacementsSubtabEnumHide.ToPointer(),
                HelpTab: operations.CreateOrganizationBrandingPolicyRequestBodyHelpSettingsHelpTabEnumShow.ToPointer(),
                HelpWidget: operations.CreateOrganizationBrandingPolicyRequestBodyHelpSettingsHelpWidgetEnumDefaultOrInherit.ToPointer(),
                NewFeaturesSubtab: operations.CreateOrganizationBrandingPolicyRequestBodyHelpSettingsNewFeaturesSubtabEnumShow.ToPointer(),
                SmForums: operations.CreateOrganizationBrandingPolicyRequestBodyHelpSettingsSmForumsEnumShow.ToPointer(),
                SupportContactInfo: sdk.String("explicabo"),
                UniversalSearchKnowledgeBaseSearch: operations.CreateOrganizationBrandingPolicyRequestBodyHelpSettingsUniversalSearchKnowledgeBaseSearchEnumShow.ToPointer(),
            },
            Name: sdk.String("Merle Cormier Jr."),
        },
        OrganizationID: "nemo",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateOrganizationBrandingPolicy201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## CreateOrganizationCameraCustomAnalyticsArtifact

Create custom analytics artifact. Returns an artifact upload URL with expiry time. Upload the artifact file with a put request to the returned upload URL before its expiry.

### Example Usage

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
    res, err := s.Configure.CreateOrganizationCameraCustomAnalyticsArtifact(ctx, operations.CreateOrganizationCameraCustomAnalyticsArtifactRequest{
        RequestBody: &operations.CreateOrganizationCameraCustomAnalyticsArtifactRequestBody{
            Name: sdk.String("Francis Gerhold"),
        },
        OrganizationID: "amet",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateOrganizationCameraCustomAnalyticsArtifact201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## CreateOrganizationConfigTemplate

Create a new configuration template

### Example Usage

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
    res, err := s.Configure.CreateOrganizationConfigTemplate(ctx, operations.CreateOrganizationConfigTemplateRequest{
        RequestBody: operations.CreateOrganizationConfigTemplateRequestBody{
            CopyFromNetworkID: sdk.String("enim"),
            Name: "Aaron Fisher",
            TimeZone: sdk.String("ducimus"),
        },
        OrganizationID: "dolores",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateOrganizationConfigTemplate201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## CreateOrganizationEarlyAccessFeaturesOptIn

Create a new early access feature opt-in for an organization

### Example Usage

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
    res, err := s.Configure.CreateOrganizationEarlyAccessFeaturesOptIn(ctx, operations.CreateOrganizationEarlyAccessFeaturesOptInRequest{
        RequestBody: operations.CreateOrganizationEarlyAccessFeaturesOptInRequestBody{
            LimitScopeToNetworks: []string{
                "occaecati",
                "doloremque",
                "blanditiis",
                "magnam",
            },
            ShortName: "excepturi",
        },
        OrganizationID: "fugiat",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateOrganizationEarlyAccessFeaturesOptIn200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## CreateOrganizationInsightMonitoredMediaServer

Add a media server to be monitored for this organization. Only valid for organizations with Meraki Insight.

### Example Usage

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
    res, err := s.Configure.CreateOrganizationInsightMonitoredMediaServer(ctx, operations.CreateOrganizationInsightMonitoredMediaServerRequest{
        RequestBody: operations.CreateOrganizationInsightMonitoredMediaServerRequestBody{
            Address: "6983 Upton Rue",
            BestEffortMonitoringEnabled: sdk.Bool(false),
            Name: "Julio Hilll",
        },
        OrganizationID: "placeat",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateOrganizationInsightMonitoredMediaServer201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## CreateOrganizationInventoryOnboardingCloudMonitoringExportEvent

Imports event logs related to the onboarding app into elastisearch

### Example Usage

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
    res, err := s.Configure.CreateOrganizationInventoryOnboardingCloudMonitoringExportEvent(ctx, operations.CreateOrganizationInventoryOnboardingCloudMonitoringExportEventRequest{
        RequestBody: operations.CreateOrganizationInventoryOnboardingCloudMonitoringExportEventRequestBody{
            LogEvent: "at",
            Request: sdk.String("excepturi"),
            TargetOS: sdk.String("eos"),
            Timestamp: 139505,
        },
        OrganizationID: "quia",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateOrganizationInventoryOnboardingCloudMonitoringExportEvent202ApplicationJSONObject != nil {
        // handle response
    }
}
```

## CreateOrganizationInventoryOnboardingCloudMonitoringImport

Commits the import operation to complete the onboarding of a device into Dashboard for monitoring.

### Example Usage

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
    res, err := s.Configure.CreateOrganizationInventoryOnboardingCloudMonitoringImport(ctx, operations.CreateOrganizationInventoryOnboardingCloudMonitoringImportRequest{
        RequestBody: operations.CreateOrganizationInventoryOnboardingCloudMonitoringImportRequestBody{
            Devices: []CreateOrganizationInventoryOnboardingCloudMonitoringImportRequestBodyDevices{
                operations.CreateOrganizationInventoryOnboardingCloudMonitoringImportRequestBodyDevices{
                    DeviceID: "excepturi",
                    NetworkID: "sapiente",
                    Udi: "maiores",
                },
                operations.CreateOrganizationInventoryOnboardingCloudMonitoringImportRequestBodyDevices{
                    DeviceID: "exercitationem",
                    NetworkID: "ducimus",
                    Udi: "dolore",
                },
                operations.CreateOrganizationInventoryOnboardingCloudMonitoringImportRequestBodyDevices{
                    DeviceID: "iste",
                    NetworkID: "inventore",
                    Udi: "error",
                },
                operations.CreateOrganizationInventoryOnboardingCloudMonitoringImportRequestBodyDevices{
                    DeviceID: "id",
                    NetworkID: "harum",
                    Udi: "sapiente",
                },
            },
        },
        OrganizationID: "laborum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateOrganizationInventoryOnboardingCloudMonitoringImport201ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## CreateOrganizationInventoryOnboardingCloudMonitoringPrepare

Initiates or updates an import session. An import ID will be generated and used when you are ready to commit the import.

### Example Usage

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
    res, err := s.Configure.CreateOrganizationInventoryOnboardingCloudMonitoringPrepare(ctx, operations.CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequest{
        RequestBody: operations.CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBody{
            Devices: []CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevices{
                operations.CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevices{
                    Sudi: "vero",
                    Tunnel: &operations.CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesTunnel{
                        CertificateName: sdk.String("odio"),
                        LocalInterface: sdk.Int64(432996),
                        LoopbackNumber: sdk.Int64(98238),
                        Name: sdk.String("Steven Satterfield"),
                    },
                    User: &operations.CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesUser{
                        Username: sdk.String("Sandy.Green"),
                    },
                    Vty: &operations.CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesVty{
                        AccessList: &operations.CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesVtyAccessList{
                            VtyIn: &operations.CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesVtyAccessListVtyIn{
                                Name: sdk.String("Mrs. Dominick Carroll PhD"),
                            },
                            VtyOut: &operations.CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesVtyAccessListVtyOut{
                                Name: sdk.String("Irma Metz"),
                            },
                        },
                        Authentication: &operations.CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesVtyAuthentication{
                            Group: &operations.CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesVtyAuthenticationGroup{
                                Name: sdk.String("Mr. Bethany Champlin PhD"),
                            },
                        },
                        Authorization: &operations.CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesVtyAuthorization{
                            Group: &operations.CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesVtyAuthorizationGroup{
                                Name: sdk.String("Nicole Schinner"),
                            },
                        },
                        EndLineNumber: sdk.Int64(351035),
                        RotaryNumber: sdk.Int64(798934),
                        StartLineNumber: sdk.Int64(800598),
                    },
                },
            },
        },
        OrganizationID: "alias",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateOrganizationInventoryOnboardingCloudMonitoringPrepare201ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## CreateOrganizationNetwork

Create a network

### Example Usage

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
    res, err := s.Configure.CreateOrganizationNetwork(ctx, operations.CreateOrganizationNetworkRequest{
        RequestBody: operations.CreateOrganizationNetworkRequestBody{
            CopyFromNetworkID: sdk.String("nemo"),
            Name: "Ms. Edwin Murphy",
            Notes: sdk.String("possimus"),
            ProductTypes: []CreateOrganizationNetworkRequestBodyProductTypesEnum{
                operations.CreateOrganizationNetworkRequestBodyProductTypesEnumCellularGateway,
                operations.CreateOrganizationNetworkRequestBodyProductTypesEnumSystemsManager,
            },
            Tags: []string{
                "voluptate",
                "vitae",
                "reiciendis",
            },
            TimeZone: sdk.String("cumque"),
        },
        OrganizationID: "atque",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateOrganizationNetwork201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## CreateOrganizationPolicyObject

Creates a new Policy Object.

### Example Usage

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
    res, err := s.Configure.CreateOrganizationPolicyObject(ctx, operations.CreateOrganizationPolicyObjectRequest{
        RequestBody: operations.CreateOrganizationPolicyObjectRequestBody{
            Category: "explicabo",
            Cidr: sdk.String("sit"),
            Fqdn: sdk.String("eligendi"),
            GroupIds: []int64{
                317166,
                688899,
            },
            IP: sdk.String("aut"),
            Mask: sdk.String("consectetur"),
            Name: "Luz Rau",
            Type: "sit",
        },
        OrganizationID: "optio",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateOrganizationPolicyObject201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## CreateOrganizationPolicyObjectsGroup

Creates a new Policy Object Group.

### Example Usage

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
    res, err := s.Configure.CreateOrganizationPolicyObjectsGroup(ctx, operations.CreateOrganizationPolicyObjectsGroupRequest{
        RequestBody: operations.CreateOrganizationPolicyObjectsGroupRequestBody{
            Category: sdk.String("impedit"),
            Name: "Ms. Daryl Hermiston",
            ObjectIds: []int64{
                287293,
                862379,
                879682,
                9687,
            },
        },
        OrganizationID: "ut",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateOrganizationPolicyObjectsGroup201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## CreateOrganizationSamlIdp

Create a SAML IdP for your organization.

### Example Usage

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
    res, err := s.Configure.CreateOrganizationSamlIdp(ctx, operations.CreateOrganizationSamlIdpRequest{
        RequestBody: operations.CreateOrganizationSamlIdpRequestBody{
            SloLogoutURL: sdk.String("laborum"),
            X509certSha1Fingerprint: "hic",
        },
        OrganizationID: "sed",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateOrganizationSamlIdp201ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## CreateOrganizationSamlRole

Create a SAML role

### Example Usage

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
    res, err := s.Configure.CreateOrganizationSamlRole(ctx, operations.CreateOrganizationSamlRoleRequest{
        RequestBody: operations.CreateOrganizationSamlRoleRequestBody{
            Networks: []CreateOrganizationSamlRoleRequestBodyNetworks{
                operations.CreateOrganizationSamlRoleRequestBodyNetworks{
                    Access: operations.CreateOrganizationSamlRoleRequestBodyNetworksAccessEnumSsidAdmin,
                    ID: "5dddb46a-a1cf-4d6d-828d-a01319112964",
                },
                operations.CreateOrganizationSamlRoleRequestBodyNetworks{
                    Access: operations.CreateOrganizationSamlRoleRequestBodyNetworksAccessEnumGuestAmbassador,
                    ID: "645c1d81-f290-442f-969b-7aff0ea2216c",
                },
                operations.CreateOrganizationSamlRoleRequestBodyNetworks{
                    Access: operations.CreateOrganizationSamlRoleRequestBodyNetworksAccessEnumReadOnly,
                    ID: "e071bc16-3e27-49a3-b084-da99257d04f4",
                },
            },
            OrgAccess: operations.CreateOrganizationSamlRoleRequestBodyOrgAccessEnumEnterprise,
            Role: "quas",
            Tags: []CreateOrganizationSamlRoleRequestBodyTags{
                operations.CreateOrganizationSamlRoleRequestBodyTags{
                    Access: operations.CreateOrganizationSamlRoleRequestBodyTagsAccessEnumGuestAmbassador,
                    Tag: "laborum",
                },
                operations.CreateOrganizationSamlRoleRequestBodyTags{
                    Access: operations.CreateOrganizationSamlRoleRequestBodyTagsAccessEnumGuestAmbassador,
                    Tag: "numquam",
                },
            },
        },
        OrganizationID: "quia",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateOrganizationSamlRole201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## DeferNetworkFirmwareUpgradesStagedEvents

Postpone by 1 week all pending staged upgrade stages for a network

### Example Usage

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
    res, err := s.Configure.DeferNetworkFirmwareUpgradesStagedEvents(ctx, operations.DeferNetworkFirmwareUpgradesStagedEventsRequest{
        NetworkID: "repellendus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeferNetworkFirmwareUpgradesStagedEvents200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## DeleteDeviceSwitchRoutingInterface

Delete a layer 3 interface from the switch

### Example Usage

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
    res, err := s.Configure.DeleteDeviceSwitchRoutingInterface(ctx, operations.DeleteDeviceSwitchRoutingInterfaceRequest{
        InterfaceID: "blanditiis",
        Serial: "ut",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteDeviceSwitchRoutingStaticRoute

Delete a layer 3 static route for a switch

### Example Usage

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
    res, err := s.Configure.DeleteDeviceSwitchRoutingStaticRoute(ctx, operations.DeleteDeviceSwitchRoutingStaticRouteRequest{
        Serial: "eius",
        StaticRouteID: "cupiditate",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteNetwork

Delete a network

### Example Usage

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
    res, err := s.Configure.DeleteNetwork(ctx, operations.DeleteNetworkRequest{
        NetworkID: "nisi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteNetworkAppliancePrefixesDelegatedStatic

Delete a static delegated prefix from a network

### Example Usage

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
    res, err := s.Configure.DeleteNetworkAppliancePrefixesDelegatedStatic(ctx, operations.DeleteNetworkAppliancePrefixesDelegatedStaticRequest{
        NetworkID: "placeat",
        StaticDelegatedPrefixID: "tempore",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteNetworkApplianceStaticRoute

Delete a static route from an MX or teleworker network

### Example Usage

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
    res, err := s.Configure.DeleteNetworkApplianceStaticRoute(ctx, operations.DeleteNetworkApplianceStaticRouteRequest{
        NetworkID: "facere",
        StaticRouteID: "earum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteNetworkApplianceTrafficShapingCustomPerformanceClass

Delete a custom performance class from an MX network

### Example Usage

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
    res, err := s.Configure.DeleteNetworkApplianceTrafficShapingCustomPerformanceClass(ctx, operations.DeleteNetworkApplianceTrafficShapingCustomPerformanceClassRequest{
        CustomPerformanceClassID: "debitis",
        NetworkID: "impedit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteNetworkApplianceVlan

Delete a VLAN from a network

### Example Usage

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
    res, err := s.Configure.DeleteNetworkApplianceVlan(ctx, operations.DeleteNetworkApplianceVlanRequest{
        NetworkID: "reiciendis",
        VlanID: "ex",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteNetworkCameraQualityRetentionProfile

Delete an existing quality retention profile for this network.

### Example Usage

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
    res, err := s.Configure.DeleteNetworkCameraQualityRetentionProfile(ctx, operations.DeleteNetworkCameraQualityRetentionProfileRequest{
        NetworkID: "tempore",
        QualityRetentionProfileID: "provident",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteNetworkCameraWirelessProfile

Delete an existing camera wireless profile for this network.

### Example Usage

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
    res, err := s.Configure.DeleteNetworkCameraWirelessProfile(ctx, operations.DeleteNetworkCameraWirelessProfileRequest{
        NetworkID: "provident",
        WirelessProfileID: "soluta",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteNetworkFirmwareUpgradesStagedGroup

Delete a Staged Upgrade Group

### Example Usage

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
    res, err := s.Configure.DeleteNetworkFirmwareUpgradesStagedGroup(ctx, operations.DeleteNetworkFirmwareUpgradesStagedGroupRequest{
        GroupID: "maxime",
        NetworkID: "commodi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteNetworkFloorPlan

Destroy a floor plan

### Example Usage

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
    res, err := s.Configure.DeleteNetworkFloorPlan(ctx, operations.DeleteNetworkFloorPlanRequest{
        FloorPlanID: "consectetur",
        NetworkID: "corporis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteNetworkGroupPolicy

Delete a group policy

### Example Usage

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
    res, err := s.Configure.DeleteNetworkGroupPolicy(ctx, operations.DeleteNetworkGroupPolicyRequest{
        GroupPolicyID: "nisi",
        NetworkID: "aspernatur",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteNetworkMerakiAuthUser

Deauthorize a user. To reauthorize a user after deauthorizing them, POST to this endpoint. (Currently, 802.1X RADIUS, splash guest, and client VPN users can be deauthorized.)

### Example Usage

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
    res, err := s.Configure.DeleteNetworkMerakiAuthUser(ctx, operations.DeleteNetworkMerakiAuthUserRequest{
        MerakiAuthUserID: "eveniet",
        NetworkID: "tempore",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteNetworkMqttBroker

Delete an MQTT broker

### Example Usage

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
    res, err := s.Configure.DeleteNetworkMqttBroker(ctx, operations.DeleteNetworkMqttBrokerRequest{
        MqttBrokerID: "asperiores",
        NetworkID: "temporibus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteNetworkPiiRequest

Delete a restrict processing PII request

## ALTERNATE PATH

```
/organizations/{organizationId}/pii/requests/{requestId}
```

### Example Usage

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
    res, err := s.Configure.DeleteNetworkPiiRequest(ctx, operations.DeleteNetworkPiiRequestRequest{
        NetworkID: "delectus",
        RequestID: "enim",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteNetworkSensorAlertsProfile

Deletes a sensor alert profile from a network.

### Example Usage

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
    res, err := s.Configure.DeleteNetworkSensorAlertsProfile(ctx, operations.DeleteNetworkSensorAlertsProfileRequest{
        ID: "5c294c06-0b06-4a12-8776-4eef6d0c6d6e",
        NetworkID: "nulla",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteNetworkSmTargetGroup

Delete a target group from a network

### Example Usage

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
    res, err := s.Configure.DeleteNetworkSmTargetGroup(ctx, operations.DeleteNetworkSmTargetGroupRequest{
        NetworkID: "excepturi",
        TargetGroupID: "quod",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteNetworkSmUserAccessDevice

Delete a User Access Device

### Example Usage

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
    res, err := s.Configure.DeleteNetworkSmUserAccessDevice(ctx, operations.DeleteNetworkSmUserAccessDeviceRequest{
        NetworkID: "in",
        UserAccessDeviceID: "nesciunt",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteNetworkSwitchAccessPolicy

Delete an access policy for a switch network

### Example Usage

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
    res, err := s.Configure.DeleteNetworkSwitchAccessPolicy(ctx, operations.DeleteNetworkSwitchAccessPolicyRequest{
        AccessPolicyNumber: "temporibus",
        NetworkID: "temporibus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteNetworkSwitchDhcpServerPolicyArpInspectionTrustedServer

Remove a server from being trusted by Dynamic ARP Inspection on this network

### Example Usage

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
    res, err := s.Configure.DeleteNetworkSwitchDhcpServerPolicyArpInspectionTrustedServer(ctx, operations.DeleteNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerRequest{
        NetworkID: "eum",
        TrustedServerID: "non",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteNetworkSwitchLinkAggregation

Split a link aggregation group into separate ports

### Example Usage

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
    res, err := s.Configure.DeleteNetworkSwitchLinkAggregation(ctx, operations.DeleteNetworkSwitchLinkAggregationRequest{
        LinkAggregationID: "ut",
        NetworkID: "nostrum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteNetworkSwitchPortSchedule

Delete a switch port schedule

### Example Usage

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
    res, err := s.Configure.DeleteNetworkSwitchPortSchedule(ctx, operations.DeleteNetworkSwitchPortScheduleRequest{
        NetworkID: "dignissimos",
        PortScheduleID: "illo",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteNetworkSwitchQosRule

Delete a quality of service rule

### Example Usage

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
    res, err := s.Configure.DeleteNetworkSwitchQosRule(ctx, operations.DeleteNetworkSwitchQosRuleRequest{
        NetworkID: "corporis",
        QosRuleID: "ipsa",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteNetworkSwitchRoutingMulticastRendezvousPoint

Delete a multicast rendezvous point

### Example Usage

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
    res, err := s.Configure.DeleteNetworkSwitchRoutingMulticastRendezvousPoint(ctx, operations.DeleteNetworkSwitchRoutingMulticastRendezvousPointRequest{
        NetworkID: "occaecati",
        RendezvousPointID: "dolorum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteNetworkSwitchStack

Delete a stack

### Example Usage

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
    res, err := s.Configure.DeleteNetworkSwitchStack(ctx, operations.DeleteNetworkSwitchStackRequest{
        NetworkID: "blanditiis",
        SwitchStackID: "recusandae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteNetworkSwitchStackRoutingInterface

Delete a layer 3 interface from a switch stack

### Example Usage

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
    res, err := s.Configure.DeleteNetworkSwitchStackRoutingInterface(ctx, operations.DeleteNetworkSwitchStackRoutingInterfaceRequest{
        InterfaceID: "deleniti",
        NetworkID: "dignissimos",
        SwitchStackID: "doloremque",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteNetworkSwitchStackRoutingStaticRoute

Delete a layer 3 static route for a switch stack

### Example Usage

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
    res, err := s.Configure.DeleteNetworkSwitchStackRoutingStaticRoute(ctx, operations.DeleteNetworkSwitchStackRoutingStaticRouteRequest{
        NetworkID: "quibusdam",
        StaticRouteID: "adipisci",
        SwitchStackID: "minus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteNetworkWebhooksHTTPServer

Delete an HTTP server from a network

### Example Usage

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
    res, err := s.Configure.DeleteNetworkWebhooksHTTPServer(ctx, operations.DeleteNetworkWebhooksHTTPServerRequest{
        HTTPServerID: "veniam",
        NetworkID: "id",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteNetworkWebhooksPayloadTemplate

Destroy a webhook payload template for a network. Does not work for included templates ('wpt_00001', 'wpt_00002', 'wpt_00003', 'wpt_00004', 'wpt_00005' or 'wpt_00006')

### Example Usage

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
    res, err := s.Configure.DeleteNetworkWebhooksPayloadTemplate(ctx, operations.DeleteNetworkWebhooksPayloadTemplateRequest{
        NetworkID: "architecto",
        PayloadTemplateID: "maiores",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteNetworkWirelessRfProfile

Delete a RF Profile

### Example Usage

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
    res, err := s.Configure.DeleteNetworkWirelessRfProfile(ctx, operations.DeleteNetworkWirelessRfProfileRequest{
        NetworkID: "perspiciatis",
        RfProfileID: "quod",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteNetworkWirelessSsidIdentityPsk

Delete an Identity PSK

### Example Usage

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
    res, err := s.Configure.DeleteNetworkWirelessSsidIdentityPsk(ctx, operations.DeleteNetworkWirelessSsidIdentityPskRequest{
        IdentityPskID: "magni",
        NetworkID: "incidunt",
        Number: "fugit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteOrganization

Delete an organization

### Example Usage

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
    res, err := s.Configure.DeleteOrganization(ctx, operations.DeleteOrganizationRequest{
        OrganizationID: "quisquam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteOrganizationActionBatch

Delete an action batch

### Example Usage

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
    res, err := s.Configure.DeleteOrganizationActionBatch(ctx, operations.DeleteOrganizationActionBatchRequest{
        ActionBatchID: "odio",
        OrganizationID: "quidem",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteOrganizationAdaptivePolicyACL

Deletes the specified adaptive policy ACL. Note this adaptive policy ACL will also be removed from policies using it.

### Example Usage

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
    res, err := s.Configure.DeleteOrganizationAdaptivePolicyACL(ctx, operations.DeleteOrganizationAdaptivePolicyACLRequest{
        ACLID: "iure",
        OrganizationID: "aliquid",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteOrganizationAdaptivePolicyGroup

Deletes the specified adaptive policy group and any associated policies and references

### Example Usage

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
    res, err := s.Configure.DeleteOrganizationAdaptivePolicyGroup(ctx, operations.DeleteOrganizationAdaptivePolicyGroupRequest{
        ID: "a1f30c73-df5b-4671-9890-f42a4bb438d8",
        OrganizationID: "exercitationem",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteOrganizationAdaptivePolicyPolicy

Delete an Adaptive Policy

### Example Usage

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
    res, err := s.Configure.DeleteOrganizationAdaptivePolicyPolicy(ctx, operations.DeleteOrganizationAdaptivePolicyPolicyRequest{
        ID: "b260591d-745e-43c2-859c-9c3f567e0e25",
        OrganizationID: "consequuntur",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteOrganizationAdmin

Revoke all access for a dashboard administrator within this organization

### Example Usage

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
    res, err := s.Configure.DeleteOrganizationAdmin(ctx, operations.DeleteOrganizationAdminRequest{
        AdminID: "odio",
        OrganizationID: "suscipit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteOrganizationAlertsProfile

Removes an organization-wide alert config

### Example Usage

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
    res, err := s.Configure.DeleteOrganizationAlertsProfile(ctx, operations.DeleteOrganizationAlertsProfileRequest{
        AlertConfigID: "quis",
        OrganizationID: "nobis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteOrganizationBrandingPolicy

Delete a branding policy

### Example Usage

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
    res, err := s.Configure.DeleteOrganizationBrandingPolicy(ctx, operations.DeleteOrganizationBrandingPolicyRequest{
        BrandingPolicyID: "beatae",
        OrganizationID: "repellendus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteOrganizationCameraCustomAnalyticsArtifact

Delete Custom Analytics Artifact

### Example Usage

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
    res, err := s.Configure.DeleteOrganizationCameraCustomAnalyticsArtifact(ctx, operations.DeleteOrganizationCameraCustomAnalyticsArtifactRequest{
        ArtifactID: "ex",
        OrganizationID: "consequuntur",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteOrganizationConfigTemplate

Remove a configuration template

### Example Usage

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
    res, err := s.Configure.DeleteOrganizationConfigTemplate(ctx, operations.DeleteOrganizationConfigTemplateRequest{
        ConfigTemplateID: "delectus",
        OrganizationID: "nobis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteOrganizationEarlyAccessFeaturesOptIn

Delete an early access feature opt-in

### Example Usage

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
    res, err := s.Configure.DeleteOrganizationEarlyAccessFeaturesOptIn(ctx, operations.DeleteOrganizationEarlyAccessFeaturesOptInRequest{
        OptInID: "possimus",
        OrganizationID: "laborum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteOrganizationInsightMonitoredMediaServer

Delete a monitored media server from this organization. Only valid for organizations with Meraki Insight.

### Example Usage

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
    res, err := s.Configure.DeleteOrganizationInsightMonitoredMediaServer(ctx, operations.DeleteOrganizationInsightMonitoredMediaServerRequest{
        MonitoredMediaServerID: "optio",
        OrganizationID: "debitis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteOrganizationPolicyObject

Deletes a Policy Object.

### Example Usage

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
    res, err := s.Configure.DeleteOrganizationPolicyObject(ctx, operations.DeleteOrganizationPolicyObjectRequest{
        OrganizationID: "architecto",
        PolicyObjectID: "reiciendis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteOrganizationPolicyObjectsGroup

Deletes a Policy Object Group.

### Example Usage

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
    res, err := s.Configure.DeleteOrganizationPolicyObjectsGroup(ctx, operations.DeleteOrganizationPolicyObjectsGroupRequest{
        OrganizationID: "consequatur",
        PolicyObjectGroupID: "sunt",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteOrganizationSamlIdp

Remove a SAML IdP in your organization.

### Example Usage

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
    res, err := s.Configure.DeleteOrganizationSamlIdp(ctx, operations.DeleteOrganizationSamlIdpRequest{
        IdpID: "odit",
        OrganizationID: "inventore",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteOrganizationSamlRole

Remove a SAML role

### Example Usage

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
    res, err := s.Configure.DeleteOrganizationSamlRole(ctx, operations.DeleteOrganizationSamlRoleRequest{
        OrganizationID: "laboriosam",
        SamlRoleID: "quod",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteOrganizationUser

Delete a user and all of its authentication methods.

### Example Usage

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
    res, err := s.Configure.DeleteOrganizationUser(ctx, operations.DeleteOrganizationUserRequest{
        OrganizationID: "repudiandae",
        UserID: "consequuntur",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetDevice

Return a single device

### Example Usage

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
    res, err := s.Configure.GetDevice(ctx, operations.GetDeviceRequest{
        Serial: "aspernatur",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDevice200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetDeviceApplianceUplinksSettings

Return the uplink settings for an MX appliance

### Example Usage

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
    res, err := s.Configure.GetDeviceApplianceUplinksSettings(ctx, operations.GetDeviceApplianceUplinksSettingsRequest{
        Serial: "sequi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDeviceApplianceUplinksSettings200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetDeviceCameraCustomAnalytics

Return custom analytics settings for a camera

### Example Usage

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
    res, err := s.Configure.GetDeviceCameraCustomAnalytics(ctx, operations.GetDeviceCameraCustomAnalyticsRequest{
        Serial: "sint",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDeviceCameraCustomAnalytics200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetDeviceCameraQualityAndRetention

Returns quality and retention settings for the given camera

### Example Usage

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
    res, err := s.Configure.GetDeviceCameraQualityAndRetention(ctx, operations.GetDeviceCameraQualityAndRetentionRequest{
        Serial: "accusamus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDeviceCameraQualityAndRetention200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetDeviceCameraSense

Returns sense settings for a given camera

### Example Usage

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
    res, err := s.Configure.GetDeviceCameraSense(ctx, operations.GetDeviceCameraSenseRequest{
        Serial: "deleniti",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDeviceCameraSense200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetDeviceCameraSenseObjectDetectionModels

Returns the MV Sense object detection model list for the given camera

### Example Usage

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
    res, err := s.Configure.GetDeviceCameraSenseObjectDetectionModels(ctx, operations.GetDeviceCameraSenseObjectDetectionModelsRequest{
        Serial: "earum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDeviceCameraSenseObjectDetectionModels200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetDeviceCameraVideoLink

Returns video link to the specified camera. If a timestamp is supplied, it links to that timestamp.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Configure.GetDeviceCameraVideoLink(ctx, operations.GetDeviceCameraVideoLinkRequest{
        Serial: "consequuntur",
        Timestamp: types.MustTimeFromString("2022-03-17T16:09:49.019Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDeviceCameraVideoLink200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetDeviceCameraVideoSettings

Returns video settings for the given camera

### Example Usage

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
    res, err := s.Configure.GetDeviceCameraVideoSettings(ctx, operations.GetDeviceCameraVideoSettingsRequest{
        Serial: "quibusdam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDeviceCameraVideoSettings200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetDeviceCameraWirelessProfiles

Returns wireless profile assigned to the given camera

### Example Usage

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
    res, err := s.Configure.GetDeviceCameraWirelessProfiles(ctx, operations.GetDeviceCameraWirelessProfilesRequest{
        Serial: "accusantium",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDeviceCameraWirelessProfiles200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetDeviceCellularGatewayLan

Show the LAN Settings of a MG

### Example Usage

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
    res, err := s.Configure.GetDeviceCellularGatewayLan(ctx, operations.GetDeviceCellularGatewayLanRequest{
        Serial: "nulla",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDeviceCellularGatewayLan200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetDeviceCellularGatewayPortForwardingRules

Returns the port forwarding rules for a single MG.

### Example Usage

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
    res, err := s.Configure.GetDeviceCellularGatewayPortForwardingRules(ctx, operations.GetDeviceCellularGatewayPortForwardingRulesRequest{
        Serial: "inventore",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDeviceCellularGatewayPortForwardingRules200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetDeviceCellularSims

Return the SIM and APN configurations for a cellular device.

### Example Usage

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
    res, err := s.Configure.GetDeviceCellularSims(ctx, operations.GetDeviceCellularSimsRequest{
        Serial: "omnis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDeviceCellularSims200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetDeviceManagementInterface

Return the management interface settings for a device

### Example Usage

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
    res, err := s.Configure.GetDeviceManagementInterface(ctx, operations.GetDeviceManagementInterfaceRequest{
        Serial: "quibusdam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDeviceManagementInterface200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetDeviceSensorRelationships

List the sensor roles for a given sensor or camera device.

### Example Usage

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
    res, err := s.Configure.GetDeviceSensorRelationships(ctx, operations.GetDeviceSensorRelationshipsRequest{
        Serial: "excepturi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDeviceSensorRelationships200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetDeviceSwitchPort

Return a switch port

### Example Usage

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
    res, err := s.Configure.GetDeviceSwitchPort(ctx, operations.GetDeviceSwitchPortRequest{
        PortID: "nostrum",
        Serial: "sint",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDeviceSwitchPort200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetDeviceSwitchPorts

List the switch ports for a switch

### Example Usage

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
    res, err := s.Configure.GetDeviceSwitchPorts(ctx, operations.GetDeviceSwitchPortsRequest{
        Serial: "doloribus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDeviceSwitchPorts200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetDeviceSwitchRoutingInterface

Return a layer 3 interface for a switch

### Example Usage

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
    res, err := s.Configure.GetDeviceSwitchRoutingInterface(ctx, operations.GetDeviceSwitchRoutingInterfaceRequest{
        InterfaceID: "magnam",
        Serial: "adipisci",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDeviceSwitchRoutingInterface200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetDeviceSwitchRoutingInterfaceDhcp

Return a layer 3 interface DHCP configuration for a switch

### Example Usage

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
    res, err := s.Configure.GetDeviceSwitchRoutingInterfaceDhcp(ctx, operations.GetDeviceSwitchRoutingInterfaceDhcpRequest{
        InterfaceID: "natus",
        Serial: "necessitatibus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDeviceSwitchRoutingInterfaceDhcp200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetDeviceSwitchRoutingInterfaces

List layer 3 interfaces for a switch. Those for a stack may be found under switch stack routing.

### Example Usage

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
    res, err := s.Configure.GetDeviceSwitchRoutingInterfaces(ctx, operations.GetDeviceSwitchRoutingInterfacesRequest{
        Serial: "velit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDeviceSwitchRoutingInterfaces200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetDeviceSwitchRoutingStaticRoute

Return a layer 3 static route for a switch

### Example Usage

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
    res, err := s.Configure.GetDeviceSwitchRoutingStaticRoute(ctx, operations.GetDeviceSwitchRoutingStaticRouteRequest{
        Serial: "sint",
        StaticRouteID: "eos",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDeviceSwitchRoutingStaticRoute200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetDeviceSwitchRoutingStaticRoutes

List layer 3 static routes for a switch

### Example Usage

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
    res, err := s.Configure.GetDeviceSwitchRoutingStaticRoutes(ctx, operations.GetDeviceSwitchRoutingStaticRoutesRequest{
        Serial: "nisi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDeviceSwitchRoutingStaticRoutes200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetDeviceSwitchWarmSpare

Return warm spare configuration for a switch

### Example Usage

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
    res, err := s.Configure.GetDeviceSwitchWarmSpare(ctx, operations.GetDeviceSwitchWarmSpareRequest{
        Serial: "commodi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDeviceSwitchWarmSpare200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetDeviceWirelessBluetoothSettings

Return the bluetooth settings for a wireless device

### Example Usage

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
    res, err := s.Configure.GetDeviceWirelessBluetoothSettings(ctx, operations.GetDeviceWirelessBluetoothSettingsRequest{
        Serial: "impedit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDeviceWirelessBluetoothSettings200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetDeviceWirelessRadioSettings

Return the radio settings of a device

### Example Usage

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
    res, err := s.Configure.GetDeviceWirelessRadioSettings(ctx, operations.GetDeviceWirelessRadioSettingsRequest{
        Serial: "facilis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDeviceWirelessRadioSettings200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetwork

Return a network

### Example Usage

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
    res, err := s.Configure.GetNetwork(ctx, operations.GetNetworkRequest{
        NetworkID: "temporibus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetwork200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkAlertsSettings

Return the alert configuration for this network

### Example Usage

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
    res, err := s.Configure.GetNetworkAlertsSettings(ctx, operations.GetNetworkAlertsSettingsRequest{
        NetworkID: "error",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkAlertsSettings200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkApplianceConnectivityMonitoringDestinations

Return the connectivity testing destinations for an MX network

### Example Usage

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
    res, err := s.Configure.GetNetworkApplianceConnectivityMonitoringDestinations(ctx, operations.GetNetworkApplianceConnectivityMonitoringDestinationsRequest{
        NetworkID: "quaerat",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkApplianceConnectivityMonitoringDestinations200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkApplianceContentFiltering

Return the content filtering settings for an MX network

### Example Usage

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
    res, err := s.Configure.GetNetworkApplianceContentFiltering(ctx, operations.GetNetworkApplianceContentFilteringRequest{
        NetworkID: "delectus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkApplianceContentFiltering200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkApplianceContentFilteringCategories

List all available content filtering categories for an MX network

### Example Usage

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
    res, err := s.Configure.GetNetworkApplianceContentFilteringCategories(ctx, operations.GetNetworkApplianceContentFilteringCategoriesRequest{
        NetworkID: "molestiae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkApplianceContentFilteringCategories200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkApplianceFirewallCellularFirewallRules

Return the cellular firewall rules for an MX network

### Example Usage

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
    res, err := s.Configure.GetNetworkApplianceFirewallCellularFirewallRules(ctx, operations.GetNetworkApplianceFirewallCellularFirewallRulesRequest{
        NetworkID: "deserunt",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkApplianceFirewallCellularFirewallRules200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkApplianceFirewallFirewalledService

Return the accessibility settings of the given service ('ICMP', 'web', or 'SNMP')

### Example Usage

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
    res, err := s.Configure.GetNetworkApplianceFirewallFirewalledService(ctx, operations.GetNetworkApplianceFirewallFirewalledServiceRequest{
        NetworkID: "laborum",
        Service: "odit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkApplianceFirewallFirewalledService200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkApplianceFirewallFirewalledServices

List the appliance services and their accessibility rules

### Example Usage

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
    res, err := s.Configure.GetNetworkApplianceFirewallFirewalledServices(ctx, operations.GetNetworkApplianceFirewallFirewalledServicesRequest{
        NetworkID: "rerum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkApplianceFirewallFirewalledServices200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkApplianceFirewallInboundCellularFirewallRules

Return the inbound cellular firewall rules for an MX network

### Example Usage

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
    res, err := s.Configure.GetNetworkApplianceFirewallInboundCellularFirewallRules(ctx, operations.GetNetworkApplianceFirewallInboundCellularFirewallRulesRequest{
        NetworkID: "consequuntur",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkApplianceFirewallInboundCellularFirewallRules200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkApplianceFirewallInboundFirewallRules

Return the inbound firewall rules for an MX network

### Example Usage

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
    res, err := s.Configure.GetNetworkApplianceFirewallInboundFirewallRules(ctx, operations.GetNetworkApplianceFirewallInboundFirewallRulesRequest{
        NetworkID: "magnam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkApplianceFirewallInboundFirewallRules200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkApplianceFirewallL3FirewallRules

Return the L3 firewall rules for an MX network

### Example Usage

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
    res, err := s.Configure.GetNetworkApplianceFirewallL3FirewallRules(ctx, operations.GetNetworkApplianceFirewallL3FirewallRulesRequest{
        NetworkID: "et",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkApplianceFirewallL3FirewallRules200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkApplianceFirewallL7FirewallRules

List the MX L7 firewall rules for an MX network

### Example Usage

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
    res, err := s.Configure.GetNetworkApplianceFirewallL7FirewallRules(ctx, operations.GetNetworkApplianceFirewallL7FirewallRulesRequest{
        NetworkID: "et",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkApplianceFirewallL7FirewallRules200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkApplianceFirewallL7FirewallRulesApplicationCategories

Return the L7 firewall application categories and their associated applications for an MX network

### Example Usage

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
    res, err := s.Configure.GetNetworkApplianceFirewallL7FirewallRulesApplicationCategories(ctx, operations.GetNetworkApplianceFirewallL7FirewallRulesApplicationCategoriesRequest{
        NetworkID: "ratione",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkApplianceFirewallL7FirewallRulesApplicationCategories200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkApplianceFirewallOneToManyNatRules

Return the 1:Many NAT mapping rules for an MX network

### Example Usage

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
    res, err := s.Configure.GetNetworkApplianceFirewallOneToManyNatRules(ctx, operations.GetNetworkApplianceFirewallOneToManyNatRulesRequest{
        NetworkID: "nisi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkApplianceFirewallOneToManyNatRules200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkApplianceFirewallOneToOneNatRules

Return the 1:1 NAT mapping rules for an MX network

### Example Usage

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
    res, err := s.Configure.GetNetworkApplianceFirewallOneToOneNatRules(ctx, operations.GetNetworkApplianceFirewallOneToOneNatRulesRequest{
        NetworkID: "perspiciatis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkApplianceFirewallOneToOneNatRules200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkApplianceFirewallPortForwardingRules

Return the port forwarding rules for an MX network

### Example Usage

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
    res, err := s.Configure.GetNetworkApplianceFirewallPortForwardingRules(ctx, operations.GetNetworkApplianceFirewallPortForwardingRulesRequest{
        NetworkID: "nostrum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkApplianceFirewallPortForwardingRules200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkApplianceFirewallSettings

Return the firewall settings for this network

### Example Usage

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
    res, err := s.Configure.GetNetworkApplianceFirewallSettings(ctx, operations.GetNetworkApplianceFirewallSettingsRequest{
        NetworkID: "temporibus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkApplianceFirewallSettings200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkAppliancePort

Return per-port VLAN settings for a single MX port.

### Example Usage

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
    res, err := s.Configure.GetNetworkAppliancePort(ctx, operations.GetNetworkAppliancePortRequest{
        NetworkID: "et",
        PortID: "debitis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkAppliancePort200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkAppliancePorts

List per-port VLAN settings for all ports of a MX.

### Example Usage

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
    res, err := s.Configure.GetNetworkAppliancePorts(ctx, operations.GetNetworkAppliancePortsRequest{
        NetworkID: "nisi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkAppliancePorts200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkAppliancePrefixesDelegatedStatic

Return a static delegated prefix from a network

### Example Usage

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
    res, err := s.Configure.GetNetworkAppliancePrefixesDelegatedStatic(ctx, operations.GetNetworkAppliancePrefixesDelegatedStaticRequest{
        NetworkID: "aliquid",
        StaticDelegatedPrefixID: "excepturi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkAppliancePrefixesDelegatedStatic200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkAppliancePrefixesDelegatedStatics

List static delegated prefixes for a network

### Example Usage

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
    res, err := s.Configure.GetNetworkAppliancePrefixesDelegatedStatics(ctx, operations.GetNetworkAppliancePrefixesDelegatedStaticsRequest{
        NetworkID: "quas",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkAppliancePrefixesDelegatedStatics200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkApplianceSecurityIntrusion

Returns all supported intrusion settings for an MX network

### Example Usage

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
    res, err := s.Configure.GetNetworkApplianceSecurityIntrusion(ctx, operations.GetNetworkApplianceSecurityIntrusionRequest{
        NetworkID: "repellat",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkApplianceSecurityIntrusion200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkApplianceSecurityMalware

Returns all supported malware settings for an MX network

### Example Usage

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
    res, err := s.Configure.GetNetworkApplianceSecurityMalware(ctx, operations.GetNetworkApplianceSecurityMalwareRequest{
        NetworkID: "placeat",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkApplianceSecurityMalware200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkApplianceSettings

Return the appliance settings for a network

### Example Usage

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
    res, err := s.Configure.GetNetworkApplianceSettings(ctx, operations.GetNetworkApplianceSettingsRequest{
        NetworkID: "eligendi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkApplianceSettings200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkApplianceSingleLan

Return single LAN configuration

### Example Usage

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
    res, err := s.Configure.GetNetworkApplianceSingleLan(ctx, operations.GetNetworkApplianceSingleLanRequest{
        NetworkID: "quaerat",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkApplianceSingleLan200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkApplianceSsid

Return a single MX SSID

### Example Usage

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
    res, err := s.Configure.GetNetworkApplianceSsid(ctx, operations.GetNetworkApplianceSsidRequest{
        NetworkID: "veniam",
        Number: "perspiciatis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkApplianceSsid200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkApplianceSsids

List the MX SSIDs in a network

### Example Usage

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
    res, err := s.Configure.GetNetworkApplianceSsids(ctx, operations.GetNetworkApplianceSsidsRequest{
        NetworkID: "commodi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkApplianceSsids200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkApplianceStaticRoute

Return a static route for an MX or teleworker network

### Example Usage

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
    res, err := s.Configure.GetNetworkApplianceStaticRoute(ctx, operations.GetNetworkApplianceStaticRouteRequest{
        NetworkID: "dolores",
        StaticRouteID: "dicta",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkApplianceStaticRoute200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkApplianceStaticRoutes

List the static routes for an MX or teleworker network

### Example Usage

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
    res, err := s.Configure.GetNetworkApplianceStaticRoutes(ctx, operations.GetNetworkApplianceStaticRoutesRequest{
        NetworkID: "molestiae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkApplianceStaticRoutes200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkApplianceTrafficShaping

Display the traffic shaping settings for an MX network

### Example Usage

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
    res, err := s.Configure.GetNetworkApplianceTrafficShaping(ctx, operations.GetNetworkApplianceTrafficShapingRequest{
        NetworkID: "maxime",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkApplianceTrafficShaping200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkApplianceTrafficShapingCustomPerformanceClass

Return a custom performance class for an MX network

### Example Usage

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
    res, err := s.Configure.GetNetworkApplianceTrafficShapingCustomPerformanceClass(ctx, operations.GetNetworkApplianceTrafficShapingCustomPerformanceClassRequest{
        CustomPerformanceClassID: "dolores",
        NetworkID: "molestias",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkApplianceTrafficShapingCustomPerformanceClass200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkApplianceTrafficShapingCustomPerformanceClasses

List all custom performance classes for an MX network

### Example Usage

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
    res, err := s.Configure.GetNetworkApplianceTrafficShapingCustomPerformanceClasses(ctx, operations.GetNetworkApplianceTrafficShapingCustomPerformanceClassesRequest{
        NetworkID: "quam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkApplianceTrafficShapingCustomPerformanceClasses200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkApplianceTrafficShapingRules

Display the traffic shaping settings rules for an MX network

### Example Usage

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
    res, err := s.Configure.GetNetworkApplianceTrafficShapingRules(ctx, operations.GetNetworkApplianceTrafficShapingRulesRequest{
        NetworkID: "molestiae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkApplianceTrafficShapingRules200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkApplianceTrafficShapingUplinkBandwidth

Returns the uplink bandwidth limits for your MX network. This may not reflect the affected device's hardware capabilities.  For more information on your device's hardware capabilities, please consult our MX Family Datasheet - [https://meraki.cisco.com/product-collateral/mx-family-datasheet/?file]

### Example Usage

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
    res, err := s.Configure.GetNetworkApplianceTrafficShapingUplinkBandwidth(ctx, operations.GetNetworkApplianceTrafficShapingUplinkBandwidthRequest{
        NetworkID: "aliquid",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkApplianceTrafficShapingUplinkBandwidth200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkApplianceTrafficShapingUplinkSelection

Show uplink selection settings for an MX network

### Example Usage

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
    res, err := s.Configure.GetNetworkApplianceTrafficShapingUplinkSelection(ctx, operations.GetNetworkApplianceTrafficShapingUplinkSelectionRequest{
        NetworkID: "voluptate",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkApplianceTrafficShapingUplinkSelection200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkApplianceVlan

Return a VLAN

### Example Usage

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
    res, err := s.Configure.GetNetworkApplianceVlan(ctx, operations.GetNetworkApplianceVlanRequest{
        NetworkID: "eum",
        VlanID: "consectetur",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkApplianceVlan200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkApplianceVlans

List the VLANs for an MX network

### Example Usage

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
    res, err := s.Configure.GetNetworkApplianceVlans(ctx, operations.GetNetworkApplianceVlansRequest{
        NetworkID: "velit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkApplianceVlans200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkApplianceVlansSettings

Returns the enabled status of VLANs for the network

### Example Usage

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
    res, err := s.Configure.GetNetworkApplianceVlansSettings(ctx, operations.GetNetworkApplianceVlansSettingsRequest{
        NetworkID: "tempora",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkApplianceVlansSettings200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkApplianceVpnBgp

Return a Hub BGP Configuration

### Example Usage

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
    res, err := s.Configure.GetNetworkApplianceVpnBgp(ctx, operations.GetNetworkApplianceVpnBgpRequest{
        NetworkID: "aspernatur",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkApplianceVpnBgp200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkApplianceVpnSiteToSiteVpn

Return the site-to-site VPN settings of a network. Only valid for MX networks.

### Example Usage

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
    res, err := s.Configure.GetNetworkApplianceVpnSiteToSiteVpn(ctx, operations.GetNetworkApplianceVpnSiteToSiteVpnRequest{
        NetworkID: "ad",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkApplianceVpnSiteToSiteVpn200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkApplianceWarmSpare

Return MX warm spare settings

### Example Usage

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
    res, err := s.Configure.GetNetworkApplianceWarmSpare(ctx, operations.GetNetworkApplianceWarmSpareRequest{
        NetworkID: "incidunt",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkApplianceWarmSpare200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkCameraQualityRetentionProfile

Retrieve a single quality retention profile

### Example Usage

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
    res, err := s.Configure.GetNetworkCameraQualityRetentionProfile(ctx, operations.GetNetworkCameraQualityRetentionProfileRequest{
        NetworkID: "alias",
        QualityRetentionProfileID: "adipisci",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkCameraQualityRetentionProfile200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkCameraQualityRetentionProfiles

List the quality retention profiles for this network

### Example Usage

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
    res, err := s.Configure.GetNetworkCameraQualityRetentionProfiles(ctx, operations.GetNetworkCameraQualityRetentionProfilesRequest{
        NetworkID: "atque",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkCameraQualityRetentionProfiles200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkCameraSchedules

Returns a list of all camera recording schedules.

### Example Usage

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
    res, err := s.Configure.GetNetworkCameraSchedules(ctx, operations.GetNetworkCameraSchedulesRequest{
        NetworkID: "tempore",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkCameraSchedules200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkCameraWirelessProfile

Retrieve a single camera wireless profile.

### Example Usage

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
    res, err := s.Configure.GetNetworkCameraWirelessProfile(ctx, operations.GetNetworkCameraWirelessProfileRequest{
        NetworkID: "asperiores",
        WirelessProfileID: "distinctio",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkCameraWirelessProfile200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkCameraWirelessProfiles

List the camera wireless profiles for this network.

### Example Usage

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
    res, err := s.Configure.GetNetworkCameraWirelessProfiles(ctx, operations.GetNetworkCameraWirelessProfilesRequest{
        NetworkID: "minima",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkCameraWirelessProfiles200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkCellularGatewayConnectivityMonitoringDestinations

Return the connectivity testing destinations for an MG network

### Example Usage

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
    res, err := s.Configure.GetNetworkCellularGatewayConnectivityMonitoringDestinations(ctx, operations.GetNetworkCellularGatewayConnectivityMonitoringDestinationsRequest{
        NetworkID: "cupiditate",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkCellularGatewayConnectivityMonitoringDestinations200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkCellularGatewayDhcp

List common DHCP settings of MGs

### Example Usage

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
    res, err := s.Configure.GetNetworkCellularGatewayDhcp(ctx, operations.GetNetworkCellularGatewayDhcpRequest{
        NetworkID: "molestiae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkCellularGatewayDhcp200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkCellularGatewaySubnetPool

Return the subnet pool and mask configured for MGs in the network.

### Example Usage

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
    res, err := s.Configure.GetNetworkCellularGatewaySubnetPool(ctx, operations.GetNetworkCellularGatewaySubnetPoolRequest{
        NetworkID: "et",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkCellularGatewaySubnetPool200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkCellularGatewayUplink

Returns the uplink settings for your MG network.

### Example Usage

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
    res, err := s.Configure.GetNetworkCellularGatewayUplink(ctx, operations.GetNetworkCellularGatewayUplinkRequest{
        NetworkID: "accusamus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkCellularGatewayUplink200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkClientPolicy

Return the policy assigned to a client on the network. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.

### Example Usage

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
    res, err := s.Configure.GetNetworkClientPolicy(ctx, operations.GetNetworkClientPolicyRequest{
        ClientID: "excepturi",
        NetworkID: "deleniti",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkClientPolicy200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkClientSplashAuthorizationStatus

Return the splash authorization for a client, for each SSID they've associated with through splash. Only enabled SSIDs with Click-through splash enabled will be included. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.

### Example Usage

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
    res, err := s.Configure.GetNetworkClientSplashAuthorizationStatus(ctx, operations.GetNetworkClientSplashAuthorizationStatusRequest{
        ClientID: "inventore",
        NetworkID: "perspiciatis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkClientSplashAuthorizationStatus200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkDevices

List the devices in a network

### Example Usage

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
    res, err := s.Configure.GetNetworkDevices(ctx, operations.GetNetworkDevicesRequest{
        NetworkID: "perferendis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkDevices200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkFirmwareUpgrades

Get firmware upgrade information for a network

### Example Usage

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
    res, err := s.Configure.GetNetworkFirmwareUpgrades(ctx, operations.GetNetworkFirmwareUpgradesRequest{
        NetworkID: "corporis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkFirmwareUpgrades200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkFirmwareUpgradesStagedEvents

Get the Staged Upgrade Event from a network

### Example Usage

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
    res, err := s.Configure.GetNetworkFirmwareUpgradesStagedEvents(ctx, operations.GetNetworkFirmwareUpgradesStagedEventsRequest{
        NetworkID: "ullam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkFirmwareUpgradesStagedEvents200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkFirmwareUpgradesStagedGroup

Get a Staged Upgrade Group from a network

### Example Usage

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
    res, err := s.Configure.GetNetworkFirmwareUpgradesStagedGroup(ctx, operations.GetNetworkFirmwareUpgradesStagedGroupRequest{
        GroupID: "molestiae",
        NetworkID: "adipisci",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkFirmwareUpgradesStagedGroup200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkFirmwareUpgradesStagedGroups

List of Staged Upgrade Groups in a network

### Example Usage

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
    res, err := s.Configure.GetNetworkFirmwareUpgradesStagedGroups(ctx, operations.GetNetworkFirmwareUpgradesStagedGroupsRequest{
        NetworkID: "totam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkFirmwareUpgradesStagedGroups200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkFirmwareUpgradesStagedStages

Order of Staged Upgrade Groups in a network

### Example Usage

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
    res, err := s.Configure.GetNetworkFirmwareUpgradesStagedStages(ctx, operations.GetNetworkFirmwareUpgradesStagedStagesRequest{
        NetworkID: "perspiciatis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkFirmwareUpgradesStagedStages200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkFloorPlan

Find a floor plan by ID

### Example Usage

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
    res, err := s.Configure.GetNetworkFloorPlan(ctx, operations.GetNetworkFloorPlanRequest{
        FloorPlanID: "optio",
        NetworkID: "itaque",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkFloorPlan200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkFloorPlans

List the floor plans that belong to your network

### Example Usage

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
    res, err := s.Configure.GetNetworkFloorPlans(ctx, operations.GetNetworkFloorPlansRequest{
        NetworkID: "at",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkFloorPlans200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkGroupPolicies

List the group policies in a network

### Example Usage

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
    res, err := s.Configure.GetNetworkGroupPolicies(ctx, operations.GetNetworkGroupPoliciesRequest{
        NetworkID: "nam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkGroupPolicies200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkGroupPolicy

Display a group policy

### Example Usage

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
    res, err := s.Configure.GetNetworkGroupPolicy(ctx, operations.GetNetworkGroupPolicyRequest{
        GroupPolicyID: "id",
        NetworkID: "cumque",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkGroupPolicy200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkHealthAlerts

Return all global alerts on this network

### Example Usage

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
    res, err := s.Configure.GetNetworkHealthAlerts(ctx, operations.GetNetworkHealthAlertsRequest{
        NetworkID: "in",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkHealthAlerts200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkMerakiAuthUser

Return the Meraki Auth splash guest, RADIUS, or client VPN user

### Example Usage

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
    res, err := s.Configure.GetNetworkMerakiAuthUser(ctx, operations.GetNetworkMerakiAuthUserRequest{
        MerakiAuthUserID: "a",
        NetworkID: "quibusdam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkMerakiAuthUser200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkMerakiAuthUsers

List the users configured under Meraki Authentication for a network (splash guest or RADIUS users for a wireless network, or client VPN users for a wired network)

### Example Usage

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
    res, err := s.Configure.GetNetworkMerakiAuthUsers(ctx, operations.GetNetworkMerakiAuthUsersRequest{
        NetworkID: "culpa",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkMerakiAuthUsers200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkMqttBroker

Return an MQTT broker

### Example Usage

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
    res, err := s.Configure.GetNetworkMqttBroker(ctx, operations.GetNetworkMqttBrokerRequest{
        MqttBrokerID: "dolor",
        NetworkID: "occaecati",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkMqttBroker200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkMqttBrokers

List the MQTT brokers for this network

### Example Usage

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
    res, err := s.Configure.GetNetworkMqttBrokers(ctx, operations.GetNetworkMqttBrokersRequest{
        NetworkID: "exercitationem",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkMqttBrokers200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkNetflow

Return the NetFlow traffic reporting settings for a network

### Example Usage

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
    res, err := s.Configure.GetNetworkNetflow(ctx, operations.GetNetworkNetflowRequest{
        NetworkID: "unde",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkNetflow200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkPiiPiiKeys

List the keys required to access Personally Identifiable Information (PII) for a given identifier. Exactly one identifier will be accepted. If the organization contains org-wide Systems Manager users matching the key provided then there will be an entry with the key "0" containing the applicable keys.

## ALTERNATE PATH

```
/organizations/{organizationId}/pii/piiKeys
```

### Example Usage

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
    res, err := s.Configure.GetNetworkPiiPiiKeys(ctx, operations.GetNetworkPiiPiiKeysRequest{
        BluetoothMac: sdk.String("labore"),
        Email: sdk.String("Hertha_Howell16@hotmail.com"),
        Imei: sdk.String("mollitia"),
        Mac: sdk.String("officiis"),
        NetworkID: "aliquam",
        Serial: sdk.String("quas"),
        Username: sdk.String("Adrian13"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkPiiPiiKeys200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkPiiRequest

Return a PII request

## ALTERNATE PATH

```
/organizations/{organizationId}/pii/requests/{requestId}
```

### Example Usage

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
    res, err := s.Configure.GetNetworkPiiRequest(ctx, operations.GetNetworkPiiRequestRequest{
        NetworkID: "rerum",
        RequestID: "iste",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkPiiRequest200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkPiiRequests

List the PII requests for this network or organization

## ALTERNATE PATH

```
/organizations/{organizationId}/pii/requests
```

### Example Usage

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
    res, err := s.Configure.GetNetworkPiiRequests(ctx, operations.GetNetworkPiiRequestsRequest{
        NetworkID: "occaecati",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkPiiRequests200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkPiiSmDevicesForKey

Given a piece of Personally Identifiable Information (PII), return the Systems Manager device ID(s) associated with that identifier. These device IDs can be used with the Systems Manager API endpoints to retrieve device details. Exactly one identifier will be accepted.

## ALTERNATE PATH

```
/organizations/{organizationId}/pii/smDevicesForKey
```

### Example Usage

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
    res, err := s.Configure.GetNetworkPiiSmDevicesForKey(ctx, operations.GetNetworkPiiSmDevicesForKeyRequest{
        BluetoothMac: sdk.String("enim"),
        Email: sdk.String("Morris_Kerluke18@gmail.com"),
        Imei: sdk.String("explicabo"),
        Mac: sdk.String("accusantium"),
        NetworkID: "eum",
        Serial: sdk.String("nesciunt"),
        Username: sdk.String("Hayden.Mann"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkPiiSmDevicesForKey200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkPiiSmOwnersForKey

Given a piece of Personally Identifiable Information (PII), return the Systems Manager owner ID(s) associated with that identifier. These owner IDs can be used with the Systems Manager API endpoints to retrieve owner details. Exactly one identifier will be accepted.

## ALTERNATE PATH

```
/organizations/{organizationId}/pii/smOwnersForKey
```

### Example Usage

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
    res, err := s.Configure.GetNetworkPiiSmOwnersForKey(ctx, operations.GetNetworkPiiSmOwnersForKeyRequest{
        BluetoothMac: sdk.String("totam"),
        Email: sdk.String("Fredy_Dietrich6@yahoo.com"),
        Imei: sdk.String("alias"),
        Mac: sdk.String("accusantium"),
        NetworkID: "doloremque",
        Serial: sdk.String("autem"),
        Username: sdk.String("Mose.Treutel59"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkPiiSmOwnersForKey200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkPoliciesByClient

Get policies for all clients with policies

### Example Usage

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
    res, err := s.Configure.GetNetworkPoliciesByClient(ctx, operations.GetNetworkPoliciesByClientRequest{
        EndingBefore: sdk.String("dolores"),
        NetworkID: "illo",
        PerPage: sdk.Int64(928209),
        StartingAfter: sdk.String("quod"),
        T0: sdk.String("magni"),
        Timespan: sdk.Float32(268.38),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkPoliciesByClient200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkSensorAlertsProfile

Show details of a sensor alert profile for a network.

### Example Usage

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
    res, err := s.Configure.GetNetworkSensorAlertsProfile(ctx, operations.GetNetworkSensorAlertsProfileRequest{
        ID: "53b74936-6ac8-4ee0-b2bf-19588d40d03f",
        NetworkID: "neque",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSensorAlertsProfile200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkSensorAlertsProfiles

Lists all sensor alert profiles for a network.

### Example Usage

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
    res, err := s.Configure.GetNetworkSensorAlertsProfiles(ctx, operations.GetNetworkSensorAlertsProfilesRequest{
        NetworkID: "assumenda",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSensorAlertsProfiles200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkSensorRelationships

List the sensor roles for devices in a given network

### Example Usage

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
    res, err := s.Configure.GetNetworkSensorRelationships(ctx, operations.GetNetworkSensorRelationshipsRequest{
        NetworkID: "saepe",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSensorRelationships200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkSettings

Return the settings for a network

### Example Usage

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
    res, err := s.Configure.GetNetworkSettings(ctx, operations.GetNetworkSettingsRequest{
        NetworkID: "nobis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSettings200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkSmBypassActivationLockAttempt

Bypass activation lock attempt status

### Example Usage

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
    res, err := s.Configure.GetNetworkSmBypassActivationLockAttempt(ctx, operations.GetNetworkSmBypassActivationLockAttemptRequest{
        AttemptID: "est",
        NetworkID: "quia",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSmBypassActivationLockAttempt200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkSmDeviceCerts

List the certs on a device

### Example Usage

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
    res, err := s.Configure.GetNetworkSmDeviceCerts(ctx, operations.GetNetworkSmDeviceCertsRequest{
        DeviceID: "natus",
        NetworkID: "molestiae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSmDeviceCerts200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkSmDeviceDeviceProfiles

Get the installed profiles associated with a device

### Example Usage

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
    res, err := s.Configure.GetNetworkSmDeviceDeviceProfiles(ctx, operations.GetNetworkSmDeviceDeviceProfilesRequest{
        DeviceID: "facilis",
        NetworkID: "earum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSmDeviceDeviceProfiles200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkSmDeviceNetworkAdapters

List the network adapters of a device

### Example Usage

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
    res, err := s.Configure.GetNetworkSmDeviceNetworkAdapters(ctx, operations.GetNetworkSmDeviceNetworkAdaptersRequest{
        DeviceID: "ipsum",
        NetworkID: "itaque",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSmDeviceNetworkAdapters200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkSmDeviceRestrictions

List the restrictions on a device

### Example Usage

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
    res, err := s.Configure.GetNetworkSmDeviceRestrictions(ctx, operations.GetNetworkSmDeviceRestrictionsRequest{
        DeviceID: "cupiditate",
        NetworkID: "consequatur",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSmDeviceRestrictions200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkSmDeviceSecurityCenters

List the security centers on a device

### Example Usage

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
    res, err := s.Configure.GetNetworkSmDeviceSecurityCenters(ctx, operations.GetNetworkSmDeviceSecurityCentersRequest{
        DeviceID: "harum",
        NetworkID: "nobis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSmDeviceSecurityCenters200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkSmDeviceSoftwares

Get a list of softwares associated with a device

### Example Usage

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
    res, err := s.Configure.GetNetworkSmDeviceSoftwares(ctx, operations.GetNetworkSmDeviceSoftwaresRequest{
        DeviceID: "numquam",
        NetworkID: "consequatur",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSmDeviceSoftwares200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkSmDeviceWlanLists

List the saved SSID names on a device

### Example Usage

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
    res, err := s.Configure.GetNetworkSmDeviceWlanLists(ctx, operations.GetNetworkSmDeviceWlanListsRequest{
        DeviceID: "temporibus",
        NetworkID: "doloribus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSmDeviceWlanLists200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkSmDevices

List the devices enrolled in an SM network with various specified fields and filters

### Example Usage

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
    res, err := s.Configure.GetNetworkSmDevices(ctx, operations.GetNetworkSmDevicesRequest{
        EndingBefore: sdk.String("quos"),
        Fields: []string{
            "blanditiis",
            "voluptatibus",
        },
        Ids: []string{
            "nemo",
            "ratione",
            "dolore",
            "perferendis",
        },
        NetworkID: "enim",
        PerPage: sdk.Int64(770539),
        Scope: []string{
            "dolor",
            "nesciunt",
            "vitae",
        },
        Serials: []string{
            "numquam",
            "provident",
            "quia",
            "reiciendis",
        },
        StartingAfter: sdk.String("modi"),
        WifiMacs: []string{
            "et",
            "qui",
            "iusto",
            "a",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSmDevices200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkSmProfiles

List all profiles in a network

### Example Usage

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
    res, err := s.Configure.GetNetworkSmProfiles(ctx, operations.GetNetworkSmProfilesRequest{
        NetworkID: "quidem",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSmProfiles200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkSmTargetGroup

Return a target group

### Example Usage

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
    res, err := s.Configure.GetNetworkSmTargetGroup(ctx, operations.GetNetworkSmTargetGroupRequest{
        NetworkID: "aperiam",
        TargetGroupID: "saepe",
        WithDetails: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSmTargetGroup200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkSmTargetGroups

List the target groups in this network

### Example Usage

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
    res, err := s.Configure.GetNetworkSmTargetGroups(ctx, operations.GetNetworkSmTargetGroupsRequest{
        NetworkID: "voluptatem",
        WithDetails: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSmTargetGroups200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkSmTrustedAccessConfigs

List Trusted Access Configs

### Example Usage

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
    res, err := s.Configure.GetNetworkSmTrustedAccessConfigs(ctx, operations.GetNetworkSmTrustedAccessConfigsRequest{
        EndingBefore: sdk.String("soluta"),
        NetworkID: "hic",
        PerPage: sdk.Int64(108718),
        StartingAfter: sdk.String("delectus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSmTrustedAccessConfigs200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkSmUserAccessDevices

List User Access Devices and its Trusted Access Connections

### Example Usage

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
    res, err := s.Configure.GetNetworkSmUserAccessDevices(ctx, operations.GetNetworkSmUserAccessDevicesRequest{
        EndingBefore: sdk.String("deleniti"),
        NetworkID: "fugit",
        PerPage: sdk.Int64(79322),
        StartingAfter: sdk.String("reprehenderit"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSmUserAccessDevices200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkSmUserDeviceProfiles

Get the profiles associated with a user

### Example Usage

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
    res, err := s.Configure.GetNetworkSmUserDeviceProfiles(ctx, operations.GetNetworkSmUserDeviceProfilesRequest{
        NetworkID: "sint",
        UserID: "dignissimos",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSmUserDeviceProfiles200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkSmUserSoftwares

Get a list of softwares associated with a user

### Example Usage

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
    res, err := s.Configure.GetNetworkSmUserSoftwares(ctx, operations.GetNetworkSmUserSoftwaresRequest{
        NetworkID: "voluptatum",
        UserID: "nulla",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSmUserSoftwares200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkSmUsers

List the owners in an SM network with various specified fields and filters

### Example Usage

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
    res, err := s.Configure.GetNetworkSmUsers(ctx, operations.GetNetworkSmUsersRequest{
        Emails: []string{
            "similique",
        },
        Ids: []string{
            "impedit",
            "officia",
            "odio",
            "voluptate",
        },
        NetworkID: "mollitia",
        Scope: []string{
            "tempore",
            "voluptate",
            "cum",
            "esse",
        },
        Usernames: []string{
            "consequuntur",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSmUsers200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkSnmp

Return the SNMP settings for a network

### Example Usage

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
    res, err := s.Configure.GetNetworkSnmp(ctx, operations.GetNetworkSnmpRequest{
        NetworkID: "architecto",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSnmp200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkSwitchAccessControlLists

Return the access control lists for a MS network

### Example Usage

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
    res, err := s.Configure.GetNetworkSwitchAccessControlLists(ctx, operations.GetNetworkSwitchAccessControlListsRequest{
        NetworkID: "est",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSwitchAccessControlLists200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkSwitchAccessPolicies

List the access policies for a switch network. Only returns access policies with 'my RADIUS server' as authentication method

### Example Usage

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
    res, err := s.Configure.GetNetworkSwitchAccessPolicies(ctx, operations.GetNetworkSwitchAccessPoliciesRequest{
        NetworkID: "nemo",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSwitchAccessPolicies200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkSwitchAccessPolicy

Return a specific access policy for a switch network

### Example Usage

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
    res, err := s.Configure.GetNetworkSwitchAccessPolicy(ctx, operations.GetNetworkSwitchAccessPolicyRequest{
        AccessPolicyNumber: "magni",
        NetworkID: "quae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSwitchAccessPolicy200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkSwitchAlternateManagementInterface

Return the switch alternate management interface for the network

### Example Usage

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
    res, err := s.Configure.GetNetworkSwitchAlternateManagementInterface(ctx, operations.GetNetworkSwitchAlternateManagementInterfaceRequest{
        NetworkID: "quaerat",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSwitchAlternateManagementInterface200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkSwitchDhcpServerPolicy

Return the DHCP server settings. Blocked/allowed servers are only applied when default policy is allow/block, respectively

### Example Usage

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
    res, err := s.Configure.GetNetworkSwitchDhcpServerPolicy(ctx, operations.GetNetworkSwitchDhcpServerPolicyRequest{
        NetworkID: "suscipit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSwitchDhcpServerPolicy200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkSwitchDhcpServerPolicyArpInspectionTrustedServers

Return the list of servers trusted by Dynamic ARP Inspection on this network. These are also known as whitelisted snoop entries

### Example Usage

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
    res, err := s.Configure.GetNetworkSwitchDhcpServerPolicyArpInspectionTrustedServers(ctx, operations.GetNetworkSwitchDhcpServerPolicyArpInspectionTrustedServersRequest{
        EndingBefore: sdk.String("rerum"),
        NetworkID: "laboriosam",
        PerPage: sdk.Int64(306058),
        StartingAfter: sdk.String("repudiandae"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSwitchDhcpServerPolicyArpInspectionTrustedServers200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkSwitchDhcpServerPolicyArpInspectionWarningsByDevice

Return the devices that have a Dynamic ARP Inspection warning and their warnings

### Example Usage

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
    res, err := s.Configure.GetNetworkSwitchDhcpServerPolicyArpInspectionWarningsByDevice(ctx, operations.GetNetworkSwitchDhcpServerPolicyArpInspectionWarningsByDeviceRequest{
        EndingBefore: sdk.String("unde"),
        NetworkID: "excepturi",
        PerPage: sdk.Int64(976712),
        StartingAfter: sdk.String("facilis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSwitchDhcpServerPolicyArpInspectionWarningsByDevice200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkSwitchDhcpV4ServersSeen

Return the network's DHCPv4 servers seen within the selected timeframe (default 1 day)

### Example Usage

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
    res, err := s.Configure.GetNetworkSwitchDhcpV4ServersSeen(ctx, operations.GetNetworkSwitchDhcpV4ServersSeenRequest{
        EndingBefore: sdk.String("doloremque"),
        NetworkID: "officiis",
        PerPage: sdk.Int64(394208),
        StartingAfter: sdk.String("reprehenderit"),
        T0: sdk.String("necessitatibus"),
        Timespan: sdk.Float32(19.62),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSwitchDhcpV4ServersSeen200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkSwitchDscpToCosMappings

Return the DSCP to CoS mappings

### Example Usage

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
    res, err := s.Configure.GetNetworkSwitchDscpToCosMappings(ctx, operations.GetNetworkSwitchDscpToCosMappingsRequest{
        NetworkID: "provident",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSwitchDscpToCosMappings200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkSwitchLinkAggregations

List link aggregation groups

### Example Usage

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
    res, err := s.Configure.GetNetworkSwitchLinkAggregations(ctx, operations.GetNetworkSwitchLinkAggregationsRequest{
        NetworkID: "ut",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSwitchLinkAggregations200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkSwitchMtu

Return the MTU configuration

### Example Usage

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
    res, err := s.Configure.GetNetworkSwitchMtu(ctx, operations.GetNetworkSwitchMtuRequest{
        NetworkID: "hic",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSwitchMtu200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkSwitchPortSchedules

List switch port schedules

### Example Usage

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
    res, err := s.Configure.GetNetworkSwitchPortSchedules(ctx, operations.GetNetworkSwitchPortSchedulesRequest{
        NetworkID: "facere",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSwitchPortSchedules200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkSwitchQosRule

Return a quality of service rule

### Example Usage

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
    res, err := s.Configure.GetNetworkSwitchQosRule(ctx, operations.GetNetworkSwitchQosRuleRequest{
        NetworkID: "tenetur",
        QosRuleID: "saepe",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSwitchQosRule200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkSwitchQosRules

List quality of service rules

### Example Usage

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
    res, err := s.Configure.GetNetworkSwitchQosRules(ctx, operations.GetNetworkSwitchQosRulesRequest{
        NetworkID: "assumenda",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSwitchQosRules200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkSwitchQosRulesOrder

Return the quality of service rule IDs by order in which they will be processed by the switch

### Example Usage

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
    res, err := s.Configure.GetNetworkSwitchQosRulesOrder(ctx, operations.GetNetworkSwitchQosRulesOrderRequest{
        NetworkID: "exercitationem",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSwitchQosRulesOrder200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkSwitchRoutingMulticast

Return multicast settings for a network

### Example Usage

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
    res, err := s.Configure.GetNetworkSwitchRoutingMulticast(ctx, operations.GetNetworkSwitchRoutingMulticastRequest{
        NetworkID: "exercitationem",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSwitchRoutingMulticast200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkSwitchRoutingMulticastRendezvousPoint

Return a multicast rendezvous point

### Example Usage

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
    res, err := s.Configure.GetNetworkSwitchRoutingMulticastRendezvousPoint(ctx, operations.GetNetworkSwitchRoutingMulticastRendezvousPointRequest{
        NetworkID: "dolore",
        RendezvousPointID: "sit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSwitchRoutingMulticastRendezvousPoint200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkSwitchRoutingMulticastRendezvousPoints

List multicast rendezvous points

### Example Usage

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
    res, err := s.Configure.GetNetworkSwitchRoutingMulticastRendezvousPoints(ctx, operations.GetNetworkSwitchRoutingMulticastRendezvousPointsRequest{
        NetworkID: "recusandae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSwitchRoutingMulticastRendezvousPoints200ApplicationJSONArrays != nil {
        // handle response
    }
}
```

## GetNetworkSwitchRoutingOspf

Return layer 3 OSPF routing configuration

### Example Usage

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
    res, err := s.Configure.GetNetworkSwitchRoutingOspf(ctx, operations.GetNetworkSwitchRoutingOspfRequest{
        NetworkID: "a",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSwitchRoutingOspf200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkSwitchSettings

Returns the switch network settings

### Example Usage

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
    res, err := s.Configure.GetNetworkSwitchSettings(ctx, operations.GetNetworkSwitchSettingsRequest{
        NetworkID: "exercitationem",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSwitchSettings200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkSwitchStack

Show a switch stack

### Example Usage

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
    res, err := s.Configure.GetNetworkSwitchStack(ctx, operations.GetNetworkSwitchStackRequest{
        NetworkID: "neque",
        SwitchStackID: "mollitia",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSwitchStack200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkSwitchStackRoutingInterface

Return a layer 3 interface from a switch stack

### Example Usage

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
    res, err := s.Configure.GetNetworkSwitchStackRoutingInterface(ctx, operations.GetNetworkSwitchStackRoutingInterfaceRequest{
        InterfaceID: "velit",
        NetworkID: "ut",
        SwitchStackID: "est",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSwitchStackRoutingInterface200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkSwitchStackRoutingInterfaceDhcp

Return a layer 3 interface DHCP configuration for a switch stack

### Example Usage

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
    res, err := s.Configure.GetNetworkSwitchStackRoutingInterfaceDhcp(ctx, operations.GetNetworkSwitchStackRoutingInterfaceDhcpRequest{
        InterfaceID: "quasi",
        NetworkID: "rerum",
        SwitchStackID: "blanditiis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSwitchStackRoutingInterfaceDhcp200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkSwitchStackRoutingInterfaces

List layer 3 interfaces for a switch stack

### Example Usage

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
    res, err := s.Configure.GetNetworkSwitchStackRoutingInterfaces(ctx, operations.GetNetworkSwitchStackRoutingInterfacesRequest{
        NetworkID: "sapiente",
        SwitchStackID: "recusandae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSwitchStackRoutingInterfaces200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkSwitchStackRoutingStaticRoute

Return a layer 3 static route for a switch stack

### Example Usage

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
    res, err := s.Configure.GetNetworkSwitchStackRoutingStaticRoute(ctx, operations.GetNetworkSwitchStackRoutingStaticRouteRequest{
        NetworkID: "perspiciatis",
        StaticRouteID: "natus",
        SwitchStackID: "reprehenderit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSwitchStackRoutingStaticRoute200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkSwitchStackRoutingStaticRoutes

List layer 3 static routes for a switch stack

### Example Usage

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
    res, err := s.Configure.GetNetworkSwitchStackRoutingStaticRoutes(ctx, operations.GetNetworkSwitchStackRoutingStaticRoutesRequest{
        NetworkID: "dolorem",
        SwitchStackID: "sunt",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSwitchStackRoutingStaticRoutes200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkSwitchStacks

List the switch stacks in a network

### Example Usage

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
    res, err := s.Configure.GetNetworkSwitchStacks(ctx, operations.GetNetworkSwitchStacksRequest{
        NetworkID: "fuga",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSwitchStacks200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkSwitchStormControl

Return the storm control configuration for a switch network

### Example Usage

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
    res, err := s.Configure.GetNetworkSwitchStormControl(ctx, operations.GetNetworkSwitchStormControlRequest{
        NetworkID: "nulla",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSwitchStormControl200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkSwitchStp

Returns STP settings

### Example Usage

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
    res, err := s.Configure.GetNetworkSwitchStp(ctx, operations.GetNetworkSwitchStpRequest{
        NetworkID: "cumque",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSwitchStp200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkSyslogServers

List the syslog servers for a network

### Example Usage

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
    res, err := s.Configure.GetNetworkSyslogServers(ctx, operations.GetNetworkSyslogServersRequest{
        NetworkID: "aperiam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSyslogServers200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkTrafficAnalysis

Return the traffic analysis settings for a network

### Example Usage

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
    res, err := s.Configure.GetNetworkTrafficAnalysis(ctx, operations.GetNetworkTrafficAnalysisRequest{
        NetworkID: "ad",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkTrafficAnalysis200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkTrafficShapingApplicationCategories

Returns the application categories for traffic shaping rules.

### Example Usage

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
    res, err := s.Configure.GetNetworkTrafficShapingApplicationCategories(ctx, operations.GetNetworkTrafficShapingApplicationCategoriesRequest{
        NetworkID: "fugiat",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkTrafficShapingApplicationCategories200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkTrafficShapingDscpTaggingOptions

Returns the available DSCP tagging options for your traffic shaping rules.

### Example Usage

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
    res, err := s.Configure.GetNetworkTrafficShapingDscpTaggingOptions(ctx, operations.GetNetworkTrafficShapingDscpTaggingOptionsRequest{
        NetworkID: "quas",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkTrafficShapingDscpTaggingOptions200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkWebhooksHTTPServer

Return an HTTP server for a network

### Example Usage

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
    res, err := s.Configure.GetNetworkWebhooksHTTPServer(ctx, operations.GetNetworkWebhooksHTTPServerRequest{
        HTTPServerID: "quis",
        NetworkID: "fuga",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkWebhooksHTTPServer200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkWebhooksHTTPServers

List the HTTP servers for a network

### Example Usage

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
    res, err := s.Configure.GetNetworkWebhooksHTTPServers(ctx, operations.GetNetworkWebhooksHTTPServersRequest{
        NetworkID: "eveniet",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkWebhooksHTTPServers200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkWebhooksPayloadTemplate

Get the webhook payload template for a network

### Example Usage

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
    res, err := s.Configure.GetNetworkWebhooksPayloadTemplate(ctx, operations.GetNetworkWebhooksPayloadTemplateRequest{
        NetworkID: "consequuntur",
        PayloadTemplateID: "illum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkWebhooksPayloadTemplate200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkWebhooksPayloadTemplates

List the webhook payload templates for a network

### Example Usage

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
    res, err := s.Configure.GetNetworkWebhooksPayloadTemplates(ctx, operations.GetNetworkWebhooksPayloadTemplatesRequest{
        NetworkID: "delectus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkWebhooksPayloadTemplates200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkWebhooksWebhookTest

Return the status of a webhook test for a network

### Example Usage

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
    res, err := s.Configure.GetNetworkWebhooksWebhookTest(ctx, operations.GetNetworkWebhooksWebhookTestRequest{
        NetworkID: "rerum",
        WebhookTestID: "voluptate",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkWebhooksWebhookTest200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkWirelessAlternateManagementInterface

Return alternate management interface and devices with IP assigned

### Example Usage

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
    res, err := s.Configure.GetNetworkWirelessAlternateManagementInterface(ctx, operations.GetNetworkWirelessAlternateManagementInterfaceRequest{
        NetworkID: "perferendis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkWirelessAlternateManagementInterface200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkWirelessBilling

Return the billing settings of this network

### Example Usage

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
    res, err := s.Configure.GetNetworkWirelessBilling(ctx, operations.GetNetworkWirelessBillingRequest{
        NetworkID: "maiores",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkWirelessBilling200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkWirelessBluetoothSettings

Return the Bluetooth settings for a network. <a href="https://documentation.meraki.com/MR/Bluetooth/Bluetooth_Low_Energy_(BLE)">Bluetooth settings</a> must be enabled on the network.

### Example Usage

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
    res, err := s.Configure.GetNetworkWirelessBluetoothSettings(ctx, operations.GetNetworkWirelessBluetoothSettingsRequest{
        NetworkID: "harum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkWirelessBluetoothSettings200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkWirelessRfProfile

Return a RF profile

### Example Usage

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
    res, err := s.Configure.GetNetworkWirelessRfProfile(ctx, operations.GetNetworkWirelessRfProfileRequest{
        NetworkID: "ratione",
        RfProfileID: "molestias",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkWirelessRfProfile200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkWirelessRfProfiles

List the non-basic RF profiles for this network

### Example Usage

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
    res, err := s.Configure.GetNetworkWirelessRfProfiles(ctx, operations.GetNetworkWirelessRfProfilesRequest{
        IncludeTemplateProfiles: sdk.Bool(false),
        NetworkID: "odio",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkWirelessRfProfiles200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkWirelessSettings

Return the wireless settings for a network

### Example Usage

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
    res, err := s.Configure.GetNetworkWirelessSettings(ctx, operations.GetNetworkWirelessSettingsRequest{
        NetworkID: "non",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkWirelessSettings200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkWirelessSsid

Return a single MR SSID

### Example Usage

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
    res, err := s.Configure.GetNetworkWirelessSsid(ctx, operations.GetNetworkWirelessSsidRequest{
        NetworkID: "magni",
        Number: "sint",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkWirelessSsid200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkWirelessSsidBonjourForwarding

List the Bonjour forwarding setting and rules for the SSID

### Example Usage

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
    res, err := s.Configure.GetNetworkWirelessSsidBonjourForwarding(ctx, operations.GetNetworkWirelessSsidBonjourForwardingRequest{
        NetworkID: "consequatur",
        Number: "illum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkWirelessSsidBonjourForwarding200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkWirelessSsidDeviceTypeGroupPolicies

List the device type group policies for the SSID

### Example Usage

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
    res, err := s.Configure.GetNetworkWirelessSsidDeviceTypeGroupPolicies(ctx, operations.GetNetworkWirelessSsidDeviceTypeGroupPoliciesRequest{
        NetworkID: "adipisci",
        Number: "dolorem",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkWirelessSsidDeviceTypeGroupPolicies200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkWirelessSsidEapOverride

Return the EAP overridden parameters for an SSID

### Example Usage

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
    res, err := s.Configure.GetNetworkWirelessSsidEapOverride(ctx, operations.GetNetworkWirelessSsidEapOverrideRequest{
        NetworkID: "ex",
        Number: "quis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkWirelessSsidEapOverride200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkWirelessSsidFirewallL3FirewallRules

Return the L3 firewall rules for an SSID on an MR network

### Example Usage

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
    res, err := s.Configure.GetNetworkWirelessSsidFirewallL3FirewallRules(ctx, operations.GetNetworkWirelessSsidFirewallL3FirewallRulesRequest{
        NetworkID: "eum",
        Number: "et",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkWirelessSsidFirewallL3FirewallRules200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkWirelessSsidFirewallL7FirewallRules

Return the L7 firewall rules for an SSID on an MR network

### Example Usage

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
    res, err := s.Configure.GetNetworkWirelessSsidFirewallL7FirewallRules(ctx, operations.GetNetworkWirelessSsidFirewallL7FirewallRulesRequest{
        NetworkID: "officiis",
        Number: "quo",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkWirelessSsidFirewallL7FirewallRules200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkWirelessSsidHotspot20

Return the Hotspot 2.0 settings for an SSID

### Example Usage

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
    res, err := s.Configure.GetNetworkWirelessSsidHotspot20(ctx, operations.GetNetworkWirelessSsidHotspot20Request{
        NetworkID: "culpa",
        Number: "architecto",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkWirelessSsidHotspot20200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkWirelessSsidIdentityPsk

Return an Identity PSK

### Example Usage

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
    res, err := s.Configure.GetNetworkWirelessSsidIdentityPsk(ctx, operations.GetNetworkWirelessSsidIdentityPskRequest{
        IdentityPskID: "iure",
        NetworkID: "eveniet",
        Number: "doloribus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkWirelessSsidIdentityPsk200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkWirelessSsidIdentityPsks

List all Identity PSKs in a wireless network

### Example Usage

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
    res, err := s.Configure.GetNetworkWirelessSsidIdentityPsks(ctx, operations.GetNetworkWirelessSsidIdentityPsksRequest{
        NetworkID: "praesentium",
        Number: "iste",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkWirelessSsidIdentityPsks200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkWirelessSsidSchedules

List the outage schedule for the SSID

### Example Usage

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
    res, err := s.Configure.GetNetworkWirelessSsidSchedules(ctx, operations.GetNetworkWirelessSsidSchedulesRequest{
        NetworkID: "tempora",
        Number: "ad",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkWirelessSsidSchedules200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkWirelessSsidSplashSettings

Display the splash page settings for the given SSID

### Example Usage

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
    res, err := s.Configure.GetNetworkWirelessSsidSplashSettings(ctx, operations.GetNetworkWirelessSsidSplashSettingsRequest{
        NetworkID: "ab",
        Number: "harum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkWirelessSsidSplashSettings200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkWirelessSsidTrafficShapingRules

Display the traffic shaping settings for a SSID on an MR network

### Example Usage

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
    res, err := s.Configure.GetNetworkWirelessSsidTrafficShapingRules(ctx, operations.GetNetworkWirelessSsidTrafficShapingRulesRequest{
        NetworkID: "facere",
        Number: "ducimus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkWirelessSsidTrafficShapingRules200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkWirelessSsidVpn

List the VPN settings for the SSID.

### Example Usage

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
    res, err := s.Configure.GetNetworkWirelessSsidVpn(ctx, operations.GetNetworkWirelessSsidVpnRequest{
        NetworkID: "nisi",
        Number: "accusamus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkWirelessSsidVpn200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkWirelessSsids

List the MR SSIDs in a network

### Example Usage

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
    res, err := s.Configure.GetNetworkWirelessSsids(ctx, operations.GetNetworkWirelessSsidsRequest{
        NetworkID: "officiis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkWirelessSsids200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetOrganization

Return an organization

### Example Usage

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
    res, err := s.Configure.GetOrganization(ctx, operations.GetOrganizationRequest{
        OrganizationID: "necessitatibus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganization200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetOrganizationActionBatch

Return an action batch

### Example Usage

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
    res, err := s.Configure.GetOrganizationActionBatch(ctx, operations.GetOrganizationActionBatchRequest{
        ActionBatchID: "nam",
        OrganizationID: "nemo",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationActionBatch200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetOrganizationActionBatches

Return the list of action batches in the organization

### Example Usage

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
    res, err := s.Configure.GetOrganizationActionBatches(ctx, operations.GetOrganizationActionBatchesRequest{
        OrganizationID: "veritatis",
        Status: operations.GetOrganizationActionBatchesStatusEnumFailed.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationActionBatches200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetOrganizationAdaptivePolicyACL

Returns the adaptive policy ACL information

### Example Usage

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
    res, err := s.Configure.GetOrganizationAdaptivePolicyACL(ctx, operations.GetOrganizationAdaptivePolicyACLRequest{
        ACLID: "impedit",
        OrganizationID: "modi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationAdaptivePolicyACL200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetOrganizationAdaptivePolicyAcls

List adaptive policy ACLs in a organization

### Example Usage

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
    res, err := s.Configure.GetOrganizationAdaptivePolicyAcls(ctx, operations.GetOrganizationAdaptivePolicyAclsRequest{
        OrganizationID: "possimus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationAdaptivePolicyAcls200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetOrganizationAdaptivePolicyGroup

Returns an adaptive policy group

### Example Usage

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
    res, err := s.Configure.GetOrganizationAdaptivePolicyGroup(ctx, operations.GetOrganizationAdaptivePolicyGroupRequest{
        ID: "a1fad355-12f0-46d4-a5b7-2f0f548568a0",
        OrganizationID: "incidunt",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationAdaptivePolicyGroup200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetOrganizationAdaptivePolicyGroups

List adaptive policy groups in a organization

### Example Usage

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
    res, err := s.Configure.GetOrganizationAdaptivePolicyGroups(ctx, operations.GetOrganizationAdaptivePolicyGroupsRequest{
        OrganizationID: "dolores",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationAdaptivePolicyGroups200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetOrganizationAdaptivePolicyPolicies

List adaptive policies in an organization

### Example Usage

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
    res, err := s.Configure.GetOrganizationAdaptivePolicyPolicies(ctx, operations.GetOrganizationAdaptivePolicyPoliciesRequest{
        OrganizationID: "labore",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationAdaptivePolicyPolicies200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetOrganizationAdaptivePolicyPolicy

Return an adaptive policy

### Example Usage

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
    res, err := s.Configure.GetOrganizationAdaptivePolicyPolicy(ctx, operations.GetOrganizationAdaptivePolicyPolicyRequest{
        ID: "e00a1d6e-b943-4464-9d03-084fbba5ccef",
        OrganizationID: "tenetur",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationAdaptivePolicyPolicy200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetOrganizationAdaptivePolicySettings

Returns global adaptive policy settings in an organization

### Example Usage

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
    res, err := s.Configure.GetOrganizationAdaptivePolicySettings(ctx, operations.GetOrganizationAdaptivePolicySettingsRequest{
        OrganizationID: "ipsam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationAdaptivePolicySettings200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetOrganizationAdmins

List the dashboard administrators in this organization

### Example Usage

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
    res, err := s.Configure.GetOrganizationAdmins(ctx, operations.GetOrganizationAdminsRequest{
        OrganizationID: "quod",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationAdmins200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetOrganizationAlertsProfiles

List all organization-wide alert configurations

### Example Usage

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
    res, err := s.Configure.GetOrganizationAlertsProfiles(ctx, operations.GetOrganizationAlertsProfilesRequest{
        OrganizationID: "facilis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationAlertsProfiles200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetOrganizationApplianceSecurityIntrusion

Returns all supported intrusion settings for an organization

### Example Usage

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
    res, err := s.Configure.GetOrganizationApplianceSecurityIntrusion(ctx, operations.GetOrganizationApplianceSecurityIntrusionRequest{
        OrganizationID: "doloremque",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationApplianceSecurityIntrusion200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetOrganizationApplianceVPNThirdPartyVPNPeers

Return the third party VPN peers for an organization

### Example Usage

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
    res, err := s.Configure.GetOrganizationApplianceVPNThirdPartyVPNPeers(ctx, operations.GetOrganizationApplianceVPNThirdPartyVPNPeersRequest{
        OrganizationID: "illo",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationApplianceVPNThirdPartyVPNPeers200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetOrganizationApplianceVpnVpnFirewallRules

Return the firewall rules for an organization's site-to-site VPN

### Example Usage

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
    res, err := s.Configure.GetOrganizationApplianceVpnVpnFirewallRules(ctx, operations.GetOrganizationApplianceVpnVpnFirewallRulesRequest{
        OrganizationID: "reiciendis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationApplianceVpnVpnFirewallRules200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetOrganizationBrandingPolicies

List the branding policies of an organization

### Example Usage

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
    res, err := s.Configure.GetOrganizationBrandingPolicies(ctx, operations.GetOrganizationBrandingPoliciesRequest{
        OrganizationID: "debitis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationBrandingPolicies200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetOrganizationBrandingPoliciesPriorities

Return the branding policy IDs of an organization in priority order. IDs are ordered in ascending order of priority (IDs later in the array have higher priority).

### Example Usage

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
    res, err := s.Configure.GetOrganizationBrandingPoliciesPriorities(ctx, operations.GetOrganizationBrandingPoliciesPrioritiesRequest{
        OrganizationID: "enim",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationBrandingPoliciesPriorities200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetOrganizationBrandingPolicy

Return a branding policy

### Example Usage

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
    res, err := s.Configure.GetOrganizationBrandingPolicy(ctx, operations.GetOrganizationBrandingPolicyRequest{
        BrandingPolicyID: "quasi",
        OrganizationID: "accusamus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationBrandingPolicy200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetOrganizationCameraCustomAnalyticsArtifact

Get Custom Analytics Artifact

### Example Usage

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
    res, err := s.Configure.GetOrganizationCameraCustomAnalyticsArtifact(ctx, operations.GetOrganizationCameraCustomAnalyticsArtifactRequest{
        ArtifactID: "ipsam",
        OrganizationID: "aspernatur",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationCameraCustomAnalyticsArtifact200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetOrganizationCameraCustomAnalyticsArtifacts

List Custom Analytics Artifacts

### Example Usage

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
    res, err := s.Configure.GetOrganizationCameraCustomAnalyticsArtifacts(ctx, operations.GetOrganizationCameraCustomAnalyticsArtifactsRequest{
        OrganizationID: "atque",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationCameraCustomAnalyticsArtifacts200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetOrganizationCameraOnboardingStatuses

Fetch onboarding status of cameras

### Example Usage

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
    res, err := s.Configure.GetOrganizationCameraOnboardingStatuses(ctx, operations.GetOrganizationCameraOnboardingStatusesRequest{
        NetworkIds: []string{
            "eius",
            "ad",
            "mollitia",
        },
        OrganizationID: "minus",
        Serials: []string{
            "explicabo",
            "distinctio",
            "praesentium",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationCameraOnboardingStatuses200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetOrganizationClientsSearch

Return the client details in an organization

### Example Usage

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
    res, err := s.Configure.GetOrganizationClientsSearch(ctx, operations.GetOrganizationClientsSearchRequest{
        EndingBefore: sdk.String("ullam"),
        Mac: "maiores",
        OrganizationID: "corrupti",
        PerPage: sdk.Int64(725625),
        StartingAfter: sdk.String("placeat"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationClientsSearch200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetOrganizationConfigTemplate

Return a single configuration template

### Example Usage

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
    res, err := s.Configure.GetOrganizationConfigTemplate(ctx, operations.GetOrganizationConfigTemplateRequest{
        ConfigTemplateID: "explicabo",
        OrganizationID: "placeat",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationConfigTemplate200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetOrganizationConfigTemplateSwitchProfilePort

Return a switch profile port

### Example Usage

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
    res, err := s.Configure.GetOrganizationConfigTemplateSwitchProfilePort(ctx, operations.GetOrganizationConfigTemplateSwitchProfilePortRequest{
        ConfigTemplateID: "animi",
        OrganizationID: "expedita",
        PortID: "laborum",
        ProfileID: "atque",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationConfigTemplateSwitchProfilePort200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetOrganizationConfigTemplateSwitchProfilePorts

Return all the ports of a switch profile

### Example Usage

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
    res, err := s.Configure.GetOrganizationConfigTemplateSwitchProfilePorts(ctx, operations.GetOrganizationConfigTemplateSwitchProfilePortsRequest{
        ConfigTemplateID: "assumenda",
        OrganizationID: "laborum",
        ProfileID: "magnam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationConfigTemplateSwitchProfilePorts200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetOrganizationConfigTemplateSwitchProfiles

List the switch profiles for your switch template configuration

### Example Usage

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
    res, err := s.Configure.GetOrganizationConfigTemplateSwitchProfiles(ctx, operations.GetOrganizationConfigTemplateSwitchProfilesRequest{
        ConfigTemplateID: "veritatis",
        OrganizationID: "fugit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationConfigTemplateSwitchProfiles200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetOrganizationConfigTemplates

List the configuration templates for this organization

### Example Usage

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
    res, err := s.Configure.GetOrganizationConfigTemplates(ctx, operations.GetOrganizationConfigTemplatesRequest{
        OrganizationID: "nihil",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationConfigTemplates200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetOrganizationDevices

List the devices in an organization

### Example Usage

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
    res, err := s.Configure.GetOrganizationDevices(ctx, operations.GetOrganizationDevicesRequest{
        ConfigurationUpdatedAfter: sdk.String("illum"),
        EndingBefore: sdk.String("nulla"),
        Mac: sdk.String("nemo"),
        Macs: []string{
            "iure",
            "hic",
            "sapiente",
        },
        Model: sdk.String("eius"),
        Models: []string{
            "quasi",
            "inventore",
        },
        Name: sdk.String("Alfonso Bosco"),
        NetworkIds: []string{
            "numquam",
            "rerum",
        },
        OrganizationID: "atque",
        PerPage: sdk.Int64(396085),
        ProductTypes: []GetOrganizationDevicesProductTypesEnum{
            operations.GetOrganizationDevicesProductTypesEnumWireless,
            operations.GetOrganizationDevicesProductTypesEnumSystemsManager,
            operations.GetOrganizationDevicesProductTypesEnumSystemsManager,
            operations.GetOrganizationDevicesProductTypesEnumSensor,
        },
        SensorAlertProfileIds: []string{
            "voluptatibus",
            "nihil",
        },
        SensorMetrics: []string{
            "nam",
            "incidunt",
        },
        Serial: sdk.String("deleniti"),
        Serials: []string{
            "totam",
            "soluta",
        },
        StartingAfter: sdk.String("quibusdam"),
        Tags: []string{
            "mollitia",
            "autem",
        },
        TagsFilterType: operations.GetOrganizationDevicesTagsFilterTypeEnumWithAnyTags.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationDevices200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetOrganizationEarlyAccessFeatures

List the available early access features for organization

### Example Usage

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
    res, err := s.Configure.GetOrganizationEarlyAccessFeatures(ctx, operations.GetOrganizationEarlyAccessFeaturesRequest{
        OrganizationID: "perferendis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationEarlyAccessFeatures200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetOrganizationEarlyAccessFeaturesOptIn

Show an early access feature opt-in for an organization

### Example Usage

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
    res, err := s.Configure.GetOrganizationEarlyAccessFeaturesOptIn(ctx, operations.GetOrganizationEarlyAccessFeaturesOptInRequest{
        OptInID: "tempora",
        OrganizationID: "aliquam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationEarlyAccessFeaturesOptIn200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetOrganizationEarlyAccessFeaturesOptIns

List the early access feature opt-ins for an organization

### Example Usage

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
    res, err := s.Configure.GetOrganizationEarlyAccessFeaturesOptIns(ctx, operations.GetOrganizationEarlyAccessFeaturesOptInsRequest{
        OrganizationID: "architecto",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationEarlyAccessFeaturesOptIns200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetOrganizationFirmwareUpgrades

Get firmware upgrade information for an organization

### Example Usage

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
    res, err := s.Configure.GetOrganizationFirmwareUpgrades(ctx, operations.GetOrganizationFirmwareUpgradesRequest{
        OrganizationID: "nulla",
        ProductType: []string{
            "maxime",
        },
        Status: []string{
            "soluta",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationFirmwareUpgrades200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetOrganizationFirmwareUpgradesByDevice

Get firmware upgrade status for the filtered devices

### Example Usage

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
    res, err := s.Configure.GetOrganizationFirmwareUpgradesByDevice(ctx, operations.GetOrganizationFirmwareUpgradesByDeviceRequest{
        EndingBefore: sdk.String("quos"),
        FirmwareUpgradeBatchIds: []string{
            "laudantium",
        },
        FirmwareUpgradeIds: []string{
            "perspiciatis",
        },
        Macs: []string{
            "nesciunt",
            "molestiae",
        },
        NetworkIds: []string{
            "eveniet",
        },
        OrganizationID: "ipsa",
        PerPage: sdk.Int64(384630),
        Serials: []string{
            "labore",
        },
        StartingAfter: sdk.String("ullam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationFirmwareUpgradesByDevice200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetOrganizationInsightApplications

List all Insight tracked applications

### Example Usage

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
    res, err := s.Configure.GetOrganizationInsightApplications(ctx, operations.GetOrganizationInsightApplicationsRequest{
        OrganizationID: "excepturi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationInsightApplications200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetOrganizationInsightMonitoredMediaServer

Return a monitored media server for this organization. Only valid for organizations with Meraki Insight.

### Example Usage

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
    res, err := s.Configure.GetOrganizationInsightMonitoredMediaServer(ctx, operations.GetOrganizationInsightMonitoredMediaServerRequest{
        MonitoredMediaServerID: "soluta",
        OrganizationID: "voluptates",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationInsightMonitoredMediaServer200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetOrganizationInsightMonitoredMediaServers

List the monitored media servers for this organization. Only valid for organizations with Meraki Insight.

### Example Usage

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
    res, err := s.Configure.GetOrganizationInsightMonitoredMediaServers(ctx, operations.GetOrganizationInsightMonitoredMediaServersRequest{
        OrganizationID: "rerum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationInsightMonitoredMediaServers200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetOrganizationInventoryDevice

Return a single device from the inventory of an organization

### Example Usage

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
    res, err := s.Configure.GetOrganizationInventoryDevice(ctx, operations.GetOrganizationInventoryDeviceRequest{
        OrganizationID: "cum",
        Serial: "est",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationInventoryDevice200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetOrganizationInventoryDevices

Return the device inventory for an organization

### Example Usage

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
    res, err := s.Configure.GetOrganizationInventoryDevices(ctx, operations.GetOrganizationInventoryDevicesRequest{
        EndingBefore: sdk.String("fugiat"),
        Macs: []string{
            "qui",
        },
        Models: []string{
            "sunt",
            "quis",
            "corrupti",
            "iure",
        },
        NetworkIds: []string{
            "quod",
            "a",
            "et",
        },
        OrderNumbers: []string{
            "eos",
            "exercitationem",
        },
        OrganizationID: "minima",
        PerPage: sdk.Int64(515854),
        ProductTypes: []GetOrganizationInventoryDevicesProductTypesEnum{
            operations.GetOrganizationInventoryDevicesProductTypesEnumSwitch,
            operations.GetOrganizationInventoryDevicesProductTypesEnumSwitch,
            operations.GetOrganizationInventoryDevicesProductTypesEnumSensor,
            operations.GetOrganizationInventoryDevicesProductTypesEnumCellularGateway,
        },
        Search: sdk.String("nam"),
        Serials: []string{
            "suscipit",
            "porro",
            "nulla",
            "consequatur",
        },
        StartingAfter: sdk.String("qui"),
        Tags: []string{
            "enim",
            "vel",
        },
        TagsFilterType: operations.GetOrganizationInventoryDevicesTagsFilterTypeEnumWithAnyTags.ToPointer(),
        UsedState: operations.GetOrganizationInventoryDevicesUsedStateEnumUnused.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationInventoryDevices200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetOrganizationInventoryOnboardingCloudMonitoringImports

Check the status of a committed Import operation

### Example Usage

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
    res, err := s.Configure.GetOrganizationInventoryOnboardingCloudMonitoringImports(ctx, operations.GetOrganizationInventoryOnboardingCloudMonitoringImportsRequest{
        ImportIds: []string{
            "ut",
            "est",
        },
        OrganizationID: "fuga",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationInventoryOnboardingCloudMonitoringImports200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetOrganizationInventoryOnboardingCloudMonitoringNetworks

Returns list of networks eligible for adding cloud monitored device

### Example Usage

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
    res, err := s.Configure.GetOrganizationInventoryOnboardingCloudMonitoringNetworks(ctx, operations.GetOrganizationInventoryOnboardingCloudMonitoringNetworksRequest{
        DeviceType: operations.GetOrganizationInventoryOnboardingCloudMonitoringNetworksDeviceTypeEnumSwitch,
        EndingBefore: sdk.String("adipisci"),
        OrganizationID: "ratione",
        PerPage: sdk.Int64(740331),
        StartingAfter: sdk.String("magnam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationInventoryOnboardingCloudMonitoringNetworks202ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetOrganizationLicense

Display a license

### Example Usage

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
    res, err := s.Configure.GetOrganizationLicense(ctx, operations.GetOrganizationLicenseRequest{
        LicenseID: "nihil",
        OrganizationID: "officiis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationLicense200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetOrganizationLicenses

List the licenses for an organization

### Example Usage

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
    res, err := s.Configure.GetOrganizationLicenses(ctx, operations.GetOrganizationLicensesRequest{
        DeviceSerial: sdk.String("inventore"),
        EndingBefore: sdk.String("esse"),
        NetworkID: sdk.String("ex"),
        OrganizationID: "amet",
        PerPage: sdk.Int64(791516),
        StartingAfter: sdk.String("ad"),
        State: operations.GetOrganizationLicensesStateEnumActive.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationLicenses200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetOrganizationLicensingCotermLicenses

List the licenses in a coterm organization

### Example Usage

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
    res, err := s.Configure.GetOrganizationLicensingCotermLicenses(ctx, operations.GetOrganizationLicensingCotermLicensesRequest{
        EndingBefore: sdk.String("alias"),
        Expired: sdk.Bool(false),
        Invalidated: sdk.Bool(false),
        OrganizationID: "blanditiis",
        PerPage: sdk.Int64(755809),
        StartingAfter: sdk.String("qui"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationLicensingCotermLicenses200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetOrganizationLoginSecurity

Returns the login security settings for an organization.

### Example Usage

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
    res, err := s.Configure.GetOrganizationLoginSecurity(ctx, operations.GetOrganizationLoginSecurityRequest{
        OrganizationID: "amet",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationLoginSecurity200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetOrganizationNetworks

List the networks that the user has privileges on in an organization

### Example Usage

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
    res, err := s.Configure.GetOrganizationNetworks(ctx, operations.GetOrganizationNetworksRequest{
        ConfigTemplateID: sdk.String("recusandae"),
        EndingBefore: sdk.String("perspiciatis"),
        IsBoundToConfigTemplate: sdk.Bool(false),
        OrganizationID: "corrupti",
        PerPage: sdk.Int64(25109),
        StartingAfter: sdk.String("magni"),
        Tags: []string{
            "quas",
            "ratione",
            "sapiente",
            "alias",
        },
        TagsFilterType: operations.GetOrganizationNetworksTagsFilterTypeEnumWithAnyTags.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationNetworks200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetOrganizationPolicyObject

Shows details of a Policy Object.

### Example Usage

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
    res, err := s.Configure.GetOrganizationPolicyObject(ctx, operations.GetOrganizationPolicyObjectRequest{
        OrganizationID: "magnam",
        PolicyObjectID: "quis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationPolicyObject200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetOrganizationPolicyObjects

Lists Policy Objects belonging to the organization.

### Example Usage

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
    res, err := s.Configure.GetOrganizationPolicyObjects(ctx, operations.GetOrganizationPolicyObjectsRequest{
        EndingBefore: sdk.String("repudiandae"),
        OrganizationID: "soluta",
        PerPage: sdk.Int64(262614),
        StartingAfter: sdk.String("fuga"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationPolicyObjects200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetOrganizationPolicyObjectsGroup

Shows details of a Policy Object Group.

### Example Usage

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
    res, err := s.Configure.GetOrganizationPolicyObjectsGroup(ctx, operations.GetOrganizationPolicyObjectsGroupRequest{
        OrganizationID: "blanditiis",
        PolicyObjectGroupID: "nobis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationPolicyObjectsGroup200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetOrganizationPolicyObjectsGroups

Lists Policy Object Groups belonging to the organization.

### Example Usage

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
    res, err := s.Configure.GetOrganizationPolicyObjectsGroups(ctx, operations.GetOrganizationPolicyObjectsGroupsRequest{
        EndingBefore: sdk.String("ea"),
        OrganizationID: "iusto",
        PerPage: sdk.Int64(294249),
        StartingAfter: sdk.String("repudiandae"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationPolicyObjectsGroups200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetOrganizationSaml

Returns the SAML SSO enabled settings for an organization.

### Example Usage

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
    res, err := s.Configure.GetOrganizationSaml(ctx, operations.GetOrganizationSamlRequest{
        OrganizationID: "recusandae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationSaml200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetOrganizationSamlIdp

Get a SAML IdP from your organization.

### Example Usage

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
    res, err := s.Configure.GetOrganizationSamlIdp(ctx, operations.GetOrganizationSamlIdpRequest{
        IdpID: "ipsam",
        OrganizationID: "quisquam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationSamlIdp200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetOrganizationSamlIdps

List the SAML IdPs in your organization.

### Example Usage

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
    res, err := s.Configure.GetOrganizationSamlIdps(ctx, operations.GetOrganizationSamlIdpsRequest{
        OrganizationID: "delectus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationSamlIdps200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetOrganizationSamlRole

Return a SAML role

### Example Usage

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
    res, err := s.Configure.GetOrganizationSamlRole(ctx, operations.GetOrganizationSamlRoleRequest{
        OrganizationID: "optio",
        SamlRoleID: "sunt",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationSamlRole200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetOrganizationSamlRoles

List the SAML roles for this organization

### Example Usage

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
    res, err := s.Configure.GetOrganizationSamlRoles(ctx, operations.GetOrganizationSamlRolesRequest{
        OrganizationID: "rem",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationSamlRoles200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetOrganizationSmApnsCert

Get the organization's APNS certificate

### Example Usage

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
    res, err := s.Configure.GetOrganizationSmApnsCert(ctx, operations.GetOrganizationSmApnsCertRequest{
        OrganizationID: "itaque",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationSmApnsCert200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetOrganizationSmVppAccount

Get a hash containing the unparsed token of the VPP account with the given ID

### Example Usage

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
    res, err := s.Configure.GetOrganizationSmVppAccount(ctx, operations.GetOrganizationSmVppAccountRequest{
        OrganizationID: "assumenda",
        VppAccountID: "optio",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationSmVppAccount200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetOrganizationSmVppAccounts

List the VPP accounts in the organization

### Example Usage

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
    res, err := s.Configure.GetOrganizationSmVppAccounts(ctx, operations.GetOrganizationSmVppAccountsRequest{
        OrganizationID: "esse",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationSmVppAccounts200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetOrganizationSnmp

Return the SNMP settings for an organization

### Example Usage

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
    res, err := s.Configure.GetOrganizationSnmp(ctx, operations.GetOrganizationSnmpRequest{
        OrganizationID: "a",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationSnmp200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetOrganizationSwitchPortsBySwitch

List the switchports in an organization by switch

### Example Usage

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
    res, err := s.Configure.GetOrganizationSwitchPortsBySwitch(ctx, operations.GetOrganizationSwitchPortsBySwitchRequest{
        ConfigurationUpdatedAfter: sdk.String("quam"),
        EndingBefore: sdk.String("quos"),
        Mac: sdk.String("dignissimos"),
        Macs: []string{
            "adipisci",
            "magni",
            "recusandae",
            "voluptatem",
        },
        Name: sdk.String("Susie Donnelly"),
        NetworkIds: []string{
            "facere",
            "quae",
            "cumque",
            "ullam",
        },
        OrganizationID: "vel",
        PerPage: sdk.Int64(444305),
        PortProfileIds: []string{
            "recusandae",
        },
        Serial: sdk.String("voluptatibus"),
        Serials: []string{
            "aspernatur",
            "harum",
        },
        StartingAfter: sdk.String("illum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationSwitchPortsBySwitch200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetOrganizationWirelessDevicesEthernetStatuses

Endpoint to see power status for wireless devices

### Example Usage

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
    res, err := s.Configure.GetOrganizationWirelessDevicesEthernetStatuses(ctx, operations.GetOrganizationWirelessDevicesEthernetStatusesRequest{
        EndingBefore: sdk.String("dolor"),
        NetworkIds: []string{
            "iste",
            "earum",
            "vitae",
            "impedit",
        },
        OrganizationID: "eligendi",
        PerPage: sdk.Int64(331371),
        StartingAfter: sdk.String("aperiam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationWirelessDevicesEthernetStatuses200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetOrganizations

List the organizations that the user has privileges on

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Configure.GetOrganizations(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizations200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## LockNetworkSmDevices

Lock a set of devices

### Example Usage

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
    res, err := s.Configure.LockNetworkSmDevices(ctx, operations.LockNetworkSmDevicesRequest{
        RequestBody: &operations.LockNetworkSmDevicesRequestBody{
            Ids: []string{
                "repellat",
            },
            Pin: sdk.Int64(377691),
            Scope: []string{
                "nesciunt",
                "iste",
                "distinctio",
                "cumque",
            },
            Serials: []string{
                "alias",
                "deserunt",
                "vel",
                "qui",
            },
            WifiMacs: []string{
                "accusantium",
                "voluptatibus",
                "occaecati",
            },
        },
        NetworkID: "nemo",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LockNetworkSmDevices200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ModifyNetworkSmDevicesTags

Add, delete, or update the tags of a set of devices

### Example Usage

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
    res, err := s.Configure.ModifyNetworkSmDevicesTags(ctx, operations.ModifyNetworkSmDevicesTagsRequest{
        RequestBody: operations.ModifyNetworkSmDevicesTagsRequestBody{
            Ids: []string{
                "reiciendis",
                "nesciunt",
            },
            Scope: []string{
                "nemo",
                "ab",
                "atque",
            },
            Serials: []string{
                "culpa",
                "possimus",
                "molestiae",
            },
            Tags: []string{
                "reiciendis",
                "voluptatum",
                "aperiam",
                "reprehenderit",
            },
            UpdateAction: "animi",
            WifiMacs: []string{
                "eveniet",
                "quae",
                "adipisci",
            },
        },
        NetworkID: "hic",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ModifyNetworkSmDevicesTags200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## MoveNetworkSmDevices

Move a set of devices to a new network

### Example Usage

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
    res, err := s.Configure.MoveNetworkSmDevices(ctx, operations.MoveNetworkSmDevicesRequest{
        RequestBody: operations.MoveNetworkSmDevicesRequestBody{
            Ids: []string{
                "adipisci",
            },
            NewNetwork: "optio",
            Scope: []string{
                "odio",
                "unde",
                "asperiores",
            },
            Serials: []string{
                "provident",
                "fugiat",
                "recusandae",
            },
            WifiMacs: []string{
                "aut",
                "neque",
            },
        },
        NetworkID: "quia",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MoveNetworkSmDevices200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## MoveOrganizationLicenses

Move licenses to another organization. This will also move any devices that the licenses are assigned to

### Example Usage

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
    res, err := s.Configure.MoveOrganizationLicenses(ctx, operations.MoveOrganizationLicensesRequest{
        RequestBody: operations.MoveOrganizationLicensesRequestBody{
            DestOrganizationID: "soluta",
            LicenseIds: []string{
                "qui",
                "commodi",
                "a",
            },
        },
        OrganizationID: "temporibus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MoveOrganizationLicenses200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## MoveOrganizationLicensesSeats

Move SM seats to another organization

### Example Usage

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
    res, err := s.Configure.MoveOrganizationLicensesSeats(ctx, operations.MoveOrganizationLicensesSeatsRequest{
        RequestBody: operations.MoveOrganizationLicensesSeatsRequestBody{
            DestOrganizationID: "sequi",
            LicenseID: "eum",
            SeatCount: 526470,
        },
        OrganizationID: "expedita",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MoveOrganizationLicensesSeats200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## MoveOrganizationLicensingCotermLicenses

Moves a license to a different organization (coterm only)

### Example Usage

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
    res, err := s.Configure.MoveOrganizationLicensingCotermLicenses(ctx, operations.MoveOrganizationLicensingCotermLicensesRequest{
        RequestBody: operations.MoveOrganizationLicensingCotermLicensesRequestBody{
            Destination: operations.MoveOrganizationLicensingCotermLicensesRequestBodyDestination{
                Mode: operations.MoveOrganizationLicensingCotermLicensesRequestBodyDestinationModeEnumRenew.ToPointer(),
                OrganizationID: sdk.String("excepturi"),
            },
            Licenses: []MoveOrganizationLicensingCotermLicensesRequestBodyLicenses{
                operations.MoveOrganizationLicensingCotermLicensesRequestBodyLicenses{
                    Counts: []MoveOrganizationLicensingCotermLicensesRequestBodyLicensesCounts{
                        operations.MoveOrganizationLicensingCotermLicensesRequestBodyLicensesCounts{
                            Count: 385943,
                            Model: "distinctio",
                        },
                    },
                    Key: "quo",
                },
            },
        },
        OrganizationID: "facilis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MoveOrganizationLicensingCotermLicenses200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ProvisionNetworkClients

Provisions a client with a name and policy. Clients can be provisioned before they associate to the network.

### Example Usage

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
    res, err := s.Configure.ProvisionNetworkClients(ctx, operations.ProvisionNetworkClientsRequest{
        RequestBody: operations.ProvisionNetworkClientsRequestBody{
            Clients: []ProvisionNetworkClientsRequestBodyClients{
                operations.ProvisionNetworkClientsRequestBodyClients{
                    Mac: "dicta",
                    Name: sdk.String("Leona Doyle"),
                },
                operations.ProvisionNetworkClientsRequestBodyClients{
                    Mac: "esse",
                    Name: sdk.String("Ms. Wilma Goldner"),
                },
            },
            DevicePolicy: operations.ProvisionNetworkClientsRequestBodyDevicePolicyEnumAllowed,
            GroupPolicyID: sdk.String("veritatis"),
            PoliciesBySecurityAppliance: &operations.ProvisionNetworkClientsRequestBodyPoliciesBySecurityAppliance{
                DevicePolicy: operations.ProvisionNetworkClientsRequestBodyPoliciesBySecurityApplianceDevicePolicyEnumAllowed.ToPointer(),
            },
            PoliciesBySsid: &operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid{
                Zero: &operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid0{
                    DevicePolicy: operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid0DevicePolicyEnumAllowed,
                    GroupPolicyID: sdk.String("recusandae"),
                },
                One: &operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid1{
                    DevicePolicy: operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid1DevicePolicyEnumNormal,
                    GroupPolicyID: sdk.String("quod"),
                },
                Ten: &operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid10{
                    DevicePolicy: operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid10DevicePolicyEnumAllowed,
                    GroupPolicyID: sdk.String("modi"),
                },
                Eleven: &operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid11{
                    DevicePolicy: operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid11DevicePolicyEnumBlocked,
                    GroupPolicyID: sdk.String("rerum"),
                },
                Twelve: &operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid12{
                    DevicePolicy: operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid12DevicePolicyEnumNormal,
                    GroupPolicyID: sdk.String("nemo"),
                },
                Thirteen: &operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid13{
                    DevicePolicy: operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid13DevicePolicyEnumAllowed,
                    GroupPolicyID: sdk.String("vel"),
                },
                Fourteen: &operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid14{
                    DevicePolicy: operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid14DevicePolicyEnumAllowed,
                    GroupPolicyID: sdk.String("facilis"),
                },
                Two: &operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid2{
                    DevicePolicy: operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid2DevicePolicyEnumGroupPolicy,
                    GroupPolicyID: sdk.String("maxime"),
                },
                Three: &operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid3{
                    DevicePolicy: operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid3DevicePolicyEnumGroupPolicy,
                    GroupPolicyID: sdk.String("eius"),
                },
                Four: &operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid4{
                    DevicePolicy: operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid4DevicePolicyEnumGroupPolicy,
                    GroupPolicyID: sdk.String("dolores"),
                },
                Five: &operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid5{
                    DevicePolicy: operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid5DevicePolicyEnumAllowed,
                    GroupPolicyID: sdk.String("reprehenderit"),
                },
                Six: &operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid6{
                    DevicePolicy: operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid6DevicePolicyEnumNormal,
                    GroupPolicyID: sdk.String("non"),
                },
                Seven: &operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid7{
                    DevicePolicy: operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid7DevicePolicyEnumAllowed,
                    GroupPolicyID: sdk.String("maxime"),
                },
                Eight: &operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid8{
                    DevicePolicy: operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid8DevicePolicyEnumAllowed,
                    GroupPolicyID: sdk.String("magni"),
                },
                Nine: &operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid9{
                    DevicePolicy: operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid9DevicePolicyEnumNormal,
                    GroupPolicyID: sdk.String("minima"),
                },
            },
        },
        NetworkID: "ipsam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProvisionNetworkClients201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## RefreshNetworkSmDeviceDetails

Refresh the details of a device

### Example Usage

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
    res, err := s.Configure.RefreshNetworkSmDeviceDetails(ctx, operations.RefreshNetworkSmDeviceDetailsRequest{
        DeviceID: "sequi",
        NetworkID: "quaerat",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ReleaseFromOrganizationInventory

Release a list of claimed devices from an organization.

### Example Usage

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
    res, err := s.Configure.ReleaseFromOrganizationInventory(ctx, operations.ReleaseFromOrganizationInventoryRequest{
        RequestBody: &operations.ReleaseFromOrganizationInventoryRequestBody{
            Serials: []string{
                "incidunt",
            },
        },
        OrganizationID: "cupiditate",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ReleaseFromOrganizationInventory200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## RemoveNetworkDevices

Remove a single device

### Example Usage

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
    res, err := s.Configure.RemoveNetworkDevices(ctx, operations.RemoveNetworkDevicesRequest{
        RequestBody: operations.RemoveNetworkDevicesRequestBody{
            Serial: "minima",
        },
        NetworkID: "quo",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## RemoveNetworkSwitchStack

Remove a switch from a stack

### Example Usage

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
    res, err := s.Configure.RemoveNetworkSwitchStack(ctx, operations.RemoveNetworkSwitchStackRequest{
        RequestBody: operations.RemoveNetworkSwitchStackRequestBody{
            Serial: "quis",
        },
        NetworkID: "facere",
        SwitchStackID: "quidem",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RemoveNetworkSwitchStack200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## RenewOrganizationLicensesSeats

Renew SM seats of a license. This will extend the license expiration date of managed SM devices covered by this license

### Example Usage

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
    res, err := s.Configure.RenewOrganizationLicensesSeats(ctx, operations.RenewOrganizationLicensesSeatsRequest{
        RequestBody: operations.RenewOrganizationLicensesSeatsRequestBody{
            LicenseIDToRenew: "harum",
            UnusedLicenseID: "adipisci",
        },
        OrganizationID: "optio",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RenewOrganizationLicensesSeats200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## RollbacksNetworkFirmwareUpgradesStagedEvents

Rollback a Staged Upgrade Event for a network

### Example Usage

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
    res, err := s.Configure.RollbacksNetworkFirmwareUpgradesStagedEvents(ctx, operations.RollbacksNetworkFirmwareUpgradesStagedEventsRequest{
        RequestBody: operations.RollbacksNetworkFirmwareUpgradesStagedEventsRequestBody{
            Reasons: []RollbacksNetworkFirmwareUpgradesStagedEventsRequestBodyReasons{
                operations.RollbacksNetworkFirmwareUpgradesStagedEventsRequestBodyReasons{
                    Category: operations.RollbacksNetworkFirmwareUpgradesStagedEventsRequestBodyReasonsCategoryEnumPerformance,
                    Comment: "quo",
                },
                operations.RollbacksNetworkFirmwareUpgradesStagedEventsRequestBodyReasons{
                    Category: operations.RollbacksNetworkFirmwareUpgradesStagedEventsRequestBodyReasonsCategoryEnumBrokeOldFeatures,
                    Comment: "voluptates",
                },
            },
            Stages: []RollbacksNetworkFirmwareUpgradesStagedEventsRequestBodyStages{
                operations.RollbacksNetworkFirmwareUpgradesStagedEventsRequestBodyStages{
                    Group: &operations.RollbacksNetworkFirmwareUpgradesStagedEventsRequestBodyStagesGroup{
                        ID: "981e8aa2-57dd-4c19-92eb-de64bfcc5469",
                    },
                    Milestones: &operations.RollbacksNetworkFirmwareUpgradesStagedEventsRequestBodyStagesMilestones{
                        ScheduledFor: "nulla",
                    },
                },
                operations.RollbacksNetworkFirmwareUpgradesStagedEventsRequestBodyStages{
                    Group: &operations.RollbacksNetworkFirmwareUpgradesStagedEventsRequestBodyStagesGroup{
                        ID: "4015dfa7-9620-46be-b2b0-a3e42c1aa010",
                    },
                    Milestones: &operations.RollbacksNetworkFirmwareUpgradesStagedEventsRequestBodyStagesMilestones{
                        ScheduledFor: "eveniet",
                    },
                },
            },
        },
        NetworkID: "excepturi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RollbacksNetworkFirmwareUpgradesStagedEvents200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## SplitNetwork

Split a combined network into individual networks for each type of device

### Example Usage

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
    res, err := s.Configure.SplitNetwork(ctx, operations.SplitNetworkRequest{
        NetworkID: "fuga",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SplitNetwork200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## SwapNetworkApplianceWarmSpare

Swap MX primary and warm spare appliances

### Example Usage

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
    res, err := s.Configure.SwapNetworkApplianceWarmSpare(ctx, operations.SwapNetworkApplianceWarmSpareRequest{
        NetworkID: "culpa",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SwapNetworkApplianceWarmSpare200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UnbindNetwork

Unbind a network from a template.

### Example Usage

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
    res, err := s.Configure.UnbindNetwork(ctx, operations.UnbindNetworkRequest{
        RequestBody: &operations.UnbindNetworkRequestBody{
            RetainConfigs: sdk.Bool(false),
        },
        NetworkID: "quo",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UnbindNetwork200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UnenrollNetworkSmDevice

Unenroll a device

### Example Usage

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
    res, err := s.Configure.UnenrollNetworkSmDevice(ctx, operations.UnenrollNetworkSmDeviceRequest{
        DeviceID: "sunt",
        NetworkID: "necessitatibus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UnenrollNetworkSmDevice200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateDevice

Update the attributes of a device

### Example Usage

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
    res, err := s.Configure.UpdateDevice(ctx, operations.UpdateDeviceRequest{
        RequestBody: &operations.UpdateDeviceRequestBody{
            Address: sdk.String("0233 Jast Summit"),
            FloorPlanID: sdk.String("dicta"),
            Lat: sdk.Float32(5559.88),
            Lng: sdk.Float32(9630.94),
            MoveMapMarker: sdk.Bool(false),
            Name: sdk.String("Boyd Marvin"),
            Notes: sdk.String("numquam"),
            SwitchProfileID: sdk.String("nam"),
            Tags: []string{
                "fuga",
                "facere",
                "odit",
                "nam",
            },
        },
        Serial: "asperiores",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateDevice200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateDeviceApplianceUplinksSettings

Update the uplink settings for an MX appliance

### Example Usage

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
    res, err := s.Configure.UpdateDeviceApplianceUplinksSettings(ctx, operations.UpdateDeviceApplianceUplinksSettingsRequest{
        RequestBody: operations.UpdateDeviceApplianceUplinksSettingsRequestBody{
            Interfaces: operations.UpdateDeviceApplianceUplinksSettingsRequestBodyInterfaces{
                Wan1: &operations.UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan1{
                    Enabled: sdk.Bool(false),
                    Pppoe: &operations.UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan1Pppoe{
                        Authentication: &operations.UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan1PppoeAuthentication{
                            Enabled: sdk.Bool(false),
                            Password: sdk.String("quam"),
                            Username: sdk.String("Roy_Jenkins"),
                        },
                        Enabled: sdk.Bool(false),
                    },
                    Svis: &operations.UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan1Svis{
                        Ipv4: &operations.UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan1SvisIpv4{
                            Address: sdk.String("5268 Mills Rapid"),
                            AssignmentMode: operations.UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan1SvisIpv4AssignmentModeEnumDynamic.ToPointer(),
                            Gateway: sdk.String("quasi"),
                            Nameservers: &operations.UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan1SvisIpv4Nameservers{
                                Addresses: []string{
                                    "voluptas",
                                    "quasi",
                                    "magni",
                                    "numquam",
                                },
                            },
                        },
                        Ipv6: &operations.UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan1SvisIpv6{
                            Address: sdk.String("32154 Nya Vista"),
                            AssignmentMode: operations.UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan1SvisIpv6AssignmentModeEnumDynamic.ToPointer(),
                            Gateway: sdk.String("totam"),
                            Nameservers: &operations.UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan1SvisIpv6Nameservers{
                                Addresses: []string{
                                    "eaque",
                                    "sequi",
                                    "fuga",
                                },
                            },
                        },
                    },
                    VlanTagging: &operations.UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan1VlanTagging{
                        Enabled: sdk.Bool(false),
                        VlanID: sdk.Int64(827030),
                    },
                },
                Wan2: &operations.UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2{
                    Enabled: sdk.Bool(false),
                    Pppoe: &operations.UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2Pppoe{
                        Authentication: &operations.UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2PppoeAuthentication{
                            Enabled: sdk.Bool(false),
                            Password: sdk.String("modi"),
                            Username: sdk.String("Cecile_Breitenberg28"),
                        },
                        Enabled: sdk.Bool(false),
                    },
                    Svis: &operations.UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2Svis{
                        Ipv4: &operations.UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2SvisIpv4{
                            Address: sdk.String("81907 Becker Plain"),
                            AssignmentMode: operations.UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2SvisIpv4AssignmentModeEnumDynamic.ToPointer(),
                            Gateway: sdk.String("consequatur"),
                            Nameservers: &operations.UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2SvisIpv4Nameservers{
                                Addresses: []string{
                                    "dolor",
                                },
                            },
                        },
                        Ipv6: &operations.UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2SvisIpv6{
                            Address: sdk.String("711 Mayer River"),
                            AssignmentMode: operations.UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2SvisIpv6AssignmentModeEnumDynamic.ToPointer(),
                            Gateway: sdk.String("dolorum"),
                            Nameservers: &operations.UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2SvisIpv6Nameservers{
                                Addresses: []string{
                                    "aperiam",
                                    "pariatur",
                                },
                            },
                        },
                    },
                    VlanTagging: &operations.UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2VlanTagging{
                        Enabled: sdk.Bool(false),
                        VlanID: sdk.Int64(569839),
                    },
                },
            },
        },
        Serial: "aliquam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateDeviceApplianceUplinksSettings200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateDeviceCameraCustomAnalytics

Update custom analytics settings for a camera

### Example Usage

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
    res, err := s.Configure.UpdateDeviceCameraCustomAnalytics(ctx, operations.UpdateDeviceCameraCustomAnalyticsRequest{
        RequestBody: &operations.UpdateDeviceCameraCustomAnalyticsRequestBody{
            ArtifactID: sdk.String("voluptatibus"),
            Enabled: sdk.Bool(false),
            Parameters: []UpdateDeviceCameraCustomAnalyticsRequestBodyParameters{
                operations.UpdateDeviceCameraCustomAnalyticsRequestBodyParameters{
                    Name: "Miss Gabriel Green",
                    Value: "odio",
                },
                operations.UpdateDeviceCameraCustomAnalyticsRequestBodyParameters{
                    Name: "Keith Wiza",
                    Value: "maxime",
                },
                operations.UpdateDeviceCameraCustomAnalyticsRequestBodyParameters{
                    Name: "Dr. Betty Hegmann",
                    Value: "quos",
                },
            },
        },
        Serial: "pariatur",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateDeviceCameraCustomAnalytics200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateDeviceCameraQualityAndRetention

Update quality and retention settings for the given camera

### Example Usage

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
    res, err := s.Configure.UpdateDeviceCameraQualityAndRetention(ctx, operations.UpdateDeviceCameraQualityAndRetentionRequest{
        RequestBody: &operations.UpdateDeviceCameraQualityAndRetentionRequestBody{
            AudioRecordingEnabled: sdk.Bool(false),
            MotionBasedRetentionEnabled: sdk.Bool(false),
            MotionDetectorVersion: operations.UpdateDeviceCameraQualityAndRetentionRequestBodyMotionDetectorVersionEnumTwo.ToPointer(),
            ProfileID: sdk.String("sequi"),
            Quality: operations.UpdateDeviceCameraQualityAndRetentionRequestBodyQualityEnumStandard.ToPointer(),
            Resolution: operations.UpdateDeviceCameraQualityAndRetentionRequestBodyResolutionEnumThreeThousandEightHundredAndFortyx2160.ToPointer(),
            RestrictedBandwidthModeEnabled: sdk.Bool(false),
        },
        Serial: "ab",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateDeviceCameraQualityAndRetention200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateDeviceCameraSense

Update sense settings for the given camera

### Example Usage

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
    res, err := s.Configure.UpdateDeviceCameraSense(ctx, operations.UpdateDeviceCameraSenseRequest{
        RequestBody: &operations.UpdateDeviceCameraSenseRequestBody{
            AudioDetection: &operations.UpdateDeviceCameraSenseRequestBodyAudioDetection{
                Enabled: sdk.Bool(false),
            },
            DetectionModelID: sdk.String("praesentium"),
            MqttBrokerID: sdk.String("nostrum"),
            SenseEnabled: sdk.Bool(false),
        },
        Serial: "labore",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateDeviceCameraSense200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateDeviceCameraVideoSettings

Update video settings for the given camera

### Example Usage

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
    res, err := s.Configure.UpdateDeviceCameraVideoSettings(ctx, operations.UpdateDeviceCameraVideoSettingsRequest{
        RequestBody: &operations.UpdateDeviceCameraVideoSettingsRequestBody{
            ExternalRtspEnabled: sdk.Bool(false),
        },
        Serial: "iusto",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateDeviceCameraVideoSettings200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateDeviceCameraWirelessProfiles

Assign wireless profiles to the given camera. Incremental updates are not supported, all profile assignment need to be supplied at once.

### Example Usage

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
    res, err := s.Configure.UpdateDeviceCameraWirelessProfiles(ctx, operations.UpdateDeviceCameraWirelessProfilesRequest{
        RequestBody: operations.UpdateDeviceCameraWirelessProfilesRequestBody{
            Ids: operations.UpdateDeviceCameraWirelessProfilesRequestBodyIds{
                Backup: sdk.String("sunt"),
                Primary: sdk.String("tenetur"),
                Secondary: sdk.String("occaecati"),
            },
        },
        Serial: "necessitatibus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateDeviceCameraWirelessProfiles200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateDeviceCellularGatewayLan

Update the LAN Settings for a single MG.

### Example Usage

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
    res, err := s.Configure.UpdateDeviceCellularGatewayLan(ctx, operations.UpdateDeviceCellularGatewayLanRequest{
        RequestBody: &operations.UpdateDeviceCellularGatewayLanRequestBody{
            FixedIPAssignments: []UpdateDeviceCellularGatewayLanRequestBodyFixedIPAssignments{
                operations.UpdateDeviceCellularGatewayLanRequestBodyFixedIPAssignments{
                    IP: "autem",
                    Mac: "natus",
                    Name: sdk.String("Vera Jakubowski"),
                },
                operations.UpdateDeviceCellularGatewayLanRequestBodyFixedIPAssignments{
                    IP: "tempore",
                    Mac: "saepe",
                    Name: sdk.String("Eleanor Glover"),
                },
                operations.UpdateDeviceCellularGatewayLanRequestBodyFixedIPAssignments{
                    IP: "similique",
                    Mac: "porro",
                    Name: sdk.String("Wm Dietrich"),
                },
                operations.UpdateDeviceCellularGatewayLanRequestBodyFixedIPAssignments{
                    IP: "totam",
                    Mac: "dignissimos",
                    Name: sdk.String("Angelica Huel DVM"),
                },
            },
            ReservedIPRanges: []UpdateDeviceCellularGatewayLanRequestBodyReservedIPRanges{
                operations.UpdateDeviceCellularGatewayLanRequestBodyReservedIPRanges{
                    Comment: "suscipit",
                    End: "perferendis",
                    Start: "nisi",
                },
                operations.UpdateDeviceCellularGatewayLanRequestBodyReservedIPRanges{
                    Comment: "quibusdam",
                    End: "alias",
                    Start: "voluptate",
                },
                operations.UpdateDeviceCellularGatewayLanRequestBodyReservedIPRanges{
                    Comment: "repellendus",
                    End: "qui",
                    Start: "deserunt",
                },
                operations.UpdateDeviceCellularGatewayLanRequestBodyReservedIPRanges{
                    Comment: "error",
                    End: "impedit",
                    Start: "laudantium",
                },
            },
        },
        Serial: "nihil",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateDeviceCellularGatewayLan200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateDeviceCellularGatewayPortForwardingRules

Updates the port forwarding rules for a single MG.

### Example Usage

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
    res, err := s.Configure.UpdateDeviceCellularGatewayPortForwardingRules(ctx, operations.UpdateDeviceCellularGatewayPortForwardingRulesRequest{
        RequestBody: &operations.UpdateDeviceCellularGatewayPortForwardingRulesRequestBody{
            Rules: []UpdateDeviceCellularGatewayPortForwardingRulesRequestBodyRules{
                operations.UpdateDeviceCellularGatewayPortForwardingRulesRequestBodyRules{
                    Access: "repudiandae",
                    AllowedIps: []string{
                        "voluptatem",
                        "quod",
                    },
                    LanIP: "vitae",
                    LocalPort: "vel",
                    Name: sdk.String("Vanessa Bogan PhD"),
                    Protocol: "excepturi",
                    PublicPort: "veritatis",
                },
                operations.UpdateDeviceCellularGatewayPortForwardingRulesRequestBodyRules{
                    Access: "ipsum",
                    AllowedIps: []string{
                        "similique",
                        "molestiae",
                    },
                    LanIP: "itaque",
                    LocalPort: "voluptatum",
                    Name: sdk.String("Derek Franey I"),
                    Protocol: "tenetur",
                    PublicPort: "velit",
                },
                operations.UpdateDeviceCellularGatewayPortForwardingRulesRequestBodyRules{
                    Access: "asperiores",
                    AllowedIps: []string{
                        "voluptas",
                        "quos",
                    },
                    LanIP: "esse",
                    LocalPort: "veniam",
                    Name: sdk.String("Krystal Quitzon"),
                    Protocol: "aliquam",
                    PublicPort: "maxime",
                },
            },
        },
        Serial: "nostrum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateDeviceCellularGatewayPortForwardingRules200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateDeviceCellularSims

Updates the SIM and APN configurations for a cellular device.

### Example Usage

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
    res, err := s.Configure.UpdateDeviceCellularSims(ctx, operations.UpdateDeviceCellularSimsRequest{
        RequestBody: &operations.UpdateDeviceCellularSimsRequestBody{
            SimFailover: &operations.UpdateDeviceCellularSimsRequestBodySimFailover{
                Enabled: sdk.Bool(false),
            },
            Sims: []UpdateDeviceCellularSimsRequestBodySims{
                operations.UpdateDeviceCellularSimsRequestBodySims{
                    Apns: []UpdateDeviceCellularSimsRequestBodySimsApns{
                        operations.UpdateDeviceCellularSimsRequestBodySimsApns{
                            AllowedIPTypes: []string{
                                "id",
                            },
                            Authentication: &operations.UpdateDeviceCellularSimsRequestBodySimsApnsAuthentication{
                                Password: sdk.String("veniam"),
                                Type: operations.UpdateDeviceCellularSimsRequestBodySimsApnsAuthenticationTypeEnumNone.ToPointer(),
                                Username: sdk.String("Rahsaan_Treutel63"),
                            },
                            Name: "Neal Crooks",
                        },
                        operations.UpdateDeviceCellularSimsRequestBodySimsApns{
                            AllowedIPTypes: []string{
                                "iusto",
                                "natus",
                                "ab",
                            },
                            Authentication: &operations.UpdateDeviceCellularSimsRequestBodySimsApnsAuthentication{
                                Password: sdk.String("deleniti"),
                                Type: operations.UpdateDeviceCellularSimsRequestBodySimsApnsAuthenticationTypeEnumChap.ToPointer(),
                                Username: sdk.String("Nikolas.Marvin"),
                            },
                            Name: "Kathleen Jacobs",
                        },
                        operations.UpdateDeviceCellularSimsRequestBodySimsApns{
                            AllowedIPTypes: []string{
                                "ad",
                                "ipsum",
                                "ipsa",
                                "nam",
                            },
                            Authentication: &operations.UpdateDeviceCellularSimsRequestBodySimsApnsAuthentication{
                                Password: sdk.String("minima"),
                                Type: operations.UpdateDeviceCellularSimsRequestBodySimsApnsAuthenticationTypeEnumNone.ToPointer(),
                                Username: sdk.String("Giovanna41"),
                            },
                            Name: "Cecilia Friesen",
                        },
                        operations.UpdateDeviceCellularSimsRequestBodySimsApns{
                            AllowedIPTypes: []string{
                                "exercitationem",
                                "illo",
                                "fugit",
                            },
                            Authentication: &operations.UpdateDeviceCellularSimsRequestBodySimsApnsAuthentication{
                                Password: sdk.String("id"),
                                Type: operations.UpdateDeviceCellularSimsRequestBodySimsApnsAuthenticationTypeEnumPap.ToPointer(),
                                Username: sdk.String("Bulah12"),
                            },
                            Name: "Terrence Zboncak",
                        },
                    },
                    IsPrimary: sdk.Bool(false),
                    Slot: operations.UpdateDeviceCellularSimsRequestBodySimsSlotEnumSim1.ToPointer(),
                },
                operations.UpdateDeviceCellularSimsRequestBodySims{
                    Apns: []UpdateDeviceCellularSimsRequestBodySimsApns{
                        operations.UpdateDeviceCellularSimsRequestBodySimsApns{
                            AllowedIPTypes: []string{
                                "aliquam",
                            },
                            Authentication: &operations.UpdateDeviceCellularSimsRequestBodySimsApnsAuthentication{
                                Password: sdk.String("autem"),
                                Type: operations.UpdateDeviceCellularSimsRequestBodySimsApnsAuthenticationTypeEnumNone.ToPointer(),
                                Username: sdk.String("Matt.Macejkovic"),
                            },
                            Name: "Mrs. Antoinette Schimmel",
                        },
                        operations.UpdateDeviceCellularSimsRequestBodySimsApns{
                            AllowedIPTypes: []string{
                                "libero",
                                "voluptatem",
                                "at",
                            },
                            Authentication: &operations.UpdateDeviceCellularSimsRequestBodySimsApnsAuthentication{
                                Password: sdk.String("nisi"),
                                Type: operations.UpdateDeviceCellularSimsRequestBodySimsApnsAuthenticationTypeEnumNone.ToPointer(),
                                Username: sdk.String("Aimee_Waters18"),
                            },
                            Name: "Kayla Marvin",
                        },
                    },
                    IsPrimary: sdk.Bool(false),
                    Slot: operations.UpdateDeviceCellularSimsRequestBodySimsSlotEnumSim1.ToPointer(),
                },
                operations.UpdateDeviceCellularSimsRequestBodySims{
                    Apns: []UpdateDeviceCellularSimsRequestBodySimsApns{
                        operations.UpdateDeviceCellularSimsRequestBodySimsApns{
                            AllowedIPTypes: []string{
                                "quo",
                                "perspiciatis",
                                "accusantium",
                                "debitis",
                            },
                            Authentication: &operations.UpdateDeviceCellularSimsRequestBodySimsApnsAuthentication{
                                Password: sdk.String("animi"),
                                Type: operations.UpdateDeviceCellularSimsRequestBodySimsApnsAuthenticationTypeEnumChap.ToPointer(),
                                Username: sdk.String("Austin94"),
                            },
                            Name: "Elsie Hintz",
                        },
                    },
                    IsPrimary: sdk.Bool(false),
                    Slot: operations.UpdateDeviceCellularSimsRequestBodySimsSlotEnumSim1.ToPointer(),
                },
            },
        },
        Serial: "ab",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateDeviceCellularSims200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateDeviceManagementInterface

Update the management interface settings for a device

### Example Usage

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
    res, err := s.Configure.UpdateDeviceManagementInterface(ctx, operations.UpdateDeviceManagementInterfaceRequest{
        RequestBody: &operations.UpdateDeviceManagementInterfaceRequestBody{
            Wan1: &operations.UpdateDeviceManagementInterfaceRequestBodyWan1{
                StaticDNS: []string{
                    "nisi",
                    "repellat",
                },
                StaticGatewayIP: sdk.String("sapiente"),
                StaticIP: sdk.String("a"),
                StaticSubnetMask: sdk.String("molestiae"),
                UsingStaticIP: sdk.Bool(false),
                Vlan: sdk.Int64(228618),
                WanEnabled: operations.UpdateDeviceManagementInterfaceRequestBodyWan1WanEnabledEnumNotConfigured.ToPointer(),
            },
            Wan2: &operations.UpdateDeviceManagementInterfaceRequestBodyWan2{
                StaticDNS: []string{
                    "tenetur",
                    "nostrum",
                    "tempora",
                    "maiores",
                },
                StaticGatewayIP: sdk.String("facere"),
                StaticIP: sdk.String("illum"),
                StaticSubnetMask: sdk.String("exercitationem"),
                UsingStaticIP: sdk.Bool(false),
                Vlan: sdk.Int64(904920),
                WanEnabled: operations.UpdateDeviceManagementInterfaceRequestBodyWan2WanEnabledEnumEnabled.ToPointer(),
            },
        },
        Serial: "sint",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateDeviceManagementInterface200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateDeviceSensorRelationships

Assign one or more sensor roles to a given sensor or camera device.

### Example Usage

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
    res, err := s.Configure.UpdateDeviceSensorRelationships(ctx, operations.UpdateDeviceSensorRelationshipsRequest{
        RequestBody: &operations.UpdateDeviceSensorRelationshipsRequestBody{
            Livestream: &operations.UpdateDeviceSensorRelationshipsRequestBodyLivestream{
                RelatedDevices: []UpdateDeviceSensorRelationshipsRequestBodyLivestreamRelatedDevices{
                    operations.UpdateDeviceSensorRelationshipsRequestBodyLivestreamRelatedDevices{
                        Serial: "dolore",
                    },
                    operations.UpdateDeviceSensorRelationshipsRequestBodyLivestreamRelatedDevices{
                        Serial: "sequi",
                    },
                },
            },
        },
        Serial: "sequi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateDeviceSensorRelationships200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateDeviceSwitchPort

Update a switch port

### Example Usage

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
    res, err := s.Configure.UpdateDeviceSwitchPort(ctx, operations.UpdateDeviceSwitchPortRequest{
        RequestBody: &operations.UpdateDeviceSwitchPortRequestBody{
            AccessPolicyNumber: sdk.Int64(579068),
            AccessPolicyType: operations.UpdateDeviceSwitchPortRequestBodyAccessPolicyTypeEnumOpen.ToPointer(),
            AdaptivePolicyGroupID: sdk.String("illum"),
            AllowedVlans: sdk.String("laborum"),
            DaiTrusted: sdk.Bool(false),
            Enabled: sdk.Bool(false),
            FlexibleStackingEnabled: sdk.Bool(false),
            IsolationEnabled: sdk.Bool(false),
            LinkNegotiation: sdk.String("sapiente"),
            MacAllowList: []string{
                "eius",
                "dolores",
                "dolorum",
            },
            Name: sdk.String("Sammy Kertzmann"),
            PeerSgtCapable: sdk.Bool(false),
            PoeEnabled: sdk.Bool(false),
            PortScheduleID: sdk.String("laudantium"),
            Profile: &operations.UpdateDeviceSwitchPortRequestBodyProfile{
                Enabled: sdk.Bool(false),
                ID: sdk.String("8e4d8039-ea5f-49b1-8a24-4fd619039dac"),
                Iname: sdk.String("assumenda"),
            },
            RstpEnabled: sdk.Bool(false),
            StickyMacAllowList: []string{
                "voluptatum",
            },
            StickyMacAllowListLimit: sdk.Int64(911049),
            StormControlEnabled: sdk.Bool(false),
            StpGuard: operations.UpdateDeviceSwitchPortRequestBodyStpGuardEnumRootGuard.ToPointer(),
            Tags: []string{
                "assumenda",
            },
            Type: operations.UpdateDeviceSwitchPortRequestBodyTypeEnumTrunk.ToPointer(),
            Udld: operations.UpdateDeviceSwitchPortRequestBodyUdldEnumAlertOnly.ToPointer(),
            Vlan: sdk.Int64(457869),
            VoiceVlan: sdk.Int64(90809),
        },
        PortID: "temporibus",
        Serial: "optio",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateDeviceSwitchPort200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateDeviceSwitchRoutingInterface

Update a layer 3 interface for a switch

### Example Usage

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
    res, err := s.Configure.UpdateDeviceSwitchRoutingInterface(ctx, operations.UpdateDeviceSwitchRoutingInterfaceRequest{
        RequestBody: &operations.UpdateDeviceSwitchRoutingInterfaceRequestBody{
            DefaultGateway: sdk.String("quam"),
            InterfaceIP: sdk.String("delectus"),
            Ipv6: &operations.UpdateDeviceSwitchRoutingInterfaceRequestBodyIpv6{
                Address: sdk.String("82690 Laron Crossing"),
                AssignmentMode: sdk.String("aut"),
                Gateway: sdk.String("maxime"),
                Prefix: sdk.String("provident"),
            },
            MulticastRouting: operations.UpdateDeviceSwitchRoutingInterfaceRequestBodyMulticastRoutingEnumIgmpSnoopingQuerier.ToPointer(),
            Name: sdk.String("Stephen Robel"),
            OspfSettings: &operations.UpdateDeviceSwitchRoutingInterfaceRequestBodyOspfSettings{
                Area: sdk.String("aperiam"),
                Cost: sdk.Int64(120548),
                IsPassiveEnabled: sdk.Bool(false),
            },
            OspfV3: &operations.UpdateDeviceSwitchRoutingInterfaceRequestBodyOspfV3{
                Area: sdk.String("repellat"),
                Cost: sdk.Int64(172807),
                IsPassiveEnabled: sdk.Bool(false),
            },
            Subnet: sdk.String("harum"),
            VlanID: sdk.Int64(845115),
        },
        InterfaceID: "totam",
        Serial: "provident",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateDeviceSwitchRoutingInterface200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateDeviceSwitchRoutingInterfaceDhcp

Update a layer 3 interface DHCP configuration for a switch

### Example Usage

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
    res, err := s.Configure.UpdateDeviceSwitchRoutingInterfaceDhcp(ctx, operations.UpdateDeviceSwitchRoutingInterfaceDhcpRequest{
        RequestBody: &operations.UpdateDeviceSwitchRoutingInterfaceDhcpRequestBody{
            BootFileName: sdk.String("maxime"),
            BootNextServer: sdk.String("totam"),
            BootOptionsEnabled: sdk.Bool(false),
            DhcpLeaseTime: operations.UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpLeaseTimeEnumTwelveHours.ToPointer(),
            DhcpMode: operations.UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpModeEnumDhcpDisabled.ToPointer(),
            DhcpOptions: []UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpOptions{
                operations.UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpOptions{
                    Code: "vel",
                    Type: operations.UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpOptionsTypeEnumHex,
                    Value: "occaecati",
                },
            },
            DhcpRelayServerIps: []string{
                "similique",
                "quis",
                "facilis",
                "in",
            },
            DNSCustomNameservers: []string{
                "nisi",
                "natus",
                "eaque",
            },
            DNSNameserversOption: operations.UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDNSNameserversOptionEnumCustom.ToPointer(),
            FixedIPAssignments: []UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyFixedIPAssignments{
                operations.UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyFixedIPAssignments{
                    IP: "atque",
                    Mac: "atque",
                    Name: "Sonya McLaughlin",
                },
                operations.UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyFixedIPAssignments{
                    IP: "ea",
                    Mac: "modi",
                    Name: "Alma Johnston",
                },
                operations.UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyFixedIPAssignments{
                    IP: "quas",
                    Mac: "hic",
                    Name: "Alberta Ziemann",
                },
            },
            ReservedIPRanges: []UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyReservedIPRanges{
                operations.UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyReservedIPRanges{
                    Comment: sdk.String("natus"),
                    End: "beatae",
                    Start: "placeat",
                },
                operations.UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyReservedIPRanges{
                    Comment: sdk.String("molestiae"),
                    End: "dolor",
                    Start: "quia",
                },
            },
        },
        InterfaceID: "nulla",
        Serial: "occaecati",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateDeviceSwitchRoutingInterfaceDhcp200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateDeviceSwitchRoutingStaticRoute

Update a layer 3 static route for a switch

### Example Usage

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
    res, err := s.Configure.UpdateDeviceSwitchRoutingStaticRoute(ctx, operations.UpdateDeviceSwitchRoutingStaticRouteRequest{
        RequestBody: &operations.UpdateDeviceSwitchRoutingStaticRouteRequestBody{
            AdvertiseViaOspfEnabled: sdk.Bool(false),
            Name: sdk.String("Randolph Nicolas"),
            NextHopIP: sdk.String("magnam"),
            PreferOverOspfRoutesEnabled: sdk.Bool(false),
            Subnet: sdk.String("voluptate"),
        },
        Serial: "aliquid",
        StaticRouteID: "officia",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateDeviceSwitchRoutingStaticRoute200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateDeviceSwitchWarmSpare

Update warm spare configuration for a switch. The spare will use the same L3 configuration as the primary. Note that this will irreversibly destroy any existing L3 configuration on the spare.

### Example Usage

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
    res, err := s.Configure.UpdateDeviceSwitchWarmSpare(ctx, operations.UpdateDeviceSwitchWarmSpareRequest{
        RequestBody: operations.UpdateDeviceSwitchWarmSpareRequestBody{
            Enabled: false,
            SpareSerial: sdk.String("qui"),
        },
        Serial: "animi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateDeviceSwitchWarmSpare200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateDeviceWirelessBluetoothSettings

Update the bluetooth settings for a wireless device

### Example Usage

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
    res, err := s.Configure.UpdateDeviceWirelessBluetoothSettings(ctx, operations.UpdateDeviceWirelessBluetoothSettingsRequest{
        RequestBody: &operations.UpdateDeviceWirelessBluetoothSettingsRequestBody{
            Major: sdk.Int64(877941),
            Minor: sdk.Int64(555313),
            UUID: sdk.String("dcc50c8a-3512-4c73-b848-930750a00e96"),
        },
        Serial: "voluptas",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateDeviceWirelessBluetoothSettings200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateDeviceWirelessRadioSettings

Update the radio settings of a device

### Example Usage

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
    res, err := s.Configure.UpdateDeviceWirelessRadioSettings(ctx, operations.UpdateDeviceWirelessRadioSettingsRequest{
        RequestBody: &operations.UpdateDeviceWirelessRadioSettingsRequestBody{
            FiveGhzSettings: &operations.UpdateDeviceWirelessRadioSettingsRequestBodyFiveGhzSettings{
                Channel: operations.UpdateDeviceWirelessRadioSettingsRequestBodyFiveGhzSettingsChannelEnumOneHundredAndSixtyNine.ToPointer(),
                ChannelWidth: operations.UpdateDeviceWirelessRadioSettingsRequestBodyFiveGhzSettingsChannelWidthEnumEighty.ToPointer(),
                TargetPower: sdk.Int64(496307),
            },
            RfProfileID: sdk.String("dolorem"),
            TwoFourGhzSettings: &operations.UpdateDeviceWirelessRadioSettingsRequestBodyTwoFourGhzSettings{
                Channel: operations.UpdateDeviceWirelessRadioSettingsRequestBodyTwoFourGhzSettingsChannelEnumSeven.ToPointer(),
                TargetPower: sdk.Int64(821579),
            },
        },
        Serial: "dolore",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateDeviceWirelessRadioSettings200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetwork

Update a network

### Example Usage

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
    res, err := s.Configure.UpdateNetwork(ctx, operations.UpdateNetworkRequest{
        RequestBody: &operations.UpdateNetworkRequestBody{
            EnrollmentString: sdk.String("neque"),
            Name: sdk.String("Guadalupe Hagenes"),
            Notes: sdk.String("corrupti"),
            Tags: []string{
                "molestiae",
                "atque",
                "dolor",
                "optio",
            },
            TimeZone: sdk.String("cupiditate"),
        },
        NetworkID: "quia",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetwork200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkAlertsSettings

Update the alert configuration for this network

### Example Usage

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
    res, err := s.Configure.UpdateNetworkAlertsSettings(ctx, operations.UpdateNetworkAlertsSettingsRequest{
        RequestBody: &operations.UpdateNetworkAlertsSettingsRequestBody{
            Alerts: []UpdateNetworkAlertsSettingsRequestBodyAlerts{
                operations.UpdateNetworkAlertsSettingsRequestBodyAlerts{
                    AlertDestinations: &operations.UpdateNetworkAlertsSettingsRequestBodyAlertsAlertDestinations{
                        AllAdmins: sdk.Bool(false),
                        Emails: []string{
                            "praesentium",
                            "accusamus",
                            "fugiat",
                        },
                        HTTPServerIds: []string{
                            "pariatur",
                        },
                        Snmp: sdk.Bool(false),
                    },
                    Enabled: sdk.Bool(false),
                    Filters: map[string]interface{}{
                        "deserunt": "nobis",
                    },
                    Type: "quam",
                },
            },
            DefaultDestinations: &operations.UpdateNetworkAlertsSettingsRequestBodyDefaultDestinations{
                AllAdmins: sdk.Bool(false),
                Emails: []string{
                    "est",
                    "non",
                    "placeat",
                    "veniam",
                },
                HTTPServerIds: []string{
                    "similique",
                    "corrupti",
                    "aliquid",
                    "aliquam",
                },
                Snmp: sdk.Bool(false),
            },
        },
        NetworkID: "error",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkAlertsSettings200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkApplianceConnectivityMonitoringDestinations

Update the connectivity testing destinations for an MX network

### Example Usage

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
    res, err := s.Configure.UpdateNetworkApplianceConnectivityMonitoringDestinations(ctx, operations.UpdateNetworkApplianceConnectivityMonitoringDestinationsRequest{
        RequestBody: &operations.UpdateNetworkApplianceConnectivityMonitoringDestinationsRequestBody{
            Destinations: []UpdateNetworkApplianceConnectivityMonitoringDestinationsRequestBodyDestinations{
                operations.UpdateNetworkApplianceConnectivityMonitoringDestinationsRequestBodyDestinations{
                    Default: sdk.Bool(false),
                    Description: sdk.String("ducimus"),
                    IP: "perferendis",
                },
                operations.UpdateNetworkApplianceConnectivityMonitoringDestinationsRequestBodyDestinations{
                    Default: sdk.Bool(false),
                    Description: sdk.String("impedit"),
                    IP: "reiciendis",
                },
                operations.UpdateNetworkApplianceConnectivityMonitoringDestinationsRequestBodyDestinations{
                    Default: sdk.Bool(false),
                    Description: sdk.String("quibusdam"),
                    IP: "veniam",
                },
            },
        },
        NetworkID: "pariatur",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkApplianceConnectivityMonitoringDestinations200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkApplianceContentFiltering

Update the content filtering settings for an MX network

### Example Usage

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
    res, err := s.Configure.UpdateNetworkApplianceContentFiltering(ctx, operations.UpdateNetworkApplianceContentFilteringRequest{
        RequestBody: &operations.UpdateNetworkApplianceContentFilteringRequestBody{
            AllowedURLPatterns: []string{
                "iste",
                "corrupti",
            },
            BlockedURLCategories: []string{
                "distinctio",
                "in",
                "consequuntur",
            },
            BlockedURLPatterns: []string{
                "voluptas",
            },
            URLCategoryListSize: operations.UpdateNetworkApplianceContentFilteringRequestBodyURLCategoryListSizeEnumFullList.ToPointer(),
        },
        NetworkID: "ad",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkApplianceContentFiltering200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkApplianceFirewallCellularFirewallRules

Update the cellular firewall rules of an MX network

### Example Usage

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
    res, err := s.Configure.UpdateNetworkApplianceFirewallCellularFirewallRules(ctx, operations.UpdateNetworkApplianceFirewallCellularFirewallRulesRequest{
        RequestBody: &operations.UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBody{
            Rules: []UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBodyRules{
                operations.UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBodyRules{
                    Comment: sdk.String("ipsa"),
                    DestCidr: "iure",
                    DestPort: sdk.String("voluptate"),
                    Policy: operations.UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBodyRulesPolicyEnumDeny,
                    Protocol: operations.UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBodyRulesProtocolEnumAny,
                    SrcCidr: "perspiciatis",
                    SrcPort: sdk.String("accusamus"),
                    SyslogEnabled: sdk.Bool(false),
                },
            },
        },
        NetworkID: "laborum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkApplianceFirewallCellularFirewallRules200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkApplianceFirewallFirewalledService

Updates the accessibility settings for the given service ('ICMP', 'web', or 'SNMP')

### Example Usage

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
    res, err := s.Configure.UpdateNetworkApplianceFirewallFirewalledService(ctx, operations.UpdateNetworkApplianceFirewallFirewalledServiceRequest{
        RequestBody: operations.UpdateNetworkApplianceFirewallFirewalledServiceRequestBody{
            Access: operations.UpdateNetworkApplianceFirewallFirewalledServiceRequestBodyAccessEnumRestricted,
            AllowedIps: []string{
                "facere",
            },
        },
        NetworkID: "eius",
        Service: "perspiciatis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkApplianceFirewallFirewalledService200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkApplianceFirewallInboundCellularFirewallRules

Update the inbound cellular firewall rules of an MX network

### Example Usage

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
    res, err := s.Configure.UpdateNetworkApplianceFirewallInboundCellularFirewallRules(ctx, operations.UpdateNetworkApplianceFirewallInboundCellularFirewallRulesRequest{
        RequestBody: &operations.UpdateNetworkApplianceFirewallInboundCellularFirewallRulesRequestBody{
            Rules: []UpdateNetworkApplianceFirewallInboundCellularFirewallRulesRequestBodyRules{
                operations.UpdateNetworkApplianceFirewallInboundCellularFirewallRulesRequestBodyRules{
                    Comment: sdk.String("earum"),
                    DestCidr: "quibusdam",
                    DestPort: sdk.String("inventore"),
                    Policy: operations.UpdateNetworkApplianceFirewallInboundCellularFirewallRulesRequestBodyRulesPolicyEnumAllow,
                    Protocol: operations.UpdateNetworkApplianceFirewallInboundCellularFirewallRulesRequestBodyRulesProtocolEnumTCP,
                    SrcCidr: "molestias",
                    SrcPort: sdk.String("fuga"),
                    SyslogEnabled: sdk.Bool(false),
                },
            },
        },
        NetworkID: "odit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkApplianceFirewallInboundCellularFirewallRules200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## UpdateNetworkApplianceFirewallInboundFirewallRules

Update the inbound firewall rules of an MX network

### Example Usage

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
    res, err := s.Configure.UpdateNetworkApplianceFirewallInboundFirewallRules(ctx, operations.UpdateNetworkApplianceFirewallInboundFirewallRulesRequest{
        RequestBody: &operations.UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBody{
            Rules: []UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRules{
                operations.UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRules{
                    Comment: sdk.String("sunt"),
                    DestCidr: "sint",
                    DestPort: sdk.String("exercitationem"),
                    Policy: operations.UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRulesPolicyEnumAllow,
                    Protocol: operations.UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRulesProtocolEnumIcmp,
                    SrcCidr: "quaerat",
                    SrcPort: sdk.String("minima"),
                    SyslogEnabled: sdk.Bool(false),
                },
                operations.UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRules{
                    Comment: sdk.String("officiis"),
                    DestCidr: "unde",
                    DestPort: sdk.String("ullam"),
                    Policy: operations.UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRulesPolicyEnumAllow,
                    Protocol: operations.UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRulesProtocolEnumUDP,
                    SrcCidr: "cumque",
                    SrcPort: sdk.String("cumque"),
                    SyslogEnabled: sdk.Bool(false),
                },
                operations.UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRules{
                    Comment: sdk.String("et"),
                    DestCidr: "praesentium",
                    DestPort: sdk.String("minima"),
                    Policy: operations.UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRulesPolicyEnumDeny,
                    Protocol: operations.UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRulesProtocolEnumTCP,
                    SrcCidr: "magnam",
                    SrcPort: sdk.String("unde"),
                    SyslogEnabled: sdk.Bool(false),
                },
                operations.UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRules{
                    Comment: sdk.String("consequatur"),
                    DestCidr: "dicta",
                    DestPort: sdk.String("eligendi"),
                    Policy: operations.UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRulesPolicyEnumAllow,
                    Protocol: operations.UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRulesProtocolEnumTCP,
                    SrcCidr: "quaerat",
                    SrcPort: sdk.String("sequi"),
                    SyslogEnabled: sdk.Bool(false),
                },
            },
            SyslogDefaultRule: sdk.Bool(false),
        },
        NetworkID: "culpa",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkApplianceFirewallInboundFirewallRules200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkApplianceFirewallL3FirewallRules

Update the L3 firewall rules of an MX network

### Example Usage

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
    res, err := s.Configure.UpdateNetworkApplianceFirewallL3FirewallRules(ctx, operations.UpdateNetworkApplianceFirewallL3FirewallRulesRequest{
        RequestBody: &operations.UpdateNetworkApplianceFirewallL3FirewallRulesRequestBody{
            Rules: []UpdateNetworkApplianceFirewallL3FirewallRulesRequestBodyRules{
                operations.UpdateNetworkApplianceFirewallL3FirewallRulesRequestBodyRules{
                    Comment: sdk.String("explicabo"),
                    DestCidr: "nulla",
                    DestPort: sdk.String("laborum"),
                    Policy: operations.UpdateNetworkApplianceFirewallL3FirewallRulesRequestBodyRulesPolicyEnumDeny,
                    Protocol: operations.UpdateNetworkApplianceFirewallL3FirewallRulesRequestBodyRulesProtocolEnumIcmp6,
                    SrcCidr: "totam",
                    SrcPort: sdk.String("incidunt"),
                    SyslogEnabled: sdk.Bool(false),
                },
                operations.UpdateNetworkApplianceFirewallL3FirewallRulesRequestBodyRules{
                    Comment: sdk.String("similique"),
                    DestCidr: "nobis",
                    DestPort: sdk.String("culpa"),
                    Policy: operations.UpdateNetworkApplianceFirewallL3FirewallRulesRequestBodyRulesPolicyEnumAllow,
                    Protocol: operations.UpdateNetworkApplianceFirewallL3FirewallRulesRequestBodyRulesProtocolEnumUDP,
                    SrcCidr: "sed",
                    SrcPort: sdk.String("amet"),
                    SyslogEnabled: sdk.Bool(false),
                },
                operations.UpdateNetworkApplianceFirewallL3FirewallRulesRequestBodyRules{
                    Comment: sdk.String("aut"),
                    DestCidr: "voluptates",
                    DestPort: sdk.String("nulla"),
                    Policy: operations.UpdateNetworkApplianceFirewallL3FirewallRulesRequestBodyRulesPolicyEnumDeny,
                    Protocol: operations.UpdateNetworkApplianceFirewallL3FirewallRulesRequestBodyRulesProtocolEnumIcmp6,
                    SrcCidr: "dolor",
                    SrcPort: sdk.String("totam"),
                    SyslogEnabled: sdk.Bool(false),
                },
                operations.UpdateNetworkApplianceFirewallL3FirewallRulesRequestBodyRules{
                    Comment: sdk.String("beatae"),
                    DestCidr: "vitae",
                    DestPort: sdk.String("laborum"),
                    Policy: operations.UpdateNetworkApplianceFirewallL3FirewallRulesRequestBodyRulesPolicyEnumAllow,
                    Protocol: operations.UpdateNetworkApplianceFirewallL3FirewallRulesRequestBodyRulesProtocolEnumAny,
                    SrcCidr: "veniam",
                    SrcPort: sdk.String("non"),
                    SyslogEnabled: sdk.Bool(false),
                },
            },
            SyslogDefaultRule: sdk.Bool(false),
        },
        NetworkID: "laudantium",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkApplianceFirewallL3FirewallRules200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkApplianceFirewallL7FirewallRules

Update the MX L7 firewall rules for an MX network

### Example Usage

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
    res, err := s.Configure.UpdateNetworkApplianceFirewallL7FirewallRules(ctx, operations.UpdateNetworkApplianceFirewallL7FirewallRulesRequest{
        RequestBody: &operations.UpdateNetworkApplianceFirewallL7FirewallRulesRequestBody{
            Rules: []UpdateNetworkApplianceFirewallL7FirewallRulesRequestBodyRules{
                operations.UpdateNetworkApplianceFirewallL7FirewallRulesRequestBodyRules{
                    Policy: operations.UpdateNetworkApplianceFirewallL7FirewallRulesRequestBodyRulesPolicyEnumDeny.ToPointer(),
                    Type: operations.UpdateNetworkApplianceFirewallL7FirewallRulesRequestBodyRulesTypeEnumIPRange.ToPointer(),
                    Value: sdk.String("nulla"),
                },
            },
        },
        NetworkID: "ducimus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkApplianceFirewallL7FirewallRules200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkApplianceFirewallOneToManyNatRules

Set the 1:Many NAT mapping rules for an MX network

### Example Usage

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
    res, err := s.Configure.UpdateNetworkApplianceFirewallOneToManyNatRules(ctx, operations.UpdateNetworkApplianceFirewallOneToManyNatRulesRequest{
        RequestBody: operations.UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBody{
            Rules: []UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRules{
                operations.UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRules{
                    PortRules: []UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesPortRules{
                        operations.UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesPortRules{
                            AllowedIps: []string{
                                "voluptas",
                                "veniam",
                            },
                            LocalIP: sdk.String("voluptatem"),
                            LocalPort: sdk.String("quam"),
                            Name: sdk.String("Judy Bogan"),
                            Protocol: operations.UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesPortRulesProtocolEnumUDP.ToPointer(),
                            PublicPort: sdk.String("doloribus"),
                        },
                        operations.UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesPortRules{
                            AllowedIps: []string{
                                "nulla",
                                "iusto",
                            },
                            LocalIP: sdk.String("adipisci"),
                            LocalPort: sdk.String("provident"),
                            Name: sdk.String("Audrey Keeling"),
                            Protocol: operations.UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesPortRulesProtocolEnumTCP.ToPointer(),
                            PublicPort: sdk.String("accusantium"),
                        },
                        operations.UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesPortRules{
                            AllowedIps: []string{
                                "doloremque",
                                "reprehenderit",
                                "dicta",
                            },
                            LocalIP: sdk.String("veritatis"),
                            LocalPort: sdk.String("similique"),
                            Name: sdk.String("Leslie Carroll"),
                            Protocol: operations.UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesPortRulesProtocolEnumTCP.ToPointer(),
                            PublicPort: sdk.String("deserunt"),
                        },
                        operations.UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesPortRules{
                            AllowedIps: []string{
                                "nulla",
                                "facilis",
                            },
                            LocalIP: sdk.String("libero"),
                            LocalPort: sdk.String("corrupti"),
                            Name: sdk.String("Bill Frami"),
                            Protocol: operations.UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesPortRulesProtocolEnumUDP.ToPointer(),
                            PublicPort: sdk.String("perspiciatis"),
                        },
                    },
                    PublicIP: "odit",
                    Uplink: operations.UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesUplinkEnumInternet2,
                },
                operations.UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRules{
                    PortRules: []UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesPortRules{
                        operations.UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesPortRules{
                            AllowedIps: []string{
                                "atque",
                                "sunt",
                            },
                            LocalIP: sdk.String("dolores"),
                            LocalPort: sdk.String("placeat"),
                            Name: sdk.String("Greg Brakus"),
                            Protocol: operations.UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesPortRulesProtocolEnumUDP.ToPointer(),
                            PublicPort: sdk.String("esse"),
                        },
                        operations.UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesPortRules{
                            AllowedIps: []string{
                                "aspernatur",
                                "eius",
                                "accusantium",
                            },
                            LocalIP: sdk.String("nobis"),
                            LocalPort: sdk.String("asperiores"),
                            Name: sdk.String("Hazel Lemke"),
                            Protocol: operations.UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesPortRulesProtocolEnumUDP.ToPointer(),
                            PublicPort: sdk.String("hic"),
                        },
                        operations.UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesPortRules{
                            AllowedIps: []string{
                                "maiores",
                                "et",
                                "harum",
                            },
                            LocalIP: sdk.String("a"),
                            LocalPort: sdk.String("alias"),
                            Name: sdk.String("Forrest Leannon DVM"),
                            Protocol: operations.UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesPortRulesProtocolEnumTCP.ToPointer(),
                            PublicPort: sdk.String("perferendis"),
                        },
                        operations.UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesPortRules{
                            AllowedIps: []string{
                                "nulla",
                                "corporis",
                            },
                            LocalIP: sdk.String("pariatur"),
                            LocalPort: sdk.String("quas"),
                            Name: sdk.String("Mr. Debra Smitham"),
                            Protocol: operations.UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesPortRulesProtocolEnumTCP.ToPointer(),
                            PublicPort: sdk.String("voluptatem"),
                        },
                    },
                    PublicIP: "provident",
                    Uplink: operations.UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesUplinkEnumInternet1,
                },
                operations.UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRules{
                    PortRules: []UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesPortRules{
                        operations.UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesPortRules{
                            AllowedIps: []string{
                                "nihil",
                                "quae",
                            },
                            LocalIP: sdk.String("voluptas"),
                            LocalPort: sdk.String("laboriosam"),
                            Name: sdk.String("Josephine Yundt"),
                            Protocol: operations.UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesPortRulesProtocolEnumTCP.ToPointer(),
                            PublicPort: sdk.String("quos"),
                        },
                        operations.UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesPortRules{
                            AllowedIps: []string{
                                "minus",
                            },
                            LocalIP: sdk.String("exercitationem"),
                            LocalPort: sdk.String("molestiae"),
                            Name: sdk.String("Vickie Simonis"),
                            Protocol: operations.UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesPortRulesProtocolEnumTCP.ToPointer(),
                            PublicPort: sdk.String("quaerat"),
                        },
                        operations.UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesPortRules{
                            AllowedIps: []string{
                                "dolore",
                            },
                            LocalIP: sdk.String("accusantium"),
                            LocalPort: sdk.String("excepturi"),
                            Name: sdk.String("Adam Breitenberg"),
                            Protocol: operations.UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesPortRulesProtocolEnumTCP.ToPointer(),
                            PublicPort: sdk.String("blanditiis"),
                        },
                        operations.UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesPortRules{
                            AllowedIps: []string{
                                "aut",
                                "vitae",
                            },
                            LocalIP: sdk.String("tempora"),
                            LocalPort: sdk.String("molestias"),
                            Name: sdk.String("Homer Harber"),
                            Protocol: operations.UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesPortRulesProtocolEnumTCP.ToPointer(),
                            PublicPort: sdk.String("debitis"),
                        },
                    },
                    PublicIP: "neque",
                    Uplink: operations.UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesUplinkEnumInternet2,
                },
                operations.UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRules{
                    PortRules: []UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesPortRules{
                        operations.UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesPortRules{
                            AllowedIps: []string{
                                "pariatur",
                            },
                            LocalIP: sdk.String("vero"),
                            LocalPort: sdk.String("natus"),
                            Name: sdk.String("Marty Nikolaus"),
                            Protocol: operations.UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesPortRulesProtocolEnumUDP.ToPointer(),
                            PublicPort: sdk.String("placeat"),
                        },
                        operations.UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesPortRules{
                            AllowedIps: []string{
                                "vel",
                                "non",
                                "incidunt",
                                "praesentium",
                            },
                            LocalIP: sdk.String("ipsum"),
                            LocalPort: sdk.String("itaque"),
                            Name: sdk.String("Jan Koch"),
                            Protocol: operations.UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesPortRulesProtocolEnumUDP.ToPointer(),
                            PublicPort: sdk.String("saepe"),
                        },
                        operations.UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesPortRules{
                            AllowedIps: []string{
                                "assumenda",
                                "maiores",
                            },
                            LocalIP: sdk.String("neque"),
                            LocalPort: sdk.String("in"),
                            Name: sdk.String("Alex Hegmann"),
                            Protocol: operations.UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesPortRulesProtocolEnumUDP.ToPointer(),
                            PublicPort: sdk.String("veniam"),
                        },
                        operations.UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesPortRules{
                            AllowedIps: []string{
                                "facere",
                                "aliquam",
                            },
                            LocalIP: sdk.String("vitae"),
                            LocalPort: sdk.String("ipsum"),
                            Name: sdk.String("Dennis Erdman"),
                            Protocol: operations.UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesPortRulesProtocolEnumUDP.ToPointer(),
                            PublicPort: sdk.String("dolores"),
                        },
                    },
                    PublicIP: "consectetur",
                    Uplink: operations.UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesUplinkEnumInternet1,
                },
            },
        },
        NetworkID: "ipsa",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkApplianceFirewallOneToManyNatRules200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkApplianceFirewallOneToOneNatRules

Set the 1:1 NAT mapping rules for an MX network

### Example Usage

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
    res, err := s.Configure.UpdateNetworkApplianceFirewallOneToOneNatRules(ctx, operations.UpdateNetworkApplianceFirewallOneToOneNatRulesRequest{
        RequestBody: operations.UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBody{
            Rules: []UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRules{
                operations.UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRules{
                    AllowedInbound: []UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesAllowedInbound{
                        operations.UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesAllowedInbound{
                            AllowedIps: []string{
                                "cum",
                                "facere",
                            },
                            DestinationPorts: []string{
                                "quis",
                            },
                            Protocol: operations.UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesAllowedInboundProtocolEnumIcmpPing.ToPointer(),
                        },
                    },
                    LanIP: "quo",
                    Name: sdk.String("Shelly Corwin"),
                    PublicIP: sdk.String("nihil"),
                    Uplink: operations.UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesUplinkEnumInternet1.ToPointer(),
                },
                operations.UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRules{
                    AllowedInbound: []UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesAllowedInbound{
                        operations.UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesAllowedInbound{
                            AllowedIps: []string{
                                "consequatur",
                                "consequuntur",
                                "numquam",
                                "numquam",
                            },
                            DestinationPorts: []string{
                                "pariatur",
                                "voluptatum",
                                "vel",
                            },
                            Protocol: operations.UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesAllowedInboundProtocolEnumUDP.ToPointer(),
                        },
                        operations.UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesAllowedInbound{
                            AllowedIps: []string{
                                "expedita",
                                "quidem",
                            },
                            DestinationPorts: []string{
                                "eaque",
                            },
                            Protocol: operations.UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesAllowedInboundProtocolEnumUDP.ToPointer(),
                        },
                    },
                    LanIP: "debitis",
                    Name: sdk.String("Mr. Mona McLaughlin"),
                    PublicIP: sdk.String("expedita"),
                    Uplink: operations.UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesUplinkEnumInternet2.ToPointer(),
                },
                operations.UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRules{
                    AllowedInbound: []UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesAllowedInbound{
                        operations.UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesAllowedInbound{
                            AllowedIps: []string{
                                "magnam",
                                "excepturi",
                            },
                            DestinationPorts: []string{
                                "dolorum",
                                "voluptatibus",
                                "modi",
                                "enim",
                            },
                            Protocol: operations.UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesAllowedInboundProtocolEnumTCP.ToPointer(),
                        },
                        operations.UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesAllowedInbound{
                            AllowedIps: []string{
                                "molestiae",
                            },
                            DestinationPorts: []string{
                                "ex",
                                "error",
                                "saepe",
                                "consequuntur",
                            },
                            Protocol: operations.UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesAllowedInboundProtocolEnumUDP.ToPointer(),
                        },
                        operations.UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesAllowedInbound{
                            AllowedIps: []string{
                                "earum",
                                "eum",
                                "temporibus",
                            },
                            DestinationPorts: []string{
                                "doloremque",
                            },
                            Protocol: operations.UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesAllowedInboundProtocolEnumUDP.ToPointer(),
                        },
                        operations.UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesAllowedInbound{
                            AllowedIps: []string{
                                "temporibus",
                                "quidem",
                                "neque",
                            },
                            DestinationPorts: []string{
                                "repellendus",
                                "tempora",
                                "quisquam",
                            },
                            Protocol: operations.UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesAllowedInboundProtocolEnumIcmpPing.ToPointer(),
                        },
                    },
                    LanIP: "cum",
                    Name: sdk.String("Ms. Sylvia Botsford"),
                    PublicIP: sdk.String("occaecati"),
                    Uplink: operations.UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesUplinkEnumInternet2.ToPointer(),
                },
            },
        },
        NetworkID: "nesciunt",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkApplianceFirewallOneToOneNatRules200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkApplianceFirewallPortForwardingRules

Update the port forwarding rules for an MX network

### Example Usage

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
    res, err := s.Configure.UpdateNetworkApplianceFirewallPortForwardingRules(ctx, operations.UpdateNetworkApplianceFirewallPortForwardingRulesRequest{
        RequestBody: operations.UpdateNetworkApplianceFirewallPortForwardingRulesRequestBody{
            Rules: []UpdateNetworkApplianceFirewallPortForwardingRulesRequestBodyRules{
                operations.UpdateNetworkApplianceFirewallPortForwardingRulesRequestBodyRules{
                    AllowedIps: []string{
                        "modi",
                        "nihil",
                    },
                    LanIP: "velit",
                    LocalPort: "aut",
                    Name: sdk.String("Wayne Rempel"),
                    Protocol: operations.UpdateNetworkApplianceFirewallPortForwardingRulesRequestBodyRulesProtocolEnumUDP,
                    PublicPort: "eos",
                    Uplink: operations.UpdateNetworkApplianceFirewallPortForwardingRulesRequestBodyRulesUplinkEnumInternet1.ToPointer(),
                },
            },
        },
        NetworkID: "distinctio",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkApplianceFirewallPortForwardingRules200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkApplianceFirewallSettings

Update the firewall settings for this network

### Example Usage

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
    res, err := s.Configure.UpdateNetworkApplianceFirewallSettings(ctx, operations.UpdateNetworkApplianceFirewallSettingsRequest{
        RequestBody: &operations.UpdateNetworkApplianceFirewallSettingsRequestBody{
            SpoofingProtection: &operations.UpdateNetworkApplianceFirewallSettingsRequestBodySpoofingProtection{
                IPSourceGuard: &operations.UpdateNetworkApplianceFirewallSettingsRequestBodySpoofingProtectionIPSourceGuard{
                    Mode: operations.UpdateNetworkApplianceFirewallSettingsRequestBodySpoofingProtectionIPSourceGuardModeEnumBlock.ToPointer(),
                },
            },
        },
        NetworkID: "earum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkApplianceFirewallSettings200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkAppliancePort

Update the per-port VLAN settings for a single MX port.

### Example Usage

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
    res, err := s.Configure.UpdateNetworkAppliancePort(ctx, operations.UpdateNetworkAppliancePortRequest{
        RequestBody: &operations.UpdateNetworkAppliancePortRequestBody{
            AccessPolicy: sdk.String("possimus"),
            AllowedVlans: sdk.String("nemo"),
            DropUntaggedTraffic: sdk.Bool(false),
            Enabled: sdk.Bool(false),
            Type: sdk.String("eum"),
            Vlan: sdk.Int64(483290),
        },
        NetworkID: "veritatis",
        PortID: "voluptates",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkAppliancePort200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkAppliancePrefixesDelegatedStatic

Update a static delegated prefix from a network

### Example Usage

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
    res, err := s.Configure.UpdateNetworkAppliancePrefixesDelegatedStatic(ctx, operations.UpdateNetworkAppliancePrefixesDelegatedStaticRequest{
        RequestBody: &operations.UpdateNetworkAppliancePrefixesDelegatedStaticRequestBody{
            Description: sdk.String("unde"),
            Origin: &operations.UpdateNetworkAppliancePrefixesDelegatedStaticRequestBodyOrigin{
                Interfaces: []string{
                    "amet",
                    "dolores",
                    "commodi",
                    "neque",
                },
                Type: operations.UpdateNetworkAppliancePrefixesDelegatedStaticRequestBodyOriginTypeEnumIndependent.ToPointer(),
            },
            Prefix: sdk.String("eaque"),
        },
        NetworkID: "officia",
        StaticDelegatedPrefixID: "tempora",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkAppliancePrefixesDelegatedStatic200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkApplianceSecurityIntrusion

Set the supported intrusion settings for an MX network

### Example Usage

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
    res, err := s.Configure.UpdateNetworkApplianceSecurityIntrusion(ctx, operations.UpdateNetworkApplianceSecurityIntrusionRequest{
        RequestBody: &operations.UpdateNetworkApplianceSecurityIntrusionRequestBody{
            IdsRulesets: operations.UpdateNetworkApplianceSecurityIntrusionRequestBodyIdsRulesetsEnumConnectivity.ToPointer(),
            Mode: operations.UpdateNetworkApplianceSecurityIntrusionRequestBodyModeEnumDisabled.ToPointer(),
            ProtectedNetworks: &operations.UpdateNetworkApplianceSecurityIntrusionRequestBodyProtectedNetworks{
                ExcludedCidr: []string{
                    "aliquam",
                },
                IncludedCidr: []string{
                    "nihil",
                },
                UseDefault: sdk.Bool(false),
            },
        },
        NetworkID: "blanditiis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkApplianceSecurityIntrusion200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkApplianceSecurityMalware

Set the supported malware settings for an MX network

### Example Usage

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
    res, err := s.Configure.UpdateNetworkApplianceSecurityMalware(ctx, operations.UpdateNetworkApplianceSecurityMalwareRequest{
        RequestBody: operations.UpdateNetworkApplianceSecurityMalwareRequestBody{
            AllowedFiles: []UpdateNetworkApplianceSecurityMalwareRequestBodyAllowedFiles{
                operations.UpdateNetworkApplianceSecurityMalwareRequestBodyAllowedFiles{
                    Comment: "quisquam",
                    Sha256: "itaque",
                },
                operations.UpdateNetworkApplianceSecurityMalwareRequestBodyAllowedFiles{
                    Comment: "consequatur",
                    Sha256: "recusandae",
                },
                operations.UpdateNetworkApplianceSecurityMalwareRequestBodyAllowedFiles{
                    Comment: "iste",
                    Sha256: "error",
                },
            },
            AllowedUrls: []UpdateNetworkApplianceSecurityMalwareRequestBodyAllowedUrls{
                operations.UpdateNetworkApplianceSecurityMalwareRequestBodyAllowedUrls{
                    Comment: "nemo",
                    URL: "unde",
                },
            },
            Mode: operations.UpdateNetworkApplianceSecurityMalwareRequestBodyModeEnumDisabled,
        },
        NetworkID: "temporibus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkApplianceSecurityMalware200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkApplianceSettings

Update the appliance settings for a network

### Example Usage

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
    res, err := s.Configure.UpdateNetworkApplianceSettings(ctx, operations.UpdateNetworkApplianceSettingsRequest{
        RequestBody: &operations.UpdateNetworkApplianceSettingsRequestBody{
            ClientTrackingMethod: operations.UpdateNetworkApplianceSettingsRequestBodyClientTrackingMethodEnumMacAddress.ToPointer(),
            DeploymentMode: operations.UpdateNetworkApplianceSettingsRequestBodyDeploymentModeEnumPassthrough.ToPointer(),
            DynamicDNS: &operations.UpdateNetworkApplianceSettingsRequestBodyDynamicDNS{
                Enabled: sdk.Bool(false),
                Prefix: sdk.String("deserunt"),
            },
        },
        NetworkID: "ducimus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkApplianceSettings200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkApplianceSingleLan

Update single LAN configuration

### Example Usage

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
    res, err := s.Configure.UpdateNetworkApplianceSingleLan(ctx, operations.UpdateNetworkApplianceSingleLanRequest{
        RequestBody: &operations.UpdateNetworkApplianceSingleLanRequestBody{
            ApplianceIP: sdk.String("modi"),
            Ipv6: &operations.UpdateNetworkApplianceSingleLanRequestBodyIpv6{
                Enabled: sdk.Bool(false),
                PrefixAssignments: []UpdateNetworkApplianceSingleLanRequestBodyIpv6PrefixAssignments{
                    operations.UpdateNetworkApplianceSingleLanRequestBodyIpv6PrefixAssignments{
                        Autonomous: sdk.Bool(false),
                        Origin: &operations.UpdateNetworkApplianceSingleLanRequestBodyIpv6PrefixAssignmentsOrigin{
                            Interfaces: []string{
                                "dolores",
                            },
                            Type: operations.UpdateNetworkApplianceSingleLanRequestBodyIpv6PrefixAssignmentsOriginTypeEnumIndependent,
                        },
                        StaticApplianceIp6: sdk.String("sed"),
                        StaticPrefix: sdk.String("a"),
                    },
                    operations.UpdateNetworkApplianceSingleLanRequestBodyIpv6PrefixAssignments{
                        Autonomous: sdk.Bool(false),
                        Origin: &operations.UpdateNetworkApplianceSingleLanRequestBodyIpv6PrefixAssignmentsOrigin{
                            Interfaces: []string{
                                "dolor",
                                "quidem",
                                "quaerat",
                                "cum",
                            },
                            Type: operations.UpdateNetworkApplianceSingleLanRequestBodyIpv6PrefixAssignmentsOriginTypeEnumIndependent,
                        },
                        StaticApplianceIp6: sdk.String("quibusdam"),
                        StaticPrefix: sdk.String("rerum"),
                    },
                    operations.UpdateNetworkApplianceSingleLanRequestBodyIpv6PrefixAssignments{
                        Autonomous: sdk.Bool(false),
                        Origin: &operations.UpdateNetworkApplianceSingleLanRequestBodyIpv6PrefixAssignmentsOrigin{
                            Interfaces: []string{
                                "tempore",
                                "odio",
                                "reprehenderit",
                            },
                            Type: operations.UpdateNetworkApplianceSingleLanRequestBodyIpv6PrefixAssignmentsOriginTypeEnumInternet,
                        },
                        StaticApplianceIp6: sdk.String("voluptates"),
                        StaticPrefix: sdk.String("distinctio"),
                    },
                    operations.UpdateNetworkApplianceSingleLanRequestBodyIpv6PrefixAssignments{
                        Autonomous: sdk.Bool(false),
                        Origin: &operations.UpdateNetworkApplianceSingleLanRequestBodyIpv6PrefixAssignmentsOrigin{
                            Interfaces: []string{
                                "nisi",
                                "officiis",
                                "quasi",
                            },
                            Type: operations.UpdateNetworkApplianceSingleLanRequestBodyIpv6PrefixAssignmentsOriginTypeEnumInternet,
                        },
                        StaticApplianceIp6: sdk.String("aspernatur"),
                        StaticPrefix: sdk.String("impedit"),
                    },
                },
            },
            MandatoryDhcp: &operations.UpdateNetworkApplianceSingleLanRequestBodyMandatoryDhcp{
                Enabled: sdk.Bool(false),
            },
            Subnet: sdk.String("voluptatibus"),
        },
        NetworkID: "ad",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkApplianceSingleLan200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkApplianceSsid

Update the attributes of an MX SSID

### Example Usage

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
    res, err := s.Configure.UpdateNetworkApplianceSsid(ctx, operations.UpdateNetworkApplianceSsidRequest{
        RequestBody: &operations.UpdateNetworkApplianceSsidRequestBody{
            AuthMode: operations.UpdateNetworkApplianceSsidRequestBodyAuthModeEnumEightThousandAndTwentyOnexMeraki.ToPointer(),
            DefaultVlanID: sdk.Int64(136851),
            DhcpEnforcedDeauthentication: &operations.UpdateNetworkApplianceSsidRequestBodyDhcpEnforcedDeauthentication{
                Enabled: sdk.Bool(false),
            },
            Enabled: sdk.Bool(false),
            EncryptionMode: operations.UpdateNetworkApplianceSsidRequestBodyEncryptionModeEnumWpa.ToPointer(),
            Name: sdk.String("Moses Prohaska"),
            Psk: sdk.String("nam"),
            RadiusServers: []UpdateNetworkApplianceSsidRequestBodyRadiusServers{
                operations.UpdateNetworkApplianceSsidRequestBodyRadiusServers{
                    Host: sdk.String("aliquam"),
                    Port: sdk.Int64(399527),
                    Secret: sdk.String("adipisci"),
                },
                operations.UpdateNetworkApplianceSsidRequestBodyRadiusServers{
                    Host: sdk.String("ipsam"),
                    Port: sdk.Int64(852623),
                    Secret: sdk.String("enim"),
                },
                operations.UpdateNetworkApplianceSsidRequestBodyRadiusServers{
                    Host: sdk.String("eveniet"),
                    Port: sdk.Int64(433083),
                    Secret: sdk.String("exercitationem"),
                },
                operations.UpdateNetworkApplianceSsidRequestBodyRadiusServers{
                    Host: sdk.String("at"),
                    Port: sdk.Int64(632648),
                    Secret: sdk.String("alias"),
                },
            },
            Visible: sdk.Bool(false),
            WpaEncryptionMode: operations.UpdateNetworkApplianceSsidRequestBodyWpaEncryptionModeEnumWpa1AndWpa2.ToPointer(),
        },
        NetworkID: "quos",
        Number: "quisquam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkApplianceSsid200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkApplianceStaticRoute

Update a static route for an MX or teleworker network

### Example Usage

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
    res, err := s.Configure.UpdateNetworkApplianceStaticRoute(ctx, operations.UpdateNetworkApplianceStaticRouteRequest{
        RequestBody: &operations.UpdateNetworkApplianceStaticRouteRequestBody{
            Enabled: sdk.Bool(false),
            FixedIPAssignments: map[string]interface{}{
                "accusamus": "sint",
            },
            GatewayIP: sdk.String("enim"),
            GatewayVlanID: sdk.String("veritatis"),
            Name: sdk.String("Peter Terry DVM"),
            ReservedIPRanges: []UpdateNetworkApplianceStaticRouteRequestBodyReservedIPRanges{
                operations.UpdateNetworkApplianceStaticRouteRequestBodyReservedIPRanges{
                    Comment: "deserunt",
                    End: "sint",
                    Start: "eum",
                },
                operations.UpdateNetworkApplianceStaticRouteRequestBodyReservedIPRanges{
                    Comment: "commodi",
                    End: "magnam",
                    Start: "rem",
                },
                operations.UpdateNetworkApplianceStaticRouteRequestBodyReservedIPRanges{
                    Comment: "occaecati",
                    End: "possimus",
                    Start: "voluptate",
                },
                operations.UpdateNetworkApplianceStaticRouteRequestBodyReservedIPRanges{
                    Comment: "nam",
                    End: "quam",
                    Start: "blanditiis",
                },
            },
            Subnet: sdk.String("laboriosam"),
        },
        NetworkID: "odio",
        StaticRouteID: "adipisci",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkApplianceStaticRoute200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkApplianceTrafficShaping

Update the traffic shaping settings for an MX network

### Example Usage

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
    res, err := s.Configure.UpdateNetworkApplianceTrafficShaping(ctx, operations.UpdateNetworkApplianceTrafficShapingRequest{
        RequestBody: &operations.UpdateNetworkApplianceTrafficShapingRequestBody{
            GlobalBandwidthLimits: &operations.UpdateNetworkApplianceTrafficShapingRequestBodyGlobalBandwidthLimits{
                LimitDown: sdk.Int64(899258),
                LimitUp: sdk.Int64(84451),
            },
        },
        NetworkID: "consectetur",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkApplianceTrafficShaping200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkApplianceTrafficShapingCustomPerformanceClass

Update a custom performance class for an MX network

### Example Usage

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
    res, err := s.Configure.UpdateNetworkApplianceTrafficShapingCustomPerformanceClass(ctx, operations.UpdateNetworkApplianceTrafficShapingCustomPerformanceClassRequest{
        RequestBody: &operations.UpdateNetworkApplianceTrafficShapingCustomPerformanceClassRequestBody{
            MaxJitter: sdk.Int64(686190),
            MaxLatency: sdk.Int64(95701),
            MaxLossPercentage: sdk.Int64(177250),
            Name: sdk.String("Chester Prosacco"),
        },
        CustomPerformanceClassID: "fugit",
        NetworkID: "eius",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkApplianceTrafficShapingCustomPerformanceClass200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkApplianceTrafficShapingRules

Update the traffic shaping settings rules for an MX network

### Example Usage

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
    res, err := s.Configure.UpdateNetworkApplianceTrafficShapingRules(ctx, operations.UpdateNetworkApplianceTrafficShapingRulesRequest{
        RequestBody: &operations.UpdateNetworkApplianceTrafficShapingRulesRequestBody{
            DefaultRulesEnabled: sdk.Bool(false),
            Rules: []UpdateNetworkApplianceTrafficShapingRulesRequestBodyRules{
                operations.UpdateNetworkApplianceTrafficShapingRulesRequestBodyRules{
                    Definitions: []UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitions{
                        operations.UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitions{
                            Type: operations.UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnumHost,
                            Value: "natus",
                        },
                        operations.UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitions{
                            Type: operations.UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnumApplicationCategory,
                            Value: "tempora",
                        },
                    },
                    DscpTagValue: sdk.Int64(548599),
                    PerClientBandwidthLimits: &operations.UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimits{
                        BandwidthLimits: &operations.UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimitsBandwidthLimits{
                            LimitDown: sdk.Int64(499621),
                            LimitUp: sdk.Int64(989060),
                        },
                        Settings: sdk.String("veniam"),
                    },
                    Priority: sdk.String("cumque"),
                },
                operations.UpdateNetworkApplianceTrafficShapingRulesRequestBodyRules{
                    Definitions: []UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitions{
                        operations.UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitions{
                            Type: operations.UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnumApplicationCategory,
                            Value: "amet",
                        },
                        operations.UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitions{
                            Type: operations.UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnumIPRange,
                            Value: "nesciunt",
                        },
                        operations.UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitions{
                            Type: operations.UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnumHost,
                            Value: "tempore",
                        },
                    },
                    DscpTagValue: sdk.Int64(525461),
                    PerClientBandwidthLimits: &operations.UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimits{
                        BandwidthLimits: &operations.UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimitsBandwidthLimits{
                            LimitDown: sdk.Int64(385727),
                            LimitUp: sdk.Int64(691549),
                        },
                        Settings: sdk.String("consectetur"),
                    },
                    Priority: sdk.String("quisquam"),
                },
                operations.UpdateNetworkApplianceTrafficShapingRulesRequestBodyRules{
                    Definitions: []UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitions{
                        operations.UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitions{
                            Type: operations.UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnumPort,
                            Value: "ex",
                        },
                        operations.UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitions{
                            Type: operations.UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnumApplicationCategory,
                            Value: "dicta",
                        },
                        operations.UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitions{
                            Type: operations.UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnumApplicationCategory,
                            Value: "facilis",
                        },
                        operations.UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitions{
                            Type: operations.UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnumApplication,
                            Value: "incidunt",
                        },
                    },
                    DscpTagValue: sdk.Int64(299662),
                    PerClientBandwidthLimits: &operations.UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimits{
                        BandwidthLimits: &operations.UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimitsBandwidthLimits{
                            LimitDown: sdk.Int64(565242),
                            LimitUp: sdk.Int64(941710),
                        },
                        Settings: sdk.String("error"),
                    },
                    Priority: sdk.String("repellendus"),
                },
            },
        },
        NetworkID: "delectus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkApplianceTrafficShapingRules200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkApplianceTrafficShapingUplinkBandwidth

Updates the uplink bandwidth settings for your MX network.

### Example Usage

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
    res, err := s.Configure.UpdateNetworkApplianceTrafficShapingUplinkBandwidth(ctx, operations.UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequest{
        RequestBody: &operations.UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBody{
            BandwidthLimits: &operations.UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBodyBandwidthLimits{
                Cellular: &operations.UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBodyBandwidthLimitsCellular{
                    LimitDown: sdk.Int64(118986),
                    LimitUp: sdk.Int64(191101),
                },
                Wan1: &operations.UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBodyBandwidthLimitsWan1{
                    LimitDown: sdk.Int64(964640),
                    LimitUp: sdk.Int64(284172),
                },
                Wan2: &operations.UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBodyBandwidthLimitsWan2{
                    LimitDown: sdk.Int64(887911),
                    LimitUp: sdk.Int64(932220),
                },
            },
        },
        NetworkID: "nulla",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkApplianceTrafficShapingUplinkBandwidth200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkApplianceTrafficShapingUplinkSelection

Update uplink selection settings for an MX network

### Example Usage

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
    res, err := s.Configure.UpdateNetworkApplianceTrafficShapingUplinkSelection(ctx, operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequest{
        RequestBody: &operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBody{
            ActiveActiveAutoVpnEnabled: sdk.Bool(false),
            DefaultUplink: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyDefaultUplinkEnumWan2.ToPointer(),
            FailoverAndFailback: &operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyFailoverAndFailback{
                Immediate: &operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyFailoverAndFailbackImmediate{
                    Enabled: false,
                },
            },
            LoadBalancingEnabled: sdk.Bool(false),
            VpnTrafficUplinkPreferences: []UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferences{
                operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferences{
                    FailOverCriterion: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesFailOverCriterionEnumPoorPerformance.ToPointer(),
                    PerformanceClass: &operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPerformanceClass{
                        BuiltinPerformanceClassName: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPerformanceClassBuiltinPerformanceClassNameEnumVoIP.ToPointer(),
                        CustomPerformanceClassID: sdk.String("deleniti"),
                        Type: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPerformanceClassTypeEnumCustom,
                    },
                    PreferredUplink: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPreferredUplinkEnumWan2,
                    TrafficFilters: []UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFilters{
                        operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFilters{
                            Type: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersTypeEnumApplication,
                            Value: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValue{
                                Destination: &operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueDestination{
                                    Cidr: sdk.String("ea"),
                                    Fqdn: sdk.String("molestias"),
                                    Host: sdk.Int64(156416),
                                    Network: sdk.String("ipsam"),
                                    Port: sdk.String("rem"),
                                    Vlan: sdk.Int64(564067),
                                },
                                ID: sdk.String("4ea763d5-c727-495b-b851-48d6d549e563"),
                                Protocol: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueProtocolEnumIcmp.ToPointer(),
                                Source: &operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueSource{
                                    Cidr: sdk.String("tempore"),
                                    Host: sdk.Int64(214394),
                                    Network: sdk.String("dolorem"),
                                    Port: sdk.String("expedita"),
                                    Vlan: sdk.Int64(805289),
                                },
                            },
                        },
                        operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFilters{
                            Type: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersTypeEnumApplication,
                            Value: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValue{
                                Destination: &operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueDestination{
                                    Cidr: sdk.String("maiores"),
                                    Fqdn: sdk.String("unde"),
                                    Host: sdk.Int64(441239),
                                    Network: sdk.String("voluptatem"),
                                    Port: sdk.String("placeat"),
                                    Vlan: sdk.Int64(292327),
                                },
                                ID: sdk.String("2fc9f484-4225-4e75-b796-065c0efa6f93"),
                                Protocol: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueProtocolEnumTCP.ToPointer(),
                                Source: &operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueSource{
                                    Cidr: sdk.String("molestias"),
                                    Host: sdk.Int64(3570),
                                    Network: sdk.String("fuga"),
                                    Port: sdk.String("beatae"),
                                    Vlan: sdk.Int64(714977),
                                },
                            },
                        },
                    },
                },
                operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferences{
                    FailOverCriterion: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesFailOverCriterionEnumUplinkDown.ToPointer(),
                    PerformanceClass: &operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPerformanceClass{
                        BuiltinPerformanceClassName: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPerformanceClassBuiltinPerformanceClassNameEnumVoIP.ToPointer(),
                        CustomPerformanceClassID: sdk.String("eligendi"),
                        Type: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPerformanceClassTypeEnumCustom,
                    },
                    PreferredUplink: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPreferredUplinkEnumDefaultUplink,
                    TrafficFilters: []UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFilters{
                        operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFilters{
                            Type: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersTypeEnumCustom,
                            Value: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValue{
                                Destination: &operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueDestination{
                                    Cidr: sdk.String("vitae"),
                                    Fqdn: sdk.String("explicabo"),
                                    Host: sdk.Int64(357256),
                                    Network: sdk.String("incidunt"),
                                    Port: sdk.String("soluta"),
                                    Vlan: sdk.Int64(468714),
                                },
                                ID: sdk.String("39f4fe77-210d-41f6-958c-99c722d2bc0f"),
                                Protocol: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueProtocolEnumIcmp6.ToPointer(),
                                Source: &operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueSource{
                                    Cidr: sdk.String("numquam"),
                                    Host: sdk.Int64(28033),
                                    Network: sdk.String("voluptatum"),
                                    Port: sdk.String("ducimus"),
                                    Vlan: sdk.Int64(819883),
                                },
                            },
                        },
                        operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFilters{
                            Type: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersTypeEnumApplicationCategory,
                            Value: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValue{
                                Destination: &operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueDestination{
                                    Cidr: sdk.String("maxime"),
                                    Fqdn: sdk.String("culpa"),
                                    Host: sdk.Int64(642858),
                                    Network: sdk.String("recusandae"),
                                    Port: sdk.String("doloremque"),
                                    Vlan: sdk.Int64(297057),
                                },
                                ID: sdk.String("2dd7caac-9b4c-4aa1-8fe9-e15df903907f"),
                                Protocol: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueProtocolEnumIcmp.ToPointer(),
                                Source: &operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueSource{
                                    Cidr: sdk.String("ducimus"),
                                    Host: sdk.Int64(535148),
                                    Network: sdk.String("dolor"),
                                    Port: sdk.String("ab"),
                                    Vlan: sdk.Int64(575959),
                                },
                            },
                        },
                        operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFilters{
                            Type: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersTypeEnumApplicationCategory,
                            Value: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValue{
                                Destination: &operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueDestination{
                                    Cidr: sdk.String("sequi"),
                                    Fqdn: sdk.String("fugiat"),
                                    Host: sdk.Int64(262824),
                                    Network: sdk.String("odit"),
                                    Port: sdk.String("recusandae"),
                                    Vlan: sdk.Int64(325352),
                                },
                                ID: sdk.String("4a854665-97c5-4023-bc14-71d51aaa6ddf"),
                                Protocol: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueProtocolEnumIcmp.ToPointer(),
                                Source: &operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueSource{
                                    Cidr: sdk.String("laborum"),
                                    Host: sdk.Int64(694444),
                                    Network: sdk.String("nulla"),
                                    Port: sdk.String("aliquid"),
                                    Vlan: sdk.Int64(262687),
                                },
                            },
                        },
                    },
                },
                operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferences{
                    FailOverCriterion: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesFailOverCriterionEnumUplinkDown.ToPointer(),
                    PerformanceClass: &operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPerformanceClass{
                        BuiltinPerformanceClassName: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPerformanceClassBuiltinPerformanceClassNameEnumVoIP.ToPointer(),
                        CustomPerformanceClassID: sdk.String("reprehenderit"),
                        Type: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPerformanceClassTypeEnumCustom,
                    },
                    PreferredUplink: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPreferredUplinkEnumDefaultUplink,
                    TrafficFilters: []UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFilters{
                        operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFilters{
                            Type: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersTypeEnumCustom,
                            Value: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValue{
                                Destination: &operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueDestination{
                                    Cidr: sdk.String("aspernatur"),
                                    Fqdn: sdk.String("nobis"),
                                    Host: sdk.Int64(529097),
                                    Network: sdk.String("ex"),
                                    Port: sdk.String("aspernatur"),
                                    Vlan: sdk.Int64(666478),
                                },
                                ID: sdk.String("00bef69e-1001-4576-b0bd-a7afded84a35"),
                                Protocol: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueProtocolEnumTCP.ToPointer(),
                                Source: &operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueSource{
                                    Cidr: sdk.String("aliquam"),
                                    Host: sdk.Int64(109308),
                                    Network: sdk.String("explicabo"),
                                    Port: sdk.String("nesciunt"),
                                    Vlan: sdk.Int64(545400),
                                },
                            },
                        },
                        operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFilters{
                            Type: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersTypeEnumCustom,
                            Value: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValue{
                                Destination: &operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueDestination{
                                    Cidr: sdk.String("inventore"),
                                    Fqdn: sdk.String("officia"),
                                    Host: sdk.Int64(446860),
                                    Network: sdk.String("sequi"),
                                    Port: sdk.String("ad"),
                                    Vlan: sdk.Int64(684717),
                                },
                                ID: sdk.String("c26ae33b-ef97-41a8-b46b-ca1106fe965b"),
                                Protocol: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueProtocolEnumIcmp6.ToPointer(),
                                Source: &operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueSource{
                                    Cidr: sdk.String("vitae"),
                                    Host: sdk.Int64(105497),
                                    Network: sdk.String("pariatur"),
                                    Port: sdk.String("voluptatem"),
                                    Vlan: sdk.Int64(502432),
                                },
                            },
                        },
                        operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFilters{
                            Type: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersTypeEnumCustom,
                            Value: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValue{
                                Destination: &operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueDestination{
                                    Cidr: sdk.String("tenetur"),
                                    Fqdn: sdk.String("deleniti"),
                                    Host: sdk.Int64(537321),
                                    Network: sdk.String("necessitatibus"),
                                    Port: sdk.String("cumque"),
                                    Vlan: sdk.Int64(611630),
                                },
                                ID: sdk.String("f7b99a55-0a65-46ed-b33b-b0ce8aa65432"),
                                Protocol: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueProtocolEnumTCP.ToPointer(),
                                Source: &operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueSource{
                                    Cidr: sdk.String("cupiditate"),
                                    Host: sdk.Int64(525089),
                                    Network: sdk.String("ea"),
                                    Port: sdk.String("debitis"),
                                    Vlan: sdk.Int64(743023),
                                },
                            },
                        },
                        operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFilters{
                            Type: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersTypeEnumApplicationCategory,
                            Value: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValue{
                                Destination: &operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueDestination{
                                    Cidr: sdk.String("eveniet"),
                                    Fqdn: sdk.String("beatae"),
                                    Host: sdk.Int64(295651),
                                    Network: sdk.String("quisquam"),
                                    Port: sdk.String("mollitia"),
                                    Vlan: sdk.Int64(370219),
                                },
                                ID: sdk.String("64089150-0970-419a-88f8-8ece7bf904e0"),
                                Protocol: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueProtocolEnumAny.ToPointer(),
                                Source: &operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueSource{
                                    Cidr: sdk.String("dicta"),
                                    Host: sdk.Int64(25476),
                                    Network: sdk.String("ad"),
                                    Port: sdk.String("temporibus"),
                                    Vlan: sdk.Int64(196728),
                                },
                            },
                        },
                    },
                },
                operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferences{
                    FailOverCriterion: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesFailOverCriterionEnumUplinkDown.ToPointer(),
                    PerformanceClass: &operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPerformanceClass{
                        BuiltinPerformanceClassName: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPerformanceClassBuiltinPerformanceClassNameEnumVoIP.ToPointer(),
                        CustomPerformanceClassID: sdk.String("excepturi"),
                        Type: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPerformanceClassTypeEnumBuiltin,
                    },
                    PreferredUplink: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPreferredUplinkEnumLoadBalancing,
                    TrafficFilters: []UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFilters{
                        operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFilters{
                            Type: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersTypeEnumApplicationCategory,
                            Value: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValue{
                                Destination: &operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueDestination{
                                    Cidr: sdk.String("aspernatur"),
                                    Fqdn: sdk.String("quod"),
                                    Host: sdk.Int64(379552),
                                    Network: sdk.String("tempore"),
                                    Port: sdk.String("recusandae"),
                                    Vlan: sdk.Int64(687883),
                                },
                                ID: sdk.String("68a0f657-b7d0-43a1-880f-8de30f069d81"),
                                Protocol: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueProtocolEnumAny.ToPointer(),
                                Source: &operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueSource{
                                    Cidr: sdk.String("commodi"),
                                    Host: sdk.Int64(103068),
                                    Network: sdk.String("atque"),
                                    Port: sdk.String("temporibus"),
                                    Vlan: sdk.Int64(600167),
                                },
                            },
                        },
                    },
                },
            },
            WanTrafficUplinkPreferences: []UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferences{
                operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferences{
                    PreferredUplink: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesPreferredUplinkEnumWan2,
                    TrafficFilters: []UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFilters{
                        operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFilters{
                            Type: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersTypeEnumCustom,
                            Value: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValue{
                                Destination: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueDestination{
                                    Cidr: sdk.String("ad"),
                                    Port: sdk.String("quia"),
                                },
                                Protocol: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueProtocolEnumAny.ToPointer(),
                                Source: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueSource{
                                    Cidr: sdk.String("iste"),
                                    Host: sdk.Int64(472734),
                                    Port: sdk.String("minima"),
                                    Vlan: sdk.Int64(90067),
                                },
                            },
                        },
                    },
                },
                operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferences{
                    PreferredUplink: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesPreferredUplinkEnumWan1,
                    TrafficFilters: []UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFilters{
                        operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFilters{
                            Type: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersTypeEnumCustom,
                            Value: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValue{
                                Destination: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueDestination{
                                    Cidr: sdk.String("culpa"),
                                    Port: sdk.String("voluptatum"),
                                },
                                Protocol: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueProtocolEnumAny.ToPointer(),
                                Source: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueSource{
                                    Cidr: sdk.String("amet"),
                                    Host: sdk.Int64(110280),
                                    Port: sdk.String("explicabo"),
                                    Vlan: sdk.Int64(158768),
                                },
                            },
                        },
                        operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFilters{
                            Type: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersTypeEnumCustom,
                            Value: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValue{
                                Destination: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueDestination{
                                    Cidr: sdk.String("provident"),
                                    Port: sdk.String("fugit"),
                                },
                                Protocol: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueProtocolEnumUDP.ToPointer(),
                                Source: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueSource{
                                    Cidr: sdk.String("optio"),
                                    Host: sdk.Int64(387067),
                                    Port: sdk.String("quasi"),
                                    Vlan: sdk.Int64(780614),
                                },
                            },
                        },
                        operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFilters{
                            Type: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersTypeEnumCustom,
                            Value: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValue{
                                Destination: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueDestination{
                                    Cidr: sdk.String("sed"),
                                    Port: sdk.String("laborum"),
                                },
                                Protocol: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueProtocolEnumIcmp6.ToPointer(),
                                Source: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueSource{
                                    Cidr: sdk.String("eaque"),
                                    Host: sdk.Int64(140083),
                                    Port: sdk.String("distinctio"),
                                    Vlan: sdk.Int64(746936),
                                },
                            },
                        },
                        operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFilters{
                            Type: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersTypeEnumCustom,
                            Value: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValue{
                                Destination: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueDestination{
                                    Cidr: sdk.String("sint"),
                                    Port: sdk.String("odio"),
                                },
                                Protocol: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueProtocolEnumUDP.ToPointer(),
                                Source: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueSource{
                                    Cidr: sdk.String("accusamus"),
                                    Host: sdk.Int64(93556),
                                    Port: sdk.String("accusantium"),
                                    Vlan: sdk.Int64(175168),
                                },
                            },
                        },
                    },
                },
            },
        },
        NetworkID: "fugiat",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkApplianceTrafficShapingUplinkSelection200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkApplianceVlan

Update a VLAN

### Example Usage

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
    res, err := s.Configure.UpdateNetworkApplianceVlan(ctx, operations.UpdateNetworkApplianceVlanRequest{
        RequestBody: &operations.UpdateNetworkApplianceVlanRequestBody{
            ApplianceIP: sdk.String("id"),
            Cidr: sdk.String("sed"),
            DhcpBootFilename: sdk.String("fugiat"),
            DhcpBootNextServer: sdk.String("recusandae"),
            DhcpBootOptionsEnabled: sdk.Bool(false),
            DhcpHandling: operations.UpdateNetworkApplianceVlanRequestBodyDhcpHandlingEnumDoNotRespondToDhcpRequests.ToPointer(),
            DhcpLeaseTime: operations.UpdateNetworkApplianceVlanRequestBodyDhcpLeaseTimeEnumOneHour.ToPointer(),
            DhcpOptions: []UpdateNetworkApplianceVlanRequestBodyDhcpOptions{
                operations.UpdateNetworkApplianceVlanRequestBodyDhcpOptions{
                    Code: "praesentium",
                    Type: operations.UpdateNetworkApplianceVlanRequestBodyDhcpOptionsTypeEnumText,
                    Value: "sit",
                },
                operations.UpdateNetworkApplianceVlanRequestBodyDhcpOptions{
                    Code: "quasi",
                    Type: operations.UpdateNetworkApplianceVlanRequestBodyDhcpOptionsTypeEnumIP,
                    Value: "tenetur",
                },
                operations.UpdateNetworkApplianceVlanRequestBodyDhcpOptions{
                    Code: "dolorem",
                    Type: operations.UpdateNetworkApplianceVlanRequestBodyDhcpOptionsTypeEnumHex,
                    Value: "voluptates",
                },
                operations.UpdateNetworkApplianceVlanRequestBodyDhcpOptions{
                    Code: "similique",
                    Type: operations.UpdateNetworkApplianceVlanRequestBodyDhcpOptionsTypeEnumIP,
                    Value: "quidem",
                },
            },
            DhcpRelayServerIps: []string{
                "veniam",
                "eius",
            },
            DNSNameservers: sdk.String("quae"),
            FixedIPAssignments: map[string]interface{}{
                "dolorum": "quod",
            },
            GroupPolicyID: sdk.String("sunt"),
            Ipv6: &operations.UpdateNetworkApplianceVlanRequestBodyIpv6{
                Enabled: sdk.Bool(false),
                PrefixAssignments: []UpdateNetworkApplianceVlanRequestBodyIpv6PrefixAssignments{
                    operations.UpdateNetworkApplianceVlanRequestBodyIpv6PrefixAssignments{
                        Autonomous: sdk.Bool(false),
                        Origin: &operations.UpdateNetworkApplianceVlanRequestBodyIpv6PrefixAssignmentsOrigin{
                            Interfaces: []string{
                                "incidunt",
                            },
                            Type: operations.UpdateNetworkApplianceVlanRequestBodyIpv6PrefixAssignmentsOriginTypeEnumInternet,
                        },
                        StaticApplianceIp6: sdk.String("a"),
                        StaticPrefix: sdk.String("vitae"),
                    },
                    operations.UpdateNetworkApplianceVlanRequestBodyIpv6PrefixAssignments{
                        Autonomous: sdk.Bool(false),
                        Origin: &operations.UpdateNetworkApplianceVlanRequestBodyIpv6PrefixAssignmentsOrigin{
                            Interfaces: []string{
                                "placeat",
                                "cupiditate",
                                "asperiores",
                                "maxime",
                            },
                            Type: operations.UpdateNetworkApplianceVlanRequestBodyIpv6PrefixAssignmentsOriginTypeEnumIndependent,
                        },
                        StaticApplianceIp6: sdk.String("dicta"),
                        StaticPrefix: sdk.String("deserunt"),
                    },
                },
            },
            MandatoryDhcp: &operations.UpdateNetworkApplianceVlanRequestBodyMandatoryDhcp{
                Enabled: sdk.Bool(false),
            },
            Mask: sdk.Int64(672164),
            Name: sdk.String("Derek Von"),
            ReservedIPRanges: []UpdateNetworkApplianceVlanRequestBodyReservedIPRanges{
                operations.UpdateNetworkApplianceVlanRequestBodyReservedIPRanges{
                    Comment: "sit",
                    End: "porro",
                    Start: "labore",
                },
                operations.UpdateNetworkApplianceVlanRequestBodyReservedIPRanges{
                    Comment: "molestias",
                    End: "qui",
                    Start: "soluta",
                },
                operations.UpdateNetworkApplianceVlanRequestBodyReservedIPRanges{
                    Comment: "ullam",
                    End: "nihil",
                    Start: "ut",
                },
                operations.UpdateNetworkApplianceVlanRequestBodyReservedIPRanges{
                    Comment: "incidunt",
                    End: "quibusdam",
                    Start: "doloremque",
                },
            },
            Subnet: sdk.String("rem"),
            TemplateVlanType: operations.UpdateNetworkApplianceVlanRequestBodyTemplateVlanTypeEnumUnique.ToPointer(),
            VpnNatSubnet: sdk.String("explicabo"),
        },
        NetworkID: "odit",
        VlanID: "laboriosam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkApplianceVlan200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkApplianceVlansSettings

Enable/Disable VLANs for the given network

### Example Usage

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
    res, err := s.Configure.UpdateNetworkApplianceVlansSettings(ctx, operations.UpdateNetworkApplianceVlansSettingsRequest{
        RequestBody: &operations.UpdateNetworkApplianceVlansSettingsRequestBody{
            VlansEnabled: sdk.Bool(false),
        },
        NetworkID: "esse",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkApplianceVlansSettings200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkApplianceVpnBgp

Update a Hub BGP Configuration

### Example Usage

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
    res, err := s.Configure.UpdateNetworkApplianceVpnBgp(ctx, operations.UpdateNetworkApplianceVpnBgpRequest{
        RequestBody: operations.UpdateNetworkApplianceVpnBgpRequestBody{
            AsNumber: sdk.Int64(665948),
            Enabled: false,
            IbgpHoldTimer: sdk.Int64(666755),
            Neighbors: []UpdateNetworkApplianceVpnBgpRequestBodyNeighbors{
                operations.UpdateNetworkApplianceVpnBgpRequestBodyNeighbors{
                    AllowTransit: sdk.Bool(false),
                    EbgpHoldTimer: 891294,
                    EbgpMultihop: 461186,
                    IP: sdk.String("omnis"),
                    Ipv6: &operations.UpdateNetworkApplianceVpnBgpRequestBodyNeighborsIpv6{
                        Address: "274 Marcel Spurs",
                    },
                    ReceiveLimit: sdk.Int64(195317),
                    RemoteAsNumber: 91510,
                },
                operations.UpdateNetworkApplianceVpnBgpRequestBodyNeighbors{
                    AllowTransit: sdk.Bool(false),
                    EbgpHoldTimer: 732172,
                    EbgpMultihop: 915217,
                    IP: sdk.String("cumque"),
                    Ipv6: &operations.UpdateNetworkApplianceVpnBgpRequestBodyNeighborsIpv6{
                        Address: "528 Dandre Land",
                    },
                    ReceiveLimit: sdk.Int64(537738),
                    RemoteAsNumber: 649690,
                },
                operations.UpdateNetworkApplianceVpnBgpRequestBodyNeighbors{
                    AllowTransit: sdk.Bool(false),
                    EbgpHoldTimer: 894165,
                    EbgpMultihop: 203585,
                    IP: sdk.String("facilis"),
                    Ipv6: &operations.UpdateNetworkApplianceVpnBgpRequestBodyNeighborsIpv6{
                        Address: "812 Marquardt Flats",
                    },
                    ReceiveLimit: sdk.Int64(324043),
                    RemoteAsNumber: 45570,
                },
                operations.UpdateNetworkApplianceVpnBgpRequestBodyNeighbors{
                    AllowTransit: sdk.Bool(false),
                    EbgpHoldTimer: 658917,
                    EbgpMultihop: 603863,
                    IP: sdk.String("rem"),
                    Ipv6: &operations.UpdateNetworkApplianceVpnBgpRequestBodyNeighborsIpv6{
                        Address: "6363 Pagac Spring",
                    },
                    ReceiveLimit: sdk.Int64(471535),
                    RemoteAsNumber: 61877,
                },
            },
        },
        NetworkID: "ducimus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkApplianceVpnBgp200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkApplianceVpnSiteToSiteVpn

Update the site-to-site VPN settings of a network. Only valid for MX networks in NAT mode.

### Example Usage

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
    res, err := s.Configure.UpdateNetworkApplianceVpnSiteToSiteVpn(ctx, operations.UpdateNetworkApplianceVpnSiteToSiteVpnRequest{
        RequestBody: operations.UpdateNetworkApplianceVpnSiteToSiteVpnRequestBody{
            Hubs: []UpdateNetworkApplianceVpnSiteToSiteVpnRequestBodyHubs{
                operations.UpdateNetworkApplianceVpnSiteToSiteVpnRequestBodyHubs{
                    HubID: "eaque",
                    UseDefaultRoute: sdk.Bool(false),
                },
                operations.UpdateNetworkApplianceVpnSiteToSiteVpnRequestBodyHubs{
                    HubID: "ex",
                    UseDefaultRoute: sdk.Bool(false),
                },
                operations.UpdateNetworkApplianceVpnSiteToSiteVpnRequestBodyHubs{
                    HubID: "rerum",
                    UseDefaultRoute: sdk.Bool(false),
                },
                operations.UpdateNetworkApplianceVpnSiteToSiteVpnRequestBodyHubs{
                    HubID: "magni",
                    UseDefaultRoute: sdk.Bool(false),
                },
            },
            Mode: operations.UpdateNetworkApplianceVpnSiteToSiteVpnRequestBodyModeEnumNone,
            Subnets: []UpdateNetworkApplianceVpnSiteToSiteVpnRequestBodySubnets{
                operations.UpdateNetworkApplianceVpnSiteToSiteVpnRequestBodySubnets{
                    LocalSubnet: "minus",
                    UseVpn: sdk.Bool(false),
                },
                operations.UpdateNetworkApplianceVpnSiteToSiteVpnRequestBodySubnets{
                    LocalSubnet: "porro",
                    UseVpn: sdk.Bool(false),
                },
                operations.UpdateNetworkApplianceVpnSiteToSiteVpnRequestBodySubnets{
                    LocalSubnet: "atque",
                    UseVpn: sdk.Bool(false),
                },
                operations.UpdateNetworkApplianceVpnSiteToSiteVpnRequestBodySubnets{
                    LocalSubnet: "autem",
                    UseVpn: sdk.Bool(false),
                },
            },
        },
        NetworkID: "eius",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkApplianceVpnSiteToSiteVpn200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkApplianceWarmSpare

Update MX warm spare settings

### Example Usage

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
    res, err := s.Configure.UpdateNetworkApplianceWarmSpare(ctx, operations.UpdateNetworkApplianceWarmSpareRequest{
        RequestBody: operations.UpdateNetworkApplianceWarmSpareRequestBody{
            Enabled: false,
            SpareSerial: sdk.String("unde"),
            UplinkMode: sdk.String("sunt"),
            VirtualIp1: sdk.String("amet"),
            VirtualIp2: sdk.String("laudantium"),
        },
        NetworkID: "commodi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkApplianceWarmSpare200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkCameraQualityRetentionProfile

Update an existing quality retention profile for this network.

### Example Usage

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
    res, err := s.Configure.UpdateNetworkCameraQualityRetentionProfile(ctx, operations.UpdateNetworkCameraQualityRetentionProfileRequest{
        RequestBody: &operations.UpdateNetworkCameraQualityRetentionProfileRequestBody{
            AudioRecordingEnabled: sdk.Bool(false),
            CloudArchiveEnabled: sdk.Bool(false),
            MaxRetentionDays: sdk.Int64(954344),
            MotionBasedRetentionEnabled: sdk.Bool(false),
            MotionDetectorVersion: sdk.Int64(400940),
            Name: sdk.String("Lynne Miller"),
            RestrictedBandwidthModeEnabled: sdk.Bool(false),
            ScheduleID: sdk.String("eligendi"),
            VideoSettings: &operations.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettings{
                Mv12Mv22Mv72: &operations.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72{
                    Quality: operations.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72QualityEnumEnhanced,
                    Resolution: operations.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72ResolutionEnumOneThousandNineHundredAndTwentyx1080,
                },
                Mv12We: &operations.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12WE{
                    Quality: operations.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12WEQualityEnumStandard,
                    Resolution: operations.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12WEResolutionEnumOneThousandTwoHundredAndEightyx720,
                },
                Mv13: &operations.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv13{
                    Quality: operations.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv13QualityEnumStandard,
                    Resolution: operations.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv13ResolutionEnumOneThousandAndEightyx1080,
                },
                Mv21Mv71: &operations.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71{
                    Quality: operations.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71QualityEnumHigh,
                    Resolution: operations.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71ResolutionEnumOneThousandTwoHundredAndEightyx720,
                },
                Mv22XMv72X: &operations.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72X{
                    Quality: operations.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72XQualityEnumHigh,
                    Resolution: operations.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72XResolutionEnumOneThousandNineHundredAndTwentyx1080,
                },
                Mv32: &operations.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32{
                    Quality: operations.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32QualityEnumEnhanced,
                    Resolution: operations.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32ResolutionEnumTwoThousandAndFiftyEightx2058,
                },
                Mv33: &operations.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv33{
                    Quality: operations.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv33QualityEnumEnhanced,
                    Resolution: operations.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv33ResolutionEnumTwoThousandOneHundredAndTwelvex2112,
                },
                Mv52: &operations.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv52{
                    Quality: operations.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv52QualityEnumStandard,
                    Resolution: operations.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv52ResolutionEnumOneThousandTwoHundredAndEightyx720,
                },
                Mv63: &operations.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv63{
                    Quality: operations.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv63QualityEnumStandard,
                    Resolution: operations.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv63ResolutionEnumTwoThousandSixHundredAndEightyEightx1512,
                },
                Mv63X: &operations.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv63X{
                    Quality: operations.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv63XQualityEnumEnhanced,
                    Resolution: operations.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv63XResolutionEnumThreeThousandEightHundredAndFortyx2160,
                },
                Mv93: &operations.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv93{
                    Quality: operations.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv93QualityEnumHigh,
                    Resolution: operations.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv93ResolutionEnumOneThousandAndEightyx1080,
                },
                Mv93X: &operations.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv93X{
                    Quality: operations.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv93XQualityEnumEnhanced,
                    Resolution: operations.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv93XResolutionEnumTwoThousandEightHundredAndEightyx2880,
                },
            },
        },
        NetworkID: "deleniti",
        QualityRetentionProfileID: "optio",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkCameraQualityRetentionProfile200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkCameraWirelessProfile

Update an existing camera wireless profile in this network.

### Example Usage

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
    res, err := s.Configure.UpdateNetworkCameraWirelessProfile(ctx, operations.UpdateNetworkCameraWirelessProfileRequest{
        RequestBody: &operations.UpdateNetworkCameraWirelessProfileRequestBody{
            Identity: &operations.UpdateNetworkCameraWirelessProfileRequestBodyIdentity{
                Password: sdk.String("consequuntur"),
                Username: sdk.String("Delmer_Stehr22"),
            },
            Name: sdk.String("Freda Nitzsche"),
            Ssid: &operations.UpdateNetworkCameraWirelessProfileRequestBodySsid{
                AuthMode: operations.UpdateNetworkCameraWirelessProfileRequestBodySsidAuthModeEnumPsk.ToPointer(),
                EncryptionMode: sdk.String("tempore"),
                Name: sdk.String("Jean Zieme"),
                Psk: sdk.String("iste"),
            },
        },
        NetworkID: "numquam",
        WirelessProfileID: "similique",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkCameraWirelessProfile200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkCellularGatewayConnectivityMonitoringDestinations

Update the connectivity testing destinations for an MG network

### Example Usage

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
    res, err := s.Configure.UpdateNetworkCellularGatewayConnectivityMonitoringDestinations(ctx, operations.UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsRequest{
        RequestBody: &operations.UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsRequestBody{
            Destinations: []UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsRequestBodyDestinations{
                operations.UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsRequestBodyDestinations{
                    Default: sdk.Bool(false),
                    Description: sdk.String("minus"),
                    IP: "sint",
                },
                operations.UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsRequestBodyDestinations{
                    Default: sdk.Bool(false),
                    Description: sdk.String("aliquam"),
                    IP: "consectetur",
                },
                operations.UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsRequestBodyDestinations{
                    Default: sdk.Bool(false),
                    Description: sdk.String("ullam"),
                    IP: "dicta",
                },
                operations.UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsRequestBodyDestinations{
                    Default: sdk.Bool(false),
                    Description: sdk.String("nesciunt"),
                    IP: "reprehenderit",
                },
            },
        },
        NetworkID: "esse",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkCellularGatewayConnectivityMonitoringDestinations200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkCellularGatewayDhcp

Update common DHCP settings of MGs

### Example Usage

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
    res, err := s.Configure.UpdateNetworkCellularGatewayDhcp(ctx, operations.UpdateNetworkCellularGatewayDhcpRequest{
        RequestBody: &operations.UpdateNetworkCellularGatewayDhcpRequestBody{
            DhcpLeaseTime: sdk.String("magni"),
            DNSCustomNameservers: []string{
                "quibusdam",
                "veritatis",
            },
            DNSNameservers: sdk.String("ad"),
        },
        NetworkID: "velit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkCellularGatewayDhcp200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkCellularGatewaySubnetPool

Update the subnet pool and mask configuration for MGs in the network.

### Example Usage

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
    res, err := s.Configure.UpdateNetworkCellularGatewaySubnetPool(ctx, operations.UpdateNetworkCellularGatewaySubnetPoolRequest{
        RequestBody: &operations.UpdateNetworkCellularGatewaySubnetPoolRequestBody{
            Cidr: sdk.String("quia"),
            Mask: sdk.Int64(119927),
        },
        NetworkID: "nam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkCellularGatewaySubnetPool200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkCellularGatewayUplink

Updates the uplink settings for your MG network.

### Example Usage

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
    res, err := s.Configure.UpdateNetworkCellularGatewayUplink(ctx, operations.UpdateNetworkCellularGatewayUplinkRequest{
        RequestBody: &operations.UpdateNetworkCellularGatewayUplinkRequestBody{
            BandwidthLimits: &operations.UpdateNetworkCellularGatewayUplinkRequestBodyBandwidthLimits{
                LimitDown: sdk.Int64(554508),
                LimitUp: sdk.Int64(242972),
            },
        },
        NetworkID: "ratione",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkCellularGatewayUplink200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkClientPolicy

Update the policy assigned to a client on the network. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.

### Example Usage

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
    res, err := s.Configure.UpdateNetworkClientPolicy(ctx, operations.UpdateNetworkClientPolicyRequest{
        RequestBody: operations.UpdateNetworkClientPolicyRequestBody{
            DevicePolicy: "fuga",
            GroupPolicyID: sdk.String("minima"),
        },
        ClientID: "aliquid",
        NetworkID: "facere",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkClientPolicy200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkClientSplashAuthorizationStatus

Update a client's splash authorization. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.

### Example Usage

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
    res, err := s.Configure.UpdateNetworkClientSplashAuthorizationStatus(ctx, operations.UpdateNetworkClientSplashAuthorizationStatusRequest{
        RequestBody: operations.UpdateNetworkClientSplashAuthorizationStatusRequestBody{
            Ssids: operations.UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids{
                Zero: &operations.UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids0{
                    IsAuthorized: sdk.Bool(false),
                },
                One: &operations.UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids1{
                    IsAuthorized: sdk.Bool(false),
                },
                Ten: &operations.UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids10{
                    IsAuthorized: sdk.Bool(false),
                },
                Eleven: &operations.UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids11{
                    IsAuthorized: sdk.Bool(false),
                },
                Twelve: &operations.UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids12{
                    IsAuthorized: sdk.Bool(false),
                },
                Thirteen: &operations.UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids13{
                    IsAuthorized: sdk.Bool(false),
                },
                Fourteen: &operations.UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids14{
                    IsAuthorized: sdk.Bool(false),
                },
                Two: &operations.UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids2{
                    IsAuthorized: sdk.Bool(false),
                },
                Three: &operations.UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids3{
                    IsAuthorized: sdk.Bool(false),
                },
                Four: &operations.UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids4{
                    IsAuthorized: sdk.Bool(false),
                },
                Five: &operations.UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids5{
                    IsAuthorized: sdk.Bool(false),
                },
                Six: &operations.UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids6{
                    IsAuthorized: sdk.Bool(false),
                },
                Seven: &operations.UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids7{
                    IsAuthorized: sdk.Bool(false),
                },
                Eight: &operations.UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids8{
                    IsAuthorized: sdk.Bool(false),
                },
                Nine: &operations.UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids9{
                    IsAuthorized: sdk.Bool(false),
                },
            },
        },
        ClientID: "laboriosam",
        NetworkID: "sint",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkClientSplashAuthorizationStatus200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkFirmwareUpgrades

Update firmware upgrade information for a network

### Example Usage

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
    res, err := s.Configure.UpdateNetworkFirmwareUpgrades(ctx, operations.UpdateNetworkFirmwareUpgradesRequest{
        RequestBody: &operations.UpdateNetworkFirmwareUpgradesRequestBody{
            Products: &operations.UpdateNetworkFirmwareUpgradesRequestBodyProducts{
                Appliance: &operations.UpdateNetworkFirmwareUpgradesRequestBodyProductsAppliance{
                    NextUpgrade: &operations.UpdateNetworkFirmwareUpgradesRequestBodyProductsApplianceNextUpgrade{
                        Time: sdk.String("architecto"),
                        ToVersion: &operations.UpdateNetworkFirmwareUpgradesRequestBodyProductsApplianceNextUpgradeToVersion{
                            ID: sdk.String("80ff60eb-9a66-458e-a9a4-b843d382dbec"),
                        },
                    },
                    ParticipateInNextBetaRelease: sdk.Bool(false),
                },
                Camera: &operations.UpdateNetworkFirmwareUpgradesRequestBodyProductsCamera{
                    NextUpgrade: &operations.UpdateNetworkFirmwareUpgradesRequestBodyProductsCameraNextUpgrade{
                        Time: sdk.String("ducimus"),
                        ToVersion: &operations.UpdateNetworkFirmwareUpgradesRequestBodyProductsCameraNextUpgradeToVersion{
                            ID: sdk.String("5c68c606-5946-48ce-b04d-8849bf8214c3"),
                        },
                    },
                    ParticipateInNextBetaRelease: sdk.Bool(false),
                },
                CellularGateway: &operations.UpdateNetworkFirmwareUpgradesRequestBodyProductsCellularGateway{
                    NextUpgrade: &operations.UpdateNetworkFirmwareUpgradesRequestBodyProductsCellularGatewayNextUpgrade{
                        Time: sdk.String("ipsum"),
                        ToVersion: &operations.UpdateNetworkFirmwareUpgradesRequestBodyProductsCellularGatewayNextUpgradeToVersion{
                            ID: sdk.String("7f96bb0c-69e3-472d-b134-4ba9f78a5c0e"),
                        },
                    },
                    ParticipateInNextBetaRelease: sdk.Bool(false),
                },
                Sensor: &operations.UpdateNetworkFirmwareUpgradesRequestBodyProductsSensor{
                    NextUpgrade: &operations.UpdateNetworkFirmwareUpgradesRequestBodyProductsSensorNextUpgrade{
                        Time: sdk.String("facere"),
                        ToVersion: &operations.UpdateNetworkFirmwareUpgradesRequestBodyProductsSensorNextUpgradeToVersion{
                            ID: sdk.String("7aab62e9-7261-4fb0-858d-27b51996b5b4"),
                        },
                    },
                    ParticipateInNextBetaRelease: sdk.Bool(false),
                },
                Switch: &operations.UpdateNetworkFirmwareUpgradesRequestBodyProductsSwitch{
                    NextUpgrade: &operations.UpdateNetworkFirmwareUpgradesRequestBodyProductsSwitchNextUpgrade{
                        Time: sdk.String("expedita"),
                        ToVersion: &operations.UpdateNetworkFirmwareUpgradesRequestBodyProductsSwitchNextUpgradeToVersion{
                            ID: sdk.String("50eef712-b7a7-4ab0-b44b-1710688deebe"),
                        },
                    },
                    ParticipateInNextBetaRelease: sdk.Bool(false),
                },
                Wireless: &operations.UpdateNetworkFirmwareUpgradesRequestBodyProductsWireless{
                    NextUpgrade: &operations.UpdateNetworkFirmwareUpgradesRequestBodyProductsWirelessNextUpgrade{
                        Time: sdk.String("asperiores"),
                        ToVersion: &operations.UpdateNetworkFirmwareUpgradesRequestBodyProductsWirelessNextUpgradeToVersion{
                            ID: sdk.String("897f3dd0-ccd3-43f1-9b3e-4e080aa10418"),
                        },
                    },
                    ParticipateInNextBetaRelease: sdk.Bool(false),
                },
            },
            Timezone: sdk.String("eum"),
            UpgradeWindow: &operations.UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindow{
                DayOfWeek: operations.UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindowDayOfWeekEnumWed.ToPointer(),
                HourOfDay: operations.UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindowHourOfDayEnumFour00.ToPointer(),
            },
        },
        NetworkID: "odio",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkFirmwareUpgrades200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkFirmwareUpgradesStagedEvents

Update the Staged Upgrade Event for a network

### Example Usage

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
    res, err := s.Configure.UpdateNetworkFirmwareUpgradesStagedEvents(ctx, operations.UpdateNetworkFirmwareUpgradesStagedEventsRequest{
        RequestBody: operations.UpdateNetworkFirmwareUpgradesStagedEventsRequestBody{
            Stages: []UpdateNetworkFirmwareUpgradesStagedEventsRequestBodyStages{
                operations.UpdateNetworkFirmwareUpgradesStagedEventsRequestBodyStages{
                    Group: &operations.UpdateNetworkFirmwareUpgradesStagedEventsRequestBodyStagesGroup{
                        ID: "9e02f370-2c5c-48e2-930e-ad3104fa4470",
                    },
                    Milestones: &operations.UpdateNetworkFirmwareUpgradesStagedEventsRequestBodyStagesMilestones{
                        ScheduledFor: "molestiae",
                    },
                },
                operations.UpdateNetworkFirmwareUpgradesStagedEventsRequestBodyStages{
                    Group: &operations.UpdateNetworkFirmwareUpgradesStagedEventsRequestBodyStagesGroup{
                        ID: "bf375b44-2828-421f-9b2f-69e59267c71c",
                    },
                    Milestones: &operations.UpdateNetworkFirmwareUpgradesStagedEventsRequestBodyStagesMilestones{
                        ScheduledFor: "optio",
                    },
                },
            },
        },
        NetworkID: "voluptatum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkFirmwareUpgradesStagedEvents200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkFirmwareUpgradesStagedGroup

Update a Staged Upgrade Group for a network

### Example Usage

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
    res, err := s.Configure.UpdateNetworkFirmwareUpgradesStagedGroup(ctx, operations.UpdateNetworkFirmwareUpgradesStagedGroupRequest{
        RequestBody: operations.UpdateNetworkFirmwareUpgradesStagedGroupRequestBody{
            AssignedDevices: &operations.UpdateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevices{
                Devices: []UpdateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevicesDevices{
                    operations.UpdateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevicesDevices{
                        Name: sdk.String("Roxanne Schultz"),
                        Serial: "quis",
                    },
                    operations.UpdateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevicesDevices{
                        Name: sdk.String("Jake Baumbach"),
                        Serial: "deleniti",
                    },
                    operations.UpdateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevicesDevices{
                        Name: sdk.String("Willard Conn"),
                        Serial: "aut",
                    },
                    operations.UpdateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevicesDevices{
                        Name: sdk.String("Edmond Vandervort"),
                        Serial: "ullam",
                    },
                },
                SwitchStacks: []UpdateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevicesSwitchStacks{
                    operations.UpdateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevicesSwitchStacks{
                        ID: "a2047c04-49e1-443f-9619-bb7d40d5a11f",
                        Name: sdk.String("Don Donnelly"),
                    },
                },
            },
            Description: sdk.String("commodi"),
            IsDefault: false,
            Name: "Mrs. Yvonne Morissette",
        },
        GroupID: "hic",
        NetworkID: "natus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkFirmwareUpgradesStagedGroup200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkFirmwareUpgradesStagedStages

Assign Staged Upgrade Group order in the sequence.

### Example Usage

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
    res, err := s.Configure.UpdateNetworkFirmwareUpgradesStagedStages(ctx, operations.UpdateNetworkFirmwareUpgradesStagedStagesRequest{
        RequestBody: &operations.UpdateNetworkFirmwareUpgradesStagedStagesRequestBody{
            JSON: []UpdateNetworkFirmwareUpgradesStagedStagesRequestBodyJSON{
                operations.UpdateNetworkFirmwareUpgradesStagedStagesRequestBodyJSON{
                    Group: &operations.UpdateNetworkFirmwareUpgradesStagedStagesRequestBodyJSONGroup{
                        ID: "c9d23739-7c78-45b5-9b4f-500183febdf6",
                    },
                },
                operations.UpdateNetworkFirmwareUpgradesStagedStagesRequestBodyJSON{
                    Group: &operations.UpdateNetworkFirmwareUpgradesStagedStagesRequestBodyJSONGroup{
                        ID: "76b7206d-ab75-4005-aa56-47edc439ed8c",
                    },
                },
            },
        },
        NetworkID: "aliquam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkFirmwareUpgradesStagedStages200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## UpdateNetworkFloorPlan

Update a floor plan's geolocation and other meta data

### Example Usage

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
    res, err := s.Configure.UpdateNetworkFloorPlan(ctx, operations.UpdateNetworkFloorPlanRequest{
        RequestBody: &operations.UpdateNetworkFloorPlanRequestBody{
            BottomLeftCorner: &operations.UpdateNetworkFloorPlanRequestBodyBottomLeftCorner{
                Lat: sdk.Float32(2387.23),
                Lng: sdk.Float32(1301.47),
            },
            BottomRightCorner: &operations.UpdateNetworkFloorPlanRequestBodyBottomRightCorner{
                Lat: sdk.Float32(510.89),
                Lng: sdk.Float32(9417.09),
            },
            Center: &operations.UpdateNetworkFloorPlanRequestBodyCenter{
                Lat: sdk.Float32(2768.28),
                Lng: sdk.Float32(658.26),
            },
            ImageContents: sdk.String("eos"),
            Name: sdk.String("Betty Smitham"),
            TopLeftCorner: &operations.UpdateNetworkFloorPlanRequestBodyTopLeftCorner{
                Lat: sdk.Float32(5208.11),
                Lng: sdk.Float32(4808.49),
            },
            TopRightCorner: &operations.UpdateNetworkFloorPlanRequestBodyTopRightCorner{
                Lat: sdk.Float32(6503.19),
                Lng: sdk.Float32(7842.87),
            },
        },
        FloorPlanID: "voluptas",
        NetworkID: "provident",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkFloorPlan200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkGroupPolicy

Update a group policy

### Example Usage

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
    res, err := s.Configure.UpdateNetworkGroupPolicy(ctx, operations.UpdateNetworkGroupPolicyRequest{
        RequestBody: &operations.UpdateNetworkGroupPolicyRequestBody{
            Bandwidth: &operations.UpdateNetworkGroupPolicyRequestBodyBandwidth{
                BandwidthLimits: &operations.UpdateNetworkGroupPolicyRequestBodyBandwidthBandwidthLimits{
                    LimitDown: sdk.Int64(204283),
                    LimitUp: sdk.Int64(713240),
                },
                Settings: operations.UpdateNetworkGroupPolicyRequestBodyBandwidthSettingsEnumIgnore.ToPointer(),
            },
            BonjourForwarding: &operations.UpdateNetworkGroupPolicyRequestBodyBonjourForwarding{
                Rules: []UpdateNetworkGroupPolicyRequestBodyBonjourForwardingRules{
                    operations.UpdateNetworkGroupPolicyRequestBodyBonjourForwardingRules{
                        Description: sdk.String("nobis"),
                        Services: []UpdateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnum{
                            operations.UpdateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnumSamba,
                        },
                        VlanID: "unde",
                    },
                    operations.UpdateNetworkGroupPolicyRequestBodyBonjourForwardingRules{
                        Description: sdk.String("fugiat"),
                        Services: []UpdateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnum{
                            operations.UpdateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnumAllServices,
                        },
                        VlanID: "atque",
                    },
                },
                Settings: operations.UpdateNetworkGroupPolicyRequestBodyBonjourForwardingSettingsEnumIgnore.ToPointer(),
            },
            ContentFiltering: &operations.UpdateNetworkGroupPolicyRequestBodyContentFiltering{
                AllowedURLPatterns: &operations.UpdateNetworkGroupPolicyRequestBodyContentFilteringAllowedURLPatterns{
                    Patterns: []string{
                        "odio",
                        "unde",
                        "ad",
                        "officia",
                    },
                    Settings: operations.UpdateNetworkGroupPolicyRequestBodyContentFilteringAllowedURLPatternsSettingsEnumOverride.ToPointer(),
                },
                BlockedURLCategories: &operations.UpdateNetworkGroupPolicyRequestBodyContentFilteringBlockedURLCategories{
                    Categories: []string{
                        "aspernatur",
                        "asperiores",
                    },
                    Settings: operations.UpdateNetworkGroupPolicyRequestBodyContentFilteringBlockedURLCategoriesSettingsEnumOverride.ToPointer(),
                },
                BlockedURLPatterns: &operations.UpdateNetworkGroupPolicyRequestBodyContentFilteringBlockedURLPatterns{
                    Patterns: []string{
                        "accusantium",
                        "corporis",
                    },
                    Settings: operations.UpdateNetworkGroupPolicyRequestBodyContentFilteringBlockedURLPatternsSettingsEnumNetworkDefault.ToPointer(),
                },
            },
            FirewallAndTrafficShaping: &operations.UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShaping{
                L3FirewallRules: []UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL3FirewallRules{
                    operations.UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL3FirewallRules{
                        Comment: sdk.String("omnis"),
                        DestCidr: "tenetur",
                        DestPort: sdk.String("vel"),
                        Policy: "iste",
                        Protocol: "animi",
                    },
                    operations.UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL3FirewallRules{
                        Comment: sdk.String("quae"),
                        DestCidr: "doloremque",
                        DestPort: sdk.String("voluptas"),
                        Policy: "pariatur",
                        Protocol: "fugit",
                    },
                },
                L7FirewallRules: []UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRules{
                    operations.UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRules{
                        Policy: operations.UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRulesPolicyEnumDeny.ToPointer(),
                        Type: operations.UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRulesTypeEnumApplication.ToPointer(),
                        Value: sdk.String("labore"),
                    },
                },
                Settings: operations.UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingSettingsEnumIgnore.ToPointer(),
                TrafficShapingRules: []UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRules{
                    operations.UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRules{
                        Definitions: []UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitions{
                            operations.UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitions{
                                Type: operations.UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnumApplication,
                                Value: "atque",
                            },
                            operations.UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitions{
                                Type: operations.UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnumApplication,
                                Value: "natus",
                            },
                        },
                        DscpTagValue: sdk.Int64(851884),
                        PcpTagValue: sdk.Int64(487820),
                        PerClientBandwidthLimits: &operations.UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesPerClientBandwidthLimits{
                            BandwidthLimits: &operations.UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesPerClientBandwidthLimitsBandwidthLimits{
                                LimitDown: sdk.Int64(775815),
                                LimitUp: sdk.Int64(215391),
                            },
                            Settings: sdk.String("cum"),
                        },
                        Priority: sdk.String("et"),
                    },
                    operations.UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRules{
                        Definitions: []UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitions{
                            operations.UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitions{
                                Type: operations.UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnumApplicationCategory,
                                Value: "illo",
                            },
                            operations.UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitions{
                                Type: operations.UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnumIPRange,
                                Value: "magnam",
                            },
                            operations.UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitions{
                                Type: operations.UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnumApplicationCategory,
                                Value: "consequatur",
                            },
                        },
                        DscpTagValue: sdk.Int64(391778),
                        PcpTagValue: sdk.Int64(60521),
                        PerClientBandwidthLimits: &operations.UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesPerClientBandwidthLimits{
                            BandwidthLimits: &operations.UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesPerClientBandwidthLimitsBandwidthLimits{
                                LimitDown: sdk.Int64(905705),
                                LimitUp: sdk.Int64(37887),
                            },
                            Settings: sdk.String("sit"),
                        },
                        Priority: sdk.String("nesciunt"),
                    },
                },
            },
            Name: sdk.String("Mr. Angela Schuppe"),
            Scheduling: &operations.UpdateNetworkGroupPolicyRequestBodyScheduling{
                Enabled: sdk.Bool(false),
                Friday: &operations.UpdateNetworkGroupPolicyRequestBodySchedulingFriday{
                    Active: sdk.Bool(false),
                    From: sdk.String("repellendus"),
                    To: sdk.String("quod"),
                },
                Monday: &operations.UpdateNetworkGroupPolicyRequestBodySchedulingMonday{
                    Active: sdk.Bool(false),
                    From: sdk.String("error"),
                    To: sdk.String("ipsa"),
                },
                Saturday: &operations.UpdateNetworkGroupPolicyRequestBodySchedulingSaturday{
                    Active: sdk.Bool(false),
                    From: sdk.String("beatae"),
                    To: sdk.String("doloribus"),
                },
                Sunday: &operations.UpdateNetworkGroupPolicyRequestBodySchedulingSunday{
                    Active: sdk.Bool(false),
                    From: sdk.String("veniam"),
                    To: sdk.String("animi"),
                },
                Thursday: &operations.UpdateNetworkGroupPolicyRequestBodySchedulingThursday{
                    Active: sdk.Bool(false),
                    From: sdk.String("delectus"),
                    To: sdk.String("pariatur"),
                },
                Tuesday: &operations.UpdateNetworkGroupPolicyRequestBodySchedulingTuesday{
                    Active: sdk.Bool(false),
                    From: sdk.String("eos"),
                    To: sdk.String("id"),
                },
                Wednesday: &operations.UpdateNetworkGroupPolicyRequestBodySchedulingWednesday{
                    Active: sdk.Bool(false),
                    From: sdk.String("commodi"),
                    To: sdk.String("quo"),
                },
            },
            SplashAuthSettings: operations.UpdateNetworkGroupPolicyRequestBodySplashAuthSettingsEnumBypass.ToPointer(),
            VlanTagging: &operations.UpdateNetworkGroupPolicyRequestBodyVlanTagging{
                Settings: operations.UpdateNetworkGroupPolicyRequestBodyVlanTaggingSettingsEnumCustom.ToPointer(),
                VlanID: sdk.String("praesentium"),
            },
        },
        GroupPolicyID: "numquam",
        NetworkID: "iure",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkGroupPolicy200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkMerakiAuthUser

Update a user configured with Meraki Authentication (currently, 802.1X RADIUS, splash guest, and client VPN users can be updated)

### Example Usage

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
    res, err := s.Configure.UpdateNetworkMerakiAuthUser(ctx, operations.UpdateNetworkMerakiAuthUserRequest{
        RequestBody: &operations.UpdateNetworkMerakiAuthUserRequestBody{
            Authorizations: []UpdateNetworkMerakiAuthUserRequestBodyAuthorizations{
                operations.UpdateNetworkMerakiAuthUserRequestBodyAuthorizations{
                    ExpiresAt: sdk.String("itaque"),
                    SsidNumber: 563154,
                },
                operations.UpdateNetworkMerakiAuthUserRequestBodyAuthorizations{
                    ExpiresAt: sdk.String("assumenda"),
                    SsidNumber: 505663,
                },
                operations.UpdateNetworkMerakiAuthUserRequestBodyAuthorizations{
                    ExpiresAt: sdk.String("occaecati"),
                    SsidNumber: 177255,
                },
            },
            EmailPasswordToUser: sdk.Bool(false),
            Name: sdk.String("Victoria Rolfson"),
            Password: sdk.String("ea"),
        },
        MerakiAuthUserID: "consequuntur",
        NetworkID: "delectus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkMerakiAuthUser200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkMqttBroker

Update an MQTT broker

### Example Usage

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
    res, err := s.Configure.UpdateNetworkMqttBroker(ctx, operations.UpdateNetworkMqttBrokerRequest{
        RequestBody: &operations.UpdateNetworkMqttBrokerRequestBody{
            Authentication: map[string]interface{}{
                "quos": "excepturi",
                "eum": "rerum",
            },
            Host: sdk.String("a"),
            Name: sdk.String("Catherine Vandervort"),
            Port: sdk.Int64(346394),
            Security: &operations.UpdateNetworkMqttBrokerRequestBodySecurity{
                Mode: sdk.String("sed"),
                Security: &operations.UpdateNetworkMqttBrokerRequestBodySecuritySecurity{
                    CaCertificate: sdk.String("fugiat"),
                    VerifyHostnames: sdk.Bool(false),
                },
            },
        },
        MqttBrokerID: "dolorem",
        NetworkID: "cumque",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkMqttBroker200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkNetflow

Update the NetFlow traffic reporting settings for a network

### Example Usage

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
    res, err := s.Configure.UpdateNetworkNetflow(ctx, operations.UpdateNetworkNetflowRequest{
        RequestBody: &operations.UpdateNetworkNetflowRequestBody{
            CollectorIP: sdk.String("nesciunt"),
            CollectorPort: sdk.Int64(304714),
            EtaDstPort: sdk.Int64(233804),
            EtaEnabled: sdk.Bool(false),
            ReportingEnabled: sdk.Bool(false),
        },
        NetworkID: "at",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkNetflow200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkSensorAlertsProfile

Updates a sensor alert profile for a network.

### Example Usage

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
    res, err := s.Configure.UpdateNetworkSensorAlertsProfile(ctx, operations.UpdateNetworkSensorAlertsProfileRequest{
        RequestBody: &operations.UpdateNetworkSensorAlertsProfileRequestBody{
            Conditions: []UpdateNetworkSensorAlertsProfileRequestBodyConditions{
                operations.UpdateNetworkSensorAlertsProfileRequestBodyConditions{
                    Direction: operations.UpdateNetworkSensorAlertsProfileRequestBodyConditionsDirectionEnumAbove.ToPointer(),
                    Duration: operations.UpdateNetworkSensorAlertsProfileRequestBodyConditionsDurationEnumTwoHundredAndForty.ToPointer(),
                    Metric: "dignissimos",
                    Threshold: operations.UpdateNetworkSensorAlertsProfileRequestBodyConditionsThreshold{
                        Door: &operations.UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdDoor{
                            Open: false,
                        },
                        Humidity: &operations.UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdHumidity{
                            Quality: operations.UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdHumidityQualityEnumInadequate.ToPointer(),
                            RelativePercentage: sdk.Int64(654684),
                        },
                        IndoorAirQuality: &operations.UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdIndoorAirQuality{
                            Quality: operations.UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdIndoorAirQualityQualityEnumPoor.ToPointer(),
                            Score: sdk.Int64(312194),
                        },
                        Noise: &operations.UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdNoise{
                            Ambient: operations.UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdNoiseAmbient{
                                Level: sdk.Int64(569960),
                                Quality: operations.UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdNoiseAmbientQualityEnumFair.ToPointer(),
                            },
                        },
                        Pm25: &operations.UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdPm25{
                            Concentration: sdk.Int64(179646),
                            Quality: operations.UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdPm25QualityEnumGood.ToPointer(),
                        },
                        Temperature: &operations.UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdTemperature{
                            Celsius: sdk.Float32(4553.55),
                            Fahrenheit: sdk.Float32(4837.72),
                            Quality: operations.UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdTemperatureQualityEnumFair.ToPointer(),
                        },
                        Tvoc: &operations.UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdTvoc{
                            Concentration: sdk.Int64(318106),
                            Quality: operations.UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdTvocQualityEnumPoor.ToPointer(),
                        },
                        Water: &operations.UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdWater{
                            Present: false,
                        },
                    },
                },
                operations.UpdateNetworkSensorAlertsProfileRequestBodyConditions{
                    Direction: operations.UpdateNetworkSensorAlertsProfileRequestBodyConditionsDirectionEnumAbove.ToPointer(),
                    Duration: operations.UpdateNetworkSensorAlertsProfileRequestBodyConditionsDurationEnumSixty.ToPointer(),
                    Metric: "et",
                    Threshold: operations.UpdateNetworkSensorAlertsProfileRequestBodyConditionsThreshold{
                        Door: &operations.UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdDoor{
                            Open: false,
                        },
                        Humidity: &operations.UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdHumidity{
                            Quality: operations.UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdHumidityQualityEnumInadequate.ToPointer(),
                            RelativePercentage: sdk.Int64(14273),
                        },
                        IndoorAirQuality: &operations.UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdIndoorAirQuality{
                            Quality: operations.UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdIndoorAirQualityQualityEnumInadequate.ToPointer(),
                            Score: sdk.Int64(877613),
                        },
                        Noise: &operations.UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdNoise{
                            Ambient: operations.UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdNoiseAmbient{
                                Level: sdk.Int64(623150),
                                Quality: operations.UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdNoiseAmbientQualityEnumFair.ToPointer(),
                            },
                        },
                        Pm25: &operations.UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdPm25{
                            Concentration: sdk.Int64(58614),
                            Quality: operations.UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdPm25QualityEnumGood.ToPointer(),
                        },
                        Temperature: &operations.UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdTemperature{
                            Celsius: sdk.Float32(2893.22),
                            Fahrenheit: sdk.Float32(6640.46),
                            Quality: operations.UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdTemperatureQualityEnumGood.ToPointer(),
                        },
                        Tvoc: &operations.UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdTvoc{
                            Concentration: sdk.Int64(844505),
                            Quality: operations.UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdTvocQualityEnumPoor.ToPointer(),
                        },
                        Water: &operations.UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdWater{
                            Present: false,
                        },
                    },
                },
            },
            Name: sdk.String("Belinda O'Hara"),
            Recipients: &operations.UpdateNetworkSensorAlertsProfileRequestBodyRecipients{
                Emails: []string{
                    "eaque",
                    "aliquid",
                },
                HTTPServerIds: []string{
                    "odio",
                    "voluptatem",
                },
                SmsNumbers: []string{
                    "delectus",
                    "et",
                    "optio",
                    "a",
                },
            },
            Schedule: &operations.UpdateNetworkSensorAlertsProfileRequestBodySchedule{
                ID: sdk.String("59326052-51e6-46bb-8268-97d99a2d3356"),
            },
            Serials: []string{
                "ipsa",
                "accusamus",
            },
        },
        ID: "93ee6cf5-9f35-48aa-aaca-e323a31bf7ba",
        NetworkID: "architecto",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkSensorAlertsProfile200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkSettings

Update the settings for a network

### Example Usage

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
    res, err := s.Configure.UpdateNetworkSettings(ctx, operations.UpdateNetworkSettingsRequest{
        RequestBody: &operations.UpdateNetworkSettingsRequestBody{
            LocalStatusPage: &operations.UpdateNetworkSettingsRequestBodyLocalStatusPage{
                Authentication: &operations.UpdateNetworkSettingsRequestBodyLocalStatusPageAuthentication{
                    Enabled: sdk.Bool(false),
                    Password: sdk.String("quod"),
                },
            },
            LocalStatusPageEnabled: sdk.Bool(false),
            RemoteStatusPageEnabled: sdk.Bool(false),
            SecurePort: &operations.UpdateNetworkSettingsRequestBodySecurePort{
                Enabled: sdk.Bool(false),
            },
        },
        NetworkID: "minus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkSettings200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkSmDevicesFields

Modify the fields of a device

### Example Usage

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
    res, err := s.Configure.UpdateNetworkSmDevicesFields(ctx, operations.UpdateNetworkSmDevicesFieldsRequest{
        RequestBody: operations.UpdateNetworkSmDevicesFieldsRequestBody{
            DeviceFields: operations.UpdateNetworkSmDevicesFieldsRequestBodyDeviceFields{
                Name: sdk.String("Ms. Darryl Kovacek"),
                Notes: sdk.String("deleniti"),
            },
            ID: sdk.String("02cc9e0c-7d9d-4323-b1aa-63ed9cf1c856"),
            Serial: sdk.String("soluta"),
            WifiMac: sdk.String("quo"),
        },
        NetworkID: "libero",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkSmDevicesFields200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## UpdateNetworkSmTargetGroup

Update a target group

### Example Usage

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
    res, err := s.Configure.UpdateNetworkSmTargetGroup(ctx, operations.UpdateNetworkSmTargetGroupRequest{
        RequestBody: &operations.UpdateNetworkSmTargetGroupRequestBody{
            Name: sdk.String("Jon Blick"),
            Scope: sdk.String("odit"),
        },
        NetworkID: "numquam",
        TargetGroupID: "nemo",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkSmTargetGroup200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkSnmp

Update the SNMP settings for a network

### Example Usage

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
    res, err := s.Configure.UpdateNetworkSnmp(ctx, operations.UpdateNetworkSnmpRequest{
        RequestBody: &operations.UpdateNetworkSnmpRequestBody{
            Access: operations.UpdateNetworkSnmpRequestBodyAccessEnumCommunity.ToPointer(),
            CommunityString: sdk.String("culpa"),
            Users: []UpdateNetworkSnmpRequestBodyUsers{
                operations.UpdateNetworkSnmpRequestBodyUsers{
                    Passphrase: "iusto",
                    Username: "Westley_Pagac8",
                },
                operations.UpdateNetworkSnmpRequestBodyUsers{
                    Passphrase: "inventore",
                    Username: "Hazle_Rosenbaum34",
                },
            },
        },
        NetworkID: "ut",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkSnmp200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkSwitchAccessControlLists

Update the access control lists for a MS network

### Example Usage

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
    res, err := s.Configure.UpdateNetworkSwitchAccessControlLists(ctx, operations.UpdateNetworkSwitchAccessControlListsRequest{
        RequestBody: operations.UpdateNetworkSwitchAccessControlListsRequestBody{
            Rules: []UpdateNetworkSwitchAccessControlListsRequestBodyRules{
                operations.UpdateNetworkSwitchAccessControlListsRequestBodyRules{
                    Comment: sdk.String("numquam"),
                    DstCidr: "officia",
                    DstPort: sdk.String("reprehenderit"),
                    IPVersion: operations.UpdateNetworkSwitchAccessControlListsRequestBodyRulesIPVersionEnumIpv4.ToPointer(),
                    Policy: operations.UpdateNetworkSwitchAccessControlListsRequestBodyRulesPolicyEnumAllow,
                    Protocol: operations.UpdateNetworkSwitchAccessControlListsRequestBodyRulesProtocolEnumAny,
                    SrcCidr: "praesentium",
                    SrcPort: sdk.String("iusto"),
                    Vlan: sdk.String("dolorem"),
                },
                operations.UpdateNetworkSwitchAccessControlListsRequestBodyRules{
                    Comment: sdk.String("placeat"),
                    DstCidr: "dignissimos",
                    DstPort: sdk.String("quibusdam"),
                    IPVersion: operations.UpdateNetworkSwitchAccessControlListsRequestBodyRulesIPVersionEnumIpv6.ToPointer(),
                    Policy: operations.UpdateNetworkSwitchAccessControlListsRequestBodyRulesPolicyEnumDeny,
                    Protocol: operations.UpdateNetworkSwitchAccessControlListsRequestBodyRulesProtocolEnumUDP,
                    SrcCidr: "repellat",
                    SrcPort: sdk.String("est"),
                    Vlan: sdk.String("doloribus"),
                },
            },
        },
        NetworkID: "labore",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkSwitchAccessControlLists200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkSwitchAccessPolicy

Update an access policy for a switch network. If you would like to enable Meraki Authentication, set radiusServers to empty array.

### Example Usage

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
    res, err := s.Configure.UpdateNetworkSwitchAccessPolicy(ctx, operations.UpdateNetworkSwitchAccessPolicyRequest{
        RequestBody: &operations.UpdateNetworkSwitchAccessPolicyRequestBody{
            AccessPolicyType: operations.UpdateNetworkSwitchAccessPolicyRequestBodyAccessPolicyTypeEnumEightHundredAndTwo1x.ToPointer(),
            Dot1x: &operations.UpdateNetworkSwitchAccessPolicyRequestBodyDot1x{
                ControlDirection: operations.UpdateNetworkSwitchAccessPolicyRequestBodyDot1xControlDirectionEnumInbound.ToPointer(),
            },
            GuestPortBouncing: sdk.Bool(false),
            GuestVlanID: sdk.Int64(770921),
            HostMode: operations.UpdateNetworkSwitchAccessPolicyRequestBodyHostModeEnumMultiDomain.ToPointer(),
            IncreaseAccessSpeed: sdk.Bool(false),
            Name: sdk.String("Victoria Jenkins DVM"),
            Radius: &operations.UpdateNetworkSwitchAccessPolicyRequestBodyRadius{
                CriticalAuth: &operations.UpdateNetworkSwitchAccessPolicyRequestBodyRadiusCriticalAuth{
                    DataVlanID: sdk.Int64(201438),
                    SuspendPortBounce: sdk.Bool(false),
                    VoiceVlanID: sdk.Int64(87979),
                },
                FailedAuthVlanID: sdk.Int64(223618),
                ReAuthenticationInterval: sdk.Int64(529760),
            },
            RadiusAccountingEnabled: sdk.Bool(false),
            RadiusAccountingServers: []UpdateNetworkSwitchAccessPolicyRequestBodyRadiusAccountingServers{
                operations.UpdateNetworkSwitchAccessPolicyRequestBodyRadiusAccountingServers{
                    Host: "nesciunt",
                    Port: 41645,
                    Secret: "at",
                },
                operations.UpdateNetworkSwitchAccessPolicyRequestBodyRadiusAccountingServers{
                    Host: "tenetur",
                    Port: 194526,
                    Secret: "temporibus",
                },
                operations.UpdateNetworkSwitchAccessPolicyRequestBodyRadiusAccountingServers{
                    Host: "cum",
                    Port: 22479,
                    Secret: "magni",
                },
                operations.UpdateNetworkSwitchAccessPolicyRequestBodyRadiusAccountingServers{
                    Host: "aspernatur",
                    Port: 938113,
                    Secret: "similique",
                },
            },
            RadiusCoaSupportEnabled: sdk.Bool(false),
            RadiusGroupAttribute: sdk.String("id"),
            RadiusServers: []UpdateNetworkSwitchAccessPolicyRequestBodyRadiusServers{
                operations.UpdateNetworkSwitchAccessPolicyRequestBodyRadiusServers{
                    Host: "commodi",
                    Port: 341359,
                    Secret: "delectus",
                },
                operations.UpdateNetworkSwitchAccessPolicyRequestBodyRadiusServers{
                    Host: "quidem",
                    Port: 524051,
                    Secret: "repellat",
                },
            },
            RadiusTestingEnabled: sdk.Bool(false),
            URLRedirectWalledGardenEnabled: sdk.Bool(false),
            URLRedirectWalledGardenRanges: []string{
                "veniam",
                "consequuntur",
            },
            VoiceVlanClients: sdk.Bool(false),
        },
        AccessPolicyNumber: "repudiandae",
        NetworkID: "nam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkSwitchAccessPolicy200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkSwitchAlternateManagementInterface

Update the switch alternate management interface for the network

### Example Usage

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
    res, err := s.Configure.UpdateNetworkSwitchAlternateManagementInterface(ctx, operations.UpdateNetworkSwitchAlternateManagementInterfaceRequest{
        RequestBody: &operations.UpdateNetworkSwitchAlternateManagementInterfaceRequestBody{
            Enabled: sdk.Bool(false),
            Protocols: []UpdateNetworkSwitchAlternateManagementInterfaceRequestBodyProtocolsEnum{
                operations.UpdateNetworkSwitchAlternateManagementInterfaceRequestBodyProtocolsEnumSnmp,
                operations.UpdateNetworkSwitchAlternateManagementInterfaceRequestBodyProtocolsEnumSyslog,
                operations.UpdateNetworkSwitchAlternateManagementInterfaceRequestBodyProtocolsEnumRadius,
            },
            Switches: []UpdateNetworkSwitchAlternateManagementInterfaceRequestBodySwitches{
                operations.UpdateNetworkSwitchAlternateManagementInterfaceRequestBodySwitches{
                    AlternateManagementIP: "non",
                    Gateway: sdk.String("deleniti"),
                    Serial: "dolor",
                    SubnetMask: sdk.String("corrupti"),
                },
                operations.UpdateNetworkSwitchAlternateManagementInterfaceRequestBodySwitches{
                    AlternateManagementIP: "ducimus",
                    Gateway: sdk.String("molestias"),
                    Serial: "aperiam",
                    SubnetMask: sdk.String("fugit"),
                },
                operations.UpdateNetworkSwitchAlternateManagementInterfaceRequestBodySwitches{
                    AlternateManagementIP: "labore",
                    Gateway: sdk.String("neque"),
                    Serial: "cum",
                    SubnetMask: sdk.String("sed"),
                },
            },
            VlanID: sdk.Int64(621230),
        },
        NetworkID: "ratione",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkSwitchAlternateManagementInterface200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkSwitchDhcpServerPolicy

Update the DHCP server settings. Blocked/allowed servers are only applied when default policy is allow/block, respectively

### Example Usage

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
    res, err := s.Configure.UpdateNetworkSwitchDhcpServerPolicy(ctx, operations.UpdateNetworkSwitchDhcpServerPolicyRequest{
        RequestBody: &operations.UpdateNetworkSwitchDhcpServerPolicyRequestBody{
            Alerts: &operations.UpdateNetworkSwitchDhcpServerPolicyRequestBodyAlerts{
                Email: &operations.UpdateNetworkSwitchDhcpServerPolicyRequestBodyAlertsEmail{
                    Enabled: sdk.Bool(false),
                },
            },
            AllowedServers: []string{
                "est",
                "soluta",
                "neque",
                "perferendis",
            },
            ArpInspection: &operations.UpdateNetworkSwitchDhcpServerPolicyRequestBodyArpInspection{
                Enabled: sdk.Bool(false),
            },
            BlockedServers: []string{
                "excepturi",
                "dicta",
                "iure",
                "doloribus",
            },
            DefaultPolicy: operations.UpdateNetworkSwitchDhcpServerPolicyRequestBodyDefaultPolicyEnumAllow.ToPointer(),
        },
        NetworkID: "alias",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkSwitchDhcpServerPolicy200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServer

Update a server that is trusted by Dynamic ARP Inspection on this network

### Example Usage

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
    res, err := s.Configure.UpdateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServer(ctx, operations.UpdateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerRequest{
        RequestBody: &operations.UpdateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerRequestBody{
            Ipv4: &operations.UpdateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerRequestBodyIpv4{
                Address: sdk.String("860 Pablo Meadows"),
            },
            Mac: sdk.String("libero"),
            Vlan: sdk.Int64(95232),
        },
        NetworkID: "quidem",
        TrustedServerID: "soluta",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServer200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkSwitchDscpToCosMappings

Update the DSCP to CoS mappings

### Example Usage

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
    res, err := s.Configure.UpdateNetworkSwitchDscpToCosMappings(ctx, operations.UpdateNetworkSwitchDscpToCosMappingsRequest{
        RequestBody: operations.UpdateNetworkSwitchDscpToCosMappingsRequestBody{
            Mappings: []UpdateNetworkSwitchDscpToCosMappingsRequestBodyMappings{
                operations.UpdateNetworkSwitchDscpToCosMappingsRequestBodyMappings{
                    Cos: 347652,
                    Dscp: 627088,
                    Title: sdk.String("Mr."),
                },
                operations.UpdateNetworkSwitchDscpToCosMappingsRequestBodyMappings{
                    Cos: 599406,
                    Dscp: 162421,
                    Title: sdk.String("Miss"),
                },
            },
        },
        NetworkID: "aut",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkSwitchDscpToCosMappings200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkSwitchLinkAggregation

Update a link aggregation group

### Example Usage

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
    res, err := s.Configure.UpdateNetworkSwitchLinkAggregation(ctx, operations.UpdateNetworkSwitchLinkAggregationRequest{
        RequestBody: &operations.UpdateNetworkSwitchLinkAggregationRequestBody{
            SwitchPorts: []UpdateNetworkSwitchLinkAggregationRequestBodySwitchPorts{
                operations.UpdateNetworkSwitchLinkAggregationRequestBodySwitchPorts{
                    PortID: "quo",
                    Serial: "non",
                },
                operations.UpdateNetworkSwitchLinkAggregationRequestBodySwitchPorts{
                    PortID: "libero",
                    Serial: "expedita",
                },
                operations.UpdateNetworkSwitchLinkAggregationRequestBodySwitchPorts{
                    PortID: "odio",
                    Serial: "quaerat",
                },
            },
            SwitchProfilePorts: []UpdateNetworkSwitchLinkAggregationRequestBodySwitchProfilePorts{
                operations.UpdateNetworkSwitchLinkAggregationRequestBodySwitchProfilePorts{
                    PortID: "laboriosam",
                    Profile: "nisi",
                },
                operations.UpdateNetworkSwitchLinkAggregationRequestBodySwitchProfilePorts{
                    PortID: "labore",
                    Profile: "accusamus",
                },
            },
        },
        LinkAggregationID: "cum",
        NetworkID: "sunt",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkSwitchLinkAggregation200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkSwitchMtu

Update the MTU configuration

### Example Usage

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
    res, err := s.Configure.UpdateNetworkSwitchMtu(ctx, operations.UpdateNetworkSwitchMtuRequest{
        RequestBody: &operations.UpdateNetworkSwitchMtuRequestBody{
            DefaultMtuSize: sdk.Int64(834672),
            Overrides: []UpdateNetworkSwitchMtuRequestBodyOverrides{
                operations.UpdateNetworkSwitchMtuRequestBodyOverrides{
                    MtuSize: 248650,
                    SwitchProfiles: []string{
                        "laudantium",
                    },
                    Switches: []string{
                        "facilis",
                        "consequatur",
                        "assumenda",
                    },
                },
            },
        },
        NetworkID: "architecto",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkSwitchMtu200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkSwitchPortSchedule

Update a switch port schedule

### Example Usage

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
    res, err := s.Configure.UpdateNetworkSwitchPortSchedule(ctx, operations.UpdateNetworkSwitchPortScheduleRequest{
        RequestBody: &operations.UpdateNetworkSwitchPortScheduleRequestBody{
            Name: sdk.String("Rickey Boyle"),
            PortSchedule: &operations.UpdateNetworkSwitchPortScheduleRequestBodyPortSchedule{
                Friday: &operations.UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleFriday{
                    Active: sdk.Bool(false),
                    From: sdk.String("tenetur"),
                    To: sdk.String("saepe"),
                },
                Monday: &operations.UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleMonday{
                    Active: sdk.Bool(false),
                    From: sdk.String("eveniet"),
                    To: sdk.String("reprehenderit"),
                },
                Saturday: &operations.UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleSaturday{
                    Active: sdk.Bool(false),
                    From: sdk.String("incidunt"),
                    To: sdk.String("soluta"),
                },
                Sunday: &operations.UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleSunday{
                    Active: sdk.Bool(false),
                    From: sdk.String("voluptas"),
                    To: sdk.String("delectus"),
                },
                Thursday: &operations.UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleThursday{
                    Active: sdk.Bool(false),
                    From: sdk.String("repudiandae"),
                    To: sdk.String("quidem"),
                },
                Tuesday: &operations.UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleTuesday{
                    Active: sdk.Bool(false),
                    From: sdk.String("occaecati"),
                    To: sdk.String("labore"),
                },
                Wednesday: &operations.UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleWednesday{
                    Active: sdk.Bool(false),
                    From: sdk.String("ipsam"),
                    To: sdk.String("voluptate"),
                },
            },
        },
        NetworkID: "quod",
        PortScheduleID: "nihil",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkSwitchPortSchedule200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkSwitchQosRule

Update a quality of service rule

### Example Usage

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
    res, err := s.Configure.UpdateNetworkSwitchQosRule(ctx, operations.UpdateNetworkSwitchQosRuleRequest{
        RequestBody: &operations.UpdateNetworkSwitchQosRuleRequestBody{
            Dscp: sdk.Int64(924505),
            DstPort: sdk.Int64(849045),
            DstPortRange: sdk.String("laborum"),
            Protocol: operations.UpdateNetworkSwitchQosRuleRequestBodyProtocolEnumUDP.ToPointer(),
            SrcPort: sdk.Int64(230903),
            SrcPortRange: sdk.String("provident"),
            Vlan: sdk.Int64(819261),
        },
        NetworkID: "illo",
        QosRuleID: "autem",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkSwitchQosRule200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkSwitchQosRulesOrder

Update the order in which the rules should be processed by the switch

### Example Usage

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
    res, err := s.Configure.UpdateNetworkSwitchQosRulesOrder(ctx, operations.UpdateNetworkSwitchQosRulesOrderRequest{
        RequestBody: operations.UpdateNetworkSwitchQosRulesOrderRequestBody{
            RuleIds: []string{
                "rerum",
                "asperiores",
                "odio",
                "nisi",
            },
        },
        NetworkID: "hic",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkSwitchQosRulesOrder200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkSwitchRoutingMulticast

Update multicast settings for a network

### Example Usage

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
    res, err := s.Configure.UpdateNetworkSwitchRoutingMulticast(ctx, operations.UpdateNetworkSwitchRoutingMulticastRequest{
        RequestBody: &operations.UpdateNetworkSwitchRoutingMulticastRequestBody{
            DefaultSettings: &operations.UpdateNetworkSwitchRoutingMulticastRequestBodyDefaultSettings{
                FloodUnknownMulticastTrafficEnabled: sdk.Bool(false),
                IgmpSnoopingEnabled: sdk.Bool(false),
            },
            Overrides: []UpdateNetworkSwitchRoutingMulticastRequestBodyOverrides{
                operations.UpdateNetworkSwitchRoutingMulticastRequestBodyOverrides{
                    FloodUnknownMulticastTrafficEnabled: false,
                    IgmpSnoopingEnabled: false,
                    Stacks: []string{
                        "eum",
                    },
                    SwitchProfiles: []string{
                        "quidem",
                    },
                    Switches: []string{
                        "doloremque",
                    },
                },
                operations.UpdateNetworkSwitchRoutingMulticastRequestBodyOverrides{
                    FloodUnknownMulticastTrafficEnabled: false,
                    IgmpSnoopingEnabled: false,
                    Stacks: []string{
                        "debitis",
                    },
                    SwitchProfiles: []string{
                        "aperiam",
                    },
                    Switches: []string{
                        "dolor",
                    },
                },
                operations.UpdateNetworkSwitchRoutingMulticastRequestBodyOverrides{
                    FloodUnknownMulticastTrafficEnabled: false,
                    IgmpSnoopingEnabled: false,
                    Stacks: []string{
                        "excepturi",
                        "ipsum",
                        "accusamus",
                    },
                    SwitchProfiles: []string{
                        "tempora",
                    },
                    Switches: []string{
                        "et",
                    },
                },
                operations.UpdateNetworkSwitchRoutingMulticastRequestBodyOverrides{
                    FloodUnknownMulticastTrafficEnabled: false,
                    IgmpSnoopingEnabled: false,
                    Stacks: []string{
                        "placeat",
                        "sapiente",
                    },
                    SwitchProfiles: []string{
                        "nemo",
                        "soluta",
                    },
                    Switches: []string{
                        "sequi",
                        "ab",
                    },
                },
            },
        },
        NetworkID: "consectetur",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkSwitchRoutingMulticast200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkSwitchRoutingMulticastRendezvousPoint

Update a multicast rendezvous point

### Example Usage

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
    res, err := s.Configure.UpdateNetworkSwitchRoutingMulticastRendezvousPoint(ctx, operations.UpdateNetworkSwitchRoutingMulticastRendezvousPointRequest{
        RequestBody: operations.UpdateNetworkSwitchRoutingMulticastRendezvousPointRequestBody{
            InterfaceIP: "ullam",
            MulticastGroup: "ullam",
        },
        NetworkID: "consectetur",
        RendezvousPointID: "porro",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkSwitchRoutingMulticastRendezvousPoint200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkSwitchRoutingOspf

Update layer 3 OSPF routing configuration

### Example Usage

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
    res, err := s.Configure.UpdateNetworkSwitchRoutingOspf(ctx, operations.UpdateNetworkSwitchRoutingOspfRequest{
        RequestBody: &operations.UpdateNetworkSwitchRoutingOspfRequestBody{
            Areas: []UpdateNetworkSwitchRoutingOspfRequestBodyAreas{
                operations.UpdateNetworkSwitchRoutingOspfRequestBodyAreas{
                    AreaID: "earum",
                    AreaName: "vitae",
                    AreaType: operations.UpdateNetworkSwitchRoutingOspfRequestBodyAreasAreaTypeEnumStub,
                },
                operations.UpdateNetworkSwitchRoutingOspfRequestBodyAreas{
                    AreaID: "fugit",
                    AreaName: "consequatur",
                    AreaType: operations.UpdateNetworkSwitchRoutingOspfRequestBodyAreasAreaTypeEnumNormal,
                },
                operations.UpdateNetworkSwitchRoutingOspfRequestBodyAreas{
                    AreaID: "placeat",
                    AreaName: "labore",
                    AreaType: operations.UpdateNetworkSwitchRoutingOspfRequestBodyAreasAreaTypeEnumNssa,
                },
                operations.UpdateNetworkSwitchRoutingOspfRequestBodyAreas{
                    AreaID: "illum",
                    AreaName: "quod",
                    AreaType: operations.UpdateNetworkSwitchRoutingOspfRequestBodyAreasAreaTypeEnumStub,
                },
            },
            DeadTimerInSeconds: sdk.Int64(572317),
            Enabled: sdk.Bool(false),
            HelloTimerInSeconds: sdk.Int64(578636),
            Md5AuthenticationEnabled: sdk.Bool(false),
            Md5AuthenticationKey: &operations.UpdateNetworkSwitchRoutingOspfRequestBodyMd5AuthenticationKey{
                ID: sdk.Int64(28646),
                Passphrase: sdk.String("labore"),
            },
            V3: &operations.UpdateNetworkSwitchRoutingOspfRequestBodyV3{
                Areas: []UpdateNetworkSwitchRoutingOspfRequestBodyV3Areas{
                    operations.UpdateNetworkSwitchRoutingOspfRequestBodyV3Areas{
                        AreaID: "ad",
                        AreaName: "illo",
                        AreaType: operations.UpdateNetworkSwitchRoutingOspfRequestBodyV3AreasAreaTypeEnumNssa,
                    },
                    operations.UpdateNetworkSwitchRoutingOspfRequestBodyV3Areas{
                        AreaID: "exercitationem",
                        AreaName: "cum",
                        AreaType: operations.UpdateNetworkSwitchRoutingOspfRequestBodyV3AreasAreaTypeEnumNssa,
                    },
                    operations.UpdateNetworkSwitchRoutingOspfRequestBodyV3Areas{
                        AreaID: "suscipit",
                        AreaName: "labore",
                        AreaType: operations.UpdateNetworkSwitchRoutingOspfRequestBodyV3AreasAreaTypeEnumNssa,
                    },
                    operations.UpdateNetworkSwitchRoutingOspfRequestBodyV3Areas{
                        AreaID: "optio",
                        AreaName: "officiis",
                        AreaType: operations.UpdateNetworkSwitchRoutingOspfRequestBodyV3AreasAreaTypeEnumStub,
                    },
                },
                DeadTimerInSeconds: sdk.Int64(649791),
                Enabled: sdk.Bool(false),
                HelloTimerInSeconds: sdk.Int64(462579),
            },
        },
        NetworkID: "deleniti",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkSwitchRoutingOspf200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkSwitchSettings

Update switch network settings

### Example Usage

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
    res, err := s.Configure.UpdateNetworkSwitchSettings(ctx, operations.UpdateNetworkSwitchSettingsRequest{
        RequestBody: &operations.UpdateNetworkSwitchSettingsRequestBody{
            PowerExceptions: []UpdateNetworkSwitchSettingsRequestBodyPowerExceptions{
                operations.UpdateNetworkSwitchSettingsRequestBodyPowerExceptions{
                    PowerType: operations.UpdateNetworkSwitchSettingsRequestBodyPowerExceptionsPowerTypeEnumCombined,
                    Serial: "voluptates",
                },
                operations.UpdateNetworkSwitchSettingsRequestBodyPowerExceptions{
                    PowerType: operations.UpdateNetworkSwitchSettingsRequestBodyPowerExceptionsPowerTypeEnumCombined,
                    Serial: "facere",
                },
                operations.UpdateNetworkSwitchSettingsRequestBodyPowerExceptions{
                    PowerType: operations.UpdateNetworkSwitchSettingsRequestBodyPowerExceptionsPowerTypeEnumCombined,
                    Serial: "libero",
                },
                operations.UpdateNetworkSwitchSettingsRequestBodyPowerExceptions{
                    PowerType: operations.UpdateNetworkSwitchSettingsRequestBodyPowerExceptionsPowerTypeEnumRedundant,
                    Serial: "perferendis",
                },
            },
            UseCombinedPower: sdk.Bool(false),
            Vlan: sdk.Int64(108112),
        },
        NetworkID: "saepe",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkSwitchSettings200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkSwitchStackRoutingInterface

Update a layer 3 interface for a switch stack

### Example Usage

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
    res, err := s.Configure.UpdateNetworkSwitchStackRoutingInterface(ctx, operations.UpdateNetworkSwitchStackRoutingInterfaceRequest{
        RequestBody: &operations.UpdateNetworkSwitchStackRoutingInterfaceRequestBody{
            DefaultGateway: sdk.String("voluptatem"),
            InterfaceIP: sdk.String("sint"),
            Ipv6: &operations.UpdateNetworkSwitchStackRoutingInterfaceRequestBodyIpv6{
                Address: sdk.String("1766 Pearl Prairie"),
                AssignmentMode: sdk.String("quidem"),
                Gateway: sdk.String("inventore"),
                Prefix: sdk.String("iste"),
            },
            MulticastRouting: operations.UpdateNetworkSwitchStackRoutingInterfaceRequestBodyMulticastRoutingEnumEnabled.ToPointer(),
            Name: sdk.String("Rebecca Durgan"),
            OspfSettings: &operations.UpdateNetworkSwitchStackRoutingInterfaceRequestBodyOspfSettings{
                Area: sdk.String("enim"),
                Cost: sdk.Int64(636625),
                IsPassiveEnabled: sdk.Bool(false),
            },
            Subnet: sdk.String("dolore"),
            VlanID: sdk.Int64(123743),
        },
        InterfaceID: "nisi",
        NetworkID: "molestias",
        SwitchStackID: "impedit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkSwitchStackRoutingInterface200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkSwitchStackRoutingInterfaceDhcp

Update a layer 3 interface DHCP configuration for a switch stack

### Example Usage

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
    res, err := s.Configure.UpdateNetworkSwitchStackRoutingInterfaceDhcp(ctx, operations.UpdateNetworkSwitchStackRoutingInterfaceDhcpRequest{
        RequestBody: &operations.UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBody{
            BootFileName: sdk.String("quasi"),
            BootNextServer: sdk.String("nesciunt"),
            BootOptionsEnabled: sdk.Bool(false),
            DhcpLeaseTime: operations.UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpLeaseTimeEnumTwelveHours.ToPointer(),
            DhcpMode: operations.UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpModeEnumDhcpRelay.ToPointer(),
            DhcpOptions: []UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpOptions{
                operations.UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpOptions{
                    Code: "odio",
                    Type: operations.UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpOptionsTypeEnumHex,
                    Value: "eveniet",
                },
            },
            DhcpRelayServerIps: []string{
                "quos",
            },
            DNSCustomNameservers: []string{
                "officia",
                "perspiciatis",
                "debitis",
                "non",
            },
            DNSNameserversOption: operations.UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDNSNameserversOptionEnumGooglePublicDNS.ToPointer(),
            FixedIPAssignments: []UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyFixedIPAssignments{
                operations.UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyFixedIPAssignments{
                    IP: "illo",
                    Mac: "deleniti",
                    Name: "Billy Rosenbaum",
                },
            },
            ReservedIPRanges: []UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyReservedIPRanges{
                operations.UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyReservedIPRanges{
                    Comment: sdk.String("tenetur"),
                    End: "libero",
                    Start: "repellendus",
                },
                operations.UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyReservedIPRanges{
                    Comment: sdk.String("aliquid"),
                    End: "alias",
                    Start: "rerum",
                },
            },
        },
        InterfaceID: "beatae",
        NetworkID: "fuga",
        SwitchStackID: "quam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkSwitchStackRoutingInterfaceDhcp200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkSwitchStackRoutingStaticRoute

Update a layer 3 static route for a switch stack

### Example Usage

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
    res, err := s.Configure.UpdateNetworkSwitchStackRoutingStaticRoute(ctx, operations.UpdateNetworkSwitchStackRoutingStaticRouteRequest{
        RequestBody: &operations.UpdateNetworkSwitchStackRoutingStaticRouteRequestBody{
            AdvertiseViaOspfEnabled: sdk.Bool(false),
            Name: sdk.String("Conrad Stamm"),
            NextHopIP: sdk.String("est"),
            PreferOverOspfRoutesEnabled: sdk.Bool(false),
            Subnet: sdk.String("occaecati"),
        },
        NetworkID: "pariatur",
        StaticRouteID: "quaerat",
        SwitchStackID: "itaque",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkSwitchStackRoutingStaticRoute200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkSwitchStormControl

Update the storm control configuration for a switch network

### Example Usage

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
    res, err := s.Configure.UpdateNetworkSwitchStormControl(ctx, operations.UpdateNetworkSwitchStormControlRequest{
        RequestBody: &operations.UpdateNetworkSwitchStormControlRequestBody{
            BroadcastThreshold: sdk.Int64(931507),
            MulticastThreshold: sdk.Int64(656063),
            UnknownUnicastThreshold: sdk.Int64(517140),
        },
        NetworkID: "ullam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkSwitchStormControl200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkSwitchStp

Updates STP settings

### Example Usage

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
    res, err := s.Configure.UpdateNetworkSwitchStp(ctx, operations.UpdateNetworkSwitchStpRequest{
        RequestBody: &operations.UpdateNetworkSwitchStpRequestBody{
            RstpEnabled: sdk.Bool(false),
            StpBridgePriority: []UpdateNetworkSwitchStpRequestBodyStpBridgePriority{
                operations.UpdateNetworkSwitchStpRequestBodyStpBridgePriority{
                    Stacks: []string{
                        "atque",
                        "optio",
                    },
                    StpPriority: 145242,
                    SwitchProfiles: []string{
                        "modi",
                        "delectus",
                        "aliquam",
                        "optio",
                    },
                    Switches: []string{
                        "quas",
                        "quidem",
                        "voluptates",
                    },
                },
                operations.UpdateNetworkSwitchStpRequestBodyStpBridgePriority{
                    Stacks: []string{
                        "hic",
                        "aspernatur",
                    },
                    StpPriority: 467599,
                    SwitchProfiles: []string{
                        "tenetur",
                        "fugiat",
                        "unde",
                    },
                    Switches: []string{
                        "ea",
                        "molestiae",
                    },
                },
            },
        },
        NetworkID: "accusamus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkSwitchStp200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkSyslogServers

Update the syslog servers for a network

### Example Usage

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
    res, err := s.Configure.UpdateNetworkSyslogServers(ctx, operations.UpdateNetworkSyslogServersRequest{
        RequestBody: operations.UpdateNetworkSyslogServersRequestBody{
            Servers: []UpdateNetworkSyslogServersRequestBodyServers{
                operations.UpdateNetworkSyslogServersRequestBodyServers{
                    Host: "autem",
                    Port: 808834,
                    Roles: []string{
                        "dicta",
                        "possimus",
                    },
                },
                operations.UpdateNetworkSyslogServersRequestBodyServers{
                    Host: "dolores",
                    Port: 975070,
                    Roles: []string{
                        "id",
                        "fuga",
                        "ad",
                        "corrupti",
                    },
                },
            },
        },
        NetworkID: "temporibus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkSyslogServers200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkTrafficAnalysis

Update the traffic analysis settings for a network

### Example Usage

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
    res, err := s.Configure.UpdateNetworkTrafficAnalysis(ctx, operations.UpdateNetworkTrafficAnalysisRequest{
        RequestBody: &operations.UpdateNetworkTrafficAnalysisRequestBody{
            CustomPieChartItems: []UpdateNetworkTrafficAnalysisRequestBodyCustomPieChartItems{
                operations.UpdateNetworkTrafficAnalysisRequestBodyCustomPieChartItems{
                    Name: "Jerald Cormier",
                    Type: operations.UpdateNetworkTrafficAnalysisRequestBodyCustomPieChartItemsTypeEnumPort,
                    Value: "natus",
                },
                operations.UpdateNetworkTrafficAnalysisRequestBodyCustomPieChartItems{
                    Name: "Sally Renner",
                    Type: operations.UpdateNetworkTrafficAnalysisRequestBodyCustomPieChartItemsTypeEnumPort,
                    Value: "repellat",
                },
                operations.UpdateNetworkTrafficAnalysisRequestBodyCustomPieChartItems{
                    Name: "Miss Gloria Muller",
                    Type: operations.UpdateNetworkTrafficAnalysisRequestBodyCustomPieChartItemsTypeEnumPort,
                    Value: "excepturi",
                },
                operations.UpdateNetworkTrafficAnalysisRequestBodyCustomPieChartItems{
                    Name: "Kerry Schamberger",
                    Type: operations.UpdateNetworkTrafficAnalysisRequestBodyCustomPieChartItemsTypeEnumIPRange,
                    Value: "aspernatur",
                },
            },
            Mode: operations.UpdateNetworkTrafficAnalysisRequestBodyModeEnumDetailed.ToPointer(),
        },
        NetworkID: "saepe",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkTrafficAnalysis200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkWebhooksHTTPServer

Update an HTTP server. To change a URL, create a new HTTP server.

### Example Usage

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
    res, err := s.Configure.UpdateNetworkWebhooksHTTPServer(ctx, operations.UpdateNetworkWebhooksHTTPServerRequest{
        RequestBody: &operations.UpdateNetworkWebhooksHTTPServerRequestBody{
            Name: sdk.String("Bobby Hoeger"),
            PayloadTemplate: &operations.UpdateNetworkWebhooksHTTPServerRequestBodyPayloadTemplate{
                PayloadTemplateID: sdk.String("quisquam"),
            },
            SharedSecret: sdk.String("debitis"),
        },
        HTTPServerID: "ipsa",
        NetworkID: "quia",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkWebhooksHTTPServer200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkWebhooksPayloadTemplate

Update a webhook payload template for a network

### Example Usage

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
    res, err := s.Configure.UpdateNetworkWebhooksPayloadTemplate(ctx, operations.UpdateNetworkWebhooksPayloadTemplateRequest{
        RequestBody: &operations.UpdateNetworkWebhooksPayloadTemplateRequestBody{
            Body: sdk.String("totam"),
            BodyFile: sdk.String("consequatur"),
            Headers: []UpdateNetworkWebhooksPayloadTemplateRequestBodyHeaders{
                operations.UpdateNetworkWebhooksPayloadTemplateRequestBodyHeaders{
                    Name: sdk.String("Linda Schmeler"),
                    Template: sdk.String("eveniet"),
                },
                operations.UpdateNetworkWebhooksPayloadTemplateRequestBodyHeaders{
                    Name: sdk.String("Cecil Lowe"),
                    Template: sdk.String("enim"),
                },
                operations.UpdateNetworkWebhooksPayloadTemplateRequestBodyHeaders{
                    Name: sdk.String("Clayton Okuneva"),
                    Template: sdk.String("maiores"),
                },
            },
            HeadersFile: sdk.String("est"),
            Name: sdk.String("Jared Heathcote"),
        },
        NetworkID: "ipsa",
        PayloadTemplateID: "ipsa",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkWebhooksPayloadTemplate200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkWirelessAlternateManagementInterface

Update alternate management interface and device static IP

### Example Usage

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
    res, err := s.Configure.UpdateNetworkWirelessAlternateManagementInterface(ctx, operations.UpdateNetworkWirelessAlternateManagementInterfaceRequest{
        RequestBody: &operations.UpdateNetworkWirelessAlternateManagementInterfaceRequestBody{
            AccessPoints: []UpdateNetworkWirelessAlternateManagementInterfaceRequestBodyAccessPoints{
                operations.UpdateNetworkWirelessAlternateManagementInterfaceRequestBodyAccessPoints{
                    AlternateManagementIP: "nesciunt",
                    Dns1: sdk.String("aperiam"),
                    Dns2: sdk.String("optio"),
                    Gateway: sdk.String("eum"),
                    Serial: "commodi",
                    SubnetMask: sdk.String("amet"),
                },
                operations.UpdateNetworkWirelessAlternateManagementInterfaceRequestBodyAccessPoints{
                    AlternateManagementIP: "quia",
                    Dns1: sdk.String("facilis"),
                    Dns2: sdk.String("magnam"),
                    Gateway: sdk.String("dolor"),
                    Serial: "provident",
                    SubnetMask: sdk.String("inventore"),
                },
            },
            Enabled: sdk.Bool(false),
            Protocols: []UpdateNetworkWirelessAlternateManagementInterfaceRequestBodyProtocolsEnum{
                operations.UpdateNetworkWirelessAlternateManagementInterfaceRequestBodyProtocolsEnumSyslog,
                operations.UpdateNetworkWirelessAlternateManagementInterfaceRequestBodyProtocolsEnumSyslog,
                operations.UpdateNetworkWirelessAlternateManagementInterfaceRequestBodyProtocolsEnumLdap,
                operations.UpdateNetworkWirelessAlternateManagementInterfaceRequestBodyProtocolsEnumLdap,
            },
            VlanID: sdk.Int64(750959),
        },
        NetworkID: "adipisci",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkWirelessAlternateManagementInterface200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkWirelessBilling

Update the billing settings

### Example Usage

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
    res, err := s.Configure.UpdateNetworkWirelessBilling(ctx, operations.UpdateNetworkWirelessBillingRequest{
        RequestBody: &operations.UpdateNetworkWirelessBillingRequestBody{
            Currency: sdk.String("itaque"),
            Plans: []UpdateNetworkWirelessBillingRequestBodyPlans{
                operations.UpdateNetworkWirelessBillingRequestBodyPlans{
                    BandwidthLimits: operations.UpdateNetworkWirelessBillingRequestBodyPlansBandwidthLimits{
                        LimitDown: sdk.Int64(107129),
                        LimitUp: sdk.Int64(912057),
                    },
                    ID: sdk.String("8f7bc69d-460a-477e-8eb2-6d10f1ef2631"),
                    Price: 7877.15,
                    TimeLimit: operations.UpdateNetworkWirelessBillingRequestBodyPlansTimeLimitEnumOneHour,
                },
                operations.UpdateNetworkWirelessBillingRequestBodyPlans{
                    BandwidthLimits: operations.UpdateNetworkWirelessBillingRequestBodyPlansBandwidthLimits{
                        LimitDown: sdk.Int64(786765),
                        LimitUp: sdk.Int64(46137),
                    },
                    ID: sdk.String("f0f873f9-d5c2-45fd-be0b-4a4a4253c302"),
                    Price: 3545.33,
                    TimeLimit: operations.UpdateNetworkWirelessBillingRequestBodyPlansTimeLimitEnumOneHour,
                },
                operations.UpdateNetworkWirelessBillingRequestBodyPlans{
                    BandwidthLimits: operations.UpdateNetworkWirelessBillingRequestBodyPlansBandwidthLimits{
                        LimitDown: sdk.Int64(103745),
                        LimitUp: sdk.Int64(66919),
                    },
                    ID: sdk.String("f42c7e7d-c548-4be0-9e41-a7a215ca12a4"),
                    Price: 6905.07,
                    TimeLimit: operations.UpdateNetworkWirelessBillingRequestBodyPlansTimeLimitEnumOneWeek,
                },
            },
        },
        NetworkID: "provident",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkWirelessBilling200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkWirelessBluetoothSettings

Update the Bluetooth settings for a network. See the docs page for <a href="https://documentation.meraki.com/MR/Bluetooth/Bluetooth_Low_Energy_(BLE)">Bluetooth settings</a>.

### Example Usage

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
    res, err := s.Configure.UpdateNetworkWirelessBluetoothSettings(ctx, operations.UpdateNetworkWirelessBluetoothSettingsRequest{
        RequestBody: &operations.UpdateNetworkWirelessBluetoothSettingsRequestBody{
            AdvertisingEnabled: sdk.Bool(false),
            Major: sdk.Int64(844545),
            MajorMinorAssignmentMode: operations.UpdateNetworkWirelessBluetoothSettingsRequestBodyMajorMinorAssignmentModeEnumNonUnique.ToPointer(),
            Minor: sdk.Int64(592898),
            ScanningEnabled: sdk.Bool(false),
            UUID: sdk.String("988192cf-d0c7-47c5-be7e-7d4ee6e8b90b"),
        },
        NetworkID: "similique",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkWirelessBluetoothSettings200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkWirelessRfProfile

Updates specified RF profile for this network

### Example Usage

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
    res, err := s.Configure.UpdateNetworkWirelessRfProfile(ctx, operations.UpdateNetworkWirelessRfProfileRequest{
        RequestBody: &operations.UpdateNetworkWirelessRfProfileRequestBody{
            ApBandSettings: &operations.UpdateNetworkWirelessRfProfileRequestBodyApBandSettings{
                BandOperationMode: operations.UpdateNetworkWirelessRfProfileRequestBodyApBandSettingsBandOperationModeEnumDual.ToPointer(),
                BandSteeringEnabled: sdk.Bool(false),
            },
            BandSelectionType: operations.UpdateNetworkWirelessRfProfileRequestBodyBandSelectionTypeEnumAp.ToPointer(),
            ClientBalancingEnabled: sdk.Bool(false),
            FiveGhzSettings: &operations.UpdateNetworkWirelessRfProfileRequestBodyFiveGhzSettings{
                ChannelWidth: sdk.String("molestias"),
                MaxPower: sdk.Int64(267184),
                MinBitrate: sdk.Int64(902731),
                MinPower: sdk.Int64(183804),
                Rxsop: sdk.Int64(224646),
                ValidAutoChannels: []int64{
                    408678,
                    446719,
                    57292,
                },
            },
            MinBitrateType: operations.UpdateNetworkWirelessRfProfileRequestBodyMinBitrateTypeEnumBand.ToPointer(),
            Name: sdk.String("Bradford Schmitt DDS"),
            PerSsidSettings: &operations.UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings{
                Zero: &operations.UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings0{
                    BandOperationMode: operations.UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings0BandOperationModeEnumFiveghz.ToPointer(),
                    BandSteeringEnabled: sdk.Bool(false),
                    MinBitrate: sdk.Float32(246.9),
                },
                One: &operations.UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings1{
                    BandOperationMode: operations.UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings1BandOperationModeEnumFiveghz.ToPointer(),
                    BandSteeringEnabled: sdk.Bool(false),
                    MinBitrate: sdk.Float32(1834.8),
                },
                Ten: &operations.UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings10{
                    BandOperationMode: operations.UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings10BandOperationModeEnumTwo4ghz.ToPointer(),
                    BandSteeringEnabled: sdk.Bool(false),
                    MinBitrate: sdk.Float32(8188.66),
                },
                Eleven: &operations.UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings11{
                    BandOperationMode: operations.UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings11BandOperationModeEnumTwo4ghz.ToPointer(),
                    BandSteeringEnabled: sdk.Bool(false),
                    MinBitrate: sdk.Float32(5364.27),
                },
                Twelve: &operations.UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings12{
                    BandOperationMode: operations.UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings12BandOperationModeEnumFiveghz.ToPointer(),
                    BandSteeringEnabled: sdk.Bool(false),
                    MinBitrate: sdk.Float32(6461.08),
                },
                Thirteen: &operations.UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings13{
                    BandOperationMode: operations.UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings13BandOperationModeEnumTwo4ghz.ToPointer(),
                    BandSteeringEnabled: sdk.Bool(false),
                    MinBitrate: sdk.Float32(4288.98),
                },
                Fourteen: &operations.UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings14{
                    BandOperationMode: operations.UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings14BandOperationModeEnumFiveghz.ToPointer(),
                    BandSteeringEnabled: sdk.Bool(false),
                    MinBitrate: sdk.Float32(4356.32),
                },
                Two: &operations.UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings2{
                    BandOperationMode: operations.UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings2BandOperationModeEnumDual.ToPointer(),
                    BandSteeringEnabled: sdk.Bool(false),
                    MinBitrate: sdk.Float32(1254.04),
                },
                Three: &operations.UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings3{
                    BandOperationMode: operations.UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings3BandOperationModeEnumDual.ToPointer(),
                    BandSteeringEnabled: sdk.Bool(false),
                    MinBitrate: sdk.Float32(1709.92),
                },
                Four: &operations.UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings4{
                    BandOperationMode: operations.UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings4BandOperationModeEnumFiveghz.ToPointer(),
                    BandSteeringEnabled: sdk.Bool(false),
                    MinBitrate: sdk.Float32(9189.97),
                },
                Five: &operations.UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings5{
                    BandOperationMode: operations.UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings5BandOperationModeEnumDual.ToPointer(),
                    BandSteeringEnabled: sdk.Bool(false),
                    MinBitrate: sdk.Float32(4576.32),
                },
                Six: &operations.UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings6{
                    BandOperationMode: operations.UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings6BandOperationModeEnumTwo4ghz.ToPointer(),
                    BandSteeringEnabled: sdk.Bool(false),
                    MinBitrate: sdk.Float32(4724.55),
                },
                Seven: &operations.UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings7{
                    BandOperationMode: operations.UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings7BandOperationModeEnumFiveghz.ToPointer(),
                    BandSteeringEnabled: sdk.Bool(false),
                    MinBitrate: sdk.Float32(6663.31),
                },
                Eight: &operations.UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings8{
                    BandOperationMode: operations.UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings8BandOperationModeEnumFiveghz.ToPointer(),
                    BandSteeringEnabled: sdk.Bool(false),
                    MinBitrate: sdk.Float32(141.26),
                },
                Nine: &operations.UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings9{
                    BandOperationMode: operations.UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings9BandOperationModeEnumDual.ToPointer(),
                    BandSteeringEnabled: sdk.Bool(false),
                    MinBitrate: sdk.Float32(5326.94),
                },
            },
            Transmission: &operations.UpdateNetworkWirelessRfProfileRequestBodyTransmission{
                Enabled: sdk.Bool(false),
            },
            TwoFourGhzSettings: &operations.UpdateNetworkWirelessRfProfileRequestBodyTwoFourGhzSettings{
                AxEnabled: sdk.Bool(false),
                MaxPower: sdk.Int64(987890),
                MinBitrate: sdk.Float32(8853.36),
                MinPower: sdk.Int64(292431),
                Rxsop: sdk.Int64(417304),
                ValidAutoChannels: []int64{
                    412604,
                    105990,
                    453310,
                    452383,
                },
            },
        },
        NetworkID: "fugiat",
        RfProfileID: "quidem",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkWirelessRfProfile200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkWirelessSettings

Update the wireless settings for a network

### Example Usage

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
    res, err := s.Configure.UpdateNetworkWirelessSettings(ctx, operations.UpdateNetworkWirelessSettingsRequest{
        RequestBody: &operations.UpdateNetworkWirelessSettingsRequestBody{
            Ipv6BridgeEnabled: sdk.Bool(false),
            LedLightsOn: sdk.Bool(false),
            LocationAnalyticsEnabled: sdk.Bool(false),
            MeshingEnabled: sdk.Bool(false),
            UpgradeStrategy: operations.UpdateNetworkWirelessSettingsRequestBodyUpgradeStrategyEnumMinimizeUpgradeTime.ToPointer(),
        },
        NetworkID: "pariatur",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkWirelessSettings200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkWirelessSsid

Update the attributes of an MR SSID

### Example Usage

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
    res, err := s.Configure.UpdateNetworkWirelessSsid(ctx, operations.UpdateNetworkWirelessSsidRequest{
        RequestBody: &operations.UpdateNetworkWirelessSsidRequestBody{
            ActiveDirectory: &operations.UpdateNetworkWirelessSsidRequestBodyActiveDirectory{
                Credentials: &operations.UpdateNetworkWirelessSsidRequestBodyActiveDirectoryCredentials{
                    LogonName: sdk.String("nobis"),
                    Password: sdk.String("dolor"),
                },
                Servers: []UpdateNetworkWirelessSsidRequestBodyActiveDirectoryServers{
                    operations.UpdateNetworkWirelessSsidRequestBodyActiveDirectoryServers{
                        Host: "dignissimos",
                        Port: sdk.Int64(50859),
                    },
                    operations.UpdateNetworkWirelessSsidRequestBodyActiveDirectoryServers{
                        Host: "voluptatibus",
                        Port: sdk.Int64(976700),
                    },
                    operations.UpdateNetworkWirelessSsidRequestBodyActiveDirectoryServers{
                        Host: "cum",
                        Port: sdk.Int64(706208),
                    },
                },
            },
            AdultContentFilteringEnabled: sdk.Bool(false),
            ApTagsAndVlanIds: []UpdateNetworkWirelessSsidRequestBodyApTagsAndVlanIds{
                operations.UpdateNetworkWirelessSsidRequestBodyApTagsAndVlanIds{
                    Tags: []string{
                        "ducimus",
                        "aperiam",
                        "repudiandae",
                    },
                    VlanID: sdk.Int64(918082),
                },
                operations.UpdateNetworkWirelessSsidRequestBodyApTagsAndVlanIds{
                    Tags: []string{
                        "nihil",
                        "ipsa",
                    },
                    VlanID: sdk.Int64(911193),
                },
            },
            AuthMode: operations.UpdateNetworkWirelessSsidRequestBodyAuthModeEnumEightThousandAndTwentyOnexMeraki.ToPointer(),
            AvailabilityTags: []string{
                "alias",
                "occaecati",
            },
            AvailableOnAllAps: sdk.Bool(false),
            BandSelection: sdk.String("iusto"),
            ConcentratorNetworkID: sdk.String("debitis"),
            DefaultVlanID: sdk.Int64(973406),
            DisassociateClientsOnVpnFailover: sdk.Bool(false),
            DNSRewrite: &operations.UpdateNetworkWirelessSsidRequestBodyDNSRewrite{
                DNSCustomNameservers: []string{
                    "maxime",
                    "eos",
                },
                Enabled: sdk.Bool(false),
            },
            Dot11r: &operations.UpdateNetworkWirelessSsidRequestBodyDot11r{
                Adaptive: sdk.Bool(false),
                Enabled: sdk.Bool(false),
            },
            Dot11w: &operations.UpdateNetworkWirelessSsidRequestBodyDot11w{
                Enabled: sdk.Bool(false),
                Required: sdk.Bool(false),
            },
            Enabled: sdk.Bool(false),
            EncryptionMode: operations.UpdateNetworkWirelessSsidRequestBodyEncryptionModeEnumWep.ToPointer(),
            EnterpriseAdminAccess: operations.UpdateNetworkWirelessSsidRequestBodyEnterpriseAdminAccessEnumAccessDisabled.ToPointer(),
            Gre: &operations.UpdateNetworkWirelessSsidRequestBodyGre{
                Concentrator: &operations.UpdateNetworkWirelessSsidRequestBodyGreConcentrator{
                    Host: "itaque",
                },
                Key: sdk.Int64(381627),
            },
            IPAssignmentMode: sdk.String("vitae"),
            LanIsolationEnabled: sdk.Bool(false),
            Ldap: &operations.UpdateNetworkWirelessSsidRequestBodyLdap{
                BaseDistinguishedName: sdk.String("tempore"),
                Credentials: &operations.UpdateNetworkWirelessSsidRequestBodyLdapCredentials{
                    DistinguishedName: sdk.String("sit"),
                    Password: sdk.String("quibusdam"),
                },
                ServerCaCertificate: &operations.UpdateNetworkWirelessSsidRequestBodyLdapServerCaCertificate{
                    Contents: sdk.String("dolorem"),
                },
                Servers: []UpdateNetworkWirelessSsidRequestBodyLdapServers{
                    operations.UpdateNetworkWirelessSsidRequestBodyLdapServers{
                        Host: "blanditiis",
                        Port: 494815,
                    },
                },
            },
            LocalRadius: &operations.UpdateNetworkWirelessSsidRequestBodyLocalRadius{
                CacheTimeout: sdk.Int64(77760),
                CertificateAuthentication: &operations.UpdateNetworkWirelessSsidRequestBodyLocalRadiusCertificateAuthentication{
                    ClientRootCaCertificate: &operations.UpdateNetworkWirelessSsidRequestBodyLocalRadiusCertificateAuthenticationClientRootCaCertificate{
                        Contents: sdk.String("modi"),
                    },
                    Enabled: sdk.Bool(false),
                    OcspResponderURL: sdk.String("porro"),
                    UseLdap: sdk.Bool(false),
                    UseOcsp: sdk.Bool(false),
                },
                PasswordAuthentication: &operations.UpdateNetworkWirelessSsidRequestBodyLocalRadiusPasswordAuthentication{
                    Enabled: sdk.Bool(false),
                },
            },
            MandatoryDhcpEnabled: sdk.Bool(false),
            MinBitrate: sdk.Float32(1644.32),
            Name: sdk.String("Genevieve Erdman"),
            Oauth: &operations.UpdateNetworkWirelessSsidRequestBodyOauth{
                AllowedDomains: []string{
                    "ea",
                    "sequi",
                    "esse",
                },
            },
            PerClientBandwidthLimitDown: sdk.Int64(751286),
            PerClientBandwidthLimitUp: sdk.Int64(669987),
            PerSsidBandwidthLimitDown: sdk.Int64(521333),
            PerSsidBandwidthLimitUp: sdk.Int64(359634),
            Psk: sdk.String("maxime"),
            RadiusAccountingEnabled: sdk.Bool(false),
            RadiusAccountingInterimInterval: sdk.Int64(240656),
            RadiusAccountingServers: []UpdateNetworkWirelessSsidRequestBodyRadiusAccountingServers{
                operations.UpdateNetworkWirelessSsidRequestBodyRadiusAccountingServers{
                    CaCertificate: sdk.String("repudiandae"),
                    Host: "autem",
                    Port: sdk.Int64(345188),
                    RadsecEnabled: sdk.Bool(false),
                    Secret: sdk.String("ad"),
                },
                operations.UpdateNetworkWirelessSsidRequestBodyRadiusAccountingServers{
                    CaCertificate: sdk.String("molestiae"),
                    Host: "ut",
                    Port: sdk.Int64(819959),
                    RadsecEnabled: sdk.Bool(false),
                    Secret: sdk.String("harum"),
                },
                operations.UpdateNetworkWirelessSsidRequestBodyRadiusAccountingServers{
                    CaCertificate: sdk.String("culpa"),
                    Host: "reiciendis",
                    Port: sdk.Int64(620426),
                    RadsecEnabled: sdk.Bool(false),
                    Secret: sdk.String("labore"),
                },
                operations.UpdateNetworkWirelessSsidRequestBodyRadiusAccountingServers{
                    CaCertificate: sdk.String("officia"),
                    Host: "quam",
                    Port: sdk.Int64(810373),
                    RadsecEnabled: sdk.Bool(false),
                    Secret: sdk.String("sint"),
                },
            },
            RadiusAttributeForGroupPolicies: operations.UpdateNetworkWirelessSsidRequestBodyRadiusAttributeForGroupPoliciesEnumFilterID.ToPointer(),
            RadiusAuthenticationNasID: sdk.String("a"),
            RadiusCalledStationID: sdk.String("illo"),
            RadiusCoaEnabled: sdk.Bool(false),
            RadiusFailoverPolicy: operations.UpdateNetworkWirelessSsidRequestBodyRadiusFailoverPolicyEnumAllowAccess.ToPointer(),
            RadiusFallbackEnabled: sdk.Bool(false),
            RadiusGuestVlanEnabled: sdk.Bool(false),
            RadiusGuestVlanID: sdk.Int64(665513),
            RadiusLoadBalancingPolicy: operations.UpdateNetworkWirelessSsidRequestBodyRadiusLoadBalancingPolicyEnumStrictPriorityOrder.ToPointer(),
            RadiusOverride: sdk.Bool(false),
            RadiusProxyEnabled: sdk.Bool(false),
            RadiusServerAttemptsLimit: sdk.Int64(164995),
            RadiusServerTimeout: sdk.Int64(524026),
            RadiusServers: []UpdateNetworkWirelessSsidRequestBodyRadiusServers{
                operations.UpdateNetworkWirelessSsidRequestBodyRadiusServers{
                    CaCertificate: sdk.String("libero"),
                    Host: "quia",
                    OpenRoamingCertificateID: sdk.Int64(781341),
                    Port: sdk.Int64(956449),
                    RadsecEnabled: sdk.Bool(false),
                    Secret: sdk.String("consequuntur"),
                },
                operations.UpdateNetworkWirelessSsidRequestBodyRadiusServers{
                    CaCertificate: sdk.String("expedita"),
                    Host: "voluptatibus",
                    OpenRoamingCertificateID: sdk.Int64(263386),
                    Port: sdk.Int64(976121),
                    RadsecEnabled: sdk.Bool(false),
                    Secret: sdk.String("neque"),
                },
                operations.UpdateNetworkWirelessSsidRequestBodyRadiusServers{
                    CaCertificate: sdk.String("pariatur"),
                    Host: "vero",
                    OpenRoamingCertificateID: sdk.Int64(843355),
                    Port: sdk.Int64(230598),
                    RadsecEnabled: sdk.Bool(false),
                    Secret: sdk.String("minima"),
                },
                operations.UpdateNetworkWirelessSsidRequestBodyRadiusServers{
                    CaCertificate: sdk.String("ea"),
                    Host: "fugiat",
                    OpenRoamingCertificateID: sdk.Int64(460318),
                    Port: sdk.Int64(888328),
                    RadsecEnabled: sdk.Bool(false),
                    Secret: sdk.String("sunt"),
                },
            },
            RadiusTestingEnabled: sdk.Bool(false),
            SecondaryConcentratorNetworkID: sdk.String("modi"),
            SpeedBurst: &operations.UpdateNetworkWirelessSsidRequestBodySpeedBurst{
                Enabled: sdk.Bool(false),
            },
            SplashGuestSponsorDomains: []string{
                "dolores",
                "beatae",
                "eligendi",
            },
            SplashPage: operations.UpdateNetworkWirelessSsidRequestBodySplashPageEnumSmsAuthentication.ToPointer(),
            UseVlanTagging: sdk.Bool(false),
            Visible: sdk.Bool(false),
            VlanID: sdk.Int64(577735),
            WalledGardenEnabled: sdk.Bool(false),
            WalledGardenRanges: []string{
                "beatae",
                "natus",
                "aliquid",
            },
            WpaEncryptionMode: operations.UpdateNetworkWirelessSsidRequestBodyWpaEncryptionModeEnumWpa3TransitionMode.ToPointer(),
        },
        NetworkID: "veniam",
        Number: "quis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkWirelessSsid200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkWirelessSsidBonjourForwarding

Update the bonjour forwarding setting and rules for the SSID

### Example Usage

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
    res, err := s.Configure.UpdateNetworkWirelessSsidBonjourForwarding(ctx, operations.UpdateNetworkWirelessSsidBonjourForwardingRequest{
        RequestBody: &operations.UpdateNetworkWirelessSsidBonjourForwardingRequestBody{
            Enabled: sdk.Bool(false),
            Rules: []UpdateNetworkWirelessSsidBonjourForwardingRequestBodyRules{
                operations.UpdateNetworkWirelessSsidBonjourForwardingRequestBodyRules{
                    Description: sdk.String("delectus"),
                    Services: []UpdateNetworkWirelessSsidBonjourForwardingRequestBodyRulesServicesEnum{
                        operations.UpdateNetworkWirelessSsidBonjourForwardingRequestBodyRulesServicesEnumSSH,
                        operations.UpdateNetworkWirelessSsidBonjourForwardingRequestBodyRulesServicesEnumSamba,
                    },
                    VlanID: "sunt",
                },
                operations.UpdateNetworkWirelessSsidBonjourForwardingRequestBodyRules{
                    Description: sdk.String("quod"),
                    Services: []UpdateNetworkWirelessSsidBonjourForwardingRequestBodyRulesServicesEnum{
                        operations.UpdateNetworkWirelessSsidBonjourForwardingRequestBodyRulesServicesEnumSamba,
                        operations.UpdateNetworkWirelessSsidBonjourForwardingRequestBodyRulesServicesEnumPrinters,
                    },
                    VlanID: "natus",
                },
                operations.UpdateNetworkWirelessSsidBonjourForwardingRequestBodyRules{
                    Description: sdk.String("fuga"),
                    Services: []UpdateNetworkWirelessSsidBonjourForwardingRequestBodyRulesServicesEnum{
                        operations.UpdateNetworkWirelessSsidBonjourForwardingRequestBodyRulesServicesEnumAllServices,
                        operations.UpdateNetworkWirelessSsidBonjourForwardingRequestBodyRulesServicesEnumAllServices,
                        operations.UpdateNetworkWirelessSsidBonjourForwardingRequestBodyRulesServicesEnumFtp,
                        operations.UpdateNetworkWirelessSsidBonjourForwardingRequestBodyRulesServicesEnumPrinters,
                    },
                    VlanID: "beatae",
                },
            },
        },
        NetworkID: "eligendi",
        Number: "eos",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkWirelessSsidBonjourForwarding200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkWirelessSsidDeviceTypeGroupPolicies

Update the device type group policies for the SSID

### Example Usage

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
    res, err := s.Configure.UpdateNetworkWirelessSsidDeviceTypeGroupPolicies(ctx, operations.UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequest{
        RequestBody: &operations.UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBody{
            DeviceTypePolicies: []UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBodyDeviceTypePolicies{
                operations.UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBodyDeviceTypePolicies{
                    DevicePolicy: operations.UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBodyDeviceTypePoliciesDevicePolicyEnumGroupPolicy,
                    DeviceType: operations.UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBodyDeviceTypePoliciesDeviceTypeEnumBlackBerry,
                    GroupPolicyID: sdk.Int64(609362),
                },
            },
            Enabled: sdk.Bool(false),
        },
        NetworkID: "fuga",
        Number: "voluptate",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkWirelessSsidDeviceTypeGroupPolicies200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkWirelessSsidEapOverride

Update the EAP overridden parameters for an SSID.

### Example Usage

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
    res, err := s.Configure.UpdateNetworkWirelessSsidEapOverride(ctx, operations.UpdateNetworkWirelessSsidEapOverrideRequest{
        RequestBody: &operations.UpdateNetworkWirelessSsidEapOverrideRequestBody{
            EapolKey: &operations.UpdateNetworkWirelessSsidEapOverrideRequestBodyEapolKey{
                Retries: sdk.Int64(780639),
                TimeoutInMs: sdk.Int64(7135),
            },
            Identity: &operations.UpdateNetworkWirelessSsidEapOverrideRequestBodyIdentity{
                Retries: sdk.Int64(886365),
                Timeout: sdk.Int64(66129),
            },
            MaxRetries: sdk.Int64(448314),
            Timeout: sdk.Int64(763567),
        },
        NetworkID: "distinctio",
        Number: "quasi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkWirelessSsidEapOverride200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkWirelessSsidFirewallL3FirewallRules

Update the L3 firewall rules of an SSID on an MR network

### Example Usage

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
    res, err := s.Configure.UpdateNetworkWirelessSsidFirewallL3FirewallRules(ctx, operations.UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequest{
        RequestBody: &operations.UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBody{
            AllowLanAccess: sdk.Bool(false),
            Rules: []UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRules{
                operations.UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRules{
                    Comment: sdk.String("impedit"),
                    DestCidr: "enim",
                    DestPort: sdk.String("nam"),
                    Policy: operations.UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRulesPolicyEnumDeny,
                    Protocol: operations.UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRulesProtocolEnumIcmp6,
                },
            },
        },
        NetworkID: "fugit",
        Number: "corporis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkWirelessSsidFirewallL3FirewallRules200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkWirelessSsidFirewallL7FirewallRules

Update the L7 firewall rules of an SSID on an MR network

### Example Usage

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
    res, err := s.Configure.UpdateNetworkWirelessSsidFirewallL7FirewallRules(ctx, operations.UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequest{
        RequestBody: &operations.UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBody{
            Rules: []UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBodyRules{
                operations.UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBodyRules{
                    Policy: operations.UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBodyRulesPolicyEnumDeny.ToPointer(),
                    Type: operations.UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBodyRulesTypeEnumPort.ToPointer(),
                    Value: sdk.String("explicabo"),
                },
                operations.UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBodyRules{
                    Policy: operations.UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBodyRulesPolicyEnumDeny.ToPointer(),
                    Type: operations.UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBodyRulesTypeEnumApplication.ToPointer(),
                    Value: sdk.String("quo"),
                },
                operations.UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBodyRules{
                    Policy: operations.UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBodyRulesPolicyEnumDeny.ToPointer(),
                    Type: operations.UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBodyRulesTypeEnumPort.ToPointer(),
                    Value: sdk.String("enim"),
                },
                operations.UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBodyRules{
                    Policy: operations.UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBodyRulesPolicyEnumDeny.ToPointer(),
                    Type: operations.UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBodyRulesTypeEnumIPRange.ToPointer(),
                    Value: sdk.String("tempore"),
                },
            },
        },
        NetworkID: "est",
        Number: "ex",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkWirelessSsidFirewallL7FirewallRules200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkWirelessSsidHotspot20

Update the Hotspot 2.0 settings of an SSID

### Example Usage

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
    res, err := s.Configure.UpdateNetworkWirelessSsidHotspot20(ctx, operations.UpdateNetworkWirelessSsidHotspot20Request{
        RequestBody: &operations.UpdateNetworkWirelessSsidHotspot20RequestBody{
            Domains: []string{
                "nobis",
                "repellat",
                "necessitatibus",
                "quisquam",
            },
            Enabled: sdk.Bool(false),
            MccMncs: []UpdateNetworkWirelessSsidHotspot20RequestBodyMccMncs{
                operations.UpdateNetworkWirelessSsidHotspot20RequestBodyMccMncs{
                    Mcc: sdk.String("amet"),
                    Mnc: sdk.String("consequuntur"),
                },
                operations.UpdateNetworkWirelessSsidHotspot20RequestBodyMccMncs{
                    Mcc: sdk.String("fuga"),
                    Mnc: sdk.String("a"),
                },
                operations.UpdateNetworkWirelessSsidHotspot20RequestBodyMccMncs{
                    Mcc: sdk.String("aliquid"),
                    Mnc: sdk.String("voluptatum"),
                },
            },
            NaiRealms: []UpdateNetworkWirelessSsidHotspot20RequestBodyNaiRealms{
                operations.UpdateNetworkWirelessSsidHotspot20RequestBodyNaiRealms{
                    Format: operations.UpdateNetworkWirelessSsidHotspot20RequestBodyNaiRealmsFormatEnumZero.ToPointer(),
                    Methods: []UpdateNetworkWirelessSsidHotspot20RequestBodyNaiRealmsMethods{
                        operations.UpdateNetworkWirelessSsidHotspot20RequestBodyNaiRealmsMethods{
                            AuthenticationTypes: map[string]interface{}{
                                "veniam": "nam",
                                "delectus": "earum",
                            },
                            ID: sdk.String("cec2dd69-16f7-4fc7-9da7-0ec60e607589"),
                        },
                        operations.UpdateNetworkWirelessSsidHotspot20RequestBodyNaiRealmsMethods{
                            AuthenticationTypes: map[string]interface{}{
                                "fugiat": "autem",
                                "et": "quisquam",
                            },
                            ID: sdk.String("14cd9022-7e37-4c0d-977f-1a5491abe975"),
                        },
                        operations.UpdateNetworkWirelessSsidHotspot20RequestBodyNaiRealmsMethods{
                            AuthenticationTypes: map[string]interface{}{
                                "cum": "vitae",
                            },
                            ID: sdk.String("06d23e03-e698-415a-ae99-fcde9e729c9d"),
                        },
                        operations.UpdateNetworkWirelessSsidHotspot20RequestBodyNaiRealmsMethods{
                            AuthenticationTypes: map[string]interface{}{
                                "maiores": "eos",
                                "pariatur": "totam",
                            },
                            ID: sdk.String("a44640ca-60db-473a-af93-f467dc0d8da5"),
                        },
                    },
                    Realm: sdk.String("voluptas"),
                },
            },
            NetworkAccessType: operations.UpdateNetworkWirelessSsidHotspot20RequestBodyNetworkAccessTypeEnumChargeablePublicNetwork.ToPointer(),
            Operator: &operations.UpdateNetworkWirelessSsidHotspot20RequestBodyOperator{
                Name: sdk.String("Tammy Armstrong"),
            },
            RoamConsortOis: []string{
                "soluta",
                "quas",
                "asperiores",
            },
            Venue: &operations.UpdateNetworkWirelessSsidHotspot20RequestBodyVenue{
                Name: sdk.String("Constance Klein"),
                Type: operations.UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnumGasStation.ToPointer(),
            },
        },
        NetworkID: "quo",
        Number: "et",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkWirelessSsidHotspot20200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkWirelessSsidIdentityPsk

Update an Identity PSK

### Example Usage

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
    res, err := s.Configure.UpdateNetworkWirelessSsidIdentityPsk(ctx, operations.UpdateNetworkWirelessSsidIdentityPskRequest{
        RequestBody: &operations.UpdateNetworkWirelessSsidIdentityPskRequestBody{
            GroupPolicyID: sdk.String("cupiditate"),
            Name: sdk.String("Loretta Murazik"),
            Passphrase: sdk.String("blanditiis"),
        },
        IdentityPskID: "aut",
        NetworkID: "nulla",
        Number: "culpa",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkWirelessSsidIdentityPsk200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkWirelessSsidSchedules

Update the outage schedule for the SSID

### Example Usage

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
    res, err := s.Configure.UpdateNetworkWirelessSsidSchedules(ctx, operations.UpdateNetworkWirelessSsidSchedulesRequest{
        RequestBody: &operations.UpdateNetworkWirelessSsidSchedulesRequestBody{
            Enabled: sdk.Bool(false),
            Ranges: []UpdateNetworkWirelessSsidSchedulesRequestBodyRanges{
                operations.UpdateNetworkWirelessSsidSchedulesRequestBodyRanges{
                    EndDay: "est",
                    EndTime: "aut",
                    StartDay: "blanditiis",
                    StartTime: "unde",
                },
                operations.UpdateNetworkWirelessSsidSchedulesRequestBodyRanges{
                    EndDay: "hic",
                    EndTime: "maxime",
                    StartDay: "numquam",
                    StartTime: "ut",
                },
            },
            RangesInSeconds: []UpdateNetworkWirelessSsidSchedulesRequestBodyRangesInSeconds{
                operations.UpdateNetworkWirelessSsidSchedulesRequestBodyRangesInSeconds{
                    End: 706345,
                    Start: 174221,
                },
                operations.UpdateNetworkWirelessSsidSchedulesRequestBodyRangesInSeconds{
                    End: 463461,
                    Start: 261955,
                },
                operations.UpdateNetworkWirelessSsidSchedulesRequestBodyRangesInSeconds{
                    End: 354031,
                    Start: 204898,
                },
                operations.UpdateNetworkWirelessSsidSchedulesRequestBodyRangesInSeconds{
                    End: 60123,
                    Start: 885320,
                },
            },
        },
        NetworkID: "ullam",
        Number: "minus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkWirelessSsidSchedules200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkWirelessSsidSplashSettings

Modify the splash page settings for the given SSID

### Example Usage

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
    res, err := s.Configure.UpdateNetworkWirelessSsidSplashSettings(ctx, operations.UpdateNetworkWirelessSsidSplashSettingsRequest{
        RequestBody: &operations.UpdateNetworkWirelessSsidSplashSettingsRequestBody{
            AllowSimultaneousLogins: sdk.Bool(false),
            Billing: &operations.UpdateNetworkWirelessSsidSplashSettingsRequestBodyBilling{
                FreeAccess: &operations.UpdateNetworkWirelessSsidSplashSettingsRequestBodyBillingFreeAccess{
                    DurationInMinutes: sdk.Int64(808768),
                    Enabled: sdk.Bool(false),
                },
                PrepaidAccessFastLoginEnabled: sdk.Bool(false),
                ReplyToEmailAddress: sdk.String("in"),
            },
            BlockAllTrafficBeforeSignOn: sdk.Bool(false),
            ControllerDisconnectionBehavior: operations.UpdateNetworkWirelessSsidSplashSettingsRequestBodyControllerDisconnectionBehaviorEnumRestricted.ToPointer(),
            GuestSponsorship: &operations.UpdateNetworkWirelessSsidSplashSettingsRequestBodyGuestSponsorship{
                DurationInMinutes: sdk.Int64(378023),
                GuestCanRequestTimeframe: sdk.Bool(false),
            },
            RedirectURL: sdk.String("quibusdam"),
            SentryEnrollment: &operations.UpdateNetworkWirelessSsidSplashSettingsRequestBodySentryEnrollment{
                EnforcedSystems: []string{
                    "quod",
                },
                Strength: operations.UpdateNetworkWirelessSsidSplashSettingsRequestBodySentryEnrollmentStrengthEnumStrict.ToPointer(),
                SystemsManagerNetwork: &operations.UpdateNetworkWirelessSsidSplashSettingsRequestBodySentryEnrollmentSystemsManagerNetwork{
                    ID: "cfdcd334-b6f6-423b-8eca-b50aee5e0da8",
                },
            },
            SplashImage: &operations.UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashImage{
                Extension: sdk.String("cum"),
                Image: &operations.UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashImageImage{
                    Contents: sdk.String("sint"),
                    Format: operations.UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashImageImageFormatEnumPng.ToPointer(),
                },
                Md5: sdk.String("sapiente"),
            },
            SplashLogo: &operations.UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashLogo{
                Extension: sdk.String("nisi"),
                Image: &operations.UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashLogoImage{
                    Contents: sdk.String("id"),
                    Format: operations.UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashLogoImageFormatEnumPng.ToPointer(),
                },
                Md5: sdk.String("perferendis"),
            },
            SplashPrepaidFront: &operations.UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashPrepaidFront{
                Extension: sdk.String("ullam"),
                Image: &operations.UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashPrepaidFrontImage{
                    Contents: sdk.String("incidunt"),
                    Format: operations.UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashPrepaidFrontImageFormatEnumJpg.ToPointer(),
                },
                Md5: sdk.String("nisi"),
            },
            SplashTimeout: sdk.Int64(921757),
            SplashURL: sdk.String("odio"),
            UseRedirectURL: sdk.Bool(false),
            UseSplashURL: sdk.Bool(false),
            WelcomeMessage: sdk.String("libero"),
        },
        NetworkID: "aliquam",
        Number: "quasi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkWirelessSsidSplashSettings200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkWirelessSsidTrafficShapingRules

Update the traffic shaping settings for an SSID on an MR network

### Example Usage

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
    res, err := s.Configure.UpdateNetworkWirelessSsidTrafficShapingRules(ctx, operations.UpdateNetworkWirelessSsidTrafficShapingRulesRequest{
        RequestBody: &operations.UpdateNetworkWirelessSsidTrafficShapingRulesRequestBody{
            DefaultRulesEnabled: sdk.Bool(false),
            Rules: []UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRules{
                operations.UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRules{
                    Definitions: []UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitions{
                        operations.UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitions{
                            Type: operations.UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnumLocalNet,
                            Value: "saepe",
                        },
                        operations.UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitions{
                            Type: operations.UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnumApplicationCategory,
                            Value: "assumenda",
                        },
                        operations.UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitions{
                            Type: operations.UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnumApplication,
                            Value: "molestiae",
                        },
                        operations.UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitions{
                            Type: operations.UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnumHost,
                            Value: "assumenda",
                        },
                    },
                    DscpTagValue: sdk.Int64(810526),
                    PcpTagValue: sdk.Int64(75629),
                    PerClientBandwidthLimits: &operations.UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimits{
                        BandwidthLimits: &operations.UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimitsBandwidthLimits{
                            LimitDown: sdk.Int64(760272),
                            LimitUp: sdk.Int64(254226),
                        },
                        Settings: sdk.String("adipisci"),
                    },
                },
            },
            TrafficShapingEnabled: sdk.Bool(false),
        },
        NetworkID: "pariatur",
        Number: "modi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkWirelessSsidTrafficShapingRules200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkWirelessSsidVpn

Update the VPN settings for the SSID

### Example Usage

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
    res, err := s.Configure.UpdateNetworkWirelessSsidVpn(ctx, operations.UpdateNetworkWirelessSsidVpnRequest{
        RequestBody: &operations.UpdateNetworkWirelessSsidVpnRequestBody{
            Concentrator: &operations.UpdateNetworkWirelessSsidVpnRequestBodyConcentrator{
                NetworkID: sdk.String("doloremque"),
                VlanID: sdk.Int64(987148),
            },
            Failover: &operations.UpdateNetworkWirelessSsidVpnRequestBodyFailover{
                HeartbeatInterval: sdk.Int64(398054),
                IdleTimeout: sdk.Int64(74295),
                RequestIP: sdk.String("nulla"),
            },
            SplitTunnel: &operations.UpdateNetworkWirelessSsidVpnRequestBodySplitTunnel{
                Enabled: sdk.Bool(false),
                Rules: []UpdateNetworkWirelessSsidVpnRequestBodySplitTunnelRules{
                    operations.UpdateNetworkWirelessSsidVpnRequestBodySplitTunnelRules{
                        Comment: sdk.String("in"),
                        DestCidr: "et",
                        DestPort: sdk.String("veritatis"),
                        Policy: "ad",
                        Protocol: operations.UpdateNetworkWirelessSsidVpnRequestBodySplitTunnelRulesProtocolEnumTCP.ToPointer(),
                    },
                },
            },
        },
        NetworkID: "cumque",
        Number: "tempore",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkWirelessSsidVpn200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateOrganization

Update an organization

### Example Usage

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
    res, err := s.Configure.UpdateOrganization(ctx, operations.UpdateOrganizationRequest{
        RequestBody: &operations.UpdateOrganizationRequestBody{
            API: &operations.UpdateOrganizationRequestBodyAPI{
                Enabled: sdk.Bool(false),
            },
            Management: &operations.UpdateOrganizationRequestBodyManagement{
                Details: []UpdateOrganizationRequestBodyManagementDetails{
                    operations.UpdateOrganizationRequestBodyManagementDetails{
                        Name: sdk.String("Kellie Ullrich"),
                        Value: sdk.String("esse"),
                    },
                    operations.UpdateOrganizationRequestBodyManagementDetails{
                        Name: sdk.String("Frances Botsford"),
                        Value: sdk.String("consequatur"),
                    },
                    operations.UpdateOrganizationRequestBodyManagementDetails{
                        Name: sdk.String("Joy Crona"),
                        Value: sdk.String("odit"),
                    },
                    operations.UpdateOrganizationRequestBodyManagementDetails{
                        Name: sdk.String("Stanley Rau"),
                        Value: sdk.String("pariatur"),
                    },
                },
            },
            Name: sdk.String("Stewart Abernathy"),
        },
        OrganizationID: "non",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateOrganization200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateOrganizationActionBatch

Update an action batch

### Example Usage

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
    res, err := s.Configure.UpdateOrganizationActionBatch(ctx, operations.UpdateOrganizationActionBatchRequest{
        RequestBody: &operations.UpdateOrganizationActionBatchRequestBody{
            Confirmed: sdk.Bool(false),
            Synchronous: sdk.Bool(false),
        },
        ActionBatchID: "harum",
        OrganizationID: "voluptate",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateOrganizationActionBatch200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateOrganizationAdaptivePolicyACL

Updates an adaptive policy ACL

### Example Usage

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
    res, err := s.Configure.UpdateOrganizationAdaptivePolicyACL(ctx, operations.UpdateOrganizationAdaptivePolicyACLRequest{
        RequestBody: &operations.UpdateOrganizationAdaptivePolicyACLRequestBody{
            Description: sdk.String("distinctio"),
            IPVersion: operations.UpdateOrganizationAdaptivePolicyACLRequestBodyIPVersionEnumIpv4.ToPointer(),
            Name: sdk.String("Enrique McDermott"),
            Rules: []UpdateOrganizationAdaptivePolicyACLRequestBodyRules{
                operations.UpdateOrganizationAdaptivePolicyACLRequestBodyRules{
                    DstPort: sdk.String("aliquid"),
                    Policy: operations.UpdateOrganizationAdaptivePolicyACLRequestBodyRulesPolicyEnumDeny,
                    Protocol: operations.UpdateOrganizationAdaptivePolicyACLRequestBodyRulesProtocolEnumUDP,
                    SrcPort: sdk.String("necessitatibus"),
                },
                operations.UpdateOrganizationAdaptivePolicyACLRequestBodyRules{
                    DstPort: sdk.String("fugiat"),
                    Policy: operations.UpdateOrganizationAdaptivePolicyACLRequestBodyRulesPolicyEnumAllow,
                    Protocol: operations.UpdateOrganizationAdaptivePolicyACLRequestBodyRulesProtocolEnumIcmp,
                    SrcPort: sdk.String("odio"),
                },
                operations.UpdateOrganizationAdaptivePolicyACLRequestBodyRules{
                    DstPort: sdk.String("voluptas"),
                    Policy: operations.UpdateOrganizationAdaptivePolicyACLRequestBodyRulesPolicyEnumDeny,
                    Protocol: operations.UpdateOrganizationAdaptivePolicyACLRequestBodyRulesProtocolEnumAny,
                    SrcPort: sdk.String("reiciendis"),
                },
                operations.UpdateOrganizationAdaptivePolicyACLRequestBodyRules{
                    DstPort: sdk.String("minus"),
                    Policy: operations.UpdateOrganizationAdaptivePolicyACLRequestBodyRulesPolicyEnumAllow,
                    Protocol: operations.UpdateOrganizationAdaptivePolicyACLRequestBodyRulesProtocolEnumTCP,
                    SrcPort: sdk.String("ab"),
                },
            },
        },
        ACLID: "iure",
        OrganizationID: "deserunt",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateOrganizationAdaptivePolicyACL200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateOrganizationAdaptivePolicyGroup

Updates an adaptive policy group. If updating "Infrastructure", only the SGT is allowed. Cannot update "Unknown".

### Example Usage

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
    res, err := s.Configure.UpdateOrganizationAdaptivePolicyGroup(ctx, operations.UpdateOrganizationAdaptivePolicyGroupRequest{
        RequestBody: &operations.UpdateOrganizationAdaptivePolicyGroupRequestBody{
            Description: sdk.String("blanditiis"),
            Name: sdk.String("Jana Hickle"),
            PolicyObjects: []UpdateOrganizationAdaptivePolicyGroupRequestBodyPolicyObjects{
                operations.UpdateOrganizationAdaptivePolicyGroupRequestBodyPolicyObjects{
                    ID: sdk.String("fd28d104-0a7e-4913-92ab-44cb1835008f"),
                    Name: sdk.String("Jeanette Blick"),
                },
            },
            Sgt: sdk.Int64(336692),
        },
        ID: "3e914498-a9ba-4460-addf-de410c37daa9",
        OrganizationID: "sunt",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateOrganizationAdaptivePolicyGroup200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateOrganizationAdaptivePolicyPolicy

Update an Adaptive Policy

### Example Usage

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
    res, err := s.Configure.UpdateOrganizationAdaptivePolicyPolicy(ctx, operations.UpdateOrganizationAdaptivePolicyPolicyRequest{
        RequestBody: &operations.UpdateOrganizationAdaptivePolicyPolicyRequestBody{
            Acls: []UpdateOrganizationAdaptivePolicyPolicyRequestBodyAcls{
                operations.UpdateOrganizationAdaptivePolicyPolicyRequestBodyAcls{
                    ID: sdk.String("2a49d962-5d3c-4aff-8198-eea4452792bc"),
                    Name: sdk.String("Dr. Kyle Graham"),
                },
                operations.UpdateOrganizationAdaptivePolicyPolicyRequestBodyAcls{
                    ID: sdk.String("98becce0-486d-4e0d-96d7-3b005503e8dc"),
                    Name: sdk.String("Rose Jaskolski"),
                },
                operations.UpdateOrganizationAdaptivePolicyPolicyRequestBodyAcls{
                    ID: sdk.String("77c65675-f5b7-40e3-a4cf-cc6a91ec5262"),
                    Name: sdk.String("Mr. Lynette Bayer I"),
                },
            },
            DestinationGroup: &operations.UpdateOrganizationAdaptivePolicyPolicyRequestBodyDestinationGroup{
                ID: sdk.String("ef45cea1-1ac5-43eb-b658-7f340414c5b9"),
                Name: sdk.String("Forrest Veum"),
                Sgt: sdk.Int64(61188),
            },
            LastEntryRule: operations.UpdateOrganizationAdaptivePolicyPolicyRequestBodyLastEntryRuleEnumAllow.ToPointer(),
            SourceGroup: &operations.UpdateOrganizationAdaptivePolicyPolicyRequestBodySourceGroup{
                ID: sdk.String("ae9f92ca-f1b0-425f-9d14-718c6fa2fad0"),
                Name: sdk.String("Steven Johns"),
                Sgt: sdk.Int64(815584),
            },
        },
        ID: "95472cdd-14fc-443b-b0bc-a88fa70c4335",
        OrganizationID: "inventore",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateOrganizationAdaptivePolicyPolicy200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateOrganizationAdaptivePolicySettings

Update global adaptive policy settings

### Example Usage

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
    res, err := s.Configure.UpdateOrganizationAdaptivePolicySettings(ctx, operations.UpdateOrganizationAdaptivePolicySettingsRequest{
        RequestBody: &operations.UpdateOrganizationAdaptivePolicySettingsRequestBody{
            EnabledNetworks: []string{
                "neque",
                "at",
                "nulla",
                "beatae",
            },
        },
        OrganizationID: "necessitatibus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateOrganizationAdaptivePolicySettings200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateOrganizationAdmin

Update an administrator

### Example Usage

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
    res, err := s.Configure.UpdateOrganizationAdmin(ctx, operations.UpdateOrganizationAdminRequest{
        RequestBody: &operations.UpdateOrganizationAdminRequestBody{
            Name: sdk.String("Jaime Wuckert"),
            Networks: []UpdateOrganizationAdminRequestBodyNetworks{
                operations.UpdateOrganizationAdminRequestBodyNetworks{
                    Access: "nemo",
                    ID: "f4f23f1c-0a58-46c3-ae7d-7b67feef5e14",
                },
                operations.UpdateOrganizationAdminRequestBodyNetworks{
                    Access: "quia",
                    ID: "d95b1dbe-ceff-47c4-b156-e9278275eea7",
                },
            },
            OrgAccess: operations.UpdateOrganizationAdminRequestBodyOrgAccessEnumFull.ToPointer(),
            Tags: []UpdateOrganizationAdminRequestBodyTags{
                operations.UpdateOrganizationAdminRequestBodyTags{
                    Access: operations.UpdateOrganizationAdminRequestBodyTagsAccessEnumFull,
                    Tag: "nihil",
                },
                operations.UpdateOrganizationAdminRequestBodyTags{
                    Access: operations.UpdateOrganizationAdminRequestBodyTagsAccessEnumGuestAmbassador,
                    Tag: "laboriosam",
                },
                operations.UpdateOrganizationAdminRequestBodyTags{
                    Access: operations.UpdateOrganizationAdminRequestBodyTagsAccessEnumMonitorOnly,
                    Tag: "quae",
                },
            },
        },
        AdminID: "nisi",
        OrganizationID: "amet",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateOrganizationAdmin200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateOrganizationAlertsProfile

Update an organization-wide alert config

### Example Usage

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
    res, err := s.Configure.UpdateOrganizationAlertsProfile(ctx, operations.UpdateOrganizationAlertsProfileRequest{
        RequestBody: &operations.UpdateOrganizationAlertsProfileRequestBody{
            AlertCondition: &operations.UpdateOrganizationAlertsProfileRequestBodyAlertCondition{
                BitRateBps: sdk.Int64(949051),
                Duration: sdk.Int64(499998),
                Interface: operations.UpdateOrganizationAlertsProfileRequestBodyAlertConditionInterfaceEnumWan1.ToPointer(),
                JitterMs: sdk.Int64(584433),
                LatencyMs: sdk.Int64(706996),
                LossRatio: sdk.Float32(4781.38),
                Mos: sdk.Float32(5956.38),
                Window: sdk.Int64(363893),
            },
            Description: sdk.String("ex"),
            Enabled: sdk.Bool(false),
            NetworkTags: []string{
                "quae",
                "quidem",
                "voluptatem",
                "tenetur",
            },
            Recipients: &operations.UpdateOrganizationAlertsProfileRequestBodyRecipients{
                Emails: []string{
                    "voluptatem",
                    "quidem",
                    "soluta",
                },
                HTTPServerIds: []string{
                    "quae",
                },
            },
            Type: operations.UpdateOrganizationAlertsProfileRequestBodyTypeEnumWanPacketLoss.ToPointer(),
        },
        AlertConfigID: "labore",
        OrganizationID: "consequatur",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateOrganizationAlertsProfile200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateOrganizationApplianceSecurityIntrusion

Sets supported intrusion settings for an organization

### Example Usage

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
    res, err := s.Configure.UpdateOrganizationApplianceSecurityIntrusion(ctx, operations.UpdateOrganizationApplianceSecurityIntrusionRequest{
        RequestBody: operations.UpdateOrganizationApplianceSecurityIntrusionRequestBody{
            AllowedRules: []UpdateOrganizationApplianceSecurityIntrusionRequestBodyAllowedRules{
                operations.UpdateOrganizationApplianceSecurityIntrusionRequestBodyAllowedRules{
                    Message: sdk.String("reprehenderit"),
                    RuleID: "quo",
                },
                operations.UpdateOrganizationApplianceSecurityIntrusionRequestBodyAllowedRules{
                    Message: sdk.String("incidunt"),
                    RuleID: "id",
                },
                operations.UpdateOrganizationApplianceSecurityIntrusionRequestBodyAllowedRules{
                    Message: sdk.String("accusamus"),
                    RuleID: "aliquid",
                },
                operations.UpdateOrganizationApplianceSecurityIntrusionRequestBodyAllowedRules{
                    Message: sdk.String("quaerat"),
                    RuleID: "eaque",
                },
            },
        },
        OrganizationID: "nisi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateOrganizationApplianceSecurityIntrusion200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateOrganizationApplianceVPNThirdPartyVPNPeers

Update the third party VPN peers for an organization

### Example Usage

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
    res, err := s.Configure.UpdateOrganizationApplianceVPNThirdPartyVPNPeers(ctx, operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequest{
        RequestBody: operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBody{
            Peers: []UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeers{
                operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeers{
                    IkeVersion: operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIkeVersionEnumOne.ToPointer(),
                    IpsecPolicies: &operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPolicies{
                        ChildAuthAlgo: []UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesChildAuthAlgoEnum{
                            operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesChildAuthAlgoEnumMd5,
                            operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesChildAuthAlgoEnumSha1,
                        },
                        ChildCipherAlgo: []UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesChildCipherAlgoEnum{
                            operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesChildCipherAlgoEnumAes256,
                            operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesChildCipherAlgoEnumNull,
                        },
                        ChildLifetime: sdk.Int64(30310),
                        ChildPfsGroup: []string{
                            "culpa",
                        },
                        IkeAuthAlgo: []UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkeAuthAlgoEnum{
                            operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkeAuthAlgoEnumSha1,
                        },
                        IkeCipherAlgo: []UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkeCipherAlgoEnum{
                            operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkeCipherAlgoEnumAes128,
                            operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkeCipherAlgoEnumAes256,
                            operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkeCipherAlgoEnumTripledes,
                            operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkeCipherAlgoEnumTripledes,
                        },
                        IkeDiffieHellmanGroup: []string{
                            "iste",
                        },
                        IkeLifetime: sdk.Int64(169589),
                        IkePrfAlgo: []UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkePrfAlgoEnum{
                            operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkePrfAlgoEnumPrfsha256,
                        },
                    },
                    IpsecPoliciesPreset: sdk.String("dolores"),
                    LocalID: sdk.String("exercitationem"),
                    Name: "Dr. Margarita Dickens",
                    NetworkTags: []string{
                        "sit",
                        "natus",
                        "dolorem",
                        "mollitia",
                    },
                    PrivateSubnets: []string{
                        "officiis",
                    },
                    PublicIP: sdk.String("reiciendis"),
                    RemoteID: sdk.String("dolorum"),
                    Secret: "aliquam",
                },
                operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeers{
                    IkeVersion: operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIkeVersionEnumOne.ToPointer(),
                    IpsecPolicies: &operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPolicies{
                        ChildAuthAlgo: []UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesChildAuthAlgoEnum{
                            operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesChildAuthAlgoEnumMd5,
                            operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesChildAuthAlgoEnumSha1,
                            operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesChildAuthAlgoEnumSha1,
                            operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesChildAuthAlgoEnumSha256,
                        },
                        ChildCipherAlgo: []UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesChildCipherAlgoEnum{
                            operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesChildCipherAlgoEnumDes,
                            operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesChildCipherAlgoEnumAes128,
                            operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesChildCipherAlgoEnumAes128,
                            operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesChildCipherAlgoEnumAes128,
                        },
                        ChildLifetime: sdk.Int64(111600),
                        ChildPfsGroup: []string{
                            "voluptatem",
                            "unde",
                            "et",
                        },
                        IkeAuthAlgo: []UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkeAuthAlgoEnum{
                            operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkeAuthAlgoEnumMd5,
                            operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkeAuthAlgoEnumSha256,
                            operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkeAuthAlgoEnumSha256,
                        },
                        IkeCipherAlgo: []UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkeCipherAlgoEnum{
                            operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkeCipherAlgoEnumDes,
                            operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkeCipherAlgoEnumAes192,
                            operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkeCipherAlgoEnumAes192,
                        },
                        IkeDiffieHellmanGroup: []string{
                            "nisi",
                            "dolores",
                            "nulla",
                        },
                        IkeLifetime: sdk.Int64(900352),
                        IkePrfAlgo: []UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkePrfAlgoEnum{
                            operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkePrfAlgoEnumPrfsha1,
                        },
                    },
                    IpsecPoliciesPreset: sdk.String("molestias"),
                    LocalID: sdk.String("at"),
                    Name: "Alicia Ziemann",
                    NetworkTags: []string{
                        "voluptates",
                    },
                    PrivateSubnets: []string{
                        "sed",
                        "illo",
                    },
                    PublicIP: sdk.String("asperiores"),
                    RemoteID: sdk.String("iste"),
                    Secret: "ipsa",
                },
            },
        },
        OrganizationID: "velit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateOrganizationApplianceVPNThirdPartyVPNPeers200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateOrganizationApplianceVpnVpnFirewallRules

Update the firewall rules of an organization's site-to-site VPN

### Example Usage

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
    res, err := s.Configure.UpdateOrganizationApplianceVpnVpnFirewallRules(ctx, operations.UpdateOrganizationApplianceVpnVpnFirewallRulesRequest{
        RequestBody: &operations.UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBody{
            Rules: []UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBodyRules{
                operations.UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBodyRules{
                    Comment: sdk.String("consectetur"),
                    DestCidr: "possimus",
                    DestPort: sdk.String("asperiores"),
                    Policy: operations.UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBodyRulesPolicyEnumDeny,
                    Protocol: operations.UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBodyRulesProtocolEnumIcmp,
                    SrcCidr: "non",
                    SrcPort: sdk.String("laudantium"),
                    SyslogEnabled: sdk.Bool(false),
                },
            },
            SyslogDefaultRule: sdk.Bool(false),
        },
        OrganizationID: "velit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateOrganizationApplianceVpnVpnFirewallRules200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateOrganizationBrandingPoliciesPriorities

Update the priority ordering of an organization's branding policies.

### Example Usage

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
    res, err := s.Configure.UpdateOrganizationBrandingPoliciesPriorities(ctx, operations.UpdateOrganizationBrandingPoliciesPrioritiesRequest{
        RequestBody: &operations.UpdateOrganizationBrandingPoliciesPrioritiesRequestBody{
            BrandingPolicyIds: []string{
                "molestiae",
                "reiciendis",
                "hic",
            },
        },
        OrganizationID: "hic",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateOrganizationBrandingPoliciesPriorities200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateOrganizationBrandingPolicy

Update a branding policy

### Example Usage

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
    res, err := s.Configure.UpdateOrganizationBrandingPolicy(ctx, operations.UpdateOrganizationBrandingPolicyRequest{
        RequestBody: &operations.UpdateOrganizationBrandingPolicyRequestBody{
            AdminSettings: &operations.UpdateOrganizationBrandingPolicyRequestBodyAdminSettings{
                AppliesTo: operations.UpdateOrganizationBrandingPolicyRequestBodyAdminSettingsAppliesToEnumAllNetworkAdmins.ToPointer(),
                Values: []string{
                    "repellendus",
                    "vitae",
                },
            },
            CustomLogo: &operations.UpdateOrganizationBrandingPolicyRequestBodyCustomLogo{
                Enabled: sdk.Bool(false),
                Image: &operations.UpdateOrganizationBrandingPolicyRequestBodyCustomLogoImage{
                    Contents: sdk.String("pariatur"),
                    Format: operations.UpdateOrganizationBrandingPolicyRequestBodyCustomLogoImageFormatEnumGif.ToPointer(),
                },
            },
            Enabled: sdk.Bool(false),
            HelpSettings: &operations.UpdateOrganizationBrandingPolicyRequestBodyHelpSettings{
                APIDocsSubtab: operations.UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsAPIDocsSubtabEnumDefaultOrInherit.ToPointer(),
                CasesSubtab: operations.UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsCasesSubtabEnumDefaultOrInherit.ToPointer(),
                CiscoMerakiProductDocumentation: sdk.String("occaecati"),
                CommunitySubtab: operations.UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsCommunitySubtabEnumDefaultOrInherit.ToPointer(),
                DataProtectionRequestsSubtab: operations.UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsDataProtectionRequestsSubtabEnumShow.ToPointer(),
                FirewallInfoSubtab: operations.UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsFirewallInfoSubtabEnumShow.ToPointer(),
                GetHelpSubtab: operations.UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsGetHelpSubtabEnumDefaultOrInherit.ToPointer(),
                GetHelpSubtabKnowledgeBaseSearch: sdk.String("ullam"),
                HardwareReplacementsSubtab: operations.UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsHardwareReplacementsSubtabEnumHide.ToPointer(),
                HelpTab: operations.UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsHelpTabEnumHide.ToPointer(),
                HelpWidget: operations.UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsHelpWidgetEnumShow.ToPointer(),
                NewFeaturesSubtab: operations.UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsNewFeaturesSubtabEnumHide.ToPointer(),
                SmForums: operations.UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsSmForumsEnumShow.ToPointer(),
                SupportContactInfo: sdk.String("accusamus"),
                UniversalSearchKnowledgeBaseSearch: operations.UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsUniversalSearchKnowledgeBaseSearchEnumDefaultOrInherit.ToPointer(),
            },
            Name: sdk.String("Ruben Brown"),
        },
        BrandingPolicyID: "perspiciatis",
        OrganizationID: "nam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateOrganizationBrandingPolicy200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateOrganizationCameraOnboardingStatuses

Notify that credential handoff to camera has completed

### Example Usage

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
    res, err := s.Configure.UpdateOrganizationCameraOnboardingStatuses(ctx, operations.UpdateOrganizationCameraOnboardingStatusesRequest{
        RequestBody: &operations.UpdateOrganizationCameraOnboardingStatusesRequestBody{
            Serial: sdk.String("vero"),
            WirelessCredentialsSent: sdk.Bool(false),
        },
        OrganizationID: "aliquam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateOrganizationCameraOnboardingStatuses200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateOrganizationConfigTemplate

Update a configuration template

### Example Usage

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
    res, err := s.Configure.UpdateOrganizationConfigTemplate(ctx, operations.UpdateOrganizationConfigTemplateRequest{
        RequestBody: &operations.UpdateOrganizationConfigTemplateRequestBody{
            Name: sdk.String("Lynne Littel"),
            TimeZone: sdk.String("nulla"),
        },
        ConfigTemplateID: "facere",
        OrganizationID: "ducimus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateOrganizationConfigTemplate200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateOrganizationConfigTemplateSwitchProfilePort

Update a switch profile port

### Example Usage

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
    res, err := s.Configure.UpdateOrganizationConfigTemplateSwitchProfilePort(ctx, operations.UpdateOrganizationConfigTemplateSwitchProfilePortRequest{
        RequestBody: &operations.UpdateOrganizationConfigTemplateSwitchProfilePortRequestBody{
            AccessPolicyNumber: sdk.Int64(845623),
            AccessPolicyType: operations.UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyAccessPolicyTypeEnumOpen.ToPointer(),
            AllowedVlans: sdk.String("molestiae"),
            DaiTrusted: sdk.Bool(false),
            Enabled: sdk.Bool(false),
            FlexibleStackingEnabled: sdk.Bool(false),
            IsolationEnabled: sdk.Bool(false),
            LinkNegotiation: sdk.String("illo"),
            MacAllowList: []string{
                "repellendus",
                "consequatur",
                "dignissimos",
            },
            Name: sdk.String("Miss Harry Armstrong"),
            PoeEnabled: sdk.Bool(false),
            PortScheduleID: sdk.String("praesentium"),
            Profile: &operations.UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyProfile{
                Enabled: sdk.Bool(false),
                ID: sdk.String("ffd2967d-f8fd-4882-a8e6-0be620cd9c5a"),
                Iname: sdk.String("sapiente"),
            },
            RstpEnabled: sdk.Bool(false),
            StickyMacAllowList: []string{
                "quibusdam",
                "doloremque",
                "ut",
                "eligendi",
            },
            StickyMacAllowListLimit: sdk.Int64(202683),
            StormControlEnabled: sdk.Bool(false),
            StpGuard: operations.UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyStpGuardEnumDisabled.ToPointer(),
            Tags: []string{
                "aspernatur",
                "veniam",
            },
            Type: operations.UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyTypeEnumAccess.ToPointer(),
            Udld: operations.UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyUdldEnumAlertOnly.ToPointer(),
            Vlan: sdk.Int64(689127),
            VoiceVlan: sdk.Int64(937408),
        },
        ConfigTemplateID: "mollitia",
        OrganizationID: "officiis",
        PortID: "quasi",
        ProfileID: "vero",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateOrganizationConfigTemplateSwitchProfilePort200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateOrganizationEarlyAccessFeaturesOptIn

Update an early access feature opt-in for an organization

### Example Usage

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
    res, err := s.Configure.UpdateOrganizationEarlyAccessFeaturesOptIn(ctx, operations.UpdateOrganizationEarlyAccessFeaturesOptInRequest{
        RequestBody: &operations.UpdateOrganizationEarlyAccessFeaturesOptInRequestBody{
            LimitScopeToNetworks: []string{
                "voluptate",
                "itaque",
                "quisquam",
            },
        },
        OptInID: "minus",
        OrganizationID: "corporis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateOrganizationEarlyAccessFeaturesOptIn200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateOrganizationInsightMonitoredMediaServer

Update a monitored media server for this organization. Only valid for organizations with Meraki Insight.

### Example Usage

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
    res, err := s.Configure.UpdateOrganizationInsightMonitoredMediaServer(ctx, operations.UpdateOrganizationInsightMonitoredMediaServerRequest{
        RequestBody: &operations.UpdateOrganizationInsightMonitoredMediaServerRequestBody{
            Address: sdk.String("889 Lind Unions"),
            BestEffortMonitoringEnabled: sdk.Bool(false),
            Name: sdk.String("Maggie Lemke"),
        },
        MonitoredMediaServerID: "et",
        OrganizationID: "et",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateOrganizationInsightMonitoredMediaServer200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateOrganizationLicense

Update a license

### Example Usage

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
    res, err := s.Configure.UpdateOrganizationLicense(ctx, operations.UpdateOrganizationLicenseRequest{
        RequestBody: &operations.UpdateOrganizationLicenseRequestBody{
            DeviceSerial: sdk.String("commodi"),
        },
        LicenseID: "laboriosam",
        OrganizationID: "ratione",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateOrganizationLicense200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateOrganizationLoginSecurity

Update the login security settings for an organization

### Example Usage

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
    res, err := s.Configure.UpdateOrganizationLoginSecurity(ctx, operations.UpdateOrganizationLoginSecurityRequest{
        RequestBody: &operations.UpdateOrganizationLoginSecurityRequestBody{
            AccountLockoutAttempts: sdk.Int64(784075),
            APIAuthentication: &operations.UpdateOrganizationLoginSecurityRequestBodyAPIAuthentication{
                IPRestrictionsForKeys: &operations.UpdateOrganizationLoginSecurityRequestBodyAPIAuthenticationIPRestrictionsForKeys{
                    Enabled: sdk.Bool(false),
                    Ranges: []string{
                        "fuga",
                        "vel",
                        "quibusdam",
                        "iusto",
                    },
                },
            },
            EnforceAccountLockout: sdk.Bool(false),
            EnforceDifferentPasswords: sdk.Bool(false),
            EnforceIdleTimeout: sdk.Bool(false),
            EnforceLoginIPRanges: sdk.Bool(false),
            EnforcePasswordExpiration: sdk.Bool(false),
            EnforceStrongPasswords: sdk.Bool(false),
            EnforceTwoFactorAuth: sdk.Bool(false),
            IdleTimeoutMinutes: sdk.Int64(451468),
            LoginIPRanges: []string{
                "sunt",
                "fugiat",
                "rem",
                "laboriosam",
            },
            NumDifferentPasswords: sdk.Int64(39490),
            PasswordExpirationDays: sdk.Int64(392009),
        },
        OrganizationID: "eum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateOrganizationLoginSecurity200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateOrganizationPolicyObject

Updates a Policy Object.

### Example Usage

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
    res, err := s.Configure.UpdateOrganizationPolicyObject(ctx, operations.UpdateOrganizationPolicyObjectRequest{
        RequestBody: &operations.UpdateOrganizationPolicyObjectRequestBody{
            Cidr: sdk.String("odit"),
            Fqdn: sdk.String("nesciunt"),
            GroupIds: []int64{
                844248,
                270505,
            },
            IP: sdk.String("explicabo"),
            Mask: sdk.String("magni"),
            Name: sdk.String("Vickie Howe"),
        },
        OrganizationID: "quidem",
        PolicyObjectID: "molestias",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateOrganizationPolicyObject200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateOrganizationPolicyObjectsGroup

Updates a Policy Object Group.

### Example Usage

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
    res, err := s.Configure.UpdateOrganizationPolicyObjectsGroup(ctx, operations.UpdateOrganizationPolicyObjectsGroupRequest{
        RequestBody: &operations.UpdateOrganizationPolicyObjectsGroupRequestBody{
            Name: sdk.String("Fernando Grant"),
            ObjectIds: []int64{
                591270,
            },
        },
        OrganizationID: "totam",
        PolicyObjectGroupID: "incidunt",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateOrganizationPolicyObjectsGroup200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateOrganizationSaml

Updates the SAML SSO enabled settings for an organization.

### Example Usage

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
    res, err := s.Configure.UpdateOrganizationSaml(ctx, operations.UpdateOrganizationSamlRequest{
        RequestBody: &operations.UpdateOrganizationSamlRequestBody{
            Enabled: sdk.Bool(false),
        },
        OrganizationID: "exercitationem",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateOrganizationSaml200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateOrganizationSamlIdp

Update a SAML IdP in your organization

### Example Usage

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
    res, err := s.Configure.UpdateOrganizationSamlIdp(ctx, operations.UpdateOrganizationSamlIdpRequest{
        RequestBody: &operations.UpdateOrganizationSamlIdpRequestBody{
            SloLogoutURL: sdk.String("quasi"),
            X509certSha1Fingerprint: sdk.String("beatae"),
        },
        IdpID: "impedit",
        OrganizationID: "minus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateOrganizationSamlIdp200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## UpdateOrganizationSamlRole

Update a SAML role

### Example Usage

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
    res, err := s.Configure.UpdateOrganizationSamlRole(ctx, operations.UpdateOrganizationSamlRoleRequest{
        RequestBody: &operations.UpdateOrganizationSamlRoleRequestBody{
            Networks: []UpdateOrganizationSamlRoleRequestBodyNetworks{
                operations.UpdateOrganizationSamlRoleRequestBodyNetworks{
                    Access: operations.UpdateOrganizationSamlRoleRequestBodyNetworksAccessEnumGuestAmbassador,
                    ID: "e4f0c004-b5bb-4758-8c94-562f0069685f",
                },
                operations.UpdateOrganizationSamlRoleRequestBodyNetworks{
                    Access: operations.UpdateOrganizationSamlRoleRequestBodyNetworksAccessEnumSsidAdmin,
                    ID: "d1a173d8-4bbe-424f-a983-4afb0735cb62",
                },
            },
            OrgAccess: operations.UpdateOrganizationSamlRoleRequestBodyOrgAccessEnumNone.ToPointer(),
            Role: sdk.String("corporis"),
            Tags: []UpdateOrganizationSamlRoleRequestBodyTags{
                operations.UpdateOrganizationSamlRoleRequestBodyTags{
                    Access: operations.UpdateOrganizationSamlRoleRequestBodyTagsAccessEnumGuestAmbassador,
                    Tag: "est",
                },
                operations.UpdateOrganizationSamlRoleRequestBodyTags{
                    Access: operations.UpdateOrganizationSamlRoleRequestBodyTagsAccessEnumFull,
                    Tag: "unde",
                },
                operations.UpdateOrganizationSamlRoleRequestBodyTags{
                    Access: operations.UpdateOrganizationSamlRoleRequestBodyTagsAccessEnumMonitorOnly,
                    Tag: "fuga",
                },
                operations.UpdateOrganizationSamlRoleRequestBodyTags{
                    Access: operations.UpdateOrganizationSamlRoleRequestBodyTagsAccessEnumMonitorOnly,
                    Tag: "quae",
                },
            },
        },
        OrganizationID: "debitis",
        SamlRoleID: "quasi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateOrganizationSamlRole200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateOrganizationSnmp

Update the SNMP settings for an organization

### Example Usage

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
    res, err := s.Configure.UpdateOrganizationSnmp(ctx, operations.UpdateOrganizationSnmpRequest{
        RequestBody: &operations.UpdateOrganizationSnmpRequestBody{
            PeerIps: []string{
                "omnis",
                "veritatis",
            },
            V2cEnabled: sdk.Bool(false),
            V3AuthMode: operations.UpdateOrganizationSnmpRequestBodyV3AuthModeEnumMd5.ToPointer(),
            V3AuthPass: sdk.String("nisi"),
            V3Enabled: sdk.Bool(false),
            V3PrivMode: operations.UpdateOrganizationSnmpRequestBodyV3PrivModeEnumDes.ToPointer(),
            V3PrivPass: sdk.String("voluptate"),
        },
        OrganizationID: "possimus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateOrganizationSnmp200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## VmxNetworkDevicesClaim

Claim a vMX into a network

### Example Usage

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
    res, err := s.Configure.VmxNetworkDevicesClaim(ctx, operations.VmxNetworkDevicesClaimRequest{
        RequestBody: operations.VmxNetworkDevicesClaimRequestBody{
            Size: operations.VmxNetworkDevicesClaimRequestBodySizeEnumOneHundred,
        },
        NetworkID: "recusandae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VmxNetworkDevicesClaim200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## WipeNetworkSmDevices

Wipe a device

### Example Usage

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
    res, err := s.Configure.WipeNetworkSmDevices(ctx, operations.WipeNetworkSmDevicesRequest{
        RequestBody: &operations.WipeNetworkSmDevicesRequestBody{
            ID: sdk.String("e209505b-f03a-493e-9448-0ca37fb10789"),
            Pin: sdk.Int64(54266),
            Serial: sdk.String("sequi"),
            WifiMac: sdk.String("fugit"),
        },
        NetworkID: "deserunt",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.WipeNetworkSmDevices200ApplicationJSONObject != nil {
        // handle response
    }
}
```
