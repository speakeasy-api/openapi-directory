package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListBidMetricsResponse
 * Response message for listing the metrics that are measured in number of bids.
**/
public class ListBidMetricsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bidMetricsRows")
    public BidMetricsRow[] bidMetricsRows;
    public ListBidMetricsResponse withBidMetricsRows(BidMetricsRow[] bidMetricsRows) {
        this.bidMetricsRows = bidMetricsRows;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListBidMetricsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}