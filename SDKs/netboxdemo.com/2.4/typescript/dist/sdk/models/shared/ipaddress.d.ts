import { SpeakeasyBase } from "../../../internal/utils";
import { IPAddressInterface } from "./ipaddressinterface";
import { NestedIPAddress } from "./nestedipaddress";
import { NestedTenant } from "./nestedtenant";
import { NestedVRF } from "./nestedvrf";
export declare class IPAddressRole extends SpeakeasyBase {
    label: string;
    value: number;
}
export declare class IPAddressStatus extends SpeakeasyBase {
    label: string;
    value: number;
}
export declare class IPAddress extends SpeakeasyBase {
    /**
     * IPv4 or IPv6 address (with mask)
     */
    address: string;
    created?: Date;
    customFields?: Record<string, any>;
    description?: string;
    family?: number;
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
