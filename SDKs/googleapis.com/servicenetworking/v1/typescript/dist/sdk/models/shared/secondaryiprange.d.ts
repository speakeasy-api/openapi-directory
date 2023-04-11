import { SpeakeasyBase } from "../../../internal/utils";
export declare class SecondaryIpRange extends SpeakeasyBase {
    /**
     * Secondary IP CIDR range in `x.x.x.x/y` format.
     */
    ipCidrRange?: string;
    /**
     * Name of the secondary IP range.
     */
    rangeName?: string;
}
