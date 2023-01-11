package openapisdk.models.operations;



public class XPingResponse {
    public String contentType;
    public XPingResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public XPingResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object xPing200ApplicationJSONAny;
    public XPingResponse withXPing200ApplicationJsonAny(Object xPing200ApplicationJSONAny) {
        this.xPing200ApplicationJSONAny = xPing200ApplicationJSONAny;
        return this;
    }
}