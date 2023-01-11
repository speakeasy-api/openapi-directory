package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListSearchKeywordImpressionsMonthlyResponse
 * Represents the response for ListSearchKeywordImpressionsMonthly.
**/
public class ListSearchKeywordImpressionsMonthlyResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListSearchKeywordImpressionsMonthlyResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("searchKeywordsCounts")
    public SearchKeywordCount[] searchKeywordsCounts;
    public ListSearchKeywordImpressionsMonthlyResponse withSearchKeywordsCounts(SearchKeywordCount[] searchKeywordsCounts) {
        this.searchKeywordsCounts = searchKeywordsCounts;
        return this;
    }
}