import { SpeakeasyBase } from "../../../internal/utils";
import { Date } from "./date";
import { FieldMetadata, FieldMetadataInput } from "./fieldmetadata";
/**
 * A person's birthday. At least one of the `date` and `text` fields are specified. The `date` and `text` fields typically represent the same date, but are not guaranteed to. Clients should always set the `date` field when mutating birthdays.
 */
export declare class Birthday extends SpeakeasyBase {
    /**
     * Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp
     */
    date?: Date;
    /**
     * Metadata about a field.
     */
    metadata?: FieldMetadata;
    /**
     * Prefer to use the `date` field if set. A free-form string representing the user's birthday. This value is not validated.
     */
    text?: string;
}
/**
 * A person's birthday. At least one of the `date` and `text` fields are specified. The `date` and `text` fields typically represent the same date, but are not guaranteed to. Clients should always set the `date` field when mutating birthdays.
 */
export declare class BirthdayInput extends SpeakeasyBase {
    /**
     * Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp
     */
    date?: Date;
    /**
     * Metadata about a field.
     */
    metadata?: FieldMetadataInput;
    /**
     * Prefer to use the `date` field if set. A free-form string representing the user's birthday. This value is not validated.
     */
    text?: string;
}
