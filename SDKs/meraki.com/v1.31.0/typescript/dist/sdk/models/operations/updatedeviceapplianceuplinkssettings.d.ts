import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Settings for PPPoE Authentication.
 */
export declare class UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan1PppoeAuthentication extends SpeakeasyBase {
    /**
     * Whether PPPoE authentication is enabled.
     */
    enabled?: boolean;
    /**
     * Password for PPPoE authentication. This parameter is not returned.
     */
    password?: string;
    /**
     * Username for PPPoE authentication.
     */
    username?: string;
}
/**
 * Configuration options for PPPoE.
 */
export declare class UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan1Pppoe extends SpeakeasyBase {
    /**
     * Settings for PPPoE Authentication.
     */
    authentication?: UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan1PppoeAuthentication;
    /**
     * Whether PPPoE is enabled.
     */
    enabled?: boolean;
}
/**
 * The assignment mode for this SVI. Applies only when PPPoE is disabled.
 */
export declare enum UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan1SvisIpv4AssignmentModeEnum {
    Dynamic = "dynamic",
    Static = "static"
}
/**
 * The nameserver settings for this SVI.
 */
export declare class UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan1SvisIpv4Nameservers extends SpeakeasyBase {
    /**
     * Up to 2 nameserver addresses to use, ordered in priority from highest to lowest priority.
     */
    addresses?: string[];
}
/**
 * IPv4 settings for static/dynamic mode.
 */
export declare class UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan1SvisIpv4 extends SpeakeasyBase {
    /**
     * IP address and subnet mask when in static mode.
     */
    address?: string;
    /**
     * The assignment mode for this SVI. Applies only when PPPoE is disabled.
     */
    assignmentMode?: UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan1SvisIpv4AssignmentModeEnum;
    /**
     * Gateway IP address when in static mode.
     */
    gateway?: string;
    /**
     * The nameserver settings for this SVI.
     */
    nameservers?: UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan1SvisIpv4Nameservers;
}
/**
 * The assignment mode for this SVI. Applies only when PPPoE is disabled.
 */
export declare enum UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan1SvisIpv6AssignmentModeEnum {
    Dynamic = "dynamic",
    Static = "static"
}
/**
 * The nameserver settings for this SVI.
 */
export declare class UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan1SvisIpv6Nameservers extends SpeakeasyBase {
    /**
     * Up to 2 nameserver addresses to use, ordered in priority from highest to lowest priority.
     */
    addresses?: string[];
}
/**
 * IPv6 settings for static/dynamic mode.
 */
export declare class UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan1SvisIpv6 extends SpeakeasyBase {
    /**
     * Static address that will override the one(s) received by SLAAC.
     */
    address?: string;
    /**
     * The assignment mode for this SVI. Applies only when PPPoE is disabled.
     */
    assignmentMode?: UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan1SvisIpv6AssignmentModeEnum;
    /**
     * Static gateway that will override the one received by autoconf.
     */
    gateway?: string;
    /**
     * The nameserver settings for this SVI.
     */
    nameservers?: UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan1SvisIpv6Nameservers;
}
/**
 * SVI settings by protocol.
 */
export declare class UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan1Svis extends SpeakeasyBase {
    /**
     * IPv4 settings for static/dynamic mode.
     */
    ipv4?: UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan1SvisIpv4;
    /**
     * IPv6 settings for static/dynamic mode.
     */
    ipv6?: UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan1SvisIpv6;
}
/**
 * VLAN tagging settings.
 */
export declare class UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan1VlanTagging extends SpeakeasyBase {
    /**
     * Whether VLAN tagging is enabled.
     */
    enabled?: boolean;
    /**
     * The ID of the VLAN to use for VLAN tagging.
     */
    vlanId?: number;
}
/**
 * WAN 1 settings.
 */
export declare class UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan1 extends SpeakeasyBase {
    /**
     * Enable or disable the interface.
     */
    enabled?: boolean;
    /**
     * Configuration options for PPPoE.
     */
    pppoe?: UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan1Pppoe;
    /**
     * SVI settings by protocol.
     */
    svis?: UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan1Svis;
    /**
     * VLAN tagging settings.
     */
    vlanTagging?: UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan1VlanTagging;
}
/**
 * Settings for PPPoE Authentication.
 */
