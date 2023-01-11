package openapisdk.models.operations;



public class CollectionsListResponse {
    public byte[] body;
    public CollectionsListResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public CollectionsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CollectionsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}