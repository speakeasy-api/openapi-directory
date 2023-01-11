package openapisdk.models.operations;



public class GetProjectsReportResponse {
    public String contentType;
    public GetProjectsReportResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetProjectsReportResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.ProjectList projectList;
    public GetProjectsReportResponse withProjectList(openapisdk.models.shared.ProjectList projectList) {
        this.projectList = projectList;
        return this;
    }
    public Long statusCode;
    public GetProjectsReportResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}