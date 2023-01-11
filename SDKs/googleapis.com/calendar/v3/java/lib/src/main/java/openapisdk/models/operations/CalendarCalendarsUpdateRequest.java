package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CalendarCalendarsUpdateRequest {
    public CalendarCalendarsUpdatePathParams pathParams;
    public CalendarCalendarsUpdateRequest withPathParams(CalendarCalendarsUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CalendarCalendarsUpdateQueryParams queryParams;
    public CalendarCalendarsUpdateRequest withQueryParams(CalendarCalendarsUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Calendar request;
    public CalendarCalendarsUpdateRequest withRequest(openapisdk.models.shared.Calendar request) {
        this.request = request;
        return this;
    }
    public CalendarCalendarsUpdateSecurity security;
    public CalendarCalendarsUpdateRequest withSecurity(CalendarCalendarsUpdateSecurity security) {
        this.security = security;
        return this;
    }
}