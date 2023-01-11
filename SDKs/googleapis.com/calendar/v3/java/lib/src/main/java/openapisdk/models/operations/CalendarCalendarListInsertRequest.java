package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CalendarCalendarListInsertRequest {
    public CalendarCalendarListInsertQueryParams queryParams;
    public CalendarCalendarListInsertRequest withQueryParams(CalendarCalendarListInsertQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CalendarListEntry request;
    public CalendarCalendarListInsertRequest withRequest(openapisdk.models.shared.CalendarListEntry request) {
        this.request = request;
        return this;
    }
    public CalendarCalendarListInsertSecurity security;
    public CalendarCalendarListInsertRequest withSecurity(CalendarCalendarListInsertSecurity security) {
        this.security = security;
        return this;
    }
}