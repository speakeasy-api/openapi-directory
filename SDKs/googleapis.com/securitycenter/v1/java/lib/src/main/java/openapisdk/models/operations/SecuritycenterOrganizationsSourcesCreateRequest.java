package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SecuritycenterOrganizationsSourcesCreateRequest {
    public SecuritycenterOrganizationsSourcesCreatePathParams pathParams;
    public SecuritycenterOrganizationsSourcesCreateRequest withPathParams(SecuritycenterOrganizationsSourcesCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public SecuritycenterOrganizationsSourcesCreateQueryParams queryParams;
    public SecuritycenterOrganizationsSourcesCreateRequest withQueryParams(SecuritycenterOrganizationsSourcesCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Source request;
    public SecuritycenterOrganizationsSourcesCreateRequest withRequest(openapisdk.models.shared.Source request) {
        this.request = request;
        return this;
    }
    public SecuritycenterOrganizationsSourcesCreateSecurity security;
    public SecuritycenterOrganizationsSourcesCreateRequest withSecurity(SecuritycenterOrganizationsSourcesCreateSecurity security) {
        this.security = security;
        return this;
    }
}