package openapisdk.models.operations;



public class GetObjectsWithReferenceCountUsingGetResponse {
    public byte[] body;
    public GetObjectsWithReferenceCountUsingGetResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetObjectsWithReferenceCountUsingGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetObjectsWithReferenceCountUsingGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}