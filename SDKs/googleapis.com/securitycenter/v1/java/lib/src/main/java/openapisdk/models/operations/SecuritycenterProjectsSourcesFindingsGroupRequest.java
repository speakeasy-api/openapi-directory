package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SecuritycenterProjectsSourcesFindingsGroupRequest {
    public SecuritycenterProjectsSourcesFindingsGroupPathParams pathParams;
    public SecuritycenterProjectsSourcesFindingsGroupRequest withPathParams(SecuritycenterProjectsSourcesFindingsGroupPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public SecuritycenterProjectsSourcesFindingsGroupQueryParams queryParams;
    public SecuritycenterProjectsSourcesFindingsGroupRequest withQueryParams(SecuritycenterProjectsSourcesFindingsGroupQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GroupFindingsRequest request;
    public SecuritycenterProjectsSourcesFindingsGroupRequest withRequest(openapisdk.models.shared.GroupFindingsRequest request) {
        this.request = request;
        return this;
    }
    public SecuritycenterProjectsSourcesFindingsGroupSecurity security;
    public SecuritycenterProjectsSourcesFindingsGroupRequest withSecurity(SecuritycenterProjectsSourcesFindingsGroupSecurity security) {
        this.security = security;
        return this;
    }
}