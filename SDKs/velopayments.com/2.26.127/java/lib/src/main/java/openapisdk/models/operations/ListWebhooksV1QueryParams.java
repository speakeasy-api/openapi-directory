package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListWebhooksV1QueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Integer page;
    public ListWebhooksV1QueryParams withPage(Integer page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pageSize")
    public Integer pageSize;
    public ListWebhooksV1QueryParams withPageSize(Integer pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=payorId")
    public String payorId;
    public ListWebhooksV1QueryParams withPayorId(String payorId) {
        this.payorId = payorId;
        return this;
    }
}