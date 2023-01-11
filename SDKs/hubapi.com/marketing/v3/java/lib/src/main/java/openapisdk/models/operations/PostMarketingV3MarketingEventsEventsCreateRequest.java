package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostMarketingV3MarketingEventsEventsCreateRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.MarketingEventCreateRequestParams request;
    public PostMarketingV3MarketingEventsEventsCreateRequest withRequest(openapisdk.models.shared.MarketingEventCreateRequestParams request) {
        this.request = request;
        return this;
    }
    public PostMarketingV3MarketingEventsEventsCreateSecurity security;
    public PostMarketingV3MarketingEventsEventsCreateRequest withSecurity(PostMarketingV3MarketingEventsEventsCreateSecurity security) {
        this.security = security;
        return this;
    }
}