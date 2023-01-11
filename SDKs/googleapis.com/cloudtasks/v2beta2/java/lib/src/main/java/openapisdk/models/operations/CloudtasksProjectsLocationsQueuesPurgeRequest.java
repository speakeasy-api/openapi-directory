package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudtasksProjectsLocationsQueuesPurgeRequest {
    public CloudtasksProjectsLocationsQueuesPurgePathParams pathParams;
    public CloudtasksProjectsLocationsQueuesPurgeRequest withPathParams(CloudtasksProjectsLocationsQueuesPurgePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CloudtasksProjectsLocationsQueuesPurgeQueryParams queryParams;
    public CloudtasksProjectsLocationsQueuesPurgeRequest withQueryParams(CloudtasksProjectsLocationsQueuesPurgeQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public CloudtasksProjectsLocationsQueuesPurgeRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
    public CloudtasksProjectsLocationsQueuesPurgeSecurity security;
    public CloudtasksProjectsLocationsQueuesPurgeRequest withSecurity(CloudtasksProjectsLocationsQueuesPurgeSecurity security) {
        this.security = security;
        return this;
    }
}