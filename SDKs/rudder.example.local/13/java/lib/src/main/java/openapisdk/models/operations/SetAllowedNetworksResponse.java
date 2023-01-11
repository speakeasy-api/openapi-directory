package openapisdk.models.operations;



public class SetAllowedNetworksResponse {
    public String contentType;
    public SetAllowedNetworksResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public SetAllowedNetworksResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public SetAllowedNetworks200ApplicationJson setAllowedNetworks200ApplicationJSONObject;
    public SetAllowedNetworksResponse withSetAllowedNetworks200ApplicationJsonObject(SetAllowedNetworks200ApplicationJson setAllowedNetworks200ApplicationJSONObject) {
        this.setAllowedNetworks200ApplicationJSONObject = setAllowedNetworks200ApplicationJSONObject;
        return this;
    }
}