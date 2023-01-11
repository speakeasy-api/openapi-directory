package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListQueueQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListQueueQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}