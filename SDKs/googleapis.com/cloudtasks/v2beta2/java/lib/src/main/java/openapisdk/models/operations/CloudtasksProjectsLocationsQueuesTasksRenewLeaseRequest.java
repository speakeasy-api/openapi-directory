package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudtasksProjectsLocationsQueuesTasksRenewLeaseRequest {
    public CloudtasksProjectsLocationsQueuesTasksRenewLeasePathParams pathParams;
    public CloudtasksProjectsLocationsQueuesTasksRenewLeaseRequest withPathParams(CloudtasksProjectsLocationsQueuesTasksRenewLeasePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CloudtasksProjectsLocationsQueuesTasksRenewLeaseQueryParams queryParams;
    public CloudtasksProjectsLocationsQueuesTasksRenewLeaseRequest withQueryParams(CloudtasksProjectsLocationsQueuesTasksRenewLeaseQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.RenewLeaseRequest request;
    public CloudtasksProjectsLocationsQueuesTasksRenewLeaseRequest withRequest(openapisdk.models.shared.RenewLeaseRequest request) {
        this.request = request;
        return this;
    }
    public CloudtasksProjectsLocationsQueuesTasksRenewLeaseSecurity security;
    public CloudtasksProjectsLocationsQueuesTasksRenewLeaseRequest withSecurity(CloudtasksProjectsLocationsQueuesTasksRenewLeaseSecurity security) {
        this.security = security;
        return this;
    }
}