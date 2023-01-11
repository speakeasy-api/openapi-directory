package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListBiddersResponse
 * A response containing bidders.
**/
public class ListBiddersResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bidders")
    public Bidder[] bidders;
    public ListBiddersResponse withBidders(Bidder[] bidders) {
        this.bidders = bidders;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListBiddersResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}