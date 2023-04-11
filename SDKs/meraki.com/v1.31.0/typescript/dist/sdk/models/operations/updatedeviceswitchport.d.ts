import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * The type of the access policy of the switch port. Only applicable to access ports. Can be one of 'Open', 'Custom access policy', 'MAC allow list' or 'Sticky MAC allow list'.
 */
export declare enum UpdateDeviceSwitchPortRequestBodyAccessPolicyTypeEnum {
    CustomAccessPolicy = "Custom access policy",
    MACAllowList = "MAC allow list",
    Open = "Open",
    StickyMACAllowList = "Sticky MAC allow list"
}
/**
 * Profile attributes
 */
export declare class UpdateDeviceSwitchPortRequestBodyProfile extends SpeakeasyBase {
    /**
     * When enabled, override this port's configuration with a port profile.
     */
    enabled?: boolean;
    /**
     * When enabled, the ID of the port profile used to override the port's configuration.
     */
    id?: string;
    /**
     * When enabled, the IName of the profile.
     */
    iname?: string;
}
/**
 * The state of the STP guard ('disabled', 'root guard', 'bpdu guard' or 'loop guard').
 */
export declare enum UpdateDeviceSwitchPortRequestBodyStpGuardEnum {
    BpduGuard = "bpdu guard",
    Disabled = "disabled",
    LoopGuard = "loop guard",
    RootGuard = "root guard"
}
/**
 * The type of the switch port ('trunk' or 'access').
 */
export declare enum UpdateDeviceSwitchPortRequestBodyTypeEnum {
    Access = "access",
    Trunk = "trunk"
}
/**
 * The action to take when Unidirectional Link is detected (Alert only, Enforce). Default configuration is Alert only.
 */
export declare enum UpdateDeviceSwitchPortRequestBodyUdldEnum {
    AlertOnly = "Alert only",
    Enforce = "Enforce"
}
export declare class UpdateDeviceSwitchPortRequestBody extends SpeakeasyBase {
    /**
     * The number of a custom access policy to configure on the switch port. Only applicable when 'accessPolicyType' is 'Custom access policy'.
     */
    accessPolicyNumber?: number;
    /**
     * The type of the access policy of the switch port. Only applicable to access ports. Can be one of 'Open', 'Custom access policy', 'MAC allow list' or 'Sticky MAC allow list'.
     */
    accessPolicyType?: UpdateDeviceSwitchPortRequestBodyAccessPolicyTypeEnum;
    /**
     * The adaptive policy group ID that will be used to tag traffic through this switch port. This ID must pre-exist during the configuration, else needs to be created using adaptivePolicy/groups API. Cannot be applied to a port on a switch bound to profile.
     */
    adaptivePolicyGroupId?: string;
    /**
     * The VLANs allowed on the switch port. Only applicable to trunk ports.
     */
    allowedVlans?: string;
    /**
     * If true, ARP packets for this port will be considered trusted, and Dynamic ARP Inspection will allow the traffic.
     */
    daiTrusted?: boolean;
    /**
     * The status of the switch port.
     */
    enabled?: boolean;
    /**
     * For supported switches (e.g. MS420/MS425), whether or not the port has flexible stacking enabled.
     */
    flexibleStackingEnabled?: boolean;
    /**
     * The isolation status of the switch port.
     */
    isolationEnabled?: boolean;
    /**
     * The link speed for the switch port.
     */
    linkNegotiation?: string;
    /**
     * Only devices with MAC addresses specified in this list will have access to this port. Up to 20 MAC addresses can be defined. Only applicable when 'accessPolicyType' is 'MAC allow list'.
     */
    macAllowList?: string[];
    /**
     * The name of the switch port.
     */
    name?: string;
    /**
     * If true, Peer SGT is enabled for traffic through this switch port. Applicable to trunk port only, not access port. Cannot be applied to a port on a switch bound to profile.
     */
    peerSgtCapable?: boolean;
    /**
     * The PoE status of the switch port.
     */
    poeEnabled?: boolean;
    /**
     * The ID of the port schedule. A value of null will clear the port schedule.
     */
    portScheduleId?: string;
    /**
     * Profile attributes
     */
    profile?: UpdateDeviceSwitchPortRequestBodyProfile;
    /**
     * The rapid spanning tree protocol status.
     */
    rstpEnabled?: boolean;
    /**
     * The initial list of MAC addresses for sticky Mac allow list. Only applicable when 'accessPolicyType' is 'Sticky MAC allow list'.
     */
    stickyMacAllowList?: string[];
    /**
     * The maximum number of MAC addresses for sticky MAC allow list. Only applicable when 'accessPolicyType' is 'Sticky MAC allow list'.
     */
    stickyMacAllowListLimit?: number;
    /**
     * The storm control status of the switch port.
     */
    stormControlEnabled?: boolean;
    /**
     * The state of the STP guard ('disabled', 'root guard', 'bpdu guard' or 'loop guard').
     */
    stpGuard?: UpdateDeviceSwitchPortRequestBodyStpGuardEnum;
    /**
     * The list of tags of the switch port.
     */
    tags?: string[];
    /**
     * The type of the switch port ('trunk' or 'access').
     */
    type?: UpdateDeviceSwitchPortRequestBodyTypeEnum;
    /**
     * The action to take when Unidirectional Link is detected (Alert only, Enforce). Default configuration is Alert only.
     */
    udld?: UpdateDeviceSwitchPortRequestBodyUdldEnum;
    /**
     * The VLAN of the switch port. A null value will clear the value set for trunk ports.
     */
    vlan?: number;
    /**
     * The voice VLAN of the switch port. Only applicable to access ports.
     */
    voiceVlan?: number;
}
export declare class UpdateDeviceSwitchPortRequest extends SpeakeasyBase {
    requestBody?: UpdateDeviceSwitchPortRequestBody;
    portId: string;
    serial: string;
}
/**
 * The type of the access policy of the switch port. Only applicable to access ports. Can be one of 'Open', 'Custom access policy', 'MAC allow list' or 'Sticky MAC allow list'.
 */
