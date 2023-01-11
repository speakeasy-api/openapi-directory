package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListCredentialListQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListCredentialListQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}