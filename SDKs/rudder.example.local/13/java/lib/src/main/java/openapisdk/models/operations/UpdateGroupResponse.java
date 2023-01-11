package openapisdk.models.operations;



public class UpdateGroupResponse {
    public String contentType;
    public UpdateGroupResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateGroupResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public UpdateGroup200ApplicationJson updateGroup200ApplicationJSONObject;
    public UpdateGroupResponse withUpdateGroup200ApplicationJsonObject(UpdateGroup200ApplicationJson updateGroup200ApplicationJSONObject) {
        this.updateGroup200ApplicationJSONObject = updateGroup200ApplicationJSONObject;
        return this;
    }
}