package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListServiceConversationScopedWebhookQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListServiceConversationScopedWebhookQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}