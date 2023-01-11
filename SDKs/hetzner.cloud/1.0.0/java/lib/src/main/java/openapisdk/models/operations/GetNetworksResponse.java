package openapisdk.models.operations;



public class GetNetworksResponse {
    public String contentType;
    public GetNetworksResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetNetworksResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetNetworks200ApplicationJson getNetworks200ApplicationJSONObject;
    public GetNetworksResponse withGetNetworks200ApplicationJsonObject(GetNetworks200ApplicationJson getNetworks200ApplicationJSONObject) {
        this.getNetworks200ApplicationJSONObject = getNetworks200ApplicationJSONObject;
        return this;
    }
}