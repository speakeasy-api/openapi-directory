import { SpeakeasyBase } from "../../../internal/utils";
import { ValueMatcher } from "./valuematcher";
/**
 * Specifies the way to match a list value.
 */
export declare class ListMatcher extends SpeakeasyBase {
    /**
     * Specifies the way to match a ProtobufWkt::Value. Primitive values and ListValue are supported. StructValue is not supported and is always not matched. [#next-free-field: 7]
     */
    oneOf?: ValueMatcher;
}
