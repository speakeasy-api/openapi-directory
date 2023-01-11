package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GamesStoresListQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ordering")
    public String ordering;
    public GamesStoresListQueryParams withOrdering(String ordering) {
        this.ordering = ordering;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public GamesStoresListQueryParams withPage(Long page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page_size")
    public Long pageSize;
    public GamesStoresListQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}