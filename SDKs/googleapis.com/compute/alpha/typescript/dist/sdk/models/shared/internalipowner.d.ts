import { SpeakeasyBase } from "../../../internal/utils";
export declare class InternalIpOwner extends SpeakeasyBase {
    /**
     * IP CIDR range being owned.
     */
    ipCidrRange?: string;
    /**
     * URLs of the IP owners of the IP CIDR range.
     */
    owners?: string[];
    /**
     * Whether this IP CIDR range is reserved for system use.
     */
    systemOwned?: boolean;
}
