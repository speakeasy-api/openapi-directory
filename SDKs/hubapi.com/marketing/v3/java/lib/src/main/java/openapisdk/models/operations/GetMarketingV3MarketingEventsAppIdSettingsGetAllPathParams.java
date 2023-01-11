package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetMarketingV3MarketingEventsAppIdSettingsGetAllPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=appId")
    public Integer appId;
    public GetMarketingV3MarketingEventsAppIdSettingsGetAllPathParams withAppId(Integer appId) {
        this.appId = appId;
        return this;
    }
}