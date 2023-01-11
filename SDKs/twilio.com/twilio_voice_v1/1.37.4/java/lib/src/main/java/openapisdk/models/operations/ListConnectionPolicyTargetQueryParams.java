package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListConnectionPolicyTargetQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListConnectionPolicyTargetQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}