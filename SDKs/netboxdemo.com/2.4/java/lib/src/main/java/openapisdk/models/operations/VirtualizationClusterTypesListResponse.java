package openapisdk.models.operations;



public class VirtualizationClusterTypesListResponse {
    public String contentType;
    public VirtualizationClusterTypesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public VirtualizationClusterTypesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public VirtualizationClusterTypesList200ApplicationJson virtualizationClusterTypesList200ApplicationJSONObject;
    public VirtualizationClusterTypesListResponse withVirtualizationClusterTypesList200ApplicationJsonObject(VirtualizationClusterTypesList200ApplicationJson virtualizationClusterTypesList200ApplicationJSONObject) {
        this.virtualizationClusterTypesList200ApplicationJSONObject = virtualizationClusterTypesList200ApplicationJSONObject;
        return this;
    }
}