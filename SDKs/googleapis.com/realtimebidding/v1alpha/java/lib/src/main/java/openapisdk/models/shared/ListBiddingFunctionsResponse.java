package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListBiddingFunctionsResponse
 * A response containing a list of a bidder's bidding functions.
**/
public class ListBiddingFunctionsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("biddingFunctions")
    public BiddingFunction[] biddingFunctions;
    public ListBiddingFunctionsResponse withBiddingFunctions(BiddingFunction[] biddingFunctions) {
        this.biddingFunctions = biddingFunctions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListBiddingFunctionsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}