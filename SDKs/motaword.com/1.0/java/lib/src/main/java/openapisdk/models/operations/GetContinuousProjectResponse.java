package openapisdk.models.operations;



public class GetContinuousProjectResponse {
    public String contentType;
    public GetContinuousProjectResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ContinuousProject continuousProject;
    public GetContinuousProjectResponse withContinuousProject(openapisdk.models.shared.ContinuousProject continuousProject) {
        this.continuousProject = continuousProject;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetContinuousProjectResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public GetContinuousProjectResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}