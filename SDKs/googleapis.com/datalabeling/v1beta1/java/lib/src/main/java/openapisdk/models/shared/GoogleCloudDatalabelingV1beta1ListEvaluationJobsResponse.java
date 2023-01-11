package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudDatalabelingV1beta1ListEvaluationJobsResponse
 * Results for listing evaluation jobs.
**/
public class GoogleCloudDatalabelingV1beta1ListEvaluationJobsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("evaluationJobs")
    public GoogleCloudDatalabelingV1beta1EvaluationJob[] evaluationJobs;
    public GoogleCloudDatalabelingV1beta1ListEvaluationJobsResponse withEvaluationJobs(GoogleCloudDatalabelingV1beta1EvaluationJob[] evaluationJobs) {
        this.evaluationJobs = evaluationJobs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public GoogleCloudDatalabelingV1beta1ListEvaluationJobsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}