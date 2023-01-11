package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListDayQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListDayQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}