package openapisdk.models.operations;



public class StoryIdCollaboratorsPostResponse {
    public String contentType;
    public StoryIdCollaboratorsPostResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public StoryIdCollaboratorsPostResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object problemDetail;
    public StoryIdCollaboratorsPostResponse withProblemDetail(Object problemDetail) {
        this.problemDetail = problemDetail;
        return this;
    }
    public openapisdk.models.shared.StoryCollaborator storyCollaborator;
    public StoryIdCollaboratorsPostResponse withStoryCollaborator(openapisdk.models.shared.StoryCollaborator storyCollaborator) {
        this.storyCollaborator = storyCollaborator;
        return this;
    }
}