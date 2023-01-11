package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudDatalabelingV1beta1ListExamplesResponse
 * Results of listing Examples in and annotated dataset.
**/
public class GoogleCloudDatalabelingV1beta1ListExamplesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("examples")
    public GoogleCloudDatalabelingV1beta1Example[] examples;
    public GoogleCloudDatalabelingV1beta1ListExamplesResponse withExamples(GoogleCloudDatalabelingV1beta1Example[] examples) {
        this.examples = examples;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public GoogleCloudDatalabelingV1beta1ListExamplesResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}