package openapisdk.models.operations;



public class PutTargetsIdResponse {
    public String contentType;
    public PutTargetsIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PutTargetsIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Target target;
    public PutTargetsIdResponse withTarget(openapisdk.models.shared.Target target) {
        this.target = target;
        return this;
    }
    public PutTargetsId400ApplicationJson putTargetsId400ApplicationJSONObject;
    public PutTargetsIdResponse withPutTargetsId400ApplicationJsonObject(PutTargetsId400ApplicationJson putTargetsId400ApplicationJSONObject) {
        this.putTargetsId400ApplicationJSONObject = putTargetsId400ApplicationJSONObject;
        return this;
    }
    public PutTargetsId401ApplicationJson putTargetsId401ApplicationJSONObject;
    public PutTargetsIdResponse withPutTargetsId401ApplicationJsonObject(PutTargetsId401ApplicationJson putTargetsId401ApplicationJSONObject) {
        this.putTargetsId401ApplicationJSONObject = putTargetsId401ApplicationJSONObject;
        return this;
    }
    public PutTargetsId403ApplicationJson putTargetsId403ApplicationJSONObject;
    public PutTargetsIdResponse withPutTargetsId403ApplicationJsonObject(PutTargetsId403ApplicationJson putTargetsId403ApplicationJSONObject) {
        this.putTargetsId403ApplicationJSONObject = putTargetsId403ApplicationJSONObject;
        return this;
    }
    public PutTargetsId404ApplicationJson putTargetsId404ApplicationJSONObject;
    public PutTargetsIdResponse withPutTargetsId404ApplicationJsonObject(PutTargetsId404ApplicationJson putTargetsId404ApplicationJSONObject) {
        this.putTargetsId404ApplicationJSONObject = putTargetsId404ApplicationJSONObject;
        return this;
    }
}