import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Operational status of this prefix
 */
export declare enum WritablePrefixStatusEnum {
    Container = "container",
    Active = "active",
    Reserved = "reserved",
    Deprecated = "deprecated"
}
export declare class WritablePrefixInput extends SpeakeasyBase {
    customFields?: Record<string, any>;
    description?: string;
    /**
     * All IP addresses within this prefix are considered usable
     */
    isPool?: boolean;
    /**
     * IPv4 or IPv6 network with mask
     */
    prefix: string;
    /**
     * The primary function of this prefix
     */
    role?: number;
    site?: number;
    /**
     * Operational status of this prefix
     */
    status?: WritablePrefixStatusEnum;
    tags?: string[];
    tenant?: number;
    vlan?: number;
    vrf?: number;
}
