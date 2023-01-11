package openapisdk.models.operations;



public class PostTargetsArchiveResponse {
    public String contentType;
    public PostTargetsArchiveResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostTargetsArchiveResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public PostTargetsArchive400ApplicationJson postTargetsArchive400ApplicationJSONObject;
    public PostTargetsArchiveResponse withPostTargetsArchive400ApplicationJsonObject(PostTargetsArchive400ApplicationJson postTargetsArchive400ApplicationJSONObject) {
        this.postTargetsArchive400ApplicationJSONObject = postTargetsArchive400ApplicationJSONObject;
        return this;
    }
    public PostTargetsArchive401ApplicationJson postTargetsArchive401ApplicationJSONObject;
    public PostTargetsArchiveResponse withPostTargetsArchive401ApplicationJsonObject(PostTargetsArchive401ApplicationJson postTargetsArchive401ApplicationJSONObject) {
        this.postTargetsArchive401ApplicationJSONObject = postTargetsArchive401ApplicationJSONObject;
        return this;
    }
    public PostTargetsArchive403ApplicationJson postTargetsArchive403ApplicationJSONObject;
    public PostTargetsArchiveResponse withPostTargetsArchive403ApplicationJsonObject(PostTargetsArchive403ApplicationJson postTargetsArchive403ApplicationJSONObject) {
        this.postTargetsArchive403ApplicationJSONObject = postTargetsArchive403ApplicationJSONObject;
        return this;
    }
    public String[] targetIds;
    public PostTargetsArchiveResponse withTargetIds(String[] targetIds) {
        this.targetIds = targetIds;
        return this;
    }
}