package openapisdk.models.operations;



public class ListSipCredentialResponse {
    public String contentType;
    public ListSipCredentialResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public ListSipCredentialListSipCredentialResponse listSipCredentialResponse;
    public ListSipCredentialResponse withListSipCredentialResponse(ListSipCredentialListSipCredentialResponse listSipCredentialResponse) {
        this.listSipCredentialResponse = listSipCredentialResponse;
        return this;
    }
    public Long statusCode;
    public ListSipCredentialResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}