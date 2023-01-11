package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreatorsListQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public CreatorsListQueryParams withPage(Long page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page_size")
    public Long pageSize;
    public CreatorsListQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}