export declare enum UpdateDeviceSwitchPort200ApplicationJSONAccessPolicyTypeEnum {
    CustomAccessPolicy = "Custom access policy",
    MACAllowList = "MAC allow list",
    Open = "Open",
    StickyMACAllowList = "Sticky MAC allow list"
}
/**
 * Profile attributes
 */
export declare class UpdateDeviceSwitchPort200ApplicationJSONProfile extends SpeakeasyBase {
    /**
     * When enabled, override this port's configuration with a port profile.
     */
    enabled?: boolean;
    /**
     * When enabled, the ID of the port profile used to override the port's configuration.
     */
    id?: string;
    /**
     * When enabled, the IName of the profile.
     */
    iname?: string;
}
/**
 * The state of the STP guard ('disabled', 'root guard', 'bpdu guard' or 'loop guard').
 */
export declare enum UpdateDeviceSwitchPort200ApplicationJSONStpGuardEnum {
    BpduGuard = "bpdu guard",
    Disabled = "disabled",
    LoopGuard = "loop guard",
    RootGuard = "root guard"
}
/**
 * The type of the switch port ('trunk' or 'access').
 */
export declare enum UpdateDeviceSwitchPort200ApplicationJSONTypeEnum {
    Access = "access",
    Trunk = "trunk"
}
/**
 * The action to take when Unidirectional Link is detected (Alert only, Enforce). Default configuration is Alert only.
 */
export declare enum UpdateDeviceSwitchPort200ApplicationJSONUdldEnum {
    AlertOnly = "Alert only",
    Enforce = "Enforce"
}
/**
 * Successful operation
 */
