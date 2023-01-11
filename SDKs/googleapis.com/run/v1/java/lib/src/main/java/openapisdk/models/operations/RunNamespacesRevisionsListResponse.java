package openapisdk.models.operations;



public class RunNamespacesRevisionsListResponse {
    public String contentType;
    public RunNamespacesRevisionsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListRevisionsResponse listRevisionsResponse;
    public RunNamespacesRevisionsListResponse withListRevisionsResponse(openapisdk.models.shared.ListRevisionsResponse listRevisionsResponse) {
        this.listRevisionsResponse = listRevisionsResponse;
        return this;
    }
    public Long statusCode;
    public RunNamespacesRevisionsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}