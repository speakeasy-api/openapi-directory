import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleTypeDate } from "./googletypedate";
import { GoogleTypeTimeOfDay } from "./googletypetimeofday";
/**
 * day of week
 */
export declare enum GooglePrivacyDlpV2ValueDayOfWeekValueEnum {
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
 * Set of primitive values supported by the system. Note that for the purposes of inspection or transformation, the number of bytes considered to comprise a 'Value' is based on its representation as a UTF-8 encoded string. For example, if 'integer_value' is set to 123456789, the number of bytes would be counted as 9, even though an int64 only holds up to 8 bytes of data.
 */
export declare class GooglePrivacyDlpV2Value extends SpeakeasyBase {
    /**
     * boolean
     */
    booleanValue?: boolean;
    /**
     * Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp
     */
    dateValue?: GoogleTypeDate;
    /**
     * day of week
     */
    dayOfWeekValue?: GooglePrivacyDlpV2ValueDayOfWeekValueEnum;
    /**
     * float
     */
    floatValue?: number;
    /**
     * integer
     */
    integerValue?: string;
    /**
     * string
     */
    stringValue?: string;
    /**
     * Represents a time of day. The date and time zone are either not significant or are specified elsewhere. An API may choose to allow leap seconds. Related types are google.type.Date and `google.protobuf.Timestamp`.
     */
    timeValue?: GoogleTypeTimeOfDay;
    /**
     * timestamp
     */
    timestampValue?: string;
}
