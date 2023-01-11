package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetWebhooksV3AppIdSubscriptionsGetAllPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=appId")
    public Integer appId;
    public GetWebhooksV3AppIdSubscriptionsGetAllPathParams withAppId(Integer appId) {
        this.appId = appId;
        return this;
    }
}