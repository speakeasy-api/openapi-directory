package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AccesscontextmanagerOrganizationsGcpUserAccessBindingsCreateRequest {
    public AccesscontextmanagerOrganizationsGcpUserAccessBindingsCreatePathParams pathParams;
    public AccesscontextmanagerOrganizationsGcpUserAccessBindingsCreateRequest withPathParams(AccesscontextmanagerOrganizationsGcpUserAccessBindingsCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AccesscontextmanagerOrganizationsGcpUserAccessBindingsCreateQueryParams queryParams;
    public AccesscontextmanagerOrganizationsGcpUserAccessBindingsCreateRequest withQueryParams(AccesscontextmanagerOrganizationsGcpUserAccessBindingsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GcpUserAccessBinding request;
    public AccesscontextmanagerOrganizationsGcpUserAccessBindingsCreateRequest withRequest(openapisdk.models.shared.GcpUserAccessBinding request) {
        this.request = request;
        return this;
    }
    public AccesscontextmanagerOrganizationsGcpUserAccessBindingsCreateSecurity security;
    public AccesscontextmanagerOrganizationsGcpUserAccessBindingsCreateRequest withSecurity(AccesscontextmanagerOrganizationsGcpUserAccessBindingsCreateSecurity security) {
        this.security = security;
        return this;
    }
}