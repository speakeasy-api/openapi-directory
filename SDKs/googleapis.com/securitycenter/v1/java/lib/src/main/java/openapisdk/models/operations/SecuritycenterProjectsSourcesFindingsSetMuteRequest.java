package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SecuritycenterProjectsSourcesFindingsSetMuteRequest {
    public SecuritycenterProjectsSourcesFindingsSetMutePathParams pathParams;
    public SecuritycenterProjectsSourcesFindingsSetMuteRequest withPathParams(SecuritycenterProjectsSourcesFindingsSetMutePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public SecuritycenterProjectsSourcesFindingsSetMuteQueryParams queryParams;
    public SecuritycenterProjectsSourcesFindingsSetMuteRequest withQueryParams(SecuritycenterProjectsSourcesFindingsSetMuteQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SetMuteRequest request;
    public SecuritycenterProjectsSourcesFindingsSetMuteRequest withRequest(openapisdk.models.shared.SetMuteRequest request) {
        this.request = request;
        return this;
    }
    public SecuritycenterProjectsSourcesFindingsSetMuteSecurity security;
    public SecuritycenterProjectsSourcesFindingsSetMuteRequest withSecurity(SecuritycenterProjectsSourcesFindingsSetMuteSecurity security) {
        this.security = security;
        return this;
    }
}