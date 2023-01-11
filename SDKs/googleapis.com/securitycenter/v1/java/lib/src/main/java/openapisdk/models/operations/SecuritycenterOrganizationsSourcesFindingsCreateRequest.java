package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SecuritycenterOrganizationsSourcesFindingsCreateRequest {
    public SecuritycenterOrganizationsSourcesFindingsCreatePathParams pathParams;
    public SecuritycenterOrganizationsSourcesFindingsCreateRequest withPathParams(SecuritycenterOrganizationsSourcesFindingsCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public SecuritycenterOrganizationsSourcesFindingsCreateQueryParams queryParams;
    public SecuritycenterOrganizationsSourcesFindingsCreateRequest withQueryParams(SecuritycenterOrganizationsSourcesFindingsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.FindingInput request;
    public SecuritycenterOrganizationsSourcesFindingsCreateRequest withRequest(openapisdk.models.shared.FindingInput request) {
        this.request = request;
        return this;
    }
    public SecuritycenterOrganizationsSourcesFindingsCreateSecurity security;
    public SecuritycenterOrganizationsSourcesFindingsCreateRequest withSecurity(SecuritycenterOrganizationsSourcesFindingsCreateSecurity security) {
        this.security = security;
        return this;
    }
}