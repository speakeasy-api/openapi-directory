package openapisdk.models.operations;



public class StoryPostResponse {
    public String contentType;
    public StoryPostResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public StoryPostResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object problemDetail;
    public StoryPostResponse withProblemDetail(Object problemDetail) {
        this.problemDetail = problemDetail;
        return this;
    }
    public openapisdk.models.shared.Story story;
    public StoryPostResponse withStory(openapisdk.models.shared.Story story) {
        this.story = story;
        return this;
    }
}