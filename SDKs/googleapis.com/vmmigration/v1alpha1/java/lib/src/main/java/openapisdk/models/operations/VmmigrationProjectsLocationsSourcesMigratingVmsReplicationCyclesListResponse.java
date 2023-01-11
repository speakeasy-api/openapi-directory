package openapisdk.models.operations;



public class VmmigrationProjectsLocationsSourcesMigratingVmsReplicationCyclesListResponse {
    public String contentType;
    public VmmigrationProjectsLocationsSourcesMigratingVmsReplicationCyclesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListReplicationCyclesResponse listReplicationCyclesResponse;
    public VmmigrationProjectsLocationsSourcesMigratingVmsReplicationCyclesListResponse withListReplicationCyclesResponse(openapisdk.models.shared.ListReplicationCyclesResponse listReplicationCyclesResponse) {
        this.listReplicationCyclesResponse = listReplicationCyclesResponse;
        return this;
    }
    public Long statusCode;
    public VmmigrationProjectsLocationsSourcesMigratingVmsReplicationCyclesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}