import { SpeakeasyBase } from "../../../internal/utils";
import { Date } from "./date";
import { FieldMetadata, FieldMetadataInput } from "./fieldmetadata";
/**
 * An event related to the person.
 */
export declare class Event extends SpeakeasyBase {
    /**
     * Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp
     */
    date?: Date;
    /**
     * Output only. The type of the event translated and formatted in the viewer's account locale or the `Accept-Language` HTTP header locale.
     */
    formattedType?: string;
    /**
     * Metadata about a field.
     */
    metadata?: FieldMetadata;
    /**
     * The type of the event. The type can be custom or one of these predefined values: * `anniversary` * `other`
     */
    type?: string;
}
/**
 * An event related to the person.
 */
export declare class EventInput extends SpeakeasyBase {
    /**
     * Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp
     */
    date?: Date;
    /**
     * Metadata about a field.
     */
    metadata?: FieldMetadataInput;
    /**
     * The type of the event. The type can be custom or one of these predefined values: * `anniversary` * `other`
     */
    type?: string;
}
