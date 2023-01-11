package openapisdk.models.operations;



public class ListEnvironmentResponse {
    public String contentType;
    public ListEnvironmentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public ListEnvironmentListEnvironmentResponse listEnvironmentResponse;
    public ListEnvironmentResponse withListEnvironmentResponse(ListEnvironmentListEnvironmentResponse listEnvironmentResponse) {
        this.listEnvironmentResponse = listEnvironmentResponse;
        return this;
    }
    public Long statusCode;
    public ListEnvironmentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}