import { SpeakeasyBase } from "../../../internal/utils";
import { Date } from "./date";
/**
 * The user’s device type. If `deviceType` is not a value of the `aggregateBy` parameter in the request call, then the `deviceType` field is not returned in the `Key`.
 */
export declare enum KeyDeviceTypeEnum {
    DeviceUnspecified = "DEVICE_UNSPECIFIED",
    DeviceUnknown = "DEVICE_UNKNOWN",
    Desktop = "DESKTOP",
    Mobile = "MOBILE",
    Tablet = "TABLET"
}
/**
 * Key of a result.
 */
export declare class Key extends SpeakeasyBase {
    /**
     * The number of days in advance the user wants to book the itinerary. If `advanceBookingWindow` is not a value of the `aggregateBy` parameter in the request call, then the `advanceBookingWindow` field is not returned in the `Key`.
     */
    advanceBookingWindow?: number;
    /**
     * Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp
     */
    checkinDate?: Date;
    /**
     * Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp
     */
    date?: Date;
    /**
     * The user’s device type. If `deviceType` is not a value of the `aggregateBy` parameter in the request call, then the `deviceType` field is not returned in the `Key`.
     */
    deviceType?: KeyDeviceTypeEnum;
    /**
     * CLDR region code of the country/region of the hotel. If `hotelRegionCode` is not a value of the `aggregateBy` parameter in the request call, then the `hotelRegionCode` field is not returned in the `Key`.
     */
    hotelRegionCode?: string;
    /**
     * The number of nights for the itinerary. If `lengthOfStayDays` is not a value of the `aggregateBy` parameter in the request call, then the `lengthOfStayDays` field is not returned in the `Key`.
     */
    lengthOfStayDays?: number;
    /**
     * The total occupancy of the itinerary. If `occupancy` is not a value of the `aggregateBy` parameter in the request call, then the `occupancy` field is not returned in the `Key`.
     */
    occupancy?: number;
    /**
     * Partner's hotel ID. If `partnerHotelId` is not a value of the `aggregateBy` parameter in the request call, then the `partnerHotelId` field is not returned in the `Key`.
     */
    partnerHotelId?: string;
    /**
     * ISO 3116 region code of the country/region of the user. If `userRegionCode` is not a value of the `aggregateBy` parameter in the request call, then the `userRegionCode` field is not returned in the `Key`.
     */
    userRegionCode?: string;
}
