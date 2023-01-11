package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListSyncDocumentQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListSyncDocumentQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}