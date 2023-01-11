package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListWebChannelQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListWebChannelQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}