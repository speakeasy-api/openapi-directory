import { SpeakeasyBase } from "../../../internal/utils";
import { PropertyReference } from "./propertyreference";
/**
 * The direction to order by. Defaults to `ASCENDING`.
 */
export declare enum PropertyOrderDirectionEnum {
    DirectionUnspecified = "DIRECTION_UNSPECIFIED",
    Ascending = "ASCENDING",
    Descending = "DESCENDING"
}
/**
 * The desired order for a specific property.
 */
export declare class PropertyOrder extends SpeakeasyBase {
    /**
     * The direction to order by. Defaults to `ASCENDING`.
     */
    direction?: PropertyOrderDirectionEnum;
    /**
     * A reference to a property relative to the kind expressions.
     */
    property?: PropertyReference;
}
