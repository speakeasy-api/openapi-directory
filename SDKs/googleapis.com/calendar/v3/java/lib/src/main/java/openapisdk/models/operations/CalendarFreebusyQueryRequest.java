package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CalendarFreebusyQueryRequest {
    public CalendarFreebusyQueryQueryParams queryParams;
    public CalendarFreebusyQueryRequest withQueryParams(CalendarFreebusyQueryQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.FreeBusyRequest request;
    public CalendarFreebusyQueryRequest withRequest(openapisdk.models.shared.FreeBusyRequest request) {
        this.request = request;
        return this;
    }
    public CalendarFreebusyQuerySecurity security;
    public CalendarFreebusyQueryRequest withSecurity(CalendarFreebusyQuerySecurity security) {
        this.security = security;
        return this;
    }
}