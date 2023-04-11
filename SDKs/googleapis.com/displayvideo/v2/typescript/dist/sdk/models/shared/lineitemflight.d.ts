import { SpeakeasyBase } from "../../../internal/utils";
import { DateRange } from "./daterange";
/**
 * Required. The type of the line item's flight dates.
 */
export declare enum LineItemFlightFlightDateTypeEnum {
    LineItemFlightDateTypeUnspecified = "LINE_ITEM_FLIGHT_DATE_TYPE_UNSPECIFIED",
    LineItemFlightDateTypeInherited = "LINE_ITEM_FLIGHT_DATE_TYPE_INHERITED",
    LineItemFlightDateTypeCustom = "LINE_ITEM_FLIGHT_DATE_TYPE_CUSTOM"
}
/**
 * Settings that control the active duration of a line item.
 */
export declare class LineItemFlight extends SpeakeasyBase {
    /**
     * A date range.
     */
    dateRange?: DateRange;
    /**
     * Required. The type of the line item's flight dates.
     */
    flightDateType?: LineItemFlightFlightDateTypeEnum;
}
