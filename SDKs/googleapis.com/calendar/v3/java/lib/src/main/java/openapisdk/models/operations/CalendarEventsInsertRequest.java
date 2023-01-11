package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CalendarEventsInsertRequest {
    public CalendarEventsInsertPathParams pathParams;
    public CalendarEventsInsertRequest withPathParams(CalendarEventsInsertPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CalendarEventsInsertQueryParams queryParams;
    public CalendarEventsInsertRequest withQueryParams(CalendarEventsInsertQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Event request;
    public CalendarEventsInsertRequest withRequest(openapisdk.models.shared.Event request) {
        this.request = request;
        return this;
    }
    public CalendarEventsInsertSecurity security;
    public CalendarEventsInsertRequest withSecurity(CalendarEventsInsertSecurity security) {
        this.security = security;
        return this;
    }
}