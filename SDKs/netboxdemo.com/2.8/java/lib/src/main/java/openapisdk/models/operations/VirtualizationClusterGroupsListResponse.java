package openapisdk.models.operations;



public class VirtualizationClusterGroupsListResponse {
    public String contentType;
    public VirtualizationClusterGroupsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public VirtualizationClusterGroupsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public VirtualizationClusterGroupsList200ApplicationJson virtualizationClusterGroupsList200ApplicationJSONObject;
    public VirtualizationClusterGroupsListResponse withVirtualizationClusterGroupsList200ApplicationJsonObject(VirtualizationClusterGroupsList200ApplicationJson virtualizationClusterGroupsList200ApplicationJSONObject) {
        this.virtualizationClusterGroupsList200ApplicationJSONObject = virtualizationClusterGroupsList200ApplicationJSONObject;
        return this;
    }
}