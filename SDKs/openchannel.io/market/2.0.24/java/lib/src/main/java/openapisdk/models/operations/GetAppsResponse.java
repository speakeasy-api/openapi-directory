package openapisdk.models.operations;



public class GetAppsResponse {
    public byte[] body;
    public GetAppsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetAppsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetAppsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}