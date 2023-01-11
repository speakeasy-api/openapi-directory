package openapisdk.models.operations;



public class UpdateContinuousProjectResponse {
    public String contentType;
    public UpdateContinuousProjectResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ContinuousProject continuousProject;
    public UpdateContinuousProjectResponse withContinuousProject(openapisdk.models.shared.ContinuousProject continuousProject) {
        this.continuousProject = continuousProject;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public UpdateContinuousProjectResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public UpdateContinuousProjectResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}