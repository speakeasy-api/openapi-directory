package openapisdk.models.operations;



public class PostTargetsTargetIdKeysResponse {
    public openapisdk.models.shared.ApiKey apiKey;
    public PostTargetsTargetIdKeysResponse withApiKey(openapisdk.models.shared.ApiKey apiKey) {
        this.apiKey = apiKey;
        return this;
    }
    public String contentType;
    public PostTargetsTargetIdKeysResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostTargetsTargetIdKeysResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public PostTargetsTargetIdKeys400ApplicationJson postTargetsTargetIdKeys400ApplicationJSONObject;
    public PostTargetsTargetIdKeysResponse withPostTargetsTargetIdKeys400ApplicationJsonObject(PostTargetsTargetIdKeys400ApplicationJson postTargetsTargetIdKeys400ApplicationJSONObject) {
        this.postTargetsTargetIdKeys400ApplicationJSONObject = postTargetsTargetIdKeys400ApplicationJSONObject;
        return this;
    }
    public PostTargetsTargetIdKeys401ApplicationJson postTargetsTargetIdKeys401ApplicationJSONObject;
    public PostTargetsTargetIdKeysResponse withPostTargetsTargetIdKeys401ApplicationJsonObject(PostTargetsTargetIdKeys401ApplicationJson postTargetsTargetIdKeys401ApplicationJSONObject) {
        this.postTargetsTargetIdKeys401ApplicationJSONObject = postTargetsTargetIdKeys401ApplicationJSONObject;
        return this;
    }
    public PostTargetsTargetIdKeys403ApplicationJson postTargetsTargetIdKeys403ApplicationJSONObject;
    public PostTargetsTargetIdKeysResponse withPostTargetsTargetIdKeys403ApplicationJsonObject(PostTargetsTargetIdKeys403ApplicationJson postTargetsTargetIdKeys403ApplicationJSONObject) {
        this.postTargetsTargetIdKeys403ApplicationJSONObject = postTargetsTargetIdKeys403ApplicationJSONObject;
        return this;
    }
    public PostTargetsTargetIdKeys404ApplicationJson postTargetsTargetIdKeys404ApplicationJSONObject;
    public PostTargetsTargetIdKeysResponse withPostTargetsTargetIdKeys404ApplicationJsonObject(PostTargetsTargetIdKeys404ApplicationJson postTargetsTargetIdKeys404ApplicationJSONObject) {
        this.postTargetsTargetIdKeys404ApplicationJSONObject = postTargetsTargetIdKeys404ApplicationJSONObject;
        return this;
    }
}