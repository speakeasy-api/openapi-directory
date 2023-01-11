package openapisdk.models.operations;



public class GetVendorProjectsResponse {
    public String contentType;
    public GetVendorProjectsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetVendorProjectsResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.ProjectList projectList;
    public GetVendorProjectsResponse withProjectList(openapisdk.models.shared.ProjectList projectList) {
        this.projectList = projectList;
        return this;
    }
    public Long statusCode;
    public GetVendorProjectsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}