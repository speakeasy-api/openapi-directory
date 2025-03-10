package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListSyncListPermissionQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListSyncListPermissionQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}