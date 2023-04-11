import { SpeakeasyBase } from "../../../internal/utils";
import { FieldReference } from "./fieldreference";
/**
 * The unary operator to apply.
 */
export declare enum UnaryFilterOpEnum {
    OperatorUnspecified = "OPERATOR_UNSPECIFIED",
    IsNan = "IS_NAN",
    IsNull = "IS_NULL",
    IsNotNan = "IS_NOT_NAN",
    IsNotNull = "IS_NOT_NULL"
}
/**
 * A filter with a single operand.
 */
export declare class UnaryFilter extends SpeakeasyBase {
    /**
     * A reference to a field in a document, ex: `stats.operations`.
     */
    field?: FieldReference;
    /**
     * The unary operator to apply.
     */
    op?: UnaryFilterOpEnum;
}
