package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListBidResponseErrorsResponse
 * Response message for listing all reasons that bid responses resulted in an error.
**/
public class ListBidResponseErrorsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("calloutStatusRows")
    public CalloutStatusRow[] calloutStatusRows;
    public ListBidResponseErrorsResponse withCalloutStatusRows(CalloutStatusRow[] calloutStatusRows) {
        this.calloutStatusRows = calloutStatusRows;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListBidResponseErrorsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}