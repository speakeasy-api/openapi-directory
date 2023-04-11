import { SpeakeasyBase } from "../../../internal/utils";
import { OtherRegionsSubscriptionOfferPhaseConfig } from "./otherregionssubscriptionofferphaseconfig";
import { RegionalSubscriptionOfferPhaseConfig } from "./regionalsubscriptionofferphaseconfig";
/**
 * A single phase of a subscription offer.
 */
export declare class SubscriptionOfferPhase extends SpeakeasyBase {
    /**
     * Required. The duration of a single recurrence of this phase. Specified in ISO 8601 format.
     */
    duration?: string;
    /**
     * Configuration for any new locations Play may launch in for a single offer phase.
     */
    otherRegionsConfig?: OtherRegionsSubscriptionOfferPhaseConfig;
    /**
     * Required. The number of times this phase repeats. If this offer phase is not free, each recurrence charges the user the price of this offer phase.
     */
    recurrenceCount?: number;
    /**
     * Required. The region-specific configuration of this offer phase. This list must contain exactly one entry for each region for which the subscription offer has a regional config.
     */
    regionalConfigs?: RegionalSubscriptionOfferPhaseConfig[];
}