export declare class UpdateDeviceSwitchPort200ApplicationJSON extends SpeakeasyBase {
    /**
     * The number of a custom access policy to configure on the switch port. Only applicable when 'accessPolicyType' is 'Custom access policy'.
     */
    accessPolicyNumber?: number;
    /**
     * The type of the access policy of the switch port. Only applicable to access ports. Can be one of 'Open', 'Custom access policy', 'MAC allow list' or 'Sticky MAC allow list'.
     */
    accessPolicyType?: UpdateDeviceSwitchPort200ApplicationJSONAccessPolicyTypeEnum;
    /**
     * The adaptive policy group ID that will be used to tag traffic through this switch port. This ID must pre-exist during the configuration, else needs to be created using adaptivePolicy/groups API. Cannot be applied to a port on a switch bound to profile.
     */
    adaptivePolicyGroupId?: string;
    /**
     * The VLANs allowed on the switch port. Only applicable to trunk ports.
     */
    allowedVlans?: string;
    /**
     * If true, ARP packets for this port will be considered trusted, and Dynamic ARP Inspection will allow the traffic.
     */
    daiTrusted?: boolean;
    /**
     * The status of the switch port.
     */
    enabled?: boolean;
    /**
     * For supported switches (e.g. MS420/MS425), whether or not the port has flexible stacking enabled.
     */
    flexibleStackingEnabled?: boolean;
    /**
     * The isolation status of the switch port.
     */
    isolationEnabled?: boolean;
    /**
     * The link speed for the switch port.
     */
    linkNegotiation?: string;
    /**
     * Available link speeds for the switch port.
     */
    linkNegotiationCapabilities?: string[];
    /**
     * Only devices with MAC addresses specified in this list will have access to this port. Up to 20 MAC addresses can be defined. Only applicable when 'accessPolicyType' is 'MAC allow list'.
     */
    macAllowList?: string[];
    /**
     * The name of the switch port.
     */
    name?: string;
    /**
     * If true, Peer SGT is enabled for traffic through this switch port. Applicable to trunk port only, not access port. Cannot be applied to a port on a switch bound to profile.
     */
    peerSgtCapable?: boolean;
    /**
     * The PoE status of the switch port.
     */
    poeEnabled?: boolean;
    /**
     * The identifier of the switch port.
     */
    portId?: string;
    /**
     * The ID of the port schedule. A value of null will clear the port schedule.
     */
    portScheduleId?: string;
    /**
     * Profile attributes
     */
    profile?: UpdateDeviceSwitchPort200ApplicationJSONProfile;
    /**
     * The rapid spanning tree protocol status.
     */
    rstpEnabled?: boolean;
    /**
     * The initial list of MAC addresses for sticky Mac allow list. Only applicable when 'accessPolicyType' is 'Sticky MAC allow list'.
     */
    stickyMacAllowList?: string[];
    /**
     * The maximum number of MAC addresses for sticky MAC allow list. Only applicable when 'accessPolicyType' is 'Sticky MAC allow list'.
     */
    stickyMacAllowListLimit?: number;
    /**
     * The storm control status of the switch port.
     */
    stormControlEnabled?: boolean;
    /**
     * The state of the STP guard ('disabled', 'root guard', 'bpdu guard' or 'loop guard').
     */
    stpGuard?: UpdateDeviceSwitchPort200ApplicationJSONStpGuardEnum;
    /**
     * The list of tags of the switch port.
     */
    tags?: string[];
    /**
     * The type of the switch port ('trunk' or 'access').
     */
    type?: UpdateDeviceSwitchPort200ApplicationJSONTypeEnum;
    /**
     * The action to take when Unidirectional Link is detected (Alert only, Enforce). Default configuration is Alert only.
     */
    udld?: UpdateDeviceSwitchPort200ApplicationJSONUdldEnum;
    /**
     * The VLAN of the switch port. A null value will clear the value set for trunk ports.
     */
    vlan?: number;
    /**
     * The voice VLAN of the switch port. Only applicable to access ports.
     */
    voiceVlan?: number;
}
export declare class UpdateDeviceSwitchPortResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    updateDeviceSwitchPort200ApplicationJSONObject?: UpdateDeviceSwitchPort200ApplicationJSON;
}
