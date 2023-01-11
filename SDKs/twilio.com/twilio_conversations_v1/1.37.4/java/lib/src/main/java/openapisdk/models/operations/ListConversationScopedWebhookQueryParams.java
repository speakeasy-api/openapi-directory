package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListConversationScopedWebhookQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListConversationScopedWebhookQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}