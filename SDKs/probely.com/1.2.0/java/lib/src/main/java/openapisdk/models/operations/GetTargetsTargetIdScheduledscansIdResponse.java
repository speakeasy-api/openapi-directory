package openapisdk.models.operations;



public class GetTargetsTargetIdScheduledscansIdResponse {
    public String contentType;
    public GetTargetsTargetIdScheduledscansIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Scheduled scheduled;
    public GetTargetsTargetIdScheduledscansIdResponse withScheduled(openapisdk.models.shared.Scheduled scheduled) {
        this.scheduled = scheduled;
        return this;
    }
    public Long statusCode;
    public GetTargetsTargetIdScheduledscansIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetTargetsTargetIdScheduledscansId401ApplicationJson getTargetsTargetIdScheduledscansId401ApplicationJSONObject;
    public GetTargetsTargetIdScheduledscansIdResponse withGetTargetsTargetIdScheduledscansId401ApplicationJsonObject(GetTargetsTargetIdScheduledscansId401ApplicationJson getTargetsTargetIdScheduledscansId401ApplicationJSONObject) {
        this.getTargetsTargetIdScheduledscansId401ApplicationJSONObject = getTargetsTargetIdScheduledscansId401ApplicationJSONObject;
        return this;
    }
    public GetTargetsTargetIdScheduledscansId404ApplicationJson getTargetsTargetIdScheduledscansId404ApplicationJSONObject;
    public GetTargetsTargetIdScheduledscansIdResponse withGetTargetsTargetIdScheduledscansId404ApplicationJsonObject(GetTargetsTargetIdScheduledscansId404ApplicationJson getTargetsTargetIdScheduledscansId404ApplicationJSONObject) {
        this.getTargetsTargetIdScheduledscansId404ApplicationJSONObject = getTargetsTargetIdScheduledscansId404ApplicationJSONObject;
        return this;
    }
}