import { SpeakeasyBase } from "../../../internal/utils";
import { IPAddressInterface } from "./ipaddressinterface";
import { NestedIPAddress } from "./nestedipaddress";
import { NestedTenant } from "./nestedtenant";
import { NestedVRF } from "./nestedvrf";
export declare enum IPAddressFamilyLabelEnum {
    IPv4 = "IPv4",
    IPv6 = "IPv6"
}
export declare enum IPAddressFamilyValueEnum {
    Four = "4",
    Six = "6"
}
export declare class IPAddressFamily extends SpeakeasyBase {
    label: IPAddressFamilyLabelEnum;
    value: IPAddressFamilyValueEnum;
}
export declare enum IPAddressRoleLabelEnum {
    Loopback = "Loopback",
    Secondary = "Secondary",
    Anycast = "Anycast",
    Vip = "VIP",
    Vrrp = "VRRP",
    Hsrp = "HSRP",
    Glbp = "GLBP",
    Carp = "CARP"
}
export declare enum IPAddressRoleValueEnum {
    Loopback = "loopback",
    Secondary = "secondary",
    Anycast = "anycast",
    Vip = "vip",
    Vrrp = "vrrp",
    Hsrp = "hsrp",
    Glbp = "glbp",
    Carp = "carp"
}
export declare class IPAddressRole extends SpeakeasyBase {
    label: IPAddressRoleLabelEnum;
    value: IPAddressRoleValueEnum;
}
export declare enum IPAddressStatusLabelEnum {
    Active = "Active",
    Reserved = "Reserved",
    Deprecated = "Deprecated",
    Dhcp = "DHCP"
}
export declare enum IPAddressStatusValueEnum {
    Active = "active",
    Reserved = "reserved",
    Deprecated = "deprecated",
    Dhcp = "dhcp"
}
export declare class IPAddressStatus extends SpeakeasyBase {
    label: IPAddressStatusLabelEnum;
    value: IPAddressStatusValueEnum;
}
export declare class IPAddress extends SpeakeasyBase {
    /**
     * IPv4 or IPv6 address (with mask)
     */
    address: string;
    created?: Date;
    customFields?: Record<string, any>;
    description?: string;
    /**
     * Hostname or FQDN (not case-sensitive)
     */
    dnsName?: string;
    family?: IPAddressFamily;
    id?: number;
    interface?: IPAddressInterface;
    lastUpdated?: Date;
    natInside?: NestedIPAddress;
    natOutside?: NestedIPAddress;
    role?: IPAddressRole;
    status?: IPAddressStatus;
    tags?: string[];
    tenant?: NestedTenant;
    vrf?: NestedVRF;
}
