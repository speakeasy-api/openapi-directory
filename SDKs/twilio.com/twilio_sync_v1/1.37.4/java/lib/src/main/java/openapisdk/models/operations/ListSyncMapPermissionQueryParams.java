package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListSyncMapPermissionQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListSyncMapPermissionQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}