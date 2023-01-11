package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListRatePlanQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListRatePlanQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}