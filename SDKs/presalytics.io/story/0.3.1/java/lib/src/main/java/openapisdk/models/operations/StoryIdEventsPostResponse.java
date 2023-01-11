package openapisdk.models.operations;



public class StoryIdEventsPostResponse {
    public String contentType;
    public StoryIdEventsPostResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public StoryIdEventsPostResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object problemDetail;
    public StoryIdEventsPostResponse withProblemDetail(Object problemDetail) {
        this.problemDetail = problemDetail;
        return this;
    }
    public java.util.Map<String, Object> storyIdEventsPost200ApplicationJSONObject;
    public StoryIdEventsPostResponse withStoryIdEventsPost200ApplicationJsonObject(java.util.Map<String, Object> storyIdEventsPost200ApplicationJSONObject) {
        this.storyIdEventsPost200ApplicationJSONObject = storyIdEventsPost200ApplicationJSONObject;
        return this;
    }
}