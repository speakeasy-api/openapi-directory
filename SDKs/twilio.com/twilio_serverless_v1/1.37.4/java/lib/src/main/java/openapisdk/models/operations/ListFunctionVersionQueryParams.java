package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListFunctionVersionQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListFunctionVersionQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}