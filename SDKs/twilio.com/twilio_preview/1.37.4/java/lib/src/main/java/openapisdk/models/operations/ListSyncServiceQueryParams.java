package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListSyncServiceQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListSyncServiceQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}