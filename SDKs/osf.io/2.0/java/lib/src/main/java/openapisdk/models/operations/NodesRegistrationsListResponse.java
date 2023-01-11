package openapisdk.models.operations;



public class NodesRegistrationsListResponse {
    public byte[] body;
    public NodesRegistrationsListResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public NodesRegistrationsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public NodesRegistrationsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}