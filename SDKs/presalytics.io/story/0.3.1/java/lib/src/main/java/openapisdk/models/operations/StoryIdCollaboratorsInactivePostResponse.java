package openapisdk.models.operations;



public class StoryIdCollaboratorsInactivePostResponse {
    public String contentType;
    public StoryIdCollaboratorsInactivePostResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public StoryIdCollaboratorsInactivePostResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object problemDetail;
    public StoryIdCollaboratorsInactivePostResponse withProblemDetail(Object problemDetail) {
        this.problemDetail = problemDetail;
        return this;
    }
    public openapisdk.models.shared.StoryCollaborator storyCollaborator;
    public StoryIdCollaboratorsInactivePostResponse withStoryCollaborator(openapisdk.models.shared.StoryCollaborator storyCollaborator) {
        this.storyCollaborator = storyCollaborator;
        return this;
    }
}