package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetWebhooksQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page[size]")
    public Long pageSize;
    public GetWebhooksQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}