package openapisdk.models.operations;



public class CreateShopScriptTagResponse {
    public String contentType;
    public CreateShopScriptTagResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateShopScriptTagResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public CreateShopScriptTag200ApplicationJson createShopScriptTag200ApplicationJSONObject;
    public CreateShopScriptTagResponse withCreateShopScriptTag200ApplicationJsonObject(CreateShopScriptTag200ApplicationJson createShopScriptTag200ApplicationJSONObject) {
        this.createShopScriptTag200ApplicationJSONObject = createShopScriptTag200ApplicationJSONObject;
        return this;
    }
}