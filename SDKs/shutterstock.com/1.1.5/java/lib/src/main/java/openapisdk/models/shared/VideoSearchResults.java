package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * VideoSearchResults
 * Video search results
**/
public class VideoSearchResults {
    @JsonProperty("data")
    public Video[] data;
    public VideoSearchResults withData(Video[] data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public String message;
    public VideoSearchResults withMessage(String message) {
        this.message = message;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("page")
    public Long page;
    public VideoSearchResults withPage(Long page) {
        this.page = page;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("per_page")
    public Long perPage;
    public VideoSearchResults withPerPage(Long perPage) {
        this.perPage = perPage;
        return this;
    }
    @JsonProperty("search_id")
    public String searchId;
    public VideoSearchResults withSearchId(String searchId) {
        this.searchId = searchId;
        return this;
    }
    @JsonProperty("total_count")
    public Long totalCount;
    public VideoSearchResults withTotalCount(Long totalCount) {
        this.totalCount = totalCount;
        return this;
    }
}