package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CalendarEventsImportRequest {
    public CalendarEventsImportPathParams pathParams;
    public CalendarEventsImportRequest withPathParams(CalendarEventsImportPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CalendarEventsImportQueryParams queryParams;
    public CalendarEventsImportRequest withQueryParams(CalendarEventsImportQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Event request;
    public CalendarEventsImportRequest withRequest(openapisdk.models.shared.Event request) {
        this.request = request;
        return this;
    }
    public CalendarEventsImportSecurity security;
    public CalendarEventsImportRequest withSecurity(CalendarEventsImportSecurity security) {
        this.security = security;
        return this;
    }
}