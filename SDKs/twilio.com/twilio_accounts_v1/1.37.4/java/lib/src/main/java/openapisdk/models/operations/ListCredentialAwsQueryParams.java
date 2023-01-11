package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListCredentialAwsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListCredentialAwsQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}