package openapisdk.models.operations;



public class VmmigrationProjectsLocationsGroupsListResponse {
    public String contentType;
    public VmmigrationProjectsLocationsGroupsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListGroupsResponse listGroupsResponse;
    public VmmigrationProjectsLocationsGroupsListResponse withListGroupsResponse(openapisdk.models.shared.ListGroupsResponse listGroupsResponse) {
        this.listGroupsResponse = listGroupsResponse;
        return this;
    }
    public Long statusCode;
    public VmmigrationProjectsLocationsGroupsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}