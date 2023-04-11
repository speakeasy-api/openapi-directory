import { SpeakeasyBase } from "../../../internal/utils";
import { Usage } from "./usage";
/**
 * Specify Standard Tier Internet egress networking.
 */
export declare class StandardTierEgressWorkload extends SpeakeasyBase {
    /**
     * An amount of usage over a time frame.
     */
    egressRate?: Usage;
    /**
     * Which [region](https://cloud.google.com/compute/docs/regions-zones) the egress data comes from.
     */
    sourceRegion?: string;
}
