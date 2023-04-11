import { SpeakeasyBase } from "../../../internal/utils";
import { NestedRole } from "./nestedrole";
import { NestedSite } from "./nestedsite";
import { NestedTenant } from "./nestedtenant";
import { NestedVLAN } from "./nestedvlan";
import { NestedVRF } from "./nestedvrf";
export declare enum PrefixFamilyLabelEnum {
    IPv4 = "IPv4",
    IPv6 = "IPv6"
}
export declare enum PrefixFamilyValueEnum {
    Four = "4",
    Six = "6"
}
export declare class PrefixFamily extends SpeakeasyBase {
    label: PrefixFamilyLabelEnum;
    value: PrefixFamilyValueEnum;
}
export declare enum PrefixStatusLabelEnum {
    Container = "Container",
    Active = "Active",
    Reserved = "Reserved",
    Deprecated = "Deprecated"
}
export declare enum PrefixStatusValueEnum {
    Container = "container",
    Active = "active",
    Reserved = "reserved",
    Deprecated = "deprecated"
}
export declare class PrefixStatus extends SpeakeasyBase {
    label: PrefixStatusLabelEnum;
    value: PrefixStatusValueEnum;
}
export declare class Prefix extends SpeakeasyBase {
    created?: Date;
    customFields?: Record<string, any>;
    description?: string;
    family?: PrefixFamily;
    id?: number;
    /**
     * All IP addresses within this prefix are considered usable
     */
    isPool?: boolean;
    lastUpdated?: Date;
    /**
     * IPv4 or IPv6 network with mask
     */
    prefix: string;
    role?: NestedRole;
    site?: NestedSite;
    status?: PrefixStatus;
    tags?: string[];
    tenant?: NestedTenant;
    vlan?: NestedVLAN;
    vrf?: NestedVRF;
}
