import { SpeakeasyBase } from "../../../internal/utils";
import { PropertyDefinition } from "./propertydefinition";
/**
 * The options for object properties.
 */
export declare class ObjectPropertyOptions extends SpeakeasyBase {
    /**
     * The properties of the sub-object. These properties represent a nested object. For example, if this property represents a postal address, the subobjectProperties might be named *street*, *city*, and *state*. The maximum number of elements is 1000.
     */
    subobjectProperties?: PropertyDefinition[];
}
