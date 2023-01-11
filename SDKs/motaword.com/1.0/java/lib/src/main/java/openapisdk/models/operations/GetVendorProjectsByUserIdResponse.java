package openapisdk.models.operations;



public class GetVendorProjectsByUserIdResponse {
    public String contentType;
    public GetVendorProjectsByUserIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetVendorProjectsByUserIdResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.ProjectList projectList;
    public GetVendorProjectsByUserIdResponse withProjectList(openapisdk.models.shared.ProjectList projectList) {
        this.projectList = projectList;
        return this;
    }
    public Long statusCode;
    public GetVendorProjectsByUserIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}