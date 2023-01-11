package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PlatformsListQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ordering")
    public String ordering;
    public PlatformsListQueryParams withOrdering(String ordering) {
        this.ordering = ordering;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public PlatformsListQueryParams withPage(Long page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page_size")
    public Long pageSize;
    public PlatformsListQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}