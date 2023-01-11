package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListSyncSyncMapQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListSyncSyncMapQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}