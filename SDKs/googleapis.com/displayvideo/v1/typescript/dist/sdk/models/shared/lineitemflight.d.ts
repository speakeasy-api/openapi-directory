import { SpeakeasyBase } from "../../../internal/utils";
import { DateRange } from "./daterange";
/**
 * Required. The type of the line item's flight dates.
 */
export declare enum LineItemFlightFlightDateTypeEnum {
    LineItemFlightDateTypeUnspecified = "LINE_ITEM_FLIGHT_DATE_TYPE_UNSPECIFIED",
    LineItemFlightDateTypeInherited = "LINE_ITEM_FLIGHT_DATE_TYPE_INHERITED",
    LineItemFlightDateTypeCustom = "LINE_ITEM_FLIGHT_DATE_TYPE_CUSTOM",
    LineItemFlightDateTypeTrigger = "LINE_ITEM_FLIGHT_DATE_TYPE_TRIGGER"
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
    /**
     * The ID of the manual trigger associated with the line item. * Required when flight_date_type is `LINE_ITEM_FLIGHT_DATE_TYPE_TRIGGER`. Must not be set otherwise. * When set, the line item's flight dates are inherited from its parent insertion order. * Active line items will spend when the selected trigger is activated within the parent insertion order's flight dates.
     */
    triggerId?: string;
}
