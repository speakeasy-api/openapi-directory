package openapisdk.models.operations;



public class CreateUserResponse {
    public String contentType;
    public CreateUserResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateUserResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public CreateUser200ApplicationJson createUser200ApplicationJSONObject;
    public CreateUserResponse withCreateUser200ApplicationJsonObject(CreateUser200ApplicationJson createUser200ApplicationJSONObject) {
        this.createUser200ApplicationJSONObject = createUser200ApplicationJSONObject;
        return this;
    }
}