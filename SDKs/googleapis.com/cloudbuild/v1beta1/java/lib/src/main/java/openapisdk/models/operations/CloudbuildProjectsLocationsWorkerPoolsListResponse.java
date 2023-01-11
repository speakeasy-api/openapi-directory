package openapisdk.models.operations;



public class CloudbuildProjectsLocationsWorkerPoolsListResponse {
    public String contentType;
    public CloudbuildProjectsLocationsWorkerPoolsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListWorkerPoolsResponse listWorkerPoolsResponse;
    public CloudbuildProjectsLocationsWorkerPoolsListResponse withListWorkerPoolsResponse(openapisdk.models.shared.ListWorkerPoolsResponse listWorkerPoolsResponse) {
        this.listWorkerPoolsResponse = listWorkerPoolsResponse;
        return this;
    }
    public Long statusCode;
    public CloudbuildProjectsLocationsWorkerPoolsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}