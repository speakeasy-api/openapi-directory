import { SpeakeasyBase } from "../../../internal/utils";
import { FieldMetadata, FieldMetadataInput } from "./fieldmetadata";
/**
 * A person's gender.
 */
export declare class Gender extends SpeakeasyBase {
    /**
     * Free form text field for pronouns that should be used to address the person. Common values are: * `he`/`him` * `she`/`her` * `they`/`them`
     */
    addressMeAs?: string;
    /**
     * Output only. The value of the gender translated and formatted in the viewer's account locale or the `Accept-Language` HTTP header locale. Unspecified or custom value are not localized.
     */
    formattedValue?: string;
    /**
     * Metadata about a field.
     */
    metadata?: FieldMetadata;
    /**
     * The gender for the person. The gender can be custom or one of these predefined values: * `male` * `female` * `unspecified`
     */
    value?: string;
}
/**
 * A person's gender.
 */
export declare class GenderInput extends SpeakeasyBase {
    /**
     * Free form text field for pronouns that should be used to address the person. Common values are: * `he`/`him` * `she`/`her` * `they`/`them`
     */
    addressMeAs?: string;
    /**
     * Metadata about a field.
     */
    metadata?: FieldMetadataInput;
    /**
     * The gender for the person. The gender can be custom or one of these predefined values: * `male` * `female` * `unspecified`
     */
    value?: string;
}
