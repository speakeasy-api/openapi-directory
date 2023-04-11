import { SpeakeasyBase } from "../../../internal/utils";
import { FieldMetadata, FieldMetadataInput } from "./fieldmetadata";
/**
 * A person's locale preference.
 */
export declare class Locale extends SpeakeasyBase {
    /**
     * Metadata about a field.
     */
    metadata?: FieldMetadata;
    /**
     * The well-formed [IETF BCP 47](https://tools.ietf.org/html/bcp47) language tag representing the locale.
     */
    value?: string;
}
/**
 * A person's locale preference.
 */
export declare class LocaleInput extends SpeakeasyBase {
    /**
     * Metadata about a field.
     */
    metadata?: FieldMetadataInput;
    /**
     * The well-formed [IETF BCP 47](https://tools.ietf.org/html/bcp47) language tag representing the locale.
     */
    value?: string;
}
