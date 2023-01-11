package openapisdk.models.operations;



public class GetUsersUserEmailProgressResponse {
    public String contentType;
    public GetUsersUserEmailProgressResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetUsersUserEmailProgressResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.LearnerResponse learnerResponse;
    public GetUsersUserEmailProgressResponse withLearnerResponse(openapisdk.models.shared.LearnerResponse learnerResponse) {
        this.learnerResponse = learnerResponse;
        return this;
    }
    public Long statusCode;
    public GetUsersUserEmailProgressResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}