package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListLosingBidsResponse
 * Response message for listing all reasons that bids lost in the auction.
**/
public class ListLosingBidsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creativeStatusRows")
    public CreativeStatusRow[] creativeStatusRows;
    public ListLosingBidsResponse withCreativeStatusRows(CreativeStatusRow[] creativeStatusRows) {
        this.creativeStatusRows = creativeStatusRows;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListLosingBidsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}