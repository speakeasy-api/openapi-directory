import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatacatalogV1beta1FieldTypeEnumType } from "./googleclouddatacatalogv1beta1fieldtypeenumtype";
/**
 * Represents primitive types - string, bool etc.
 */
export declare enum GoogleCloudDatacatalogV1beta1FieldTypePrimitiveTypeEnum {
    PrimitiveTypeUnspecified = "PRIMITIVE_TYPE_UNSPECIFIED",
    Double = "DOUBLE",
    String = "STRING",
    Bool = "BOOL",
    Timestamp = "TIMESTAMP"
}
export declare class GoogleCloudDatacatalogV1beta1FieldType extends SpeakeasyBase {
    enumType?: GoogleCloudDatacatalogV1beta1FieldTypeEnumType;
    /**
     * Represents primitive types - string, bool etc.
     */
    primitiveType?: GoogleCloudDatacatalogV1beta1FieldTypePrimitiveTypeEnum;
}
