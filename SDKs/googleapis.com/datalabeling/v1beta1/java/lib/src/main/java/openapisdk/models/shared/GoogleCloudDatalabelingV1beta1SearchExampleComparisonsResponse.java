package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudDatalabelingV1beta1SearchExampleComparisonsResponse
 * Results of searching example comparisons.
**/
public class GoogleCloudDatalabelingV1beta1SearchExampleComparisonsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("exampleComparisons")
    public GoogleCloudDatalabelingV1beta1ExampleComparison[] exampleComparisons;
    public GoogleCloudDatalabelingV1beta1SearchExampleComparisonsResponse withExampleComparisons(GoogleCloudDatalabelingV1beta1ExampleComparison[] exampleComparisons) {
        this.exampleComparisons = exampleComparisons;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public GoogleCloudDatalabelingV1beta1SearchExampleComparisonsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}