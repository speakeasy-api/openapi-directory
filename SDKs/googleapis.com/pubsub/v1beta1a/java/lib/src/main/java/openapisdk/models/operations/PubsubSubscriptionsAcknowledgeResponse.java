package openapisdk.models.operations;



public class PubsubSubscriptionsAcknowledgeResponse {
    public String contentType;
    public PubsubSubscriptionsAcknowledgeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> empty;
    public PubsubSubscriptionsAcknowledgeResponse withEmpty(java.util.Map<String, Object> empty) {
        this.empty = empty;
        return this;
    }
    public Long statusCode;
    public PubsubSubscriptionsAcknowledgeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}