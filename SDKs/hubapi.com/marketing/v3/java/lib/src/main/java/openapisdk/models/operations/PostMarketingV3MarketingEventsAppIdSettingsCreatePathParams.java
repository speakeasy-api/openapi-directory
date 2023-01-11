package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostMarketingV3MarketingEventsAppIdSettingsCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=appId")
    public Integer appId;
    public PostMarketingV3MarketingEventsAppIdSettingsCreatePathParams withAppId(Integer appId) {
        this.appId = appId;
        return this;
    }
}