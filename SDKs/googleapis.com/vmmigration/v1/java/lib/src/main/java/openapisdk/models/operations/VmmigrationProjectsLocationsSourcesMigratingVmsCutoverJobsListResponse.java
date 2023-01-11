package openapisdk.models.operations;



public class VmmigrationProjectsLocationsSourcesMigratingVmsCutoverJobsListResponse {
    public String contentType;
    public VmmigrationProjectsLocationsSourcesMigratingVmsCutoverJobsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListCutoverJobsResponse listCutoverJobsResponse;
    public VmmigrationProjectsLocationsSourcesMigratingVmsCutoverJobsListResponse withListCutoverJobsResponse(openapisdk.models.shared.ListCutoverJobsResponse listCutoverJobsResponse) {
        this.listCutoverJobsResponse = listCutoverJobsResponse;
        return this;
    }
    public Long statusCode;
    public VmmigrationProjectsLocationsSourcesMigratingVmsCutoverJobsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}