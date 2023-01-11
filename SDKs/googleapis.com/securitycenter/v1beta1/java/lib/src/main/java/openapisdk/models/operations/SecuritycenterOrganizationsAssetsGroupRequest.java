package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SecuritycenterOrganizationsAssetsGroupRequest {
    public SecuritycenterOrganizationsAssetsGroupPathParams pathParams;
    public SecuritycenterOrganizationsAssetsGroupRequest withPathParams(SecuritycenterOrganizationsAssetsGroupPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public SecuritycenterOrganizationsAssetsGroupQueryParams queryParams;
    public SecuritycenterOrganizationsAssetsGroupRequest withQueryParams(SecuritycenterOrganizationsAssetsGroupQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GroupAssetsRequest request;
    public SecuritycenterOrganizationsAssetsGroupRequest withRequest(openapisdk.models.shared.GroupAssetsRequest request) {
        this.request = request;
        return this;
    }
    public SecuritycenterOrganizationsAssetsGroupSecurity security;
    public SecuritycenterOrganizationsAssetsGroupRequest withSecurity(SecuritycenterOrganizationsAssetsGroupSecurity security) {
        this.security = security;
        return this;
    }
}