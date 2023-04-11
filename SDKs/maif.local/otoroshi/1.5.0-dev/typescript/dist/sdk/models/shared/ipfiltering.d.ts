import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The filtering configuration block for a service of globally.
 */
export declare class IpFiltering extends SpeakeasyBase {
    /**
     * Blacklisted IP addresses
     */
    blacklist: string[];
    /**
     * Whitelisted IP addresses
     */
    whitelist: string[];
}
