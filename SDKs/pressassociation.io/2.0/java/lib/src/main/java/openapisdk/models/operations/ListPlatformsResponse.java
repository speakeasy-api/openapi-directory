package openapisdk.models.operations;



public class ListPlatformsResponse {
    public String contentType;
    public ListPlatformsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ListPlatformsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> listPlatforms200ApplicationJSONObject;
    public ListPlatformsResponse withListPlatforms200ApplicationJsonObject(java.util.Map<String, Object> listPlatforms200ApplicationJSONObject) {
        this.listPlatforms200ApplicationJSONObject = listPlatforms200ApplicationJSONObject;
        return this;
    }
}