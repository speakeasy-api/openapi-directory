package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListConversationQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListConversationQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}