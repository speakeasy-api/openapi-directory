package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PaginationMeta {
    @JsonProperty("max_page")
    public Long maxPage;
    public PaginationMeta withMaxPage(Long maxPage) {
        this.maxPage = maxPage;
        return this;
    }
    @JsonProperty("page")
    public Long page;
    public PaginationMeta withPage(Long page) {
        this.page = page;
        return this;
    }
    @JsonProperty("per_page")
    public Long perPage;
    public PaginationMeta withPerPage(Long perPage) {
        this.perPage = perPage;
        return this;
    }
    @JsonProperty("total_items")
    public Long totalItems;
    public PaginationMeta withTotalItems(Long totalItems) {
        this.totalItems = totalItems;
        return this;
    }
}