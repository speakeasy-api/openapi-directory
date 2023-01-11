package openapisdk.models.operations;



public class VirtualizationClustersListResponse {
    public String contentType;
    public VirtualizationClustersListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public VirtualizationClustersListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public VirtualizationClustersList200ApplicationJson virtualizationClustersList200ApplicationJSONObject;
    public VirtualizationClustersListResponse withVirtualizationClustersList200ApplicationJsonObject(VirtualizationClustersList200ApplicationJson virtualizationClustersList200ApplicationJSONObject) {
        this.virtualizationClustersList200ApplicationJSONObject = virtualizationClustersList200ApplicationJSONObject;
        return this;
    }
}