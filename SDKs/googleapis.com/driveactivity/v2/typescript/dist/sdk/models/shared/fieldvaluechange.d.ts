import { SpeakeasyBase } from "../../../internal/utils";
import { FieldValue } from "./fieldvalue";
/**
 * Change to a Field value.
 */
export declare class FieldValueChange extends SpeakeasyBase {
    /**
     * The human-readable display name for this field.
     */
    displayName?: string;
    /**
     * The ID of this field. Field IDs are unique within a Label.
     */
    fieldId?: string;
    /**
     * Contains a value of a Field.
     */
    newValue?: FieldValue;
    /**
     * Contains a value of a Field.
     */
    oldValue?: FieldValue;
}
