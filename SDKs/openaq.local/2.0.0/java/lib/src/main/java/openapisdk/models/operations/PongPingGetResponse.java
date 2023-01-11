package openapisdk.models.operations;



public class PongPingGetResponse {
    public String contentType;
    public PongPingGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PongPingGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object pongPingGet200ApplicationJSONAny;
    public PongPingGetResponse withPongPingGet200ApplicationJsonAny(Object pongPingGet200ApplicationJSONAny) {
        this.pongPingGet200ApplicationJSONAny = pongPingGet200ApplicationJSONAny;
        return this;
    }
}