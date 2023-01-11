package openapisdk.models.operations;



public class VmmigrationProjectsLocationsSourcesMigratingVmsListResponse {
    public String contentType;
    public VmmigrationProjectsLocationsSourcesMigratingVmsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListMigratingVmsResponse listMigratingVmsResponse;
    public VmmigrationProjectsLocationsSourcesMigratingVmsListResponse withListMigratingVmsResponse(openapisdk.models.shared.ListMigratingVmsResponse listMigratingVmsResponse) {
        this.listMigratingVmsResponse = listMigratingVmsResponse;
        return this;
    }
    public Long statusCode;
    public VmmigrationProjectsLocationsSourcesMigratingVmsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}