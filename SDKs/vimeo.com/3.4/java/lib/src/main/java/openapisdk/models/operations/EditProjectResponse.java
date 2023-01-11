package openapisdk.models.operations;



public class EditProjectResponse {
    public String contentType;
    public EditProjectResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public EditProjectResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public EditProjectResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.Project project;
    public EditProjectResponse withProject(openapisdk.models.shared.Project project) {
        this.project = project;
        return this;
    }
}