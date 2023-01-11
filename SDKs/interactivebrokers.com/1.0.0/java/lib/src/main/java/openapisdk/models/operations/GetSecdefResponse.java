package openapisdk.models.operations;



public class GetSecdefResponse {
    public String contentType;
    public GetSecdefResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetSecdefResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetSecdef200ApplicationJson[] getSecdef200ApplicationJSONObjects;
    public GetSecdefResponse withGetSecdef200ApplicationJsonObjects(GetSecdef200ApplicationJson[] getSecdef200ApplicationJSONObjects) {
        this.getSecdef200ApplicationJSONObjects = getSecdef200ApplicationJSONObjects;
        return this;
    }
}