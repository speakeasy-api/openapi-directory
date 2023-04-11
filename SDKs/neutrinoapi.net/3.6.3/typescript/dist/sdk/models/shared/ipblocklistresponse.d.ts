import { SpeakeasyBase } from "../../../internal/utils";
import { BlocklistSensor } from "./blocklistsensor";
export declare class IPBlocklistResponse extends SpeakeasyBase {
    /**
     * An array of strings indicating which blocklist categories this IP is listed on
     */
    blocklists: string[];
    /**
     * The CIDR address for this listing (only set if the IP is listed)
     */
    cidr: string;
    /**
     * The IP address
     */
    ip: string;
    /**
     * IP is hosting a malicious bot or is part of a botnet. This is a broad category which includes brute-force crackers
     */
    isBot: boolean;
    /**
     * IP has been flagged as a significant attack source by DShield (dshield.org)
     */
    isDshield: boolean;
    /**
     * IP is hosting an exploit finding bot or is running exploit scanning software
     */
    isExploitBot: boolean;
    /**
     * IP is part of a hijacked netblock or a netblock controlled by a criminal organization
     */
    isHijacked: boolean;
    /**
     * Is this IP on a blocklist
     */
    isListed: boolean;
    /**
     * IP is involved in distributing or is running malware
     */
    isMalware: boolean;
    /**
     * IP has been detected as an anonymous web proxy or anonymous HTTP proxy
     */
    isProxy: boolean;
    /**
     * IP address is hosting a spam bot, comment spamming or any other spamming type software
     */
    isSpamBot: boolean;
    /**
     * IP is running a hostile web spider / web crawler
     */
    isSpider: boolean;
    /**
     * IP is involved in distributing or is running spyware
     */
    isSpyware: boolean;
    /**
     * IP is a Tor node or running a Tor related service
     */
    isTor: boolean;
    /**
     * IP belongs to a public VPN provider (only set if the 'vpn-lookup' option is enabled)
     */
    isVpn: boolean;
    /**
     * The unix time when this IP was last seen on any blocklist. IPs are automatically removed after 7 days therefor this value will never be older than 7 days
     */
    lastSeen: number;
    /**
     * The number of blocklists the IP is listed on
     */
    listCount: number;
    /**
     * An array of objects containing details on which specific sensors detected the IP
     */
    sensors: BlocklistSensor[];
}
