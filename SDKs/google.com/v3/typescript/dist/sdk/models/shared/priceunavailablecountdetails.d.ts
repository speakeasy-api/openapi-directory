import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The reasons that contributed to the price unavailable count and the total count for each reason.
 */
export declare class PriceUnavailableCountDetails extends SpeakeasyBase {
    /**
     * No price was cached for this itinerary, and no live query was done because your server usually tells us the hotel is unavailable or sold out.
     */
    participationNotLikelyCount?: string;
    /**
     * Hotel did not participate because it wasn't available for the itinerary dates.
     */
    priceUnavailableCount?: string;
}
