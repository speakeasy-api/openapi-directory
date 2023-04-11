import { SpeakeasyBase } from "../../../internal/utils";
import { FieldMetadata, FieldMetadataInput } from "./fieldmetadata";
/**
 * A person's physical address. May be a P.O. box or street address. All fields are optional.
 */
export declare class Address extends SpeakeasyBase {
    /**
     * The city of the address.
     */
    city?: string;
    /**
     * The country of the address.
     */
    country?: string;
    /**
     * The [ISO 3166-1 alpha-2](http://www.iso.org/iso/country_codes.htm) country code of the address.
     */
    countryCode?: string;
    /**
     * The extended address of the address; for example, the apartment number.
     */
    extendedAddress?: string;
    /**
     * Output only. The type of the address translated and formatted in the viewer's account locale or the `Accept-Language` HTTP header locale.
     */
    formattedType?: string;
    /**
     * The unstructured value of the address. If this is not set by the user it will be automatically constructed from structured values.
     */
    formattedValue?: string;
    /**
     * Metadata about a field.
     */
    metadata?: FieldMetadata;
    /**
     * The P.O. box of the address.
     */
    poBox?: string;
    /**
     * The postal code of the address.
     */
    postalCode?: string;
    /**
     * The region of the address; for example, the state or province.
     */
    region?: string;
    /**
     * The street address.
     */
    streetAddress?: string;
    /**
     * The type of the address. The type can be custom or one of these predefined values: * `home` * `work` * `other`
     */
    type?: string;
}
/**
 * A person's physical address. May be a P.O. box or street address. All fields are optional.
 */
export declare class AddressInput extends SpeakeasyBase {
    /**
     * The city of the address.
     */
    city?: string;
    /**
     * The country of the address.
     */
    country?: string;
    /**
     * The [ISO 3166-1 alpha-2](http://www.iso.org/iso/country_codes.htm) country code of the address.
     */
    countryCode?: string;
    /**
     * The extended address of the address; for example, the apartment number.
     */
    extendedAddress?: string;
    /**
     * The unstructured value of the address. If this is not set by the user it will be automatically constructed from structured values.
     */
    formattedValue?: string;
    /**
     * Metadata about a field.
     */
    metadata?: FieldMetadataInput;
    /**
     * The P.O. box of the address.
     */
    poBox?: string;
    /**
     * The postal code of the address.
     */
    postalCode?: string;
    /**
     * The region of the address; for example, the state or province.
     */
    region?: string;
    /**
     * The street address.
     */
    streetAddress?: string;
    /**
     * The type of the address. The type can be custom or one of these predefined values: * `home` * `work` * `other`
     */
    type?: string;
}
