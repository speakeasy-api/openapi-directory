package openapisdk.models.operations;



public class NotebooksProjectsLocationsInstancesUpdateMetadataItemsResponse {
    public String contentType;
    public NotebooksProjectsLocationsInstancesUpdateMetadataItemsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public NotebooksProjectsLocationsInstancesUpdateMetadataItemsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UpdateInstanceMetadataItemsResponse updateInstanceMetadataItemsResponse;
    public NotebooksProjectsLocationsInstancesUpdateMetadataItemsResponse withUpdateInstanceMetadataItemsResponse(openapisdk.models.shared.UpdateInstanceMetadataItemsResponse updateInstanceMetadataItemsResponse) {
        this.updateInstanceMetadataItemsResponse = updateInstanceMetadataItemsResponse;
        return this;
    }
}