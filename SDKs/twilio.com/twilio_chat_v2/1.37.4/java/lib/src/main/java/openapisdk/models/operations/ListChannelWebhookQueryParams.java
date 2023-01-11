package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListChannelWebhookQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListChannelWebhookQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}