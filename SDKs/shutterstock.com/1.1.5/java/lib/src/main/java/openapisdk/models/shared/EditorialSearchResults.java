package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EditorialSearchResults
 * Editorial search results
**/
public class EditorialSearchResults {
    @JsonProperty("data")
    public EditorialContent[] data;
    public EditorialSearchResults withData(EditorialContent[] data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public String message;
    public EditorialSearchResults withMessage(String message) {
        this.message = message;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("next")
    public String next;
    public EditorialSearchResults withNext(String next) {
        this.next = next;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("page")
    public Long page;
    public EditorialSearchResults withPage(Long page) {
        this.page = page;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("per_page")
    public Long perPage;
    public EditorialSearchResults withPerPage(Long perPage) {
        this.perPage = perPage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("prev")
    public String prev;
    public EditorialSearchResults withPrev(String prev) {
        this.prev = prev;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("search_id")
    public String searchId;
    public EditorialSearchResults withSearchId(String searchId) {
        this.searchId = searchId;
        return this;
    }
    @JsonProperty("total_count")
    public Long totalCount;
    public EditorialSearchResults withTotalCount(Long totalCount) {
        this.totalCount = totalCount;
        return this;
    }
}