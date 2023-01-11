package openapisdk.models.operations;



public class PlatformsListsParentsListResponse {
    public String contentType;
    public PlatformsListsParentsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PlatformsListsParentsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public PlatformsListsParentsList200ApplicationJson platformsListsParentsList200ApplicationJSONObject;
    public PlatformsListsParentsListResponse withPlatformsListsParentsList200ApplicationJsonObject(PlatformsListsParentsList200ApplicationJson platformsListsParentsList200ApplicationJSONObject) {
        this.platformsListsParentsList200ApplicationJSONObject = platformsListsParentsList200ApplicationJSONObject;
        return this;
    }
}