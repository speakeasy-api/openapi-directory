package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetWebhooksV3AppIdSubscriptionsSubscriptionIdGetByIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=appId")
    public Integer appId;
    public GetWebhooksV3AppIdSubscriptionsSubscriptionIdGetByIdPathParams withAppId(Integer appId) {
        this.appId = appId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=subscriptionId")
    public Integer subscriptionId;
    public GetWebhooksV3AppIdSubscriptionsSubscriptionIdGetByIdPathParams withSubscriptionId(Integer subscriptionId) {
        this.subscriptionId = subscriptionId;
        return this;
    }
}