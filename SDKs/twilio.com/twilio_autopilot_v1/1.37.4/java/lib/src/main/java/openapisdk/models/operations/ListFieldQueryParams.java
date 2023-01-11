package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListFieldQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListFieldQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}