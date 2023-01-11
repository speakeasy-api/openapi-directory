package openapisdk.models.operations;



public class CollectNowResponse {
    public byte[] body;
    public CollectNowResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public CollectNowResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CollectNowResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}