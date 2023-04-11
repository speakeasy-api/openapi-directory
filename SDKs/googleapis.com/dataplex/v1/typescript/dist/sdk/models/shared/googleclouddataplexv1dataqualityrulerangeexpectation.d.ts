import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Evaluates whether each column value lies between a specified range.
 */
export declare class GoogleCloudDataplexV1DataQualityRuleRangeExpectation extends SpeakeasyBase {
    /**
     * Optional. The maximum column value allowed for a row to pass this validation. At least one of min_value and max_value need to be provided.
     */
    maxValue?: string;
    /**
     * Optional. The minimum column value allowed for a row to pass this validation. At least one of min_value and max_value need to be provided.
     */
    minValue?: string;
    /**
     * Optional. Whether each value needs to be strictly lesser than ('<') the maximum, or if equality is allowed.Only relevant if a max_value has been defined. Default = false.
     */
    strictMaxEnabled?: boolean;
    /**
     * Optional. Whether each value needs to be strictly greater than ('>') the minimum, or if equality is allowed.Only relevant if a min_value has been defined. Default = false.
     */
    strictMinEnabled?: boolean;
}
