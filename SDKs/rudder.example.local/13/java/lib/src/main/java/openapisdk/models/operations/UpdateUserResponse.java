package openapisdk.models.operations;



public class UpdateUserResponse {
    public String contentType;
    public UpdateUserResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateUserResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public UpdateUser200ApplicationJson updateUser200ApplicationJSONObject;
    public UpdateUserResponse withUpdateUser200ApplicationJsonObject(UpdateUser200ApplicationJson updateUser200ApplicationJSONObject) {
        this.updateUser200ApplicationJSONObject = updateUser200ApplicationJSONObject;
        return this;
    }
}