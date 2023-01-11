package openapisdk.models.operations;



public class DfareportingProjectsGetResponse {
    public String contentType;
    public DfareportingProjectsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Project project;
    public DfareportingProjectsGetResponse withProject(openapisdk.models.shared.Project project) {
        this.project = project;
        return this;
    }
    public Long statusCode;
    public DfareportingProjectsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}