package openapisdk.models.operations;



public class GroupDetailsResponse {
    public String contentType;
    public GroupDetailsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GroupDetailsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GroupDetails200ApplicationJson groupDetails200ApplicationJSONObject;
    public GroupDetailsResponse withGroupDetails200ApplicationJsonObject(GroupDetails200ApplicationJson groupDetails200ApplicationJSONObject) {
        this.groupDetails200ApplicationJSONObject = groupDetails200ApplicationJSONObject;
        return this;
    }
}