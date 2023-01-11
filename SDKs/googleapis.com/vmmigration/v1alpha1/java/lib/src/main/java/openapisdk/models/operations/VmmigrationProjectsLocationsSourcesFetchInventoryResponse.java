package openapisdk.models.operations;



public class VmmigrationProjectsLocationsSourcesFetchInventoryResponse {
    public String contentType;
    public VmmigrationProjectsLocationsSourcesFetchInventoryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.FetchInventoryResponse fetchInventoryResponse;
    public VmmigrationProjectsLocationsSourcesFetchInventoryResponse withFetchInventoryResponse(openapisdk.models.shared.FetchInventoryResponse fetchInventoryResponse) {
        this.fetchInventoryResponse = fetchInventoryResponse;
        return this;
    }
    public Long statusCode;
    public VmmigrationProjectsLocationsSourcesFetchInventoryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}