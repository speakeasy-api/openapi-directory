package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudRecommenderV1ListInsightsResponse
 * Response to the `ListInsights` method.
**/
public class GoogleCloudRecommenderV1ListInsightsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("insights")
    public GoogleCloudRecommenderV1Insight[] insights;
    public GoogleCloudRecommenderV1ListInsightsResponse withInsights(GoogleCloudRecommenderV1Insight[] insights) {
        this.insights = insights;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public GoogleCloudRecommenderV1ListInsightsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}