package openapisdk.models.operations;



public class ProjectsListResponse {
    public String contentType;
    public ProjectsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Project project;
    public ProjectsListResponse withProject(openapisdk.models.shared.Project project) {
        this.project = project;
        return this;
    }
    public Long statusCode;
    public ProjectsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}