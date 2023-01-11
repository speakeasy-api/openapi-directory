package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CalendarAclWatchRequest {
    public CalendarAclWatchPathParams pathParams;
    public CalendarAclWatchRequest withPathParams(CalendarAclWatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CalendarAclWatchQueryParams queryParams;
    public CalendarAclWatchRequest withQueryParams(CalendarAclWatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Channel request;
    public CalendarAclWatchRequest withRequest(openapisdk.models.shared.Channel request) {
        this.request = request;
        return this;
    }
    public CalendarAclWatchSecurity security;
    public CalendarAclWatchRequest withSecurity(CalendarAclWatchSecurity security) {
        this.security = security;
        return this;
    }
}