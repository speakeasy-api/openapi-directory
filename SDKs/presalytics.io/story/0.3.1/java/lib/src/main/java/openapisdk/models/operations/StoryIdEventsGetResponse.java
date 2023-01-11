package openapisdk.models.operations;



public class StoryIdEventsGetResponse {
    public String contentType;
    public StoryIdEventsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public StoryIdEventsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Event[] events;
    public StoryIdEventsGetResponse withEvents(openapisdk.models.shared.Event[] events) {
        this.events = events;
        return this;
    }
    public Object problemDetail;
    public StoryIdEventsGetResponse withProblemDetail(Object problemDetail) {
        this.problemDetail = problemDetail;
        return this;
    }
}