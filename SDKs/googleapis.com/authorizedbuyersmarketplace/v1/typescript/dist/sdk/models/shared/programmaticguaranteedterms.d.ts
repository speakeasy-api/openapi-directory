import { SpeakeasyBase } from "../../../internal/utils";
import { Price } from "./price";
/**
 * The reservation type for a Programmatic Guaranteed deal. This indicates whether the number of impressions is fixed, or a percent of available impressions. If not specified, the default reservation type is STANDARD.
 */
export declare enum ProgrammaticGuaranteedTermsReservationTypeEnum {
    ReservationTypeUnspecified = "RESERVATION_TYPE_UNSPECIFIED",
    Standard = "STANDARD",
    Sponsorship = "SPONSORSHIP"
}
/**
 * Pricing terms for Programmatic Guaranteed Deals.
 */
export declare class ProgrammaticGuaranteedTerms extends SpeakeasyBase {
    /**
     * Represents a price and a pricing type for a deal.
     */
    fixedPrice?: Price;
    /**
     * Count of guaranteed looks.
     */
    guaranteedLooks?: string;
    /**
     * The lifetime impression cap for CPM Sponsorship deals. Deal will stop serving when cap is reached.
     */
    impressionCap?: string;
    /**
     * Daily minimum looks for CPD deal types.
     */
    minimumDailyLooks?: string;
    /**
     * For sponsorship deals, this is the percentage of the seller's eligible impressions that the deal will serve until the cap is reached. Valid value is within range 0~100.
     */
    percentShareOfVoice?: string;
    /**
     * The reservation type for a Programmatic Guaranteed deal. This indicates whether the number of impressions is fixed, or a percent of available impressions. If not specified, the default reservation type is STANDARD.
     */
    reservationType?: ProgrammaticGuaranteedTermsReservationTypeEnum;
}
