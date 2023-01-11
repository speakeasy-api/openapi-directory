package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListSubscriptionQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListSubscriptionQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=SinkSid")
    public String sinkSid;
    public ListSubscriptionQueryParams withSinkSid(String sinkSid) {
        this.sinkSid = sinkSid;
        return this;
    }
}