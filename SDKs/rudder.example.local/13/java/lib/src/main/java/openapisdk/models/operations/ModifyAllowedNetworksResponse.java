package openapisdk.models.operations;



public class ModifyAllowedNetworksResponse {
    public String contentType;
    public ModifyAllowedNetworksResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ModifyAllowedNetworksResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public ModifyAllowedNetworks200ApplicationJson modifyAllowedNetworks200ApplicationJSONObject;
    public ModifyAllowedNetworksResponse withModifyAllowedNetworks200ApplicationJsonObject(ModifyAllowedNetworks200ApplicationJson modifyAllowedNetworks200ApplicationJSONObject) {
        this.modifyAllowedNetworks200ApplicationJSONObject = modifyAllowedNetworks200ApplicationJSONObject;
        return this;
    }
}