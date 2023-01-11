package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListSipCredentialListQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListSipCredentialListQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}