export declare class UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2PppoeAuthentication extends SpeakeasyBase {
    /**
     * Whether PPPoE authentication is enabled.
     */
    enabled?: boolean;
    /**
     * Password for PPPoE authentication. This parameter is not returned.
     */
    password?: string;
    /**
     * Username for PPPoE authentication.
     */
    username?: string;
}
/**
 * Configuration options for PPPoE.
 */
export declare class UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2Pppoe extends SpeakeasyBase {
    /**
     * Settings for PPPoE Authentication.
     */
    authentication?: UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2PppoeAuthentication;
    /**
     * Whether PPPoE is enabled.
     */
    enabled?: boolean;
}
/**
 * The assignment mode for this SVI. Applies only when PPPoE is disabled.
 */
export declare enum UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2SvisIpv4AssignmentModeEnum {
    Dynamic = "dynamic",
    Static = "static"
}
/**
 * The nameserver settings for this SVI.
 */
export declare class UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2SvisIpv4Nameservers extends SpeakeasyBase {
    /**
     * Up to 2 nameserver addresses to use, ordered in priority from highest to lowest priority.
     */
    addresses?: string[];
}
/**
 * IPv4 settings for static/dynamic mode.
 */
export declare class UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2SvisIpv4 extends SpeakeasyBase {
    /**
     * IP address and subnet mask when in static mode.
     */
    address?: string;
    /**
     * The assignment mode for this SVI. Applies only when PPPoE is disabled.
     */
    assignmentMode?: UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2SvisIpv4AssignmentModeEnum;
    /**
     * Gateway IP address when in static mode.
     */
    gateway?: string;
    /**
     * The nameserver settings for this SVI.
     */
    nameservers?: UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2SvisIpv4Nameservers;
}
/**
 * The assignment mode for this SVI. Applies only when PPPoE is disabled.
 */
export declare enum UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2SvisIpv6AssignmentModeEnum {
    Dynamic = "dynamic",
    Static = "static"
}
/**
 * The nameserver settings for this SVI.
 */
export declare class UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2SvisIpv6Nameservers extends SpeakeasyBase {
    /**
     * Up to 2 nameserver addresses to use, ordered in priority from highest to lowest priority.
     */
    addresses?: string[];
}
/**
 * IPv6 settings for static/dynamic mode.
 */
export declare class UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2SvisIpv6 extends SpeakeasyBase {
    /**
     * Static address that will override the one(s) received by SLAAC.
     */
    address?: string;
    /**
     * The assignment mode for this SVI. Applies only when PPPoE is disabled.
     */
    assignmentMode?: UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2SvisIpv6AssignmentModeEnum;
    /**
     * Static gateway that will override the one received by autoconf.
     */
    gateway?: string;
    /**
     * The nameserver settings for this SVI.
     */
    nameservers?: UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2SvisIpv6Nameservers;
}
/**
 * SVI settings by protocol.
 */
export declare class UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2Svis extends SpeakeasyBase {
    /**
     * IPv4 settings for static/dynamic mode.
     */
    ipv4?: UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2SvisIpv4;
    /**
     * IPv6 settings for static/dynamic mode.
     */
    ipv6?: UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2SvisIpv6;
}
/**
 * VLAN tagging settings.
 */
export declare class UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2VlanTagging extends SpeakeasyBase {
    /**
     * Whether VLAN tagging is enabled.
     */
    enabled?: boolean;
    /**
     * The ID of the VLAN to use for VLAN tagging.
     */
    vlanId?: number;
}
/**
 * WAN 2 settings.
 */
export declare class UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2 extends SpeakeasyBase {
    /**
     * Enable or disable the interface.
     */
    enabled?: boolean;
    /**
     * Configuration options for PPPoE.
     */
    pppoe?: UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2Pppoe;
    /**
     * SVI settings by protocol.
     */
    svis?: UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2Svis;
    /**
     * VLAN tagging settings.
     */
    vlanTagging?: UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2VlanTagging;
}
/**
 * Interface settings.
 */
