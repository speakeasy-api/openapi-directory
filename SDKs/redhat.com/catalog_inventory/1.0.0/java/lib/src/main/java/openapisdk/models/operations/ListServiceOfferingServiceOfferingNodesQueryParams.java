package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListServiceOfferingServiceOfferingNodesQueryParams {
    @SpeakeasyMetadata("queryParam:style=deepObject,explode=true,name=filter")
    public java.util.Map<String, Object> filter;
    public ListServiceOfferingServiceOfferingNodesQueryParams withFilter(java.util.Map<String, Object> filter) {
        this.filter = filter;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Long limit;
    public ListServiceOfferingServiceOfferingNodesQueryParams withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=offset")
    public Long offset;
    public ListServiceOfferingServiceOfferingNodesQueryParams withOffset(Long offset) {
        this.offset = offset;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=deepObject,explode=true,name=sort_by")
    public java.util.Map<String, Object> sortBy;
    public ListServiceOfferingServiceOfferingNodesQueryParams withSortBy(java.util.Map<String, Object> sortBy) {
        this.sortBy = sortBy;
        return this;
    }
}