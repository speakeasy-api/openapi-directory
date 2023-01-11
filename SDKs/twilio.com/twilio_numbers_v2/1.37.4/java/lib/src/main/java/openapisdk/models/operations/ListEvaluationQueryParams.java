package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListEvaluationQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListEvaluationQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}