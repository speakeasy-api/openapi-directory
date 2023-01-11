package openapisdk.models.operations;



public class ProvisionNetworkClientsResponse {
    public String contentType;
    public ProvisionNetworkClientsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ProvisionNetworkClientsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> provisionNetworkClients201ApplicationJSONObject;
    public ProvisionNetworkClientsResponse withProvisionNetworkClients201ApplicationJsonObject(java.util.Map<String, Object> provisionNetworkClients201ApplicationJSONObject) {
        this.provisionNetworkClients201ApplicationJSONObject = provisionNetworkClients201ApplicationJSONObject;
        return this;
    }
}