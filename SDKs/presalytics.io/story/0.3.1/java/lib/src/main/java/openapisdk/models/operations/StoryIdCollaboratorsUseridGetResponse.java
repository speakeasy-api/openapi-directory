package openapisdk.models.operations;



public class StoryIdCollaboratorsUseridGetResponse {
    public String contentType;
    public StoryIdCollaboratorsUseridGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public StoryIdCollaboratorsUseridGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object problemDetail;
    public StoryIdCollaboratorsUseridGetResponse withProblemDetail(Object problemDetail) {
        this.problemDetail = problemDetail;
        return this;
    }
    public openapisdk.models.shared.StoryCollaborator storyCollaborator;
    public StoryIdCollaboratorsUseridGetResponse withStoryCollaborator(openapisdk.models.shared.StoryCollaborator storyCollaborator) {
        this.storyCollaborator = storyCollaborator;
        return this;
    }
}