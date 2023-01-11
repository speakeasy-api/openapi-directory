package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ControllersListMeta {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filter")
    public java.util.Map<String, ControllersFilterData> filter;
    public ControllersListMeta withFilter(java.util.Map<String, ControllersFilterData> filter) {
        this.filter = filter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("limit")
    public Long limit;
    public ControllersListMeta withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("offset")
    public Long offset;
    public ControllersListMeta withOffset(Long offset) {
        this.offset = offset;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("search")
    public String search;
    public ControllersListMeta withSearch(String search) {
        this.search = search;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sort")
    public String[] sort;
    public ControllersListMeta withSort(String[] sort) {
        this.sort = sort;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subtotals")
    public java.util.Map<String, Long> subtotals;
    public ControllersListMeta withSubtotals(java.util.Map<String, Long> subtotals) {
        this.subtotals = subtotals;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total_items")
    public Long totalItems;
    public ControllersListMeta withTotalItems(Long totalItems) {
        this.totalItems = totalItems;
        return this;
    }
}