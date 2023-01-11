package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CalendarEventsWatchRequest {
    public CalendarEventsWatchPathParams pathParams;
    public CalendarEventsWatchRequest withPathParams(CalendarEventsWatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CalendarEventsWatchQueryParams queryParams;
    public CalendarEventsWatchRequest withQueryParams(CalendarEventsWatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Channel request;
    public CalendarEventsWatchRequest withRequest(openapisdk.models.shared.Channel request) {
        this.request = request;
        return this;
    }
    public CalendarEventsWatchSecurity security;
    public CalendarEventsWatchRequest withSecurity(CalendarEventsWatchSecurity security) {
        this.security = security;
        return this;
    }
}