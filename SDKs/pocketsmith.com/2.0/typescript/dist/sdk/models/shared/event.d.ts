import { SpeakeasyBase } from "../../../internal/utils";
import { Category } from "./category";
import { Scenario } from "./scenario";
/**
 * The repeat type of the event.
 */
export declare enum EventRepeatTypeEnum {
    Once = "once",
    Daily = "daily",
    Weekly = "weekly",
    Fortnightly = "fortnightly",
    Monthly = "monthly",
    Yearly = "yearly",
    EachWeekday = "each weekday"
}
/**
 * Success
 */
export declare class Event extends SpeakeasyBase {
    /**
     * The amount of the event.
     */
    amount?: number;
    /**
     * The amount of the event in the user's base currency.
     */
    amountInBaseCurrency?: number;
    category?: Category;
    /**
     * The CSS hex-style colour of the event.
     */
    colour?: string;
    /**
     * The currency code of the event.
     */
    currencyCode?: string;
    /**
     * The date of the event.
     */
    date?: string;
    /**
     * The unique identifier of the event.
     */
    id?: string;
    /**
     * Whether the event repeats and does not have an end date.
     */
    infiniteSeries?: boolean;
    /**
     * The note of the event.
     */
    note?: string;
    /**
     * The repeat interval of how often the event takes place.
     */
    repeatInterval?: number;
    /**
     * The repeat type of the event.
     */
    repeatType?: EventRepeatTypeEnum;
    scenario?: Scenario;
    /**
     * The unique identifier of the series that the event belongs to.
     */
    seriesId?: number;
    /**
     * The unique identifier of the series followed by the series's start date.
     */
    seriesStartId?: string;
}
