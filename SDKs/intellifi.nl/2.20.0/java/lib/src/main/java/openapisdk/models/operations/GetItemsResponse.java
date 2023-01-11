package openapisdk.models.operations;



public class GetItemsResponse {
    public String contentType;
    public GetItemsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetItemsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetItems200ApplicationJson getItems200ApplicationJSONObject;
    public GetItemsResponse withGetItems200ApplicationJsonObject(GetItems200ApplicationJson getItems200ApplicationJSONObject) {
        this.getItems200ApplicationJSONObject = getItems200ApplicationJSONObject;
        return this;
    }
}