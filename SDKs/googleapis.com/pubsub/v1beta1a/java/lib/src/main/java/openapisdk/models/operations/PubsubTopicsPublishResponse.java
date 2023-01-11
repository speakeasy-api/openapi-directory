package openapisdk.models.operations;



public class PubsubTopicsPublishResponse {
    public String contentType;
    public PubsubTopicsPublishResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> empty;
    public PubsubTopicsPublishResponse withEmpty(java.util.Map<String, Object> empty) {
        this.empty = empty;
        return this;
    }
    public Long statusCode;
    public PubsubTopicsPublishResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}