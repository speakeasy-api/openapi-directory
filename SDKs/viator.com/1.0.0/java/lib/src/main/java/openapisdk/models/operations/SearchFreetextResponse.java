package openapisdk.models.operations;



public class SearchFreetextResponse {
    public String contentType;
    public SearchFreetextResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public SearchFreetextResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public SearchFreetext200ApplicationJson searchFreetext200ApplicationJSONObject;
    public SearchFreetextResponse withSearchFreetext200ApplicationJsonObject(SearchFreetext200ApplicationJson searchFreetext200ApplicationJSONObject) {
        this.searchFreetext200ApplicationJSONObject = searchFreetext200ApplicationJSONObject;
        return this;
    }
}