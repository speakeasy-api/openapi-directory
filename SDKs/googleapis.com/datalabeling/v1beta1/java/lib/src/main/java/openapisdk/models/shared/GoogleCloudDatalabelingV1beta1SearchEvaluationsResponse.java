package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudDatalabelingV1beta1SearchEvaluationsResponse
 * Results of searching evaluations.
**/
public class GoogleCloudDatalabelingV1beta1SearchEvaluationsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("evaluations")
    public GoogleCloudDatalabelingV1beta1Evaluation[] evaluations;
    public GoogleCloudDatalabelingV1beta1SearchEvaluationsResponse withEvaluations(GoogleCloudDatalabelingV1beta1Evaluation[] evaluations) {
        this.evaluations = evaluations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public GoogleCloudDatalabelingV1beta1SearchEvaluationsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}