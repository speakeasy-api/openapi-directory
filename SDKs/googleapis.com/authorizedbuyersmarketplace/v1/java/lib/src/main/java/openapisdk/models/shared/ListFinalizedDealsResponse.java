package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListFinalizedDealsResponse
 * Response message for listing finalized deals.
**/
public class ListFinalizedDealsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("finalizedDeals")
    public FinalizedDeal[] finalizedDeals;
    public ListFinalizedDealsResponse withFinalizedDeals(FinalizedDeal[] finalizedDeals) {
        this.finalizedDeals = finalizedDeals;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListFinalizedDealsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}