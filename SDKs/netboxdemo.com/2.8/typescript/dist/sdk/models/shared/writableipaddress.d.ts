import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The functional role of this IP
 */
export declare enum WritableIPAddressRoleEnum {
    Loopback = "loopback",
    Secondary = "secondary",
    Anycast = "anycast",
    Vip = "vip",
    Vrrp = "vrrp",
    Hsrp = "hsrp",
    Glbp = "glbp",
    Carp = "carp"
}
/**
 * The operational status of this IP
 */
export declare enum WritableIPAddressStatusEnum {
    Active = "active",
    Reserved = "reserved",
    Deprecated = "deprecated",
    Dhcp = "dhcp"
}
export declare class WritableIPAddressInput extends SpeakeasyBase {
    /**
     * IPv4 or IPv6 address (with mask)
     */
    address: string;
    customFields?: Record<string, any>;
    description?: string;
    /**
     * Hostname or FQDN (not case-sensitive)
     */
    dnsName?: string;
    interface?: number;
    /**
     * The IP for which this address is the "outside" IP
     */
    natInside?: number;
    natOutside: number;
    /**
     * The functional role of this IP
     */
    role?: WritableIPAddressRoleEnum;
    /**
     * The operational status of this IP
     */
    status?: WritableIPAddressStatusEnum;
    tags?: string[];
    tenant?: number;
    vrf?: number;
}
