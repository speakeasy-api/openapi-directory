import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Evaluates whether each row passes the specified condition.The SQL expression needs to use BigQuery standard SQL syntax and should produce a boolean value per row as the result.Example: col1 >= 0 AND col2 < 10
 */
export declare class GoogleCloudDataplexV1DataQualityRuleRowConditionExpectation extends SpeakeasyBase {
    /**
     * The SQL expression.
     */
    sqlExpression?: string;
}
