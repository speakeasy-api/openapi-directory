package openapisdk.models.operations;



public class GetTeamMatchesByYearKeysResponse {
    public String contentType;
    public GetTeamMatchesByYearKeysResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetTeamMatchesByYearKeysResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetTeamMatchesByYearKeysResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public String[] getTeamMatchesByYearKeys200ApplicationJSONStrings;
    public GetTeamMatchesByYearKeysResponse withGetTeamMatchesByYearKeys200ApplicationJsonStrings(String[] getTeamMatchesByYearKeys200ApplicationJSONStrings) {
        this.getTeamMatchesByYearKeys200ApplicationJSONStrings = getTeamMatchesByYearKeys200ApplicationJSONStrings;
        return this;
    }
}