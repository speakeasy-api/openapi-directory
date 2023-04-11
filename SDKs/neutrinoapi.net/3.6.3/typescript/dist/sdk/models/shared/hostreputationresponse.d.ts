import { SpeakeasyBase } from "../../../internal/utils";
import { Blacklist } from "./blacklist";
export declare class HostReputationResponse extends SpeakeasyBase {
    /**
     * The IP address or host name
     */
    host: string;
    /**
     * Is this host blacklisted
     */
    isListed: boolean;
    /**
     * The number of DNSBLs the host is listed on
     */
    listCount: number;
    /**
     * Array of objects for each DNSBL checked
     */
    lists: Blacklist[];
}
