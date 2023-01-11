package openapisdk.models.operations;



public class VmmigrationProjectsLocationsSourcesMigratingVmsCloneJobsListResponse {
    public String contentType;
    public VmmigrationProjectsLocationsSourcesMigratingVmsCloneJobsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListCloneJobsResponse listCloneJobsResponse;
    public VmmigrationProjectsLocationsSourcesMigratingVmsCloneJobsListResponse withListCloneJobsResponse(openapisdk.models.shared.ListCloneJobsResponse listCloneJobsResponse) {
        this.listCloneJobsResponse = listCloneJobsResponse;
        return this;
    }
    public Long statusCode;
    public VmmigrationProjectsLocationsSourcesMigratingVmsCloneJobsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}