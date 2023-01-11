package openapisdk.models.operations;



public class GetAuthResponse {
    public openapisdk.models.shared.AuthResult authResult;
    public GetAuthResponse withAuthResult(openapisdk.models.shared.AuthResult authResult) {
        this.authResult = authResult;
        return this;
    }
    public String contentType;
    public GetAuthResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetAuthResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}