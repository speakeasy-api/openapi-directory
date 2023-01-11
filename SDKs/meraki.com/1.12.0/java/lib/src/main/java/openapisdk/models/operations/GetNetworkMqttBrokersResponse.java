package openapisdk.models.operations;



public class GetNetworkMqttBrokersResponse {
    public String contentType;
    public GetNetworkMqttBrokersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetNetworkMqttBrokersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> getNetworkMqttBrokers200ApplicationJSONObject;
    public GetNetworkMqttBrokersResponse withGetNetworkMqttBrokers200ApplicationJsonObject(java.util.Map<String, Object> getNetworkMqttBrokers200ApplicationJSONObject) {
        this.getNetworkMqttBrokers200ApplicationJSONObject = getNetworkMqttBrokers200ApplicationJSONObject;
        return this;
    }
}