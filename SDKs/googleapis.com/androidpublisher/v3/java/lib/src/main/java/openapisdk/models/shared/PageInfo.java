package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PageInfo
 * Information about the current page. List operations that supports paging return only one "page" of results. This protocol buffer message describes the page that has been returned.
**/
public class PageInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resultPerPage")
    public Integer resultPerPage;
    public PageInfo withResultPerPage(Integer resultPerPage) {
        this.resultPerPage = resultPerPage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("startIndex")
    public Integer startIndex;
    public PageInfo withStartIndex(Integer startIndex) {
        this.startIndex = startIndex;
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