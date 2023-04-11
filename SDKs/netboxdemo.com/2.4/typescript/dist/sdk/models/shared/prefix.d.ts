import { SpeakeasyBase } from "../../../internal/utils";
import { NestedRole } from "./nestedrole";
import { NestedSite } from "./nestedsite";
import { NestedTenant } from "./nestedtenant";
import { NestedVLAN } from "./nestedvlan";
import { NestedVRF } from "./nestedvrf";
export declare class PrefixStatus extends SpeakeasyBase {
    label: string;
    value: number;
}
export declare class Prefix extends SpeakeasyBase {
    created?: Date;
    customFields?: Record<string, any>;
    description?: string;
    family?: number;
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
