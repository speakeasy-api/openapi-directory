package openapisdk.models.operations;



public class ReplicapoolReplicasGetResponse {
    public byte[] body;
    public ReplicapoolReplicasGetResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public ReplicapoolReplicasGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ReplicapoolReplicasGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}