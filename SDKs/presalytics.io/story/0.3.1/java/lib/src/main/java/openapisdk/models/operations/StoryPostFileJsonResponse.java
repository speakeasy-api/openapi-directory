package openapisdk.models.operations;



public class StoryPostFileJsonResponse {
    public String contentType;
    public StoryPostFileJsonResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public StoryPostFileJsonResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object problemDetail;
    public StoryPostFileJsonResponse withProblemDetail(Object problemDetail) {
        this.problemDetail = problemDetail;
        return this;
    }
    public openapisdk.models.shared.Story story;
    public StoryPostFileJsonResponse withStory(openapisdk.models.shared.Story story) {
        this.story = story;
        return this;
    }
}