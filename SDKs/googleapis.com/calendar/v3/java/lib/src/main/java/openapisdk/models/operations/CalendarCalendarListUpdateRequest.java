package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CalendarCalendarListUpdateRequest {
    public CalendarCalendarListUpdatePathParams pathParams;
    public CalendarCalendarListUpdateRequest withPathParams(CalendarCalendarListUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CalendarCalendarListUpdateQueryParams queryParams;
    public CalendarCalendarListUpdateRequest withQueryParams(CalendarCalendarListUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CalendarListEntry request;
    public CalendarCalendarListUpdateRequest withRequest(openapisdk.models.shared.CalendarListEntry request) {
        this.request = request;
        return this;
    }
    public CalendarCalendarListUpdateSecurity security;
    public CalendarCalendarListUpdateRequest withSecurity(CalendarCalendarListUpdateSecurity security) {
        this.security = security;
        return this;
    }
}