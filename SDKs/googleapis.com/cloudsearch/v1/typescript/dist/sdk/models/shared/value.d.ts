import { SpeakeasyBase } from "../../../internal/utils";
import { Date } from "./date";
/**
 * Definition of a single value with generic type.
 */
export declare class Value extends SpeakeasyBase {
    booleanValue?: boolean;
    /**
     * Represents a whole calendar date, for example a date of birth. The time of day and time zone are either specified elsewhere or are not significant. The date is relative to the [Proleptic Gregorian Calendar](https://en.wikipedia.org/wiki/Proleptic_Gregorian_calendar). The date must be a valid calendar date between the year 1 and 9999.
     */
    dateValue?: Date;
    doubleValue?: number;
    integerValue?: string;
    stringValue?: string;
    timestampValue?: string;
}
