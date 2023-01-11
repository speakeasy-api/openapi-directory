package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AudioSearchResults
 * Audio search results
**/
public class AudioSearchResults {
    @JsonProperty("data")
    public Audio[] data;
    public AudioSearchResults withData(Audio[] data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public String message;
    public AudioSearchResults withMessage(String message) {
        this.message = message;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("page")
    public Long page;
    public AudioSearchResults withPage(Long page) {
        this.page = page;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("per_page")
    public Long perPage;
    public AudioSearchResults withPerPage(Long perPage) {
        this.perPage = perPage;
        return this;
    }
    @JsonProperty("search_id")
    public String searchId;
    public AudioSearchResults withSearchId(String searchId) {
        this.searchId = searchId;
        return this;
    }
    @JsonProperty("total_count")
    public Long totalCount;
    public AudioSearchResults withTotalCount(Long totalCount) {
        this.totalCount = totalCount;
        return this;
    }
}