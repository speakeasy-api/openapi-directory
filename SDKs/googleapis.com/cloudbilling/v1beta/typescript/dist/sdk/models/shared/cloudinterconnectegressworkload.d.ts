import { SpeakeasyBase } from "../../../internal/utils";
import { Usage } from "./usage";
/**
 * Locations in the [Interconnect connection location table](https://cloud.google.com/vpc/network-pricing#interconnect-pricing). This is the interconnect egress charges.
 */
export declare enum CloudInterconnectEgressWorkloadInterconnectConnectionLocationEnum {
    InterconnectConnectionLocationUnspecified = "INTERCONNECT_CONNECTION_LOCATION_UNSPECIFIED",
    InterconnectConnectionLocationAsia = "INTERCONNECT_CONNECTION_LOCATION_ASIA",
    InterconnectConnectionLocationEurope = "INTERCONNECT_CONNECTION_LOCATION_EUROPE",
    InterconnectConnectionLocationNorthAmerica = "INTERCONNECT_CONNECTION_LOCATION_NORTH_AMERICA",
    InterconnectConnectionLocationSouthAmerica = "INTERCONNECT_CONNECTION_LOCATION_SOUTH_AMERICA",
    InterconnectConnectionLocationAustralia = "INTERCONNECT_CONNECTION_LOCATION_AUSTRALIA"
}
/**
 * The interconnect egress only includes the Interconnect Egress. Please use the standard egress traffic interface to specify your standard egress usage.
 */
export declare class CloudInterconnectEgressWorkload extends SpeakeasyBase {
    /**
     * An amount of usage over a time frame.
     */
    egressRate?: Usage;
    /**
     * Locations in the [Interconnect connection location table](https://cloud.google.com/vpc/network-pricing#interconnect-pricing). This is the interconnect egress charges.
     */
    interconnectConnectionLocation?: CloudInterconnectEgressWorkloadInterconnectConnectionLocationEnum;
}
