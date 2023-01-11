package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListConversationMessageReceiptQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListConversationMessageReceiptQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}