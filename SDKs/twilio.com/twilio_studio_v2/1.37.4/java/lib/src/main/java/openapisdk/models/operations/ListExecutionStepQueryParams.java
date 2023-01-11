package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListExecutionStepQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListExecutionStepQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}