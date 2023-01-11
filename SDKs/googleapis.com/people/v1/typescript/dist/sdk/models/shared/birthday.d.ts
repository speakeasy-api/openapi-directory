import { SpeakeasyBase } from "../../../internal/utils";
import { Date } from "./date";
import { FieldMetadata } from "./fieldmetadata";
import { FieldMetadataInput } from "./fieldmetadata";
/**
 * A person's birthday. At least one of the `date` and `text` fields are specified. The `date` and `text` fields typically represent the same date, but are not guaranteed to. Clients should always set the `date` field when mutating birthdays.
**/
export declare class Birthday extends SpeakeasyBase {
    date?: Date;
    metadata?: FieldMetadata;
    text?: string;
}
/**
 * A person's birthday. At least one of the `date` and `text` fields are specified. The `date` and `text` fields typically represent the same date, but are not guaranteed to. Clients should always set the `date` field when mutating birthdays.
**/
export declare class BirthdayInput extends SpeakeasyBase {
    date?: Date;
    metadata?: FieldMetadataInput;
    text?: string;
}
