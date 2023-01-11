package openapisdk.models.operations;



public class StoryIdFilePostResponse {
    public String contentType;
    public StoryIdFilePostResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public StoryIdFilePostResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object problemDetail;
    public StoryIdFilePostResponse withProblemDetail(Object problemDetail) {
        this.problemDetail = problemDetail;
        return this;
    }
    public openapisdk.models.shared.Story story;
    public StoryIdFilePostResponse withStory(openapisdk.models.shared.Story story) {
        this.story = story;
        return this;
    }
}