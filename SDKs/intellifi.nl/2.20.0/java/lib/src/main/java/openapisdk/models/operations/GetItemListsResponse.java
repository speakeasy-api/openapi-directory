package openapisdk.models.operations;



public class GetItemListsResponse {
    public String contentType;
    public GetItemListsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetItemListsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetItemLists200ApplicationJson getItemLists200ApplicationJSONObject;
    public GetItemListsResponse withGetItemLists200ApplicationJsonObject(GetItemLists200ApplicationJson getItemLists200ApplicationJSONObject) {
        this.getItemLists200ApplicationJSONObject = getItemLists200ApplicationJSONObject;
        return this;
    }
}