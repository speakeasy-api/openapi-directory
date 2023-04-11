import { SpeakeasyBase } from "../../../internal/utils";
import { FieldReference } from "./fieldreference";
/**
 * The direction to order by. Defaults to `ASCENDING`.
 */
export declare enum OrderDirectionEnum {
    DirectionUnspecified = "DIRECTION_UNSPECIFIED",
    Ascending = "ASCENDING",
    Descending = "DESCENDING"
}
/**
 * An order on a field.
 */
export declare class Order extends SpeakeasyBase {
    /**
     * The direction to order by. Defaults to `ASCENDING`.
     */
    direction?: OrderDirectionEnum;
    /**
     * A reference to a field in a document, ex: `stats.operations`.
     */
    field?: FieldReference;
}
