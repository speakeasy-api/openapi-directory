package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudschedulerProjectsLocationsJobsPatchRequest {
    public CloudschedulerProjectsLocationsJobsPatchPathParams pathParams;
    public CloudschedulerProjectsLocationsJobsPatchRequest withPathParams(CloudschedulerProjectsLocationsJobsPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CloudschedulerProjectsLocationsJobsPatchQueryParams queryParams;
    public CloudschedulerProjectsLocationsJobsPatchRequest withQueryParams(CloudschedulerProjectsLocationsJobsPatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Job request;
    public CloudschedulerProjectsLocationsJobsPatchRequest withRequest(openapisdk.models.shared.Job request) {
        this.request = request;
        return this;
    }
    public CloudschedulerProjectsLocationsJobsPatchSecurity security;
    public CloudschedulerProjectsLocationsJobsPatchRequest withSecurity(CloudschedulerProjectsLocationsJobsPatchSecurity security) {
        this.security = security;
        return this;
    }
}