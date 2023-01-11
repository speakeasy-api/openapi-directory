package openapisdk.models.operations;



public class PlatformsListResponse {
    public String contentType;
    public PlatformsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PlatformsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public PlatformsList200ApplicationJson platformsList200ApplicationJSONObject;
    public PlatformsListResponse withPlatformsList200ApplicationJsonObject(PlatformsList200ApplicationJson platformsList200ApplicationJSONObject) {
        this.platformsList200ApplicationJSONObject = platformsList200ApplicationJSONObject;
        return this;
    }
}