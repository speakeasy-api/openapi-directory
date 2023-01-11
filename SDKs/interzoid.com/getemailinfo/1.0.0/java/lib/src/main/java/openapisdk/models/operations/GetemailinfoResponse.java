package openapisdk.models.operations;



public class GetemailinfoResponse {
    public String contentType;
    public GetemailinfoResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetemailinfoResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Getemailinfo200ApplicationJson getemailinfo200ApplicationJSONObject;
    public GetemailinfoResponse withGetemailinfo200ApplicationJsonObject(Getemailinfo200ApplicationJson getemailinfo200ApplicationJSONObject) {
        this.getemailinfo200ApplicationJSONObject = getemailinfo200ApplicationJSONObject;
        return this;
    }
}