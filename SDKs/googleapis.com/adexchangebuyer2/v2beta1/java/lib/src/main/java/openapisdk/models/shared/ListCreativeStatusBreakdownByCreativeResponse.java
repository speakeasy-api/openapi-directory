package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListCreativeStatusBreakdownByCreativeResponse
 * Response message for listing all creatives associated with a given filtered bid reason.
**/
public class ListCreativeStatusBreakdownByCreativeResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filteredBidCreativeRows")
    public FilteredBidCreativeRow[] filteredBidCreativeRows;
    public ListCreativeStatusBreakdownByCreativeResponse withFilteredBidCreativeRows(FilteredBidCreativeRow[] filteredBidCreativeRows) {
        this.filteredBidCreativeRows = filteredBidCreativeRows;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListCreativeStatusBreakdownByCreativeResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}