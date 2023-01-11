package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EditorialLivefeedList
 * List of editorial livefeeds
**/
public class EditorialLivefeedList {
    @JsonProperty("data")
    public EditorialLivefeed[] data;
    public EditorialLivefeedList withData(EditorialLivefeed[] data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public String message;
    public EditorialLivefeedList withMessage(String message) {
        this.message = message;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("page")
    public Long page;
    public EditorialLivefeedList withPage(Long page) {
        this.page = page;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("per_page")
    public Long perPage;
    public EditorialLivefeedList withPerPage(Long perPage) {
        this.perPage = perPage;
        return this;
    }
    @JsonProperty("total_count")
    public Long totalCount;
    public EditorialLivefeedList withTotalCount(Long totalCount) {
        this.totalCount = totalCount;
        return this;
    }
}