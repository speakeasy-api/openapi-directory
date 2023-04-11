import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Description-tagged IP ranges for the router to advertise.
 */
export declare class RouterAdvertisedIpRange extends SpeakeasyBase {
    /**
     * User-specified description for the IP range.
     */
    description?: string;
    /**
     * The IP range to advertise. The value must be a CIDR-formatted string.
     */
    range?: string;
}
