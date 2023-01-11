package openapisdk.models.operations;



public class StoresListResponse {
    public String contentType;
    public StoresListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public StoresListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public StoresList200ApplicationJson storesList200ApplicationJSONObject;
    public StoresListResponse withStoresList200ApplicationJsonObject(StoresList200ApplicationJson storesList200ApplicationJSONObject) {
        this.storesList200ApplicationJSONObject = storesList200ApplicationJSONObject;
        return this;
    }
}