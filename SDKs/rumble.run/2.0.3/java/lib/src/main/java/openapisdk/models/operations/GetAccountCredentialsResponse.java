package openapisdk.models.operations;



public class GetAccountCredentialsResponse {
    public String contentType;
    public GetAccountCredentialsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Credential[] credentials;
    public GetAccountCredentialsResponse withCredentials(openapisdk.models.shared.Credential[] credentials) {
        this.credentials = credentials;
        return this;
    }
    public Long statusCode;
    public GetAccountCredentialsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}