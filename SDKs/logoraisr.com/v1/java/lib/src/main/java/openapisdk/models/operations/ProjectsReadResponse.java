package openapisdk.models.operations;



public class ProjectsReadResponse {
    public String contentType;
    public ProjectsReadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Project project;
    public ProjectsReadResponse withProject(openapisdk.models.shared.Project project) {
        this.project = project;
        return this;
    }
    public Long statusCode;
    public ProjectsReadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}