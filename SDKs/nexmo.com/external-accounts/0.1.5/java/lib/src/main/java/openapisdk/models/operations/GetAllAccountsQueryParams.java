package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAllAccountsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page_number")
    public Long pageNumber;
    public GetAllAccountsQueryParams withPageNumber(Long pageNumber) {
        this.pageNumber = pageNumber;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page_size")
    public Long pageSize;
    public GetAllAccountsQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=provider")
    public GetAllAccountsProviderEnum provider;
    public GetAllAccountsQueryParams withProvider(GetAllAccountsProviderEnum provider) {
        this.provider = provider;
        return this;
    }
}