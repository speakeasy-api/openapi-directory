package openapisdk.models.operations;



public class GetTargetsIdResponse {
    public String contentType;
    public GetTargetsIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetTargetsIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Target target;
    public GetTargetsIdResponse withTarget(openapisdk.models.shared.Target target) {
        this.target = target;
        return this;
    }
    public GetTargetsId401ApplicationJson getTargetsId401ApplicationJSONObject;
    public GetTargetsIdResponse withGetTargetsId401ApplicationJsonObject(GetTargetsId401ApplicationJson getTargetsId401ApplicationJSONObject) {
        this.getTargetsId401ApplicationJSONObject = getTargetsId401ApplicationJSONObject;
        return this;
    }
    public GetTargetsId404ApplicationJson getTargetsId404ApplicationJSONObject;
    public GetTargetsIdResponse withGetTargetsId404ApplicationJsonObject(GetTargetsId404ApplicationJson getTargetsId404ApplicationJSONObject) {
        this.getTargetsId404ApplicationJSONObject = getTargetsId404ApplicationJSONObject;
        return this;
    }
    public GetTargetsId500ApplicationJson getTargetsId500ApplicationJSONObject;
    public GetTargetsIdResponse withGetTargetsId500ApplicationJsonObject(GetTargetsId500ApplicationJson getTargetsId500ApplicationJSONObject) {
        this.getTargetsId500ApplicationJSONObject = getTargetsId500ApplicationJSONObject;
        return this;
    }
}