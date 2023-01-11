package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListInteractionChannelQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListInteractionChannelQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}