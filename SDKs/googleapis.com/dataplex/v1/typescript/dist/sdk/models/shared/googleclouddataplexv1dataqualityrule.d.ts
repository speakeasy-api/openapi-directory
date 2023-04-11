import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDataplexV1DataQualityRuleRangeExpectation } from "./googleclouddataplexv1dataqualityrulerangeexpectation";
import { GoogleCloudDataplexV1DataQualityRuleRegexExpectation } from "./googleclouddataplexv1dataqualityruleregexexpectation";
import { GoogleCloudDataplexV1DataQualityRuleRowConditionExpectation } from "./googleclouddataplexv1dataqualityrulerowconditionexpectation";
import { GoogleCloudDataplexV1DataQualityRuleSetExpectation } from "./googleclouddataplexv1dataqualityrulesetexpectation";
import { GoogleCloudDataplexV1DataQualityRuleStatisticRangeExpectation } from "./googleclouddataplexv1dataqualityrulestatisticrangeexpectation";
import { GoogleCloudDataplexV1DataQualityRuleTableConditionExpectation } from "./googleclouddataplexv1dataqualityruletableconditionexpectation";
/**
 * A rule captures data quality intent about a data source.
 */
export declare class GoogleCloudDataplexV1DataQualityRule extends SpeakeasyBase {
    /**
     * Optional. The unnested column which this rule is evaluated against.
     */
    column?: string;
    /**
     * Required. The dimension a rule belongs to. Results are also aggregated at the dimension level. Supported dimensions are "COMPLETENESS", "ACCURACY", "CONSISTENCY", "VALIDITY", "UNIQUENESS", "INTEGRITY"
     */
    dimension?: string;
    /**
     * Optional. Rows with null values will automatically fail a rule, unless ignore_null is true. In that case, such null rows are trivially considered passing.Only applicable to ColumnMap rules.
     */
    ignoreNull?: boolean;
    /**
     * Evaluates whether each column value is null.
     */
    nonNullExpectation?: Record<string, any>;
    /**
     * Evaluates whether each column value lies between a specified range.
     */
    rangeExpectation?: GoogleCloudDataplexV1DataQualityRuleRangeExpectation;
    /**
     * Evaluates whether each column value matches a specified regex.
     */
    regexExpectation?: GoogleCloudDataplexV1DataQualityRuleRegexExpectation;
    /**
     * Evaluates whether each row passes the specified condition.The SQL expression needs to use BigQuery standard SQL syntax and should produce a boolean value per row as the result.Example: col1 >= 0 AND col2 < 10
     */
    rowConditionExpectation?: GoogleCloudDataplexV1DataQualityRuleRowConditionExpectation;
    /**
     * Evaluates whether each column value is contained by a specified set.
     */
    setExpectation?: GoogleCloudDataplexV1DataQualityRuleSetExpectation;
    /**
     * Evaluates whether the column aggregate statistic lies between a specified range.
     */
    statisticRangeExpectation?: GoogleCloudDataplexV1DataQualityRuleStatisticRangeExpectation;
    /**
     * Evaluates whether the provided expression is true.The SQL expression needs to use BigQuery standard SQL syntax and should produce a scalar boolean result.Example: MIN(col1) >= 0
     */
    tableConditionExpectation?: GoogleCloudDataplexV1DataQualityRuleTableConditionExpectation;
    /**
     * Optional. The minimum ratio of passing_rows / total_rows required to pass this rule, with a range of 0.0, 1.0.0 indicates default value (i.e. 1.0).
     */
    threshold?: number;
    /**
     * Evaluates whether the column has duplicates.
     */
    uniquenessExpectation?: Record<string, any>;
}
