package openapisdk.models.operations;



public class GetSpinsResponse {
    public byte[] body;
    public GetSpinsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetSpinsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetSpinsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetSpins200ApplicationJson getSpins200ApplicationJSONObject;
    public GetSpinsResponse withGetSpins200ApplicationJsonObject(GetSpins200ApplicationJson getSpins200ApplicationJSONObject) {
        this.getSpins200ApplicationJSONObject = getSpins200ApplicationJSONObject;
        return this;
    }
}