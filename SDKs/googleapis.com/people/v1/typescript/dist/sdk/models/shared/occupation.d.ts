import { SpeakeasyBase } from "../../../internal/utils";
import { FieldMetadata, FieldMetadataInput } from "./fieldmetadata";
/**
 * A person's occupation.
 */
export declare class Occupation extends SpeakeasyBase {
    /**
     * Metadata about a field.
     */
    metadata?: FieldMetadata;
    /**
     * The occupation; for example, `carpenter`.
     */
    value?: string;
}
/**
 * A person's occupation.
 */
export declare class OccupationInput extends SpeakeasyBase {
    /**
     * Metadata about a field.
     */
    metadata?: FieldMetadataInput;
    /**
     * The occupation; for example, `carpenter`.
     */
    value?: string;
}
