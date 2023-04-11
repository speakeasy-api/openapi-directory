import { SpeakeasyBase } from "../../../internal/utils";
import { Source, SourceInput } from "./source";
/**
 * Metadata about a field.
 */
export declare class FieldMetadata extends SpeakeasyBase {
    /**
     * Output only. True if the field is the primary field for all sources in the person. Each person will have at most one field with `primary` set to true.
     */
    primary?: boolean;
    /**
     * The source of a field.
     */
    source?: Source;
    /**
     * True if the field is the primary field for the source. Each source must have at most one field with `source_primary` set to true.
     */
    sourcePrimary?: boolean;
    /**
     * Output only. True if the field is verified; false if the field is unverified. A verified field is typically a name, email address, phone number, or website that has been confirmed to be owned by the person.
     */
    verified?: boolean;
}
/**
 * Metadata about a field.
 */
export declare class FieldMetadataInput extends SpeakeasyBase {
    /**
     * The source of a field.
     */
    source?: SourceInput;
    /**
     * True if the field is the primary field for the source. Each source must have at most one field with `source_primary` set to true.
     */
    sourcePrimary?: boolean;
}
