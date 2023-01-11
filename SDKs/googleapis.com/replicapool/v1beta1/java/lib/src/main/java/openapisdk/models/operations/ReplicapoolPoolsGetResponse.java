package openapisdk.models.operations;



public class ReplicapoolPoolsGetResponse {
    public byte[] body;
    public ReplicapoolPoolsGetResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public ReplicapoolPoolsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ReplicapoolPoolsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}