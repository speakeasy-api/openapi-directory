package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListServiceQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListServiceQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}