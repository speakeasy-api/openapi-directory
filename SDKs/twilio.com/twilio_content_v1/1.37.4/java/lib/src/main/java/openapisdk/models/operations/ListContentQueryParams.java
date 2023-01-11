package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListContentQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListContentQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}