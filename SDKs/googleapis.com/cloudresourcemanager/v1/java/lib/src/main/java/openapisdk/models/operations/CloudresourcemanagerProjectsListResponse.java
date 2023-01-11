package openapisdk.models.operations;



public class CloudresourcemanagerProjectsListResponse {
    public String contentType;
    public CloudresourcemanagerProjectsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListProjectsResponse listProjectsResponse;
    public CloudresourcemanagerProjectsListResponse withListProjectsResponse(openapisdk.models.shared.ListProjectsResponse listProjectsResponse) {
        this.listProjectsResponse = listProjectsResponse;
        return this;
    }
    public Long statusCode;
    public CloudresourcemanagerProjectsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}