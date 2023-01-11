package openapisdk.models.operations;



public class GetAppsAppIdResponse {
    public byte[] body;
    public GetAppsAppIdResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetAppsAppIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetAppsAppIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}