package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListTrustProductEvaluationQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListTrustProductEvaluationQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}