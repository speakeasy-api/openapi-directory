import { SpeakeasyBase } from "../../../internal/utils";
import { Usage } from "./usage";
/**
 * Where the data is sent to.
 */
export declare enum CloudStorageEgressWorkloadDestinationContinentEnum {
    DestinationContinentUnspecified = "DESTINATION_CONTINENT_UNSPECIFIED",
    DestinationContinentAsiaPacific = "DESTINATION_CONTINENT_ASIA_PACIFIC",
    DestinationContinentAutralia = "DESTINATION_CONTINENT_AUTRALIA",
    DestinationContinentEurope = "DESTINATION_CONTINENT_EUROPE",
    DestinationContinentNorthAmerica = "DESTINATION_CONTINENT_NORTH_AMERICA",
    DestinationContinentSouthAmerica = "DESTINATION_CONTINENT_SOUTH_AMERICA"
}
/**
 * Where the data comes from.
 */
export declare enum CloudStorageEgressWorkloadSourceContinentEnum {
    SourceContinentUnspecified = "SOURCE_CONTINENT_UNSPECIFIED",
    SourceContinentAsiaPacific = "SOURCE_CONTINENT_ASIA_PACIFIC",
    SourceContinentAustralia = "SOURCE_CONTINENT_AUSTRALIA",
    SourceContinentEurope = "SOURCE_CONTINENT_EUROPE",
    SourceContinentNorthAmerica = "SOURCE_CONTINENT_NORTH_AMERICA",
    SourceContinentSouthAmerica = "SOURCE_CONTINENT_SOUTH_AMERICA"
}
/**
 * Specification of a network type. Network egress within Google Cloud applies when you move or copy data from one Cloud Storage bucket to another or when another Google Cloud service accesses data in your Cloud Storage bucket.This includes the network egress within Google Cloud and the general network usage.
 */
export declare class CloudStorageEgressWorkload extends SpeakeasyBase {
    /**
     * Where the data is sent to.
     */
    destinationContinent?: CloudStorageEgressWorkloadDestinationContinentEnum;
    /**
     * An amount of usage over a time frame.
     */
    egressRate?: Usage;
    /**
     * Where the data comes from.
     */
    sourceContinent?: CloudStorageEgressWorkloadSourceContinentEnum;
}
