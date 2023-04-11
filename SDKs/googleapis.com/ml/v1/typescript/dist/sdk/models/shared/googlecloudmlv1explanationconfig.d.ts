import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudMlV1IntegratedGradientsAttribution } from "./googlecloudmlv1integratedgradientsattribution";
import { GoogleCloudMlV1SampledShapleyAttribution } from "./googlecloudmlv1sampledshapleyattribution";
import { GoogleCloudMlV1XraiAttribution } from "./googlecloudmlv1xraiattribution";
/**
 * Message holding configuration options for explaining model predictions. There are three feature attribution methods supported for TensorFlow models: integrated gradients, sampled Shapley, and XRAI. [Learn more about feature attributions.](/ai-platform/prediction/docs/ai-explanations/overview)
 */
export declare class GoogleCloudMlV1ExplanationConfig extends SpeakeasyBase {
    /**
     * Attributes credit by computing the Aumann-Shapley value taking advantage of the model's fully differentiable structure. Refer to this paper for more details: https://arxiv.org/abs/1703.01365
     */
    integratedGradientsAttribution?: GoogleCloudMlV1IntegratedGradientsAttribution;
    /**
     * An attribution method that approximates Shapley values for features that contribute to the label being predicted. A sampling strategy is used to approximate the value rather than considering all subsets of features.
     */
    sampledShapleyAttribution?: GoogleCloudMlV1SampledShapleyAttribution;
    /**
     * Attributes credit by computing the XRAI taking advantage of the model's fully differentiable structure. Refer to this paper for more details: https://arxiv.org/abs/1906.02825 Currently only implemented for models with natural image inputs.
     */
    xraiAttribution?: GoogleCloudMlV1XraiAttribution;
}
