package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CalendarAclUpdateRequest {
    public CalendarAclUpdatePathParams pathParams;
    public CalendarAclUpdateRequest withPathParams(CalendarAclUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CalendarAclUpdateQueryParams queryParams;
    public CalendarAclUpdateRequest withQueryParams(CalendarAclUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AclRule request;
    public CalendarAclUpdateRequest withRequest(openapisdk.models.shared.AclRule request) {
        this.request = request;
        return this;
    }
    public CalendarAclUpdateSecurity security;
    public CalendarAclUpdateRequest withSecurity(CalendarAclUpdateSecurity security) {
        this.security = security;
        return this;
    }
}