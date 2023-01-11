package openapisdk.models.operations;



public class VirtualizationInterfacesListResponse {
    public String contentType;
    public VirtualizationInterfacesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public VirtualizationInterfacesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public VirtualizationInterfacesList200ApplicationJson virtualizationInterfacesList200ApplicationJSONObject;
    public VirtualizationInterfacesListResponse withVirtualizationInterfacesList200ApplicationJsonObject(VirtualizationInterfacesList200ApplicationJson virtualizationInterfacesList200ApplicationJSONObject) {
        this.virtualizationInterfacesList200ApplicationJSONObject = virtualizationInterfacesList200ApplicationJSONObject;
        return this;
    }
}