package openapisdk.models.operations;



public class GetResponse {
    public byte[] body;
    public GetResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Get200ApplicationJson get200ApplicationJSONObject;
    public GetResponse withGet200ApplicationJsonObject(Get200ApplicationJson get200ApplicationJSONObject) {
        this.get200ApplicationJSONObject = get200ApplicationJSONObject;
        return this;
    }
}