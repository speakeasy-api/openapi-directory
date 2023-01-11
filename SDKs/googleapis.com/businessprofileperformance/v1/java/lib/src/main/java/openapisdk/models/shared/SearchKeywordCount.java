package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SearchKeywordCount
 * Represents a single search keyword and its value.
**/
public class SearchKeywordCount {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("insightsValue")
    public InsightsValue insightsValue;
    public SearchKeywordCount withInsightsValue(InsightsValue insightsValue) {
        this.insightsValue = insightsValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("searchKeyword")
    public String searchKeyword;
    public SearchKeywordCount withSearchKeyword(String searchKeyword) {
        this.searchKeyword = searchKeyword;
        return this;
    }
}