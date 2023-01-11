package openapisdk.models.operations;



public class ChangePendingNodeStatusResponse {
    public String contentType;
    public ChangePendingNodeStatusResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ChangePendingNodeStatusResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public ChangePendingNodeStatus200ApplicationJson changePendingNodeStatus200ApplicationJSONObject;
    public ChangePendingNodeStatusResponse withChangePendingNodeStatus200ApplicationJsonObject(ChangePendingNodeStatus200ApplicationJson changePendingNodeStatus200ApplicationJSONObject) {
        this.changePendingNodeStatus200ApplicationJSONObject = changePendingNodeStatus200ApplicationJSONObject;
        return this;
    }
}