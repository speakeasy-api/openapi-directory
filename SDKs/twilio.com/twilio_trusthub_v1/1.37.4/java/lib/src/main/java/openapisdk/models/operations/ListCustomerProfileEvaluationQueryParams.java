package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListCustomerProfileEvaluationQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListCustomerProfileEvaluationQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}