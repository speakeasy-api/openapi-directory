package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GoogleCloudDatalabelingV1beta1EvaluationMetrics {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("classificationMetrics")
    public GoogleCloudDatalabelingV1beta1ClassificationMetrics classificationMetrics;
    public GoogleCloudDatalabelingV1beta1EvaluationMetrics withClassificationMetrics(GoogleCloudDatalabelingV1beta1ClassificationMetrics classificationMetrics) {
        this.classificationMetrics = classificationMetrics;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("objectDetectionMetrics")
    public GoogleCloudDatalabelingV1beta1ObjectDetectionMetrics objectDetectionMetrics;
    public GoogleCloudDatalabelingV1beta1EvaluationMetrics withObjectDetectionMetrics(GoogleCloudDatalabelingV1beta1ObjectDetectionMetrics objectDetectionMetrics) {
        this.objectDetectionMetrics = objectDetectionMetrics;
        return this;
    }
}