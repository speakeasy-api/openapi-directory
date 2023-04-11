import { SpeakeasyBase } from "../../../internal/utils";
import { FieldMetadata, FieldMetadataInput } from "./fieldmetadata";
/**
 * **DEPRECATED**: Please use `person.locations` instead. A person's past or current residence.
 */
export declare class Residence extends SpeakeasyBase {
    /**
     * True if the residence is the person's current residence; false if the residence is a past residence.
     */
    current?: boolean;
    /**
     * Metadata about a field.
     */
    metadata?: FieldMetadata;
    /**
     * The address of the residence.
     */
    value?: string;
}
/**
 * **DEPRECATED**: Please use `person.locations` instead. A person's past or current residence.
 */
export declare class ResidenceInput extends SpeakeasyBase {
    /**
     * True if the residence is the person's current residence; false if the residence is a past residence.
     */
    current?: boolean;
    /**
     * Metadata about a field.
     */
    metadata?: FieldMetadataInput;
    /**
     * The address of the residence.
     */
    value?: string;
}
