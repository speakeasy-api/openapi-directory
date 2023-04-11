import { SpeakeasyBase } from "../../../internal/utils";
import { Usage } from "./usage";
/**
 * Egress traffic between two regions.
 */
export declare class InterRegionEgress extends SpeakeasyBase {
    /**
     * Which [region](https://cloud.google.com/compute/docs/regions-zones) the egress data goes to.
     */
    destinationRegion?: string;
    /**
     * An amount of usage over a time frame.
     */
    egressRate?: Usage;
    /**
     * Which [region](https://cloud.google.com/compute/docs/regions-zones) the egress data comes from.
     */
    sourceRegion?: string;
}
