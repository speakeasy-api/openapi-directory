package openapisdk.models.operations;



public class GetAppsVersionsResponse {
    public byte[] body;
    public GetAppsVersionsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetAppsVersionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetAppsVersionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}