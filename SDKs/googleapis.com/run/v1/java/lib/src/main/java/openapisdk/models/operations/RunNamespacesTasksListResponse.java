package openapisdk.models.operations;



public class RunNamespacesTasksListResponse {
    public String contentType;
    public RunNamespacesTasksListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListTasksResponse listTasksResponse;
    public RunNamespacesTasksListResponse withListTasksResponse(openapisdk.models.shared.ListTasksResponse listTasksResponse) {
        this.listTasksResponse = listTasksResponse;
        return this;
    }
    public Long statusCode;
    public RunNamespacesTasksListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}