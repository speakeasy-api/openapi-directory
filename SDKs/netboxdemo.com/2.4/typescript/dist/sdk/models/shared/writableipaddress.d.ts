import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The functional role of this IP
 */
export declare enum WritableIPAddressRoleEnum {
    Ten = "10",
    Twenty = "20",
    Thirty = "30",
    Forty = "40",
    FortyOne = "41",
    FortyTwo = "42",
    FortyThree = "43",
    FortyFour = "44"
}
/**
 * The operational status of this IP
 */
export declare enum WritableIPAddressStatusEnum {
    One = "1",
    Two = "2",
    Three = "3",
    Five = "5"
}
export declare class WritableIPAddressInput extends SpeakeasyBase {
    /**
     * IPv4 or IPv6 address (with mask)
     */
    address: string;
    customFields?: Record<string, any>;
    description?: string;
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
