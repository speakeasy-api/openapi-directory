package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutMarketingV3MarketingEventsEventsExternalEventIdReplaceRequest {
    public PutMarketingV3MarketingEventsEventsExternalEventIdReplacePathParams pathParams;
    public PutMarketingV3MarketingEventsEventsExternalEventIdReplaceRequest withPathParams(PutMarketingV3MarketingEventsEventsExternalEventIdReplacePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.MarketingEventCreateRequestParams request;
    public PutMarketingV3MarketingEventsEventsExternalEventIdReplaceRequest withRequest(openapisdk.models.shared.MarketingEventCreateRequestParams request) {
        this.request = request;
        return this;
    }
    public PutMarketingV3MarketingEventsEventsExternalEventIdReplaceSecurity security;
    public PutMarketingV3MarketingEventsEventsExternalEventIdReplaceRequest withSecurity(PutMarketingV3MarketingEventsEventsExternalEventIdReplaceSecurity security) {
        this.security = security;
        return this;
    }
}