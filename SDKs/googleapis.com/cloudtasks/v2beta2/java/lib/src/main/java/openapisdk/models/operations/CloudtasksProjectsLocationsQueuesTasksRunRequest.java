package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudtasksProjectsLocationsQueuesTasksRunRequest {
    public CloudtasksProjectsLocationsQueuesTasksRunPathParams pathParams;
    public CloudtasksProjectsLocationsQueuesTasksRunRequest withPathParams(CloudtasksProjectsLocationsQueuesTasksRunPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CloudtasksProjectsLocationsQueuesTasksRunQueryParams queryParams;
    public CloudtasksProjectsLocationsQueuesTasksRunRequest withQueryParams(CloudtasksProjectsLocationsQueuesTasksRunQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.RunTaskRequest request;
    public CloudtasksProjectsLocationsQueuesTasksRunRequest withRequest(openapisdk.models.shared.RunTaskRequest request) {
        this.request = request;
        return this;
    }
    public CloudtasksProjectsLocationsQueuesTasksRunSecurity security;
    public CloudtasksProjectsLocationsQueuesTasksRunRequest withSecurity(CloudtasksProjectsLocationsQueuesTasksRunSecurity security) {
        this.security = security;
        return this;
    }
}