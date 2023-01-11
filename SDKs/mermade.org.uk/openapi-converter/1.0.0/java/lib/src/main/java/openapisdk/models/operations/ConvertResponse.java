package openapisdk.models.operations;



public class ConvertResponse {
    public byte[] body;
    public ConvertResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public ConvertResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ConvertResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object convert200ApplicationJSONAny;
    public ConvertResponse withConvert200ApplicationJsonAny(Object convert200ApplicationJSONAny) {
        this.convert200ApplicationJSONAny = convert200ApplicationJSONAny;
        return this;
    }
    public Object convert400ApplicationJSONAny;
    public ConvertResponse withConvert400ApplicationJsonAny(Object convert400ApplicationJSONAny) {
        this.convert400ApplicationJSONAny = convert400ApplicationJSONAny;
        return this;
    }
}