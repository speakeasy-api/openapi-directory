package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class WebhooksFetchAllPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=accountId")
    public String accountId;
    public WebhooksFetchAllPathParams withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
}