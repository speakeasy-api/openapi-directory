package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SecuritycenterProjectsSourcesFindingsSetStateRequest {
    public SecuritycenterProjectsSourcesFindingsSetStatePathParams pathParams;
    public SecuritycenterProjectsSourcesFindingsSetStateRequest withPathParams(SecuritycenterProjectsSourcesFindingsSetStatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public SecuritycenterProjectsSourcesFindingsSetStateQueryParams queryParams;
    public SecuritycenterProjectsSourcesFindingsSetStateRequest withQueryParams(SecuritycenterProjectsSourcesFindingsSetStateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SetFindingStateRequest request;
    public SecuritycenterProjectsSourcesFindingsSetStateRequest withRequest(openapisdk.models.shared.SetFindingStateRequest request) {
        this.request = request;
        return this;
    }
    public SecuritycenterProjectsSourcesFindingsSetStateSecurity security;
    public SecuritycenterProjectsSourcesFindingsSetStateRequest withSecurity(SecuritycenterProjectsSourcesFindingsSetStateSecurity security) {
        this.security = security;
        return this;
    }
}