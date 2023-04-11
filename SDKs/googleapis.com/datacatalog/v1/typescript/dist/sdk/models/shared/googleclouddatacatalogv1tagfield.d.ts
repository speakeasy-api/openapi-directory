import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatacatalogV1TagFieldEnumValue } from "./googleclouddatacatalogv1tagfieldenumvalue";
/**
 * Contains the value and additional information on a field within a Tag.
 */
export declare class GoogleCloudDatacatalogV1TagField extends SpeakeasyBase {
    /**
     * The value of a tag field with a boolean type.
     */
    boolValue?: boolean;
    /**
     * Output only. The display name of this field.
     */
    displayName?: string;
    /**
     * The value of a tag field with a double type.
     */
    doubleValue?: number;
    /**
     * An enum value.
     */
    enumValue?: GoogleCloudDatacatalogV1TagFieldEnumValue;
    /**
     * Output only. The order of this field with respect to other fields in this tag. Can be set by Tag. For example, a higher value can indicate a more important field. The value can be negative. Multiple fields can have the same order, and field orders within a tag don't have to be sequential.
     */
    order?: number;
    /**
     * The value of a tag field with a rich text type. The maximum length is 10 MiB as this value holds HTML descriptions including encoded images. The maximum length of the text without images is 100 KiB.
     */
    richtextValue?: string;
    /**
     * The value of a tag field with a string type. The maximum length is 2000 UTF-8 characters.
     */
    stringValue?: string;
    /**
     * The value of a tag field with a timestamp type.
     */
    timestampValue?: string;
}
/**
 * Contains the value and additional information on a field within a Tag.
 */
export declare class GoogleCloudDatacatalogV1TagFieldInput extends SpeakeasyBase {
    /**
     * The value of a tag field with a boolean type.
     */
    boolValue?: boolean;
    /**
     * The value of a tag field with a double type.
     */
    doubleValue?: number;
    /**
     * An enum value.
     */
    enumValue?: GoogleCloudDatacatalogV1TagFieldEnumValue;
    /**
     * The value of a tag field with a rich text type. The maximum length is 10 MiB as this value holds HTML descriptions including encoded images. The maximum length of the text without images is 100 KiB.
     */
    richtextValue?: string;
    /**
     * The value of a tag field with a string type. The maximum length is 2000 UTF-8 characters.
     */
    stringValue?: string;
    /**
     * The value of a tag field with a timestamp type.
     */
    timestampValue?: string;
}
