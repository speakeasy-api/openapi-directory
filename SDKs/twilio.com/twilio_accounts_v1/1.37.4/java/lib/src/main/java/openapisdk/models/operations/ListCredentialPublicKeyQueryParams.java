package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListCredentialPublicKeyQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListCredentialPublicKeyQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}