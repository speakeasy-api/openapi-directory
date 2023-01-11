package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudDatalabelingV1beta1CreateEvaluationJobRequest
 * Request message for CreateEvaluationJob.
**/
public class GoogleCloudDatalabelingV1beta1CreateEvaluationJobRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("job")
    public GoogleCloudDatalabelingV1beta1EvaluationJob job;
    public GoogleCloudDatalabelingV1beta1CreateEvaluationJobRequest withJob(GoogleCloudDatalabelingV1beta1EvaluationJob job) {
        this.job = job;
        return this;
    }
}