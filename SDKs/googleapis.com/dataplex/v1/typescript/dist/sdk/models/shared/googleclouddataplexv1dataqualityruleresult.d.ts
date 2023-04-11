import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDataplexV1DataQualityRule } from "./googleclouddataplexv1dataqualityrule";
/**
 * DataQualityRuleResult provides a more detailed, per-rule view of the results.
 */
export declare class GoogleCloudDataplexV1DataQualityRuleResult extends SpeakeasyBase {
    /**
     * The number of rows a rule was evaluated against. This field is only valid for ColumnMap type rules.Evaluated count can be configured to either include all rows (default) - with null rows automatically failing rule evaluation, or exclude null rows from the evaluated_count, by setting ignore_nulls = true.
     */
    evaluatedCount?: string;
    /**
     * The query to find rows that did not pass this rule. Only applies to ColumnMap and RowCondition rules.
     */
    failingRowsQuery?: string;
    /**
     * The number of rows with null values in the specified column.
     */
    nullCount?: string;
    /**
     * The ratio of passed_count / evaluated_count. This field is only valid for ColumnMap type rules.
     */
    passRatio?: number;
    /**
     * Whether the rule passed or failed.
     */
    passed?: boolean;
    /**
     * The number of rows which passed a rule evaluation. This field is only valid for ColumnMap type rules.
     */
    passedCount?: string;
    /**
     * A rule captures data quality intent about a data source.
     */
    rule?: GoogleCloudDataplexV1DataQualityRule;
}
