package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchWebhooksV3AppIdSubscriptionsSubscriptionIdUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=appId")
    public Integer appId;
    public PatchWebhooksV3AppIdSubscriptionsSubscriptionIdUpdatePathParams withAppId(Integer appId) {
        this.appId = appId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=subscriptionId")
    public Integer subscriptionId;
    public PatchWebhooksV3AppIdSubscriptionsSubscriptionIdUpdatePathParams withSubscriptionId(Integer subscriptionId) {
        this.subscriptionId = subscriptionId;
        return this;
    }
}