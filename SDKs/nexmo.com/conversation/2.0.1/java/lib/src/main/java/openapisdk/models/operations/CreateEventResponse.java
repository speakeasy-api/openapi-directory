package openapisdk.models.operations;



public class CreateEventResponse {
    public String contentType;
    public CreateEventResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateEventResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public CreateEvent201ApplicationJson createEvent201ApplicationJSONObject;
    public CreateEventResponse withCreateEvent201ApplicationJsonObject(CreateEvent201ApplicationJson createEvent201ApplicationJSONObject) {
        this.createEvent201ApplicationJSONObject = createEvent201ApplicationJSONObject;
        return this;
    }
}