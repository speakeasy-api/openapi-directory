package openapisdk.models.operations;



public class PostLabelsResponse {
    public String contentType;
    public PostLabelsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Label label;
    public PostLabelsResponse withLabel(openapisdk.models.shared.Label label) {
        this.label = label;
        return this;
    }
    public Long statusCode;
    public PostLabelsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public PostLabels400ApplicationJson postLabels400ApplicationJSONObject;
    public PostLabelsResponse withPostLabels400ApplicationJsonObject(PostLabels400ApplicationJson postLabels400ApplicationJSONObject) {
        this.postLabels400ApplicationJSONObject = postLabels400ApplicationJSONObject;
        return this;
    }
    public PostLabels401ApplicationJson postLabels401ApplicationJSONObject;
    public PostLabelsResponse withPostLabels401ApplicationJsonObject(PostLabels401ApplicationJson postLabels401ApplicationJSONObject) {
        this.postLabels401ApplicationJSONObject = postLabels401ApplicationJSONObject;
        return this;
    }
}