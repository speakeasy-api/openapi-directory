package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostWebhooksV3AppIdSubscriptionsCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=appId")
    public Integer appId;
    public PostWebhooksV3AppIdSubscriptionsCreatePathParams withAppId(Integer appId) {
        this.appId = appId;
        return this;
    }
}