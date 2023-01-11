package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListChannelQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListChannelQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}