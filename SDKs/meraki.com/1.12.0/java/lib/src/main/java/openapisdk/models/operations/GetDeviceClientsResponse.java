package openapisdk.models.operations;



public class GetDeviceClientsResponse {
    public String contentType;
    public GetDeviceClientsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetDeviceClientsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> getDeviceClients200ApplicationJSONObject;
    public GetDeviceClientsResponse withGetDeviceClients200ApplicationJsonObject(java.util.Map<String, Object> getDeviceClients200ApplicationJSONObject) {
        this.getDeviceClients200ApplicationJSONObject = getDeviceClients200ApplicationJSONObject;
        return this;
    }
}