package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListCredentialQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListCredentialQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}