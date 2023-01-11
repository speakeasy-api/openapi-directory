package openapisdk.models.operations;



public class OsconfigProjectsLocationsInstancesInventoriesListResponse {
    public String contentType;
    public OsconfigProjectsLocationsInstancesInventoriesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListInventoriesResponse listInventoriesResponse;
    public OsconfigProjectsLocationsInstancesInventoriesListResponse withListInventoriesResponse(openapisdk.models.shared.ListInventoriesResponse listInventoriesResponse) {
        this.listInventoriesResponse = listInventoriesResponse;
        return this;
    }
    public Long statusCode;
    public OsconfigProjectsLocationsInstancesInventoriesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}