export declare class UpdateDeviceApplianceUplinksSettingsRequestBodyInterfaces extends SpeakeasyBase {
    /**
     * WAN 1 settings.
     */
    wan1?: UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan1;
    /**
     * WAN 2 settings.
     */
    wan2?: UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2;
}
export declare class UpdateDeviceApplianceUplinksSettingsRequestBody extends SpeakeasyBase {
    /**
     * Interface settings.
     */
    interfaces: UpdateDeviceApplianceUplinksSettingsRequestBodyInterfaces;
}
export declare class UpdateDeviceApplianceUplinksSettingsRequest extends SpeakeasyBase {
    requestBody: UpdateDeviceApplianceUplinksSettingsRequestBody;
    serial: string;
}
/**
 * Settings for PPPoE Authentication.
 */
export declare class UpdateDeviceApplianceUplinksSettings200ApplicationJSONInterfacesWan1PppoeAuthentication extends SpeakeasyBase {
    /**
     * Whether PPPoE authentication is enabled.
     */
    enabled?: boolean;
    /**
     * Username for PPPoE authentication.
     */
    username?: string;
}
/**
 * Configuration options for PPPoE.
 */
export declare class UpdateDeviceApplianceUplinksSettings200ApplicationJSONInterfacesWan1Pppoe extends SpeakeasyBase {
    /**
     * Settings for PPPoE Authentication.
     */
    authentication?: UpdateDeviceApplianceUplinksSettings200ApplicationJSONInterfacesWan1PppoeAuthentication;
    /**
     * Whether PPPoE is enabled.
     */
    enabled?: boolean;
}
/**
 * The assignment mode for this SVI. Applies only when PPPoE is disabled.
 */
export declare enum UpdateDeviceApplianceUplinksSettings200ApplicationJSONInterfacesWan1SvisIpv4AssignmentModeEnum {
    Dynamic = "dynamic",
    Static = "static"
}
/**
 * The nameserver settings for this SVI.
 */
export declare class UpdateDeviceApplianceUplinksSettings200ApplicationJSONInterfacesWan1SvisIpv4Nameservers extends SpeakeasyBase {
    /**
     * Up to 2 nameserver addresses to use, ordered in priority from highest to lowest priority.
     */
    addresses?: string[];
}
/**
 * IPv4 settings for static/dynamic mode.
 */
export declare class UpdateDeviceApplianceUplinksSettings200ApplicationJSONInterfacesWan1SvisIpv4 extends SpeakeasyBase {
    /**
     * IP address and subnet mask when in static mode.
     */
    address?: string;
    /**
     * The assignment mode for this SVI. Applies only when PPPoE is disabled.
     */
    assignmentMode?: UpdateDeviceApplianceUplinksSettings200ApplicationJSONInterfacesWan1SvisIpv4AssignmentModeEnum;
    /**
     * Gateway IP address when in static mode.
     */
    gateway?: string;
    /**
     * The nameserver settings for this SVI.
     */
    nameservers?: UpdateDeviceApplianceUplinksSettings200ApplicationJSONInterfacesWan1SvisIpv4Nameservers;
}
/**
 * The assignment mode for this SVI. Applies only when PPPoE is disabled.
 */
export declare enum UpdateDeviceApplianceUplinksSettings200ApplicationJSONInterfacesWan1SvisIpv6AssignmentModeEnum {
    Dynamic = "dynamic",
    Static = "static"
}
/**
 * The nameserver settings for this SVI.
 */
export declare class UpdateDeviceApplianceUplinksSettings200ApplicationJSONInterfacesWan1SvisIpv6Nameservers extends SpeakeasyBase {
    /**
     * Up to 2 nameserver addresses to use, ordered in priority from highest to lowest priority.
     */
    addresses?: string[];
}
/**
 * IPv6 settings for static/dynamic mode.
 */
export declare class UpdateDeviceApplianceUplinksSettings200ApplicationJSONInterfacesWan1SvisIpv6 extends SpeakeasyBase {
    /**
     * Static address that will override the one(s) received by SLAAC.
     */
    address?: string;
    /**
     * The assignment mode for this SVI. Applies only when PPPoE is disabled.
     */
    assignmentMode?: UpdateDeviceApplianceUplinksSettings200ApplicationJSONInterfacesWan1SvisIpv6AssignmentModeEnum;
    /**
     * Static gateway that will override the one received by autoconf.
     */
    gateway?: string;
    /**
     * The nameserver settings for this SVI.
     */
    nameservers?: UpdateDeviceApplianceUplinksSettings200ApplicationJSONInterfacesWan1SvisIpv6Nameservers;
}
/**
 * SVI settings by protocol.
 */
