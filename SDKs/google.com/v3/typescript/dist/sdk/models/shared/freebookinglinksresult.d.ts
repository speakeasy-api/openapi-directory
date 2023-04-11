import { SpeakeasyBase } from "../../../internal/utils";
import { Date } from "./date";
/**
 * The user’s device type. Only present if `deviceType` is specified in `aggregateBy` in the request.
 */
export declare enum FreeBookingLinksResultDeviceTypeEnum {
    DeviceUnspecified = "DEVICE_UNSPECIFIED",
    DeviceUnknown = "DEVICE_UNKNOWN",
    Desktop = "DESKTOP",
    Mobile = "MOBILE",
    Tablet = "TABLET"
}
/**
 * **DEPRECATED:** Use `PropertyPerformanceResult` with `PropertyPerformanceReportService` instead. Represents a result from querying for free booking link stats for an account.
 */
export declare class FreeBookingLinksResult extends SpeakeasyBase {
    /**
     * The total number of clicks that were recorded for this result.
     */
    clickCount?: string;
    /**
     * Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp
     */
    date?: Date;
    /**
     * The user’s device type. Only present if `deviceType` is specified in `aggregateBy` in the request.
     */
    deviceType?: FreeBookingLinksResultDeviceTypeEnum;
    /**
     * Partner's hotel name. Only present if `partnerHotelDisplayName` is specified in `aggregateBy` in the request.
     */
    partnerHotelDisplayName?: string;
    /**
     * Partner's hotel ID. Only present if `partnerHotelId` is specified in `aggregateBy` in the request.
     */
    partnerHotelId?: string;
    /**
     * ISO 3116 region code of the country/region of the user. Only present if `userRegionCode` is specified in `aggregateBy` in the request
     */
    userRegionCode?: string;
}
