package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetTargets200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("length")
    public Long length;
    public GetTargets200ApplicationJson withLength(Long length) {
        this.length = length;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("page")
    public Long page;
    public GetTargets200ApplicationJson withPage(Long page) {
        this.page = page;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("page_total")
    public Long pageTotal;
    public GetTargets200ApplicationJson withPageTotal(Long pageTotal) {
        this.pageTotal = pageTotal;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pagination_count")
    public Long paginationCount;
    public GetTargets200ApplicationJson withPaginationCount(Long paginationCount) {
        this.paginationCount = paginationCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("results")
    public openapisdk.models.shared.Target[] results;
    public GetTargets200ApplicationJson withResults(openapisdk.models.shared.Target[] results) {
        this.results = results;
        return this;
    }
}