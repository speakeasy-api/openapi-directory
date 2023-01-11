package openapisdk.models.operations;



public class RemoveValidatedUserResponse {
    public String contentType;
    public RemoveValidatedUserResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public RemoveValidatedUserResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public RemoveValidatedUser200ApplicationJson removeValidatedUser200ApplicationJSONObject;
    public RemoveValidatedUserResponse withRemoveValidatedUser200ApplicationJsonObject(RemoveValidatedUser200ApplicationJson removeValidatedUser200ApplicationJSONObject) {
        this.removeValidatedUser200ApplicationJSONObject = removeValidatedUser200ApplicationJSONObject;
        return this;
    }
}