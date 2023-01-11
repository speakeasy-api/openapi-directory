package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SecuritycenterProjectsAssetsGroupRequest {
    public SecuritycenterProjectsAssetsGroupPathParams pathParams;
    public SecuritycenterProjectsAssetsGroupRequest withPathParams(SecuritycenterProjectsAssetsGroupPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public SecuritycenterProjectsAssetsGroupQueryParams queryParams;
    public SecuritycenterProjectsAssetsGroupRequest withQueryParams(SecuritycenterProjectsAssetsGroupQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GroupAssetsRequest request;
    public SecuritycenterProjectsAssetsGroupRequest withRequest(openapisdk.models.shared.GroupAssetsRequest request) {
        this.request = request;
        return this;
    }
    public SecuritycenterProjectsAssetsGroupSecurity security;
    public SecuritycenterProjectsAssetsGroupRequest withSecurity(SecuritycenterProjectsAssetsGroupSecurity security) {
        this.security = security;
        return this;
    }
}