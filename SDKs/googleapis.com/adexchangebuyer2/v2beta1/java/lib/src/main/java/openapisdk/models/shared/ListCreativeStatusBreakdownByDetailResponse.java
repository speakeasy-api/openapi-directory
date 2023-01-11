package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListCreativeStatusBreakdownByDetailResponse
 * Response message for listing all details associated with a given filtered bid reason.
**/
public class ListCreativeStatusBreakdownByDetailResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("detailType")
    public ListCreativeStatusBreakdownByDetailResponseDetailTypeEnum detailType;
    public ListCreativeStatusBreakdownByDetailResponse withDetailType(ListCreativeStatusBreakdownByDetailResponseDetailTypeEnum detailType) {
        this.detailType = detailType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filteredBidDetailRows")
    public FilteredBidDetailRow[] filteredBidDetailRows;
    public ListCreativeStatusBreakdownByDetailResponse withFilteredBidDetailRows(FilteredBidDetailRow[] filteredBidDetailRows) {
        this.filteredBidDetailRows = filteredBidDetailRows;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListCreativeStatusBreakdownByDetailResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}