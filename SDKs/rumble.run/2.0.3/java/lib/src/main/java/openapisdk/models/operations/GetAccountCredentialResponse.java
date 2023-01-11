package openapisdk.models.operations;



public class GetAccountCredentialResponse {
    public String contentType;
    public GetAccountCredentialResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Credential credential;
    public GetAccountCredentialResponse withCredential(openapisdk.models.shared.Credential credential) {
        this.credential = credential;
        return this;
    }
    public Long statusCode;
    public GetAccountCredentialResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}