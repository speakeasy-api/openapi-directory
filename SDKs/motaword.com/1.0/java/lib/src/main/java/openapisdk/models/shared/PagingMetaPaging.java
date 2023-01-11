package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PagingMetaPaging {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("links")
    public PagingLinksMeta links;
    public PagingMetaPaging withLinks(PagingLinksMeta links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("page")
    public Long page;
    public PagingMetaPaging withPage(Long page) {
        this.page = page;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("per_page")
    public Long perPage;
    public PagingMetaPaging withPerPage(Long perPage) {
        this.perPage = perPage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total_count")
    public Long totalCount;
    public PagingMetaPaging withTotalCount(Long totalCount) {
        this.totalCount = totalCount;
        return this;
    }
}