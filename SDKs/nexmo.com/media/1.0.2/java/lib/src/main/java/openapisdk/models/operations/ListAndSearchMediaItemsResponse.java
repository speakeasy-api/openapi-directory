package openapisdk.models.operations;



public class ListAndSearchMediaItemsResponse {
    public String contentType;
    public ListAndSearchMediaItemsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ListAndSearchMediaItemsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public ListAndSearchMediaItems200ApplicationJson listAndSearchMediaItems200ApplicationJSONObject;
    public ListAndSearchMediaItemsResponse withListAndSearchMediaItems200ApplicationJsonObject(ListAndSearchMediaItems200ApplicationJson listAndSearchMediaItems200ApplicationJSONObject) {
        this.listAndSearchMediaItems200ApplicationJSONObject = listAndSearchMediaItems200ApplicationJSONObject;
        return this;
    }
}