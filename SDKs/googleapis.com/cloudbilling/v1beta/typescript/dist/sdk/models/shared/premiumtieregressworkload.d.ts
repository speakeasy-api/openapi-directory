import { SpeakeasyBase } from "../../../internal/utils";
import { Usage } from "./usage";
/**
 * Where the data is sent to.
 */
export declare enum PremiumTierEgressWorkloadDestinationContinentEnum {
    DestinationContinentUnspecified = "DESTINATION_CONTINENT_UNSPECIFIED",
    DestinationContinentAsiaPacific = "DESTINATION_CONTINENT_ASIA_PACIFIC",
    DestinationContinentAfrica = "DESTINATION_CONTINENT_AFRICA",
    DestinationContinentNorthAmerica = "DESTINATION_CONTINENT_NORTH_AMERICA",
    DestinationContinentAutralia = "DESTINATION_CONTINENT_AUTRALIA",
    DestinationContinentCentralAmerica = "DESTINATION_CONTINENT_CENTRAL_AMERICA",
    DestinationContinentChina = "DESTINATION_CONTINENT_CHINA",
    DestinationContinentEasternEurope = "DESTINATION_CONTINENT_EASTERN_EUROPE",
    DestinationContinentWesternEurope = "DESTINATION_CONTINENT_WESTERN_EUROPE",
    DestinationContinentEmea = "DESTINATION_CONTINENT_EMEA",
    DestinationContinentIndia = "DESTINATION_CONTINENT_INDIA",
    DestinationContinentMiddleEast = "DESTINATION_CONTINENT_MIDDLE_EAST",
    DestinationContinentSouthAmerica = "DESTINATION_CONTINENT_SOUTH_AMERICA"
}
/**
 * Specify Premium Tier Internet egress networking.
 */
export declare class PremiumTierEgressWorkload extends SpeakeasyBase {
    /**
     * Where the data is sent to.
     */
    destinationContinent?: PremiumTierEgressWorkloadDestinationContinentEnum;
    /**
     * An amount of usage over a time frame.
     */
    egressRate?: Usage;
    /**
     * Which [region](https://cloud.google.com/compute/docs/regions-zones) the egress data comes from.
     */
    sourceRegion?: string;
}
