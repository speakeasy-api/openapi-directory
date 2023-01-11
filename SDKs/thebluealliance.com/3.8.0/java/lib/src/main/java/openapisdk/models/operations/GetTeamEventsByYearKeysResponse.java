package openapisdk.models.operations;



public class GetTeamEventsByYearKeysResponse {
    public String contentType;
    public GetTeamEventsByYearKeysResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetTeamEventsByYearKeysResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetTeamEventsByYearKeysResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public String[] getTeamEventsByYearKeys200ApplicationJSONStrings;
    public GetTeamEventsByYearKeysResponse withGetTeamEventsByYearKeys200ApplicationJsonStrings(String[] getTeamEventsByYearKeys200ApplicationJSONStrings) {
        this.getTeamEventsByYearKeys200ApplicationJSONStrings = getTeamEventsByYearKeys200ApplicationJSONStrings;
        return this;
    }
}