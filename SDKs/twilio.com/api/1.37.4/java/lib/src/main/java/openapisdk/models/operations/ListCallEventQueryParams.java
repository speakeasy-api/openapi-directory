package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListCallEventQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListCallEventQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}