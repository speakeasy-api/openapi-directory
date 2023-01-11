package openapisdk.models.operations;



public class CreateGroupResponse {
    public String contentType;
    public CreateGroupResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateGroupResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public CreateGroup200ApplicationJson createGroup200ApplicationJSONObject;
    public CreateGroupResponse withCreateGroup200ApplicationJsonObject(CreateGroup200ApplicationJson createGroup200ApplicationJSONObject) {
        this.createGroup200ApplicationJSONObject = createGroup200ApplicationJSONObject;
        return this;
    }
}