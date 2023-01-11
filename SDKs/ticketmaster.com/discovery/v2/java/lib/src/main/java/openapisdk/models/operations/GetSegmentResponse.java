package openapisdk.models.operations;



public class GetSegmentResponse {
    public byte[] body;
    public GetSegmentResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetSegmentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetSegmentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}