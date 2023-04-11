import { SpeakeasyBase } from "../../../internal/utils";
import { EnterpriseCrmEventbusProtoValueType } from "./enterprisecrmeventbusprotovaluetype";
/**
 * Operator used to evaluate the condition. Please note that an operator with an inappropriate key/value operand will result in IllegalArgumentException, e.g. CONTAINS with boolean key/value pair.
 */
export declare enum EnterpriseCrmEventbusProtoConditionOperatorEnum {
    Unset = "UNSET",
    Equals = "EQUALS",
    Contains = "CONTAINS",
    LessThan = "LESS_THAN",
    GreaterThan = "GREATER_THAN",
    Exists = "EXISTS",
    DoesNotExist = "DOES_NOT_EXIST",
    IsEmpty = "IS_EMPTY",
    IsNotEmpty = "IS_NOT_EMPTY"
}
/**
 * Condition that uses `operator` to evaluate the key against the value.
 */
export declare class EnterpriseCrmEventbusProtoCondition extends SpeakeasyBase {
    /**
     * Key that's evaluated against the `value`. Please note the data type of the runtime value associated with the key should match the data type of `value`, else an IllegalArgumentException is thrown.
     */
    eventPropertyKey?: string;
    /**
     * Operator used to evaluate the condition. Please note that an operator with an inappropriate key/value operand will result in IllegalArgumentException, e.g. CONTAINS with boolean key/value pair.
     */
    operator?: EnterpriseCrmEventbusProtoConditionOperatorEnum;
    /**
     * Used for define type for values. Currently supported value types include int, string, double, array, and any proto message.
     */
    value?: EnterpriseCrmEventbusProtoValueType;
}
