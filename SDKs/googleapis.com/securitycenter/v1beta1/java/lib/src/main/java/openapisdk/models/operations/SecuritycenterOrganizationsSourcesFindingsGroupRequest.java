package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SecuritycenterOrganizationsSourcesFindingsGroupRequest {
    public SecuritycenterOrganizationsSourcesFindingsGroupPathParams pathParams;
    public SecuritycenterOrganizationsSourcesFindingsGroupRequest withPathParams(SecuritycenterOrganizationsSourcesFindingsGroupPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public SecuritycenterOrganizationsSourcesFindingsGroupQueryParams queryParams;
    public SecuritycenterOrganizationsSourcesFindingsGroupRequest withQueryParams(SecuritycenterOrganizationsSourcesFindingsGroupQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GroupFindingsRequest request;
    public SecuritycenterOrganizationsSourcesFindingsGroupRequest withRequest(openapisdk.models.shared.GroupFindingsRequest request) {
        this.request = request;
        return this;
    }
    public SecuritycenterOrganizationsSourcesFindingsGroupSecurity security;
    public SecuritycenterOrganizationsSourcesFindingsGroupRequest withSecurity(SecuritycenterOrganizationsSourcesFindingsGroupSecurity security) {
        this.security = security;
        return this;
    }
}