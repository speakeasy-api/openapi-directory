package openapisdk.models.operations;



public class GetTargetsTargetIdKeysResponse {
    public String contentType;
    public GetTargetsTargetIdKeysResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetTargetsTargetIdKeysResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetTargetsTargetIdKeys200ApplicationJson getTargetsTargetIdKeys200ApplicationJSONObject;
    public GetTargetsTargetIdKeysResponse withGetTargetsTargetIdKeys200ApplicationJsonObject(GetTargetsTargetIdKeys200ApplicationJson getTargetsTargetIdKeys200ApplicationJSONObject) {
        this.getTargetsTargetIdKeys200ApplicationJSONObject = getTargetsTargetIdKeys200ApplicationJSONObject;
        return this;
    }
    public GetTargetsTargetIdKeys401ApplicationJson getTargetsTargetIdKeys401ApplicationJSONObject;
    public GetTargetsTargetIdKeysResponse withGetTargetsTargetIdKeys401ApplicationJsonObject(GetTargetsTargetIdKeys401ApplicationJson getTargetsTargetIdKeys401ApplicationJSONObject) {
        this.getTargetsTargetIdKeys401ApplicationJSONObject = getTargetsTargetIdKeys401ApplicationJSONObject;
        return this;
    }
    public GetTargetsTargetIdKeys404ApplicationJson getTargetsTargetIdKeys404ApplicationJSONObject;
    public GetTargetsTargetIdKeysResponse withGetTargetsTargetIdKeys404ApplicationJsonObject(GetTargetsTargetIdKeys404ApplicationJson getTargetsTargetIdKeys404ApplicationJSONObject) {
        this.getTargetsTargetIdKeys404ApplicationJSONObject = getTargetsTargetIdKeys404ApplicationJSONObject;
        return this;
    }
}