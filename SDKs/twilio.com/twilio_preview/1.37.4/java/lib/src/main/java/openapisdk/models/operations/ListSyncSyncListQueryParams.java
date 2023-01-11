package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListSyncSyncListQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListSyncSyncListQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}