package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListAssetQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListAssetQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}