package openapisdk.models.operations;



public class StoryIdMessagesGetResponse {
    public String contentType;
    public StoryIdMessagesGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public StoryIdMessagesGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object[] messages;
    public StoryIdMessagesGetResponse withMessages(Object[] messages) {
        this.messages = messages;
        return this;
    }
    public Object problemDetail;
    public StoryIdMessagesGetResponse withProblemDetail(Object problemDetail) {
        this.problemDetail = problemDetail;
        return this;
    }
}