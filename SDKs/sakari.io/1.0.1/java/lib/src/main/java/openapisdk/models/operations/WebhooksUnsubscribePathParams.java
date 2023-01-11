package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class WebhooksUnsubscribePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=accountId")
    public String accountId;
    public WebhooksUnsubscribePathParams withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=url")
    public String url;
    public WebhooksUnsubscribePathParams withUrl(String url) {
        this.url = url;
        return this;
    }
}