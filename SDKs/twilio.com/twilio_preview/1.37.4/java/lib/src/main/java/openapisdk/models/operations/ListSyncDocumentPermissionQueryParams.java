package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListSyncDocumentPermissionQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListSyncDocumentPermissionQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}