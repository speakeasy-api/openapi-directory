import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The type of product or service included in the price. We currently support rates including "BREAKFAST", "LUNCH", "DINNER" and "ALL_INCLUSIVE".
 */
export declare enum RateComponentTypeEnum {
    Breakfast = "BREAKFAST",
    Lunch = "LUNCH",
    Dinner = "DINNER",
    WelcomeBeverage = "WELCOME_BEVERAGE",
    AllInclusive = "ALL_INCLUSIVE"
}
/**
 * Product or service offered as part of a rate in addition to accommodation in the room.
 */
export declare class RateComponent extends SpeakeasyBase {
    /**
     * Human-readable plain English version of the component included in the rate, ready to be shown to your guests.
     */
    formatted: string;
    includedInRate?: boolean;
    /**
     * The type of product or service included in the price. We currently support rates including "BREAKFAST", "LUNCH", "DINNER" and "ALL_INCLUSIVE".
     */
    type: RateComponentTypeEnum;
}
