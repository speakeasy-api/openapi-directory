package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListServiceUserConversationQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListServiceUserConversationQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}