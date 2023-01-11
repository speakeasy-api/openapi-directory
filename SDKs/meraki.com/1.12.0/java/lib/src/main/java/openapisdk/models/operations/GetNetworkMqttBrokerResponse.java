package openapisdk.models.operations;



public class GetNetworkMqttBrokerResponse {
    public String contentType;
    public GetNetworkMqttBrokerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetNetworkMqttBrokerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> getNetworkMqttBroker200ApplicationJSONObject;
    public GetNetworkMqttBrokerResponse withGetNetworkMqttBroker200ApplicationJsonObject(java.util.Map<String, Object> getNetworkMqttBroker200ApplicationJSONObject) {
        this.getNetworkMqttBroker200ApplicationJSONObject = getNetworkMqttBroker200ApplicationJSONObject;
        return this;
    }
}