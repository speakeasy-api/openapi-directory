package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListSyncSyncMapPermissionQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListSyncSyncMapPermissionQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}