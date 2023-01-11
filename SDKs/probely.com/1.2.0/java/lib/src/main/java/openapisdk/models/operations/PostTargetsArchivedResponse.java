package openapisdk.models.operations;



public class PostTargetsArchivedResponse {
    public String contentType;
    public PostTargetsArchivedResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostTargetsArchivedResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public PostTargetsArchived200ApplicationJson postTargetsArchived200ApplicationJSONObject;
    public PostTargetsArchivedResponse withPostTargetsArchived200ApplicationJsonObject(PostTargetsArchived200ApplicationJson postTargetsArchived200ApplicationJSONObject) {
        this.postTargetsArchived200ApplicationJSONObject = postTargetsArchived200ApplicationJSONObject;
        return this;
    }
    public PostTargetsArchived400ApplicationJson postTargetsArchived400ApplicationJSONObject;
    public PostTargetsArchivedResponse withPostTargetsArchived400ApplicationJsonObject(PostTargetsArchived400ApplicationJson postTargetsArchived400ApplicationJSONObject) {
        this.postTargetsArchived400ApplicationJSONObject = postTargetsArchived400ApplicationJSONObject;
        return this;
    }
    public PostTargetsArchived401ApplicationJson postTargetsArchived401ApplicationJSONObject;
    public PostTargetsArchivedResponse withPostTargetsArchived401ApplicationJsonObject(PostTargetsArchived401ApplicationJson postTargetsArchived401ApplicationJSONObject) {
        this.postTargetsArchived401ApplicationJSONObject = postTargetsArchived401ApplicationJSONObject;
        return this;
    }
    public PostTargetsArchived403ApplicationJson postTargetsArchived403ApplicationJSONObject;
    public PostTargetsArchivedResponse withPostTargetsArchived403ApplicationJsonObject(PostTargetsArchived403ApplicationJson postTargetsArchived403ApplicationJSONObject) {
        this.postTargetsArchived403ApplicationJSONObject = postTargetsArchived403ApplicationJSONObject;
        return this;
    }
}