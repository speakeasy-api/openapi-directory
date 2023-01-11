package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StoresListQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ordering")
    public String ordering;
    public StoresListQueryParams withOrdering(String ordering) {
        this.ordering = ordering;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public StoresListQueryParams withPage(Long page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page_size")
    public Long pageSize;
    public StoresListQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}