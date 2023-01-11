package openapisdk.models.operations;



public class DeleteGroupCategoryResponse {
    public String contentType;
    public DeleteGroupCategoryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public DeleteGroupCategory200ApplicationJson deleteGroupCategory200ApplicationJSONObject;
    public DeleteGroupCategoryResponse withDeleteGroupCategory200ApplicationJsonObject(DeleteGroupCategory200ApplicationJson deleteGroupCategory200ApplicationJSONObject) {
        this.deleteGroupCategory200ApplicationJSONObject = deleteGroupCategory200ApplicationJSONObject;
        return this;
    }
    public Long statusCode;
    public DeleteGroupCategoryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}