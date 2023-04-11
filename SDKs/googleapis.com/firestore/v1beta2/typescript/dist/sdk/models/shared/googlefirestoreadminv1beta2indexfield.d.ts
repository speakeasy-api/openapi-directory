import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Indicates that this field supports operations on `array_value`s.
 */
export declare enum GoogleFirestoreAdminV1beta2IndexFieldArrayConfigEnum {
    ArrayConfigUnspecified = "ARRAY_CONFIG_UNSPECIFIED",
    Contains = "CONTAINS"
}
/**
 * Indicates that this field supports ordering by the specified order or comparing using =, <, <=, >, >=.
 */
export declare enum GoogleFirestoreAdminV1beta2IndexFieldOrderEnum {
    OrderUnspecified = "ORDER_UNSPECIFIED",
    Ascending = "ASCENDING",
    Descending = "DESCENDING"
}
/**
 * A field in an index. The field_path describes which field is indexed, the value_mode describes how the field value is indexed.
 */
export declare class GoogleFirestoreAdminV1beta2IndexField extends SpeakeasyBase {
    /**
     * Indicates that this field supports operations on `array_value`s.
     */
    arrayConfig?: GoogleFirestoreAdminV1beta2IndexFieldArrayConfigEnum;
    /**
     * Can be __name__. For single field indexes, this must match the name of the field or may be omitted.
     */
    fieldPath?: string;
    /**
     * Indicates that this field supports ordering by the specified order or comparing using =, <, <=, >, >=.
     */
    order?: GoogleFirestoreAdminV1beta2IndexFieldOrderEnum;
}
