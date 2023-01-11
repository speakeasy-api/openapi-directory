package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudschedulerProjectsLocationsJobsPauseRequest {
    public CloudschedulerProjectsLocationsJobsPausePathParams pathParams;
    public CloudschedulerProjectsLocationsJobsPauseRequest withPathParams(CloudschedulerProjectsLocationsJobsPausePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CloudschedulerProjectsLocationsJobsPauseQueryParams queryParams;
    public CloudschedulerProjectsLocationsJobsPauseRequest withQueryParams(CloudschedulerProjectsLocationsJobsPauseQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public CloudschedulerProjectsLocationsJobsPauseRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
    public CloudschedulerProjectsLocationsJobsPauseSecurity security;
    public CloudschedulerProjectsLocationsJobsPauseRequest withSecurity(CloudschedulerProjectsLocationsJobsPauseSecurity security) {
        this.security = security;
        return this;
    }
}