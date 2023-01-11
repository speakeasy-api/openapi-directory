package openapisdk.models.operations;



public class VmmigrationProjectsLocationsTargetProjectsListResponse {
    public String contentType;
    public VmmigrationProjectsLocationsTargetProjectsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListTargetProjectsResponse listTargetProjectsResponse;
    public VmmigrationProjectsLocationsTargetProjectsListResponse withListTargetProjectsResponse(openapisdk.models.shared.ListTargetProjectsResponse listTargetProjectsResponse) {
        this.listTargetProjectsResponse = listTargetProjectsResponse;
        return this;
    }
    public Long statusCode;
    public VmmigrationProjectsLocationsTargetProjectsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}