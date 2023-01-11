package openapisdk.models.operations;



public class CreateAccountCredentialResponse {
    public String contentType;
    public CreateAccountCredentialResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Credential credential;
    public CreateAccountCredentialResponse withCredential(openapisdk.models.shared.Credential credential) {
        this.credential = credential;
        return this;
    }
    public Long statusCode;
    public CreateAccountCredentialResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}