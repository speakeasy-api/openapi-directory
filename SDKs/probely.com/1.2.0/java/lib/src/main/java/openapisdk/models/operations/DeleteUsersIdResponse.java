package openapisdk.models.operations;



public class DeleteUsersIdResponse {
    public String contentType;
    public DeleteUsersIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DeleteUsersIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public DeleteUsersId401ApplicationJson deleteUsersId401ApplicationJSONObject;
    public DeleteUsersIdResponse withDeleteUsersId401ApplicationJsonObject(DeleteUsersId401ApplicationJson deleteUsersId401ApplicationJSONObject) {
        this.deleteUsersId401ApplicationJSONObject = deleteUsersId401ApplicationJSONObject;
        return this;
    }
    public DeleteUsersId403ApplicationJson deleteUsersId403ApplicationJSONObject;
    public DeleteUsersIdResponse withDeleteUsersId403ApplicationJsonObject(DeleteUsersId403ApplicationJson deleteUsersId403ApplicationJSONObject) {
        this.deleteUsersId403ApplicationJSONObject = deleteUsersId403ApplicationJSONObject;
        return this;
    }
    public DeleteUsersId404ApplicationJson deleteUsersId404ApplicationJSONObject;
    public DeleteUsersIdResponse withDeleteUsersId404ApplicationJsonObject(DeleteUsersId404ApplicationJson deleteUsersId404ApplicationJSONObject) {
        this.deleteUsersId404ApplicationJSONObject = deleteUsersId404ApplicationJSONObject;
        return this;
    }
}