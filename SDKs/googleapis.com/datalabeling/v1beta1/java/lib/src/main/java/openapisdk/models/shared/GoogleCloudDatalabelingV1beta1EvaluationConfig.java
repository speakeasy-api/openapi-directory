package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudDatalabelingV1beta1EvaluationConfig
 * Configuration details used for calculating evaluation metrics and creating an Evaluation.
**/
public class GoogleCloudDatalabelingV1beta1EvaluationConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("boundingBoxEvaluationOptions")
    public GoogleCloudDatalabelingV1beta1BoundingBoxEvaluationOptions boundingBoxEvaluationOptions;
    public GoogleCloudDatalabelingV1beta1EvaluationConfig withBoundingBoxEvaluationOptions(GoogleCloudDatalabelingV1beta1BoundingBoxEvaluationOptions boundingBoxEvaluationOptions) {
        this.boundingBoxEvaluationOptions = boundingBoxEvaluationOptions;
        return this;
    }
}