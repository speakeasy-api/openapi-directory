package openapisdk.models.operations;



public class CreateContinuousProjectResponse {
    public String contentType;
    public CreateContinuousProjectResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ContinuousProject continuousProject;
    public CreateContinuousProjectResponse withContinuousProject(openapisdk.models.shared.ContinuousProject continuousProject) {
        this.continuousProject = continuousProject;
        return this;
    }
    public Long statusCode;
    public CreateContinuousProjectResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}