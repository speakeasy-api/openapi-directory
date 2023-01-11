package openapisdk.models.operations;



public class UpdateGroupCategoryResponse {
    public String contentType;
    public UpdateGroupCategoryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateGroupCategoryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public UpdateGroupCategory200ApplicationJson updateGroupCategory200ApplicationJSONObject;
    public UpdateGroupCategoryResponse withUpdateGroupCategory200ApplicationJsonObject(UpdateGroupCategory200ApplicationJson updateGroupCategory200ApplicationJSONObject) {
        this.updateGroupCategory200ApplicationJSONObject = updateGroupCategory200ApplicationJSONObject;
        return this;
    }
}