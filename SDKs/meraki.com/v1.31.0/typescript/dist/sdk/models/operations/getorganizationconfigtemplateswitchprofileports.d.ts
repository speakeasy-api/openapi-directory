import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetOrganizationConfigTemplateSwitchProfilePortsRequest extends SpeakeasyBase {
    configTemplateId: string;
    organizationId: string;
    profileId: string;
}
/**
 * The type of the access policy of the switch profile port. Only applicable to access ports. Can be one of 'Open', 'Custom access policy', 'MAC allow list' or 'Sticky MAC allow list'.
 */
export declare enum GetOrganizationConfigTemplateSwitchProfilePorts200ApplicationJSONAccessPolicyTypeEnum {
    CustomAccessPolicy = "Custom access policy",
    MACAllowList = "MAC allow list",
    Open = "Open",
    StickyMACAllowList = "Sticky MAC allow list"
}
/**
 * Profile attributes
 */
export declare class GetOrganizationConfigTemplateSwitchProfilePorts200ApplicationJSONProfile extends SpeakeasyBase {
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
export declare enum GetOrganizationConfigTemplateSwitchProfilePorts200ApplicationJSONStpGuardEnum {
    BpduGuard = "bpdu guard",
    Disabled = "disabled",
    LoopGuard = "loop guard",
    RootGuard = "root guard"
}
/**
 * The type of the switch profile port ('trunk' or 'access').
 */
export declare enum GetOrganizationConfigTemplateSwitchProfilePorts200ApplicationJSONTypeEnum {
    Access = "access",
    Trunk = "trunk"
}
/**
 * The action to take when Unidirectional Link is detected (Alert only, Enforce). Default configuration is Alert only.
 */
export declare enum GetOrganizationConfigTemplateSwitchProfilePorts200ApplicationJSONUdldEnum {
    AlertOnly = "Alert only",
    Enforce = "Enforce"
}
export declare class GetOrganizationConfigTemplateSwitchProfilePorts200ApplicationJSON extends SpeakeasyBase {
    /**
     * The number of a custom access policy to configure on the switch profile port. Only applicable when 'accessPolicyType' is 'Custom access policy'.
     */
    accessPolicyNumber?: number;
    /**
     * The type of the access policy of the switch profile port. Only applicable to access ports. Can be one of 'Open', 'Custom access policy', 'MAC allow list' or 'Sticky MAC allow list'.
     */
    accessPolicyType?: GetOrganizationConfigTemplateSwitchProfilePorts200ApplicationJSONAccessPolicyTypeEnum;
    /**
     * The VLANs allowed on the switch profile port. Only applicable to trunk ports.
     */
    allowedVlans?: string;
    /**
     * If true, ARP packets for this port will be considered trusted, and Dynamic ARP Inspection will allow the traffic.
     */
    daiTrusted?: boolean;
    /**
     * The status of the switch profile port.
     */
    enabled?: boolean;
    /**
     * For supported switches (e.g. MS420/MS425), whether or not the port has flexible stacking enabled.
     */
    flexibleStackingEnabled?: boolean;
    /**
     * The isolation status of the switch profile port.
     */
    isolationEnabled?: boolean;
    /**
     * The link speed for the switch profile port.
     */
    linkNegotiation?: string;
    /**
     * Available link speeds for the switch profile port.
     */
    linkNegotiationCapabilities?: string[];
    /**
     * Only devices with MAC addresses specified in this list will have access to this port. Up to 20 MAC addresses can be defined. Only applicable when 'accessPolicyType' is 'MAC allow list'.
     */
    macAllowList?: string[];
    /**
     * The name of the switch profile port.
     */
    name?: string;
    /**
     * The PoE status of the switch profile port.
     */
    poeEnabled?: boolean;
    /**
     * The identifier of the switch profile port.
     */
    portId?: string;
    /**
     * The ID of the port schedule. A value of null will clear the port schedule.
     */
    portScheduleId?: string;
    /**
     * Profile attributes
     */
    profile?: GetOrganizationConfigTemplateSwitchProfilePorts200ApplicationJSONProfile;
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
     * The storm control status of the switch profile port.
     */
    stormControlEnabled?: boolean;
    /**
     * The state of the STP guard ('disabled', 'root guard', 'bpdu guard' or 'loop guard').
     */
    stpGuard?: GetOrganizationConfigTemplateSwitchProfilePorts200ApplicationJSONStpGuardEnum;
    /**
     * The list of tags of the switch profile port.
     */
    tags?: string[];
    /**
     * The type of the switch profile port ('trunk' or 'access').
     */
    type?: GetOrganizationConfigTemplateSwitchProfilePorts200ApplicationJSONTypeEnum;
    /**
     * The action to take when Unidirectional Link is detected (Alert only, Enforce). Default configuration is Alert only.
     */
    udld?: GetOrganizationConfigTemplateSwitchProfilePorts200ApplicationJSONUdldEnum;
    /**
     * The VLAN of the switch profile port. A null value will clear the value set for trunk ports.
     */
    vlan?: number;
    /**
     * The voice VLAN of the switch profile port. Only applicable to access ports.
     */
    voiceVlan?: number;
}
export declare class GetOrganizationConfigTemplateSwitchProfilePortsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getOrganizationConfigTemplateSwitchProfilePorts200ApplicationJSONObjects?: GetOrganizationConfigTemplateSwitchProfilePorts200ApplicationJSON[];
}
