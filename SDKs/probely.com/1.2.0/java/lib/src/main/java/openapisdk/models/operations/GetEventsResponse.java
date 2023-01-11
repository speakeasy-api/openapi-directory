package openapisdk.models.operations;



public class GetEventsResponse {
    public String contentType;
    public GetEventsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetEventsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetEvents200ApplicationJson getEvents200ApplicationJSONObject;
    public GetEventsResponse withGetEvents200ApplicationJsonObject(GetEvents200ApplicationJson getEvents200ApplicationJSONObject) {
        this.getEvents200ApplicationJSONObject = getEvents200ApplicationJSONObject;
        return this;
    }
    public GetEvents401ApplicationJson getEvents401ApplicationJSONObject;
    public GetEventsResponse withGetEvents401ApplicationJsonObject(GetEvents401ApplicationJson getEvents401ApplicationJSONObject) {
        this.getEvents401ApplicationJSONObject = getEvents401ApplicationJSONObject;
        return this;
    }
    public GetEvents403ApplicationJson getEvents403ApplicationJSONObject;
    public GetEventsResponse withGetEvents403ApplicationJsonObject(GetEvents403ApplicationJson getEvents403ApplicationJSONObject) {
        this.getEvents403ApplicationJSONObject = getEvents403ApplicationJSONObject;
        return this;
    }
}