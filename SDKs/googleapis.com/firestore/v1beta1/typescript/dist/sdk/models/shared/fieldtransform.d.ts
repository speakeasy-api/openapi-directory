import { SpeakeasyBase } from "../../../internal/utils";
import { ArrayValue } from "./arrayvalue";
import { Value } from "./value";
/**
 * Sets the field to the given server value.
 */
export declare enum FieldTransformSetToServerValueEnum {
    ServerValueUnspecified = "SERVER_VALUE_UNSPECIFIED",
    RequestTime = "REQUEST_TIME"
}
/**
 * A transformation of a field of the document.
 */
export declare class FieldTransform extends SpeakeasyBase {
    /**
     * An array value.
     */
    appendMissingElements?: ArrayValue;
    /**
     * The path of the field. See Document.fields for the field path syntax reference.
     */
    fieldPath?: string;
    /**
     * A message that can hold any of the supported value types.
     */
    increment?: Value;
    /**
     * A message that can hold any of the supported value types.
     */
    maximum?: Value;
    /**
     * A message that can hold any of the supported value types.
     */
    minimum?: Value;
    /**
     * An array value.
     */
    removeAllFromArray?: ArrayValue;
    /**
     * Sets the field to the given server value.
     */
    setToServerValue?: FieldTransformSetToServerValueEnum;
}
