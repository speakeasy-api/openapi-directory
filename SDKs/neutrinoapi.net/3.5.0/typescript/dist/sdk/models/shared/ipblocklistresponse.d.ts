import { SpeakeasyBase } from "../../../internal/utils";
export declare class IpBlocklistResponse extends SpeakeasyBase {
    blocklists: string[];
    ip: string;
    isBot: boolean;
    isDshield: boolean;
    isExploitBot: boolean;
    isHijacked: boolean;
    isListed: boolean;
    isMalware: boolean;
    isProxy: boolean;
    isSpamBot: boolean;
    isSpider: boolean;
    isSpyware: boolean;
    isTor: boolean;
    isVpn: boolean;
    lastSeen: number;
    listCount: number;
    sensors: string[];
}
