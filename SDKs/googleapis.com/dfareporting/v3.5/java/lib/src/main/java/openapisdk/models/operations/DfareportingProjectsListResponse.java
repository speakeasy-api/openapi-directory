package openapisdk.models.operations;



public class DfareportingProjectsListResponse {
    public String contentType;
    public DfareportingProjectsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ProjectsListResponse projectsListResponse;
    public DfareportingProjectsListResponse withProjectsListResponse(openapisdk.models.shared.ProjectsListResponse projectsListResponse) {
        this.projectsListResponse = projectsListResponse;
        return this;
    }
    public Long statusCode;
    public DfareportingProjectsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}