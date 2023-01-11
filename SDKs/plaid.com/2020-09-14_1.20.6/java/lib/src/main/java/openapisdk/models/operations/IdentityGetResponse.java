package openapisdk.models.operations;



public class IdentityGetResponse {
    public String contentType;
    public IdentityGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> identityGetResponse;
    public IdentityGetResponse withIdentityGetResponse(java.util.Map<String, Object> identityGetResponse) {
        this.identityGetResponse = identityGetResponse;
        return this;
    }
    public Long statusCode;
    public IdentityGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}