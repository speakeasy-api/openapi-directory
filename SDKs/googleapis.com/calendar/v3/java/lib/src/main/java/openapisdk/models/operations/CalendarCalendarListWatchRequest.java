package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CalendarCalendarListWatchRequest {
    public CalendarCalendarListWatchQueryParams queryParams;
    public CalendarCalendarListWatchRequest withQueryParams(CalendarCalendarListWatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Channel request;
    public CalendarCalendarListWatchRequest withRequest(openapisdk.models.shared.Channel request) {
        this.request = request;
        return this;
    }
    public CalendarCalendarListWatchSecurity security;
    public CalendarCalendarListWatchRequest withSecurity(CalendarCalendarListWatchSecurity security) {
        this.security = security;
        return this;
    }
}