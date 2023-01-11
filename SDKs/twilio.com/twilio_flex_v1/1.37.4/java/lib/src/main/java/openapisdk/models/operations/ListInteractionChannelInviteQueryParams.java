package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListInteractionChannelInviteQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListInteractionChannelInviteQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}