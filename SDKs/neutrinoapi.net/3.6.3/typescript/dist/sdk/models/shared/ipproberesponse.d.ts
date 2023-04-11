import { SpeakeasyBase } from "../../../internal/utils";
export declare class IPProbeResponse extends SpeakeasyBase {
    /**
     * The age of the autonomous system (AS) in number of years since registration
     */
    asAge: number;
    /**
     * The autonomous system (AS) CIDR range
     */
    asCidr: string;
    /**
     * The autonomous system (AS) ISO 2-letter country code
     */
    asCountryCode: string;
    /**
     * The autonomous system (AS) ISO 3-letter country code
     */
    asCountryCode3: string;
    /**
     * The autonomous system (AS) description / company name
     */
    asDescription: string;
    /**
     * Array of all the domains associated with the autonomous system (AS)
     */
    asDomains: string[];
    /**
     * The autonomous system (AS) number
     */
    asn: string;
    /**
     * Full city name (if detectable)
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
     * The IPs host domain
     */
    hostDomain: string;
    /**
     * The IPs full hostname (PTR)
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
     * True if this IP belongs to a hosting company. Note that this can still be true even if the provider type is VPN/proxy, this occurs in the case that the IP is detected as both types
     */
    isHosting: boolean;
    /**
     * True if this IP belongs to an internet service provider. Note that this can still be true even if the provider type is VPN/proxy, this occurs in the case that the IP is detected as both types
     */
    isIsp: boolean;
    /**
     * True if this IP ia a proxy
     */
    isProxy: boolean;
    /**
     * True if this is a <a href="https://en.wikipedia.org/wiki/IPv6#IPv4-mapped_IPv6_addresses">IPv4 mapped IPv6 address</a>
     */
    isV4Mapped: boolean;
    /**
     * True if this is a IPv6 address. False if IPv4
     */
    isV6: boolean;
    /**
     * True if this IP ia a VPN
     */
    isVpn: boolean;
    /**
     * A description of the provider (usually extracted from the providers website)
     */
    providerDescription: string;
    /**
     * The domain name of the provider
     */
    providerDomain: string;
    /**
     * The detected provider type, possible values are: <br> <ul> <li>isp - IP belongs to an internet service provider. This includes both mobile, home and business internet providers</li> <li>hosting - IP belongs to a hosting company. This includes website hosting, cloud computing platforms and colocation facilities</li> <li>vpn - IP belongs to a VPN provider</li> <li>proxy - IP belongs to a proxy service. This includes HTTP/SOCKS proxies and browser based proxies</li> <li>university - IP belongs to a university/college/campus</li> <li>government - IP belongs to a government department. This includes military facilities</li> <li>commercial - IP belongs to a commercial entity such as a corporate headquarters or company office</li> <li>unknown - could not identify the provider type</li> </ul>
     */
    providerType: string;
    /**
     * The website URL for the provider
     */
    providerWebsite: string;
    /**
     * Full region name (if detectable)
     */
    region: string;
    /**
     * ISO 3166-2 region code (if detectable)
     */
    regionCode: string;
    /**
     * True if this is a valid IPv4 or IPv6 address
     */
    valid: boolean;
    /**
     * The domain of the VPN provider (may be empty if the VPN domain is not detectable)
     */
    vpnDomain: string;
}
