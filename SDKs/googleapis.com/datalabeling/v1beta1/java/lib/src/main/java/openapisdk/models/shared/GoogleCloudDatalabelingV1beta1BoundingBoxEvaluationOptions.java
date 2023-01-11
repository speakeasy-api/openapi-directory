package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudDatalabelingV1beta1BoundingBoxEvaluationOptions
 * Options regarding evaluation between bounding boxes.
**/
public class GoogleCloudDatalabelingV1beta1BoundingBoxEvaluationOptions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("iouThreshold")
    public Float iouThreshold;
    public GoogleCloudDatalabelingV1beta1BoundingBoxEvaluationOptions withIouThreshold(Float iouThreshold) {
        this.iouThreshold = iouThreshold;
        return this;
    }
}