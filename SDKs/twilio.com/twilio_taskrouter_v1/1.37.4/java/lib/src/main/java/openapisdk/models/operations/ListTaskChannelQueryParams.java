package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListTaskChannelQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListTaskChannelQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}