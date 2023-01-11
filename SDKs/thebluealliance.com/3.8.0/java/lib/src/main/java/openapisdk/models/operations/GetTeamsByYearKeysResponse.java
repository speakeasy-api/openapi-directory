package openapisdk.models.operations;



public class GetTeamsByYearKeysResponse {
    public String contentType;
    public GetTeamsByYearKeysResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetTeamsByYearKeysResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetTeamsByYearKeysResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public String[] getTeamsByYearKeys200ApplicationJSONStrings;
    public GetTeamsByYearKeysResponse withGetTeamsByYearKeys200ApplicationJsonStrings(String[] getTeamsByYearKeys200ApplicationJSONStrings) {
        this.getTeamsByYearKeys200ApplicationJSONStrings = getTeamsByYearKeys200ApplicationJSONStrings;
        return this;
    }
}