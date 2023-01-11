package openapisdk.models.operations;



public class RunNamespacesRoutesListResponse {
    public String contentType;
    public RunNamespacesRoutesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListRoutesResponse listRoutesResponse;
    public RunNamespacesRoutesListResponse withListRoutesResponse(openapisdk.models.shared.ListRoutesResponse listRoutesResponse) {
        this.listRoutesResponse = listRoutesResponse;
        return this;
    }
    public Long statusCode;
    public RunNamespacesRoutesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}