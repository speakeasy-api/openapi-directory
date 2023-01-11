package openapisdk.models.operations;



public class StoryGetResponse {
    public String contentType;
    public StoryGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public StoryGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object problemDetail;
    public StoryGetResponse withProblemDetail(Object problemDetail) {
        this.problemDetail = problemDetail;
        return this;
    }
    public openapisdk.models.shared.Story[] stories;
    public StoryGetResponse withStories(openapisdk.models.shared.Story[] stories) {
        this.stories = stories;
        return this;
    }
}