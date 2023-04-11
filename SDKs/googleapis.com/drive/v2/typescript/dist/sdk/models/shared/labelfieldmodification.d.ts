import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A modification to a label's field.
 */
export declare class LabelFieldModification extends SpeakeasyBase {
    /**
     * The ID of the field to be modified.
     */
    fieldId?: string;
    /**
     * This is always drive#labelFieldModification.
     */
    kind?: string;
    /**
     * Replaces a dateString field with these new values. The values must be strings in the RFC 3339 full-date format: YYYY-MM-DD.
     */
    setDateValues?: Date[];
    /**
     * Replaces an integer field with these new values.
     */
    setIntegerValues?: string[];
    /**
     * Replaces a selection field with these new values.
     */
    setSelectionValues?: string[];
    /**
     * Replaces a text field with these new values.
     */
    setTextValues?: string[];
    /**
     * Replaces a user field with these new values. The values must be valid email addresses.
     */
    setUserValues?: string[];
    /**
     * Unsets the values for this field.
     */
    unsetValues?: boolean;
}
