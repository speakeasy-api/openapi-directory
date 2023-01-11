package openapisdk.models.operations;



public class GetAllowedNetworksResponse {
    public String contentType;
    public GetAllowedNetworksResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetAllowedNetworksResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetAllowedNetworks200ApplicationJson getAllowedNetworks200ApplicationJSONObject;
    public GetAllowedNetworksResponse withGetAllowedNetworks200ApplicationJsonObject(GetAllowedNetworks200ApplicationJson getAllowedNetworks200ApplicationJSONObject) {
        this.getAllowedNetworks200ApplicationJSONObject = getAllowedNetworks200ApplicationJSONObject;
        return this;
    }
}