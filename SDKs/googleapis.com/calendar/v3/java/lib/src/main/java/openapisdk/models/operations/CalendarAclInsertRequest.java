package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CalendarAclInsertRequest {
    public CalendarAclInsertPathParams pathParams;
    public CalendarAclInsertRequest withPathParams(CalendarAclInsertPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CalendarAclInsertQueryParams queryParams;
    public CalendarAclInsertRequest withQueryParams(CalendarAclInsertQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AclRule request;
    public CalendarAclInsertRequest withRequest(openapisdk.models.shared.AclRule request) {
        this.request = request;
        return this;
    }
    public CalendarAclInsertSecurity security;
    public CalendarAclInsertRequest withSecurity(CalendarAclInsertSecurity security) {
        this.security = security;
        return this;
    }
}