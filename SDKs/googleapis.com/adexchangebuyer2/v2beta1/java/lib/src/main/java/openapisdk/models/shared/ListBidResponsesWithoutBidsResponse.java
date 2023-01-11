package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListBidResponsesWithoutBidsResponse
 * Response message for listing all reasons that bid responses were considered to have no applicable bids.
**/
public class ListBidResponsesWithoutBidsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bidResponseWithoutBidsStatusRows")
    public BidResponseWithoutBidsStatusRow[] bidResponseWithoutBidsStatusRows;
    public ListBidResponsesWithoutBidsResponse withBidResponseWithoutBidsStatusRows(BidResponseWithoutBidsStatusRow[] bidResponseWithoutBidsStatusRows) {
        this.bidResponseWithoutBidsStatusRows = bidResponseWithoutBidsStatusRows;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListBidResponsesWithoutBidsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}