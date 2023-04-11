import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatacatalogV1beta1TagFieldEnumValue } from "./googleclouddatacatalogv1beta1tagfieldenumvalue";
/**
 * Contains the value and supporting information for a field within a Tag.
 */
export declare class GoogleCloudDatacatalogV1beta1TagField extends SpeakeasyBase {
    /**
     * Holds the value for a tag field with boolean type.
     */
    boolValue?: boolean;
    /**
     * Output only. The display name of this field.
     */
    displayName?: string;
    /**
     * Holds the value for a tag field with double type.
     */
    doubleValue?: number;
    /**
     * Holds an enum value.
     */
    enumValue?: GoogleCloudDatacatalogV1beta1TagFieldEnumValue;
    /**
     * Output only. The order of this field with respect to other fields in this tag. It can be set in Tag. For example, a higher value can indicate a more important field. The value can be negative. Multiple fields can have the same order, and field orders within a tag do not have to be sequential.
     */
    order?: number;
    /**
     * Holds the value for a tag field with string type.
     */
    stringValue?: string;
    /**
     * Holds the value for a tag field with timestamp type.
     */
    timestampValue?: string;
}
/**
 * Contains the value and supporting information for a field within a Tag.
 */
export declare class GoogleCloudDatacatalogV1beta1TagFieldInput extends SpeakeasyBase {
    /**
     * Holds the value for a tag field with boolean type.
     */
    boolValue?: boolean;
    /**
     * Holds the value for a tag field with double type.
     */
    doubleValue?: number;
    /**
     * Holds an enum value.
     */
    enumValue?: GoogleCloudDatacatalogV1beta1TagFieldEnumValue;
    /**
     * Holds the value for a tag field with string type.
     */
    stringValue?: string;
    /**
     * Holds the value for a tag field with timestamp type.
     */
    timestampValue?: string;
}
