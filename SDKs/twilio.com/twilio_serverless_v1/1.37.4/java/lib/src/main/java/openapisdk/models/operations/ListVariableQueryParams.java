package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListVariableQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListVariableQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}