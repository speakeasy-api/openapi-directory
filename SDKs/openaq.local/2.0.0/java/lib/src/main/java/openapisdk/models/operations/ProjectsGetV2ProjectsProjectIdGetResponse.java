package openapisdk.models.operations;



public class ProjectsGetV2ProjectsProjectIdGetResponse {
    public String contentType;
    public ProjectsGetV2ProjectsProjectIdGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.HttpValidationError httpValidationError;
    public ProjectsGetV2ProjectsProjectIdGetResponse withHttpValidationError(openapisdk.models.shared.HttpValidationError httpValidationError) {
        this.httpValidationError = httpValidationError;
        return this;
    }
    public openapisdk.models.shared.OpenAqProjectsResult openAQProjectsResult;
    public ProjectsGetV2ProjectsProjectIdGetResponse withOpenAqProjectsResult(openapisdk.models.shared.OpenAqProjectsResult openAQProjectsResult) {
        this.openAQProjectsResult = openAQProjectsResult;
        return this;
    }
    public Long statusCode;
    public ProjectsGetV2ProjectsProjectIdGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}