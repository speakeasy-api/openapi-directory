import { SpeakeasyBase } from "../../../internal/utils";
import { FieldMetadata, FieldMetadataInput } from "./fieldmetadata";
/**
 * A person's email address.
 */
export declare class EmailAddress extends SpeakeasyBase {
    /**
     * The display name of the email.
     */
    displayName?: string;
    /**
     * Output only. The type of the email address translated and formatted in the viewer's account locale or the `Accept-Language` HTTP header locale.
     */
    formattedType?: string;
    /**
     * Metadata about a field.
     */
    metadata?: FieldMetadata;
    /**
     * The type of the email address. The type can be custom or one of these predefined values: * `home` * `work` * `other`
     */
    type?: string;
    /**
     * The email address.
     */
    value?: string;
}
/**
 * A person's email address.
 */
export declare class EmailAddressInput extends SpeakeasyBase {
    /**
     * The display name of the email.
     */
    displayName?: string;
    /**
     * Metadata about a field.
     */
    metadata?: FieldMetadataInput;
    /**
     * The type of the email address. The type can be custom or one of these predefined values: * `home` * `work` * `other`
     */
    type?: string;
    /**
     * The email address.
     */
    value?: string;
}
