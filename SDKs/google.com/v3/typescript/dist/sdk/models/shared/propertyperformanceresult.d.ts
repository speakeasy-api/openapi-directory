import { SpeakeasyBase } from "../../../internal/utils";
import { Date } from "./date";
/**
 * Difference in days between query date and check-in date in property's local timezone. Only present if `advanceBookingWindow` is specified in `aggregateBy` in the request.
 */
export declare enum PropertyPerformanceResultAdvanceBookingWindowEnum {
    AdvanceBookingWindowUnspecified = "ADVANCE_BOOKING_WINDOW_UNSPECIFIED",
    AdvanceBookingWindowSameDay = "ADVANCE_BOOKING_WINDOW_SAME_DAY",
    AdvanceBookingWindowNextDay = "ADVANCE_BOOKING_WINDOW_NEXT_DAY",
    AdvanceBookingWindowDays2To7 = "ADVANCE_BOOKING_WINDOW_DAYS_2_TO_7",
    AdvanceBookingWindowDays8To14 = "ADVANCE_BOOKING_WINDOW_DAYS_8_TO_14",
    AdvanceBookingWindowDays15To30 = "ADVANCE_BOOKING_WINDOW_DAYS_15_TO_30",
    AdvanceBookingWindowDays31To60 = "ADVANCE_BOOKING_WINDOW_DAYS_31_TO_60",
    AdvanceBookingWindowDays61To90 = "ADVANCE_BOOKING_WINDOW_DAYS_61_TO_90",
    AdvanceBookingWindowDays91To120 = "ADVANCE_BOOKING_WINDOW_DAYS_91_TO_120",
    AdvanceBookingWindowDays121To150 = "ADVANCE_BOOKING_WINDOW_DAYS_121_TO_150",
    AdvanceBookingWindowDays151To180 = "ADVANCE_BOOKING_WINDOW_DAYS_151_TO_180",
    AdvanceBookingWindowDaysOver180 = "ADVANCE_BOOKING_WINDOW_DAYS_OVER_180"
}
/**
 * The user’s device type. Only present if `deviceType` is specified in `aggregateBy` in the request.
 */
export declare enum PropertyPerformanceResultDeviceTypeEnum {
    DeviceUnspecified = "DEVICE_UNSPECIFIED",
    DeviceUnknown = "DEVICE_UNKNOWN",
    Desktop = "DESKTOP",
    Mobile = "MOBILE",
    Tablet = "TABLET"
}
/**
 * Number of nights between check-in and check-out dates specified by user. Only present if `lengthOfStay` is specified in `aggregateBy` in the request.
 */
export declare enum PropertyPerformanceResultLengthOfStayEnum {
    LengthOfStayUnspecified = "LENGTH_OF_STAY_UNSPECIFIED",
    LengthOfStayNights1 = "LENGTH_OF_STAY_NIGHTS_1",
    LengthOfStayNights2 = "LENGTH_OF_STAY_NIGHTS_2",
    LengthOfStayNights3 = "LENGTH_OF_STAY_NIGHTS_3",
    LengthOfStayNights4To7 = "LENGTH_OF_STAY_NIGHTS_4_TO_7",
    LengthOfStayNights8To14 = "LENGTH_OF_STAY_NIGHTS_8_TO_14",
    LengthOfStayNights15To21 = "LENGTH_OF_STAY_NIGHTS_15_TO_21",
    LengthOfStayNights22To30 = "LENGTH_OF_STAY_NIGHTS_22_TO_30",
    LengthOfStayNightsOver30 = "LENGTH_OF_STAY_NIGHTS_OVER_30"
}
/**
 * Requested number of people staying at the property. Only present if `partnerPropertyId` is specified in `aggregateBy` in the request.
 */
export declare enum PropertyPerformanceResultOccupancyEnum {
    OccupancyUnspecified = "OCCUPANCY_UNSPECIFIED",
    Occupancy1 = "OCCUPANCY_1",
    Occupancy2 = "OCCUPANCY_2",
    Occupancy3 = "OCCUPANCY_3",
    Occupancy4 = "OCCUPANCY_4",
    OccupancyOver4 = "OCCUPANCY_OVER_4"
}
/**
 * Represents a result from querying for the property performance report for an account.
 */
export declare class PropertyPerformanceResult extends SpeakeasyBase {
    /**
     * The total number of ad clicks that were recorded for this result.
     */
    adsClickCount?: string;
    /**
     * Equal to `ads_click_count` divided by `ads_impression_count`.
     */
    adsClickthroughRate?: number;
    /**
     * The total number of ad impressions that were recorded for this result.
     */
    adsImpressionCount?: string;
    /**
     * Difference in days between query date and check-in date in property's local timezone. Only present if `advanceBookingWindow` is specified in `aggregateBy` in the request.
     */
    advanceBookingWindow?: PropertyPerformanceResultAdvanceBookingWindowEnum;
    /**
     * Partner-specified brand for the property. Only present if `brand` is specified in `aggregateBy` in the request.
     */
    brand?: string;
    /**
     * The total number of free booking link clicks that were recorded for this result.
     */
    clickCount?: string;
    /**
     * Equal to `click_count` divided by `impression_count`.
     */
    clickthroughRate?: number;
    /**
     * Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp
     */
    date?: Date;
    /**
     * The user’s device type. Only present if `deviceType` is specified in `aggregateBy` in the request.
     */
    deviceType?: PropertyPerformanceResultDeviceTypeEnum;
    /**
     * Whether the user’s query indicated a strong interest in booking. Only present if `highIntentUsers` is specified in `aggregateBy` in the request.
     */
    highIntentUsers?: boolean;
    /**
     * The total number of free booking link impressions that were recorded for this result. This value is rounded to preserve user privacy.
     */
    impressionCount?: string;
    /**
     * Number of nights between check-in and check-out dates specified by user. Only present if `lengthOfStay` is specified in `aggregateBy` in the request.
     */
    lengthOfStay?: PropertyPerformanceResultLengthOfStayEnum;
    /**
     * Requested number of people staying at the property. Only present if `partnerPropertyId` is specified in `aggregateBy` in the request.
     */
    occupancy?: PropertyPerformanceResultOccupancyEnum;
    /**
     * Partner's property name. Only present if `partnerPropertyDisplayName` is specified in `aggregateBy` in the request.
     */
    partnerPropertyDisplayName?: string;
    /**
     * Partner's property ID. Only present if `partnerPropertyId` is specified in `aggregateBy` in the request.
     */
    partnerPropertyId?: string;
    /**
     * ISO 3116 region code of the country/region of the property. Only present if `propertyRegionCode` is specified in `aggregateBy` in the request
     */
    propertyRegionCode?: string;
    /**
     * ISO 3116 region code of the country/region of the user. Only present if `userRegionCode` is specified in `aggregateBy` in the request
     */
    userRegionCode?: string;
}
