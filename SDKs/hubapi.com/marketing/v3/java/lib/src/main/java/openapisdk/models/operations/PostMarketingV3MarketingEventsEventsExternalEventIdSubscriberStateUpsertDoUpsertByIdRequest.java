package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostMarketingV3MarketingEventsEventsExternalEventIdSubscriberStateUpsertDoUpsertByIdRequest {
    public PostMarketingV3MarketingEventsEventsExternalEventIdSubscriberStateUpsertDoUpsertByIdPathParams pathParams;
    public PostMarketingV3MarketingEventsEventsExternalEventIdSubscriberStateUpsertDoUpsertByIdRequest withPathParams(PostMarketingV3MarketingEventsEventsExternalEventIdSubscriberStateUpsertDoUpsertByIdPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PostMarketingV3MarketingEventsEventsExternalEventIdSubscriberStateUpsertDoUpsertByIdQueryParams queryParams;
    public PostMarketingV3MarketingEventsEventsExternalEventIdSubscriberStateUpsertDoUpsertByIdRequest withQueryParams(PostMarketingV3MarketingEventsEventsExternalEventIdSubscriberStateUpsertDoUpsertByIdQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.BatchInputMarketingEventSubscriber request;
    public PostMarketingV3MarketingEventsEventsExternalEventIdSubscriberStateUpsertDoUpsertByIdRequest withRequest(openapisdk.models.shared.BatchInputMarketingEventSubscriber request) {
        this.request = request;
        return this;
    }
    public PostMarketingV3MarketingEventsEventsExternalEventIdSubscriberStateUpsertDoUpsertByIdSecurity security;
    public PostMarketingV3MarketingEventsEventsExternalEventIdSubscriberStateUpsertDoUpsertByIdRequest withSecurity(PostMarketingV3MarketingEventsEventsExternalEventIdSubscriberStateUpsertDoUpsertByIdSecurity security) {
        this.security = security;
        return this;
    }
}