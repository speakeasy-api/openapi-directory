package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListSyncStreamQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListSyncStreamQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}