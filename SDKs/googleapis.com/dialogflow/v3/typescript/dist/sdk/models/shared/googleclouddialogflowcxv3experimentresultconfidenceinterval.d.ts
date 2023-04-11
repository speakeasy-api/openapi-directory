import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A confidence interval is a range of possible values for the experiment objective you are trying to measure.
 */
export declare class GoogleCloudDialogflowCxV3ExperimentResultConfidenceInterval extends SpeakeasyBase {
    /**
     * The confidence level used to construct the interval, i.e. there is X% chance that the true value is within this interval.
     */
    confidenceLevel?: number;
    /**
     * Lower bound of the interval.
     */
    lowerBound?: number;
    /**
     * The percent change between an experiment metric's value and the value for its control.
     */
    ratio?: number;
    /**
     * Upper bound of the interval.
     */
    upperBound?: number;
}
