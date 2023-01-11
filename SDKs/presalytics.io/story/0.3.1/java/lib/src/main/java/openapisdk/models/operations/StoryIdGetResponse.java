package openapisdk.models.operations;



public class StoryIdGetResponse {
    public String contentType;
    public StoryIdGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public StoryIdGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object problemDetail;
    public StoryIdGetResponse withProblemDetail(Object problemDetail) {
        this.problemDetail = problemDetail;
        return this;
    }
    public openapisdk.models.shared.Story story;
    public StoryIdGetResponse withStory(openapisdk.models.shared.Story story) {
        this.story = story;
        return this;
    }
}