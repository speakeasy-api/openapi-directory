package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListDealsResponse
 * Response message for listing deals in a proposal.
**/
public class ListDealsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deals")
    public Deal[] deals;
    public ListDealsResponse withDeals(Deal[] deals) {
        this.deals = deals;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListDealsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}