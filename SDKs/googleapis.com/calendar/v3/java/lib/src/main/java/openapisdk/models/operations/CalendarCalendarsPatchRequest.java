package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CalendarCalendarsPatchRequest {
    public CalendarCalendarsPatchPathParams pathParams;
    public CalendarCalendarsPatchRequest withPathParams(CalendarCalendarsPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CalendarCalendarsPatchQueryParams queryParams;
    public CalendarCalendarsPatchRequest withQueryParams(CalendarCalendarsPatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Calendar request;
    public CalendarCalendarsPatchRequest withRequest(openapisdk.models.shared.Calendar request) {
        this.request = request;
        return this;
    }
    public CalendarCalendarsPatchSecurity security;
    public CalendarCalendarsPatchRequest withSecurity(CalendarCalendarsPatchSecurity security) {
        this.security = security;
        return this;
    }
}