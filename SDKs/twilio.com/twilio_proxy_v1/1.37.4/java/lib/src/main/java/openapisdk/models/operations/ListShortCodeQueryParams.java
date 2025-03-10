package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListShortCodeQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListShortCodeQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}