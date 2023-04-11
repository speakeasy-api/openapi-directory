import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information involved in sending ICMP pings alongside public HTTP/TCP checks. For HTTP, the pings are performed for each part of the redirect chain.
 */
export declare class PingConfig extends SpeakeasyBase {
    /**
     * Number of ICMP pings. A maximum of 3 ICMP pings is currently supported.
     */
    pingsCount?: number;
}
