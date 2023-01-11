package openapisdk.models.operations;



public class CloudbuildProjectsWorkerPoolsListResponse {
    public String contentType;
    public CloudbuildProjectsWorkerPoolsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListWorkerPoolsResponse listWorkerPoolsResponse;
    public CloudbuildProjectsWorkerPoolsListResponse withListWorkerPoolsResponse(openapisdk.models.shared.ListWorkerPoolsResponse listWorkerPoolsResponse) {
        this.listWorkerPoolsResponse = listWorkerPoolsResponse;
        return this;
    }
    public Long statusCode;
    public CloudbuildProjectsWorkerPoolsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}