package openapisdk.models.operations;



public class GetObjectStatusDiffUsingGetResponse {
    public byte[] body;
    public GetObjectStatusDiffUsingGetResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetObjectStatusDiffUsingGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetObjectStatusDiffUsingGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}