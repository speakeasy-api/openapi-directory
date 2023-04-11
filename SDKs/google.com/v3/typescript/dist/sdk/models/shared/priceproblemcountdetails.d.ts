import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The reasons that contributed to the price problem count and the total count for each reason.
 */
export declare class PriceProblemCountDetails extends SpeakeasyBase {
    /**
     * The hotel was suspended. This may be due to persistent problems in areas such as incorrect taxes and fees.
     */
    hotelSuspendedCount?: string;
    /**
     * The price given for this itinerary seemed oddly high compared to regional trends.
     */
    priceUnusuallyHighCount?: string;
    /**
     * The price given for this itinerary seemed oddly low compared to regional trends.
     */
    priceUnusuallyLowCount?: string;
    /**
     * Taxes and fees were missing from pricing.
     */
    taxesAndFeesMissingCount?: string;
}
