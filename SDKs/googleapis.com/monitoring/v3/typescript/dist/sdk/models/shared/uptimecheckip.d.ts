import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A broad region category in which the IP address is located.
 */
export declare enum UptimeCheckIpRegionEnum {
    RegionUnspecified = "REGION_UNSPECIFIED",
    Usa = "USA",
    Europe = "EUROPE",
    SouthAmerica = "SOUTH_AMERICA",
    AsiaPacific = "ASIA_PACIFIC",
    UsaOregon = "USA_OREGON",
    UsaIowa = "USA_IOWA",
    UsaVirginia = "USA_VIRGINIA"
}
/**
 * Contains the region, location, and list of IP addresses where checkers in the location run from.
 */
export declare class UptimeCheckIp extends SpeakeasyBase {
    /**
     * The IP address from which the Uptime check originates. This is a fully specified IP address (not an IP address range). Most IP addresses, as of this publication, are in IPv4 format; however, one should not rely on the IP addresses being in IPv4 format indefinitely, and should support interpreting this field in either IPv4 or IPv6 format.
     */
    ipAddress?: string;
    /**
     * A more specific location within the region that typically encodes a particular city/town/metro (and its containing state/province or country) within the broader umbrella region category.
     */
    location?: string;
    /**
     * A broad region category in which the IP address is located.
     */
    region?: UptimeCheckIpRegionEnum;
}
