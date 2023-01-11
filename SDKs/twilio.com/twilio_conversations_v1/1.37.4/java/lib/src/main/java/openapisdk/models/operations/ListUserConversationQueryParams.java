package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListUserConversationQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListUserConversationQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}