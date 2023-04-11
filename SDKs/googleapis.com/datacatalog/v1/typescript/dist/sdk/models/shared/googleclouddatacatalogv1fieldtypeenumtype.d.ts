import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatacatalogV1FieldTypeEnumTypeEnumValue } from "./googleclouddatacatalogv1fieldtypeenumtypeenumvalue";
export declare class GoogleCloudDatacatalogV1FieldTypeEnumType extends SpeakeasyBase {
    /**
     * The set of allowed values for this enum. This set must not be empty and can include up to 100 allowed values. The display names of the values in this set must not be empty and must be case-insensitively unique within this set. The order of items in this set is preserved. This field can be used to create, remove, and reorder enum values. To rename enum values, use the `RenameTagTemplateFieldEnumValue` method.
     */
    allowedValues?: GoogleCloudDatacatalogV1FieldTypeEnumTypeEnumValue[];
}
