package openapisdk.models.operations;



public class StoryIdPutResponse {
    public String contentType;
    public StoryIdPutResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public StoryIdPutResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object problemDetail;
    public StoryIdPutResponse withProblemDetail(Object problemDetail) {
        this.problemDetail = problemDetail;
        return this;
    }
    public openapisdk.models.shared.Story story;
    public StoryIdPutResponse withStory(openapisdk.models.shared.Story story) {
        this.story = story;
        return this;
    }
}