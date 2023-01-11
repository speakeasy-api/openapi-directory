package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListCustomBiddingAlgorithmsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customBiddingAlgorithms")
    public CustomBiddingAlgorithm[] customBiddingAlgorithms;
    public ListCustomBiddingAlgorithmsResponse withCustomBiddingAlgorithms(CustomBiddingAlgorithm[] customBiddingAlgorithms) {
        this.customBiddingAlgorithms = customBiddingAlgorithms;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListCustomBiddingAlgorithmsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}