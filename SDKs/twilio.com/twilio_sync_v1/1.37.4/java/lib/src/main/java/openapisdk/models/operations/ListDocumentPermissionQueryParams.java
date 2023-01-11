package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListDocumentPermissionQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListDocumentPermissionQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}