package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostTargetsArchived200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("length")
    public Long length;
    public PostTargetsArchived200ApplicationJson withLength(Long length) {
        this.length = length;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("page")
    public Long page;
    public PostTargetsArchived200ApplicationJson withPage(Long page) {
        this.page = page;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("page_total")
    public Long pageTotal;
    public PostTargetsArchived200ApplicationJson withPageTotal(Long pageTotal) {
        this.pageTotal = pageTotal;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pagination_count")
    public Long paginationCount;
    public PostTargetsArchived200ApplicationJson withPaginationCount(Long paginationCount) {
        this.paginationCount = paginationCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("results")
    public openapisdk.models.shared.Target[] results;
    public PostTargetsArchived200ApplicationJson withResults(openapisdk.models.shared.Target[] results) {
        this.results = results;
        return this;
    }
}