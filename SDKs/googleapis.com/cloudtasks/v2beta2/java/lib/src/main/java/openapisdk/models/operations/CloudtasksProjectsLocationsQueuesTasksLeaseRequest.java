package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudtasksProjectsLocationsQueuesTasksLeaseRequest {
    public CloudtasksProjectsLocationsQueuesTasksLeasePathParams pathParams;
    public CloudtasksProjectsLocationsQueuesTasksLeaseRequest withPathParams(CloudtasksProjectsLocationsQueuesTasksLeasePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CloudtasksProjectsLocationsQueuesTasksLeaseQueryParams queryParams;
    public CloudtasksProjectsLocationsQueuesTasksLeaseRequest withQueryParams(CloudtasksProjectsLocationsQueuesTasksLeaseQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.LeaseTasksRequest request;
    public CloudtasksProjectsLocationsQueuesTasksLeaseRequest withRequest(openapisdk.models.shared.LeaseTasksRequest request) {
        this.request = request;
        return this;
    }
    public CloudtasksProjectsLocationsQueuesTasksLeaseSecurity security;
    public CloudtasksProjectsLocationsQueuesTasksLeaseRequest withSecurity(CloudtasksProjectsLocationsQueuesTasksLeaseSecurity security) {
        this.security = security;
        return this;
    }
}