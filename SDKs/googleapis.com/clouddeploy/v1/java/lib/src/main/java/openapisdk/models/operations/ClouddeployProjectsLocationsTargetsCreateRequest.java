package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ClouddeployProjectsLocationsTargetsCreateRequest {
    public ClouddeployProjectsLocationsTargetsCreatePathParams pathParams;
    public ClouddeployProjectsLocationsTargetsCreateRequest withPathParams(ClouddeployProjectsLocationsTargetsCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ClouddeployProjectsLocationsTargetsCreateQueryParams queryParams;
    public ClouddeployProjectsLocationsTargetsCreateRequest withQueryParams(ClouddeployProjectsLocationsTargetsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.TargetInput request;
    public ClouddeployProjectsLocationsTargetsCreateRequest withRequest(openapisdk.models.shared.TargetInput request) {
        this.request = request;
        return this;
    }
    public ClouddeployProjectsLocationsTargetsCreateSecurity security;
    public ClouddeployProjectsLocationsTargetsCreateRequest withSecurity(ClouddeployProjectsLocationsTargetsCreateSecurity security) {
        this.security = security;
        return this;
    }
}