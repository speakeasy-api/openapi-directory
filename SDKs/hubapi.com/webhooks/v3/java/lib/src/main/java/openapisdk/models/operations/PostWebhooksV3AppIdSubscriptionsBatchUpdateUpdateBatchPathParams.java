package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostWebhooksV3AppIdSubscriptionsBatchUpdateUpdateBatchPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=appId")
    public Integer appId;
    public PostWebhooksV3AppIdSubscriptionsBatchUpdateUpdateBatchPathParams withAppId(Integer appId) {
        this.appId = appId;
        return this;
    }
}