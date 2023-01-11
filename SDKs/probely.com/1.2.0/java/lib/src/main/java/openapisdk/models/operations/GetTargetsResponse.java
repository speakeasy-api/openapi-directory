package openapisdk.models.operations;



public class GetTargetsResponse {
    public String contentType;
    public GetTargetsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetTargetsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetTargets200ApplicationJson getTargets200ApplicationJSONObject;
    public GetTargetsResponse withGetTargets200ApplicationJsonObject(GetTargets200ApplicationJson getTargets200ApplicationJSONObject) {
        this.getTargets200ApplicationJSONObject = getTargets200ApplicationJSONObject;
        return this;
    }
    public GetTargets401ApplicationJson getTargets401ApplicationJSONObject;
    public GetTargetsResponse withGetTargets401ApplicationJsonObject(GetTargets401ApplicationJson getTargets401ApplicationJSONObject) {
        this.getTargets401ApplicationJSONObject = getTargets401ApplicationJSONObject;
        return this;
    }
    public GetTargets404ApplicationJson getTargets404ApplicationJSONObject;
    public GetTargetsResponse withGetTargets404ApplicationJsonObject(GetTargets404ApplicationJson getTargets404ApplicationJSONObject) {
        this.getTargets404ApplicationJSONObject = getTargets404ApplicationJSONObject;
        return this;
    }
    public GetTargets500ApplicationJson getTargets500ApplicationJSONObject;
    public GetTargetsResponse withGetTargets500ApplicationJsonObject(GetTargets500ApplicationJson getTargets500ApplicationJSONObject) {
        this.getTargets500ApplicationJSONObject = getTargets500ApplicationJSONObject;
        return this;
    }
}