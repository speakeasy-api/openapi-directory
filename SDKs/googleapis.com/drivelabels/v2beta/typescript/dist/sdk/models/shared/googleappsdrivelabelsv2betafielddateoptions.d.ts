import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleTypeDate } from "./googletypedate";
/**
 * Localized date formatting option. Field values are rendered in this format according to their locale.
 */
export declare enum GoogleAppsDriveLabelsV2betaFieldDateOptionsDateFormatTypeEnum {
    DateFormatUnspecified = "DATE_FORMAT_UNSPECIFIED",
    LongDate = "LONG_DATE",
    ShortDate = "SHORT_DATE"
}
/**
 * Options for the date field type.
 */
export declare class GoogleAppsDriveLabelsV2betaFieldDateOptions extends SpeakeasyBase {
    /**
     * Output only. ICU date format.
     */
    dateFormat?: string;
    /**
     * Localized date formatting option. Field values are rendered in this format according to their locale.
     */
    dateFormatType?: GoogleAppsDriveLabelsV2betaFieldDateOptionsDateFormatTypeEnum;
    /**
     * Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp
     */
    maxValue?: GoogleTypeDate;
    /**
     * Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp
     */
    minValue?: GoogleTypeDate;
}
/**
 * Options for the date field type.
 */
export declare class GoogleAppsDriveLabelsV2betaFieldDateOptionsInput extends SpeakeasyBase {
    /**
     * Localized date formatting option. Field values are rendered in this format according to their locale.
     */
    dateFormatType?: GoogleAppsDriveLabelsV2betaFieldDateOptionsDateFormatTypeEnum;
    /**
     * Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp
     */
    maxValue?: GoogleTypeDate;
    /**
     * Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp
     */
    minValue?: GoogleTypeDate;
}
