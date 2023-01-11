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
    public Object getEvents200ApplicationJSONAny;
    public GetEventsResponse withGetEvents200ApplicationJsonAny(Object getEvents200ApplicationJSONAny) {
        this.getEvents200ApplicationJSONAny = getEvents200ApplicationJSONAny;
        return this;
    }
}