package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchMarketingV3MarketingEventsEventsExternalEventIdUpdateRequest {
    public PatchMarketingV3MarketingEventsEventsExternalEventIdUpdatePathParams pathParams;
    public PatchMarketingV3MarketingEventsEventsExternalEventIdUpdateRequest withPathParams(PatchMarketingV3MarketingEventsEventsExternalEventIdUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PatchMarketingV3MarketingEventsEventsExternalEventIdUpdateQueryParams queryParams;
    public PatchMarketingV3MarketingEventsEventsExternalEventIdUpdateRequest withQueryParams(PatchMarketingV3MarketingEventsEventsExternalEventIdUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.MarketingEventUpdateRequestParams request;
    public PatchMarketingV3MarketingEventsEventsExternalEventIdUpdateRequest withRequest(openapisdk.models.shared.MarketingEventUpdateRequestParams request) {
        this.request = request;
        return this;
    }
    public PatchMarketingV3MarketingEventsEventsExternalEventIdUpdateSecurity security;
    public PatchMarketingV3MarketingEventsEventsExternalEventIdUpdateRequest withSecurity(PatchMarketingV3MarketingEventsEventsExternalEventIdUpdateSecurity security) {
        this.security = security;
        return this;
    }
}