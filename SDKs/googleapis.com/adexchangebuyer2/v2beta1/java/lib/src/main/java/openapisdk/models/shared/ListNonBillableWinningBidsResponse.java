package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListNonBillableWinningBidsResponse
 * Response message for listing all reasons for which a buyer was not billed for a winning bid.
**/
public class ListNonBillableWinningBidsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListNonBillableWinningBidsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nonBillableWinningBidStatusRows")
    public NonBillableWinningBidStatusRow[] nonBillableWinningBidStatusRows;
    public ListNonBillableWinningBidsResponse withNonBillableWinningBidStatusRows(NonBillableWinningBidStatusRow[] nonBillableWinningBidStatusRows) {
        this.nonBillableWinningBidStatusRows = nonBillableWinningBidStatusRows;
        return this;
    }
}