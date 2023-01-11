package openapisdk.models.operations;



public class GetNetworkPiiRequestResponse {
    public String contentType;
    public GetNetworkPiiRequestResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetNetworkPiiRequestResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> getNetworkPiiRequest200ApplicationJSONObject;
    public GetNetworkPiiRequestResponse withGetNetworkPiiRequest200ApplicationJsonObject(java.util.Map<String, Object> getNetworkPiiRequest200ApplicationJSONObject) {
        this.getNetworkPiiRequest200ApplicationJSONObject = getNetworkPiiRequest200ApplicationJSONObject;
        return this;
    }
}