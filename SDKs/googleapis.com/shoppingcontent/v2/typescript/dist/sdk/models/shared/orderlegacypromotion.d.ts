import { SpeakeasyBase } from "../../../internal/utils";
import { OrderLegacyPromotionBenefit } from "./orderlegacypromotionbenefit";
export declare class OrderLegacyPromotion extends SpeakeasyBase {
    benefits?: OrderLegacyPromotionBenefit[];
    /**
     * The date and time frame when the promotion is active and ready for validation review. Note that the promotion live time may be delayed for a few hours due to the validation review. Start date and end date are separated by a forward slash (/). The start date is specified by the format (YYYY-MM-DD), followed by the letter ?T?, the time of the day when the sale starts (in Greenwich Mean Time, GMT), followed by an expression of the time zone for the sale. The end date is in the same format.
     */
    effectiveDates?: string;
    /**
     * Optional. The text code that corresponds to the promotion when applied on the retailer?s website.
     */
    genericRedemptionCode?: string;
    /**
     * The unique ID of the promotion.
     */
    id?: string;
    /**
     * The full title of the promotion.
     */
    longTitle?: string;
    /**
     * Whether the promotion is applicable to all products or only specific products. Acceptable values are: - "`allProducts`" - "`specificProducts`"
     */
    productApplicability?: string;
    /**
     * Indicates that the promotion is valid online. Acceptable values are: - "`online`"
     */
    redemptionChannel?: string;
}
