package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListSyncListQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListSyncListQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}