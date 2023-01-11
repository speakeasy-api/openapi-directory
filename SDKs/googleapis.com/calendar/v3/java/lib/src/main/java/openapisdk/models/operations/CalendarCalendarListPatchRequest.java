package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CalendarCalendarListPatchRequest {
    public CalendarCalendarListPatchPathParams pathParams;
    public CalendarCalendarListPatchRequest withPathParams(CalendarCalendarListPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CalendarCalendarListPatchQueryParams queryParams;
    public CalendarCalendarListPatchRequest withQueryParams(CalendarCalendarListPatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CalendarListEntry request;
    public CalendarCalendarListPatchRequest withRequest(openapisdk.models.shared.CalendarListEntry request) {
        this.request = request;
        return this;
    }
    public CalendarCalendarListPatchSecurity security;
    public CalendarCalendarListPatchRequest withSecurity(CalendarCalendarListPatchSecurity security) {
        this.security = security;
        return this;
    }
}