package openapisdk.models.operations;



public class PutUsersIdResponse {
    public String contentType;
    public PutUsersIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PutUsersIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.User user;
    public PutUsersIdResponse withUser(openapisdk.models.shared.User user) {
        this.user = user;
        return this;
    }
    public PutUsersId400ApplicationJson putUsersId400ApplicationJSONObject;
    public PutUsersIdResponse withPutUsersId400ApplicationJsonObject(PutUsersId400ApplicationJson putUsersId400ApplicationJSONObject) {
        this.putUsersId400ApplicationJSONObject = putUsersId400ApplicationJSONObject;
        return this;
    }
    public PutUsersId401ApplicationJson putUsersId401ApplicationJSONObject;
    public PutUsersIdResponse withPutUsersId401ApplicationJsonObject(PutUsersId401ApplicationJson putUsersId401ApplicationJSONObject) {
        this.putUsersId401ApplicationJSONObject = putUsersId401ApplicationJSONObject;
        return this;
    }
    public PutUsersId403ApplicationJson putUsersId403ApplicationJSONObject;
    public PutUsersIdResponse withPutUsersId403ApplicationJsonObject(PutUsersId403ApplicationJson putUsersId403ApplicationJSONObject) {
        this.putUsersId403ApplicationJSONObject = putUsersId403ApplicationJSONObject;
        return this;
    }
    public PutUsersId404ApplicationJson putUsersId404ApplicationJSONObject;
    public PutUsersIdResponse withPutUsersId404ApplicationJsonObject(PutUsersId404ApplicationJson putUsersId404ApplicationJSONObject) {
        this.putUsersId404ApplicationJSONObject = putUsersId404ApplicationJSONObject;
        return this;
    }
}