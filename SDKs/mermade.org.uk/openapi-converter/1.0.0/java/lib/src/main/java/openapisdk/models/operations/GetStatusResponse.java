package openapisdk.models.operations;



public class GetStatusResponse {
    public byte[] body;
    public GetStatusResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetStatusResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetStatusResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object getStatus200ApplicationJSONAny;
    public GetStatusResponse withGetStatus200ApplicationJsonAny(Object getStatus200ApplicationJSONAny) {
        this.getStatus200ApplicationJSONAny = getStatus200ApplicationJSONAny;
        return this;
    }
}