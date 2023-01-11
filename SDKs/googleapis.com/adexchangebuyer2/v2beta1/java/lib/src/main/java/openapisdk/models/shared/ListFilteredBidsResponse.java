package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListFilteredBidsResponse
 * Response message for listing all reasons that bids were filtered from the auction.
**/
public class ListFilteredBidsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creativeStatusRows")
    public CreativeStatusRow[] creativeStatusRows;
    public ListFilteredBidsResponse withCreativeStatusRows(CreativeStatusRow[] creativeStatusRows) {
        this.creativeStatusRows = creativeStatusRows;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListFilteredBidsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}