package openapisdk.models.operations;



public class DcimPlatformsListResponse {
    public String contentType;
    public DcimPlatformsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DcimPlatformsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public DcimPlatformsList200ApplicationJson dcimPlatformsList200ApplicationJSONObject;
    public DcimPlatformsListResponse withDcimPlatformsList200ApplicationJsonObject(DcimPlatformsList200ApplicationJson dcimPlatformsList200ApplicationJSONObject) {
        this.dcimPlatformsList200ApplicationJSONObject = dcimPlatformsList200ApplicationJSONObject;
        return this;
    }
}