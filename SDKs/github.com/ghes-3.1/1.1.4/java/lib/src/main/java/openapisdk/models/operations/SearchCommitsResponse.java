package openapisdk.models.operations;



public class SearchCommitsResponse {
    public String contentType;
    public SearchCommitsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public SearchCommitsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public SearchCommits200ApplicationJson searchCommits200ApplicationJSONObject;
    public SearchCommitsResponse withSearchCommits200ApplicationJsonObject(SearchCommits200ApplicationJson searchCommits200ApplicationJSONObject) {
        this.searchCommits200ApplicationJSONObject = searchCommits200ApplicationJSONObject;
        return this;
    }
    public SearchCommits415ApplicationJson searchCommits415ApplicationJSONObject;
    public SearchCommitsResponse withSearchCommits415ApplicationJsonObject(SearchCommits415ApplicationJson searchCommits415ApplicationJSONObject) {
        this.searchCommits415ApplicationJSONObject = searchCommits415ApplicationJSONObject;
        return this;
    }
}