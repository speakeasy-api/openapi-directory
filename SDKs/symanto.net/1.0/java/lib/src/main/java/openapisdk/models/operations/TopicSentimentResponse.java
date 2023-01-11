package openapisdk.models.operations;



public class TopicSentimentResponse {
    public String contentType;
    public TopicSentimentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public TopicSentimentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TopicSentimentOutput[] topicSentimentResponse;
    public TopicSentimentResponse withTopicSentimentResponse(openapisdk.models.shared.TopicSentimentOutput[] topicSentimentResponse) {
        this.topicSentimentResponse = topicSentimentResponse;
        return this;
    }
}