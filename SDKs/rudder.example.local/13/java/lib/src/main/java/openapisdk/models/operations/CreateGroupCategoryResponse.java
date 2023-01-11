package openapisdk.models.operations;



public class CreateGroupCategoryResponse {
    public String contentType;
    public CreateGroupCategoryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public CreateGroupCategory200ApplicationJson createGroupCategory200ApplicationJSONObject;
    public CreateGroupCategoryResponse withCreateGroupCategory200ApplicationJsonObject(CreateGroupCategory200ApplicationJson createGroupCategory200ApplicationJSONObject) {
        this.createGroupCategory200ApplicationJSONObject = createGroupCategory200ApplicationJSONObject;
        return this;
    }
    public Long statusCode;
    public CreateGroupCategoryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}