package openapisdk.models.operations;



public class GetEventsByYearKeysResponse {
    public String contentType;
    public GetEventsByYearKeysResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetEventsByYearKeysResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetEventsByYearKeysResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public String[] getEventsByYearKeys200ApplicationJSONStrings;
    public GetEventsByYearKeysResponse withGetEventsByYearKeys200ApplicationJsonStrings(String[] getEventsByYearKeys200ApplicationJSONStrings) {
        this.getEventsByYearKeys200ApplicationJSONStrings = getEventsByYearKeys200ApplicationJSONStrings;
        return this;
    }
}