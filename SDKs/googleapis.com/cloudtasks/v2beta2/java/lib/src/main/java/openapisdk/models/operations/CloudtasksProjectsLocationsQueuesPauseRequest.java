package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudtasksProjectsLocationsQueuesPauseRequest {
    public CloudtasksProjectsLocationsQueuesPausePathParams pathParams;
    public CloudtasksProjectsLocationsQueuesPauseRequest withPathParams(CloudtasksProjectsLocationsQueuesPausePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CloudtasksProjectsLocationsQueuesPauseQueryParams queryParams;
    public CloudtasksProjectsLocationsQueuesPauseRequest withQueryParams(CloudtasksProjectsLocationsQueuesPauseQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public CloudtasksProjectsLocationsQueuesPauseRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
    public CloudtasksProjectsLocationsQueuesPauseSecurity security;
    public CloudtasksProjectsLocationsQueuesPauseRequest withSecurity(CloudtasksProjectsLocationsQueuesPauseSecurity security) {
        this.security = security;
        return this;
    }
}