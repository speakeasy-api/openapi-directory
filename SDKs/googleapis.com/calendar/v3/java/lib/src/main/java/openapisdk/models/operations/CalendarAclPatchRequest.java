package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CalendarAclPatchRequest {
    public CalendarAclPatchPathParams pathParams;
    public CalendarAclPatchRequest withPathParams(CalendarAclPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CalendarAclPatchQueryParams queryParams;
    public CalendarAclPatchRequest withQueryParams(CalendarAclPatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AclRule request;
    public CalendarAclPatchRequest withRequest(openapisdk.models.shared.AclRule request) {
        this.request = request;
        return this;
    }
    public CalendarAclPatchSecurity security;
    public CalendarAclPatchRequest withSecurity(CalendarAclPatchSecurity security) {
        this.security = security;
        return this;
    }
}