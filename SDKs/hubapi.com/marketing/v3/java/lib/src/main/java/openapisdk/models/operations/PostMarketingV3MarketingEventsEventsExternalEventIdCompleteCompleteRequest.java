package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostMarketingV3MarketingEventsEventsExternalEventIdCompleteCompleteRequest {
    public PostMarketingV3MarketingEventsEventsExternalEventIdCompleteCompletePathParams pathParams;
    public PostMarketingV3MarketingEventsEventsExternalEventIdCompleteCompleteRequest withPathParams(PostMarketingV3MarketingEventsEventsExternalEventIdCompleteCompletePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PostMarketingV3MarketingEventsEventsExternalEventIdCompleteCompleteQueryParams queryParams;
    public PostMarketingV3MarketingEventsEventsExternalEventIdCompleteCompleteRequest withQueryParams(PostMarketingV3MarketingEventsEventsExternalEventIdCompleteCompleteQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.MarketingEventCompleteRequestParams request;
    public PostMarketingV3MarketingEventsEventsExternalEventIdCompleteCompleteRequest withRequest(openapisdk.models.shared.MarketingEventCompleteRequestParams request) {
        this.request = request;
        return this;
    }
    public PostMarketingV3MarketingEventsEventsExternalEventIdCompleteCompleteSecurity security;
    public PostMarketingV3MarketingEventsEventsExternalEventIdCompleteCompleteRequest withSecurity(PostMarketingV3MarketingEventsEventsExternalEventIdCompleteCompleteSecurity security) {
        this.security = security;
        return this;
    }
}