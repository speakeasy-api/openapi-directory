package openapisdk.models.operations;



public class GetDistrictEventsKeysResponse {
    public String contentType;
    public GetDistrictEventsKeysResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetDistrictEventsKeysResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetDistrictEventsKeysResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public String[] getDistrictEventsKeys200ApplicationJSONStrings;
    public GetDistrictEventsKeysResponse withGetDistrictEventsKeys200ApplicationJsonStrings(String[] getDistrictEventsKeys200ApplicationJSONStrings) {
        this.getDistrictEventsKeys200ApplicationJSONStrings = getDistrictEventsKeys200ApplicationJSONStrings;
        return this;
    }
}