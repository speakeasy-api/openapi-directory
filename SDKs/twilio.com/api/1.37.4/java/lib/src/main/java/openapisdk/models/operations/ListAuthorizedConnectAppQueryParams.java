package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListAuthorizedConnectAppQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListAuthorizedConnectAppQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}