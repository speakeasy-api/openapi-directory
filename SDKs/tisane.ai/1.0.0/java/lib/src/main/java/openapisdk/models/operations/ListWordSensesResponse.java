package openapisdk.models.operations;



public class ListWordSensesResponse {
    public String contentType;
    public ListWordSensesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ListWordSensesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public ListWordSenses200ApplicationJson[] listWordSenses200ApplicationJSONObjects;
    public ListWordSensesResponse withListWordSenses200ApplicationJsonObjects(ListWordSenses200ApplicationJson[] listWordSenses200ApplicationJSONObjects) {
        this.listWordSenses200ApplicationJSONObjects = listWordSenses200ApplicationJSONObjects;
        return this;
    }
}