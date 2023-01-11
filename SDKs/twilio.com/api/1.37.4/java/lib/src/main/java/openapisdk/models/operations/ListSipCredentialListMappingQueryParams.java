package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListSipCredentialListMappingQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListSipCredentialListMappingQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}