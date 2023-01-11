package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudtasksProjectsLocationsQueuesTasksCancelLeaseRequest {
    public CloudtasksProjectsLocationsQueuesTasksCancelLeasePathParams pathParams;
    public CloudtasksProjectsLocationsQueuesTasksCancelLeaseRequest withPathParams(CloudtasksProjectsLocationsQueuesTasksCancelLeasePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CloudtasksProjectsLocationsQueuesTasksCancelLeaseQueryParams queryParams;
    public CloudtasksProjectsLocationsQueuesTasksCancelLeaseRequest withQueryParams(CloudtasksProjectsLocationsQueuesTasksCancelLeaseQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CancelLeaseRequest request;
    public CloudtasksProjectsLocationsQueuesTasksCancelLeaseRequest withRequest(openapisdk.models.shared.CancelLeaseRequest request) {
        this.request = request;
        return this;
    }
    public CloudtasksProjectsLocationsQueuesTasksCancelLeaseSecurity security;
    public CloudtasksProjectsLocationsQueuesTasksCancelLeaseRequest withSecurity(CloudtasksProjectsLocationsQueuesTasksCancelLeaseSecurity security) {
        this.security = security;
        return this;
    }
}