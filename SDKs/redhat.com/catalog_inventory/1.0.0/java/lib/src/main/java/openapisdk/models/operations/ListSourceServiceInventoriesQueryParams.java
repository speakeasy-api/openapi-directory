package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListSourceServiceInventoriesQueryParams {
    @SpeakeasyMetadata("queryParam:style=deepObject,explode=true,name=filter")
    public java.util.Map<String, Object> filter;
    public ListSourceServiceInventoriesQueryParams withFilter(java.util.Map<String, Object> filter) {
        this.filter = filter;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Long limit;
    public ListSourceServiceInventoriesQueryParams withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=offset")
    public Long offset;
    public ListSourceServiceInventoriesQueryParams withOffset(Long offset) {
        this.offset = offset;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=deepObject,explode=true,name=sort_by")
    public java.util.Map<String, Object> sortBy;
    public ListSourceServiceInventoriesQueryParams withSortBy(java.util.Map<String, Object> sortBy) {
        this.sortBy = sortBy;
        return this;
    }
}