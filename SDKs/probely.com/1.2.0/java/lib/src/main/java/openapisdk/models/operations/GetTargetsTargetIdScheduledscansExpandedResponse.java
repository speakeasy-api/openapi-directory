package openapisdk.models.operations;



public class GetTargetsTargetIdScheduledscansExpandedResponse {
    public String contentType;
    public GetTargetsTargetIdScheduledscansExpandedResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetTargetsTargetIdScheduledscansExpandedResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetTargetsTargetIdScheduledscansExpanded200ApplicationJson getTargetsTargetIdScheduledscansExpanded200ApplicationJSONObject;
    public GetTargetsTargetIdScheduledscansExpandedResponse withGetTargetsTargetIdScheduledscansExpanded200ApplicationJsonObject(GetTargetsTargetIdScheduledscansExpanded200ApplicationJson getTargetsTargetIdScheduledscansExpanded200ApplicationJSONObject) {
        this.getTargetsTargetIdScheduledscansExpanded200ApplicationJSONObject = getTargetsTargetIdScheduledscansExpanded200ApplicationJSONObject;
        return this;
    }
    public GetTargetsTargetIdScheduledscansExpanded404ApplicationJson getTargetsTargetIdScheduledscansExpanded404ApplicationJSONObject;
    public GetTargetsTargetIdScheduledscansExpandedResponse withGetTargetsTargetIdScheduledscansExpanded404ApplicationJsonObject(GetTargetsTargetIdScheduledscansExpanded404ApplicationJson getTargetsTargetIdScheduledscansExpanded404ApplicationJSONObject) {
        this.getTargetsTargetIdScheduledscansExpanded404ApplicationJSONObject = getTargetsTargetIdScheduledscansExpanded404ApplicationJSONObject;
        return this;
    }
}