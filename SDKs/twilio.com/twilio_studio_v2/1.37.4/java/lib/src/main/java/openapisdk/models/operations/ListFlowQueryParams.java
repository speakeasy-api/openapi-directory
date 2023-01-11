package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListFlowQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListFlowQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}