import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetDeviceApplianceUplinksSettingsRequest extends SpeakeasyBase {
    serial: string;
}
/**
 * Settings for PPPoE Authentication.
 */
export declare class GetDeviceApplianceUplinksSettings200ApplicationJSONInterfacesWan1PppoeAuthentication extends SpeakeasyBase {
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
export declare class GetDeviceApplianceUplinksSettings200ApplicationJSONInterfacesWan1Pppoe extends SpeakeasyBase {
    /**
     * Settings for PPPoE Authentication.
     */
    authentication?: GetDeviceApplianceUplinksSettings200ApplicationJSONInterfacesWan1PppoeAuthentication;
    /**
     * Whether PPPoE is enabled.
     */
    enabled?: boolean;
}
/**
 * The assignment mode for this SVI. Applies only when PPPoE is disabled.
 */
export declare enum GetDeviceApplianceUplinksSettings200ApplicationJSONInterfacesWan1SvisIpv4AssignmentModeEnum {
    Dynamic = "dynamic",
    Static = "static"
}
/**
 * The nameserver settings for this SVI.
 */
export declare class GetDeviceApplianceUplinksSettings200ApplicationJSONInterfacesWan1SvisIpv4Nameservers extends SpeakeasyBase {
    /**
     * Up to 2 nameserver addresses to use, ordered in priority from highest to lowest priority.
     */
    addresses?: string[];
}
/**
 * IPv4 settings for static/dynamic mode.
 */
export declare class GetDeviceApplianceUplinksSettings200ApplicationJSONInterfacesWan1SvisIpv4 extends SpeakeasyBase {
    /**
     * IP address and subnet mask when in static mode.
     */
    address?: string;
    /**
     * The assignment mode for this SVI. Applies only when PPPoE is disabled.
     */
    assignmentMode?: GetDeviceApplianceUplinksSettings200ApplicationJSONInterfacesWan1SvisIpv4AssignmentModeEnum;
    /**
     * Gateway IP address when in static mode.
     */
    gateway?: string;
    /**
     * The nameserver settings for this SVI.
     */
    nameservers?: GetDeviceApplianceUplinksSettings200ApplicationJSONInterfacesWan1SvisIpv4Nameservers;
}
/**
 * The assignment mode for this SVI. Applies only when PPPoE is disabled.
 */
export declare enum GetDeviceApplianceUplinksSettings200ApplicationJSONInterfacesWan1SvisIpv6AssignmentModeEnum {
    Dynamic = "dynamic",
    Static = "static"
}
/**
 * The nameserver settings for this SVI.
 */
export declare class GetDeviceApplianceUplinksSettings200ApplicationJSONInterfacesWan1SvisIpv6Nameservers extends SpeakeasyBase {
    /**
     * Up to 2 nameserver addresses to use, ordered in priority from highest to lowest priority.
     */
    addresses?: string[];
}
/**
 * IPv6 settings for static/dynamic mode.
 */
export declare class GetDeviceApplianceUplinksSettings200ApplicationJSONInterfacesWan1SvisIpv6 extends SpeakeasyBase {
    /**
     * Static address that will override the one(s) received by SLAAC.
     */
    address?: string;
    /**
     * The assignment mode for this SVI. Applies only when PPPoE is disabled.
     */
    assignmentMode?: GetDeviceApplianceUplinksSettings200ApplicationJSONInterfacesWan1SvisIpv6AssignmentModeEnum;
    /**
     * Static gateway that will override the one received by autoconf.
     */
    gateway?: string;
    /**
     * The nameserver settings for this SVI.
     */
    nameservers?: GetDeviceApplianceUplinksSettings200ApplicationJSONInterfacesWan1SvisIpv6Nameservers;
}
/**
 * SVI settings by protocol.
 */
export declare class GetDeviceApplianceUplinksSettings200ApplicationJSONInterfacesWan1Svis extends SpeakeasyBase {
    /**
     * IPv4 settings for static/dynamic mode.
     */
    ipv4?: GetDeviceApplianceUplinksSettings200ApplicationJSONInterfacesWan1SvisIpv4;
    /**
     * IPv6 settings for static/dynamic mode.
     */
    ipv6?: GetDeviceApplianceUplinksSettings200ApplicationJSONInterfacesWan1SvisIpv6;
}
/**
 * VLAN tagging settings.
 */
export declare class GetDeviceApplianceUplinksSettings200ApplicationJSONInterfacesWan1VlanTagging extends SpeakeasyBase {
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
export declare class GetDeviceApplianceUplinksSettings200ApplicationJSONInterfacesWan1 extends SpeakeasyBase {
    /**
     * Enable or disable the interface.
     */
    enabled?: boolean;
    /**
     * Configuration options for PPPoE.
     */
    pppoe?: GetDeviceApplianceUplinksSettings200ApplicationJSONInterfacesWan1Pppoe;
    /**
     * SVI settings by protocol.
     */
    svis?: GetDeviceApplianceUplinksSettings200ApplicationJSONInterfacesWan1Svis;
    /**
     * VLAN tagging settings.
     */
    vlanTagging?: GetDeviceApplianceUplinksSettings200ApplicationJSONInterfacesWan1VlanTagging;
}
/**
 * Settings for PPPoE Authentication.
 */
export declare class GetDeviceApplianceUplinksSettings200ApplicationJSONInterfacesWan2PppoeAuthentication extends SpeakeasyBase {
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
export declare class GetDeviceApplianceUplinksSettings200ApplicationJSONInterfacesWan2Pppoe extends SpeakeasyBase {
    /**
     * Settings for PPPoE Authentication.
     */
    authentication?: GetDeviceApplianceUplinksSettings200ApplicationJSONInterfacesWan2PppoeAuthentication;
    /**
     * Whether PPPoE is enabled.
     */
    enabled?: boolean;
}
/**
 * The assignment mode for this SVI. Applies only when PPPoE is disabled.
 */
export declare enum GetDeviceApplianceUplinksSettings200ApplicationJSONInterfacesWan2SvisIpv4AssignmentModeEnum {
    Dynamic = "dynamic",
    Static = "static"
}
/**
 * The nameserver settings for this SVI.
 */
export declare class GetDeviceApplianceUplinksSettings200ApplicationJSONInterfacesWan2SvisIpv4Nameservers extends SpeakeasyBase {
    /**
     * Up to 2 nameserver addresses to use, ordered in priority from highest to lowest priority.
     */
    addresses?: string[];
}
/**
 * IPv4 settings for static/dynamic mode.
 */
export declare class GetDeviceApplianceUplinksSettings200ApplicationJSONInterfacesWan2SvisIpv4 extends SpeakeasyBase {
    /**
     * IP address and subnet mask when in static mode.
     */
    address?: string;
    /**
     * The assignment mode for this SVI. Applies only when PPPoE is disabled.
     */
    assignmentMode?: GetDeviceApplianceUplinksSettings200ApplicationJSONInterfacesWan2SvisIpv4AssignmentModeEnum;
    /**
     * Gateway IP address when in static mode.
     */
    gateway?: string;
    /**
     * The nameserver settings for this SVI.
     */
    nameservers?: GetDeviceApplianceUplinksSettings200ApplicationJSONInterfacesWan2SvisIpv4Nameservers;
}
/**
 * The assignment mode for this SVI. Applies only when PPPoE is disabled.
 */
export declare enum GetDeviceApplianceUplinksSettings200ApplicationJSONInterfacesWan2SvisIpv6AssignmentModeEnum {
    Dynamic = "dynamic",
    Static = "static"
}
/**
 * The nameserver settings for this SVI.
 */
export declare class GetDeviceApplianceUplinksSettings200ApplicationJSONInterfacesWan2SvisIpv6Nameservers extends SpeakeasyBase {
    /**
     * Up to 2 nameserver addresses to use, ordered in priority from highest to lowest priority.
     */
    addresses?: string[];
}
/**
 * IPv6 settings for static/dynamic mode.
 */
export declare class GetDeviceApplianceUplinksSettings200ApplicationJSONInterfacesWan2SvisIpv6 extends SpeakeasyBase {
    /**
     * Static address that will override the one(s) received by SLAAC.
     */
    address?: string;
    /**
     * The assignment mode for this SVI. Applies only when PPPoE is disabled.
     */
    assignmentMode?: GetDeviceApplianceUplinksSettings200ApplicationJSONInterfacesWan2SvisIpv6AssignmentModeEnum;
    /**
     * Static gateway that will override the one received by autoconf.
     */
    gateway?: string;
    /**
     * The nameserver settings for this SVI.
     */
    nameservers?: GetDeviceApplianceUplinksSettings200ApplicationJSONInterfacesWan2SvisIpv6Nameservers;
}
/**
 * SVI settings by protocol.
 */
export declare class GetDeviceApplianceUplinksSettings200ApplicationJSONInterfacesWan2Svis extends SpeakeasyBase {
    /**
     * IPv4 settings for static/dynamic mode.
     */
    ipv4?: GetDeviceApplianceUplinksSettings200ApplicationJSONInterfacesWan2SvisIpv4;
    /**
     * IPv6 settings for static/dynamic mode.
     */
    ipv6?: GetDeviceApplianceUplinksSettings200ApplicationJSONInterfacesWan2SvisIpv6;
}
/**
 * VLAN tagging settings.
 */
export declare class GetDeviceApplianceUplinksSettings200ApplicationJSONInterfacesWan2VlanTagging extends SpeakeasyBase {
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
export declare class GetDeviceApplianceUplinksSettings200ApplicationJSONInterfacesWan2 extends SpeakeasyBase {
    /**
     * Enable or disable the interface.
     */
    enabled?: boolean;
    /**
     * Configuration options for PPPoE.
     */
    pppoe?: GetDeviceApplianceUplinksSettings200ApplicationJSONInterfacesWan2Pppoe;
    /**
     * SVI settings by protocol.
     */
    svis?: GetDeviceApplianceUplinksSettings200ApplicationJSONInterfacesWan2Svis;
    /**
     * VLAN tagging settings.
     */
    vlanTagging?: GetDeviceApplianceUplinksSettings200ApplicationJSONInterfacesWan2VlanTagging;
}
/**
 * Interface settings.
 */
export declare class GetDeviceApplianceUplinksSettings200ApplicationJSONInterfaces extends SpeakeasyBase {
    /**
     * WAN 1 settings.
     */
    wan1?: GetDeviceApplianceUplinksSettings200ApplicationJSONInterfacesWan1;
    /**
     * WAN 2 settings.
     */
    wan2?: GetDeviceApplianceUplinksSettings200ApplicationJSONInterfacesWan2;
}
/**
 * Successful operation
 */
export declare class GetDeviceApplianceUplinksSettings200ApplicationJSON extends SpeakeasyBase {
    /**
     * Interface settings.
     */
    interfaces?: GetDeviceApplianceUplinksSettings200ApplicationJSONInterfaces;
}
export declare class GetDeviceApplianceUplinksSettingsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getDeviceApplianceUplinksSettings200ApplicationJSONObject?: GetDeviceApplianceUplinksSettings200ApplicationJSON;
}
