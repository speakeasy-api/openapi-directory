package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudtasksProjectsLocationsQueuesTasksBufferRequest {
    public CloudtasksProjectsLocationsQueuesTasksBufferPathParams pathParams;
    public CloudtasksProjectsLocationsQueuesTasksBufferRequest withPathParams(CloudtasksProjectsLocationsQueuesTasksBufferPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CloudtasksProjectsLocationsQueuesTasksBufferQueryParams queryParams;
    public CloudtasksProjectsLocationsQueuesTasksBufferRequest withQueryParams(CloudtasksProjectsLocationsQueuesTasksBufferQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.BufferTaskRequest request;
    public CloudtasksProjectsLocationsQueuesTasksBufferRequest withRequest(openapisdk.models.shared.BufferTaskRequest request) {
        this.request = request;
        return this;
    }
    public CloudtasksProjectsLocationsQueuesTasksBufferSecurity security;
    public CloudtasksProjectsLocationsQueuesTasksBufferRequest withSecurity(CloudtasksProjectsLocationsQueuesTasksBufferSecurity security) {
        this.security = security;
        return this;
    }
}