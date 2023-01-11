package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListBusinessCallsInsightsResponse
 * Response message for ListBusinessCallsInsights.
**/
public class ListBusinessCallsInsightsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("businessCallsInsights")
    public BusinessCallsInsights[] businessCallsInsights;
    public ListBusinessCallsInsightsResponse withBusinessCallsInsights(BusinessCallsInsights[] businessCallsInsights) {
        this.businessCallsInsights = businessCallsInsights;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListBusinessCallsInsightsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}