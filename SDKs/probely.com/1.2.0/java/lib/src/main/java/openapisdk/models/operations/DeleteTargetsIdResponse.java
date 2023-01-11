package openapisdk.models.operations;



public class DeleteTargetsIdResponse {
    public String contentType;
    public DeleteTargetsIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DeleteTargetsIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public DeleteTargetsId401ApplicationJson deleteTargetsId401ApplicationJSONObject;
    public DeleteTargetsIdResponse withDeleteTargetsId401ApplicationJsonObject(DeleteTargetsId401ApplicationJson deleteTargetsId401ApplicationJSONObject) {
        this.deleteTargetsId401ApplicationJSONObject = deleteTargetsId401ApplicationJSONObject;
        return this;
    }
    public DeleteTargetsId403ApplicationJson deleteTargetsId403ApplicationJSONObject;
    public DeleteTargetsIdResponse withDeleteTargetsId403ApplicationJsonObject(DeleteTargetsId403ApplicationJson deleteTargetsId403ApplicationJSONObject) {
        this.deleteTargetsId403ApplicationJSONObject = deleteTargetsId403ApplicationJSONObject;
        return this;
    }
    public DeleteTargetsId404ApplicationJson deleteTargetsId404ApplicationJSONObject;
    public DeleteTargetsIdResponse withDeleteTargetsId404ApplicationJsonObject(DeleteTargetsId404ApplicationJson deleteTargetsId404ApplicationJSONObject) {
        this.deleteTargetsId404ApplicationJSONObject = deleteTargetsId404ApplicationJSONObject;
        return this;
    }
}