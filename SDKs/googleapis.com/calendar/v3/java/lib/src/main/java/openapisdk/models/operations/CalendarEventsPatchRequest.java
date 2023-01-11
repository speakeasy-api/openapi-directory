package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CalendarEventsPatchRequest {
    public CalendarEventsPatchPathParams pathParams;
    public CalendarEventsPatchRequest withPathParams(CalendarEventsPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CalendarEventsPatchQueryParams queryParams;
    public CalendarEventsPatchRequest withQueryParams(CalendarEventsPatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Event request;
    public CalendarEventsPatchRequest withRequest(openapisdk.models.shared.Event request) {
        this.request = request;
        return this;
    }
    public CalendarEventsPatchSecurity security;
    public CalendarEventsPatchRequest withSecurity(CalendarEventsPatchSecurity security) {
        this.security = security;
        return this;
    }
}