package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SearchSearchInformation
 * Metadata about a search operation.
**/
public class SearchSearchInformation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("formattedSearchTime")
    public String formattedSearchTime;
    public SearchSearchInformation withFormattedSearchTime(String formattedSearchTime) {
        this.formattedSearchTime = formattedSearchTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("formattedTotalResults")
    public String formattedTotalResults;
    public SearchSearchInformation withFormattedTotalResults(String formattedTotalResults) {
        this.formattedTotalResults = formattedTotalResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("searchTime")
    public Double searchTime;
    public SearchSearchInformation withSearchTime(Double searchTime) {
        this.searchTime = searchTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalResults")
    public String totalResults;
    public SearchSearchInformation withTotalResults(String totalResults) {
        this.totalResults = totalResults;
        return this;
    }
}