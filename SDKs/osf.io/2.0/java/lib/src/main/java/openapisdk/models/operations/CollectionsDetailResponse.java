package openapisdk.models.operations;



public class CollectionsDetailResponse {
    public byte[] body;
    public CollectionsDetailResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public CollectionsDetailResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CollectionsDetailResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}