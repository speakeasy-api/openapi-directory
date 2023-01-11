package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateCreateCreateRequest {
    public PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateCreateCreatePathParams pathParams;
    public PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateCreateCreateRequest withPathParams(PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateCreateCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateCreateCreateQueryParams queryParams;
    public PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateCreateCreateRequest withQueryParams(PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateCreateCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.BatchInputMarketingEventSubscriber request;
    public PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateCreateCreateRequest withRequest(openapisdk.models.shared.BatchInputMarketingEventSubscriber request) {
        this.request = request;
        return this;
    }
    public PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateCreateCreateSecurity security;
    public PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateCreateCreateRequest withSecurity(PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateCreateCreateSecurity security) {
        this.security = security;
        return this;
    }
}