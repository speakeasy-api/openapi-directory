package openapisdk.models.operations;



public class ProjectsCreateResponse {
    public String contentType;
    public ProjectsCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ProjectResponse projectResponse;
    public ProjectsCreateResponse withProjectResponse(openapisdk.models.shared.ProjectResponse projectResponse) {
        this.projectResponse = projectResponse;
        return this;
    }
    public Long statusCode;
    public ProjectsCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}