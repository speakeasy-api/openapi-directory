package openapisdk.models.operations;



public class GetNetworkSnmpResponse {
    public String contentType;
    public GetNetworkSnmpResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetNetworkSnmpResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> getNetworkSnmp200ApplicationJSONObject;
    public GetNetworkSnmpResponse withGetNetworkSnmp200ApplicationJsonObject(java.util.Map<String, Object> getNetworkSnmp200ApplicationJSONObject) {
        this.getNetworkSnmp200ApplicationJSONObject = getNetworkSnmp200ApplicationJSONObject;
        return this;
    }
}