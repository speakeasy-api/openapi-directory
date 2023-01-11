package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudRecommenderV1ListRecommendationsResponse
 * Response to the `ListRecommendations` method.
**/
public class GoogleCloudRecommenderV1ListRecommendationsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public GoogleCloudRecommenderV1ListRecommendationsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recommendations")
    public GoogleCloudRecommenderV1Recommendation[] recommendations;
    public GoogleCloudRecommenderV1ListRecommendationsResponse withRecommendations(GoogleCloudRecommenderV1Recommendation[] recommendations) {
        this.recommendations = recommendations;
        return this;
    }
}