package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListBucketQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListBucketQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}