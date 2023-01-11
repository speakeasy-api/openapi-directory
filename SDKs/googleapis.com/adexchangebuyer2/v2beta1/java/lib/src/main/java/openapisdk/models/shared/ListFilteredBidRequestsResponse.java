package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListFilteredBidRequestsResponse
 * Response message for listing all reasons that bid requests were filtered and not sent to the buyer.
**/
public class ListFilteredBidRequestsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("calloutStatusRows")
    public CalloutStatusRow[] calloutStatusRows;
    public ListFilteredBidRequestsResponse withCalloutStatusRows(CalloutStatusRow[] calloutStatusRows) {
        this.calloutStatusRows = calloutStatusRows;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListFilteredBidRequestsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}