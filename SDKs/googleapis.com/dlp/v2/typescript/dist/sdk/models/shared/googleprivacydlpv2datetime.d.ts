import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2TimeZone } from "./googleprivacydlpv2timezone";
import { GoogleTypeDate } from "./googletypedate";
import { GoogleTypeTimeOfDay } from "./googletypetimeofday";
/**
 * Day of week
 */
export declare enum GooglePrivacyDlpV2DateTimeDayOfWeekEnum {
    DayOfWeekUnspecified = "DAY_OF_WEEK_UNSPECIFIED",
    Monday = "MONDAY",
    Tuesday = "TUESDAY",
    Wednesday = "WEDNESDAY",
    Thursday = "THURSDAY",
    Friday = "FRIDAY",
    Saturday = "SATURDAY",
    Sunday = "SUNDAY"
}
/**
 * Message for a date time object. e.g. 2018-01-01, 5th August.
 */
export declare class GooglePrivacyDlpV2DateTime extends SpeakeasyBase {
    /**
     * Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp
     */
    date?: GoogleTypeDate;
    /**
     * Day of week
     */
    dayOfWeek?: GooglePrivacyDlpV2DateTimeDayOfWeekEnum;
    /**
     * Represents a time of day. The date and time zone are either not significant or are specified elsewhere. An API may choose to allow leap seconds. Related types are google.type.Date and `google.protobuf.Timestamp`.
     */
    time?: GoogleTypeTimeOfDay;
    /**
     * Time zone of the date time object.
     */
    timeZone?: GooglePrivacyDlpV2TimeZone;
}
