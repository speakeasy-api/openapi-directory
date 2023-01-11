package openapisdk.models.operations;



public class ListSigningKeyResponse {
    public String contentType;
    public ListSigningKeyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public ListSigningKeyListSigningKeyResponse listSigningKeyResponse;
    public ListSigningKeyResponse withListSigningKeyResponse(ListSigningKeyListSigningKeyResponse listSigningKeyResponse) {
        this.listSigningKeyResponse = listSigningKeyResponse;
        return this;
    }
    public Long statusCode;
    public ListSigningKeyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}