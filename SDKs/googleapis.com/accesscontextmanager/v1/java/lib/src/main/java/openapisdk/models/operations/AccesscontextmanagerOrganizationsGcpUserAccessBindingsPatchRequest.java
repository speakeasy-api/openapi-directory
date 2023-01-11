package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AccesscontextmanagerOrganizationsGcpUserAccessBindingsPatchRequest {
    public AccesscontextmanagerOrganizationsGcpUserAccessBindingsPatchPathParams pathParams;
    public AccesscontextmanagerOrganizationsGcpUserAccessBindingsPatchRequest withPathParams(AccesscontextmanagerOrganizationsGcpUserAccessBindingsPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AccesscontextmanagerOrganizationsGcpUserAccessBindingsPatchQueryParams queryParams;
    public AccesscontextmanagerOrganizationsGcpUserAccessBindingsPatchRequest withQueryParams(AccesscontextmanagerOrganizationsGcpUserAccessBindingsPatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GcpUserAccessBinding request;
    public AccesscontextmanagerOrganizationsGcpUserAccessBindingsPatchRequest withRequest(openapisdk.models.shared.GcpUserAccessBinding request) {
        this.request = request;
        return this;
    }
    public AccesscontextmanagerOrganizationsGcpUserAccessBindingsPatchSecurity security;
    public AccesscontextmanagerOrganizationsGcpUserAccessBindingsPatchRequest withSecurity(AccesscontextmanagerOrganizationsGcpUserAccessBindingsPatchSecurity security) {
        this.security = security;
        return this;
    }
}