package openapisdk.models.operations;



public class RunNamespacesExecutionsListResponse {
    public String contentType;
    public RunNamespacesExecutionsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListExecutionsResponse listExecutionsResponse;
    public RunNamespacesExecutionsListResponse withListExecutionsResponse(openapisdk.models.shared.ListExecutionsResponse listExecutionsResponse) {
        this.listExecutionsResponse = listExecutionsResponse;
        return this;
    }
    public Long statusCode;
    public RunNamespacesExecutionsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}