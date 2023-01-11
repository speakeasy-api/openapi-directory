package openapisdk.models.operations;



public class PubsubTopicsGetResponse {
    public String contentType;
    public PubsubTopicsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PubsubTopicsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Topic topic;
    public PubsubTopicsGetResponse withTopic(openapisdk.models.shared.Topic topic) {
        this.topic = topic;
        return this;
    }
}