package openapisdk.models.operations;



public class GetNetworkWebhooksHttpServerResponse {
    public String contentType;
    public GetNetworkWebhooksHttpServerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetNetworkWebhooksHttpServerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> getNetworkWebhooksHttpServer200ApplicationJSONObject;
    public GetNetworkWebhooksHttpServerResponse withGetNetworkWebhooksHttpServer200ApplicationJsonObject(java.util.Map<String, Object> getNetworkWebhooksHttpServer200ApplicationJSONObject) {
        this.getNetworkWebhooksHttpServer200ApplicationJSONObject = getNetworkWebhooksHttpServer200ApplicationJSONObject;
        return this;
    }
}