package openapisdk.models.operations;



public class GetProjectsAlt1Response {
    public String contentType;
    public GetProjectsAlt1Response withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetProjectsAlt1Response withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetProjectsAlt1Response withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.Project[] projects;
    public GetProjectsAlt1Response withProjects(openapisdk.models.shared.Project[] projects) {
        this.projects = projects;
        return this;
    }
}