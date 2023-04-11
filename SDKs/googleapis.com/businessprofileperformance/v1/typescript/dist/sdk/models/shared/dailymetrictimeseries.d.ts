import { SpeakeasyBase } from "../../../internal/utils";
import { DailySubEntityType } from "./dailysubentitytype";
import { TimeSeries } from "./timeseries";
/**
 * The DailyMetric that the TimeSeries represents.
 */
export declare enum DailyMetricTimeSeriesDailyMetricEnum {
    DailyMetricUnknown = "DAILY_METRIC_UNKNOWN",
    BusinessImpressionsDesktopMaps = "BUSINESS_IMPRESSIONS_DESKTOP_MAPS",
    BusinessImpressionsDesktopSearch = "BUSINESS_IMPRESSIONS_DESKTOP_SEARCH",
    BusinessImpressionsMobileMaps = "BUSINESS_IMPRESSIONS_MOBILE_MAPS",
    BusinessImpressionsMobileSearch = "BUSINESS_IMPRESSIONS_MOBILE_SEARCH",
    BusinessConversations = "BUSINESS_CONVERSATIONS",
    BusinessDirectionRequests = "BUSINESS_DIRECTION_REQUESTS",
    CallClicks = "CALL_CLICKS",
    WebsiteClicks = "WEBSITE_CLICKS",
    BusinessBookings = "BUSINESS_BOOKINGS",
    BusinessFoodOrders = "BUSINESS_FOOD_ORDERS",
    BusinessFoodMenuClicks = "BUSINESS_FOOD_MENU_CLICKS"
}
/**
 * Represents a single datapoint, where each datapoint is a DailyMetric-DailySubEntityType-TimeSeries tuple.
 */
export declare class DailyMetricTimeSeries extends SpeakeasyBase {
    /**
     * The DailyMetric that the TimeSeries represents.
     */
    dailyMetric?: DailyMetricTimeSeriesDailyMetricEnum;
    /**
     * Represents all possible subentity types that are associated with DailyMetrics.
     */
    dailySubEntityType?: DailySubEntityType;
    /**
     * Represents a timeseries.
     */
    timeSeries?: TimeSeries;
}
