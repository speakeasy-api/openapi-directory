package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListPoliciesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListPoliciesQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}