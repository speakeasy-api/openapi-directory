package openapisdk.models.operations;



public class GetNetworksIdResponse {
    public String contentType;
    public GetNetworksIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetNetworksIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetNetworksId200ApplicationJson getNetworksId200ApplicationJSONObject;
    public GetNetworksIdResponse withGetNetworksId200ApplicationJsonObject(GetNetworksId200ApplicationJson getNetworksId200ApplicationJSONObject) {
        this.getNetworksId200ApplicationJSONObject = getNetworksId200ApplicationJSONObject;
        return this;
    }
}