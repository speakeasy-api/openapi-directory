package openapisdk.models.operations;



public class GetMeCommentsToIdResponse {
    public byte[] body;
    public GetMeCommentsToIdResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetMeCommentsToIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetMeCommentsToIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}