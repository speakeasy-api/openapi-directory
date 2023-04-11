import { SpeakeasyBase } from "../../../internal/utils";
import { FieldMetadata, FieldMetadataInput } from "./fieldmetadata";
/**
 * A skill that the person has.
 */
export declare class Skill extends SpeakeasyBase {
    /**
     * Metadata about a field.
     */
    metadata?: FieldMetadata;
    /**
     * The skill; for example, `underwater basket weaving`.
     */
    value?: string;
}
/**
 * A skill that the person has.
 */
export declare class SkillInput extends SpeakeasyBase {
    /**
     * Metadata about a field.
     */
    metadata?: FieldMetadataInput;
    /**
     * The skill; for example, `underwater basket weaving`.
     */
    value?: string;
}
