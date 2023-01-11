package openapisdk.models.operations;



public class GetStatusResponse {
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
    public GetStatus200ApplicationJson getStatus200ApplicationJSONObject;
    public GetStatusResponse withGetStatus200ApplicationJsonObject(GetStatus200ApplicationJson getStatus200ApplicationJSONObject) {
        this.getStatus200ApplicationJSONObject = getStatus200ApplicationJSONObject;
        return this;
    }
}