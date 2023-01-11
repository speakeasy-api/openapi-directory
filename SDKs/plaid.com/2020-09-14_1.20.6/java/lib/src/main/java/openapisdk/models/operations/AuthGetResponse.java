package openapisdk.models.operations;



public class AuthGetResponse {
    public java.util.Map<String, Object> authGetResponse;
    public AuthGetResponse withAuthGetResponse(java.util.Map<String, Object> authGetResponse) {
        this.authGetResponse = authGetResponse;
        return this;
    }
    public String contentType;
    public AuthGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> error;
    public AuthGetResponse withError(java.util.Map<String, Object> error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public AuthGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}