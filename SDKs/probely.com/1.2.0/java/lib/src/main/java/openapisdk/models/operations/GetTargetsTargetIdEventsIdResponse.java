package openapisdk.models.operations;



public class GetTargetsTargetIdEventsIdResponse {
    public String contentType;
    public GetTargetsTargetIdEventsIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Event event;
    public GetTargetsTargetIdEventsIdResponse withEvent(openapisdk.models.shared.Event event) {
        this.event = event;
        return this;
    }
    public Long statusCode;
    public GetTargetsTargetIdEventsIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetTargetsTargetIdEventsId401ApplicationJson getTargetsTargetIdEventsId401ApplicationJSONObject;
    public GetTargetsTargetIdEventsIdResponse withGetTargetsTargetIdEventsId401ApplicationJsonObject(GetTargetsTargetIdEventsId401ApplicationJson getTargetsTargetIdEventsId401ApplicationJSONObject) {
        this.getTargetsTargetIdEventsId401ApplicationJSONObject = getTargetsTargetIdEventsId401ApplicationJSONObject;
        return this;
    }
    public GetTargetsTargetIdEventsId403ApplicationJson getTargetsTargetIdEventsId403ApplicationJSONObject;
    public GetTargetsTargetIdEventsIdResponse withGetTargetsTargetIdEventsId403ApplicationJsonObject(GetTargetsTargetIdEventsId403ApplicationJson getTargetsTargetIdEventsId403ApplicationJSONObject) {
        this.getTargetsTargetIdEventsId403ApplicationJSONObject = getTargetsTargetIdEventsId403ApplicationJSONObject;
        return this;
    }
    public GetTargetsTargetIdEventsId404ApplicationJson getTargetsTargetIdEventsId404ApplicationJSONObject;
    public GetTargetsTargetIdEventsIdResponse withGetTargetsTargetIdEventsId404ApplicationJsonObject(GetTargetsTargetIdEventsId404ApplicationJson getTargetsTargetIdEventsId404ApplicationJSONObject) {
        this.getTargetsTargetIdEventsId404ApplicationJSONObject = getTargetsTargetIdEventsId404ApplicationJSONObject;
        return this;
    }
}