export declare class UpdateDeviceApplianceUplinksSettings200ApplicationJSONInterfacesWan1Svis extends SpeakeasyBase {
    /**
     * IPv4 settings for static/dynamic mode.
     */
    ipv4?: UpdateDeviceApplianceUplinksSettings200ApplicationJSONInterfacesWan1SvisIpv4;
    /**
     * IPv6 settings for static/dynamic mode.
     */
    ipv6?: UpdateDeviceApplianceUplinksSettings200ApplicationJSONInterfacesWan1SvisIpv6;
}
/**
 * VLAN tagging settings.
 */
export declare class UpdateDeviceApplianceUplinksSettings200ApplicationJSONInterfacesWan1VlanTagging extends SpeakeasyBase {
    /**
     * Whether VLAN tagging is enabled.
     */
    enabled?: boolean;
    /**
     * The ID of the VLAN to use for VLAN tagging.
     */
    vlanId?: number;
}
/**
 * WAN 1 settings.
 */
export declare class UpdateDeviceApplianceUplinksSettings200ApplicationJSONInterfacesWan1 extends SpeakeasyBase {
    /**
     * Enable or disable the interface.
     */
    enabled?: boolean;
    /**
     * Configuration options for PPPoE.
     */
    pppoe?: UpdateDeviceApplianceUplinksSettings200ApplicationJSONInterfacesWan1Pppoe;
    /**
     * SVI settings by protocol.
     */
    svis?: UpdateDeviceApplianceUplinksSettings200ApplicationJSONInterfacesWan1Svis;
    /**
     * VLAN tagging settings.
     */
    vlanTagging?: UpdateDeviceApplianceUplinksSettings200ApplicationJSONInterfacesWan1VlanTagging;
}
/**
 * Settings for PPPoE Authentication.
 */
export declare class UpdateDeviceApplianceUplinksSettings200ApplicationJSONInterfacesWan2PppoeAuthentication extends SpeakeasyBase {
    /**
     * Whether PPPoE authentication is enabled.
     */
    enabled?: boolean;
    /**
     * Username for PPPoE authentication.
     */
    username?: string;
}
/**
 * Configuration options for PPPoE.
 */
export declare class UpdateDeviceApplianceUplinksSettings200ApplicationJSONInterfacesWan2Pppoe extends SpeakeasyBase {
    /**
     * Settings for PPPoE Authentication.
     */
    authentication?: UpdateDeviceApplianceUplinksSettings200ApplicationJSONInterfacesWan2PppoeAuthentication;
    /**
     * Whether PPPoE is enabled.
     */
    enabled?: boolean;
}
/**
 * The assignment mode for this SVI. Applies only when PPPoE is disabled.
 */
export declare enum UpdateDeviceApplianceUplinksSettings200ApplicationJSONInterfacesWan2SvisIpv4AssignmentModeEnum {
    Dynamic = "dynamic",
    Static = "static"
}
/**
 * The nameserver settings for this SVI.
 */
export declare class UpdateDeviceApplianceUplinksSettings200ApplicationJSONInterfacesWan2SvisIpv4Nameservers extends SpeakeasyBase {
    /**
     * Up to 2 nameserver addresses to use, ordered in priority from highest to lowest priority.
     */
    addresses?: string[];
}
/**
 * IPv4 settings for static/dynamic mode.
 */
export declare class UpdateDeviceApplianceUplinksSettings200ApplicationJSONInterfacesWan2SvisIpv4 extends SpeakeasyBase {
    /**
     * IP address and subnet mask when in static mode.
     */
    address?: string;
    /**
     * The assignment mode for this SVI. Applies only when PPPoE is disabled.
     */
    assignmentMode?: UpdateDeviceApplianceUplinksSettings200ApplicationJSONInterfacesWan2SvisIpv4AssignmentModeEnum;
    /**
     * Gateway IP address when in static mode.
     */
    gateway?: string;
    /**
     * The nameserver settings for this SVI.
     */
    nameservers?: UpdateDeviceApplianceUplinksSettings200ApplicationJSONInterfacesWan2SvisIpv4Nameservers;
}
/**
 * The assignment mode for this SVI. Applies only when PPPoE is disabled.
 */
