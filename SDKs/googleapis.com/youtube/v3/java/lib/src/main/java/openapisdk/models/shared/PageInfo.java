package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PageInfo
 * Paging details for lists of resources, including total number of items available and number of resources returned in a single page.
**/
public class PageInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resultsPerPage")
    public Integer resultsPerPage;
    public PageInfo withResultsPerPage(Integer resultsPerPage) {
        this.resultsPerPage = resultsPerPage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalResults")
    public Integer totalResults;
    public PageInfo withTotalResults(Integer totalResults) {
        this.totalResults = totalResults;
        return this;
    }
}