package openapisdk.models.operations;



public class PostTargetsResponse {
    public String contentType;
    public PostTargetsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostTargetsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Target target;
    public PostTargetsResponse withTarget(openapisdk.models.shared.Target target) {
        this.target = target;
        return this;
    }
    public PostTargets400ApplicationJson postTargets400ApplicationJSONObject;
    public PostTargetsResponse withPostTargets400ApplicationJsonObject(PostTargets400ApplicationJson postTargets400ApplicationJSONObject) {
        this.postTargets400ApplicationJSONObject = postTargets400ApplicationJSONObject;
        return this;
    }
    public PostTargets401ApplicationJson postTargets401ApplicationJSONObject;
    public PostTargetsResponse withPostTargets401ApplicationJsonObject(PostTargets401ApplicationJson postTargets401ApplicationJSONObject) {
        this.postTargets401ApplicationJSONObject = postTargets401ApplicationJSONObject;
        return this;
    }
    public PostTargets403ApplicationJson postTargets403ApplicationJSONObject;
    public PostTargetsResponse withPostTargets403ApplicationJsonObject(PostTargets403ApplicationJson postTargets403ApplicationJSONObject) {
        this.postTargets403ApplicationJSONObject = postTargets403ApplicationJSONObject;
        return this;
    }
    public PostTargets500ApplicationJson postTargets500ApplicationJSONObject;
    public PostTargetsResponse withPostTargets500ApplicationJsonObject(PostTargets500ApplicationJson postTargets500ApplicationJSONObject) {
        this.postTargets500ApplicationJSONObject = postTargets500ApplicationJSONObject;
        return this;
    }
}