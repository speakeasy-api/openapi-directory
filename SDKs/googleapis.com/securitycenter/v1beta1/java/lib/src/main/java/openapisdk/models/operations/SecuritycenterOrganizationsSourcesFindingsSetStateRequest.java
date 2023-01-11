package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SecuritycenterOrganizationsSourcesFindingsSetStateRequest {
    public SecuritycenterOrganizationsSourcesFindingsSetStatePathParams pathParams;
    public SecuritycenterOrganizationsSourcesFindingsSetStateRequest withPathParams(SecuritycenterOrganizationsSourcesFindingsSetStatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public SecuritycenterOrganizationsSourcesFindingsSetStateQueryParams queryParams;
    public SecuritycenterOrganizationsSourcesFindingsSetStateRequest withQueryParams(SecuritycenterOrganizationsSourcesFindingsSetStateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SetFindingStateRequest request;
    public SecuritycenterOrganizationsSourcesFindingsSetStateRequest withRequest(openapisdk.models.shared.SetFindingStateRequest request) {
        this.request = request;
        return this;
    }
    public SecuritycenterOrganizationsSourcesFindingsSetStateSecurity security;
    public SecuritycenterOrganizationsSourcesFindingsSetStateRequest withSecurity(SecuritycenterOrganizationsSourcesFindingsSetStateSecurity security) {
        this.security = security;
        return this;
    }
}