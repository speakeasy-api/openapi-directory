package openapisdk.models.operations;



public class PostTargetsActivateResponse {
    public String contentType;
    public PostTargetsActivateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostTargetsActivateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public PostTargetsActivate400ApplicationJson postTargetsActivate400ApplicationJSONObject;
    public PostTargetsActivateResponse withPostTargetsActivate400ApplicationJsonObject(PostTargetsActivate400ApplicationJson postTargetsActivate400ApplicationJSONObject) {
        this.postTargetsActivate400ApplicationJSONObject = postTargetsActivate400ApplicationJSONObject;
        return this;
    }
    public PostTargetsActivate401ApplicationJson postTargetsActivate401ApplicationJSONObject;
    public PostTargetsActivateResponse withPostTargetsActivate401ApplicationJsonObject(PostTargetsActivate401ApplicationJson postTargetsActivate401ApplicationJSONObject) {
        this.postTargetsActivate401ApplicationJSONObject = postTargetsActivate401ApplicationJSONObject;
        return this;
    }
    public PostTargetsActivate403ApplicationJson postTargetsActivate403ApplicationJSONObject;
    public PostTargetsActivateResponse withPostTargetsActivate403ApplicationJsonObject(PostTargetsActivate403ApplicationJson postTargetsActivate403ApplicationJSONObject) {
        this.postTargetsActivate403ApplicationJSONObject = postTargetsActivate403ApplicationJSONObject;
        return this;
    }
    public String[] targetIds;
    public PostTargetsActivateResponse withTargetIds(String[] targetIds) {
        this.targetIds = targetIds;
        return this;
    }
}