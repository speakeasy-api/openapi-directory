package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GenresListQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ordering")
    public String ordering;
    public GenresListQueryParams withOrdering(String ordering) {
        this.ordering = ordering;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public GenresListQueryParams withPage(Long page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page_size")
    public Long pageSize;
    public GenresListQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}