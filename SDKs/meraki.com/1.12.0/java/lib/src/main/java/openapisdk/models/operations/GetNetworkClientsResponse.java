package openapisdk.models.operations;



public class GetNetworkClientsResponse {
    public String contentType;
    public GetNetworkClientsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetNetworkClientsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetNetworkClientsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> getNetworkClients200ApplicationJSONObject;
    public GetNetworkClientsResponse withGetNetworkClients200ApplicationJsonObject(java.util.Map<String, Object> getNetworkClients200ApplicationJSONObject) {
        this.getNetworkClients200ApplicationJSONObject = getNetworkClients200ApplicationJSONObject;
        return this;
    }
}