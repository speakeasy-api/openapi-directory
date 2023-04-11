import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GoogleCloudDataplexV1DataQualityRuleStatisticRangeExpectationStatisticEnum {
    StatisticUndefined = "STATISTIC_UNDEFINED",
    Mean = "MEAN",
    Min = "MIN",
    Max = "MAX"
}
/**
 * Evaluates whether the column aggregate statistic lies between a specified range.
 */
export declare class GoogleCloudDataplexV1DataQualityRuleStatisticRangeExpectation extends SpeakeasyBase {
    /**
     * The maximum column statistic value allowed for a row to pass this validation.At least one of min_value and max_value need to be provided.
     */
    maxValue?: string;
    /**
     * The minimum column statistic value allowed for a row to pass this validation.At least one of min_value and max_value need to be provided.
     */
    minValue?: string;
    statistic?: GoogleCloudDataplexV1DataQualityRuleStatisticRangeExpectationStatisticEnum;
    /**
     * Whether column statistic needs to be strictly lesser than ('<') the maximum, or if equality is allowed.Only relevant if a max_value has been defined. Default = false.
     */
    strictMaxEnabled?: boolean;
    /**
     * Whether column statistic needs to be strictly greater than ('>') the minimum, or if equality is allowed.Only relevant if a min_value has been defined. Default = false.
     */
    strictMinEnabled?: boolean;
}
