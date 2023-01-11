package openapisdk.models.operations;



public class GetObjectStatusCountUsingGetResponse {
    public byte[] body;
    public GetObjectStatusCountUsingGetResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetObjectStatusCountUsingGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetObjectStatusCountUsingGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}