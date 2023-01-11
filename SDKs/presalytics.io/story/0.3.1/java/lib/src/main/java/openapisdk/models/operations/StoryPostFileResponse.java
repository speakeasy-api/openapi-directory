package openapisdk.models.operations;



public class StoryPostFileResponse {
    public String contentType;
    public StoryPostFileResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public StoryPostFileResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object problemDetail;
    public StoryPostFileResponse withProblemDetail(Object problemDetail) {
        this.problemDetail = problemDetail;
        return this;
    }
    public openapisdk.models.shared.Story story;
    public StoryPostFileResponse withStory(openapisdk.models.shared.Story story) {
        this.story = story;
        return this;
    }
}