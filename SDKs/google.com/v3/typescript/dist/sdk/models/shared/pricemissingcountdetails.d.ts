import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The reasons that contributed to the price missing count and the total count for each reason.
 */
export declare class PriceMissingCountDetails extends SpeakeasyBase {
    /**
     * No price was cached for this itinerary, and there was no live query quota remaining.
     */
    bandwidthDepletedCount?: string;
    /**
     * No price exists in the cache for this itinerary. A live query was not done due to page constraints.
     */
    cacheRateMissingCount?: string;
    /**
     * The itinerary was outside of your basic parameters, so no price was pulled for the itinerary from either live query or cache fill.
     */
    itineraryBlockedCount?: string;
    /**
     * No price was cached for this itinerary. A live query did not time out, but your system returned an error.
     */
    livePricingErrorCount?: string;
    /**
     * No price was cached for this itinerary, and live query was not configured for this account.
     */
    livePricingNotSetupCount?: string;
    /**
     * No price was cached for this itinerary, and a live query sent to your system timed out.
     */
    livePricingTimeoutCount?: string;
}
