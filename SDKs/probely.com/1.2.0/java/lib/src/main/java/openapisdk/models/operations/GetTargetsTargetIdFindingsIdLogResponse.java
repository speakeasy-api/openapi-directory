package openapisdk.models.operations;



public class GetTargetsTargetIdFindingsIdLogResponse {
    public openapisdk.models.shared.Activity[] activities;
    public GetTargetsTargetIdFindingsIdLogResponse withActivities(openapisdk.models.shared.Activity[] activities) {
        this.activities = activities;
        return this;
    }
    public String contentType;
    public GetTargetsTargetIdFindingsIdLogResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetTargetsTargetIdFindingsIdLogResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetTargetsTargetIdFindingsIdLog401ApplicationJson getTargetsTargetIdFindingsIdLog401ApplicationJSONObject;
    public GetTargetsTargetIdFindingsIdLogResponse withGetTargetsTargetIdFindingsIdLog401ApplicationJsonObject(GetTargetsTargetIdFindingsIdLog401ApplicationJson getTargetsTargetIdFindingsIdLog401ApplicationJSONObject) {
        this.getTargetsTargetIdFindingsIdLog401ApplicationJSONObject = getTargetsTargetIdFindingsIdLog401ApplicationJSONObject;
        return this;
    }
    public GetTargetsTargetIdFindingsIdLog404ApplicationJson getTargetsTargetIdFindingsIdLog404ApplicationJSONObject;
    public GetTargetsTargetIdFindingsIdLogResponse withGetTargetsTargetIdFindingsIdLog404ApplicationJsonObject(GetTargetsTargetIdFindingsIdLog404ApplicationJson getTargetsTargetIdFindingsIdLog404ApplicationJSONObject) {
        this.getTargetsTargetIdFindingsIdLog404ApplicationJSONObject = getTargetsTargetIdFindingsIdLog404ApplicationJSONObject;
        return this;
    }
}