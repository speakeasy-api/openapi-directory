package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ClouddeployProjectsLocationsTargetsPatchRequest {
    public ClouddeployProjectsLocationsTargetsPatchPathParams pathParams;
    public ClouddeployProjectsLocationsTargetsPatchRequest withPathParams(ClouddeployProjectsLocationsTargetsPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ClouddeployProjectsLocationsTargetsPatchQueryParams queryParams;
    public ClouddeployProjectsLocationsTargetsPatchRequest withQueryParams(ClouddeployProjectsLocationsTargetsPatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.TargetInput request;
    public ClouddeployProjectsLocationsTargetsPatchRequest withRequest(openapisdk.models.shared.TargetInput request) {
        this.request = request;
        return this;
    }
    public ClouddeployProjectsLocationsTargetsPatchSecurity security;
    public ClouddeployProjectsLocationsTargetsPatchRequest withSecurity(ClouddeployProjectsLocationsTargetsPatchSecurity security) {
        this.security = security;
        return this;
    }
}