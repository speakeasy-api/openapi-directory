package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudRecommenderV1MarkInsightAcceptedRequest
 * Request for the `MarkInsightAccepted` method.
**/
public class GoogleCloudRecommenderV1MarkInsightAcceptedRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("etag")
    public String etag;
    public GoogleCloudRecommenderV1MarkInsightAcceptedRequest withEtag(String etag) {
        this.etag = etag;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stateMetadata")
    public java.util.Map<String, String> stateMetadata;
    public GoogleCloudRecommenderV1MarkInsightAcceptedRequest withStateMetadata(java.util.Map<String, String> stateMetadata) {
        this.stateMetadata = stateMetadata;
        return this;
    }
}