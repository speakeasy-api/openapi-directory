package openapisdk.models.operations;



public class GetAuthinfoResponse {
    public String contentType;
    public GetAuthinfoResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetAuthinfoResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetAuthinfo200ApplicationJson getAuthinfo200ApplicationJSONObject;
    public GetAuthinfoResponse withGetAuthinfo200ApplicationJsonObject(GetAuthinfo200ApplicationJson getAuthinfo200ApplicationJSONObject) {
        this.getAuthinfo200ApplicationJSONObject = getAuthinfo200ApplicationJSONObject;
        return this;
    }
}