package openapisdk.models.operations;



public class GetMeWritePermissionsResponse {
    public byte[] body;
    public GetMeWritePermissionsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetMeWritePermissionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetMeWritePermissionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}