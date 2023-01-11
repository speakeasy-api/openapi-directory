package openapisdk.models.operations;



public class ConvertUrlResponse {
    public byte[] body;
    public ConvertUrlResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public ConvertUrlResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ConvertUrlResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object convertUrl200ApplicationJSONAny;
    public ConvertUrlResponse withConvertUrl200ApplicationJsonAny(Object convertUrl200ApplicationJSONAny) {
        this.convertUrl200ApplicationJSONAny = convertUrl200ApplicationJSONAny;
        return this;
    }
}