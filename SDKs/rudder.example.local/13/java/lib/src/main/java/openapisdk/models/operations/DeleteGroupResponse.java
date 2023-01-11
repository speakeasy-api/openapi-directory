package openapisdk.models.operations;



public class DeleteGroupResponse {
    public String contentType;
    public DeleteGroupResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DeleteGroupResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public DeleteGroup200ApplicationJson deleteGroup200ApplicationJSONObject;
    public DeleteGroupResponse withDeleteGroup200ApplicationJsonObject(DeleteGroup200ApplicationJson deleteGroup200ApplicationJSONObject) {
        this.deleteGroup200ApplicationJSONObject = deleteGroup200ApplicationJSONObject;
        return this;
    }
}