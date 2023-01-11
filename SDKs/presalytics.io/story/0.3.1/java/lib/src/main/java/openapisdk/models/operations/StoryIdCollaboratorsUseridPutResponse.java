package openapisdk.models.operations;



public class StoryIdCollaboratorsUseridPutResponse {
    public String contentType;
    public StoryIdCollaboratorsUseridPutResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public StoryIdCollaboratorsUseridPutResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object problemDetail;
    public StoryIdCollaboratorsUseridPutResponse withProblemDetail(Object problemDetail) {
        this.problemDetail = problemDetail;
        return this;
    }
    public openapisdk.models.shared.StoryCollaborator storyCollaborator;
    public StoryIdCollaboratorsUseridPutResponse withStoryCollaborator(openapisdk.models.shared.StoryCollaborator storyCollaborator) {
        this.storyCollaborator = storyCollaborator;
        return this;
    }
}