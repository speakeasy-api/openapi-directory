package openapisdk.models.operations;



public class CloudtasksProjectsLocationsQueuesTasksLeaseResponse {
    public String contentType;
    public CloudtasksProjectsLocationsQueuesTasksLeaseResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.LeaseTasksResponse leaseTasksResponse;
    public CloudtasksProjectsLocationsQueuesTasksLeaseResponse withLeaseTasksResponse(openapisdk.models.shared.LeaseTasksResponse leaseTasksResponse) {
        this.leaseTasksResponse = leaseTasksResponse;
        return this;
    }
    public Long statusCode;
    public CloudtasksProjectsLocationsQueuesTasksLeaseResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}