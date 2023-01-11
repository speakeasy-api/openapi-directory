package openapisdk.models.operations;



public class LaunchProjectResponse {
    public String contentType;
    public LaunchProjectResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public LaunchProjectResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.ProjectLaunchResponse projectLaunchResponse;
    public LaunchProjectResponse withProjectLaunchResponse(openapisdk.models.shared.ProjectLaunchResponse projectLaunchResponse) {
        this.projectLaunchResponse = projectLaunchResponse;
        return this;
    }
    public Long statusCode;
    public LaunchProjectResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}