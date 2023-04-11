import { SpeakeasyBase } from "../../../internal/utils";
import { FieldMetadata, FieldMetadataInput } from "./fieldmetadata";
/**
 * One of the person's interests.
 */
export declare class Interest extends SpeakeasyBase {
    /**
     * Metadata about a field.
     */
    metadata?: FieldMetadata;
    /**
     * The interest; for example, `stargazing`.
     */
    value?: string;
}
/**
 * One of the person's interests.
 */
export declare class InterestInput extends SpeakeasyBase {
    /**
     * Metadata about a field.
     */
    metadata?: FieldMetadataInput;
    /**
     * The interest; for example, `stargazing`.
     */
    value?: string;
}
