package openapisdk.models.operations;



public class GetProjectsResponse {
    public String contentType;
    public GetProjectsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ProjectList projectList;
    public GetProjectsResponse withProjectList(openapisdk.models.shared.ProjectList projectList) {
        this.projectList = projectList;
        return this;
    }
    public Long statusCode;
    public GetProjectsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}