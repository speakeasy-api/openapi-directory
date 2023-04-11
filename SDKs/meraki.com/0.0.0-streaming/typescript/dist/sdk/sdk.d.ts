import { ActionBatches } from "./actionbatches";
import { Admins } from "./admins";
import { AlertSettings } from "./alertsettings";
import { APIUsage } from "./apiusage";
import { BluetoothClients } from "./bluetoothclients";
import { BluetoothSettings } from "./bluetoothsettings";
import { CameraQualityRetentionProfiles } from "./cameraqualityretentionprofiles";
import { Cameras } from "./cameras";
import { ChangeLog } from "./changelog";
import { Clients } from "./clients";
import { ConfigTemplates } from "./configtemplates";
import { ContentFilteringCategories } from "./contentfilteringcategories";
import { ContentFilteringRules } from "./contentfilteringrules";
import { Devices } from "./devices";
import { Events } from "./events";
import { FirewalledServices } from "./firewalledservices";
import { FloorPlans } from "./floorplans";
import { IntrusionSettings } from "./intrusionsettings";
import { Licenses } from "./licenses";
import { LinkAggregations } from "./linkaggregations";
import { MalwareSettings } from "./malwaresettings";
import { MerakiAuthUsers } from "./merakiauthusers";
import { MGLANSettings } from "./mglansettings";
import { MGPortForwardingRules } from "./mgportforwardingrules";
import * as shared from "./models/shared";
import { MonitoredMediaServers } from "./monitoredmediaservers";
import { Mrl3Firewall } from "./mrl3firewall";
import { MVSense } from "./mvsense";
import { Mx11NATRules } from "./mx11natrules";
import { Mx1ManyNATRules } from "./mx1manynatrules";
import { MXCellularFirewall } from "./mxcellularfirewall";
import { Mxl3InboundFirewall } from "./mxl3inboundfirewall";
import { Mxl3OutboundFirewall } from "./mxl3outboundfirewall";
import { Mxl7ApplicationCategories } from "./mxl7applicationcategories";
import { Mxl7Firewall } from "./mxl7firewall";
import { MXPortForwardingRules } from "./mxportforwardingrules";
import { MXStaticRoutes } from "./mxstaticroutes";
import { MXVLANPorts } from "./mxvlanports";
import { MXVPNFirewall } from "./mxvpnfirewall";
import { MXWarmSpareSettings } from "./mxwarmsparesettings";
import { NamedTagScope } from "./namedtagscope";
import { Networks } from "./networks";
import { OpenAPISpec } from "./openapispec";
import { Organizations } from "./organizations";
import { Pii } from "./pii";
import { RadioSettings } from "./radiosettings";
import { SAMLRoles } from "./samlroles";
import { SecurityEvents } from "./securityevents";
import { Sm } from "./sm";
import { SNMPSettings } from "./snmpsettings";
import { SplashLoginAttempts } from "./splashloginattempts";
import { SplashSettings } from "./splashsettings";
import { SSIDs } from "./ssids";
import { SwitchAccessPolicies } from "./switchaccesspolicies";
import { SwitchPorts } from "./switchports";
import { SwitchPortSchedules } from "./switchportschedules";
import { SwitchProfiles } from "./switchprofiles";
import { SwitchSettings } from "./switchsettings";
import { SwitchStacks } from "./switchstacks";
import { SyslogServers } from "./syslogservers";
import { TrafficShapingUplinkSettings } from "./trafficshapinguplinksettings";
import { VLANs } from "./vlans";
import { WirelessHealth } from "./wirelesshealth";
import { WirelessSettings } from "./wirelesssettings";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://api.meraki.com/api/v0"];
/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * The security details required to authenticate the SDK
     */
    security?: shared.Security;
    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;
    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
};
/**
 * The Cisco Meraki Dashboard API is a modern REST API based on the OpenAPI specification.
 *
 * @remarks
 *
 * > Date: 05 March, 2023
 * >
 * > [Recent Updates](https://meraki.io/whats-new/)
 *
 * ---
 *
 * [API Documentation](https://meraki.io/api)
 *
 * [Community Support](https://meraki.io/community)
 *
 * [Meraki Homepage](https://www.meraki.com)
 *
 */
export declare class SDK {
    apiUsage: APIUsage;
    actionBatches: ActionBatches;
    admins: Admins;
    alertSettings: AlertSettings;
    bluetoothClients: BluetoothClients;
    bluetoothSettings: BluetoothSettings;
    cameraQualityRetentionProfiles: CameraQualityRetentionProfiles;
    cameras: Cameras;
    changeLog: ChangeLog;
    clients: Clients;
    configTemplates: ConfigTemplates;
    contentFilteringCategories: ContentFilteringCategories;
    contentFilteringRules: ContentFilteringRules;
    devices: Devices;
    events: Events;
    firewalledServices: FirewalledServices;
    floorPlans: FloorPlans;
    intrusionSettings: IntrusionSettings;
    licenses: Licenses;
    linkAggregations: LinkAggregations;
    mgLANSettings: MGLANSettings;
    mgPortForwardingRules: MGPortForwardingRules;
    mrL3Firewall: Mrl3Firewall;
    mvSense: MVSense;
    mx11NATRules: Mx11NATRules;
    mx1ManyNATRules: Mx1ManyNATRules;
    mxL3InboundFirewall: Mxl3InboundFirewall;
    mxL3OutboundFirewall: Mxl3OutboundFirewall;
    mxL7ApplicationCategories: Mxl7ApplicationCategories;
    mxL7Firewall: Mxl7Firewall;
    mxVLANPorts: MXVLANPorts;
    mxVPNFirewall: MXVPNFirewall;
    mxCellularFirewall: MXCellularFirewall;
    mxPortForwardingRules: MXPortForwardingRules;
    mxStaticRoutes: MXStaticRoutes;
    mxWarmSpareSettings: MXWarmSpareSettings;
    malwareSettings: MalwareSettings;
    merakiAuthUsers: MerakiAuthUsers;
    monitoredMediaServers: MonitoredMediaServers;
    namedTagScope: NamedTagScope;
    networks: Networks;
    openAPISpec: OpenAPISpec;
    organizations: Organizations;
    pii: Pii;
    radioSettings: RadioSettings;
    samlRoles: SAMLRoles;
    sm: Sm;
    snmpSettings: SNMPSettings;
    ssiDs: SSIDs;
    securityEvents: SecurityEvents;
    splashLoginAttempts: SplashLoginAttempts;
    splashSettings: SplashSettings;
    switchAccessPolicies: SwitchAccessPolicies;
    switchPortSchedules: SwitchPortSchedules;
    switchPorts: SwitchPorts;
    switchProfiles: SwitchProfiles;
    switchSettings: SwitchSettings;
    switchStacks: SwitchStacks;
    syslogServers: SyslogServers;
    trafficShapingUplinkSettings: TrafficShapingUplinkSettings;
    vlaNs: VLANs;
    wirelessHealth: WirelessHealth;
    wirelessSettings: WirelessSettings;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
