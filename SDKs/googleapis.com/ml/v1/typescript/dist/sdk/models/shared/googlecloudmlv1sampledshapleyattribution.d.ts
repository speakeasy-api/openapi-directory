import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An attribution method that approximates Shapley values for features that contribute to the label being predicted. A sampling strategy is used to approximate the value rather than considering all subsets of features.
 */
export declare class GoogleCloudMlV1SampledShapleyAttribution extends SpeakeasyBase {
    /**
     * The number of feature permutations to consider when approximating the Shapley values.
     */
    numPaths?: number;
}
