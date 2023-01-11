package openapisdk.models.operations;



public class PostTargetsTargetIdFindingsIdRetestResponse {
    public String contentType;
    public PostTargetsTargetIdFindingsIdRetestResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Scan scan;
    public PostTargetsTargetIdFindingsIdRetestResponse withScan(openapisdk.models.shared.Scan scan) {
        this.scan = scan;
        return this;
    }
    public Long statusCode;
    public PostTargetsTargetIdFindingsIdRetestResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public PostTargetsTargetIdFindingsIdRetest401ApplicationJson postTargetsTargetIdFindingsIdRetest401ApplicationJSONObject;
    public PostTargetsTargetIdFindingsIdRetestResponse withPostTargetsTargetIdFindingsIdRetest401ApplicationJsonObject(PostTargetsTargetIdFindingsIdRetest401ApplicationJson postTargetsTargetIdFindingsIdRetest401ApplicationJSONObject) {
        this.postTargetsTargetIdFindingsIdRetest401ApplicationJSONObject = postTargetsTargetIdFindingsIdRetest401ApplicationJSONObject;
        return this;
    }
    public PostTargetsTargetIdFindingsIdRetest403ApplicationJson postTargetsTargetIdFindingsIdRetest403ApplicationJSONObject;
    public PostTargetsTargetIdFindingsIdRetestResponse withPostTargetsTargetIdFindingsIdRetest403ApplicationJsonObject(PostTargetsTargetIdFindingsIdRetest403ApplicationJson postTargetsTargetIdFindingsIdRetest403ApplicationJSONObject) {
        this.postTargetsTargetIdFindingsIdRetest403ApplicationJSONObject = postTargetsTargetIdFindingsIdRetest403ApplicationJSONObject;
        return this;
    }
    public PostTargetsTargetIdFindingsIdRetest404ApplicationJson postTargetsTargetIdFindingsIdRetest404ApplicationJSONObject;
    public PostTargetsTargetIdFindingsIdRetestResponse withPostTargetsTargetIdFindingsIdRetest404ApplicationJsonObject(PostTargetsTargetIdFindingsIdRetest404ApplicationJson postTargetsTargetIdFindingsIdRetest404ApplicationJSONObject) {
        this.postTargetsTargetIdFindingsIdRetest404ApplicationJSONObject = postTargetsTargetIdFindingsIdRetest404ApplicationJSONObject;
        return this;
    }
}