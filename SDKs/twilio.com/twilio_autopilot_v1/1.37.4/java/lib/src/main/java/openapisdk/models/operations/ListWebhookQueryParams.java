package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListWebhookQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListWebhookQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}