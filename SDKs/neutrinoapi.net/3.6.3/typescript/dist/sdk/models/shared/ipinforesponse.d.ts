import { SpeakeasyBase } from "../../../internal/utils";
import { Timezone } from "./timezone";
export declare class IPInfoResponse extends SpeakeasyBase {
    /**
     * Name of the city (if detectable)
     */
    city: string;
    /**
     * ISO 2-letter continent code
     */
    continentCode: string;
    /**
     * Full country name
     */
    country: string;
    /**
     * ISO 2-letter country code
     */
    countryCode: string;
    /**
     * ISO 3-letter country code
     */
    countryCode3: string;
    /**
     * ISO 4217 currency code associated with the country
     */
    currencyCode: string;
    /**
     * The IPs host domain (only set if reverse-lookup has been used)
     */
    hostDomain: string;
    /**
     * The IPs full hostname (only set if reverse-lookup has been used)
     */
    hostname: string;
    /**
     * The IP address
     */
    ip: string;
    /**
     * True if this is a bogon IP address such as a private network, local network or reserved address
     */
    isBogon: boolean;
    /**
     * True if this is a <a href="https://en.wikipedia.org/wiki/IPv6#IPv4-mapped_IPv6_addresses">IPv4 mapped IPv6 address</a>
     */
    isV4Mapped: boolean;
    /**
     * True if this is a IPv6 address. False if IPv4
     */
    isV6: boolean;
    /**
     * Location latitude
     */
    latitude: number;
    /**
     * Location longitude
     */
    longitude: number;
    /**
     * Name of the region (if detectable)
     */
    region: string;
    /**
     * ISO 3166-2 region code (if detectable)
     */
    regionCode: string;
    /**
     * Map containing timezone details for the location
     */
    timezone: Record<string, Timezone>;
    /**
     * True if this is a valid IPv4 or IPv6 address
     */
    valid: boolean;
}
