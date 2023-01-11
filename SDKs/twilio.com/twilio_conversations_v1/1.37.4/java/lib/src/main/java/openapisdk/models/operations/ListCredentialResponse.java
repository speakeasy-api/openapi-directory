package openapisdk.models.operations;



public class ListCredentialResponse {
    public String contentType;
    public ListCredentialResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public ListCredentialListCredentialResponse listCredentialResponse;
    public ListCredentialResponse withListCredentialResponse(ListCredentialListCredentialResponse listCredentialResponse) {
        this.listCredentialResponse = listCredentialResponse;
        return this;
    }
    public Long statusCode;
    public ListCredentialResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}