package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CalendarCalendarsInsertRequest {
    public CalendarCalendarsInsertQueryParams queryParams;
    public CalendarCalendarsInsertRequest withQueryParams(CalendarCalendarsInsertQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Calendar request;
    public CalendarCalendarsInsertRequest withRequest(openapisdk.models.shared.Calendar request) {
        this.request = request;
        return this;
    }
    public CalendarCalendarsInsertSecurity security;
    public CalendarCalendarsInsertRequest withSecurity(CalendarCalendarsInsertSecurity security) {
        this.security = security;
        return this;
    }
}