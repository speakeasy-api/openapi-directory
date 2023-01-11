package openapisdk.models.operations;



public class StoryIdCollaboratorsGetResponse {
    public String contentType;
    public StoryIdCollaboratorsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public StoryIdCollaboratorsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object problemDetail;
    public StoryIdCollaboratorsGetResponse withProblemDetail(Object problemDetail) {
        this.problemDetail = problemDetail;
        return this;
    }
    public openapisdk.models.shared.StoryCollaborator[] storyCollaborators;
    public StoryIdCollaboratorsGetResponse withStoryCollaborators(openapisdk.models.shared.StoryCollaborator[] storyCollaborators) {
        this.storyCollaborators = storyCollaborators;
        return this;
    }
}