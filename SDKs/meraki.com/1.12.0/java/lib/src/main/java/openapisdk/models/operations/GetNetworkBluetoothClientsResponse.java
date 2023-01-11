package openapisdk.models.operations;



public class GetNetworkBluetoothClientsResponse {
    public String contentType;
    public GetNetworkBluetoothClientsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetNetworkBluetoothClientsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetNetworkBluetoothClientsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> getNetworkBluetoothClients200ApplicationJSONObject;
    public GetNetworkBluetoothClientsResponse withGetNetworkBluetoothClients200ApplicationJsonObject(java.util.Map<String, Object> getNetworkBluetoothClients200ApplicationJSONObject) {
        this.getNetworkBluetoothClients200ApplicationJSONObject = getNetworkBluetoothClients200ApplicationJSONObject;
        return this;
    }
}