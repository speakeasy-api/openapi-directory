import { SpeakeasyBase } from "../../../internal/utils";
import { DoubleMatcher } from "./doublematcher";
import { ListMatcher } from "./listmatcher";
import { StringMatcher } from "./stringmatcher";
/**
 * Specifies the way to match a ProtobufWkt::Value. Primitive values and ListValue are supported. StructValue is not supported and is always not matched. [#next-free-field: 7]
 */
export declare class ValueMatcher extends SpeakeasyBase {
    /**
     * If specified, a match occurs if and only if the target value is a bool value and is equal to this field.
     */
    boolMatch?: boolean;
    /**
     * Specifies the way to match a double value.
     */
    doubleMatch?: DoubleMatcher;
    /**
     * Specifies the way to match a list value.
     */
    listMatch?: ListMatcher;
    /**
     * NullMatch is an empty message to specify a null value.
     */
    nullMatch?: Record<string, any>;
    /**
     * If specified, value match will be performed based on whether the path is referring to a valid primitive value in the metadata. If the path is referring to a non-primitive value, the result is always not matched.
     */
    presentMatch?: boolean;
    /**
     * Specifies the way to match a string. [#next-free-field: 7]
     */
    stringMatch?: StringMatcher;
}
