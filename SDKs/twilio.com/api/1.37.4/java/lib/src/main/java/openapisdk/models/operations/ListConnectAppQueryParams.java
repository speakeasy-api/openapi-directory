package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListConnectAppQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListConnectAppQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}