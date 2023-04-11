import { SpeakeasyBase } from "../../../internal/utils";
import { PropertyReference } from "./propertyreference";
/**
 * A representation of a property in a projection.
 */
export declare class Projection extends SpeakeasyBase {
    /**
     * A reference to a property relative to the kind expressions.
     */
    property?: PropertyReference;
}
