package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAccountsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page[size]")
    public Long pageSize;
    public GetAccountsQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}