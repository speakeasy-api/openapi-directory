package openapisdk.models.operations;



public class GetEventsIdResponse {
    public String contentType;
    public GetEventsIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Event event;
    public GetEventsIdResponse withEvent(openapisdk.models.shared.Event event) {
        this.event = event;
        return this;
    }
    public Long statusCode;
    public GetEventsIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetEventsId401ApplicationJson getEventsId401ApplicationJSONObject;
    public GetEventsIdResponse withGetEventsId401ApplicationJsonObject(GetEventsId401ApplicationJson getEventsId401ApplicationJSONObject) {
        this.getEventsId401ApplicationJSONObject = getEventsId401ApplicationJSONObject;
        return this;
    }
    public GetEventsId403ApplicationJson getEventsId403ApplicationJSONObject;
    public GetEventsIdResponse withGetEventsId403ApplicationJsonObject(GetEventsId403ApplicationJson getEventsId403ApplicationJSONObject) {
        this.getEventsId403ApplicationJSONObject = getEventsId403ApplicationJSONObject;
        return this;
    }
    public GetEventsId404ApplicationJson getEventsId404ApplicationJSONObject;
    public GetEventsIdResponse withGetEventsId404ApplicationJsonObject(GetEventsId404ApplicationJson getEventsId404ApplicationJSONObject) {
        this.getEventsId404ApplicationJSONObject = getEventsId404ApplicationJSONObject;
        return this;
    }
}