package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EditorialVideoSearchResults
 * Editorial search results
**/
public class EditorialVideoSearchResults {
    @JsonProperty("data")
    public EditorialVideoContent[] data;
    public EditorialVideoSearchResults withData(EditorialVideoContent[] data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public String message;
    public EditorialVideoSearchResults withMessage(String message) {
        this.message = message;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("next")
    public String next;
    public EditorialVideoSearchResults withNext(String next) {
        this.next = next;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("page")
    public Long page;
    public EditorialVideoSearchResults withPage(Long page) {
        this.page = page;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("per_page")
    public Long perPage;
    public EditorialVideoSearchResults withPerPage(Long perPage) {
        this.perPage = perPage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("prev")
    public String prev;
    public EditorialVideoSearchResults withPrev(String prev) {
        this.prev = prev;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("search_id")
    public String searchId;
    public EditorialVideoSearchResults withSearchId(String searchId) {
        this.searchId = searchId;
        return this;
    }
    @JsonProperty("total_count")
    public Long totalCount;
    public EditorialVideoSearchResults withTotalCount(Long totalCount) {
        this.totalCount = totalCount;
        return this;
    }
}