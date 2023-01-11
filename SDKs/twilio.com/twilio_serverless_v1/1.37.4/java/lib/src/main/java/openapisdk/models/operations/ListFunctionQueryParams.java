package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListFunctionQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListFunctionQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}