import { SpeakeasyBase } from "../../../internal/utils";
import { PricePerBuyer } from "./priceperbuyer";
/**
 * The reservation type for a Programmatic Guaranteed deal. This indicates whether the number of impressions is fixed, or a percent of available impressions. If not specified, the default reservation type is STANDARD.
 */
export declare enum GuaranteedFixedPriceTermsReservationTypeEnum {
    ReservationTypeUnspecified = "RESERVATION_TYPE_UNSPECIFIED",
    Standard = "STANDARD",
    Sponsorship = "SPONSORSHIP"
}
/**
 * Terms for Programmatic Guaranteed Deals.
 */
export declare class GuaranteedFixedPriceTerms extends SpeakeasyBase {
    /**
     * Fixed price for the specified buyer.
     */
    fixedPrices?: PricePerBuyer[];
    /**
     * Guaranteed impressions as a percentage. This is the percentage of guaranteed looks that the buyer is guaranteeing to buy.
     */
    guaranteedImpressions?: string;
    /**
     * Count of guaranteed looks. Required for deal, optional for product.
     */
    guaranteedLooks?: string;
    /**
     * The lifetime impression cap for CPM sponsorship deals. The deal will stop serving when the cap is reached.
     */
    impressionCap?: string;
    /**
     * Daily minimum looks for CPD deal types.
     */
    minimumDailyLooks?: string;
    /**
     * For sponsorship deals, this is the percentage of the seller's eligible impressions that the deal will serve until the cap is reached.
     */
    percentShareOfVoice?: string;
    /**
     * The reservation type for a Programmatic Guaranteed deal. This indicates whether the number of impressions is fixed, or a percent of available impressions. If not specified, the default reservation type is STANDARD.
     */
    reservationType?: GuaranteedFixedPriceTermsReservationTypeEnum;
}
