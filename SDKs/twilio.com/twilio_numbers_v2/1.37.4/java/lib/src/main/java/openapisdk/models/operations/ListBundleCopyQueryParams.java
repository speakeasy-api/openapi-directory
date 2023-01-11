package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListBundleCopyQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListBundleCopyQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}