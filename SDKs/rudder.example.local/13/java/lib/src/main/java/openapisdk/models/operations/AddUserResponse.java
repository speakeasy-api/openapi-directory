package openapisdk.models.operations;



public class AddUserResponse {
    public String contentType;
    public AddUserResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AddUserResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public AddUser200ApplicationJson addUser200ApplicationJSONObject;
    public AddUserResponse withAddUser200ApplicationJsonObject(AddUser200ApplicationJson addUser200ApplicationJSONObject) {
        this.addUser200ApplicationJSONObject = addUser200ApplicationJSONObject;
        return this;
    }
}