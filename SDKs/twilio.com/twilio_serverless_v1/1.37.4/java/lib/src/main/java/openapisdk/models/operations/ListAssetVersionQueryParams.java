package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListAssetVersionQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListAssetVersionQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}