export declare enum UpdateDeviceApplianceUplinksSettings200ApplicationJSONInterfacesWan2SvisIpv6AssignmentModeEnum {
    Dynamic = "dynamic",
    Static = "static"
}
/**
 * The nameserver settings for this SVI.
 */
export declare class UpdateDeviceApplianceUplinksSettings200ApplicationJSONInterfacesWan2SvisIpv6Nameservers extends SpeakeasyBase {
    /**
     * Up to 2 nameserver addresses to use, ordered in priority from highest to lowest priority.
     */
    addresses?: string[];
}
/**
 * IPv6 settings for static/dynamic mode.
 */
export declare class UpdateDeviceApplianceUplinksSettings200ApplicationJSONInterfacesWan2SvisIpv6 extends SpeakeasyBase {
    /**
     * Static address that will override the one(s) received by SLAAC.
     */
    address?: string;
    /**
     * The assignment mode for this SVI. Applies only when PPPoE is disabled.
     */
    assignmentMode?: UpdateDeviceApplianceUplinksSettings200ApplicationJSONInterfacesWan2SvisIpv6AssignmentModeEnum;
    /**
     * Static gateway that will override the one received by autoconf.
     */
    gateway?: string;
    /**
     * The nameserver settings for this SVI.
     */
    nameservers?: UpdateDeviceApplianceUplinksSettings200ApplicationJSONInterfacesWan2SvisIpv6Nameservers;
}
/**
 * SVI settings by protocol.
 */
export declare class UpdateDeviceApplianceUplinksSettings200ApplicationJSONInterfacesWan2Svis extends SpeakeasyBase {
    /**
     * IPv4 settings for static/dynamic mode.
     */
    ipv4?: UpdateDeviceApplianceUplinksSettings200ApplicationJSONInterfacesWan2SvisIpv4;
    /**
     * IPv6 settings for static/dynamic mode.
     */
    ipv6?: UpdateDeviceApplianceUplinksSettings200ApplicationJSONInterfacesWan2SvisIpv6;
}
/**
 * VLAN tagging settings.
 */
export declare class UpdateDeviceApplianceUplinksSettings200ApplicationJSONInterfacesWan2VlanTagging extends SpeakeasyBase {
    /**
     * Whether VLAN tagging is enabled.
     */
    enabled?: boolean;
    /**
     * The ID of the VLAN to use for VLAN tagging.
     */
    vlanId?: number;
}
/**
 * WAN 2 settings.
 */
export declare class UpdateDeviceApplianceUplinksSettings200ApplicationJSONInterfacesWan2 extends SpeakeasyBase {
    /**
     * Enable or disable the interface.
     */
    enabled?: boolean;
    /**
     * Configuration options for PPPoE.
     */
    pppoe?: UpdateDeviceApplianceUplinksSettings200ApplicationJSONInterfacesWan2Pppoe;
    /**
     * SVI settings by protocol.
     */
    svis?: UpdateDeviceApplianceUplinksSettings200ApplicationJSONInterfacesWan2Svis;
    /**
     * VLAN tagging settings.
     */
    vlanTagging?: UpdateDeviceApplianceUplinksSettings200ApplicationJSONInterfacesWan2VlanTagging;
}
/**
 * Interface settings.
 */
export declare class UpdateDeviceApplianceUplinksSettings200ApplicationJSONInterfaces extends SpeakeasyBase {
    /**
     * WAN 1 settings.
     */
    wan1?: UpdateDeviceApplianceUplinksSettings200ApplicationJSONInterfacesWan1;
    /**
     * WAN 2 settings.
     */
    wan2?: UpdateDeviceApplianceUplinksSettings200ApplicationJSONInterfacesWan2;
}
/**
 * Successful operation
 */
export declare class UpdateDeviceApplianceUplinksSettings200ApplicationJSON extends SpeakeasyBase {
    /**
     * Interface settings.
     */
    interfaces?: UpdateDeviceApplianceUplinksSettings200ApplicationJSONInterfaces;
}
export declare class UpdateDeviceApplianceUplinksSettingsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    updateDeviceApplianceUplinksSettings200ApplicationJSONObject?: UpdateDeviceApplianceUplinksSettings200ApplicationJSON;
}
