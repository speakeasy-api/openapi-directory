package openapisdk.models.operations;



public class AddUserToAccountResponse {
    public String contentType;
    public AddUserToAccountResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public AddUserToAccountResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public AddUserToAccountResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public AddUserToAccount201ApplicationJson addUserToAccount201ApplicationJSONObject;
    public AddUserToAccountResponse withAddUserToAccount201ApplicationJsonObject(AddUserToAccount201ApplicationJson addUserToAccount201ApplicationJSONObject) {
        this.addUserToAccount201ApplicationJSONObject = addUserToAccount201ApplicationJSONObject;
        return this;
    }
    public AddUserToAccount400ApplicationJson addUserToAccount400ApplicationJSONObject;
    public AddUserToAccountResponse withAddUserToAccount400ApplicationJsonObject(AddUserToAccount400ApplicationJson addUserToAccount400ApplicationJSONObject) {
        this.addUserToAccount400ApplicationJSONObject = addUserToAccount400ApplicationJSONObject;
        return this;
    }
    public AddUserToAccount401ApplicationJson addUserToAccount401ApplicationJSONObject;
    public AddUserToAccountResponse withAddUserToAccount401ApplicationJsonObject(AddUserToAccount401ApplicationJson addUserToAccount401ApplicationJSONObject) {
        this.addUserToAccount401ApplicationJSONObject = addUserToAccount401ApplicationJSONObject;
        return this;
    }
    public AddUserToAccount429ApplicationJson addUserToAccount429ApplicationJSONObject;
    public AddUserToAccountResponse withAddUserToAccount429ApplicationJsonObject(AddUserToAccount429ApplicationJson addUserToAccount429ApplicationJSONObject) {
        this.addUserToAccount429ApplicationJSONObject = addUserToAccount429ApplicationJSONObject;
        return this;
    }
    public AddUserToAccount500ApplicationJson addUserToAccount500ApplicationJSONObject;
    public AddUserToAccountResponse withAddUserToAccount500ApplicationJsonObject(AddUserToAccount500ApplicationJson addUserToAccount500ApplicationJSONObject) {
        this.addUserToAccount500ApplicationJSONObject = addUserToAccount500ApplicationJSONObject;
        return this;
    }
}