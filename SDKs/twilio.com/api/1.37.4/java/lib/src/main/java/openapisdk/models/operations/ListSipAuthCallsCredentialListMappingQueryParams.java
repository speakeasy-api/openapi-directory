package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListSipAuthCallsCredentialListMappingQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListSipAuthCallsCredentialListMappingQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}