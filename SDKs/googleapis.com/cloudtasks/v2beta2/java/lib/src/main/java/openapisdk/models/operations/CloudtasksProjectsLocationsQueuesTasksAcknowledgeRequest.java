package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudtasksProjectsLocationsQueuesTasksAcknowledgeRequest {
    public CloudtasksProjectsLocationsQueuesTasksAcknowledgePathParams pathParams;
    public CloudtasksProjectsLocationsQueuesTasksAcknowledgeRequest withPathParams(CloudtasksProjectsLocationsQueuesTasksAcknowledgePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CloudtasksProjectsLocationsQueuesTasksAcknowledgeQueryParams queryParams;
    public CloudtasksProjectsLocationsQueuesTasksAcknowledgeRequest withQueryParams(CloudtasksProjectsLocationsQueuesTasksAcknowledgeQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AcknowledgeTaskRequest request;
    public CloudtasksProjectsLocationsQueuesTasksAcknowledgeRequest withRequest(openapisdk.models.shared.AcknowledgeTaskRequest request) {
        this.request = request;
        return this;
    }
    public CloudtasksProjectsLocationsQueuesTasksAcknowledgeSecurity security;
    public CloudtasksProjectsLocationsQueuesTasksAcknowledgeRequest withSecurity(CloudtasksProjectsLocationsQueuesTasksAcknowledgeSecurity security) {
        this.security = security;
        return this;
    }
}