package openapisdk.models.operations;



public class GetMajorProjectsResponse {
    public String contentType;
    public GetMajorProjectsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetMajorProjectsResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.MajorProject[] majorProjects;
    public GetMajorProjectsResponse withMajorProjects(openapisdk.models.shared.MajorProject[] majorProjects) {
        this.majorProjects = majorProjects;
        return this;
    }
    public Long statusCode;
    public GetMajorProjectsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}