package openapisdk.models.operations;



public class DeleteEventResponse {
    public String contentType;
    public DeleteEventResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DeleteEventResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> deleteEvent200ApplicationJSONObject;
    public DeleteEventResponse withDeleteEvent200ApplicationJsonObject(java.util.Map<String, Object> deleteEvent200ApplicationJSONObject) {
        this.deleteEvent200ApplicationJSONObject = deleteEvent200ApplicationJSONObject;
        return this;
    }
}