package openapisdk.models.operations;



public class DeleteKeysIdResponse {
    public String contentType;
    public DeleteKeysIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DeleteKeysIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public DeleteKeysId401ApplicationJson deleteKeysId401ApplicationJSONObject;
    public DeleteKeysIdResponse withDeleteKeysId401ApplicationJsonObject(DeleteKeysId401ApplicationJson deleteKeysId401ApplicationJSONObject) {
        this.deleteKeysId401ApplicationJSONObject = deleteKeysId401ApplicationJSONObject;
        return this;
    }
    public DeleteKeysId403ApplicationJson deleteKeysId403ApplicationJSONObject;
    public DeleteKeysIdResponse withDeleteKeysId403ApplicationJsonObject(DeleteKeysId403ApplicationJson deleteKeysId403ApplicationJSONObject) {
        this.deleteKeysId403ApplicationJSONObject = deleteKeysId403ApplicationJSONObject;
        return this;
    }
}