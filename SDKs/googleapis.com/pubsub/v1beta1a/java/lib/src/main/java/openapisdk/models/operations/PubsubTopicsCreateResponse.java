package openapisdk.models.operations;



public class PubsubTopicsCreateResponse {
    public String contentType;
    public PubsubTopicsCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PubsubTopicsCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Topic topic;
    public PubsubTopicsCreateResponse withTopic(openapisdk.models.shared.Topic topic) {
        this.topic = topic;
        return this;
    }
}