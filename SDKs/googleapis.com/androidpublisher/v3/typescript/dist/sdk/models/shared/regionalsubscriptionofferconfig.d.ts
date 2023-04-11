import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Configuration for a subscription offer in a single region.
 */
export declare class RegionalSubscriptionOfferConfig extends SpeakeasyBase {
    /**
     * Whether the subscription offer in the specified region is available for new subscribers. Existing subscribers will not have their subscription cancelled if this value is set to false. If not specified, this will default to false.
     */
    newSubscriberAvailability?: boolean;
    /**
     * Required. Immutable. Region code this configuration applies to, as defined by ISO 3166-2, e.g. "US".
     */
    regionCode?: string;
}
