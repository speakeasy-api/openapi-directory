import { SpeakeasyBase } from "../../../internal/utils";
export declare class Blacklist extends SpeakeasyBase {
    /**
     * True if the host is currently black-listed
     */
    isListed: boolean;
    /**
     * The hostname of the DNSBL
     */
    listHost: string;
    /**
     * The name of the DNSBL
     */
    listName: string;
    /**
     * The list rating [1-3] with 1 being the best rating and 3 the lowest rating
     */
    listRating: number;
    /**
     * The DNSBL server response time in milliseconds
     */
    responseTime: number;
    /**
     * The specific return code for this listing (only set if listed)
     */
    returnCode: string;
    /**
     * The TXT record returned for this listing (only set if listed)
     */
    txtRecord: string;
}
