package openapisdk.models.operations;



public class DeleteUserResponse {
    public String contentType;
    public DeleteUserResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DeleteUserResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> deleteUser200ApplicationJSONObject;
    public DeleteUserResponse withDeleteUser200ApplicationJsonObject(java.util.Map<String, Object> deleteUser200ApplicationJSONObject) {
        this.deleteUser200ApplicationJSONObject = deleteUser200ApplicationJSONObject;
        return this;
    }
}