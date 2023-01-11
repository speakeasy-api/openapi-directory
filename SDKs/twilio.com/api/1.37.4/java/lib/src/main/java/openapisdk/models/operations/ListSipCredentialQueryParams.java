package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListSipCredentialQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListSipCredentialQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}