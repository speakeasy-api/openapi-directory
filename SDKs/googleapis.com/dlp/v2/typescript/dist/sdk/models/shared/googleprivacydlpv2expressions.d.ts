import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2Conditions } from "./googleprivacydlpv2conditions";
/**
 * The operator to apply to the result of conditions. Default and currently only supported value is `AND`.
 */
export declare enum GooglePrivacyDlpV2ExpressionsLogicalOperatorEnum {
    LogicalOperatorUnspecified = "LOGICAL_OPERATOR_UNSPECIFIED",
    And = "AND"
}
/**
 * An expression, consisting of an operator and conditions.
 */
export declare class GooglePrivacyDlpV2Expressions extends SpeakeasyBase {
    /**
     * A collection of conditions.
     */
    conditions?: GooglePrivacyDlpV2Conditions;
    /**
     * The operator to apply to the result of conditions. Default and currently only supported value is `AND`.
     */
    logicalOperator?: GooglePrivacyDlpV2ExpressionsLogicalOperatorEnum;
}
