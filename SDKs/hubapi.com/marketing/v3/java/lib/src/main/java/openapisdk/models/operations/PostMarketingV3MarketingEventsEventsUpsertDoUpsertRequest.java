package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostMarketingV3MarketingEventsEventsUpsertDoUpsertRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.BatchInputMarketingEventCreateRequestParams request;
    public PostMarketingV3MarketingEventsEventsUpsertDoUpsertRequest withRequest(openapisdk.models.shared.BatchInputMarketingEventCreateRequestParams request) {
        this.request = request;
        return this;
    }
    public PostMarketingV3MarketingEventsEventsUpsertDoUpsertSecurity security;
    public PostMarketingV3MarketingEventsEventsUpsertDoUpsertRequest withSecurity(PostMarketingV3MarketingEventsEventsUpsertDoUpsertSecurity security) {
        this.security = security;
        return this;
    }
}