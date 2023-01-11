package openapisdk.models.operations;



public class ProjectsGetV2ProjectsGetResponse {
    public String contentType;
    public ProjectsGetV2ProjectsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.HttpValidationError httpValidationError;
    public ProjectsGetV2ProjectsGetResponse withHttpValidationError(openapisdk.models.shared.HttpValidationError httpValidationError) {
        this.httpValidationError = httpValidationError;
        return this;
    }
    public openapisdk.models.shared.OpenAqProjectsResult openAQProjectsResult;
    public ProjectsGetV2ProjectsGetResponse withOpenAqProjectsResult(openapisdk.models.shared.OpenAqProjectsResult openAQProjectsResult) {
        this.openAQProjectsResult = openAQProjectsResult;
        return this;
    }
    public Long statusCode;
    public ProjectsGetV2ProjectsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}