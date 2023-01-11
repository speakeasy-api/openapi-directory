package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostMarketingV3MarketingEventsAppIdSettingsCreateRequest {
    public PostMarketingV3MarketingEventsAppIdSettingsCreatePathParams pathParams;
    public PostMarketingV3MarketingEventsAppIdSettingsCreateRequest withPathParams(PostMarketingV3MarketingEventsAppIdSettingsCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.EventDetailSettingsUrl request;
    public PostMarketingV3MarketingEventsAppIdSettingsCreateRequest withRequest(openapisdk.models.shared.EventDetailSettingsUrl request) {
        this.request = request;
        return this;
    }
    public PostMarketingV3MarketingEventsAppIdSettingsCreateSecurity security;
    public PostMarketingV3MarketingEventsAppIdSettingsCreateRequest withSecurity(PostMarketingV3MarketingEventsAppIdSettingsCreateSecurity security) {
        this.security = security;
        return this;
    }
}